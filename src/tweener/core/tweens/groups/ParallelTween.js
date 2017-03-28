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


import AbstractTween from '../AbstractTween';


export default class ParallelTween extends AbstractTween
{
    /**
     *
     * @param targets {Array}
     * @param ticker {ITicker}
     * @param position {number}
     */
    constructor(targets, ticker, position)
    {
        super(ticker, position);

        /**
         *
         * @type {IITween}
         * @private
         */
        this._a = null;

        /**
         *
         * @type {IITween}
         * @private
         */
        this._b = null;

        /**
         *
         * @type {IITween}
         * @private
         */
        this._c = null;

        /**
         *
         * @type {IITween}
         * @private
         */
        this._d = null;

        /**
         *
         * @type {Vector.<IITween>}
         * @private
         */
        this._targets = null;

        
        var l = targets.length;

        this._duration = 0;

        if (l > 0) {
            this._a = targets[0];
            this._duration = this._a.duration > this._duration ? this._a.duration : this._duration;
            if (l > 1) {
                this._b = targets[1];
                this._duration = this._b.duration > this._duration ? this._b.duration : this._duration;
                if (l > 2) {
                    this._c = targets[2];
                    this._duration = this._c.duration > this._duration ? this._c.duration : this._duration;
                    if (l > 3) {
                        this._d = targets[3];
                        this._duration = this._d.duration > this._duration ? this._d.duration : this._duration;
                        if (l > 4) {
                            this._targets = [];
                            for (var i = 4; i < l; ++i) {
                                var t = targets[i];
                                this._targets[i - 4] = t;
                                this._duration = t.duration > this._duration ? t.duration : this._duration;
                            }
                        }
                    }
                }
            }
        }
    }


    /**
     *
     * @param tween {ITween}
     * @returns {boolean}
     */
    contains(tween)
    {
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
    getTweenAt(index)
    {
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
    getTweenIndex(tween)
    {
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
    internalUpdate(time)
    {
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
    newInstance()
    {
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
}