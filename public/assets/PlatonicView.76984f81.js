var Ba = Object.defineProperty;
var Ga = (s, e, t) =>
  e in s
    ? Ba(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var rt = (s, e, t) => (Ga(s, typeof e != "symbol" ? e + "" : e, t), t);
import {
  d as ia,
  o as Va,
  a as ka,
  b as ra,
  c as sa,
  e as Oi,
  w as Br,
  u as Gr,
  N as Ha,
  F as Wa,
  p as qa,
  f as Xa,
  g as ja,
  h as Ya,
} from "./index.1dccae8c.js";
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Tr = "141",
  Za = 0,
  Vr = 1,
  $a = 2,
  aa = 1,
  Ja = 2,
  $n = 3,
  Kn = 0,
  gt = 1,
  Nn = 2,
  Ka = 1,
  Zt = 0,
  In = 1,
  kr = 2,
  Hr = 3,
  Wr = 4,
  Qa = 5,
  Rn = 100,
  eo = 101,
  to = 102,
  qr = 103,
  Xr = 104,
  no = 200,
  io = 201,
  ro = 202,
  so = 203,
  oa = 204,
  la = 205,
  ao = 206,
  oo = 207,
  lo = 208,
  co = 209,
  ho = 210,
  uo = 0,
  fo = 1,
  po = 2,
  xr = 3,
  mo = 4,
  go = 5,
  _o = 6,
  xo = 7,
  Ri = 0,
  vo = 1,
  Mo = 2,
  Bt = 0,
  yo = 1,
  So = 2,
  bo = 3,
  wo = 4,
  Eo = 5,
  ca = 300,
  zn = 301,
  Un = 302,
  vr = 303,
  Mr = 304,
  Pi = 306,
  yr = 1e3,
  pt = 1001,
  Sr = 1002,
  et = 1003,
  jr = 1004,
  Yr = 1005,
  lt = 1006,
  To = 1007,
  Ii = 1008,
  un = 1009,
  Ao = 1010,
  Co = 1011,
  ha = 1012,
  Lo = 1013,
  an = 1014,
  on = 1015,
  Qn = 1016,
  Do = 1017,
  Ro = 1018,
  Fn = 1020,
  Po = 1021,
  Io = 1022,
  mt = 1023,
  Fo = 1024,
  No = 1025,
  cn = 1026,
  On = 1027,
  zo = 1028,
  Uo = 1029,
  Oo = 1030,
  Bo = 1031,
  Go = 1033,
  Bi = 33776,
  Gi = 33777,
  Vi = 33778,
  ki = 33779,
  Zr = 35840,
  $r = 35841,
  Jr = 35842,
  Kr = 35843,
  Vo = 36196,
  Qr = 37492,
  es = 37496,
  ts = 37808,
  ns = 37809,
  is = 37810,
  rs = 37811,
  ss = 37812,
  as = 37813,
  os = 37814,
  ls = 37815,
  cs = 37816,
  hs = 37817,
  us = 37818,
  ds = 37819,
  fs = 37820,
  ps = 37821,
  ms = 36492,
  dn = 3e3,
  ze = 3001,
  ko = 3200,
  Ho = 3201,
  Gn = 0,
  Wo = 1,
  Ut = "srgb",
  ln = "srgb-linear",
  Hi = 7680,
  qo = 519,
  gs = 35044,
  _s = "300 es",
  br = 1035;
class Vn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const We = [];
for (let s = 0; s < 256; s++) We[s] = (s < 16 ? "0" : "") + s.toString(16);
const Wi = Math.PI / 180,
  xs = 180 / Math.PI;
function ei() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    We[s & 255] +
    We[(s >> 8) & 255] +
    We[(s >> 16) & 255] +
    We[(s >> 24) & 255] +
    "-" +
    We[e & 255] +
    We[(e >> 8) & 255] +
    "-" +
    We[((e >> 16) & 15) | 64] +
    We[(e >> 24) & 255] +
    "-" +
    We[(t & 63) | 128] +
    We[(t >> 8) & 255] +
    "-" +
    We[(t >> 16) & 255] +
    We[(t >> 24) & 255] +
    We[n & 255] +
    We[(n >> 8) & 255] +
    We[(n >> 16) & 255] +
    We[(n >> 24) & 255]
  ).toLowerCase();
}
function tt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Xo(s, e) {
  return ((s % e) + e) % e;
}
function qi(s, e, t) {
  return (1 - t) * s + t * e;
}
function vs(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function wr(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
class Ee {
  constructor(e = 0, t = 0) {
    (this.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      o = this.y - e.y;
    return (this.x = r * n - o * i + e.x), (this.y = r * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class At {
  constructor() {
    (this.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, r, o, a, c, l) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = a),
      (h[3] = t),
      (h[4] = r),
      (h[5] = c),
      (h[6] = n),
      (h[7] = o),
      (h[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      o = n[0],
      a = n[3],
      c = n[6],
      l = n[1],
      h = n[4],
      d = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      p = i[0],
      u = i[3],
      v = i[6],
      b = i[1],
      T = i[4],
      y = i[7],
      E = i[2],
      C = i[5],
      R = i[8];
    return (
      (r[0] = o * p + a * b + c * E),
      (r[3] = o * u + a * T + c * C),
      (r[6] = o * v + a * y + c * R),
      (r[1] = l * p + h * b + d * E),
      (r[4] = l * u + h * T + d * C),
      (r[7] = l * v + h * y + d * R),
      (r[2] = f * p + m * b + g * E),
      (r[5] = f * u + m * T + g * C),
      (r[8] = f * v + m * y + g * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      c = e[6],
      l = e[7],
      h = e[8];
    return (
      t * o * h - t * a * l - n * r * h + n * a * c + i * r * l - i * o * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      d = h * o - a * l,
      f = a * c - h * r,
      m = l * r - o * c,
      g = t * d + n * f + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return (
      (e[0] = d * p),
      (e[1] = (i * l - h * n) * p),
      (e[2] = (a * n - i * o) * p),
      (e[3] = f * p),
      (e[4] = (h * t - i * c) * p),
      (e[5] = (i * r - a * t) * p),
      (e[6] = m * p),
      (e[7] = (n * c - l * t) * p),
      (e[8] = (o * t - n * r) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * o + l * a) + o + e,
        -i * l,
        i * c,
        -i * (-l * o + c * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      r = i[0],
      o = i[3],
      a = i[6],
      c = i[1],
      l = i[4],
      h = i[7];
    return (
      (i[0] = t * r + n * c),
      (i[3] = t * o + n * l),
      (i[6] = t * a + n * h),
      (i[1] = -n * r + t * c),
      (i[4] = -n * o + t * l),
      (i[7] = -n * a + t * h),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function ua(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] > 65535) return !0;
  return !1;
}
function Di(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function hn(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ci(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Xi = { [Ut]: { [ln]: hn }, [ln]: { [Ut]: Ci } },
  ht = {
    legacyMode: !0,
    get workingColorSpace() {
      return ln;
    },
    set workingColorSpace(s) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (s, e, t) {
      if (this.legacyMode || e === t || !e || !t) return s;
      if (Xi[e] && Xi[e][t] !== void 0) {
        const n = Xi[e][t];
        return (s.r = n(s.r)), (s.g = n(s.g)), (s.b = n(s.b)), s;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this.workingColorSpace);
    },
  },
  da = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Ge = { r: 0, g: 0, b: 0 },
  ut = { h: 0, s: 0, l: 0 },
  oi = { h: 0, s: 0, l: 0 };
function ji(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
function li(s, e) {
  return (e.r = s.r), (e.g = s.g), (e.b = s.b), e;
}
class ge {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ut) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      ht.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = ln) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      ht.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = ln) {
    if (((e = Xo(e, 1)), (t = tt(t, 0, 1)), (n = tt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - r;
      (this.r = ji(o, r, e + 1 / 3)),
        (this.g = ji(o, r, e)),
        (this.b = ji(o, r, e - 1 / 3));
    }
    return ht.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ut) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let r;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              ht.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              ht.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const c = parseFloat(r[1]) / 360,
              l = parseInt(r[2], 10) / 100,
              h = parseInt(r[3], 10) / 100;
            return n(r[4]), this.setHSL(c, l, h, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        o = r.length;
      if (o === 3)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255),
          (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255),
          (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255),
          ht.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255),
          (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255),
          (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255),
          ht.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ut) {
    const n = da[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = hn(e.r)), (this.g = hn(e.g)), (this.b = hn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Ci(e.r)), (this.g = Ci(e.g)), (this.b = Ci(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ut) {
    return (
      ht.fromWorkingColorSpace(li(this, Ge), e),
      (tt(Ge.r * 255, 0, 255) << 16) ^
        (tt(Ge.g * 255, 0, 255) << 8) ^
        (tt(Ge.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ln) {
    ht.fromWorkingColorSpace(li(this, Ge), t);
    const n = Ge.r,
      i = Ge.g,
      r = Ge.b,
      o = Math.max(n, i, r),
      a = Math.min(n, i, r);
    let c, l;
    const h = (a + o) / 2;
    if (a === o) (c = 0), (l = 0);
    else {
      const d = o - a;
      switch (((l = h <= 0.5 ? d / (o + a) : d / (2 - o - a)), o)) {
        case n:
          c = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - i) / d + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = h), e;
  }
  getRGB(e, t = ln) {
    return (
      ht.fromWorkingColorSpace(li(this, Ge), t),
      (e.r = Ge.r),
      (e.g = Ge.g),
      (e.b = Ge.b),
      e
    );
  }
  getStyle(e = Ut) {
    return (
      ht.fromWorkingColorSpace(li(this, Ge), e),
      e !== Ut
        ? `color(${e} ${Ge.r} ${Ge.g} ${Ge.b})`
        : `rgb(${(Ge.r * 255) | 0},${(Ge.g * 255) | 0},${(Ge.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(ut),
      (ut.h += e),
      (ut.s += t),
      (ut.l += n),
      this.setHSL(ut.h, ut.s, ut.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(ut), e.getHSL(oi);
    const n = qi(ut.h, oi.h, t),
      i = qi(ut.s, oi.s, t),
      r = qi(ut.l, oi.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      e.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
ge.NAMES = da;
let _n;
class fa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      _n === void 0 && (_n = Di("canvas")),
        (_n.width = e.width),
        (_n.height = e.height);
      const n = _n.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = _n);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement != "undefined" &&
        e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement != "undefined" &&
        e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap != "undefined" && e instanceof ImageBitmap)
    ) {
      const t = Di("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = hn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(hn(t[n] / 255) * 255))
          : (t[n] = hn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class pa {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = ei()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(Yi(i[o].image)) : r.push(Yi(i[o]));
      } else r = Yi(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Yi(s) {
  return (typeof HTMLImageElement != "undefined" &&
    s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement != "undefined" &&
      s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap != "undefined" && s instanceof ImageBitmap)
    ? fa.getDataURL(s)
    : s.data
    ? {
        data: Array.prototype.slice.call(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let jo = 0;
class _t extends Vn {
  constructor(
    e = _t.DEFAULT_IMAGE,
    t = _t.DEFAULT_MAPPING,
    n = pt,
    i = pt,
    r = lt,
    o = Ii,
    a = mt,
    c = un,
    l = 1,
    h = dn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: jo++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.source = new pa(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = o),
      (this.anisotropy = l),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Ee(0, 0)),
      (this.repeat = new Ee(1, 1)),
      (this.center = new Ee(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new At()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ca) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case yr:
          e.x = e.x - Math.floor(e.x);
          break;
        case pt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Sr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case yr:
          e.y = e.y - Math.floor(e.y);
          break;
        case pt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Sr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = ca;
class qe {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements,
      l = c[0],
      h = c[4],
      d = c[8],
      f = c[1],
      m = c[5],
      g = c[9],
      p = c[2],
      u = c[6],
      v = c[10];
    if (
      Math.abs(h - f) < 0.01 &&
      Math.abs(d - p) < 0.01 &&
      Math.abs(g - u) < 0.01
    ) {
      if (
        Math.abs(h + f) < 0.1 &&
        Math.abs(d + p) < 0.1 &&
        Math.abs(g + u) < 0.1 &&
        Math.abs(l + m + v - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (l + 1) / 2,
        y = (m + 1) / 2,
        E = (v + 1) / 2,
        C = (h + f) / 4,
        R = (d + p) / 4,
        x = (g + u) / 4;
      return (
        T > y && T > E
          ? T < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(T)), (i = C / n), (r = R / n))
          : y > E
          ? y < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(y)), (n = C / i), (r = x / i))
          : E < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(E)), (n = R / r), (i = x / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let b = Math.sqrt(
      (u - g) * (u - g) + (d - p) * (d - p) + (f - h) * (f - h)
    );
    return (
      Math.abs(b) < 0.001 && (b = 1),
      (this.x = (u - g) / b),
      (this.y = (d - p) / b),
      (this.z = (f - h) / b),
      (this.w = Math.acos((l + m + v - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class $t extends Vn {
  constructor(e, t, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new qe(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new qe(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new _t(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : lt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new pa(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ma extends _t {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = et),
      (this.minFilter = et),
      (this.wrapR = pt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Yo extends _t {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = et),
      (this.minFilter = et),
      (this.wrapR = pt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class ti {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerp(e, t, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      n.slerpQuaternions(e, t, i)
    );
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let c = n[i + 0],
      l = n[i + 1],
      h = n[i + 2],
      d = n[i + 3];
    const f = r[o + 0],
      m = r[o + 1],
      g = r[o + 2],
      p = r[o + 3];
    if (a === 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = d);
      return;
    }
    if (a === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = p);
      return;
    }
    if (d !== p || c !== f || l !== m || h !== g) {
      let u = 1 - a;
      const v = c * f + l * m + h * g + d * p,
        b = v >= 0 ? 1 : -1,
        T = 1 - v * v;
      if (T > Number.EPSILON) {
        const E = Math.sqrt(T),
          C = Math.atan2(E, v * b);
        (u = Math.sin(u * C) / E), (a = Math.sin(a * C) / E);
      }
      const y = a * b;
      if (
        ((c = c * u + f * y),
        (l = l * u + m * y),
        (h = h * u + g * y),
        (d = d * u + p * y),
        u === 1 - a)
      ) {
        const E = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        (c *= E), (l *= E), (h *= E), (d *= E);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i],
      c = n[i + 1],
      l = n[i + 2],
      h = n[i + 3],
      d = r[o],
      f = r[o + 1],
      m = r[o + 2],
      g = r[o + 3];
    return (
      (e[t] = a * g + h * d + c * m - l * f),
      (e[t + 1] = c * g + h * f + l * d - a * m),
      (e[t + 2] = l * g + h * m + a * f - c * d),
      (e[t + 3] = h * g - a * d - c * f - l * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const n = e._x,
      i = e._y,
      r = e._z,
      o = e._order,
      a = Math.cos,
      c = Math.sin,
      l = a(n / 2),
      h = a(i / 2),
      d = a(r / 2),
      f = c(n / 2),
      m = c(i / 2),
      g = c(r / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * h * d + l * m * g),
          (this._y = l * m * d - f * h * g),
          (this._z = l * h * g + f * m * d),
          (this._w = l * h * d - f * m * g);
        break;
      case "YXZ":
        (this._x = f * h * d + l * m * g),
          (this._y = l * m * d - f * h * g),
          (this._z = l * h * g - f * m * d),
          (this._w = l * h * d + f * m * g);
        break;
      case "ZXY":
        (this._x = f * h * d - l * m * g),
          (this._y = l * m * d + f * h * g),
          (this._z = l * h * g + f * m * d),
          (this._w = l * h * d - f * m * g);
        break;
      case "ZYX":
        (this._x = f * h * d - l * m * g),
          (this._y = l * m * d + f * h * g),
          (this._z = l * h * g - f * m * d),
          (this._w = l * h * d + f * m * g);
        break;
      case "YZX":
        (this._x = f * h * d + l * m * g),
          (this._y = l * m * d + f * h * g),
          (this._z = l * h * g - f * m * d),
          (this._w = l * h * d - f * m * g);
        break;
      case "XZY":
        (this._x = f * h * d - l * m * g),
          (this._y = l * m * d - f * h * g),
          (this._z = l * h * g + f * m * d),
          (this._w = l * h * d + f * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      o = t[1],
      a = t[5],
      c = t[9],
      l = t[2],
      h = t[6],
      d = t[10],
      f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m),
        (this._x = (h - c) * m),
        (this._y = (r - l) * m),
        (this._z = (o - i) * m);
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      (this._w = (h - c) / m),
        (this._x = 0.25 * m),
        (this._y = (i + o) / m),
        (this._z = (r + l) / m);
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      (this._w = (r - l) / m),
        (this._x = (i + o) / m),
        (this._y = 0.25 * m),
        (this._z = (c + h) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      (this._w = (o - i) / m),
        (this._x = (r + l) / m),
        (this._y = (c + h) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(tt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      o = e._w,
      a = t._x,
      c = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = n * h + o * a + i * l - r * c),
      (this._y = i * h + o * c + r * a - n * l),
      (this._z = r * h + o * l + n * c - i * a),
      (this._w = o * h - n * a - i * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = r), this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(c),
      h = Math.atan2(l, a),
      d = Math.sin((1 - t) * h) / l,
      f = Math.sin(t * h) / l;
    return (
      (this._w = o * d + this._w * f),
      (this._x = n * d + this._x * f),
      (this._y = i * d + this._y * f),
      (this._z = r * d + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    (this.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(Ms.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ms.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      o = e.y,
      a = e.z,
      c = e.w,
      l = c * t + o * i - a * n,
      h = c * n + a * t - r * i,
      d = c * i + r * n - o * t,
      f = -r * t - o * n - a * i;
    return (
      (this.x = l * c + f * -r + h * -a - d * -o),
      (this.y = h * c + f * -o + d * -r - l * -a),
      (this.z = d * c + f * -a + l * -o - h * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      o = t.x,
      a = t.y,
      c = t.z;
    return (
      (this.x = i * c - r * a),
      (this.y = r * o - n * c),
      (this.z = n * a - i * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Zi.copy(this).projectOnVector(e), this.sub(Zi);
  }
  reflect(e) {
    return this.sub(Zi.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(tt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Zi = new L(),
  Ms = new ti();
class ni {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c],
        d = e[c + 1],
        f = e[c + 2];
      h < t && (t = h),
        d < n && (n = d),
        f < i && (i = f),
        h > r && (r = h),
        d > o && (o = d),
        f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c),
        d = e.getY(c),
        f = e.getZ(c);
      h < t && (t = h),
        d < n && (n = d),
        f < i && (i = f),
        h > r && (r = h),
        d > o && (o = d),
        f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Qt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let o = 0, a = r.count; o < a; o++)
          Qt.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Qt);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          $i.copy(n.boundingBox),
          $i.applyMatrix4(e.matrixWorld),
          this.union($i);
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Qt),
      Qt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(jn),
      ci.subVectors(this.max, jn),
      xn.subVectors(e.a, jn),
      vn.subVectors(e.b, jn),
      Mn.subVectors(e.c, jn),
      kt.subVectors(vn, xn),
      Ht.subVectors(Mn, vn),
      en.subVectors(xn, Mn);
    let t = [
      0,
      -kt.z,
      kt.y,
      0,
      -Ht.z,
      Ht.y,
      0,
      -en.z,
      en.y,
      kt.z,
      0,
      -kt.x,
      Ht.z,
      0,
      -Ht.x,
      en.z,
      0,
      -en.x,
      -kt.y,
      kt.x,
      0,
      -Ht.y,
      Ht.x,
      0,
      -en.y,
      en.x,
      0,
    ];
    return !Ji(t, xn, vn, Mn, ci) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ji(t, xn, vn, Mn, ci))
      ? !1
      : (hi.crossVectors(kt, Ht),
        (t = [hi.x, hi.y, hi.z]),
        Ji(t, xn, vn, Mn, ci));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Qt.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(Qt).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Pt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Pt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Pt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Pt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Pt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Pt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Pt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Pt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Pt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Pt = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  Qt = new L(),
  $i = new ni(),
  xn = new L(),
  vn = new L(),
  Mn = new L(),
  kt = new L(),
  Ht = new L(),
  en = new L(),
  jn = new L(),
  ci = new L(),
  hi = new L(),
  tn = new L();
function Ji(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    tn.fromArray(s, r);
    const a =
        i.x * Math.abs(tn.x) + i.y * Math.abs(tn.y) + i.z * Math.abs(tn.z),
      c = e.dot(tn),
      l = t.dot(tn),
      h = n.dot(tn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a) return !1;
  }
  return !0;
}
const Zo = new ni(),
  ys = new L(),
  ui = new L(),
  Ki = new L();
class Ar {
  constructor(e = new L(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Zo.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    Ki.subVectors(e, this.center);
    const t = Ki.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(Ki.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      this.center.equals(e.center) === !0
        ? ui.set(0, 0, 1).multiplyScalar(e.radius)
        : ui
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(ys.copy(e.center).add(ui)),
      this.expandByPoint(ys.copy(e.center).sub(ui)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const It = new L(),
  Qi = new L(),
  di = new L(),
  Wt = new L(),
  er = new L(),
  fi = new L(),
  tr = new L();
class $o {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, It)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = It.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (It.copy(this.direction).multiplyScalar(t).add(this.origin),
        It.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Qi.copy(e).add(t).multiplyScalar(0.5),
      di.copy(t).sub(e).normalize(),
      Wt.copy(this.origin).sub(Qi);
    const r = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(di),
      a = Wt.dot(this.direction),
      c = -Wt.dot(di),
      l = Wt.lengthSq(),
      h = Math.abs(1 - o * o);
    let d, f, m, g;
    if (h > 0)
      if (((d = o * c - a), (f = o * a - c), (g = r * h), d >= 0))
        if (f >= -g)
          if (f <= g) {
            const p = 1 / h;
            (d *= p),
              (f *= p),
              (m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * c) + l);
          } else
            (f = r),
              (d = Math.max(0, -(o * f + a))),
              (m = -d * d + f * (f + 2 * c) + l);
        else
          (f = -r),
            (d = Math.max(0, -(o * f + a))),
            (m = -d * d + f * (f + 2 * c) + l);
      else
        f <= -g
          ? ((d = Math.max(0, -(-o * r + a))),
            (f = d > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (m = -d * d + f * (f + 2 * c) + l))
          : f <= g
          ? ((d = 0),
            (f = Math.min(Math.max(-r, -c), r)),
            (m = f * (f + 2 * c) + l))
          : ((d = Math.max(0, -(o * r + a))),
            (f = d > 0 ? r : Math.min(Math.max(-r, -c), r)),
            (m = -d * d + f * (f + 2 * c) + l));
    else
      (f = o > 0 ? -r : r),
        (d = Math.max(0, -(o * f + a))),
        (m = -d * d + f * (f + 2 * c) + l);
    return (
      n && n.copy(this.direction).multiplyScalar(d).add(this.origin),
      i && i.copy(di).multiplyScalar(f).add(Qi),
      m
    );
  }
  intersectSphere(e, t) {
    It.subVectors(e.center, this.origin);
    const n = It.dot(this.direction),
      i = It.dot(It) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i),
      a = n - o,
      c = n + o;
    return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, c;
    const l = 1 / this.direction.x,
      h = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - f.x) * l), (i = (e.max.x - f.x) * l))
        : ((n = (e.max.x - f.x) * l), (i = (e.min.x - f.x) * l)),
      h >= 0
        ? ((r = (e.min.y - f.y) * h), (o = (e.max.y - f.y) * h))
        : ((r = (e.max.y - f.y) * h), (o = (e.min.y - f.y) * h)),
      n > o ||
      r > i ||
      ((r > n || n !== n) && (n = r),
      (o < i || i !== i) && (i = o),
      d >= 0
        ? ((a = (e.min.z - f.z) * d), (c = (e.max.z - f.z) * d))
        : ((a = (e.max.z - f.z) * d), (c = (e.min.z - f.z) * d)),
      n > c || a > i) ||
      ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, It) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    er.subVectors(t, e), fi.subVectors(n, e), tr.crossVectors(er, fi);
    let o = this.direction.dot(tr),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Wt.subVectors(this.origin, e);
    const c = a * this.direction.dot(fi.crossVectors(Wt, fi));
    if (c < 0) return null;
    const l = a * this.direction.dot(er.cross(Wt));
    if (l < 0 || c + l > o) return null;
    const h = -a * Wt.dot(tr);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ke {
  constructor() {
    (this.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, r, o, a, c, l, h, d, f, m, g, p, u) {
    const v = this.elements;
    return (
      (v[0] = e),
      (v[4] = t),
      (v[8] = n),
      (v[12] = i),
      (v[1] = r),
      (v[5] = o),
      (v[9] = a),
      (v[13] = c),
      (v[2] = l),
      (v[6] = h),
      (v[10] = d),
      (v[14] = f),
      (v[3] = m),
      (v[7] = g),
      (v[11] = p),
      (v[15] = u),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ke().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / yn.setFromMatrixColumn(e, 0).length(),
      r = 1 / yn.setFromMatrixColumn(e, 1).length(),
      o = 1 / yn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      h = Math.cos(r),
      d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * h,
        m = o * d,
        g = a * h,
        p = a * d;
      (t[0] = c * h),
        (t[4] = -c * d),
        (t[8] = l),
        (t[1] = m + g * l),
        (t[5] = f - p * l),
        (t[9] = -a * c),
        (t[2] = p - f * l),
        (t[6] = g + m * l),
        (t[10] = o * c);
    } else if (e.order === "YXZ") {
      const f = c * h,
        m = c * d,
        g = l * h,
        p = l * d;
      (t[0] = f + p * a),
        (t[4] = g * a - m),
        (t[8] = o * l),
        (t[1] = o * d),
        (t[5] = o * h),
        (t[9] = -a),
        (t[2] = m * a - g),
        (t[6] = p + f * a),
        (t[10] = o * c);
    } else if (e.order === "ZXY") {
      const f = c * h,
        m = c * d,
        g = l * h,
        p = l * d;
      (t[0] = f - p * a),
        (t[4] = -o * d),
        (t[8] = g + m * a),
        (t[1] = m + g * a),
        (t[5] = o * h),
        (t[9] = p - f * a),
        (t[2] = -o * l),
        (t[6] = a),
        (t[10] = o * c);
    } else if (e.order === "ZYX") {
      const f = o * h,
        m = o * d,
        g = a * h,
        p = a * d;
      (t[0] = c * h),
        (t[4] = g * l - m),
        (t[8] = f * l + p),
        (t[1] = c * d),
        (t[5] = p * l + f),
        (t[9] = m * l - g),
        (t[2] = -l),
        (t[6] = a * c),
        (t[10] = o * c);
    } else if (e.order === "YZX") {
      const f = o * c,
        m = o * l,
        g = a * c,
        p = a * l;
      (t[0] = c * h),
        (t[4] = p - f * d),
        (t[8] = g * d + m),
        (t[1] = d),
        (t[5] = o * h),
        (t[9] = -a * h),
        (t[2] = -l * h),
        (t[6] = m * d + g),
        (t[10] = f - p * d);
    } else if (e.order === "XZY") {
      const f = o * c,
        m = o * l,
        g = a * c,
        p = a * l;
      (t[0] = c * h),
        (t[4] = -d),
        (t[8] = l * h),
        (t[1] = f * d + p),
        (t[5] = o * h),
        (t[9] = m * d - g),
        (t[2] = g * d - m),
        (t[6] = a * h),
        (t[10] = p * d + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Jo, e, Ko);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      st.subVectors(e, t),
      st.lengthSq() === 0 && (st.z = 1),
      st.normalize(),
      qt.crossVectors(n, st),
      qt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (st.x += 1e-4) : (st.z += 1e-4),
        st.normalize(),
        qt.crossVectors(n, st)),
      qt.normalize(),
      pi.crossVectors(st, qt),
      (i[0] = qt.x),
      (i[4] = pi.x),
      (i[8] = st.x),
      (i[1] = qt.y),
      (i[5] = pi.y),
      (i[9] = st.y),
      (i[2] = qt.z),
      (i[6] = pi.z),
      (i[10] = st.z),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      o = n[0],
      a = n[4],
      c = n[8],
      l = n[12],
      h = n[1],
      d = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      p = n[6],
      u = n[10],
      v = n[14],
      b = n[3],
      T = n[7],
      y = n[11],
      E = n[15],
      C = i[0],
      R = i[4],
      x = i[8],
      w = i[12],
      I = i[1],
      N = i[5],
      Z = i[9],
      ne = i[13],
      P = i[2],
      W = i[6],
      B = i[10],
      q = i[14],
      X = i[3],
      O = i[7],
      V = i[11],
      te = i[15];
    return (
      (r[0] = o * C + a * I + c * P + l * X),
      (r[4] = o * R + a * N + c * W + l * O),
      (r[8] = o * x + a * Z + c * B + l * V),
      (r[12] = o * w + a * ne + c * q + l * te),
      (r[1] = h * C + d * I + f * P + m * X),
      (r[5] = h * R + d * N + f * W + m * O),
      (r[9] = h * x + d * Z + f * B + m * V),
      (r[13] = h * w + d * ne + f * q + m * te),
      (r[2] = g * C + p * I + u * P + v * X),
      (r[6] = g * R + p * N + u * W + v * O),
      (r[10] = g * x + p * Z + u * B + v * V),
      (r[14] = g * w + p * ne + u * q + v * te),
      (r[3] = b * C + T * I + y * P + E * X),
      (r[7] = b * R + T * N + y * W + E * O),
      (r[11] = b * x + T * Z + y * B + E * V),
      (r[15] = b * w + T * ne + y * q + E * te),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      o = e[1],
      a = e[5],
      c = e[9],
      l = e[13],
      h = e[2],
      d = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      p = e[7],
      u = e[11],
      v = e[15];
    return (
      g *
        (+r * c * d -
          i * l * d -
          r * a * f +
          n * l * f +
          i * a * m -
          n * c * m) +
      p *
        (+t * c * m -
          t * l * f +
          r * o * f -
          i * o * m +
          i * l * h -
          r * c * h) +
      u *
        (+t * l * d -
          t * a * m -
          r * o * d +
          n * o * m +
          r * a * h -
          n * l * h) +
      v *
        (-i * a * h - t * c * d + t * a * f + i * o * d - n * o * f + n * c * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      d = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      p = e[13],
      u = e[14],
      v = e[15],
      b = d * u * l - p * f * l + p * c * m - a * u * m - d * c * v + a * f * v,
      T = g * f * l - h * u * l - g * c * m + o * u * m + h * c * v - o * f * v,
      y = h * p * l - g * d * l + g * a * m - o * p * m - h * a * v + o * d * v,
      E = g * d * c - h * p * c - g * a * f + o * p * f + h * a * u - o * d * u,
      C = t * b + n * T + i * y + r * E;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / C;
    return (
      (e[0] = b * R),
      (e[1] =
        (p * f * r -
          d * u * r -
          p * i * m +
          n * u * m +
          d * i * v -
          n * f * v) *
        R),
      (e[2] =
        (a * u * r -
          p * c * r +
          p * i * l -
          n * u * l -
          a * i * v +
          n * c * v) *
        R),
      (e[3] =
        (d * c * r -
          a * f * r -
          d * i * l +
          n * f * l +
          a * i * m -
          n * c * m) *
        R),
      (e[4] = T * R),
      (e[5] =
        (h * u * r -
          g * f * r +
          g * i * m -
          t * u * m -
          h * i * v +
          t * f * v) *
        R),
      (e[6] =
        (g * c * r -
          o * u * r -
          g * i * l +
          t * u * l +
          o * i * v -
          t * c * v) *
        R),
      (e[7] =
        (o * f * r -
          h * c * r +
          h * i * l -
          t * f * l -
          o * i * m +
          t * c * m) *
        R),
      (e[8] = y * R),
      (e[9] =
        (g * d * r -
          h * p * r -
          g * n * m +
          t * p * m +
          h * n * v -
          t * d * v) *
        R),
      (e[10] =
        (o * p * r -
          g * a * r +
          g * n * l -
          t * p * l -
          o * n * v +
          t * a * v) *
        R),
      (e[11] =
        (h * a * r -
          o * d * r -
          h * n * l +
          t * d * l +
          o * n * m -
          t * a * m) *
        R),
      (e[12] = E * R),
      (e[13] =
        (h * p * i -
          g * d * i +
          g * n * f -
          t * p * f -
          h * n * u +
          t * d * u) *
        R),
      (e[14] =
        (g * a * i -
          o * p * i -
          g * n * c +
          t * p * c +
          o * n * u -
          t * a * u) *
        R),
      (e[15] =
        (o * d * i -
          h * a * i +
          h * n * c -
          t * d * c -
          o * n * f +
          t * a * f) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      o = e.x,
      a = e.y,
      c = e.z,
      l = r * o,
      h = r * a;
    return (
      this.set(
        l * o + n,
        l * a - i * c,
        l * c + i * a,
        0,
        l * a + i * c,
        h * a + n,
        h * c - i * o,
        0,
        l * c - i * a,
        h * c + i * o,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      o = t._y,
      a = t._z,
      c = t._w,
      l = r + r,
      h = o + o,
      d = a + a,
      f = r * l,
      m = r * h,
      g = r * d,
      p = o * h,
      u = o * d,
      v = a * d,
      b = c * l,
      T = c * h,
      y = c * d,
      E = n.x,
      C = n.y,
      R = n.z;
    return (
      (i[0] = (1 - (p + v)) * E),
      (i[1] = (m + y) * E),
      (i[2] = (g - T) * E),
      (i[3] = 0),
      (i[4] = (m - y) * C),
      (i[5] = (1 - (f + v)) * C),
      (i[6] = (u + b) * C),
      (i[7] = 0),
      (i[8] = (g + T) * R),
      (i[9] = (u - b) * R),
      (i[10] = (1 - (f + p)) * R),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = yn.set(i[0], i[1], i[2]).length();
    const o = yn.set(i[4], i[5], i[6]).length(),
      a = yn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      dt.copy(this);
    const l = 1 / r,
      h = 1 / o,
      d = 1 / a;
    return (
      (dt.elements[0] *= l),
      (dt.elements[1] *= l),
      (dt.elements[2] *= l),
      (dt.elements[4] *= h),
      (dt.elements[5] *= h),
      (dt.elements[6] *= h),
      (dt.elements[8] *= d),
      (dt.elements[9] *= d),
      (dt.elements[10] *= d),
      t.setFromRotationMatrix(dt),
      (n.x = r),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, i, r, o) {
    o === void 0 &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const a = this.elements,
      c = (2 * r) / (t - e),
      l = (2 * r) / (n - i),
      h = (t + e) / (t - e),
      d = (n + i) / (n - i),
      f = -(o + r) / (o - r),
      m = (-2 * o * r) / (o - r);
    return (
      (a[0] = c),
      (a[4] = 0),
      (a[8] = h),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = l),
      (a[9] = d),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = f),
      (a[14] = m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, o) {
    const a = this.elements,
      c = 1 / (t - e),
      l = 1 / (n - i),
      h = 1 / (o - r),
      d = (t + e) * c,
      f = (n + i) * l,
      m = (o + r) * h;
    return (
      (a[0] = 2 * c),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -d),
      (a[1] = 0),
      (a[5] = 2 * l),
      (a[9] = 0),
      (a[13] = -f),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * h),
      (a[14] = -m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const yn = new L(),
  dt = new ke(),
  Jo = new L(0, 0, 0),
  Ko = new L(1, 1, 1),
  qt = new L(),
  pi = new L(),
  st = new L(),
  Ss = new ke(),
  bs = new ti();
class ii {
  constructor(e = 0, t = 0, n = 0, i = ii.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      o = i[4],
      a = i[8],
      c = i[1],
      l = i[5],
      h = i[9],
      d = i[2],
      f = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(tt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-h, m)), (this._z = Math.atan2(-o, r)))
            : ((this._x = Math.atan2(f, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-tt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-d, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(tt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-o, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-tt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-o, l)));
        break;
      case "YZX":
        (this._z = Math.asin(tt(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-d, r)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-tt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, l)), (this._y = Math.atan2(a, r)))
            : ((this._x = Math.atan2(-h, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ss.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ss, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return bs.setFromEuler(this), this.setFromQuaternion(bs, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
ii.DefaultOrder = "XYZ";
ii.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ga {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Qo = 0;
const ws = new L(),
  Sn = new ti(),
  Ft = new ke(),
  mi = new L(),
  Yn = new L(),
  el = new L(),
  tl = new ti(),
  Es = new L(1, 0, 0),
  Ts = new L(0, 1, 0),
  As = new L(0, 0, 1),
  nl = { type: "added" },
  Cs = { type: "removed" };
class nt extends Vn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Qo++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = nt.DefaultUp.clone());
    const e = new L(),
      t = new ii(),
      n = new ti(),
      i = new L(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ke() },
        normalMatrix: { value: new At() },
      }),
      (this.matrix = new ke()),
      (this.matrixWorld = new ke()),
      (this.matrixAutoUpdate = nt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new ga()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Sn.setFromAxisAngle(e, t), this.quaternion.multiply(Sn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Sn.setFromAxisAngle(e, t), this.quaternion.premultiply(Sn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Es, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ts, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(As, e);
  }
  translateOnAxis(e, t) {
    return (
      ws.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ws.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Es, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ts, e);
  }
  translateZ(e) {
    return this.translateOnAxis(As, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ft.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? mi.copy(e) : mi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Yn.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ft.lookAt(Yn, mi, this.up)
        : Ft.lookAt(mi, Yn, this.up),
      this.quaternion.setFromRotationMatrix(Ft),
      i &&
        (Ft.extractRotation(i.matrixWorld),
        Sn.setFromRotationMatrix(Ft),
        this.quaternion.premultiply(Sn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(nl))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Cs)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Cs);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ft.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Ft.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Ft),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yn, e, el), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yn, tl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            r(e.shapes, d);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(r(e.materials, this.material[c]));
        i.material = a;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries),
        c = o(e.materials),
        l = o(e.textures),
        h = o(e.images),
        d = o(e.shapes),
        f = o(e.skeletons),
        m = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        h.length > 0 && (n.images = h),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
nt.DefaultUp = new L(0, 1, 0);
nt.DefaultMatrixAutoUpdate = !0;
const ft = new L(),
  Nt = new L(),
  nr = new L(),
  zt = new L(),
  bn = new L(),
  wn = new L(),
  Ls = new L(),
  ir = new L(),
  rr = new L(),
  sr = new L();
class Tt {
  constructor(e = new L(), t = new L(), n = new L()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), ft.subVectors(e, t), i.cross(ft);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    ft.subVectors(i, t), Nt.subVectors(n, t), nr.subVectors(e, t);
    const o = ft.dot(ft),
      a = ft.dot(Nt),
      c = ft.dot(nr),
      l = Nt.dot(Nt),
      h = Nt.dot(nr),
      d = o * l - a * a;
    if (d === 0) return r.set(-2, -1, -1);
    const f = 1 / d,
      m = (l * c - a * h) * f,
      g = (o * h - a * c) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, zt),
      zt.x >= 0 && zt.y >= 0 && zt.x + zt.y <= 1
    );
  }
  static getUV(e, t, n, i, r, o, a, c) {
    return (
      this.getBarycoord(e, t, n, i, zt),
      c.set(0, 0),
      c.addScaledVector(r, zt.x),
      c.addScaledVector(o, zt.y),
      c.addScaledVector(a, zt.z),
      c
    );
  }
  static isFrontFacing(e, t, n, i) {
    return ft.subVectors(n, t), Nt.subVectors(e, t), ft.cross(Nt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      ft.subVectors(this.c, this.b),
      Nt.subVectors(this.a, this.b),
      ft.cross(Nt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Tt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Tt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Tt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Tt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Tt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let o, a;
    bn.subVectors(i, n), wn.subVectors(r, n), ir.subVectors(e, n);
    const c = bn.dot(ir),
      l = wn.dot(ir);
    if (c <= 0 && l <= 0) return t.copy(n);
    rr.subVectors(e, i);
    const h = bn.dot(rr),
      d = wn.dot(rr);
    if (h >= 0 && d <= h) return t.copy(i);
    const f = c * d - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return (o = c / (c - h)), t.copy(n).addScaledVector(bn, o);
    sr.subVectors(e, r);
    const m = bn.dot(sr),
      g = wn.dot(sr);
    if (g >= 0 && m <= g) return t.copy(r);
    const p = m * l - c * g;
    if (p <= 0 && l >= 0 && g <= 0)
      return (a = l / (l - g)), t.copy(n).addScaledVector(wn, a);
    const u = h * g - m * d;
    if (u <= 0 && d - h >= 0 && m - g >= 0)
      return (
        Ls.subVectors(r, i),
        (a = (d - h) / (d - h + (m - g))),
        t.copy(i).addScaledVector(Ls, a)
      );
    const v = 1 / (u + p + f);
    return (
      (o = p * v),
      (a = f * v),
      t.copy(n).addScaledVector(bn, o).addScaledVector(wn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let il = 0;
class Xe extends Vn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: il++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = In),
      (this.side = Kn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = oa),
      (this.blendDst = la),
      (this.blendEquation = Rn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = xr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = qo),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Hi),
      (this.stencilZFail = Hi),
      (this.stencilZPass = Hi),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = n === Ka);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== In && (n.blending = this.blending),
      this.side !== Kn && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const c = r[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures),
        o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get vertexTangents() {
    return (
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed."
      ),
      !1
    );
  }
  set vertexTangents(e) {
    console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
  }
}
Xe.fromType = function () {
  return null;
};
class Cr extends Xe {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new ge(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ri),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Be = new L(),
  gi = new Ee();
class Ct {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = gs),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          i
        ),
        (o = new ge())),
        (t[n++] = o.r),
        (t[n++] = o.g),
        (t[n++] = o.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          i
        ),
        (o = new Ee())),
        (t[n++] = o.x),
        (t[n++] = o.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          i
        ),
        (o = new L())),
        (t[n++] = o.x),
        (t[n++] = o.y),
        (t[n++] = o.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          i
        ),
        (o = new qe())),
        (t[n++] = o.x),
        (t[n++] = o.y),
        (t[n++] = o.z),
        (t[n++] = o.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        gi.fromBufferAttribute(this, t),
          gi.applyMatrix3(e),
          this.setXY(t, gi.x, gi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Be.fromBufferAttribute(this, t),
          Be.applyMatrix3(e),
          this.setXYZ(t, Be.x, Be.y, Be.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Be.fromBufferAttribute(this, t),
        Be.applyMatrix4(e),
        this.setXYZ(t, Be.x, Be.y, Be.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Be.fromBufferAttribute(this, t),
        Be.applyNormalMatrix(e),
        this.setXYZ(t, Be.x, Be.y, Be.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Be.fromBufferAttribute(this, t),
        Be.transformDirection(e),
        this.setXYZ(t, Be.x, Be.y, Be.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== gs && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class _a extends Ct {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class xa extends Ct {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Lt extends Ct {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let rl = 0;
const ot = new ke(),
  ar = new nt(),
  En = new L(),
  at = new ni(),
  Zn = new ni(),
  Ve = new L();
class Jt extends Vn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: rl++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (ua(e) ? xa : _a)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new At().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return ot.makeRotationFromQuaternion(e), this.applyMatrix4(ot), this;
  }
  rotateX(e) {
    return ot.makeRotationX(e), this.applyMatrix4(ot), this;
  }
  rotateY(e) {
    return ot.makeRotationY(e), this.applyMatrix4(ot), this;
  }
  rotateZ(e) {
    return ot.makeRotationZ(e), this.applyMatrix4(ot), this;
  }
  translate(e, t, n) {
    return ot.makeTranslation(e, t, n), this.applyMatrix4(ot), this;
  }
  scale(e, t, n) {
    return ot.makeScale(e, t, n), this.applyMatrix4(ot), this;
  }
  lookAt(e) {
    return ar.lookAt(e), ar.updateMatrix(), this.applyMatrix4(ar.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(En).negate(),
      this.translate(En.x, En.y, En.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Lt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ni());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          at.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (Ve.addVectors(this.boundingBox.min, at.min),
                this.boundingBox.expandByPoint(Ve),
                Ve.addVectors(this.boundingBox.max, at.max),
                this.boundingBox.expandByPoint(Ve))
              : (this.boundingBox.expandByPoint(at.min),
                this.boundingBox.expandByPoint(at.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ar());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((at.setFromBufferAttribute(e), t))
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          Zn.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (Ve.addVectors(at.min, Zn.min),
                at.expandByPoint(Ve),
                Ve.addVectors(at.max, Zn.max),
                at.expandByPoint(Ve))
              : (at.expandByPoint(Zn.min), at.expandByPoint(Zn.max));
        }
      at.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        Ve.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(Ve)));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            Ve.fromBufferAttribute(a, l),
              c && (En.fromBufferAttribute(e, l), Ve.add(En)),
              (i = Math.max(i, n.distanceToSquared(Ve)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      o = t.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Ct(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array,
      l = [],
      h = [];
    for (let I = 0; I < a; I++) (l[I] = new L()), (h[I] = new L());
    const d = new L(),
      f = new L(),
      m = new L(),
      g = new Ee(),
      p = new Ee(),
      u = new Ee(),
      v = new L(),
      b = new L();
    function T(I, N, Z) {
      d.fromArray(i, I * 3),
        f.fromArray(i, N * 3),
        m.fromArray(i, Z * 3),
        g.fromArray(o, I * 2),
        p.fromArray(o, N * 2),
        u.fromArray(o, Z * 2),
        f.sub(d),
        m.sub(d),
        p.sub(g),
        u.sub(g);
      const ne = 1 / (p.x * u.y - u.x * p.y);
      !isFinite(ne) ||
        (v
          .copy(f)
          .multiplyScalar(u.y)
          .addScaledVector(m, -p.y)
          .multiplyScalar(ne),
        b
          .copy(m)
          .multiplyScalar(p.x)
          .addScaledVector(f, -u.x)
          .multiplyScalar(ne),
        l[I].add(v),
        l[N].add(v),
        l[Z].add(v),
        h[I].add(b),
        h[N].add(b),
        h[Z].add(b));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: n.length }]);
    for (let I = 0, N = y.length; I < N; ++I) {
      const Z = y[I],
        ne = Z.start,
        P = Z.count;
      for (let W = ne, B = ne + P; W < B; W += 3)
        T(n[W + 0], n[W + 1], n[W + 2]);
    }
    const E = new L(),
      C = new L(),
      R = new L(),
      x = new L();
    function w(I) {
      R.fromArray(r, I * 3), x.copy(R);
      const N = l[I];
      E.copy(N),
        E.sub(R.multiplyScalar(R.dot(N))).normalize(),
        C.crossVectors(x, N);
      const ne = C.dot(h[I]) < 0 ? -1 : 1;
      (c[I * 4] = E.x),
        (c[I * 4 + 1] = E.y),
        (c[I * 4 + 2] = E.z),
        (c[I * 4 + 3] = ne);
    }
    for (let I = 0, N = y.length; I < N; ++I) {
      const Z = y[I],
        ne = Z.start,
        P = Z.count;
      for (let W = ne, B = ne + P; W < B; W += 3)
        w(n[W + 0]), w(n[W + 1]), w(n[W + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Ct(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const i = new L(),
        r = new L(),
        o = new L(),
        a = new L(),
        c = new L(),
        l = new L(),
        h = new L(),
        d = new L();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            p = e.getX(f + 1),
            u = e.getX(f + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, p),
            o.fromBufferAttribute(t, u),
            h.subVectors(o, r),
            d.subVectors(i, r),
            h.cross(d),
            a.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, u),
            a.add(h),
            c.add(h),
            l.add(h),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(p, c.x, c.y, c.z),
            n.setXYZ(u, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            o.fromBufferAttribute(t, f + 2),
            h.subVectors(o, r),
            d.subVectors(i, r),
            h.cross(d),
            n.setXYZ(f + 0, h.x, h.y, h.z),
            n.setXYZ(f + 1, h.x, h.y, h.z),
            n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
      return;
    }
    t === void 0 &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0) continue;
      const o = n[i].array,
        a = e.attributes[i],
        c = a.array,
        l = a.itemSize * t,
        h = Math.min(c.length, o.length - l);
      for (let d = 0, f = l; d < h; d++, f++) o[f] = c[d];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Ve.fromBufferAttribute(e, t),
        Ve.normalize(),
        e.setXYZ(t, Ve.x, Ve.y, Ve.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array,
        h = a.itemSize,
        d = a.normalized,
        f = new l.constructor(c.length * h);
      let m = 0,
        g = 0;
      for (let p = 0, u = c.length; p < u; p++) {
        a.isInterleavedBufferAttribute
          ? (m = c[p] * a.data.stride + a.offset)
          : (m = c[p] * h);
        for (let v = 0; v < h; v++) f[g++] = l[m++];
      }
      return new Ct(f, h, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Jt(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const c = i[a],
        l = e(c, n);
      t.setAttribute(a, l);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const c = [],
        l = r[a];
      for (let h = 0, d = l.length; h < d; h++) {
        const f = l[h],
          m = e(f, n);
        c.push(m);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && ((i[c] = h), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const h = [],
        d = r[l];
      for (let f = 0, m = d.length; f < m; f++) h.push(d[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const d = o[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ds = new ke(),
  Tn = new $o(),
  or = new Ar(),
  Xt = new L(),
  jt = new L(),
  Yt = new L(),
  lr = new L(),
  cr = new L(),
  hr = new L(),
  _i = new L(),
  xi = new L(),
  vi = new L(),
  Mi = new Ee(),
  yi = new Ee(),
  Si = new Ee(),
  ur = new L(),
  bi = new L();
class Ot extends nt {
  constructor(e = new Jt(), t = new Cr()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = r);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      or.copy(n.boundingSphere),
      or.applyMatrix4(r),
      e.ray.intersectsSphere(or) === !1) ||
      (Ds.copy(r).invert(),
      Tn.copy(e.ray).applyMatrix4(Ds),
      n.boundingBox !== null && Tn.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const a = n.index,
      c = n.attributes.position,
      l = n.morphAttributes.position,
      h = n.morphTargetsRelative,
      d = n.attributes.uv,
      f = n.attributes.uv2,
      m = n.groups,
      g = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let p = 0, u = m.length; p < u; p++) {
          const v = m[p],
            b = i[v.materialIndex],
            T = Math.max(v.start, g.start),
            y = Math.min(
              a.count,
              Math.min(v.start + v.count, g.start + g.count)
            );
          for (let E = T, C = y; E < C; E += 3) {
            const R = a.getX(E),
              x = a.getX(E + 1),
              w = a.getX(E + 2);
            (o = wi(this, b, e, Tn, c, l, h, d, f, R, x, w)),
              o &&
                ((o.faceIndex = Math.floor(E / 3)),
                (o.face.materialIndex = v.materialIndex),
                t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start),
          u = Math.min(a.count, g.start + g.count);
        for (let v = p, b = u; v < b; v += 3) {
          const T = a.getX(v),
            y = a.getX(v + 1),
            E = a.getX(v + 2);
          (o = wi(this, i, e, Tn, c, l, h, d, f, T, y, E)),
            o && ((o.faceIndex = Math.floor(v / 3)), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let p = 0, u = m.length; p < u; p++) {
          const v = m[p],
            b = i[v.materialIndex],
            T = Math.max(v.start, g.start),
            y = Math.min(
              c.count,
              Math.min(v.start + v.count, g.start + g.count)
            );
          for (let E = T, C = y; E < C; E += 3) {
            const R = E,
              x = E + 1,
              w = E + 2;
            (o = wi(this, b, e, Tn, c, l, h, d, f, R, x, w)),
              o &&
                ((o.faceIndex = Math.floor(E / 3)),
                (o.face.materialIndex = v.materialIndex),
                t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start),
          u = Math.min(c.count, g.start + g.count);
        for (let v = p, b = u; v < b; v += 3) {
          const T = v,
            y = v + 1,
            E = v + 2;
          (o = wi(this, i, e, Tn, c, l, h, d, f, T, y, E)),
            o && ((o.faceIndex = Math.floor(v / 3)), t.push(o));
        }
      }
  }
}
function sl(s, e, t, n, i, r, o, a) {
  let c;
  if (
    (e.side === gt
      ? (c = n.intersectTriangle(o, r, i, !0, a))
      : (c = n.intersectTriangle(i, r, o, e.side !== Nn, a)),
    c === null)
  )
    return null;
  bi.copy(a), bi.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(bi);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: bi.clone(), object: s };
}
function wi(s, e, t, n, i, r, o, a, c, l, h, d) {
  Xt.fromBufferAttribute(i, l),
    jt.fromBufferAttribute(i, h),
    Yt.fromBufferAttribute(i, d);
  const f = s.morphTargetInfluences;
  if (r && f) {
    _i.set(0, 0, 0), xi.set(0, 0, 0), vi.set(0, 0, 0);
    for (let g = 0, p = r.length; g < p; g++) {
      const u = f[g],
        v = r[g];
      u !== 0 &&
        (lr.fromBufferAttribute(v, l),
        cr.fromBufferAttribute(v, h),
        hr.fromBufferAttribute(v, d),
        o
          ? (_i.addScaledVector(lr, u),
            xi.addScaledVector(cr, u),
            vi.addScaledVector(hr, u))
          : (_i.addScaledVector(lr.sub(Xt), u),
            xi.addScaledVector(cr.sub(jt), u),
            vi.addScaledVector(hr.sub(Yt), u)));
    }
    Xt.add(_i), jt.add(xi), Yt.add(vi);
  }
  s.isSkinnedMesh &&
    (s.boneTransform(l, Xt), s.boneTransform(h, jt), s.boneTransform(d, Yt));
  const m = sl(s, e, t, n, Xt, jt, Yt, ur);
  if (m) {
    a &&
      (Mi.fromBufferAttribute(a, l),
      yi.fromBufferAttribute(a, h),
      Si.fromBufferAttribute(a, d),
      (m.uv = Tt.getUV(ur, Xt, jt, Yt, Mi, yi, Si, new Ee()))),
      c &&
        (Mi.fromBufferAttribute(c, l),
        yi.fromBufferAttribute(c, h),
        Si.fromBufferAttribute(c, d),
        (m.uv2 = Tt.getUV(ur, Xt, jt, Yt, Mi, yi, Si, new Ee())));
    const g = { a: l, b: h, c: d, normal: new L(), materialIndex: 0 };
    Tt.getNormal(Xt, jt, Yt, g.normal), (m.face = g);
  }
  return m;
}
class kn extends Jt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: o,
      });
    const a = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (o = Math.floor(o));
    const c = [],
      l = [],
      h = [],
      d = [];
    let f = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, o, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new Lt(l, 3)),
      this.setAttribute("normal", new Lt(h, 3)),
      this.setAttribute("uv", new Lt(d, 2));
    function g(p, u, v, b, T, y, E, C, R, x, w) {
      const I = y / R,
        N = E / x,
        Z = y / 2,
        ne = E / 2,
        P = C / 2,
        W = R + 1,
        B = x + 1;
      let q = 0,
        X = 0;
      const O = new L();
      for (let V = 0; V < B; V++) {
        const te = V * N - ne;
        for (let j = 0; j < W; j++) {
          const ie = j * I - Z;
          (O[p] = ie * b),
            (O[u] = te * T),
            (O[v] = P),
            l.push(O.x, O.y, O.z),
            (O[p] = 0),
            (O[u] = 0),
            (O[v] = C > 0 ? 1 : -1),
            h.push(O.x, O.y, O.z),
            d.push(j / R),
            d.push(1 - V / x),
            (q += 1);
        }
      }
      for (let V = 0; V < x; V++)
        for (let te = 0; te < R; te++) {
          const j = f + te + W * V,
            ie = f + te + W * (V + 1),
            ce = f + (te + 1) + W * (V + 1),
            ue = f + (te + 1) + W * V;
          c.push(j, ie, ue), c.push(ie, ce, ue), (X += 6);
        }
      a.addGroup(m, X, w), (m += X), (f += q);
    }
  }
  static fromJSON(e) {
    return new kn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Bn(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Ye(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Bn(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
const al = { clone: Bn, merge: Ye };
var ol = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  ll = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Gt extends Xe {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = ol),
      (this.fragmentShader = ll),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 &&
        (e.attributes !== void 0 &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Bn(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: o.toArray() })
        : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class va extends nt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ke()),
      (this.projectionMatrix = new ke()),
      (this.projectionMatrixInverse = new ke());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ct extends va {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = xs * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Wi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return xs * 2 * Math.atan(Math.tan(Wi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Wi * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth,
        l = o.fullHeight;
      (r += (o.offsetX * i) / c),
        (t -= (o.offsetY * n) / l),
        (i *= o.width / c),
        (n *= o.height / l);
    }
    const a = this.filmOffset;
    a !== 0 && (r += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const An = 90,
  Cn = 1;
class cl extends nt {
  constructor(e, t, n) {
    if (
      (super(), (this.type = "CubeCamera"), n.isWebGLCubeRenderTarget !== !0)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = n;
    const i = new ct(An, Cn, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new L(1, 0, 0)),
      this.add(i);
    const r = new ct(An, Cn, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new L(-1, 0, 0)),
      this.add(r);
    const o = new ct(An, Cn, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new L(0, 1, 0)),
      this.add(o);
    const a = new ct(An, Cn, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new L(0, -1, 0)),
      this.add(a);
    const c = new ct(An, Cn, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new L(0, 0, 1)),
      this.add(c);
    const l = new ct(An, Cn, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new L(0, 0, -1)),
      this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, o, a, c, l] = this.children,
      h = e.getRenderTarget(),
      d = e.toneMapping,
      f = e.xr.enabled;
    (e.toneMapping = Bt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, r),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, c),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, l),
      e.setRenderTarget(h),
      (e.toneMapping = d),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Ma extends _t {
  constructor(e, t, n, i, r, o, a, c, l, h) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : zn),
      super(e, t, n, i, r, o, a, c, l, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class hl extends $t {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Ma(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : lt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new kn(5, 5, 5),
      r = new Gt({
        name: "CubemapFromEquirect",
        uniforms: Bn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: gt,
        blending: Zt,
      });
    r.uniforms.tEquirect.value = t;
    const o = new Ot(i, r),
      a = t.minFilter;
    return (
      t.minFilter === Ii && (t.minFilter = lt),
      new cl(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const dr = new L(),
  ul = new L(),
  dl = new At();
class nn {
  constructor(e = new L(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = dr.subVectors(n, t).cross(ul.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(dr),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || dl.getNormalMatrix(e),
      i = this.coplanarPoint(dr).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ln = new Ar(),
  Ei = new L();
class Lr {
  constructor(
    e = new nn(),
    t = new nn(),
    n = new nn(),
    i = new nn(),
    r = new nn(),
    o = new nn()
  ) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(r),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      r = n[1],
      o = n[2],
      a = n[3],
      c = n[4],
      l = n[5],
      h = n[6],
      d = n[7],
      f = n[8],
      m = n[9],
      g = n[10],
      p = n[11],
      u = n[12],
      v = n[13],
      b = n[14],
      T = n[15];
    return (
      t[0].setComponents(a - i, d - c, p - f, T - u).normalize(),
      t[1].setComponents(a + i, d + c, p + f, T + u).normalize(),
      t[2].setComponents(a + r, d + l, p + m, T + v).normalize(),
      t[3].setComponents(a - r, d - l, p - m, T - v).normalize(),
      t[4].setComponents(a - o, d - h, p - g, T - b).normalize(),
      t[5].setComponents(a + o, d + h, p + g, T + b).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ln)
    );
  }
  intersectsSprite(e) {
    return (
      Ln.center.set(0, 0, 0),
      (Ln.radius = 0.7071067811865476),
      Ln.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ln)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Ei.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Ei.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Ei.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Ei) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ya() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, o) {
    t(r, o), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function fl(s, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(l, h) {
    const d = l.array,
      f = l.usage,
      m = s.createBuffer();
    s.bindBuffer(h, m), s.bufferData(h, d, f), l.onUploadCallback();
    let g;
    if (d instanceof Float32Array) g = 5126;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (d instanceof Int16Array) g = 5122;
    else if (d instanceof Uint32Array) g = 5125;
    else if (d instanceof Int32Array) g = 5124;
    else if (d instanceof Int8Array) g = 5120;
    else if (d instanceof Uint8Array) g = 5121;
    else if (d instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version,
    };
  }
  function r(l, h, d) {
    const f = h.array,
      m = h.updateRange;
    s.bindBuffer(d, l),
      m.count === -1
        ? s.bufferSubData(d, 0, f)
        : (t
            ? s.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f,
                m.offset,
                m.count
              )
            : s.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1));
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (s.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const f = n.get(l);
      (!f || f.version < l.version) &&
        n.set(l, {
          buffer: l.buffer,
          type: l.type,
          bytesPerElement: l.elementSize,
          version: l.version,
        });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    d === void 0
      ? n.set(l, i(l, h))
      : d.version < l.version && (r(d.buffer, l, h), (d.version = l.version));
  }
  return { get: o, remove: a, update: c };
}
class Dr extends Jt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      o = t / 2,
      a = Math.floor(n),
      c = Math.floor(i),
      l = a + 1,
      h = c + 1,
      d = e / a,
      f = t / c,
      m = [],
      g = [],
      p = [],
      u = [];
    for (let v = 0; v < h; v++) {
      const b = v * f - o;
      for (let T = 0; T < l; T++) {
        const y = T * d - r;
        g.push(y, -b, 0), p.push(0, 0, 1), u.push(T / a), u.push(1 - v / c);
      }
    }
    for (let v = 0; v < c; v++)
      for (let b = 0; b < a; b++) {
        const T = b + l * v,
          y = b + l * (v + 1),
          E = b + 1 + l * (v + 1),
          C = b + 1 + l * v;
        m.push(T, y, C), m.push(y, E, C);
      }
    this.setIndex(m),
      this.setAttribute("position", new Lt(g, 3)),
      this.setAttribute("normal", new Lt(p, 3)),
      this.setAttribute("uv", new Lt(u, 2));
  }
  static fromJSON(e) {
    return new Dr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var pl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  ml = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  gl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  _l = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  xl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  vl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Ml = "vec3 transformed = vec3( position );",
  yl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Sl = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  bl = `#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,
  wl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  El = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Tl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Al = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Cl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Ll = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Dl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Rl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Pl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Il = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  Fl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Nl = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  zl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Ul = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Ol = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Bl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Gl = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Vl = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  kl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Hl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Wl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  ql = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Xl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  jl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Yl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Zl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  $l = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Jl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
  Kl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Ql = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  ec = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
  tc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  nc = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  ic = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  rc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  sc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  ac = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  oc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  lc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  cc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  hc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  uc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  dc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  fc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  pc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  mc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  gc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  _c = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  xc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  vc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Mc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  yc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Sc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  bc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  wc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Ec = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Tc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  Ac = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Cc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Lc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Dc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Rc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  Pc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Ic = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Fc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Nc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  zc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Uc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  Oc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Bc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Gc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Vc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  kc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Hc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Wc = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  qc = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Xc = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  jc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Yc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Zc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  $c = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Jc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Kc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Qc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  eh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  th = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  nh = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
  ih = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  rh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  sh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  ah = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  oh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  lh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  ch = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  hh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const uh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  dh = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  fh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  ph = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  mh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  gh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  _h = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  xh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  vh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Mh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  yh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Sh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  bh = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  wh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Eh = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Th = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ah = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Ch = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Lh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Dh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Rh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ph = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ih = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Fh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Nh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  zh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Uh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Oh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Bh = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Gh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Vh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  kh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  we = {
    alphamap_fragment: pl,
    alphamap_pars_fragment: ml,
    alphatest_fragment: gl,
    alphatest_pars_fragment: _l,
    aomap_fragment: xl,
    aomap_pars_fragment: vl,
    begin_vertex: Ml,
    beginnormal_vertex: yl,
    bsdfs: Sl,
    iridescence_fragment: bl,
    bumpmap_pars_fragment: wl,
    clipping_planes_fragment: El,
    clipping_planes_pars_fragment: Tl,
    clipping_planes_pars_vertex: Al,
    clipping_planes_vertex: Cl,
    color_fragment: Ll,
    color_pars_fragment: Dl,
    color_pars_vertex: Rl,
    color_vertex: Pl,
    common: Il,
    cube_uv_reflection_fragment: Fl,
    defaultnormal_vertex: Nl,
    displacementmap_pars_vertex: zl,
    displacementmap_vertex: Ul,
    emissivemap_fragment: Ol,
    emissivemap_pars_fragment: Bl,
    encodings_fragment: Gl,
    encodings_pars_fragment: Vl,
    envmap_fragment: kl,
    envmap_common_pars_fragment: Hl,
    envmap_pars_fragment: Wl,
    envmap_pars_vertex: ql,
    envmap_physical_pars_fragment: nc,
    envmap_vertex: Xl,
    fog_vertex: jl,
    fog_pars_vertex: Yl,
    fog_fragment: Zl,
    fog_pars_fragment: $l,
    gradientmap_pars_fragment: Jl,
    lightmap_fragment: Kl,
    lightmap_pars_fragment: Ql,
    lights_lambert_vertex: ec,
    lights_pars_begin: tc,
    lights_toon_fragment: ic,
    lights_toon_pars_fragment: rc,
    lights_phong_fragment: sc,
    lights_phong_pars_fragment: ac,
    lights_physical_fragment: oc,
    lights_physical_pars_fragment: lc,
    lights_fragment_begin: cc,
    lights_fragment_maps: hc,
    lights_fragment_end: uc,
    logdepthbuf_fragment: dc,
    logdepthbuf_pars_fragment: fc,
    logdepthbuf_pars_vertex: pc,
    logdepthbuf_vertex: mc,
    map_fragment: gc,
    map_pars_fragment: _c,
    map_particle_fragment: xc,
    map_particle_pars_fragment: vc,
    metalnessmap_fragment: Mc,
    metalnessmap_pars_fragment: yc,
    morphcolor_vertex: Sc,
    morphnormal_vertex: bc,
    morphtarget_pars_vertex: wc,
    morphtarget_vertex: Ec,
    normal_fragment_begin: Tc,
    normal_fragment_maps: Ac,
    normal_pars_fragment: Cc,
    normal_pars_vertex: Lc,
    normal_vertex: Dc,
    normalmap_pars_fragment: Rc,
    clearcoat_normal_fragment_begin: Pc,
    clearcoat_normal_fragment_maps: Ic,
    clearcoat_pars_fragment: Fc,
    iridescence_pars_fragment: Nc,
    output_fragment: zc,
    packing: Uc,
    premultiplied_alpha_fragment: Oc,
    project_vertex: Bc,
    dithering_fragment: Gc,
    dithering_pars_fragment: Vc,
    roughnessmap_fragment: kc,
    roughnessmap_pars_fragment: Hc,
    shadowmap_pars_fragment: Wc,
    shadowmap_pars_vertex: qc,
    shadowmap_vertex: Xc,
    shadowmask_pars_fragment: jc,
    skinbase_vertex: Yc,
    skinning_pars_vertex: Zc,
    skinning_vertex: $c,
    skinnormal_vertex: Jc,
    specularmap_fragment: Kc,
    specularmap_pars_fragment: Qc,
    tonemapping_fragment: eh,
    tonemapping_pars_fragment: th,
    transmission_fragment: nh,
    transmission_pars_fragment: ih,
    uv_pars_fragment: rh,
    uv_pars_vertex: sh,
    uv_vertex: ah,
    uv2_pars_fragment: oh,
    uv2_pars_vertex: lh,
    uv2_vertex: ch,
    worldpos_vertex: hh,
    background_vert: uh,
    background_frag: dh,
    cube_vert: fh,
    cube_frag: ph,
    depth_vert: mh,
    depth_frag: gh,
    distanceRGBA_vert: _h,
    distanceRGBA_frag: xh,
    equirect_vert: vh,
    equirect_frag: Mh,
    linedashed_vert: yh,
    linedashed_frag: Sh,
    meshbasic_vert: bh,
    meshbasic_frag: wh,
    meshlambert_vert: Eh,
    meshlambert_frag: Th,
    meshmatcap_vert: Ah,
    meshmatcap_frag: Ch,
    meshnormal_vert: Lh,
    meshnormal_frag: Dh,
    meshphong_vert: Rh,
    meshphong_frag: Ph,
    meshphysical_vert: Ih,
    meshphysical_frag: Fh,
    meshtoon_vert: Nh,
    meshtoon_frag: zh,
    points_vert: Uh,
    points_frag: Oh,
    shadow_vert: Bh,
    shadow_frag: Gh,
    sprite_vert: Vh,
    sprite_frag: kh,
  },
  ee = {
    common: {
      diffuse: { value: new ge(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new At() },
      uv2Transform: { value: new At() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Ee(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new ge(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new ge(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new At() },
    },
    sprite: {
      diffuse: { value: new ge(16777215) },
      opacity: { value: 1 },
      center: { value: new Ee(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new At() },
    },
  },
  Et = {
    basic: {
      uniforms: Ye([
        ee.common,
        ee.specularmap,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.fog,
      ]),
      vertexShader: we.meshbasic_vert,
      fragmentShader: we.meshbasic_frag,
    },
    lambert: {
      uniforms: Ye([
        ee.common,
        ee.specularmap,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.fog,
        ee.lights,
        { emissive: { value: new ge(0) } },
      ]),
      vertexShader: we.meshlambert_vert,
      fragmentShader: we.meshlambert_frag,
    },
    phong: {
      uniforms: Ye([
        ee.common,
        ee.specularmap,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.fog,
        ee.lights,
        {
          emissive: { value: new ge(0) },
          specular: { value: new ge(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: we.meshphong_vert,
      fragmentShader: we.meshphong_frag,
    },
    standard: {
      uniforms: Ye([
        ee.common,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.roughnessmap,
        ee.metalnessmap,
        ee.fog,
        ee.lights,
        {
          emissive: { value: new ge(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: we.meshphysical_vert,
      fragmentShader: we.meshphysical_frag,
    },
    toon: {
      uniforms: Ye([
        ee.common,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.gradientmap,
        ee.fog,
        ee.lights,
        { emissive: { value: new ge(0) } },
      ]),
      vertexShader: we.meshtoon_vert,
      fragmentShader: we.meshtoon_frag,
    },
    matcap: {
      uniforms: Ye([
        ee.common,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: we.meshmatcap_vert,
      fragmentShader: we.meshmatcap_frag,
    },
    points: {
      uniforms: Ye([ee.points, ee.fog]),
      vertexShader: we.points_vert,
      fragmentShader: we.points_frag,
    },
    dashed: {
      uniforms: Ye([
        ee.common,
        ee.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: we.linedashed_vert,
      fragmentShader: we.linedashed_frag,
    },
    depth: {
      uniforms: Ye([ee.common, ee.displacementmap]),
      vertexShader: we.depth_vert,
      fragmentShader: we.depth_frag,
    },
    normal: {
      uniforms: Ye([
        ee.common,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: we.meshnormal_vert,
      fragmentShader: we.meshnormal_frag,
    },
    sprite: {
      uniforms: Ye([ee.sprite, ee.fog]),
      vertexShader: we.sprite_vert,
      fragmentShader: we.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new At() }, t2D: { value: null } },
      vertexShader: we.background_vert,
      fragmentShader: we.background_frag,
    },
    cube: {
      uniforms: Ye([ee.envmap, { opacity: { value: 1 } }]),
      vertexShader: we.cube_vert,
      fragmentShader: we.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: we.equirect_vert,
      fragmentShader: we.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Ye([
        ee.common,
        ee.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: we.distanceRGBA_vert,
      fragmentShader: we.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ye([
        ee.lights,
        ee.fog,
        { color: { value: new ge(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: we.shadow_vert,
      fragmentShader: we.shadow_frag,
    },
  };
Et.physical = {
  uniforms: Ye([
    Et.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Ee(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new ge(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Ee() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new ge(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new ge(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag,
};
function Hh(s, e, t, n, i, r) {
  const o = new ge(0);
  let a = i === !0 ? 0 : 1,
    c,
    l,
    h = null,
    d = 0,
    f = null;
  function m(p, u) {
    let v = !1,
      b = u.isScene === !0 ? u.background : null;
    b && b.isTexture && (b = e.get(b));
    const T = s.xr,
      y = T.getSession && T.getSession();
    y && y.environmentBlendMode === "additive" && (b = null),
      b === null ? g(o, a) : b && b.isColor && (g(b, 1), (v = !0)),
      (s.autoClear || v) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      b && (b.isCubeTexture || b.mapping === Pi)
        ? (l === void 0 &&
            ((l = new Ot(
              new kn(1, 1, 1),
              new Gt({
                name: "BackgroundCubeMaterial",
                uniforms: Bn(Et.cube.uniforms),
                vertexShader: Et.cube.vertexShader,
                fragmentShader: Et.cube.fragmentShader,
                side: gt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (E, C, R) {
              this.matrixWorld.copyPosition(R.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(l)),
          (l.material.uniforms.envMap.value = b),
          (l.material.uniforms.flipEnvMap.value =
            b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
          (h !== b || d !== b.version || f !== s.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (h = b),
            (d = b.version),
            (f = s.toneMapping)),
          l.layers.enableAll(),
          p.unshift(l, l.geometry, l.material, 0, 0, null))
        : b &&
          b.isTexture &&
          (c === void 0 &&
            ((c = new Ot(
              new Dr(2, 2),
              new Gt({
                name: "BackgroundMaterial",
                uniforms: Bn(Et.background.uniforms),
                vertexShader: Et.background.vertexShader,
                fragmentShader: Et.background.fragmentShader,
                side: Kn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(c)),
          (c.material.uniforms.t2D.value = b),
          b.matrixAutoUpdate === !0 && b.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(b.matrix),
          (h !== b || d !== b.version || f !== s.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (h = b),
            (d = b.version),
            (f = s.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(p, u) {
    t.buffers.color.setClear(p.r, p.g, p.b, u, r);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, u = 1) {
      o.set(p), (a = u), g(o, a);
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (p) {
      (a = p), g(o, a);
    },
    render: m,
  };
}
function Wh(s, e, t, n) {
  const i = s.getParameter(34921),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || r !== null,
    a = {},
    c = u(null);
  let l = c,
    h = !1;
  function d(P, W, B, q, X) {
    let O = !1;
    if (o) {
      const V = p(q, B, W);
      l !== V && ((l = V), m(l.object)),
        (O = v(P, q, B, X)),
        O && b(P, q, B, X);
    } else {
      const V = W.wireframe === !0;
      (l.geometry !== q.id || l.program !== B.id || l.wireframe !== V) &&
        ((l.geometry = q.id), (l.program = B.id), (l.wireframe = V), (O = !0));
    }
    X !== null && t.update(X, 34963),
      (O || h) &&
        ((h = !1),
        x(P, W, B, q),
        X !== null && s.bindBuffer(34963, t.get(X).buffer));
  }
  function f() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(P) {
    return n.isWebGL2 ? s.bindVertexArray(P) : r.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? s.deleteVertexArray(P) : r.deleteVertexArrayOES(P);
  }
  function p(P, W, B) {
    const q = B.wireframe === !0;
    let X = a[P.id];
    X === void 0 && ((X = {}), (a[P.id] = X));
    let O = X[W.id];
    O === void 0 && ((O = {}), (X[W.id] = O));
    let V = O[q];
    return V === void 0 && ((V = u(f())), (O[q] = V)), V;
  }
  function u(P) {
    const W = [],
      B = [],
      q = [];
    for (let X = 0; X < i; X++) (W[X] = 0), (B[X] = 0), (q[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: W,
      enabledAttributes: B,
      attributeDivisors: q,
      object: P,
      attributes: {},
      index: null,
    };
  }
  function v(P, W, B, q) {
    const X = l.attributes,
      O = W.attributes;
    let V = 0;
    const te = B.getAttributes();
    for (const j in te)
      if (te[j].location >= 0) {
        const ce = X[j];
        let ue = O[j];
        if (
          (ue === void 0 &&
            (j === "instanceMatrix" &&
              P.instanceMatrix &&
              (ue = P.instanceMatrix),
            j === "instanceColor" && P.instanceColor && (ue = P.instanceColor)),
          ce === void 0 || ce.attribute !== ue || (ue && ce.data !== ue.data))
        )
          return !0;
        V++;
      }
    return l.attributesNum !== V || l.index !== q;
  }
  function b(P, W, B, q) {
    const X = {},
      O = W.attributes;
    let V = 0;
    const te = B.getAttributes();
    for (const j in te)
      if (te[j].location >= 0) {
        let ce = O[j];
        ce === void 0 &&
          (j === "instanceMatrix" &&
            P.instanceMatrix &&
            (ce = P.instanceMatrix),
          j === "instanceColor" && P.instanceColor && (ce = P.instanceColor));
        const ue = {};
        (ue.attribute = ce),
          ce && ce.data && (ue.data = ce.data),
          (X[j] = ue),
          V++;
      }
    (l.attributes = X), (l.attributesNum = V), (l.index = q);
  }
  function T() {
    const P = l.newAttributes;
    for (let W = 0, B = P.length; W < B; W++) P[W] = 0;
  }
  function y(P) {
    E(P, 0);
  }
  function E(P, W) {
    const B = l.newAttributes,
      q = l.enabledAttributes,
      X = l.attributeDivisors;
    (B[P] = 1),
      q[P] === 0 && (s.enableVertexAttribArray(P), (q[P] = 1)),
      X[P] !== W &&
        ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](P, W),
        (X[P] = W));
  }
  function C() {
    const P = l.newAttributes,
      W = l.enabledAttributes;
    for (let B = 0, q = W.length; B < q; B++)
      W[B] !== P[B] && (s.disableVertexAttribArray(B), (W[B] = 0));
  }
  function R(P, W, B, q, X, O) {
    n.isWebGL2 === !0 && (B === 5124 || B === 5125)
      ? s.vertexAttribIPointer(P, W, B, X, O)
      : s.vertexAttribPointer(P, W, B, q, X, O);
  }
  function x(P, W, B, q) {
    if (
      n.isWebGL2 === !1 &&
      (P.isInstancedMesh || q.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    T();
    const X = q.attributes,
      O = B.getAttributes(),
      V = W.defaultAttributeValues;
    for (const te in O) {
      const j = O[te];
      if (j.location >= 0) {
        let ie = X[te];
        if (
          (ie === void 0 &&
            (te === "instanceMatrix" &&
              P.instanceMatrix &&
              (ie = P.instanceMatrix),
            te === "instanceColor" &&
              P.instanceColor &&
              (ie = P.instanceColor)),
          ie !== void 0)
        ) {
          const ce = ie.normalized,
            ue = ie.itemSize,
            k = t.get(ie);
          if (k === void 0) continue;
          const Ne = k.buffer,
            Me = k.type,
            ye = k.bytesPerElement;
          if (ie.isInterleavedBufferAttribute) {
            const se = ie.data,
              Ie = se.stride,
              Te = ie.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < j.locationSize; _e++)
                E(j.location + _e, se.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                q._maxInstanceCount === void 0 &&
                (q._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let _e = 0; _e < j.locationSize; _e++) y(j.location + _e);
            s.bindBuffer(34962, Ne);
            for (let _e = 0; _e < j.locationSize; _e++)
              R(
                j.location + _e,
                ue / j.locationSize,
                Me,
                ce,
                Ie * ye,
                (Te + (ue / j.locationSize) * _e) * ye
              );
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let se = 0; se < j.locationSize; se++)
                E(j.location + se, ie.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                q._maxInstanceCount === void 0 &&
                (q._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let se = 0; se < j.locationSize; se++) y(j.location + se);
            s.bindBuffer(34962, Ne);
            for (let se = 0; se < j.locationSize; se++)
              R(
                j.location + se,
                ue / j.locationSize,
                Me,
                ce,
                ue * ye,
                (ue / j.locationSize) * se * ye
              );
          }
        } else if (V !== void 0) {
          const ce = V[te];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                s.vertexAttrib2fv(j.location, ce);
                break;
              case 3:
                s.vertexAttrib3fv(j.location, ce);
                break;
              case 4:
                s.vertexAttrib4fv(j.location, ce);
                break;
              default:
                s.vertexAttrib1fv(j.location, ce);
            }
        }
      }
    }
    C();
  }
  function w() {
    Z();
    for (const P in a) {
      const W = a[P];
      for (const B in W) {
        const q = W[B];
        for (const X in q) g(q[X].object), delete q[X];
        delete W[B];
      }
      delete a[P];
    }
  }
  function I(P) {
    if (a[P.id] === void 0) return;
    const W = a[P.id];
    for (const B in W) {
      const q = W[B];
      for (const X in q) g(q[X].object), delete q[X];
      delete W[B];
    }
    delete a[P.id];
  }
  function N(P) {
    for (const W in a) {
      const B = a[W];
      if (B[P.id] === void 0) continue;
      const q = B[P.id];
      for (const X in q) g(q[X].object), delete q[X];
      delete B[P.id];
    }
  }
  function Z() {
    ne(), (h = !0), l !== c && ((l = c), m(l.object));
  }
  function ne() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: d,
    reset: Z,
    resetDefaultState: ne,
    dispose: w,
    releaseStatesOfGeometry: I,
    releaseStatesOfProgram: N,
    initAttributes: T,
    enableAttribute: y,
    disableUnusedAttributes: C,
  };
}
function qh(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(l) {
    r = l;
  }
  function a(l, h) {
    s.drawArrays(r, l, h), t.update(h, r, 1);
  }
  function c(l, h, d) {
    if (d === 0) return;
    let f, m;
    if (i) (f = s), (m = "drawArraysInstanced");
    else if (
      ((f = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      f === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    f[m](r, l, h, d), t.update(h, r, d);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = c);
}
function Xh(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(R) {
    if (R === "highp") {
      if (
        s.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        s.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      s.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      s.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    (typeof WebGL2RenderingContext != "undefined" &&
      s instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext != "undefined" &&
      s instanceof WebGL2ComputeRenderingContext);
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = r(a);
  c !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      c,
      "instead."
    ),
    (a = c));
  const l = o || e.has("WEBGL_draw_buffers"),
    h = t.logarithmicDepthBuffer === !0,
    d = s.getParameter(34930),
    f = s.getParameter(35660),
    m = s.getParameter(3379),
    g = s.getParameter(34076),
    p = s.getParameter(34921),
    u = s.getParameter(36347),
    v = s.getParameter(36348),
    b = s.getParameter(36349),
    T = f > 0,
    y = o || e.has("OES_texture_float"),
    E = T && y,
    C = o ? s.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: u,
    maxVaryings: v,
    maxFragmentUniforms: b,
    vertexTextures: T,
    floatFragmentTextures: y,
    floatVertexTextures: E,
    maxSamples: C,
  };
}
function jh(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const o = new nn(),
    a = new At(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f, m) {
      const g = d.length !== 0 || f || n !== 0 || i;
      return (i = f), (t = h(d, m, 0)), (n = d.length), g;
    }),
    (this.beginShadows = function () {
      (r = !0), h(null);
    }),
    (this.endShadows = function () {
      (r = !1), l();
    }),
    (this.setState = function (d, f, m) {
      const g = d.clippingPlanes,
        p = d.clipIntersection,
        u = d.clipShadows,
        v = s.get(d);
      if (!i || g === null || g.length === 0 || (r && !u)) r ? h(null) : l();
      else {
        const b = r ? 0 : n,
          T = b * 4;
        let y = v.clippingState || null;
        (c.value = y), (y = h(g, f, T, m));
        for (let E = 0; E !== T; ++E) y[E] = t[E];
        (v.clippingState = y),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += b);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function h(d, f, m, g) {
    const p = d !== null ? d.length : 0;
    let u = null;
    if (p !== 0) {
      if (((u = c.value), g !== !0 || u === null)) {
        const v = m + p * 4,
          b = f.matrixWorldInverse;
        a.getNormalMatrix(b),
          (u === null || u.length < v) && (u = new Float32Array(v));
        for (let T = 0, y = m; T !== p; ++T, y += 4)
          o.copy(d[T]).applyMatrix4(b, a),
            o.normal.toArray(u, y),
            (u[y + 3] = o.constant);
      }
      (c.value = u), (c.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), u;
  }
}
function Yh(s) {
  let e = new WeakMap();
  function t(o, a) {
    return a === vr ? (o.mapping = zn) : a === Mr && (o.mapping = Un), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === vr || a === Mr)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new hl(c.height / 2);
            return (
              l.fromEquirectangularTexture(s, o),
              e.set(o, l),
              o.addEventListener("dispose", i),
              t(l.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Sa extends va {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      o = n + e,
      a = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += l * this.view.offsetX),
        (o = r + l * this.view.width),
        (a -= h * this.view.offsetY),
        (c = a - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Pn = 4,
  Rs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  sn = 20,
  fr = new Sa(),
  Ps = new ge();
let pr = null;
const rn = (1 + Math.sqrt(5)) / 2,
  Dn = 1 / rn,
  Is = [
    new L(1, 1, 1),
    new L(-1, 1, 1),
    new L(1, 1, -1),
    new L(-1, 1, -1),
    new L(0, rn, Dn),
    new L(0, rn, -Dn),
    new L(Dn, 0, rn),
    new L(-Dn, 0, rn),
    new L(rn, Dn, 0),
    new L(-rn, Dn, 0),
  ];
class Fs {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (pr = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Us()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = zs()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(pr),
      (e.scissorTest = !1),
      Ti(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === zn || e.mapping === Un
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (pr = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: lt,
        minFilter: lt,
        generateMipmaps: !1,
        type: Qn,
        format: mt,
        encoding: dn,
        depthBuffer: !1,
      },
      i = Ns(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Ns(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Zh(r)),
        (this._blurMaterial = $h(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Ot(this._lodPlanes[0], e);
    this._renderer.compile(t, fr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new ct(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      d = h.autoClear,
      f = h.toneMapping;
    h.getClearColor(Ps), (h.toneMapping = Bt), (h.autoClear = !1);
    const m = new Cr({
        name: "PMREM.Background",
        side: gt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Ot(new kn(), m);
    let p = !1;
    const u = e.background;
    u
      ? u.isColor && (m.color.copy(u), (e.background = null), (p = !0))
      : (m.color.copy(Ps), (p = !0));
    for (let v = 0; v < 6; v++) {
      const b = v % 3;
      b === 0
        ? (a.up.set(0, c[v], 0), a.lookAt(l[v], 0, 0))
        : b === 1
        ? (a.up.set(0, 0, c[v]), a.lookAt(0, l[v], 0))
        : (a.up.set(0, c[v], 0), a.lookAt(0, 0, l[v]));
      const T = this._cubeSize;
      Ti(i, b * T, v > 2 ? T : 0, T, T),
        h.setRenderTarget(i),
        p && h.render(g, a),
        h.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = f),
      (h.autoClear = d),
      (e.background = u);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === zn || e.mapping === Un;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Us()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = zs());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new Ot(this._lodPlanes[0], r),
      a = r.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Ti(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, fr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = Is[(i - 1) % Is.length];
      this._blur(e, i - 1, i, r, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", r),
      this._halfBlur(o, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const c = this._renderer,
      l = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const h = 3,
      d = new Ot(this._lodPlanes[i], l),
      f = l.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * sn - 1),
      p = r / g,
      u = isFinite(r) ? 1 + Math.floor(h * p) : sn;
    u > sn &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${sn}`
      );
    const v = [];
    let b = 0;
    for (let R = 0; R < sn; ++R) {
      const x = R / p,
        w = Math.exp((-x * x) / 2);
      v.push(w), R === 0 ? (b += w) : R < u && (b += 2 * w);
    }
    for (let R = 0; R < v.length; R++) v[R] = v[R] / b;
    (f.envMap.value = e.texture),
      (f.samples.value = u),
      (f.weights.value = v),
      (f.latitudinal.value = o === "latitudinal"),
      a && (f.poleAxis.value = a);
    const { _lodMax: T } = this;
    (f.dTheta.value = g), (f.mipInt.value = T - n);
    const y = this._sizeLods[i],
      E = 3 * y * (i > T - Pn ? i - T + Pn : 0),
      C = 4 * (this._cubeSize - y);
    Ti(t, E, C, 3 * y, 2 * y), c.setRenderTarget(t), c.render(d, fr);
  }
}
function Zh(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - Pn + 1 + Rs.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > s - Pn ? (c = Rs[o - s + Pn - 1]) : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2),
      h = -l,
      d = 1 + l,
      f = [h, h, d, h, d, d, h, h, d, d, h, d],
      m = 6,
      g = 6,
      p = 3,
      u = 2,
      v = 1,
      b = new Float32Array(p * g * m),
      T = new Float32Array(u * g * m),
      y = new Float32Array(v * g * m);
    for (let C = 0; C < m; C++) {
      const R = ((C % 3) * 2) / 3 - 1,
        x = C > 2 ? 0 : -1,
        w = [
          R,
          x,
          0,
          R + 2 / 3,
          x,
          0,
          R + 2 / 3,
          x + 1,
          0,
          R,
          x,
          0,
          R + 2 / 3,
          x + 1,
          0,
          R,
          x + 1,
          0,
        ];
      b.set(w, p * g * C), T.set(f, u * g * C);
      const I = [C, C, C, C, C, C];
      y.set(I, v * g * C);
    }
    const E = new Jt();
    E.setAttribute("position", new Ct(b, p)),
      E.setAttribute("uv", new Ct(T, u)),
      E.setAttribute("faceIndex", new Ct(y, v)),
      e.push(E),
      i > Pn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ns(s, e, t) {
  const n = new $t(s, e, t);
  return (
    (n.texture.mapping = Pi),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Ti(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function $h(s, e, t) {
  const n = new Float32Array(sn),
    i = new L(0, 1, 0);
  return new Gt({
    name: "SphericalGaussianBlur",
    defines: {
      n: sn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Rr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Zt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function zs() {
  return new Gt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Rr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Zt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Us() {
  return new Gt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Rr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Zt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Rr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Jh(s) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping,
        l = c === vr || c === Mr,
        h = c === zn || c === Un;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return (
            t === null && (t = new Fs(s)),
            (d = l ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d)),
            e.set(a, d),
            d.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const d = a.image;
            if ((l && d && d.height > 0) || (h && d && i(d))) {
              t === null && (t = new Fs(s));
              const f = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", r), f.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++) a[h] !== void 0 && c++;
    return c === l;
  }
  function r(a) {
    const c = a.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Kh(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Qh(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(d, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener("dispose", o),
        (i[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function c(d) {
    const f = d.attributes;
    for (const g in f) e.update(f[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let u = 0, v = p.length; u < v; u++) e.update(p[u], 34962);
    }
  }
  function l(d) {
    const f = [],
      m = d.index,
      g = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const b = m.array;
      p = m.version;
      for (let T = 0, y = b.length; T < y; T += 3) {
        const E = b[T + 0],
          C = b[T + 1],
          R = b[T + 2];
        f.push(E, C, C, R, R, E);
      }
    } else {
      const b = g.array;
      p = g.version;
      for (let T = 0, y = b.length / 3 - 1; T < y; T += 3) {
        const E = T + 0,
          C = T + 1,
          R = T + 2;
        f.push(E, C, C, R, R, E);
      }
    }
    const u = new (ua(f) ? xa : _a)(f, 1);
    u.version = p;
    const v = r.get(d);
    v && e.remove(v), r.set(d, u);
  }
  function h(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else l(d);
    return r.get(d);
  }
  return { get: a, update: c, getWireframeAttribute: h };
}
function eu(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(f) {
    r = f;
  }
  let a, c;
  function l(f) {
    (a = f.type), (c = f.bytesPerElement);
  }
  function h(f, m) {
    s.drawElements(r, m, a, f * c), t.update(m, r, 1);
  }
  function d(f, m, g) {
    if (g === 0) return;
    let p, u;
    if (i) (p = s), (u = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (u = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[u](r, m, a, f * c, g), t.update(m, r, g);
  }
  (this.setMode = o),
    (this.setIndex = l),
    (this.render = h),
    (this.renderInstances = d);
}
function tu(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += a * (r / 3);
        break;
      case 1:
        t.lines += a * (r / 2);
        break;
      case 3:
        t.lines += a * (r - 1);
        break;
      case 2:
        t.lines += a * r;
        break;
      case 0:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function nu(s, e) {
  return s[0] - e[0];
}
function iu(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function mr(s, e) {
  let t = 1;
  const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  n instanceof Int8Array
    ? (t = 127)
    : n instanceof Int16Array
    ? (t = 32767)
    : n instanceof Int32Array
    ? (t = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        n
      ),
    s.divideScalar(t);
}
function ru(s, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    o = new qe(),
    a = [];
  for (let l = 0; l < 8; l++) a[l] = [l, 0];
  function c(l, h, d, f) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          h.morphAttributes.position ||
          h.morphAttributes.normal ||
          h.morphAttributes.color,
        p = g !== void 0 ? g.length : 0;
      let u = r.get(h);
      if (u === void 0 || u.count !== p) {
        let W = function () {
          ne.dispose(), r.delete(h), h.removeEventListener("dispose", W);
        };
        u !== void 0 && u.texture.dispose();
        const T = h.morphAttributes.position !== void 0,
          y = h.morphAttributes.normal !== void 0,
          E = h.morphAttributes.color !== void 0,
          C = h.morphAttributes.position || [],
          R = h.morphAttributes.normal || [],
          x = h.morphAttributes.color || [];
        let w = 0;
        T === !0 && (w = 1), y === !0 && (w = 2), E === !0 && (w = 3);
        let I = h.attributes.position.count * w,
          N = 1;
        I > e.maxTextureSize &&
          ((N = Math.ceil(I / e.maxTextureSize)), (I = e.maxTextureSize));
        const Z = new Float32Array(I * N * 4 * p),
          ne = new ma(Z, I, N, p);
        (ne.type = on), (ne.needsUpdate = !0);
        const P = w * 4;
        for (let B = 0; B < p; B++) {
          const q = C[B],
            X = R[B],
            O = x[B],
            V = I * N * 4 * B;
          for (let te = 0; te < q.count; te++) {
            const j = te * P;
            T === !0 &&
              (o.fromBufferAttribute(q, te),
              q.normalized === !0 && mr(o, q),
              (Z[V + j + 0] = o.x),
              (Z[V + j + 1] = o.y),
              (Z[V + j + 2] = o.z),
              (Z[V + j + 3] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(X, te),
                X.normalized === !0 && mr(o, X),
                (Z[V + j + 4] = o.x),
                (Z[V + j + 5] = o.y),
                (Z[V + j + 6] = o.z),
                (Z[V + j + 7] = 0)),
              E === !0 &&
                (o.fromBufferAttribute(O, te),
                O.normalized === !0 && mr(o, O),
                (Z[V + j + 8] = o.x),
                (Z[V + j + 9] = o.y),
                (Z[V + j + 10] = o.z),
                (Z[V + j + 11] = O.itemSize === 4 ? o.w : 1));
          }
        }
        (u = { count: p, texture: ne, size: new Ee(I, N) }),
          r.set(h, u),
          h.addEventListener("dispose", W);
      }
      let v = 0;
      for (let T = 0; T < m.length; T++) v += m[T];
      const b = h.morphTargetsRelative ? 1 : 1 - v;
      f.getUniforms().setValue(s, "morphTargetBaseInfluence", b),
        f.getUniforms().setValue(s, "morphTargetInfluences", m),
        f.getUniforms().setValue(s, "morphTargetsTexture", u.texture, t),
        f.getUniforms().setValue(s, "morphTargetsTextureSize", u.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = n[h.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let y = 0; y < g; y++) p[y] = [y, 0];
        n[h.id] = p;
      }
      for (let y = 0; y < g; y++) {
        const E = p[y];
        (E[0] = y), (E[1] = m[y]);
      }
      p.sort(iu);
      for (let y = 0; y < 8; y++)
        y < g && p[y][1]
          ? ((a[y][0] = p[y][0]), (a[y][1] = p[y][1]))
          : ((a[y][0] = Number.MAX_SAFE_INTEGER), (a[y][1] = 0));
      a.sort(nu);
      const u = h.morphAttributes.position,
        v = h.morphAttributes.normal;
      let b = 0;
      for (let y = 0; y < 8; y++) {
        const E = a[y],
          C = E[0],
          R = E[1];
        C !== Number.MAX_SAFE_INTEGER && R
          ? (u &&
              h.getAttribute("morphTarget" + y) !== u[C] &&
              h.setAttribute("morphTarget" + y, u[C]),
            v &&
              h.getAttribute("morphNormal" + y) !== v[C] &&
              h.setAttribute("morphNormal" + y, v[C]),
            (i[y] = R),
            (b += R))
          : (u &&
              h.hasAttribute("morphTarget" + y) === !0 &&
              h.deleteAttribute("morphTarget" + y),
            v &&
              h.hasAttribute("morphNormal" + y) === !0 &&
              h.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const T = h.morphTargetsRelative ? 1 : 1 - b;
      f.getUniforms().setValue(s, "morphTargetBaseInfluence", T),
        f.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return { update: c };
}
function su(s, e, t, n) {
  let i = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      h = c.geometry,
      d = e.get(c, h);
    return (
      i.get(d) !== l && (e.update(d), i.set(d, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", a) === !1 &&
          c.addEventListener("dispose", a),
        t.update(c.instanceMatrix, 34962),
        c.instanceColor !== null && t.update(c.instanceColor, 34962)),
      d
    );
  }
  function o() {
    i = new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: o };
}
const ba = new _t(),
  wa = new ma(),
  Ea = new Yo(),
  Ta = new Ma(),
  Os = [],
  Bs = [],
  Gs = new Float32Array(16),
  Vs = new Float32Array(9),
  ks = new Float32Array(4);
function Hn(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Os[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (Os[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), s[o].toArray(r, a);
  }
  return r;
}
function Je(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function Ke(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function Fi(s, e) {
  let t = Bs[e];
  t === void 0 && ((t = new Int32Array(e)), (Bs[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function au(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function ou(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Je(t, e)) return;
    s.uniform2fv(this.addr, e), Ke(t, e);
  }
}
function lu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Je(t, e)) return;
    s.uniform3fv(this.addr, e), Ke(t, e);
  }
}
function cu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Je(t, e)) return;
    s.uniform4fv(this.addr, e), Ke(t, e);
  }
}
function hu(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Je(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (Je(t, n)) return;
    ks.set(n), s.uniformMatrix2fv(this.addr, !1, ks), Ke(t, n);
  }
}
function uu(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Je(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (Je(t, n)) return;
    Vs.set(n), s.uniformMatrix3fv(this.addr, !1, Vs), Ke(t, n);
  }
}
function du(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Je(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (Je(t, n)) return;
    Gs.set(n), s.uniformMatrix4fv(this.addr, !1, Gs), Ke(t, n);
  }
}
function fu(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function pu(s, e) {
  const t = this.cache;
  Je(t, e) || (s.uniform2iv(this.addr, e), Ke(t, e));
}
function mu(s, e) {
  const t = this.cache;
  Je(t, e) || (s.uniform3iv(this.addr, e), Ke(t, e));
}
function gu(s, e) {
  const t = this.cache;
  Je(t, e) || (s.uniform4iv(this.addr, e), Ke(t, e));
}
function _u(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function xu(s, e) {
  const t = this.cache;
  Je(t, e) || (s.uniform2uiv(this.addr, e), Ke(t, e));
}
function vu(s, e) {
  const t = this.cache;
  Je(t, e) || (s.uniform3uiv(this.addr, e), Ke(t, e));
}
function Mu(s, e) {
  const t = this.cache;
  Je(t, e) || (s.uniform4uiv(this.addr, e), Ke(t, e));
}
function yu(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || ba, i);
}
function Su(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Ea, i);
}
function bu(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Ta, i);
}
function wu(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || wa, i);
}
function Eu(s) {
  switch (s) {
    case 5126:
      return au;
    case 35664:
      return ou;
    case 35665:
      return lu;
    case 35666:
      return cu;
    case 35674:
      return hu;
    case 35675:
      return uu;
    case 35676:
      return du;
    case 5124:
    case 35670:
      return fu;
    case 35667:
    case 35671:
      return pu;
    case 35668:
    case 35672:
      return mu;
    case 35669:
    case 35673:
      return gu;
    case 5125:
      return _u;
    case 36294:
      return xu;
    case 36295:
      return vu;
    case 36296:
      return Mu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yu;
    case 35679:
    case 36299:
    case 36307:
      return Su;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wu;
  }
}
function Tu(s, e) {
  s.uniform1fv(this.addr, e);
}
function Au(s, e) {
  const t = Hn(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Cu(s, e) {
  const t = Hn(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Lu(s, e) {
  const t = Hn(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Du(s, e) {
  const t = Hn(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Ru(s, e) {
  const t = Hn(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Pu(s, e) {
  const t = Hn(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Iu(s, e) {
  s.uniform1iv(this.addr, e);
}
function Fu(s, e) {
  s.uniform2iv(this.addr, e);
}
function Nu(s, e) {
  s.uniform3iv(this.addr, e);
}
function zu(s, e) {
  s.uniform4iv(this.addr, e);
}
function Uu(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Ou(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Bu(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Gu(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Vu(s, e, t) {
  const n = e.length,
    i = Fi(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture2D(e[r] || ba, i[r]);
}
function ku(s, e, t) {
  const n = e.length,
    i = Fi(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture3D(e[r] || Ea, i[r]);
}
function Hu(s, e, t) {
  const n = e.length,
    i = Fi(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTextureCube(e[r] || Ta, i[r]);
}
function Wu(s, e, t) {
  const n = e.length,
    i = Fi(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture2DArray(e[r] || wa, i[r]);
}
function qu(s) {
  switch (s) {
    case 5126:
      return Tu;
    case 35664:
      return Au;
    case 35665:
      return Cu;
    case 35666:
      return Lu;
    case 35674:
      return Du;
    case 35675:
      return Ru;
    case 35676:
      return Pu;
    case 5124:
    case 35670:
      return Iu;
    case 35667:
    case 35671:
      return Fu;
    case 35668:
    case 35672:
      return Nu;
    case 35669:
    case 35673:
      return zu;
    case 5125:
      return Uu;
    case 36294:
      return Ou;
    case 36295:
      return Bu;
    case 36296:
      return Gu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vu;
    case 35679:
    case 36299:
    case 36307:
      return ku;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Hu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Wu;
  }
}
class Xu {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = Eu(t.type));
  }
}
class ju {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = qu(t.type));
  }
}
class Yu {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const gr = /(\w+)(\])?(\[|\.)?/g;
function Hs(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function Zu(s, e, t) {
  const n = s.name,
    i = n.length;
  for (gr.lastIndex = 0; ; ) {
    const r = gr.exec(n),
      o = gr.lastIndex;
    let a = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (a = a | 0), l === void 0 || (l === "[" && o + 2 === i))) {
      Hs(t, l === void 0 ? new Xu(a, s, e) : new ju(a, s, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && ((d = new Yu(a)), Hs(t, d)), (t = d);
    }
  }
}
class Li {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, r.name);
      Zu(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r],
        c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Ws(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let $u = 0;
function Ju(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Ku(s) {
  switch (s) {
    case dn:
      return ["Linear", "( value )"];
    case ze:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
        ["Linear", "( value )"]
      );
  }
}
function qs(s, e, t) {
  const n = s.getShaderParameter(e, 35713),
    i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Ju(s.getShaderSource(e), o)
    );
  } else return i;
}
function Qu(s, e) {
  const t = Ku(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ed(s, e) {
  let t;
  switch (e) {
    case yo:
      t = "Linear";
      break;
    case So:
      t = "Reinhard";
      break;
    case bo:
      t = "OptimizedCineon";
      break;
    case wo:
      t = "ACESFilmic";
      break;
    case Eo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function td(s) {
  return [
    s.extensionDerivatives ||
    !!s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.tangentSpaceNormalMap ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Jn).join(`
`);
}
function nd(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function id(s, e) {
  const t = {},
    n = s.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      o = r.name;
    let a = 1;
    r.type === 35674 && (a = 2),
      r.type === 35675 && (a = 3),
      r.type === 35676 && (a = 4),
      (t[o] = {
        type: r.type,
        location: s.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function Jn(s) {
  return s !== "";
}
function Xs(s, e) {
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function js(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const rd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Er(s) {
  return s.replace(rd, sd);
}
function sd(s, e) {
  const t = we[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Er(t);
}
const ad =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  od =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ys(s) {
  return s.replace(od, Aa).replace(ad, ld);
}
function ld(s, e, t, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    Aa(s, e, t, n)
  );
}
function Aa(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Zs(s) {
  let e =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function cd(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === aa
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === Ja
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === $n && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function hd(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case zn:
      case Un:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Pi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function ud(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Un:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function dd(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Ri:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case vo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Mo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function fd(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function pd(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const c = cd(t),
    l = hd(t),
    h = ud(t),
    d = dd(t),
    f = fd(t),
    m = t.isWebGL2 ? "" : td(t),
    g = nd(r),
    p = i.createProgram();
  let u,
    v,
    b = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((u = [g].filter(Jn).join(`
`)),
      u.length > 0 &&
        (u += `
`),
      (v = [m, g].filter(Jn).join(`
`)),
      v.length > 0 &&
        (v += `
`))
    : ((u = [
        Zs(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Jn).join(`
`)),
      (v = [
        m,
        Zs(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Bt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Bt ? we.tonemapping_pars_fragment : "",
        t.toneMapping !== Bt ? ed("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        we.encodings_pars_fragment,
        Qu("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Jn).join(`
`))),
    (o = Er(o)),
    (o = Xs(o, t)),
    (o = js(o, t)),
    (a = Er(a)),
    (a = Xs(a, t)),
    (a = js(a, t)),
    (o = Ys(o)),
    (a = Ys(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((b = `#version 300 es
`),
      (u =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        u),
      (v =
        [
          "#define varying in",
          t.glslVersion === _s
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === _s ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        v));
  const T = b + u + o,
    y = b + v + a,
    E = Ws(i, 35633, T),
    C = Ws(i, 35632, y);
  if (
    (i.attachShader(p, E),
    i.attachShader(p, C),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"),
    i.linkProgram(p),
    s.debug.checkShaderErrors)
  ) {
    const w = i.getProgramInfoLog(p).trim(),
      I = i.getShaderInfoLog(E).trim(),
      N = i.getShaderInfoLog(C).trim();
    let Z = !0,
      ne = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      Z = !1;
      const P = qs(i, E, "vertex"),
        W = qs(i, C, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          w +
          `
` +
          P +
          `
` +
          W
      );
    } else
      w !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", w)
        : (I === "" || N === "") && (ne = !1);
    ne &&
      (this.diagnostics = {
        runnable: Z,
        programLog: w,
        vertexShader: { log: I, prefix: u },
        fragmentShader: { log: N, prefix: v },
      });
  }
  i.deleteShader(E), i.deleteShader(C);
  let R;
  this.getUniforms = function () {
    return R === void 0 && (R = new Li(i, p)), R;
  };
  let x;
  return (
    (this.getAttributes = function () {
      return x === void 0 && (x = id(i, p)), x;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = $u++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = E),
    (this.fragmentShader = C),
    this
  );
}
let md = 0;
class gd {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    return t.has(e) === !1 && t.set(e, new Set()), t.get(e);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    if (t.has(e) === !1) {
      const n = new _d(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class _d {
  constructor(e) {
    (this.id = md++), (this.code = e), (this.usedTimes = 0);
  }
}
function xd(s, e, t, n, i, r, o) {
  const a = new ga(),
    c = new gd(),
    l = [],
    h = i.isWebGL2,
    d = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function p(x, w, I, N, Z) {
    const ne = N.fog,
      P = Z.geometry,
      W = x.isMeshStandardMaterial ? N.environment : null,
      B = (x.isMeshStandardMaterial ? t : e).get(x.envMap || W),
      q = !!B && B.mapping === Pi ? B.image.height : null,
      X = g[x.type];
    x.precision !== null &&
      ((m = i.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const O =
        P.morphAttributes.position ||
        P.morphAttributes.normal ||
        P.morphAttributes.color,
      V = O !== void 0 ? O.length : 0;
    let te = 0;
    P.morphAttributes.position !== void 0 && (te = 1),
      P.morphAttributes.normal !== void 0 && (te = 2),
      P.morphAttributes.color !== void 0 && (te = 3);
    let j, ie, ce, ue;
    if (X) {
      const Ie = Et[X];
      (j = Ie.vertexShader), (ie = Ie.fragmentShader);
    } else
      (j = x.vertexShader),
        (ie = x.fragmentShader),
        c.update(x),
        (ce = c.getVertexShaderID(x)),
        (ue = c.getFragmentShaderID(x));
    const k = s.getRenderTarget(),
      Ne = x.alphaTest > 0,
      Me = x.clearcoat > 0,
      ye = x.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: X,
      shaderName: x.type,
      vertexShader: j,
      fragmentShader: ie,
      defines: x.defines,
      customVertexShaderID: ce,
      customFragmentShaderID: ue,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: Z.isInstancedMesh === !0,
      instancingColor: Z.isInstancedMesh === !0 && Z.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding:
        k === null
          ? s.outputEncoding
          : k.isXRRenderTarget === !0
          ? k.texture.encoding
          : dn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!B,
      envMapMode: B && B.mapping,
      envMapCubeUVHeight: q,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === Wo,
      tangentSpaceNormalMap: x.normalMapType === Gn,
      decodeVideoTexture:
        !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === ze,
      clearcoat: Me,
      clearcoatMap: Me && !!x.clearcoatMap,
      clearcoatRoughnessMap: Me && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: Me && !!x.clearcoatNormalMap,
      iridescence: ye,
      iridescenceMap: ye && !!x.iridescenceMap,
      iridescenceThicknessMap: ye && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === In,
      alphaMap: !!x.alphaMap,
      alphaTest: Ne,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!P.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!P.attributes.color &&
        P.attributes.color.itemSize === 4,
      vertexUvs:
        !!x.map ||
        !!x.bumpMap ||
        !!x.normalMap ||
        !!x.specularMap ||
        !!x.alphaMap ||
        !!x.emissiveMap ||
        !!x.roughnessMap ||
        !!x.metalnessMap ||
        !!x.clearcoatMap ||
        !!x.clearcoatRoughnessMap ||
        !!x.clearcoatNormalMap ||
        !!x.iridescenceMap ||
        !!x.iridescenceThicknessMap ||
        !!x.displacementMap ||
        !!x.transmissionMap ||
        !!x.thicknessMap ||
        !!x.specularIntensityMap ||
        !!x.specularColorMap ||
        !!x.sheenColorMap ||
        !!x.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!x.map ||
          !!x.bumpMap ||
          !!x.normalMap ||
          !!x.specularMap ||
          !!x.alphaMap ||
          !!x.emissiveMap ||
          !!x.roughnessMap ||
          !!x.metalnessMap ||
          !!x.clearcoatNormalMap ||
          !!x.iridescenceMap ||
          !!x.iridescenceThicknessMap ||
          x.transmission > 0 ||
          !!x.transmissionMap ||
          !!x.thicknessMap ||
          !!x.specularIntensityMap ||
          !!x.specularColorMap ||
          x.sheen > 0 ||
          !!x.sheenColorMap ||
          !!x.sheenRoughnessMap
        ) && !!x.displacementMap,
      fog: !!ne,
      useFog: x.fog === !0,
      fogExp2: ne && ne.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: Z.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: V,
      morphTextureStride: te,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: s.shadowMap.enabled && I.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: x.toneMapped ? s.toneMapping : Bt,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Nn,
      flipSided: x.side === gt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }
  function u(x) {
    const w = [];
    if (
      (x.shaderID
        ? w.push(x.shaderID)
        : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const I in x.defines) w.push(I), w.push(x.defines[I]);
    return (
      x.isRawShaderMaterial === !1 &&
        (v(w, x), b(w, x), w.push(s.outputEncoding)),
      w.push(x.customProgramCacheKey),
      w.join()
    );
  }
  function v(x, w) {
    x.push(w.precision),
      x.push(w.outputEncoding),
      x.push(w.envMapMode),
      x.push(w.envMapCubeUVHeight),
      x.push(w.combine),
      x.push(w.vertexUvs),
      x.push(w.fogExp2),
      x.push(w.sizeAttenuation),
      x.push(w.morphTargetsCount),
      x.push(w.morphAttributeCount),
      x.push(w.numDirLights),
      x.push(w.numPointLights),
      x.push(w.numSpotLights),
      x.push(w.numHemiLights),
      x.push(w.numRectAreaLights),
      x.push(w.numDirLightShadows),
      x.push(w.numPointLightShadows),
      x.push(w.numSpotLightShadows),
      x.push(w.shadowMapType),
      x.push(w.toneMapping),
      x.push(w.numClippingPlanes),
      x.push(w.numClipIntersection),
      x.push(w.depthPacking);
  }
  function b(x, w) {
    a.disableAll(),
      w.isWebGL2 && a.enable(0),
      w.supportsVertexTextures && a.enable(1),
      w.instancing && a.enable(2),
      w.instancingColor && a.enable(3),
      w.map && a.enable(4),
      w.matcap && a.enable(5),
      w.envMap && a.enable(6),
      w.lightMap && a.enable(7),
      w.aoMap && a.enable(8),
      w.emissiveMap && a.enable(9),
      w.bumpMap && a.enable(10),
      w.normalMap && a.enable(11),
      w.objectSpaceNormalMap && a.enable(12),
      w.tangentSpaceNormalMap && a.enable(13),
      w.clearcoat && a.enable(14),
      w.clearcoatMap && a.enable(15),
      w.clearcoatRoughnessMap && a.enable(16),
      w.clearcoatNormalMap && a.enable(17),
      w.iridescence && a.enable(18),
      w.iridescenceMap && a.enable(19),
      w.iridescenceThicknessMap && a.enable(20),
      w.displacementMap && a.enable(21),
      w.specularMap && a.enable(22),
      w.roughnessMap && a.enable(23),
      w.metalnessMap && a.enable(24),
      w.gradientMap && a.enable(25),
      w.alphaMap && a.enable(26),
      w.alphaTest && a.enable(27),
      w.vertexColors && a.enable(28),
      w.vertexAlphas && a.enable(29),
      w.vertexUvs && a.enable(30),
      w.vertexTangents && a.enable(31),
      w.uvsVertexOnly && a.enable(32),
      w.fog && a.enable(33),
      x.push(a.mask),
      a.disableAll(),
      w.useFog && a.enable(0),
      w.flatShading && a.enable(1),
      w.logarithmicDepthBuffer && a.enable(2),
      w.skinning && a.enable(3),
      w.morphTargets && a.enable(4),
      w.morphNormals && a.enable(5),
      w.morphColors && a.enable(6),
      w.premultipliedAlpha && a.enable(7),
      w.shadowMapEnabled && a.enable(8),
      w.physicallyCorrectLights && a.enable(9),
      w.doubleSided && a.enable(10),
      w.flipSided && a.enable(11),
      w.useDepthPacking && a.enable(12),
      w.dithering && a.enable(13),
      w.specularIntensityMap && a.enable(14),
      w.specularColorMap && a.enable(15),
      w.transmission && a.enable(16),
      w.transmissionMap && a.enable(17),
      w.thicknessMap && a.enable(18),
      w.sheen && a.enable(19),
      w.sheenColorMap && a.enable(20),
      w.sheenRoughnessMap && a.enable(21),
      w.decodeVideoTexture && a.enable(22),
      w.opaque && a.enable(23),
      x.push(a.mask);
  }
  function T(x) {
    const w = g[x.type];
    let I;
    if (w) {
      const N = Et[w];
      I = al.clone(N.uniforms);
    } else I = x.uniforms;
    return I;
  }
  function y(x, w) {
    let I;
    for (let N = 0, Z = l.length; N < Z; N++) {
      const ne = l[N];
      if (ne.cacheKey === w) {
        (I = ne), ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && ((I = new pd(s, w, x, r)), l.push(I)), I;
  }
  function E(x) {
    if (--x.usedTimes === 0) {
      const w = l.indexOf(x);
      (l[w] = l[l.length - 1]), l.pop(), x.destroy();
    }
  }
  function C(x) {
    c.remove(x);
  }
  function R() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: u,
    getUniforms: T,
    acquireProgram: y,
    releaseProgram: E,
    releaseShaderCache: C,
    programs: l,
    dispose: R,
  };
}
function vd() {
  let s = new WeakMap();
  function e(r) {
    let o = s.get(r);
    return o === void 0 && ((o = {}), s.set(r, o)), o;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Md(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function $s(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function Js() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(d, f, m, g, p, u) {
    let v = s[e];
    return (
      v === void 0
        ? ((v = {
            id: d.id,
            object: d,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: p,
            group: u,
          }),
          (s[e] = v))
        : ((v.id = d.id),
          (v.object = d),
          (v.geometry = f),
          (v.material = m),
          (v.groupOrder = g),
          (v.renderOrder = d.renderOrder),
          (v.z = p),
          (v.group = u)),
      e++,
      v
    );
  }
  function a(d, f, m, g, p, u) {
    const v = o(d, f, m, g, p, u);
    m.transmission > 0
      ? n.push(v)
      : m.transparent === !0
      ? i.push(v)
      : t.push(v);
  }
  function c(d, f, m, g, p, u) {
    const v = o(d, f, m, g, p, u);
    m.transmission > 0
      ? n.unshift(v)
      : m.transparent === !0
      ? i.unshift(v)
      : t.unshift(v);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || Md),
      n.length > 1 && n.sort(f || $s),
      i.length > 1 && i.sort(f || $s);
  }
  function h() {
    for (let d = e, f = s.length; d < f; d++) {
      const m = s[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: c,
    finish: h,
    sort: l,
  };
}
function yd() {
  let s = new WeakMap();
  function e(n, i) {
    let r;
    return (
      s.has(n) === !1
        ? ((r = new Js()), s.set(n, [r]))
        : i >= s.get(n).length
        ? ((r = new Js()), s.get(n).push(r))
        : (r = s.get(n)[i]),
      r
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Sd() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new L(), color: new ge() };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new ge(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new L(), color: new ge(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new L(), skyColor: new ge(), groundColor: new ge() };
          break;
        case "RectAreaLight":
          t = {
            color: new ge(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function bd() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let wd = 0;
function Ed(s, e) {
  return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0);
}
function Td(s, e) {
  const t = new Sd(),
    n = bd(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let h = 0; h < 9; h++) i.probe.push(new L());
  const r = new L(),
    o = new ke(),
    a = new ke();
  function c(h, d) {
    let f = 0,
      m = 0,
      g = 0;
    for (let w = 0; w < 9; w++) i.probe[w].set(0, 0, 0);
    let p = 0,
      u = 0,
      v = 0,
      b = 0,
      T = 0,
      y = 0,
      E = 0,
      C = 0;
    h.sort(Ed);
    const R = d !== !0 ? Math.PI : 1;
    for (let w = 0, I = h.length; w < I; w++) {
      const N = h[w],
        Z = N.color,
        ne = N.intensity,
        P = N.distance,
        W = N.shadow && N.shadow.map ? N.shadow.map.texture : null;
      if (N.isAmbientLight)
        (f += Z.r * ne * R), (m += Z.g * ne * R), (g += Z.b * ne * R);
      else if (N.isLightProbe)
        for (let B = 0; B < 9; B++)
          i.probe[B].addScaledVector(N.sh.coefficients[B], ne);
      else if (N.isDirectionalLight) {
        const B = t.get(N);
        if (
          (B.color.copy(N.color).multiplyScalar(N.intensity * R), N.castShadow)
        ) {
          const q = N.shadow,
            X = n.get(N);
          (X.shadowBias = q.bias),
            (X.shadowNormalBias = q.normalBias),
            (X.shadowRadius = q.radius),
            (X.shadowMapSize = q.mapSize),
            (i.directionalShadow[p] = X),
            (i.directionalShadowMap[p] = W),
            (i.directionalShadowMatrix[p] = N.shadow.matrix),
            y++;
        }
        (i.directional[p] = B), p++;
      } else if (N.isSpotLight) {
        const B = t.get(N);
        if (
          (B.position.setFromMatrixPosition(N.matrixWorld),
          B.color.copy(Z).multiplyScalar(ne * R),
          (B.distance = P),
          (B.coneCos = Math.cos(N.angle)),
          (B.penumbraCos = Math.cos(N.angle * (1 - N.penumbra))),
          (B.decay = N.decay),
          N.castShadow)
        ) {
          const q = N.shadow,
            X = n.get(N);
          (X.shadowBias = q.bias),
            (X.shadowNormalBias = q.normalBias),
            (X.shadowRadius = q.radius),
            (X.shadowMapSize = q.mapSize),
            (i.spotShadow[v] = X),
            (i.spotShadowMap[v] = W),
            (i.spotShadowMatrix[v] = N.shadow.matrix),
            C++;
        }
        (i.spot[v] = B), v++;
      } else if (N.isRectAreaLight) {
        const B = t.get(N);
        B.color.copy(Z).multiplyScalar(ne),
          B.halfWidth.set(N.width * 0.5, 0, 0),
          B.halfHeight.set(0, N.height * 0.5, 0),
          (i.rectArea[b] = B),
          b++;
      } else if (N.isPointLight) {
        const B = t.get(N);
        if (
          (B.color.copy(N.color).multiplyScalar(N.intensity * R),
          (B.distance = N.distance),
          (B.decay = N.decay),
          N.castShadow)
        ) {
          const q = N.shadow,
            X = n.get(N);
          (X.shadowBias = q.bias),
            (X.shadowNormalBias = q.normalBias),
            (X.shadowRadius = q.radius),
            (X.shadowMapSize = q.mapSize),
            (X.shadowCameraNear = q.camera.near),
            (X.shadowCameraFar = q.camera.far),
            (i.pointShadow[u] = X),
            (i.pointShadowMap[u] = W),
            (i.pointShadowMatrix[u] = N.shadow.matrix),
            E++;
        }
        (i.point[u] = B), u++;
      } else if (N.isHemisphereLight) {
        const B = t.get(N);
        B.skyColor.copy(N.color).multiplyScalar(ne * R),
          B.groundColor.copy(N.groundColor).multiplyScalar(ne * R),
          (i.hemi[T] = B),
          T++;
      }
    }
    b > 0 &&
      (e.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ee.LTC_FLOAT_1), (i.rectAreaLTC2 = ee.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ee.LTC_HALF_1), (i.rectAreaLTC2 = ee.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = f),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const x = i.hash;
    (x.directionalLength !== p ||
      x.pointLength !== u ||
      x.spotLength !== v ||
      x.rectAreaLength !== b ||
      x.hemiLength !== T ||
      x.numDirectionalShadows !== y ||
      x.numPointShadows !== E ||
      x.numSpotShadows !== C) &&
      ((i.directional.length = p),
      (i.spot.length = v),
      (i.rectArea.length = b),
      (i.point.length = u),
      (i.hemi.length = T),
      (i.directionalShadow.length = y),
      (i.directionalShadowMap.length = y),
      (i.pointShadow.length = E),
      (i.pointShadowMap.length = E),
      (i.spotShadow.length = C),
      (i.spotShadowMap.length = C),
      (i.directionalShadowMatrix.length = y),
      (i.pointShadowMatrix.length = E),
      (i.spotShadowMatrix.length = C),
      (x.directionalLength = p),
      (x.pointLength = u),
      (x.spotLength = v),
      (x.rectAreaLength = b),
      (x.hemiLength = T),
      (x.numDirectionalShadows = y),
      (x.numPointShadows = E),
      (x.numSpotShadows = C),
      (i.version = wd++));
  }
  function l(h, d) {
    let f = 0,
      m = 0,
      g = 0,
      p = 0,
      u = 0;
    const v = d.matrixWorldInverse;
    for (let b = 0, T = h.length; b < T; b++) {
      const y = h[b];
      if (y.isDirectionalLight) {
        const E = i.directional[f];
        E.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(v),
          f++;
      } else if (y.isSpotLight) {
        const E = i.spot[g];
        E.position.setFromMatrixPosition(y.matrixWorld),
          E.position.applyMatrix4(v),
          E.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(v),
          g++;
      } else if (y.isRectAreaLight) {
        const E = i.rectArea[p];
        E.position.setFromMatrixPosition(y.matrixWorld),
          E.position.applyMatrix4(v),
          a.identity(),
          o.copy(y.matrixWorld),
          o.premultiply(v),
          a.extractRotation(o),
          E.halfWidth.set(y.width * 0.5, 0, 0),
          E.halfHeight.set(0, y.height * 0.5, 0),
          E.halfWidth.applyMatrix4(a),
          E.halfHeight.applyMatrix4(a),
          p++;
      } else if (y.isPointLight) {
        const E = i.point[m];
        E.position.setFromMatrixPosition(y.matrixWorld),
          E.position.applyMatrix4(v),
          m++;
      } else if (y.isHemisphereLight) {
        const E = i.hemi[u];
        E.direction.setFromMatrixPosition(y.matrixWorld),
          E.direction.transformDirection(v),
          u++;
      }
    }
  }
  return { setup: c, setupView: l, state: i };
}
function Ks(s, e) {
  const t = new Td(s, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    i.push(d);
  }
  function c(d) {
    t.setup(n, d);
  }
  function l(d) {
    t.setupView(n, d);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a,
  };
}
function Ad(s, e) {
  let t = new WeakMap();
  function n(r, o = 0) {
    let a;
    return (
      t.has(r) === !1
        ? ((a = new Ks(s, e)), t.set(r, [a]))
        : o >= t.get(r).length
        ? ((a = new Ks(s, e)), t.get(r).push(a))
        : (a = t.get(r)[o]),
      a
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class Ca extends Xe {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = ko),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class La extends Xe {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new L()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Cd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Ld = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Dd(s, e, t) {
  let n = new Lr();
  const i = new Ee(),
    r = new Ee(),
    o = new qe(),
    a = new Ca({ depthPacking: Ho }),
    c = new La(),
    l = {},
    h = t.maxTextureSize,
    d = { 0: gt, 1: Kn, 2: Nn },
    f = new Gt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ee() },
        radius: { value: 4 },
      },
      vertexShader: Cd,
      fragmentShader: Ld,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Jt();
  g.setAttribute(
    "position",
    new Ct(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new Ot(g, f),
    u = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = aa),
    (this.render = function (y, E, C) {
      if (
        u.enabled === !1 ||
        (u.autoUpdate === !1 && u.needsUpdate === !1) ||
        y.length === 0
      )
        return;
      const R = s.getRenderTarget(),
        x = s.getActiveCubeFace(),
        w = s.getActiveMipmapLevel(),
        I = s.state;
      I.setBlending(Zt),
        I.buffers.color.setClear(1, 1, 1, 1),
        I.buffers.depth.setTest(!0),
        I.setScissorTest(!1);
      for (let N = 0, Z = y.length; N < Z; N++) {
        const ne = y[N],
          P = ne.shadow;
        if (P === void 0) {
          console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
          continue;
        }
        if (P.autoUpdate === !1 && P.needsUpdate === !1) continue;
        i.copy(P.mapSize);
        const W = P.getFrameExtents();
        if (
          (i.multiply(W),
          r.copy(P.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((r.x = Math.floor(h / W.x)),
              (i.x = r.x * W.x),
              (P.mapSize.x = r.x)),
            i.y > h &&
              ((r.y = Math.floor(h / W.y)),
              (i.y = r.y * W.y),
              (P.mapSize.y = r.y))),
          P.map === null &&
            !P.isPointLightShadow &&
            this.type === $n &&
            ((P.map = new $t(i.x, i.y)),
            (P.map.texture.name = ne.name + ".shadowMap"),
            (P.mapPass = new $t(i.x, i.y)),
            P.camera.updateProjectionMatrix()),
          P.map === null)
        ) {
          const q = { minFilter: et, magFilter: et, format: mt };
          (P.map = new $t(i.x, i.y, q)),
            (P.map.texture.name = ne.name + ".shadowMap"),
            P.camera.updateProjectionMatrix();
        }
        s.setRenderTarget(P.map), s.clear();
        const B = P.getViewportCount();
        for (let q = 0; q < B; q++) {
          const X = P.getViewport(q);
          o.set(r.x * X.x, r.y * X.y, r.x * X.z, r.y * X.w),
            I.viewport(o),
            P.updateMatrices(ne, q),
            (n = P.getFrustum()),
            T(E, C, P.camera, ne, this.type);
        }
        !P.isPointLightShadow && this.type === $n && v(P, C),
          (P.needsUpdate = !1);
      }
      (u.needsUpdate = !1), s.setRenderTarget(R, x, w);
    });
  function v(y, E) {
    const C = e.update(p);
    f.defines.VSM_SAMPLES !== y.blurSamples &&
      ((f.defines.VSM_SAMPLES = y.blurSamples),
      (m.defines.VSM_SAMPLES = y.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      (f.uniforms.shadow_pass.value = y.map.texture),
      (f.uniforms.resolution.value = y.mapSize),
      (f.uniforms.radius.value = y.radius),
      s.setRenderTarget(y.mapPass),
      s.clear(),
      s.renderBufferDirect(E, null, C, f, p, null),
      (m.uniforms.shadow_pass.value = y.mapPass.texture),
      (m.uniforms.resolution.value = y.mapSize),
      (m.uniforms.radius.value = y.radius),
      s.setRenderTarget(y.map),
      s.clear(),
      s.renderBufferDirect(E, null, C, m, p, null);
  }
  function b(y, E, C, R, x, w) {
    let I = null;
    const N =
      C.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (
      (N !== void 0 ? (I = N) : (I = C.isPointLight === !0 ? c : a),
      (s.localClippingEnabled &&
        E.clipShadows === !0 &&
        E.clippingPlanes.length !== 0) ||
        (E.displacementMap && E.displacementScale !== 0) ||
        (E.alphaMap && E.alphaTest > 0))
    ) {
      const Z = I.uuid,
        ne = E.uuid;
      let P = l[Z];
      P === void 0 && ((P = {}), (l[Z] = P));
      let W = P[ne];
      W === void 0 && ((W = I.clone()), (P[ne] = W)), (I = W);
    }
    return (
      (I.visible = E.visible),
      (I.wireframe = E.wireframe),
      w === $n
        ? (I.side = E.shadowSide !== null ? E.shadowSide : E.side)
        : (I.side = E.shadowSide !== null ? E.shadowSide : d[E.side]),
      (I.alphaMap = E.alphaMap),
      (I.alphaTest = E.alphaTest),
      (I.clipShadows = E.clipShadows),
      (I.clippingPlanes = E.clippingPlanes),
      (I.clipIntersection = E.clipIntersection),
      (I.displacementMap = E.displacementMap),
      (I.displacementScale = E.displacementScale),
      (I.displacementBias = E.displacementBias),
      (I.wireframeLinewidth = E.wireframeLinewidth),
      (I.linewidth = E.linewidth),
      C.isPointLight === !0 &&
        I.isMeshDistanceMaterial === !0 &&
        (I.referencePosition.setFromMatrixPosition(C.matrixWorld),
        (I.nearDistance = R),
        (I.farDistance = x)),
      I
    );
  }
  function T(y, E, C, R, x) {
    if (y.visible === !1) return;
    if (
      y.layers.test(E.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && x === $n)) &&
      (!y.frustumCulled || n.intersectsObject(y))
    ) {
      y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, y.matrixWorld);
      const N = e.update(y),
        Z = y.material;
      if (Array.isArray(Z)) {
        const ne = N.groups;
        for (let P = 0, W = ne.length; P < W; P++) {
          const B = ne[P],
            q = Z[B.materialIndex];
          if (q && q.visible) {
            const X = b(y, q, R, C.near, C.far, x);
            s.renderBufferDirect(C, null, N, X, y, B);
          }
        }
      } else if (Z.visible) {
        const ne = b(y, Z, R, C.near, C.far, x);
        s.renderBufferDirect(C, null, N, ne, y, null);
      }
    }
    const I = y.children;
    for (let N = 0, Z = I.length; N < Z; N++) T(I[N], E, C, R, x);
  }
}
function Rd(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let A = !1;
    const Q = new qe();
    let K = null;
    const de = new qe(0, 0, 0, 0);
    return {
      setMask: function (oe) {
        K !== oe && !A && (s.colorMask(oe, oe, oe, oe), (K = oe));
      },
      setLocked: function (oe) {
        A = oe;
      },
      setClear: function (oe, pe, $, me, De) {
        De === !0 && ((oe *= me), (pe *= me), ($ *= me)),
          Q.set(oe, pe, $, me),
          de.equals(Q) === !1 && (s.clearColor(oe, pe, $, me), de.copy(Q));
      },
      reset: function () {
        (A = !1), (K = null), de.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let A = !1,
      Q = null,
      K = null,
      de = null;
    return {
      setTest: function (oe) {
        oe ? ue(2929) : k(2929);
      },
      setMask: function (oe) {
        Q !== oe && !A && (s.depthMask(oe), (Q = oe));
      },
      setFunc: function (oe) {
        if (K !== oe) {
          if (oe)
            switch (oe) {
              case uo:
                s.depthFunc(512);
                break;
              case fo:
                s.depthFunc(519);
                break;
              case po:
                s.depthFunc(513);
                break;
              case xr:
                s.depthFunc(515);
                break;
              case mo:
                s.depthFunc(514);
                break;
              case go:
                s.depthFunc(518);
                break;
              case _o:
                s.depthFunc(516);
                break;
              case xo:
                s.depthFunc(517);
                break;
              default:
                s.depthFunc(515);
            }
          else s.depthFunc(515);
          K = oe;
        }
      },
      setLocked: function (oe) {
        A = oe;
      },
      setClear: function (oe) {
        de !== oe && (s.clearDepth(oe), (de = oe));
      },
      reset: function () {
        (A = !1), (Q = null), (K = null), (de = null);
      },
    };
  }
  function o() {
    let A = !1,
      Q = null,
      K = null,
      de = null,
      oe = null,
      pe = null,
      $ = null,
      me = null,
      De = null;
    return {
      setTest: function (Re) {
        A || (Re ? ue(2960) : k(2960));
      },
      setMask: function (Re) {
        Q !== Re && !A && (s.stencilMask(Re), (Q = Re));
      },
      setFunc: function (Re, Ze, vt) {
        (K !== Re || de !== Ze || oe !== vt) &&
          (s.stencilFunc(Re, Ze, vt), (K = Re), (de = Ze), (oe = vt));
      },
      setOp: function (Re, Ze, vt) {
        (pe !== Re || $ !== Ze || me !== vt) &&
          (s.stencilOp(Re, Ze, vt), (pe = Re), ($ = Ze), (me = vt));
      },
      setLocked: function (Re) {
        A = Re;
      },
      setClear: function (Re) {
        De !== Re && (s.clearStencil(Re), (De = Re));
      },
      reset: function () {
        (A = !1),
          (Q = null),
          (K = null),
          (de = null),
          (oe = null),
          (pe = null),
          ($ = null),
          (me = null),
          (De = null);
      },
    };
  }
  const a = new i(),
    c = new r(),
    l = new o();
  let h = {},
    d = {},
    f = new WeakMap(),
    m = [],
    g = null,
    p = !1,
    u = null,
    v = null,
    b = null,
    T = null,
    y = null,
    E = null,
    C = null,
    R = !1,
    x = null,
    w = null,
    I = null,
    N = null,
    Z = null;
  const ne = s.getParameter(35661);
  let P = !1,
    W = 0;
  const B = s.getParameter(7938);
  B.indexOf("WebGL") !== -1
    ? ((W = parseFloat(/^WebGL (\d)/.exec(B)[1])), (P = W >= 1))
    : B.indexOf("OpenGL ES") !== -1 &&
      ((W = parseFloat(/^OpenGL ES (\d)/.exec(B)[1])), (P = W >= 2));
  let q = null,
    X = {};
  const O = s.getParameter(3088),
    V = s.getParameter(2978),
    te = new qe().fromArray(O),
    j = new qe().fromArray(V);
  function ie(A, Q, K) {
    const de = new Uint8Array(4),
      oe = s.createTexture();
    s.bindTexture(A, oe),
      s.texParameteri(A, 10241, 9728),
      s.texParameteri(A, 10240, 9728);
    for (let pe = 0; pe < K; pe++)
      s.texImage2D(Q + pe, 0, 6408, 1, 1, 0, 6408, 5121, de);
    return oe;
  }
  const ce = {};
  (ce[3553] = ie(3553, 3553, 1)),
    (ce[34067] = ie(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    ue(2929),
    c.setFunc(xr),
    je(!1),
    Qe(Vr),
    ue(2884),
    Te(Zt);
  function ue(A) {
    h[A] !== !0 && (s.enable(A), (h[A] = !0));
  }
  function k(A) {
    h[A] !== !1 && (s.disable(A), (h[A] = !1));
  }
  function Ne(A, Q) {
    return d[A] !== Q
      ? (s.bindFramebuffer(A, Q),
        (d[A] = Q),
        n && (A === 36009 && (d[36160] = Q), A === 36160 && (d[36009] = Q)),
        !0)
      : !1;
  }
  function Me(A, Q) {
    let K = m,
      de = !1;
    if (A)
      if (
        ((K = f.get(Q)),
        K === void 0 && ((K = []), f.set(Q, K)),
        A.isWebGLMultipleRenderTargets)
      ) {
        const oe = A.texture;
        if (K.length !== oe.length || K[0] !== 36064) {
          for (let pe = 0, $ = oe.length; pe < $; pe++) K[pe] = 36064 + pe;
          (K.length = oe.length), (de = !0);
        }
      } else K[0] !== 36064 && ((K[0] = 36064), (de = !0));
    else K[0] !== 1029 && ((K[0] = 1029), (de = !0));
    de &&
      (t.isWebGL2
        ? s.drawBuffers(K)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K));
  }
  function ye(A) {
    return g !== A ? (s.useProgram(A), (g = A), !0) : !1;
  }
  const se = { [Rn]: 32774, [eo]: 32778, [to]: 32779 };
  if (n) (se[qr] = 32775), (se[Xr] = 32776);
  else {
    const A = e.get("EXT_blend_minmax");
    A !== null && ((se[qr] = A.MIN_EXT), (se[Xr] = A.MAX_EXT));
  }
  const Ie = {
    [no]: 0,
    [io]: 1,
    [ro]: 768,
    [oa]: 770,
    [ho]: 776,
    [lo]: 774,
    [ao]: 772,
    [so]: 769,
    [la]: 771,
    [co]: 775,
    [oo]: 773,
  };
  function Te(A, Q, K, de, oe, pe, $, me) {
    if (A === Zt) {
      p === !0 && (k(3042), (p = !1));
      return;
    }
    if ((p === !1 && (ue(3042), (p = !0)), A !== Qa)) {
      if (A !== u || me !== R) {
        if (
          ((v !== Rn || y !== Rn) &&
            (s.blendEquation(32774), (v = Rn), (y = Rn)),
          me)
        )
          switch (A) {
            case In:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case kr:
              s.blendFunc(1, 1);
              break;
            case Hr:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Wr:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        else
          switch (A) {
            case In:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case kr:
              s.blendFunc(770, 1);
              break;
            case Hr:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Wr:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        (b = null), (T = null), (E = null), (C = null), (u = A), (R = me);
      }
      return;
    }
    (oe = oe || Q),
      (pe = pe || K),
      ($ = $ || de),
      (Q !== v || oe !== y) &&
        (s.blendEquationSeparate(se[Q], se[oe]), (v = Q), (y = oe)),
      (K !== b || de !== T || pe !== E || $ !== C) &&
        (s.blendFuncSeparate(Ie[K], Ie[de], Ie[pe], Ie[$]),
        (b = K),
        (T = de),
        (E = pe),
        (C = $)),
      (u = A),
      (R = null);
  }
  function _e(A, Q) {
    A.side === Nn ? k(2884) : ue(2884);
    let K = A.side === gt;
    Q && (K = !K),
      je(K),
      A.blending === In && A.transparent === !1
        ? Te(Zt)
        : Te(
            A.blending,
            A.blendEquation,
            A.blendSrc,
            A.blendDst,
            A.blendEquationAlpha,
            A.blendSrcAlpha,
            A.blendDstAlpha,
            A.premultipliedAlpha
          ),
      c.setFunc(A.depthFunc),
      c.setTest(A.depthTest),
      c.setMask(A.depthWrite),
      a.setMask(A.colorWrite);
    const de = A.stencilWrite;
    l.setTest(de),
      de &&
        (l.setMask(A.stencilWriteMask),
        l.setFunc(A.stencilFunc, A.stencilRef, A.stencilFuncMask),
        l.setOp(A.stencilFail, A.stencilZFail, A.stencilZPass)),
      xt(A.polygonOffset, A.polygonOffsetFactor, A.polygonOffsetUnits),
      A.alphaToCoverage === !0 ? ue(32926) : k(32926);
  }
  function je(A) {
    x !== A && (A ? s.frontFace(2304) : s.frontFace(2305), (x = A));
  }
  function Qe(A) {
    A !== Za
      ? (ue(2884),
        A !== w &&
          (A === Vr
            ? s.cullFace(1029)
            : A === $a
            ? s.cullFace(1028)
            : s.cullFace(1032)))
      : k(2884),
      (w = A);
  }
  function it(A) {
    A !== I && (P && s.lineWidth(A), (I = A));
  }
  function xt(A, Q, K) {
    A
      ? (ue(32823),
        (N !== Q || Z !== K) && (s.polygonOffset(Q, K), (N = Q), (Z = K)))
      : k(32823);
  }
  function He(A) {
    A ? ue(3089) : k(3089);
  }
  function Fe(A) {
    A === void 0 && (A = 33984 + ne - 1),
      q !== A && (s.activeTexture(A), (q = A));
  }
  function Dt(A, Q) {
    q === null && Fe();
    let K = X[q];
    K === void 0 && ((K = { type: void 0, texture: void 0 }), (X[q] = K)),
      (K.type !== A || K.texture !== Q) &&
        (s.bindTexture(A, Q || ce[A]), (K.type = A), (K.texture = Q));
  }
  function Rt() {
    const A = X[q];
    A !== void 0 &&
      A.type !== void 0 &&
      (s.bindTexture(A.type, null), (A.type = void 0), (A.texture = void 0));
  }
  function S() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function _() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function G() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Y() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function J() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function re() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function xe() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function U() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function he(A) {
    te.equals(A) === !1 && (s.scissor(A.x, A.y, A.z, A.w), te.copy(A));
  }
  function le(A) {
    j.equals(A) === !1 && (s.viewport(A.x, A.y, A.z, A.w), j.copy(A));
  }
  function ae() {
    s.disable(3042),
      s.disable(2884),
      s.disable(2929),
      s.disable(32823),
      s.disable(3089),
      s.disable(2960),
      s.disable(32926),
      s.blendEquation(32774),
      s.blendFunc(1, 0),
      s.blendFuncSeparate(1, 0, 1, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(513),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(519, 0, 4294967295),
      s.stencilOp(7680, 7680, 7680),
      s.clearStencil(0),
      s.cullFace(1029),
      s.frontFace(2305),
      s.polygonOffset(0, 0),
      s.activeTexture(33984),
      s.bindFramebuffer(36160, null),
      n === !0 &&
        (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (h = {}),
      (q = null),
      (X = {}),
      (d = {}),
      (f = new WeakMap()),
      (m = []),
      (g = null),
      (p = !1),
      (u = null),
      (v = null),
      (b = null),
      (T = null),
      (y = null),
      (E = null),
      (C = null),
      (R = !1),
      (x = null),
      (w = null),
      (I = null),
      (N = null),
      (Z = null),
      te.set(0, 0, s.canvas.width, s.canvas.height),
      j.set(0, 0, s.canvas.width, s.canvas.height),
      a.reset(),
      c.reset(),
      l.reset();
  }
  return {
    buffers: { color: a, depth: c, stencil: l },
    enable: ue,
    disable: k,
    bindFramebuffer: Ne,
    drawBuffers: Me,
    useProgram: ye,
    setBlending: Te,
    setMaterial: _e,
    setFlipSided: je,
    setCullFace: Qe,
    setLineWidth: it,
    setPolygonOffset: xt,
    setScissorTest: He,
    activeTexture: Fe,
    bindTexture: Dt,
    unbindTexture: Rt,
    compressedTexImage2D: S,
    texImage2D: xe,
    texImage3D: U,
    texStorage2D: J,
    texStorage3D: re,
    texSubImage2D: _,
    texSubImage3D: G,
    compressedTexSubImage2D: Y,
    scissor: he,
    viewport: le,
    reset: ae,
  };
}
function Pd(s, e, t, n, i, r, o) {
  const a = i.isWebGL2,
    c = i.maxTextures,
    l = i.maxCubemapSize,
    h = i.maxTextureSize,
    d = i.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let p;
  const u = new WeakMap();
  let v = !1;
  try {
    v =
      typeof OffscreenCanvas != "undefined" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function b(S, _) {
    return v ? new OffscreenCanvas(S, _) : Di("canvas");
  }
  function T(S, _, G, Y) {
    let J = 1;
    if (
      ((S.width > Y || S.height > Y) && (J = Y / Math.max(S.width, S.height)),
      J < 1 || _ === !0)
    )
      if (
        (typeof HTMLImageElement != "undefined" &&
          S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement != "undefined" &&
          S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap != "undefined" && S instanceof ImageBitmap)
      ) {
        const re = _ ? wr : Math.floor,
          xe = re(J * S.width),
          U = re(J * S.height);
        p === void 0 && (p = b(xe, U));
        const he = G ? b(xe, U) : p;
        return (
          (he.width = xe),
          (he.height = U),
          he.getContext("2d").drawImage(S, 0, 0, xe, U),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              S.width +
              "x" +
              S.height +
              ") to (" +
              xe +
              "x" +
              U +
              ")."
          ),
          he
        );
      } else
        return (
          "data" in S &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                S.width +
                "x" +
                S.height +
                ")."
            ),
          S
        );
    return S;
  }
  function y(S) {
    return vs(S.width) && vs(S.height);
  }
  function E(S) {
    return a
      ? !1
      : S.wrapS !== pt ||
          S.wrapT !== pt ||
          (S.minFilter !== et && S.minFilter !== lt);
  }
  function C(S, _) {
    return S.generateMipmaps && _ && S.minFilter !== et && S.minFilter !== lt;
  }
  function R(S) {
    s.generateMipmap(S);
  }
  function x(S, _, G, Y, J = !1) {
    if (a === !1) return _;
    if (S !== null) {
      if (s[S] !== void 0) return s[S];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let re = _;
    return (
      _ === 6403 &&
        (G === 5126 && (re = 33326),
        G === 5131 && (re = 33325),
        G === 5121 && (re = 33321)),
      _ === 33319 &&
        (G === 5126 && (re = 33328),
        G === 5131 && (re = 33327),
        G === 5121 && (re = 33323)),
      _ === 6408 &&
        (G === 5126 && (re = 34836),
        G === 5131 && (re = 34842),
        G === 5121 && (re = Y === ze && J === !1 ? 35907 : 32856),
        G === 32819 && (re = 32854),
        G === 32820 && (re = 32855)),
      (re === 33325 ||
        re === 33326 ||
        re === 33327 ||
        re === 33328 ||
        re === 34842 ||
        re === 34836) &&
        e.get("EXT_color_buffer_float"),
      re
    );
  }
  function w(S, _, G) {
    return C(S, G) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== et && S.minFilter !== lt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : S.mipmaps !== void 0 && S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? _.mipmaps.length
      : 1;
  }
  function I(S) {
    return S === et || S === jr || S === Yr ? 9728 : 9729;
  }
  function N(S) {
    const _ = S.target;
    _.removeEventListener("dispose", N), ne(_), _.isVideoTexture && g.delete(_);
  }
  function Z(S) {
    const _ = S.target;
    _.removeEventListener("dispose", Z), W(_);
  }
  function ne(S) {
    const _ = n.get(S);
    if (_.__webglInit === void 0) return;
    const G = S.source,
      Y = u.get(G);
    if (Y) {
      const J = Y[_.__cacheKey];
      J.usedTimes--,
        J.usedTimes === 0 && P(S),
        Object.keys(Y).length === 0 && u.delete(G);
    }
    n.remove(S);
  }
  function P(S) {
    const _ = n.get(S);
    s.deleteTexture(_.__webglTexture);
    const G = S.source,
      Y = u.get(G);
    delete Y[_.__cacheKey], o.memory.textures--;
  }
  function W(S) {
    const _ = S.texture,
      G = n.get(S),
      Y = n.get(_);
    if (
      (Y.__webglTexture !== void 0 &&
        (s.deleteTexture(Y.__webglTexture), o.memory.textures--),
      S.depthTexture && S.depthTexture.dispose(),
      S.isWebGLCubeRenderTarget)
    )
      for (let J = 0; J < 6; J++)
        s.deleteFramebuffer(G.__webglFramebuffer[J]),
          G.__webglDepthbuffer && s.deleteRenderbuffer(G.__webglDepthbuffer[J]);
    else {
      if (
        (s.deleteFramebuffer(G.__webglFramebuffer),
        G.__webglDepthbuffer && s.deleteRenderbuffer(G.__webglDepthbuffer),
        G.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(G.__webglMultisampledFramebuffer),
        G.__webglColorRenderbuffer)
      )
        for (let J = 0; J < G.__webglColorRenderbuffer.length; J++)
          G.__webglColorRenderbuffer[J] &&
            s.deleteRenderbuffer(G.__webglColorRenderbuffer[J]);
      G.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(G.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let J = 0, re = _.length; J < re; J++) {
        const xe = n.get(_[J]);
        xe.__webglTexture &&
          (s.deleteTexture(xe.__webglTexture), o.memory.textures--),
          n.remove(_[J]);
      }
    n.remove(_), n.remove(S);
  }
  let B = 0;
  function q() {
    B = 0;
  }
  function X() {
    const S = B;
    return (
      S >= c &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            S +
            " texture units while this GPU supports only " +
            c
        ),
      (B += 1),
      S
    );
  }
  function O(S) {
    const _ = [];
    return (
      _.push(S.wrapS),
      _.push(S.wrapT),
      _.push(S.magFilter),
      _.push(S.minFilter),
      _.push(S.anisotropy),
      _.push(S.internalFormat),
      _.push(S.format),
      _.push(S.type),
      _.push(S.generateMipmaps),
      _.push(S.premultiplyAlpha),
      _.push(S.flipY),
      _.push(S.unpackAlignment),
      _.push(S.encoding),
      _.join()
    );
  }
  function V(S, _) {
    const G = n.get(S);
    if (
      (S.isVideoTexture && Dt(S),
      S.isRenderTargetTexture === !1 &&
        S.version > 0 &&
        G.__version !== S.version)
    ) {
      const Y = S.image;
      if (Y === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (Y.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Me(G, S, _);
        return;
      }
    }
    t.activeTexture(33984 + _), t.bindTexture(3553, G.__webglTexture);
  }
  function te(S, _) {
    const G = n.get(S);
    if (S.version > 0 && G.__version !== S.version) {
      Me(G, S, _);
      return;
    }
    t.activeTexture(33984 + _), t.bindTexture(35866, G.__webglTexture);
  }
  function j(S, _) {
    const G = n.get(S);
    if (S.version > 0 && G.__version !== S.version) {
      Me(G, S, _);
      return;
    }
    t.activeTexture(33984 + _), t.bindTexture(32879, G.__webglTexture);
  }
  function ie(S, _) {
    const G = n.get(S);
    if (S.version > 0 && G.__version !== S.version) {
      ye(G, S, _);
      return;
    }
    t.activeTexture(33984 + _), t.bindTexture(34067, G.__webglTexture);
  }
  const ce = { [yr]: 10497, [pt]: 33071, [Sr]: 33648 },
    ue = {
      [et]: 9728,
      [jr]: 9984,
      [Yr]: 9986,
      [lt]: 9729,
      [To]: 9985,
      [Ii]: 9987,
    };
  function k(S, _, G) {
    if (
      (G
        ? (s.texParameteri(S, 10242, ce[_.wrapS]),
          s.texParameteri(S, 10243, ce[_.wrapT]),
          (S === 32879 || S === 35866) &&
            s.texParameteri(S, 32882, ce[_.wrapR]),
          s.texParameteri(S, 10240, ue[_.magFilter]),
          s.texParameteri(S, 10241, ue[_.minFilter]))
        : (s.texParameteri(S, 10242, 33071),
          s.texParameteri(S, 10243, 33071),
          (S === 32879 || S === 35866) && s.texParameteri(S, 32882, 33071),
          (_.wrapS !== pt || _.wrapT !== pt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(S, 10240, I(_.magFilter)),
          s.texParameteri(S, 10241, I(_.minFilter)),
          _.minFilter !== et &&
            _.minFilter !== lt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const Y = e.get("EXT_texture_filter_anisotropic");
      if (
        (_.type === on && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          _.type === Qn &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) &&
        (s.texParameterf(
          S,
          Y.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(_).__currentAnisotropy = _.anisotropy));
    }
  }
  function Ne(S, _) {
    let G = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), _.addEventListener("dispose", N));
    const Y = _.source;
    let J = u.get(Y);
    J === void 0 && ((J = {}), u.set(Y, J));
    const re = O(_);
    if (re !== S.__cacheKey) {
      J[re] === void 0 &&
        ((J[re] = { texture: s.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (G = !0)),
        J[re].usedTimes++;
      const xe = J[S.__cacheKey];
      xe !== void 0 &&
        (J[S.__cacheKey].usedTimes--, xe.usedTimes === 0 && P(_)),
        (S.__cacheKey = re),
        (S.__webglTexture = J[re].texture);
    }
    return G;
  }
  function Me(S, _, G) {
    let Y = 3553;
    _.isDataArrayTexture && (Y = 35866), _.isData3DTexture && (Y = 32879);
    const J = Ne(S, _),
      re = _.source;
    if (
      (t.activeTexture(33984 + G),
      t.bindTexture(Y, S.__webglTexture),
      re.version !== re.__currentVersion || J === !0)
    ) {
      s.pixelStorei(37440, _.flipY),
        s.pixelStorei(37441, _.premultiplyAlpha),
        s.pixelStorei(3317, _.unpackAlignment),
        s.pixelStorei(37443, 0);
      const xe = E(_) && y(_.image) === !1;
      let U = T(_.image, xe, !1, h);
      U = Rt(_, U);
      const he = y(U) || a,
        le = r.convert(_.format, _.encoding);
      let ae = r.convert(_.type),
        A = x(_.internalFormat, le, ae, _.encoding, _.isVideoTexture);
      k(Y, _, he);
      let Q;
      const K = _.mipmaps,
        de = a && _.isVideoTexture !== !0,
        oe = re.__currentVersion === void 0 || J === !0,
        pe = w(_, U, he);
      if (_.isDepthTexture)
        (A = 6402),
          a
            ? _.type === on
              ? (A = 36012)
              : _.type === an
              ? (A = 33190)
              : _.type === Fn
              ? (A = 35056)
              : (A = 33189)
            : _.type === on &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          _.format === cn &&
            A === 6402 &&
            _.type !== ha &&
            _.type !== an &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (_.type = an),
            (ae = r.convert(_.type))),
          _.format === On &&
            A === 6402 &&
            ((A = 34041),
            _.type !== Fn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (_.type = Fn),
              (ae = r.convert(_.type)))),
          oe &&
            (de
              ? t.texStorage2D(3553, 1, A, U.width, U.height)
              : t.texImage2D(3553, 0, A, U.width, U.height, 0, le, ae, null));
      else if (_.isDataTexture)
        if (K.length > 0 && he) {
          de && oe && t.texStorage2D(3553, pe, A, K[0].width, K[0].height);
          for (let $ = 0, me = K.length; $ < me; $++)
            (Q = K[$]),
              de
                ? t.texSubImage2D(
                    3553,
                    $,
                    0,
                    0,
                    Q.width,
                    Q.height,
                    le,
                    ae,
                    Q.data
                  )
                : t.texImage2D(
                    3553,
                    $,
                    A,
                    Q.width,
                    Q.height,
                    0,
                    le,
                    ae,
                    Q.data
                  );
          _.generateMipmaps = !1;
        } else
          de
            ? (oe && t.texStorage2D(3553, pe, A, U.width, U.height),
              t.texSubImage2D(3553, 0, 0, 0, U.width, U.height, le, ae, U.data))
            : t.texImage2D(3553, 0, A, U.width, U.height, 0, le, ae, U.data);
      else if (_.isCompressedTexture) {
        de && oe && t.texStorage2D(3553, pe, A, K[0].width, K[0].height);
        for (let $ = 0, me = K.length; $ < me; $++)
          (Q = K[$]),
            _.format !== mt
              ? le !== null
                ? de
                  ? t.compressedTexSubImage2D(
                      3553,
                      $,
                      0,
                      0,
                      Q.width,
                      Q.height,
                      le,
                      Q.data
                    )
                  : t.compressedTexImage2D(
                      3553,
                      $,
                      A,
                      Q.width,
                      Q.height,
                      0,
                      Q.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : de
              ? t.texSubImage2D(
                  3553,
                  $,
                  0,
                  0,
                  Q.width,
                  Q.height,
                  le,
                  ae,
                  Q.data
                )
              : t.texImage2D(3553, $, A, Q.width, Q.height, 0, le, ae, Q.data);
      } else if (_.isDataArrayTexture)
        de
          ? (oe && t.texStorage3D(35866, pe, A, U.width, U.height, U.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              U.width,
              U.height,
              U.depth,
              le,
              ae,
              U.data
            ))
          : t.texImage3D(
              35866,
              0,
              A,
              U.width,
              U.height,
              U.depth,
              0,
              le,
              ae,
              U.data
            );
      else if (_.isData3DTexture)
        de
          ? (oe && t.texStorage3D(32879, pe, A, U.width, U.height, U.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              U.width,
              U.height,
              U.depth,
              le,
              ae,
              U.data
            ))
          : t.texImage3D(
              32879,
              0,
              A,
              U.width,
              U.height,
              U.depth,
              0,
              le,
              ae,
              U.data
            );
      else if (_.isFramebufferTexture) {
        if (oe)
          if (de) t.texStorage2D(3553, pe, A, U.width, U.height);
          else {
            let $ = U.width,
              me = U.height;
            for (let De = 0; De < pe; De++)
              t.texImage2D(3553, De, A, $, me, 0, le, ae, null),
                ($ >>= 1),
                (me >>= 1);
          }
      } else if (K.length > 0 && he) {
        de && oe && t.texStorage2D(3553, pe, A, K[0].width, K[0].height);
        for (let $ = 0, me = K.length; $ < me; $++)
          (Q = K[$]),
            de
              ? t.texSubImage2D(3553, $, 0, 0, le, ae, Q)
              : t.texImage2D(3553, $, A, le, ae, Q);
        _.generateMipmaps = !1;
      } else
        de
          ? (oe && t.texStorage2D(3553, pe, A, U.width, U.height),
            t.texSubImage2D(3553, 0, 0, 0, le, ae, U))
          : t.texImage2D(3553, 0, A, le, ae, U);
      C(_, he) && R(Y),
        (re.__currentVersion = re.version),
        _.onUpdate && _.onUpdate(_);
    }
    S.__version = _.version;
  }
  function ye(S, _, G) {
    if (_.image.length !== 6) return;
    const Y = Ne(S, _),
      J = _.source;
    if (
      (t.activeTexture(33984 + G),
      t.bindTexture(34067, S.__webglTexture),
      J.version !== J.__currentVersion || Y === !0)
    ) {
      s.pixelStorei(37440, _.flipY),
        s.pixelStorei(37441, _.premultiplyAlpha),
        s.pixelStorei(3317, _.unpackAlignment),
        s.pixelStorei(37443, 0);
      const re = _.isCompressedTexture || _.image[0].isCompressedTexture,
        xe = _.image[0] && _.image[0].isDataTexture,
        U = [];
      for (let $ = 0; $ < 6; $++)
        !re && !xe
          ? (U[$] = T(_.image[$], !1, !0, l))
          : (U[$] = xe ? _.image[$].image : _.image[$]),
          (U[$] = Rt(_, U[$]));
      const he = U[0],
        le = y(he) || a,
        ae = r.convert(_.format, _.encoding),
        A = r.convert(_.type),
        Q = x(_.internalFormat, ae, A, _.encoding),
        K = a && _.isVideoTexture !== !0,
        de = J.__currentVersion === void 0 || Y === !0;
      let oe = w(_, he, le);
      k(34067, _, le);
      let pe;
      if (re) {
        K && de && t.texStorage2D(34067, oe, Q, he.width, he.height);
        for (let $ = 0; $ < 6; $++) {
          pe = U[$].mipmaps;
          for (let me = 0; me < pe.length; me++) {
            const De = pe[me];
            _.format !== mt
              ? ae !== null
                ? K
                  ? t.compressedTexSubImage2D(
                      34069 + $,
                      me,
                      0,
                      0,
                      De.width,
                      De.height,
                      ae,
                      De.data
                    )
                  : t.compressedTexImage2D(
                      34069 + $,
                      me,
                      Q,
                      De.width,
                      De.height,
                      0,
                      De.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : K
              ? t.texSubImage2D(
                  34069 + $,
                  me,
                  0,
                  0,
                  De.width,
                  De.height,
                  ae,
                  A,
                  De.data
                )
              : t.texImage2D(
                  34069 + $,
                  me,
                  Q,
                  De.width,
                  De.height,
                  0,
                  ae,
                  A,
                  De.data
                );
          }
        }
      } else {
        (pe = _.mipmaps),
          K &&
            de &&
            (pe.length > 0 && oe++,
            t.texStorage2D(34067, oe, Q, U[0].width, U[0].height));
        for (let $ = 0; $ < 6; $++)
          if (xe) {
            K
              ? t.texSubImage2D(
                  34069 + $,
                  0,
                  0,
                  0,
                  U[$].width,
                  U[$].height,
                  ae,
                  A,
                  U[$].data
                )
              : t.texImage2D(
                  34069 + $,
                  0,
                  Q,
                  U[$].width,
                  U[$].height,
                  0,
                  ae,
                  A,
                  U[$].data
                );
            for (let me = 0; me < pe.length; me++) {
              const Re = pe[me].image[$].image;
              K
                ? t.texSubImage2D(
                    34069 + $,
                    me + 1,
                    0,
                    0,
                    Re.width,
                    Re.height,
                    ae,
                    A,
                    Re.data
                  )
                : t.texImage2D(
                    34069 + $,
                    me + 1,
                    Q,
                    Re.width,
                    Re.height,
                    0,
                    ae,
                    A,
                    Re.data
                  );
            }
          } else {
            K
              ? t.texSubImage2D(34069 + $, 0, 0, 0, ae, A, U[$])
              : t.texImage2D(34069 + $, 0, Q, ae, A, U[$]);
            for (let me = 0; me < pe.length; me++) {
              const De = pe[me];
              K
                ? t.texSubImage2D(34069 + $, me + 1, 0, 0, ae, A, De.image[$])
                : t.texImage2D(34069 + $, me + 1, Q, ae, A, De.image[$]);
            }
          }
      }
      C(_, le) && R(34067),
        (J.__currentVersion = J.version),
        _.onUpdate && _.onUpdate(_);
    }
    S.__version = _.version;
  }
  function se(S, _, G, Y, J) {
    const re = r.convert(G.format, G.encoding),
      xe = r.convert(G.type),
      U = x(G.internalFormat, re, xe, G.encoding);
    n.get(_).__hasExternalTextures ||
      (J === 32879 || J === 35866
        ? t.texImage3D(J, 0, U, _.width, _.height, _.depth, 0, re, xe, null)
        : t.texImage2D(J, 0, U, _.width, _.height, 0, re, xe, null)),
      t.bindFramebuffer(36160, S),
      Fe(_)
        ? f.framebufferTexture2DMultisampleEXT(
            36160,
            Y,
            J,
            n.get(G).__webglTexture,
            0,
            He(_)
          )
        : s.framebufferTexture2D(36160, Y, J, n.get(G).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Ie(S, _, G) {
    if ((s.bindRenderbuffer(36161, S), _.depthBuffer && !_.stencilBuffer)) {
      let Y = 33189;
      if (G || Fe(_)) {
        const J = _.depthTexture;
        J &&
          J.isDepthTexture &&
          (J.type === on ? (Y = 36012) : J.type === an && (Y = 33190));
        const re = He(_);
        Fe(_)
          ? f.renderbufferStorageMultisampleEXT(36161, re, Y, _.width, _.height)
          : s.renderbufferStorageMultisample(36161, re, Y, _.width, _.height);
      } else s.renderbufferStorage(36161, Y, _.width, _.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const Y = He(_);
      G && Fe(_) === !1
        ? s.renderbufferStorageMultisample(36161, Y, 35056, _.width, _.height)
        : Fe(_)
        ? f.renderbufferStorageMultisampleEXT(
            36161,
            Y,
            35056,
            _.width,
            _.height
          )
        : s.renderbufferStorage(36161, 34041, _.width, _.height),
        s.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const Y = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let J = 0; J < Y.length; J++) {
        const re = Y[J],
          xe = r.convert(re.format, re.encoding),
          U = r.convert(re.type),
          he = x(re.internalFormat, xe, U, re.encoding),
          le = He(_);
        G && Fe(_) === !1
          ? s.renderbufferStorageMultisample(36161, le, he, _.width, _.height)
          : Fe(_)
          ? f.renderbufferStorageMultisampleEXT(
              36161,
              le,
              he,
              _.width,
              _.height
            )
          : s.renderbufferStorage(36161, he, _.width, _.height);
      }
    }
    s.bindRenderbuffer(36161, null);
  }
  function Te(S, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, S),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      V(_.depthTexture, 0);
    const Y = n.get(_.depthTexture).__webglTexture,
      J = He(_);
    if (_.depthTexture.format === cn)
      Fe(_)
        ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Y, 0, J)
        : s.framebufferTexture2D(36160, 36096, 3553, Y, 0);
    else if (_.depthTexture.format === On)
      Fe(_)
        ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Y, 0, J)
        : s.framebufferTexture2D(36160, 33306, 3553, Y, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function _e(S) {
    const _ = n.get(S),
      G = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (G)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Te(_.__webglFramebuffer, S);
    } else if (G) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        t.bindFramebuffer(36160, _.__webglFramebuffer[Y]),
          (_.__webglDepthbuffer[Y] = s.createRenderbuffer()),
          Ie(_.__webglDepthbuffer[Y], S, !1);
    } else
      t.bindFramebuffer(36160, _.__webglFramebuffer),
        (_.__webglDepthbuffer = s.createRenderbuffer()),
        Ie(_.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function je(S, _, G) {
    const Y = n.get(S);
    _ !== void 0 && se(Y.__webglFramebuffer, S, S.texture, 36064, 3553),
      G !== void 0 && _e(S);
  }
  function Qe(S) {
    const _ = S.texture,
      G = n.get(S),
      Y = n.get(_);
    S.addEventListener("dispose", Z),
      S.isWebGLMultipleRenderTargets !== !0 &&
        (Y.__webglTexture === void 0 && (Y.__webglTexture = s.createTexture()),
        (Y.__version = _.version),
        o.memory.textures++);
    const J = S.isWebGLCubeRenderTarget === !0,
      re = S.isWebGLMultipleRenderTargets === !0,
      xe = y(S) || a;
    if (J) {
      G.__webglFramebuffer = [];
      for (let U = 0; U < 6; U++)
        G.__webglFramebuffer[U] = s.createFramebuffer();
    } else {
      if (((G.__webglFramebuffer = s.createFramebuffer()), re))
        if (i.drawBuffers) {
          const U = S.texture;
          for (let he = 0, le = U.length; he < le; he++) {
            const ae = n.get(U[he]);
            ae.__webglTexture === void 0 &&
              ((ae.__webglTexture = s.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && S.samples > 0 && Fe(S) === !1) {
        const U = re ? _ : [_];
        (G.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (G.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, G.__webglMultisampledFramebuffer);
        for (let he = 0; he < U.length; he++) {
          const le = U[he];
          (G.__webglColorRenderbuffer[he] = s.createRenderbuffer()),
            s.bindRenderbuffer(36161, G.__webglColorRenderbuffer[he]);
          const ae = r.convert(le.format, le.encoding),
            A = r.convert(le.type),
            Q = x(le.internalFormat, ae, A, le.encoding),
            K = He(S);
          s.renderbufferStorageMultisample(36161, K, Q, S.width, S.height),
            s.framebufferRenderbuffer(
              36160,
              36064 + he,
              36161,
              G.__webglColorRenderbuffer[he]
            );
        }
        s.bindRenderbuffer(36161, null),
          S.depthBuffer &&
            ((G.__webglDepthRenderbuffer = s.createRenderbuffer()),
            Ie(G.__webglDepthRenderbuffer, S, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (J) {
      t.bindTexture(34067, Y.__webglTexture), k(34067, _, xe);
      for (let U = 0; U < 6; U++)
        se(G.__webglFramebuffer[U], S, _, 36064, 34069 + U);
      C(_, xe) && R(34067), t.unbindTexture();
    } else if (re) {
      const U = S.texture;
      for (let he = 0, le = U.length; he < le; he++) {
        const ae = U[he],
          A = n.get(ae);
        t.bindTexture(3553, A.__webglTexture),
          k(3553, ae, xe),
          se(G.__webglFramebuffer, S, ae, 36064 + he, 3553),
          C(ae, xe) && R(3553);
      }
      t.unbindTexture();
    } else {
      let U = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
        (a
          ? (U = S.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(U, Y.__webglTexture),
        k(U, _, xe),
        se(G.__webglFramebuffer, S, _, 36064, U),
        C(_, xe) && R(U),
        t.unbindTexture();
    }
    S.depthBuffer && _e(S);
  }
  function it(S) {
    const _ = y(S) || a,
      G = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let Y = 0, J = G.length; Y < J; Y++) {
      const re = G[Y];
      if (C(re, _)) {
        const xe = S.isWebGLCubeRenderTarget ? 34067 : 3553,
          U = n.get(re).__webglTexture;
        t.bindTexture(xe, U), R(xe), t.unbindTexture();
      }
    }
  }
  function xt(S) {
    if (a && S.samples > 0 && Fe(S) === !1) {
      const _ = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture],
        G = S.width,
        Y = S.height;
      let J = 16384;
      const re = [],
        xe = S.stencilBuffer ? 33306 : 36096,
        U = n.get(S),
        he = S.isWebGLMultipleRenderTargets === !0;
      if (he)
        for (let le = 0; le < _.length; le++)
          t.bindFramebuffer(36160, U.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(36160, 36064 + le, 36161, null),
            t.bindFramebuffer(36160, U.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
      t.bindFramebuffer(36008, U.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, U.__webglFramebuffer);
      for (let le = 0; le < _.length; le++) {
        re.push(36064 + le), S.depthBuffer && re.push(xe);
        const ae =
          U.__ignoreDepthValues !== void 0 ? U.__ignoreDepthValues : !1;
        if (
          (ae === !1 &&
            (S.depthBuffer && (J |= 256), S.stencilBuffer && (J |= 1024)),
          he &&
            s.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              U.__webglColorRenderbuffer[le]
            ),
          ae === !0 &&
            (s.invalidateFramebuffer(36008, [xe]),
            s.invalidateFramebuffer(36009, [xe])),
          he)
        ) {
          const A = n.get(_[le]).__webglTexture;
          s.framebufferTexture2D(36009, 36064, 3553, A, 0);
        }
        s.blitFramebuffer(0, 0, G, Y, 0, 0, G, Y, J, 9728),
          m && s.invalidateFramebuffer(36008, re);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), he))
        for (let le = 0; le < _.length; le++) {
          t.bindFramebuffer(36160, U.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              36160,
              36064 + le,
              36161,
              U.__webglColorRenderbuffer[le]
            );
          const ae = n.get(_[le]).__webglTexture;
          t.bindFramebuffer(36160, U.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + le, 3553, ae, 0);
        }
      t.bindFramebuffer(36009, U.__webglMultisampledFramebuffer);
    }
  }
  function He(S) {
    return Math.min(d, S.samples);
  }
  function Fe(S) {
    const _ = n.get(S);
    return (
      a &&
      S.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function Dt(S) {
    const _ = o.render.frame;
    g.get(S) !== _ && (g.set(S, _), S.update());
  }
  function Rt(S, _) {
    const G = S.encoding,
      Y = S.format,
      J = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        S.format === br ||
        (G !== dn &&
          (G === ze
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && Y === mt
                ? ((S.format = br),
                  (S.minFilter = lt),
                  (S.generateMipmaps = !1))
                : (_ = fa.sRGBToLinear(_))
              : (Y !== mt || J !== un) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                G
              ))),
      _
    );
  }
  (this.allocateTextureUnit = X),
    (this.resetTextureUnits = q),
    (this.setTexture2D = V),
    (this.setTexture2DArray = te),
    (this.setTexture3D = j),
    (this.setTextureCube = ie),
    (this.rebindTextures = je),
    (this.setupRenderTarget = Qe),
    (this.updateRenderTargetMipmap = it),
    (this.updateMultisampleRenderTarget = xt),
    (this.setupDepthRenderbuffer = _e),
    (this.setupFrameBufferTexture = se),
    (this.useMultisampledRTT = Fe);
}
function Id(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = null) {
    let a;
    if (r === un) return 5121;
    if (r === Do) return 32819;
    if (r === Ro) return 32820;
    if (r === Ao) return 5120;
    if (r === Co) return 5122;
    if (r === ha) return 5123;
    if (r === Lo) return 5124;
    if (r === an) return 5125;
    if (r === on) return 5126;
    if (r === Qn)
      return n
        ? 5131
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (r === Po) return 6406;
    if (r === mt) return 6408;
    if (r === Fo) return 6409;
    if (r === No) return 6410;
    if (r === cn) return 6402;
    if (r === On) return 34041;
    if (r === zo) return 6403;
    if (r === Io)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (r === br)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === Uo) return 36244;
    if (r === Oo) return 33319;
    if (r === Bo) return 33320;
    if (r === Go) return 36249;
    if (r === Bi || r === Gi || r === Vi || r === ki)
      if (o === ze)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (r === Bi) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Gi) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Vi) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === ki) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (r === Bi) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Gi) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Vi) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === ki) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === Zr || r === $r || r === Jr || r === Kr)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (r === Zr) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === $r) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Jr) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Kr) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === Vo)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === Qr || r === es)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (r === Qr)
          return o === ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === es)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === ts ||
      r === ns ||
      r === is ||
      r === rs ||
      r === ss ||
      r === as ||
      r === os ||
      r === ls ||
      r === cs ||
      r === hs ||
      r === us ||
      r === ds ||
      r === fs ||
      r === ps
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (r === ts)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === ns)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === is)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === rs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === ss)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === as)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === os)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === ls)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === cs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === hs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === us)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === ds)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === fs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === ps)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === ms)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (r === ms)
          return o === ze
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return r === Fn
      ? n
        ? 34042
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: i };
}
class Fd extends ct {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Ai extends nt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Nd = { type: "move" };
class _r {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ai()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ai()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ai()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      o = null;
    const a = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred")
      if (
        (a !== null &&
          ((i = t.getPose(e.targetRaySpace, n)),
          i !== null &&
            (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity
              ? ((a.hasLinearVelocity = !0),
                a.linearVelocity.copy(i.linearVelocity))
              : (a.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((a.hasAngularVelocity = !0),
                a.angularVelocity.copy(i.angularVelocity))
              : (a.hasAngularVelocity = !1),
            this.dispatchEvent(Nd))),
        l && e.hand)
      ) {
        o = !0;
        for (const p of e.hand.values()) {
          const u = t.getJointPose(p, n);
          if (l.joints[p.jointName] === void 0) {
            const b = new Ai();
            (b.matrixAutoUpdate = !1),
              (b.visible = !1),
              (l.joints[p.jointName] = b),
              l.add(b);
          }
          const v = l.joints[p.jointName];
          u !== null &&
            (v.matrix.fromArray(u.transform.matrix),
            v.matrix.decompose(v.position, v.rotation, v.scale),
            (v.jointRadius = u.radius)),
            (v.visible = u !== null);
        }
        const h = l.joints["index-finger-tip"],
          d = l.joints["thumb-tip"],
          f = h.position.distanceTo(d.position),
          m = 0.02,
          g = 0.005;
        l.inputState.pinching && f > m + g
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            f <= m - g &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
    return (
      a !== null && (a.visible = i !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = o !== null),
      this
    );
  }
}
class zd extends _t {
  constructor(e, t, n, i, r, o, a, c, l, h) {
    if (((h = h !== void 0 ? h : cn), h !== cn && h !== On))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && h === cn && (n = an),
      n === void 0 && h === On && (n = Fn),
      super(null, i, r, o, a, c, h, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : et),
      (this.minFilter = c !== void 0 ? c : et),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Ud extends Vn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      o = null,
      a = "local-floor",
      c = null,
      l = null,
      h = null,
      d = null,
      f = null,
      m = null;
    const g = t.getContextAttributes();
    let p = null,
      u = null;
    const v = [],
      b = new Map(),
      T = new ct();
    T.layers.enable(1), (T.viewport = new qe());
    const y = new ct();
    y.layers.enable(2), (y.viewport = new qe());
    const E = [T, y],
      C = new Fd();
    C.layers.enable(1), C.layers.enable(2);
    let R = null,
      x = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (O) {
        let V = v[O];
        return (
          V === void 0 && ((V = new _r()), (v[O] = V)), V.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (O) {
        let V = v[O];
        return V === void 0 && ((V = new _r()), (v[O] = V)), V.getGripSpace();
      }),
      (this.getHand = function (O) {
        let V = v[O];
        return V === void 0 && ((V = new _r()), (v[O] = V)), V.getHandSpace();
      });
    function w(O) {
      const V = b.get(O.inputSource);
      V !== void 0 && V.dispatchEvent({ type: O.type, data: O.inputSource });
    }
    function I() {
      i.removeEventListener("select", w),
        i.removeEventListener("selectstart", w),
        i.removeEventListener("selectend", w),
        i.removeEventListener("squeeze", w),
        i.removeEventListener("squeezestart", w),
        i.removeEventListener("squeezeend", w),
        i.removeEventListener("end", I),
        i.removeEventListener("inputsourceschange", N),
        b.forEach(function (O, V) {
          O !== void 0 && O.disconnect(V);
        }),
        b.clear(),
        (R = null),
        (x = null),
        e.setRenderTarget(p),
        (f = null),
        (d = null),
        (h = null),
        (i = null),
        (u = null),
        X.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (O) {
      (r = O),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (O) {
        (a = O),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (O) {
        c = O;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : f;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (O) {
        if (((i = O), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener("select", w),
            i.addEventListener("selectstart", w),
            i.addEventListener("selectend", w),
            i.addEventListener("squeeze", w),
            i.addEventListener("squeezestart", w),
            i.addEventListener("squeezeend", w),
            i.addEventListener("end", I),
            i.addEventListener("inputsourceschange", N),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const V = {
              antialias: i.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (f = new XRWebGLLayer(i, t, V)),
              i.updateRenderState({ baseLayer: f }),
              (u = new $t(f.framebufferWidth, f.framebufferHeight, {
                format: mt,
                type: un,
                encoding: e.outputEncoding,
              }));
          } else {
            let V = null,
              te = null,
              j = null;
            g.depth &&
              ((j = g.stencil ? 35056 : 33190),
              (V = g.stencil ? On : cn),
              (te = g.stencil ? Fn : an));
            const ie = {
              colorFormat: e.outputEncoding === ze ? 35907 : 32856,
              depthFormat: j,
              scaleFactor: r,
            };
            (h = new XRWebGLBinding(i, t)),
              (d = h.createProjectionLayer(ie)),
              i.updateRenderState({ layers: [d] }),
              (u = new $t(d.textureWidth, d.textureHeight, {
                format: mt,
                type: un,
                depthTexture: new zd(
                  d.textureWidth,
                  d.textureHeight,
                  te,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  V
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const ce = e.properties.get(u);
            ce.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (u.isXRRenderTarget = !0),
            this.setFoveation(1),
            (c = null),
            (o = await i.requestReferenceSpace(a)),
            X.setContext(i),
            X.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function N(O) {
      const V = i.inputSources;
      for (let te = 0; te < V.length; te++) {
        const j = V[te].handedness === "right" ? 1 : 0;
        b.set(V[te], v[j]);
      }
      for (let te = 0; te < O.removed.length; te++) {
        const j = O.removed[te],
          ie = b.get(j);
        ie &&
          (ie.dispatchEvent({ type: "disconnected", data: j }), b.delete(j));
      }
      for (let te = 0; te < O.added.length; te++) {
        const j = O.added[te],
          ie = b.get(j);
        ie && ie.dispatchEvent({ type: "connected", data: j });
      }
    }
    const Z = new L(),
      ne = new L();
    function P(O, V, te) {
      Z.setFromMatrixPosition(V.matrixWorld),
        ne.setFromMatrixPosition(te.matrixWorld);
      const j = Z.distanceTo(ne),
        ie = V.projectionMatrix.elements,
        ce = te.projectionMatrix.elements,
        ue = ie[14] / (ie[10] - 1),
        k = ie[14] / (ie[10] + 1),
        Ne = (ie[9] + 1) / ie[5],
        Me = (ie[9] - 1) / ie[5],
        ye = (ie[8] - 1) / ie[0],
        se = (ce[8] + 1) / ce[0],
        Ie = ue * ye,
        Te = ue * se,
        _e = j / (-ye + se),
        je = _e * -ye;
      V.matrixWorld.decompose(O.position, O.quaternion, O.scale),
        O.translateX(je),
        O.translateZ(_e),
        O.matrixWorld.compose(O.position, O.quaternion, O.scale),
        O.matrixWorldInverse.copy(O.matrixWorld).invert();
      const Qe = ue + _e,
        it = k + _e,
        xt = Ie - je,
        He = Te + (j - je),
        Fe = ((Ne * k) / it) * Qe,
        Dt = ((Me * k) / it) * Qe;
      O.projectionMatrix.makePerspective(xt, He, Fe, Dt, Qe, it);
    }
    function W(O, V) {
      V === null
        ? O.matrixWorld.copy(O.matrix)
        : O.matrixWorld.multiplyMatrices(V.matrixWorld, O.matrix),
        O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    (this.updateCamera = function (O) {
      if (i === null) return;
      (C.near = y.near = T.near = O.near),
        (C.far = y.far = T.far = O.far),
        (R !== C.near || x !== C.far) &&
          (i.updateRenderState({ depthNear: C.near, depthFar: C.far }),
          (R = C.near),
          (x = C.far));
      const V = O.parent,
        te = C.cameras;
      W(C, V);
      for (let ie = 0; ie < te.length; ie++) W(te[ie], V);
      C.matrixWorld.decompose(C.position, C.quaternion, C.scale),
        O.position.copy(C.position),
        O.quaternion.copy(C.quaternion),
        O.scale.copy(C.scale),
        O.matrix.copy(C.matrix),
        O.matrixWorld.copy(C.matrixWorld);
      const j = O.children;
      for (let ie = 0, ce = j.length; ie < ce; ie++)
        j[ie].updateMatrixWorld(!0);
      te.length === 2
        ? P(C, T, y)
        : C.projectionMatrix.copy(T.projectionMatrix);
    }),
      (this.getCamera = function () {
        return C;
      }),
      (this.getFoveation = function () {
        if (d !== null) return d.fixedFoveation;
        if (f !== null) return f.fixedFoveation;
      }),
      (this.setFoveation = function (O) {
        d !== null && (d.fixedFoveation = O),
          f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = O);
      });
    let B = null;
    function q(O, V) {
      if (((l = V.getViewerPose(c || o)), (m = V), l !== null)) {
        const j = l.views;
        f !== null &&
          (e.setRenderTargetFramebuffer(u, f.framebuffer),
          e.setRenderTarget(u));
        let ie = !1;
        j.length !== C.cameras.length && ((C.cameras.length = 0), (ie = !0));
        for (let ce = 0; ce < j.length; ce++) {
          const ue = j[ce];
          let k = null;
          if (f !== null) k = f.getViewport(ue);
          else {
            const Me = h.getViewSubImage(d, ue);
            (k = Me.viewport),
              ce === 0 &&
                (e.setRenderTargetTextures(
                  u,
                  Me.colorTexture,
                  d.ignoreDepthValues ? void 0 : Me.depthStencilTexture
                ),
                e.setRenderTarget(u));
          }
          let Ne = E[ce];
          Ne === void 0 &&
            ((Ne = new ct()),
            Ne.layers.enable(ce),
            (Ne.viewport = new qe()),
            (E[ce] = Ne)),
            Ne.matrix.fromArray(ue.transform.matrix),
            Ne.projectionMatrix.fromArray(ue.projectionMatrix),
            Ne.viewport.set(k.x, k.y, k.width, k.height),
            ce === 0 && C.matrix.copy(Ne.matrix),
            ie === !0 && C.cameras.push(Ne);
        }
      }
      const te = i.inputSources;
      for (let j = 0; j < v.length; j++) {
        const ie = te[j],
          ce = b.get(ie);
        ce !== void 0 && ce.update(ie, V, c || o);
      }
      B && B(O, V), (m = null);
    }
    const X = new ya();
    X.setAnimationLoop(q),
      (this.setAnimationLoop = function (O) {
        B = O;
      }),
      (this.dispose = function () {});
  }
}
function Od(s, e) {
  function t(p, u) {
    p.fogColor.value.copy(u.color),
      u.isFog
        ? ((p.fogNear.value = u.near), (p.fogFar.value = u.far))
        : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function n(p, u, v, b, T) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial
      ? i(p, u)
      : u.isMeshToonMaterial
      ? (i(p, u), h(p, u))
      : u.isMeshPhongMaterial
      ? (i(p, u), l(p, u))
      : u.isMeshStandardMaterial
      ? (i(p, u), d(p, u), u.isMeshPhysicalMaterial && f(p, u, T))
      : u.isMeshMatcapMaterial
      ? (i(p, u), m(p, u))
      : u.isMeshDepthMaterial
      ? i(p, u)
      : u.isMeshDistanceMaterial
      ? (i(p, u), g(p, u))
      : u.isMeshNormalMaterial
      ? i(p, u)
      : u.isLineBasicMaterial
      ? (r(p, u), u.isLineDashedMaterial && o(p, u))
      : u.isPointsMaterial
      ? a(p, u, v, b)
      : u.isSpriteMaterial
      ? c(p, u)
      : u.isShadowMaterial
      ? (p.color.value.copy(u.color), (p.opacity.value = u.opacity))
      : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function i(p, u) {
    (p.opacity.value = u.opacity),
      u.color && p.diffuse.value.copy(u.color),
      u.emissive &&
        p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),
      u.map && (p.map.value = u.map),
      u.alphaMap && (p.alphaMap.value = u.alphaMap),
      u.bumpMap &&
        ((p.bumpMap.value = u.bumpMap),
        (p.bumpScale.value = u.bumpScale),
        u.side === gt && (p.bumpScale.value *= -1)),
      u.displacementMap &&
        ((p.displacementMap.value = u.displacementMap),
        (p.displacementScale.value = u.displacementScale),
        (p.displacementBias.value = u.displacementBias)),
      u.emissiveMap && (p.emissiveMap.value = u.emissiveMap),
      u.normalMap &&
        ((p.normalMap.value = u.normalMap),
        p.normalScale.value.copy(u.normalScale),
        u.side === gt && p.normalScale.value.negate()),
      u.specularMap && (p.specularMap.value = u.specularMap),
      u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const v = e.get(u).envMap;
    if (
      (v &&
        ((p.envMap.value = v),
        (p.flipEnvMap.value =
          v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = u.reflectivity),
        (p.ior.value = u.ior),
        (p.refractionRatio.value = u.refractionRatio)),
      u.lightMap)
    ) {
      p.lightMap.value = u.lightMap;
      const y = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = u.lightMapIntensity * y;
    }
    u.aoMap &&
      ((p.aoMap.value = u.aoMap), (p.aoMapIntensity.value = u.aoMapIntensity));
    let b;
    u.map
      ? (b = u.map)
      : u.specularMap
      ? (b = u.specularMap)
      : u.displacementMap
      ? (b = u.displacementMap)
      : u.normalMap
      ? (b = u.normalMap)
      : u.bumpMap
      ? (b = u.bumpMap)
      : u.roughnessMap
      ? (b = u.roughnessMap)
      : u.metalnessMap
      ? (b = u.metalnessMap)
      : u.alphaMap
      ? (b = u.alphaMap)
      : u.emissiveMap
      ? (b = u.emissiveMap)
      : u.clearcoatMap
      ? (b = u.clearcoatMap)
      : u.clearcoatNormalMap
      ? (b = u.clearcoatNormalMap)
      : u.clearcoatRoughnessMap
      ? (b = u.clearcoatRoughnessMap)
      : u.iridescenceMap
      ? (b = u.iridescenceMap)
      : u.iridescenceThicknessMap
      ? (b = u.iridescenceThicknessMap)
      : u.specularIntensityMap
      ? (b = u.specularIntensityMap)
      : u.specularColorMap
      ? (b = u.specularColorMap)
      : u.transmissionMap
      ? (b = u.transmissionMap)
      : u.thicknessMap
      ? (b = u.thicknessMap)
      : u.sheenColorMap
      ? (b = u.sheenColorMap)
      : u.sheenRoughnessMap && (b = u.sheenRoughnessMap),
      b !== void 0 &&
        (b.isWebGLRenderTarget && (b = b.texture),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        p.uvTransform.value.copy(b.matrix));
    let T;
    u.aoMap ? (T = u.aoMap) : u.lightMap && (T = u.lightMap),
      T !== void 0 &&
        (T.isWebGLRenderTarget && (T = T.texture),
        T.matrixAutoUpdate === !0 && T.updateMatrix(),
        p.uv2Transform.value.copy(T.matrix));
  }
  function r(p, u) {
    p.diffuse.value.copy(u.color), (p.opacity.value = u.opacity);
  }
  function o(p, u) {
    (p.dashSize.value = u.dashSize),
      (p.totalSize.value = u.dashSize + u.gapSize),
      (p.scale.value = u.scale);
  }
  function a(p, u, v, b) {
    p.diffuse.value.copy(u.color),
      (p.opacity.value = u.opacity),
      (p.size.value = u.size * v),
      (p.scale.value = b * 0.5),
      u.map && (p.map.value = u.map),
      u.alphaMap && (p.alphaMap.value = u.alphaMap),
      u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    let T;
    u.map ? (T = u.map) : u.alphaMap && (T = u.alphaMap),
      T !== void 0 &&
        (T.matrixAutoUpdate === !0 && T.updateMatrix(),
        p.uvTransform.value.copy(T.matrix));
  }
  function c(p, u) {
    p.diffuse.value.copy(u.color),
      (p.opacity.value = u.opacity),
      (p.rotation.value = u.rotation),
      u.map && (p.map.value = u.map),
      u.alphaMap && (p.alphaMap.value = u.alphaMap),
      u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    let v;
    u.map ? (v = u.map) : u.alphaMap && (v = u.alphaMap),
      v !== void 0 &&
        (v.matrixAutoUpdate === !0 && v.updateMatrix(),
        p.uvTransform.value.copy(v.matrix));
  }
  function l(p, u) {
    p.specular.value.copy(u.specular),
      (p.shininess.value = Math.max(u.shininess, 1e-4));
  }
  function h(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function d(p, u) {
    (p.roughness.value = u.roughness),
      (p.metalness.value = u.metalness),
      u.roughnessMap && (p.roughnessMap.value = u.roughnessMap),
      u.metalnessMap && (p.metalnessMap.value = u.metalnessMap),
      e.get(u).envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function f(p, u, v) {
    (p.ior.value = u.ior),
      u.sheen > 0 &&
        (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),
        (p.sheenRoughness.value = u.sheenRoughness),
        u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap),
        u.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = u.sheenRoughnessMap)),
      u.clearcoat > 0 &&
        ((p.clearcoat.value = u.clearcoat),
        (p.clearcoatRoughness.value = u.clearcoatRoughness),
        u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap),
        u.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap),
        u.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = u.clearcoatNormalMap),
          u.side === gt && p.clearcoatNormalScale.value.negate())),
      u.iridescence > 0 &&
        ((p.iridescence.value = u.iridescence),
        (p.iridescenceIOR.value = u.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1]),
        u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap),
        u.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap)),
      u.transmission > 0 &&
        ((p.transmission.value = u.transmission),
        (p.transmissionSamplerMap.value = v.texture),
        p.transmissionSamplerSize.value.set(v.width, v.height),
        u.transmissionMap && (p.transmissionMap.value = u.transmissionMap),
        (p.thickness.value = u.thickness),
        u.thicknessMap && (p.thicknessMap.value = u.thicknessMap),
        (p.attenuationDistance.value = u.attenuationDistance),
        p.attenuationColor.value.copy(u.attenuationColor)),
      (p.specularIntensity.value = u.specularIntensity),
      p.specularColor.value.copy(u.specularColor),
      u.specularIntensityMap &&
        (p.specularIntensityMap.value = u.specularIntensityMap),
      u.specularColorMap && (p.specularColorMap.value = u.specularColorMap);
  }
  function m(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function g(p, u) {
    p.referencePosition.value.copy(u.referencePosition),
      (p.nearDistance.value = u.nearDistance),
      (p.farDistance.value = u.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Bd() {
  const s = Di("canvas");
  return (s.style.display = "block"), s;
}
function Da(s = {}) {
  this.isWebGLRenderer = !0;
  const e = s.canvas !== void 0 ? s.canvas : Bd(),
    t = s.context !== void 0 ? s.context : null,
    n = s.depth !== void 0 ? s.depth : !0,
    i = s.stencil !== void 0 ? s.stencil : !0,
    r = s.antialias !== void 0 ? s.antialias : !1,
    o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0,
    a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1,
    c = s.powerPreference !== void 0 ? s.powerPreference : "default",
    l =
      s.failIfMajorPerformanceCaveat !== void 0
        ? s.failIfMajorPerformanceCaveat
        : !1;
  let h;
  t !== null
    ? (h = t.getContextAttributes().alpha)
    : (h = s.alpha !== void 0 ? s.alpha : !1);
  let d = null,
    f = null;
  const m = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = dn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Bt),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  const p = this;
  let u = !1,
    v = 0,
    b = 0,
    T = null,
    y = -1,
    E = null;
  const C = new qe(),
    R = new qe();
  let x = null,
    w = e.width,
    I = e.height,
    N = 1,
    Z = null,
    ne = null;
  const P = new qe(0, 0, w, I),
    W = new qe(0, 0, w, I);
  let B = !1;
  const q = new Lr();
  let X = !1,
    O = !1,
    V = null;
  const te = new ke(),
    j = new Ee(),
    ie = new L(),
    ce = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function ue() {
    return T === null ? N : 1;
  }
  let k = t;
  function Ne(M, D) {
    for (let z = 0; z < M.length; z++) {
      const F = M[z],
        H = e.getContext(F, D);
      if (H !== null) return H;
    }
    return null;
  }
  try {
    const M = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Tr}`),
      e.addEventListener("webglcontextlost", A, !1),
      e.addEventListener("webglcontextrestored", Q, !1),
      e.addEventListener("webglcontextcreationerror", K, !1),
      k === null)
    ) {
      const D = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && D.shift(), (k = Ne(D, M)), k === null))
        throw Ne(D)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    k.getShaderPrecisionFormat === void 0 &&
      (k.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (M) {
    throw (console.error("THREE.WebGLRenderer: " + M.message), M);
  }
  let Me,
    ye,
    se,
    Ie,
    Te,
    _e,
    je,
    Qe,
    it,
    xt,
    He,
    Fe,
    Dt,
    Rt,
    S,
    _,
    G,
    Y,
    J,
    re,
    xe,
    U,
    he;
  function le() {
    (Me = new Kh(k)),
      (ye = new Xh(k, Me, s)),
      Me.init(ye),
      (U = new Id(k, Me, ye)),
      (se = new Rd(k, Me, ye)),
      (Ie = new tu(k)),
      (Te = new vd()),
      (_e = new Pd(k, Me, se, Te, ye, U, Ie)),
      (je = new Yh(p)),
      (Qe = new Jh(p)),
      (it = new fl(k, ye)),
      (he = new Wh(k, Me, it, ye)),
      (xt = new Qh(k, it, Ie, he)),
      (He = new su(k, xt, it, Ie)),
      (J = new ru(k, ye, _e)),
      (_ = new jh(Te)),
      (Fe = new xd(p, je, Qe, Me, ye, he, _)),
      (Dt = new Od(p, Te)),
      (Rt = new yd()),
      (S = new Ad(Me, ye)),
      (Y = new Hh(p, je, se, He, h, o)),
      (G = new Dd(p, He, ye)),
      (re = new qh(k, Me, Ie, ye)),
      (xe = new eu(k, Me, Ie, ye)),
      (Ie.programs = Fe.programs),
      (p.capabilities = ye),
      (p.extensions = Me),
      (p.properties = Te),
      (p.renderLists = Rt),
      (p.shadowMap = G),
      (p.state = se),
      (p.info = Ie);
  }
  le();
  const ae = new Ud(p, k);
  (this.xr = ae),
    (this.getContext = function () {
      return k;
    }),
    (this.getContextAttributes = function () {
      return k.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const M = Me.get("WEBGL_lose_context");
      M && M.loseContext();
    }),
    (this.forceContextRestore = function () {
      const M = Me.get("WEBGL_lose_context");
      M && M.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return N;
    }),
    (this.setPixelRatio = function (M) {
      M !== void 0 && ((N = M), this.setSize(w, I, !1));
    }),
    (this.getSize = function (M) {
      return M.set(w, I);
    }),
    (this.setSize = function (M, D, z) {
      if (ae.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (w = M),
        (I = D),
        (e.width = Math.floor(M * N)),
        (e.height = Math.floor(D * N)),
        z !== !1 && ((e.style.width = M + "px"), (e.style.height = D + "px")),
        this.setViewport(0, 0, M, D);
    }),
    (this.getDrawingBufferSize = function (M) {
      return M.set(w * N, I * N).floor();
    }),
    (this.setDrawingBufferSize = function (M, D, z) {
      (w = M),
        (I = D),
        (N = z),
        (e.width = Math.floor(M * z)),
        (e.height = Math.floor(D * z)),
        this.setViewport(0, 0, M, D);
    }),
    (this.getCurrentViewport = function (M) {
      return M.copy(C);
    }),
    (this.getViewport = function (M) {
      return M.copy(P);
    }),
    (this.setViewport = function (M, D, z, F) {
      M.isVector4 ? P.set(M.x, M.y, M.z, M.w) : P.set(M, D, z, F),
        se.viewport(C.copy(P).multiplyScalar(N).floor());
    }),
    (this.getScissor = function (M) {
      return M.copy(W);
    }),
    (this.setScissor = function (M, D, z, F) {
      M.isVector4 ? W.set(M.x, M.y, M.z, M.w) : W.set(M, D, z, F),
        se.scissor(R.copy(W).multiplyScalar(N).floor());
    }),
    (this.getScissorTest = function () {
      return B;
    }),
    (this.setScissorTest = function (M) {
      se.setScissorTest((B = M));
    }),
    (this.setOpaqueSort = function (M) {
      Z = M;
    }),
    (this.setTransparentSort = function (M) {
      ne = M;
    }),
    (this.getClearColor = function (M) {
      return M.copy(Y.getClearColor());
    }),
    (this.setClearColor = function () {
      Y.setClearColor.apply(Y, arguments);
    }),
    (this.getClearAlpha = function () {
      return Y.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      Y.setClearAlpha.apply(Y, arguments);
    }),
    (this.clear = function (M = !0, D = !0, z = !0) {
      let F = 0;
      M && (F |= 16384), D && (F |= 256), z && (F |= 1024), k.clear(F);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", A, !1),
        e.removeEventListener("webglcontextrestored", Q, !1),
        e.removeEventListener("webglcontextcreationerror", K, !1),
        Rt.dispose(),
        S.dispose(),
        Te.dispose(),
        je.dispose(),
        Qe.dispose(),
        He.dispose(),
        he.dispose(),
        Fe.dispose(),
        ae.dispose(),
        ae.removeEventListener("sessionstart", De),
        ae.removeEventListener("sessionend", Re),
        V && (V.dispose(), (V = null)),
        Ze.stop();
    });
  function A(M) {
    M.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (u = !0);
  }
  function Q() {
    console.log("THREE.WebGLRenderer: Context Restored."), (u = !1);
    const M = Ie.autoReset,
      D = G.enabled,
      z = G.autoUpdate,
      F = G.needsUpdate,
      H = G.type;
    le(),
      (Ie.autoReset = M),
      (G.enabled = D),
      (G.autoUpdate = z),
      (G.needsUpdate = F),
      (G.type = H);
  }
  function K(M) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      M.statusMessage
    );
  }
  function de(M) {
    const D = M.target;
    D.removeEventListener("dispose", de), oe(D);
  }
  function oe(M) {
    pe(M), Te.remove(M);
  }
  function pe(M) {
    const D = Te.get(M).programs;
    D !== void 0 &&
      (D.forEach(function (z) {
        Fe.releaseProgram(z);
      }),
      M.isShaderMaterial && Fe.releaseShaderCache(M));
  }
  (this.renderBufferDirect = function (M, D, z, F, H, fe) {
    D === null && (D = ce);
    const ve = H.isMesh && H.matrixWorld.determinant() < 0,
      be = za(M, D, z, F, H);
    se.setMaterial(F, ve);
    let Se = z.index;
    const Pe = z.attributes.position;
    if (Se === null) {
      if (Pe === void 0 || Pe.count === 0) return;
    } else if (Se.count === 0) return;
    let Ae = 1;
    F.wireframe === !0 && ((Se = xt.getWireframeAttribute(z)), (Ae = 2)),
      he.setup(H, F, be, z, Se);
    let Ce,
      Ue = re;
    Se !== null && ((Ce = it.get(Se)), (Ue = xe), Ue.setIndex(Ce));
    const Kt = Se !== null ? Se.count : Pe.count,
      pn = z.drawRange.start * Ae,
      mn = z.drawRange.count * Ae,
      Mt = fe !== null ? fe.start * Ae : 0,
      Le = fe !== null ? fe.count * Ae : 1 / 0,
      gn = Math.max(pn, Mt),
      Oe = Math.min(Kt, pn + mn, Mt + Le) - 1,
      yt = Math.max(0, Oe - gn + 1);
    if (yt !== 0) {
      if (H.isMesh)
        F.wireframe === !0
          ? (se.setLineWidth(F.wireframeLinewidth * ue()), Ue.setMode(1))
          : Ue.setMode(4);
      else if (H.isLine) {
        let Vt = F.linewidth;
        Vt === void 0 && (Vt = 1),
          se.setLineWidth(Vt * ue()),
          H.isLineSegments
            ? Ue.setMode(1)
            : H.isLineLoop
            ? Ue.setMode(2)
            : Ue.setMode(3);
      } else H.isPoints ? Ue.setMode(0) : H.isSprite && Ue.setMode(4);
      if (H.isInstancedMesh) Ue.renderInstances(gn, yt, H.count);
      else if (z.isInstancedBufferGeometry) {
        const Vt = Math.min(z.instanceCount, z._maxInstanceCount);
        Ue.renderInstances(gn, yt, Vt);
      } else Ue.render(gn, yt);
    }
  }),
    (this.compile = function (M, D) {
      (f = S.get(M)),
        f.init(),
        g.push(f),
        M.traverseVisible(function (z) {
          z.isLight &&
            z.layers.test(D.layers) &&
            (f.pushLight(z), z.castShadow && f.pushShadow(z));
        }),
        f.setupLights(p.physicallyCorrectLights),
        M.traverse(function (z) {
          const F = z.material;
          if (F)
            if (Array.isArray(F))
              for (let H = 0; H < F.length; H++) {
                const fe = F[H];
                Ni(fe, M, z);
              }
            else Ni(F, M, z);
        }),
        g.pop(),
        (f = null);
    });
  let $ = null;
  function me(M) {
    $ && $(M);
  }
  function De() {
    Ze.stop();
  }
  function Re() {
    Ze.start();
  }
  const Ze = new ya();
  Ze.setAnimationLoop(me),
    typeof self != "undefined" && Ze.setContext(self),
    (this.setAnimationLoop = function (M) {
      ($ = M), ae.setAnimationLoop(M), M === null ? Ze.stop() : Ze.start();
    }),
    ae.addEventListener("sessionstart", De),
    ae.addEventListener("sessionend", Re),
    (this.render = function (M, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (u === !0) return;
      M.autoUpdate === !0 && M.updateMatrixWorld(),
        D.parent === null && D.updateMatrixWorld(),
        ae.enabled === !0 &&
          ae.isPresenting === !0 &&
          (ae.cameraAutoUpdate === !0 && ae.updateCamera(D),
          (D = ae.getCamera())),
        M.isScene === !0 && M.onBeforeRender(p, M, D, T),
        (f = S.get(M, g.length)),
        f.init(),
        g.push(f),
        te.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
        q.setFromProjectionMatrix(te),
        (O = this.localClippingEnabled),
        (X = _.init(this.clippingPlanes, O, D)),
        (d = Rt.get(M, m.length)),
        d.init(),
        m.push(d),
        vt(M, D, 0, p.sortObjects),
        d.finish(),
        p.sortObjects === !0 && d.sort(Z, ne),
        X === !0 && _.beginShadows();
      const z = f.state.shadowsArray;
      if (
        (G.render(z, M, D),
        X === !0 && _.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        Y.render(d, M),
        f.setupLights(p.physicallyCorrectLights),
        D.isArrayCamera)
      ) {
        const F = D.cameras;
        for (let H = 0, fe = F.length; H < fe; H++) {
          const ve = F[H];
          Ur(d, M, ve, ve.viewport);
        }
      } else Ur(d, M, D);
      T !== null &&
        (_e.updateMultisampleRenderTarget(T), _e.updateRenderTargetMipmap(T)),
        M.isScene === !0 && M.onAfterRender(p, M, D),
        he.resetDefaultState(),
        (y = -1),
        (E = null),
        g.pop(),
        g.length > 0 ? (f = g[g.length - 1]) : (f = null),
        m.pop(),
        m.length > 0 ? (d = m[m.length - 1]) : (d = null);
    });
  function vt(M, D, z, F) {
    if (M.visible === !1) return;
    if (M.layers.test(D.layers)) {
      if (M.isGroup) z = M.renderOrder;
      else if (M.isLOD) M.autoUpdate === !0 && M.update(D);
      else if (M.isLight) f.pushLight(M), M.castShadow && f.pushShadow(M);
      else if (M.isSprite) {
        if (!M.frustumCulled || q.intersectsSprite(M)) {
          F && ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(te);
          const ve = He.update(M),
            be = M.material;
          be.visible && d.push(M, ve, be, z, ie.z, null);
        }
      } else if (
        (M.isMesh || M.isLine || M.isPoints) &&
        (M.isSkinnedMesh &&
          M.skeleton.frame !== Ie.render.frame &&
          (M.skeleton.update(), (M.skeleton.frame = Ie.render.frame)),
        !M.frustumCulled || q.intersectsObject(M))
      ) {
        F && ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(te);
        const ve = He.update(M),
          be = M.material;
        if (Array.isArray(be)) {
          const Se = ve.groups;
          for (let Pe = 0, Ae = Se.length; Pe < Ae; Pe++) {
            const Ce = Se[Pe],
              Ue = be[Ce.materialIndex];
            Ue && Ue.visible && d.push(M, ve, Ue, z, ie.z, Ce);
          }
        } else be.visible && d.push(M, ve, be, z, ie.z, null);
      }
    }
    const fe = M.children;
    for (let ve = 0, be = fe.length; ve < be; ve++) vt(fe[ve], D, z, F);
  }
  function Ur(M, D, z, F) {
    const H = M.opaque,
      fe = M.transmissive,
      ve = M.transparent;
    f.setupLightsView(z),
      fe.length > 0 && Fa(H, D, z),
      F && se.viewport(C.copy(F)),
      H.length > 0 && ai(H, D, z),
      fe.length > 0 && ai(fe, D, z),
      ve.length > 0 && ai(ve, D, z),
      se.buffers.depth.setTest(!0),
      se.buffers.depth.setMask(!0),
      se.buffers.color.setMask(!0),
      se.setPolygonOffset(!1);
  }
  function Fa(M, D, z) {
    const F = ye.isWebGL2;
    V === null &&
      (V = new $t(1, 1, {
        generateMipmaps: !0,
        type: Me.has("EXT_color_buffer_half_float") ? Qn : un,
        minFilter: Ii,
        samples: F && r === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize(j),
      F ? V.setSize(j.x, j.y) : V.setSize(wr(j.x), wr(j.y));
    const H = p.getRenderTarget();
    p.setRenderTarget(V), p.clear();
    const fe = p.toneMapping;
    (p.toneMapping = Bt),
      ai(M, D, z),
      (p.toneMapping = fe),
      _e.updateMultisampleRenderTarget(V),
      _e.updateRenderTargetMipmap(V),
      p.setRenderTarget(H);
  }
  function ai(M, D, z) {
    const F = D.isScene === !0 ? D.overrideMaterial : null;
    for (let H = 0, fe = M.length; H < fe; H++) {
      const ve = M[H],
        be = ve.object,
        Se = ve.geometry,
        Pe = F === null ? ve.material : F,
        Ae = ve.group;
      be.layers.test(z.layers) && Na(be, D, z, Se, Pe, Ae);
    }
  }
  function Na(M, D, z, F, H, fe) {
    M.onBeforeRender(p, D, z, F, H, fe),
      M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, M.matrixWorld),
      M.normalMatrix.getNormalMatrix(M.modelViewMatrix),
      H.onBeforeRender(p, D, z, F, M, fe),
      H.transparent === !0 && H.side === Nn
        ? ((H.side = gt),
          (H.needsUpdate = !0),
          p.renderBufferDirect(z, D, F, H, M, fe),
          (H.side = Kn),
          (H.needsUpdate = !0),
          p.renderBufferDirect(z, D, F, H, M, fe),
          (H.side = Nn))
        : p.renderBufferDirect(z, D, F, H, M, fe),
      M.onAfterRender(p, D, z, F, H, fe);
  }
  function Ni(M, D, z) {
    D.isScene !== !0 && (D = ce);
    const F = Te.get(M),
      H = f.state.lights,
      fe = f.state.shadowsArray,
      ve = H.state.version,
      be = Fe.getParameters(M, H.state, fe, D, z),
      Se = Fe.getProgramCacheKey(be);
    let Pe = F.programs;
    (F.environment = M.isMeshStandardMaterial ? D.environment : null),
      (F.fog = D.fog),
      (F.envMap = (M.isMeshStandardMaterial ? Qe : je).get(
        M.envMap || F.environment
      )),
      Pe === void 0 &&
        (M.addEventListener("dispose", de),
        (Pe = new Map()),
        (F.programs = Pe));
    let Ae = Pe.get(Se);
    if (Ae !== void 0) {
      if (F.currentProgram === Ae && F.lightsStateVersion === ve)
        return Or(M, be), Ae;
    } else
      (be.uniforms = Fe.getUniforms(M)),
        M.onBuild(z, be, p),
        M.onBeforeCompile(be, p),
        (Ae = Fe.acquireProgram(be, Se)),
        Pe.set(Se, Ae),
        (F.uniforms = be.uniforms);
    const Ce = F.uniforms;
    ((!M.isShaderMaterial && !M.isRawShaderMaterial) || M.clipping === !0) &&
      (Ce.clippingPlanes = _.uniform),
      Or(M, be),
      (F.needsLights = Oa(M)),
      (F.lightsStateVersion = ve),
      F.needsLights &&
        ((Ce.ambientLightColor.value = H.state.ambient),
        (Ce.lightProbe.value = H.state.probe),
        (Ce.directionalLights.value = H.state.directional),
        (Ce.directionalLightShadows.value = H.state.directionalShadow),
        (Ce.spotLights.value = H.state.spot),
        (Ce.spotLightShadows.value = H.state.spotShadow),
        (Ce.rectAreaLights.value = H.state.rectArea),
        (Ce.ltc_1.value = H.state.rectAreaLTC1),
        (Ce.ltc_2.value = H.state.rectAreaLTC2),
        (Ce.pointLights.value = H.state.point),
        (Ce.pointLightShadows.value = H.state.pointShadow),
        (Ce.hemisphereLights.value = H.state.hemi),
        (Ce.directionalShadowMap.value = H.state.directionalShadowMap),
        (Ce.directionalShadowMatrix.value = H.state.directionalShadowMatrix),
        (Ce.spotShadowMap.value = H.state.spotShadowMap),
        (Ce.spotShadowMatrix.value = H.state.spotShadowMatrix),
        (Ce.pointShadowMap.value = H.state.pointShadowMap),
        (Ce.pointShadowMatrix.value = H.state.pointShadowMatrix));
    const Ue = Ae.getUniforms(),
      Kt = Li.seqWithValue(Ue.seq, Ce);
    return (F.currentProgram = Ae), (F.uniformsList = Kt), Ae;
  }
  function Or(M, D) {
    const z = Te.get(M);
    (z.outputEncoding = D.outputEncoding),
      (z.instancing = D.instancing),
      (z.skinning = D.skinning),
      (z.morphTargets = D.morphTargets),
      (z.morphNormals = D.morphNormals),
      (z.morphColors = D.morphColors),
      (z.morphTargetsCount = D.morphTargetsCount),
      (z.numClippingPlanes = D.numClippingPlanes),
      (z.numIntersection = D.numClipIntersection),
      (z.vertexAlphas = D.vertexAlphas),
      (z.vertexTangents = D.vertexTangents),
      (z.toneMapping = D.toneMapping);
  }
  function za(M, D, z, F, H) {
    D.isScene !== !0 && (D = ce), _e.resetTextureUnits();
    const fe = D.fog,
      ve = F.isMeshStandardMaterial ? D.environment : null,
      be =
        T === null
          ? p.outputEncoding
          : T.isXRRenderTarget === !0
          ? T.texture.encoding
          : dn,
      Se = (F.isMeshStandardMaterial ? Qe : je).get(F.envMap || ve),
      Pe =
        F.vertexColors === !0 &&
        !!z.attributes.color &&
        z.attributes.color.itemSize === 4,
      Ae = !!F.normalMap && !!z.attributes.tangent,
      Ce = !!z.morphAttributes.position,
      Ue = !!z.morphAttributes.normal,
      Kt = !!z.morphAttributes.color,
      pn = F.toneMapped ? p.toneMapping : Bt,
      mn =
        z.morphAttributes.position ||
        z.morphAttributes.normal ||
        z.morphAttributes.color,
      Mt = mn !== void 0 ? mn.length : 0,
      Le = Te.get(F),
      gn = f.state.lights;
    if (X === !0 && (O === !0 || M !== E)) {
      const St = M === E && F.id === y;
      _.setState(F, M, St);
    }
    let Oe = !1;
    F.version === Le.__version
      ? ((Le.needsLights && Le.lightsStateVersion !== gn.state.version) ||
          Le.outputEncoding !== be ||
          (H.isInstancedMesh && Le.instancing === !1) ||
          (!H.isInstancedMesh && Le.instancing === !0) ||
          (H.isSkinnedMesh && Le.skinning === !1) ||
          (!H.isSkinnedMesh && Le.skinning === !0) ||
          Le.envMap !== Se ||
          (F.fog === !0 && Le.fog !== fe) ||
          (Le.numClippingPlanes !== void 0 &&
            (Le.numClippingPlanes !== _.numPlanes ||
              Le.numIntersection !== _.numIntersection)) ||
          Le.vertexAlphas !== Pe ||
          Le.vertexTangents !== Ae ||
          Le.morphTargets !== Ce ||
          Le.morphNormals !== Ue ||
          Le.morphColors !== Kt ||
          Le.toneMapping !== pn ||
          (ye.isWebGL2 === !0 && Le.morphTargetsCount !== Mt)) &&
        (Oe = !0)
      : ((Oe = !0), (Le.__version = F.version));
    let yt = Le.currentProgram;
    Oe === !0 && (yt = Ni(F, D, H));
    let Vt = !1,
      qn = !1,
      zi = !1;
    const $e = yt.getUniforms(),
      Xn = Le.uniforms;
    if (
      (se.useProgram(yt.program) && ((Vt = !0), (qn = !0), (zi = !0)),
      F.id !== y && ((y = F.id), (qn = !0)),
      Vt || E !== M)
    ) {
      if (
        ($e.setValue(k, "projectionMatrix", M.projectionMatrix),
        ye.logarithmicDepthBuffer &&
          $e.setValue(k, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)),
        E !== M && ((E = M), (qn = !0), (zi = !0)),
        F.isShaderMaterial ||
          F.isMeshPhongMaterial ||
          F.isMeshToonMaterial ||
          F.isMeshStandardMaterial ||
          F.envMap)
      ) {
        const St = $e.map.cameraPosition;
        St !== void 0 &&
          St.setValue(k, ie.setFromMatrixPosition(M.matrixWorld));
      }
      (F.isMeshPhongMaterial ||
        F.isMeshToonMaterial ||
        F.isMeshLambertMaterial ||
        F.isMeshBasicMaterial ||
        F.isMeshStandardMaterial ||
        F.isShaderMaterial) &&
        $e.setValue(k, "isOrthographic", M.isOrthographicCamera === !0),
        (F.isMeshPhongMaterial ||
          F.isMeshToonMaterial ||
          F.isMeshLambertMaterial ||
          F.isMeshBasicMaterial ||
          F.isMeshStandardMaterial ||
          F.isShaderMaterial ||
          F.isShadowMaterial ||
          H.isSkinnedMesh) &&
          $e.setValue(k, "viewMatrix", M.matrixWorldInverse);
    }
    if (H.isSkinnedMesh) {
      $e.setOptional(k, H, "bindMatrix"),
        $e.setOptional(k, H, "bindMatrixInverse");
      const St = H.skeleton;
      St &&
        (ye.floatVertexTextures
          ? (St.boneTexture === null && St.computeBoneTexture(),
            $e.setValue(k, "boneTexture", St.boneTexture, _e),
            $e.setValue(k, "boneTextureSize", St.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const Ui = z.morphAttributes;
    return (
      (Ui.position !== void 0 ||
        Ui.normal !== void 0 ||
        (Ui.color !== void 0 && ye.isWebGL2 === !0)) &&
        J.update(H, z, F, yt),
      (qn || Le.receiveShadow !== H.receiveShadow) &&
        ((Le.receiveShadow = H.receiveShadow),
        $e.setValue(k, "receiveShadow", H.receiveShadow)),
      qn &&
        ($e.setValue(k, "toneMappingExposure", p.toneMappingExposure),
        Le.needsLights && Ua(Xn, zi),
        fe && F.fog === !0 && Dt.refreshFogUniforms(Xn, fe),
        Dt.refreshMaterialUniforms(Xn, F, N, I, V),
        Li.upload(k, Le.uniformsList, Xn, _e)),
      F.isShaderMaterial &&
        F.uniformsNeedUpdate === !0 &&
        (Li.upload(k, Le.uniformsList, Xn, _e), (F.uniformsNeedUpdate = !1)),
      F.isSpriteMaterial && $e.setValue(k, "center", H.center),
      $e.setValue(k, "modelViewMatrix", H.modelViewMatrix),
      $e.setValue(k, "normalMatrix", H.normalMatrix),
      $e.setValue(k, "modelMatrix", H.matrixWorld),
      yt
    );
  }
  function Ua(M, D) {
    (M.ambientLightColor.needsUpdate = D),
      (M.lightProbe.needsUpdate = D),
      (M.directionalLights.needsUpdate = D),
      (M.directionalLightShadows.needsUpdate = D),
      (M.pointLights.needsUpdate = D),
      (M.pointLightShadows.needsUpdate = D),
      (M.spotLights.needsUpdate = D),
      (M.spotLightShadows.needsUpdate = D),
      (M.rectAreaLights.needsUpdate = D),
      (M.hemisphereLights.needsUpdate = D);
  }
  function Oa(M) {
    return (
      M.isMeshLambertMaterial ||
      M.isMeshToonMaterial ||
      M.isMeshPhongMaterial ||
      M.isMeshStandardMaterial ||
      M.isShadowMaterial ||
      (M.isShaderMaterial && M.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return v;
  }),
    (this.getActiveMipmapLevel = function () {
      return b;
    }),
    (this.getRenderTarget = function () {
      return T;
    }),
    (this.setRenderTargetTextures = function (M, D, z) {
      (Te.get(M.texture).__webglTexture = D),
        (Te.get(M.depthTexture).__webglTexture = z);
      const F = Te.get(M);
      (F.__hasExternalTextures = !0),
        F.__hasExternalTextures &&
          ((F.__autoAllocateDepthBuffer = z === void 0),
          F.__autoAllocateDepthBuffer ||
            (Me.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (F.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (M, D) {
      const z = Te.get(M);
      (z.__webglFramebuffer = D), (z.__useDefaultFramebuffer = D === void 0);
    }),
    (this.setRenderTarget = function (M, D = 0, z = 0) {
      (T = M), (v = D), (b = z);
      let F = !0;
      if (M) {
        const Se = Te.get(M);
        Se.__useDefaultFramebuffer !== void 0
          ? (se.bindFramebuffer(36160, null), (F = !1))
          : Se.__webglFramebuffer === void 0
          ? _e.setupRenderTarget(M)
          : Se.__hasExternalTextures &&
            _e.rebindTextures(
              M,
              Te.get(M.texture).__webglTexture,
              Te.get(M.depthTexture).__webglTexture
            );
      }
      let H = null,
        fe = !1,
        ve = !1;
      if (M) {
        const Se = M.texture;
        (Se.isData3DTexture || Se.isDataArrayTexture) && (ve = !0);
        const Pe = Te.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget
          ? ((H = Pe[D]), (fe = !0))
          : ye.isWebGL2 && M.samples > 0 && _e.useMultisampledRTT(M) === !1
          ? (H = Te.get(M).__webglMultisampledFramebuffer)
          : (H = Pe),
          C.copy(M.viewport),
          R.copy(M.scissor),
          (x = M.scissorTest);
      } else
        C.copy(P).multiplyScalar(N).floor(),
          R.copy(W).multiplyScalar(N).floor(),
          (x = B);
      if (
        (se.bindFramebuffer(36160, H) &&
          ye.drawBuffers &&
          F &&
          se.drawBuffers(M, H),
        se.viewport(C),
        se.scissor(R),
        se.setScissorTest(x),
        fe)
      ) {
        const Se = Te.get(M.texture);
        k.framebufferTexture2D(36160, 36064, 34069 + D, Se.__webglTexture, z);
      } else if (ve) {
        const Se = Te.get(M.texture),
          Pe = D || 0;
        k.framebufferTextureLayer(36160, 36064, Se.__webglTexture, z || 0, Pe);
      }
      y = -1;
    }),
    (this.readRenderTargetPixels = function (M, D, z, F, H, fe, ve) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let be = Te.get(M).__webglFramebuffer;
      if ((M.isWebGLCubeRenderTarget && ve !== void 0 && (be = be[ve]), be)) {
        se.bindFramebuffer(36160, be);
        try {
          const Se = M.texture,
            Pe = Se.format,
            Ae = Se.type;
          if (Pe !== mt && U.convert(Pe) !== k.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Ce =
            Ae === Qn &&
            (Me.has("EXT_color_buffer_half_float") ||
              (ye.isWebGL2 && Me.has("EXT_color_buffer_float")));
          if (
            Ae !== un &&
            U.convert(Ae) !== k.getParameter(35738) &&
            !(
              Ae === on &&
              (ye.isWebGL2 ||
                Me.has("OES_texture_float") ||
                Me.has("WEBGL_color_buffer_float"))
            ) &&
            !Ce
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          D >= 0 &&
            D <= M.width - F &&
            z >= 0 &&
            z <= M.height - H &&
            k.readPixels(D, z, F, H, U.convert(Pe), U.convert(Ae), fe);
        } finally {
          const Se = T !== null ? Te.get(T).__webglFramebuffer : null;
          se.bindFramebuffer(36160, Se);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (M, D, z = 0) {
      const F = Math.pow(2, -z),
        H = Math.floor(D.image.width * F),
        fe = Math.floor(D.image.height * F);
      _e.setTexture2D(D, 0),
        k.copyTexSubImage2D(3553, z, 0, 0, M.x, M.y, H, fe),
        se.unbindTexture();
    }),
    (this.copyTextureToTexture = function (M, D, z, F = 0) {
      const H = D.image.width,
        fe = D.image.height,
        ve = U.convert(z.format),
        be = U.convert(z.type);
      _e.setTexture2D(z, 0),
        k.pixelStorei(37440, z.flipY),
        k.pixelStorei(37441, z.premultiplyAlpha),
        k.pixelStorei(3317, z.unpackAlignment),
        D.isDataTexture
          ? k.texSubImage2D(3553, F, M.x, M.y, H, fe, ve, be, D.image.data)
          : D.isCompressedTexture
          ? k.compressedTexSubImage2D(
              3553,
              F,
              M.x,
              M.y,
              D.mipmaps[0].width,
              D.mipmaps[0].height,
              ve,
              D.mipmaps[0].data
            )
          : k.texSubImage2D(3553, F, M.x, M.y, ve, be, D.image),
        F === 0 && z.generateMipmaps && k.generateMipmap(3553),
        se.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (M, D, z, F, H = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const fe = M.max.x - M.min.x + 1,
        ve = M.max.y - M.min.y + 1,
        be = M.max.z - M.min.z + 1,
        Se = U.convert(F.format),
        Pe = U.convert(F.type);
      let Ae;
      if (F.isData3DTexture) _e.setTexture3D(F, 0), (Ae = 32879);
      else if (F.isDataArrayTexture) _e.setTexture2DArray(F, 0), (Ae = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      k.pixelStorei(37440, F.flipY),
        k.pixelStorei(37441, F.premultiplyAlpha),
        k.pixelStorei(3317, F.unpackAlignment);
      const Ce = k.getParameter(3314),
        Ue = k.getParameter(32878),
        Kt = k.getParameter(3316),
        pn = k.getParameter(3315),
        mn = k.getParameter(32877),
        Mt = z.isCompressedTexture ? z.mipmaps[0] : z.image;
      k.pixelStorei(3314, Mt.width),
        k.pixelStorei(32878, Mt.height),
        k.pixelStorei(3316, M.min.x),
        k.pixelStorei(3315, M.min.y),
        k.pixelStorei(32877, M.min.z),
        z.isDataTexture || z.isData3DTexture
          ? k.texSubImage3D(Ae, H, D.x, D.y, D.z, fe, ve, be, Se, Pe, Mt.data)
          : z.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            k.compressedTexSubImage3D(
              Ae,
              H,
              D.x,
              D.y,
              D.z,
              fe,
              ve,
              be,
              Se,
              Mt.data
            ))
          : k.texSubImage3D(Ae, H, D.x, D.y, D.z, fe, ve, be, Se, Pe, Mt),
        k.pixelStorei(3314, Ce),
        k.pixelStorei(32878, Ue),
        k.pixelStorei(3316, Kt),
        k.pixelStorei(3315, pn),
        k.pixelStorei(32877, mn),
        H === 0 && F.generateMipmaps && k.generateMipmap(Ae),
        se.unbindTexture();
    }),
    (this.initTexture = function (M) {
      _e.setTexture2D(M, 0), se.unbindTexture();
    }),
    (this.resetState = function () {
      (v = 0), (b = 0), (T = null), se.reset(), he.reset();
    }),
    typeof __THREE_DEVTOOLS__ != "undefined" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class Gd extends Da {}
Gd.prototype.isWebGL1Renderer = !0;
class Vd extends nt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ != "undefined" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
}
class kd extends Xe {
  constructor(e) {
    super(),
      (this.isSpriteMaterial = !0),
      (this.type = "SpriteMaterial"),
      (this.color = new ge(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
class Ra extends Xe {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new ge(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
class Hd extends Xe {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new ge(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
new L();
class Wn extends Jt {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: i });
    const r = [],
      o = [];
    a(i),
      l(n),
      h(),
      this.setAttribute("position", new Lt(r, 3)),
      this.setAttribute("normal", new Lt(r.slice(), 3)),
      this.setAttribute("uv", new Lt(o, 2)),
      i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(b) {
      const T = new L(),
        y = new L(),
        E = new L();
      for (let C = 0; C < t.length; C += 3)
        m(t[C + 0], T), m(t[C + 1], y), m(t[C + 2], E), c(T, y, E, b);
    }
    function c(b, T, y, E) {
      const C = E + 1,
        R = [];
      for (let x = 0; x <= C; x++) {
        R[x] = [];
        const w = b.clone().lerp(y, x / C),
          I = T.clone().lerp(y, x / C),
          N = C - x;
        for (let Z = 0; Z <= N; Z++)
          Z === 0 && x === C
            ? (R[x][Z] = w)
            : (R[x][Z] = w.clone().lerp(I, Z / N));
      }
      for (let x = 0; x < C; x++)
        for (let w = 0; w < 2 * (C - x) - 1; w++) {
          const I = Math.floor(w / 2);
          w % 2 === 0
            ? (f(R[x][I + 1]), f(R[x + 1][I]), f(R[x][I]))
            : (f(R[x][I + 1]), f(R[x + 1][I + 1]), f(R[x + 1][I]));
        }
    }
    function l(b) {
      const T = new L();
      for (let y = 0; y < r.length; y += 3)
        (T.x = r[y + 0]),
          (T.y = r[y + 1]),
          (T.z = r[y + 2]),
          T.normalize().multiplyScalar(b),
          (r[y + 0] = T.x),
          (r[y + 1] = T.y),
          (r[y + 2] = T.z);
    }
    function h() {
      const b = new L();
      for (let T = 0; T < r.length; T += 3) {
        (b.x = r[T + 0]), (b.y = r[T + 1]), (b.z = r[T + 2]);
        const y = u(b) / 2 / Math.PI + 0.5,
          E = v(b) / Math.PI + 0.5;
        o.push(y, 1 - E);
      }
      g(), d();
    }
    function d() {
      for (let b = 0; b < o.length; b += 6) {
        const T = o[b + 0],
          y = o[b + 2],
          E = o[b + 4],
          C = Math.max(T, y, E),
          R = Math.min(T, y, E);
        C > 0.9 &&
          R < 0.1 &&
          (T < 0.2 && (o[b + 0] += 1),
          y < 0.2 && (o[b + 2] += 1),
          E < 0.2 && (o[b + 4] += 1));
      }
    }
    function f(b) {
      r.push(b.x, b.y, b.z);
    }
    function m(b, T) {
      const y = b * 3;
      (T.x = e[y + 0]), (T.y = e[y + 1]), (T.z = e[y + 2]);
    }
    function g() {
      const b = new L(),
        T = new L(),
        y = new L(),
        E = new L(),
        C = new Ee(),
        R = new Ee(),
        x = new Ee();
      for (let w = 0, I = 0; w < r.length; w += 9, I += 6) {
        b.set(r[w + 0], r[w + 1], r[w + 2]),
          T.set(r[w + 3], r[w + 4], r[w + 5]),
          y.set(r[w + 6], r[w + 7], r[w + 8]),
          C.set(o[I + 0], o[I + 1]),
          R.set(o[I + 2], o[I + 3]),
          x.set(o[I + 4], o[I + 5]),
          E.copy(b).add(T).add(y).divideScalar(3);
        const N = u(E);
        p(C, I + 0, b, N), p(R, I + 2, T, N), p(x, I + 4, y, N);
      }
    }
    function p(b, T, y, E) {
      E < 0 && b.x === 1 && (o[T] = b.x - 1),
        y.x === 0 && y.z === 0 && (o[T] = E / 2 / Math.PI + 0.5);
    }
    function u(b) {
      return Math.atan2(b.z, -b.x);
    }
    function v(b) {
      return Math.atan2(-b.y, Math.sqrt(b.x * b.x + b.z * b.z));
    }
  }
  static fromJSON(e) {
    return new Wn(e.vertices, e.indices, e.radius, e.details);
  }
}
class Pr extends Wn {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      i = 1 / n,
      r = [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -i,
        -n,
        0,
        -i,
        n,
        0,
        i,
        -n,
        0,
        i,
        n,
        -i,
        -n,
        0,
        -i,
        n,
        0,
        i,
        -n,
        0,
        i,
        n,
        0,
        -n,
        0,
        -i,
        n,
        0,
        -i,
        -n,
        0,
        i,
        n,
        0,
        i,
      ],
      o = [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ];
    super(r, o, e, t),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new Pr(e.radius, e.detail);
  }
}
new L();
new L();
new L();
new Tt();
class Ir extends Wn {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      i = [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      r = [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ];
    super(i, r, e, t),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new Ir(e.radius, e.detail);
  }
}
class Fr extends Wn {
  constructor(e = 1, t = 0) {
    const n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      i = [
        0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2,
      ];
    super(n, i, e, t),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new Fr(e.radius, e.detail);
  }
}
class Nr extends Wn {
  constructor(e = 1, t = 0) {
    const n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    super(n, i, e, t),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new Nr(e.radius, e.detail);
  }
}
class Wd extends Xe {
  constructor(e) {
    super(),
      (this.isShadowMaterial = !0),
      (this.type = "ShadowMaterial"),
      (this.color = new ge(0)),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), (this.fog = e.fog), this;
  }
}
class qd extends Gt {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class fn extends Xe {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new ge(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ge(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Gn),
      (this.normalScale = new Ee(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Xd extends fn {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Ee(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return tt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new ge(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new ge(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new ge(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class jd extends Xe {
  constructor(e) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.type = "MeshPhongMaterial"),
      (this.color = new ge(16777215)),
      (this.specular = new ge(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ge(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Gn),
      (this.normalScale = new Ee(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ri),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Yd extends Xe {
  constructor(e) {
    super(),
      (this.isMeshToonMaterial = !0),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new ge(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ge(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Gn),
      (this.normalScale = new Ee(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.gradientMap = e.gradientMap),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
class Zd extends Xe {
  constructor(e) {
    super(),
      (this.isMeshNormalMaterial = !0),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Gn),
      (this.normalScale = new Ee(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
class $d extends Xe {
  constructor(e) {
    super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new ge(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ge(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ri),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
class Jd extends Xe {
  constructor(e) {
    super(),
      (this.isMeshMatcapMaterial = !0),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new ge(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Gn),
      (this.normalScale = new Ee(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { MATCAP: "" }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Kd extends Ra {
  constructor(e) {
    super(),
      (this.isLineDashedMaterial = !0),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.scale = e.scale),
      (this.dashSize = e.dashSize),
      (this.gapSize = e.gapSize),
      this
    );
  }
}
const Qd = {
  ShadowMaterial: Wd,
  SpriteMaterial: kd,
  RawShaderMaterial: qd,
  ShaderMaterial: Gt,
  PointsMaterial: Hd,
  MeshPhysicalMaterial: Xd,
  MeshStandardMaterial: fn,
  MeshPhongMaterial: jd,
  MeshToonMaterial: Yd,
  MeshNormalMaterial: Zd,
  MeshLambertMaterial: $d,
  MeshDepthMaterial: Ca,
  MeshDistanceMaterial: La,
  MeshBasicMaterial: Cr,
  MeshMatcapMaterial: Jd,
  LineDashedMaterial: Kd,
  LineBasicMaterial: Ra,
  Material: Xe,
};
Xe.fromType = function (s) {
  return new Qd[s]();
};
class ef extends nt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new ge(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const Qs = new ke(),
  ea = new L(),
  ta = new L();
class tf {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ee(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new ke()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Lr()),
      (this._frameExtents = new Ee(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new qe(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    ea.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(ea),
      ta.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(ta),
      t.updateMatrixWorld(),
      Qs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Qs),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(t.projectionMatrix),
      n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class nf extends tf {
  constructor() {
    super(new Sa(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class rf extends ef {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(nt.DefaultUp),
      this.updateMatrix(),
      (this.target = new nt()),
      (this.shadow = new nf());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class sf {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = na()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = na();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function na() {
  return (typeof performance == "undefined" ? Date : performance).now();
}
const Pa = "\\[\\]\\.:\\/",
  zr = "[^" + Pa + "]",
  af = "[^" + Pa.replace("\\.", "") + "]";
/((?:WC+[\/:])*)/.source.replace("WC", zr);
/(WCOD+)?/.source.replace("WCOD", af);
/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", zr);
/\.(WC+)(?:\[(.+)\])?/.source.replace("WC", zr);
const bt = new Uint32Array(512),
  wt = new Uint32Array(512);
for (let s = 0; s < 256; ++s) {
  const e = s - 127;
  e < -27
    ? ((bt[s] = 0), (bt[s | 256] = 32768), (wt[s] = 24), (wt[s | 256] = 24))
    : e < -14
    ? ((bt[s] = 1024 >> (-e - 14)),
      (bt[s | 256] = (1024 >> (-e - 14)) | 32768),
      (wt[s] = -e - 1),
      (wt[s | 256] = -e - 1))
    : e <= 15
    ? ((bt[s] = (e + 15) << 10),
      (bt[s | 256] = ((e + 15) << 10) | 32768),
      (wt[s] = 13),
      (wt[s | 256] = 13))
    : e < 128
    ? ((bt[s] = 31744), (bt[s | 256] = 64512), (wt[s] = 24), (wt[s | 256] = 24))
    : ((bt[s] = 31744),
      (bt[s | 256] = 64512),
      (wt[s] = 13),
      (wt[s | 256] = 13));
}
const Ia = new Uint32Array(2048),
  ri = new Uint32Array(64),
  of = new Uint32Array(64);
for (let s = 1; s < 1024; ++s) {
  let e = s << 13,
    t = 0;
  for (; (e & 8388608) === 0; ) (e <<= 1), (t -= 8388608);
  (e &= -8388609), (t += 947912704), (Ia[s] = e | t);
}
for (let s = 1024; s < 2048; ++s) Ia[s] = 939524096 + ((s - 1024) << 13);
for (let s = 1; s < 31; ++s) ri[s] = s << 23;
ri[31] = 1199570944;
ri[32] = 2147483648;
for (let s = 33; s < 63; ++s) ri[s] = 2147483648 + ((s - 32) << 23);
ri[63] = 3347054592;
for (let s = 1; s < 64; ++s) s !== 32 && (of[s] = 1024);
typeof __THREE_DEVTOOLS__ != "undefined" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Tr } })
  );
typeof window != "undefined" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Tr));
class si extends Ot {
  tick() {
    (this.rotation.z += 0.01),
      (this.rotation.x += 0.01),
      (this.rotation.y += 0.01);
  }
}
function lf(s = 2, e = { x: 0, y: -0.5, z: 0 }) {
  const { x: t, y: n, z: i } = e,
    r = new kn(s, s, s),
    o = new fn(),
    a = new si(r, o);
  return (
    a.rotation.set(-0.5, -0.1, 0.8),
    a.position.set(t, n, i),
    (a.tick = () => {
      (a.rotation.z += 0.01), (a.rotation.x += 0.01), (a.rotation.y += 0.01);
    }),
    a
  );
}
function cf(
  s,
  e = { aspect: 1, fov: 35, near: 0.1, far: 100 },
  t = { x: 0, y: 0, z: 10 }
) {
  const { clientWidth: n, clientHeight: i } = s,
    { x: r, y: o, z: a } = t,
    { far: c, fov: l, near: h } = e;
  let { aspect: d } = e;
  d = n / i;
  const f = new ct(l, d, c, h);
  return f.position.set(r, o, a), f;
}
function hf(s = { radius: 1, detail: 0 }, e = { x: 0, y: 0, z: 0 }) {
  const { radius: t, detail: n } = s,
    { x: i, y: r, z: o } = e,
    a = new Pr(t, n),
    c = new fn({ color: 14939123 }),
    l = new si(a, c);
  return l.position.set(i, r, o), l;
}
function uf(s = { radius: 1, detail: 0 }, e = { x: 0, y: 0, z: 0 }) {
  const { radius: t, detail: n } = s,
    { x: i, y: r, z: o } = e,
    a = new Ir(t, n),
    c = new fn(),
    l = new si(a, c);
  return l.position.set(i, r, o), l;
}
function df(s = { radius: 1, detail: 0 }, e = { x: 0, y: 0, z: 0 }) {
  const { radius: t, detail: n } = s,
    { x: i, y: r, z: o } = e,
    a = new Fr(t, n),
    c = new fn(),
    l = new si(a, c);
  return l.position.set(i, r, o), l;
}
function ff(s = "white", e = 8, t = { x: 10, y: 10, z: 10 }) {
  const { x: n, y: i, z: r } = t,
    o = new rf(s, e);
  return o.position.set(n, i, r), o;
}
function pf(s = "aqua") {
  const e = new Vd();
  return (e.background = new ge(s)), e;
}
function mf(s = { radius: 1, detail: 0 }, e = { x: 0, y: 0, z: 0 }) {
  const { radius: t, detail: n } = s,
    { x: i, y: r, z: o } = e,
    a = new Nr(t, n),
    c = new fn(),
    l = new si(a, c);
  return l.position.set(i, r, o), l;
}
class gf {
  constructor(e, t, n) {
    rt(this, "camera");
    rt(this, "clock");
    rt(this, "scene");
    rt(this, "renderer");
    rt(this, "updatables");
    (this.camera = e),
      (this.clock = new sf(!0)),
      (this.scene = t),
      (this.renderer = n),
      (this.updatables = []);
  }
  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick(), this.renderer.render(this.scene, this.camera);
    });
  }
  stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick() {
    this.updatables.forEach((e) => {
      e.tick();
    });
  }
}
function _f(s) {
  const e = new Da({ antialias: !0 });
  return (
    e.setSize(s.clientWidth, s.clientHeight),
    e.setPixelRatio(window.devicePixelRatio),
    (e.physicallyCorrectLights = !0),
    e
  );
}
class xf {
  constructor(e, t, n) {
    rt(this, "setSize", (e, t, n) => {
      const { clientWidth: i, clientHeight: r } = e;
      (t.aspect = i / r),
        t.updateProjectionMatrix(),
        n.setSize(i, r),
        n.setPixelRatio(window.devicePixelRatio);
    });
    this.setSize(e, t, n),
      window.addEventListener("resize", () => {
        this.setSize(e, t, n), this.onResize();
      });
  }
  onResize() {}
}
class vf {
  constructor(e) {
    rt(this, "camera");
    rt(this, "scene");
    rt(this, "renderer");
    rt(this, "container");
    rt(this, "loop");
    rt(this, "resizer");
    if (e === null) throw Error("ProvidedContainerIsNull");
    (this.container = e), (this.camera = cf(e)), (this.scene = pf("turquoise"));
    const t = ff();
    this.scene.add(t),
      (this.renderer = _f(e)),
      (this.loop = new gf(this.camera, this.scene, this.renderer)),
      this.container.append(this.renderer.domElement),
      (this.resizer = new xf(e, this.camera, this.renderer));
  }
  generateShapes() {
    const e = [];
    e.push(lf(void 0, { x: 1, y: -1, z: -12.5 })),
      e.push(mf(void 0, { x: -3, y: -2, z: -4 })),
      e.push(uf(void 0, { x: -2.2, y: 2, z: 0 })),
      e.push(hf(void 0, { x: -3, y: 0, z: -2 })),
      e.push(df(void 0, { x: 3, y: 2, z: -3 })),
      e.forEach((t) => {
        this.scene.add(t), this.loop.updatables.push(t);
      });
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    this.renderer.dispose();
  }
  start() {
    this.loop.start();
  }
  stop() {
    this.loop.stop();
  }
}
const Mf = { id: "canvas" },
  yf = ia({
    name: "PlatonicScene",
    setup(s) {
      let e, t;
      return (
        Va(() => {
          if (((t = document.getElementById("canvas")), !t))
            throw new Error("ContainerIsNull");
          (e = new vf(t)), e.generateShapes(), e.start();
        }),
        ka(() => {
          e.destroy();
        }),
        (n, i) => (ra(), sa("div", Mf))
      );
    },
  });
var Sf = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, i] of e) t[n] = i;
  return t;
};
const bf = (s) => (qa("data-v-4d436ab0"), (s = s()), Xa(), s),
  wf = bf(() => Ya("h1", null, "Platonic", -1)),
  Ef = ia({
    name: "PlatonicView",
    setup(s) {
      return (e, t) => (
        ra(),
        sa(
          Wa,
          null,
          [
            wf,
            Oi(
              Gr(Ha),
              { class: "grid", cols: 24 },
              {
                default: Br(() => [
                  Oi(
                    Gr(ja),
                    { class: "tv", offset: 2, span: 20 },
                    { default: Br(() => [Oi(yf)]), _: 1 }
                  ),
                ]),
                _: 1,
              }
            ),
          ],
          64
        )
      );
    },
  });
var Cf = Sf(Ef, [["__scopeId", "data-v-4d436ab0"]]);
export { Cf as default };
