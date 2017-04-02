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
        console.log('**************************************');
        if (typeof Be === 'undefined' || Be === null) {
            console.log('Be Not Found');
        }
        else {
            console.log('Be Found');
        }
        console.log('**************************************');

        var point = new PIXI.Graphics();
        point.beginFill(Math.random() * 0xFFFFFF);
        point.drawRect(0, 0, 5, 5);
        point.endFill();
        this.stage.addChild(point);

        var tween = Be.to(point, {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            width: 3 + Math.random() * 10,
            height: 3 + Math.random() * 10
        }, 3, Quintic.easeOut);

        Be.delay(tween, 2).play();
    }

    testTween()
    {
        var obj = {x:0, y:0};
        var tween = Be.tween(obj, {x:100, y:100}, null, 1);
        tween.onUpdate = function() {
            console.log(obj.x, obj.y);
        };
        tween.play();
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