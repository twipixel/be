webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(348);
	
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

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _animation2 = __webpack_require__(330);
	
	var _global = __webpack_require__(349);
	
	var _global2 = _interopRequireDefault(_global);
	
	var _polyfill = __webpack_require__(351);
	
	var _polyfill2 = _interopRequireDefault(_polyfill);
	
	var _Be = __webpack_require__(357);
	
	var _Be2 = _interopRequireDefault(_Be);
	
	var _Ticker = __webpack_require__(362);
	
	var _Ticker2 = _interopRequireDefault(_Ticker);
	
	var _TickerListener = __webpack_require__(364);
	
	var _TickerListener2 = _interopRequireDefault(_TickerListener);
	
	var _EnterFrameTicker = __webpack_require__(361);
	
	var _EnterFrameTicker2 = _interopRequireDefault(_EnterFrameTicker);
	
	var _ClassRegistry = __webpack_require__(365);
	
	var _ClassRegistry2 = _interopRequireDefault(_ClassRegistry);
	
	var _UpdaterFactory = __webpack_require__(366);
	
	var _UpdaterFactory2 = _interopRequireDefault(_UpdaterFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Test = function () {
	    function Test() {
	        _classCallCheck(this, Test);
	
	        this.app = new PIXI.Application(800, 600, { backgroundColor: 0x8BC34A });
	        document.body.appendChild(this.app.view);
	
	        this.canvas = this.app.renderer.view;
	        this.stage = this.app.stage;
	
	        this.initialize();
	        this.initializeGUI();
	        this.render();
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            //this.createTicker();
	            //this.createSomething();
	            //this.createTweener();
	
	            this.testPixi();
	            this.testClass();
	            //this.testCollection();
	            this.testBit();
	            this.testFilter();
	            this.testPoint();
	            this.testObject();
	        }
	    }, {
	        key: 'createTicker',
	        value: function createTicker() {
	            console.log('ticker');
	            this.ticker = new _Ticker2.default();
	            this.ticker.add(function (ms) {
	                console.log(ms, getTimer());
	            });
	            this.ticker.start();
	        }
	    }, {
	        key: 'createSomething',
	        value: function createSomething() {
	            console.log('tickerListener');
	            var tickerLisneneter = new _TickerListener2.default();
	        }
	    }, {
	        key: 'createTweener',
	        value: function createTweener() {
	            console.log('createTwenner');
	            var tween = _Be2.default.tween({ x: 0, y: 0 }, { x: 100 }, { x: 0 }, 1);
	            tween.onUpdate = function () {
	                console.log('onUpdate', obj.x, obj.y);
	            };
	            tween.play();
	        }
	    }, {
	        key: 'testPixi',
	        value: function testPixi() {
	            if (typeof PIXI === 'undefined' || PIXI === null) {
	                console.log('PIXI Not Found');
	            } else {
	                console.log('PIXI Found');
	            }
	        }
	    }, {
	        key: 'testClass',
	        value: function testClass() {
	            console.log('testClass');
	            var n = new NoContructor();
	            n.sayHello();
	            console.log(n.getClass());
	
	            var cp = new ColorPoint(25, 8, 'green');
	            cp.toString();
	            console.log(cp instanceof ColorPoint);
	            console.log(cp instanceof Point);
	            console.log(cp.getClass().name);
	            console.log(cp.getSuper().name);
	
	            var p = new Point(10, 10);
	            console.log('******** Point.toString():', p.toString());
	
	            var copyp = p.getClass();
	            var copysuperp = p.getSuper();
	            var insp = new copyp();
	
	            console.log('class instance -----------------------');
	            console.log(copyp.name);
	            console.log(copysuperp.name);
	            console.log(insp instanceof Point);
	            console.log('class name -----------------------');
	            console.log(Point.name);
	            console.log(ColorPoint.name);
	            console.log('getPrototypeOf with instance -----------------------');
	            var prototype = Object.getPrototypeOf(cp);
	            var prototype1 = Object.getPrototypeOf(prototype);
	            var prototype2 = Object.getPrototypeOf(prototype1);
	            var prototype3 = Object.getPrototypeOf(prototype2);
	            console.log(prototype.constructor.name);
	            console.log(prototype1.constructor.name);
	            console.log(prototype2.constructor.name);
	            console.log(prototype3 === null);
	            console.log('getPrototypeOf with class -----------------------');
	            var prototype = Object.getPrototypeOf(ColorPoint);
	            var prototype1 = Object.getPrototypeOf(prototype);
	            var prototype2 = Object.getPrototypeOf(prototype1);
	            var prototype3 = Object.getPrototypeOf(prototype2);
	            console.log(prototype.constructor.name);
	            console.log(prototype1.constructor.name);
	            console.log(prototype2.constructor.name);
	            console.log(prototype3 === null);
	        }
	    }, {
	        key: 'testCollection',
	        value: function testCollection() {
	            console.log('testCollection');
	            var dic = {};
	            var col = Object.create(null);
	            for (var prop in dic) {
	                console.log(prop + ':' + dic[prop]);
	            }
	            for (var prop in col) {
	                console.log(prop + ':' + col[prop]);
	            }
	        }
	    }, {
	        key: 'testBit',
	        value: function testBit() {
	            console.log('testBit');
	            var f = 0;
	            //f |= 0x0001;
	            f |= 0x0020;
	            //f |= 0x0040;
	            console.log('-------------------');
	            console.log(0x0004 + 0x0008 + 0x0010, 0x001c);
	            console.log(0x0040 + 0x0080 + 0x0100, 0x01c0);
	            console.log(0x0200 + 0x0400 + 0x0800, 0x0e00);
	            console.log('-------------------');
	
	            console.log('-------------------');
	            console.log(0x0004 + 0x0008, 0x000C);
	            console.log(0x0020 + 0x0040 + 0x0080, 0x00E0);
	            console.log(0x0100 + 0x0200, 0x0300);
	            console.log('-------------------');
	        }
	    }, {
	        key: 'testFilter',
	        value: function testFilter() {
	            console.log('testFilter');
	            var blurFilter = new PIXI.filters.BlurFilter();
	            blurFilter.blur = 0;
	
	            console.log('blurFilter:', blurFilter);
	
	            var icon = new PIXI.Sprite.fromImage('./../assets/image/icon/github.png');
	            this.stage.addChild(icon);
	
	            icon.filters = [blurFilter];
	
	            var tween = _Be2.default.tween(icon, {
	                x: 400,
	                _blurFilter: {
	                    blurX: 4, blurY: 0
	                }
	            });
	            tween.onUpdate = function () {
	                console.log(icon.x, icon.filters[0].blurX);
	            };
	            tween.play();
	        }
	    }, {
	        key: 'testPoint',
	        value: function testPoint() {
	            console.log('testPoint');
	            var point = new PIXI.Point();
	
	            var tween = _Be2.default.tween(point, { y: 200 });
	            tween.onUpdate = function () {
	                console.log('point[%s, %s]', point.x, point.y);
	            };
	            tween.play();
	        }
	    }, {
	        key: 'testObject',
	        value: function testObject() {
	            console.log('testObject');
	            var assign = { scale: { x: 100 } };
	            Object.assign(assign, { x: 10, y: 20, scale: { x: 10, y: 20 } });
	            console.log(assign);
	        }
	    }, {
	        key: 'initializeGUI',
	        value: function initializeGUI() {
	            this.gui = new dat.GUI();
	            this.config = {};
	            this.config.animation = this.animation.bind(this);
	            this.gui.add(this.config, 'animation');
	        }
	    }, {
	        key: 'update',
	        value: function update(ms) {
	            this.app.render(this.stage);
	        }
	    }, {
	        key: 'render',
	        value: function render(ms) {
	            this.update(ms);
	            this.requestId = (0, _animation2.requestAnimationFrame)(this.render.bind(this));
	        }
	    }, {
	        key: 'animation',
	        value: function animation() {
	            (0, _animation2.animation)(this, this.onAnimation, 60, _animation2.Easing.easeOutQuad);
	            // animation(null, this.onAnimation.bind(this), 60, Easing.easeOutQuad);
	        }
	    }, {
	        key: 'onAnimation',
	        value: function onAnimation(ease, step, currentStep) {
	            console.log('ease: %s, step: %s, currentStep: %s', ease, step, currentStep);
	        }
	    }]);
	
	    return Test;
	}();
	
	/////////////////////////////////////////////////////////////////////////////
	//
	// Class
	//
	/////////////////////////////////////////////////////////////////////////////
	
	exports.default = Test;
	
	var Point = function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);
	
	        this.x = x;
	        this.y = y;
	    }
	
	    _createClass(Point, [{
	        key: 'getClass',
	        value: function getClass() {
	            return this.constructor;
	        }
	    }, {
	        key: 'getSuper',
	        value: function getSuper() {
	            return _get(Point.prototype.__proto__ || Object.getPrototypeOf(Point.prototype), 'constructor', this);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.x + ', ' + this.y + ')';
	        }
	    }]);
	
	    return Point;
	}();
	
	var ColorPoint = function (_Point) {
	    _inherits(ColorPoint, _Point);
	
	    function ColorPoint(x, y, color) {
	        _classCallCheck(this, ColorPoint);
	
	        var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));
	
	        _this.color = color;
	        return _this;
	    }
	
	    _createClass(ColorPoint, [{
	        key: 'getClass',
	        value: function getClass() {
	            return this.constructor;
	        }
	    }, {
	        key: 'getSuper',
	        value: function getSuper() {
	            return _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'constructor', this);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + ' in ' + this.color;
	        }
	    }]);
	
	    return ColorPoint;
	}(Point);
	
	var NoContructor = function (_Point2) {
	    _inherits(NoContructor, _Point2);
	
	    function NoContructor() {
	        _classCallCheck(this, NoContructor);
	
	        return _possibleConstructorReturn(this, (NoContructor.__proto__ || Object.getPrototypeOf(NoContructor)).apply(this, arguments));
	    }
	
	    _createClass(NoContructor, [{
	        key: 'sayHello',
	        value: function sayHello() {
	            console.log('say hello');
	        }
	    }]);
	
	    return NoContructor;
	}(Point);

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(350);

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	/*const startTime = Date.now();
	export default function getTimer()
	{
	    return Date.now() - startTime;
	}*/
	
	if (!global.getTimer) {
	    var startTime = Date.now();
	    global.getTimer = function () {
	        return Date.now() - startTime;
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(352);
	
	__webpack_require__(353);
	
	__webpack_require__(355);
	
	__webpack_require__(356);

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

	'use strict';
	
	if (!Array.isArray) {
	    Array.isArray = function (arg) {
	        return Object.prototype.toString.call(arg) === '[object Array]';
	    };
	}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(354);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!Object.assign) {
	    Object.assign = _objectAssign2.default;
	} // References:
	// https://github.com/sindresorhus/object-assign
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 355:
/***/ (function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// http://ejohn.org/blog/objectgetprototypeof/
	
	if (typeof Object.getPrototypeOf !== "function") {
	    if (_typeof("test".__proto__) === "object") {
	        Object.getPrototypeOf = function (object) {
	            return object.__proto__;
	        };
	    } else {
	        Object.getPrototypeOf = function (object) {
	            // May break if the constructor has been tampered with
	            return object.constructor.prototype;
	        };
	    }
	}

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// References:
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// https://gist.github.com/1579671
	// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
	// https://gist.github.com/timhall/4078614
	// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame
	
	// Expected to be used with Browserfiy
	// Browserify automatically detects the use of `global` and passes the
	// correct reference of `global`, `self`, and finally `window`
	
	var ONE_FRAME_TIME = 16;
	
	// Date.now
	if (!(Date.now && Date.prototype.getTime)) {
	    Date.now = function now() {
	        return new Date().getTime();
	    };
	}
	
	// performance.now
	if (!(global.performance && global.performance.now)) {
	    var startTime = Date.now();
	
	    if (!global.performance) {
	        global.performance = {};
	    }
	
	    global.performance.now = function () {
	        return Date.now() - startTime;
	    };
	}
	
	// requestAnimationFrame
	var lastTime = Date.now();
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	
	for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
	    var p = vendors[x];
	    global.requestAnimationFrame = global[p + 'RequestAnimationFrame'];
	    global.cancelAnimationFrame = global[p + 'CancelAnimationFrame'] || global[p + 'CancelRequestAnimationFrame'];
	}
	
	if (!global.requestAnimationFrame) {
	    global.requestAnimationFrame = function (callback) {
	        if (typeof callback !== 'function') {
	            throw new TypeError(callback + 'is not a function');
	        }
	
	        var currentTime = Date.now();
	        var delay = ONE_FRAME_TIME + lastTime - currentTime;
	
	        if (delay < 0) {
	            delay = 0;
	        }
	
	        lastTime = currentTime;
	
	        return setTimeout(function () {
	            lastTime = Date.now();
	            callback(performance.now());
	        }, delay);
	    };
	}
	
	if (!global.cancelAnimationFrame) {
	    global.cancelAnimationFrame = function (id) {
	        return clearTimeout(id);
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Linear = __webpack_require__(358);
	
	var _Linear2 = _interopRequireDefault(_Linear);
	
	var _EnterFrameTicker = __webpack_require__(361);
	
	var _EnterFrameTicker2 = _interopRequireDefault(_EnterFrameTicker);
	
	var _ClassRegistry = __webpack_require__(365);
	
	var _ClassRegistry2 = _interopRequireDefault(_ClassRegistry);
	
	var _UpdaterFactory = __webpack_require__(366);
	
	var _UpdaterFactory2 = _interopRequireDefault(_UpdaterFactory);
	
	var _ObjectTween = __webpack_require__(376);
	
	var _ObjectTween2 = _interopRequireDefault(_ObjectTween);
	
	var _ObjectUpdater = __webpack_require__(380);
	
	var _ObjectUpdater2 = _interopRequireDefault(_ObjectUpdater);
	
	var _DisplayObjectUpdater = __webpack_require__(381);
	
	var _DisplayObjectUpdater2 = _interopRequireDefault(_DisplayObjectUpdater);
	
	var _PointUpdater = __webpack_require__(382);
	
	var _PointUpdater2 = _interopRequireDefault(_PointUpdater);
	
	var _PhysicalTween = __webpack_require__(383);
	
	var _PhysicalTween2 = _interopRequireDefault(_PhysicalTween);
	
	var _ParallelTween = __webpack_require__(384);
	
	var _ParallelTween2 = _interopRequireDefault(_ParallelTween);
	
	var _SerialTween = __webpack_require__(385);
	
	var _SerialTween2 = _interopRequireDefault(_SerialTween);
	
	var _TweenDecorator = __webpack_require__(386);
	
	var _TweenDecorator2 = _interopRequireDefault(_TweenDecorator);
	
	var _ReversedTween = __webpack_require__(387);
	
	var _ReversedTween2 = _interopRequireDefault(_ReversedTween);
	
	var _RepeatedTween = __webpack_require__(388);
	
	var _RepeatedTween2 = _interopRequireDefault(_RepeatedTween);
	
	var _ScaledTween = __webpack_require__(389);
	
	var _ScaledTween2 = _interopRequireDefault(_ScaledTween);
	
	var _SlicedTween = __webpack_require__(390);
	
	var _SlicedTween2 = _interopRequireDefault(_SlicedTween);
	
	var _DelayedTween = __webpack_require__(391);
	
	var _DelayedTween2 = _interopRequireDefault(_DelayedTween);
	
	var _AddChildAction = __webpack_require__(392);
	
	var _AddChildAction2 = _interopRequireDefault(_AddChildAction);
	
	var _RemoveFromParentAction = __webpack_require__(394);
	
	var _RemoveFromParentAction2 = _interopRequireDefault(_RemoveFromParentAction);
	
	var _FunctionAction = __webpack_require__(395);
	
	var _FunctionAction2 = _interopRequireDefault(_FunctionAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 업데이터 등록 여부
	 * @type {boolean}
	 */
	var isRegist = false;
	
	/**
	 * @type {EnterFrameTicker}
	 * @private
	 */
	var _ticker = new _EnterFrameTicker2.default();
	_ticker.start();
	
	var _updaterClassRegistry = new _ClassRegistry2.default();
	var _updaterFactory = new _UpdaterFactory2.default(_updaterClassRegistry);
	
	_ObjectUpdater2.default.register(_updaterClassRegistry);
	_DisplayObjectUpdater2.default.register(_updaterClassRegistry);
	_PointUpdater2.default.register(_updaterClassRegistry);
	
	var Be = function () {
	    function Be() {
	        _classCallCheck(this, Be);
	    }
	
	    _createClass(Be, null, [{
	        key: 'registUpdater',
	
	
	        /**
	         * 업데이터 등록
	         * PIXI 라이브러리를 Be 라이브러리 보다 먼저 등록한 경우
	         * DisplayObjecter 에서 PIXI.DisplayObject 를 못 찾는 경우를 위해서
	         * Be static 함수에서 다시 한번 업데이터를 등록하도록 하였습니다.
	         */
	        value: function registUpdater() {
	            if (isRegist === false) {
	                _ObjectUpdater2.default.register(_updaterClassRegistry);
	                _DisplayObjectUpdater2.default.register(_updaterClassRegistry);
	                _PointUpdater2.default.register(_updaterClassRegistry);
	                isRegist = true;
	            }
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param from {Object}
	         * @param time {number}
	         * @param easing {IEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'tween',
	        value: function tween(target, to) {
	            var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
	            var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.create(target, to, from);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param time {number}
	         * @param easing {IEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'to',
	        value: function to(target, _to) {
	            var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;
	            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.create(target, _to, null);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            return tween;
	        }
	
	        /**
	         *
	         * @param target  {Object}
	         * @param from  {Object}
	         * @param time {number}
	         * @param easing {IEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'from',
	        value: function from(target, _from) {
	            var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;
	            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.create(target, null, _from);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            return tween;
	        }
	
	        /**
	         * 트윈을 한번 적용합니다. 원하는 시간의 모션으로 한번 적용합니다.
	         * @param target {Object}
	         * @param to  {Object}
	         * @param from  {Object}
	         * @param time {number}
	         * @param applyTime {number}
	         * @param easing {IEasing}
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(target, to) {
	            var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
	            var applyTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;
	            var easing = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.create(target, to, from);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            tween.update(applyTime);
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param from {Object}
	         * @param controlPoint {Object}
	         * @param time {number}
	         * @param easing {IEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'bezier',
	        value: function bezier(target, to) {
	            var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var controlPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	            var time = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;
	            var easing = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.createBezier(target, to, from, controlPoint);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param controlPoint {Object}
	         * @param time {number}
	         * @param easing {IEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'bezierTo',
	        value: function bezierTo(target, to) {
	            var controlPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
	            var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.createBezier(target, to, null, controlPoint);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param from {Object}
	         * @param controlPoint {Object}
	         * @param time {number}
	         * @param easing {IEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'bezierFrom',
	        value: function bezierFrom(target, from) {
	            var controlPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
	            var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	            Be.registUpdater();
	
	            var tween = new _ObjectTween2.default(_ticker);
	            tween.updater = _updaterFactory.createBezier(target, null, from, controlPoint);
	            tween.time = time;
	            tween.easing = easing || _Linear2.default.easeNone;
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param from {Object}
	         * @param easing {IPhysicalEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'physical',
	        value: function physical(target, to) {
	            var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	            Be.registUpdater();
	
	            var tween = new _PhysicalTween2.default(_ticker);
	            tween.updater = _updaterFactory.createPhysical(target, to, from, easing || Physical.exponential());
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param easing {IPhysicalEasig}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'physicalTo',
	        value: function physicalTo(target, to) {
	            var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	            Be.registUpdater();
	
	            var tween = new _PhysicalTween2.default(_ticker);
	            tween.updater = _updaterFactory.createPhysical(target, to, null, easing || Physical.exponential());
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param from {Object}
	         * @param easing {IPhysicalEasing}
	         * @returns {IObjectTween}
	         */
	
	    }, {
	        key: 'physicalFrom',
	        value: function physicalFrom(target, from) {
	            var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	            Be.registUpdater();
	
	            var tween = new _PhysicalTween2.default(_ticker);
	            tween.updater = _updaterFactory.createPhysical(target, null, from, easing || Physical.exponential());
	            return tween;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param to {Object}
	         * @param from {Object}
	         * @param applyTime {number}
	         * @param easing {IPhysicalEasing}
	         */
	
	    }, {
	        key: 'physicalApply',
	        value: function physicalApply(target, to) {
	            var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var applyTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
	            var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	            Be.registUpdater();
	
	            var tween = new _PhysicalTween2.default(_ticker);
	            tween.updater = _updaterFactory.createPhysical(target, to, from, easing || Physical.exponential());
	            tween.update(applyTime);
	        }
	
	        /**
	         *
	         * @param tweens {Array}
	         * @returns {ITweenGroup}
	         */
	
	    }, {
	        key: 'parallel',
	        value: function parallel() {
	            Be.registUpdater();
	
	            for (var _len = arguments.length, tweens = Array(_len), _key = 0; _key < _len; _key++) {
	                tweens[_key] = arguments[_key];
	            }
	
	            return Be.parallelTweens(tweens);
	        }
	
	        /**
	         *
	         * @param tweens {Array}
	         * @returns {ITweenGroup}
	         */
	
	    }, {
	        key: 'parallelTweens',
	        value: function parallelTweens(tweens) {
	            Be.registUpdater();
	
	            return new _ParallelTween2.default(tweens, _ticker, 0);
	        }
	
	        /**
	         *
	         * @param tweens {Array}
	         * @returns {ITweenGroup}
	         */
	
	    }, {
	        key: 'serial',
	        value: function serial() {
	            Be.registUpdater();
	
	            for (var _len2 = arguments.length, tweens = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                tweens[_key2] = arguments[_key2];
	            }
	
	            return Be.serialTweens(tweens);
	        }
	
	        /**
	         *
	         * @param tweens {Array}
	         * @returns {ITweenGroup}
	         */
	
	    }, {
	        key: 'serialTweens',
	        value: function serialTweens(tweens) {
	            Be.registUpdater();
	
	            return new _SerialTween2.default(tweens, _ticker, 0);
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @param reversePosition {boolean}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'reverse',
	        value: function reverse(tween) {
	            var reversePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            Be.registUpdater();
	
	            var pos = reversePosition ? tween.duration - tween.position : 0.0;
	            if (tween instanceof _ReversedTween2.default) {
	                return new _TweenDecorator2.default(tween.baseTween, pos);
	            }
	            if (tween.constructor == _TweenDecorator2.default) {
	                tween = tween.baseTween;
	            }
	            return new _ReversedTween2.default(tween, pos);
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @param repeatCount {uint}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'repeat',
	        value: function repeat(tween, repeatCount) {
	            Be.registUpdater();
	
	            return new _RepeatedTween2.default(tween, repeatCount);
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @param scale {number}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'scale',
	        value: function scale(tween, _scale) {
	            Be.registUpdater();
	
	            return new _ScaledTween2.default(tween, _scale);
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @param begin {number}
	         * @param end {number}
	         * @param isPercent {boolean}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'slice',
	        value: function slice(tween, begin, end) {
	            var isPercent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	            Be.registUpdater();
	
	            if (isPercent === true) {
	                begin = tween.duration * begin;
	                end = tween.duration * end;
	            }
	            if (begin > end) {
	                return new _ReversedTween2.default(new _SlicedTween2.default(tween, end, begin), 0);
	            }
	            return new _SlicedTween2.default(tween, begin, end);
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @param delay {number}
	         * @param postDelay {number}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'delay',
	        value: function delay(tween, _delay) {
	            var postDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
	
	            Be.registUpdater();
	
	            return new _DelayedTween2.default(tween, _delay, postDelay);
	        }
	
	        /**
	         *
	         * @param target {DisplayObject}
	         * @param parent {DisplayObjectContainer}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'addChild',
	        value: function addChild(target, parent) {
	            Be.registUpdater();
	
	            return new _AddChildAction2.default(_ticker, target, parent);
	        }
	
	        /**
	         *
	         * @param target {DisplayObject}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'removeFromParent',
	        value: function removeFromParent(target) {
	            Be.registUpdater();
	
	            return new _RemoveFromParentAction2.default(_ticker, target);
	        }
	
	        /**
	         *
	         * @param func {Function}
	         * @param params {Array}
	         * @param useRollback {boolean}
	         * @param rollbackFunc {Function}
	         * @param rollbackParams {Array}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'func',
	        value: function func(_func) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	            var useRollback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	            var rollbackFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	            var rollbackParams = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	            Be.registUpdater();
	
	            return new _FunctionAction2.default(_ticker, _func, params, useRollback, rollbackFunc, rollbackParams);
	        }
	    }, {
	        key: 'VERSION',
	        get: function get() {
	            return '0.9.4 (Beta)';
	        }
	    }]);
	
	    return Be;
	}();
	
	exports.default = Be;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _EaseNone = __webpack_require__(359);
	
	var _EaseNone2 = _interopRequireDefault(_EaseNone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _linear = new _EaseNone2.default();
	
	var Linear = function () {
	  function Linear() {
	    _classCallCheck(this, Linear);
	  }
	
	  _createClass(Linear, null, [{
	    key: 'linear',
	    get: function get() {
	      return _linear;
	    }
	  }, {
	    key: 'easeNone',
	    get: function get() {
	      return _linear;
	    }
	  }, {
	    key: 'easeIn',
	    get: function get() {
	      return _linear;
	    }
	  }, {
	    key: 'easeOut',
	    get: function get() {
	      return _linear;
	    }
	  }, {
	    key: 'easeInOut',
	    get: function get() {
	      return _linear;
	    }
	  }, {
	    key: 'easeOutIn',
	    get: function get() {
	      return _linear;
	    }
	  }]);
	
	  return Linear;
	}();
	
	exports.default = Linear;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IEasing2 = __webpack_require__(360);
	
	var _IEasing3 = _interopRequireDefault(_IEasing2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var EaseNone = function (_IEasing) {
	  _inherits(EaseNone, _IEasing);
	
	  function EaseNone() {
	    _classCallCheck(this, EaseNone);
	
	    return _possibleConstructorReturn(this, (EaseNone.__proto__ || Object.getPrototypeOf(EaseNone)).apply(this, arguments));
	  }
	
	  _createClass(EaseNone, [{
	    key: 'calculate',
	
	    /**
	     * @inheritDoc
	     */
	    value: function calculate(t, b, c, d) {
	      return c * t / d + b;
	    }
	  }]);
	
	  return EaseNone;
	}(_IEasing3.default);
	
	exports.default = EaseNone;

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * BetweenAS3
	 * 
	 * Licensed under the MIT License
	 * 
	 * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	 *                    Spark project  (www.libspark.org)
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	var IEasing = function () {
	  function IEasing() {
	    _classCallCheck(this, IEasing);
	  }
	
	  _createClass(IEasing, [{
	    key: "calculate",
	
	    /**
	     *
	     * @param t {number}
	     * @param b {number}
	     * @param c {number}
	     * @param d {number}
	     * @return {number}
	     */
	    value: function calculate(t, b, c, d) {}
	  }]);
	
	  return IEasing;
	}();
	
	exports.default = IEasing;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Ticker = __webpack_require__(362);
	
	var _Ticker2 = _interopRequireDefault(_Ticker);
	
	var _TickerListener = __webpack_require__(364);
	
	var _TickerListener2 = _interopRequireDefault(_TickerListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _ticker = new _Ticker2.default();
	
	var EnterFrameTicker = function () {
	    function EnterFrameTicker() {
	        _classCallCheck(this, EnterFrameTicker);
	
	        /**
	         * @type {TickerListener}
	         * @private
	         */
	        this._first = null;
	
	        /**
	         * @type {uint}
	         * @private
	         */
	        this._numListeners = 0;
	
	        /**
	         * AS3에서는 {Vector.<TickerListener>}
	         * 10개만 생성합니다. new Vector.<TickerListener>(10, true)
	         * @type {Array}
	         * @private
	         */
	        this._tickerListenerPaddings = [];
	
	        /**
	         * @type {number}
	         */
	        this._time = undefined;
	
	        var prevListener = null;
	
	        for (var i = 0; i < 10; ++i) {
	            var listener = new _TickerListener2.default();
	            if (prevListener != null) {
	                prevListener.nextListener = listener;
	                listener.prevListener = prevListener;
	            }
	            prevListener = listener;
	            this._tickerListenerPaddings[i] = listener;
	        }
	
	        _ticker.add(this.update, this);
	    }
	
	    /**
	     * @return {number}
	     */
	
	
	    _createClass(EnterFrameTicker, [{
	        key: 'addTickerListener',
	
	
	        /**
	         * @param listener {TickerListener}
	         */
	        value: function addTickerListener(listener) {
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
	
	    }, {
	        key: 'removeTickerListener',
	        value: function removeTickerListener(listener) {
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
	         * @inheritDoc
	         */
	
	    }, {
	        key: 'start',
	        value: function start() {
	            this._time = getTimer() / 1000;
	            _ticker.start();
	        }
	
	        /**
	         * @inheritDoc
	         */
	
	    }, {
	        key: 'stop',
	        value: function stop() {
	            _ticker.stop();
	        }
	
	        /**
	         * @private
	         */
	
	    }, {
	        key: 'update',
	        value: function update(currentTime) {
	            var t = this._time = getTimer() / 1000,
	                n = 8 - this._numListeners % 8,
	                listener = this._tickerListenerPaddings[0],
	                l = this._tickerListenerPaddings[n],
	                ll = null;
	
	            if ((l.nextListener = this._first) != null) {
	                this._first.prevListener = l;
	            }
	
	            while (listener.nextListener != null) {
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	                if ((listener = listener.nextListener).tick(t)) {
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
	
	            if ((this._first = l.nextListener) != null) {
	                this._first.prevListener = null;
	            }
	            l.nextListener = this._tickerListenerPaddings[n + 1];
	        }
	    }, {
	        key: 'time',
	        get: function get() {
	            return this._time;
	        }
	    }]);
	
	    return EnterFrameTicker;
	}();
	
	exports.default = EnterFrameTicker;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _eventemitter = __webpack_require__(363);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Internal event used by composed emitter
	var TICK = 'tick';
	
	/**
	 *
	 * Target frames per millisecond.
	 * 60fps == 0.06 Frames per millisecond
	 *
	 * @static
	 * @memberof PIXI.settings
	 * @type {number}
	 * @default 0.06
	 */
	var TARGET_FPMS = 0.06;
	
	/**
	 * A Ticker class that runs an update loop that other objects listen to.
	 * This class is composed around an EventEmitter object to add listeners
	 * meant for execution on the next requested animation frame.
	 * Animation frames are requested only when necessary,
	 * e.g. When the ticker is started and the emitter has listeners.
	 *
	 * @class
	 * @memberof PIXI.ticker
	 */
	
	var Ticker = function () {
	    /**
	     *
	     */
	    function Ticker() {
	        var _this = this;
	
	        _classCallCheck(this, Ticker);
	
	        /**
	         * Internal emitter used to fire 'tick' event
	         * @private
	         */
	        this._emitter = new _eventemitter2.default();
	
	        /**
	         * Internal current frame request ID
	         * @private
	         */
	        this._requestId = null;
	
	        /**
	         * Internal value managed by minFPS property setter and getter.
	         * This is the maximum allowed milliseconds between updates.
	         * @private
	         */
	        this._maxElapsedMS = 100;
	
	        /**
	         * Whether or not this ticker should invoke the method
	         * {@link PIXI.ticker.Ticker#start} automatically
	         * when a listener is added.
	         *
	         * @member {boolean}
	         * @default false
	         */
	        this.autoStart = false;
	
	        /**
	         * Scalar time value from last frame to this frame.
	         * This value is capped by setting {@link PIXI.ticker.Ticker#minFPS}
	         * and is scaled with {@link PIXI.ticker.Ticker#speed}.
	         * **Note:** The cap may be exceeded by scaling.
	         *
	         * @member {number}
	         * @default 1
	         */
	        this.deltaTime = 1;
	
	        /**
	         * Time elapsed in milliseconds from last frame to this frame.
	         * Opposed to what the scalar {@link PIXI.ticker.Ticker#deltaTime}
	         * is based, this value is neither capped nor scaled.
	         * If the platform supports DOMHighResTimeStamp,
	         * this value will have a precision of 1 µs.
	         * Defaults to target frame time
	         *
	         * @member {number}
	         * @default 16.66
	         */
	        this.elapsedMS = 1 / TARGET_FPMS;
	
	        /**
	         * The last time {@link PIXI.ticker.Ticker#update} was invoked.
	         * This value is also reset internally outside of invoking
	         * update, but only when a new animation frame is requested.
	         * If the platform supports DOMHighResTimeStamp,
	         * this value will have a precision of 1 µs.
	         *
	         * @member {number}
	         * @default 0
	         */
	        this.lastTime = 0;
	
	        /**
	         * Factor of current {@link PIXI.ticker.Ticker#deltaTime}.
	         * @example
	         * // Scales ticker.deltaTime to what would be
	         * // the equivalent of approximately 120 FPS
	         * ticker.speed = 2;
	         *
	         * @member {number}
	         * @default 1
	         */
	        this.speed = 1;
	
	        /**
	         * Whether or not this ticker has been started.
	         * `true` if {@link PIXI.ticker.Ticker#start} has been called.
	         * `false` if {@link PIXI.ticker.Ticker#stop} has been called.
	         * While `false`, this value may change to `true` in the
	         * event of {@link PIXI.ticker.Ticker#autoStart} being `true`
	         * and a listener is added.
	         *
	         * @member {boolean}
	         * @default false
	         */
	        this.started = false;
	
	        /**
	         * Internal tick method bound to ticker instance.
	         * This is because in early 2015, Function.bind
	         * is still 60% slower in high performance scenarios.
	         * Also separating frame requests from update method
	         * so listeners may be called at any time and with
	         * any animation API, just invoke ticker.update(time).
	         *
	         * @private
	         * @param {number} time - Time since last tick.
	         */
	        this._tick = function (time) {
	            _this._requestId = null;
	
	            if (_this.started) {
	                // Invoke listeners now
	                _this.update(time);
	                // Listener side effects may have modified ticker state.
	                if (_this.started && _this._requestId === null && _this._emitter.listeners(TICK, true)) {
	                    _this._requestId = requestAnimationFrame(_this._tick);
	                }
	            }
	        };
	    }
	
	    /**
	     * Conditionally requests a new animation frame.
	     * If a frame has not already been requested, and if the internal
	     * emitter has listeners, a new frame is requested.
	     *
	     * @private
	     */
	
	
	    _createClass(Ticker, [{
	        key: '_requestIfNeeded',
	        value: function _requestIfNeeded() {
	            if (this._requestId === null && this._emitter.listeners(TICK, true)) {
	                // ensure callbacks get correct delta
	                this.lastTime = performance.now();
	                this._requestId = requestAnimationFrame(this._tick);
	            }
	        }
	
	        /**
	         * Conditionally cancels a pending animation frame.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_cancelIfNeeded',
	        value: function _cancelIfNeeded() {
	            if (this._requestId !== null) {
	                cancelAnimationFrame(this._requestId);
	                this._requestId = null;
	            }
	        }
	
	        /**
	         * Conditionally requests a new animation frame.
	         * If the ticker has been started it checks if a frame has not already
	         * been requested, and if the internal emitter has listeners. If these
	         * conditions are met, a new frame is requested. If the ticker has not
	         * been started, but autoStart is `true`, then the ticker starts now,
	         * and continues with the previous conditions to request a new frame.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_startIfPossible',
	        value: function _startIfPossible() {
	            if (this.started) {
	                this._requestIfNeeded();
	            } else if (this.autoStart) {
	                this.start();
	            }
	        }
	
	        /**
	         * Calls {@link module:eventemitter3.EventEmitter#on} internally for the
	         * internal 'tick' event. It checks if the emitter has listeners,
	         * and if so it requests a new animation frame at this point.
	         *
	         * @param {Function} fn - The listener function to be added for updates
	         * @param {Function} [context] - The listener context
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: 'add',
	        value: function add(fn, context) {
	            this._emitter.on(TICK, fn, context);
	
	            this._startIfPossible();
	
	            return this;
	        }
	
	        /**
	         * Calls {@link module:eventemitter3.EventEmitter#once} internally for the
	         * internal 'tick' event. It checks if the emitter has listeners,
	         * and if so it requests a new animation frame at this point.
	         *
	         * @param {Function} fn - The listener function to be added for one update
	         * @param {Function} [context] - The listener context
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: 'addOnce',
	        value: function addOnce(fn, context) {
	            this._emitter.once(TICK, fn, context);
	
	            this._startIfPossible();
	
	            return this;
	        }
	
	        /**
	         * Calls {@link module:eventemitter3.EventEmitter#off} internally for 'tick' event.
	         * It checks if the emitter has listeners for 'tick' event.
	         * If it does, then it cancels the animation frame.
	         *
	         * @param {Function} [fn] - The listener function to be removed
	         * @param {Function} [context] - The listener context to be removed
	         * @returns {PIXI.ticker.Ticker} This instance of a ticker
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(fn, context) {
	            this._emitter.off(TICK, fn, context);
	
	            if (!this._emitter.listeners(TICK, true)) {
	                this._cancelIfNeeded();
	            }
	
	            return this;
	        }
	
	        /**
	         * Starts the ticker. If the ticker has listeners
	         * a new animation frame is requested at this point.
	         */
	
	    }, {
	        key: 'start',
	        value: function start() {
	            if (!this.started) {
	                this.started = true;
	                this._requestIfNeeded();
	            }
	        }
	
	        /**
	         * Stops the ticker. If the ticker has requested
	         * an animation frame it is canceled at this point.
	         */
	
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this.started) {
	                this.started = false;
	                this._cancelIfNeeded();
	            }
	        }
	
	        /**
	         * Triggers an update. An update entails setting the
	         * current {@link PIXI.ticker.Ticker#elapsedMS},
	         * the current {@link PIXI.ticker.Ticker#deltaTime},
	         * invoking all listeners with current deltaTime,
	         * and then finally setting {@link PIXI.ticker.Ticker#lastTime}
	         * with the value of currentTime that was provided.
	         * This method will be called automatically by animation
	         * frame callbacks if the ticker instance has been started
	         * and listeners are added.
	         *
	         * @param {number} [currentTime=performance.now()] - the current time of execution
	         */
	
	    }, {
	        key: 'update',
	        value: function update() {
	            var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
	
	            var elapsedMS = void 0;
	
	            // If the difference in time is zero or negative, we ignore most of the work done here.
	            // If there is no valid difference, then should be no reason to let anyone know about it.
	            // A zero delta, is exactly that, nothing should update.
	            //
	            // The difference in time can be negative, and no this does not mean time traveling.
	            // This can be the result of a race condition between when an animation frame is requested
	            // on the current JavaScript engine event loop, and when the ticker's start method is invoked
	            // (which invokes the internal _requestIfNeeded method). If a frame is requested before
	            // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
	            // can receive a time argument that can be less than the lastTime value that was set within
	            // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
	            //
	            // This check covers this browser engine timing issue, as well as if consumers pass an invalid
	            // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.
	
	            if (currentTime > this.lastTime) {
	                // Save uncapped elapsedMS for measurement
	                elapsedMS = this.elapsedMS = currentTime - this.lastTime;
	
	                // cap the milliseconds elapsed used for deltaTime
	                if (elapsedMS > this._maxElapsedMS) {
	                    elapsedMS = this._maxElapsedMS;
	                }
	
	                this.deltaTime = elapsedMS * TARGET_FPMS * this.speed;
	
	                // Invoke listeners added to internal emitter
	                this._emitter.emit(TICK, this.deltaTime);
	            } else {
	                this.deltaTime = this.elapsedMS = 0;
	            }
	
	            this.lastTime = currentTime;
	        }
	
	        /**
	         * The frames per second at which this ticker is running.
	         * The default is approximately 60 in most modern browsers.
	         * **Note:** This does not factor in the value of
	         * {@link PIXI.ticker.Ticker#speed}, which is specific
	         * to scaling {@link PIXI.ticker.Ticker#deltaTime}.
	         *
	         * @member {number}
	         * @readonly
	         */
	
	    }, {
	        key: 'FPS',
	        get: function get() {
	            return 1000 / this.elapsedMS;
	        }
	
	        /**
	         * Manages the maximum amount of milliseconds allowed to
	         * elapse between invoking {@link PIXI.ticker.Ticker#update}.
	         * This value iws used to cap {@link PIXI.ticker.Ticker#deltaTime},
	         * but does not effect the measured value of {@link PIXI.ticker.Ticker#FPS}.
	         * When setting this property it is clamped to a value between
	         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
	         *
	         * @member {number}
	         * @default 10
	         */
	
	    }, {
	        key: 'minFPS',
	        get: function get() {
	            return 1000 / this._maxElapsedMS;
	        },
	        set: function set(fps) // eslint-disable-line require-jsdoc
	        {
	            // Clamp: 0 to TARGET_FPMS
	            var minFPMS = Math.min(Math.max(0, fps) / 1000, TARGET_FPMS);
	
	            this._maxElapsedMS = 1 / minFPMS;
	        }
	    }]);
	
	    return Ticker;
	}();
	
	exports.default = Ticker;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';
	
	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @api private
	 */
	function Events() {}
	
	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);
	
	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}
	
	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {Mixed} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;
	
	  if (this._eventsCount === 0) return names;
	
	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Boolean} exists Only check if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Add a listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	
	  return this;
	};
	
	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	
	  return this;
	};
	
	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {Mixed} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events[evt]) return this;
	  if (!fn) {
	    if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	    return this;
	  }
	
	  var listeners = this._events[evt];
	
	  if (listeners.fn) {
	    if (
	         listeners.fn === fn
	      && (!once || listeners.once)
	      && (!context || listeners.context === context)
	    ) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	           listeners[i].fn !== fn
	        || (once && !listeners[i].once)
	        || (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }
	
	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {String|Symbol} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;
	
	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }),

/***/ 364:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * BetweenAS3
	 * 
	 * Licensed under the MIT License
	 * 
	 * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	 *                    Spark project  (www.libspark.org)
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	
	var TickerListener = function () {
	  function TickerListener() {
	    _classCallCheck(this, TickerListener);
	
	    /**
	     *
	     * @type {TickerListener}
	           */
	    this.prevListener = null;
	
	    /**
	     *
	     * @type {TickerListener}
	           */
	    this.nextListener = null;
	  }
	
	  /**
	   *
	   * @param time {number}
	   * @return {boolean}
	   */
	
	
	  _createClass(TickerListener, [{
	    key: "tick",
	    value: function tick(time) {
	      return false;
	    }
	  }]);
	
	  return TickerListener;
	}();
	
	exports.default = TickerListener;

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * BetweenAS3
	 *
	 * Licensed under the MIT License
	 *
	 * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	 *                    Spark project  (www.libspark.org)
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 */
	
	var ClassRegistry = function () {
	    /**
	     * classes 안에 클래스와 그 안에 속성이 저장되고 그에 맞는 업데이터가 등록됩니다.
	     * classes[Object][x] = ObjectUpadter
	     */
	    function ClassRegistry() {
	        _classCallCheck(this, ClassRegistry);
	
	        /**
	         * @type {Dictionary}
	         * @private
	         */
	        this._classes = {};
	
	        /**
	         * @type {Dictionary}
	         * @private
	         */
	        this._subclasses = {};
	    }
	
	    /**
	     * 타겟 클래스의 프로퍼티로 클래스 등록
	     * @param klass {Class}
	     * @param targetClass {Class}
	     * @param propertyName {string}
	     */
	
	
	    _createClass(ClassRegistry, [{
	        key: 'registerClassWithTargetClassAndPropertyName',
	        value: function registerClassWithTargetClassAndPropertyName(klass, targetClass, propertyName) {
	            if (this._classes[targetClass] == undefined) {
	                this.buildCacheFor(targetClass);
	            }
	
	            var classes = this._classes;
	            var oldClass = classes[targetClass][propertyName];
	
	            classes[targetClass][propertyName] = klass;
	
	            /**
	             * @type {Vector.<Class>}
	             */
	            var subclasses = this._subclasses[targetClass];
	            if (subclasses != null) {
	                var l = subclasses.length;
	                for (var i = 0; i < l; ++i) {
	                    var subclass = subclasses[i];
	                    if (classes[subclass][propertyName] == oldClass) {
	                        classes[subclass][propertyName] = klass;
	                    }
	                }
	            }
	        }
	
	        /**
	         *
	         * @param klass {Class}
	         * @param targetClass {Class}
	         * @param propertyNames {Array<string>}
	         */
	
	    }, {
	        key: 'registerClassWithTargetClassAndPropertyNames',
	        value: function registerClassWithTargetClassAndPropertyNames(klass, targetClass, propertyNames) {
	            var l = propertyNames.length;
	            for (var i = 0; i < l; ++i) {
	                this.registerClassWithTargetClassAndPropertyName(klass, targetClass, propertyNames[i]);
	            }
	        }
	
	        /**
	         * 클래스와 프로퍼티이름으로 Updater 반환
	         * @param targetClass {Class}
	         * @param propertyName {string}
	         * @returns {Class}
	         */
	
	    }, {
	        key: 'getClassByTargetClassAndPropertyName',
	        value: function getClassByTargetClassAndPropertyName(targetClass, propertyName) {
	            var properties = this._classes[targetClass],
	                c;
	            if (properties != null) {
	                if ((c = properties[propertyName]) != null) {
	                    return c;
	                }
	                if ((c = properties['*']) != null) {
	                    return c;
	                }
	            } else {
	                this.buildCacheFor(targetClass);
	                return this.getClassByTargetClassAndPropertyName(targetClass, propertyName);
	            }
	
	            return null;
	        }
	
	        /**
	         * @param targetClass {Class}
	         */
	
	    }, {
	        key: 'buildCacheFor',
	        value: function buildCacheFor(targetClass) {
	            var classes = this._classes;
	            var subclasses = this._subclasses;
	
	            /**
	             * @type {Dictionary}
	             */
	            var dict = {};
	
	            /**
	             * @type {Vector.<Class>}
	             */
	            var tree = this.getClassTree(targetClass);
	            var l = tree.length;
	            var i = l;
	            while (--i >= 0) {
	                var c = tree[i];
	                var d = classes[c];
	                var p;
	                if (d != null) {
	                    var newDict = {};
	
	                    if (dict != null) {
	                        for (p in dict) {
	                            newDict[p] = dict[p];
	
	                            if (!(p in d)) {
	                                d[p] = dict[p];
	                            }
	                        }
	                    }
	
	                    for (p in d) {
	                        newDict[p] = d[p];
	                    }
	                    dict = newDict;
	                } else {
	                    var dictClone = {};
	                    for (p in dict) {
	                        dictClone[p] = dict[p];
	                    }
	                    classes[c] = dictClone;
	                }
	
	                if (subclasses[c] != undefined) {
	                    var sub = subclasses[c];
	                    for (var j = i - 1; j >= 0; --j) {
	                        var subC = tree[j];
	                        if (sub.indexOf(subC) == -1) {
	                            sub.push(subC);
	                        }
	                    }
	                } else {
	                    subclasses[c] = tree.slice(0, i);
	                }
	            }
	        }
	
	        /**
	         *
	         * @param klass {Class}
	         * @returns {Vector.<Class>}
	         */
	
	    }, {
	        key: 'getClassTree',
	        value: function getClassTree(klass) {
	            var prototype;
	            var c = klass;
	
	            try {
	                prototype = klass.prototype;
	            } catch (error) {
	                return [klass, Object];
	            }
	
	            var tree = [];
	            while (c != null) {
	                tree.push(c);
	                prototype = Object.getPrototypeOf(prototype);
	
	                if (prototype != null) {
	                    try {
	                        c = prototype.constructor;
	                    } catch (error) {
	                        c = Object;
	                    }
	                } else {
	                    c = null;
	                }
	            }
	
	            return tree;
	        }
	    }]);
	
	    return ClassRegistry;
	}();
	
	exports.default = ClassRegistry;

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _UpdaterLadder = __webpack_require__(367);
	
	var _UpdaterLadder2 = _interopRequireDefault(_UpdaterLadder);
	
	var _BezierUpdater = __webpack_require__(369);
	
	var _BezierUpdater2 = _interopRequireDefault(_BezierUpdater);
	
	var _PhysicalUpdater = __webpack_require__(371);
	
	var _PhysicalUpdater2 = _interopRequireDefault(_PhysicalUpdater);
	
	var _CompositeUpdater = __webpack_require__(373);
	
	var _CompositeUpdater2 = _interopRequireDefault(_CompositeUpdater);
	
	var _PhysicalUpdaterLadder = __webpack_require__(374);
	
	var _PhysicalUpdaterLadder2 = _interopRequireDefault(_PhysicalUpdaterLadder);
	
	var _CompositePhysicalUpdater = __webpack_require__(375);
	
	var _CompositePhysicalUpdater2 = _interopRequireDefault(_CompositePhysicalUpdater);
	
	var _ClassRegistry = __webpack_require__(365);
	
	var _ClassRegistry2 = _interopRequireDefault(_ClassRegistry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UpdaterFactory = function () {
	    /**
	     * @param registry {ClassRegistry}
	     */
	    function UpdaterFactory(registry) {
	        _classCallCheck(this, UpdaterFactory);
	
	        /**
	         * @type {ClassRegistry}
	         * @private
	         */
	        this._registry = registry;
	
	        /**
	         * @type {uint}
	         * @private
	         */
	        this._poolIndex = 0;
	
	        /**
	         * @type {Vector.<Dictionary>}
	         * @private
	         */
	        this._mapPool = [];
	
	        /**
	         * @type {Vector.<Vector.<IUpdater>>}
	         * @private
	         */
	        this._listPool = [];
	    }
	
	    /**
	     * updaterFactory.create(target, to, from);
	     * @param target {Object}
	     * @param dest {Object}
	     * @param source {Object}
	     * @returns {IUpdater}
	     */
	
	
	    _createClass(UpdaterFactory, [{
	        key: 'create',
	        value: function create(target, dest, source) {
	            /**
	             * map @type {Dictionary}
	             * updaters @type {Vector.<IUpdater>}
	             * name @type {string}
	             * isRelative $이름이 붙은 변수인지 여부 @type {boolean}
	             * parent @type {IUpdater}
	             * child @type {IUpdater}
	             * updater @type {IUpdate}
	             */
	            var map, updaters, name, value, isRelative, parent, child, updater;
	
	            if (this._poolIndex > 0) {
	                --this._poolIndex;
	                map = this._mapPool[this._poolIndex];
	                updaters = this._listPool[this._poolIndex];
	            } else {
	                map = [];
	                updaters = [];
	            }
	
	            if (source != null) {
	                for (name in source) {
	                    if (typeof (value = source[name]) === 'number') {
	                        // $로 시작하는 변수의 경우
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        // source value 를 적용하기 위해서 업데이터를 얻어와 설정
	                        this.getUpdaterFor(target, name, map, updaters).setSourceValue(name, Number(value), isRelative);
	                    } else {
	                        parent = this.getUpdaterFor(target, name, map, updaters);
	                        child = this.create(parent.getObject(name), dest != null ? dest[name] : null, value);
	                        updaters.push(new _UpdaterLadder2.default(parent, child, name));
	                    }
	                }
	            }
	            if (dest != null) {
	                for (name in dest) {
	                    if (typeof (value = dest[name]) === 'number') {
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        this.getUpdaterFor(target, name, map, updaters).setDestinationValue(name, Number(value), isRelative);
	                    } else {
	                        if (!(source != null && name in source)) {
	                            parent = this.getUpdaterFor(target, name, map, updaters);
	                            child = this.create(parent.getObject(name), value, source != null ? source[name] : null);
	                            updaters.push(new _UpdaterLadder2.default(parent, child, name));
	                        }
	                    }
	                }
	            }
	
	            if (updaters.length == 1) {
	                updater = updaters[0];
	            } else if (updaters.length > 1) {
	                updater = new _CompositeUpdater2.default(target, updaters);
	            }
	
	            for (var p in map) {
	                delete map[p];
	            }
	            updaters.length = 0;
	
	            this._mapPool[this._poolIndex] = map;
	            this._listPool[this._poolIndex] = updaters;
	            ++this._poolIndex;
	
	            return updater;
	        }
	
	        /**
	         *
	         * 업데이터 반환전에 Value 설정에 사용합니다.
	         * @param target {Object}
	         * @param propertyName {string}
	         * @param map {Dictionary}
	         * @param list {Vector.<IUpdater>}
	         * @returns {IUpdater}
	         */
	
	    }, {
	        key: 'getUpdaterFor',
	        value: function getUpdaterFor(target, propertyName, map, list) {
	            var updaterClass = this._registry.getClassByTargetClassAndPropertyName(target.constructor, propertyName);
	
	            if (updaterClass != null) {
	                var updater = map[updaterClass];
	
	                if (updater == null) {
	                    updater = new updaterClass();
	                    updater.target = target;
	                    map[updaterClass] = updater;
	                    if (list != null) {
	                        list.push(updater);
	                    }
	                }
	                return updater;
	            }
	            return null;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param dest {Object}
	         * @param source {Object}
	         * @param controlPoint {Object}
	         * @returns {IUpdater}
	         */
	
	    }, {
	        key: 'createBezier',
	        value: function createBezier(target, dest, source, controlPoint) {
	            /**
	             * map @type {Dictionary}
	             * updaters @type {Vector.<IUpdater>}
	             * bezierUpdater @type {BezierUpdater}
	             * name @type {string}
	             * value @type {Object}
	             * isRelative @type {boolean}
	             * cp @type {Array}
	             * l @type {uint}
	             * i @type {uint}
	             * child @type {IUpdater}
	             * updater @type {IUpdater}
	             */
	            var map = {},
	                updaters = [],
	                bezierUpdater = new _BezierUpdater2.default(),
	                name,
	                value,
	                isRelative,
	                cp,
	                l,
	                i,
	                child,
	                updater;
	
	            bezierUpdater.target = target;
	
	            updaters.push(bezierUpdater);
	
	            if (source != null) {
	                for (name in source) {
	                    if (typeof (value = source[name]) === 'number') {
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        bezierUpdater.setSourceValue(name, Number(value), isRelative);
	                    } else {
	                        if (!map[name]) {
	                            child = this.createBezier(bezierUpdater.getObject(name), dest != null ? dest[name] : null, value, controlPoint != null ? controlPoint[name] : null);
	                            updaters.push(new _UpdaterLadder2.default(bezierUpdater, child, name));
	                            map[name] = true;
	                        }
	                    }
	                }
	            }
	            if (dest != null) {
	                for (name in dest) {
	                    if (typeof (value = dest[name]) === 'number') {
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        bezierUpdater.setDestinationValue(name, Number(value), isRelative);
	                    } else {
	                        if (!map[name]) {
	                            child = this.createBezier(bezierUpdater.getObject(name), null, source != null ? source[name] : null, controlPoint != null ? controlPoint[name] : null);
	                            updaters.push(new _UpdaterLadder2.default(bezierUpdater, child, name));
	                            map[name] = true;
	                        }
	                    }
	                }
	            }
	            if (controlPoint != null) {
	                for (name in controlPoint) {
	                    if (typeof (value = controlPoint[name]) === 'number') {
	                        value = [value];
	                    }
	                    if (Array.isArray(value)) {
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        cp = value;
	                        l = cp.length;
	                        for (i = 0; i < l; ++i) {
	                            bezierUpdater.addControlPoint(name, cp[i], isRelative);
	                        }
	                    } else {
	                        if (!map[name]) {
	                            child = this.createBezier(bezierUpdater.getObject(name), dest != null ? dest[name] : null, source != null ? source[name] : null, value);
	                            updaters.push(new _UpdaterLadder2.default(bezierUpdater, child, name));
	                            map[name] = true;
	                        }
	                    }
	                }
	            }
	
	            if (updaters.length == 1) {
	                updater = updaters[0];
	            } else if (updaters.length > 1) {
	                updater = new _CompositeUpdater2.default(target, updaters);
	            }
	
	            return updater;
	        }
	
	        /**
	         *
	         * @param target {Object}
	         * @param dest {Object}
	         * @param source {Object}
	         * @param easing {IPhysicalEasing}
	         * @returns {IPhysicalUpdater}
	         */
	
	    }, {
	        key: 'createPhysical',
	        value: function createPhysical(target, dest, source, easing) {
	            /**
	             * map @type {Ditionary}
	             * updaters @type {Vector.<IPhysicalUpdater>}
	             * physicalUpdater @type PhysicalUpdater
	             * name @type {string}
	             * value @type {Object}
	             * isRelative @type {boolean}
	             * child @type {IPhysicalUpdater}
	             * updater @type {IPhysicalUpdater}
	             */
	            var map = {},
	                updaters = [],
	                physicalUpdater = new _PhysicalUpdater2.default(),
	                name,
	                value,
	                isRelative,
	                child,
	                updater;
	
	            physicalUpdater.target = target;
	            physicalUpdater.easing = easing;
	
	            updaters.push(physicalUpdater);
	
	            if (source != null) {
	                for (name in source) {
	                    if (typeof (value = source[name]) === 'number') {
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        physicalUpdater.setSourceValue(name, Number(value), isRelative);
	                    } else {
	                        if (!map[name]) {
	                            child = this.createPhysical(physicalUpdater.getObject(name), dest != null ? dest[name] : null, value, easing);
	                            updaters.push(new _PhysicalUpdaterLadder2.default(physicalUpdater, child, name));
	                            map[name] = true;
	                        }
	                    }
	                }
	            }
	            if (dest != null) {
	                for (name in dest) {
	                    if (typeof (value = dest[name]) === 'number') {
	                        if (isRelative = /^\$/.test(name)) {
	                            name = name.substr(1);
	                        }
	                        physicalUpdater.setDestinationValue(name, Number(value), isRelative);
	                    } else {
	                        if (!map[name]) {
	                            child = this.createPhysical(physicalUpdater.getObject(name), null, source != null ? source[name] : null, easing);
	                            updaters.push(new _PhysicalUpdaterLadder2.default(physicalUpdater, child, name));
	                            map[name] = true;
	                        }
	                    }
	                }
	            }
	
	            if (updaters.length == 1) {
	                updater = updaters[0];
	            } else if (updaters.length > 1) {
	                updater = new _CompositePhysicalUpdater2.default(target, updaters);
	            }
	
	            return updater;
	        }
	    }]);
	
	    return UpdaterFactory;
	}();
	
	exports.default = UpdaterFactory;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IUpdater2 = __webpack_require__(368);
	
	var _IUpdater3 = _interopRequireDefault(_IUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var UpdaterLadder = function (_IUpdater) {
	  _inherits(UpdaterLadder, _IUpdater);
	
	  /**
	   * @param parent {IUpdater}
	   * @param child {IUpdater}
	   * @param propertyName {string}
	   */
	  function UpdaterLadder(parent, child, propertyName) {
	    _classCallCheck(this, UpdaterLadder);
	
	    var _this = _possibleConstructorReturn(this, (UpdaterLadder.__proto__ || Object.getPrototypeOf(UpdaterLadder)).call(this));
	
	    _this._parent = parent;
	    _this._child = child;
	    _this._propertyName = propertyName;
	    return _this;
	  }
	
	  /**
	   * @returns {IUpdater}
	   */
	
	
	  _createClass(UpdaterLadder, [{
	    key: 'update',
	
	
	    /**
	     * @param factor {number}
	     */
	    value: function update(factor) {
	      this._child.update(factor);
	      this._parent.setObject(this._propertyName, this._child.target);
	    }
	
	    /**
	     * @returns {IUpdater}
	     */
	
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new UpdaterLadder(this._parent, this._child, this._propertyName);
	    }
	  }, {
	    key: 'parent',
	    get: function get() {
	      return this._parent;
	    }
	
	    /**
	     * @returns {IUpdater}
	     */
	
	  }, {
	    key: 'child',
	    get: function get() {
	      return this._child;
	    }
	  }]);
	
	  return UpdaterLadder;
	}(_IUpdater3.default);
	
	exports.default = UpdaterLadder;

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * BetweenAS3
	 *
	 * Licensed under the MIT License
	 *
	 * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	 *                    Spark project  (www.libspark.org)
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 */
	
	var IUpdater = function () {
	  function IUpdater() {
	    _classCallCheck(this, IUpdater);
	  }
	
	  _createClass(IUpdater, [{
	    key: "setSourceValue",
	
	
	    /**
	     * @param propertyName {string}
	     * @param value {number}
	     * @param isRelative {boolean}
	     */
	    value: function setSourceValue(propertyName, value) {
	      var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    }
	
	    /**
	     * @param propertyName {string}
	     * @param value {number}
	     * @param isRelative {boolean}
	     */
	
	  }, {
	    key: "setDestinationValue",
	    value: function setDestinationValue(propertyName, value) {
	      var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    }
	
	    /**
	     * @param propertyName {string}
	     * @return {Object}
	     */
	
	  }, {
	    key: "getObject",
	    value: function getObject(propertyName) {
	      return null;
	    }
	
	    /**
	     * @param propertyName {string}
	     * @param value {Object}
	     */
	
	  }, {
	    key: "setObject",
	    value: function setObject(propertyName, value) {}
	
	    /**
	     * @param factor {number}
	     */
	
	  }, {
	    key: "update",
	    value: function update(factor) {}
	
	    /**
	     * @return {IUpdater}
	     */
	
	  }, {
	    key: "clone",
	    value: function clone() {
	      return null;
	    }
	  }, {
	    key: "target",
	
	    /**
	     * @return {Object}
	     */
	    get: function get() {
	      return null;
	    }
	
	    /**
	     * @param value {Object}
	     */
	    ,
	    set: function set(value) {}
	  }]);
	
	  return IUpdater;
	}();
	
	exports.default = IUpdater;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _AbstractUpdater2 = __webpack_require__(370);
	
	var _AbstractUpdater3 = _interopRequireDefault(_AbstractUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var BezierUpdater = function (_AbstractUpdater) {
	    _inherits(BezierUpdater, _AbstractUpdater);
	
	    function BezierUpdater() {
	        _classCallCheck(this, BezierUpdater);
	
	        /**
	         * @type {Object}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (BezierUpdater.__proto__ || Object.getPrototypeOf(BezierUpdater)).call(this));
	
	        _this._target = null;
	
	        /**
	         * @type {Dictionary}
	         * @private
	         */
	        _this._source = {};
	
	        /**
	         * @type {Dictionary}
	         * @private
	         */
	        _this._destination = {};
	
	        /**
	         * @type {Dictionary}
	         * @private
	         */
	        _this._controlPoint = {};
	
	        /**
	         * @type {Dictionary}
	         * @private
	         */
	        _this._relativeMap = {};
	        return _this;
	    }
	
	    /**
	     * @returns {Object}
	     */
	
	
	    _createClass(BezierUpdater, [{
	        key: 'addControlPoint',
	
	
	        /**
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolena}
	         */
	        value: function addControlPoint(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            var controlPoint = this._controlPoint[propertyName];
	            if (controlPoint == null) {
	                this._controlPoint[propertyName] = controlPoint = [];
	            }
	            controlPoint.push(value);
	            this._relativeMap['cp.' + propertyName + '.' + controlPoint.length] = isRelative;
	        }
	
	        /**
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	
	    }, {
	        key: 'setSourceValue',
	        value: function setSourceValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._source[propertyName] = value;
	            this._relativeMap['source.' + propertyName] = isRelative;
	        }
	
	        /**
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	
	    }, {
	        key: 'setDestinationValue',
	        value: function setDestinationValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._destination[propertyName] = value;
	            this._relativeMap['dest.' + propertyName] = isRelative;
	        }
	
	        /**
	         * @param propertyName {string}
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'getObject',
	        value: function getObject(propertyName) {
	            return this._target[propertyName];
	        }
	
	        /**
	         * @param propertyName {string}
	         * @param value {Object}
	         */
	
	    }, {
	        key: 'setObject',
	        value: function setObject(propertyName, value) {
	            this._target[propertyName] = value;
	        }
	    }, {
	        key: 'resolveValues',
	        value: function resolveValues() {
	            /**
	             * key @type {string}
	             * target @type {Objecct}
	             * source @type {Dictionary}
	             * dest @type {Dictionary}
	             * controlPoint @type {Dictionary}
	             * cpVec @type {Vector.<Number>}
	             * l @type {uint}
	             * i @type {uint}
	             * rMap @type {Dictionary}
	             */
	            var key,
	                target = this._target,
	                source = this._source,
	                dest = this._destination,
	                controlPoint = this._controlPoint,
	                cpVec,
	                l,
	                i,
	                rMap = this._relativeMap;
	
	            for (key in source) {
	                if (dest[key] == undefined) {
	                    dest[key] = target[key];
	                }
	                if (rMap['source.' + key]) {
	                    source[key] += target[key];
	                }
	            }
	            for (key in dest) {
	                if (source[key] == undefined) {
	                    source[key] = target[key];
	                }
	                if (rMap['dest.' + key]) {
	                    dest[key] += target[key];
	                }
	            }
	            for (key in controlPoint) {
	                cpVec = controlPoint[key];
	                l = cpVec.length;
	                for (i = 0; i < l; ++i) {
	                    if (rMap['cp.' + key + '.' + i]) {
	                        cpVec[i] += target[key];
	                    }
	                }
	            }
	        }
	
	        /**
	         * @param factor {number}
	         */
	
	    }, {
	        key: 'updateObject',
	        value: function updateObject(factor) {
	            /**
	             * invert @type {number}
	             * t @type {Object}
	             * d @type {Dictionary}
	             * s @type {Dictionary}
	             * b @type {number}
	             * cp @type {Dictionary}
	             * cpVec @type {Vector.<Number>}
	             * l @type {uint}
	             * ip @type {uint}
	             * it @type {number}
	             * p1 @type {number}
	             * p2 @type {number}
	             * name @type {string}
	             */
	            var invert = 1.0 - factor,
	                t = this._target,
	                d = this._destination,
	                s = this._source,
	                b,
	                cp = this._controlPoint,
	                cpVec,
	                l,
	                ip,
	                it,
	                p1,
	                p2,
	                name;
	
	            // Thank you, Tweener & Robert Penner!
	
	            for (name in d) {
	
	                b = s[name];
	
	                if (factor != 1.0 && (cpVec = this._controlPoint[name]) != null) {
	                    if ((l = cpVec.length) == 1) {
	                        t[name] = b + factor * (2 * invert * (cpVec[0] - b) + factor * (d[name] - b));
	                    } else {
	                        ip = factor * l >> 0;
	                        it = (factor - ip * (1 / l)) * l;
	                        if (ip == 0) {
	                            p1 = b;
	                            p2 = (cpVec[0] + cpVec[1]) / 2;
	                        } else if (ip == l - 1) {
	                            p1 = (cpVec[ip - 1] + cpVec[ip]) / 2;
	                            p2 = d[name];
	                        } else {
	                            p1 = (cpVec[ip - 1] + cpVec[ip]) / 2;
	                            p2 = (cpVec[ip] + cpVec[ip + 1]) / 2;
	                        }
	                        t[name] = p1 + it * (2 * (1 - it) * (cpVec[ip] - p1) + it * (p2 - p1));
	                    }
	                } else {
	                    t[name] = b * invert + d[name] * factor;
	                }
	            }
	        }
	
	        /**
	         * @returns {AbstractUpdater}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new BezierUpdater();
	        }
	
	        /**
	         * @param source {AbstractUpdater}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            _get(BezierUpdater.prototype.__proto__ || Object.getPrototypeOf(BezierUpdater.prototype), 'copyFrom', this).call(this, source);
	
	            var obj = source;
	
	            this._target = obj._target;
	            this.copyObject(this._source, obj._source);
	            this.copyObject(this._destination, obj._destination);
	            this.copyObject(this._controlPoint, obj._controlPoint);
	            this.copyObject(this._relativeMap, obj._relativeMap);
	        }
	
	        /**
	         * @param to {Object}
	         * @param from {Object}
	         */
	
	    }, {
	        key: 'copyObject',
	        value: function copyObject(to, from) {
	            for (var name in from) {
	                to[name] = from[name];
	            }
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	    }]);
	
	    return BezierUpdater;
	}(_AbstractUpdater3.default);
	
	exports.default = BezierUpdater;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IUpdater2 = __webpack_require__(368);
	
	var _IUpdater3 = _interopRequireDefault(_IUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AbstractUpdater = function (_IUpdater) {
	  _inherits(AbstractUpdater, _IUpdater);
	
	  function AbstractUpdater() {
	    _classCallCheck(this, AbstractUpdater);
	
	    /**
	     * @type {boolean}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, (AbstractUpdater.__proto__ || Object.getPrototypeOf(AbstractUpdater)).call(this));
	
	    _this._isResolved = false;
	    return _this;
	  }
	
	  /**
	   *
	   * @returns {Object}
	   */
	
	
	  _createClass(AbstractUpdater, [{
	    key: 'setSourceValue',
	
	
	    /**
	     *
	     * @param propertyName {string}
	     * @param value {number}
	     * @param isRelative {boolean}
	     */
	    value: function setSourceValue(propertyName, value) {
	      var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    }
	
	    /**
	     *
	     * @param propertyName {string}
	     * @param value {number}
	     * @param isRelative {boolean}
	     */
	
	  }, {
	    key: 'setDestinationValue',
	    value: function setDestinationValue(propertyName, value) {
	      var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    }
	
	    /**
	     *
	     * @param propertyName {string}
	     * @returns {Object}
	     */
	
	  }, {
	    key: 'getObject',
	    value: function getObject(propertyName) {
	      return null;
	    }
	
	    /**
	     *
	     * @param propertyName {string}
	     * @param value {Object}
	     */
	
	  }, {
	    key: 'setObject',
	    value: function setObject(propertyName, value) {}
	
	    /**
	     * @param factor {number}
	     */
	
	  }, {
	    key: 'update',
	    value: function update(factor) {
	      if (this._isResolved === false) {
	        this.resolveValues();
	        this._isResolved = true;
	      }
	      this.updateObject(factor);
	    }
	  }, {
	    key: 'resolveValues',
	    value: function resolveValues() {}
	
	    /**
	     * @param factor {number}
	     */
	
	  }, {
	    key: 'updateObject',
	    value: function updateObject(factor) {}
	
	    /**
	     * @returns {IUpdater}
	     */
	
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var instance = this.newInstance();
	      if (instance != null) {
	        instance.copyFrom(this);
	      }
	      return instance;
	    }
	
	    /**
	     * @return {AbstractUpdater}
	     */
	
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      return null;
	    }
	
	    /**
	     * @param source {AbstractUpdater}
	     */
	
	  }, {
	    key: 'copyFrom',
	    value: function copyFrom(source) {
	      // Do NOT copy _isResolved property.
	    }
	  }, {
	    key: 'target',
	    get: function get() {
	      return null;
	    }
	
	    /**
	     *
	     * @param value {Object}
	     */
	    ,
	    set: function set(value) {}
	  }]);
	
	  return AbstractUpdater;
	}(_IUpdater3.default);
	
	exports.default = AbstractUpdater;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPhysicalUpdater2 = __webpack_require__(372);
	
	var _IPhysicalUpdater3 = _interopRequireDefault(_IPhysicalUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var PhysicalUpdater = function (_IPhysicalUpdater) {
	    _inherits(PhysicalUpdater, _IPhysicalUpdater);
	
	    function PhysicalUpdater() {
	        _classCallCheck(this, PhysicalUpdater);
	
	        /**
	         *
	         * @type {Object}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (PhysicalUpdater.__proto__ || Object.getPrototypeOf(PhysicalUpdater)).call(this));
	
	        _this._target = null;
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._source = {};
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._destination = {};
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._relativeMap = {};
	
	        /**
	         *
	         * @type {IPhysicalEasing}
	         * @private
	         */
	        _this._easing = null;
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._duration = {};
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._maxDuration = 0.0;
	
	        /**
	         *
	         * @type {boolean}
	         * @private
	         */
	        _this._isResolved = false;
	        return _this;
	    }
	
	    /**
	     *
	     * @returns {Object}
	     */
	
	
	    _createClass(PhysicalUpdater, [{
	        key: 'setSourceValue',
	
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	        value: function setSourceValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._source[propertyName] = value;
	            this._relativeMap['source.' + propertyName] = isRelative;
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	
	    }, {
	        key: 'setDestinationValue',
	        value: function setDestinationValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._destination[propertyName] = value;
	            this._relativeMap['dest.' + propertyName] = isRelative;
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'getObject',
	        value: function getObject(propertyName) {
	            return this._target[propertyName];
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {Object}
	         */
	
	    }, {
	        key: 'setObject',
	        value: function setObject(propertyName, value) {
	            this._target[propertyName] = value;
	        }
	    }, {
	        key: 'resolveValues',
	        value: function resolveValues() {
	            /**
	             * key @type {string}
	             * target @type {Object}
	             * source @type {Dictionary}
	             * dest @type {Dictionary}
	             * rMap @type {Dicitonary}
	             * d @type {Dictionary}
	             * duration @type {number}
	             * maxDuration @type {number}
	             */
	            var key,
	                target = this._target,
	                source = this._source,
	                dest = this._destination,
	                rMap = this._relativeMap,
	                d = this._duration,
	                duration,
	                maxDuration = 0.0;
	
	            for (key in source) {
	                if (dest[key] == undefined) {
	                    dest[key] = target[key];
	                }
	                if (rMap['source.' + key]) {
	                    source[key] += target[key];
	                }
	            }
	            for (key in dest) {
	                if (source[key] == undefined) {
	                    source[key] = target[key];
	                }
	                if (rMap['dest.' + key]) {
	                    dest[key] += target[key];
	                }
	                duration = this._easing.getDuration(source[key], dest[key] - source[key]);
	                d[key] = duration;
	                if (maxDuration < duration) {
	                    maxDuration = duration;
	                }
	            }
	
	            this._maxDuration = maxDuration;
	
	            this._isResolved = true;
	        }
	
	        /**
	         *
	         * @param time {number}
	         */
	
	    }, {
	        key: 'update',
	        value: function update(time) {
	            if (this._isResolved === false) {
	                this.resolveValues();
	            }
	
	            var factor;
	            var t = this._target;
	            var e = this._easing;
	            var dest = this._destination;
	            var src = this._source;
	            var s;
	            var d = this._duration;
	            var name;
	
	            for (name in dest) {
	                if (time >= d[name]) {
	                    t[name] = dest[name];
	                } else {
	                    s = src[name];
	                    t[name] = e.calculate(time, s, dest[name] - s);
	                }
	            }
	        }
	
	        /**
	         *
	         * @returns {IUpdater}
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var instance = this.newInstance();
	            if (instance != null) {
	                instance.copyFrom(this);
	            }
	            return instance;
	        }
	
	        /**
	         *
	         * @returns {PhysicalUpdater}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new PhysicalUpdater();
	        }
	
	        /**
	         *
	         * @param source {PhysicalUpdater}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            var obj = source;
	
	            this._target = obj._target;
	            this._easing = obj._easing;
	            this.copyObject(this._source, obj._source);
	            this.copyObject(this._destination, obj._destination);
	            this.copyObject(this._relativeMap, obj._relativeMap);
	        }
	
	        /**
	         *
	         * @param to {Object}
	         * @param from {Object}
	         */
	
	    }, {
	        key: 'copyObject',
	        value: function copyObject(to, from) {
	            for (var name in from) {
	                to[name] = from[name];
	            }
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         *
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	
	        /**
	         *
	         * @returns {IPhysicalEasing}
	         */
	
	    }, {
	        key: 'easing',
	        get: function get() {
	            return this._easing;
	        }
	
	        /**
	         *
	         * @param value {IPhysicalEasing}
	         */
	        ,
	        set: function set(value) {
	            this._easing = value;
	        }
	
	        /**
	         *
	         * @returns {number}
	         */
	
	    }, {
	        key: 'duration',
	        get: function get() {
	            if (this._isResolved === false) {
	                this.resolveValues();
	            }
	            return this._maxDuration;
	        }
	    }]);
	
	    return PhysicalUpdater;
	}(_IPhysicalUpdater3.default);
	
	exports.default = PhysicalUpdater;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IUpdater2 = __webpack_require__(368);
	
	var _IUpdater3 = _interopRequireDefault(_IUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var IPhysicalUpdater = function (_IUpdater) {
	  _inherits(IPhysicalUpdater, _IUpdater);
	
	  function IPhysicalUpdater() {
	    _classCallCheck(this, IPhysicalUpdater);
	
	    return _possibleConstructorReturn(this, (IPhysicalUpdater.__proto__ || Object.getPrototypeOf(IPhysicalUpdater)).apply(this, arguments));
	  }
	
	  _createClass(IPhysicalUpdater, [{
	    key: 'easing',
	
	    /**
	     * @return {IPhysicalEasing}
	     */
	    get: function get() {
	      return null;
	    }
	
	    /**
	     * @param value {IPhysicalEasing}
	     */
	    ,
	    set: function set(value) {}
	
	    /**
	     * @returns {number}
	     */
	
	  }, {
	    key: 'duration',
	    get: function get() {
	      return null;
	    }
	  }]);
	
	  return IPhysicalUpdater;
	}(_IUpdater3.default);
	
	exports.default = IPhysicalUpdater;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IUpdater2 = __webpack_require__(368);
	
	var _IUpdater3 = _interopRequireDefault(_IUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var CompositeUpdater = function (_IUpdater) {
	    _inherits(CompositeUpdater, _IUpdater);
	
	    /**
	     *
	     * @param target {Object}
	     * @param updaters {Vector.<IUpdater>}
	     */
	    function CompositeUpdater(target, updaters) {
	        _classCallCheck(this, CompositeUpdater);
	
	        /**
	         * @type {Object}
	         */
	        var _this = _possibleConstructorReturn(this, (CompositeUpdater.__proto__ || Object.getPrototypeOf(CompositeUpdater)).call(this));
	
	        _this._target = null;
	
	        /**
	         * @type {IUpdater}
	         */
	        _this._a = undefined;
	
	        /**
	         * @type {IUpdater}
	         */
	        _this._b = undefined;
	
	        /**
	         * @type {IUpdater}
	         */
	        _this._c = undefined;
	
	        /**
	         * @type {IUpdater}
	         */
	        _this._d = undefined;
	
	        /**
	         * @type {Vector.<IUpdater>}
	         */
	        _this._updaters = undefined;
	
	        _this._target = target;
	
	        var l = updaters.length;
	
	        if (l >= 1) {
	            _this._a = updaters[0];
	            if (l >= 2) {
	                _this._b = updaters[1];
	                if (l >= 3) {
	                    _this._c = updaters[2];
	                    if (l >= 4) {
	                        _this._d = updaters[3];
	                        if (l >= 5) {
	                            _this._updaters = [];
	                            for (var i = 4; i < l; ++i) {
	                                _this._updaters[i - 4] = updaters[i];
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        return _this;
	    }
	
	    /**
	     * @param index {uint}
	     * @returns {IUpdater}
	     */
	
	
	    _createClass(CompositeUpdater, [{
	        key: 'getUpdaterAt',
	        value: function getUpdaterAt(index) {
	            if (index == 0) {
	                return this._a;
	            }
	            if (index == 1) {
	                return this._b;
	            }
	            if (index == 2) {
	                return this._c;
	            }
	            if (index == 3) {
	                return this._d;
	            }
	            return this._updaters[index - 4];
	        }
	
	        /**
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'update',
	
	
	        /**
	         * @param factor {number}
	         */
	        value: function update(factor) {
	            if (this._a != null) {
	                this._a.update(factor);
	                if (this._b != null) {
	                    this._b.update(factor);
	                    if (this._c != null) {
	                        this._c.update(factor);
	                        if (this._d != null) {
	                            this._d.update(factor);
	                            if (this._updaters != null) {
	                                var updaters = this._updaters;
	                                var l = updaters.length;
	                                for (var i = 0; i < l; ++i) {
	                                    updaters[i].update(factor);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        /**
	         * @returns {IUpdater}
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var updaters = [];
	
	            if (this._a != null) {
	                updaters.push(this._a.clone());
	                if (this._b != null) {
	                    updaters.push(this._b.clone());
	                    if (this._c != null) {
	                        updaters.push(this._c.clone());
	                        if (this._d != null) {
	                            updaters.push(this._d.clone());
	                            if (this._updaters != null) {
	                                var u = this._updaters;
	                                var l = u.length;
	                                for (var i = 0; i < l; ++i) {
	                                    updaters.push(u[i].clone());
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	
	            return new CompositeUpdater(this._target, updaters);
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	    }]);
	
	    return CompositeUpdater;
	}(_IUpdater3.default);
	
	exports.default = CompositeUpdater;

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPhysicalUpdater2 = __webpack_require__(372);
	
	var _IPhysicalUpdater3 = _interopRequireDefault(_IPhysicalUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var PhysicalUpdaterLadder = function (_IPhysicalUpdater) {
	  _inherits(PhysicalUpdaterLadder, _IPhysicalUpdater);
	
	  /**
	   *
	   * @param parent {IPhysicalUpdater}
	   * @param child {IPhysicalUpdater}
	   * @param propertyName {String}
	   */
	  function PhysicalUpdaterLadder(parent, child, propertyName) {
	    _classCallCheck(this, PhysicalUpdaterLadder);
	
	    /**
	     * @type {IPhysicalUpdater}
	     */
	    var _this = _possibleConstructorReturn(this, (PhysicalUpdaterLadder.__proto__ || Object.getPrototypeOf(PhysicalUpdaterLadder)).call(this));
	
	    _this._parent = parent;
	
	    /**
	     * @type {IPhysicalUpdater}
	     */
	    _this._child = child;
	
	    /**
	     * @type {string}
	     */
	    _this._propertyName = propertyName;
	
	    /**
	     * @type {number}
	     */
	    _this._duration = child.duration;
	    return _this;
	  }
	
	  /**
	   *
	   * @returns {IPhysicalUpdater}
	   */
	
	
	  _createClass(PhysicalUpdaterLadder, [{
	    key: 'update',
	
	
	    /**
	     *
	     * @param factor {number}
	     */
	    value: function update(factor) {
	      this._child.update(factor);
	      this._parent.setObject(this._propertyName, this._child.target);
	    }
	
	    /**
	     *
	     * @returns {IUpdater}
	     */
	
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new PhysicalUpdaterLadder(this._parent, this._child, this._propertyName);
	    }
	  }, {
	    key: 'parent',
	    get: function get() {
	      return this._parent;
	    }
	
	    /**
	     *
	     * @returns {IPhysicalUpdater}
	     */
	
	  }, {
	    key: 'child',
	    get: function get() {
	      return this._child;
	    }
	
	    /**
	     *
	     * @returns {number}
	     */
	
	  }, {
	    key: 'duration',
	    get: function get() {
	      return this._duration;
	    }
	  }]);
	
	  return PhysicalUpdaterLadder;
	}(_IPhysicalUpdater3.default);
	
	exports.default = PhysicalUpdaterLadder;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPhysicalUpdater2 = __webpack_require__(372);
	
	var _IPhysicalUpdater3 = _interopRequireDefault(_IPhysicalUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var CompositePhysicalUpdater = function (_IPhysicalUpdater) {
	    _inherits(CompositePhysicalUpdater, _IPhysicalUpdater);
	
	    /**
	     *
	     * @param target {Object}
	     * @param updaters {Vector.<IPhysicalUpdater>}
	     */
	    function CompositePhysicalUpdater(target, updaters) {
	        _classCallCheck(this, CompositePhysicalUpdater);
	
	        /**
	         *
	         * @type {Object}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (CompositePhysicalUpdater.__proto__ || Object.getPrototypeOf(CompositePhysicalUpdater)).call(this));
	
	        _this._target = target;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._duration = 0.0;
	
	        /**
	         *
	         * @type {IPhysicalUpdater}
	         * @private
	         */
	        _this._a = undefined;
	
	        /**
	         *
	         * @type {IPhysicalUpdater}
	         * @private
	         */
	        _this._b = undefined;
	
	        /**
	         *
	         * @type {IPhysicalUpdater}
	         * @private
	         */
	        _this._c = undefined;
	
	        /**
	         *
	         * @type {IPhysicalUpdater}
	         * @private
	         */
	        _this._d = undefined;
	
	        /**
	         *
	         * @type {Vector.<IPhysicalUpdater>}
	         * @private
	         */
	        _this._updaters = undefined;
	
	        var l = updaters.length;
	
	        if (l >= 1) {
	            _this._a = updaters[0];
	            if (_this._duration < _this._a.duration) {
	                _this._duration = _this._a.duration;
	            }
	            if (l >= 2) {
	                _this._b = updaters[1];
	                if (_this._duration < _this._b.duration) {
	                    _this._duration = _this._b.duration;
	                }
	                if (l >= 3) {
	                    _this._c = updaters[2];
	                    if (_this._duration < _this._c.duration) {
	                        _this._duration = _this._c.duration;
	                    }
	                    if (l >= 4) {
	                        _this._d = updaters[3];
	                        if (_this._duration < _this._d.duration) {
	                            _this._duration = _this._d.duration;
	                        }
	                        if (l >= 5) {
	                            _this._updaters = [];
	                            for (var i = 4; i < l; ++i) {
	                                var updater = updaters[i];
	                                _this._updaters[i - 4] = updater;
	                                if (_this._duration < updater.duration) {
	                                    _this._duration = updater.duration;
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        return _this;
	    }
	
	    /**
	     *
	     * @param index {uint}
	     * @returns {IPhysicalUpdater}
	     */
	
	
	    _createClass(CompositePhysicalUpdater, [{
	        key: 'getUpdaterAt',
	        value: function getUpdaterAt(index) {
	            if (index == 0) {
	                return this._a;
	            }
	            if (index == 1) {
	                return this._b;
	            }
	            if (index == 2) {
	                return this._c;
	            }
	            if (index == 3) {
	                return this._d;
	            }
	            return this._updaters[index - 4];
	        }
	
	        /**
	         *
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'update',
	
	
	        /**
	         *
	         * @param factor {number}
	         */
	        value: function update(factor) {
	            if (this._a != null) {
	                this._a.update(factor);
	                if (this._b != null) {
	                    this._b.update(factor);
	                    if (this._c != null) {
	                        this._c.update(factor);
	                        if (this._d != null) {
	                            this._d.update(factor);
	                            if (this._updaters != null) {
	                                var updaters = this._updaters;
	                                var l = updaters.length;
	                                for (var i = 0; i < l; ++i) {
	                                    updaters[i].update(factor);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        /**
	         *
	         * @returns {IUpdater}
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var updaters = [];
	
	            if (this._a != null) {
	                updaters.push(this._a.clone());
	                if (this._b != null) {
	                    updaters.push(this._b.clone());
	                    if (this._c != null) {
	                        updaters.push(this._c.clone());
	                        if (this._d != null) {
	                            updaters.push(this._d.clone());
	                            if (this._updaters != null) {
	                                var u = this._updaters;
	                                var l = u.length;
	                                for (var i = 0; i < l; ++i) {
	                                    updaters.push(u[i].clone());
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	
	            return new CompositePhysicalUpdater(this._target, updaters);
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         *
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	
	        /**
	         * @returns {number}
	         */
	
	    }, {
	        key: 'duration',
	        get: function get() {
	            return this._duration;
	        }
	    }]);
	
	    return CompositePhysicalUpdater;
	}(_IPhysicalUpdater3.default);
	
	exports.default = CompositePhysicalUpdater;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _AbstractTween2 = __webpack_require__(377);
	
	var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ObjectTween = function (_AbstractTween) {
	    _inherits(ObjectTween, _AbstractTween);
	
	    /**
	     *
	     * @param ticker {ITicker}
	     */
	    function ObjectTween(ticker) {
	        _classCallCheck(this, ObjectTween);
	
	        /**
	         *
	         * @type {IEasing}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (ObjectTween.__proto__ || Object.getPrototypeOf(ObjectTween)).call(this, ticker, 0));
	
	        _this._easing = undefined;
	
	        /**
	         *
	         * @type {IUpdater}
	         * @private
	         */
	        _this._updater = undefined;
	        return _this;
	    }
	
	    /**
	     * @returns {number}
	     */
	
	
	    _createClass(ObjectTween, [{
	        key: 'internalUpdate',
	
	
	        /**
	         * @param time {number}
	         */
	        value: function internalUpdate(time) {
	            var factor = 0.0;
	
	            if (time > 0.0) {
	                if (time < this._duration) {
	                    factor = this._easing.calculate(time, 0.0, 1.0, this._duration);
	                } else {
	                    factor = 1.0;
	                }
	            }
	
	            this._updater.update(factor);
	        }
	
	        /**
	         * @returns {AbstractTween}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new ObjectTween(this._ticker);
	        }
	
	        /**
	         * @param source {AbstractTween}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            _get(ObjectTween.prototype.__proto__ || Object.getPrototypeOf(ObjectTween.prototype), 'copyFrom', this).call(this, source);
	
	            var obj = this.source;
	
	            this._easing = obj._easing;
	            this._updater = obj._updater.clone();
	        }
	    }, {
	        key: 'time',
	        get: function get() {
	            return this._duration;
	        }
	
	        /**
	         * @param value {number}
	         */
	        ,
	        set: function set(value) {
	            this._duration = value;
	        }
	
	        /**
	         * @returns {IEasing}
	         */
	
	    }, {
	        key: 'easing',
	        get: function get() {
	            return this._easing;
	        }
	
	        /**
	         * @param value {IEasing}
	         */
	        ,
	        set: function set(value) {
	            this._easing = value;
	        }
	
	        /**
	         * @returns {IUpdater}
	         */
	
	    }, {
	        key: 'updater',
	        get: function get() {
	            return this._updater;
	        }
	
	        /**
	         * @param value {IUpdater}
	         */
	        ,
	        set: function set(value) {
	            this._updater = value;
	        }
	
	        /**
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._updater != null ? this._updater.target : null;
	        }
	    }]);
	
	    return ObjectTween;
	}(_AbstractTween3.default);
	
	exports.default = ObjectTween;

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TweenEvent = __webpack_require__(378);
	
	var _TweenEvent2 = _interopRequireDefault(_TweenEvent);
	
	var _TickerListener2 = __webpack_require__(364);
	
	var _TickerListener3 = _interopRequireDefault(_TickerListener2);
	
	var _ClonableEventDispatcher = __webpack_require__(379);
	
	var _ClonableEventDispatcher2 = _interopRequireDefault(_ClonableEventDispatcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AbstractTween = function (_TickerListener) {
	    _inherits(AbstractTween, _TickerListener);
	
	    /**
	     *
	     * @param ticker {Ticker}
	     * @param position {number}
	     */
	    function AbstractTween(ticker) {
	        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	        _classCallCheck(this, AbstractTween);
	
	        /**
	         * @type {number}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (AbstractTween.__proto__ || Object.getPrototypeOf(AbstractTween)).call(this));
	
	        _this._duration = 0;
	
	        /**
	         * @type {number}
	         * @private
	         */
	        _this._startTime = undefined;
	
	        /**
	         * @type {boolean}
	         * @private
	         */
	        _this._isPlaying = false;
	
	        /**
	         * @type {boolean}
	         * @private
	         */
	        _this._stopOnComplete = true;
	
	        /**
	         * @type {ClonableEventDispatcher}
	         * @private
	         */
	        _this._dispatcher = undefined;
	
	        /**
	         * @type {number}
	         * @private
	         */
	        _this._willTriggerFlags = 0;
	
	        /**
	         * @type {ClassicHandlers}
	         * @private
	         */
	        _this._classicHandlers = undefined;
	
	        /**
	         * @type {Ticker}
	         * @private
	         */
	        _this._ticker = ticker;
	
	        /**
	         * @type {number}
	         * @private
	         */
	        _this._position = position;
	        return _this;
	    }
	
	    /**
	     * @return {Ticker}
	     */
	
	
	    _createClass(AbstractTween, [{
	        key: 'getClassicHandlers',
	
	
	        /**
	         *
	         * @returns {ClassicHandlers|*}
	         */
	        value: function getClassicHandlers() {
	            return this._classicHandlers || (this._classicHandlers = new ClassicHandlers());
	        }
	    }, {
	        key: 'play',
	        value: function play() {
	            if (!this._isPlaying) {
	                if (this._position >= this._duration) {
	                    this._position = 0;
	                }
	                var t = this._ticker.time;
	                this._startTime = t - this._position;
	                this._isPlaying = true;
	                this._ticker.addTickerListener(this);
	                if ((this._willTriggerFlags & 0x01) != 0) {
	                    this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.PLAY));
	                }
	                if (this._classicHandlers != null && this._classicHandlers.onPlay != null) {
	                    this._classicHandlers.onPlay.apply(null, this._classicHandlers.onPlayParams);
	                }
	                this.tick(t);
	            }
	        }
	    }, {
	        key: 'firePlay',
	        value: function firePlay() {
	            if ((this._willTriggerFlags & 0x01) != 0) {
	                this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.PLAY));
	            }
	            if (this._classicHandlers != null && this._classicHandlers.onPlay != null) {
	                this._classicHandlers.onPlay.apply(null, this._classicHandlers.onPlayParams);
	            }
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this._isPlaying === true) {
	                this._isPlaying = false;
	                if ((this._willTriggerFlags & 0x02) != 0) {
	                    this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.STOP));
	                }
	                if (this._classicHandlers != null && this._classicHandlers.onStop != null) {
	                    this._classicHandlers.onStop.apply(null, this._classicHandlers.onStopParams);
	                }
	            }
	        }
	    }, {
	        key: 'fireStop',
	        value: function fireStop() {
	            if ((this._willTriggerFlags & 0x02) != 0) {
	                this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.STOP));
	            }
	            if (this._classicHandlers != null && this._classicHandlers.onStop != null) {
	                this._classicHandlers.onStop.apply(null, this._classicHandlers.onStopParams);
	            }
	        }
	    }, {
	        key: 'togglePause',
	        value: function togglePause() {
	            if (this._isPlaying === true) {
	                this.stop();
	            } else {
	                this.play();
	            }
	        }
	
	        /**
	         * @param position
	         */
	
	    }, {
	        key: 'gotoAndPlay',
	        value: function gotoAndPlay(position) {
	            if (position < 0) {
	                position = 0;
	            }
	            if (position > this._duration) {
	                position = this._duration;
	            }
	            this._position = position;
	            this.play();
	        }
	
	        /**
	         * @param position
	         */
	
	    }, {
	        key: 'gotoAndStop',
	        value: function gotoAndStop(position) {
	            if (position < 0) {
	                position = 0;
	            }
	            if (position > this._duration) {
	                position = this._duration;
	            }
	            this._position = position;
	            this.internalUpdate(position);
	            if ((this._willTriggerFlags & 0x04) != 0) {
	                this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.UPDATE));
	            }
	            if (this._classicHandlers != null && this._classicHandlers.onUpdate != null) {
	                this._classicHandlers.onUpdate.apply(null, this._classicHandlers.onUpdateParams);
	            }
	            this.stop();
	        }
	
	        /**
	         * @param time {number}
	         */
	
	    }, {
	        key: 'update',
	        value: function update(time) {
	            var isComplete = false;
	
	            if (this._position < this._duration && this._duration <= time || 0 < this._position && time <= 0) {
	                isComplete = true;
	            }
	
	            this._position = time;
	            this.internalUpdate(time);
	
	            if ((this._willTriggerFlags & 0x04) != 0) {
	                this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.UPDATE));
	            }
	            if (this._classicHandlers != null && this._classicHandlers.onUpdate != null) {
	                this._classicHandlers.onUpdate.apply(null, this._classicHandlers.onUpdateParams);
	            }
	
	            if (isComplete) {
	                if ((this._willTriggerFlags & 0x08) != 0) {
	                    this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.COMPLETE));
	                }
	                if (this._classicHandlers != null && this._classicHandlers.onComplete != null) {
	                    this._classicHandlers.onComplete.apply(null, this._classicHandlers.onCompleteParams);
	                }
	            }
	        }
	
	        /**
	         * @param time {number}
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'tick',
	        value: function tick(time) {
	            if (!this._isPlaying) {
	                return true;
	            }
	
	            var t = time - this._startTime;
	
	            this._position = t;
	            this.internalUpdate(t);
	
	            if ((this._willTriggerFlags & 0x04) != 0) {
	                this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.UPDATE));
	            }
	            if (this._classicHandlers != null && this._classicHandlers.onUpdate != null) {
	                this._classicHandlers.onUpdate.apply(null, this._classicHandlers.onUpdateParams);
	            }
	
	            if (this._isPlaying === true) {
	                if (t >= this._duration) {
	                    this._position = this._duration;
	                    if (this._stopOnComplete) {
	                        this._isPlaying = false;
	                        if ((this._willTriggerFlags & 0x08) != 0) {
	                            this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.COMPLETE));
	                        }
	                        if (this._classicHandlers != null && this._classicHandlers.onComplete != null) {
	                            this._classicHandlers.onComplete.apply(null, this._classicHandlers.onCompleteParams);
	                        }
	                        return true;
	                    } else {
	                        if ((this._willTriggerFlags & 0x08) != 0) {
	                            this._dispatcher.dispatchEvent(new _TweenEvent2.default(_TweenEvent2.default.COMPLETE));
	                        }
	                        if (this._classicHandlers != null && this._classicHandlers.onComplete != null) {
	                            this._classicHandlers.onComplete.apply(null, this._classicHandlers.onCompleteParams);
	                        }
	                        this._position = t - this._duration;
	                        this._startTime = time - this._position;
	                        this.tick(time);
	                    }
	                }
	                return false;
	            }
	
	            return true;
	        }
	
	        /**
	         * @param time {number}
	         */
	
	    }, {
	        key: 'internalUpdate',
	        value: function internalUpdate(time) {}
	        //
	
	
	        /**
	         * @returns {AbstractTween | ITween}
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var instance = this.newInstance();
	            if (instance != null) {
	                instance.copyFrom(this);
	            }
	            return instance;
	        }
	
	        /**
	         * @return {AbstractTween}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return null;
	        }
	
	        /**
	         * @param source {AbstractTween}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            this._ticker = source._ticker;
	            this._duration = source._duration;
	            this._stopOnComplete = source._stopOnComplete;
	            if (source._classicHandlers != null) {
	                this._classicHandlers = new ClassicHandlers();
	                this._classicHandlers.copyFrom(source._classicHandlers);
	            }
	            if (source._dispatcher != null) {
	                this._dispatcher = new _ClonableEventDispatcher2.default(this);
	                this._dispatcher.copyFrom(source._dispatcher);
	            }
	            this._willTriggerFlags = source._willTriggerFlags;
	        }
	
	        /**
	         * @param type {string}
	         * @param listener {Function}
	         * @param useCapture {boolean}
	         * @param priority {int}
	         * @param useWeakReference {boolean}
	         */
	
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(type, listener) {
	            var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	            var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	            var useWeakReference = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            if (this._dispatcher == null) {
	                this._dispatcher = new _ClonableEventDispatcher2.default(this);
	            }
	            this._dispatcher.addEventListener(type, listener, useCapture, priority, useWeakReference);
	            this.updateWillTriggerFlags();
	        }
	
	        /**
	         * @param event {Event}
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'dispatchEvent',
	        value: function dispatchEvent(event) {
	            if (this._dispatcher != null) {
	                return this._dispatcher.dispatchEvent(event);
	            }
	            return false;
	        }
	
	        /**
	         * @param type {string}
	         * @return {boolean}
	         */
	
	    }, {
	        key: 'hasEventListener',
	        value: function hasEventListener(type) {
	            if (this._dispatcher != null) {
	                return this._dispatcher.hasEventListener(type);
	            }
	            return false;
	        }
	
	        /**
	         * @param type {string}
	         * @param listener {Function}
	         * @param useCapture {boolean}
	         */
	
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(type, listener) {
	            var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            if (this._dispatcher != null) {
	                this._dispatcher.removeEventListener(type, listener, useCapture);
	                this.updateWillTriggerFlags();
	            }
	        }
	
	        /**
	         * @param type {string}
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'willTrigger',
	        value: function willTrigger(type) {
	            if (this._dispatcher != null) {
	                return this._dispatcher.willTrigger(type);
	            }
	            return false;
	        }
	    }, {
	        key: 'updateWillTriggerFlags',
	        value: function updateWillTriggerFlags() {
	            if (this._dispatcher.willTrigger(_TweenEvent2.default.PLAY)) {
	                this._willTriggerFlags |= 0x01;
	            } else {
	                this._willTriggerFlags &= ~0x01;
	            }
	            if (this._dispatcher.willTrigger(_TweenEvent2.default.STOP)) {
	                this._willTriggerFlags |= 0x02;
	            } else {
	                this._willTriggerFlags &= ~0x02;
	            }
	            if (this._dispatcher.willTrigger(_TweenEvent2.default.UPDATE)) {
	                this._willTriggerFlags |= 0x04;
	            } else {
	                this._willTriggerFlags &= ~0x04;
	            }
	            if (this._dispatcher.willTrigger(_TweenEvent2.default.COMPLETE)) {
	                this._willTriggerFlags |= 0x08;
	            } else {
	                this._willTriggerFlags &= ~0x08;
	            }
	        }
	    }, {
	        key: 'ticker',
	        get: function get() {
	            return this._ticker;
	        }
	
	        /**
	         * @return {number}
	         */
	
	    }, {
	        key: 'duration',
	        get: function get() {
	            return this._duration;
	        }
	
	        /**
	         * @return {number}
	         */
	
	    }, {
	        key: 'position',
	        get: function get() {
	            return this._position;
	        }
	
	        /**
	         * @return {boolean}
	         */
	
	    }, {
	        key: 'isPlaying',
	        get: function get() {
	            return this._isPlaying;
	        }
	
	        /**
	         * @return {boolean}
	         */
	
	    }, {
	        key: 'stopOnComplete',
	        get: function get() {
	            return this._stopOnComplete;
	        }
	
	        /**
	         * @param value {boolean}
	         */
	        ,
	        set: function set(value) {
	            this._stopOnComplete = value;
	        }
	
	        /**
	         *
	         * @returns {Function}
	         */
	
	    }, {
	        key: 'onPlay',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onPlay : null;
	        }
	
	        /**
	         * @param value {Function}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onPlay = value;
	        }
	
	        /**
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'onPlayParams',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onPlayParams : null;
	        }
	
	        /**
	         * @param value {Array}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onPlayParams = value;
	        }
	
	        /**
	         * @returns {Function}
	         */
	
	    }, {
	        key: 'onStop',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onStop : null;
	        }
	
	        /**
	         * @param value {Function}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onStop = value;
	        }
	
	        /**
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'onStopParams',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onStopParams : null;
	        }
	
	        /**
	         * @param value {Array}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onStopParams = value;
	        }
	
	        /**
	         * @returns {Function}
	         */
	
	    }, {
	        key: 'onUpdate',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onUpdate : null;
	        }
	
	        /**
	         * @param value {Function}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onUpdate = value;
	        }
	
	        /**
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'onUpdateParams',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onUpdateParams : null;
	        }
	
	        /**
	         * @param value {Array}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onUpdateParams = value;
	        }
	
	        /**
	         * @returns {Function}
	         */
	
	    }, {
	        key: 'onComplete',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onComplete : null;
	        }
	
	        /**
	         * @param value {Function}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onComplete = value;
	        }
	
	        /**
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'onCompleteParams',
	        get: function get() {
	            return this._classicHandlers != null ? this._classicHandlers.onCompleteParams : null;
	        }
	
	        /**
	         * @param value {Array}
	         */
	        ,
	        set: function set(value) {
	            this.getClassicHandlers().onCompleteParams = value;
	        }
	    }]);
	
	    return AbstractTween;
	}(_TickerListener3.default);
	
	exports.default = AbstractTween;
	
	var ClassicHandlers = function () {
	    function ClassicHandlers() {
	        _classCallCheck(this, ClassicHandlers);
	
	        /**
	         * @type {Function}
	         */
	        this.onPlay = undefined;
	
	        /**
	         * @type {Array}
	         */
	        this.onPlayParams = undefined;
	
	        /**
	         * @type {Function}
	         */
	        this.onStop = undefined;
	
	        /**
	         * @type {Array}
	         */
	        this.onStopParams = undefined;
	
	        /**
	         * @type {Function}
	         */
	        this.onUpdate = undefined;
	
	        /**
	         * @type {Array}
	         */
	        this.onUpdateParams = undefined;
	
	        /**
	         * @type {Function}
	         */
	        this.onComplete = undefined;
	
	        /**
	         * @type {Array}
	         */
	        this.onCompleteParams = undefined;
	    }
	
	    _createClass(ClassicHandlers, [{
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            this.onPlay = source.onPlay;
	            this.onPlayParams = source.onPlayParams;
	            this.onStop = source.onStop;
	            this.onStopParams = source.onStopParams;
	            this.onUpdate = source.onUpdate;
	            this.onUpdateParams = source.onUpdateParams;
	            this.onComplete = source.onComplete;
	            this.onCompleteParams = source.onCompleteParams;
	        }
	    }]);

	    return ClassicHandlers;
	}();

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * BetweenAS3
	 *
	 * Licensed under the MIT License
	 *
	 * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	 *                    Spark project  (www.libspark.org)
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 */
	
	var TweenEvent = function () {
	  _createClass(TweenEvent, null, [{
	    key: 'PLAY',
	    get: function get() {
	      return 'play';
	    }
	  }, {
	    key: 'STOP',
	    get: function get() {
	      return 'stop';
	    }
	  }, {
	    key: 'UPDATE',
	    get: function get() {
	      return 'update';
	    }
	  }, {
	    key: 'COMPLETE',
	    get: function get() {
	      return 'complete';
	    }
	
	    /**
	     * @param type {string}
	     * @param bubbles {boolean}
	     * @param cancelable {boolean}
	     */
	
	  }]);
	
	  function TweenEvent(type) {
	    var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    _classCallCheck(this, TweenEvent);
	
	    this.type = type;
	    this.bubbles = bubbles;
	    this.cancelable = cancelable;
	  }
	
	  return TweenEvent;
	}();
	
	exports.default = TweenEvent;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _eventemitter = __webpack_require__(363);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ClonableEventDispatcher = function (_EventEmitter) {
	    _inherits(ClonableEventDispatcher, _EventEmitter);
	
	    /**
	     *
	     * @param target {EventEmitter}
	     */
	    function ClonableEventDispatcher() {
	        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	        _classCallCheck(this, ClonableEventDispatcher);
	
	        var _this = _possibleConstructorReturn(this, (ClonableEventDispatcher.__proto__ || Object.getPrototypeOf(ClonableEventDispatcher)).call(this));
	
	        _this.target = target || _this;
	
	        /**
	         * Dictionary 에 Vector.<ListenerData> 형태
	         * @type {Dictionary}
	         * @private
	         */
	        _this._listeners = {};
	        return _this;
	    }
	
	    /**
	     * @param type {string}
	     * @param listener {Function}
	     * @param useCapture {boolean}
	     * @param priority {int}
	     * @param useWeakReference {boolean}
	     */
	
	
	    _createClass(ClonableEventDispatcher, [{
	        key: 'addEventListener',
	        value: function addEventListener(type, listener) {
	            var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	            var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	            var useWeakReference = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            this.on(type, listener, this.target);
	
	            var data = new ListenerData();
	            data.listener = listener;
	            data.useCapture = useCapture;
	            data.priority = priority;
	            data.useWeakReference = useWeakReference;
	
	            (this._listeners[type] || (this._listeners[type] = [])).push(data);
	        }
	
	        /**
	         * @param type {string}
	         * @param listener {Function}
	         * @param useCapture {boolean}
	         */
	
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(type, listener) {
	            var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this.off(type, listener, this.target);
	
	            var listeners = this._listeners[type];
	            if (listeners != null) {
	                var l = listeners.length;
	                for (var i = 0; i < l; ++i) {
	                    var data = listeners[i];
	                    if (data.listener == listener) {
	                        listeners.splice(i, 1);
	                        --i;
	                        --l;
	                    }
	                }
	            }
	        }
	
	        /**
	         * TODO hasEventListener 체크
	         * @param type {string}
	         * @return {boolean}
	         */
	
	    }, {
	        key: 'hasEventListener',
	        value: function hasEventListener(type) {
	            return this._listeners[type] != null;
	        }
	
	        /**
	         * @param source {ClonableEventDispatcher}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            var listeners = source._listeners;
	            for (var type in listeners) {
	                var list = listeners[type];
	                var l = list.length;
	                for (var i = 0; i < l; ++i) {
	                    var data = list[i];
	                    this.addEventListener(type, data.listener, data.useCapture, data.priority, data.useWeakReference);
	                }
	            }
	        }
	    }]);
	
	    return ClonableEventDispatcher;
	}(_eventemitter2.default);
	
	exports.default = ClonableEventDispatcher;
	
	var ListenerData = function ListenerData() {
	    _classCallCheck(this, ListenerData);
	
	    /**
	     * @type {Function}
	     */
	    this.listener = undefined;
	
	    /**
	     * @type {boolena}
	     */
	    this.useCapture = undefined;
	
	    /**
	     * @type {number}
	     */
	    this.priority = undefined;
	
	    /**
	     * @type {boolean}
	     */
	    this.useWeakReference = undefined;
	};

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractUpdater2 = __webpack_require__(370);
	
	var _AbstractUpdater3 = _interopRequireDefault(_AbstractUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ObjectUpdater = function (_AbstractUpdater) {
	    _inherits(ObjectUpdater, _AbstractUpdater);
	
	    _createClass(ObjectUpdater, null, [{
	        key: 'register',
	        value: function register(registry) {
	            registry.registerClassWithTargetClassAndPropertyName(ObjectUpdater, Object, '*');
	        }
	
	        /**
	         *
	         * @param registry {ClassRegistry}
	         */
	
	    }]);
	
	    function ObjectUpdater() {
	        _classCallCheck(this, ObjectUpdater);
	
	        /**
	         *
	         * @type {Object}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (ObjectUpdater.__proto__ || Object.getPrototypeOf(ObjectUpdater)).call(this));
	
	        _this._target = null;
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._source = {};
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._destination = {};
	
	        /**
	         *
	         * @type {Dictionary}
	         * @private
	         */
	        _this._relativeMap = {};
	        return _this;
	    }
	
	    /**
	     * 
	     * @returns {Object}
	     */
	
	
	    _createClass(ObjectUpdater, [{
	        key: 'setSourceValue',
	
	
	        /**
	         * 
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	        value: function setSourceValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._source[propertyName] = value;
	            this._relativeMap['source.' + propertyName] = isRelative;
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	
	    }, {
	        key: 'setDestinationValue',
	        value: function setDestinationValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._destination[propertyName] = value;
	            this._relativeMap['dest.' + propertyName] = isRelative;
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'getObject',
	        value: function getObject(propertyName) {
	            return this._target[propertyName];
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {Object}
	         */
	
	    }, {
	        key: 'setObject',
	        value: function setObject(propertyName, value) {
	            this._target[propertyName] = value;
	        }
	    }, {
	        key: 'resolveValues',
	        value: function resolveValues() {
	            /**
	             * key @type {string}
	             * target @type {Object}
	             * source @type {Dictionary}
	             * dest @type {Dictionary}
	             * rMpa @type {Dictionary}
	             */
	            var key,
	                target = this._target,
	                source = this._source,
	                dest = this._destination,
	                rMap = this._relativeMap;
	
	            for (key in source) {
	                if (dest[key] == undefined) {
	                    dest[key] = target[key];
	                }
	                if (rMap['source.' + key]) {
	                    source[key] += target[key];
	                }
	            }
	            for (key in dest) {
	                if (source[key] == undefined) {
	                    source[key] = target[key];
	                }
	                if (rMap['dest.' + key]) {
	                    dest[key] += target[key];
	                }
	            }
	        }
	
	        /**
	         *
	         * @param factor {number}
	         */
	
	    }, {
	        key: 'updateObject',
	        value: function updateObject(factor) {
	            var invert = 1.0 - factor;
	            var t = this._target;
	            var d = this._destination;
	            var s = this._source;
	            var name;
	
	            for (name in d) {
	                t[name] = s[name] * invert + d[name] * factor;
	            }
	        }
	
	        /**
	         *
	         * @returns {AbstractUpdater}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new ObjectUpdater();
	        }
	
	        /**
	         *
	         * @param source {AbstractUpdater}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            _get(ObjectUpdater.prototype.__proto__ || Object.getPrototypeOf(ObjectUpdater.prototype), 'copyFrom', this).call(this, source);
	
	            var obj = source;
	
	            this._target = obj._target;
	            this.copyObject(this._source, obj._source);
	            this.copyObject(this._destination, obj._destination);
	            this.copyObject(this._relativeMap, obj._relativeMap);
	        }
	
	        /**
	         *
	         * @param to {Object}
	         * @param from {Object}
	         */
	
	    }, {
	        key: 'copyObject',
	        value: function copyObject(to, from) {
	            for (var name in from) {
	                to[name] = from[name];
	            }
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         * 
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	    }]);
	
	    return ObjectUpdater;
	}(_AbstractUpdater3.default);
	
	exports.default = ObjectUpdater;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractUpdater2 = __webpack_require__(370);
	
	var _AbstractUpdater3 = _interopRequireDefault(_AbstractUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TARGET_PROPERTIES = ['x', 'y', 'scaleX', 'scaleY', 'rotation', 'alpha', 'width', 'height', 'skewX', 'skewY', '_blurFilter', '_blurXFilter', '_blurYFilter', '_colorMatrixFilter', '_displacementMapFilter', '_fxaaFilter', '_noiseFilter', '_voidFilter'];
	
	var DisplayObjectUpdater = function (_AbstractUpdater) {
	    _inherits(DisplayObjectUpdater, _AbstractUpdater);
	
	    _createClass(DisplayObjectUpdater, null, [{
	        key: 'register',
	
	        /**
	         *
	         * @param registry {ClassRegistry}
	         */
	        value: function register(registry) {
	            registry.registerClassWithTargetClassAndPropertyNames(DisplayObjectUpdater, DisplayObject, TARGET_PROPERTIES);
	
	            if (typeof PIXI !== 'undefined') {
	                registry.registerClassWithTargetClassAndPropertyNames(DisplayObjectUpdater, PIXI.DisplayObject, TARGET_PROPERTIES);
	            }
	        }
	    }]);
	
	    function DisplayObjectUpdater() {
	        _classCallCheck(this, DisplayObjectUpdater);
	
	        /**
	         *
	         * @type {Object}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (DisplayObjectUpdater.__proto__ || Object.getPrototypeOf(DisplayObjectUpdater)).call(this));
	
	        _this._target = null;
	
	        /**
	         *
	         * @type {DisplayObjectParameter}
	         * @private
	         */
	        _this._source = new DisplayObjectParameter();
	
	        /**
	         *
	         * @type {DisplayObjectParameter}
	         * @private
	         */
	        _this._destination = new DisplayObjectParameter();
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._flags = 0;
	        return _this;
	    }
	
	    /**
	     *
	     * @returns {Object}
	     */
	
	
	    _createClass(DisplayObjectUpdater, [{
	        key: 'setSourceValue',
	
	
	        /**
	         * 변수 앞에 $가 붙으면 자신의 위치 기준으로(상대경로) 값을 계산해주도록 옵션을 제공합니다.
	         * $를 붙히면 자신의 위치 + value 로 처리합니다.
	         * isRelative 가 $ 옵션 여부입니다.
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean} $ 옵션인지 여부
	         */
	        value: function setSourceValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            if (propertyName == 'x') {
	                this._flags |= 0x0001;
	                this._source.relativeFlags |= isRelative ? 0x0001 : 0;
	                this._source.x = value;
	            } else if (propertyName == 'y') {
	                this._flags |= 0x0002;
	                this._source.relativeFlags |= isRelative ? 0x0002 : 0;
	                this._source.y = value;
	            } else if (propertyName == 'scaleX') {
	                this._flags |= 0x0004;
	                this._source.relativeFlags |= isRelative ? 0x0008 : 0;
	                this._source.scaleX = value;
	            } else if (propertyName == 'scaleY') {
	                this._flags |= 0x0008;
	                this._source.relativeFlags |= isRelative ? 0x0010 : 0;
	                this._source.scaleY = value;
	            } else if (propertyName == 'rotation') {
	                this._flags |= 0x0010;
	                this._source.relativeFlags |= isRelative ? 0x0020 : 0;
	                this._source.rotation = value;
	            } else if (propertyName == 'alpha') {
	                this._flags |= 0x0020;
	                this._source.relativeFlags |= isRelative ? 0x0040 : 0;
	                this._source.alpha = value;
	            } else if (propertyName == 'width') {
	                this._flags |= 0x0040;
	                this._source.relativeFlags |= isRelative ? 0x0080 : 0;
	                this._source.width = value;
	            } else if (propertyName == 'height') {
	                this._flags |= 0x0080;
	                this._source.relativeFlags |= isRelative ? 0x0100 : 0;
	                this._source.height = value;
	            } else if (propertyName == 'skewX') {
	                this._flags |= 0x0100;
	                this._source.relativeFlags |= isRelative ? 0x0400 : 0;
	                this._source.skewX = value;
	            } else if (propertyName == 'skewY') {
	                this._flags |= 0x0200;
	                this._source.relativeFlags |= isRelative ? 0x0800 : 0;
	                this._source.skewY = value;
	            }
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	
	    }, {
	        key: 'setDestinationValue',
	        value: function setDestinationValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            if (propertyName == 'x') {
	                this._flags |= 0x0001;
	                this._destination.relativeFlags |= isRelative ? 0x0001 : 0;
	                this._destination.x = value;
	            } else if (propertyName == 'y') {
	                this._flags |= 0x0002;
	                this._destination.relativeFlags |= isRelative ? 0x0002 : 0;
	                this._destination.y = value;
	            } else if (propertyName == 'scaleX') {
	                this._flags |= 0x0004;
	                this._destination.relativeFlags |= isRelative ? 0x0008 : 0;
	                this._destination.scaleX = value;
	            } else if (propertyName == 'scaleY') {
	                this._flags |= 0x0008;
	                this._destination.relativeFlags |= isRelative ? 0x0010 : 0;
	                this._destination.scaleY = value;
	            } else if (propertyName == 'rotation') {
	                this._flags |= 0x0010;
	                this._destination.relativeFlags |= isRelative ? 0x0020 : 0;
	                this._destination.rotation = value;
	            } else if (propertyName == 'alpha') {
	                this._flags |= 0x0020;
	                this._destination.relativeFlags |= isRelative ? 0x0040 : 0;
	                this._destination.alpha = value;
	            } else if (propertyName == 'width') {
	                this._flags |= 0x0040;
	                this._destination.relativeFlags |= isRelative ? 0x0080 : 0;
	                this._destination.width = value;
	            } else if (propertyName == 'height') {
	                this._flags |= 0x0080;
	                this._destination.relativeFlags |= isRelative ? 0x0100 : 0;
	                this._destination.height = value;
	            } else if (propertyName == 'skewX') {
	                this._flags |= 0x0100;
	                this._destination.relativeFlags |= isRelative ? 0x0400 : 0;
	                this._destination.skewX = value;
	            } else if (propertyName == 'skewY') {
	                this._flags |= 0x0200;
	                this._destination.relativeFlags |= isRelative ? 0x0800 : 0;
	                this._destination.skewY = value;
	            }
	        }
	
	        /**
	         * TODO 필터 전체 테스트가 필요합니다.
	         * @param propertyName {string}
	         * @returns {Object}
	         */
	
	    }, {
	        key: 'getObject',
	        value: function getObject(propertyName) {
	            if (propertyName == '_blurFilter') {
	                return this.getFilterByClass(PIXI.filters.BlurFilter);
	            }
	            if (propertyName == '_blurXFilter') {
	                return this.getFilterByClass(PIXI.filters.BlurFilter);
	            }
	            if (propertyName == '_blurYFilter') {
	                return this.getFilterByClass(PIXI.filters.BlurFilter);
	            }
	            if (propertyName == '_colorMatrixFilter') {
	                return this.getFilterByClass(new PIXI.filters.ColorMatrixFilter());
	            }
	            if (propertyName == '_displacementMapFilter') {
	                return this.getFilterByClass(new PIXI.filters.DisplacementFilter());
	            }
	            if (propertyName == '_fxaaFilter') {
	                return this.getFilterByClass(new PIXI.filters.FXAAFilter());
	            }
	            if (propertyName == '_noiseFilter') {
	                return this.getFilterByClass(new PIXI.filters.NoiseFilter());
	            }
	            if (propertyName == '_voidFilter') {
	                return this.getFilterByClass(new PIXI.filters.VoidFilter());
	            }
	            return null;
	        }
	
	        /**
	         * TODO 필터 전체 테스트가 필요합니다.
	         * @param klass {Class}
	         * @returns {BitmapFilter}
	         */
	
	    }, {
	        key: 'getFilterByClass',
	        value: function getFilterByClass(klass) {
	            var filter = null;
	            var filters = this._target.filters ? this._target.filters : this._target.filters = [];
	
	            var l = filters.length;
	            for (var i = 0; i < l; ++i) {
	                if ((filter = filters[i]) instanceof klass) {
	                    return filter;
	                }
	            }
	            filter = new klass();
	            filters.push(filter);
	            this._target.filters = filters;
	            return filter;
	        }
	
	        /**
	         * TODO 필터 전체 테스트가 필요합니다.
	         * @param propertyName {string}
	         * @param value {Object}
	         */
	
	    }, {
	        key: 'setObject',
	        value: function setObject(propertyName, value) {
	            if (propertyName == '_blurFilter') {
	                this.setFilterByClass(value, PIXI.filters.BlurFilter);
	                return;
	            }
	            if (propertyName == '_blurXFilter') {
	                this.setFilterByClass(value, PIXI.filters.BlurFilter);
	                return;
	            }
	            if (propertyName == '_blurYFilter') {
	                this.setFilterByClass(value, PIXI.filters.BlurFilter);
	                return;
	            }
	            if (propertyName == '_colorMatrixFilter') {
	                this.setFilterByClass(value, PIXI.filters.ColorMatrixFilter);
	                return;
	            }
	            if (propertyName == '_displacementMapFilter') {
	                this.setFilterByClass(value, PIXI.filters.DisplacementFilter);
	                return;
	            }
	            if (propertyName == '_fxaaFilter') {
	                this.setFilterByClass(value, PIXI.filters.FXAAFilter);
	                return;
	            }
	            if (propertyName == '_noiseFilter') {
	                this.setFilterByClass(value, PIXI.filters.NoiseFilter);
	                return;
	            }
	            if (propertyName == '_voidFilter') {
	                this.setFilterByClass(value, PIXI.filters.VoidFilter);
	                return;
	            }
	        }
	
	        /**
	         * TODO 필터 전체 테스트가 필요합니다.
	         * @param filter {BitmapFilter}
	         * @param klass {Class}
	         */
	
	    }, {
	        key: 'setFilterByClass',
	        value: function setFilterByClass(filter, klass) {
	            var filters = this._target.filters;
	            var l = filters.length;
	            for (var i = 0; i < l; ++i) {
	                if (filters[i] instanceof klass) {
	                    filters[i] = filter;
	                    this._target.filters = filters;
	                    return;
	                }
	            }
	            filters.push(filter);
	            this._target.filters = filters;
	        }
	    }, {
	        key: 'resolveValues',
	        value: function resolveValues() {
	            var t = this._target,
	                d = this._destination,
	                s = this._source,
	                f = this._flags;
	
	            if ((f & 0x0001) != 0) {
	                if (isNaN(s.x)) {
	                    s.x = t.x;
	                } else if ((s.relativeFlags & 0x0001) != 0) {
	                    s.x += t.x;
	                }
	                if (isNaN(d.x)) {
	                    d.x = t.x;
	                } else if ((d.relativeFlags & 0x0001) != 0) {
	                    d.x += t.x;
	                }
	            }
	            if ((f & 0x0002) != 0) {
	                if (isNaN(s.y)) {
	                    s.y = t.y;
	                } else if ((s.relativeFlags & 0x0002) != 0) {
	                    s.y += t.y;
	                }
	                if (isNaN(d.y)) {
	                    d.y = t.y;
	                } else if ((d.relativeFlags & 0x0002) != 0) {
	                    d.y += t.y;
	                }
	            }
	            if ((f & 0x0004) != 0) {
	                if (isNaN(s.scaleX)) {
	                    s.scaleX = t.scale.x;
	                } else if ((s.relativeFlags & 0x0008) != 0) {
	                    s.scaleX += t.scale.x;
	                }
	                if (isNaN(d.scaleX)) {
	                    d.scaleX = t.scale.x;
	                } else if ((d.relativeFlags & 0x0008) != 0) {
	                    d.scaleX += t.scale.x;
	                }
	            }
	            if ((f & 0x0008) != 0) {
	                if (isNaN(s.scaleY)) {
	                    s.scaleY = t.scale.y;
	                } else if ((s.relativeFlags & 0x0010) != 0) {
	                    s.scaleY += t.scale.y;
	                }
	                if (isNaN(d.scaleY)) {
	                    d.scaleY = t.scale.y;
	                } else if ((d.relativeFlags & 0x0010) != 0) {
	                    d.scaleY += t.scale.y;
	                }
	            }
	            if ((f & 0x0010) != 0) {
	                if (isNaN(s.rotation)) {
	                    s.rotation = t.rotation;
	                } else if ((s.relativeFlags & 0x0020) != 0) {
	                    s.rotation += t.rotation;
	                }
	                if (isNaN(d.rotation)) {
	                    d.rotation = t.rotation;
	                } else if ((d.relativeFlags & 0x0020) != 0) {
	                    d.rotation += t.rotation;
	                }
	            }
	            if ((f & 0x0020) != 0) {
	                if (isNaN(s.alpha)) {
	                    s.alpha = t.alpha;
	                } else if ((s.relativeFlags & 0x0040) != 0) {
	                    s.alpha += t.alpha;
	                }
	                if (isNaN(d.alpha)) {
	                    d.alpha = t.alpha;
	                } else if ((d.relativeFlags & 0x0040) != 0) {
	                    d.alpha += t.alpha;
	                }
	            }
	            if ((f & 0x0040) != 0) {
	                if (isNaN(s.width)) {
	                    s.width = t.width;
	                } else if ((s.relativeFlags & 0x0080) != 0) {
	                    s.width += t.width;
	                }
	                if (isNaN(d.width)) {
	                    d.width = t.width;
	                } else if ((d.relativeFlags & 0x0080) != 0) {
	                    d.width += t.width;
	                }
	            }
	            if ((f & 0x0080) != 0) {
	                if (isNaN(s.height)) {
	                    s.height = t.height;
	                } else if ((s.relativeFlags & 0x0100) != 0) {
	                    s.height += t.height;
	                }
	                if (isNaN(d.height)) {
	                    d.height = t.height;
	                } else if ((d.relativeFlags & 0x0100) != 0) {
	                    d.height += t.height;
	                }
	            }
	            if ((f & 0x0100) != 0) {
	                if (isNaN(s.skewX)) {
	                    s.skewX = t.skew.x;
	                } else if ((s.relativeFlags & 0x0400) != 0) {
	                    s.skewX += t.skew.x;
	                }
	                if (isNaN(d.skewX)) {
	                    d.skewX = t.skew.x;
	                } else if ((d.relativeFlags & 0x0400) != 0) {
	                    d.skewX += t.skew.x;
	                }
	            }
	            if ((f & 0x0200) != 0) {
	                if (isNaN(s.skewY)) {
	                    s.skewY = t.skew.y;
	                } else if ((s.relativeFlags & 0x0800) != 0) {
	                    s.skewY += t.skew.y;
	                }
	                if (isNaN(d.skewY)) {
	                    d.skewY = t.skew.y;
	                } else if ((d.relativeFlags & 0x0800) != 0) {
	                    d.skewY += t.skew.y;
	                }
	            }
	        }
	
	        /**
	         * 
	         * @param factor {number}
	         */
	
	    }, {
	        key: 'updateObject',
	        value: function updateObject(factor) {
	            var t = this._target,
	                d = this._destination,
	                s = this._source,
	                f = this._flags;
	
	            var invert = 1.0 - factor;
	
	            if ((f & 0x0001) != 0) {
	                t.x = s.x * invert + d.x * factor;
	            }
	            if ((f & 0x0002) != 0) {
	                t.y = s.y * invert + d.y * factor;
	            }
	            if ((f & 0x000C) != 0) {
	                if ((f & 0x0004) != 0) {
	                    t.scale.x = s.scaleX * invert + d.scaleX * factor;
	                }
	                if ((f & 0x0008) != 0) {
	                    t.scale.y = s.scaleY * invert + d.scaleY * factor;
	                }
	            }
	            if ((f & 0x0010) != 0) {
	                t.rotation = s.rotation * invert + d.rotation * factor;
	            }
	            if ((f & 0x00E0) != 0) {
	                if ((f & 0x0020) != 0) {
	                    t.alpha = s.alpha * invert + d.alpha * factor;
	                }
	                if ((f & 0x0040) != 0) {
	                    t.width = s.width * invert + d.width * factor;
	                }
	                if ((f & 0x0080) != 0) {
	                    t.height = s.height * invert + d.height * factor;
	                }
	            }
	            if ((f & 0x0300) != 0) {
	                if ((f & 0x0100) != 0) {
	                    t.skew.x = s.skewX * invert + d.skewX * factor;
	                }
	                if ((f & 0x0200) != 0) {
	                    t.skew.y = s.skewY * invert + d.skewY * factor;
	                }
	            }
	        }
	
	        /**
	         *
	         * @returns {AbstractUpdater}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new DisplayObjectUpdater();
	        }
	
	        /**
	         *
	         * @param source {AbstractUpdater}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            _get(DisplayObjectUpdater.prototype.__proto__ || Object.getPrototypeOf(DisplayObjectUpdater.prototype), 'copyFrom', this).call(this, source);
	
	            var obj = source;
	
	            this._target = obj._target;
	            this._source.copyFrom(obj._source);
	            this._destination.copyFrom(obj._destination);
	            this._flags = obj._flags;
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         *
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	    }]);
	
	    return DisplayObjectUpdater;
	}(_AbstractUpdater3.default);
	
	exports.default = DisplayObjectUpdater;
	
	var DisplayObjectParameter = function () {
	    function DisplayObjectParameter() {
	        _classCallCheck(this, DisplayObjectParameter);
	
	        /**
	         * $ 옵션 비트 플래그
	         * @type {uint}
	         */
	        this.relativeFlags = 0;
	        this.x = undefined;
	        this.y = undefined;
	        this.scaleX = undefined;
	        this.scaleY = undefined;
	        this.rotation = undefined;
	        this.alpha = undefined;
	        this.width = undefined;
	        this.height = undefined;
	        this.skewX = undefined;
	        this.skewY = undefined;
	    }
	
	    /**
	     *
	     * @param obj {DisplayObjectParameter}
	     */
	
	
	    _createClass(DisplayObjectParameter, [{
	        key: 'copyFrom',
	        value: function copyFrom(obj) {
	            this.relativeFlags = obj.relativeFlags;
	            this.x = obj.x;
	            this.y = obj.y;
	            this.scaleX = obj.scaleX;
	            this.scaleY = obj.scaleY;
	            this.rotation = obj.rotation;
	            this.alpha = obj.alpha;
	            this.width = obj.width;
	            this.height = obj.height;
	            this.skewX = obj.skewX;
	            this.skeyY = obj.skeyY;
	        }
	    }]);
	
	    return DisplayObjectParameter;
	}();
	
	var DisplayObject = function DisplayObject() {
	    _classCallCheck(this, DisplayObject);
	};

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractUpdater2 = __webpack_require__(370);
	
	var _AbstractUpdater3 = _interopRequireDefault(_AbstractUpdater2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TARGET_PROPERTIES = ['x', 'y'];
	
	var PointUpdater = function (_AbstractUpdater) {
	    _inherits(PointUpdater, _AbstractUpdater);
	
	    _createClass(PointUpdater, null, [{
	        key: 'register',
	
	        /**
	         *
	         * @param registry {ClassRegistry}
	         */
	        value: function register(registry) {
	            registry.registerClassWithTargetClassAndPropertyNames(PointUpdater, Point, TARGET_PROPERTIES);
	            registry.registerClassWithTargetClassAndPropertyNames(PointUpdater, Vector, TARGET_PROPERTIES);
	
	            if (typeof PIXI !== 'undefined') {
	                registry.registerClassWithTargetClassAndPropertyNames(PointUpdater, PIXI.Point, TARGET_PROPERTIES);
	            }
	        }
	    }]);
	
	    function PointUpdater() {
	        _classCallCheck(this, PointUpdater);
	
	        /**
	         *
	         * @type {Ponit}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (PointUpdater.__proto__ || Object.getPrototypeOf(PointUpdater)).call(this));
	
	        _this._target = null;
	
	        /**
	         *
	         * @type {boolean}
	         * @private
	         */
	        _this._fx = false;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._sx = undefined;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._dx = undefined;
	
	        /**
	         *
	         * @type {boolean}
	         * @private
	         */
	        _this._fy = false;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._sy = undefined;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._dy = undefined;
	
	        /**
	         *
	         * @type {uint}
	         * @private
	         */
	        _this._flags = 0;
	        return _this;
	    }
	
	    /**
	     * @return {Object}
	     */
	
	
	    _createClass(PointUpdater, [{
	        key: 'setSourceValue',
	
	
	        /**
	         * 변수 앞에 $가 붙으면 자신의 위치 기준으로(상대경로) 값을 계산해주도록 옵션을 제공합니다.
	         * $를 붙히면 자신의 위치 + value 로 처리합니다.
	         * isRelative 가 $ 옵션 여부입니다.
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	        value: function setSourceValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            if (propertyName == 'x') {
	                this._fx = true;
	                this._sx = value;
	                this._flags |= isRelative ? 0x001 : 0;
	            } else if (propertyName == 'y') {
	                this._fy = true;
	                this._sy = value;
	                this._flags |= isRelative ? 0x004 : 0;
	            }
	        }
	
	        /**
	         *
	         * @param propertyName {string}
	         * @param value {number}
	         * @param isRelative {boolean}
	         */
	
	    }, {
	        key: 'setDestinationValue',
	        value: function setDestinationValue(propertyName, value) {
	            var isRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            if (propertyName == 'x') {
	                this._fx = true;
	                this._dx = value;
	                this._flags |= isRelative ? 0x002 : 0;
	            } else if (propertyName == 'y') {
	                this._fy = true;
	                this._dy = value;
	                this._flags |= isRelative ? 0x008 : 0;
	            }
	        }
	    }, {
	        key: 'resolveValues',
	        value: function resolveValues() {
	            var t = this._target;
	
	            if (this._fx) {
	                if (isNaN(this._sx)) {
	                    this._sx = t.x;
	                } else if ((this._flags & 0x001) != 0) {
	                    this._sx += t.x;
	                }
	                if (isNaN(this._dx)) {
	                    this._dx = t.x;
	                } else if ((this._flags & 0x002) != 0) {
	                    this._dx += t.x;
	                }
	            }
	            if (this._fy) {
	                if (isNaN(this._sy)) {
	                    this._sy = t.y;
	                } else if ((this._flags & 0x004) != 0) {
	                    this._sy += t.y;
	                }
	                if (isNaN(this._dy)) {
	                    this._dy = t.y;
	                } else if ((this._flags & 0x008) != 0) {
	                    this._dy += t.y;
	                }
	            }
	        }
	
	        /**
	         *
	         * @param factor {number}
	         */
	
	    }, {
	        key: 'updateObject',
	        value: function updateObject(factor) {
	            var t = this._target;
	
	            var invert = 1.0 - factor;
	
	            if (this._fx) {
	                t.x = this._sx * invert + this._dx * factor;
	            }
	            if (this._fy) {
	                t.y = this._sy * invert + this._dy * factor;
	            }
	        }
	
	        /**
	         *
	         * @returns {AbstractUpdater}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new PointUpdater();
	        }
	
	        /**
	         * 
	         * @param source {AbstractUpdater}
	         */
	
	    }, {
	        key: 'copyFrom',
	        value: function copyFrom(source) {
	            _get(PointUpdater.prototype.__proto__ || Object.getPrototypeOf(PointUpdater.prototype), 'copyFrom', this).call(this, source);
	
	            var obj = source;
	
	            this._target = obj._target;
	            this._sx = obj._sx;
	            this._sy = obj._sy;
	            this._dx = obj._dx;
	            this._dy = obj._dy;
	            this._fx = obj._fx;
	            this._fy = obj._fy;
	            this._flags = obj._flags;
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         * @param value {Object}
	         */
	        ,
	        set: function set(value) {
	            this._target = value;
	        }
	    }]);
	
	    return PointUpdater;
	}(_AbstractUpdater3.default);
	
	exports.default = PointUpdater;
	
	var Point = function Point() {
	    _classCallCheck(this, Point);
	};
	
	var Vector = function Vector() {
	    _classCallCheck(this, Vector);
	};

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _AbstractTween2 = __webpack_require__(377);
	
	var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var PhysicalTween = function (_AbstractTween) {
	  _inherits(PhysicalTween, _AbstractTween);
	
	  /**
	   *
	   * @param ticker {ITicker}
	   */
	  function PhysicalTween(ticker) {
	    _classCallCheck(this, PhysicalTween);
	
	    /**
	     *
	     * @type {IPhysicalUpdater}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, (PhysicalTween.__proto__ || Object.getPrototypeOf(PhysicalTween)).call(this, ticker, 0));
	
	    _this._updater = undefined;
	    return _this;
	  }
	
	  /**
	   *
	   * @returns {IPhysicalUpdater}
	   */
	
	
	  _createClass(PhysicalTween, [{
	    key: 'internalUpdate',
	
	
	    /**
	     *
	     * @param time {number}
	     */
	    value: function internalUpdate(time) {
	      this._updater.update(time);
	    }
	
	    /**
	     *
	     * @returns {AbstractTween}
	     */
	
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      return new PhysicalTween(this._ticker);
	    }
	
	    /**
	     *
	     * @param source {AbstractTween}
	     */
	
	  }, {
	    key: 'copyFrom',
	    value: function copyFrom(source) {
	      _get(PhysicalTween.prototype.__proto__ || Object.getPrototypeOf(PhysicalTween.prototype), 'copyFrom', this).call(this, source);
	
	      var obj = source;
	
	      this._updater = obj._updater.clone();
	    }
	  }, {
	    key: 'updater',
	    get: function get() {
	      return this._updater;
	    }
	
	    /**
	     *
	     * @param value {IPhysicalUpdater}
	     */
	    ,
	    set: function set(value) {
	      this._updater = value;
	
	      if (this._updater != null) {
	        this._duration = this._updater.duration;
	      }
	    }
	
	    /**
	     *
	     * @returns {Object}
	     */
	
	  }, {
	    key: 'target',
	    get: function get() {
	      return this._updater != null ? this._updater.target : null;
	    }
	  }]);
	
	  return PhysicalTween;
	}(_AbstractTween3.default);
	
	exports.default = PhysicalTween;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractTween2 = __webpack_require__(377);
	
	var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ParallelTween = function (_AbstractTween) {
	    _inherits(ParallelTween, _AbstractTween);
	
	    /**
	     *
	     * @param targets {Array}
	     * @param ticker {ITicker}
	     * @param position {number}
	     */
	    function ParallelTween(targets, ticker, position) {
	        _classCallCheck(this, ParallelTween);
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (ParallelTween.__proto__ || Object.getPrototypeOf(ParallelTween)).call(this, ticker, position));
	
	        _this._a = undefined;
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        _this._b = undefined;
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        _this._c = undefined;
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        _this._d = undefined;
	
	        /**
	         *
	         * @type {Vector.<IITween>}
	         * @private
	         */
	        _this._targets = undefined;
	
	        var l = targets.length;
	
	        _this._duration = 0;
	
	        if (l > 0) {
	            _this._a = targets[0];
	            _this._duration = _this._a.duration > _this._duration ? _this._a.duration : _this._duration;
	            if (l > 1) {
	                _this._b = targets[1];
	                _this._duration = _this._b.duration > _this._duration ? _this._b.duration : _this._duration;
	                if (l > 2) {
	                    _this._c = targets[2];
	                    _this._duration = _this._c.duration > _this._duration ? _this._c.duration : _this._duration;
	                    if (l > 3) {
	                        _this._d = targets[3];
	                        _this._duration = _this._d.duration > _this._duration ? _this._d.duration : _this._duration;
	                        if (l > 4) {
	                            _this._targets = [];
	                            for (var i = 4; i < l; ++i) {
	                                var t = targets[i];
	                                _this._targets[i - 4] = t;
	                                _this._duration = t.duration > _this._duration ? t.duration : _this._duration;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        return _this;
	    }
	
	    /**
	     *
	     * @param tween {ITween}
	     * @returns {boolean}
	     */
	
	
	    _createClass(ParallelTween, [{
	        key: 'contains',
	        value: function contains(tween) {
	            if (tween == null) {
	                return false;
	            }
	            if (this._a == tween) {
	                return true;
	            }
	            if (this._b == tween) {
	                return true;
	            }
	            if (this._c == tween) {
	                return true;
	            }
	            if (this._d == tween) {
	                return true;
	            }
	            if (this._targets != null) {
	                return this._targets.indexOf(tween) != -1;
	            }
	            return false;
	        }
	
	        /**
	         *
	         * @param index {int}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'getTweenAt',
	        value: function getTweenAt(index) {
	            if (index < 0) {
	                return null;
	            }
	            if (index == 0) {
	                return this._a;
	            }
	            if (index == 1) {
	                return this._b;
	            }
	            if (index == 2) {
	                return this._c;
	            }
	            if (index == 3) {
	                return this._d;
	            }
	            if (this._targets != null) {
	                if (index - 4 < this._targets.length) {
	                    return this._targets[index - 4];
	                }
	            }
	            return null;
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @returns {int}
	         */
	
	    }, {
	        key: 'getTweenIndex',
	        value: function getTweenIndex(tween) {
	            if (tween == null) {
	                return -1;
	            }
	            if (this._a == tween) {
	                return 0;
	            }
	            if (this._b == tween) {
	                return 1;
	            }
	            if (this._c == tween) {
	                return 2;
	            }
	            if (this._d == tween) {
	                return 3;
	            }
	            if (this._targets != null) {
	                var i = this._targets.indexOf(tween);
	                if (i != -1) {
	                    return i + 4;
	                }
	            }
	            return -1;
	        }
	
	        /**
	         *
	         * @param time {number}
	         */
	
	    }, {
	        key: 'internalUpdate',
	        value: function internalUpdate(time) {
	            if (this._a != null) {
	                this._a.update(time);
	                if (this._b != null) {
	                    this._b.update(time);
	                    if (this._c != null) {
	                        this._c.update(time);
	                        if (this._d != null) {
	                            this._d.update(time);
	                            if (this._targets != null) {
	                                var targets = this._targets;
	                                var l = targets.length;
	                                for (var i = 0; i < l; ++i) {
	                                    targets[i].update(time);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        /**
	         *
	         * @returns {AbstractTween}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            var targets = [];
	            if (this._a != null) {
	                targets.push(this._a.clone());
	            }
	            if (this._b != null) {
	                targets.push(this._b.clone());
	            }
	            if (this._c != null) {
	                targets.push(this._c.clone());
	            }
	            if (this._d != null) {
	                targets.push(this._d.clone());
	            }
	            if (this._targets != null) {
	                var t = this._targets;
	                var l = t.length;
	                for (var i = 0; i < l; ++i) {
	                    targets.push(t[i].clone());
	                }
	            }
	            return new ParallelTween(targets, _ticker, 0);
	        }
	    }]);
	
	    return ParallelTween;
	}(_AbstractTween3.default);
	
	exports.default = ParallelTween;

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractTween2 = __webpack_require__(377);
	
	var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var SerialTween = function (_AbstractTween) {
	    _inherits(SerialTween, _AbstractTween);
	
	    /**
	     *
	     * @param targets {Array}
	     * @param ticker {ITicker}
	     * @param position {number}
	     */
	    function SerialTween(targets, ticker, position) {
	        _classCallCheck(this, SerialTween);
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (SerialTween.__proto__ || Object.getPrototypeOf(SerialTween)).call(this, ticker, position));
	
	        _this._a = undefined;
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        _this._b = undefined;
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        _this._c = undefined;
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        _this._d = undefined;
	
	        /**
	         *
	         * @type {Vector.<IITween>}
	         * @private
	         */
	        _this._targets = undefined;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._lastTime = 0;
	
	        var l = targets.length;
	
	        _this._duration = 0;
	
	        if (l > 0) {
	            _this._a = targets[0];
	            _this._duration += _this._a.duration;
	            if (l > 1) {
	                _this._b = targets[1];
	                _this._duration += _this._b.duration;
	                if (l > 2) {
	                    _this._c = targets[2];
	                    _this._duration += _this._c.duration;
	                    if (l > 3) {
	                        _this._d = targets[3];
	                        _this._duration += _this._d.duration;
	                        if (l > 4) {
	                            _this._targets = [];
	                            for (var i = 4; i < l; ++i) {
	                                var t = targets[i];
	                                _this._targets[i - 4] = t;
	                                _this._duration += t.duration;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        return _this;
	    }
	
	    /**
	     *
	     * @param tween {ITween}
	     * @returns {boolean}
	     */
	
	
	    _createClass(SerialTween, [{
	        key: 'contains',
	        value: function contains(tween) {
	            if (tween == null) {
	                return false;
	            }
	            if (this._a == tween) {
	                return true;
	            }
	            if (this._b == tween) {
	                return true;
	            }
	            if (this._c == tween) {
	                return true;
	            }
	            if (this._d == tween) {
	                return true;
	            }
	            if (this._targets != null) {
	                return this._targets.indexOf(tween) != -1;
	            }
	            return false;
	        }
	
	        /**
	         *
	         * @param index {int}
	         * @returns {ITween}
	         */
	
	    }, {
	        key: 'getTweenAt',
	        value: function getTweenAt(index) {
	            if (index < 0) {
	                return null;
	            }
	            if (index == 0) {
	                return this._a;
	            }
	            if (index == 1) {
	                return this._b;
	            }
	            if (index == 2) {
	                return this._c;
	            }
	            if (index == 3) {
	                return this._d;
	            }
	            if (this._targets != null) {
	                if (index - 4 < this._targets.length) {
	                    return this._targets[index - 4];
	                }
	            }
	            return null;
	        }
	
	        /**
	         *
	         * @param tween {ITween}
	         * @returns {int}
	         */
	
	    }, {
	        key: 'getTweenIndex',
	        value: function getTweenIndex(tween) {
	            if (tween == null) {
	                return -1;
	            }
	            if (this._a == tween) {
	                return 0;
	            }
	            if (this._b == tween) {
	                return 1;
	            }
	            if (this._c == tween) {
	                return 2;
	            }
	            if (this._d == tween) {
	                return 3;
	            }
	            if (this._targets != null) {
	                var i = this._targets.indexOf(tween);
	                if (i != -1) {
	                    return i + 4;
	                }
	            }
	            return -1;
	        }
	
	        /**
	         *
	         * @param time {number}
	         */
	
	    }, {
	        key: 'internalUpdate',
	        value: function internalUpdate(time) {
	            var d = 0,
	                ld = 0,
	                lt = this._lastTime,
	                l,
	                i,
	                t;
	
	            if (time - lt >= 0) {
	                if (this._a != null) {
	                    if (lt <= (d += this._a.duration) && ld <= time) {
	                        this._a.update(time - ld);
	                    }
	                    ld = d;
	                    if (this._b != null) {
	                        if (lt <= (d += this._b.duration) && ld <= time) {
	                            this._b.update(time - ld);
	                        }
	                        ld = d;
	                        if (this._c != null) {
	                            if (lt <= (d += this._c.duration) && ld <= time) {
	                                this._c.update(time - ld);
	                            }
	                            ld = d;
	                            if (this._d != null) {
	                                if (lt <= (d += this._d.duration) && ld <= time) {
	                                    this._d.update(time - ld);
	                                }
	                                ld = d;
	                                if (this._targets != null) {
	                                    l = this._targets.length;
	                                    for (i = 0; i < l; ++i) {
	                                        t = this._targets[i];
	                                        if (lt <= (d += t.duration) && ld <= time) {
	                                            t.update(time - ld);
	                                        }
	                                        ld = d;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            } else {
	                d = this._duration;
	                ld = d;
	                if (this._targets != null) {
	                    for (i = this._targets.length - 1; i >= 0; --i) {
	                        t = this._targets[i];
	                        if (lt >= (d -= t.duration) && ld >= time) {
	                            t.update(time - d);
	                        }
	                        ld = d;
	                    }
	                }
	                if (this._d != null) {
	                    if (lt >= (d -= this._d.duration) && ld >= time) {
	                        this._d.update(time - d);
	                    }
	                    ld = d;
	                }
	                if (this._c != null) {
	                    if (lt >= (d -= this._c.duration) && ld >= time) {
	                        this._c.update(time - d);
	                    }
	                    ld = d;
	                }
	                if (this._b != null) {
	                    if (lt >= (d -= this._b.duration) && ld >= time) {
	                        this._b.update(time - d);
	                    }
	                    ld = d;
	                }
	                if (this._a != null) {
	                    if (lt >= (d -= this._a.duration) && ld >= time) {
	                        this._a.update(time - d);
	                    }
	                    ld = d;
	                }
	            }
	            this._lastTime = time;
	        }
	
	        /**
	         *
	         * @returns {AbstractTween}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            var targets = [];
	            if (this._a != null) {
	                targets.push(this._a.clone());
	            }
	            if (this._b != null) {
	                targets.push(this._b.clone());
	            }
	            if (this._c != null) {
	                targets.push(this._c.clone());
	            }
	            if (this._d != null) {
	                targets.push(this._d.clone());
	            }
	            if (this._targets != null) {
	                var t = this._targets;
	                var l = t.length;
	                for (var i = 0; i < l; ++i) {
	                    targets.push(t[i].clone());
	                }
	            }
	            return new SerialTween(targets, ticker, 0);
	        }
	    }]);
	
	    return SerialTween;
	}(_AbstractTween3.default);
	
	exports.default = SerialTween;

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _AbstractTween2 = __webpack_require__(377);
	
	var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TweenDecorator = function (_AbstractTween) {
	    _inherits(TweenDecorator, _AbstractTween);
	
	    /**
	     *
	     * @param baseTween {IITween}
	     * @param position {number}
	     */
	    function TweenDecorator(baseTween, position) {
	        _classCallCheck(this, TweenDecorator);
	
	        /**
	         *
	         * @type {IITween}
	         * @private
	         */
	        var _this = _possibleConstructorReturn(this, (TweenDecorator.__proto__ || Object.getPrototypeOf(TweenDecorator)).call(this, baseTween.ticker, position));
	
	        _this._baseTween = baseTween;
	
	        /**
	         *
	         * @type {number}
	         * @private
	         */
	        _this._duration = baseTween.duration;
	        return _this;
	    }
	
	    /**
	     * 
	     * @returns {IITween}
	     */
	
	
	    _createClass(TweenDecorator, [{
	        key: 'play',
	        value: function play() {
	            if (!this._isPlaying) {
	                this._baseTween.firePlay();
	                _get(TweenDecorator.prototype.__proto__ || Object.getPrototypeOf(TweenDecorator.prototype), 'play', this).call(this);
	            }
	        }
	    }, {
	        key: 'firePlay',
	        value: function firePlay() {
	            _get(TweenDecorator.prototype.__proto__ || Object.getPrototypeOf(TweenDecorator.prototype), 'firePlay', this).call(this);
	            this._baseTween.firePlay();
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this._isPlaying === true) {
	                _get(TweenDecorator.prototype.__proto__ || Object.getPrototypeOf(TweenDecorator.prototype), 'stop', this).call(this);
	                this._baseTween.fireStop();
	            }
	        }
	    }, {
	        key: 'fireStop',
	        value: function fireStop() {
	            _get(TweenDecorator.prototype.__proto__ || Object.getPrototypeOf(TweenDecorator.prototype), 'fireStop', this).call(this);
	            this._baseTween.fireStop();
	        }
	
	        /**
	         * 
	         * @param time {number}
	         */
	
	    }, {
	        key: 'internalUpdate',
	        value: function internalUpdate(time) {
	            this._baseTween.update(time);
	        }
	    }, {
	        key: 'baseTween',
	        get: function get() {
	            return this._baseTween;
	        }
	    }]);
	
	    return TweenDecorator;
	}(_AbstractTween3.default);
	
	exports.default = TweenDecorator;

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TweenDecorator2 = __webpack_require__(386);
	
	var _TweenDecorator3 = _interopRequireDefault(_TweenDecorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ReversedTween = function (_TweenDecorator) {
	  _inherits(ReversedTween, _TweenDecorator);
	
	  /**
	   *
	   * @param baseTween {IITween}
	   * @param position {number}
	   */
	  function ReversedTween(baseTween, position) {
	    _classCallCheck(this, ReversedTween);
	
	    var _this = _possibleConstructorReturn(this, (ReversedTween.__proto__ || Object.getPrototypeOf(ReversedTween)).call(this, baseTween, position));
	
	    _this._duration = baseTween.duration;
	    return _this;
	  }
	
	  /**
	   *
	   * @param time {number}
	   */
	
	
	  _createClass(ReversedTween, [{
	    key: 'internalUpdate',
	    value: function internalUpdate(time) {
	      this.baseTween.update(this._duration - time);
	    }
	
	    /**
	     *
	     * @returns {AbstractTween}
	     */
	
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      return new ReversedTween(this.baseTween.clone(), 0);
	    }
	  }]);
	
	  return ReversedTween;
	}(_TweenDecorator3.default);
	
	exports.default = ReversedTween;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TweenDecorator2 = __webpack_require__(386);
	
	var _TweenDecorator3 = _interopRequireDefault(_TweenDecorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var RepeatedTween = function (_TweenDecorator) {
	    _inherits(RepeatedTween, _TweenDecorator);
	
	    /**
	     *
	     * @param baseTween {IITween}
	     * @param repeatCount {uint}
	     */
	    function RepeatedTween(baseTween, repeatCount) {
	        _classCallCheck(this, RepeatedTween);
	
	        var _this = _possibleConstructorReturn(this, (RepeatedTween.__proto__ || Object.getPrototypeOf(RepeatedTween)).call(this, baseTween, 0));
	
	        _this._baseDuration = baseTween.duration;
	        _this._repeatCount = repeatCount;
	        _this._duration = _this._baseDuration * repeatCount;
	        return _this;
	    }
	
	    /**
	     *
	     * @returns {uint}
	     */
	
	
	    _createClass(RepeatedTween, [{
	        key: 'internalUpdate',
	
	
	        /**
	         * 0 ~ duration 까지 되도록 time을 빼줍니다.
	         * @param time {number}
	         */
	        value: function internalUpdate(time) {
	            if (time >= 0) {
	                time -= time < this._duration ? this._baseDuration * parseInt(time / this._baseDuration) : this._duration - this._baseDuration;
	            }
	            this._baseTween.update(time);
	        }
	
	        /**
	         *
	         * @returns {AbstractTween}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new RepeatedTween(this._baseTween.clone(), this.repeatCount);
	        }
	    }, {
	        key: 'repeatCount',
	        get: function get() {
	            return this._repeatCount;
	        }
	    }]);
	
	    return RepeatedTween;
	}(_TweenDecorator3.default);
	
	exports.default = RepeatedTween;

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TweenDecorator2 = __webpack_require__(386);
	
	var _TweenDecorator3 = _interopRequireDefault(_TweenDecorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ScaledTween = function (_TweenDecorator) {
	  _inherits(ScaledTween, _TweenDecorator);
	
	  /**
	   *
	   * @param baseTween {IITween}
	   * @param scale {number}
	   */
	  function ScaledTween(baseTween, scale) {
	    _classCallCheck(this, ScaledTween);
	
	    var _this = _possibleConstructorReturn(this, (ScaledTween.__proto__ || Object.getPrototypeOf(ScaledTween)).call(this, baseTween, 0));
	
	    _this._duration = baseTween.duration * scale;
	    _this._scale = scale;
	    return _this;
	  }
	
	  /**
	   *
	   * @returns {number}
	   */
	
	
	  _createClass(ScaledTween, [{
	    key: 'internalUpdate',
	
	
	    /**
	     *
	     * @param time {number}
	     */
	    value: function internalUpdate(time) {
	      this._baseTween.update(time / this.scale);
	    }
	
	    /**
	     *
	     * @returns {AbstractTween}
	     */
	
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      return new ScaledTween(this._baseTween.clone(), this._scale);
	    }
	  }, {
	    key: 'scale',
	    get: function get() {
	      return this._scale;
	    }
	  }]);
	
	  return ScaledTween;
	}(_TweenDecorator3.default);
	
	exports.default = ScaledTween;

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TweenDecorator2 = __webpack_require__(386);
	
	var _TweenDecorator3 = _interopRequireDefault(_TweenDecorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var SlicedTween = function (_TweenDecorator) {
	    _inherits(SlicedTween, _TweenDecorator);
	
	    /**
	     *
	     * @param baseTween {IITween}
	     * @param begin {number}
	     * @param end {number}
	     */
	    function SlicedTween(baseTween, begin, end) {
	        _classCallCheck(this, SlicedTween);
	
	        var _this = _possibleConstructorReturn(this, (SlicedTween.__proto__ || Object.getPrototypeOf(SlicedTween)).call(this, baseTween, 0));
	
	        _this._duration = end - begin;
	        _this._begin = begin;
	        _this._end = end;
	        return _this;
	    }
	
	    /**
	     *
	     * @returns {number}
	     */
	
	
	    _createClass(SlicedTween, [{
	        key: 'internalUpdate',
	
	
	        /**
	         *
	         * @param time {number}
	         */
	        value: function internalUpdate(time) {
	            if (time > 0) {
	                if (time < this._duration) {
	                    this._baseTween.update(time + this._begin);
	                } else {
	                    this._baseTween.update(this._end);
	                }
	            } else {
	                this._baseTween.update(this._begin);
	            }
	        }
	
	        /**
	         *
	         * @returns {AbstractTween}
	         */
	
	    }, {
	        key: 'newInstance',
	        value: function newInstance() {
	            return new SlicedTween(this._baseTween.clone(), this._begin, this._end);
	        }
	    }, {
	        key: 'begin',
	        get: function get() {
	            return this._begin;
	        }
	
	        /**
	         *
	         * @returns {number}
	         */
	
	    }, {
	        key: 'end',
	        get: function get() {
	            return this._end;
	        }
	    }]);
	
	    return SlicedTween;
	}(_TweenDecorator3.default);
	
	exports.default = SlicedTween;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TweenDecorator2 = __webpack_require__(386);
	
	var _TweenDecorator3 = _interopRequireDefault(_TweenDecorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var DelayedTween = function (_TweenDecorator) {
	  _inherits(DelayedTween, _TweenDecorator);
	
	  /**
	   *
	   * @param baseTween {IITween}
	   * @param preDelay {number}
	   * @param postDelay {number}
	   */
	  function DelayedTween(baseTween, preDelay, postDelay) {
	    _classCallCheck(this, DelayedTween);
	
	    var _this = _possibleConstructorReturn(this, (DelayedTween.__proto__ || Object.getPrototypeOf(DelayedTween)).call(this, baseTween, 0));
	
	    _this._duration = preDelay + baseTween.duration + postDelay;
	    _this._preDelay = preDelay;
	    _this._postDelay = postDelay;
	    return _this;
	  }
	
	  /**
	   *
	   * @returns {number}
	   */
	
	
	  _createClass(DelayedTween, [{
	    key: 'internalUpdate',
	
	
	    /**
	     *
	     * @param time {number}
	     */
	    value: function internalUpdate(time) {
	      this._baseTween.update(time - this._preDelay);
	    }
	
	    /**
	     *
	     * @returns {AbstractTween}
	     */
	
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      return new DelayedTween(this._baseTween.clone(), this._preDelay, this._postDelay);
	    }
	  }, {
	    key: 'preDelay',
	    get: function get() {
	      return this._preDelay;
	    }
	
	    /**
	     *
	     * @returns {number}
	     */
	
	  }, {
	    key: 'postDelay',
	    get: function get() {
	      return this._postDelay;
	    }
	  }]);
	
	  return DelayedTween;
	}(_TweenDecorator3.default);
	
	exports.default = DelayedTween;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractActionTween2 = __webpack_require__(393);
	
	var _AbstractActionTween3 = _interopRequireDefault(_AbstractActionTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AddChildAction = function (_AbstractActionTween) {
	    _inherits(AddChildAction, _AbstractActionTween);
	
	    /**
	     * TODO parent 가 없어서 바로 사용이 힘듭니다.
	     * @param ticker {ITicker}
	     * @param target {DisplayObject}
	     * @param parent {DisplayObjectContainer}
	     */
	    function AddChildAction(ticker, target, parent) {
	        _classCallCheck(this, AddChildAction);
	
	        var _this = _possibleConstructorReturn(this, (AddChildAction.__proto__ || Object.getPrototypeOf(AddChildAction)).call(this, ticker));
	
	        _this._target = target;
	        _this._parent = parent;
	        return _this;
	    }
	
	    /**
	     *
	     * @returns {DisplayObject}
	     */
	
	
	    _createClass(AddChildAction, [{
	        key: 'action',
	        value: function action() {
	            if (this._target != null && this._parent != null && this._target.parent != this._parent) {
	                this._parent.addChild(this._target);
	            }
	        }
	    }, {
	        key: 'rollback',
	        value: function rollback() {
	            if (this._target != null && this._parent != null && this._target.parent == this._parent) {
	                this._parent.removeChild(this._target);
	            }
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	
	        /**
	         *
	         * @returns {DisplayObjectContainer}
	         */
	
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this._parent;
	        }
	    }]);
	
	    return AddChildAction;
	}(_AbstractActionTween3.default);
	
	exports.default = AddChildAction;

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractTween2 = __webpack_require__(377);
	
	var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AbstractActionTween = function (_AbstractTween) {
	    _inherits(AbstractActionTween, _AbstractTween);
	
	    /**
	     *
	     * @param ticker {ITicker}
	     */
	    function AbstractActionTween(ticker) {
	        _classCallCheck(this, AbstractActionTween);
	
	        var _this = _possibleConstructorReturn(this, (AbstractActionTween.__proto__ || Object.getPrototypeOf(AbstractActionTween)).call(this, ticker, 0));
	
	        _this._duration = 0.01;
	        _this._lastTime = -1;
	        return _this;
	    }
	
	    /**
	     * 
	     * @param time {number}
	     */
	
	
	    _createClass(AbstractActionTween, [{
	        key: 'internalUpdate',
	        value: function internalUpdate(time) {
	            if (this._lastTime < 0.01 && time >= 0.01) {
	                this.action();
	            } else if (this._lastTime > 0 && time <= 0) {
	                this.rollback();
	            }
	            this._lastTime = time;
	        }
	    }, {
	        key: 'action',
	        value: function action() {}
	    }, {
	        key: 'rollback',
	        value: function rollback() {}
	    }]);
	
	    return AbstractActionTween;
	}(_AbstractTween3.default);
	
	exports.default = AbstractActionTween;

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractActionTween2 = __webpack_require__(393);
	
	var _AbstractActionTween3 = _interopRequireDefault(_AbstractActionTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var RemoveFromParentAction = function (_AbstractActionTween) {
	    _inherits(RemoveFromParentAction, _AbstractActionTween);
	
	    /**
	     *
	     * @param ticker {ITicker}
	     * @param target {DisplayObject}
	     */
	    function RemoveFromParentAction(ticker, target) {
	        _classCallCheck(this, RemoveFromParentAction);
	
	        var _this = _possibleConstructorReturn(this, (RemoveFromParentAction.__proto__ || Object.getPrototypeOf(RemoveFromParentAction)).call(this, ticker));
	
	        _this._parent = null;
	        _this._target = target;
	        return _this;
	    }
	
	    /**
	     * 
	     * @returns {DisplayObject}
	     */
	
	
	    _createClass(RemoveFromParentAction, [{
	        key: 'action',
	        value: function action() {
	            if (this._target != null && this._target.parent != null) {
	                this._parent = this._target.parent;
	                this._parent.removeChild(this._target);
	            }
	        }
	    }, {
	        key: 'rollback',
	        value: function rollback() {
	            if (this._target != null && this._parent != null) {
	                this._parent.addChild(this._target);
	                this._parent = null;
	            }
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this._target;
	        }
	    }]);
	
	    return RemoveFromParentAction;
	}(_AbstractActionTween3.default);
	
	exports.default = RemoveFromParentAction;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractActionTween2 = __webpack_require__(393);
	
	var _AbstractActionTween3 = _interopRequireDefault(_AbstractActionTween2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * BetweenAS3
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2009 BeInteractive! (www.be-interactive.org) and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                    Spark project  (www.libspark.org)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var FunctionAction = function (_AbstractActionTween) {
	    _inherits(FunctionAction, _AbstractActionTween);
	
	    /**
	     *
	     * @param ticker {ITicker}
	     * @param func {Function}
	     * @param params {Array}
	     * @param useRollback {boolean}
	     * @param rollbackFunc {Function}
	     * @param rollbackParams {Array}
	     */
	    function FunctionAction(ticker, func) {
	        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	        var useRollback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	        var rollbackFunc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	        var rollbackParams = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
	
	        _classCallCheck(this, FunctionAction);
	
	        var _this = _possibleConstructorReturn(this, (FunctionAction.__proto__ || Object.getPrototypeOf(FunctionAction)).call(this, ticker));
	
	        _this._func = func;
	        _this._params = params;
	        _this._rollbackFunc = undefined;
	        _this._rollbackParams = undefined;
	
	        if (useRollback) {
	            if (rollbackFunc != null) {
	                _this._rollbackFunc = rollbackFunc;
	                _this._rollbackParams = rollbackParams;
	            } else {
	                _this._rollbackFunc = func;
	                _this._rollbackParams = params;
	            }
	        }
	        return _this;
	    }
	
	    _createClass(FunctionAction, [{
	        key: 'action',
	        value: function action() {
	            if (this._func != null) {
	                this._func.apply(null, this._params);
	            }
	        }
	    }, {
	        key: 'rollback',
	        value: function rollback() {
	            if (this._rollbackFunc != null) {
	                this._rollbackFunc.apply(null, this._rollbackParams);
	            }
	        }
	    }]);
	
	    return FunctionAction;
	}(_AbstractActionTween3.default);
	
	exports.default = FunctionAction;

/***/ })

});
//# sourceMappingURL=index.js.map