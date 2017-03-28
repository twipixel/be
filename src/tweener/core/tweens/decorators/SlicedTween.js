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


import TweenDecorator from '../TweenDecorator';


export default class SlicedTween extends TweenDecorator
{
    /**
     *
     * @param baseTween {IITween}
     * @param begin {number}
     * @param end {number}
     */
    constructor(baseTween, begin, end)
    {
        super(baseTween, 0);

        this._duration = end - begin;
        this._begin = begin;
        this._end = end;
    }


    /**
     *
     * @returns {number}
     */
    get begin()
    {
        return this._begin;
    }

    /**
     *
     * @returns {number}
     */
    get end()
    {
        return this._end;
    }

    /**
     *
     * @param time {number}
     */
    internalUpdate(time)
    {
        if (time > 0) {
            if (time < this._duration) {
                this._baseTween.update(time + this._begin);
            }
            else {
                this._baseTween.update(this._end);
            }
        }
        else {
            this._baseTween.update(this._begin);
        }
    }

    /**
     *
     * @returns {AbstractTween}
     */
    newInstance()
    {
        return new SlicedTween(this._baseTween.clone(), this._begin, this._end);
    }
}