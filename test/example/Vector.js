

const degrees = 180 / Math.PI;


function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function radian2degrees (rad) {
    return rad * degrees;
}

function degrees2radian (deg) {
    return deg / degrees;
}


/**
 * Victor.js를 ES6로 변환하여 사용하고 있습니다.
 * https://github.com/maxkueng/victor
 */
export default class Vector
{
    /**
     * Creates a new instance from an array
     *
     * ### Examples:
     *     var vec = Vector.fromArray([42, 21]);
     *
     *     vec.toString();
     *     // => x:42, y:21
     *
     * @name Vector.fromArray
     * @param {Array} array Array with the x and y values at index 0 and 1 respectively
     * @return {Vector} The new instance
     * @api public
     */
    static fromArray(arr)
    {
        return new Vector(arr[0] || 0, arr[1] || 0);
    }


    /**
     * Creates a new instance from an object
     *
     * ### Examples:
     *     var vec = Vector.fromObject({ x: 42, y: 21 });
     *
     *     vec.toString();
     *     // => x:42, y:21
     *
     * @name Vector.fromObject
     * @param {Object} obj Object with the values for x and y
     * @return {Vector} The new instance
     * @api public
     */
    static fromObject(obj)
    {
        return new Vector(obj.x || 0, obj.y || 0);
    }


    /**
     * Constructor. Will also work without the `new` keyword
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = Vector(42, 1337);
     *
     * @param {Number} x Value of the x axis
     * @param {Number} y Value of the y axis
     * @return {Vector}
     * @api public
     */
    constructor(x = 0, y = 0)
    {
        if (!(this instanceof Vector)) {
            return new Vector(x, y);
        }

        this.x = x;
        this.y = y;
    }


    /**
     * Adds another vector's X axis to this one
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = new Vector(20, 30);
     *
     *     vec1.addX(vec2);
     *     vec1.toString();
     *     // => x:30, y:10
     *
     * @param {Vector} vector The other vector you want to add to this one
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    addX(vec)
    {
        this.x += vec.x;
        return this;
    }


    /**
     * Adds another vector's Y axis to this one
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = new Vector(20, 30);
     *
     *     vec1.addY(vec2);
     *     vec1.toString();
     *     // => x:10, y:40
     *
     * @param {Vector} vector The other vector you want to add to this one
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    addY(vec)
    {
        this.y += vec.y;
        return this;
    }


    /**
     * Adds another vector to this one
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = new Vector(20, 30);
     *
     *     vec1.add(vec2);
     *     vec1.toString();
     *     // => x:30, y:40
     *
     * @param {Vector} vector The other vector you want to add to this one
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    add(vec)
    {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }


    /**
     * Adds the given scalar to both vector axis
     *
     * ### Examples:
     *     var vec = new Vector(1, 2);
     *
     *     vec.addScalar(2);
     *     vec.toString();
     *     // => x: 3, y: 4
     *
     * @param {Number} scalar The scalar to add
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    addScalar(scalar)
    {
        this.x += scalar;
        this.y += scalar;
        return this;
    }


    /**
     * Adds the given scalar to the X axis
     *
     * ### Examples:
     *     var vec = new Vector(1, 2);
     *
     *     vec.addScalarX(2);
     *     vec.toString();
     *     // => x: 3, y: 2
     *
     * @param {Number} scalar The scalar to add
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    addScalarX(scalar)
    {
        this.x += scalar;
        return this;
    }


    /**
     * Adds the given scalar to the Y axis
     *
     * ### Examples:
     *     var vec = new Vector(1, 2);
     *
     *     vec.addScalarY(2);
     *     vec.toString();
     *     // => x: 1, y: 4
     *
     * @param {Number} scalar The scalar to add
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    addScalarY(scalar)
    {
        this.y += scalar;
        return this;
    }


    /**
     * Subtracts the X axis of another vector from this one
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(20, 30);
     *
     *     vec1.subtractX(vec2);
     *     vec1.toString();
     *     // => x:80, y:50
     *
     * @param {Vector} vector The other vector you want subtract from this one
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    subtractX(vec)
    {
        this.x -= vec.x;
        return this;
    }


    /**
     * Subtracts the Y axis of another vector from this one
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(20, 30);
     *
     *     vec1.subtractY(vec2);
     *     vec1.toString();
     *     // => x:100, y:20
     *
     * @param {Vector} vector The other vector you want subtract from this one
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    subtractY(vec)
    {
        this.y -= vec.y;
        return this;
    }


    /**
     * Subtracts another vector from this one
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(20, 30);
     *
     *     vec1.subtract(vec2);
     *     vec1.toString();
     *     // => x:80, y:20
     *
     * @param {Vector} vector The other vector you want subtract from this one
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    subtract(vec)
    {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }


    /**
     * Subtracts the given scalar from both axis
     *
     * ### Examples:
     *     var vec = new Vector(100, 200);
     *
     *     vec.subtractScalar(20);
     *     vec.toString();
     *     // => x: 80, y: 180
     *
     * @param {Number} scalar The scalar to subtract
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    subtractScalar(scalar)
    {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }


    /**
     * Subtracts the given scalar from the X axis
     *
     * ### Examples:
     *     var vec = new Vector(100, 200);
     *
     *     vec.subtractScalarX(20);
     *     vec.toString();
     *     // => x: 80, y: 200
     *
     * @param {Number} scalar The scalar to subtract
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    subtractScalarX(scalar)
    {
        this.x -= scalar;
        return this;
    }


    /**
     * Subtracts the given scalar from the Y axis
     *
     * ### Examples:
     *     var vec = new Vector(100, 200);
     *
     *     vec.subtractScalarY(20);
     *     vec.toString();
     *     // => x: 100, y: 180
     *
     * @param {Number} scalar The scalar to subtract
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    subtractScalarY(scalar)
    {
        this.y -= scalar;
        return this;
    }


    /**
     * Divides the X axis by the x component of given vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     var vec2 = new Vector(2, 0);
     *
     *     vec.divideX(vec2);
     *     vec.toString();
     *     // => x:50, y:50
     *
     * @param {Vector} vector The other vector you want divide by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    divideX(vector)
    {
        this.x /= vector.x;
        return this;
    }


    /**
     * Divides the Y axis by the y component of given vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     var vec2 = new Vector(0, 2);
     *
     *     vec.divideY(vec2);
     *     vec.toString();
     *     // => x:100, y:25
     *
     * @param {Vector} vector The other vector you want divide by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    divideY(vector)
    {
        this.y /= vector.y;
        return this;
    }


    /**
     * Divides both vector axis by a axis values of given vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     var vec2 = new Vector(2, 2);
     *
     *     vec.divide(vec2);
     *     vec.toString();
     *     // => x:50, y:25
     *
     * @param {Vector} vector The vector to divide by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    divide(vector)
    {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    }


    /**
     * Divides both vector axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.divideScalar(2);
     *     vec.toString();
     *     // => x:50, y:25
     *
     * @param {Number} The scalar to divide by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    divideScalar(scalar)
    {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        } else {
            this.x = 0;
            this.y = 0;
        }

        return this;
    }


    /**
     * Divides the X axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.divideScalarX(2);
     *     vec.toString();
     *     // => x:50, y:50
     *
     * @param {Number} The scalar to divide by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    divideScalarX(scalar)
    {
        if (scalar !== 0) {
            this.x /= scalar;
        } else {
            this.x = 0;
        }
        return this;
    }


    /**
     * Divides the Y axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.divideScalarY(2);
     *     vec.toString();
     *     // => x:100, y:25
     *
     * @param {Number} The scalar to divide by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    divideScalarY(scalar)
    {
        if (scalar !== 0) {
            this.y /= scalar;
        } else {
            this.y = 0;
        }
        return this;
    }


    /**
     * Inverts the X axis
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.invertX();
     *     vec.toString();
     *     // => x:-100, y:50
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    invertX()
    {
        this.x *= -1;
        return this;
    }


    /**
     * Inverts the Y axis
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.invertY();
     *     vec.toString();
     *     // => x:100, y:-50
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    invertY()
    {
        this.y *= -1;
        return this;
    }


    /**
     * Inverts both axis
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.invert();
     *     vec.toString();
     *     // => x:-100, y:-50
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    invert()
    {
        this.invertX();
        this.invertY();
        return this;
    }


    /**
     * Multiplies the X axis by X component of given vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     var vec2 = new Vector(2, 0);
     *
     *     vec.multiplyX(vec2);
     *     vec.toString();
     *     // => x:200, y:50
     *
     * @param {Vector} vector The vector to multiply the axis with
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    multiplyX(vector)
    {
        this.x *= vector.x;
        return this;
    }


    /**
     * Multiplies the Y axis by Y component of given vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     var vec2 = new Vector(0, 2);
     *
     *     vec.multiplyX(vec2);
     *     vec.toString();
     *     // => x:100, y:100
     *
     * @param {Vector} vector The vector to multiply the axis with
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    multiplyY(vector)
    {
        this.y *= vector.y;
        return this;
    }


    /**
     * Multiplies both vector axis by values from a given vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     var vec2 = new Vector(2, 2);
     *
     *     vec.multiply(vec2);
     *     vec.toString();
     *     // => x:200, y:100
     *
     * @param {Vector} vector The vector to multiply by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    multiply(vector)
    {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }


    /**
     * Multiplies both vector axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.multiplyScalar(2);
     *     vec.toString();
     *     // => x:200, y:100
     *
     * @param {Number} The scalar to multiply by
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    multiplyScalar(scalar)
    {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }


    multiplyScalarX(scalar)
    {
        this.x *= scalar;
        return this;
    }


    multiplyScalarY(scalar)
    {
        this.y *= scalar;
        return this;
    }


    /**
     * Normalize
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    normalize()
    {
        var length = this.length();

        if (length === 0) {
            this.x = 1;
            this.y = 0;
        } else {
            this.divide(Vector(length, length));
        }
        return this;
    }


    norm()
    {
        return this.normalize();
    }


    /**
     * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.limit(80, 0.9);
     *     vec.toString();
     *     // => x:90, y:50
     *
     * @param {Number} max The maximum value for both x and y axis
     * @param {Number} factor Factor by which the axis are to be multiplied with
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    limit(max, factor)
    {
        if (Math.abs(this.x) > max){ this.x *= factor; }
        if (Math.abs(this.y) > max){ this.y *= factor; }
        return this;
    }


    /**
     * Randomizes both vector axis with a value between 2 vectors
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.randomize(new Vector(50, 60), new Vector(70, 80`));
     *     vec.toString();
     *     // => x:67, y:73
     *
     * @param {Vector} topLeft first vector
     * @param {Vector} bottomRight second vector
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    randomize(topLeft, bottomRight)
    {
        this.randomizeX(topLeft, bottomRight);
        this.randomizeY(topLeft, bottomRight);

        return this;
    }


    randomizeX(topLeft, bottomRight)
    {
        var min = Math.min(topLeft.x, bottomRight.x);
        var max = Math.max(topLeft.x, bottomRight.x);
        this.x = random(min, max);
        return this;
    }


    randomizeY(topLeft, bottomRight)
    {
        var min = Math.min(topLeft.y, bottomRight.y);
        var max = Math.max(topLeft.y, bottomRight.y);
        this.y = random(min, max);
        return this;
    }


    /**
     * Randomly randomizes either axis between 2 vectors
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.randomizeAny(new Vector(50, 60), new Vector(70, 80));
     *     vec.toString();
     *     // => x:100, y:77
     *
     * @param {Vector} topLeft first vector
     * @param {Vector} bottomRight second vector
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    randomizeAny(topLeft, bottomRight)
    {
        if (!! Math.round(Math.random())) {
            this.randomizeX(topLeft, bottomRight);
        } else {
            this.randomizeY(topLeft, bottomRight);
        }
        return this;
    }


    /**
     * Rounds both axis to an integer value
     *
     * ### Examples:
     *     var vec = new Vector(100.2, 50.9);
     *
     *     vec.unfloat();
     *     vec.toString();
     *     // => x:100, y:51
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    unfloat()
    {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }


    /**
     * Rounds both axis to a certain precision
     *
     * ### Examples:
     *     var vec = new Vector(100.2, 50.9);
     *
     *     vec.unfloat();
     *     vec.toString();
     *     // => x:100, y:51
     *
     * @param {Number} Precision (default: 8)
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    toFixed(precision)
    {
        if (typeof precision === 'undefined') { precision = 8; }
        this.x = this.x.toFixed(precision);
        this.y = this.y.toFixed(precision);
        return this;
    }


    /**
     * Performs a linear blend / interpolation of the X axis towards another vector
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 100);
     *     var vec2 = new Vector(200, 200);
     *
     *     vec1.mixX(vec2, 0.5);
     *     vec.toString();
     *     // => x:150, y:100
     *
     * @param {Vector} vector The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    mixX(vec, amount)
    {
        if (typeof amount === 'undefined') {
            amount = 0.5;
        }

        this.x = (1 - amount) * this.x + amount * vec.x;
        return this;
    }


    /**
     * Performs a linear blend / interpolation of the Y axis towards another vector
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 100);
     *     var vec2 = new Vector(200, 200);
     *
     *     vec1.mixY(vec2, 0.5);
     *     vec.toString();
     *     // => x:100, y:150
     *
     * @param {Vector} vector The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    mixY(vec, amount)
    {
        if (typeof amount === 'undefined') {
            amount = 0.5;
        }

        this.y = (1 - amount) * this.y + amount * vec.y;
        return this;
    }


    /**
     * Performs a linear blend / interpolation towards another vector
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 100);
     *     var vec2 = new Vector(200, 200);
     *
     *     vec1.mix(vec2, 0.5);
     *     vec.toString();
     *     // => x:150, y:150
     *
     * @param {Vector} vector The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    mix(vec, amount)
    {
        this.mixX(vec, amount);
        this.mixY(vec, amount);
        return this;
    }


    /**
     * # Products
     */

    /**
     * Creates a clone of this vector
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = vec1.clone();
     *
     *     vec2.toString();
     *     // => x:10, y:10
     *
     * @return {Vector} A clone of the vector
     * @api public
     */
    clone()
    {
        return new Vector(this.x, this.y);
    }


    /**
     * Copies another vector's X component in to its own
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = new Vector(20, 20);
     *     var vec2 = vec1.copyX(vec1);
     *
     *     vec2.toString();
     *     // => x:20, y:10
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    copyX(vec)
    {
        this.x = vec.x;
        return this;
    }


    /**
     * Copies another vector's Y component in to its own
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = new Vector(20, 20);
     *     var vec2 = vec1.copyY(vec1);
     *
     *     vec2.toString();
     *     // => x:10, y:20
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    copyY(vec)
    {
        this.y = vec.y;
        return this;
    }


    /**
     * Copies another vector's X and Y components in to its own
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *     var vec2 = new Vector(20, 20);
     *     var vec2 = vec1.copy(vec1);
     *
     *     vec2.toString();
     *     // => x:20, y:20
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    copy(vec)
    {
        this.copyX(vec);
        this.copyY(vec);
        return this;
    }


    /**
     * Sets the vector to zero (0,0)
     *
     * ### Examples:
     *     var vec1 = new Vector(10, 10);
     *		 var1.zero();
     *     vec1.toString();
     *     // => x:0, y:0
     *
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    zero()
    {
        this.x = this.y = 0;
        return this;
    }


    /**
     * Calculates the dot product of this vector and another
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.dot(vec2);
     *     // => 23000
     *
     * @param {Vector} vector The second vector
     * @return {Number} Dot product
     * @api public
     */
    dot(vec2)
    {
        return this.x * vec2.x + this.y * vec2.y;
    }

    cross(vec2)
    {
        return (this.x * vec2.y ) - (this.y * vec2.x );
    }


    /**
     * Projects a vector onto another vector, setting itself to the result.
     *
     * ### Examples:
     *     var vec = new Vector(100, 0);
     *     var vec2 = new Vector(100, 100);
     *
     *     vec.projectOnto(vec2);
     *     vec.toString();
     *     // => x:50, y:50
     *
     * @param {Vector} vector The other vector you want to project this vector onto
     * @return {Vector} `this` for chaining capabilities
     * @api public
     */
    projectOnto(vec2)
    {
        var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));
        this.x = coeff * vec2.x;
        this.y = coeff * vec2.y;
        return this;
    }


    horizontalAngle()
    {
        return Math.atan2(this.y, this.x);
    }


    horizontalAngleDeg()
    {
        return radian2degrees(this.horizontalAngle());
    }


    verticalAngle()
    {
        return Math.atan2(this.x, this.y);
    }


    verticalAngleDeg()
    {
        return radian2degrees(this.verticalAngle());
    }


    angle()
    {
        return this.horizontalAngle();
    }


    angleDeg()
    {
        return this.horizontalAngleDeg();
    }


    direction()
    {
        return this.horizontalAngle();
    }


    rotate(angle)
    {
        var nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
        var ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));

        this.x = nx;
        this.y = ny;

        return this;
    }


    rotateDeg(angle)
    {
        angle = degrees2radian(angle);
        return this.rotate(angle);
    }


    rotateTo(rotation)
    {
        return this.rotate(rotation-this.angle());
    }


    rotateToDeg(rotation)
    {
        rotation = degrees2radian(rotation);
        return this.rotateTo(rotation);
    }


    rotateBy(rotation)
    {
        var angle = this.angle() + rotation;

        return this.rotate(angle);
    }


    rotateByDeg(rotation)
    {
        rotation = degrees2radian(rotation);
        return this.rotateBy(rotation);
    }


    /**
     * Calculates the distance of the X axis between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.distanceX(vec2);
     *     // => -100
     *
     * @param {Vector} vector The second vector
     * @return {Number} Distance
     * @api public
     */
    distanceX(vec)
    {
        return this.x - vec.x;
    }


    /**
     * Same as `distanceX()` but always returns an absolute number
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.absDistanceX(vec2);
     *     // => 100
     *
     * @param {Vector} vector The second vector
     * @return {Number} Absolute distance
     * @api public
     */
    absDistanceX(vec)
    {
        return Math.abs(this.distanceX(vec));
    }


    /**
     * Calculates the distance of the Y axis between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.distanceY(vec2);
     *     // => -10
     *
     * @param {Vector} vector The second vector
     * @return {Number} Distance
     * @api public
     */
    distanceY(vec)
    {
        return this.y - vec.y;
    }


    /**
     * Same as `distanceY()` but always returns an absolute number
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.distanceY(vec2);
     *     // => 10
     *
     * @param {Vector} vector The second vector
     * @return {Number} Absolute distance
     * @api public
     */
    absDistanceY(vec)
    {
        return Math.abs(this.distanceY(vec));
    }


    /**
     * Calculates the euclidean distance between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.distance(vec2);
     *     // => 100.4987562112089
     *
     * @param {Vector} vector The second vector
     * @return {Number} Distance
     * @api public
     */
    distance(vec)
    {
        return Math.sqrt(this.distanceSq(vec));
    }


    /**
     * Calculates the squared euclidean distance between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(200, 60);
     *
     *     vec1.distanceSq(vec2);
     *     // => 10100
     *
     * @param {Vector} vector The second vector
     * @return {Number} Distance
     * @api public
     */
    distanceSq(vec)
    {
        var dx = this.distanceX(vec),
            dy = this.distanceY(vec);

        return dx * dx + dy * dy;
    }


    /**
     * Calculates the length or magnitude of the vector
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.length();
     *     // => 111.80339887498948
     *
     * @return {Number} Length / Magnitude
     * @api public
     */
    length()
    {
        return Math.sqrt(this.lengthSq());
    }


    /**
     * Squared length / magnitude
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *
     *     vec.lengthSq();
     *     // => 12500
     *
     * @return {Number} Length / Magnitude
     * @api public
     */
    lengthSq()
    {
        return this.x * this.x + this.y * this.y;
    }


    magnitude()
    {
        return this.length();
    }


    /**
     * Returns a true if vector is (0, 0)
     *
     * ### Examples:
     *     var vec = new Vector(100, 50);
     *     vec.zero();
     *
     *     // => true
     *
     * @return {Boolean}
     * @api public
     */
    isZero()
    {
        return this.x === 0 && this.y === 0;
    }


    /**
     * Returns a true if this vector is the same as another
     *
     * ### Examples:
     *     var vec1 = new Vector(100, 50);
     *     var vec2 = new Vector(100, 50);
     *     vec1.isEqualTo(vec2);
     *
     *     // => true
     *
     * @return {Boolean}
     * @api public
     */
    isEqualTo(vec2)
    {
        return this.x === vec2.x && this.y === vec2.y;
    }


    /**
     * # Utility Methods
     */

    /**
     * Returns an string representation of the vector
     *
     * ### Examples:
     *     var vec = new Vector(10, 20);
     *
     *     vec.toString();
     *     // => x:10, y:20
     *
     * @return {String}
     * @api public
     */
    toString()
    {
        return 'x:' + this.x + ', y:' + this.y;
    }


    /**
     * Returns an array representation of the vector
     *
     * ### Examples:
     *     var vec = new Vector(10, 20);
     *
     *     vec.toArray();
     *     // => [10, 20]
     *
     * @return {Array}
     * @api public
     */
    toArray()
    {
        return [ this.x, this.y ];
    }


    /**
     * Returns an object representation of the vector
     *
     * ### Examples:
     *     var vec = new Vector(10, 20);
     *
     *     vec.toObject();
     *     // => { x: 10, y: 20 }
     *
     * @return {Object}
     * @api public
     */
    toObject()
    {
        return { x: this.x, y: this.y };
    }
}