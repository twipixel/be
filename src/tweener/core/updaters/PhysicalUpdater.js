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


export default class PhysicalUpdater extends IPhysicalUpdater
{
    constructor()
    {
        super();
        /**
         *
         * @type {Object}
         * @private
         */
        this._target = null;

        /**
         *
         * @type {Dictionary}
         * @private
         */
        this._source = {};

        /**
         *
         * @type {Dictionary}
         * @private
         */
        this._destination = {};

        /**
         *
         * @type {Dictionary}
         * @private
         */
        this._relativeMap = {};

        /**
         *
         * @type {IPhysicalEasing}
         * @private
         */
        this._easing = null;

        /**
         *
         * @type {Dictionary}
         * @private
         */
        this._duration = {};

        /**
         *
         * @type {number}
         * @private
         */
        this._maxDuration = 0.0;

        /**
         *
         * @type {boolean}
         * @private
         */
        this._isResolved = false;
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
     *
     * @returns {IPhysicalEasing}
     */
    get easing()
    {
        return this._easing;
    }

    /**
     *
     * @param value {IPhysicalEasing}
     */
    set easing(value)
    {
        this._easing = value;
    }


    /**
     *
     * @returns {number}
     */
    get duration()
    {
        if (!this._isResolved) {
            this.resolveValues();
        }
        return this._maxDuration;
    }


    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName, value, isRelative = false)
    {
        this._target[propertyName] = value;
        this._relativeMap['source.' + propertyName] = isRelative;
    }


    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setDestinationValue(propertyName, value, isRelative = false)
    {
        this._destination[propertyName] = value;
        this._relativeMap['dest.' + propertyName] = isRelative;
    }


    /**
     *
     * @param propertyName {string}
     * @returns {Object}
     */
    getObject(propertyName)
    {
        return this._target[propertyName];
    }


    /**
     *
     * @param propertyName {string}
     * @param value {Object}
     */
    setObject(propertyName, value)
    {
        this._target[propertyName] = value;
    }


    resolveValues()
    {
        var key, target = this._target, source = this._target, dest = this._destination, rMap = this._relativeMap, d = this._duration, duration, maxDuration = 0.0;

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
    update(time)
    {
        if (!this._isResolved) {
            this.resolveValues();
        }

        var factor;
        var t = this._target;
        var e = this._easing;
        var dest = this._destination;
        var src = this._target;
        var s;
        var d = this._duration;
        var name;

        for (name in dest) {
            if (time >= d[name]) {
                t[name] = dest[name];
            }
            else {
                s = src[name];
                t[name] = e.calculate(time, s, dest[name] - s);
            }
        }
    }


    /**
     *
     * @returns {IUpdater}
     */
    clone()
    {
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
    newInstance()
    {
        return new PhysicalUpdater();
    }


    /**
     *
     * @param source {PhysicalUpdater}
     */
    copyFrom(source)
    {
        var obj = source;

        this._target = obj._target;
        this._easing = obj._easing;
        this.copyObject(this._target, obj._source);
        this.copyObject(this._destination, obj._destination);
        this.copyObject(this._relativeMap, obj._relativeMap);
    }


    /**
     *
     * @param to {Object}
     * @param from {Object}
     */
    copyObject(to, from)
    {
        for (var name in from) {
            to[name] = from[name];
        }
    }
}



