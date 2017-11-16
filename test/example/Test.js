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
        this.resetMinion();
        this.minionLayer.addChild(minion);
        this.minionLayer.addChild(controlMinion);

        for (var i = 0; i < 100; i++) {
            this.getAfterimage(i);
        }

        vector = new Vector();
    }


    resetTween()
    {
        this.stopTween();
        this.clearAfterimage();
        this.hideControlMinion();
        this.resetMinionSize();
    }


    resetMinionSize()
    {
        // 기본 싸이즈가 아니면
        if (minion.width !== 200) {
            minion.width = 200;
            minion.scale.y = minion.scale.x;
        }
    }


    resetMinion(target = minion, justSize = false)
    {
        target.width = 200;
        target.scale.y = target.scale.x;
        this.minionHalfWidth = target.width / 2;
        this.minionHalfHeight = target.height / 2;

        if (!justSize) {
            target.x = this.minionHalfWidth;
            target.y = this.minionHalfHeight;
        }
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
            this.resetMinion(afterimage);
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
        // this.config.physicalApply = this.physicalApply.bind(this);
        this.config.parallel = this.parallel.bind(this);
        this.config.parallelTweens = this.parallelTweens.bind(this);
        this.config.serial = this.serial.bind(this);
        this.config.serialTweens = this.serialTweens.bind(this);
        this.config.reverse = this.reverse.bind(this);
        this.config.repeat = this.repeat.bind(this);
        this.config.scale = this.scale.bind(this);
        this.config.slice = this.slice.bind(this);
        this.config.delay = this.delay.bind(this);
        // this.config.addChild = this.addChildAction.bind(this);
        // this.config.removeFromParent = this.removeFromParent.bind(this);
        // this.config.func = this.func.bind(this);

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
        // this.gui.add(this.config, 'physicalApply');
        this.gui.add(this.config, 'parallel');
        this.gui.add(this.config, 'parallelTweens');
        this.gui.add(this.config, 'serial');
        this.gui.add(this.config, 'serialTweens');
        this.gui.add(this.config, 'reverse');
        this.gui.add(this.config, 'repeat');
        this.gui.add(this.config, 'scale');
        this.gui.add(this.config, 'slice');
        this.gui.add(this.config, 'delay');
        // this.gui.add(this.config, 'addChild');
        // this.gui.add(this.config, 'removeFromParent');
        // this.gui.add(this.config, 'func');
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
        this.resetTween();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.currentTween =
        this.minionTween = Be.tween(minion, to, from, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneTo, cloneFrom, time, easing);
    }


    to()
    {
        this.resetTween();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.currentTween =
        this.minionTween = Be.to(minion, to, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneTo, cloneFrom, time, easing);
    }


    from()
    {
        this.resetTween();

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);
        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const cloneTo = Object.assign(to.clone(), to)
            , cloneFrom = Object.assign(from.clone(), from);

        this.currentTween =
        this.minionTween = Be.from(minion, to, time, easing);
        this.minionTween.play();

        this.drawAfterimage(cloneFrom, cloneTo, time, easing);
    }


    apply()
    {
        this.resetTween();

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
        this.resetTween();

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

        this.currentTween =
        this.minionTween = Be.bezier(minion, to, from, control, time, easing);
        this.minionTween.play();

        this.drawBezierAfterimage(cloneTo, cloneFrom, control.clone(), time, easing);
    }


    bezierTo()
    {
        this.resetTween();

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

        this.currentTween =
        this.minionTween = Be.bezierTo(minion, to, control, time, easing);
        this.minionTween.play();

        this.drawBezierAfterimage(cloneTo, cloneFrom, control.clone(), time, easing);
    }


    bezierFrom()
    {
        this.resetTween();

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

        this.currentTween =
        this.minionTween = Be.bezierFrom(minion, to, control, time, easing);
        this.minionTween.play();

        this.drawBezierAfterimage(cloneFrom, cloneTo, control.clone(), time, easing);
    }


    /**
     * uniform(velocity = 10.0, frameRate = NaN)
     * accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
     * exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
     *
     * **************************************************************
     * accelerate, expenential는 to가 음수일 경우 제대로 동작하지 않습니다.
     * **************************************************************
     */
    physical()
    {
        this.resetTween();

        const targetX = 600
            , uniformSpeed = 12
            , minion0 = this.getAfterimage(0)
            , minion1 = this.getAfterimage(1)
            , minion2 = this.getAfterimage(2)
            , uniformTo = new Vector(targetX, 100)
            , uniformFrom = Vector.fromObject(minion)
            , accelerateTo = new Vector(targetX, 280)
            , accelerateFrom = Vector.fromObject(minion)
            , exponentialTo = new Vector(targetX, 460)
            , exponentialFrom = Vector.fromObject(minion);

        minion0.x = this.minionHalfWidth, minion0.y = this.minionHalfHeight, minion0.alpha = 1, minion0.visible = true,
        minion1.x = this.minionHalfWidth, minion1.y = this.minionHalfHeight, minion1.alpha = 1, minion1.visible = true,
        minion2.x = this.minionHalfWidth, minion2.y = this.minionHalfHeight, minion2.alpha = 1, minion2.visible = true;

        this.currentTween =
        this.uniform0 = Be.physical(minion0, uniformTo, uniformFrom, Physical.uniform(uniformSpeed));
        this.uniform1 = Be.physical(minion1, accelerateTo, accelerateFrom, Physical.uniform(uniformSpeed));
        this.uniform2 = Be.physical(minion2, exponentialTo, exponentialFrom, Physical.uniform(uniformSpeed));

        this.uniform0.play();
        this.uniform1.play();
        this.uniform2.play();
    }


    /**
     * x를 400에서 0으로 보내는게 안됩니다.
     * uniform(velocity = 10.0, frameRate = NaN)
     * accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
     * exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
     *
     * **************************************************************
     * accelerate, expenential는 to가 음수일 경우 제대로 동작하지 않습니다.
     * **************************************************************
     */
    physicalTo()
    {
        this.resetTween();

        const targetX = 600
            , uniformSpeed = 12
            , minion0 = this.getAfterimage(0)
            , minion1 = this.getAfterimage(1)
            , minion2 = this.getAfterimage(2)
            , uniformTo = new Vector(targetX, 100)
            , uniformFrom = Vector.fromObject(minion)
            , accelerateTo = new Vector(targetX, 280)
            , accelerateFrom = Vector.fromObject(minion)
            , exponentialTo = new Vector(targetX, 460)
            , exponentialFrom = Vector.fromObject(minion);

        minion0.x = this.minionHalfWidth, minion0.y = this.minionHalfHeight, minion0.alpha = 1, minion0.visible = true,
        minion1.x = this.minionHalfWidth, minion1.y = this.minionHalfHeight, minion1.alpha = 1, minion1.visible = true,
        minion2.x = this.minionHalfWidth, minion2.y = this.minionHalfHeight, minion2.alpha = 1, minion2.visible = true;

        this.currentTween =
        this.uniform0 = Be.physicalTo(minion0, uniformTo, Physical.uniform(uniformSpeed));
        this.uniform1 = Be.physicalTo(minion1, accelerateTo, Physical.uniform(uniformSpeed));
        this.uniform2 = Be.physicalTo(minion2, exponentialTo, Physical.uniform(uniformSpeed));

        this.uniform0.play();
        this.uniform1.play();
        this.uniform2.play();
    }


    /**
     * x를 400에서 0으로 보내는게 안됩니다.
     * uniform(velocity = 10.0, frameRate = NaN)
     * accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
     * exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
     *
     * **************************************************************
     * accelerate, expenential는 to가 음수일 경우 제대로 동작하지 않습니다.
     * **************************************************************
     */
    physicalFrom()
    {
        this.resetTween();

        const targetX = 600
            , uniformSpeed = 12
            , minion0 = this.getAfterimage(0)
            , minion1 = this.getAfterimage(1)
            , minion2 = this.getAfterimage(2)
            , uniformTo = new Vector(targetX, 100)
            , uniformFrom = {x: this.minionHalfWidth, y: this.minionHalfHeight}
            , accelerateTo = new Vector(targetX, 280)
            , accelerateFrom = {x: this.minionHalfWidth, y: this.minionHalfHeight}
            , exponentialTo = new Vector(targetX, 460)
            , exponentialFrom = {x: this.minionHalfWidth, y: this.minionHalfHeight};

        minion0.x = this.minionHalfWidth, minion0.y = this.minionHalfHeight, minion0.alpha = 1, minion0.visible = true,
        minion1.x = this.minionHalfWidth, minion1.y = this.minionHalfHeight, minion1.alpha = 1, minion1.visible = true,
        minion2.x = this.minionHalfWidth, minion2.y = this.minionHalfHeight, minion2.alpha = 1, minion2.visible = true;

        this.currentTween =
        this.uniform0 = Be.physicalFrom(minion0, uniformTo, Physical.uniform(uniformSpeed));
        this.uniform1 = Be.physicalFrom(minion1, accelerateTo, Physical.uniform(uniformSpeed));
        this.uniform2 = Be.physicalFrom(minion2, exponentialTo, Physical.uniform(uniformSpeed));

        this.uniform0.play();
        this.uniform1.play();
        this.uniform2.play();
    }


    physicalApply()
    {
        //Be.physicalApply(minion, {x: 400, y: 100}, {x: 0, y: 0}, 0.5, Physical.uniform(10));
    }


    parallel()
    {
        this.resetTween();

        const centerX = 300
            , centerY = 300
            , center = {x: centerX, y: centerY}
            , start = {x: this.minionHalfWidth, y: this.minionHalfHeight}
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);

        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const bezier = Be.bezier(minion, to, from, center, 1, Back.easeOut)
            , alpha = Be.tween(minion, {alpha: minion.alpha}, {alpha: 0}, 1, Linear.easeNone)
            , scale = Be.tween(minion, {scaleX: minion.scale.x, scaleY: minion.scale.y}, {scaleX: 1 + Math.random() * 3, scaleY: 1 + Math.random() * 3}, 1, Elastic.easeOut);

        this.currentTween =
        this.group = Be.parallel(bezier, alpha, scale);
        this.group.onComplete = () => {
            const tween = Be.to(minion, {alpha:1, width:200}, 0.5, Elastic.easeOut);
            tween.onUpdate = tween.onComplete = () => {minion.scale.y = minion.scale.x;};
            tween.play();
        };
        this.group.play();
    }


    parallelTweens()
    {
        this.resetTween();

        const centerX = 300
            , centerY = 300
            , center = {x: centerX, y: centerY}
            , start = {x: this.minionHalfWidth, y: this.minionHalfHeight}
            , to = this.getRandomPosition()
            , from = Vector.fromObject(minion)
            , direction = from.clone().subtract(to);

        from.rotation = minion.rotation;
        to.rotation = direction.direction();

        const bezier = Be.bezier(minion, to, from, center, 1, Back.easeOut)
            , alpha = Be.tween(minion, {alpha: minion.alpha}, {alpha: 0}, 1, Linear.easeNone)
            , scale = Be.tween(minion, {scaleX: minion.scale.x, scaleY: minion.scale.y}, {scaleX: 1 + Math.random() * 3, scaleY: 1 + Math.random() * 3}, 1, Elastic.easeOut)
            , tweens = [bezier, alpha, scale];

        this.currentTween =
        this.group = Be.parallelTweens(tweens);
        this.group.onComplete = () => {
            const tween = Be.to(minion, {alpha:1, width:200}, 0.5, Elastic.easeOut);
            tween.onUpdate = tween.onComplete = () => {minion.scale.y = minion.scale.x;};
            tween.play();
        };
        this.group.play();
    }


    serial()
    {
        this.resetTween();

        const startX = this.minionHalfWidth + 20
            , startY = this.minionHalfHeight - 20
            , centerX = 300 + 20
            , centerY = 300 + 10
            , endX = 600
            , endY = 600
            , lt = new Vector(startX, startY)
            , rt = new Vector(endX, startY)
            , rb = new Vector(endX, endY)
            , lb = new Vector(startX, endY)
            , center = new Vector(centerX, centerY)
            , time = 0.4
            , easing = Back.easeOut
            , from1 = Vector.fromObject(minion)
            , to1 = lt.clone()
            , from2 = to1.clone()
            , to2 = rt.clone()
            , from3 = to2.clone()
            , to3 = rb.clone()
            , from4 = to3.clone()
            , to4 = lb.clone()
            , from5 = to4.clone()
            , to5 = lt.clone()
            , from6 = to5.clone()
            , to6 = center.clone()
            , direction1 = from1.clone().subtract(to1)
            , direction2 = from2.clone().subtract(to2)
            , direction3 = from3.clone().subtract(to3)
            , direction4 = from4.clone().subtract(to4)
            , direction5 = from5.clone().subtract(to5)
            , direction6 = from6.clone().subtract(to6);

        from1.rotation = minion.rotation;
        to1.rotation = direction1.direction();
        from2.rotation = to1.rotation;
        to2.rotation = direction2.direction();
        from3.rotation = to2.rotation;
        to3.rotation = direction3.direction();
        from4.rotation = to3.rotation;
        to4.rotation = direction4.direction();
        from5.rotation = to4.rotation;
        to5.rotation = direction5.direction();
        from6.rotation = to5.rotation;
        to6.rotation = direction6.direction();

        const tween1 = Be.tween(minion, to1, from1, time, easing)
            , tween2 = Be.tween(minion, to2, from2, time, easing)
            , tween3 = Be.tween(minion, to3, from3, time, easing)
            , tween4 = Be.tween(minion, to4, from4, time, easing)
            , tween5 = Be.tween(minion, to5, from5, time, easing)
            , tween6 = Be.tween(minion, to6, from6, time, easing);

        this.currentTween =
        this.group = Be.serial(tween1, tween2, tween3, tween4, tween5, tween6);

        this.group.onPlay = () => {
            this.drawAfterimageIndex = 0;
        };

        this.group.onUpdateParams = [minion];

        this.group.onUpdate = (target) => {
            const afterImage = Vector.fromObject(target);
            afterImage.alpha = 0.1;
            afterImage.rotation = target.rotation;
            this.setAfterimage(this.drawAfterimageIndex, afterImage);
            this.drawAfterimageIndex++;
        };

        this.group.play();
    }


    serialTweens()
    {
        this.resetTween();

        const startX = this.minionHalfWidth + 20
            , startY = this.minionHalfHeight - 20
            , centerX = 300 + 20
            , centerY = 300 + 10
            , endX = 600
            , endY = 600
            , lt = new Vector(startX, startY)
            , rt = new Vector(endX, startY)
            , rb = new Vector(endX, endY)
            , lb = new Vector(startX, endY)
            , center = new Vector(centerX, centerY)
            , time = 0.4
            , easing = Back.easeOut
            , from1 = Vector.fromObject(minion)
            , to1 = center.clone()
            , from2 = to1.clone()
            , to2 = lt.clone()
            , from3 = to2.clone()
            , to3 = lb.clone()
            , from4 = to3.clone()
            , to4 = rb.clone()
            , from5 = to4.clone()
            , to5 = rt.clone()
            , from6 = to5.clone()
            , to6 = lt.clone()
            , direction1 = from1.clone().subtract(to1)
            , direction2 = from2.clone().subtract(to2)
            , direction3 = from3.clone().subtract(to3)
            , direction4 = from4.clone().subtract(to4)
            , direction5 = from5.clone().subtract(to5)
            , direction6 = from6.clone().subtract(to6);

        from1.rotation = minion.rotation;
        to1.rotation = direction1.direction();
        from2.rotation = to1.rotation;
        to2.rotation = direction2.direction();
        from3.rotation = to2.rotation;
        to3.rotation = direction3.direction();
        from4.rotation = to3.rotation;
        to4.rotation = direction4.direction();
        from5.rotation = to4.rotation;
        to5.rotation = direction5.direction();
        from6.rotation = to5.rotation;
        to6.rotation = direction6.direction();

        const tween1 = Be.tween(minion, to1, from1, time, easing)
            , tween2 = Be.tween(minion, to2, from2, time, easing)
            , tween3 = Be.tween(minion, to3, from3, time, easing)
            , tween4 = Be.tween(minion, to4, from4, time, easing)
            , tween5 = Be.tween(minion, to5, from5, time, easing)
            , tween6 = Be.tween(minion, to6, from6, time, easing)
            , tweens = [tween1, tween2, tween3, tween4, tween5, tween6];

        this.currentTween =
        this.group = Be.serialTweens(tweens);

        this.group.onPlay = () => {
            this.drawAfterimageIndex = 0;
        };

        this.group.onUpdateParams = [minion];

        this.group.onUpdate = (target) => {
            const afterImage = Vector.fromObject(target);
            afterImage.alpha = 0.1;
            afterImage.rotation = target.rotation;
            this.setAfterimage(this.drawAfterimageIndex, afterImage);
            this.drawAfterimageIndex++;
        };

        this.group.play();
    }


    reverse()
    {
        if (this.currentTween) {
            this.resetTween();
            this.currentTween =
                this.minionTween = Be.reverse(this.currentTween, true);
            this.minionTween.play();
        }
    }


    repeat()
    {
        if (this.currentTween) {
            this.resetTween();
            this.minionTween = Be.repeat(this.currentTween, 3);
            this.minionTween.play();
        }
    }


    scale()
    {
        if (this.currentTween) {
            this.resetTween();
            this.minionTween = Be.scale(this.currentTween, 3);
            this.minionTween.play();
        }
    }


    slice()
    {
        if (this.currentTween) {
            this.resetTween();
            this.minionTween = Be.slice(this.currentTween, 0.2, 0.8);
            this.minionTween.onComplete = () => {
                minion.width = 200;
                minion.scale.y = minion.scale.x;
            };
            this.minionTween.play();
        }
    }


    delay()
    {
        if (this.currentTween) {
            this.resetTween();
            this.minionTween = Be.delay(this.currentTween, 1, 0);
            this.minionTween.play();
        }
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

        if (this.uniform0) {
            this.uniform0.stop();
            this.uniform1.stop();
            this.uniform2.stop();
        }

        if (this.group) {
            this.group.stop();
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

