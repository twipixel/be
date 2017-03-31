const gulp = require('gulp'),
    clean = require('gulp-clean'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    vfs = require('vinyl-fs'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    header = require('gulp-header'),
    sourcemaps = require('gulp-sourcemaps'),
    preprocess = require('gulp-preprocess'),
    path = require('path'),
    watchify = require('watchify'),
    fs = require('fs'),
    chalk = require('chalk');

const defaults =
{
    cli: true,
    dest: 'dist',
    source: './src/',
    watch: false,
    minify: false,
    external: true,
    compress: false,
    transform: 'babelify',
    outputName: 'be',
    output: 'be.min.js',
    license: 'LICENSE',
};

gulp.task('clean', () => {
    return gulp
        .src('dist', {read: false, force: true})
        .pipe(clean());
});

gulp.task('dist', () => {

    const options = Object.assign(defaults, {

    });

    var bundler = browserify(
        {
            entries: options.source,
            bundleExternal: options.external,
            debug: true,
            cache: {},
            packageCache: {}
        }
    );

    var license, packageInfo;

    try {
        license = fs.readFileSync(options.license, 'utf8');
    }
    catch(e) {
        done(new Error('License file not found: ' + options.license));
        return;
    }

    try {
        packageInfo = require(path.resolve(process.cwd(), 'package.json'));
    }
    catch(e) {
        done(new Error('No package.json found in the current directory'));
        return;
    }

    function done(err) {
        if (err) {
            if (options.cli) {
                console.log(chalk.red('> ERROR: %s'), err.message);
            }
            else {
                console.error(err.message);
            }
        }
    }

    function rebundle() {
        return bundler
            .transform(options.transform, { presets: ['es2015'], compact:false })
            .bundle()
            .on('error', done)
            .pipe(source(options.output))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(preprocess({
                context: {
                    DEBUG: !options.compress,
                    RELEASE: !!options.compress,
                    VERSION: packageInfo.version
                }
            }))
            .pipe(gulpif(options.compress, uglify()))
            .pipe(header(license, {
                date: (new Date()).toUTCString().replace(/GMT/g, "UTC"),
                name: packageInfo.name,
                version: packageInfo.version,
                pkg: packageInfo,
                options: options
            }))
            .pipe(sourcemaps.write('./', { sourceRoot: '' }))
            .pipe(vfs.dest(options.dest))
            .on('end', done);
    }

    if (options.watch) {
        bundler.plugin(watchify);
    }

    bundler.on('update', rebundle);
    bundler.on('log', function(message) {
        if (options.cli) {
            console.log('>', message);
        }
        else {
            console.log(message);
        }
    });

    return rebundle();
});
