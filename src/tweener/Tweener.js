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


import Linear from './easing/Linear';
import EventEmiiter from 'eventemitter3';
import EnterFrameTicker from './tickers/EnterFrameTicker';
import ClassRegistry from './core/utils/ClassRegistry';
import UpdaterFactory from './core/updaters/UpdaterFactory';
import ObjectTween from './core/tweens/ObjectTween';
import ObjectUpdater from './core/updaters/ObjectUpdater';
import DisplayObjectUpdater from './core/updaters/display/DisplayObjectUpdater';
import PointUpdater from './core/updaters/geom/PointUpdater';




/**
 * @type {EnterFrameTicker}
 * @private
 */
let _ticker = new EnterFrameTicker();
let _updaterClassRegistry = new ClassRegistry();
let _updaterFactory = new UpdaterFactory(_updaterClassRegistry);

ObjectUpdater.register(_updaterClassRegistry);
DisplayObjectUpdater.register(_updaterClassRegistry);
PointUpdater.register(_updaterClassRegistry);



_ticker.start();


export default class Tweener
{
    static get VERSION() { return '0.2 (Alpha)' }

    /**
     *
     */
    constructor()
    {
        //
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param from {Object}
     * @param time {number}
     * @param easing {IEasing}
     * @returns {IObjectTween}
     */
    static tween(target, to, from = null, time = 1.0, easing = null)
    {
        var tween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.create(target, to, from);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param time {number}
     * @param easing {IEasing}
     * @returns {IObjectTween}
     */
    static to(target, to, time = 1.0, easing = null)
    {
        var tweenTween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.create(target, to, null);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }


    /**
     *
     * @param target  {Object}
     * @param from  {Object}
     * @param time {number}
     * @param easing {IEasing}
     * @returns {IObjectTween}
     */
    static from(target, from, time = 1.0, easing = null)
    {
        var tweenTween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.create(target, null, from);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param to  {Object}
     * @param from  {Object}
     * @param time {number}
     * @param applyTime {number}
     * @param easing {IEasing}
     */
    static apply(target, to, from = null, time = 1.0, applyTime = 1.0, easing = null)
    {
        var tweenTween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.create(target, to, from);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        tween.update(applyTime);
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param from {Object}
     * @param controlPoint {Object}
     * @param time {number}
     * @param easing {IEasing}
     * @returns {IObjectTween}
     */
    static bezier(target, to, from = null, controlPoint = null, time = 1.0, easing = null)
    {
        var tweenTween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.createBezier(target, to, from, controlPoint);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param controlPoint {Object}
     * @param time {number}
     * @param easing {IEasing}
     * @returns {IObjectTween}
     */
    static bezierTo(target, to, controlPoint = null, time = 1.0, easing = null)
    {
        var tweenTween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.createBezier(target, to, null, controlPoint);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param from {Object}
     * @param controlPoint {Object}
     * @param time {number}
     * @param easing {IEasing}
     * @returns {IObjectTween}
     */
    static bezierFrom(target, from, controlPoint = null, time = 1.0, easing = null)
    {
        var tweenTween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.createBezier(target, null, from, controlPoint);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param from {Object}
     * @param easing {IPhysicalEasing}
     * @returns {IObjectTween}
     */
    static physical(target, to, from = null, easing = null)
    {
        var tween = new PhysicalTween(_ticker);
        tween.updater = _updaterFactory.createPhysical(target, to, from, easing || Physical.exponential());
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param easing {IPhysicalEasig}
     * @returns {IObjectTween}
     */
    static physicalTo(target, to, easing = null)
    {
        var tween = new PhysicalTween(_ticker);
        tween.updater = _updaterFactory.createPhysical(target, to, null, easing || Physical.exponential());
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param from {Object}
     * @param easing {IPhysicalEasing}
     * @returns {IObjectTween}
     */
    static physicalFrom(target, from, easing = null)
    {
        var tween = new PhysicalTween(_ticker);
        tween.updater = _updaterFactory.createPhysical(target, null, from, easing || Physical.exponential());
        return tween;
    }


    /**
     *
     * @param target {Object}
     * @param to {Object}
     * @param from {Object}
     * @param applyTime {number}
     * @param easing {IPhysicalEasing}
     */
    static physicalApply(target, to, from = null, applyTime = 1.0, easing = null)
    {
        var tween = new PhysicalTween(_ticker);
        tween.updater = _updaterFactory.createPhysical(target, to, from, easing || Physical.exponential());
        tween.update(applyTime);
    }


    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static parallel(...tweens)
    {
        return parallelTweens(tweens);
    }


    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static parallelTweens(tweens)
    {
        return new ParallelTween(tweens, _ticker, 0);
    }


    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static serial(...tweens)
    {
        return serialTweens(tweens);
    }


    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static serialTweens(tweens)
    {
        return new SerialTween(tweens, _ticker, 0);
    }


    /**
     *
     * @param tween {ITween}
     * @param reversePosition {boolean}
     * @returns {ITween}
     */
    static reverse(tween, reversePosition = true)
    {
        var pos = reversePosition ? tween.duration - tween.position : 0.0;
        if (tween instanceof ReversedTween) {
        return new TweenDecorator((tween).baseTween, pos);
    }
        if ((tween).constructor == TweenDecorator) {
            tween = (tween).baseTween;
        }
        return new ReversedTween(tween, pos);
    }


    /**
     *
     * @param tween {ITween}
     * @param repeatCount {uint}
     * @returns {ITween}
     */
    static repeat(tween, repeatCount:uint)
    {
        return new RepeatedTween(tween, repeatCount);
    }


    /**
     *
     * @param tween {ITween}
     * @param scale {number}
     * @returns {ITween}
     */
    static scale(tween, scale)
    {
        return new ScaledTween(tween, scale);
    }


    /**
     *
     * @param tween {ITween}
     * @param begin {number}
     * @param end {number}
     * @param isPercent {boolean}
     * @returns {ITween}
     */
    static slice(tween, begin, end, isPercent = false)
    {
        if (isPercent) {
            begin = tween.duration * begin;
            end = tween.duration * end;
        }
        if (begin > end) {
            return new ReversedTween(new SlicedTween(tween, end, begin), 0);
        }
        return new SlicedTween(tween, begin, end);
    }


    /**
     *
     * @param tween {ITween}
     * @param delay {number}
     * @param postDelay {number}
     * @returns {ITween}
     */
    static delay(tween, delay, postDelay = 0.0)
    {
        return new DelayedTween(tween, delay, postDelay);
    }


    /**
     *
     * @param target {DisplayObject}
     * @param parent {DisplayObjectContainer}
     * @returns {ITween}
     */
    static addChild(target, parentContainer)
    {
        return new AddChildAction(_ticker, target, parent);
    }


    /**
     *
     * @param target {DisplayObject}
     * @returns {ITween}
     */
    static removeFromParent(target)
    {
        return new RemoveFromParentAction(_ticker, target);
    }


    /**
     *
     * @param func {Function}
     * @param params {Array}
     * @param useRollback {boolean}
     * @param rollbackFunc {Function}
     * @param rollbackParams {Array}
     * @returns {ITween}
     */
    static func(func, params = null, useRollback = false, rollbackFunc = null, rollbackParams = null)
    {
        return new FunctionAction(_ticker, func, params, useRollback, rollbackFunc, rollbackParams);
    }

}



