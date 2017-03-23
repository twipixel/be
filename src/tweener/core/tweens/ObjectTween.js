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

import AbstractTween from './AbstractTween';


export default class ObjectTween extends AbstractTween
{
    /**
     *
     * @param ticker {ITicker}
     */
    constructor(ticker)
    {
        super(ticker, 0);

        this._easing = null;
        this._updater = null;
    }


    /**
     * @returns {number}
     */
    get time()
    {
        return this._duration;
    }

    /**
     * @param value {number}
     */
    set time(value)
    {
        this._duration = value;
    }

    /**
     * @returns {IEasing}
     */
    get easing()
    {
        return this._easing;
    }

    /**
     * @param value {IEasing}
     */
    set easing(value)
    {
        this._easing = value;
    }

    /**
     * @returns {IUpdater}
     */
    get updater()
    {
        return this._updater;
    }

    /**
     * @param value {IUpdater}
     */
    set updater(value)
    {
        this._updater = value;
    }

    /**
     * @returns {Object}
     */
    get target()
    {
        return this._updater != null ? this._updater.target : null;
    }

    /**
     * @param time {number}
     */
    internalUpdate(time)
    {
        var factor = 0.0;

        if (time > 0.0) {
            if (time < this._duration) {
                factor = this._easing.calculate(time, 0.0, 1.0, this._duration);
            }
            else {
                factor = 1.0;
            }
        }

        this._updater.update(factor);
    }

    /**
     * @returns {AbstractTween}
     */
    newInstance()
    {
        return new ObjectTween(this._ticker);
    }

    /**
     * @param source {AbstractTween}
     */
    copyFrom(source)
    {
        super.copyFrom(source);

        var obj = this.source;

        this._easing = obj._easing;
        this._updater = obj._updater.clone();
    }


}



