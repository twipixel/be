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


import AbstractUpdater from '../AbstractUpdater';


const TARGET_PROPERTIES = [
    'x',
    'y',
];


export default class PointUpdater extends AbstractUpdater
{
    /**
     *
     * @param registry {ClassRegistry}
     */
    static register(registry)
    {
        registry.registerClassWithTargetClassAndPropertyNames(PointUpdater, Point, TARGET_PROPERTIES);
    }


    constructor()
    {
        super();

        /**
         *
         * @type {Ponit}
         * @private
         */
        this._target = null;

        /**
         *
         * @type {boolean}
         * @private
         */
        this._fx = false;

        /**
         *
         * @type {number}
         * @private
         */
        this._sx = undefined;

        /**
         *
         * @type {number}
         * @private
         */
        this._dx = undefined;

        /**
         *
         * @type {boolean}
         * @private
         */
        this._fy = false;

        /**
         *
         * @type {number}
         * @private
         */
        this._sy = undefined;

        /**
         *
         * @type {number}
         * @private
         */
        this._dy = undefined;

        /**
         *
         * @type {uint}
         * @private
         */
        this._flags = 0;
    }


    /**
     * @return {Object}
     */
    get target()
    {
        return this._target;
    }

    /**
     * @param value {Object}
     */
    set target(value)
    {
        this._target = value;
    }

    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName, value, isRelative = false)
    {
        if (propertyName == 'x') {
            this._fx = true;
            this._sx = value;
            this._flags |= isRelative ? 0x001 : 0;
        }
        else if (propertyName == 'y') {
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
    setDestinationValue(propertyName, value, isRelative = false)
    {
        if (propertyName == 'x') {
            this._fx = true;
            this._dx = value;
            this._flags |= isRelative ? 0x002 : 0;
        }
        else if (propertyName == 'y') {
            this._fy = true;
            this._dy = value;
            this._flags |= isRelative ? 0x008 : 0;
        }
    }

    resolveValues()
    {
        var t = this._target;

        if (this._fx) {
            if (isNaN(this._sx)) {
                this._sx = t.x;
            }
            else if ((this._flags & 0x001) != 0) {
                this._sx += t.x;
            }
            if (isNaN(this._dx)) {
                this._dx = t.x;
            }
            else if ((this._flags & 0x002) != 0) {
                this._dx += t.x;
            }
        }
        if (this._fy) {
            if (isNaN(this._sy)) {
                this._sy = t.y;
            }
            else if ((this._flags & 0x004) != 0) {
                this._sy += t.y;
            }
            if (isNaN(this._dy)) {
                this._dy = t.y;
            }
            else if ((this._flags & 0x008) != 0) {
                this._dy += t.y;
            }
        }
    }

    /**
     *
     * @param factor {number}
     */
    updateObject(factor)
    {
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
    newInstance()
    {
        return new PointUpdater();
    }

    /**
     * 
     * @param source {AbstractUpdater}
     */
    copyFrom(source)
    {
        super.copyFrom(source);

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
}