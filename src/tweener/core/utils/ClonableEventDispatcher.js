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

import EventEmitter from 'eventemitter3';


export default class ClonableEventDispatcher extends EventEmitter
{
    constructor(target = null)
    {
        super();

        this.target = target || this;

        /**
         * Dictionary 에 Vector.<ListenerData> 형태
         * @type {Dictionary}
         * @private
         */
        this._listeners = {};
    }

    /**
     * @param type {string}
     * @param listener {Function}
     * @param useCapture {boolean}
     * @param priority {int}
     * @param useWeakReference {boolean}
     */
    addEventListener(type , listener, useCapture = false, priority = 0, useWeakReference = false)
    {
        this.on(type, listener, this.target);

        var data = new ListenerData();
        data.listener = listener;
        data.useCapture = useCapture;
        data.priority = priority;
        data.useWeakReference = useWeakReference;

        ((this._listeners[type] || (this._listeners[type] = []))).push(data);
    }

    /**
     * @param type {string}
     * @param listener {Function}
     * @param useCapture {boolean}
     */
    removeEventListener(type, listener, useCapture = false)
    {
        this.off(type, listener, this.target);

        var listeners = this._listeners[type];
        if (listeners != null) {
            var l = listeners.length;
            for (var i = 0; i < l; ++i) {
                var data = listeners[i];
                if (data.listener == listener) {
                    listeners.splice(i, 1);
                    --i;
                    --l;
                }
            }
        }
    }

    /**
     * @param source {ClonableEventDispatcher}
     */
    copyFrom(source)
    {
        var listeners = source._listeners;
        for (var type in listeners) {
            var list = listeners[type];
            var l = list.length;
            for (var i = 0; i < l; ++i) {
                var data = list[i];
                this.addEventListener(type, data.listener, data.useCapture, data.priority, data.useWeakReference);
            }
        }
    }
}


class ListenerData
{
    constructor()
    {
        /**
         * @type {Function}
         */
        this.listener = null;

        /**
         * @type {boolena}
         */
        this.useCapture = false;

        /**
         * @type {number}
         */
        this.priority = 0;

        /**
         * @type {boolean}
         */
        this.useWeakReference = false;
    }

}

