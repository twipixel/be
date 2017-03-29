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


import AbstractActionTween from '../AbstractActionTween';


export default class FunctionAction extends AbstractActionTween
{
    /**
     *
     * @param ticker {ITicker}
     * @param func {Function}
     * @param params {Array}
     * @param useRollback {boolean}
     * @param rollbackFunc {Function}
     * @param rollbackParams {Array}
     */
    constructor(ticker, func, params = null, useRollback = false, rollbackFunc = null, rollbackParams = null)
    {
        super(ticker);

        this._func = func;
        this._params = params;
        this._rollbackFunc = undefined;
        this._rollbackParams = undefined;

        if (useRollback) {
            if (rollbackFunc != null) {
                this._rollbackFunc = rollbackFunc;
                this._rollbackParams = rollbackParams;
            }
            else {
                this._rollbackFunc = func;
                this._rollbackParams = params;
            }
        }
    }

    action()
    {
        if (this._func != null) {
            this._func.apply(null, this._params);
        }
    }

    rollback()
    {
        if (this._rollbackFunc != null) {
            this._rollbackFunc.apply(null, this._rollbackParams);
        }
    }
}