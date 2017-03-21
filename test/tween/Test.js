import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';




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
        this.render();
    }


    initialize() {

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
        console.log(performance.now);
        this.drawTest(this.ctx);
        this.drawCircle(this.ctx);
        this.drawGrid(this.canvas, this.ctx);
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


    drawGrid(canvas, context) {
        context.save();

        var w = canvas.width;
        var h = canvas.height;

        for (var x = 0.5; x < w; x += 10) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, h);

            if ((x - 0.5) % 50 === 0) {
                context.strokeStyle = "#999999";
            } else {
                context.strokeStyle = "#dddddd";
            }

            context.stroke();
        }

        for (var y = 0.5; y < h; y += 10) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(w, y);

            if ((y - 0.5) % 50 === 0) {
                context.strokeStyle = "#999999";
            } else {
                context.strokeStyle = "#dddddd";
            }

            context.stroke();
        }
    }


    drawTest(context) {
        context.beginPath();
        context.lineTo(0.5, 0);
        context.lineTo(0.5, 600);
        context.strokeStyle = "red";
        context.stroke();

        context.beginPath();
        context.lineTo(10.5, 0);
        context.lineTo(10.5, 600);
        context.strokeStyle = "black";
        context.stroke();
    }


    drawCircle(context) {
        context.save();
        context.beginPath();
        context.arc(10, 10, 10, 0, 2 * Math.PI);
        context.strokeStyle = 'RED';
        context.stroke();
        context.restore();
    }


}