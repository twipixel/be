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


import IUpdater from './IUpdater';


export default class AbstractUpdater extends IUpdater
{
    constructor()
    {
        super();
        /**
         * @type {boolean}
         * @private
         */
        this._isResolved = false;
    }

    /**
     *
     * @returns {Object}
     */
    get target() {return null;}

    /**
     *
     * @param value {Object}
     */
    set target(value) {}

    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName, value, isRelative = false) {}

    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setDestinationValue(propertyName, value, isRelative = false) {}

    /**
     *
     * @param propertyName {string}
     * @returns {Object}
     */
    getObject(propertyName) {return null;}

    /**
     *
     * @param propertyName {string}
     * @param value {Object}
     */
    setObject(propertyName, value) {}

    /**
     * @param factor {number}
     */
    update(factor)
    {
        if (this._isResolved === false) {
            this.resolveValues();
            this._isResolved = true;
        }
        this.updateObject(factor);
    }

    resolveValues() {}

    /**
     * @param factor {number}
     */
    updateObject(factor) {}

    /**
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
     * @return {AbstractUpdater}
     */
    newInstance() {return null;}

    /**
     * @param source {AbstractUpdater}
     */
    copyFrom(source)
    {
        // Do NOT copy _isResolved property.
    }
}


