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


export default class ObjectUpdater extends AbstractUpdater
{
    static register(registry)
    {
        registry.registerClassWithTargetClassAndPropertyName(ObjectUpdater, Object, '*');
    }

    /**
     *
     * @param registry {ClassRegistry}
     */
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
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName, value, isRelative = false)
    {
        console.log('ObjectUpdater.setSourceValue(', propertyName, value, isRelative, ')');
        this._source[propertyName] = value;
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
        var key, target = this._target, source = this._source, dest = this._destination, rMap = this._relativeMap;

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
    }


    /**
     *
     * @param factor {number}
     */
    updateObject(factor)
    {
        var invert = 1.0 - factor;
        var t = this._target;
        var d = this._destination;
        var s = this._source;
        var name;

        for (name in d) {
            t[name] = s[name] * invert + d[name] * factor;
        }
    }


    /**
     *
     * @returns {AbstractUpdater}
     */
    newInstance()
    {
        return new ObjectUpdater();
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
        this.copyObject(this._source, obj._source);
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


