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



import AbstractUpdater from '../AbstractUpdater';


const TARGET_PROPERTIES = [
    'x',
    'y',
    'scale',
    'scaleX',
    'scaleY',
    'rotation',
    'alpha',
    'width',
    'height',
    'skew',
    'skewX',
    'skewY',
    '_blurFilter',
    '_blurXFilter',
    '_blurYFilter',
    '_colorMatrixFilter',
    '_displacementMapFilter',
    '_fxaaFilter',
    '_noiseFilter',
    '_voidFilter',
];


/**
 * PIXI V4 기준으로 작성 되었습니다.
 */
export default class DisplayObjectUpdater extends AbstractUpdater
{

    /**
     *
     * @param registry {ClassRegistry}
     */
    static register(registry)
    {
        registry.registerClassWithTargetClassAndPropertyNames(DisplayObjectUpdater, DisplayObject, TARGET_PROPERTIES);
    }


    constructor()
    {
        super();

        /**
         *
         * @type {Object}
         * @private
         */
        this._target = null;

        /**
         *
         * @type {DisplayObjectParameter}
         * @private
         */
        this._source = new DisplayObjectParameter();

        /**
         *
         * @type {DisplayObjectParameter}
         * @private
         */
        this._destination = new DisplayObjectParameter();

        /**
         *
         * @type {number}
         * @private
         */
        this._flags = 0;
    }


    /**
     *
     * @returns {Object}
     */
    get target():Object
    {
        return this._target;
    }

    /**
     *
     * @param value {Object}
     */
    set target(value)
    {
        this._target = value;
    }


    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName, value, isRelative = false)
    {
        if (propertyName == 'x') {
            this._flags |= 0x0001;
            this._source.relativeFlags |= isRelative ? 0x0001 : 0;
            this._source.x = value;
        }
        else if (propertyName == 'y') {
            this._flags |= 0x0002;
            this._source.relativeFlags |= isRelative ? 0x0002 : 0;
            this._source.y = value;
        }
        else if (propertyName == 'scale') {
            this._flags |= 0x0004;
            this._source.relativeFlags |= isRelative ? 0x0004 : 0;
            this._source.scale = value;
        }
        else if (propertyName == 'scaleX') {
            this._flags |= 0x0008;
            this._source.relativeFlags |= isRelative ? 0x0008 : 0;
            this._source.scale.x = value;
        }
        else if (propertyName == 'scaleY') {
            this._flags |= 0x0010;
            this._source.relativeFlags |= isRelative ? 0x0010 : 0;
            this._source.scale.y = value;
        }
        else if (propertyName == 'rotation') {
            this._flags |= 0x0020;
            this._source.relativeFlags |= isRelative ? 0x0020 : 0;
            this._source.rotation = value;
        }
        else if (propertyName == 'alpha') {
            this._flags |= 0x0040;
            this._source.relativeFlags |= isRelative ? 0x0040 : 0;
            this._source.alpha = value;
        }
        else if (propertyName == 'width') {
            this._flags |= 0x0080;
            this._source.relativeFlags |= isRelative ? 0x0080 : 0;
            this._source.width = value;
        }
        else if (propertyName == 'height') {
            this._flags |= 0x0100;
            this._source.relativeFlags |= isRelative ? 0x0100 : 0;
            this._source.height = value;
        }
        else if (propertyName == 'skew') {
            this._flags |= 0x0200;
            this._source.relativeFlags |= isRelative ? 0x0200 : 0;
            this._source.skew = value;
        }
        else if (propertyName == 'skewX') {
            this._flags |= 0x0400;
            this._source.relativeFlags |= isRelative ? 0x0400 : 0;
            this._source.skew.x = value;
        }
        else if (propertyName == 'skewY') {
            this._flags |= 0x0800;
            this._source.relativeFlags |= isRelative ? 0x0800 : 0;
            this._source.skew.y = value;
        }
    }

    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setDestinationValue(propertyName, value, isRelative = false)
    {
        if (propertyName == 'x') {
            this._flags |= 0x0001;
            this._destination.relativeFlags |= isRelative ? 0x0001 : 0;
            this._destination.x = value;
        }
        else if (propertyName == 'y') {
            this._flags |= 0x0002;
            this._destination.relativeFlags |= isRelative ? 0x0002 : 0;
            this._destination.y = value;
        }
        else if (propertyName == 'scale') {
            this._flags |= 0x0004;
            this._destination.relativeFlags |= isRelative ? 0x0004 : 0;
            this._destination.scale = value;
        }
        else if (propertyName == 'scaleX') {
            this._flags |= 0x0008;
            this._destination.relativeFlags |= isRelative ? 0x0008 : 0;
            this._destination.scale.x = value;
        }
        else if (propertyName == 'scaleY') {
            this._flags |= 0x0010;
            this._destination.relativeFlags |= isRelative ? 0x0010 : 0;
            this._destination.scale.y = value;
        }
        else if (propertyName == 'rotation') {
            this._flags |= 0x0020;
            this._destination.relativeFlags |= isRelative ? 0x0020 : 0;
            this._destination.rotation = value;
        }
        else if (propertyName == 'alpha') {
            this._flags |= 0x0040;
            this._destination.relativeFlags |= isRelative ? 0x0040 : 0;
            this._destination.alpha = value;
        }
        else if (propertyName == 'width') {
            this._flags |= 0x0080;
            this._destination.relativeFlags |= isRelative ? 0x0080 : 0;
            this._destination.width = value;
        }
        else if (propertyName == 'height') {
            this._flags |= 0x0100;
            this._destination.relativeFlags |= isRelative ? 0x0100 : 0;
            this._destination.height = value;
        }
        else if (propertyName == 'skew') {
            this._flags |= 0x0200;
            this._destination.relativeFlags |= isRelative ? 0x0200 : 0;
            this._destination.skew = value;
        }
        else if (propertyName == 'skewX') {
            this._flags |= 0x0400;
            this._destination.relativeFlags |= isRelative ? 0x0400 : 0;
            this._destination.skew.x = value;
        }
        else if (propertyName == 'skewY') {
            this._flags |= 0x0800;
            this._destination.relativeFlags |= isRelative ? 0x0800 : 0;
            this._destination.skew.y = value;
        }
    }

    /**
     *
     * @param propertyName {string}
     * @returns {Object}
     */
    getObject(propertyName):Object
    {
        if (propertyName == '_blurFilter') {
            return getFilterByClass(BlurFilter);
        }
        if (propertyName == '_blurXFilter') {
            return getFilterByClass(GlowFilter);
        }
        if (propertyName == '_blurYFilter') {
            return getFilterByClass(DropShadowFilter);
        }
        if (propertyName == '_colorMatrixFilter') {
            return getFilterByClass(ColorMatrixFilter);
        }
        if (propertyName == '_displacementMapFilter') {
            return getFilterByClass(BevelFilter);
        }
        if (propertyName == '_fxaaFilter') {
            return getFilterByClass(GradientGlowFilter);
        }
        if (propertyName == '_noiseFilter') {
            return getFilterByClass(GradientBevelFilter);
        }
        if (propertyName == '_voidFilter') {
            return getFilterByClass(ConvolutionFilter);
        }
        return null;
    }

    /**
     * 
     * @param klass {Class}
     * @returns {BitmapFilter}
     */
    getFilterByClass(klass)
    {
        var filter = null;
        var filters = this._target.filters;
        var l = filters.length;
        for (var i = 0; i < l; ++i) {
            if ((filter = filters[i]) is klass) {
                return filter;
            }
        }
        filter = new klass();
        filters.push(filter);
        this._target.filters = filters;
        return filter;
    }


    /**
     * 
     * @param propertyName {string}
     * @param value {Object}
     */
    setObject(propertyName, value:Object)
    {
        if (propertyName == '_blurFilter') {
            setFilterByClass(value, BlurFilter);
            return;
        }
        if (propertyName == '_glowFilter') {
            setFilterByClass(value, GlowFilter);
            return;
        }
        if (propertyName == '_dropShadowFilter') {
            setFilterByClass(value, DropShadowFilter);
            return;
        }
        if (propertyName == '_colorMatrixFilter') {
            setFilterByClass(value, ColorMatrixFilter);
            return;
        }
        if (propertyName == '_bevelFilter') {
            setFilterByClass(value, BevelFilter);
            return;
        }
        if (propertyName == '_gradientGlowFilter') {
            setFilterByClass(value, GradientGlowFilter);
            return;
        }
        if (propertyName == '_gradientBevelFilter') {
            setFilterByClass(value, GradientBevelFilter);
            return;
        }
        if (propertyName == '_convolutionFilter') {
            setFilterByClass(value, ConvolutionFilter);
            return;
        }
        if (propertyName == '_displacementMapFilter') {
            setFilterByClass(value, DisplacementMapFilter);
            return;
        }
        if (propertyName == '_shaderFilter') {
            setFilterByClass(value, ShaderFilter);
            return;
        }
    }

    /**
     * 
     * @param filter {BitmapFilter}
     * @param klass {Class}
     */
    setFilterByClass(filter, klass)
    {
        var filters = this._target.filters;
        var l = filters.length;
        for (var i = 0; i < l; ++i) {
            if (filters[i] is klass) {
                filters[i] = filter;
                this._target.filters = filters;
                return;
            }
        }
        filters.push(filter);
        this._target.filters = filters;
    }

    resolveValues()
    {
        var t = this._target,
            d = this._destination,
            s = this._source,
            f = this._flags;

        if ((f & 0x0001) != 0) {
            if (isNaN(s.x)) {
                s.x = t.x;
            }
            else if ((s.relativeFlags & 0x0001) != 0) {
                s.x += t.x;
            }
            if (isNaN(d.x)) {
                d.x = t.x;
            }
            else if ((d.relativeFlags & 0x0001) != 0) {
                d.x += t.x;
            }
        }
        if ((f & 0x0002) != 0) {
            if (isNaN(s.y)) {
                s.y = t.y;
            }
            else if ((s.relativeFlags & 0x0002) != 0) {
                s.y += t.y;
            }
            if (isNaN(d.y)) {
                d.y = t.y;
            }
            else if ((d.relativeFlags & 0x0002) != 0) {
                d.y += t.y;
            }
        }
        if ((f & 0x0004) != 0) {
            if (isNaN(s.scale.x) || isNaN(s.scale.y)) {
                s.scale = t.scale;
            }
            else if ((s.relativeFlags & 0x0004) != 0) {
                s.scale.x += t.scale.x;
                s.scale.y += t.scale.y;
            }
            if (isNaN(d.z)) {
                d.scale = t.scale;
            }
            else if ((d.relativeFlags & 0x0004) != 0) {
                d.scale.x += t.scale.x;
                d.scale.y += t.scale.y;
            }
        }
        if ((f & 0x0008) != 0) {
            if (isNaN(s.scaleX)) {
                s.scaleX = t.scaleX;
            }
            else if ((s.relativeFlags & 0x0008) != 0) {
                s.scaleX += t.scaleX;
            }
            if (isNaN(d.scaleX)) {
                d.scaleX = t.scaleX;
            }
            else if ((d.relativeFlags & 0x0008) != 0) {
                d.scaleX += t.scaleX;
            }
        }
        if ((f & 0x0010) != 0) {
            if (isNaN(s.scaleY)) {
                s.scaleY = t.scaleY;
            }
            else if ((s.relativeFlags & 0x0010) != 0) {
                s.scaleY += t.scaleY;
            }
            if (isNaN(d.scaleY)) {
                d.scaleY = t.scaleY;
            }
            else if ((d.relativeFlags & 0x0010) != 0) {
                d.scaleY += t.scaleY;
            }
        }
        if ((f & 0x0020) != 0) {
            if (isNaN(s.rotation)) {
                s.rotation = t.rotation;
            }
            else if ((s.relativeFlags & 0x0020) != 0) {
                s.rotation += t.rotation;
            }
            if (isNaN(d.rotation)) {
                d.rotation = t.rotation;
            }
            else if ((d.relativeFlags & 0x0020) != 0) {
                d.rotation += t.rotation;
            }
        }
        if ((f & 0x0040) != 0) {
            if (isNaN(s.alpha)) {
                s.alpha = t.alpha;
            }
            else if ((s.relativeFlags & 0x0040) != 0) {
                s.alpha += t.alpha;
            }
            if (isNaN(d.alpha)) {
                d.alpha = t.alpha;
            }
            else if ((d.relativeFlags & 0x0040) != 0) {
                d.alpha += t.alpha;
            }
        }
        if ((f & 0x0080) != 0) {
            if (isNaN(s.width)) {
                s.width = t.width;
            }
            else if ((s.relativeFlags & 0x0080) != 0) {
                s.width += t.width;
            }
            if (isNaN(d.width)) {
                d.width = t.width;
            }
            else if ((d.relativeFlags & 0x0080) != 0) {
                d.width += t.width;
            }
        }
        if ((f & 0x0100) != 0) {
            if (isNaN(s.height)) {
                s.height = t.height;
            }
            else if ((s.relativeFlags & 0x0100) != 0) {
                s.height += t.height;
            }
            if (isNaN(d.height)) {
                d.height = t.height;
            }
            else if ((d.relativeFlags & 0x0100) != 0) {
                d.height += t.height;
            }
        }
        if ((f & 0x0200) != 0) {
            if (isNaN(s.skew)) {
                s.skew = t.skew;
            }
            else if ((s.relativeFlags & 0x0200) != 0) {
                s.skew += t.skew;
            }
            if (isNaN(d.skew)) {
                d.skew = t.skew;
            }
            else if ((d.relativeFlags & 0x0200) != 0) {
                d.skew += t.skew;
            }
        }
        if ((f & 0x0400) != 0) {
            if (isNaN(s.skew.x)) {
                s.skew.x = t.skew.x;
            }
            else if ((s.relativeFlags & 0x0400) != 0) {
                s.skew.x += t.skew.x;
            }
            if (isNaN(d.skew)) {
                d.skew.x = t.skew.x;
            }
            else if ((d.relativeFlags & 0x0400) != 0) {
                d.skew.x += t.skew.x;
            }
        }
        if ((f & 0x0800) != 0) {
            if (isNaN(s.skew.y)) {
                s.skew.y = t.skew.y;
            }
            else if ((s.relativeFlags & 0x0800) != 0) {
                s.skew.y += t.skew.y;
            }
            if (isNaN(d.skew.y)) {
                d.skew.y = t.skew.y;
            }
            else if ((d.relativeFlags & 0x0800) != 0) {
                d.skew.y += t.skew.y;
            }
        }
    }

    /**
     * 
     * @param factor {number}
     */
    updateObject(factor)
    {
        console.log('updateObject(' + factor + ')');

        var t = this._target,
            d = this._destination,
            s = this._source,
            f = this._flags;

        var invert = 1.0 - factor;

        if ((f & 0x0001) != 0) {
            t.x = s.x * invert + d.x * factor;
        }
        if ((f & 0x0002) != 0) {
            t.y = s.y * invert + d.y * factor;
        }
        if ((f & 0x001c) != 0) {
            if ((f & 0x0004) != 0) {
                t.scale.x = s.scale.x * invert + d.scale.x * factor;
                t.scale.y = s.scale.y * invert + d.scale.y * factor;
            }
            if ((f & 0x0008) != 0) {
                t.scale.x = s.scale.x * invert + d.scale.x * factor;
            }
            if ((f & 0x0010) != 0) {
                t.scale.y = s.scale.y * invert + d.scale.y * factor;
            }
        }
        if ((f & 0x0020) != 0) {
            t.rotation = s.rotation * invert + d.rotation * factor;
        }
        if ((f & 0x01c0) != 0) {
            if ((f & 0x0040) != 0) {
                t.alpha = s.alpha * invert + d.alpha * factor;
            }
            if ((f & 0x0080) != 0) {
                t.width = s.width * invert + d.width * factor;
            }
            if ((f & 0x0100) != 0) {
                t.height = s.height * invert + d.height * factor;
            }
        }
        if ((f & 0x0e00) != 0) {
            if ((f & 0x0200) != 0) {
                t.skew.x = s.skew.x * invert + d.skew.x * factor;
                t.skew.y = s.skew.y * invert + d.skew.y * factor;
            }
            if ((f & 0x0400) != 0) {
                t.skew.x = s.skew.x * invert + d.skew.x * factor;
            }
            if ((f & 0x0800) != 0) {
                t.skew.y = s.skew.y * invert + d.skew.y * factor;
            }
        }
    }

    /**
     *
     * @returns {AbstractUpdater}
     */
    newInstance()
    {
        return new DisplayObjectUpdater();
    }

    /**
     *
     * @param source {AbstractUpdater}
     */
    copyFrom(source)
    {
        super.copyFrom(source);

        var obj = source;

        this._target = obj._target;
        this._source.copyFrom(obj._source);
        this._destination.copyFrom(obj._destination);
        this._flags = obj._flags;
    }
}


class DisplayObjectParameter
{
    constructor()
    {
        this.relativeFlags = 0;
        this.x = 0;
        this.y = 0;
        this.scale = {x:0, y:0};
        this.rotation = 0;
        this.alpha = 1;
        this.width = 0;
        this.height = 0;
        this.skew = {x:0, y:0};
    }


    /**
     *
     * @param obj {DisplayObjectParameter}
     */
    copyFrom(obj)
    {
        this.relativeFlags = obj.relativeFlags;
        this.x = obj.x;
        this.y = obj.y;
        this.scale = {x: obj.scale.x, y: obj.scale.y};
        this.rotation = obj.rotation;
        this.alpha = obj.alpha;
        this.width = obj.width;
        this.height = obj.height;
        this.skew = {x: obj.skew.x, y: obj.skew.y};
    }
}