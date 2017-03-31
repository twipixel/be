import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import global from '../../src/global/';
import polyfill from '../../src/polyfill/';
import Be from '../../src/tweener/Be';
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


let path, icon, controlPoint, controlPointSize, controlPointColor;


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
        icon = this.icon = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        this.stage.addChild(this.icon);

        path = this.path = new PIXI.Graphics();
        this.stage.addChild(this.path);

        controlPointColor = this.controlPointColor = 0x4CAF50;
        controlPointSize = this.controlPointSize = 5;
        controlPoint = this.controlPoint = new PIXI.Graphics();
        this.controlPoint.beginFill(this.controlPointColor);
        this.controlPoint.drawRect(0, 0, this.controlPointSize, this.controlPointSize);
        this.controlPoint.endFill();
        this.stage.addChild(this.controlPoint);
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
        this.config.addChild = this.addChildAction.bind(this);
        this.config.removeFromParent = this.removeFromParent.bind(this);
        this.config.func = this.func.bind(this);

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
        this.gui.add(this.config, 'addChild');
        this.gui.add(this.config, 'removeFromParent');
        this.gui.add(this.config, 'func');
    }


    update(ms) {

    }


    render(ms) {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }




    tween() {
        path.clear();

        var tween = Be.tween(this.icon, {x:250, y:250}, {x:0}, 2, Quad.easeInOut);
        tween.play();
    }


    to() {
        path.clear();

        var tween = Be.to(this.icon, {x: 300, y: 250}, 2, Elastic.easeInOut);
        tween.play();
    }


    from() {
        path.clear();

        var tween = Be.from(this.icon, {x:800, y:600}, 2, Bounce.easeOut);
        tween.play();
    }


    apply() {
        path.clear();

        Be.apply(this.icon, {x:250, y:250}, {x:0}, 2, 0.5, Sine.easeOut);
    }


    bezier() {
        path.clear();

        controlPoint.x = 0;
        controlPoint.y = 200;

        var tween = Be.bezier(this.icon, {x: 400, y: 400}, {x:icon.x, y:icon.y}, {x:controlPoint.x, y:controlPoint.y}, 2, Quad.easeOut);

        tween.onPlay = () => { console.log('onPlay'); };
        tween.onUpdate = () => {
            console.log(`onUpdate (${icon.x}, ${icon.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
            path.endFill();
        };
        tween.onComplete = () => { console.log('onComplete'); };
        tween.play();
    }


    bezierTo() {
        path.clear();

        controlPoint.x = 0;
        controlPoint.y = 200;

        var tween = Be.bezierTo(this.icon, {x:400, y:0}, {x:controlPoint.x, y:controlPoint.y}, 2, Quadratic.easeIn);

        tween.onPlay = () => { console.log('onPlay');};
        tween.onUpdate = () => {
            console.log(`onUpdate (${icon.x}, ${icon.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
            path.endFill();

        };
        tween.onComplete = () => { console.log('onComplete'); };
        tween.play();
    }


    bezierFrom() {
        path.clear();

        controlPoint.x = 200;
        controlPoint.y = 0;

        var tween = Be.bezierTo(this.icon, {x:0, y:400}, {x:controlPoint.x, y:controlPoint.y}, 2, Quadratic.easeIn);

        tween.onPlay = () => { console.log('onPlay'); };
        tween.onUpdate = () => {
            console.log(`onUpdate (${icon.x}, ${icon.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
            path.endFill();

        };
        tween.onComplete = () => { console.log('onComplete'); };
        tween.play();
    }


    physical() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;

        var uniform = Be.physical(icon, {x:400, y:100}, {x:0, y:0}, Physical.uniform(12));

        uniform.onPlay = () => { console.log('onPlay'); };
        uniform.onUpdate = () => {
            console.log(`onUpdate (${icon.x}, ${icon.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
            path.endFill();

        };
        uniform.onComplete = () => { console.log('onComplete'); };
        uniform.play();

        var icon1 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        var icon2 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        this.stage.addChild(icon1);
        this.stage.addChild(icon2);

        var accelerate = Be.physical(icon1, {x:400, y:200}, {x:0, y:0}, Physical.accelerate(2.0, 4.0));
        accelerate.onComplete = () => {
            this.stage.removeChild(icon1);
            icon1.destroy();
        };
        accelerate.play();

        var exponential = Be.physical(icon2, {x:400, y:300}, {x:0, y:0}, Physical.exponential(0.2));
        exponential.onComplete = () => {
            this.stage.removeChild(icon2);
            icon2.destroy();
        };
        exponential.play();
    }


    physicalTo() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;

        icon.x = 0;
        icon.y = 0;

        var uniform = Be.physicalTo(icon, {x:400, y:100}, Physical.uniform(12));

        uniform.onPlay = () => { console.log('onPlay'); };
        uniform.onUpdate = () => {
            console.log(`onUpdate (${icon.x}, ${icon.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
            path.endFill();

        };
        uniform.onComplete = () => { console.log('onComplete'); };
        uniform.play();

        var icon1 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        var icon2 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        this.stage.addChild(icon1);
        this.stage.addChild(icon2);

        var accelerate = Be.physicalTo(icon1, {x:400, y:200}, Physical.accelerate(2.0, 4.0));
        accelerate.onComplete = () => {
            this.stage.removeChild(icon1);
            icon1.destroy();
        };
        accelerate.play();

        var exponential = Be.physicalTo(icon2, {x:400, y:300}, Physical.exponential(0.2));
        exponential.onComplete = () => {
            this.stage.removeChild(icon2);
            icon2.destroy();
        };
        exponential.play();
    }


    physicalFrom() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;

        var uniform = Be.physicalFrom(icon, {x:0, y:0}, Physical.uniform(12));

        uniform.onPlay = () => { console.log('onPlay'); };
        uniform.onUpdate = () => {
            console.log(`onUpdate (${icon.x}, ${icon.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
            path.endFill();

        };
        uniform.onComplete = () => { console.log('onComplete'); };
        uniform.play();

        var icon1 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        var icon2 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
        this.stage.addChild(icon1);
        this.stage.addChild(icon2);

        icon.x = 400;
        icon.y = 100;
        icon1.x = 400;
        icon1.y = 200;
        icon2.x = 400;
        icon2.y = 300;

        var accelerate = Be.physicalFrom(icon1, {x:0, y:0}, Physical.accelerate(2.0, 4.0));
        accelerate.onComplete = () => {
            this.stage.removeChild(icon1);
            icon1.destroy();
        };
        accelerate.play();

        var exponential = Be.physicalFrom(icon2, {x:0, y:0}, Physical.exponential(0.2));
        exponential.onComplete = () => {
            this.stage.removeChild(icon2);
            icon2.destroy();
        };
        exponential.play();
    }


    physicalApply() {
        controlPoint.x = -10;
        controlPoint.y = -10;

        Be.physicalApply(icon, {x:400, y:100}, {x:0, y:0}, 0.5, Physical.uniform(12));
    }


    parallel() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;


        // 5개 이상일 경우 테스트
        var move = Be.tween(icon, {x:400}, {x:100}, 2, Expo.easeOut);
        var scale1 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var scale2 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var scale3 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var scale4 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var group = Be.parallel(move, scale1, scale2, scale3, scale4);
        group.play();
    }


    parallelTweens() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;


        // 5개 이상일 경우 테스트
        var move = Be.tween(icon, {x:400}, {x:100}, 2, Expo.easeOut);
        var scale1 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var scale2 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var scale3 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);
        var scale4 = Be.tween(icon, {scaleX:1, scaleY:1}, {scaleX:0.2, scaleY:0.2}, 2, Elastic.easeOut);

        var tweens = [move, scale1, scale2, scale3, scale4];
        var group = Be.parallelTweens(tweens);
        group.play();
    }


    serial() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;


        // 5개 이상일 경우 테스트
        var time = 0.2;
        var move1 = Be.to(icon, {x:400, y:400}, time, Back.easeOut);
        var move2 = Be.to(icon, {x:0, y:0}, time, Exponential.easeOut);
        var move3 = Be.to(icon, {x:300, y:300}, time, Quartic.easeOut);
        var move4 = Be.to(icon, {x:100, y:100}, time, Quart.easeOut);
        var move5 = Be.to(icon, {x:200, y:200}, time, Quad.easeOut);
        var group = Be.serial(move1, move2, move3, move4, move5);
        group.play();
    }


    serialTweens() {
        path.clear();

        controlPoint.x = -10;
        controlPoint.y = -10;


        // 5개 이상일 경우 테스트
        var time = 0.2;
        var move1 = Be.to(icon, {x:400, y:400, scaleX:2, scaleY:2}, time, Back.easeOut);
        var move2 = Be.to(icon, {x:0, y:0}, time, Exponential.easeOut);
        var move3 = Be.to(icon, {x:300, y:300}, time, Quartic.easeOut);
        var move4 = Be.to(icon, {x:100, y:100}, time, Quart.easeOut);
        var move5 = Be.to(icon, {x:200, y:200}, time, Quad.easeOut);

        var tweens = [move1, move2, move3, move4, move5];
        var group = Be.serialTweens(tweens);
        group.play();
    }


    reverse() {
        path.clear();

        var tween = Be.tween(icon, {x:500}, {x:100}, 1, Quad.easeOut);
        var reverse = Be.reverse(tween, true);
        reverse.play();
    }


    repeat() {
        path.clear();

        var tween = Be.tween(icon, {x:500}, {x:100}, 1, Quad.easeOut);
        var repeat = Be.repeat(tween, 3);
        repeat.play();
    }


    scale() {
        path.clear();

        var tween = Be.tween(icon, {x:500}, {x:100}, 1, Quad.easeOut);
        var scale = Be.scale(tween, 3);
        scale.play();
    }


    slice() {
        path.clear();

        var tween = Be.tween(icon, {x:500}, {x:100}, 1, Quad.easeOut);
        var slice = Be.slice(tween, 0.1, 0.6);
        slice.play();
    }


    delay() {
        path.clear();

        var tween = Be.tween(icon, {x:500}, {x:100}, 1, Quad.easeOut);
        var delay = Be.delay(tween, 2, 1);
        delay.play();
    }


    addChildAction() {
        path.clear();

        let panda = new PIXI.Sprite.fromImage('../../asset/image/icon/panda.png');
        var addChildAction = Be.addChild(panda, this.stage);
        var to = Be.to(panda, {x:400, y:400, scaleX:2, scaleY:2, skewX:2, skewY:2}, 2, Bounce.easeOut);
        var removeFromParent = Be.removeFromParent(panda);
        var serial = Be.serial(addChildAction, to, removeFromParent);
        serial.play();
    }


    removeFromParent() {
        var p, w = this.canvas.width, h = this.canvas.height;

        for(var i = 0; i < 200; i++){
            p = new PIXI.Graphics();
            p.beginFill(0xFFFFFF*Math.random());
            p.drawCircle(0, 0, Math.random()*5+1);
            p.endFill();
            p.x = Math.random() * w;
            p.y = Math.random() * h;
            //var filter = new PIXI.filters.BlurFilter();
            //filter.blurX = 0;
            //filter.blurY = 0;
            //p.filters = [new PIXI.filters.BlurFilter()];

            var t = Be.serial(
                Be.addChild(p, this.stage),
                Be.tween(p,
                    {
                        alpha:0.8,
                        _blurFilter: {blurX: 0, blurY: 0}
                    },
                    {
                        _blurFilter: {blurX: 16, blurY: 16},
                        alpha:0
                    },
                    3, null, Math.random()*5),
                Be.tween(p, {alpha:1}, {alpha:0.8}, 2),
                Be.removeFromParent(p)
            );

            //t.stopOnComplete = false;

            t.play();
        }
    }


    func() {

    }


}