
const spaceY = 20;
const lineThickness = 1.5;
const lineColor = 0x009dec;
const bgColor = 0xFAFAFA;
const outLineColor = 0xE6E6E6;
const outLineThickness = 0.5;


export default class Graph extends PIXI.Container
{
    constructor(width = 100, height = 100, easing = null)
    {
        super();
        this.g = new PIXI.Graphics();
        this.addChild(this.g);

        this.value = 0;
        this.easing = easing;
        this.spaceY = spaceY * 2;
        this.graphWidth = width;
        this.graphHeight = height;
    }


    draw()
    {
        if (!this.easing) {
            return;
        }

        this.g.clear();
        this.drawOutLine();

        this.lastPoint = {x:0, y: this.graphHeight - spaceY};
        this.g.lineStyle(lineThickness, lineColor);
        this.g.moveTo(this.lastPoint.x, this.lastPoint.y);

        var tween = Be.tween(this, {value: 1}, {value: 0}, 1, this.easing);

        tween.onUpdate = () => {
            this.drawGraph(tween.position, this.value);
        };

        tween.onComplete = () => {
            this.drawGraph(tween.position, this.value);
        };

        tween.play();
    }


    drawOutLine()
    {
        console.log('drawOut');
        this.g.beginFill(bgColor);
        this.g.drawRect(0, 0, this.graphWidth, this.graphHeight);
        this.g.endFill();

        this.g.lineStyle(outLineThickness, outLineColor);
        this.g.moveTo(0, spaceY);
        this.g.lineTo(this.graphWidth, spaceY);
        this.g.moveTo(0, this.graphHeight - spaceY);
        this.g.lineTo(this.graphWidth, this.graphHeight - spaceY);
    }


    /**
     * x축이 time, y축이 value
     * @param time x축
     * @param value y축
     */
    drawGraph(time, value)
    {
        var x = time * this.graphWidth,
            y = (this.graphHeight - spaceY) - (value * this.realGraphHeight);

        this.g.moveTo(this.lastPoint.x, this.lastPoint.y );
        this.g.lineTo(x, y);

        this.lastPoint.x = x;
        this.lastPoint.y = y;
    }


    get realGraphHeight()
    {
        return this.graphHeight - this.spaceY;
    }
}