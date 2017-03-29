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


import IEasing from './IEasing';


export default class ElasticEaseOutIn extends IEasing
{
	/**
	 *
	 * @param a	{number} Specifies the amplitude of the sine wave.
	 * @param p {number} Specifies the period of the sine wave.
	 */
	constructor(a = 0, p = 0)
	{
		super();
		this.a = a;
		this.p = p;
	}

    /**
     * @inheritDoc
     */
	calculate(t, b, c, d)
	{
		var s;

		c /= 2;

		if (t < d / 2) {
			if ((t *= 2) == 0) {
				return b;
			}
			if ((t /= d) == 1) {
				return b + c;
			}
			if (!this.p) {
				this.p = d * 0.3;
			}
			if (!this.a || this.a < Math.abs(c)) {
				this.a = c;
				s = this.p / 4;
			}
			else {
				s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
			}
			return this.a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / this.p) + c + b;
		}
		else {
			if ((t = t * 2 - d) == 0) {
				return (b + c);
			}
			if ((t /= d) == 1) {
				return (b + c) + c;
			}
			if (!this.p) {
				this.p = d * 0.3;
			}
			if (!this.a || this.a < Math.abs(c)) {
				this.a = c;
				s = this.p / 4;
			}
			else {
				s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
			}
			return -(this.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / this.p)) + (b + c);
		}
	}
}