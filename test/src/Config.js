const singleton = Symbol();
const singletonEnforcer = Symbol();


export default class Config extends PIXI.utils.EventEmitter
{
    //--------------------------------------------------------------------------
    //
    //    static
    //
    //--------------------------------------------------------------------------


    constructor(enforcer)
    {
        super();

        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        this.checkOS();
    }


    static get instance()
    {
        if (!this[singleton]) {
            this[singleton] = new Config(singletonEnforcer);
        }
        return this[singleton];
    }


    //--------------------------------------------------------------------------
    //
    //    OS 체크
    //
    //--------------------------------------------------------------------------


    /**
     * Phaser.Device 코드
     * http://phaser.io/docs/2.4.2/Phaser.Device.html
     */
    checkOS()
    {
        this.desktop = false;

        var ua = navigator.userAgent;

        if (/Playstation Vita/.test(ua)) {
            this.vita = true;
        }
        else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
            this.kindle = true;
            // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
            // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
        }
        else if (/Android/.test(ua)) {
            this.android = true;
        }
        else if (/CrOS/.test(ua)) {
            this.chromeOS = true;
        }
        else if (/iP[ao]d|iPhone/i.test(ua)) {
            this.iOS = true;
            (navigator.appVersion).match(/OS (\d+)/);
            this.iOSVersion = parseInt(RegExp.$1, 10);
        }
        else if (/Linux/.test(ua)) {
            this.linux = true;
        }
        else if (/Mac OS/.test(ua)) {
            this.macOS = true;
        }
        else if (/Windows/.test(ua)) {
            this.windows = true;
        }

        if (/Windows Phone/i.test(ua) || /IEMobile/i.test(ua)) {
            this.android = false;
            this.iOS = false;
            this.macOS = false;
            this.windows = true;
            this.windowsPhone = true;
        }

        var silk = /Silk/.test(ua); // detected in browsers

        if (this.windows || this.macOS || (this.linux && !silk) || this.chromeOS) {
            this.desktop = true;
        }

        //  Windows Phone / Table reset
        if (this.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua)))) {
            this.desktop = false;
        }
    }
}