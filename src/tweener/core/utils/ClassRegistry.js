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


export default class ClassRegistry
{
    /**
     * classes 안에 클래스와 그 안에 속성이 저장되고 그에 맞는 업데이터가 등록됩니다.
     * classes[Object][x] = ObjectUpadter
     */
    constructor()
    {
        /**
         * @type {Dictionary}
         * @private
         */
        this._classes = {};

        /**
         * @type {Dictionary}
         * @private
         */
        this._subclasses = {};
    }

    /**
     * 타겟 클래스의 프로퍼티로 클래스 등록
     * @param klass {Class}
     * @param targetClass {Class}
     * @param propertyName {string}
     */
    registerClassWithTargetClassAndPropertyName(klass, targetClass, propertyName)
    {
        if (this._classes[targetClass] == undefined) {
            this.buildCacheFor(targetClass);
        }

        var classes = this._classes;
        var oldClass = classes[targetClass][propertyName];

        classes[targetClass][propertyName] = klass;

        /**
         * @type {Vector.<Class>}
         */
        var subclasses = this._subclasses[targetClass];
        if (subclasses != null) {
            var l = subclasses.length;
            for (var i = 0; i < l; ++i) {
                var subclass = subclasses[i];
                if (classes[subclass][propertyName] == oldClass) {
                    classes[subclass][propertyName] = klass;
                }
            }
        }
    }

    /**
     *
     * @param klass {Class}
     * @param targetClass {Class}
     * @param propertyNames {Array<string>}
     */
    registerClassWithTargetClassAndPropertyNames(klass, targetClass, propertyNames)
    {
        var l = propertyNames.length;
        for (var i = 0; i < l; ++i) {
            this.registerClassWithTargetClassAndPropertyName(klass, targetClass, propertyNames[i]);
        }
    }

    /**
     * 클래스와 프로퍼티이름으로 Updater 반환
     * @param targetClass {Class}
     * @param propertyName {string}
     * @returns {Class}
     */
    getClassByTargetClassAndPropertyName(targetClass, propertyName)
    {
        var properties = this._classes[targetClass], c;
        if (properties != null) {
            if ((c = properties[propertyName]) != null) {
                return c;
            }
            if ((c = properties['*']) != null) {
                return c;
            }
        }
        else {
            this.buildCacheFor(targetClass);
            return this.getClassByTargetClassAndPropertyName(targetClass, propertyName);
        }

        return null;
    }

    /**
     * @param targetClass {Class}
     */
    buildCacheFor(targetClass)
    {
        var classes = this._classes;
        var subclasses = this._subclasses;

        /**
         * @type {Dictionary}
         */
        var dict = {};

        /**
         * @type {Vector.<Class>}
         */
        var tree = this.getClassTree(targetClass);
        var l = tree.length;
        var i = l;
        while (--i >= 0) {
            var c = tree[i];
            var d = classes[c];
            var p;
            if (d != null) {
                var newDict = {};

                if (dict != null) {
                    for (p in dict) {
                        newDict[p] = dict[p];

                        if (!(p in d)) {
                            d[p] = dict[p];
                        }
                    }
                }

                for (p in d) {
                    newDict[p] = d[p];
                }
                dict = newDict;
            }
            else {
                var dictClone = {};
                for (p in dict) {
                    dictClone[p] = dict[p];
                }
                classes[c] = dictClone;
            }

            if (subclasses[c] != undefined) {
                var sub = subclasses[c];
                for (var j = i - 1; j >= 0; --j) {
                    var subC = tree[j];
                    if (sub.indexOf(subC) == -1) {
                        sub.push(subC);
                    }
                }
            }
            else {
                subclasses[c] = tree.slice(0, i);
            }
        }
    }

    /**
     *
     * @param klass {Class}
     * @returns {Vector.<Class>}
     */
    getClassTree(klass)
    {
        var c = klass;
        var prototype;

        /**
         * TODO 객체 생성 시 인자가 필요한 경우 클래스 트리 생성 시 오류 처리
         * 클래스 생성자에 인자가 필요한 경우 객체 생성 시 오류가 발생합니다.
         * 커스텀 클래스의 경우 ObjectUpdater 가 반환하도록 처리합니다.
         * 현재로서는 다른 대안이 없습니다.
         */
        try {
            prototype = klass.prototype;
            console.log('prototype', prototype);
            //prototype = Object.getPrototypeOf(new c());
        }
        catch (error) {
            return [klass, Object];
        }

        var tree = [];
        while (c != null) {
            tree.push(c);
            prototype = Object.getPrototypeOf(prototype);

            if (prototype != null) {
                try {
                    c = prototype.constructor;
                }
                catch (error) {
                    c = Object;
                }
            }
            else {
                c = null;
            }
        }

        return tree;
    }
}