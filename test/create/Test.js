import {animation, cancelAnimationFrame, Easing, requestAnimationFrame} from "./../../external/lib/animation";
import Tweener from "../../src/tweener/Tweener";
//import requestAnimationFrame from '../../src/polyfill/requestAnimationFrame';
//import Ticker from '../../src/ticker/Ticker';
//import TickerListener from '../../src/tweener/core/ticker/TickerListener.js';
//import EnterFrameTicker from '../../src/tweener/tickers/EnterFrameTicker';
//import ClassRegistry from '../../src/tweener/core/utils/ClassRegistry';
//import UpdateFactory from '../../src/tweener/core/updaters/UpdaterFactory';



/**
 *
 */
export default class Test{

    constructor() {
        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x8BC34A});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.stage = this.app.stage;

        this.initialize();
        this.initializeGUI();
        this.render();
    }


    initialize() {
        //this.createTicker();
        //this.createSomething();
        //this.createTweener();

        this.testClass();
        //this.testCollection();

        this.testBit();
        this.testSkew();
        this.testFilter();
        this.testPoint();
    }


    createTicker() {
        console.log('ticker');

        this.ticker = new Ticker();

        this.ticker.add((ms) => {
            console.log(ms, getTimer());
        });

        this.ticker.start();
    }


    createSomething() {
        console.log('tickerListener');
        var tickerLisneneter = new TickerListener();
    }


    createTweener() {
        console.log('createTwenner');


        //var ticker = new EnterFrameTicker();
        //var classRegistry = new ClassRegistry();

        //var updaterFactory = new UpdateFactory();

        var obj = {
            x:0,
            y:0,
            //scale:{},
        };


        var tween = Tweener.tween(obj, {x:100}, {x:0}, 1);
        tween.onUpdate = () => {
            console.log('onUpdate', obj.x, obj.y);
        };
        tween.play();
    }


    testClass() {
        var n = new NoContructor();
        n.sayHello();
        console.log(n.getClass());

        const cp = new ColorPoint(25, 8, 'green');
        cp.toString();
        console.log(cp instanceof ColorPoint);
        console.log(cp instanceof Point);
        console.log(cp.getClass().name);
        console.log(cp.getSuper().name);

        const p = new Point(10, 10);
        console.log('******** Point.toString():', p.toString());

        const copyp = p.getClass();
        const copysuperp = p.getSuper();
        const insp = new copyp();

        console.log('class instance -----------------------');
        console.log(copyp.name);
        console.log(copysuperp.name);
        console.log(insp instanceof Point);
        console.log('class name -----------------------');
        console.log(Point.name);
        console.log(ColorPoint.name);
        console.log('getPrototypeOf with instance -----------------------');
        var prototype = Object.getPrototypeOf(cp);
        var prototype1 = Object.getPrototypeOf(prototype);
        var prototype2 = Object.getPrototypeOf(prototype1);
        var prototype3 = Object.getPrototypeOf(prototype2);
        console.log(prototype.constructor.name);
        console.log(prototype1.constructor.name);
        console.log(prototype2.constructor.name);
        console.log(prototype3 === null);
        console.log('getPrototypeOf with class -----------------------');
        var prototype = Object.getPrototypeOf(ColorPoint);
        var prototype1 = Object.getPrototypeOf(prototype);
        var prototype2 = Object.getPrototypeOf(prototype1);
        var prototype3 = Object.getPrototypeOf(prototype2);
        console.log(prototype.constructor.name);
        console.log(prototype1.constructor.name);
        console.log(prototype2.constructor.name);
        console.log(prototype3 === null);
    }


    testCollection() {
        console.log('testCollection');

        var dic = {};
        var col = Object.create(null);

        for(var prop in dic)
        {
            console.log(prop + ':' + dic[prop]);
        }


        for(var prop in col)
        {
            console.log(prop + ':' + col[prop]);
        }
    }


    testSkew() {
        var display = this.display = new PIXI.Container();
        var rect = new PIXI.Graphics();
        rect.beginFill(0xFF3300);
        rect.drawRect(0, 0, 100, 100);
        rect.endFill();
        display.addChild(rect);
        this.stage.addChild(display);
    }


    testBit() {

        var f = 0;
        //f |= 0x0001;
        f |= 0x0020;
        //f |= 0x0040;
        console.log('-------------------');
        console.log(0x0004 + 0x008 + 0x0010, 0x001c);
        console.log(0x0040 + 0x0080 + 0x0100, 0x01c0);
        console.log(0x0200 + 0x0400 + 0x0800, 0x0e00);
        console.log('-------------------');
    }


    testFilter() {
        var blurFilter = new PIXI.filters.BlurFilter();
        blurFilter.blur = 0;

        console.log('blurFilter:', blurFilter);

        var icon = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        this.stage.addChild(icon);

        icon.filters = [blurFilter];

        var tween = Tweener.tween(icon, {
            x: 100,
            _blurFilter:{
                blurX:20, blurY:20
            }
        });
        tween.onUpdate = () => {
            console.log(icon.x, icon.filters[0].blurX);
        };
        tween.play();
    }


    testPoint() {
        var point = new PIXI.Point();

        var tween = Tweener.tween(point, {y:200});
        tween.onUpdate = () => {
            console.log('point[%s, %s]', point.x, point.y);
        };
        tween.play();
    }



    initializeGUI() {
        this.gui = new dat.GUI();

        this.config = {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            skewX: 0,
            skewY: 0,
        };

        this.config.log = this.log.bind(this);
        this.config.plus = this.plus.bind(this);
        this.config.minus = this.minus.bind(this);
        this.config.renderStart = this.renderStart.bind(this);
        this.config.renderStop = this.renderStop.bind(this);
        this.config.animation = this.animation.bind(this);

        this.gui.add(this.config, 'x').min(0).max(200).step(1).onChange((value) => {
            this.config.x = value;
        });

        this.gui.add(this.config, 'y').min(0).max(200).step(1).onChange((value) => {
            this.config.y = value;
        });

        this.gui.add(this.config, 'scaleX').min(0).max(4).step(0.1).onChange((value) => {
            this.config.scaleX = value;
        });

        this.gui.add(this.config, 'scaleY').min(0).max(4).step(0.1).onChange((value) => {
            this.config.scaleY = value;
        });

        this.gui.add(this.config, 'rotation').min(0).max(360).step(1).onChange((value) => {
            this.config.rotation = value;
        });

        this.gui.add(this.config, 'skewX').min(0).max(1).step(0.1).onChange((value) => {
            this.config.skewX = value;

            console.log('this.display', this.display, value);

            if(this.display)
                this.display.skew.x = value;
        });

        this.gui.add(this.config, 'skewY').min(0).max(1).step(0.1).onChange((value) => {
            this.config.skewY = value;

            console.log('this.display', this.display, value);

            if(this.display)
                this.display.skew.y = value;
        });

        this.gui.add(this.config, 'log');
        this.gui.add(this.config, 'plus');
        this.gui.add(this.config, 'minus');
        this.gui.add(this.config, 'renderStart');
        this.gui.add(this.config, 'renderStop');
        this.gui.add(this.config, 'animation');
    }


    update(ms) {
        this.app.render(this.stage);
    }


    render(ms) {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }


    renderStart() {
        this.render();
    }


    renderStop() {
        cancelAnimationFrame(this.requestId);
    }


    animation() {
        animation(this, this.onAnimation, 60, Easing.easeOutQuad);
        // animation(null, this.onAnimation.bind(this), 60, Easing.easeOutQuad);
    }


    onAnimation(ease, step, currentStep) {
        console.log('ease: %s, step: %s, currentStep: %s', ease, step, currentStep);
    }


    onComplete() {
        console.log('onComplete');
    }


    plus() {
        this.config.rotation++;
        this.log();
    }


    minus() {
        this.config.rotation--;
        this.log();
    }


    log() {
        console.log('r', this.config.rotation);
    }


}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getClass() {
        return this.constructor;
    }

    getSuper() {
        return super.constructor;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}


class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    getClass() {
        return this.constructor;
    }

    getSuper() {
        return super.constructor;
    }

    toString() {
        return super.toString() + ' in ' + this.color;
    }
}


class NoContructor extends Point{
    sayHello() {
        console.log('say hello');
    }

}