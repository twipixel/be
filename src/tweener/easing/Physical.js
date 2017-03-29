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


import PhysicalAccelerate from '../core/easing/PhysicalAccelerate';
import PhysicalExponential from '../core/easing/PhysicalExponential';
import PhysicalUniform from '../core/easing/PhysicalUniform';


let _defaultFrameRate = 30.0;


export default class Physical
{
	/**
	 *
	 * @returns {number}
     */
	static get defaultFrameRate()
	{
		return _defaultFrameRate;
	}

	/**
	 *
	 * @param value {number}
     */
	static set defaultFrameRate(value)
	{
		_defaultFrameRate = value;
	}

	/**
	 *
	 * @param velocity {number}
	 * @param frameRate {number}
	 * @returns {IPhysicalEasing}
     */
	static uniform(velocity = 10.0, frameRate = NaN)
	{
		return new PhysicalUniform(velocity, isNaN(frameRate) ? _defaultFrameRate : frameRate);
	}

	/**
	 *
	 * @param acceleration {number}
	 * @param initialVelocity {number}
	 * @param frameRate {number}
	 * @returns {IPhysicalEasing}
     */
	static accelerate(acceleration = 1.0, initialVelocity = 0.0, frameRate = NaN)
	{
		return new PhysicalAccelerate(initialVelocity, acceleration, isNaN(frameRate) ? _defaultFrameRate : frameRate);
	}

	/**
	 *
	 * @param factor {number}
	 * @param threshold {number}
	 * @param frameRate {number}
	 * @returns {IPhysicalEasing}
     */
	static exponential(factor = 0.2, threshold = 0.0001, frameRate = NaN)
	{
		return new PhysicalExponential(factor, threshold, isNaN(frameRate) ? _defaultFrameRate : frameRate);
	}
}