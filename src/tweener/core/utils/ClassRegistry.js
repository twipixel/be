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
    constructor()
    {
        this._classes = new Dictionary();
        this._subclasses = new Dictionary();
    }


    /**
     *
     * @param klass {Class}
     * @param targetClass {Class}
     * @param propertyName {string}
     */
    registerClassWithTargetClassAndPropertyName(klass, targetClass, propertyName)
    {
        if (this._classes[targetClass] == undefined) {
            this.buildCacheFor(targetClass);
        }

        var classes:Dictionary = this._classes;
        var oldClass:Class = classes[targetClass][propertyName] as Class;

        classes[targetClass][propertyName] = klass;

        // サブクラスへ新しい値を伝播

        var subclasses:Vector.<Class> = this._subclasses[targetClass] as Vector.<Class>;
        if (subclasses != null) {
            var l:uint = subclasses.length;
            for (var i:uint = 0; i < l; ++i) {
                var subclass:Class = subclasses[i];
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
    registerClassWithTargetClassAndPropertyNames(klass:Class, targetClass:Class, propertyNames:Array)
    {
        var l:uint = propertyNames.length;
        for (var i:uint = 0; i < l; ++i) {
            this.registerClassWithTargetClassAndPropertyName(klass, targetClass, propertyNames[i]);
        }
    }


    /**
     *
     * @param targetClass {Class}
     * @param propertyName {string}
     * @returns {*}
     */
    getClassByTargetClassAndPropertyName(targetClass:Class, propertyName:String):Class
    {
        var properties:* = this._classes[targetClass], c:*;
        if (properties != null) {
            if ((c = properties[propertyName]) != null) {
                return c as Class;
            }
            if ((c = properties['*']) != null) {
                return c as Class;
            }
        }
        else {
            this.buildCacheFor(targetClass);
            return this.getClassByTargetClassAndPropertyName(targetClass, propertyName);
        }

        return null;
    }


    /**
     *
     * @param targetClass {Class}
     */
    buildCacheFor(targetClass:Class):void
    {
        var classes:Dictionary = this._classes;
        var subclasses:Dictionary = this._subclasses;
        var dict:Dictionary = new Dictionary();
        var tree:Vector.<Class> = this.getClassTree(targetClass);
        var l:uint = tree.length;
        var i:int = l;
        while (--i >= 0) {
            var c:Class = tree[i];
            var d:Dictionary = classes[c] as Dictionary;
            var p:String;
            if (d != null) {
                var newDict:Dictionary = new Dictionary();
                // 祖先からの継承
                if (dict != null) {
                    for (p in dict) {
                        newDict[p] = dict[p];
                        // 祖先からこのクラスへ
                        if (!(p in d)) {
                            d[p] = dict[p];
                        }
                    }
                }
                // このクラスからの継承
                for (p in d) {
                    newDict[p] = d[p];
                }
                dict = newDict;
            }
            else {
                var dictClone:Dictionary = new Dictionary();
                for (p in dict) {
                    dictClone[p] = dict[p];
                }
                classes[c] = dictClone;
            }

            // このクラス (c) のサブクラスのリストを保存

            if (subclasses[c] != undefined) {
                var sub:Vector.<Class> = subclasses[c] as Vector.<Class>;
                for (var j:int = i - 1; j >= 0; --j) {
                    var subC:Class = tree[j];
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
    getClassTree(klass:Class):Vector.<Class>
    {
        var tree:Vector.<Class> = new Vector.<Class>();
        var superClassName:String;
        var c:Class = klass;

        while (c != null) {
            tree.push(c);
            if ((superClassName = getQualifiedSuperclassName(c)) != null) {
                try {
                    c = getDefinitionByName(superClassName) as Class;
                }
                catch (e:ReferenceError) {
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