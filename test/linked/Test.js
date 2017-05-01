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
        this.initialize();
        this.initializeGUI();
        this.render();
    }

    initialize()
    {
        // TEST ID
        window.listenerId = 0;

        this._first = null;
        this._listeners = [];
        this._numListeners = 0;
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
        this.config.changeUpdate = this.toggleUpdateFunction.bind(this);

        this.gui.add(this.config, 'addListener');
        this.gui.add(this.config, 'removeListener');
        this.gui.add(this.config, 'displayListeners');
        this.gui.add(this.config, 'changeUpdate');
    }

    testAddListener()
    {
        var listener = new Listener();
        console.log('\ntestAddListener(', listener.id, ')');

        this._listeners.push(listener);

        this.addListener(listener);
    }

    testRemoveListener()
    {
        if (this._listeners.length <= 0) return;

        var listener = this._listeners.pop();
        console.log('\ntestRmoveListener(', listener.id, ')');

        this.removeListener(listener);
    }

    displayListeners()
    {
        var total = this._listeners.length;
        console.log('total listeners:', total);
        for (var i = 0; i < total; i++) {
            var listener = this._listeners[i];
            console.log(listener.id);
        }
    }

    toggleUpdateFunction()
    {
        this.changeUpdateMethode(!this.widthPadding);
    }

    /**
     * 업데이트 함수 변경
     * {true: 패딩과 함께 업데이트, fals: 패딩 없이 업데이트}
     * @param withPadding
     */
    changeUpdateMethode(withPadding = true)
    {
        console.log('changeUpdate(' + withPadding + '), option:' + ((withPadding) ? 'widthPadding' : 'widthOutPadding'));
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
     * @param listener {Listener}
     */
    addListener(listener)
    {
        if (listener.nextListener != null || listener.prevListener != null) {
            return;
        }

        console.log('** addListener(', listener.id,'), numListeners:', this._numListeners);

        if (this._first != null) {
            listener.nextListener = this._first;
            this._first.prevListener = listener;
        }

        this._first = listener;

        ++this._numListeners;
    }

    /**
     * 리스너 삭제
     * @param listener {Listener}
     */
    removeListener(listener)
    {
        console.log('** removeListener(', listener.id, '), numListeners:', this._numListeners);

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

    /**
     * Test Code
     * 디버그를 위한 코드
     * @param listener
     */
    removeFromListeners(listener)
    {
        var total = this._listeners.length;

        for (var i = 0; i < total; i++) {
            var l = this._listeners[i];

            if(l === listener) {
                this._listeners.splice(i, 1);
            }
        }
    }

    /**
     * 패딩과 함께 업데이트 하기
     * 패딩이 있어야 Listener 의 모든 tick 함수를 호출할 수 있습니다.
     *
     * 호출 관계 참고
     * https://github.com/twipixel/be/blob/master/test/linked/README.md
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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
                // Test Code
                this.removeFromListeners(listener);

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
            this._first.prevListener = null;
        }

        // padding 순환 고리 설정
        l.nextListener = this._tickerListenerPaddings[n + 1];
    }

    /**
     * 패딩 없이 업데이트 하기
     * 패딩이 없는 경우 마지막에 등록된 Listener 는 호출되지 않습니다.
     *
     * 호출 관계 참고
     * https://github.com/twipixel/be/blob/master/test/linked/README.md
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

                // Test Code
                this.removeFromListeners(listener);
            }
        }
    }

    render(ms)
    {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }
}