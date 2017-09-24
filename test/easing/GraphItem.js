import Graph from './Graph';


export default class GraphItem extends PIXI.Container
{
    constructor(easingName, easing, spaceX = 0, spaceY = 0)
    {
        super();

        var text = new PIXI.Text(easingName, {fontFamily : 'Helvetica, Arial, sans', fontSize: 13, fill : 0x000});
        text.x = spaceX;
        text.y = spaceY;
        this.addChild(text);

        var graph = new Graph(168, 100, easing);
        graph.x = spaceX;
        graph.y = spaceY + text.height + 8;
        this.addChild(graph);

        graph.draw();
    }
}