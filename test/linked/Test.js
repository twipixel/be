import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';
import Listener from './listener/Listener';


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
        // TEST ID
        window.listenerId = 0;

        this._first = null;
        this._numListeners = 0;
        this._listeners = [];

        // 기본 리스너 등록
        this.addListener(new Listener());
    }

    initializeGUI()
    {
        this.gui = new dat.GUI();

        this.config = {};
        this.config.addListener = this.testAddListener.bind(this);
        this.config.removeListener = this.testRemoveListener.bind(this);
        this.config.displayListeners = this.displayListeners.bind(this);

        this.gui.add(this.config, 'addListener');
        this.gui.add(this.config, 'removeListener');
        this.gui.add(this.config, 'displayListeners');
    }

    testAddListener()
    {
        this.addListener(new Listener());
    }

    testRemoveListener()
    {
        var randomIndex = parseInt(Math.random() * this._listeners.length);
        var listener = this._listeners[randomIndex];
        console.log('\ntestRmoveListener, id:', listener.id);
        this.removeListener(listener);
    }

    displayListeners()
    {
        console.log('total listener:', this._listeners.length);
        for (var i = 0; i < this._listeners.length; i++) {
            var listener = this._listeners[i];
            console.log(listener.id);
        }
    }


    /**
     * @param listener {Listener}
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


        // Test Code: 디버그를 위해 리스트에 넣고 뺍니다.
        this._listeners.push(listener);
        console.log('addListener(' + listener.id + '), numListener:', this._numListeners);
    }

    /**
     *
     * @param listener {Listener}
     */
    removeListener(listener)
    {
        console.log('removeListener(', listener.id, ')');
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

                // Test Code: 디버그를 위해 리스트에 넣고 뺍니다.
                var total = this._listeners.length;
                for (var i = 0; i < total; i++) {
                    var member = this._listeners[i];

                    if (member.id == listener.id) {
                        this._listeners.splice(i, 1);
                        break;
                    }
                }
            }

            l = l.nextListener;
        }


        console.log('removeListener(' + listener.id + '), numListener:', this._numListeners, ', total:', this._listeners.length);
    }

    update(ms)
    {
        if (this._first == null) return;

        var listener = this._first, ll = null;

        while (listener.nextListener != null) {

            // 리스너 tick 함수가 true 를 리턴하면 제거합니다.
            if ((listener = listener.nextListener).tick()) {
                
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
                console.log('_numListeners:', this._numListeners);
            }
        }
    }

    render(ms)
    {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}