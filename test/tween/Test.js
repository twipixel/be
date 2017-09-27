import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import Size from './Size';
import Image from './Image';
import Vector from './Vector';
import {loadImage} from './async';


let control, path, vector, minion, minions = [], minionURL = '../../asset/image/m7.png', minionImage;


export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.renderer = this.app.renderer;
        this.stage = this.app.stage;

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

        loadImage(minionURL)
            .then((image) => {
                minionImage = image;
                this.startApplication(image);
            })
            .catch((e) => {console.log(e)});
    }


    startApplication()
    {
        minion = new Image(minionImage);
        this.setMinion(minion);
        this.minionLayer.addChild(minion);

        for (var i = 0; i < 100; i++) {
            this.getAfterimage(i);
        }

        path = new PIXI.Graphics();
        control = new PIXI.Graphics();
        vector = new Vector();
        this.afterimageLayer.addChild(path);
        this.afterimageLayer.addChild(control);
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
            easingList: [
                Sine.easeIn, Sine.easeOut, Sine.easeInOut, Sine.easeOutIn,
                Quadratic.easeIn, Quadratic.easeOut, Quadratic.easeInOut, Quadratic.easeOutIn,
                Cubic.easeIn, Cubic.easeOut, Cubic.easeInOut, Cubic.easeOutIn,
                Quartic.easeIn, Quartic.easeOut, Quartic.easeInOut, Quartic.easeOutIn,
                Quintic.easeIn, Quintic.easeOut, Quintic.easeInOut, Quintic.easeOutIn,
                Circular.easeIn, Circular.easeOut, Circular.easeInOut, Circular.easeOutIn,
                Exponential.easeIn, Exponential.easeOut, Exponential.easeInOut, Exponential.easeOutIn,
                Back.easeIn, Back.easeOut, Back.easeInOut, Back.easeOutIn,
                Elastic.easeIn, Elastic.easeOut, Elastic.easeInOut, Elastic.easeOutIn,
                Bounce.easeIn, Bounce.easeOut, Bounce.easeInOut, Bounce.easeOutIn
            ],
            easingNameList: [
                'Sine.easeIn', 'Sine.easeOut', 'Sine.easeInOut', 'Sine.easeOutIn',
                'Quadratic.easeIn', 'Quadratic.easeOut', 'Quadratic.easeInOut', 'Quadratic.easeOutIn',
                'Cubic.easeIn', 'Cubic.easeOut', 'Cubic.easeInOut', 'Cubic.easeOutIn',
                'Quartic.easeIn', 'Quartic.easeOut', 'Quartic.easeInOut', 'Quartic.easeOutIn',
                'Quintic.easeIn', 'Quintic.easeOut', 'Quintic.easeInOut', 'Quintic.easeOutIn',
                'Circular.easeIn', 'Circular.easeOut', 'Circular.easeInOut', 'Circular.easeOutIn',
                'Exponential.easeIn', 'Exponential.easeOut', 'Exponential.easeInOut', 'Exponential.easeOutIn',
                'Back.easeIn', 'Back.easeOut', 'Back.easeInOut', 'Back.easeOutIn',
                'Elastic.easeIn', 'Elastic.easeOut', 'Elastic.easeInOut', 'Elastic.easeOutIn',
                'Bounce.easeIn', 'Bounce.easeOut', 'Bounce.easeInOut', 'Bounce.easeOutIn'
            ]
        };

        const index = this.getEasingIndex('Back.easeOut');
        this.config.easing = this.config.easingNameList[index];
        this.config.selectedEasing = this.config.easingList[index];

        // 기본 함수 테스트
        this.config.tween = this.tween.bind(this);
        this.config.bezier = this.bezier.bind(this);

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
        this.clearAfterimage();

        this.current = Vector.fromObject(minion);
        this.to = this.getTweenVector();
        this.last = this.current.clone();

        this.go(this.current.clone(), this.to.clone());
        this.drawAfterimage(this.current.clone(), this.to.clone());
        this.hideAfterImage(this.current.clone(), this.to.clone());
    }


    go(current, to)
    {
        if (this.goTween) {
            this.goTween.stop();
        }

        const time = Number(this.config.time)
            , easing = this.config.selectedEasing
            , direction = current.subtract(to);

        to.rotation = direction.direction() + Math.PI / 2;
        this.goTween = Be.to(minion, to, time, easing);
        this.goTween.onUpdate =
        this.goTween.onComplete = () => {
            this.onTween();
        };

        this.goTween.play();
    }


    drawAfterimage(current, to)
    {
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
            x: to.x, y: to.y, alpha: 0.15,
            rotation:direction.direction() + Math.PI / 2
        }, time, easing);

        this.drawAfterTween.onUpdate = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;
        };
        this.drawAfterTween.onComplete = () => {
            this.setAfterimage(this.drawAfterimageIndex, vector);
            this.drawAfterimageIndex++;
            this.hideAfterImage(this.current.clone(), this.to.clone());
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


    getTweenVector()
    {
        return new Vector().randomize(
            {x: this.minionHalfWidth, y: this.minionHalfHeight},
            {x: Size.windowWidth - this.minionHalfWidth, y: Size.windowHeight - this.minionHalfHeight}
        );
    }


    onTween()
    {
        this.last = Vector.fromObject(minion);
    }


    bezier()
    {
        path.clear();
        control.x = 0;
        control.y = 200;

        var tween = Be.bezier(minion, {x: 400, y: 400}, {x: minion.x, y: minion.y}, {
            x: control.x,
            y: control.y
        }, 2, Quad.easeOut);

        tween.onPlay = () => {
            console.log('onPlay');
        };
        tween.onUpdate = () => {
            console.log(`onUpdate (${minion.x}, ${minion.y} )`);
            path.beginFill(controlPointColor);
            path.drawRect(minion.x, minion.y, controlPointSize, controlPointSize);
            path.endFill();
        };
        tween.onComplete = () => {
            console.log('onComplete');
        };
        tween.play();
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
}