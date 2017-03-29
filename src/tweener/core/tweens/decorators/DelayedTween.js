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


 export default class DelayedTween extends TweenDecorator
 {
     /**
      *
      * @param baseTween {IITween}
      * @param preDelay {number}
      * @param postDelay {number}
      */
     constructor(baseTween, preDelay, postDelay)
     {
         super(baseTween, 0);

        this._duration = preDelay + baseTween.duration + postDelay;
        this._preDelay = preDelay;
        this._postDelay = postDelay;
     }

     /**
      *
      * @returns {number}
      */
     get preDelay()
     {
         return this._preDelay;
     }

     /**
      *
      * @returns {number}
      */
     get postDelay()
     {
         return this._postDelay;
     }

     /**
      *
      * @param time {number}
      */
     internalUpdate(time)
     {
         this._baseTween.update(time - this._preDelay);
     }

     /**
      *
      * @returns {AbstractTween}
      */
     newInstance()
     {
         return new DelayedTween(this._baseTween.clone(), this._preDelay, this._postDelay);
     }
 }