import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

import Graph from "./Graph";
import GraphItem from "./GraphItem";

const list = [];

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
        console.log('item[', item.width, item.height, ']');
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

