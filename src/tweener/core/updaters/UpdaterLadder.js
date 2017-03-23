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


export default class UpdaterLadder extends IUpdater
{
    /**
     * @param parent {IUpdater}
     * @param child {IUpdater}
     * @param propertyName {string}
     */
    constructor(parent, child, propertyName)
    {
        super();
        this._parent = parent;
        this._child = child;
        this._propertyName = propertyName;
    }


    /**
     * @returns {IUpdater}
     */
    get parent()
    {
        return this._parent;
    }

    /**
     * @returns {IUpdater}
     */
    get child()
    {
        return this._child;
    }

    /**
     * @param factor {number}
     */
    update(factor)
    {
        this._child.update(factor);
        this._parent.setObject(this._propertyName, this._child.target);
    }

    /**
     * @returns {IUpdater}
     */
    clone()
    {
        return new UpdaterLadder(this._parent, this._child, this._propertyName);
    }
}