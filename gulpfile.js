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
    dest: './build/',
    source: './src/',
    watch: false,
    minify: false,
    compress: false,
    external: true,
    output: 'be.min.js',
    transform: 'babelify',
};

var license, packageInfo;

try {
    license = fs.readFileSync('LICENSE', 'utf8');
}
catch(e) {
    done(new Error('License file not found: LICENSE'));
    return;
}

try {
    packageInfo = require(path.resolve(process.cwd(), 'package.json'));
}
catch(e) {
    done(new Error('No package.json found in the current directory'));
    return;
}


gulp.task('clean:dist', () => {
    return gulp
        .src('dist', {read: false, force: true})
        .pipe(clean());
});

gulp.task('clean:build', () => {
    return gulp
        .src('build', {read: false, force: true})
        .pipe(clean());
});

gulp.task('build:development', () => {
    const options = Object.assign(defaults, {
        minify: false,
        compress: false,
        output:'be.js'
    });

    return rebundle(getBundler(options), options);
});

gulp.task('build:production', () => {
    const options = Object.assign(defaults, {
        minify: true,
        compress: true,
        output:'be.min.js'
    });

    return rebundle(getBundler(options), options);
});

gulp.task('build:both', ['build:development', 'build:production']);


function getBundler(options) {
    const bundler = browserify(
        {
            entries: options.source,
            bundleExternal: options.external,
            debug: true,
            cache: {},
            packageCache: {}
        }
    );

    if (options.watch) {
        bundler.plugin(watchify);
    }

    bundler.on('update', rebundle.bind(null, bundler, options));
    bundler.on('log', function(message) {
        if (options.cli) {
            console.log('>', message);
        }
        else {
            console.log(message);
        }
    });

    return bundler;
}

function rebundle(bundler, options) {

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

function done(err) {
    if (err) {
        console.log(chalk.red('> ERROR: %s'), err.message);
    }
}