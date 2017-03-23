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
    'z',
    'scaleX',
    'scaleY',
    'scaleZ',
    'rotation',
    'rotationX',
    'rotationY',
    'rotationZ',
    'alpha',
    'width',
    'height',
    '_bevelFilter',
    '_blurFilter',
    '_colorMatrixFilter',
    '_convolutionFilter',
    '_displacementMapFilter',
    '_dropShadowFilter',
    '_glowFilter',
    '_gradientBevelFilter',
    '_gradientGlowFilter',
    '_shaderFilter',
];


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
        return _target;
    }

    /**
     *
     * @param value {Object}
     */
    set target(value)
    {
        _target = value;
    }


    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setSourceValue(propertyName:String, value:Number, isRelative:Boolean = false)
    {
        console.log('DisplayObjectUpdater.setSourceValue(', propertyName, value, isRelative, ')');
        console.log('_flags:', _flags);

        if (propertyName == 'x') {
            _flags |= 0x0001;
            console.log('[x] _flags:', _flags, 0x0001);
            _source.relativeFlags |= isRelative ? 0x0001 : 0;
            _source.x = value;
        }
        else if (propertyName == 'y') {
            _flags |= 0x0002;
            console.log('[y] _flags:', _flags, 0x0002);
            _source.relativeFlags |= isRelative ? 0x0002 : 0;
            _source.y = value;
        }
        else if (propertyName == 'z') {
            _flags |= 0x0004;
            console.log('[z] _flags:', _flags, 0x0004);
            _source.relativeFlags |= isRelative ? 0x0004 : 0;
            _source.z = value;
        }
        else if (propertyName == 'scaleX') {
            _flags |= 0x0008;
            console.log('[scaleX] _flags:', _flags, 0x0008);
            _source.relativeFlags |= isRelative ? 0x0008 : 0;
            _source.scaleX = value;
        }
        else if (propertyName == 'scaleY') {
            _flags |= 0x0010;
            console.log('[scaleY] _flags:', _flags, 0x0010);
            _source.relativeFlags |= isRelative ? 0x0010 : 0;
            _source.scaleY = value;
        }
        else if (propertyName == 'scaleZ') {
            _flags |= 0x0020;
            console.log('[scaleZ] _flags:', _flags, 0x0020);
            _source.relativeFlags |= isRelative ? 0x0020 : 0;
            _source.scaleZ = value;
        }
        else if (propertyName == 'rotation') {
            _flags |= 0x0040;
            console.log('[rotation] _flags:', _flags, 0x0040);
            _source.relativeFlags |= isRelative ? 0x0040 : 0;
            _source.rotation = value;
        }
        else if (propertyName == 'rotationX') {
            _flags |= 0x0080;
            console.log('[rotationX] _flags:', _flags, 0x0100);
            _source.relativeFlags |= isRelative ? 0x0080 : 0;
            _source.rotationX = value;
        }
        else if (propertyName == 'rotationY') {
            _flags |= 0x0100;
            console.log('[rotationY] _flags:', _flags, 0x0100);
            _source.relativeFlags |= isRelative ? 0x0100 : 0;
            _source.rotationY = value;
        }
        else if (propertyName == 'rotationZ') {
            _flags |= 0x0200;
            console.log('[rotationZ] _flags:', _flags, 0x0200);
            _source.relativeFlags |= isRelative ? 0x0200 : 0;
            _source.rotationZ = value;
        }
        else if (propertyName == 'alpha') {
            _flags |= 0x0400;
            console.log('[alpah] _flags:', _flags, 0x0400);
            _source.relativeFlags |= isRelative ? 0x0400 : 0;
            _source.alpha = value;
        }
        else if (propertyName == 'width') {
            _flags |= 0x0800;
            console.log('[width] _flags:', _flags, 0x0800);
            _source.relativeFlags |= isRelative ? 0x0800 : 0;
            _source.width = value;
        }
        else if (propertyName == 'height') {
            _flags |= 0x1000;
            console.log('[height] _flags:', _flags, 0x1000);
            _source.relativeFlags |= isRelative ? 0x1000 : 0;
            _source.height = value;
        }
    }

    /**
     *
     * @param propertyName {string}
     * @param value {number}
     * @param isRelative {boolean}
     */
    setDestinationValue(propertyName:String, value:Number, isRelative:Boolean = false)
    {
        if (propertyName == 'x') {
            _flags |= 0x0001;
            _destination.relativeFlags |= isRelative ? 0x0001 : 0;
            _destination.x = value;
        }
        else if (propertyName == 'y') {
            _flags |= 0x0002;
            _destination.relativeFlags |= isRelative ? 0x0002 : 0;
            _destination.y = value;
        }
        else if (propertyName == 'z') {
            _flags |= 0x0004;
            _destination.relativeFlags |= isRelative ? 0x0004 : 0;
            _destination.z = value;
        }
        else if (propertyName == 'scaleX') {
            _flags |= 0x0008;
            _destination.relativeFlags |= isRelative ? 0x0008 : 0;
            _destination.scaleX = value;
        }
        else if (propertyName == 'scaleY') {
            _flags |= 0x0010;
            _destination.relativeFlags |= isRelative ? 0x0010 : 0;
            _destination.scaleY = value;
        }
        else if (propertyName == 'scaleZ') {
            _flags |= 0x0020;
            _destination.relativeFlags |= isRelative ? 0x0020 : 0;
            _destination.scaleZ = value;
        }
        else if (propertyName == 'rotation') {
            _flags |= 0x0040;
            _destination.relativeFlags |= isRelative ? 0x0040 : 0;
            _destination.rotation = value;
        }
        else if (propertyName == 'rotationX') {
            _flags |= 0x0080;
            _destination.relativeFlags |= isRelative ? 0x0080 : 0;
            _destination.rotationX = value;
        }
        else if (propertyName == 'rotationY') {
            _flags |= 0x0100;
            _destination.relativeFlags |= isRelative ? 0x0100 : 0;
            _destination.rotationY = value;
        }
        else if (propertyName == 'rotationZ') {
            _flags |= 0x0200;
            _destination.relativeFlags |= isRelative ? 0x0200 : 0;
            _destination.rotationZ = value;
        }
        else if (propertyName == 'alpha') {
            _flags |= 0x0400;
            _destination.relativeFlags |= isRelative ? 0x0400 : 0;
            _destination.alpha = value;
        }
        else if (propertyName == 'width') {
            _flags |= 0x0800;
            _destination.relativeFlags |= isRelative ? 0x0800 : 0;
            _destination.width = value;
        }
        else if (propertyName == 'height') {
            _flags |= 0x1000;
            _destination.relativeFlags |= isRelative ? 0x1000 : 0;
            _destination.height = value;
        }
    }

    /**
     *
     * @param propertyName {string}
     * @returns {Object}
     */
    getObject(propertyName:String):Object
    {
        if (propertyName == '_blurFilter') {
            return getFilterByClass(BlurFilter);
        }
        if (propertyName == '_glowFilter') {
            return getFilterByClass(GlowFilter);
        }
        if (propertyName == '_dropShadowFilter') {
            return getFilterByClass(DropShadowFilter);
        }
        if (propertyName == '_colorMatrixFilter') {
            return getFilterByClass(ColorMatrixFilter);
        }
        if (propertyName == '_bevelFilter') {
            return getFilterByClass(BevelFilter);
        }
        if (propertyName == '_gradientGlowFilter') {
            return getFilterByClass(GradientGlowFilter);
        }
        if (propertyName == '_gradientBevelFilter') {
            return getFilterByClass(GradientBevelFilter);
        }
        if (propertyName == '_convolutionFilter') {
            return getFilterByClass(ConvolutionFilter);
        }
        if (propertyName == '_displacementMapFilter') {
            return getFilterByClass(DisplacementMapFilter);
        }
        if (propertyName == '_shaderFilter') {
            return getFilterByClass(ShaderFilter);
        }
        return null;
    }

    /**
     * 
     * @param klass {Class}
     * @returns {BitmapFilter}
     */
    getFilterByClass(klass:Class):BitmapFilter
    {
        var filter:BitmapFilter = null;
        var filters:Array = _target.filters;
        var l:uint = filters.length;
        for (var i:uint = 0; i < l; ++i) {
            if ((filter = filters[i]) is klass) {
                return filter;
            }
        }
        filter = new klass();
        filters.push(filter);
        _target.filters = filters;
        return filter;
    }


    /**
     * 
     * @param propertyName {string}
     * @param value {Object}
     */
    setObject(propertyName:String, value:Object)
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
    setFilterByClass(filter:BitmapFilter, klass:Class)
    {
        var filters:Array = _target.filters;
        var l:uint = filters.length;
        for (var i:uint = 0; i < l; ++i) {
            if (filters[i] is klass) {
                filters[i] = filter;
                _target.filters = filters;
                return;
            }
        }
        filters.push(filter);
        _target.filters = filters;
    }

    resolveValues()
    {
        var t:DisplayObject = _target,
            d:DisplayObjectParameter = _destination,
            s:DisplayObjectParameter = _source,
            f:uint = _flags;

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
            if (isNaN(s.z)) {
                s.z = t.z;
            }
            else if ((s.relativeFlags & 0x0004) != 0) {
                s.z += t.z;
            }
            if (isNaN(d.z)) {
                d.z = t.z;
            }
            else if ((d.relativeFlags & 0x0004) != 0) {
                d.z += t.z;
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
            if (isNaN(s.scaleZ)) {
                s.scaleZ = t.scaleZ;
            }
            else if ((s.relativeFlags & 0x0020) != 0) {
                s.scaleZ += t.scaleZ;
            }
            if (isNaN(d.scaleZ)) {
                d.scaleZ = t.scaleZ;
            }
            else if ((d.relativeFlags & 0x0020) != 0) {
                d.scaleZ += t.scaleZ;
            }
        }
        if ((f & 0x0040) != 0) {
            if (isNaN(s.rotation)) {
                s.rotation = t.rotation;
            }
            else if ((s.relativeFlags & 0x0040) != 0) {
                s.rotation += t.rotation;
            }
            if (isNaN(d.rotation)) {
                d.rotation = t.rotation;
            }
            else if ((d.relativeFlags & 0x0040) != 0) {
                d.rotation += t.rotation;
            }
        }
        if ((f & 0x0080) != 0) {
            if (isNaN(s.rotationX)) {
                s.rotationX = t.rotationX;
            }
            else if ((s.relativeFlags & 0x0080) != 0) {
                s.rotationX += t.rotationX;
            }
            if (isNaN(d.rotationX)) {
                d.rotationX = t.rotationX;
            }
            else if ((d.relativeFlags & 0x0080) != 0) {
                d.rotationX += t.rotationX;
            }
        }
        if ((f & 0x0100) != 0) {
            if (isNaN(s.rotationY)) {
                s.rotationY = t.rotationY;
            }
            else if ((s.relativeFlags & 0x0100) != 0) {
                s.rotationY += t.rotationY;
            }
            if (isNaN(d.rotationY)) {
                d.rotationY = t.rotationY;
            }
            else if ((d.relativeFlags & 0x0100) != 0) {
                d.rotationY += t.rotationY;
            }
        }
        if ((f & 0x0200) != 0) {
            if (isNaN(s.rotationZ)) {
                s.rotationZ = t.rotationZ;
            }
            else if ((s.relativeFlags & 0x0200) != 0) {
                s.rotationZ += t.rotationZ;
            }
            if (isNaN(d.rotationZ)) {
                d.rotationZ = t.rotationZ;
            }
            else if ((d.relativeFlags & 0x0200) != 0) {
                d.rotationZ += t.rotationZ;
            }
        }
        if ((f & 0x0400) != 0) {
            if (isNaN(s.alpha)) {
                s.alpha = t.alpha;
            }
            else if ((s.relativeFlags & 0x0400) != 0) {
                s.alpha += t.alpha;
            }
            if (isNaN(d.alpha)) {
                d.alpha = t.alpha;
            }
            else if ((d.relativeFlags & 0x0400) != 0) {
                d.alpha += t.alpha;
            }
        }
        if ((f & 0x0800) != 0) {
            if (isNaN(s.width)) {
                s.width = t.width;
            }
            else if ((s.relativeFlags & 0x0800) != 0) {
                s.width += t.width;
            }
            if (isNaN(d.width)) {
                d.width = t.width;
            }
            else if ((d.relativeFlags & 0x0800) != 0) {
                d.width += t.width;
            }
        }
        if ((f & 0x1000) != 0) {
            if (isNaN(s.height)) {
                s.height = t.height;
            }
            else if ((s.relativeFlags & 0x1000) != 0) {
                s.height += t.height;
            }
            if (isNaN(d.height)) {
                d.height = t.height;
            }
            else if ((d.relativeFlags & 0x1000) != 0) {
                d.height += t.height;
            }
        }
    }

    /**
     * 
     * @param factor {number}
     */
    updateObject(factor:Number)
    {
        console.log('updateObject(' + factor + ')');

        var t:DisplayObject = _target,
            d:DisplayObjectParameter = _destination,
            s:DisplayObjectParameter = _source,
            f:uint = _flags;

        var invert:Number = 1.0 - factor;

        console.log(
            'f:', f,
            '0x0001:', 0x0001,
            '0x0002:', 0x0002,
            '0x0004:', 0x0004,
            '0x0038:', 0x0038
        );

        if ((f & 0x0001) != 0) {
            t.x = s.x * invert + d.x * factor;
        }
        if ((f & 0x0002) != 0) {
            t.y = s.y * invert + d.y * factor;
        }
        if ((f & 0x0004) != 0) {
            t.z = s.z * invert + d.z * factor;
        }
        if ((f & 0x0038) != 0) {
            if ((f & 0x0008) != 0) {
                t.scaleX = s.scaleX * invert + d.scaleX * factor;
            }
            if ((f & 0x0010) != 0) {
                t.scaleY = s.scaleY * invert + d.scaleY * factor;
            }
            if ((f & 0x0020) != 0) {
                t.scaleZ = s.scaleZ * invert + d.scaleZ * factor;
            }
        }
        if ((f & 0x03c0) != 0) {
            if ((f & 0x0040) != 0) {
                t.rotation = s.rotation * invert + d.rotation * factor;
            }
            if ((f & 0x0080) != 0) {
                t.rotationX = s.rotationX * invert + d.rotationX * factor;
            }
            if ((f & 0x0100) != 0) {
                t.rotationY = s.rotationY * invert + d.rotationY * factor;
            }
            if ((f & 0x0200) != 0) {
                t.rotationZ = s.rotationZ * invert + d.rotationZ * factor;
            }
        }
        if ((f & 0x1c00) != 0) {
            if ((f & 0x0400) != 0) {
                t.alpha = s.alpha * invert + d.alpha * factor;
            }
            if ((f & 0x0800) != 0) {
                t.width = s.width * invert + d.width * factor;
            }
            if ((f & 0x1000) != 0) {
                t.height = s.height * invert + d.height * factor;
            }
        }
    }

    /**
     *
     * @returns {AbstractUpdater}
     */
    newInstance():AbstractUpdater
    {
        return new DisplayObjectUpdater();
    }

    /**
     *
     * @param source {AbstractUpdater}
     */
    copyFrom(source:AbstractUpdater)
    {
        super.copyFrom(source);

        var obj:DisplayObjectUpdater = source;

        _target = obj._target;
        _source.copyFrom(obj._source);
        _destination.copyFrom(obj._destination);
        _flags = obj._flags;
    }
}


class DisplayObjectParameter
{
    constructor()
    {
        this.relativeFlags = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.scaleX = 0;
        this.scaleY = 0;
        this.scaleZ = 0;
        this.rotation = 0;
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
        this.alpha = 1;
        this.width = 0;
        this.height = 0;
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
        this.z = obj.z;
        this.scaleX = obj.scaleX;
        this.scaleY = obj.scaleY;
        this.scaleZ = obj.scaleZ;
        this.rotation = obj.rotation;
        this.rotationX = obj.rotationX;
        this.rotationY = obj.rotationY;
        this.rotationZ = obj.rotationZ;
        this.alpha = obj.alpha;
        this.width = obj.width;
        this.height = obj.height;
    }
}