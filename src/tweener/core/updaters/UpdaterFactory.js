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


import UpdaterLadder from './UpdaterLadder';
import BezierUpdater from './BezierUpdater';
import PhysicalUpdater from './PhysicalUpdater';
import CompositeUpdater from './CompositeUpdater';
import PhysicalUpdaterLadder from './PhysicalUpdaterLadder';
import CompositePhysicalUpdater from './CompositePhysicalUpdater';

import ClassRegistry from '../utils/ClassRegistry';


export default class UpdaterFactory
{
    /**
     * @param registry {ClassRegistry}
     */
    constructor(registry)
    {
        /**
         * @type {ClassRegistry}
         * @private
         */
        this._registry = registry;

        /**
         * @type {number}
         * @private
         */
        this._poolIndex = 0;

        /**
         * @type {Vector.<Dictionary>}
         * @private
         */
        this._mapPool = [];

        /**
         * @type {Vector.<Vector.<IUpdater>>}
         * @private
         */
        this._listPool = [];
    }


    /**
     * updaterFactory.create(target, to, from);
     * @param target {Object}
     * @param dest {Object}
     * @param source {Object}
     * @returns {IUpdater}
     */
    create(target, dest, source)
    {
        console.log('UpdaterFactory.create(', target, dest, source, ')');

        /**
         * map @type {Dictionary}
         * updaters @type {Vector.<IUpdater>}
         * name @type {string}
         * isRelative $이름이 붙은 변수인지 여부 @type {boolean}
         * parent @type {IUpdater}
         * child @type {IUpdater}
         * updater @type {IUpdate}
         */
        var map, updaters, name, value, isRelative, parent, child, updater;


        if (this._poolIndex > 0) {
            --this._poolIndex;
            map = this._mapPool[this._poolIndex];
            updaters = this._listPool[this._poolIndex];
        }
        else {
            map = [];
            updaters = [];
        }

        console.log('source---------------------------');
        if (source != null) {
            for (name in source) {
                console.log(name + ':' + source[name]);
                console.log('/^\$/.test(name):', /^\$/.test(name));

                if (typeof (value = source[name]) === 'number') {
                    console.log('> Properties case');
                    // $로 시작하는 변수의 경우
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                        console.log('isRelative, name:', name);
                    }

                    // source value 를 적용하기 위해서 업데이터를 얻어와 설정
                    this.getUpdaterFor(target, name, map, updaters).setSourceValue(name, Number(value), isRelative);
                }
            else {
                    console.log('> Filter case');
                    parent = this.getUpdaterFor(target, name, map, updaters);
                    console.log('parent:', parent);
                    child = this.create(parent.getObject(name), dest != null ? dest[name] : null, value);
                    console.log('child:', child);
                    updaters.push(new UpdaterLadder(parent, child, name));
                }
            }
        }

        console.log('dest-----------------------------');
        if (dest != null) {
            for (name in dest) {

                if (typeof (value = dest[name]) === 'number') {
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                    }

                    this.getUpdaterFor(target, name, map, updaters).setDestinationValue(name, Number(value), isRelative);
                }
            else {
                    if (!(source != null && name in source)) {
                        console.log('> Filter case');
                        parent = this.getUpdaterFor(target, name, map, updaters);
                        console.log('parent:', parent);
                        console.log('* parent.getObject(', name, '):', parent.getObject(name));
                        child = this.create(parent.getObject(name), value, source != null ? source[name] : null);
                        console.log('child:', child);
                        updaters.push(new UpdaterLadder(parent, child, name));
                    }
                }
            }
        }

        if (updaters.length == 1) {
            updater = updaters[0];
        }
        else if (updaters.length > 1) {
            updater = new CompositeUpdater(target, updaters);
        }

        for (var p in map) {
            delete map[p];
        }
        updaters.length = 0;

        this._mapPool[this._poolIndex] = map;
        this._listPool[this._poolIndex] = updaters;
        ++this._poolIndex;

        return updater;
    }


    /**
     *
     * 업데이터 반환전에 Value 설정에 사용합니다.
     * @param target {Object}
     * @param propertyName {string}
     * @param map {Dictionary}
     * @param list {Vector.<IUpdater>}
     * @returns {IUpdater}
     */
    getUpdaterFor(target, propertyName, map, list)
    {
        console.log('');
        console.log('====================================================');
        console.log('getUpdaterFor(', target, propertyName, map, list, ')');
        console.log(target.constructor);
        console.log('====================================================');

        var updaterClass = this._registry.getClassByTargetClassAndPropertyName(target.constructor, propertyName);

        console.log('* updaterClass:', updaterClass);

        if (updaterClass != null) {
            var updater = map[updaterClass];

            console.log('* updater:', updater);

            if (updater == null) {
                updater = new updaterClass();
                updater.target = target;
                map[updaterClass] = updater;
                if (list != null) {
                    list.push(updater);
                }
            }
            return updater;
        }
        return null;
    }

    /**
     *
     * @param target {Object}
     * @param dest {Object}
     * @param source {Object}
     * @param controlPoint {Object}
     * @returns {IUpdater}
     */
    createBezier(target, dest, source, controlPoint)
    {
        var map = {}, updaters = [], bezierUpdater = new BezierUpdater(), name, value, isRelative, cp, l, i, child, updater;

        bezierUpdater.target = target;

        updaters.push(bezierUpdater);

        if (source != null) {
            for (name in source) {
                if (typeof (value = source[name]) === 'number') {
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                    }
                    bezierUpdater.setSourceValue(name, Number(value), isRelative);
                }
            else {
                    if (!map[name]) {
                        child = this.createBezier(bezierUpdater.getObject(name), dest != null ? dest[name] : null, value, controlPoint != null ? controlPoint[name] : null);
                        updaters.push(new UpdaterLadder(bezierUpdater, child, name));
                        map[name] = true;
                    }
                }
            }
        }
        if (dest != null) {
            for (name in dest) {
                if (typeof (value = dest[name]) === 'number') {
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                    }
                    bezierUpdater.setDestinationValue(name, Number(value), isRelative);
                }
            else {
                    if (!map[name]) {
                        child = this.createBezier(bezierUpdater.getObject(name), null, source != null ? source[name] : null, controlPoint != null ? controlPoint[name] : null);
                        updaters.push(new UpdaterLadder(bezierUpdater, child, name));
                        map[name] = true;
                    }
                }
            }
        }
        if (controlPoint != null) {
            for (name in controlPoint) {
                if (typeof (value = controlPoint[name]) === 'number') {
                    value = [value];
                }
                if (Array.isArray(value)) {
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                    }
                    cp = value;
                    l = cp.length;
                    for (i = 0; i < l; ++i) {
                        bezierUpdater.addControlPoint(name, cp[i], isRelative);
                    }
                }
            else {
                    if (!map[name]) {
                        child = this.createBezier(bezierUpdater.getObject(name), dest != null ? dest[name] : null, source != null ? source[name] : null, value);
                        updaters.push(new UpdaterLadder(bezierUpdater, child, name));
                        map[name] = true;
                    }
                }
            }
        }

        if (updaters.length == 1) {
            updater = updaters[0];
        }
        else if (updaters.length > 1) {
            updater = new CompositeUpdater(target, updaters);
        }

        return updater;
    }


    /**
     *
     * @param target {Object}
     * @param dest {Object}
     * @param source {Object}
     * @param easing {IPhysicalEasing}
     * @returns {IPhysicalUpdater}
     */
    createPhysical(target, dest, source, easing)
    {
        console.log('createPhysical(', target, dest, source, easing, ')');

        var map = {}, updaters = [], physicalUpdater = new PhysicalUpdater(), name, value, isRelative, child, updater;

        physicalUpdater.target = target;
        physicalUpdater.easing = easing;

        updaters.push(physicalUpdater);

        console.log('\nSource -------------------------');

        if (source != null) {
            for (name in source) {
                if (typeof (value = source[name]) === 'number') {
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                    }
                    physicalUpdater.setSourceValue(name, Number(value), isRelative);
                }
            else {
                    if (!map[name]) {
                        console.log('!!!!!!!!!!!!>>>>>>>>>>>>');
                        child = this.createPhysical(physicalUpdater.getObject(name), dest != null ? dest[name] : null, value, easing);
                        updaters.push(new PhysicalUpdaterLadder(physicalUpdater, child, name));
                        map[name] = true;
                    }
                }
            }
        }

        console.log('\nDest -------------------------');

        if (dest != null) {
            for (name in dest) {
                if (typeof (value = dest[name]) === 'number') {
                    if ((isRelative = /^\$/.test(name))) {
                        name = name.substr(1);
                    }
                    physicalUpdater.setDestinationValue(name, Number(value), isRelative);
                }
            else {
                    if (!map[name]) {
                        console.log('!!!!!!!!!!!!>>>>>>>>>>>>');
                        child = this.createPhysical(physicalUpdater.getObject(name), null, source != null ? source[name] : null, easing);
                        updaters.push(new PhysicalUpdaterLadder(physicalUpdater, child, name));
                        map[name] = true;
                    }
                }
            }
        }

        if (updaters.length == 1) {
            updater = updaters[0];
        }
        else if (updaters.length > 1) {
            updater = new CompositePhysicalUpdater(target, updaters);
        }

        console.log('** updater:', updater);
        return updater;
    }
}

