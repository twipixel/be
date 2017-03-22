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


import AbstractUpdater from './AbstractUpdater';


/**
 * @author  choi sungryeol:twipixel
 */
export default class BezierUpdater extends AbstractUpdater
{
    constructor()
    {
        super();

        /**
         * @type {Object}
         * @private
         */
        this._target = null;

        /**
         * @type {Dictionary}
         * @private
         */
        this._source = {};

        /**
         * @type {Dictionary}
         * @private
         */
        this._destination = {};

        /**
         * @type {Dictionary}
         * @private
         */
        this._controlPoint = {};

        /**
         * @type {Dictionary}
         * @private
         */
        this._relativeMap = {};
    }


    /**
     * @returns {Object}
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
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolena}
     */
    addControlPoint(propertyName, value, isRelative = false)
    {
        var controlPoint = this._controlPoint[propertyName];
        if (controlPoint == null) {
            this._controlPoint[propertyName] = controlPoint = [];
        }
        controlPoint.push(value);
        this._relativeMap['cp.' + propertyName + '.' + controlPoint.length] = isRelative;
    }


    /**
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName, value, isRelative = false)
    {
        this._source[propertyName] = value;
        this._relativeMap['source.' + propertyName] = isRelative;
    }


    /**
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
     * @param propertyName {string}
     * @returns {Object}
     */
    getObject(propertyName)
    {
        return this._target[propertyName];
    }


    /**
     * @param propertyName {string}
     * @param value {Object}
     */
    setObject(propertyName, value)
    {
        this._target[propertyName] = value;
    }


    resolveValues()
    {
        var key, target= this._target, source = this._source, dest = this._destination, controlPoint = this._controlPoint, cpVec, l, i, rMap = this._relativeMap;

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
        }
        for (key in controlPoint) {
            cpVec = controlPoint[key];
            l = cpVec.length;
            for (i = 0; i < l; ++i) {
                if (rMap['cp.' + key + '.' + i]) {
                    cpVec[i] += target[key];
                }
            }
        }
    }


    /**
     * @param factor {number}
     */
    updateObject(factor)
    {
        var invert = 1.0 - factor, t = this._target, d = this._destination, s = this._source, b, cp = this._controlPoint, cpVec, l, ip, it, p1, p2, name;

        // Thank you, Tweener & Robert Penner!

        for (name in d) {

            b = s[name];

            if (factor != 1.0 && (cpVec = this._controlPoint[name]) != null) {
                if ((l = cpVec.length) == 1) {
                    t[name] = b + factor * (2 * invert * (cpVec[0] - b) + factor * (d[name] - b));
                }
                else {
                    ip = (factor * l) >> 0;
                    it = (factor - (ip * (1 / l))) * l;
                    if (ip == 0) {
                        p1 = b;
                        p2 = (cpVec[0] + cpVec[1]) / 2;
                    }
                    else if (ip == (l - 1)) {
                        p1 = (cpVec[ip - 1] + cpVec[ip]) / 2;
                        p2 = d[name];
                    }
                    else {
                        p1 = (cpVec[ip - 1] + cpVec[ip]) / 2;
                        p2 = (cpVec[ip] + cpVec[ip + 1]) / 2;
                    }
                    t[name] = p1 + it * (2 * (1 - it) * (cpVec[ip] - p1) + it * (p2 - p1));
                }
            }
            else {
                t[name] = b * invert + d[name] * factor;
            }
        }
    }


    /**
     * @returns {AbstractUpdater}
     */
    newInstance()
    {
        return new BezierUpdater();
    }


    /**
     * @param source {AbstractUpdater}
     */
    copyFrom(source)
    {
        super.copyFrom(source);

        var obj = source;

        this._target = obj._target;
        this.copyObject(this._source, obj._source);
        this.copyObject(this._destination, obj._destination);
        this.copyObject(this._controlPoint, obj._controlPoint);
        this.copyObject(this._relativeMap, obj._relativeMap);
    }


    /**
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
