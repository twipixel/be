import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';

export default class Test
{
    constructor()
    {
        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x8BC34A});
        document.body.appendChild(this.app.view);

        this.canvas = this.app.renderer.view;
        this.stage = this.app.stage;

        this.initialize();
        this.initializeGUI();
        this.render();
    }

    initialize()
    {
        console.log('Linked List');
        this._numListeners = 0;
        this._first = undefined;
    }

    initializeGUI()
    {
        this.gui = new dat.GUI();
    }

    /**
     * @param listener {TickerListener}
     */
    addListener(listener)
    {
        if (listener.nextListener != null || listener.prevListener != null) {
            return;
        }

        if (this._first != null) {
            if (this._first.prevListener != null) {
                this._first.prevListener.nextListener = listener;
                listener.prevListener = this._first.prevListener;
            }
            listener.nextListener = this._first;
            this._first.prevListener = listener;
        }

        this._first = listener;

        ++this._numListeners;
    }

    /**
     *
     * @param listener {TickerListener}
     */
    removeListener(listener)
    {
        var l = this._first;

        while (l != null) {

            if (l == listener) {
                if (l.prevListener != null) {
                    l.prevListener.nextListener = l.nextListener;
                    l.nextListener = null;
                }
                else {
                    this._first = l.nextListener;
                }
                if (l.nextListener != null) {
                    l.nextListener.prevListener = l.prevListener;
                    l.prevListener = null;
                }
                --this._numListeners;
            }

            l = l.nextListener;
        }
    }

    update(ms)
    {
        var listener = this._first, ll = null;

        while (listener.nextListener != null) {

            // 리스너 tick 함수가 true 를 리턴하면 제거합니다.
            if ((listener = listener.nextListener).tick(t)) {
                
                // 리스트 연결
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                
                // 리스트 삭제
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                
                // 리스너 카운트 줄임
                --this._numListeners;
            }
        }
    }

    render(ms)
    {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}