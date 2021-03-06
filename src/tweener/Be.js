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
import EnterFrameTicker from './tickers/EnterFrameTicker';
import ClassRegistry from './core/utils/ClassRegistry';
import UpdaterFactory from './core/updaters/UpdaterFactory';
import ObjectTween from './core/tweens/ObjectTween';
import ObjectUpdater from './core/updaters/ObjectUpdater';
import DisplayObjectUpdater from './core/updaters/display/DisplayObjectUpdater';
import PointUpdater from './core/updaters/geom/PointUpdater';
import PhysicalTween from './core/tweens/PhysicalTween';
import ParallelTween from './core/tweens/groups/ParallelTween';
import SerialTween from './core/tweens/groups/SerialTween';
import TweenDecorator from './core/tweens/TweenDecorator';
import ReversedTween from './core/tweens/decorators/ReversedTween';
import RepeatedTween from './core/tweens/decorators/RepeatedTween';
import ScaledTween from './core/tweens/decorators/ScaledTween';
import SlicedTween from './core/tweens/decorators/SlicedTween';
import DelayedTween from './core/tweens/decorators/DelayedTween';
import AddChildAction from './core/tweens/actions/AddChildAction';
import RemoveFromParentAction from './core/tweens/actions/RemoveFromParentAction';
import FunctionAction from './core/tweens/actions/FunctionAction';


/**
 * 업데이터 등록 여부
 * @type {boolean}
 */
let isRegist = false;

/**
 * @type {EnterFrameTicker}
 * @private
 */
let _ticker = new EnterFrameTicker();
_ticker.start();

let _updaterClassRegistry = new ClassRegistry();
let _updaterFactory = new UpdaterFactory(_updaterClassRegistry);

ObjectUpdater.register(_updaterClassRegistry);
DisplayObjectUpdater.register(_updaterClassRegistry);
PointUpdater.register(_updaterClassRegistry);


export default class Be
{
    static get VERSION() { return '0.9.4 (Beta)' }

    /**
     * 업데이터 등록
     * PIXI 라이브러리를 Be 라이브러리 보다 먼저 등록한 경우
     * DisplayObjecter 에서 PIXI.DisplayObject 를 못 찾는 경우를 위해서
     * Be static 함수에서 다시 한번 업데이터를 등록하도록 하였습니다.
     */
    static registUpdater()
    {
        if (isRegist === false) {
            ObjectUpdater.register(_updaterClassRegistry);
            DisplayObjectUpdater.register(_updaterClassRegistry);
            PointUpdater.register(_updaterClassRegistry);
            isRegist = true;
        }
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
        Be.registUpdater();

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
        Be.registUpdater();

        var tween = new ObjectTween(_ticker);
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
        Be.registUpdater();

        var tween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.create(target, null, from);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }

    /**
     * 트윈을 한번 적용합니다. 원하는 시간의 모션으로 한번 적용합니다.
     * @param target {Object}
     * @param to  {Object}
     * @param from  {Object}
     * @param time {number}
     * @param applyTime {number}
     * @param easing {IEasing}
     */
    static apply(target, to, from = null, time = 1.0, applyTime = 1.0, easing = null)
    {
        Be.registUpdater();

        var tween = new ObjectTween(_ticker);
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
        Be.registUpdater();

        var tween = new ObjectTween(_ticker);
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
        Be.registUpdater();

        var tween = new ObjectTween(_ticker);
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
        Be.registUpdater();

        var tween = new ObjectTween(_ticker);
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
        Be.registUpdater();

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
        Be.registUpdater();

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
        Be.registUpdater();

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
        Be.registUpdater();

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
        Be.registUpdater();

        return Be.parallelTweens(tweens);
    }

    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static parallelTweens(tweens)
    {
        Be.registUpdater();

        return new ParallelTween(tweens, _ticker, 0);
    }

    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static serial(...tweens)
    {
        Be.registUpdater();

        return Be.serialTweens(tweens);
    }

    /**
     *
     * @param tweens {Array}
     * @returns {ITweenGroup}
     */
    static serialTweens(tweens)
    {
        Be.registUpdater();

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
        Be.registUpdater();

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
    static repeat(tween, repeatCount)
    {
        Be.registUpdater();

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
        Be.registUpdater();

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
        Be.registUpdater();

        if (isPercent === true) {
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
        Be.registUpdater();

        return new DelayedTween(tween, delay, postDelay);
    }

    /**
     *
     * @param target {DisplayObject}
     * @param parent {DisplayObjectContainer}
     * @returns {ITween}
     */
    static addChild(target, parent)
    {
        Be.registUpdater();

        return new AddChildAction(_ticker, target, parent);
    }

    /**
     *
     * @param target {DisplayObject}
     * @returns {ITween}
     */
    static removeFromParent(target)
    {
        Be.registUpdater();

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
        Be.registUpdater();

        return new FunctionAction(_ticker, func, params, useRollback, rollbackFunc, rollbackParams);
    }
}