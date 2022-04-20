import { Vec2 } from '../vec2';

it('should create a new Vec2', () => {
    const v = new Vec2(1, 2);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
});

it('should create a new Vec2 from an array', () => {
    const v = Vec2.fromArray([1, 2]);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
});

it('should create a new Vec2 from an object', () => {
    const v = Vec2.fromObject({ x: 1, y: 2 });
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
});

it('should create a new Vec2 from an angle', () => {
    const v = Vec2.fromAngle(Math.PI / 2);
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(1);

    const v2 = Vec2.fromAngle(Math.PI);
    expect(v2.x).toBeCloseTo(-1);
    expect(v2.y).toBeCloseTo(0);

    const v3 = Vec2.fromAngle((Math.PI * 3) / 2);
    expect(v3.x).toBeCloseTo(0);
    expect(v3.y).toBeCloseTo(-1);
});

it('should create a new Vec2 from polar coordinates', () => {
    const v = Vec2.fromPolar(1, Math.PI / 2);
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(1);

    const v2 = Vec2.fromPolar(2, Math.PI);
    expect(v2.x).toBeCloseTo(-2);
    expect(v2.y).toBeCloseTo(0);

    const v3 = Vec2.fromPolar(3, (Math.PI * 3) / 2);
    expect(v3.x).toBeCloseTo(0);
    expect(v3.y).toBeCloseTo(-3);
});

it('should create a new Vec2 from a random vector', () => {
    const v = Vec2.random();
    expect(v.x).toBeGreaterThanOrEqual(-1);
    expect(v.x).toBeLessThanOrEqual(1);
    expect(v.y).toBeGreaterThanOrEqual(-1);
    expect(v.y).toBeLessThanOrEqual(1);
});

it('should create a new Vec2 from zero', () => {
    const v = Vec2.zero();
    expect(v.x).toBe(0);
    expect(v.y).toBe(0);
});

it('should add two vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = v1.add(v2);
    expect(v3.x).toBe(4);
    expect(v3.y).toBe(6);
});

it('should add a vector and a scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = v1.addScalar(3);
    expect(v2.x).toBe(4);
    expect(v2.y).toBe(5);
});

it('should return a new vector equal to a + b', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = Vec2.add(v1, v2);
    expect(v3.x).toBe(4);
    expect(v3.y).toBe(6);
});

it('should return a new vector equal to a + scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = Vec2.addScalar(v1, 3);
    expect(v2.x).toBe(4);
    expect(v2.y).toBe(5);
});

it('should subtract two vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = v1.subtract(v2);
    expect(v3.x).toBe(-2);
    expect(v3.y).toBe(-2);
});

it('should subtract a vector and a scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = v1.subtractScalar(3);
    expect(v2.x).toBe(-2);
    expect(v2.y).toBe(-1);
});

it('should return a new vector equal to a - b', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = Vec2.subtract(v1, v2);
    expect(v3.x).toBe(-2);
    expect(v3.y).toBe(-2);
});

it('should return a new vector equal to a - scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = Vec2.subtractScalar(v1, 3);
    expect(v2.x).toBe(-2);
    expect(v2.y).toBe(-1);
});

it('should multiply two vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = v1.multiply(v2);
    expect(v3.x).toBe(3);
    expect(v3.y).toBe(8);
});

it('should multiply a vector and a scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = v1.multiplyScalar(3);
    expect(v2.x).toBe(3);
    expect(v2.y).toBe(6);
});

it('should return a new vector equal to a * b', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = Vec2.multiply(v1, v2);
    expect(v3.x).toBe(3);
    expect(v3.y).toBe(8);
});

it('should return a new vector equal to a * scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = Vec2.multiplyScalar(v1, 3);
    expect(v2.x).toBe(3);
    expect(v2.y).toBe(6);
});

it('should divide two vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = v1.divide(v2);
    expect(v3.x).toBeCloseTo(1 / 3);
    expect(v3.y).toBeCloseTo(2 / 4);
});

it('should divide a vector and a scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = v1.divideScalar(3);
    expect(v2.x).toBeCloseTo(1 / 3);
    expect(v2.y).toBeCloseTo(2 / 3);
});

it('should return a new vector equal to a / b', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = Vec2.divide(v1, v2);
    expect(v3.x).toBeCloseTo(1 / 3);
    expect(v3.y).toBeCloseTo(2 / 4);
});

it('should return a new vector equal a / scalar', () => {
    const v1 = new Vec2(1, 2);
    const v2 = Vec2.divideScalar(v1, 3);
    expect(v2.x).toBeCloseTo(1 / 3);
    expect(v2.y).toBeCloseTo(2 / 3);
});

it('should return the dot product of two vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = v1.dot(v2);
    expect(v3).toBe(11);
});

it('should return the width and height of the vector', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.width).toBe(1);
    expect(v1.height).toBe(2);
});

it('should be able to set the width and height of the vector', () => {
    const v1 = new Vec2(1, 2);

    v1.width = 3;
    v1.height = 4;

    expect(v1.x).toBe(3);
    expect(v1.y).toBe(4);
});

it('should return the vector normalized', () => {
    const v1 = new Vec2(1, 2);
    const v2 = v1.normalize();
    expect(v2.x).toBeCloseTo(1 / Math.sqrt(5));
    expect(v2.y).toBeCloseTo(2 / Math.sqrt(5));
});

it('should return a vector equal to the input normalized', () => {
    const v1 = new Vec2(1, 2);
    const v2 = Vec2.normalize(v1);
    expect(v2.x).toBeCloseTo(1 / Math.sqrt(5));
    expect(v2.y).toBeCloseTo(2 / Math.sqrt(5));
});

it('should return the angle of the vector', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.angle()).toBeCloseTo(Math.atan2(2, 1));
});

it('should return the angle to another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    expect(v1.angleTo(v2)).toBeCloseTo(Math.atan2(2, 2));
});

it('should set the angle of the vector', () => {
    const v1 = new Vec2(1, 2);
    v1.setAngle(Math.PI / 2);
    expect(v1.x).toBeCloseTo(0);
    expect(v1.y).toBeCloseTo(Math.sqrt(5));
});

it('should return the magnitude of the vector', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.magnitude()).toBeCloseTo(Math.sqrt(5));
});

it('should return the squared magnitude of the vector', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.magnitudeSq()).toBe(5);
});

it('should set the magnitude of the vector', () => {
    const v1 = new Vec2(1, 2);
    v1.setMagnitude(3);
    expect(v1.x).toBeCloseTo((1 / Math.sqrt(5)) * 3);
    expect(v1.y).toBeCloseTo((2 / Math.sqrt(5)) * 3);
});

it('should set the x and y components of the vector', () => {
    const v1 = new Vec2(1, 2);
    v1.set(3, 4);
    expect(v1.x).toBe(3);
    expect(v1.y).toBe(4);
});

it('should set the x and y components of the vector from another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    v1.setFrom(v2);
    expect(v1.x).toBe(3);
    expect(v1.y).toBe(4);
});

it('should set the x and y components of the vector from an array', () => {
    const v1 = new Vec2(1, 2);
    v1.setFromArray([3, 4]);
    expect(v1.x).toBe(3);
    expect(v1.y).toBe(4);
});

it('should set the x and y components of the vector from an object', () => {
    const v1 = new Vec2(1, 2);
    v1.setFromObject({ x: 3, y: 4 });
    expect(v1.x).toBe(3);
    expect(v1.y).toBe(4);
});

it('should set the x and y components of the vector from an angle', () => {
    const v1 = new Vec2(1, 2);
    v1.setFromAngle(Math.PI / 2);
    expect(v1.x).toBeCloseTo(0);
    expect(v1.y).toBeCloseTo(1);
});

it('should set the x and y components of the vector from polar coordinates', () => {
    const v1 = new Vec2(1, 2);
    v1.setFromPolar(3, Math.PI / 2);
    expect(v1.x).toBeCloseTo(0);
    expect(v1.y).toBeCloseTo(3);
});

it('should randomize the vector', () => {
    const v1 = new Vec2(1, 2);
    v1.randomize();
    expect(v1.x).toBeGreaterThanOrEqual(-1);
    expect(v1.x).toBeLessThanOrEqual(1);
    expect(v1.y).toBeGreaterThanOrEqual(-1);
    expect(v1.y).toBeLessThanOrEqual(1);
});

it('should set the vector to zero', () => {
    const v1 = new Vec2(1, 2);
    v1.zero();
    expect(v1.x).toBe(0);
    expect(v1.y).toBe(0);
});

it('should clone the vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = v1.clone();
    expect(v2.x).toBe(1);
    expect(v2.y).toBe(2);
    expect(v2).not.toBe(v1);
});

it('should return the vector as an array', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.toArray()).toEqual([1, 2]);
});

it('should return the vector as an object', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.toObject()).toEqual({ x: 1, y: 2 });
});

it('should return the vector as a string', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.toString()).toBe('Vec2(1, 2)');
});

it('should be able to iterate through the vector', () => {
    const v1 = new Vec2(1, 2);
    expect([...v1]).toEqual([1, 2]);
});

it('should be able to clamp the vector between two other vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = new Vec2(5, 6);
    v1.clamp(v2, v3);
    expect(v1.x).toBe(3);
    expect(v1.y).toBe(4);
});

it('should return a vector clamped between two other vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = new Vec2(5, 6);
    const v4 = Vec2.clamp(v1, v2, v3);
    expect(v4.x).toBe(3);
    expect(v4.y).toBe(4);
});

it('should be able to clamp the vector between two numbers', () => {
    const v1 = new Vec2(1, 2);
    v1.clampScalar(3, 4);
    expect(v1.x).toBe(3);
    expect(v1.y).toBe(3);
});

it('should return a vector clamped between two numbers', () => {
    const v1 = new Vec2(1, 2);
    const v2 = Vec2.clampScalar(v1, 3, 4);
    expect(v2.x).toBe(3);
    expect(v2.y).toBe(3);
});

it('should be able to clame the magnitude of the vector between two numbers', () => {
    const v1 = new Vec2(1, 2);
    v1.clampMagnitude(3, 4);
    expect(v1.magnitude()).toBeCloseTo(3);
});

it('should be able to lerp the vector to another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    v1.lerp(v2, 0.5);
    expect(v1.x).toBe(2);
    expect(v1.y).toBe(3);
});

it('should return a vector lerped between two other vectors', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    const v3 = Vec2.lerp(v1, v2, 0.5);
    expect(v3.x).toBe(2);
    expect(v3.y).toBe(3);
});

it('should be able to check equality with another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(1, 2);
    expect(v1.equals(v2)).toBe(true);

    const v3 = new Vec2(1, 2);
    const v4 = new Vec2(2, 2);
    expect(v3.equals(v4)).toBe(false);
});

it('should be able to check if a vector is close to another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(1.001, 2);
    expect(v1.closeTo(v2, 0.1)).toBe(true);

    const v3 = new Vec2(1, 2);
    const v4 = new Vec2(1.2, 2);
    expect(v3.closeTo(v4, 0.1)).toBe(false);
});

it('should be able to get the distance to another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    expect(v1.distanceTo(v2)).toBeCloseTo(2.8284271247461903);
});

it('should be able to get the squared distance to another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    expect(v1.distanceToSq(v2)).toBe(8);
});

it('should be able to get the manhattan distance of the vector', () => {
    const v1 = new Vec2(1, 2);
    expect(v1.manhattan()).toBe(3);
});

it('should be able to get the manhattan distance to another vector', () => {
    const v1 = new Vec2(1, 2);
    const v2 = new Vec2(3, 4);
    expect(v1.manhattanDistanceTo(v2)).toBe(4);
});

it('should round the vector to the nearest integer', () => {
    const v1 = new Vec2(1.1, 2.2);
    v1.round();
    expect(v1.x).toBe(1);
    expect(v1.y).toBe(2);
});

it('should return a rounded vector', () => {
    const v1 = new Vec2(1.1, 2.2);
    const v2 = Vec2.round(v1);
    expect(v2.x).toBe(1);
    expect(v2.y).toBe(2);
});

it('should freeze the vector', () => {
    const v1 = new Vec2(1, 2);
    expect(Object.isFrozen(v1)).toBe(false);
    v1.freeze();
    expect(Object.isFrozen(v1)).toBe(true);
});
