import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import global from '../../src/global/getTimer';
//import requestAnimationFrame from '../../src/polyfill/requestAnimationFrame';
import Ticker from '../../src/ticker/Ticker';
import TickerListener from '../../src/tweener/core/ticker/TickerListener.js';


/**
 *
 */
export default class Test{

    constructor() {
        var canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        var context = canvas.getContext('2d');
        document.body.appendChild(canvas);

        this.canvas = canvas;
        this.context = this.ctx = context;

        this.initialize();
        this.initializeGUI();
        this.update();
        //this.render();
    }


    initialize() {
        //this.createTicker();
        this.createSomething();
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



    initializeGUI() {
        this.gui = new dat.GUI();

        this.config = {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0
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

        this.gui.add(this.config, 'log');
        this.gui.add(this.config, 'plus');
        this.gui.add(this.config, 'minus');
        this.gui.add(this.config, 'renderStart');
        this.gui.add(this.config, 'renderStop');
        this.gui.add(this.config, 'animation');
    }


    update(ms) {

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