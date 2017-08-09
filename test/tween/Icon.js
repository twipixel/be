

export default class Icon extends PIXI.Container
{
    constructor(url)
    {
        super();
        this.className = 'Icon';
        this.image = new PIXI.Sprite.fromImage(url);
        this.addChild(this.image);
    }
}