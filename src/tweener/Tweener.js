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
        console.log('\n\n');
        console.log('==================================================');
        console.log('tween(', target, to, from, time, easing, ')');
        console.log('==================================================');
        var tween = new ObjectTween(_ticker);
        tween.updater = _updaterFactory.create(target, to, from);
        tween.time = time;
        tween.easing = easing || Linear.easeNone;
        return tween;
    }

}



