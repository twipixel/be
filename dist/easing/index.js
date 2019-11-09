webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(329);
	
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _animation = __webpack_require__(330);
	
	var _Size = __webpack_require__(331);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Config = __webpack_require__(332);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _Graph = __webpack_require__(333);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _GraphItem = __webpack_require__(334);
	
	var _GraphItem2 = _interopRequireDefault(_GraphItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var list = [Sine.easeIn, Sine.easeOut, Sine.easeOutIn, Sine.easeInOut, Quadratic.easeIn, Quadratic.easeOut, Quadratic.easeOutIn, Quadratic.easeInOut, Cubic.easeIn, Cubic.easeOut, Cubic.easeOutIn, Cubic.easeInOut, Quartic.easeIn, Quartic.easeOut, Quartic.easeOutIn, Quartic.easeInOut, Quintic.easeIn, Quintic.easeOut, Quintic.easeOutIn, Quintic.easeInOut, Circular.easeIn, Circular.easeOut, Circular.easeOutIn, Circular.easeInOut, Exponential.easeIn, Exponential.easeOut, Exponential.easeOutIn, Exponential.easeInOut, Back.easeIn, Back.easeOut, Back.easeOutIn, Back.easeInOut, Elastic.easeIn, Elastic.easeOut, Elastic.easeOutIn, Elastic.easeInOut, Bounce.easeIn, Bounce.easeOut, Bounce.easeOutIn, Bounce.easeInOut
	//Physical.uniform(), Physical.accelerate(), Physical.exponential()
	];
	
	var name = ['Sine.easeIn', 'Sine.easeOut', 'Sine.easeOutIn', 'Sine.easeInOut', 'Quadratic.easeIn', 'Quadratic.easeOut', 'Quadratic.easeOutIn', 'Quadratic.easeInOut', 'Cubic.easeIn', 'Cubic.easeOut', 'Cubic.easeOutIn', 'Cubic.easeInOut', 'Quartic.easeIn', 'Quartic.easeOut', 'Quartic.easeOutIn', 'Quartic.easeInOut', 'Quintic.easeIn', 'Quintic.easeOut', 'Quintic.easeOutIn', 'Quintic.easeInOut', 'Circular.easeIn', 'Circular.easeOut', 'Circular.easeOutIn', 'Circular.easeInOut', 'Exponential.easeIn', 'Exponential.easeOut', 'Exponential.easeOutIn', 'Exponential.easeInOut', 'Back.easeIn', 'Back.easeOut', 'Back.easeOutIn', 'Back.easeInOut', 'Elastic.easeIn', 'Elastic.easeOut', 'Elastic.easeOutIn', 'Elastic.easeInOut', 'Bounce.easeIn', 'Bounce.easeOut', 'Bounce.easeOutIn', 'Bounce.easeInOut', 'PhysicalUniform', 'PhysicalAccelerate', 'PhysicalExponential'];
	
	var playButton = new PIXI.Sprite.fromImage('./../assets/image/play-button.png');
	
	var Test = function () {
	    function Test() {
	        var _this = this;
	
	        _classCallCheck(this, Test);
	
	        this.app = new PIXI.Application(800, 1400, { forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true });
	        //this.app = new PIXI.Application(Size.windowWidth, Size.windowHeight, {forceCanvas: true, backgroundColor: 0xFFFFFF, antialias: true});
	        document.body.appendChild(this.app.view);
	
	        this.canvas = this.app.renderer.view;
	        this.renderer = this.app.renderer;
	        this.stage = this.app.stage;
	
	        this.render = this.render.bind(this);
	
	        playButton.anchor = { x: 0.5, y: 0.5 };
	        playButton.scale.x = 0.9;
	        playButton.scale.y = 0.9;
	        // playButton.x = playButton.width / 2 + 20;
	        // playButton.y = playButton.height / 2 + 20;
	        playButton.x = _Size2.default.windowCenterX;
	        playButton.y = _Size2.default.windowCenterY;
	        playButton.buttonMode = true;
	        playButton.interactive = true;
	        this.app.stage.addChild(playButton);
	
	        var tweeen1 = Be.to(playButton, { scaleX: 1, scaleY: 1, alpha: 1 }, 2, Back.easeOut),
	            tweeen2 = Be.to(playButton, { scaleX: 0.9, scaleY: 0.9, alpha: 1 }, 2, Back.easeOut),
	            serial = Be.serial(tweeen1, tweeen2),
	            tween = Be.repeat(serial, 10000);
	        tween.play();
	
	        playButton.on('pointerdown', function () {
	            tween.stop();
	            _this.app.stage.removeChild(playButton);
	            _this.initialize();
	        });
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this2 = this;
	
	            var startX = 10;
	            var startY = 20;
	            var itemWidth = 168 + 20;
	            var itemHeight = 123 + 30;
	
	            var count = 0,
	                xPos = 0,
	                yPos = 0;
	
	            list.forEach(function (easing) {
	                var item = new _GraphItem2.default(name[count], easing, 4, 4);
	                _this2.stage.addChild(item);
	
	                xPos = count % 4;
	
	                if (count !== 0 && xPos === 0) {
	                    yPos++;
	                }
	
	                item.x = startX + itemWidth * xPos;
	                item.y = startY + itemHeight * yPos;
	                count++;
	            });
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
	            (0, _animation.requestAnimationFrame)(this.render);
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
	
	            if (playButton) {
	                playButton.x = _Size2.default.windowCenterX;
	                playButton.y = _Size2.default.windowCenterY;
	            }
	
	            this.renderer.resize(width, height);
	        }
	    }]);
	
	    return Test;
	}();
	
	exports.default = Test;

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

/***/ 333:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var spaceY = 20;
	var lineThickness = 1.5;
	var lineColor = 0x009dec;
	var bgColor = 0xFAFAFA;
	var outLineColor = 0xE6E6E6;
	var outLineThickness = 0.5;
	
	var Graph = function (_PIXI$Container) {
	    _inherits(Graph, _PIXI$Container);
	
	    function Graph() {
	        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	        var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	        _classCallCheck(this, Graph);
	
	        var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this));
	
	        _this.g = new PIXI.Graphics();
	        _this.addChild(_this.g);
	
	        _this.value = 0;
	        _this.easing = easing;
	        _this.spaceY = spaceY * 2;
	        _this.graphWidth = width;
	        _this.graphHeight = height;
	        return _this;
	    }
	
	    _createClass(Graph, [{
	        key: 'draw',
	        value: function draw() {
	            var _this2 = this;
	
	            if (!this.easing) {
	                return;
	            }
	
	            this.g.clear();
	            this.drawOutLine();
	
	            this.lastPoint = { x: 0, y: this.graphHeight - spaceY };
	            this.g.lineStyle(lineThickness, lineColor);
	            this.g.moveTo(this.lastPoint.x, this.lastPoint.y);
	
	            var tween = Be.tween(this, { value: 1 }, { value: 0 }, 1, this.easing);
	
	            tween.onUpdate = function () {
	                _this2.drawGraph(tween.position, _this2.value);
	            };
	
	            tween.onComplete = function () {
	                _this2.drawGraph(tween.position, _this2.value);
	            };
	
	            tween.play();
	        }
	    }, {
	        key: 'drawOutLine',
	        value: function drawOutLine() {
	            console.log('drawOut');
	            this.g.beginFill(bgColor);
	            this.g.drawRect(0, 0, this.graphWidth, this.graphHeight);
	            this.g.endFill();
	
	            this.g.lineStyle(outLineThickness, outLineColor);
	            this.g.moveTo(0, spaceY);
	            this.g.lineTo(this.graphWidth, spaceY);
	            this.g.moveTo(0, this.graphHeight - spaceY);
	            this.g.lineTo(this.graphWidth, this.graphHeight - spaceY);
	        }
	
	        /**
	         * x축이 time, y축이 value
	         * @param time x축
	         * @param value y축
	         */
	
	    }, {
	        key: 'drawGraph',
	        value: function drawGraph(time, value) {
	            var x = time * this.graphWidth,
	                y = this.graphHeight - spaceY - value * this.realGraphHeight;
	
	            this.g.moveTo(this.lastPoint.x, this.lastPoint.y);
	            this.g.lineTo(x, y);
	
	            this.lastPoint.x = x;
	            this.lastPoint.y = y;
	        }
	    }, {
	        key: 'realGraphHeight',
	        get: function get() {
	            return this.graphHeight - this.spaceY;
	        }
	    }]);
	
	    return Graph;
	}(PIXI.Container);
	
	exports.default = Graph;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Graph = __webpack_require__(333);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GraphItem = function (_PIXI$Container) {
	    _inherits(GraphItem, _PIXI$Container);
	
	    function GraphItem(easingName, easing) {
	        var spaceX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var spaceY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	        _classCallCheck(this, GraphItem);
	
	        var _this = _possibleConstructorReturn(this, (GraphItem.__proto__ || Object.getPrototypeOf(GraphItem)).call(this));
	
	        var text = new PIXI.Text(easingName, { fontFamily: 'Helvetica, Arial, sans', fontSize: 13, fill: 0x000 });
	        text.x = spaceX;
	        text.y = spaceY;
	        _this.addChild(text);
	
	        var graph = new _Graph2.default(168, 100, easing);
	        graph.x = spaceX;
	        graph.y = spaceY + text.height + 8;
	        _this.addChild(graph);
	
	        graph.draw();
	        return _this;
	    }
	
	    return GraphItem;
	}(PIXI.Container);
	
	exports.default = GraphItem;

/***/ })

});
//# sourceMappingURL=index.js.map