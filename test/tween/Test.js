import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../assets/lib/animation';

import Size from './../src/Size';
import Image from './../src/Image';
import Mouse from './../src/Mouse';
import Vector from './../src/Vector';
import Config from './../src/Config';
import {loadImage} from './../src/async';


let vector, controlMinion, minion, minions = [], minionURL = './../assets/image/m7.png', minionImage;


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


    initialize()
    {
        this.render = this.render.bind(this);

        controlMinion = new PIXI.Sprite.fromImage('./../assets/image/m11.png');
        controlMinion.anchor = new PIXI.Point(0.5, 0.5);
        controlMinion.visible = false;
        controlMinion.texture.baseTexture.on('loaded', () => {
            controlMinion.height = 200;
            controlMinion.scale.x = controlMinion.scale.y;
            controlMinion.interactive = true;
            controlMinion.buttonMode = true;
            controlMinion.on('mousedown', this.onControlDown);
        });

        this.isBezierTween = false;

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


    initializeGUI()
    {
        this.gui = new dat.GUI();

        this.config = {
            time: 0.4,
            leaveAfterImage: true,
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
            ]
        };

        const index = this.getEasingIndex('Back.easeOut');
        this.config.easing = this.config.easingNameList[index];
        this.config.selectedEasing = this.config.easingList[index];

        // 기본 함수 테스트
        this.config.tween = this.tween.bind(this);
        this.config.bezier = this.bezier.bind(this);

        this.gui.add(this.config, 'leaveAfterImage');
        this.gui.add(this.config, 'time').min(0).step(0.1).max(4);
        const easingControl = this.gui.add(this.config, 'easing', this.config.easingNameList);
        easingControl.onFinishChange((easingName) => {
            this.config.selectedEasing = this.config.easingList[this.getEasingIndex(easingName)];
        });

        this.gui.add(this.config, 'tween');
        this.gui.add(this.config, 'bezier');
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
        this.isBezierTween = false;

        this.current = Vector.fromObject(minion);
        this.to = this.getRandomPosition();

        this.startTween(this.current.clone(), this.to.clone());
        this.drawAfterimage(this.current.clone(), this.to.clone());
    }


    startTween(current, to)
    {
        if (this.goTween) {
            this.goTween.stop();
        }

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , direction = current.subtract(to);

        to.rotation = direction.direction() + Math.PI / 2;
        this.goTween = Be.to(minion, to, time, easing);
        this.goTween.play();
    }


    drawAfterimage(current, to)
    {
        this.clearAfterimage();

        if (this.drawAfterTween) {
            this.drawAfterTween.stop();
        }

        this.drawAfterimageIndex = 0;

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , direction = current.subtract(to)
            , vector = new Vector(minion.x, minion.y);

        vector.alpha = 0.01;
        vector.rotation = minion.rotation;

        this.drawAfterTween = Be.to(vector, {
            x: to.x, y: to.y, alpha: 0.1,
            rotation:direction.direction() + Math.PI / 2
        }, time, easing);

        this.drawAfterTween.onUpdate = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;
        };
        this.drawAfterTween.onComplete = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;

            if (this.config.leaveAfterImage === false) {
                this.hideAfterImage(this.current.clone(), this.to.clone());
            }
        };

        this.drawAfterTween.play();
    }


    hideAfterImage(current, to)
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
        var image = this.getAfterimage(index);
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
            var minion = minions[i];
            minion.visible = false;
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


    bezier()
    {
        this.current = Vector.fromObject(minion);
        this.to = this.getRandomPosition();

        if (this.isBezierTween === false) {
            controlMinion.x = Size.windowCenterX;
            controlMinion.y = Size.windowCenterY;
        }

        this.startBezier(this.current.clone(), this.to.clone());
        this.drawBezierAfterimage(this.current.clone(), this.to.clone());
        this.isBezierTween = true;
    }


    startBezier(current, to)
    {
        if (this.bezierTween) {
            this.bezierTween.stop();
        }

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , direction = current.subtract(to);

        to.rotation = direction.direction() + Math.PI / 2;
        this.bezierTween = Be.bezierTo(minion, to, {x: controlMinion.x, y: controlMinion.y}, time, easing);
        this.bezierTween.play();
    }


    drawBezierAfterimage(current, to)
    {
        this.clearAfterimage();

        if (this.drawBezierAfterTween) {
            this.drawBezierAfterTween.stop();
        }

        this.drawAfterimageIndex = 0;

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , direction = current.subtract(to)
            , vector = Vector.fromObject(minion);

        vector.alpha = 0.01;
        vector.rotation = minion.rotation;

        this.drawBezierAfterTween = Be.bezierTo(vector
            , {x: to.x, y: to.y, alpha: 0.1, rotation: direction.direction() + Math.PI / 2}
            , {x: controlMinion.x, y: controlMinion.y}
            , time, easing);

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
        };

        this.drawBezierAfterTween.play();
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



    set isBezierTween(value)
    {
        this._isBezierTween = value;
        controlMinion.visible = value;
    }


    get isBezierTween()
    {
        return this._isBezierTween;
    }
}