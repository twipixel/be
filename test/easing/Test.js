import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import Graph from "./Graph";
import GraphItem from "./GraphItem";

const list = [
    Sine.easeIn, Sine.easeOut, Sine.easeInOut, Sine.easeOutIn,
    Circular.easeIn, Circular.easeOut, Circular.easeInOut, Circular.easeOutIn,
    Cubic.easeIn, Cubic.easeOut, Cubic.easeInOut, Cubic.easeOutIn,
    Quadratic.easeIn, Quadratic.easeOut, Quadratic.easeInOut, Quadratic.easeOutIn,
    Quartic.easeIn, Quartic.easeOut, Quartic.easeInOut, Quartic.easeOutIn,
    Quintic.easeIn, Quintic.easeOut, Quintic.easeInOut, Quintic.easeOutIn,
    Exponential.easeIn, Exponential.easeOut, Exponential.easeInOut, Exponential.easeOutIn,
    Back.easeIn, Back.easeOut, Back.easeInOut, Back.easeOutIn,
    Bounce.easeIn, Bounce.easeOut, Bounce.easeInOut, Bounce.eaesOutIn,
    Elastic.easeIn, Elastic.easeOut, Elastic.easeInOut, Elastic.easeOutIn,
    Physical.uniform(), Physical.accelerate(), Physical.exponential()
];

export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(800, 600, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.stage = this.app.stage;
        
        this.render();

        setTimeout(this.initialize.bind(this), 1500);
    }


    initialize()
    {
        var item = new GraphItem('Elastic.easeOut', Elastic.easeOut, 4, 4);
        item.y = 20;
        this.stage.addChild(item);
    }


    update(ms)
    {
        this.app.render(this.stage);
    }


    render(ms)
    {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}

