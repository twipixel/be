

export default class Test{

    constructor() {

        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x8BC34A});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.stage = this.app.stage;

        this.initialize();
        this.initializeGUI();
        this.render();
    }


    initialize() {

        console.log('**************************************');
        console.log(window);
        console.log('**************************************');
        console.log(window['Be']);
        console.log('**************************************');

        var obj = {x:0, y:0};
        var tween = Be.tween(obj, {x:100, y:100}, null, 1);
        tween.onUpdate = function() {
            console.log(obj.x, obj.y);
        };

        tween.play();

    }


    initializeGUI() {
        this.gui = new dat.GUI();
    }


    update(ms) {

    }


    render(ms) {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}