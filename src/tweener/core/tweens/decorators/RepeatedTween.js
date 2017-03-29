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


 export default class RepeatedTween extends TweenDecorator
 {
     /**
      *
      * @param baseTween {IITween}
      * @param repeatCount {uint}
      */
     constructor(baseTween, repeatCount)
     {
         super(baseTween, 0);

         this._baseDuration = baseTween.duration;
         this._repeatCount = repeatCount;
         this._duration = this._baseDuration * repeatCount;
     }


     /**
      *
      * @returns {uint}
      */
     get repeatCount()
     {
         return this._repeatCount;
     }


     /**
      * 0 ~ duration 까지 되도록 time을 빼줍니다.
      * @param time {number}
      */
     internalUpdate(time)
     {
         if (time >= 0) {
             time -= time < this._duration ? this._baseDuration * parseInt(time / this._baseDuration) : this._duration - this._baseDuration;
         }
         this._baseTween.update(time);
     }

     /**
      *
      * @returns {AbstractTween}
      */
     newInstance()
     {
         return new RepeatedTween(this._baseTween.clone(), this.repeatCount);
     }
 }