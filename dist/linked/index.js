webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(346);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _KeyCode = __webpack_require__(328);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	(function () {
	    window.onload = function () {
	        var main = new Main();
	    };
	})();
	
	var Main = function () {
	    function Main() {
	        _classCallCheck(this, Main);
	
	        this.init();
	        this.addEvent();
	        this.onResize();
	    }
	
	    _createClass(Main, [{
	        key: 'init',
	        value: function init() {
	            this.test = new _Test2.default();
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent() {
	            window.onresize = this.onResize.bind(this);
	            window.addEventListener('keyup', this.onKeyUp.bind(this));
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {}
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.keyCode) {
	                case _KeyCode2.default.BACKQUOTE:
	                    break;
	
	                case _KeyCode2.default.ESCAPE:
	                    console.clear();
	                    break;
	
	                case _KeyCode2.default.SPACE:
	                    break;
	
	                case _KeyCode2.default.DOWN:
	                    break;
	
	                case _KeyCode2.default.UP:
	                    break;
	
	                case _KeyCode2.default.LEFT:
	                    break;
	
	                case _KeyCode2.default.RIGHT:
	                    break;
	
	                case _KeyCode2.default.BACKSPACE:
	                    break;
	            }
	        }
	    }]);

	    return Main;
	}();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (global) {
	    //--Animation methods
	    //Easing functions adapted from Robert Penner's easing equations
	    //http://www.robertpenner.com/easing/
	    var Easing = {
	        linear: function linear(t) {
	            return t;
	        },
	        easeInQuad: function easeInQuad(t) {
	            return t * t;
	        },
	        easeOutQuad: function easeOutQuad(t) {
	            return -1 * t * (t - 2);
	        },
	        easeInOutQuad: function easeInOutQuad(t) {
	            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
	            return -1 / 2 * (--t * (t - 2) - 1);
	        },
	        easeInCubic: function easeInCubic(t) {
	            return t * t * t;
	        },
	        easeOutCubic: function easeOutCubic(t) {
	            return 1 * ((t = t / 1 - 1) * t * t + 1);
	        },
	        easeInOutCubic: function easeInOutCubic(t) {
	            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
	            return 1 / 2 * ((t -= 2) * t * t + 2);
	        },
	        easeInQuart: function easeInQuart(t) {
	            return t * t * t * t;
	        },
	        easeOutQuart: function easeOutQuart(t) {
	            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
	        },
	        easeInOutQuart: function easeInOutQuart(t) {
	            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
	            return -1 / 2 * ((t -= 2) * t * t * t - 2);
	        },
	        easeInQuint: function easeInQuint(t) {
	            return 1 * (t /= 1) * t * t * t * t;
	        },
	        easeOutQuint: function easeOutQuint(t) {
	            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
	        },
	        easeInOutQuint: function easeInOutQuint(t) {
	            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
	            return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
	        },
	        easeInSine: function easeInSine(t) {
	            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
	        },
	        easeOutSine: function easeOutSine(t) {
	            return 1 * Math.sin(t / 1 * (Math.PI / 2));
	        },
	        easeInOutSine: function easeInOutSine(t) {
	            return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
	        },
	        easeInExpo: function easeInExpo(t) {
	            return t === 0 ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
	        },
	        easeOutExpo: function easeOutExpo(t) {
	            return t === 1 ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
	        },
	        easeInOutExpo: function easeInOutExpo(t) {
	            if (t === 0) return 0;
	            if (t === 1) return 1;
	            if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
	            return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
	        },
	        easeInCirc: function easeInCirc(t) {
	            if (t >= 1) return t;
	            return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
	        },
	        easeOutCirc: function easeOutCirc(t) {
	            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
	        },
	        easeInOutCirc: function easeInOutCirc(t) {
	            if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
	            return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	        },
	        easeInElastic: function easeInElastic(t) {
	            var s = 1.70158;
	            var p = 0;
	            var a = 1;
	            if (t === 0) return 0;
	            if ((t /= 1) == 1) return 1;
	            if (!p) p = 1 * 0.3;
	            if (a < Math.abs(1)) {
	                a = 1;
	                s = p / 4;
	            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
	            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
	        },
	        easeOutElastic: function easeOutElastic(t) {
	            var s = 1.70158;
	            var p = 0;
	            var a = 1;
	            if (t === 0) return 0;
	            if ((t /= 1) == 1) return 1;
	            if (!p) p = 1 * 0.3;
	            if (a < Math.abs(1)) {
	                a = 1;
	                s = p / 4;
	            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
	            return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
	        },
	        easeInOutElastic: function easeInOutElastic(t) {
	            var s = 1.70158;
	            var p = 0;
	            var a = 1;
	            if (t === 0) return 0;
	            if ((t /= 1 / 2) == 2) return 1;
	            if (!p) p = 1 * (0.3 * 1.5);
	            if (a < Math.abs(1)) {
	                a = 1;
	                s = p / 4;
	            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
	            if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
	            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
	        },
	        easeInBack: function easeInBack(t) {
	            var s = 1.70158;
	            return 1 * (t /= 1) * t * ((s + 1) * t - s);
	        },
	        easeOutBack: function easeOutBack(t) {
	            var s = 1.70158;
	            return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
	        },
	        easeInOutBack: function easeInOutBack(t) {
	            var s = 1.70158;
	            if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= 1.525) + 1) * t - s));
	            return 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
	        },
	        easeInBounce: function easeInBounce(t) {
	            return 1 - Easing.easeOutBounce(1 - t);
	        },
	        easeOutBounce: function easeOutBounce(t) {
	            if ((t /= 1) < 1 / 2.75) {
	                return 1 * (7.5625 * t * t);
	            } else if (t < 2 / 2.75) {
	                return 1 * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
	            } else if (t < 2.5 / 2.75) {
	                return 1 * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
	            } else {
	                return 1 * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
	            }
	        },
	        easeInOutBounce: function easeInOutBounce(t) {
	            if (t < 1 / 2) return Easing.easeInBounce(t * 2) * 0.5;
	            return Easing.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
	        }
	    };
	
	    //Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	    var requestAnimationFrame = function () {
	        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	            return window.setTimeout(callback, 16);
	        };
	    }();
	
	    var cancelAnimationFrame = function () {
	        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (callback) {
	            return window.clearTimeout(callback, 16);
	        };
	    }();
	
	    var animation = function animation(thisArg, onAnimation, totalStep, easing, onComplete) {
	        if (typeof onAnimation !== 'function') throw Error('onAnimation must be function');
	
	        var currentStep = 0,
	            easingFunction = typeof easing === 'string' ? Easing[easing] || Easing.linear : easing || Easing.linear;
	
	        var animationFrame = function animationFrame() {
	            currentStep++;
	
	            var step = currentStep / totalStep,
	                ease = easingFunction(step);
	
	            onAnimation.call(thisArg, ease, step, currentStep);
	
	            if (currentStep < totalStep) {
	                if (!thisArg) {
	                    requestAnimationFrame(animationFrame);
	                } else {
	                    thisArg.animationId = requestAnimationFrame(animationFrame);
	                }
	            } else {
	                if (onComplete) {
	                    onComplete.apply(thisArg);
	                }
	            }
	        };
	        requestAnimationFrame(animationFrame);
	    };
	
	    if (( false ? 'undefined' : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports.Easing = Easing;
	        module.exports.requestAnimationFrame = requestAnimationFrame;
	        module.exports.cancelAnimationFrame = cancelAnimationFrame;
	        module.exports.animation = animation;
	    } else {
	        global.Easing = Easing;
	        global.requestAnimationFrame = requestAnimationFrame;
	        global.cancelAnimationFrame = cancelAnimationFrame;
	        global.animation = animation;
	    }
	})(undefined);

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _animation = __webpack_require__(330);
	
	var _Listener = __webpack_require__(347);
	
	var _Listener2 = _interopRequireDefault(_Listener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Test = function () {
	    function Test() {
	        _classCallCheck(this, Test);
	
	        this.initialize();
	        this.initializeGUI();
	        this.render();
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            // TEST ID
	            window.listenerId = 0;
	
	            this._first = null;
	            this._listeners = [];
	            this._numListeners = 0;
	            this._tickerListenerPaddings = [];
	
	            var prevListener = null;
	
	            for (var i = 0; i < 10; ++i) {
	                var listener = new _Listener2.default(-1);
	                if (prevListener != null) {
	                    prevListener.nextListener = listener;
	                    listener.prevListener = prevListener;
	                }
	                prevListener = listener;
	                this._tickerListenerPaddings[i] = listener;
	            }
	
	            this.changeUpdateMethode(true);
	        }
	    }, {
	        key: 'initializeGUI',
	        value: function initializeGUI() {
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
	    }, {
	        key: 'testAddListener',
	        value: function testAddListener() {
	            var listener = new _Listener2.default();
	            console.log('\ntestAddListener(', listener.id, ')');
	
	            this._listeners.push(listener);
	
	            this.addListener(listener);
	        }
	    }, {
	        key: 'testRemoveListener',
	        value: function testRemoveListener() {
	            if (this._listeners.length <= 0) return;
	
	            var listener = this._listeners.pop();
	            console.log('\ntestRmoveListener(', listener.id, ')');
	
	            this.removeListener(listener);
	        }
	    }, {
	        key: 'displayListeners',
	        value: function displayListeners() {
	            var total = this._listeners.length;
	            console.log('total listeners:', total);
	            for (var i = 0; i < total; i++) {
	                var listener = this._listeners[i];
	                console.log(listener.id);
	            }
	        }
	    }, {
	        key: 'toggleUpdateFunction',
	        value: function toggleUpdateFunction() {
	            this.changeUpdateMethode(!this.widthPadding);
	        }
	
	        /**
	         * 업데이트 함수 변경
	         * {true: 패딩과 함께 업데이트, fals: 패딩 없이 업데이트}
	         * @param withPadding
	         */
	
	    }, {
	        key: 'changeUpdateMethode',
	        value: function changeUpdateMethode() {
	            var withPadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	            console.log('changeUpdate(' + withPadding + '), option:' + (withPadding ? 'widthPadding' : 'widthOutPadding'));
	            this.widthPadding = withPadding;
	
	            if (this.widthPadding) {
	                this.update = this.updateWithPadding.bind(this);
	            } else {
	                this.update = this.updateWithOutPadding.bind(this);
	            }
	        }
	
	        /**
	         * 리스너 등록
	         * @param listener {Listener}
	         */
	
	    }, {
	        key: 'addListener',
	        value: function addListener(listener) {
	            if (listener.nextListener != null || listener.prevListener != null) {
	                return;
	            }
	
	            console.log('** addListener(', listener.id, '), numListeners:', this._numListeners);
	
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
	
	    }, {
	        key: 'removeListener',
	        value: function removeListener(listener) {
	            console.log('** removeListener(', listener.id, '), numListeners:', this._numListeners);
	
	            var l = this._first;
	
	            while (l != null) {
	
	                if (l == listener) {
	                    if (l.prevListener != null) {
	                        l.prevListener.nextListener = l.nextListener;
	                        l.nextListener = null;
	                    } else {
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
	
	    }, {
	        key: 'removeFromListeners',
	        value: function removeFromListeners(listener) {
	            var total = this._listeners.length;
	
	            for (var i = 0; i < total; i++) {
	                var l = this._listeners[i];
	
	                if (l === listener) {
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
	
	    }, {
	        key: 'updateWithPadding',
	        value: function updateWithPadding() {
	            var n = 8 - this._numListeners % 8,
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
	
	    }, {
	        key: 'updateWithOutPadding',
	        value: function updateWithOutPadding() {
	            var listener = this._first,
	                ll = null;
	
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
	    }, {
	        key: 'render',
	        value: function render(ms) {
	            this.update(ms);
	            this.requestId = (0, _animation.requestAnimationFrame)(this.render.bind(this));
	        }
	    }]);
	
	    return Test;
	}();
	
	exports.default = Test;

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Listener = function () {
	    function Listener() {
	        var listenerEndCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100 + parseInt(Math.random() * 200);
	
	        _classCallCheck(this, Listener);
	
	        this.id = window.listenerId++;
	
	        this.tickCount = 0;
	        this.listenerEndCount = listenerEndCount;
	
	        this.prevListener = null;
	        this.nextListener = null;
	
	        console.log('id:' + this.id + ', listenerEndCount:', this.listenerEndCount);
	    }
	
	    /**
	     * tick 함수 반환 값이 true 이면 연결 리스트에서 제거 합니다.
	     * @returns {boolean}
	     */
	
	
	    _createClass(Listener, [{
	        key: 'tick',
	        value: function tick() {
	            if (this.listenerEndCount == -1) return false;
	
	            console.log(this.id + ' -> ' + this.tickCount + ', ' + this.listenerEndCount);
	            if (this.tickCount++ >= this.listenerEndCount) {
	                console.log('this.id:', +this.id + ' end');
	                return true;
	            }
	            return false;
	        }
	    }]);
	
	    return Listener;
	}();
	
	exports.default = Listener;

/***/ })

});
//# sourceMappingURL=index.js.map