import {
    animation,
    requestAnimationFrame,
    cancelAnimationFrame,
    Easing
} from './../../external/lib/animation';




/**
 *
 */
export default class Test{

    constructor() {
        var canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        var context = canvas.getContext('2d');
        document.body.appendChild(canvas);

        this.canvas = canvas;
        this.context = this.ctx = context;

        this.initialize();
        this.initializeGUI();
        this.update();
        //this.render();
    }


    initialize() {
        this.figureFunction();
        // this.createClass();
    }


    figureFunction() {
        var f = (function() {
            return (function e(t, n, r) {
                function s(o, u) {

                }
            })({}, {}, [183])(183)
        });
    }


    createClass() {




        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();


        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }


        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }



        return;

        var TestClass = function(_EventEmitter) {
            _inherits(TestClass, _EventEmitter);

            function TestClass() {
                _classCallCheck(this, TestClass);

                var _this = _possibleConstructorReturn(this, result.EventEmitter.call(this));
                _this._x = 0;
                _this._y = 0;
                return _this;
            }


            TestClass.prototype.emitRandomNumber = function() {
                this.emit('EMIT_RANDOM_NUMBER', Math.random());
            };

            _createClass(TestClass, [{
                key: 'x',
                get: function get() {
                    return this._x;
                },
                set: function set(value)
                {
                    this._x = value;
                }

            }, {
                key: 'y',
                get: function get() {
                    return this._y;
                },
                set: function set(value)
                {
                    this._y = value;
                }
            }]);

            return TestClass;
        }(result.EventEmitter);



        var a = new TestClass();
        console.log('x', a.x);
        console.log('y', a.y);


        a.on('EMIT_RANDOM_NUMBER', number => {
            console.log('number:', number);
        });


        a.emitRandomNumber();
    }


    inspect(obj) {
        console.log('inspect -----------');
        for(var prop in obj) {
            console.log(prop + ':' + obj[prop]);
        }
        console.log('inspect -----------');
    }


    initializeGUI() {
        this.gui = new dat.GUI();

        this.config = {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0
        };

        this.config.log = this.log.bind(this);
        this.config.plus = this.plus.bind(this);
        this.config.minus = this.minus.bind(this);
        this.config.renderStart = this.renderStart.bind(this);
        this.config.renderStop = this.renderStop.bind(this);
        this.config.animation = this.animation.bind(this);

        this.gui.add(this.config, 'x').min(0).max(200).step(1).onChange((value) => {
            this.config.x = value;
        });

        this.gui.add(this.config, 'y').min(0).max(200).step(1).onChange((value) => {
            this.config.y = value;
        });

        this.gui.add(this.config, 'scaleX').min(0).max(4).step(0.1).onChange((value) => {
            this.config.scaleX = value;
        });

        this.gui.add(this.config, 'scaleY').min(0).max(4).step(0.1).onChange((value) => {
            this.config.scaleY = value;
        });

        this.gui.add(this.config, 'rotation').min(0).max(360).step(1).onChange((value) => {
            this.config.rotation = value;
        });

        this.gui.add(this.config, 'log');
        this.gui.add(this.config, 'plus');
        this.gui.add(this.config, 'minus');
        this.gui.add(this.config, 'renderStart');
        this.gui.add(this.config, 'renderStop');
        this.gui.add(this.config, 'animation');
    }


    update(ms) {
        this.drawTest(this.ctx);
        this.drawCircle(this.ctx);
        this.drawGrid(this.canvas, this.ctx);
    }


    render(ms) {
        this.update(ms);
        this.requestId = requestAnimationFrame(this.render.bind(this));
    }


    renderStart() {
        this.render();
    }


    renderStop() {
        cancelAnimationFrame(this.requestId);
    }


    animation() {
        animation(this, this.onAnimation, 60, Easing.easeOutQuad);
        // animation(null, this.onAnimation.bind(this), 60, Easing.easeOutQuad);
    }


    onAnimation(ease, step, currentStep) {
        console.log('ease: %s, step: %s, currentStep: %s', ease, step, currentStep);
    }


    onComplete() {
        console.log('onComplete');
    }


    plus() {
        this.config.rotation++;
        this.log();
    }


    minus() {
        this.config.rotation--;
        this.log();
    }


    log() {
        console.log('r', this.config.rotation);
    }


    drawGrid(canvas, context) {
        context.save();

        var w = canvas.width;
        var h = canvas.height;

        for (var x = 0.5; x < w; x += 10) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, h);

            if ((x - 0.5) % 50 === 0) {
                context.strokeStyle = "#999999";
            } else {
                context.strokeStyle = "#dddddd";
            }

            context.stroke();
        }

        for (var y = 0.5; y < h; y += 10) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(w, y);

            if ((y - 0.5) % 50 === 0) {
                context.strokeStyle = "#999999";
            } else {
                context.strokeStyle = "#dddddd";
            }

            context.stroke();
        }
    }


    drawTest(context) {
        context.beginPath();
        context.lineTo(0.5, 0);
        context.lineTo(0.5, 600);
        context.strokeStyle = "red";
        context.stroke();

        context.beginPath();
        context.lineTo(10.5, 0);
        context.lineTo(10.5, 600);
        context.strokeStyle = "black";
        context.stroke();
    }


    drawCircle(context) {
        context.save();
        context.beginPath();
        context.arc(10, 10, 10, 0, 2 * Math.PI);
        context.strokeStyle = 'RED';
        context.stroke();
        context.restore();
    }


}