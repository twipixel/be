

export default class Image extends PIXI.Container
{
    constructor(url)
    {
        super();
        this.className = 'Icon';
        this.image = new PIXI.Sprite.fromImage(url);
        this.image.texture.baseTexture.on('loaded', this.ready.bind(this));
        this.addChild(this.image);
    }


    ready()
    {
        this.emit('ready');
    }
}