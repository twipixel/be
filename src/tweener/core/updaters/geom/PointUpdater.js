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
}