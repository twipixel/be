export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(800, 600, {backgroundColor:0x8BC34A});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.stage = this.app.stage;

        this.initialize();
        this.initializeGUI();
        this.render();
    }

    initialize()
    {
        if (typeof Be === 'undefined' || Be === null) {
            console.log('Be Not Found');
        }
        else {
            console.log('Be Found');
        }
    }

    initializeGUI()
    {
        this.gui = new dat.GUI();
    }

    update(ms)
    {

    }

    render(ms)
    {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}