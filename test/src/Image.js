

export default class Image extends PIXI.Container
{
    constructor(source)
    {
        super();

        var base = new PIXI.BaseTexture(source),
            texture = new PIXI.Texture(base);

        this.image = new PIXI.Sprite(texture);
        this.image.x = -this.image.width / 2;
        this.image.y = -this.image.height / 2;
        this.addChild(this.image);
    }
}