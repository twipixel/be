import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import Size from './../src/Size';
import Config from './../src/Config';
import Graph from "./Graph";
import GraphItem from "./GraphItem";


const list = [
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
    //Physical.uniform(), Physical.accelerate(), Physical.exponential()
];

const name = [
    'Sine.easeIn', 'Sine.easeOut', 'Sine.easeOutIn', 'Sine.easeInOut',
    'Quadratic.easeIn', 'Quadratic.easeOut', 'Quadratic.easeOutIn', 'Quadratic.easeInOut',
    'Cubic.easeIn', 'Cubic.easeOut', 'Cubic.easeOutIn', 'Cubic.easeInOut',
    'Quartic.easeIn', 'Quartic.easeOut', 'Quartic.easeOutIn', 'Quartic.easeInOut',
    'Quintic.easeIn', 'Quintic.easeOut', 'Quintic.easeOutIn', 'Quintic.easeInOut',
    'Circular.easeIn', 'Circular.easeOut', 'Circular.easeOutIn', 'Circular.easeInOut',
    'Exponential.easeIn', 'Exponential.easeOut', 'Exponential.easeOutIn', 'Exponential.easeInOut',
    'Back.easeIn', 'Back.easeOut', 'Back.easeOutIn', 'Back.easeInOut',
    'Elastic.easeIn', 'Elastic.easeOut', 'Elastic.easeOutIn', 'Elastic.easeInOut',
    'Bounce.easeIn', 'Bounce.easeOut', 'Bounce.easeOutIn', 'Bounce.easeInOut',
    'PhysicalUniform', 'PhysicalAccelerate', 'PhysicalExponential'
];


export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(800, 1400, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        //this.app = new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.renderer = this.app.renderer;
        this.stage = this.app.stage;
        
        this.render = this.render.bind(this);
        setTimeout(this.initialize.bind(this), 1000);

        //this.initialize();
    }


    initialize()
    {
        const startX = 10;
        const startY = 20;
        const itemWidth = 168 + 20;
        const itemHeight = 123 + 30;

        let count = 0, xPos = 0, yPos = 0;

        list.forEach((easing) => {
            var item = new GraphItem(name[count], easing, 4, 4);
            this.stage.addChild(item);

            xPos = count % 4;

            if (count !== 0 && xPos === 0) {
                yPos++;
            }

            item.x = startX + itemWidth * xPos;
            item.y = startY + itemHeight * yPos;
            count++;
        });
    }


    update(ms)
    {
        this.app.render(this.stage);
    }


    render(ms)
    {
        this.update(ms);
        requestAnimationFrame(this.render);
    }


    resize()
    {
        return;

        const height = Size.windowHeight;
        const width = Size.windowWidth;

        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        this.renderer.resize(width, height);
    }
}

