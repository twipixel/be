import Config from './Config';


const singleton = Symbol();
const singletonEnforcer = Symbol();


export default class Size
{
    ///////////////////////////////////////////////////////////////////////////////
    //
    // Static
    //
    /////////////////////////////////////////////////////////////////////////////////


    static get windowWidth()
    {
        if (Config.instance.macOS) {
            return window.innerWidth;
        }
        else {
            return window.innerWidth * window.devicePixelRatio;
        }
    }

    static get windowHeight()
    {
        if (Config.instance.macOS) {
            return window.innerHeight;
        }
        else {
            return window.innerHeight * window.devicePixelRatio;
        }
    }

    static get windowSize()
    {
        return new PIXI.Rectangle(0, 0, Size.windowWidth, Size.windowHeight);
    }

    static get windowCenterX()
    {
        return this.windowWidth / 2;
    }

    static get windowCenterY()
    {
        return this.windowHeight / 2;
    }

    /**
     * Chrome
     * Maximum height/width: 32,767 pixels
     * Maximum area: 268,435,456 pixels (e.g., 16,384 x 16,384)
     *
     * Firefox
     * Maximum height/width: 32,767 pixels
     * Maximum area: 472,907,776 pixels (e.g., 22,528 x 20,992)
     *
     * IE
     * Maximum height/width: 8,192 pixels
     * Maximum area: N/A
     *
     * IE Mobile
     * Maximum height/width: 4,096 pixels
     * Maximum area: N/A
     */
    static get canvasLimitWidth()
    {
        return 4096;
    }

    static get canvasLimitHeight()
    {
        return 4096;
    }



}