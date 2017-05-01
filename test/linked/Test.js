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

        this._tickerListenerPaddings = [];

        var prevListener = null;

        for (var i = 0; i < 10; ++i) {
            var listener = new Listener(-1);
            if (prevListener != null) {
                prevListener.nextListener = listener;
                listener.prevListener = prevListener;
            }
            prevListener = listener;
            this._tickerListenerPaddings[i] = listener;
        }

        this.changeUpdateMethode(true);
    }

    initializeGUI()
    {
        this.gui = new dat.GUI();

        this.config = {};
        this.config.addListener = this.testAddListener.bind(this);
        this.config.removeListener = this.testRemoveListener.bind(this);
        this.config.displayListeners = this.displayListeners.bind(this);
        this.config.changeUpdateMethode = this.changeUpdateMethode.bind(this, !this.widthPadding);

        this.gui.add(this.config, 'addListener');
        this.gui.add(this.config, 'removeListener');
        this.gui.add(this.config, 'displayListeners');
        this.gui.add(this.config, 'changeUpdateMethode');
    }

    testAddListener()
    {
        this.addListener(new Listener());
    }

    testRemoveListener()
    {
        var listener = this._listeners.pop();
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

    changeUpdateMethode(withPadding = true)
    {
        this.widthPadding = withPadding;
        if (this.widthPadding) {
            this.update = this.updateWithPadding.bind(this);
        }
        else {
            this.update = this.updateWithOutPadding.bind(this);
        }
    }

    /**
     * 리스너 등록
     *
     * 0이 _first 이고
     * 1을 등록하면
     *
     * @param listener {Listener}
     */
    addListener(listener)
    {
        if (listener.nextListener != null || listener.prevListener != null) {
            return;
        }

        if (this._first != null) {
            listener.nextListener = this._first;
            this._first.prevListener = listener;
        }

        this._first = listener;

        ++this._numListeners;


        // Test Code: 디버그를 위해 리스트에 넣고 뺍니다.
        this._listeners.push(listener);
        console.log('       ** addListener(' + listener.id + '), numListener:', this._numListeners);
    }

    /**
     *
     * @param listener {Listener}
     */
    removeListener(listener)
    {
        console.log('       ** removeListener(', listener.id, ')');

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

                        if (member === this._first) {
                            console.log('is this problem?');
                            this._first = null;
                        }
                        break;
                    }
                }
            }

            l = l.nextListener;
        }
        console.log('removeListener(' + listener.id + '), numListener:', this._numListeners, ', total:', this._listeners.length);
    }

    /**
     *
     */
    updateWithPadding()
    {
        var n = 8 - (this._numListeners % 8),
            listener = this._tickerListenerPaddings[0],
            l = this._tickerListenerPaddings[n],
            ll = null;

        // 진입점에 _first 를 연결합니다.
        if ((l.nextListener = this._first) != null) {
            this._first.prevListener = l;
        }

        // entry 에 연결된 연결 리스트 체인 실행
        while (listener.nextListener != null) {
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
            if ((listener = listener.nextListener).tick()) {
                if (listener.prevListener != null) {
                    listener.prevListener.nextListener = listener.nextListener;
                }
                if (listener.nextListener != null) {
                    listener.nextListener.prevListener = listener.prevListener;
                }
                ll = listener.prevListener;
                listener.nextListener = null;
                listener.prevListener = null;
                listener = ll;
                --this._numListeners;
            }
        }

        // _first prev 초기화 null 셋팅
        if ((this._first = l.nextListener) != null) {

            console.log('**************', this._first.id);
            this._first.prevListener = null;
        }

        // padding 순환 고리 설정
        l.nextListener = this._tickerListenerPaddings[n + 1];
    }

    /**
     *
     * @param ms
     */
    updateWithOutPadding()
    {
        var listener = this._first, ll = null;

        while (listener && listener.nextListener != null) {

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
            }
        }
    }

    render(ms)
    {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}