webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(396);
	
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
	        value: function onResize() {
	            this.test.resize();
	        }
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

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Config = __webpack_require__(332);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var singleton = Symbol();
	var singletonEnforcer = Symbol();
	
	var Size = function () {
	    function Size() {
	        _classCallCheck(this, Size);
	    }
	
	    _createClass(Size, null, [{
	        key: 'windowWidth',
	
	        ///////////////////////////////////////////////////////////////////////////////
	        //
	        // Static
	        //
	        /////////////////////////////////////////////////////////////////////////////////
	
	
	        get: function get() {
	            if (_Config2.default.instance.macOS) {
	                return window.innerWidth;
	            } else {
	                return window.innerWidth * window.devicePixelRatio;
	            }
	        }
	    }, {
	        key: 'windowHeight',
	        get: function get() {
	            if (_Config2.default.instance.macOS) {
	                return window.innerHeight;
	            } else {
	                return window.innerHeight * window.devicePixelRatio;
	            }
	        }
	    }, {
	        key: 'windowSize',
	        get: function get() {
	            return new PIXI.Rectangle(0, 0, Size.windowWidth, Size.windowHeight);
	        }
	    }, {
	        key: 'windowCenterX',
	        get: function get() {
	            return this.windowWidth / 2;
	        }
	    }, {
	        key: 'windowCenterY',
	        get: function get() {
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
	
	    }, {
	        key: 'canvasLimitWidth',
	        get: function get() {
	            return 4096;
	        }
	    }, {
	        key: 'canvasLimitHeight',
	        get: function get() {
	            return 4096;
	        }
	    }]);
	
	    return Size;
	}();
	
	exports.default = Size;

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var singleton = Symbol();
	var singletonEnforcer = Symbol();
	
	var Config = function (_PIXI$utils$EventEmit) {
	    _inherits(Config, _PIXI$utils$EventEmit);
	
	    //--------------------------------------------------------------------------
	    //
	    //    static
	    //
	    //--------------------------------------------------------------------------
	
	
	    function Config(enforcer) {
	        _classCallCheck(this, Config);
	
	        var _this = _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).call(this));
	
	        if (enforcer !== singletonEnforcer) {
	            throw new Error('Cannot construct singleton');
	        }
	
	        _this.checkOS();
	        return _this;
	    }
	
	    _createClass(Config, [{
	        key: 'checkOS',
	
	
	        //--------------------------------------------------------------------------
	        //
	        //    OS 체크
	        //
	        //--------------------------------------------------------------------------
	
	
	        /**
	         * Phaser.Device 코드
	         * http://phaser.io/docs/2.4.2/Phaser.Device.html
	         */
	        value: function checkOS() {
	            this.desktop = false;
	
	            var ua = navigator.userAgent;
	
	            if (/Playstation Vita/.test(ua)) {
	                this.vita = true;
	            } else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
	                this.kindle = true;
	                // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
	                // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
	            } else if (/Android/.test(ua)) {
	                this.android = true;
	            } else if (/CrOS/.test(ua)) {
	                this.chromeOS = true;
	            } else if (/iP[ao]d|iPhone/i.test(ua)) {
	                this.iOS = true;
	                navigator.appVersion.match(/OS (\d+)/);
	                this.iOSVersion = parseInt(RegExp.$1, 10);
	            } else if (/Linux/.test(ua)) {
	                this.linux = true;
	            } else if (/Mac OS/.test(ua)) {
	                this.macOS = true;
	            } else if (/Windows/.test(ua)) {
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
	
	            if (this.windows || this.macOS || this.linux && !silk || this.chromeOS) {
	                this.desktop = true;
	            }
	
	            //  Windows Phone / Table reset
	            if (this.windowsPhone || /Windows NT/i.test(ua) && /Touch/i.test(ua)) {
	                this.desktop = false;
	            }
	        }
	    }], [{
	        key: 'instance',
	        get: function get() {
	            if (!this[singleton]) {
	                this[singleton] = new Config(singletonEnforcer);
	            }
	            return this[singleton];
	        }
	    }]);
	
	    return Config;
	}(PIXI.utils.EventEmitter);
	
	exports.default = Config;

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Mouse = function () {
	    function Mouse() {
	        _classCallCheck(this, Mouse);
	    }
	
	    _createClass(Mouse, null, [{
	        key: "isDoubleClick",
	
	
	        /**
	         * 이동 거리가 5px 이하이고 500ms 안에 두번 클릭하면 더블 클릭으로 인정
	         * @param prevPoint 이전좌표
	         * @param currentPoint 현재좌표
	         * @param prevTime 이전 클릭 타임
	         * @param currentTime 현재 클릭 타임
	         * @returns {boolean} 더블 클릭 여부
	         */
	        value: function isDoubleClick(prevPoint, currentPoint, prevTime, currentTime) {
	            var diffX = currentPoint.x - prevPoint.x;
	
	            if (diffX < 0) {
	                diffX = diffX * -1;
	            }
	
	            var diffY = currentPoint.y - prevPoint.y;
	
	            if (diffY < 0) {
	                diffY = diffY * -1;
	            }
	
	            if (diffX > 5 || diffY > 5) {
	                return false;
	            }
	
	            if (currentTime - prevTime > 500) {
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: "DESKTOP_MOUSE",
	        get: function get() {
	            return this.renderer.plugins.interaction.mouse;
	        }
	    }, {
	        key: "MOBILE_MOUSE",
	        get: function get() {
	            return this.renderer.plugins.interaction.pointer;
	        }
	
	        /**
	         * PIXI.Application.renderer
	         * 랜더러에서 interaction 객체를 참조할 수 있어서 사용하려면 렌더러를 셋팅해야 합니다.
	         * @param value {PIXI.WebGLRenderrer|PIXI.CanvasRenderer}
	         */
	
	    }, {
	        key: "renderer",
	        set: function set(value) {
	            this._renderer = value;
	        },
	        get: function get() {
	            return this._renderer;
	        }
	
	        /**
	         * 모바일 대응을 위해서
	         * PC 버전에서는 mouse 객체를, 모바일 버전에서는 pointer 객체를 셋팅하면
	         * global 객체에서 참조해서 좌표값을 전달하도록 합니다.
	         *
	         * 만약 설정하지 않으면 기본 PC만 대응하도록 mouse 객체를 설정합니다.
	         *
	         * Desktop : Mouse.renderer.plugins.interaction.mouse
	         * Mobile : Mouse.renderer.plugins.interaction.pointer
	         * @param value
	         */
	
	    }, {
	        key: "mouse",
	        set: function set(value) {
	            this._mouse = value;
	        },
	        get: function get() {
	            if (!this._mouse) {
	                this._mouse = this.DESKTOP_MOUSE;
	            }
	            return this._mouse;
	        }
	    }, {
	        key: "global",
	        get: function get() {
	            return this.mouse.global;
	        }
	    }, {
	        key: "globalX",
	        get: function get() {
	            return this.mouse.global.x;
	        }
	    }, {
	        key: "globalY",
	        get: function get() {
	            return this.mouse.global.y;
	        }
	    }, {
	        key: "currentCursorStyle",
	        set: function set(value) {
	            Mouse.renderer.plugins.interaction.currentCursorStyle = value;
	        },
	        get: function get() {
	            return Mouse.renderer.plugins.interaction.currentCursorStyle;
	        }
	    }, {
	        key: "currentTime",
	        get: function get() {
	            return new Date().getTime();
	        }
	    }]);
	
	    return Mouse;
	}();
	
	exports.default = Mouse;

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Image = function (_PIXI$Container) {
	    _inherits(Image, _PIXI$Container);
	
	    function Image(source) {
	        _classCallCheck(this, Image);
	
	        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));
	
	        var base = new PIXI.BaseTexture(source),
	            texture = new PIXI.Texture(base);
	
	        _this.image = new PIXI.Sprite(texture);
	        _this.image.x = -_this.image.width / 2;
	        _this.image.y = -_this.image.height / 2;
	        _this.addChild(_this.image);
	        return _this;
	    }
	
	    return Image;
	}(PIXI.Container);
	
	exports.default = Image;

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var degrees = 180 / Math.PI;
	
	function random(min, max) {
	    return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	function radian2degrees(rad) {
	    return rad * degrees;
	}
	
	function degrees2radian(deg) {
	    return deg / degrees;
	}
	
	/**
	 * Victor.js를 ES6로 변환하여 사용하고 있습니다.
	 * https://github.com/maxkueng/victor
	 */
	
	var Vector = function () {
	    _createClass(Vector, null, [{
	        key: 'fromArray',
	
	        /**
	         * Creates a new instance from an array
	         *
	         * ### Examples:
	         *     var vec = Vector.fromArray([42, 21]);
	         *
	         *     vec.toString();
	         *     // => x:42, y:21
	         *
	         * @name Vector.fromArray
	         * @param {Array} array Array with the x and y values at index 0 and 1 respectively
	         * @return {Vector} The new instance
	         * @api public
	         */
	        value: function fromArray(arr) {
	            return new Vector(arr[0] || 0, arr[1] || 0);
	        }
	
	        /**
	         * Creates a new instance from an object
	         *
	         * ### Examples:
	         *     var vec = Vector.fromObject({ x: 42, y: 21 });
	         *
	         *     vec.toString();
	         *     // => x:42, y:21
	         *
	         * @name Vector.fromObject
	         * @param {Object} obj Object with the values for x and y
	         * @return {Vector} The new instance
	         * @api public
	         */
	
	    }, {
	        key: 'fromObject',
	        value: function fromObject(obj) {
	            return new Vector(obj.x || 0, obj.y || 0);
	        }
	
	        /**
	         * Constructor. Will also work without the `new` keyword
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = Vector(42, 1337);
	         *
	         * @param {Number} x Value of the x axis
	         * @param {Number} y Value of the y axis
	         * @return {Vector}
	         * @api public
	         */
	
	    }]);
	
	    function Vector() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	        _classCallCheck(this, Vector);
	
	        if (!(this instanceof Vector)) {
	            return new Vector(x, y);
	        }
	
	        this.x = x;
	        this.y = y;
	    }
	
	    /**
	     * Adds another vector's X axis to this one
	     *
	     * ### Examples:
	     *     var vec1 = new Vector(10, 10);
	     *     var vec2 = new Vector(20, 30);
	     *
	     *     vec1.addX(vec2);
	     *     vec1.toString();
	     *     // => x:30, y:10
	     *
	     * @param {Vector} vector The other vector you want to add to this one
	     * @return {Vector} `this` for chaining capabilities
	     * @api public
	     */
	
	
	    _createClass(Vector, [{
	        key: 'addX',
	        value: function addX(vec) {
	            this.x += vec.x;
	            return this;
	        }
	
	        /**
	         * Adds another vector's Y axis to this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.addY(vec2);
	         *     vec1.toString();
	         *     // => x:10, y:40
	         *
	         * @param {Vector} vector The other vector you want to add to this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addY',
	        value: function addY(vec) {
	            this.y += vec.y;
	            return this;
	        }
	
	        /**
	         * Adds another vector to this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.add(vec2);
	         *     vec1.toString();
	         *     // => x:30, y:40
	         *
	         * @param {Vector} vector The other vector you want to add to this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'add',
	        value: function add(vec) {
	            this.x += vec.x;
	            this.y += vec.y;
	            return this;
	        }
	
	        /**
	         * Adds the given scalar to both vector axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(1, 2);
	         *
	         *     vec.addScalar(2);
	         *     vec.toString();
	         *     // => x: 3, y: 4
	         *
	         * @param {Number} scalar The scalar to add
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addScalar',
	        value: function addScalar(scalar) {
	            this.x += scalar;
	            this.y += scalar;
	            return this;
	        }
	
	        /**
	         * Adds the given scalar to the X axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(1, 2);
	         *
	         *     vec.addScalarX(2);
	         *     vec.toString();
	         *     // => x: 3, y: 2
	         *
	         * @param {Number} scalar The scalar to add
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addScalarX',
	        value: function addScalarX(scalar) {
	            this.x += scalar;
	            return this;
	        }
	
	        /**
	         * Adds the given scalar to the Y axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(1, 2);
	         *
	         *     vec.addScalarY(2);
	         *     vec.toString();
	         *     // => x: 1, y: 4
	         *
	         * @param {Number} scalar The scalar to add
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addScalarY',
	        value: function addScalarY(scalar) {
	            this.y += scalar;
	            return this;
	        }
	
	        /**
	         * Subtracts the X axis of another vector from this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.subtractX(vec2);
	         *     vec1.toString();
	         *     // => x:80, y:50
	         *
	         * @param {Vector} vector The other vector you want subtract from this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractX',
	        value: function subtractX(vec) {
	            this.x -= vec.x;
	            return this;
	        }
	
	        /**
	         * Subtracts the Y axis of another vector from this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.subtractY(vec2);
	         *     vec1.toString();
	         *     // => x:100, y:20
	         *
	         * @param {Vector} vector The other vector you want subtract from this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractY',
	        value: function subtractY(vec) {
	            this.y -= vec.y;
	            return this;
	        }
	
	        /**
	         * Subtracts another vector from this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.subtract(vec2);
	         *     vec1.toString();
	         *     // => x:80, y:20
	         *
	         * @param {Vector} vector The other vector you want subtract from this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtract',
	        value: function subtract(vec) {
	            this.x -= vec.x;
	            this.y -= vec.y;
	            return this;
	        }
	
	        /**
	         * Subtracts the given scalar from both axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 200);
	         *
	         *     vec.subtractScalar(20);
	         *     vec.toString();
	         *     // => x: 80, y: 180
	         *
	         * @param {Number} scalar The scalar to subtract
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractScalar',
	        value: function subtractScalar(scalar) {
	            this.x -= scalar;
	            this.y -= scalar;
	            return this;
	        }
	
	        /**
	         * Subtracts the given scalar from the X axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 200);
	         *
	         *     vec.subtractScalarX(20);
	         *     vec.toString();
	         *     // => x: 80, y: 200
	         *
	         * @param {Number} scalar The scalar to subtract
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractScalarX',
	        value: function subtractScalarX(scalar) {
	            this.x -= scalar;
	            return this;
	        }
	
	        /**
	         * Subtracts the given scalar from the Y axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 200);
	         *
	         *     vec.subtractScalarY(20);
	         *     vec.toString();
	         *     // => x: 100, y: 180
	         *
	         * @param {Number} scalar The scalar to subtract
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractScalarY',
	        value: function subtractScalarY(scalar) {
	            this.y -= scalar;
	            return this;
	        }
	
	        /**
	         * Divides the X axis by the x component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 0);
	         *
	         *     vec.divideX(vec2);
	         *     vec.toString();
	         *     // => x:50, y:50
	         *
	         * @param {Vector} vector The other vector you want divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideX',
	        value: function divideX(vector) {
	            this.x /= vector.x;
	            return this;
	        }
	
	        /**
	         * Divides the Y axis by the y component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(0, 2);
	         *
	         *     vec.divideY(vec2);
	         *     vec.toString();
	         *     // => x:100, y:25
	         *
	         * @param {Vector} vector The other vector you want divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideY',
	        value: function divideY(vector) {
	            this.y /= vector.y;
	            return this;
	        }
	
	        /**
	         * Divides both vector axis by a axis values of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 2);
	         *
	         *     vec.divide(vec2);
	         *     vec.toString();
	         *     // => x:50, y:25
	         *
	         * @param {Vector} vector The vector to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divide',
	        value: function divide(vector) {
	            this.x /= vector.x;
	            this.y /= vector.y;
	            return this;
	        }
	
	        /**
	         * Divides both vector axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.divideScalar(2);
	         *     vec.toString();
	         *     // => x:50, y:25
	         *
	         * @param {Number} The scalar to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideScalar',
	        value: function divideScalar(scalar) {
	            if (scalar !== 0) {
	                this.x /= scalar;
	                this.y /= scalar;
	            } else {
	                this.x = 0;
	                this.y = 0;
	            }
	
	            return this;
	        }
	
	        /**
	         * Divides the X axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.divideScalarX(2);
	         *     vec.toString();
	         *     // => x:50, y:50
	         *
	         * @param {Number} The scalar to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideScalarX',
	        value: function divideScalarX(scalar) {
	            if (scalar !== 0) {
	                this.x /= scalar;
	            } else {
	                this.x = 0;
	            }
	            return this;
	        }
	
	        /**
	         * Divides the Y axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.divideScalarY(2);
	         *     vec.toString();
	         *     // => x:100, y:25
	         *
	         * @param {Number} The scalar to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideScalarY',
	        value: function divideScalarY(scalar) {
	            if (scalar !== 0) {
	                this.y /= scalar;
	            } else {
	                this.y = 0;
	            }
	            return this;
	        }
	
	        /**
	         * Inverts the X axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.invertX();
	         *     vec.toString();
	         *     // => x:-100, y:50
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'invertX',
	        value: function invertX() {
	            this.x *= -1;
	            return this;
	        }
	
	        /**
	         * Inverts the Y axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.invertY();
	         *     vec.toString();
	         *     // => x:100, y:-50
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'invertY',
	        value: function invertY() {
	            this.y *= -1;
	            return this;
	        }
	
	        /**
	         * Inverts both axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.invert();
	         *     vec.toString();
	         *     // => x:-100, y:-50
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'invert',
	        value: function invert() {
	            this.invertX();
	            this.invertY();
	            return this;
	        }
	
	        /**
	         * Multiplies the X axis by X component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 0);
	         *
	         *     vec.multiplyX(vec2);
	         *     vec.toString();
	         *     // => x:200, y:50
	         *
	         * @param {Vector} vector The vector to multiply the axis with
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiplyX',
	        value: function multiplyX(vector) {
	            this.x *= vector.x;
	            return this;
	        }
	
	        /**
	         * Multiplies the Y axis by Y component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(0, 2);
	         *
	         *     vec.multiplyX(vec2);
	         *     vec.toString();
	         *     // => x:100, y:100
	         *
	         * @param {Vector} vector The vector to multiply the axis with
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiplyY',
	        value: function multiplyY(vector) {
	            this.y *= vector.y;
	            return this;
	        }
	
	        /**
	         * Multiplies both vector axis by values from a given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 2);
	         *
	         *     vec.multiply(vec2);
	         *     vec.toString();
	         *     // => x:200, y:100
	         *
	         * @param {Vector} vector The vector to multiply by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiply',
	        value: function multiply(vector) {
	            this.x *= vector.x;
	            this.y *= vector.y;
	            return this;
	        }
	
	        /**
	         * Multiplies both vector axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.multiplyScalar(2);
	         *     vec.toString();
	         *     // => x:200, y:100
	         *
	         * @param {Number} The scalar to multiply by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiplyScalar',
	        value: function multiplyScalar(scalar) {
	            this.x *= scalar;
	            this.y *= scalar;
	            return this;
	        }
	    }, {
	        key: 'multiplyScalarX',
	        value: function multiplyScalarX(scalar) {
	            this.x *= scalar;
	            return this;
	        }
	    }, {
	        key: 'multiplyScalarY',
	        value: function multiplyScalarY(scalar) {
	            this.y *= scalar;
	            return this;
	        }
	
	        /**
	         * Normalize
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'normalize',
	        value: function normalize() {
	            var length = this.length();
	
	            if (length === 0) {
	                this.x = 1;
	                this.y = 0;
	            } else {
	                this.divide(Vector(length, length));
	            }
	            return this;
	        }
	    }, {
	        key: 'norm',
	        value: function norm() {
	            return this.normalize();
	        }
	
	        /**
	         * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.limit(80, 0.9);
	         *     vec.toString();
	         *     // => x:90, y:50
	         *
	         * @param {Number} max The maximum value for both x and y axis
	         * @param {Number} factor Factor by which the axis are to be multiplied with
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'limit',
	        value: function limit(max, factor) {
	            if (Math.abs(this.x) > max) {
	                this.x *= factor;
	            }
	            if (Math.abs(this.y) > max) {
	                this.y *= factor;
	            }
	            return this;
	        }
	
	        /**
	         * Randomizes both vector axis with a value between 2 vectors
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.randomize(new Vector(50, 60), new Vector(70, 80`));
	         *     vec.toString();
	         *     // => x:67, y:73
	         *
	         * @param {Vector} topLeft first vector
	         * @param {Vector} bottomRight second vector
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'randomize',
	        value: function randomize(topLeft, bottomRight) {
	            this.randomizeX(topLeft, bottomRight);
	            this.randomizeY(topLeft, bottomRight);
	
	            return this;
	        }
	    }, {
	        key: 'randomizeX',
	        value: function randomizeX(topLeft, bottomRight) {
	            var min = Math.min(topLeft.x, bottomRight.x);
	            var max = Math.max(topLeft.x, bottomRight.x);
	            this.x = random(min, max);
	            return this;
	        }
	    }, {
	        key: 'randomizeY',
	        value: function randomizeY(topLeft, bottomRight) {
	            var min = Math.min(topLeft.y, bottomRight.y);
	            var max = Math.max(topLeft.y, bottomRight.y);
	            this.y = random(min, max);
	            return this;
	        }
	
	        /**
	         * Randomly randomizes either axis between 2 vectors
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.randomizeAny(new Vector(50, 60), new Vector(70, 80));
	         *     vec.toString();
	         *     // => x:100, y:77
	         *
	         * @param {Vector} topLeft first vector
	         * @param {Vector} bottomRight second vector
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'randomizeAny',
	        value: function randomizeAny(topLeft, bottomRight) {
	            if (!!Math.round(Math.random())) {
	                this.randomizeX(topLeft, bottomRight);
	            } else {
	                this.randomizeY(topLeft, bottomRight);
	            }
	            return this;
	        }
	
	        /**
	         * Rounds both axis to an integer value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100.2, 50.9);
	         *
	         *     vec.unfloat();
	         *     vec.toString();
	         *     // => x:100, y:51
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'unfloat',
	        value: function unfloat() {
	            this.x = Math.round(this.x);
	            this.y = Math.round(this.y);
	            return this;
	        }
	
	        /**
	         * Rounds both axis to a certain precision
	         *
	         * ### Examples:
	         *     var vec = new Vector(100.2, 50.9);
	         *
	         *     vec.unfloat();
	         *     vec.toString();
	         *     // => x:100, y:51
	         *
	         * @param {Number} Precision (default: 8)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'toFixed',
	        value: function toFixed(precision) {
	            if (typeof precision === 'undefined') {
	                precision = 8;
	            }
	            this.x = this.x.toFixed(precision);
	            this.y = this.y.toFixed(precision);
	            return this;
	        }
	
	        /**
	         * Performs a linear blend / interpolation of the X axis towards another vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 100);
	         *     var vec2 = new Vector(200, 200);
	         *
	         *     vec1.mixX(vec2, 0.5);
	         *     vec.toString();
	         *     // => x:150, y:100
	         *
	         * @param {Vector} vector The other vector
	         * @param {Number} amount The blend amount (optional, default: 0.5)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'mixX',
	        value: function mixX(vec, amount) {
	            if (typeof amount === 'undefined') {
	                amount = 0.5;
	            }
	
	            this.x = (1 - amount) * this.x + amount * vec.x;
	            return this;
	        }
	
	        /**
	         * Performs a linear blend / interpolation of the Y axis towards another vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 100);
	         *     var vec2 = new Vector(200, 200);
	         *
	         *     vec1.mixY(vec2, 0.5);
	         *     vec.toString();
	         *     // => x:100, y:150
	         *
	         * @param {Vector} vector The other vector
	         * @param {Number} amount The blend amount (optional, default: 0.5)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'mixY',
	        value: function mixY(vec, amount) {
	            if (typeof amount === 'undefined') {
	                amount = 0.5;
	            }
	
	            this.y = (1 - amount) * this.y + amount * vec.y;
	            return this;
	        }
	
	        /**
	         * Performs a linear blend / interpolation towards another vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 100);
	         *     var vec2 = new Vector(200, 200);
	         *
	         *     vec1.mix(vec2, 0.5);
	         *     vec.toString();
	         *     // => x:150, y:150
	         *
	         * @param {Vector} vector The other vector
	         * @param {Number} amount The blend amount (optional, default: 0.5)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'mix',
	        value: function mix(vec, amount) {
	            this.mixX(vec, amount);
	            this.mixY(vec, amount);
	            return this;
	        }
	
	        /**
	         * # Products
	         */
	
	        /**
	         * Creates a clone of this vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = vec1.clone();
	         *
	         *     vec2.toString();
	         *     // => x:10, y:10
	         *
	         * @return {Vector} A clone of the vector
	         * @api public
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new Vector(this.x, this.y);
	        }
	
	        /**
	         * Copies another vector's X component in to its own
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 20);
	         *     var vec2 = vec1.copyX(vec1);
	         *
	         *     vec2.toString();
	         *     // => x:20, y:10
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'copyX',
	        value: function copyX(vec) {
	            this.x = vec.x;
	            return this;
	        }
	
	        /**
	         * Copies another vector's Y component in to its own
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 20);
	         *     var vec2 = vec1.copyY(vec1);
	         *
	         *     vec2.toString();
	         *     // => x:10, y:20
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'copyY',
	        value: function copyY(vec) {
	            this.y = vec.y;
	            return this;
	        }
	
	        /**
	         * Copies another vector's X and Y components in to its own
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 20);
	         *     var vec2 = vec1.copy(vec1);
	         *
	         *     vec2.toString();
	         *     // => x:20, y:20
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'copy',
	        value: function copy(vec) {
	            this.copyX(vec);
	            this.copyY(vec);
	            return this;
	        }
	
	        /**
	         * Sets the vector to zero (0,0)
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *		 var1.zero();
	         *     vec1.toString();
	         *     // => x:0, y:0
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'zero',
	        value: function zero() {
	            this.x = this.y = 0;
	            return this;
	        }
	
	        /**
	         * Calculates the dot product of this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.dot(vec2);
	         *     // => 23000
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Dot product
	         * @api public
	         */
	
	    }, {
	        key: 'dot',
	        value: function dot(vec2) {
	            return this.x * vec2.x + this.y * vec2.y;
	        }
	    }, {
	        key: 'cross',
	        value: function cross(vec2) {
	            return this.x * vec2.y - this.y * vec2.x;
	        }
	
	        /**
	         * Projects a vector onto another vector, setting itself to the result.
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 0);
	         *     var vec2 = new Vector(100, 100);
	         *
	         *     vec.projectOnto(vec2);
	         *     vec.toString();
	         *     // => x:50, y:50
	         *
	         * @param {Vector} vector The other vector you want to project this vector onto
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'projectOnto',
	        value: function projectOnto(vec2) {
	            var coeff = (this.x * vec2.x + this.y * vec2.y) / (vec2.x * vec2.x + vec2.y * vec2.y);
	            this.x = coeff * vec2.x;
	            this.y = coeff * vec2.y;
	            return this;
	        }
	    }, {
	        key: 'horizontalAngle',
	        value: function horizontalAngle() {
	            return Math.atan2(this.y, this.x);
	        }
	    }, {
	        key: 'horizontalAngleDeg',
	        value: function horizontalAngleDeg() {
	            return radian2degrees(this.horizontalAngle());
	        }
	    }, {
	        key: 'verticalAngle',
	        value: function verticalAngle() {
	            return Math.atan2(this.x, this.y);
	        }
	    }, {
	        key: 'verticalAngleDeg',
	        value: function verticalAngleDeg() {
	            return radian2degrees(this.verticalAngle());
	        }
	    }, {
	        key: 'angle',
	        value: function angle() {
	            return this.horizontalAngle();
	        }
	    }, {
	        key: 'angleDeg',
	        value: function angleDeg() {
	            return this.horizontalAngleDeg();
	        }
	    }, {
	        key: 'direction',
	        value: function direction() {
	            return this.horizontalAngle();
	        }
	    }, {
	        key: 'rotate',
	        value: function rotate(angle) {
	            var nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
	            var ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);
	
	            this.x = nx;
	            this.y = ny;
	
	            return this;
	        }
	    }, {
	        key: 'rotateDeg',
	        value: function rotateDeg(angle) {
	            angle = degrees2radian(angle);
	            return this.rotate(angle);
	        }
	    }, {
	        key: 'rotateTo',
	        value: function rotateTo(rotation) {
	            return this.rotate(rotation - this.angle());
	        }
	    }, {
	        key: 'rotateToDeg',
	        value: function rotateToDeg(rotation) {
	            rotation = degrees2radian(rotation);
	            return this.rotateTo(rotation);
	        }
	    }, {
	        key: 'rotateBy',
	        value: function rotateBy(rotation) {
	            var angle = this.angle() + rotation;
	
	            return this.rotate(angle);
	        }
	    }, {
	        key: 'rotateByDeg',
	        value: function rotateByDeg(rotation) {
	            rotation = degrees2radian(rotation);
	            return this.rotateBy(rotation);
	        }
	
	        /**
	         * Calculates the distance of the X axis between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceX(vec2);
	         *     // => -100
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distanceX',
	        value: function distanceX(vec) {
	            return this.x - vec.x;
	        }
	
	        /**
	         * Same as `distanceX()` but always returns an absolute number
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.absDistanceX(vec2);
	         *     // => 100
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Absolute distance
	         * @api public
	         */
	
	    }, {
	        key: 'absDistanceX',
	        value: function absDistanceX(vec) {
	            return Math.abs(this.distanceX(vec));
	        }
	
	        /**
	         * Calculates the distance of the Y axis between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceY(vec2);
	         *     // => -10
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distanceY',
	        value: function distanceY(vec) {
	            return this.y - vec.y;
	        }
	
	        /**
	         * Same as `distanceY()` but always returns an absolute number
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceY(vec2);
	         *     // => 10
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Absolute distance
	         * @api public
	         */
	
	    }, {
	        key: 'absDistanceY',
	        value: function absDistanceY(vec) {
	            return Math.abs(this.distanceY(vec));
	        }
	
	        /**
	         * Calculates the euclidean distance between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distance(vec2);
	         *     // => 100.4987562112089
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distance',
	        value: function distance(vec) {
	            return Math.sqrt(this.distanceSq(vec));
	        }
	
	        /**
	         * Calculates the squared euclidean distance between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceSq(vec2);
	         *     // => 10100
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distanceSq',
	        value: function distanceSq(vec) {
	            var dx = this.distanceX(vec),
	                dy = this.distanceY(vec);
	
	            return dx * dx + dy * dy;
	        }
	
	        /**
	         * Calculates the length or magnitude of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.length();
	         *     // => 111.80339887498948
	         *
	         * @return {Number} Length / Magnitude
	         * @api public
	         */
	
	    }, {
	        key: 'length',
	        value: function length() {
	            return Math.sqrt(this.lengthSq());
	        }
	
	        /**
	         * Squared length / magnitude
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.lengthSq();
	         *     // => 12500
	         *
	         * @return {Number} Length / Magnitude
	         * @api public
	         */
	
	    }, {
	        key: 'lengthSq',
	        value: function lengthSq() {
	            return this.x * this.x + this.y * this.y;
	        }
	    }, {
	        key: 'magnitude',
	        value: function magnitude() {
	            return this.length();
	        }
	
	        /**
	         * Returns a true if vector is (0, 0)
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     vec.zero();
	         *
	         *     // => true
	         *
	         * @return {Boolean}
	         * @api public
	         */
	
	    }, {
	        key: 'isZero',
	        value: function isZero() {
	            return this.x === 0 && this.y === 0;
	        }
	
	        /**
	         * Returns a true if this vector is the same as another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(100, 50);
	         *     vec1.isEqualTo(vec2);
	         *
	         *     // => true
	         *
	         * @return {Boolean}
	         * @api public
	         */
	
	    }, {
	        key: 'isEqualTo',
	        value: function isEqualTo(vec2) {
	            return this.x === vec2.x && this.y === vec2.y;
	        }
	
	        /**
	         * # Utility Methods
	         */
	
	        /**
	         * Returns an string representation of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(10, 20);
	         *
	         *     vec.toString();
	         *     // => x:10, y:20
	         *
	         * @return {String}
	         * @api public
	         */
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'x:' + this.x + ', y:' + this.y;
	        }
	
	        /**
	         * Returns an array representation of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(10, 20);
	         *
	         *     vec.toArray();
	         *     // => [10, 20]
	         *
	         * @return {Array}
	         * @api public
	         */
	
	    }, {
	        key: 'toArray',
	        value: function toArray() {
	            return [this.x, this.y];
	        }
	
	        /**
	         * Returns an object representation of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(10, 20);
	         *
	         *     vec.toObject();
	         *     // => { x: 10, y: 20 }
	         *
	         * @return {Object}
	         * @api public
	         */
	
	    }, {
	        key: 'toObject',
	        value: function toObject() {
	            return { x: this.x, y: this.y };
	        }
	    }]);
	
	    return Vector;
	}();
	
	exports.default = Vector;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.loadImage = exports.all = undefined;
	exports.makeLoadImage = makeLoadImage;
	exports.getImageData = getImageData;
	exports.request = request;
	exports.browseFile = browseFile;
	exports.readAsDataURL = readAsDataURL;
	exports.completeMotion = completeMotion;
	exports.re = re;
	
	var _promisePolyfill = __webpack_require__(340);
	
	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
	
	var _assert = __webpack_require__(344);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	//----------------------------------------------------------------------------------------
	//
	// Promise polyfill
	//
	//----------------------------------------------------------------------------------------
	
	
	if (!window.Promise) window.Promise = _promisePolyfill2.default;
	
	var __context = document.createElement("canvas").getContext("2d");
	
	(0, _assert2.default)(__context, "CanvasRenderingContext2D를 찾을 수 없습니다.");
	
	var all = exports.all = Promise.all.bind(Promise);
	
	//----------------------------------------------------------------------------------------
	//
	// Image
	//
	//----------------------------------------------------------------------------------------
	
	/**
	 * loadImage 함수를 생성한다. 
	 * 1. crossOrigin 인자를 이용해 load할 image element에 crossOrigin 속성을 제어할 수 있다. 
	 * @param  {String} crossOrigin [description]
	 * @return {[type]}             [description]
	 */
	function makeLoadImage(crossOrigin) {
	
		return function (url) {
			var imgElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.createElement('img');
	
	
			if (crossOrigin != null) imgElement.crossOrigin = crossOrigin;
	
			return new Promise(function (resolve, reject) {
	
				imgElement.onload = function (e) {
					validation(imgElement) ? resolve(imgElement) : reject('image element validation error');
				};
	
				imgElement.onerror = function (e) {
					return reject(e);
				};
				imgElement.src = url;
			});
		};
	}
	
	/**
	 * 이미지를 로드하는 프라미스 객체를 반환한다. 
	 * @param  {[type]} url        [description]
	 * @param  {[type]} imgElement [description]
	 * @return {[type]}            [description]
	 */
	var loadImage = exports.loadImage = makeLoadImage();
	
	/**
	 * image 유효성 체크, 가로 세로 길이로 image를 제대로 가져왔는지 확인한다. 
	 * @param  {[type]} img [description]
	 * @return {[type]}     [description]
	 */
	function validation(img) {
		return (img.width || img.naturalWidth) !== 0 && (img.height || img.naturalHeight) !== 0;
	}
	
	/**
	 * source( ImageElement || CanvasElement )의 ImageData를 가져온다. 
	 * @param  {[type]} source  [description]
	 * @param  {[type]} context [description]
	 * @return {[type]}         [description]
	 */
	function getImageData(source) {
		var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	
		context = context || __context;
	
		context.canvas.width = source.width || source.naturalWidth;
		context.canvas.height = source.height || source.naturalHeight;
	
		context.drawImage(source, 0, 0);
	
		return context.getImageData(0, 0, context.canvas.width, context.canvas.height);
	}
	
	/**
	 * request some data
	 * @param  {[type]} url    [description]
	 * @param  {String} method [description]
	 * @return {[type]}        [description]
	 */
	function request(url) {
		var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
	
		return new Promise(function (resolve, reject) {
			var req = new XMLHttpRequest();
	
			req.onload = function () {
				return resolve(req.responseText);
			};
			req.onerror = function (e) {
				return reject(e);
			};
	
			req.open(method, url);
			req.send(null);
		});
	}
	
	//----------------------------------------------------------------------------------------
	//
	// File
	//
	//----------------------------------------------------------------------------------------
	
	var __input = document.createElement('input');
	__input.setAttribute('type', 'file');
	
	/**
	 * file API를 이용해 로컬 파일 브라우져를 오픈한다. 
	 * 1. 사용자가 로드할 파일을 선택할 경우 resolve를 호출한다. 
	 * 2. 사용자가 취소할 경우 type: 'user cancel'을 호출한다. 
	 * @param  {[type]} input  [description]
	 * @param  {String} accept [description]
	 * @return {[type]}        [description]
	 */
	function browseFile() {
		var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var accept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
	
		input = input || __input;
	
		if (accept && accept.length) input.setAttribute('accept', accept);
	
		return new Promise(function (resolve, reject) {
	
			var onChange = function onChange(e) {
	
				var target = e.target,
				    files = target.files;
	
				files.length ? resolve(files) : reject({ type: "user cancel", files: files });
	
				target.removeEventListener(e.type, onChange);
			};
	
			input.addEventListener('change', onChange);
			input.click();
		});
	}
	
	/**
	 * file 객체를 불러온다. 
	 * 1. readAsDataURL을 사용하여 파일을 불러온다.
	 * 2. 성공할 경우 resolve( dataURL )을 호출한다. 
	 * 3. error의 경우 reject( error )를 호출한다. 
	 * @param  {[type]} file [description]
	 * @return {[type]}      [description]
	 */
	function readAsDataURL(file) {
	
		return new Promise(function (resolve, reject) {
	
			var reader = new FileReader();
	
			var onLoad = function onLoad(e) {
	
				resolve(e.target.result);
				clear(e.target);
			};
	
			var onError = function onError(e) {
	
				reject(e);
				clear(e.target);
			};
	
			var clear = function clear(target) {
	
				target.removeEventListener('load', onLoad);
				target.removeEventListener('error', onError);
			};
	
			reader.addEventListener('load', onLoad);
			reader.addEventListener('error', onError);
			reader.readAsDataURL(file);
		});
	}
	
	//----------------------------------------------------------------------------------------
	//
	// Util
	//
	//----------------------------------------------------------------------------------------
	/**
	 * motion이 끝나길 기다렸다 resolve
	 * 1. motion은 시작되지 않을 수 있다. 
	 * 2. 60ms 후에도 시작되지 않았다면 바로 resolve
	 * @param  {[type]} motion [description]
	 * @return {[type]}        [description]
	 */
	function completeMotion(motion) {
		var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
	
		return new Promise(function (resolve, reject) {
			if (!motion.running) {
				setTimeout(function () {
					if (!motion.running) resolve('unstarted');else motion.once('complete', function (e) {
						return resolve(e);
					});
				}, after);
			} else {
				motion.once('complete', function (e) {
					return resolve(e);
				});
			}
		});
	}
	
	function re(f) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}
	
		return f.apply(undefined, args).then(function (result) {
			if (result.done) return Promise.resolve(result.args);
	
			return re.apply(undefined, [f].concat(_toConsumableArray(result.args)));
		});
	}

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {
	
	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;
	
	  function noop() {}
	  
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }
	
	  function Promise(fn) {
	    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];
	
	    doResolve(fn, this);
	  }
	
	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }
	
	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }
	
	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }
	
	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      Promise._immediateFn(function() {
	        if (!self._handled) {
	          Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }
	
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }
	
	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }
	
	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }
	
	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };
	
	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new (this.constructor)(noop);
	
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };
	
	  Promise.all = function (arr) {
	    return new Promise(function (resolve, reject) {
	      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
	      var args = Array.prototype.slice.call(arr);
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;
	
	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }
	
	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };
	
	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }
	
	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };
	
	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };
	
	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };
	
	  // Use polyfill for setImmediate for performance gains
	  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
	    function (fn) {
	      setTimeoutFunc(fn, 0);
	    };
	
	  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };
	
	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @deprecated
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    Promise._immediateFn = fn;
	  };
	
	  /**
	   * Change the function to execute on unhandled rejection
	   * @param {function} fn Function to execute on unhandled rejection
	   * @deprecated
	   */
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    Promise._unhandledRejectionFn = fn;
	  };
	  
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(341).setImmediate))

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(342);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(343)))

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),

/***/ 344:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assert;
	
	
	/**
	 * assertion 
	 * @param  {[type]} assertion [description]
	 * @param  {[type]} message   [description]
	 * @return {[type]}           [description]
	 */
	function assert(assertion, message) {
	
	  if (!assertion) throw new Error("[Assertion Error] " + message);
	}

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _animation = __webpack_require__(330);
	
	var _Size = __webpack_require__(331);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Image = __webpack_require__(337);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _Mouse = __webpack_require__(336);
	
	var _Mouse2 = _interopRequireDefault(_Mouse);
	
	var _Vector = __webpack_require__(338);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Config = __webpack_require__(332);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _async = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var vector = void 0,
	    controlMinion = void 0,
	    minion = void 0,
	    minions = [],
	    minionURL = './../assets/image/m7.png',
	    minionImage = void 0;
	
	var Test = function () {
	    function Test() {
	        _classCallCheck(this, Test);
	
	        this.app = new PIXI.Application(_Size2.default.windowWidth, _Size2.default.windowHeight, { forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true });
	        document.body.appendChild(this.app.view);
	
	        this.canvas = this.app.renderer.view;
	        this.renderer = this.app.renderer;
	        this.stage = this.app.stage;
	
	        _Mouse2.default.renderer = this.renderer;
	        _Mouse2.default.mouse = _Config2.default.desktop ? _Mouse2.default.DESKTOP_MOUSE : _Mouse2.default.MOBILE_MOUSE;
	
	        // 미니온 보여지는 레이어
	        this.minionLayer = new PIXI.Container();
	        // 잔상이 보여지는 레이어
	        this.afterimageLayer = new PIXI.Container();
	
	        this.stage.addChild(this.afterimageLayer);
	        this.stage.addChild(this.minionLayer);
	
	        this.initialize();
	        this.initializeGUI();
	        this.render();
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this = this;
	
	            this.render = this.render.bind(this);
	
	            controlMinion = new PIXI.Sprite.fromImage('./../assets/image/m11.png');
	            controlMinion.anchor = new PIXI.Point(0.5, 0.5);
	            controlMinion.visible = false;
	            controlMinion.texture.baseTexture.on('loaded', function () {
	                controlMinion.height = 200;
	                controlMinion.scale.x = controlMinion.scale.y;
	                controlMinion.interactive = true;
	                controlMinion.buttonMode = true;
	                controlMinion.on('mousedown', _this.onControlDown);
	            });
	
	            this.isBezierTween = false;
	
	            (0, _async.loadImage)(minionURL).then(function (image) {
	                minionImage = image;
	                _this.startApplication(image);
	            }).catch(function (e) {
	                console.log(e);
	            });
	
	            this.onControlDown = this.onControlDown.bind(this);
	            this.onControlMove = this.onControlMove.bind(this);
	            this.onControlUp = this.onControlUp.bind(this);
	        }
	    }, {
	        key: 'startApplication',
	        value: function startApplication() {
	            minion = new _Image2.default(minionImage);
	            this.setMinion(minion);
	            this.minionLayer.addChild(minion);
	            this.minionLayer.addChild(controlMinion);
	
	            for (var i = 0; i < 100; i++) {
	                this.getAfterimage(i);
	            }
	
	            vector = new _Vector2.default();
	        }
	    }, {
	        key: 'setMinion',
	        value: function setMinion(minion) {
	            minion.width = 200;
	            minion.scale.y = minion.scale.x;
	            this.minionHalfWidth = minion.width / 2;
	            this.minionHalfHeight = minion.height / 2;
	            minion.x = this.minionHalfWidth;
	            minion.y = this.minionHalfHeight;
	        }
	    }, {
	        key: 'initializeGUI',
	        value: function initializeGUI() {
	            var _this2 = this;
	
	            this.gui = new dat.GUI();
	
	            this.config = {
	                time: 0.4,
	                leaveAfterImage: true,
	                easingList: [Linear.easeNone, Linear.linear, Linear.easeIn, Linear.easeOut, Linear.easeOutIn, Linear.easeInOut, Sine.easeIn, Sine.easeOut, Sine.easeOutIn, Sine.easeInOut, Quadratic.easeIn, Quadratic.easeOut, Quadratic.easeOutIn, Quadratic.easeInOut, Cubic.easeIn, Cubic.easeOut, Cubic.easeOutIn, Cubic.easeInOut, Quartic.easeIn, Quartic.easeOut, Quartic.easeOutIn, Quartic.easeInOut, Quintic.easeIn, Quintic.easeOut, Quintic.easeOutIn, Quintic.easeInOut, Circular.easeIn, Circular.easeOut, Circular.easeOutIn, Circular.easeInOut, Exponential.easeIn, Exponential.easeOut, Exponential.easeOutIn, Exponential.easeInOut, Back.easeIn, Back.easeOut, Back.easeOutIn, Back.easeInOut, Elastic.easeIn, Elastic.easeOut, Elastic.easeOutIn, Elastic.easeInOut, Bounce.easeIn, Bounce.easeOut, Bounce.easeOutIn, Bounce.easeInOut],
	                easingNameList: ['Linear.easeNone', 'Linear.linear', 'Linear.easeIn', 'Linear.easeOut', 'Linear.easeOutIn', 'Linear.easeInOut', 'Sine.easeIn', 'Sine.easeOut', 'Sine.easeOutIn', 'Sine.easeInOut', 'Quadratic.easeIn', 'Quadratic.easeOut', 'Quadratic.easeOutIn', 'Quadratic.easeInOut', 'Cubic.easeIn', 'Cubic.easeOut', 'Cubic.easeOutIn', 'Cubic.easeInOut', 'Quartic.easeIn', 'Quartic.easeOut', 'Quartic.easeOutIn', 'Quartic.easeInOut', 'Quintic.easeIn', 'Quintic.easeOut', 'Quintic.easeOutIn', 'Quintic.easeInOut', 'Circular.easeIn', 'Circular.easeOut', 'Circular.easeOutIn', 'Circular.easeInOut', 'Exponential.easeIn', 'Exponential.easeOut', 'Exponential.easeOutIn', 'Exponential.easeInOut', 'Back.easeIn', 'Back.easeOut', 'Back.easeOutIn', 'Back.easeInOut', 'Elastic.easeIn', 'Elastic.easeOut', 'Elastic.easeOutIn', 'Elastic.easeInOut', 'Bounce.easeIn', 'Bounce.easeOut', 'Bounce.easeOutIn', 'Bounce.easeInOut']
	            };
	
	            var index = this.getEasingIndex('Back.easeOut');
	            this.config.easing = this.config.easingNameList[index];
	            this.config.selectedEasing = this.config.easingList[index];
	
	            // 기본 함수 테스트
	            this.config.tween = this.tween.bind(this);
	            this.config.bezier = this.bezier.bind(this);
	
	            this.gui.add(this.config, 'leaveAfterImage');
	            this.gui.add(this.config, 'time').min(0).step(0.1).max(4);
	            var easingControl = this.gui.add(this.config, 'easing', this.config.easingNameList);
	            easingControl.onFinishChange(function (easingName) {
	                _this2.config.selectedEasing = _this2.config.easingList[_this2.getEasingIndex(easingName)];
	            });
	
	            this.gui.add(this.config, 'tween');
	            this.gui.add(this.config, 'bezier');
	        }
	    }, {
	        key: 'getEasingIndex',
	        value: function getEasingIndex(easingName) {
	            for (var i = 0; i < this.config.easingNameList.length; i++) {
	                if (easingName === this.config.easingNameList[i]) {
	                    return i;
	                }
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update(ms) {}
	    }, {
	        key: 'render',
	        value: function render(ms) {
	            this.update(ms);
	            (0, _animation.requestAnimationFrame)(this.render);
	        }
	    }, {
	        key: 'tween',
	        value: function tween() {
	            this.isBezierTween = false;
	
	            this.current = _Vector2.default.fromObject(minion);
	            this.to = this.getRandomPosition();
	
	            this.startTween(this.current.clone(), this.to.clone());
	            this.drawAfterimage(this.current.clone(), this.to.clone());
	        }
	    }, {
	        key: 'startTween',
	        value: function startTween(current, to) {
	            if (this.goTween) {
	                this.goTween.stop();
	            }
	
	            var time = Number(this.config.time),
	                easing = this.config.selectedEasing,
	                direction = current.subtract(to);
	
	            to.rotation = direction.direction() + Math.PI / 2;
	            this.goTween = Be.to(minion, to, time, easing);
	            this.goTween.play();
	        }
	    }, {
	        key: 'drawAfterimage',
	        value: function drawAfterimage(current, to) {
	            var _this3 = this;
	
	            this.clearAfterimage();
	
	            if (this.drawAfterTween) {
	                this.drawAfterTween.stop();
	            }
	
	            this.drawAfterimageIndex = 0;
	
	            var time = Number(this.config.time),
	                easing = this.config.selectedEasing,
	                direction = current.subtract(to),
	                vector = new _Vector2.default(minion.x, minion.y);
	
	            vector.alpha = 0.01;
	            vector.rotation = minion.rotation;
	
	            this.drawAfterTween = Be.to(vector, {
	                x: to.x, y: to.y, alpha: 0.1,
	                rotation: direction.direction() + Math.PI / 2
	            }, time, easing);
	
	            this.drawAfterTween.onUpdate = function () {
	                _this3.setAfterimage(_this3.drawAfterimageIndex, vector);
	                _this3.drawAfterimageIndex++;
	            };
	            this.drawAfterTween.onComplete = function () {
	                _this3.setAfterimage(_this3.drawAfterimageIndex, vector);
	                _this3.drawAfterimageIndex++;
	
	                if (_this3.config.leaveAfterImage === false) {
	                    _this3.hideAfterImage(_this3.current.clone(), _this3.to.clone());
	                }
	            };
	
	            this.drawAfterTween.play();
	        }
	    }, {
	        key: 'hideAfterImage',
	        value: function hideAfterImage(current, to) {
	            var _this4 = this;
	
	            if (this.hideAfterTween) {
	                this.hideAfterTween.stop();
	            }
	
	            this.hideAfterimageIndex = 0;
	
	            var time = Number(this.config.time),
	                easing = this.config.selectedEasing,
	                vector = new _Vector2.default(minion.x, minion.y);
	
	            this.hideAfterTween = Be.to(vector, { x: to.x, y: to.y }, time, easing);
	            this.hideAfterTween.onUpdate = this.hideAfterTween.onComplete = function () {
	                minions[_this4.hideAfterimageIndex].visible = false;
	                _this4.hideAfterimageIndex++;
	            };
	
	            this.hideAfterTween.play();
	        }
	    }, {
	        key: 'setAfterimage',
	        value: function setAfterimage(index, props) {
	            var image = this.getAfterimage(index);
	            image.x = props.x;
	            image.y = props.y;
	            image.alpha = props.alpha;
	            image.rotation = props.rotation;
	            image.visible = true;
	        }
	    }, {
	        key: 'clearAfterimage',
	        value: function clearAfterimage() {
	            var total = minions.length;
	
	            for (var i = 0; i < total; i++) {
	                var minion = minions[i];
	                minion.visible = false;
	            }
	        }
	    }, {
	        key: 'getAfterimage',
	        value: function getAfterimage(index) {
	            if (!minions[index]) {
	                var afterimage = new _Image2.default(minionImage);
	                afterimage.visible = false;
	                this.setMinion(afterimage);
	                this.afterimageLayer.addChild(afterimage);
	                minions.push(afterimage);
	            }
	
	            return minions[index];
	        }
	    }, {
	        key: 'getRandomPosition',
	        value: function getRandomPosition() {
	            return new _Vector2.default().randomize({ x: this.minionHalfWidth, y: this.minionHalfHeight }, { x: _Size2.default.windowWidth - this.minionHalfWidth, y: _Size2.default.windowHeight - this.minionHalfHeight });
	        }
	    }, {
	        key: 'bezier',
	        value: function bezier() {
	            this.current = _Vector2.default.fromObject(minion);
	            this.to = this.getRandomPosition();
	
	            if (this.isBezierTween === false) {
	                controlMinion.x = _Size2.default.windowCenterX;
	                controlMinion.y = _Size2.default.windowCenterY;
	            }
	
	            this.startBezier(this.current.clone(), this.to.clone());
	            this.drawBezierAfterimage(this.current.clone(), this.to.clone());
	            this.isBezierTween = true;
	        }
	    }, {
	        key: 'startBezier',
	        value: function startBezier(current, to) {
	            if (this.bezierTween) {
	                this.bezierTween.stop();
	            }
	
	            var time = Number(this.config.time),
	                easing = this.config.selectedEasing,
	                direction = current.subtract(to);
	
	            to.rotation = direction.direction() + Math.PI / 2;
	            this.bezierTween = Be.bezierTo(minion, to, { x: controlMinion.x, y: controlMinion.y }, time, easing);
	            this.bezierTween.play();
	        }
	    }, {
	        key: 'drawBezierAfterimage',
	        value: function drawBezierAfterimage(current, to) {
	            var _this5 = this;
	
	            this.clearAfterimage();
	
	            if (this.drawBezierAfterTween) {
	                this.drawBezierAfterTween.stop();
	            }
	
	            this.drawAfterimageIndex = 0;
	
	            var time = Number(this.config.time),
	                easing = this.config.selectedEasing,
	                direction = current.subtract(to),
	                vector = _Vector2.default.fromObject(minion);
	
	            vector.alpha = 0.01;
	            vector.rotation = minion.rotation;
	
	            this.drawBezierAfterTween = Be.bezierTo(vector, { x: to.x, y: to.y, alpha: 0.1, rotation: direction.direction() + Math.PI / 2 }, { x: controlMinion.x, y: controlMinion.y }, time, easing);
	
	            this.drawBezierAfterTween.onUpdate = function () {
	                _this5.setAfterimage(_this5.drawAfterimageIndex, vector);
	                _this5.drawAfterimageIndex++;
	            };
	
	            this.drawBezierAfterTween.onComplete = function () {
	                _this5.setAfterimage(_this5.drawAfterimageIndex, vector);
	                _this5.drawAfterimageIndex++;
	
	                if (_this5.config.leaveAfterImage === false) {
	                    _this5.hideAfterImage(_this5.current.clone(), _this5.to.clone());
	                }
	            };
	
	            this.drawBezierAfterTween.play();
	        }
	    }, {
	        key: 'onControlDown',
	        value: function onControlDown(event) {
	            this.prevPoint = _Mouse2.default.global.clone();
	
	            controlMinion.off('mousedown', this.onControlDown);
	            window.addEventListener('mousemove', this.onControlMove);
	            window.addEventListener('mouseup', this.onControlUp);
	        }
	    }, {
	        key: 'onControlMove',
	        value: function onControlMove(event) {
	            var dx = _Mouse2.default.global.x - this.prevPoint.x,
	                dy = _Mouse2.default.global.y - this.prevPoint.y;
	
	            controlMinion.x += dx;
	            controlMinion.y += dy;
	
	            this.prevPoint = _Mouse2.default.global.clone();
	        }
	    }, {
	        key: 'onControlUp',
	        value: function onControlUp(event) {
	            controlMinion.on('mousedown', this.onControlDown);
	            window.removeEventListener('mousemove', this.onControlMove);
	            window.removeEventListener('mouseup', this.onControlUp);
	        }
	    }, {
	        key: 'resize',
	        value: function resize() {
	            var height = _Size2.default.windowHeight;
	            var width = _Size2.default.windowWidth;
	
	            this.canvas.width = width;
	            this.canvas.height = height;
	            this.canvas.style.width = width + 'px';
	            this.canvas.style.height = height + 'px';
	
	            this.renderer.resize(width, height);
	        }
	    }, {
	        key: 'isBezierTween',
	        set: function set(value) {
	            this._isBezierTween = value;
	            controlMinion.visible = value;
	        },
	        get: function get() {
	            return this._isBezierTween;
	        }
	    }]);
	
	    return Test;
	}();
	
	exports.default = Test;

/***/ })

});
//# sourceMappingURL=index.js.map