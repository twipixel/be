import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import global from '../../src/global/index';
import polyfill from '../../src/polyfill/index';
import Tweener from '../../src/tweener/Tweener';

import Back from '../../src/tweener/easing/Back';
import Bounce from '../../src/tweener/easing/Bounce';
import Circ from '../../src/tweener/easing/Circ';
import Circular from '../../src/tweener/easing/Circular';
import Cubic from '../../src/tweener/easing/Cubic';
import Custom from '../../src/tweener/easing/Custom';
import Elastic from '../../src/tweener/easing/Elastic';
import Expo from '../../src/tweener/easing/Expo';
import Exponential from '../../src/tweener/easing/Exponential';
import Linear from '../../src/tweener/easing/Linear';
import Physical from '../../src/tweener/easing/Physical';
import Quad from '../../src/tweener/easing/Quad';
import Quadratic from '../../src/tweener/easing/Quadratic';
import Quart from '../../src/tweener/easing/Quart';
import Quartic from '../../src/tweener/easing/Quartic';
import Quint from '../../src/tweener/easing/Quint';
import Quintic from '../../src/tweener/easing/Quintic';
import Sine from '../../src/tweener/easing/Sine';



/**
 *
 */
export default class Test{

    constructor() {

        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.canvas;
        this.context = this.ctx = this.app.renderer.context;
        this.stage = this.app.stage;

        console.log('canvas:', this.canvas, 'context:', this.context, 'stage:', this.stage);

        this.initialize();
        this.initializeGUI();
        this.render();
    }


    initialize() {
        this.icon = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        this.stage.addChild(this.icon);
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

        // 기본 함수 테스트
        this.config.tween = this.tween.bind(this);
        this.config.to = this.to.bind(this);
        this.config.from = this.from.bind(this);
        this.config.apply = this.apply.bind(this);
        this.config.bezier = this.bezier.bind(this);
        this.config.bezierTo = this.bezierTo.bind(this);
        this.config.bezierFrom = this.bezierFrom.bind(this);
        this.config.physical = this.physical.bind(this);
        this.config.physicalTo = this.physicalTo.bind(this);
        this.config.physicalFrom = this.physicalFrom.bind(this);
        this.config.physicalApply = this.physicalApply.bind(this);
        this.config.parallel = this.parallel.bind(this);
        this.config.parallelTweens = this.parallelTweens.bind(this);
        this.config.serial = this.serial.bind(this);
        this.config.serialTweens = this.serialTweens.bind(this);
        this.config.reverse = this.reverse.bind(this);
        this.config.repeat = this.repeat.bind(this);
        this.config.scale = this.scale.bind(this);
        this.config.slice = this.slice.bind(this);
        this.config.delay = this.delay.bind(this);

        this.gui.add(this.config, 'tween');
        this.gui.add(this.config, 'to');
        this.gui.add(this.config, 'from');
        this.gui.add(this.config, 'apply');
        this.gui.add(this.config, 'bezier');
        this.gui.add(this.config, 'bezierTo');
        this.gui.add(this.config, 'bezierFrom');
        this.gui.add(this.config, 'physical');
        this.gui.add(this.config, 'physicalTo');
        this.gui.add(this.config, 'physicalFrom');
        this.gui.add(this.config, 'physicalApply');
        this.gui.add(this.config, 'parallel');
        this.gui.add(this.config, 'parallelTweens');
        this.gui.add(this.config, 'serial');
        this.gui.add(this.config, 'serialTweens');
        this.gui.add(this.config, 'reverse');
        this.gui.add(this.config, 'repeat');
        this.gui.add(this.config, 'scale');
        this.gui.add(this.config, 'slice');
        this.gui.add(this.config, 'delay');
    }


    update(ms) {

    }


    render(ms) {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }




    tween() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    to() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    from() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    apply() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    bezier() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    bezierTo() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    bezierFrom() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    physical() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    physicalTo() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    physicalFrom() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    physicalApply() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    parallel() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    parallelTweens() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    serial() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    serialTweens() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    reverse() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    repeat() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    scale() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    slice() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }


    delay() {

        var tween = Tweener.bezier(this.icon, {x: 500, y: 160}, {x: 100, y: 160}, {x: 300, y: 200}, 2, Quad.easeOut);
        tween.play();
    }





}