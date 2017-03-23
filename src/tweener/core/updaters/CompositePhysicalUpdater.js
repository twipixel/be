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


import IPhysicalUpdater from './IPhysicalUpdater';


export default class CompositePhysicalUpdater extends IPhysicalUpdater
{
    /**
     *
     * @param target {Object}
     * @param updaters {Vector.<IPhysicalUpdater>}
     */
    constructor(target, updaters)
    {
        super();


        /**
         *
         * @type {Object}
         * @private
         */
        this._target = target;

        /**
         *
         * @type {number}
         * @private
         */
        this._duration = 0.0;

        /**
         *
         * @type {IPhysicalUpdater}
         * @private
         */
        this._a = null;

        /**
         *
         * @type {IPhysicalUpdater}
         * @private
         */
        this._b = null;

        /**
         *
         * @type {IPhysicalUpdater}
         * @private
         */
        this._c = null;

        /**
         *
         * @type {IPhysicalUpdater}
         * @private
         */
        this._d = null;

        /**
         *
         * @type {IPhysicalUpdater}
         * @private
         */
        this._updaters = null;


        var l = updaters.length;

        if (l >= 1) {
            this._a = updaters[0];
            if (this._duration < this._a.duration) {
                this._duration = this._a.duration;
            }
            if (l >= 2) {
                this._b = updaters[1];
                if (this._duration < this._b.duration) {
                    this._duration = this._b.duration;
                }
                if (l >= 3) {
                    this._c = updaters[2];
                    if (this._duration < this._c.duration) {
                        this._duration = this._c.duration;
                    }
                    if (l >= 4) {
                        this._d = updaters[3];
                        if (this._duration < this._d.duration) {
                            this._duration = this._d.duration;
                        }
                        if (l >= 5) {
                            this._updaters = [];
                            for (var i = 4; i < l; ++i) {
                                var updater = updaters[i];
                                this._updaters[i - 4] = updater;
                                if (this._duration < updater.duration) {
                                    this._duration = updater.duration;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    /**
     *
     * @param index {uint}
     * @returns {IPhysicalUpdater}
     */
    getUpdaterAt(index)
    {
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
    get target()
    {
        return this._target;
    }

    /**
     *
     * @param value {Object}
     */
    set target(value)
    {
        this._target = value;
    }

    /**
     * @returns {number}
     */
    get duration()
    {
        return this._duration;
    }

    /**
     *
     * @param factor {number}
     */
    update(factor)
    {
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
    clone()
    {
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
}

