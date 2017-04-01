
    ?
        1
        2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21
    22
    23
    24
    25
    26
    27
    28
    29
    30
    31
    32
    33
    34
    35
    36
    37
    38
    39
    40
    41
    42
    43
    44
    45
    46
    47
    48
    49
    50
    51
    52
    53
    54
    55
    56
    57
    58
    59
    60
    61
    62
    63
    64
    65
    66
    67
    68
    69
    70
    71
    72
    73
    74
    75
    76
    77
    78
    79
    80
    81
    82
    83
    84
    85
    86
    87
    88
    89
    90
    91
    92
    93
    94
    95
    96
    97
    98
    99
    100
    101
    102
    103
    104
    105
    106
    107
    108
    109
    110
    111
    112
    113
    114
    115
    116
    117
    118
    119
    120
    121
    122
    123
    124
    125
    126
    127
    128
    129
    130
    131
    132
    133
    134
    135
    136
    137
    138
    139
    140
    141
    142
    143
    144
    145
    146
    147
    148
    149
    150
    151
    152
    153
    154
    155
    156
    157
    158
    159
    160
    161
    162
    163
    164
    165
    166
    167
    168
    169
    170
    171
    172
    173
    174
    /**
     * Ginny Effect Modoki
     *
     * 作ってしまいました。。。
     *
     * Inspired by
     * http://fladdict.net/blog/2009/09/flash-ginny-effect.html
     * http://fladdict.net/exp/ginnyeffect/
     * http://twitter.com/fladdict/status/3842965317
     *
     * Photo by
     * http://www.flickr.com/photos/88403964@N00/2662752839/ (by Yasu)
     *
     * 9/9(Wed) 04:00 first post　http://twitter.com/clockmaker/status/3845570478
     * ※ Mac OS X の隠しエフェクトの「Suck」っぽい http://bit.ly/11vMDh
     */
    package {
    import flash.display.*;
    import flash.events.*;
    import flash.geom.*;
    import flash.net.*;
    import flash.system.*;
    import org.libspark.betweenas3.BetweenAS3;
    import org.libspark.betweenas3.easing.*;
    import org.libspark.betweenas3.tweens.ITween;
    import com.bit101.components.*;

    [SWF(frameRate = 60)]
    public class Main extends Sprite {

        private const IMAGE_URL:String = "http://farm4.static.flickr.com/3190/2662752839_249c6642b1.jpg";
        private const IMG_W:int = 500;
        private const IMG_H:int = 375;
        private const SEGMENT:int = 20;
        private var loader:Loader;
        private var vertexs:Array;
        private var sprite:Sprite;
        private var isHide:Boolean = false;
        private var isShift:Boolean = false;

        public function Main():void {
            // init
            stage.quality = StageQuality.MEDIUM;
            graphics.beginFill(0x0);
            graphics.drawRect(0, 0, 465, 465);

            new Label(this, 360, 440, "PLEASE CLICK STAGE")

            // load
            var context:LoaderContext = new LoaderContext(true);
            loader = new Loader();
            loader.contentLoaderInfo.addEventListener(Event.COMPLETE, compHandler);
            loader.load(new URLRequest(IMAGE_URL), context);
        }

        private function compHandler(e:Event):void {
            sprite = new Sprite();
            addChild(sprite);
            vertexs = []
            for (var xx:int = 0; xx < SEGMENT; xx++) {
                vertexs[xx] = [];
                for (var yy:int = 0; yy < SEGMENT; yy++) {
                    vertexs[xx][yy] = new Point(xx * IMG_W / SEGMENT, yy * IMG_H/SEGMENT);
                }
            }
            draw();
            addEventListener(Event.ENTER_FRAME, draw);
            stage.addEventListener(MouseEvent.CLICK, clickHandler);
            stage.addEventListener(KeyboardEvent.KEY_UP, keyUpHandler);
            stage.addEventListener(KeyboardEvent.KEY_DOWN, keyDownHandler);
        }

        private function clickHandler(e:MouseEvent):void {
            var tweens:Array = [];
            var xx:int, yy:int, delay:Number;
            var px:Number = SEGMENT * (mouseX / IMG_W);
            var py:Number = SEGMENT * (mouseY / IMG_H);

            if (!isHide) {
                for (xx = 0; xx < SEGMENT; xx++) {
                    for (yy = 0; yy < SEGMENT; yy++) {
                        vertexs[xx][yy] = new Point(xx * IMG_W / SEGMENT, yy * IMG_H/SEGMENT);
                        delay = Math.sqrt((xx - px) * (xx - px) + (yy - py) * (yy - py)) / 40;

                        tweens.push(
                            BetweenAS3.delay(
                                BetweenAS3.tween(vertexs[xx][yy], {
                                    x : px * IMG_W / SEGMENT,
                                    y : py * IMG_H / SEGMENT
                                },null, delay, Cubic.easeIn),
                                delay / 2
                            )
                        )
                    }
                }
            }else {
                // 重み付けが怪しい・・・
                var max:Number = 0;
                for (xx = 0; xx < SEGMENT; xx++) {
                    for (yy = 0; yy < SEGMENT; yy++) {
                        vertexs[xx][yy] = new Point(px * IMG_W / SEGMENT, py * IMG_H / SEGMENT);
                        delay = Math.sqrt((xx - px) * (xx - px) + (yy - py) * (yy - py))
                        max = Math.max(max, delay);
                    }
                }
                for (xx = 0; xx < SEGMENT; xx++) {
                    for (yy = 0; yy < SEGMENT; yy++) {
                        delay = (max - Math.sqrt((xx - px) * (xx - px) + (yy - py) * (yy - py))) / 40;
                        tweens.push(
                            BetweenAS3.delay(
                                BetweenAS3.tween(vertexs[xx][yy], {
                                    x : xx * IMG_W / SEGMENT,
                                    y : yy * IMG_H / SEGMENT
                                },null, delay + 0.05, Quad.easeOut),
                                delay / 2
                            )
                        )
                    }
                }
            }

            var itw:ITween = BetweenAS3.parallelTweens(tweens);
            if (isShift) itw = BetweenAS3.scale(itw, 5);
            itw.play();

            isHide = !isHide;
        }

        /**
         * drawTriangles でテクスチャを貼り付けるメソッド
         * 参考： http://wonderfl.net/code/e7e1e28a9f20d73f11f0bb02d3e4b5f512c7cc0f
         */
        private function draw(e:Event = null):void {
            var vertices:Vector.<number> = new Vector.<number>();
            var indices:Vector.<int> = new Vector.<int>();
            var uvtData:Vector.<number> = new Vector.<number>();

            for (var xx:int = 0; xx < SEGMENT; xx++) {
                for (var yy:int = 0; yy < SEGMENT; yy++) {
                    vertices[vertices.length] = vertexs[xx][yy].x
                    vertices[vertices.length] = vertexs[xx][yy].y
                    uvtData[uvtData.length] = xx / SEGMENT;
                    uvtData[uvtData.length] = yy / SEGMENT;
                }
            }

            for (var i:int = 0; i < SEGMENT - 1; i++) {
                for (var j:int = 0; j < SEGMENT - 1; j++) {
                    indices.push(i * SEGMENT + j, i * SEGMENT + j + 1, (i + 1) * SEGMENT + j);
                    indices.push(i * SEGMENT + j + 1, (i + 1) * SEGMENT + 1 + j, (i + 1) * SEGMENT + j);
                }
            }

            var g:Graphics = sprite.graphics;
            g.clear();
            g.beginBitmapFill(Bitmap(loader.content).bitmapData);
            g.drawTriangles(vertices, indices, uvtData);
            g.endFill();
        }

        /**
         * Shiftキーを押してるとスローモーションになる
         * macの挙動と同じように
         */
        private function keyUpHandler(e:KeyboardEvent):void {
            if(e.keyCode == 16) isShift = false;
        }

        private function keyDownHandler(e:KeyboardEvent):void {
            if(e.keyCode == 16) isShift = true;
        }
    }
    }
    </number></number></int></int></number></number>