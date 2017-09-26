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


let control,
    from,
    to,
    current,
    last,
    path,
    vector,
    minion,
    minions = [],
    minionURL = '../../asset/image/m7.png';


export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.renderer = this.app.renderer;
        this.stage = this.app.stage;

        this.initialize();
        this.initializeGUI();
        this.render();
    }


    initialize()
    {
        this.render = this.render.bind(this);

        loadImage(minionURL)
            .then((image) => {
                this.startApplication(image);
            })
            .catch((e) => {console.log(e)});
    }


    startApplication(minionImage)
    {
        minion = new Image(minionImage);
        minion.width = 200;
        minion.scale.y = minion.scale.x;
        this.minionHalfWidth = minion.width / 2;
        this.minionHalfHeight = minion.height / 2;
        minion.x = this.minionHalfWidth;
        minion.y = this.minionHalfHeight;
        this.stage.addChild(minion);

        path = new PIXI.Graphics();
        control = new PIXI.Graphics();
        vector = new Vector();
        this.stage.addChild(path);
        this.stage.addChild(control);
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
        this.current = Vector.fromObject(minion);
        this.to = this.getTweenVector();
        this.last = this.current.clone();

        const time = this.config.time;
        const easing = this.config.selectedEasing;

        this.turnAround(this.current, this.to, time, easing);
        this.drawPath(this.current, this.to, time, easing);
    }


    turnAround(current, to, time, easing)
    {
        if (this.turnTween) {
            this.turnTween.stop();
        }

        const direction = current.subtract(to);

        this.turnTween = Be.to(minion, {rotation:direction.direction() + Math.PI / 2}, time, easing);

        this.turnTween.onComplete = () => {
            this.go(to, time, easing);
        };

        this.turnTween.play();
    }


    drawPath(current, to, time, easing)
    {
        path.clear();
        path.beginFill(0xff3300, 0.5);

        time = time + 1;
        var vector = new Vector(minion.x, minion.y);
        var tween = Be.to(vector, to, time, easing);

        tween.onUpdate = () => {
            console.log('vector[', vector.x, vector.y, ']');
            path.drawCircle(vector.x, vector.y, 3);
        };

        tween.play();
    }


    go(to, time, easing)
    {
        if (this.goTween) {
            this.goTween.stop();
        }

        this.goTween = Be.to(minion, to, time, easing);

        this.goTween.onUpdate = () => {
            this.onTween();
        };

        this.goTween.onComplete = () => {
            this.onTween();
        };

        this.goTween.play();
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