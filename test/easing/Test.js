import Graph from "./Graph";


export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x8BC34A});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.stage = this.app.stage;

        this.initialize();
        this.initializeGUI();
        this.render();
    }


    initialize()
    {
        var graph = new Graph(100, 100, Quad.easeInOut);
        this.stage.addChild(graph);

        graph.draw();
    }


    initializeGUI()
    {
        // this.gui = new dat.GUI();
        // this.config = {};
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

