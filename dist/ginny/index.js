webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(345);
	
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

/***/ 345:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	            if (typeof Be === 'undefined' || Be === null) {
	                console.log('Be Not Found');
	            } else {
	                console.log('Be Found');
	            }
	        }
	    }, {
	        key: 'initializeGUI',
	        value: function initializeGUI() {
	            this.gui = new dat.GUI();
	        }
	    }, {
	        key: 'update',
	        value: function update(ms) {}
	    }, {
	        key: 'render',
	        value: function render(ms) {
	            this.update(ms);
	            this.requestId = requestAnimationFrame(this.render.bind(this));
	        }
	    }]);
	
	    return Test;
	}();
	
	exports.default = Test;

/***/ })

});
//# sourceMappingURL=index.js.map