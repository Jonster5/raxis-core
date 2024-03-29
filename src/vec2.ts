export class Vec2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static from(v: Vec2): Vec2 {
        return new Vec2(v.x, v.y);
    }

    static fromArray(a: number[]): Vec2 {
        return new Vec2(a[0], a[1]);
    }

    static fromObject(o: { x: number; y: number }): Vec2 {
        return new Vec2(o.x, o.y);
    }

    static fromAngle(angle: number): Vec2 {
        return new Vec2(
            Math.cos(angle % (2 * Math.PI)),
            Math.sin(angle % (2 * Math.PI)),
        );
    }

    static fromPolar(r: number, angle: number): Vec2 {
        return new Vec2(
            r * Math.cos(angle % (2 * Math.PI)),
            r * Math.sin(angle % (2 * Math.PI)),
        );
    }

    static random(): Vec2 {
        return new Vec2(Math.random() * 2 - 1, Math.random() * 2 - 1);
    }

    static zero(): Vec2 {
        return new Vec2(0, 0);
    }

    add(v: Vec2): Vec2 {
        this.x += v.x;
        this.y += v.y;

        return this;
    }

    addScalar(s: number): Vec2 {
        this.x += s;
        this.y += s;

        return this;
    }

    static add(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x + b.x, a.y + b.y);
    }

    static addScalar(a: Vec2, s: number): Vec2 {
        return new Vec2(a.x + s, a.y + s);
    }

    sub(v: Vec2): Vec2 {
        this.x -= v.x;
        this.y -= v.y;

        return this;
    }

    subScalar(s: number): Vec2 {
        this.x -= s;
        this.y -= s;

        return this;
    }

    static sub(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x - b.x, a.y - b.y);
    }

    static subScalar(a: Vec2, s: number): Vec2 {
        return new Vec2(a.x - s, a.y - s);
    }

    mul(v: Vec2): Vec2 {
        this.x *= v.x;
        this.y *= v.y;

        return this;
    }

    mulScalar(s: number): Vec2 {
        this.x *= s;
        this.y *= s;

        return this;
    }

    static mul(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x * b.x, a.y * b.y);
    }

    static mulScalar(a: Vec2, s: number): Vec2 {
        return new Vec2(a.x * s, a.y * s);
    }

    div(v: Vec2): Vec2 {
        this.x /= v.x;
        this.y /= v.y;

        return this;
    }

    divScalar(s: number): Vec2 {
        this.x /= s;
        this.y /= s;

        return this;
    }

    static div(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x / b.x, a.y / b.y);
    }

    static divScalar(a: Vec2, s: number): Vec2 {
        return new Vec2(a.x / s, a.y / s);
    }

    dot(v: Vec2): number {
        return this.x * v.x + this.y * v.y;
    }

    get width(): number {
        return this.x;
    }

    set width(w: number) {
        this.x = w;
    }

    get height(): number {
        return this.y;
    }

    set height(h: number) {
        this.y = h;
    }

    normalize(): Vec2 {
        const m = this.mag();

        if (m > 0) {
            this.x /= m;
            this.y /= m;
        }

        return this;
    }

    static normalize(v: Vec2): Vec2 {
        const m = v.mag();

        if (m > 0) {
            return new Vec2(v.x / m, v.y / m);
        }

        return new Vec2(0, 0);
    }

    angle(): number {
        return Math.atan2(this.y, this.x);
    }

    angleTo(v: Vec2): number {
        return Math.atan2(v.y - this.y, v.x - this.x);
    }

    setAngle(angle: number): Vec2 {
        const m = this.mag();

        this.x = m * Math.cos(angle);
        this.y = m * Math.sin(angle);

        return this;
    }

    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    magSq(): number {
        return this.x * this.x + this.y * this.y;
    }

    setMag(m: number): Vec2 {
        const m2 = this.mag();

        if (m2 > 0) {
            this.x *= m / m2;
            this.y *= m / m2;
        }

        return this;
    }

    set(x: number, y: number): Vec2 {
        this.x = x;
        this.y = y;

        return this;
    }

    setFrom(v: Vec2): Vec2 {
        this.x = v.x;
        this.y = v.y;

        return this;
    }

    setFromArray(a: number[]): Vec2 {
        this.x = a[0];
        this.y = a[1];

        return this;
    }

    setFromObject(o: { x: number; y: number }): Vec2 {
        this.x = o.x;
        this.y = o.y;

        return this;
    }

    setFromAngle(angle: number): Vec2 {
        this.x = Math.cos(angle % (2 * Math.PI));
        this.y = Math.sin(angle % (2 * Math.PI));

        return this;
    }

    setFromPolar(r: number, angle: number): Vec2 {
        this.x = r * Math.cos(angle % (2 * Math.PI));
        this.y = r * Math.sin(angle % (2 * Math.PI));

        return this;
    }

    random(): Vec2 {
        this.x = Math.random() * 2 - 1;
        this.y = Math.random() * 2 - 1;

        return this;
    }

    zero(): Vec2 {
        this.x = 0;
        this.y = 0;

        return this;
    }

    clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    toArray(): [number, number] {
        return [this.x, this.y];
    }

    toObject(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    toString(): string {
        return `Vec2(${this.x}, ${this.y})`;
    }

    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }

    clamp(min: Vec2, max: Vec2): Vec2 {
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));

        return this;
    }

    static clamp(v: Vec2, min: Vec2, max: Vec2): Vec2 {
        return new Vec2(
            Math.max(min.x, Math.min(max.x, v.x)),
            Math.max(min.y, Math.min(max.y, v.y)),
        );
    }

    clampScalar(min: number, max: number): Vec2 {
        this.x = Math.max(min, Math.min(max, this.x));
        this.y = Math.max(min, Math.min(max, this.y));

        return this;
    }

    static clampScalar(v: Vec2, min: number, max: number): Vec2 {
        return new Vec2(
            Math.max(min, Math.min(max, v.x)),
            Math.max(min, Math.min(max, v.y)),
        );
    }

    clampMag(min: number, max: number): Vec2 {
        const m = this.mag();

        if (m > max) {
            this.setMag(max);
        } else if (m < min) {
            this.setMag(min);
        }

        return this;
    }

    static clampMag(v: Vec2, min: number, max: number): Vec2 {
        const m = v.mag();

        if (m > max) {
            return new Vec2((v.x * max) / m, (v.y * max) / m);
        } else if (m < min) {
            return new Vec2((v.x * min) / m, (v.y * min) / m);
        }

        return v;
    }

    lerp(v: Vec2, t: number): Vec2 {
        this.x += (v.x - this.x) * t;
        this.y += (v.y - this.y) * t;

        return this;
    }

    static lerp(a: Vec2, b: Vec2, t: number): Vec2 {
        return new Vec2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    }

    equals(v: Vec2): boolean {
        return this.x === v.x && this.y === v.y;
    }

    closeTo(v: Vec2, epsilon: number): boolean {
        return (
            Math.abs(this.x - v.x) <= epsilon &&
            Math.abs(this.y - v.y) <= epsilon
        );
    }

    distanceTo(v: Vec2): number {
        const dx = this.x - v.x;
        const dy = this.y - v.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    distanceToSq(v: Vec2): number {
        const dx = this.x - v.x;
        const dy = this.y - v.y;

        return dx * dx + dy * dy;
    }

    manhattan(): number {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    manhattanDistanceTo(v: Vec2): number {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }

    round(): Vec2 {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);

        return this;
    }

    static round(v: Vec2): Vec2 {
        return new Vec2(Math.round(v.x), Math.round(v.y));
    }

    floor(): Vec2 {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);

        return this;
    }

    static floor(v: Vec2): Vec2 {
        return new Vec2(Math.floor(v.x), Math.floor(v.y));
    }

    ceil(): Vec2 {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);

        return this;
    }

    static ceil(v: Vec2): Vec2 {
        return new Vec2(Math.ceil(v.x), Math.ceil(v.y));
    }

    roundToZero(): Vec2 {
        this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);

        return this;
    }

    static roundToZero(v: Vec2): Vec2 {
        return new Vec2(
            v.x < 0 ? Math.ceil(v.x) : Math.floor(v.x),
            v.y < 0 ? Math.ceil(v.y) : Math.floor(v.y),
        );
    }

    min(v: Vec2): Vec2 {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);

        return this;
    }

    static min(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(Math.min(a.x, b.x), Math.min(a.y, b.y));
    }

    max(v: Vec2): Vec2 {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);

        return this;
    }

    static max(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(Math.max(a.x, b.x), Math.max(a.y, b.y));
    }

    map(fn: (v: number) => number): Vec2 {
        this.x = fn(this.x);
        this.y = fn(this.y);

        return this;
    }

    static map(v: Vec2, fn: (v: number) => number): Vec2 {
        return new Vec2(fn(v.x), fn(v.y));
    }

    freeze(): Vec2 {
        Object.freeze(this);

        return this;
    }
}
