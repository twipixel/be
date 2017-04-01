import 'babel-polyfill';
import Test from './Test';
import KeyCode from '../../src/consts/KeyCode';


(function ()
{
    window.onload = function () {
        var main = new Main();
    }
}());

class Main
{
    constructor()
    {
        this.init();
        this.addEvent();
        this.onResize();
    }

    init()
    {
        this.test = new Test();
    }

    addEvent()
    {
        window.onresize = this.onResize.bind(this);
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    onResize()
    {

    }

    onKeyUp (e)
    {
        switch (e.keyCode) {
            case KeyCode.BACKQUOTE:
                break;

            case KeyCode.ESCAPE:
                console.clear();
                break;

            case KeyCode.SPACE:
                break;

            case KeyCode.DOWN:
                break;

            case KeyCode.UP:
                break;

            case KeyCode.LEFT:
                break;

            case KeyCode.RIGHT:
                break;

            case KeyCode.BACKSPACE:
                break;
        }
    };
}
