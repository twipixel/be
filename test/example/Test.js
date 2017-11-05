import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import Size from './../src/Size';
import Mouse from './../src/Mouse';
import Image from './../src/Image';
import Vector from './../src/Vector';
import Config from './../src/Config';
import {loadImage} from './../src/async';


let vector, controlMinion, minion, minions = [], minionURL = './../../asset/image/m7.png', minionImage;


export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.renderer = this.app.renderer;
        this.stage = this.app.stage;

        Mouse.renderer = this.renderer;
        Mouse.mouse = (Config.desktop) ? Mouse.DESKTOP_MOUSE : Mouse.MOBILE_MOUSE;

        // 미니온 보여지는 레이어
        this.minionLayer = new PIXI.Container();
        // 잔상이 보여지는 레이어
        this.afterimageLayer = new PIXI.Container();

        this.stage.addChild(this.afterimageLayer);
        this.stage.addChild(this.minionLayer);

        this.initialize();
        this.initializeGUI();
        this.render();
    }


    logMinion()
    {
        minion.visible = !minion.visible;
        console.log('minion[', minion.x, minion.y, ']');
    }


    initialize()
    {
        this.render = this.render.bind(this);

        controlMinion = new PIXI.Sprite.fromImage('./../../asset/image/m11.png');
        controlMinion.anchor = new PIXI.Point(0.5, 0.5);
        controlMinion.visible = false;
        controlMinion.texture.baseTexture.on('loaded', () => {
            controlMinion.height = 200;
            controlMinion.scale.x = controlMinion.scale.y;
            controlMinion.interactive = true;
            controlMinion.buttonMode = true;
            controlMinion.on('mousedown', this.onControlDown);
        });

        loadImage(minionURL)
            .then((image) => {
                minionImage = image;
                this.startApplication(image);
            })
            .catch((e) => {console.log(e)});

        this.onControlDown = this.onControlDown.bind(this);
        this.onControlMove = this.onControlMove.bind(this);
        this.onControlUp = this.onControlUp.bind(this);
    }


    startApplication()
    {
        minion = new Image(minionImage);
        this.setMinion(minion);
        this.minionLayer.addChild(minion);
        this.minionLayer.addChild(controlMinion);

        for (var i = 0; i < 100; i++) {
            this.getAfterimage(i);
        }

        vector = new Vector();
    }


    setMinion(minion)
    {
        minion.width = 200;
        minion.scale.y = minion.scale.x;
        this.minionHalfWidth = minion.width / 2;
        this.minionHalfHeight = minion.height / 2;
        minion.x = this.minionHalfWidth;
        minion.y = this.minionHalfHeight;
    }


    drawAfterimage(to, from, time, easing, completeCallback = null)
    {
        this.clearAfterimage();

        if (this.drawAfterTween) {
            this.drawAfterTween.stop();
        }

        this.drawAfterimageIndex = 0;

        const vector = Vector.fromObject(from);
        vector.alpha = 0.1;
        vector.rotation = from.rotation;

        this.drawAfterTween = Be.tween(vector, to, from, time, easing);

        this.drawAfterTween.onUpdate = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;
        };

        this.drawAfterTween.onComplete = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;

            if (completeCallback) {
                completeCallback.call();
            }
        };

        this.drawAfterTween.play();
    }


    drawBezierAfterimage(to, from, control, time, easing, completeCallback = null)
    {
        this.clearAfterimage();

        if (this.drawBezierAfterTween) {
            this.drawBezierAfterTween.stop();
        }

        this.drawAfterimageIndex = 0;

        const vector = Vector.fromObject(from);
        vector.alpha = 0.1;
        vector.rotation = from.rotation;

        this.drawBezierAfterTween = Be.bezier(vector, to, from, Vector.fromObject(controlMinion), time, easing);

        this.drawBezierAfterTween.onUpdate = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;
        };

        this.drawBezierAfterTween.onComplete = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;

            if (this.config.leaveAfterImage === false) {
                this.hideAfterImage(this.current.clone(), this.to.clone());
            }

            if (completeCallback) {
                completeCallback.call();
            }
        };

        this.drawBezierAfterTween.play();
    }


    drawPhysicalAfterimage(to, from, easing, completeCallback = null)
    {
        this.clearAfterimage();

        if (this.drawPhysicalAfterTween) {
            this.drawPhysicalAfterTween.stop();
        }

        this.drawAfterimageIndex = 0;

        const vector = Vector.fromObject(from);
        vector.alpha = 0.1;
        vector.rotation = from.rotation;

        this.drawPhysicalAfterTween = Be.physical(vector, to, from, easing);

        this.drawPhysicalAfterTween.onUpdate = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;
        };

        this.drawPhysicalAfterTween.onComplete = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;

            if (completeCallback) {
                completeCallback.call();
            }
        };

        this.drawPhysicalAfterTween.play();
    }


    hideAfterImage(from, to)
    {
        if (this.hideAfterTween) {
            this.hideAfterTween.stop();
        }

        this.hideAfterimageIndex = 0;

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , vector = new Vector(minion.x, minion.y);

        this.hideAfterTween = Be.to(vector, {x: to.x, y: to.y}, time, easing);
        this.hideAfterTween.onUpdate =
            this.hideAfterTween.onComplete = () => {
                minions[this.hideAfterimageIndex].visible = false;
                this.hideAfterimageIndex++;
            };

        this.hideAfterTween.play();
    }


    setAfterimage(index, props)
    {
        console.log('setAfterimage', index);
        const image = this.getAfterimage(index);
        image.x = props.x;
        image.y = props.y;
        image.alpha = props.alpha;
        image.rotation = props.rotation;
        image.visible = true;
    }


    clearAfterimage()
    {
        const total = minions.length;

        for (var i = 0; i < total; i++) {
            if (minions[i].visible === false) {
                break;
            }
            minions[i].visible = false;
        }
    }


    getAfterimage(index)
    {
        if (!minions[index]) {
            var afterimage = new Image(minionImage);
            afterimage.visible = false;
            this.setMinion(afterimage);
            this.afterimageLayer.addChild(afterimage);
            minions.push(afterimage);
        }

        return minions[index];
    }


    getRandomPosition()
    {
        return new Vector().randomize(
            {x: this.minionHalfWidth, y: this.minionHalfHeight},
            {x: Size.windowWidth - this.minionHalfWidth, y: Size.windowHeight - this.minionHalfHeight}
        );
    }


    initializeGUI()
    {
        this.gui = new dat.GUI();

        this.config = {
            time: 0.4,
            easingList: [
                Linear.easeNone, Linear.linear,
                Linear.easeIn, Linear.easeOut, Linear.easeOutIn, Linear.easeInOut,
                Sine.easeIn, Sine.easeOut, Sine.easeOutIn, Sine.easeInOut,
                Quadratic.easeIn, Quadratic.easeOut, Quadratic.easeOutIn, Quadratic.easeInOut,
                Cubic.easeIn, Cubic.easeOut, Cubic.easeOutIn, Cubic.easeInOut,
                Quartic.easeIn, Quartic.easeOut, Quartic.easeOutIn, Quartic.easeInOut,
                Quintic.easeIn, Quintic.easeOut, Quintic.easeOutIn, Quintic.easeInOut,
                Circular.easeIn, Circular.easeOut, Circular.easeOutIn, Circular.easeInOut,
                Exponential.easeIn, Exponential.easeOut, Exponential.easeOutIn, Exponential.easeInOut,
                Back.easeIn, Back.easeOut, Back.easeOutIn, Back.easeInOut,
                Elastic.easeIn, Elastic.easeOut, Elastic.easeOutIn, Elastic.easeInOut,
                Bounce.easeIn, Bounce.easeOut, Bounce.easeOutIn, Bounce.easeInOut
            ],
            easingNameList: [
                'Linear.easeNone', 'Linear.linear',
                'Linear.easeIn', 'Linear.easeOut', 'Linear.easeOutIn', 'Linear.easeInOut',
                'Sine.easeIn', 'Sine.easeOut', 'Sine.easeOutIn', 'Sine.easeInOut',
                'Quadratic.easeIn', 'Quadratic.easeOut', 'Quadratic.easeOutIn', 'Quadratic.easeInOut',
                'Cubic.easeIn', 'Cubic.easeOut', 'Cubic.easeOutIn', 'Cubic.easeInOut',
                'Quartic.easeIn', 'Quartic.easeOut', 'Quartic.easeOutIn', 'Quartic.easeInOut',
                'Quintic.easeIn', 'Quintic.easeOut', 'Quintic.easeOutIn', 'Quintic.easeInOut',
                'Circular.easeIn', 'Circular.easeOut', 'Circular.easeOutIn', 'Circular.easeInOut',
                'Exponential.easeIn', 'Exponential.easeOut', 'Exponential.easeOutIn', 'Exponential.easeInOut',
                'Back.easeIn', 'Back.easeOut', 'Back.easeOutIn', 'Back.easeInOut',
                'Elastic.easeIn', 'Elastic.easeOut', 'Elastic.easeOutIn', 'Elastic.easeInOut',
                'Bounce.easeIn', 'Bounce.easeOut', 'Bounce.easeOutIn', 'Bounce.easeInOut'
            ],
        };

        this.gui.add(this.config, 'time').min(0).step(0.1).max(4);
        const index = this.getEasingIndex('Back.easeOut');
        this.config.easing = this.config.easingNameList[index];
        this.config.selectedEasing = this.config.easingList[index];
        const easingControl = this.gui.add(this.config, 'easing', this.config.easingNameList);
        easingControl.onFinishChange((easingName) => {
            this.config.selectedEasing = this.config.easingList[this.getEasingIndex(easingName)];
        });

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


    getEasingIndex(easingName)
    {
        for (var i = 0; i < this.config.easingNameList.length; i++) {
            if (easingName === this.config.easingNameList[i]) {
                return i;
            }
        }
    }


    update(ms) {}


    render(ms)
    {
        this.update(ms);
        requestAnimationFrame(this.render);
    }


    tween()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.tween(minion, to, from, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneTo, cloneFrom, time, easing);
    }


    to()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.to(minion, to, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneTo, cloneFrom, time, easing);
    }


    from()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.from(minion, to, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneFrom, cloneTo, time, easing);
    }


    apply()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        const time = Number(this.config.time)
            , applyTime = time / 2
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from)
            , applyTo = Object.assign(to.clone(), to)
            , applyFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.to(minion, to, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneTo, cloneFrom, time, easing, () => {
            setTimeout(() => {Be.apply(minion, applyTo, applyFrom, time, applyTime, easing);}, 10);
        });

    }


    bezier()
    {
        this.stopTween();
        this.clearAfterimage();
        this.showControlMinion();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to)
            , control = Vector.fromObject(controlMinion);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.bezier(minion, to, from, control, time, easing);
        this.minionTween.play();

        this.drawBezierAfterimage(cloneTo, cloneFrom, control.clone(), time, easing);
    }


    bezierTo()
    {
        this.stopTween();
        this.clearAfterimage();
        this.showControlMinion();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to)
            , control = Vector.fromObject(controlMinion);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.bezierTo(minion, to, control, time, easing);
        this.minionTween.play();

        this.drawBezierAfterimage(cloneTo, cloneFrom, control.clone(), time, easing);
    }


    bezierFrom()
    {
        this.stopTween();
        this.clearAfterimage();
        this.showControlMinion();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to)
            , control = Vector.fromObject(controlMinion);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.minionTween = Be.bezierFrom(minion, to, control, time, easing);
        this.minionTween.play();

        this.drawBezierAfterimage(cloneFrom, cloneTo, control.clone(), time, easing);
    }


    /**
     * uniform(velocity = 10.0, frameRate = NaN)
     * accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
     * exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
     */
    physical()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        //아오 좀 도라  졸 귀찮
        const minion0 = minion
            , minion1 = this.getAfterimage(0)
            , minion2 = this.getAfterimage(1)
            , targetX = 600, y0 = 100, y1 = 280, y2 = 460;
        minion0.x = minion1.x = minion2.x = this.minionHalfWidth + 300;
        minion0.y = y0, minion1.y = y1, minion2.y = y2;
        minion0.rotation = minion1.rotation = minion2.rotation = 0;
        minion0.visible = minion1.visible = minion2.visible = true;

        const uniformTo = new Vector(targetX, y0)
            , uniformFrom = Vector.fromObject(minion0)
            , accelerateTo = new Vector(targetX, y1)
            , accelerateFrom = Vector.fromObject(minion1)
            , exponentialTo = new Vector(targetX, y2)
            , exponentialFrom = Vector.fromObject(minion2);

        this.uniform = Be.physical(minion0, uniformTo, uniformFrom, Physical.uniform(12));
        this.accelerate = Be.physical(minion1, accelerateTo, accelerateFrom, Physical.accelerate(2.0, 4.0));
        this.exponential = Be.physical(minion2, exponentialTo, exponentialFrom, Physical.exponential(0.2));

        this.uniform.play();
        this.accelerate.play();
        this.exponential.play();
    }


    /**
     * uniform(velocity = 10.0, frameRate = NaN)
     * accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
     * exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
     */
    physicalTo()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        const minion0 = minion
            , minion1 = this.getAfterimage(0)
            , minion2 = this.getAfterimage(1)
            , targetX = 600, y0 = 100, y1 = 280, y2 = 460;
        minion0.x = minion1.x = minion2.x = this.minionHalfWidth;
        minion0.y = y0, minion1.y = y1, minion2.y = y2;
        minion0.rotation = minion1.rotation = minion2.rotation = 0;
        minion0.visible = minion1.visible = minion2.visible = true;

        const uniformTo = new Vector(targetX, y0)
            , uniformFrom = Vector.fromObject(minion0)
            , accelerateTo = new Vector(targetX, y1)
            , accelerateFrom = Vector.fromObject(minion1)
            , exponentialTo = new Vector(targetX, y2)
            , exponentialFrom = Vector.fromObject(minion2);

        this.uniform = Be.physicalTo(minion0, uniformTo, Physical.uniform(12));
        this.accelerate = Be.physicalTo(minion1, accelerateTo, Physical.accelerate(2.0, 4.0));
        this.exponential = Be.physicalTo(minion2, exponentialTo, Physical.exponential(0.2));

        this.uniform.play();
        this.accelerate.play();
        this.exponential.play();
    }


    /**
     * uniform(velocity = 10.0, frameRate = NaN)
     * accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
     * exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
     */
    physicalFrom()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();

        const minion0 = minion
            , minion1 = this.getAfterimage(0)
            , minion2 = this.getAfterimage(1)
            , targetX = 600, y0 = 100, y1 = 280, y2 = 460;
        minion0.x = minion1.x = minion2.x = this.minionHalfWidth;
        minion0.y = y0, minion1.y = y1, minion2.y = y2;
        minion0.rotation = minion1.rotation = minion2.rotation = 0;
        minion0.visible = minion1.visible = minion2.visible = true;
        minion1.alpha = 0.5;
        minion2.alpha = 0.3;

        const uniformTo = new Vector(targetX, y0)
            , uniformFrom = Vector.fromObject(minion0)
            , accelerateTo = new Vector(targetX, y1)
            , accelerateFrom = Vector.fromObject(minion1)
            , exponentialTo = new Vector(targetX, y2)
            , exponentialFrom = Vector.fromObject(minion2);

        this.uniform = Be.physicalFrom(minion0, uniformTo, Physical.uniform(12));
        this.accelerate = Be.physicalFrom(minion1, accelerateTo, Physical.accelerate(2.0, 4.0));
        this.exponential = Be.physicalFrom(minion2, exponentialTo, Physical.exponential(0.2));

        this.uniform.play();
        this.accelerate.play();
        this.exponential.play();
    }


    physicalApply()
    {
        control.x = -10;
        control.y = -10;
        Be.physicalApply(minion, {x: 400, y: 100}, {x: 0, y: 0}, 0.5, Physical.uniform(12));
    }


    parallel()
    {
        path.clear();
        control.x = -10;
        control.y = -10;

        // 5개 이상일 경우 테스트
        var move = Be.tween(minion, {x: 400}, {x: 100}, 2, Expo.easeOut);
        var scale1 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var scale2 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var scale3 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var scale4 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var group = Be.parallel(move, scale1, scale2, scale3, scale4);
        group.play();
    }


    parallelTweens()
    {
        path.clear();
        control.x = -10;
        control.y = -10;

        // 5개 이상일 경우 테스트
        var move = Be.tween(minion, {x: 400}, {x: 100}, 2, Expo.easeOut);
        var scale1 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var scale2 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var scale3 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var scale4 = Be.tween(minion, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
        var tweens = [move, scale1, scale2, scale3, scale4];
        var group = Be.parallelTweens(tweens);
        group.play();
    }


    serial()
    {
        path.clear();
        control.x = -10;
        control.y = -10;

        // 5개 이상일 경우 테스트
        var time = 0.2;
        var move1 = Be.to(minion, {x: 400, y: 400}, time, Back.easeOut);
        var move2 = Be.to(minion, {x: 0, y: 0}, time, Exponential.easeOut);
        var move3 = Be.to(minion, {x: 300, y: 300}, time, Quartic.easeOut);
        var move4 = Be.to(minion, {x: 100, y: 100}, time, Quart.easeOut);
        var move5 = Be.to(minion, {x: 200, y: 200}, time, Quad.easeOut);
        var group = Be.serial(move1, move2, move3, move4, move5);
        group.play();
    }


    serialTweens()
    {
        path.clear();
        control.x = -10;
        control.y = -10;

        // 5개 이상일 경우 테스트
        var time = 0.2;
        var move1 = Be.to(minion, {x: 400, y: 400, scaleX: 2, scaleY: 2}, time, Back.easeOut);
        var move2 = Be.to(minion, {x: 0, y: 0}, time, Exponential.easeOut);
        var move3 = Be.to(minion, {x: 300, y: 300}, time, Quartic.easeOut);
        var move4 = Be.to(minion, {x: 100, y: 100}, time, Quart.easeOut);
        var move5 = Be.to(minion, {x: 200, y: 200}, time, Quad.easeOut);
        var tweens = [move1, move2, move3, move4, move5];
        var group = Be.serialTweens(tweens);
        group.play();
    }


    reverse()
    {
        path.clear();
        var tween = Be.tween(minion, {x: 500}, {x: 100}, 1, Quad.easeOut);
        var reverse = Be.reverse(tween, true);
        reverse.play();
    }


    repeat()
    {
        path.clear();
        var tween = Be.tween(minion, {x: 500}, {x: 100}, 1, Quad.easeOut);
        var repeat = Be.repeat(tween, 3);
        repeat.play();
    }


    scale()
    {
        path.clear();
        var tween = Be.tween(minion, {x: 500}, {x: 100}, 1, Quad.easeOut);
        var scale = Be.scale(tween, 3);
        scale.play();
    }


    slice()
    {
        path.clear();
        var tween = Be.tween(minion, {x: 500}, {x: 100}, 1, Quad.easeOut);
        var slice = Be.slice(tween, 0.1, 0.6);
        slice.play();
    }


    delay()
    {
        path.clear();
        var tween = Be.tween(minion, {x: 500}, {x: 100}, 1, Quad.easeOut);
        var delay = Be.delay(tween, 2, 1);
        delay.play();
    }


    addChildAction()
    {
        path.clear();
        var panda = new PIXI.Sprite.fromImage('../../asset/image/icon/panda.png');
        var addChildAction = Be.addChild(panda, this.stage);
        var to = Be.to(panda, {x: 400, y: 400, scaleX: 2, scaleY: 2, skewX: 2, skewY: 2}, 2, Bounce.easeOut);
        var removeFromParent = Be.removeFromParent(panda);
        var serial = Be.serial(addChildAction, to, removeFromParent);
        serial.play();
    }


    removeFromParent()
    {
        var p, w = this.canvas.width, h = this.canvas.height;

        for (var i = 0; i < 200; i++) {
            p = new PIXI.Graphics();
            p.beginFill(0xFFFFFF * Math.random());
            p.drawCircle(0, 0, Math.random() * 5 + 1);
            p.endFill();
            p.x = Math.random() * w;
            p.y = Math.random() * h;

            var t = Be.serial(
                Be.addChild(p, this.stage),
                Be.tween(p,
                    {
                        alpha: 0.8,
                        _blurFilter: {blurX: 0, blurY: 0}
                    },
                    {
                        _blurFilter: {blurX: 16, blurY: 16},
                        alpha: 0
                    },
                    3, null, Math.random() * 5),
                Be.tween(p, {alpha: 1}, {alpha: 0.8}, 2),
                Be.removeFromParent(p)
            );

            //t.stopOnComplete = false;
            t.play();
        }
    }


    func()
    {
        path.clear();

        var stage = this.stage,
            canvas = this.canvas,
            points = getPoint(100);

        var to = Be.func(toPoint, [points]);
        var scale = Be.func(scalePoint, [points]);
        var skew = Be.func(skewPoint, [points]);
        var serial = Be.serialTweens([to, scale, skew]);
        serial.play();

        function toPoint(list) {
            var l = list.length;
            for (var i = 0; i < l; i++) {
                Be.to(list[i], {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                }, 0.5 + Math.random() * 1, Bounce.easeOut).play();
            }
        }

        function scalePoint(list) {
            var l = list.length;
            for (var i = 0; i < l; i++) {
                Be.to(list[i], {
                    scaleX: Math.random() * 3,
                    scaleY: Math.random() * 3,
                }, 0.5 + Math.random() * 1, Elastic.easeOut).play();
            }
        }

        function skewPoint(list) {
            var l = list.length;
            for (var i = 0; i < l; i++) {
                Be.to(list[i], {
                    skewX: Math.random() * 10,
                    skewY: Math.random() * 10,
                }, 0.5 + Math.random() * 1, Back.easeOut).play();
            }
        }

        function getPoint(num) {
            var list = [];
            for (var i = 0; i < num; i++) {
                var point = new PIXI.Graphics();
                point.beginFill(0xFFFFFF * Math.random());
                point.drawRect(0, 0, 5, 5);
                point.endFill();
                stage.addChild(point);
                list.push(point);
            }
            return list;
        }
    }


    resize()
    {
        const height = Size.windowHeight;
        const width = Size.windowWidth;

        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        this.renderer.resize(width, height);
    }


    stopTween()
    {
        if (this.minionTween) {
            this.minionTween.stop();
        }

        if (this.bezierTween) {
            this.bezierTween.stop();
        }

        if (this.drawAfterTween) {
            this.drawAfterTween.stop();
        }

        if (this.drawBezierAfterTween) {
            this.drawBezierAfterTween.stop();
        }

        if (this.uniform) {
            this.uniform.stop();
            this.accelerate.stop();
            this.exponential.stop();
        }
    }


    showControlMinion()
    {
        if (controlMinion.visible === false) {
            controlMinion.visible = true;
            controlMinion.x = Size.windowCenterX;
            controlMinion.y = Size.windowCenterY;
        }
    }


    hideControlMinion()
    {
        if (controlMinion.visible === true) {
            controlMinion.x = -1000;
            controlMinion.y = -1000;
            controlMinion.visible = false;
        }
    }


    onControlDown(event)
    {
        this.prevPoint = Mouse.global.clone();

        controlMinion.off('mousedown', this.onControlDown);
        window.addEventListener('mousemove', this.onControlMove);
        window.addEventListener('mouseup', this.onControlUp);
    }


    onControlMove(event)
    {
        const dx = Mouse.global.x - this.prevPoint.x
            , dy = Mouse.global.y - this.prevPoint.y;

        controlMinion.x += dx;
        controlMinion.y += dy;

        this.prevPoint = Mouse.global.clone();
    }


    onControlUp(event)
    {
        controlMinion.on('mousedown', this.onControlDown);
        window.removeEventListener('mousemove', this.onControlMove);
        window.removeEventListener('mouseup', this.onControlUp);
    }
}

