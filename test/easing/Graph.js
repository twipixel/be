


export default class Graph extends PIXI.Sprite
{
    constructor(width = 100, height = 100, easeIn = null, easeOut = null, easeInOut = null, easeOutIn = null)
    {
        super();
        this.initialize();

        this.graphWidth = width;
        this.graphHeight = height;

        this.easeIn = easeIn;
        this.easeOut = easeOut;
        this.easeInOut = easeInOut;
        this.easeOutIn = easeOutIn;
    }


    initialize()
    {
        this.graphics = this.g = new PIXI.Graphics();
        this.addChild(this.graphics);
    }


    draw()
    {
        this.g.clear();

        this.drawEasing(this.easeIn);
        this.drawEasing(this.easeOut);
        this.drawEasing(this.easeInOut);
        this.drawEasing(this.easeOutIn);
    }


    drawEasing(easing)
    {
        if (!easing) {
            return;
        }


        var target = new PIXI.Sprite();

        target.scaleX = 0;


        var tween = Be.tween(target, {scaleX: 1}, {scaleX:0}, 2, easing);

        // x가 time, y가 value

        tween.onUpdate = (value) => {
            // console.log('upate', 'value', target.value, 'time', tween.position, tween.time);
        };

        tween.onComplete = (value) => {
            // console.log('complete', 'value', target.value, 'time', tween.position, tween.time);
            console.log('scaleX', target.scaleX);
        };

        tween.play();
    }


    set value(value)
    {
        this._value = value;
    }


    get value()
    {
        return this._value;
    }


    set easeIn(value)
    {
        this._easeIn = value;
    }


    get easeIn()
    {
        return this._easeIn;
    }


    set easeOut(value)
    {
        this._easeOut = value;
    }


    get easeOut()
    {
        return this._easeOut;
    }


    set easeInOut(value)
    {
        this._easeInOut = value;
    }


    get easeInOut()
    {
        return this._easeInOut;
    }


    set easeOutIn(value)
    {
        this._easeOutIn = value;
    }


    get easeOutIn()
    {
        return this._easeOutIn;
    }
}