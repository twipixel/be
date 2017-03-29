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


import TweenEvent from '../../events/TweenEvent';
import TickerListener from '../ticker/TickerListener';
import ClonableEventDispatcher from '../utils/ClonableEventDispatcher';


export default class AbstractTween extends TickerListener
{
    /**
     *
     * @param ticker {Ticker}
     * @param position {number}
     */
    constructor(ticker, position = 0)
    {
        super();

        /**
         * @type {number}
         * @private
         */
        this._duration = 0;

        /**
         * @type {number}
         * @private
         */
        this._startTime = undefined;

        /**
         * @type {boolean}
         * @private
         */
        this._isPlaying = false;

        /**
         * @type {boolean}
         * @private
         */
        this._stopOnComplete = true;

        /**
         * @type {ClonableEventDispatcher}
         * @private
         */
        this._dispatcher = undefined;

        /**
         * @type {number}
         * @private
         */
        this._willTriggerFlags = 0;

        /**
         * @type {ClassicHandlers}
         * @private
         */
        this._classicHandlers = undefined;

        /**
         * @type {Ticker}
         * @private
         */
        this._ticker = ticker;

        /**
         * @type {number}
         * @private
         */
        this._position = position;
    }

    /**
     * @return {Ticker}
     */
    get ticker()
    {
        return this._ticker;
    }

    /**
     * @return {number}
     */
    get duration()
    {
        return this._duration;
    }

    /**
     * @return {number}
     */
    get position()
    {
        return this._position;
    }

    /**
     * @return {boolean}
     */
    get isPlaying()
    {
        return this._isPlaying;
    }

    /**
     * @return {boolean}
     */
    get stopOnComplete()
    {
        return this._stopOnComplete;
    }

    /**
     * @param value {boolean}
     */
    set stopOnComplete(value)
    {
        this._stopOnComplete = value;
    }

    /**
     *
     * @returns {Function}
     */
    get onPlay()
    {
        return this._classicHandlers != null ? this._classicHandlers.onPlay : null;
    }

    /**
     * @param value {Function}
     */
    set onPlay(value)
    {
        this.getClassicHandlers().onPlay = value;
    }

    /**
     * @returns {Array}
     */
    get onPlayParams()
    {
        return this._classicHandlers != null ? this._classicHandlers.onPlayParams : null;
    }

    /**
     * @param value {Array}
     */
    set onPlayParams(value)
    {
        this.getClassicHandlers().onPlayParams = value;
    }

    /**
     * @returns {Function}
     */
    get onStop()
    {
        return this._classicHandlers != null ? this._classicHandlers.onStop : null;
    }

    /**
     * @param value {Function}
     */
    set onStop(value)
    {
        this.getClassicHandlers().onStop = value;
    }

    /**
     * @returns {Array}
     */
    get onStopParams()
    {
        return this._classicHandlers != null ? this._classicHandlers.onStopParams : null;
    }

    /**
     * @param value {Array}
     */
    set onStopParams(value)
    {
        this.getClassicHandlers().onStopParams = value;
    }

    /**
     * @returns {Function}
     */
    get onUpdate()
    {
        return this._classicHandlers != null ? this._classicHandlers.onUpdate : null;
    }

    /**
     * @param value {Function}
     */
    set onUpdate(value)
    {
        this.getClassicHandlers().onUpdate = value;
    }

    /**
     * @returns {Array}
     */
    get onUpdateParams()
    {
        return this._classicHandlers != null ? this._classicHandlers.onUpdateParams : null;
    }

    /**
     * @param value {Array}
     */
    set onUpdateParams(value)
    {
        this.getClassicHandlers().onUpdateParams = value;
    }

    /**
     * @returns {Function}
     */
    get onComplete()
    {
        return this._classicHandlers != null ? this._classicHandlers.onComplete : null;
    }

    /**
     * @param value {Function}
     */
    set onComplete(value)
    {
        this.getClassicHandlers().onComplete = value;
    }

    /**
     * @returns {Array}
     */
    get onCompleteParams()
    {
        return this._classicHandlers != null ? this._classicHandlers.onCompleteParams : null;
    }

    /**
     * @param value {Array}
     */
    set onCompleteParams(value)
    {
        this.getClassicHandlers().onCompleteParams = value;
    }

    /**
     *
     * @returns {ClassicHandlers|*}
     */
    getClassicHandlers()
    {
        return this._classicHandlers || (this._classicHandlers = new ClassicHandlers());
    }

    play()
    {
        if (!this._isPlaying) {
            if (this._position >= this._duration) {
                this._position = 0;
            }
            var t = this._ticker.time;
            this._startTime = t - this._position;
            this._isPlaying = true;
            this._ticker.addTickerListener(this);
            if ((this._willTriggerFlags & 0x01) != 0) {
                this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.PLAY));
            }
            if (this._classicHandlers != null && this._classicHandlers.onPlay != null) {
                this._classicHandlers.onPlay.apply(null, this._classicHandlers.onPlayParams);
            }
            this.tick(t);
        }
    }

    firePlay()
    {
        if ((this._willTriggerFlags & 0x01) != 0) {
            this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.PLAY));
        }
        if (this._classicHandlers != null && this._classicHandlers.onPlay != null) {
            this._classicHandlers.onPlay.apply(null, this._classicHandlers.onPlayParams);
        }
    }

    stop()
    {
        if (this._isPlaying === true) {
            this._isPlaying = false;
            if ((this._willTriggerFlags & 0x02) != 0) {
                this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.STOP));
            }
            if (this._classicHandlers != null && this._classicHandlers.onStop != null) {
                this._classicHandlers.onStop.apply(null, this._classicHandlers.onStopParams);
            }
        }
    }

    fireStop()
    {
        if ((this._willTriggerFlags & 0x02) != 0) {
            this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.STOP));
        }
        if (this._classicHandlers != null && this._classicHandlers.onStop != null) {
            this._classicHandlers.onStop.apply(null, this._classicHandlers.onStopParams);
        }
    }

    togglePause()
    {
        if (this._isPlaying === true) {
            this.stop();
        }
        else {
            this.play();
        }
    }

    /**
     * @param position
     */
    gotoAndPlay(position)
    {
        if (position < 0) {
            position = 0;
        }
        if (position > this._duration) {
            position = this._duration;
        }
        this._position = position;
        this.play();
    }

    /**
     * @param position
     */
    gotoAndStop(position)
    {
        if (position < 0) {
            position = 0;
        }
        if (position > this._duration) {
            position = this._duration;
        }
        this._position = position;
        this.internalUpdate(position);
        if ((this._willTriggerFlags & 0x04) != 0) {
            this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.UPDATE));
        }
        if (this._classicHandlers != null && this._classicHandlers.onUpdate != null) {
            this._classicHandlers.onUpdate.apply(null, this._classicHandlers.onUpdateParams);
        }
        this.stop();
    }

    /**
     * @param time {number}
     */
    update(time)
    {
        var isComplete = false;

        if ((this._position < this._duration && this._duration <= time) || (0 < this._position && time <= 0)) {
            isComplete = true;
        }

        this._position = time;
        this.internalUpdate(time);

        if ((this._willTriggerFlags & 0x04) != 0) {
            this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.UPDATE));
        }
        if (this._classicHandlers != null && this._classicHandlers.onUpdate != null) {
            this._classicHandlers.onUpdate.apply(null, this._classicHandlers.onUpdateParams);
        }

        if (isComplete) {
            if ((this._willTriggerFlags & 0x08) != 0) {
                this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.COMPLETE));
            }
            if (this._classicHandlers != null && this._classicHandlers.onComplete != null) {
                this._classicHandlers.onComplete.apply(null, this._classicHandlers.onCompleteParams);
            }
        }
    }

    /**
     * @param time {number}
     * @returns {boolean}
     */
    tick(time)
    {
        if (!this._isPlaying) {
            return true;
        }

        var t = time - this._startTime;

        this._position = t;
        this.internalUpdate(t);

        if ((this._willTriggerFlags & 0x04) != 0) {
            this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.UPDATE));
        }
        if (this._classicHandlers != null && this._classicHandlers.onUpdate != null) {
            this._classicHandlers.onUpdate.apply(null, this._classicHandlers.onUpdateParams);
        }

        if (this._isPlaying === true) {
            if (t >= this._duration) {
                this._position = this._duration;
                if (this._stopOnComplete) {
                    this._isPlaying = false;
                    if ((this._willTriggerFlags & 0x08) != 0) {
                        this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.COMPLETE));
                    }
                    if (this._classicHandlers != null && this._classicHandlers.onComplete != null) {
                        this._classicHandlers.onComplete.apply(null, this._classicHandlers.onCompleteParams);
                    }
                    return true;
                }
                else {
                    if ((this._willTriggerFlags & 0x08) != 0) {
                        this._dispatcher.dispatchEvent(new TweenEvent(TweenEvent.COMPLETE));
                    }
                    if (this._classicHandlers != null && this._classicHandlers.onComplete != null) {
                        this._classicHandlers.onComplete.apply(null, this._classicHandlers.onCompleteParams);
                    }
                    this._position = t - this._duration;
                    this._startTime = time - this._position;
                    this.tick(time);
                }
            }
            return false;
        }

        return true;
    }

    /**
     * @param time {number}
     */
    internalUpdate(time)
    {
        //
    }

    /**
     * @returns {AbstractTween | ITween}
     */
    clone()
    {
        var instance = this.newInstance();
        if (instance != null) {
            instance.copyFrom(this);
        }
        return instance;
    }

    /**
     * @return {AbstractTween}
     */
    newInstance()
    {
        return null;
    }

    /**
     * @param source {AbstractTween}
     */
    copyFrom(source)
    {
        this._ticker = source._ticker;
        this._duration = source._duration;
        this._stopOnComplete = source._stopOnComplete;
        if (source._classicHandlers != null) {
            this._classicHandlers = new ClassicHandlers();
            this._classicHandlers.copyFrom(source._classicHandlers);
        }
        if (source._dispatcher != null) {
            this._dispatcher = new ClonableEventDispatcher(this);
            this._dispatcher.copyFrom(source._dispatcher);
        }
        this._willTriggerFlags = source._willTriggerFlags
    }

    /**
     * @param type {string}
     * @param listener {Function}
     * @param useCapture {boolean}
     * @param priority {int}
     * @param useWeakReference {boolean}
     */
    addEventListener(type, listener, useCapture = false, priority = 0, useWeakReference = false)
    {
        if (this._dispatcher == null) {
            this._dispatcher = new ClonableEventDispatcher(this);
        }
        this._dispatcher.addEventListener(type, listener, useCapture, priority, useWeakReference);
        this.updateWillTriggerFlags();
    }

    /**
     * @param event {Event}
     * @returns {boolean}
     */
    dispatchEvent(event)
    {
        if (this._dispatcher != null) {
            return this._dispatcher.dispatchEvent(event);
        }
        return false;
    }

    /**
     * @param type {string}
     * @return {boolean}
     */
    hasEventListener(type)
    {
        if (this._dispatcher != null) {
            return this._dispatcher.hasEventListener(type);
        }
        return false;
    }

    /**
     * @param type {string}
     * @param listener {Function}
     * @param useCapture {boolean}
     */
    removeEventListener(type, listener, useCapture = false)
    {
        if (this._dispatcher != null) {
            this._dispatcher.removeEventListener(type, listener, useCapture);
            this.updateWillTriggerFlags();
        }
    }

    /**
     * @param type {string}
     * @returns {boolean}
     */
    willTrigger(type)
    {
        if (this._dispatcher != null) {
            return this._dispatcher.willTrigger(type);
        }
        return false;
    }

    updateWillTriggerFlags()
    {
        if (this._dispatcher.willTrigger(TweenEvent.PLAY)) {
            this._willTriggerFlags |= 0x01;
        }
        else {
            this._willTriggerFlags &= ~0x01;
        }
        if (this._dispatcher.willTrigger(TweenEvent.STOP)) {
            this._willTriggerFlags |= 0x02;
        }
        else {
            this._willTriggerFlags &= ~0x02;
        }
        if (this._dispatcher.willTrigger(TweenEvent.UPDATE)) {
            this._willTriggerFlags |= 0x04;
        }
        else {
            this._willTriggerFlags &= ~0x04;
        }
        if (this._dispatcher.willTrigger(TweenEvent.COMPLETE)) {
            this._willTriggerFlags |= 0x08;
        }
        else {
            this._willTriggerFlags &= ~0x08;
        }
    }
}


class ClassicHandlers
{
    constructor() {
        /**
         * @type {Function}
         */
        this.onPlay = undefined;

        /**
         * @type {Array}
         */
        this.onPlayParams = undefined;

        /**
         * @type {Function}
         */
        this.onStop = undefined;

        /**
         * @type {Array}
         */
        this.onStopParams = undefined;

        /**
         * @type {Function}
         */
        this.onUpdate = undefined;

        /**
         * @type {Array}
         */
        this.onUpdateParams = undefined;

        /**
         * @type {Function}
         */
        this.onComplete = undefined;

        /**
         * @type {Array}
         */
        this.onCompleteParams = undefined;
    }

    copyFrom(source)
    {
        this.onPlay = source.onPlay;
        this.onPlayParams = source.onPlayParams;
        this.onStop = source.onStop;
        this.onStopParams = source.onStopParams;
        this.onUpdate = source.onUpdate;
        this.onUpdateParams = source.onUpdateParams;
        this.onComplete = source.onComplete;
        this.onCompleteParams = source.onCompleteParams;
    }
}

