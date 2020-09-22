// Issue a warning if trying to preview an exported project on disk.
(function(){
	// Check for running exported on file protocol
	if (window.location.protocol.substr(0, 4) === "file")
	{
		alert("请通过HBuilderX HTTP协议打开");
		alert("Exported games won't work until you upload them. (When running on the file:/// protocol, browsers block many features from working for security reasons.)");
	}
})();



"use strict";
var aa, ba, da, ea, ga, ha, ia, ja, ka, la, ma, na, qa, ra, sa, ta, ua, va, wa, xa, Aa, Ba, z, Ca, Da, Ea, Fa, Ga, B, Ha, Ia, Ja, Ka, La, Ma, Oa, Pa, Qa, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(c) {
    return c.__proto__
} : function(c) {
    return c.constructor.prototype
});
(function() {
    function c(a, e, g, b) {
        this.set(a, e, g, b)
    }

    function d() {
        this.lb = this.kb = this.nb = this.mb = this.wb = this.ub = this.Ya = this.Xa = 0
    }

    function b(a, e, g, b) {
        a < e ? g < b ? (J = a < g ? a : g, q = e > b ? e : b) : (J = a < b ? a : b, q = e > g ? e : g) : g < b ? (J = e < g ? e : g, q = a > b ? a : b) : (J = e < b ? e : b, q = a > g ? a : g)
    }

    function k() {
        this.items = this.nc = null;
        this.Sh = 0;
        Y && (this.nc = new Set);
        this.fh = [];
        this.De = !0
    }

    function p(a) {
        y[C++] = a
    }

    function m() {
        this.N = this.$g = this.y = this.Ol = 0
    }

    function f(a) {
        this.tb = [];
        this.dj = this.fj = this.gj = this.ej = 0;
        this.Ci(a)
    }

    function a(a, e) {
        this.Sl = a;
        this.Rl = e;
        this.cells = {}
    }

    function n(a, e) {
        this.Sl = a;
        this.Rl = e;
        this.cells = {}
    }

    function t(a, e, g) {
        var b;
        return H.length ? (b = H.pop(), b.Bm = a, b.x = e, b.y = g, b) : new aa(a, e, g)
    }

    function e(a, e, g) {
        this.Bm = a;
        this.x = e;
        this.y = g;
        this.Cb = new ba
    }

    function h(a, e, g) {
        var b;
        return D.length ? (b = D.pop(), b.Bm = a, b.x = e, b.y = g, b) : new da(a, e, g)
    }

    function w(a, e, g) {
        this.Bm = a;
        this.x = e;
        this.y = g;
        this.Cb = [];
        this.yg = !0;
        this.Jd = new ba;
        this.jh = !1
    }

    function l(a, e) {
        return a.yd - e.yd
    }
    ea = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ga = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ha = function(a) {
        return "undefined" === typeof a
    };
    ia = function(a) {
        return "number" === typeof a
    };
    ja = function(a) {
        return "string" === typeof a
    };
    ka = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    la = function(a) {
        --a;
        for (var e = 1; 32 > e; e <<= 1) a = a | a >> e;
        return a + 1
    };
    ma = function(a) {
        return 0 > a ? -a : a
    };
    na = function(a, e) {
        return a > e ? a : e
    };
    qa = function(a, e) {
        return a < e ? a : e
    };
    ra = Math.PI;
    sa = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ta = function(a) {
        var e = a | 0;
        return e === a ? e : e + 1
    };
    ua = function(a, e, g, b, h, n, x, v) {
        var l, r, c, f;
        a < g ? (r = a, l = g) : (r = g, l = a);
        h < x ? (f = h, c = x) : (f = x, c = h);
        if (l < f || r > c) return !1;
        e < b ? (r = e, l = b) : (r = b, l = e);
        n < v ? (f = n, c = v) : (f = v, c = n);
        if (l < f || r > c) return !1;
        l = h - a + x - g;
        r = n - e + v - b;
        a = g - a;
        e = b - e;
        h = x - h;
        n = v - n;
        v = ma(e * h - n * a);
        return ma(h * r - n * l) > v ? !1 : ma(a * r - e * l) <= v
    };
    c.prototype.set = function(a, e, g, b) {
        this.left = a;
        this.top = e;
        this.right = g;
        this.bottom = b
    };
    c.prototype.oh = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    c.prototype.width = function() {
        return this.right - this.left
    };
    c.prototype.height = function() {
        return this.bottom - this.top
    };
    c.prototype.offset = function(a, e) {
        this.left += a;
        this.top += e;
        this.right += a;
        this.bottom += e;
        return this
    };
    c.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    c.prototype.iw = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    c.prototype.jw = function(a, e, g) {
        return !(a.right + e < this.left || a.bottom + g < this.top || a.left + e > this.right || a.top + g > this.bottom)
    };
    c.prototype.Pb = function(a, e) {
        return a >= this.left && a <= this.right && e >= this.top && e <= this.bottom
    };
    c.prototype.uh = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    va = c;
    d.prototype.Bi = function(a) {
        this.Xa = a.left;
        this.Ya = a.top;
        this.ub = a.right;
        this.wb = a.top;
        this.mb = a.right;
        this.nb = a.bottom;
        this.kb = a.left;
        this.lb = a.bottom
    };
    d.prototype.lr = function(a, e) {
        if (0 === e) this.Bi(a);
        else {
            var g = Math.sin(e),
                b = Math.cos(e),
                h = a.left * g,
                n = a.top * g,
                x = a.right * g,
                g = a.bottom * g,
                v = a.left * b,
                l = a.top * b,
                r = a.right * b,
                b = a.bottom * b;
            this.Xa = v - n;
            this.Ya = l + h;
            this.ub = r - n;
            this.wb = l + x;
            this.mb = r - g;
            this.nb = b + x;
            this.kb = v - g;
            this.lb = b + h
        }
    };
    d.prototype.offset = function(a, e) {
        this.Xa += a;
        this.Ya += e;
        this.ub += a;
        this.wb += e;
        this.mb += a;
        this.nb += e;
        this.kb += a;
        this.lb += e;
        return this
    };
    var J = 0,
        q = 0;
    d.prototype.bp = function(a) {
        b(this.Xa, this.ub, this.mb, this.kb);
        a.left = J;
        a.right = q;
        b(this.Ya, this.wb, this.nb, this.lb);
        a.top = J;
        a.bottom = q
    };
    d.prototype.Pb = function(a, e) {
        var g = this.Xa,
            b = this.Ya,
            h = this.ub - g,
            n = this.wb - b,
            x = this.mb - g,
            v = this.nb - b,
            l = a - g,
            r = e - b,
            c = h * h + n * n,
            f = h * x + n * v,
            n = h * l + n * r,
            d = x * x + v * v,
            w = x * l + v * r,
            k = 1 / (c * d - f * f),
            h = (d * n - f * w) * k,
            c = (c * w - f * n) * k;
        if (0 <= h && 0 < c && 1 > h + c) return !0;
        h = this.kb - g;
        n = this.lb - b;
        c = h * h + n * n;
        f = h * x + n * v;
        n = h * l + n * r;
        k = 1 / (c * d - f * f);
        h = (d * n - f * w) * k;
        c = (c * w - f * n) * k;
        return 0 <= h && 0 < c && 1 > h + c
    };
    d.prototype.Be = function(a, e) {
        if (e) switch (a) {
            case 0:
                return this.Xa;
            case 1:
                return this.ub;
            case 2:
                return this.mb;
            case 3:
                return this.kb;
            case 4:
                return this.Xa;
            default:
                return this.Xa
        } else switch (a) {
            case 0:
                return this.Ya;
            case 1:
                return this.wb;
            case 2:
                return this.nb;
            case 3:
                return this.lb;
            case 4:
                return this.Ya;
            default:
                return this.Ya
        }
    };
    d.prototype.wq = function() {
        return (this.Xa + this.ub + this.mb + this.kb) / 4
    };
    d.prototype.xq = function() {
        return (this.Ya + this.wb + this.nb + this.lb) / 4
    };
    d.prototype.Pp = function(a) {
        var e = a.wq(),
            g = a.xq();
        if (this.Pb(e, g)) return !0;
        e = this.wq();
        g = this.xq();
        if (a.Pb(e, g)) return !0;
        var b, h, n, x, v, l, r, c;
        for (r = 0; 4 > r; r++)
            for (c = 0; 4 > c; c++)
                if (e = this.Be(r, !0), g = this.Be(r, !1), b = this.Be(r + 1, !0), h = this.Be(r + 1, !1), n = a.Be(c, !0), x = a.Be(c, !1), v = a.Be(c + 1, !0), l = a.Be(c + 1, !1), ua(e, g, b, h, n, x, v, l)) return !0;
        return !1
    };
    wa = d;
    xa = function(a, e) {
        for (var g in e) e.hasOwnProperty(g) && (a[g] = e[g]);
        return a
    };
    Aa = function(a, e) {
        var g, b;
        e = sa(e);
        if (!(0 > e || e >= a.length)) {
            g = e;
            for (b = a.length - 1; g < b; g++) a[g] = a[g + 1];
            Ba(a, b)
        }
    };
    Ba = function(a, e) {
        a.length = e
    };
    z = function(a) {
        Ba(a, 0)
    };
    Ca = function(a, e) {
        z(a);
        var g, b;
        g = 0;
        for (b = e.length; g < b; ++g) a[g] = e[g]
    };
    Da = function(a, e) {
        a.push.apply(a, e)
    };
    Ea = function(a, e) {
        var g, b;
        g = 0;
        for (b = a.length; g < b; ++g)
            if (a[g] === e) return g;
        return -1
    };
    Fa = function(a, e) {
        var g = Ea(a, e); - 1 !== g && Aa(a, g)
    };
    Ga = function(a, e, g) {
        return a < e ? e : a > g ? g : a
    };
    B = function(a) {
        return a / (180 / ra)
    };
    Ha = function(a) {
        return 180 / ra * a
    };
    Ia = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ja = function(a) {
        a %= 2 * ra;
        0 > a && (a += 2 * ra);
        return a
    };
    Ka = function(a) {
        return Ia(Ha(a))
    };
    La = function(a) {
        return Ja(B(a))
    };
    Ma = function(a, e, g, b) {
        return Math.atan2(b - e, g - a)
    };
    Oa = function(a, e) {
        if (a === e) return 0;
        var g = Math.sin(a),
            b = Math.cos(a),
            h = Math.sin(e),
            n = Math.cos(e),
            g = g * h + b * n;
        return 1 <= g ? 0 : -1 >= g ? ra : Math.acos(g)
    };
    Pa = function(a, e, g) {
        var b = Math.sin(a),
            h = Math.cos(a),
            n = Math.sin(e),
            x = Math.cos(e);
        return Math.acos(b * n + h * x) > g ? 0 < h * n - b * x ? Ja(a + g) : Ja(a - g) : Ja(e)
    };
    Qa = function(a, e) {
        var g = Math.sin(a),
            b = Math.cos(a),
            h = Math.sin(e),
            n = Math.cos(e);
        return 0 >= b * h - g * n
    };
    Sa = function(a, e, g, b, h, n) {
        if (0 === g) return n ? a : e;
        var x = Math.sin(g);
        g = Math.cos(g);
        a -= b;
        e -= h;
        var v = a * x;
        a = a * g - e * x;
        e = e * g + v;
        return n ? a + b : e + h
    };
    Ta = function(a, e, g, b) {
        a = g - a;
        e = b - e;
        return Math.sqrt(a * a + e * e)
    };
    Ua = function(a, e) {
        return !a !== !e
    };
    Va = function(a) {
        for (var e in a)
            if (a.hasOwnProperty(e)) return !0;
        return !1
    };
    Wa = function(a) {
        for (var e in a) a.hasOwnProperty(e) && delete a[e]
    };
    var L = +new Date;
    Xa = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - L
    };
    var g = !1,
        r = g = !1,
        P = !1;
    "undefined" !== typeof window && (g = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), g = !g && /safari/i.test(navigator.userAgent), r = /(iphone|ipod|ipad)/i.test(navigator.userAgent), P = window.c2ejecta);
    var Y = !g && !P && !r && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    k.prototype.contains = function(a) {
        return this.ee() ? !1 : Y ? this.nc.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    k.prototype.add = function(a) {
        if (Y) this.nc.has(a) || (this.nc.add(a), this.De = !1);
        else {
            var e = a.toString(),
                g = this.items;
            g ? g.hasOwnProperty(e) || (g[e] = a, this.Sh++, this.De = !1) : (this.items = {}, this.items[e] = a, this.Sh = 1, this.De = !1)
        }
    };
    k.prototype.remove = function(a) {
        if (!this.ee())
            if (Y) this.nc.has(a) && (this.nc["delete"](a), this.De = !1);
            else if (this.items) {
            a = a.toString();
            var e = this.items;
            e.hasOwnProperty(a) && (delete e[a], this.Sh--, this.De = !1)
        }
    };
    k.prototype.clear = function() {
        this.ee() || (Y ? this.nc.clear() : (this.items = null, this.Sh = 0), z(this.fh), this.De = !0)
    };
    k.prototype.ee = function() {
        return 0 === this.count()
    };
    k.prototype.count = function() {
        return Y ? this.nc.size : this.Sh
    };
    var y = null,
        C = 0;
    k.prototype.Nx = function() {
        if (!this.De) {
            if (Y) z(this.fh), y = this.fh, C = 0, this.nc.forEach(p), y = null, C = 0;
            else {
                var a = this.fh;
                z(a);
                var e, g = 0,
                    b = this.items;
                if (b)
                    for (e in b) b.hasOwnProperty(e) && (a[g++] = b[e])
            }
            this.De = !0
        }
    };
    k.prototype.hd = function() {
        this.Nx();
        return this.fh
    };
    ba = k;
    new ba;
    Ya = function(a, e) {
        Y ? Za(a, e.nc) : $a(a, e.hd())
    };
    Za = function(a, e) {
        var g, b, h, n;
        b = g = 0;
        for (h = a.length; g < h; ++g) n = a[g], e.has(n) || (a[b++] = n);
        Ba(a, b)
    };
    $a = function(a, e) {
        var g, b, h, n;
        b = g = 0;
        for (h = a.length; g < h; ++g) n = a[g], -1 === Ea(e, n) && (a[b++] = n);
        Ba(a, b)
    };
    m.prototype.add = function(a) {
        this.y = a - this.Ol;
        this.$g = this.N + this.y;
        this.Ol = this.$g - this.N - this.y;
        this.N = this.$g
    };
    m.prototype.reset = function() {
        this.N = this.$g = this.y = this.Ol = 0
    };
    ab = m;
    bb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    f.prototype.Ci = function(a) {
        this.Wq = a;
        this.sd = a.length / 2;
        this.tb.length = a.length;
        this.ij = this.jj = -1;
        this.ep = 0
    };
    f.prototype.vg = function() {
        return !this.Wq.length
    };
    f.prototype.Ca = function() {
        for (var a = this.tb, e = a[0], g = e, b = a[1], h = b, n, x, v = 1, l = this.sd; v < l; ++v) x = 2 * v, n = a[x], x = a[x + 1], n < e && (e = n), n > g && (g = n), x < b && (b = x), x > h && (h = x);
        this.ej = e;
        this.fj = g;
        this.gj = b;
        this.dj = h
    };
    f.prototype.Bi = function(a, e, g) {
        this.tb.length = 8;
        this.sd = 4;
        var b = this.tb;
        b[0] = a.left - e;
        b[1] = a.top - g;
        b[2] = a.right - e;
        b[3] = a.top - g;
        b[4] = a.right - e;
        b[5] = a.bottom - g;
        b[6] = a.left - e;
        b[7] = a.bottom - g;
        this.jj = a.right - a.left;
        this.ij = a.bottom - a.top;
        this.Ca()
    };
    f.prototype.Xg = function(a, e, g, b, h) {
        this.tb.length = 8;
        this.sd = 4;
        var n = this.tb;
        n[0] = a.Xa - e;
        n[1] = a.Ya - g;
        n[2] = a.ub - e;
        n[3] = a.wb - g;
        n[4] = a.mb - e;
        n[5] = a.nb - g;
        n[6] = a.kb - e;
        n[7] = a.lb - g;
        this.jj = b;
        this.ij = h;
        this.Ca()
    };
    f.prototype.kr = function(a) {
        this.sd = a.sd;
        Ca(this.tb, a.tb);
        this.ej = a.ej;
        this.gj - a.gj;
        this.fj = a.fj;
        this.dj = a.dj
    };
    f.prototype.gg = function(a, e, g) {
        if (this.jj !== a || this.ij !== e || this.ep !== g) {
            this.jj = a;
            this.ij = e;
            this.ep = g;
            var b, h, n, x, v, l = 0,
                r = 1,
                c = this.Wq,
                f = this.tb;
            0 !== g && (l = Math.sin(g), r = Math.cos(g));
            g = 0;
            for (n = this.sd; g < n; g++) b = 2 * g, h = b + 1, x = c[b] * a, v = c[h] * e, f[b] = x * r - v * l, f[h] = v * r + x * l;
            this.Ca()
        }
    };
    f.prototype.Pb = function(a, e) {
        var g = this.tb;
        if (a === g[0] && e === g[1]) return !0;
        var b, h, n, x = this.sd,
            v = this.ej - 110,
            l = this.gj - 101,
            r = this.fj + 131,
            c = this.dj + 120,
            f, d, w = 0,
            k = 0;
        for (b = 0; b < x; b++) h = 2 * b, n = (b + 1) % x * 2, f = g[h], h = g[h + 1], d = g[n], n = g[n + 1], ua(v, l, a, e, f, h, d, n) && w++, ua(r, c, a, e, f, h, d, n) && k++;
        return 1 === w % 2 || 1 === k % 2
    };
    f.prototype.Gh = function(a, e, g) {
        var b = a.tb,
            h = this.tb;
        if (this.Pb(b[0] + e, b[1] + g) || a.Pb(h[0] - e, h[1] - g)) return !0;
        var n, x, v, l, r, c, f, d, w, k, q, t;
        n = 0;
        for (l = this.sd; n < l; n++)
            for (x = 2 * n, v = (n + 1) % l * 2, d = h[x], x = h[x + 1], w = h[v], k = h[v + 1], v = 0, f = a.sd; v < f; v++)
                if (r = 2 * v, c = (v + 1) % f * 2, q = b[r] + e, r = b[r + 1] + g, t = b[c] + e, c = b[c + 1] + g, ua(d, x, w, k, q, r, t, c)) return !0;
        return !1
    };
    cb = f;
    a.prototype.Ne = function(a, e, g) {
        var b;
        b = this.cells[a];
        return b ? (b = b[e]) ? b : g ? (b = t(this, a, e), this.cells[a][e] = b) : null : g ? (b = t(this, a, e), this.cells[a] = {}, this.cells[a][e] = b) : null
    };
    a.prototype.gc = function(a) {
        return sa(a / this.Sl)
    };
    a.prototype.hc = function(a) {
        return sa(a / this.Rl)
    };
    a.prototype.update = function(a, e, g) {
        var b, h, n, x, v;
        if (e)
            for (b = e.left, h = e.right; b <= h; ++b)
                for (n = e.top, x = e.bottom; n <= x; ++n)
                    if (!g || !g.Pb(b, n))
                        if (v = this.Ne(b, n, !1)) v.remove(a), v.ee() && (v.Cb.clear(), 1e3 > H.length && H.push(v), this.cells[b][n] = null);
        if (g)
            for (b = g.left, h = g.right; b <= h; ++b)
                for (n = g.top, x = g.bottom; n <= x; ++n) e && e.Pb(b, n) || this.Ne(b, n, !0).Jm(a)
    };
    a.prototype.Kk = function(a, e) {
        var g, b, h, n, x, v;
        g = this.gc(a.left);
        h = this.hc(a.top);
        b = this.gc(a.right);
        for (x = this.hc(a.bottom); g <= b; ++g)
            for (n = h; n <= x; ++n)(v = this.Ne(g, n, !1)) && v.dump(e)
    };
    ib = a;
    n.prototype.Ne = function(a, e, g) {
        var b;
        b = this.cells[a];
        return b ? (b = b[e]) ? b : g ? (b = h(this, a, e), this.cells[a][e] = b) : null : g ? (b = h(this, a, e), this.cells[a] = {}, this.cells[a][e] = b) : null
    };
    n.prototype.gc = function(a) {
        return sa(a / this.Sl)
    };
    n.prototype.hc = function(a) {
        return sa(a / this.Rl)
    };
    n.prototype.update = function(a, e, g) {
        var b, h, n, x, v;
        if (e)
            for (b = e.left, h = e.right; b <= h; ++b)
                for (n = e.top, x = e.bottom; n <= x; ++n)
                    if (!g || !g.Pb(b, n))
                        if (v = this.Ne(b, n, !1)) v.remove(a), v.ee() && (v.reset(), 1e3 > D.length && D.push(v), this.cells[b][n] = null);
        if (g)
            for (b = g.left, h = g.right; b <= h; ++b)
                for (n = g.top, x = g.bottom; n <= x; ++n) e && e.Pb(b, n) || this.Ne(b, n, !0).Jm(a)
    };
    n.prototype.Kk = function(a, e, g, b, h) {
        var n, x;
        a = this.gc(a);
        e = this.hc(e);
        g = this.gc(g);
        for (n = this.hc(b); a <= g; ++a)
            for (b = e; b <= n; ++b)(x = this.Ne(a, b, !1)) && x.dump(h)
    };
    n.prototype.Aw = function(a) {
        var e, g, b, h, n;
        e = a.left;
        b = a.top;
        g = a.right;
        for (h = a.bottom; e <= g; ++e)
            for (a = b; a <= h; ++a)
                if (n = this.Ne(e, a, !1)) n.yg = !1
    };
    jb = n;
    var H = [];
    e.prototype.ee = function() {
        return this.Cb.ee()
    };
    e.prototype.Jm = function(a) {
        this.Cb.add(a)
    };
    e.prototype.remove = function(a) {
        this.Cb.remove(a)
    };
    e.prototype.dump = function(a) {
        Da(a, this.Cb.hd())
    };
    aa = e;
    var D = [];
    w.prototype.ee = function() {
        if (!this.Cb.length) return !0;
        if (this.Cb.length > this.Jd.count()) return !1;
        this.lm();
        return !0
    };
    w.prototype.Jm = function(a) {
        this.Jd.contains(a) ? (this.Jd.remove(a), this.Jd.ee() && (this.jh = !1)) : this.Cb.length ? (this.Cb[this.Cb.length - 1].Uc() > a.Uc() && (this.yg = !1), this.Cb.push(a)) : (this.Cb.push(a), this.yg = !0)
    };
    w.prototype.remove = function(a) {
        this.Jd.add(a);
        this.jh = !0;
        30 <= this.Jd.count() && this.lm()
    };
    w.prototype.lm = function() {
        this.jh && (this.Jd.count() === this.Cb.length ? this.reset() : (Ya(this.Cb, this.Jd), this.Jd.clear(), this.jh = !1))
    };
    w.prototype.Ju = function() {
        this.yg || (this.Cb.sort(l), this.yg = !0)
    };
    w.prototype.reset = function() {
        z(this.Cb);
        this.yg = !0;
        this.Jd.clear();
        this.jh = !1
    };
    w.prototype.dump = function(a) {
        this.lm();
        this.Ju();
        this.Cb.length && a.push(this.Cb)
    };
    da = w;
    var K = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : K[a - 1]
    };
    lb = function(a, e, g) {
        if (g) switch (a.Vb = g.ONE, a.Qb = g.ONE_MINUS_SRC_ALPHA, e) {
            case 1:
                a.Vb = g.ONE;
                a.Qb = g.ONE;
                break;
            case 3:
                a.Vb = g.ONE;
                a.Qb = g.ZERO;
                break;
            case 4:
                a.Vb = g.ONE_MINUS_DST_ALPHA;
                a.Qb = g.ONE;
                break;
            case 5:
                a.Vb = g.DST_ALPHA;
                a.Qb = g.ZERO;
                break;
            case 6:
                a.Vb = g.ZERO;
                a.Qb = g.SRC_ALPHA;
                break;
            case 7:
                a.Vb = g.ONE_MINUS_DST_ALPHA;
                a.Qb = g.ZERO;
                break;
            case 8:
                a.Vb = g.ZERO;
                a.Qb = g.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.Vb = g.DST_ALPHA;
                a.Qb = g.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.Vb = g.ONE_MINUS_DST_ALPHA, a.Qb = g.SRC_ALPHA
        }
    };
    mb = function(a) {
        return Math.round(1e6 * a) / 1e6
    };
    nb = function(a, e) {
        return "string" !== typeof a || "string" !== typeof e || a.length !== e.length ? !1 : a === e ? !0 : a.toLowerCase() === e.toLowerCase()
    };
    ob = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || nb(a.tagName, "canvas") ? !0 : !1
    }
})();
var ic = "undefined" !== typeof Float32Array ? Float32Array : Array;

function jc(c) {
    var d = new ic(3);
    c && (d[0] = c[0], d[1] = c[1], d[2] = c[2]);
    return d
}

function kc(c) {
    var d = new ic(16);
    c && (d[0] = c[0], d[1] = c[1], d[2] = c[2], d[3] = c[3], d[4] = c[4], d[5] = c[5], d[6] = c[6], d[7] = c[7], d[8] = c[8], d[9] = c[9], d[10] = c[10], d[11] = c[11], d[12] = c[12], d[13] = c[13], d[14] = c[14], d[15] = c[15]);
    return d
}

function lc(c, d) {
    d[0] = c[0];
    d[1] = c[1];
    d[2] = c[2];
    d[3] = c[3];
    d[4] = c[4];
    d[5] = c[5];
    d[6] = c[6];
    d[7] = c[7];
    d[8] = c[8];
    d[9] = c[9];
    d[10] = c[10];
    d[11] = c[11];
    d[12] = c[12];
    d[13] = c[13];
    d[14] = c[14];
    d[15] = c[15]
}

function mc(c, d) {
    var b = d[0],
        k = d[1];
    d = d[2];
    c[0] *= b;
    c[1] *= b;
    c[2] *= b;
    c[3] *= b;
    c[4] *= k;
    c[5] *= k;
    c[6] *= k;
    c[7] *= k;
    c[8] *= d;
    c[9] *= d;
    c[10] *= d;
    c[11] *= d
}

function nc(c, d, b, k) {
    k || (k = kc());
    var p, m, f, a, n, t, e, h, w = c[0],
        l = c[1];
    c = c[2];
    m = b[0];
    f = b[1];
    p = b[2];
    b = d[1];
    t = d[2];
    w === d[0] && l === b && c === t ? (c = k, c[0] = 1, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0, c[5] = 1, c[6] = 0, c[7] = 0, c[8] = 0, c[9] = 0, c[10] = 1, c[11] = 0, c[12] = 0, c[13] = 0, c[14] = 0, c[15] = 1) : (b = w - d[0], t = l - d[1], e = c - d[2], h = 1 / Math.sqrt(b * b + t * t + e * e), b *= h, t *= h, e *= h, d = f * e - p * t, p = p * b - m * e, m = m * t - f * b, (h = Math.sqrt(d * d + p * p + m * m)) ? (h = 1 / h, d *= h, p *= h, m *= h) : m = p = d = 0, f = t * m - e * p, a = e * d - b * m, n = b * p - t * d, (h = Math.sqrt(f * f + a * a + n * n)) ? (h = 1 / h, f *= h, a *= h, n *= h) : n = a = f = 0, k[0] = d, k[1] = f, k[2] = b, k[3] = 0, k[4] = p, k[5] = a, k[6] = t, k[7] = 0, k[8] = m, k[9] = n, k[10] = e, k[11] = 0, k[12] = -(d * w + p * l + m * c), k[13] = -(f * w + a * l + n * c), k[14] = -(b * w + t * l + e * c), k[15] = 1)
}(function() {
    function c(a, b, c) {
        this.Qe = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Ga = !!c;
        this.Zj = this.Jh = !1;
        this.Zl = 0;
        this.wl = 1;
        this.yo = 1e3;
        this.Wx = (this.yo - this.wl) / 32768;
        this.Pl = jc([0, 0, 100]);
        this.fq = jc([0, 0, 0]);
        this.Ir = jc([0, 1, 0]);
        this.Xi = jc([1, 1, 1]);
        this.op = !0;
        this.mk = kc();
        this.Lc = kc();
        this.Wm = kc();
        this.Yl = kc();
        this.C = a;
        this.Lp()
    }

    function d(a, b, c) {
        this.C = a;
        this.Di = b;
        this.name = c;
        this.Xc = a.getAttribLocation(b, "aPos");
        this.Ve = a.getAttribLocation(b, "aTex");
        this.cq = a.getUniformLocation(b, "matP");
        this.ik = a.getUniformLocation(b, "matMV");
        this.Hg = a.getUniformLocation(b, "opacity");
        this.en = a.getUniformLocation(b, "colorFill");
        this.dq = a.getUniformLocation(b, "samplerFront");
        this.Yh = a.getUniformLocation(b, "samplerBack");
        this.Of = a.getUniformLocation(b, "destStart");
        this.Nf = a.getUniformLocation(b, "destEnd");
        this.$h = a.getUniformLocation(b, "seconds");
        this.hn = a.getUniformLocation(b, "pixelWidth");
        this.gn = a.getUniformLocation(b, "pixelHeight");
        this.Xh = a.getUniformLocation(b, "layerScale");
        this.Wh = a.getUniformLocation(b, "layerAngle");
        this.ai = a.getUniformLocation(b, "viewOrigin");
        this.Zh = a.getUniformLocation(b, "scrollPos");
        this.bw = !!(this.hn || this.gn || this.$h || this.Yh || this.Of || this.Nf || this.Xh || this.Wh || this.ai || this.Zh);
        this.nq = this.oq = -999;
        this.lk = 1;
        this.jq = this.iq = 0;
        this.lq = this.hq = this.gq = 1;
        this.rq = this.qq = this.pq = this.tq = this.sq = this.kq = 0;
        this.Vm = [];
        this.mq = kc();
        this.Hg && a.uniform1f(this.Hg, 1);
        this.en && a.uniform4f(this.en, 1, 1, 1, 1);
        this.dq && a.uniform1i(this.dq, 0);
        this.Yh && a.uniform1i(this.Yh, 1);
        this.Of && a.uniform2f(this.Of, 0, 0);
        this.Nf && a.uniform2f(this.Nf, 1, 1);
        this.Xh && a.uniform1f(this.Xh, 1);
        this.Wh && a.uniform1f(this.Wh, 0);
        this.ai && a.uniform2f(this.ai, 0, 0);
        this.Zh && a.uniform2f(this.Zh, 0, 0);
        this.$h && a.uniform1f(this.$h, 0);
        this.Af = !1
    }

    function b(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
    }

    function k(a, b) {
        this.type = a;
        this.A = b;
        this.C = b.C;
        this.Fd = this.fc = this.Jq = 0;
        this.Y = this.gd = null;
        this.mr = []
    }
    var p = kc();
    c.prototype.Lp = function() {
        var a = this.C,
            b;
        this.Xp = 1;
        this.If = this.Hf = null;
        this.uj = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.STENCIL_TEST);
        a.disable(a.DITHER);
        this.Ga ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
        this.Yp = a.ONE;
        this.Wp = a.ONE_MINUS_SRC_ALPHA;
        this.tl = new Float32Array(8e3 * (this.Ga ? 3 : 2));
        this.gl = new Float32Array(16e3);
        this.Tq = new Float32Array(32e3);
        this.Gn = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.Gn);
        a.bufferData(a.ARRAY_BUFFER, this.Tq.byteLength, a.DYNAMIC_DRAW);
        this.Vi = Array(4);
        this.Ki = Array(4);
        for (b = 0; 4 > b; b++) this.Vi[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Vi[b]), a.bufferData(a.ARRAY_BUFFER, this.tl.byteLength, a.DYNAMIC_DRAW), this.Ki[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Ki[b]), a.bufferData(a.ARRAY_BUFFER, this.gl.byteLength, a.DYNAMIC_DRAW);
        this.Vd = 0;
        this.gw = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.gw);
        for (var c = new Uint16Array(12e3), e = b = 0; 12e3 > b;) c[b++] = e, c[b++] = e + 1, c[b++] = e + 2, c[b++] = e, c[b++] = e + 2, c[b++] = e + 3, e += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
        this.Hn = this.bh = this.te = 0;
        this.Va = [];
        b = this.Ga ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n	gl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n	vTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n	gl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n	vTex = aTex;\n}";
        c = this.ph({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n	gl_FragColor = texture2D(samplerFront, vTex);\n	gl_FragColor *= opacity;\n}"
        }, b, "<default>");
        this.Va.push(c);
        c = this.ph({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n	gl_FragColor = texture2D(samplerFront, gl_PointCoord);\n	gl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n	gl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n	gl_PointSize = aPos.z;\n	opacity = aPos.w;\n}", "<point>");
        this.Va.push(c);
        c = this.ph({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n	if (texture2D(samplerFront, vTex).a < 1.0)\n		discard;\n}"
        }, b, "<earlyz>");
        this.Va.push(c);
        c = this.ph({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n	gl_FragColor = colorFill;\n}"
        }, b, "<fill>");
        this.Va.push(c);
        for (var h in oc) oc.hasOwnProperty(h) && this.Va.push(this.ph(oc[h], b, h));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.Ce = [];
        this.Td = 0;
        this.Sb = !1;
        this.jp = this.Th = -1;
        this.jg = null;
        this.km = a.createFramebuffer();
        this.yj = this.Mk = null;
        this.Zo = !1;
        this.Ga && (this.yj = a.createRenderbuffer());
        this.cf = jc([0, 0, 0]);
        this.uq = a.getParameter(a.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.uq && (this.uq = 2048);
        this.pc(0)
    };
    d.prototype.qo = function(a) {
        b(this.mq, a) || (lc(a, this.mq), this.C.uniformMatrix4fv(this.ik, !1, a))
    };
    c.prototype.ph = function(a, b, c) {
        var e = this.C,
            h = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(h, a.src);
        e.compileShader(h);
        if (!e.getShaderParameter(h, e.COMPILE_STATUS)) return e.deleteShader(h), null;
        var f = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(f, b);
        e.compileShader(f);
        if (!e.getShaderParameter(f, e.COMPILE_STATUS)) return e.deleteShader(h), e.deleteShader(f), null;
        b = e.createProgram();
        e.attachShader(b, h);
        e.attachShader(b, f);
        e.linkProgram(b);
        if (!e.getProgramParameter(b, e.LINK_STATUS)) return e.deleteShader(h), e.deleteShader(f), e.deleteProgram(b), null;
        e.useProgram(b);
        e.deleteShader(h);
        e.deleteShader(f);
        c = new d(e, b, c);
        c.Bj = a.Bj || 0;
        c.Cj = a.Cj || 0;
        c.Xl = !!a.Xl;
        c.bd = !!a.bd;
        c.Il = !!a.Il;
        c.W = a.W || [];
        a = 0;
        for (h = c.W.length; a < h; a++) c.W[a][1] = e.getUniformLocation(b, c.W[a][0]), c.Vm.push(0), e.uniform1f(c.W[a][1], 0);
        return c
    };
    c.prototype.zm = function(a) {
        var b, c;
        b = 0;
        for (c = this.Va.length; b < c; b++)
            if (this.Va[b].name === a) return b;
        return -1
    };
    c.prototype.Vq = function(a, b, c) {
        var e = this.Lc,
            h = this.mk,
            f = [0, 0, 0, 0, 0, 0, 0, 0];
        f[0] = e[0] * a + e[4] * b + e[12];
        f[1] = e[1] * a + e[5] * b + e[13];
        f[2] = e[2] * a + e[6] * b + e[14];
        f[3] = e[3] * a + e[7] * b + e[15];
        f[4] = h[0] * f[0] + h[4] * f[1] + h[8] * f[2] + h[12] * f[3];
        f[5] = h[1] * f[0] + h[5] * f[1] + h[9] * f[2] + h[13] * f[3];
        f[6] = h[2] * f[0] + h[6] * f[1] + h[10] * f[2] + h[14] * f[3];
        f[7] = -f[2];
        0 !== f[7] && (f[7] = 1 / f[7], f[4] *= f[7], f[5] *= f[7], f[6] *= f[7], c[0] = (.5 * f[4] + .5) * this.width, c[1] = (.5 * f[5] + .5) * this.height)
    };
    c.prototype.Uf = function(a, b, c) {
        if (this.width !== a || this.height !== b || c) {
            this.rf();
            c = this.C;
            this.width = a;
            this.height = b;
            c.viewport(0, 0, a, b);
            nc(this.Pl, this.fq, this.Ir, this.Lc);
            if (this.Ga) {
                var e = -a / 2;
                a = a / 2;
                var h = b / 2;
                b = -b / 2;
                var f = this.wl,
                    l = this.yo,
                    d = this.mk;
                d || (d = kc());
                var k = a - e,
                    p = b - h,
                    g = l - f;
                d[0] = 2 / k;
                d[1] = 0;
                d[2] = 0;
                d[3] = 0;
                d[4] = 0;
                d[5] = 2 / p;
                d[6] = 0;
                d[7] = 0;
                d[8] = 0;
                d[9] = 0;
                d[10] = -2 / g;
                d[11] = 0;
                d[12] = -(e + a) / k;
                d[13] = -(b + h) / p;
                d[14] = -(l + f) / g;
                d[15] = 1;
                this.Xi[0] = 1;
                this.Xi[1] = 1
            } else b = a / b, e = this.wl, a = this.yo, d = this.mk, l = e * Math.tan(45 * Math.PI / 360), b *= l, h = -b, f = -l, d || (d = kc()), k = b - h, p = l - f, g = a - e, d[0] = 2 * e / k, d[1] = 0, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = 2 * e / p, d[6] = 0, d[7] = 0, d[8] = (b + h) / k, d[9] = (l + f) / p, d[10] = -(a + e) / g, d[11] = -1, d[12] = 0, d[13] = 0, d[14] = -(a * e * 2) / g, d[15] = 0, e = [0, 0], a = [0, 0], this.Vq(0, 0, e), this.Vq(1, 1, a), this.Xi[0] = 1 / (a[0] - e[0]), this.Xi[1] = -1 / (a[1] - e[1]);
            e = 0;
            for (a = this.Va.length; e < a; e++) h = this.Va[e], h.Af = !1, h.cq && (c.useProgram(h.Di), c.uniformMatrix4fv(h.cq, !1, this.mk));
            c.useProgram(this.Va[this.Th].Di);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE1);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE0);
            this.If = this.Hf = null;
            this.yj && (c.bindFramebuffer(c.FRAMEBUFFER, this.km), c.bindRenderbuffer(c.RENDERBUFFER, this.yj), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, this.width, this.height), this.Zo || (c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, this.yj), this.Zo = !0), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.Mk = null)
        }
    };
    c.prototype.Md = function() {
        nc(this.Pl, this.fq, this.Ir, this.Lc);
        mc(this.Lc, this.Xi)
    };
    c.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.cf[0] = a;
            this.cf[1] = b;
            this.cf[2] = 0;
            var c = this.Lc,
                e = this.cf,
                h = e[0],
                f = e[1],
                e = e[2];
            c[12] = c[0] * h + c[4] * f + c[8] * e + c[12];
            c[13] = c[1] * h + c[5] * f + c[9] * e + c[13];
            c[14] = c[2] * h + c[6] * f + c[10] * e + c[14];
            c[15] = c[3] * h + c[7] * f + c[11] * e + c[15]
        }
    };
    c.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.cf[0] = a, this.cf[1] = b, this.cf[2] = 1, mc(this.Lc, this.cf)
    };
    c.prototype.Qn = function(a) {
        if (0 !== a) {
            var b = this.Lc,
                c, e = Math.sin(a);
            a = Math.cos(a);
            var h = b[0],
                f = b[1],
                l = b[2],
                d = b[3],
                k = b[4],
                p = b[5],
                g = b[6],
                r = b[7];
            c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
            c[0] = h * a + k * e;
            c[1] = f * a + p * e;
            c[2] = l * a + g * e;
            c[3] = d * a + r * e;
            c[4] = h * -e + k * a;
            c[5] = f * -e + p * a;
            c[6] = l * -e + g * a;
            c[7] = d * -e + r * a
        }
    };
    c.prototype.xd = function() {
        if (!b(this.Wm, this.Lc)) {
            var a = this.Bc();
            a.type = 5;
            a.Y ? lc(this.Lc, a.Y) : a.Y = kc(this.Lc);
            lc(this.Lc, this.Wm);
            this.Sb = !1
        }
    };
    c.prototype.Sk = function(a) {
        this.Ga && (32760 < a && (a = 32760), this.Zl = this.Pl[2] - this.wl - a * this.Wx)
    };
    k.prototype.su = function() {
        var a = this.C,
            b = this.A;
        0 !== this.fc ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.km), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.Zj = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.Zj = !1)
    };
    k.prototype.wu = function() {
        this.C.bindTexture(this.C.TEXTURE_2D, this.gd)
    };
    k.prototype.xu = function() {
        var a = this.C;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.gd);
        a.activeTexture(a.TEXTURE0)
    };
    k.prototype.tu = function() {
        var a = this.Jq,
            b = this.A;
        b.uj = a;
        b = b.jg;
        b.Hg && b.lk !== a && (b.lk = a, this.C.uniform1f(b.Hg, a))
    };
    k.prototype.nu = function() {
        this.C.drawElements(this.C.TRIANGLES, this.Fd, this.C.UNSIGNED_SHORT, this.fc)
    };
    k.prototype.pu = function() {
        this.C.blendFunc(this.fc, this.Fd)
    };
    k.prototype.zu = function() {
        var a, b, c, e = this.A.Va,
            h = this.A.jp;
        a = 0;
        for (b = e.length; a < b; a++) c = e[a], a === h && c.ik ? (c.qo(this.Y), c.Af = !0) : c.Af = !1;
        lc(this.Y, this.A.Yl)
    };
    k.prototype.ou = function() {
        var a = this.C,
            b = this.A;
        this.gd ? (b.If === this.gd && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.If = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.km), b.Zj || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.gd, 0)) : (b.Ga || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    k.prototype.ku = function() {
        var a = this.C,
            b = this.fc;
        0 === b ? (a.clearColor(this.Y[0], this.Y[1], this.Y[2], this.Y[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.Y[0], this.Y[1], this.Y[2], this.Y[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
    };
    k.prototype.ru = function() {
        var a = this.C;
        0 !== this.fc ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
    };
    k.prototype.mu = function() {
        var a = this.C,
            b = this.A;
        b.Ga && a.disable(a.DEPTH_TEST);
        var c = b.Va[1];
        a.useProgram(c.Di);
        !c.Af && c.ik && (c.qo(b.Yl), c.Af = !0);
        a.enableVertexAttribArray(c.Xc);
        a.bindBuffer(a.ARRAY_BUFFER, b.Gn);
        a.vertexAttribPointer(c.Xc, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.fc / 4, this.Fd);
        c = b.jg;
        a.useProgram(c.Di);
        0 <= c.Xc && (a.enableVertexAttribArray(c.Xc), a.bindBuffer(a.ARRAY_BUFFER, b.Vi[b.Vd]), a.vertexAttribPointer(c.Xc, b.Ga ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.Ve && (a.enableVertexAttribArray(c.Ve), a.bindBuffer(a.ARRAY_BUFFER, b.Ki[b.Vd]), a.vertexAttribPointer(c.Ve, 2, a.FLOAT, !1, 0, 0));
        b.Ga && a.enable(a.DEPTH_TEST)
    };
    k.prototype.uu = function() {
        var a = this.C,
            b = this.A,
            c = b.Va[this.fc];
        b.jp = this.fc;
        b.jg = c;
        a.useProgram(c.Di);
        !c.Af && c.ik && (c.qo(b.Yl), c.Af = !0);
        c.Hg && c.lk !== b.uj && (c.lk = b.uj, a.uniform1f(c.Hg, b.uj));
        0 <= c.Xc && (a.enableVertexAttribArray(c.Xc), a.bindBuffer(a.ARRAY_BUFFER, b.Vi[b.Vd]), a.vertexAttribPointer(c.Xc, b.Ga ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.Ve && (a.enableVertexAttribArray(c.Ve), a.bindBuffer(a.ARRAY_BUFFER, b.Ki[b.Vd]), a.vertexAttribPointer(c.Ve, 2, a.FLOAT, !1, 0, 0))
    };
    k.prototype.qu = function() {
        var a = this.Y;
        this.C.uniform4f(this.A.jg.en, a[0], a[1], a[2], a[3])
    };
    k.prototype.vu = function() {
        var a, b, c = this.A.jg,
            e = this.C;
        a = this.Y;
        c.Yh && this.A.If !== this.gd && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, this.gd), this.A.If = this.gd, e.activeTexture(e.TEXTURE0));
        var h = a[0];
        c.hn && h !== c.oq && (c.oq = h, e.uniform1f(c.hn, h));
        h = a[1];
        c.gn && h !== c.nq && (c.nq = h, e.uniform1f(c.gn, h));
        h = a[2];
        b = a[3];
        !c.Of || h === c.iq && b === c.jq || (c.iq = h, c.jq = b, e.uniform2f(c.Of, h, b));
        h = a[4];
        b = a[5];
        !c.Nf || h === c.gq && b === c.hq || (c.gq = h, c.hq = b, e.uniform2f(c.Nf, h, b));
        h = a[6];
        c.Xh && h !== c.lq && (c.lq = h, e.uniform1f(c.Xh, h));
        h = a[7];
        c.Wh && h !== c.kq && (c.kq = h, e.uniform1f(c.Wh, h));
        h = a[8];
        b = a[9];
        !c.ai || h === c.sq && b === c.tq || (c.sq = h, c.tq = b, e.uniform2f(c.ai, h, b));
        h = a[10];
        b = a[11];
        !c.Zh || h === c.pq && b === c.qq || (c.pq = h, c.qq = b, e.uniform2f(c.Zh, h, b));
        h = a[12];
        c.$h && h !== c.rq && (c.rq = h, e.uniform1f(c.$h, h));
        if (c.W.length)
            for (a = 0, b = c.W.length; a < b; a++) h = this.mr[a], h !== c.Vm[a] && (c.Vm[a] = h, e.uniform1f(c.W[a][1], h))
    };
    c.prototype.Bc = function() {
        this.Td === this.Ce.length && this.Ce.push(new k(0, this));
        return this.Ce[this.Td++]
    };
    c.prototype.rf = function() {
        if (0 !== this.Td && !this.C.isContextLost()) {
            var a = this.C;
            0 < this.Hn && (a.bindBuffer(a.ARRAY_BUFFER, this.Gn), a.bufferSubData(a.ARRAY_BUFFER, 0, this.Tq.subarray(0, this.Hn)), b && 0 <= b.Xc && "<point>" === b.name && a.vertexAttribPointer(b.Xc, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.te) {
                var b = this.jg;
                a.bindBuffer(a.ARRAY_BUFFER, this.Vi[this.Vd]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.tl.subarray(0, this.te));
                b && 0 <= b.Xc && "<point>" !== b.name && a.vertexAttribPointer(b.Xc, this.Ga ? 3 : 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.Ki[this.Vd]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.gl.subarray(0, this.bh));
                b && 0 <= b.Ve && "<point>" !== b.name && a.vertexAttribPointer(b.Ve, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0, b = this.Td; a < b; a++) switch (c = this.Ce[a], c.type) {
                case 1:
                    c.nu();
                    break;
                case 2:
                    c.wu();
                    break;
                case 3:
                    c.tu();
                    break;
                case 4:
                    c.pu();
                    break;
                case 5:
                    c.zu();
                    break;
                case 6:
                    c.ou();
                    break;
                case 7:
                    c.ku();
                    break;
                case 8:
                    c.mu();
                    break;
                case 9:
                    c.uu();
                    break;
                case 10:
                    c.vu();
                    break;
                case 11:
                    c.xu();
                    break;
                case 12:
                    c.qu();
                    break;
                case 13:
                    c.ru();
                    break;
                case 14:
                    c.su()
            }
            this.Hn = this.bh = this.te = this.Td = 0;
            this.Zj = this.Sb = !1;
            this.Vd++;
            4 <= this.Vd && (this.Vd = 0)
        }
    };
    c.prototype.Tf = function(a) {
        if (a !== this.Xp && !this.Jh) {
            var b = this.Bc();
            b.type = 3;
            this.Xp = b.Jq = a;
            this.Sb = !1
        }
    };
    c.prototype.Cc = function(a) {
        if (a !== this.Hf) {
            var b = this.Bc();
            b.type = 2;
            this.Hf = b.gd = a;
            this.Sb = !1
        }
    };
    c.prototype.Ye = function(a, b) {
        if ((a !== this.Yp || b !== this.Wp) && !this.Jh) {
            var c = this.Bc();
            c.type = 4;
            c.fc = a;
            c.Fd = b;
            this.Yp = a;
            this.Wp = b;
            this.Sb = !1
        }
    };
    c.prototype.cr = function() {
        this.Ye(this.C.ONE, this.C.ONE_MINUS_SRC_ALPHA)
    };
    c.prototype.pi = function(a, b, c, e, h, f, l, d) {
        15992 <= this.te && this.rf();
        var k = this.te,
            p = this.bh,
            g = this.tl,
            r = this.gl,
            P = this.Zl;
        if (this.Sb) this.Ce[this.Td - 1].Fd += 6;
        else {
            var m = this.Bc();
            m.type = 1;
            m.fc = this.Ga ? k : k / 2 * 3;
            m.Fd = 6;
            this.Sb = !0
        }
        this.Ga ? (g[k++] = a, g[k++] = b, g[k++] = P, g[k++] = c, g[k++] = e, g[k++] = P, g[k++] = h, g[k++] = f, g[k++] = P, g[k++] = l, g[k++] = d, g[k++] = P) : (g[k++] = a, g[k++] = b, g[k++] = c, g[k++] = e, g[k++] = h, g[k++] = f, g[k++] = l, g[k++] = d);
        r[p++] = 0;
        r[p++] = 0;
        r[p++] = 1;
        r[p++] = 0;
        r[p++] = 1;
        r[p++] = 1;
        r[p++] = 0;
        r[p++] = 1;
        this.te = k;
        this.bh = p
    };
    c.prototype.Kd = function(a, b, c, e, h, f, l, d, k) {
        15992 <= this.te && this.rf();
        var p = this.te,
            g = this.bh,
            r = this.tl,
            P = this.gl,
            m = this.Zl;
        if (this.Sb) this.Ce[this.Td - 1].Fd += 6;
        else {
            var y = this.Bc();
            y.type = 1;
            y.fc = this.Ga ? p : p / 2 * 3;
            y.Fd = 6;
            this.Sb = !0
        }
        var y = k.left,
            C = k.top,
            H = k.right;
        k = k.bottom;
        this.Ga ? (r[p++] = a, r[p++] = b, r[p++] = m, r[p++] = c, r[p++] = e, r[p++] = m, r[p++] = h, r[p++] = f, r[p++] = m, r[p++] = l, r[p++] = d, r[p++] = m) : (r[p++] = a, r[p++] = b, r[p++] = c, r[p++] = e, r[p++] = h, r[p++] = f, r[p++] = l, r[p++] = d);
        P[g++] = y;
        P[g++] = C;
        P[g++] = H;
        P[g++] = C;
        P[g++] = H;
        P[g++] = k;
        P[g++] = y;
        P[g++] = k;
        this.te = p;
        this.bh = g
    };
    c.prototype.pc = function(a) {
        if (this.Th !== a) {
            if (!this.Va[a]) {
                if (0 === this.Th) return;
                a = 0
            }
            var b = this.Bc();
            b.type = 9;
            this.Th = b.fc = a;
            this.Sb = !1
        }
    };
    c.prototype.ni = function(a) {
        a = this.Va[a];
        return !(!a.Of && !a.Nf)
    };
    c.prototype.Kn = function(a) {
        a = this.Va[a];
        return !!(a.Of || a.Nf || a.Xl)
    };
    c.prototype.Jn = function(a) {
        return this.Va[a].bd
    };
    c.prototype.Zw = function(a) {
        a = this.Va[a];
        return 0 !== a.Bj || 0 !== a.Cj
    };
    c.prototype.Iv = function(a) {
        return this.Va[a].Bj
    };
    c.prototype.Jv = function(a) {
        return this.Va[a].Cj
    };
    c.prototype.Kv = function(a, b) {
        return this.Va[a].W[b][2]
    };
    c.prototype.Hk = function(a) {
        return this.Va[a].Il
    };
    c.prototype.Wg = function(a, b, c, e, h, f, l, d, k, p, g, r, P, m, y) {
        var C = this.Va[this.Th],
            H, D;
        if (C.bw || y.length) {
            H = this.Bc();
            H.type = 10;
            H.Y ? lc(this.Lc, H.Y) : H.Y = kc();
            D = H.Y;
            D[0] = b;
            D[1] = c;
            D[2] = e;
            D[3] = h;
            D[4] = f;
            D[5] = l;
            D[6] = d;
            D[7] = k;
            D[8] = p;
            D[9] = g;
            D[10] = r;
            D[11] = P;
            D[12] = m;
            C.Yh ? H.gd = a : H.gd = null;
            if (y.length)
                for (c = H.mr, c.length = y.length, a = 0, b = y.length; a < b; a++) c[a] = y[a];
            this.Sb = !1
        }
    };
    c.prototype.clear = function(a, b, c, e) {
        var h = this.Bc();
        h.type = 7;
        h.fc = 0;
        h.Y || (h.Y = kc());
        h.Y[0] = a;
        h.Y[1] = b;
        h.Y[2] = c;
        h.Y[3] = e;
        this.Sb = !1
    };
    c.prototype.clearRect = function(a, b, c, e) {
        if (!(0 > c || 0 > e)) {
            var h = this.Bc();
            h.type = 7;
            h.fc = 1;
            h.Y || (h.Y = kc());
            h.Y[0] = a;
            h.Y[1] = b;
            h.Y[2] = c;
            h.Y[3] = e;
            this.Sb = !1
        }
    };
    c.prototype.fr = function(a) {
        if (this.Ga && (a = !!a, this.Jh !== a)) {
            var b = this.Bc();
            b.type = 14;
            b.fc = a ? 1 : 0;
            this.Sb = !1;
            this.Jh = a;
            this.Mk = null;
            this.Jh ? this.pc(2) : this.pc(0)
        }
    };
    c.prototype.er = function(a) {
        if (this.Ga) {
            var b = this.Bc();
            b.type = 13;
            b.fc = a ? 1 : 0;
            this.Sb = !1
        }
    };
    c.prototype.xp = function() {
        lc(this.Wm, p);
        this.Md();
        this.xd();
        var a = this.width / 2,
            b = this.height / 2;
        this.pi(-a, b, a, b, a, -b, -a, -b);
        lc(p, this.Lc);
        this.xd()
    };
    c.prototype.dr = function(a, b, c) {
        this.pc(3);
        var e = this.Bc();
        e.type = 12;
        e.Y || (e.Y = kc());
        e.Y[0] = a;
        e.Y[1] = b;
        e.Y[2] = c;
        e.Y[3] = 1;
        this.Sb = !1
    };
    c.prototype.Bx = function() {
        this.pc(0)
    };
    c.prototype.ix = function() {
        this.pc(2)
    };
    c.prototype.Yw = function() {
        this.rf();
        this.C.flush()
    };
    var m = [],
        f = {};
    c.prototype.bu = function() {
        z(m);
        f = {}
    };
    c.prototype.Gg = function(a, b, c, e) {
        b = !!b;
        c = !!c;
        var h = a.src + "," + b + "," + c + (b ? ",undefined" : ""),
            d = null;
        if ("undefined" !== typeof a.src && f.hasOwnProperty(h)) return d = f[h], d.hj++, d;
        this.rf();
        var l = this.C,
            k = ka(a.width) && ka(a.height),
            d = l.createTexture();
        l.bindTexture(l.TEXTURE_2D, d);
        l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var q = l.RGBA,
            p = l.RGBA,
            g = l.UNSIGNED_BYTE;
        if (e && !this.Qe) switch (e) {
            case 1:
                p = q = l.RGB;
                break;
            case 2:
                g = l.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                g = l.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                p = q = l.RGB, g = l.UNSIGNED_SHORT_5_6_5
        }
        if (!k && b) {
            e = document.createElement("canvas");
            e.width = la(a.width);
            e.height = la(a.height);
            var r = e.getContext("2d");
            "undefined" !== typeof r.imageSmoothingEnabled ? r.imageSmoothingEnabled = c : (r.webkitImageSmoothingEnabled = c, r.mozImageSmoothingEnabled = c, r.msImageSmoothingEnabled = c);
            r.drawImage(a, 0, 0, a.width, a.height, 0, 0, e.width, e.height);
            l.texImage2D(l.TEXTURE_2D, 0, q, p, g, e)
        } else l.texImage2D(l.TEXTURE_2D, 0, q, p, g, a);
        b ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE));
        c ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR), k && this.op ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR_MIPMAP_LINEAR), l.generateMipmap(l.TEXTURE_2D)) : l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST));
        l.bindTexture(l.TEXTURE_2D, null);
        this.Hf = null;
        d.hf = a.width;
        d.gf = a.height;
        d.hj = 1;
        d.dp = h;
        m.push(d);
        return f[h] = d
    };
    c.prototype.Qc = function(a, b, c) {
        var e;
        this.rf();
        var h = this.C;
        this.Qe && (e = !1);
        var f = h.createTexture();
        h.bindTexture(h.TEXTURE_2D, f);
        h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, a, b, 0, h.RGBA, e ? h.UNSIGNED_SHORT_4_4_4_4 : h.UNSIGNED_BYTE, null);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, c ? h.LINEAR : h.NEAREST);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, c ? h.LINEAR : h.NEAREST);
        h.bindTexture(h.TEXTURE_2D, null);
        this.Hf = null;
        f.hf = a;
        f.gf = b;
        m.push(f);
        return f
    };
    c.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.hj && 1 < a.hj ? a.hj-- : (this.rf(), a === this.Hf && (this.C.bindTexture(this.C.TEXTURE_2D, null), this.Hf = null), a === this.If && (this.C.activeTexture(this.C.TEXTURE1), this.C.bindTexture(this.C.TEXTURE_2D, null), this.C.activeTexture(this.C.TEXTURE0), this.If = null), Fa(m, a), "undefined" !== typeof a.dp && delete f[a.dp], this.C.deleteTexture(a)))
    };
    c.prototype.dd = function(a) {
        if (a !== this.Mk) {
            var b = this.Bc();
            b.type = 6;
            this.Mk = b.gd = a;
            this.Sb = !1
        }
    };
    pb = c
})();
(function() {
    function c(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.kc = (this.Ih = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Ab = !!a.dc;
            this.Qp = "undefined" !== typeof window.AppMobi || this.Ab;
            this.vc = !!window.c2cocoonjs;
            this.Vc = !!window.c2ejecta;
            this.vc && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.Vc && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Ia = this.Ab || this.vc || this.Vc;
            this.Lh = /edge\//i.test(navigator.userAgent);
            this.Qe = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Lh;
            this.Sp = /tizen/i.test(navigator.userAgent);
            this.Xj = /android/i.test(navigator.userAgent) && !this.Sp && !this.Qe && !this.Lh;
            this.Vp = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Qe && !this.Lh;
            this.vw = /ipad/i.test(navigator.userAgent);
            this.Ag = this.Vp || this.vw || this.Vc;
            this.Hh = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Qe && !this.Lh;
            this.Mm = /amazonwebappplatform/i.test(navigator.userAgent);
            this.mw = /firefox/i.test(navigator.userAgent);
            this.qw = /safari/i.test(navigator.userAgent) && !this.Hh && !this.Qe && !this.Lh;
            this.rw = /windows/i.test(navigator.userAgent);
            this.Re = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Tp = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.uw = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.ug = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Sm = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Rm = !!window.cr_windows10;
            this.$j = this.Tp || this.uw || this.Sm || this.Rm;
            this.lw = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Yj = this.Xj && !this.Hh && !this.Ih && !this.mw && !this.Mm && !this.Ia;
            this.devicePixelRatio = 1;
            this.sg = this.kc || this.Ih || this.Qp || this.vc || this.Xj || this.Ag || this.ug || this.Sm || this.lw || this.Sp || this.Vc;
            this.sg || (this.sg = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Ph = !!(this.Ag && this.kc && window.webkit);
            this.Em = null;
            this.ew = "";
            this.Ph && (this.Em = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.Re || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Re = !0);
            this.canvas = a;
            this.fp = document.getElementById("c2canvasdiv");
            this.A = this.C = null;
            this.Am = "(unavailable)";
            this.Ga = !1;
            this.pf = 0;
            this.Ka = null;
            this.nm = "";
            this.Jj = !1;
            this.Gq = this.Hq = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Ab && (window.c2runtime = this);
            this.Re && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Yj && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.L = this.width;
            this.K = this.height;
            this.sj = this.width;
            this.rh = this.height;
            this.Dg = window.innerWidth;
            this.Cg = window.innerHeight;
            this.uv = !1;
            this.pa = !0;
            this.Nh = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.q = [];
            this.Ra = [];
            this.cn = {};
            this.qd = [];
            this.jm = {};
            this.$d = [];
            this.hh = [];
            this.ml = [];
            this.Qt = [];
            this.Rt = [];
            this.tr = null;
            this.lf = {};
            this.Om = this.Pe = !1;
            this.Kc = 0;
            this.Nm = this.Qm = !1;
            this.od = [];
            this.Kh = !1;
            this.fe = this.Ub = this.fk = this.Un = "";
            this.Ii = this.pr = !1;
            this.Ij = [];
            this.of = this.Le = 0;
            this.yq = 30;
            this.Vl = this.bi = 0;
            this.bf = 1;
            this.eb = new ab;
            this.ue = new ab;
            this.ok = this.Lj = this.uf = this.$e = this.Kf = this.mm = this.ck = 0;
            this.jf = null;
            this.dm = [];
            this.im = [];
            this.Aj = -1;
            this.jn = [
                []
            ];
            this.lo = this.jk = 0;
            this.Jk(null);
            this.xh = this.Bq = this.fi = 0;
            this.Ji = [];
            this.io = this.Ln = -1;
            this.Bg = !0;
            this.Mf = 0;
            this.Mh = !1;
            this.Ex = 0;
            this.fg = null;
            this.wc = this.Gp = !1;
            this.Fq = new ba;
            this.sn = new ba;
            this.tn = new ba;
            this.si = [];
            this.ud = new cb([]);
            this.eo = new cb([]);
            this.Ae = [];
            this.qg = {};
            this.He = {};
            this.ze = {};
            this.gh = {};
            this.$o = {};
            this.bq = this.ek = this.gb = this.qb = this.aq = this.dk = this.ya = null;
            this.eh = this.Tm = !1;
            this.om = [null, null];
            this.wf = 0;
            this.Hj = "";
            this.ie = {};
            this.Fi = this.Te = null;
            this.rr = "";
            this.nk = [];
            this.hx()
        }
    }

    function d(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function b() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function k(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function p(a, b, e, g) {
        try {
            var c = indexedDB.open("_C2SaveStates");
            c.onupgradeneeded = k;
            c.onerror = g;
            c.onsuccess = function(c) {
                c = c.target.result;
                c.onerror = g;
                c.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = e
            }
        } catch (h) {
            g(h)
        }
    }

    function m(a, b, e) {
        try {
            var g = indexedDB.open("_C2SaveStates");
            g.onupgradeneeded = k;
            g.onerror = e;
            g.onsuccess = function(g) {
                g = g.target.result;
                g.onerror = e;
                var c = g.transaction(["saves"]).objectStore("saves").get(a);
                c.onsuccess = function() {
                    c.result ? b(c.result.data) : b(null)
                }
            }
        } catch (c) {
            e(c)
        }
    }

    function f() {
        ea("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function a(a) {
        var b, e = {};
        for (b in a)!a.hasOwnProperty(b) || a[b] instanceof ba || a[b] && "undefined" !== typeof a[b].jz || "spriteCreatedDestroyCallback" !== b && (e[b] = a[b]);
        return e
    }
    var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    c.prototype.hx = function() {
        var a = this;
        if (this.Ph) this.Em ? this.Em.startServer({
            port: 0,
            localhost_only: !0
        }, function(b) {
            a.ew = b;
            a.up(function(b) {
                a.Fg(JSON.parse(b))
            }, function() {
                alert("Error fetching data.js")
            })
        }, function(a) {
            alert("error starting local server: " + a)
        }) : this.up(function(b) {
            a.Fg(JSON.parse(b))
        }, function() {
            alert("Error fetching data.js")
        });
        else {
            var b;
            this.ug ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var e = "data.js";
            if (this.Tp || this.ug || this.Sm || this.Rm) e = "data.json";
            b.open("GET", e, !0);
            var g = !1;
            if (!this.Ia && "response" in b && "responseType" in b) try {
                b.responseType = "json", g = "json" === b.responseType
            } catch (c) {
                g = !1
            }
            if (!g && "responseType" in b) try {
                b.responseType = "text"
            } catch (h) {}
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch (f) {}
            this.ug ? b.onreadystatechange = function() {
                4 === b.readyState && a.Fg(JSON.parse(b.responseText))
            } : (b.onload = function() {
                if (g) a.Fg(b.response);
                else if (a.Vc) {
                    var e = b.responseText,
                        e = e.substr(e.indexOf("{"));
                    a.Fg(JSON.parse(e))
                } else a.Fg(JSON.parse(b.responseText))
            }, b.onerror = function(a) {
                ga("Error requesting " + e + ":");
                ga(a)
            });
            b.send()
        }
    };
    c.prototype.hw = function() {
        var a = this,
            b, e, g, c, h, f, l, r, d;
        this.Gf = (!this.Ia || this.Vc || this.kc) && this.Px && !this.Yj;
        0 === this.Xb && this.Ag && (this.Gf = !1);
        this.devicePixelRatio = this.Gf ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Nb();
        e = !(!this.uv && (!this.Fl || this.Re || this.$j || this.ug || this.Ih || this.kc || this.Mm));
        0 < this.Xb && this.setSize(window.innerWidth, window.innerHeight, !0);
        try {
            this.Hu && (this.vc || this.Vc || !this.Ia) && (b = {
                alpha: e,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            }, this.C = this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (k) {}
        if (this.C) {
            if (b = this.C.getExtension("WEBGL_debug_renderer_info")) this.Am = this.C.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.C.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.Ga && (this.Am += " [front-to-back enabled]");
            this.Ia || (this.Lb = document.createElement("canvas"), jQuery(this.Lb).appendTo(this.canvas.parentNode), this.Lb.oncontextmenu = function() {
                return !1
            }, this.Lb.onselectstart = function() {
                return !1
            }, this.Lb.width = Math.round(this.sj * this.devicePixelRatio), this.Lb.height = Math.round(this.rh * this.devicePixelRatio), jQuery(this.Lb).css({
                width: this.sj + "px",
                height: this.rh + "px"
            }), this.Uq(), this.Fn = this.Lb.getContext("2d"));
            this.A = new pb(this.C, this.sg, this.Ga);
            this.A.Uf(this.canvas.width, this.canvas.height);
            this.A.op = 0 !== this.Au;
            this.Ka = null;
            this.canvas.addEventListener("webglcontextlost", function(b) {
                b.preventDefault();
                a.Fw();
                ea("[Construct 2] WebGL context lost");
                window.cr_setSuspended(!0)
            }, !1);
            this.canvas.addEventListener("webglcontextrestored", function() {
                a.A.Lp();
                a.A.Uf(a.A.width, a.A.height, !0);
                a.qb = null;
                a.gb = null;
                a.om[0] = null;
                a.om[1] = null;
                a.Gw();
                a.pa = !0;
                ea("[Construct 2] WebGL context restored");
                window.cr_setSuspended(!1)
            }, !1);
            b = 0;
            for (e = this.q.length; b < e; b++)
                for (h = this.q[b], g = 0, c = h.S.length; g < c; g++) l = h.S[g], l.jb = this.A.zm(l.id), l.bd = this.A.Jn(l.jb), this.eh = this.eh || this.A.ni(l.jb);
            b = 0;
            for (e = this.qd.length; b < e; b++) {
                r = this.qd[b];
                g = 0;
                for (c = r.S.length; g < c; g++) l = r.S[g], l.jb = this.A.zm(l.id), l.bd = this.A.Jn(l.jb);
                r.wd();
                g = 0;
                for (c = r.V.length; g < c; g++) {
                    d = r.V[g];
                    h = 0;
                    for (f = d.S.length; h < f; h++) l = d.S[h], l.jb = this.A.zm(l.id), l.bd = this.A.Jn(l.jb), this.eh = this.eh || this.A.ni(l.jb);
                    d.wd()
                }
            }
        } else {
            if (0 < this.Xb && this.Ab) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Ka = AppMobi.canvas.getContext("2d");
                try {
                    this.Ka.samplingMode = this.Ja ? "smooth" : "sharp", this.Ka.globalScale = 1, this.Ka.HTML5CompatibilityMode = !0, this.Ka.imageSmoothingEnabled = this.Ja
                } catch (w) {}
                0 !== this.width && 0 !== this.height && (this.Ka.width = this.width, this.Ka.height = this.height)
            }
            this.Ka || (this.vc ? (b = {
                antialias: !!this.Ja,
                alpha: e
            }, this.Ka = this.canvas.getContext("2d", b)) : (b = {
                alpha: e
            }, this.Ka = this.canvas.getContext("2d", b)), this.Rk(this.Ka, this.Ja));
            this.Fn = this.Lb = null
        }
        this.Br = function(b) {
            a.Na(!1, b)
        };
        window == window.top || this.Ia || this.$j || this.ug || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.vc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ea("Reloading for continuous preview"), this.fk = "__c2_continuouspreview", this.Ii = !0), this.Qw && !this.sg && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.Qg()
        });
        this.Ia || (b = function(a) {
            if (ob(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (b) {}
        }, window.navigator.pointerEnabled ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.Xb && this.Gf && 1 < this.devicePixelRatio && this.setSize(this.sb, this.rb, !0);
        this.Fr();
        this.Zv();
        this.go();
        this.J = {}
    };
    c.prototype.setSize = function(a, b, e) {
        var g = 0,
            c = 0,
            h = 0,
            f = 0,
            f = 0;
        if (this.Dg !== a || this.Cg !== b || e) {
            this.Dg = a;
            this.Cg = b;
            var l = this.Xb,
                r = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Mh) && !this.kc;
            if (r || 0 !== this.Xb || e) r && 0 < this.wf && (l = this.wf), e = this.devicePixelRatio, 4 <= l ? (h = this.sb / this.rb, a / b > h ? (h *= b, 5 === l ? (f = h * e / this.sb, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), h = this.sb * f / e, f = this.rb * f / e, g = (a - h) / 2, c = (b - f) / 2, a = h, b = f) : (g = (a - h) / 2, a = h)) : (f = a / h, 5 === l ? (f = f * e / this.rb, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), h = this.sb * f / e, f = this.rb * f / e, g = (a - h) / 2, c = (b - f) / 2, a = h) : c = (b - f) / 2, b = f), r && !this.Re && (c = g = 0)) : this.Re && this.Mh && 0 === this.yp && (g = Math.floor((a - this.sb) / 2), c = Math.floor((b - this.rb) / 2), a = this.sb, b = this.rb), 2 > l && (this.mh = e), this.sj = Math.round(a), this.rh = Math.round(b), this.width = Math.round(a * e), this.height = Math.round(b * e), this.pa = !0, this.Rr ? (this.L = this.width, this.K = this.height, this.Gc = !0) : this.width < this.sb && this.height < this.rb || 1 === l ? (this.L = this.width, this.K = this.height, this.Gc = !0) : (this.L = this.sb, this.K = this.rb, this.Gc = !1, 2 === l ? (h = this.sb / this.rb, l = this.Dg / this.Cg, l < h ? this.L = this.K * l : l > h && (this.K = this.L / l)) : 3 === l && (h = this.sb / this.rb, l = this.Dg / this.Cg, l > h ? this.L = this.K * l : l < h && (this.K = this.L / l))), this.fp && !this.Ia && (jQuery(this.fp).css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px",
                "margin-left": Math.floor(g) + "px",
                "margin-top": Math.floor(c) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * e), this.canvas.height = Math.round(b * e), this.Vc ? (this.canvas.style.left = Math.floor(g) + "px", this.canvas.style.top = Math.floor(c) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.Gf && !this.Ia && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.Lb && (this.Lb.width = Math.round(a * e), this.Lb.height = Math.round(b * e), this.Lb.style.width = this.sj + "px", this.Lb.style.height = this.rh + "px"), this.A && this.A.Uf(Math.round(a * e), Math.round(b * e)), this.Ab && this.Ka && (this.Ka.width = Math.round(a), this.Ka.height = Math.round(b)), this.Ka && this.Rk(this.Ka, this.Ja), this.Fr(), this.Vp && !this.kc && window.scrollTo(0, 0)
        }
    };
    c.prototype.Fr = function() {
        if (this.Tt && 0 !== this.Dn) {
            var a = "portrait";
            2 === this.Dn && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    c.prototype.Fw = function() {
        this.A.bu();
        this.Tm = !0;
        var a, b, e;
        a = 0;
        for (b = this.q.length; a < b; a++) e = this.q[a], e.qk && e.qk()
    };
    c.prototype.Gw = function() {
        this.Tm = !1;
        var a, b, e;
        a = 0;
        for (b = this.q.length; a < b; a++) e = this.q[a], e.rk && e.rk()
    };
    c.prototype.Uq = function() {
        if (!this.Ia) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Mh) && !this.kc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Lb).css(a)
        }
    };
    var t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    c.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Nh)
            for (ea("[Construct 2] Suspending"), this.Nh = !0, -1 !== this.Ln && t && t(this.Ln), -1 !== this.io && clearTimeout(this.io), a = 0, b = this.Ji.length; a < b; a++) this.Ji[a](!0);
        else if (!a && this.Nh) {
            ea("[Construct 2] Resuming");
            this.Nh = !1;
            this.ck = Xa();
            this.Kf = Xa();
            a = this.bi = this.Lj = 0;
            for (b = this.Ji.length; a < b; a++) this.Ji[a](!1);
            this.Na(!1)
        }
    };
    c.prototype.Vo = function(a) {
        this.Ji.push(a)
    };
    c.prototype.xe = function(a) {
        return this.nk[a]
    };
    c.prototype.Fg = function(a) {
        a && a.project || ga("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.wp = a[1];
        this.Xb = a[12];
        this.yp = a[12];
        this.sb = a[10];
        this.rb = a[11];
        this.Qq = this.sb / 2;
        this.Rq = this.rb / 2;
        this.Ia && !this.Vc && (4 <= a[12] || 0 === a[12]) && (ea("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.yp = this.Xb = 3);
        this.to = a[18];
        this.Ue = a[19];
        if (0 === this.Ue) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.gr(b, "loading-logo.png");
            this.Te = {
                kk: b
            }
        } else if (4 === this.Ue) {
            b = new Image;
            b.src = "";
            var e = new Image;
            e.src = "";
            var g = new Image;
            g.src = "";
            var c = new Image;
            c.src = "";
            var h = new Image;
            h.src = "";
            var f = new Image;
            f.src = "";
            var l = new Image;
            l.src = "";
            var r = new Image;
            r.src = "";
            var d = new Image;
            d.src = "";
            var k = new Image;
            k.src = "";
            var w = new Image;
            w.src = "";
            var n = new Image;
            n.src = "";
            this.Te = {
                kk: [b, e, g, c],
                Vw: [h, f, l, r],
                Ux: [d, k, w, n]
            }
        }
        this.fi = a[21];
        this.nk = pc();
        this.Nd = new M(this);
        b = 0;
        for (e = a[2].length; b < e; b++) l = a[2][b], g = this.xe(l[0]), qb(l, g.prototype), r = new g(this), r.al = l[1], r.Se = l[2], r.zq = l[9], r.F && r.F(), this.plugins.push(r);
        this.nk = pc();
        b = 0;
        for (e = a[3].length; b < e; b++) {
            l = a[3][b];
            h = this.xe(l[1]);
            r = null;
            g = 0;
            for (c = this.plugins.length; g < c; g++)
                if (this.plugins[g] instanceof h) {
                    r = this.plugins[g];
                    break
                }
            d = new r.X(r);
            d.name = l[0];
            d.I = l[2];
            d.Km = l[3].slice(0);
            d.Rx = l[3].length;
            d.Ut = l[4];
            d.wv = l[5];
            d.ea = l[11];
            d.I ? (d.Jg = [], d.ae = this.xh++, d.La = null) : (d.Jg = null, d.ae = -1, d.La = []);
            d.Fj = null;
            d.lg = null;
            d.pp = null;
            d.$b = !1;
            d.tc = null;
            l[6] ? (d.hl = l[6][0], d.ho = l[6][1], d.Mi = l[6][2]) : (d.hl = null, d.ho = 0, d.Mi = 0);
            l[7] ? d.rc = l[7] : d.rc = null;
            d.index = b;
            d.d = [];
            d.wj = [];
            d.qe = [new rb(d)];
            d.Bd = 0;
            d.Rc = null;
            d.gu = 0;
            d.Zg = !0;
            d.ol = sb;
            d.Bv = tb;
            d.Gv = vb;
            d.ca = wb;
            d.oi = xb;
            d.Ik = yb;
            d.Sf = zb;
            d.Nj = Ab;
            d.qm = Bb;
            d.vm = Cb;
            d.ld = Db;
            d.wm = Eb;
            d.pj = new ib(this.sb, this.rb);
            d.bj = !0;
            d.cj = !1;
            d.J = {};
            d.toString = Fb;
            d.Ra = [];
            g = 0;
            for (c = l[8].length; g < c; g++) {
                k = l[8][g];
                w = this.xe(k[1]);
                n = null;
                h = 0;
                for (f = this.Ra.length; h < f; h++)
                    if (this.Ra[h] instanceof w) {
                        n = this.Ra[h];
                        break
                    }
                n || (n = new w(this), n.qn = [], n.Qf = new ba, n.F && n.F(), this.Ra.push(n), qc && n instanceof qc && (this.tr = n)); - 1 === n.qn.indexOf(d) && n.qn.push(d);
                h = new n.X(n, d);
                h.name = k[0];
                h.ea = k[2];
                h.F();
                d.Ra.push(h)
            }
            d.global = l[9];
            d.Pm = l[10];
            d.S = [];
            g = 0;
            for (c = l[12].length; g < c; g++) d.S.push({
                id: l[12][g][0],
                name: l[12][g][1],
                jb: -1,
                bd: !1,
                Pa: !0,
                index: g
            });
            d.Fz = l[13];
            this.to && !d.I && !d.Pm && r.Se || d.F();
            d.name && (this.types[d.name] = d);
            this.q.push(d);
            r.al && (g = new r.O(d), g.uid = this.fi++, g.Xq = this.Bq++, g.Cf = 0, g.Bh = Gb, g.toString = Hb, g.m = l[14], g.F(), d.d.push(g), this.ie[g.uid.toString()] = g)
        }
        b = 0;
        for (e = a[4].length; b < e; b++)
            for (h = a[4][b], f = this.q[h[0]], g = 1, c = h.length; g < c; g++) l = this.q[h[g]], l.La.push(f), f.Jg.push(l);
        b = 0;
        for (e = a[28].length; b < e; b++) {
            h = a[28][b];
            f = [];
            g = 0;
            for (c = h.length; g < c; g++) f.push(this.q[h[g]]);
            g = 0;
            for (c = f.length; g < c; g++) f[g].$b = !0, f[g].tc = f
        }
        if (0 < this.xh)
            for (b = 0, e = this.q.length; b < e; b++)
                if (l = this.q[b], !l.I && l.La.length) {
                    l.Fj = Array(this.xh);
                    l.lg = Array(this.xh);
                    l.pp = Array(this.xh);
                    d = [];
                    g = n = w = k = 0;
                    for (c = l.La.length; g < c; g++)
                        for (r = l.La[g], l.Fj[r.ae] = k, k += r.Rx, l.lg[r.ae] = w, w += r.Ut, l.pp[r.ae] = n, n += r.wv, h = 0, f = r.S.length; h < f; h++) d.push(xa({}, r.S[h]));
                    l.S = d.concat(l.S);
                    g = 0;
                    for (c = l.S.length; g < c; g++) l.S[g].index = g
                }
        b = 0;
        for (e = a[5].length; b < e; b++) l = a[5][b], g = new Ib(this, l), this.cn[g.name] = g, this.qd.push(g);
        b = 0;
        for (e = a[6].length; b < e; b++) l = a[6][b], g = new Jb(this, l), this.jm[g.name] = g, this.$d.push(g);
        b = 0;
        for (e = this.$d.length; b < e; b++) this.$d[b].ab();
        b = 0;
        for (e = this.$d.length; b < e; b++) this.$d[b].po();
        b = 0;
        for (e = this.ml.length; b < e; b++) this.ml[b].ab();
        z(this.ml);
        this.St = a[7];
        this.Hj = a[8];
        this.rd = a[9];
        this.mh = 1;
        this.Hu = a[13];
        this.Ja = a[14];
        this.Fl = a[15];
        this.Px = a[17];
        this.Dn = a[20];
        this.Tt = 0 < this.Dn;
        this.Qw = a[22];
        this.Gc = this.Rr = a[23];
        this.Au = a[24];
        this.Ww = a[25];
        this.Ga = a[27] && !this.Qe;
        this.bl = Date.now();
        z(this.nk);
        this.hw()
    };
    var e = !1;
    c.prototype.vo = function(a, b) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(b) {
            e = a.cp = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", b)
        };
        this.Vc ? a.src = b : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b, function(b) {
            a.src = b
        }, function(g) {
            e = a.cp = !0;
            console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", g)
        }) : (a.crossOrigin = "anonymous", this.gr(a, b)));
        this.hh.push(a)
    };
    c.prototype.tv = function(a) {
        var b, e;
        b = 0;
        for (e = this.hh.length; b < e; b++)
            if (this.hh[b].cu === a) return this.hh[b];
        return null
    };
    var h = 0,
        w = !1;
    c.prototype.Zv = function() {
        this.fg && (h = this.fg.yx(this.St))
    };
    c.prototype.Yo = function() {
        var a = h,
            b = 0,
            e = 0,
            g = !0,
            c, l, e = 0;
        for (c = this.hh.length; e < c; e++) {
            l = this.hh[e];
            var f = l.ip;
            if (!f || 0 >= f) f = 5e4;
            a += f;
            l.src && (l.complete || l.loaded) && !l.cp ? b += f : g = !1
        }
        g && this.Ww && this.fg && (w || (this.fg.Fx(), w = !0), e = this.fg.Hv(), b += e, e < h && (g = !1));
        this.Z = 0 == a ? 1 : b / a;
        return g
    };
    var l = !1;
    c.prototype.go = function() {
        if (this.Ka || this.A) {
            var a = this.Ka || this.Fn;
            this.Lb && this.Uq();
            var b = window.innerWidth,
                g = window.innerHeight;
            this.Dg === b && this.Cg === g || this.setSize(b, g);
            this.Z = 0;
            this.$p = -1;
            var c = this;
            if (this.Yo() && (4 !== this.Ue || l)) this.$v();
            else {
                g = Date.now() - this.bl;
                if (a) {
                    var h = this.width,
                        f = this.height,
                        b = this.devicePixelRatio;
                    if (3 > this.Ue && (this.vc || 500 <= g && this.$p != this.Z)) {
                        a.clearRect(0, 0, h, f);
                        var g = h / 2,
                            f = f / 2,
                            h = 0 === this.Ue && this.Te.kk.complete,
                            d = 40 * b,
                            r = 0,
                            k = 80 * b,
                            w;
                        if (h) {
                            var q = this.Te.kk,
                                k = q.width * b;
                            w = q.height * b;
                            d = k / 2;
                            r = w / 2;
                            a.drawImage(q, sa(g - d), sa(f - r), k, w)
                        }
                        1 >= this.Ue ? (g = sa(g - d) + .5, f = sa(f + (r + (h ? 12 * b : 0))) + .5, a.fillStyle = e ? "red" : "DodgerBlue", a.fillRect(g, f, Math.floor(k * this.Z), 6 * b), a.strokeStyle = "black", a.strokeRect(g, f, k, 6 * b), a.strokeStyle = "white", a.strokeRect(g - 1 * b, f - 1 * b, k + 2 * b, 8 * b)) : 2 === this.Ue && (a.font = this.Vc ? "12pt ArialMT" : "12pt Arial", a.fillStyle = e ? "#f00" : "#999", a.Ez = "middle", b = Math.round(100 * this.Z) + "%", h = a.measureText ? a.measureText(b) : null, a.fillText(b, g - (h ? h.width : 0) / 2, f));
                        this.$p = this.Z
                    } else if (4 === this.Ue) {
                        this.Fu(a);
                        n ? n(function() {
                            c.go()
                        }) : setTimeout(function() {
                            c.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    c.go()
                }, this.vc ? 10 : 100)
            }
        }
    };
    var J = -1,
        q = "undefined" === typeof cr_is_preview ? 200 : 0,
        L = !0,
        g = !1,
        r = 0,
        P = 0,
        Y = "undefined" === typeof cr_is_preview ? 3e3 : 0,
        y = null,
        C = null,
        H = 0;
    c.prototype.Fu = function(a) {
        if (!l) {
            for (var b = Math.ceil(this.width), c = Math.ceil(this.height), h = this.Te.kk, f = this.Te.Vw, k = this.Te.Ux, w = 0; 4 > w; ++w)
                if (!h[w].complete || !f[w].complete || !k[w].complete) return;
            0 === H && (J = Date.now());
            var w = Date.now(),
                n = !1,
                p = a,
                m, t;
            L || g ? (a.clearRect(0, 0, b, c), y && y.width === b && y.height === c || (y = document.createElement("canvas"), y.width = b, y.height = c, C = y.getContext("2d")), p = C, n = !0, L && 1 === H && (J = Date.now())) : a.globalAlpha = 1;
            p.fillStyle = "#333333";
            p.fillRect(0, 0, b, c);
            256 < this.rh ? (m = Ga(.22 * c, 105, .6 * b), t = .25 * m, p.drawImage(d(f, m), .5 * b - m / 2, .2 * c - t / 2, m, t), t = m = Math.min(.395 * c, .95 * b), p.drawImage(d(h, m), .5 * b - m / 2, .485 * c - t / 2, m, t), m = Ga(.22 * c, 105, .6 * b), t = .25 * m, p.drawImage(d(k, m), .5 * b - m / 2, .868 * c - t / 2, m, t), p.fillStyle = "#3C3C3C", m = b, t = Math.max(.005 * c, 2), p.fillRect(0, .8 * c - t / 2, m, t), p.fillStyle = e ? "red" : "#E0FF65", m = b * this.Z, p.fillRect(.5 * b - m / 2, .8 * c - t / 2, m, t)) : (t = m = .55 * c, p.drawImage(d(h, m), .5 * b - m / 2, .45 * c - t / 2, m, t), p.fillStyle = "#3C3C3C", m = b, t = Math.max(.005 * c, 2), p.fillRect(0, .85 * c - t / 2, m, t), p.fillStyle = e ? "red" : "#E0FF65", m = b * this.Z, p.fillRect(.5 * b - m / 2, .85 * c - t / 2, m, t));
            n && (L ? a.globalAlpha = 0 === H ? 0 : Math.min((w - J) / 300, 1) : g && (a.globalAlpha = Math.max(1 - (w - P) / 300, 0)), a.drawImage(y, 0, 0, b, c));
            L && 300 <= w - J && 2 <= H && (L = !1, r = w);
            !L && w - r >= Y && !g && 1 <= this.Z && (g = !0, P = w);
            if (g && w - P >= 300 + q || "undefined" !== typeof cr_is_preview && 1 <= this.Z && 500 > Date.now() - J) l = !0, g = L = !1, this.Te = C = y = null;
            ++H
        }
    };
    c.prototype.$v = function() {
        this.Lb && (this.canvas.parentNode.removeChild(this.Lb), this.Lb = this.Fn = null);
        this.bl = Date.now();
        this.Kf = Xa();
        var a, b, e;
        if (this.to)
            for (a = 0, b = this.q.length; a < b; a++) e = this.q[a], e.I || e.Pm || !e.xa.Se || e.F();
        else this.Bg = !1;
        a = 0;
        for (b = this.qd.length; a < b; a++) this.qd[a].du();
        2 <= this.Xb && (a = this.sb / this.rb, b = this.width / this.height, this.mh = 2 !== this.Xb && b > a || 2 === this.Xb && b < a ? this.height / this.rb : this.width / this.sb);
        this.wp ? this.cn[this.wp].bo() : this.qd[0].bo();
        this.to || (this.Mf = 1, this.trigger(M.prototype.e.zl, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.q.length; a < b; a++) e = this.q[a], e.Ew && e.Ew();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Na(!1);
        this.Ab && AppMobi.webview.execute("onGameReady();")
    };
    c.prototype.Na = function(a, b, e) {
        if (this.ya) {
            var g = Xa();
            if (e || !this.Nh || a) {
                a || (n ? this.Ln = n(this.Br) : this.io = setTimeout(this.Br, this.sg ? 1 : 16));
                b = b || g;
                var c = this.Xb;
                ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.kc) || this.Mh) && 0 < this.wf && (c = this.wf);
                if (0 < c) {
                    var c = window.innerWidth,
                        h = window.innerHeight;
                    this.Dg === c && this.Cg === h || this.setSize(c, h)
                }
                this.Ia || (e ? (this.Jj || (this.nm = jQuery(this.canvas).css("margin") || "0", this.Jj = !0), this.Hh || this.Re || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Jj ? (this.Hh || this.Re || jQuery(this.canvas).css("margin", this.nm), this.nm = "", this.Jj = !1, 0 === this.Xb && this.setSize(Math.round(this.Hq / this.devicePixelRatio), Math.round(this.Gq / this.devicePixelRatio), !0)) : (this.Hq = this.width, this.Gq = this.height));
                this.Bg && (e = this.Yo(), this.Mf = this.Z, e && (this.Bg = !1, this.Z = 1, this.trigger(M.prototype.e.zl, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.zw(b);
                !this.pa && !this.vc || this.Tm || this.Ii || a || (this.pa = !1, this.A ? this.uc() : this.Zd(), this.Fi && (this.canvas && this.canvas.toDataURL && (this.rr = this.canvas.toDataURL(this.Fi[0], this.Fi[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.rr), this.trigger(M.prototype.e.xs, null)), this.Fi = null));
                this.qz || (this.$e++, this.uf++, this.Lj++);
                this.bi += Xa() - g
            }
        }
    };
    c.prototype.zw = function(a) {
        var b, e, g, c, h, f, l, d;
        1e3 <= a - this.Kf && (this.Kf += 1e3, 1e3 <= a - this.Kf && (this.Kf = a), this.mm = this.Lj, this.Lj = 0, this.Vl = this.bi, this.bi = 0);
        b = 0;
        0 !== this.ck && (b = a - this.ck, 0 > b && (b = 0), this.of = b /= 1e3, .5 < this.of ? this.of = 0 : this.of > 1 / this.yq && (this.of = 1 / this.yq));
        this.ck = a;
        this.Le = this.of * this.bf;
        this.eb.add(this.Le);
        this.ue.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Mh) && !this.kc;
        2 <= this.Xb || a && 0 < this.wf ? (b = this.sb / this.rb, e = this.width / this.height, g = this.Xb, a && 0 < this.wf && (g = this.wf), this.mh = 2 !== g && e > b || 2 === g && e < b ? this.height / this.rb : this.width / this.sb, this.ya && (this.ya.Vn(this.ya.scrollX), this.ya.Wn(this.ya.scrollY))) : this.mh = this.Gf ? this.devicePixelRatio : 1;
        this.Nb();
        this.Kc++;
        this.Nd.nx();
        this.Kc--;
        this.Nb();
        this.Kc++;
        e = this.Fq.hd();
        a = 0;
        for (b = e.length; a < b; a++) e[a].zz();
        a = 0;
        for (b = this.q.length; a < b; a++)
            if (f = this.q[a], !f.I && (f.Ra.length || f.La.length))
                for (e = 0, g = f.d.length; e < g; e++)
                    for (l = f.d[e], c = 0, h = l.H.length; c < h; c++) l.H[c].Na();
        a = 0;
        for (b = this.q.length; a < b; a++)
            if (f = this.q[a], !f.I && (f.Ra.length || f.La.length))
                for (e = 0, g = f.d.length; e < g; e++)
                    for (l = f.d[e], c = 0, h = l.H.length; c < h; c++) d = l.H[c], d.Uw && d.Uw();
        e = this.sn.hd();
        a = 0;
        for (b = e.length; a < b; a++) e[a].Na();
        this.Kc--;
        this.aw();
        for (a = 0; this.jf && 10 > a++;) this.np(this.jf);
        a = 0;
        for (b = this.$d.length; a < b; a++) this.$d[a].Dm = !1;
        this.ya.sf && this.ya.sf.ib();
        z(this.si);
        this.Kc++;
        a = 0;
        for (b = this.q.length; a < b; a++)
            if (f = this.q[a], !f.I && (f.Ra.length || f.La.length))
                for (e = 0, g = f.d.length; e < g; e++)
                    for (l = f.d[e], c = 0, h = l.H.length; c < h; c++) d = l.H[c], d.Oi && d.Oi();
        e = this.tn.hd();
        a = 0;
        for (b = e.length; a < b; a++) e[a].Oi();
        this.Kc--
    };
    c.prototype.Qg = function() {
        var a, b, e, g, c, h, f, l, d;
        a = 0;
        for (b = this.q.length; a < b; a++)
            if (f = this.q[a], !f.I)
                for (e = 0, g = f.d.length; e < g; e++)
                    if (l = f.d[e], l.Qg && l.Qg(), l.H)
                        for (c = 0, h = l.H.length; c < h; c++) d = l.H[c], d.Qg && d.Qg()
    };
    c.prototype.np = function(a) {
        var b = this.ya;
        this.ya.Gx();
        var e, g, c;
        if (this.A)
            for (e = 0, g = this.q.length; e < g; e++) c = this.q[e], c.I || !c.nl || c.global && 0 !== c.d.length || -1 !== a.Fh.indexOf(c) || c.nl();
        b == a && z(this.Nd.qc);
        z(this.si);
        this.$q(!0);
        a.bo();
        this.$q(!1);
        this.pa = !0;
        this.Nb()
    };
    c.prototype.$q = function(a) {
        var b, e, g, c, h, f, l, d, r;
        b = 0;
        for (e = this.Ra.length; b < e; b++) g = this.Ra[b], a ? g.gi && g.gi() : g.ii && g.ii();
        b = 0;
        for (e = this.q.length; b < e; b++)
            if (g = this.q[b], g.global || g.xa.al)
                for (c = 0, h = g.d.length; c < h; c++)
                    if (f = g.d[c], a ? f.gi && f.gi() : f.ii && f.ii(), f.H)
                        for (l = 0, d = f.H.length; l < d; l++) r = f.H[l], a ? r.gi && r.gi() : r.ii && r.ii()
    };
    c.prototype.jl = function(a) {
        this.sn.add(a)
    };
    c.prototype.Jx = function(a) {
        this.tn.add(a)
    };
    c.prototype.xf = function(a) {
        return a && -1 !== a.ei ? this.of * a.ei : this.Le
    };
    c.prototype.Zd = function() {
        this.ya.Zd(this.Ka);
        this.Ab && this.Ka.present()
    };
    c.prototype.uc = function() {
        this.Ga && (this.pf = 1, this.ya.nf(this.A));
        this.ya.uc(this.A);
        this.A.Yw()
    };
    c.prototype.To = function(a) {
        a && this.dm.push(a)
    };
    c.prototype.Rj = function(a) {
        a = a.toString();
        return this.ie.hasOwnProperty(a) ? this.ie[a] : null
    };
    var D = [];
    c.prototype.we = function(a) {
        var b, e;
        b = a.type.name;
        var g = null;
        if (this.lf.hasOwnProperty(b)) {
            if (g = this.lf[b], g.contains(a)) return
        } else g = D.length ? D.pop() : new ba, this.lf[b] = g;
        g.add(a);
        this.Pe = !0;
        if (a.$b)
            for (b = 0, e = a.siblings.length; b < e; b++) this.we(a.siblings[b]);
        this.Om && g.fh.push(a);
        this.Nm || (this.Kc++, this.trigger(Object.getPrototypeOf(a.type.xa).e.Co, a), this.Kc--)
    };
    c.prototype.Nb = function() {
        if (this.Pe) {
            var a, b, e, g, c, h;
            this.Om = !0;
            e = 0;
            for (c = this.od.length; e < c; ++e)
                for (a = this.od[e], b = a.type, b.d.push(a), g = 0, h = b.La.length; g < h; ++g) b.La[g].d.push(a), b.La[g].Zg = !0;
            z(this.od);
            this.qs();
            Wa(this.lf);
            this.Pe = this.Om = !1
        }
    };
    c.prototype.qs = function() {
        for (var a in this.lf) this.lf.hasOwnProperty(a) && this.Yr(this.lf[a])
    };
    c.prototype.Yr = function(a) {
        var b = a.hd(),
            e = b[0].type,
            g, c, h, f, l, d;
        Ya(e.d, a);
        e.Zg = !0;
        0 === e.d.length && (e.cj = !1);
        g = 0;
        for (c = e.La.length; g < c; ++g) d = e.La[g], Ya(d.d, a), d.Zg = !0;
        g = 0;
        for (c = this.Nd.qc.length; g < c; ++g)
            if (l = this.Nd.qc[g], l.ec.hasOwnProperty(e.index) && Ya(l.ec[e.index].de, a), !e.I)
                for (h = 0, f = e.La.length; h < f; ++h) d = e.La[h], l.ec.hasOwnProperty(d.index) && Ya(l.ec[d.index].de, a);
        if (l = b[0].k) {
            if (l.Nc)
                for (h = l.d, g = 0, c = h.length; g < c; ++g) f = h[g], a.contains(f) && (f.Ca(), l.Mb.update(f, f.lc, null), f.lc.set(0, 0, -1, -1));
            Ya(l.d, a);
            l.Ai(0)
        }
        for (g = 0; g < b.length; ++g) this.Xr(b[g], e);
        a.clear();
        D.push(a);
        this.pa = !0
    };
    c.prototype.Xr = function(a, b) {
        var e, g, c;
        e = 0;
        for (g = this.dm.length; e < g; ++e) this.dm[e](a);
        a.Ie && b.pj.update(a, a.Ie, null);
        (e = a.k) && e.Tg(a, !0);
        if (a.H)
            for (e = 0, g = a.H.length; e < g; ++e) c = a.H[e], c.hi && c.hi(), c.behavior.Qf.remove(a);
        this.Fq.remove(a);
        this.sn.remove(a);
        this.tn.remove(a);
        a.hi && a.hi();
        this.ie.hasOwnProperty(a.uid.toString()) && delete this.ie[a.uid.toString()];
        this.ok--;
        100 > b.wj.length && b.wj.push(a)
    };
    c.prototype.Wl = function(a, b, e, g) {
        if (a.I) {
            var c = sa(Math.random() * a.Jg.length);
            return this.Wl(a.Jg[c], b, e, g)
        }
        return a.Rc ? this.Je(a.Rc, b, !1, e, g, !1) : null
    };
    var K = [];
    c.prototype.Je = function(a, b, e, g, c, h) {
        var f, l, d, r;
        if (!a) return null;
        var k = this.q[a[1]],
            w = k.xa.Se;
        if (this.Bg && w && !k.Pm || w && !this.A && 11 === a[0][11]) return null;
        var n = b;
        w || (b = null);
        var q;
        k.wj.length ? (q = k.wj.pop(), q.cd = !0, k.xa.O.call(q, k)) : (q = new k.xa.O(k), q.cd = !1);
        !e || h || this.ie.hasOwnProperty(a[2].toString()) ? q.uid = this.fi++ : q.uid = a[2];
        this.ie[q.uid.toString()] = q;
        q.Xq = this.Bq++;
        q.Cf = k.d.length;
        f = 0;
        for (l = this.od.length; f < l; ++f) this.od[f].type === k && q.Cf++;
        q.Bh = Gb;
        q.toString = Hb;
        d = a[3];
        if (q.cd) Wa(q.J);
        else {
            q.J = {};
            if ("undefined" !== typeof cr_is_preview)
                for (q.Op = [], q.Op.length = d.length, f = 0, l = d.length; f < l; f++) q.Op[f] = d[f][1];
            q.pb = [];
            q.pb.length = d.length
        }
        f = 0;
        for (l = d.length; f < l; f++) q.pb[f] = d[f][0];
        if (w) {
            var p = a[0];
            q.x = ha(g) ? p[0] : g;
            q.y = ha(c) ? p[1] : c;
            q.z = p[2];
            q.width = p[3];
            q.height = p[4];
            q.depth = p[5];
            q.g = p[6];
            q.opacity = p[7];
            q.Yb = p[8];
            q.Zb = p[9];
            q.Ob = p[10];
            f = p[11];
            !this.A && k.S.length && (q.Ob = f);
            q.nh = kb(q.Ob);
            this.C && lb(q, q.Ob, this.C);
            if (q.cd) {
                f = 0;
                for (l = p[12].length; f < l; f++)
                    for (d = 0, r = p[12][f].length; d < r; d++) q.Ta[f][d] = p[12][f][d];
                q.Qa.set(0, 0, 0, 0);
                q.Ie.set(0, 0, -1, -1);
                q.lc.set(0, 0, -1, -1);
                q.sc.Bi(q.Qa);
                z(q.Nl)
            } else {
                q.Ta = p[12].slice(0);
                f = 0;
                for (l = q.Ta.length; f < l; f++) q.Ta[f] = p[12][f].slice(0);
                q.qa = [];
                q.ye = [];
                q.ye.length = k.S.length;
                q.Qa = new va(0, 0, 0, 0);
                q.Ie = new va(0, 0, -1, -1);
                q.lc = new va(0, 0, -1, -1);
                q.sc = new wa;
                q.Nl = [];
                q.da = Kb;
                q.iz = Lb;
                q.Pb = Ob;
                q.Ca = Pb;
                q.Ox = Qb;
                q.Nr = Rb;
                q.Uc = Sb
            }
            q.Pi = !1;
            q.Mx = 0;
            q.Lx = 0;
            q.Kx = null;
            14 === p.length && (q.Pi = !0, q.Mx = p[13][0], q.Lx = p[13][1], q.Kx = p[13][2]);
            f = 0;
            for (l = k.S.length; f < l; f++) q.ye[f] = !0;
            q.oe = !0;
            q.wd = Tb;
            q.wd();
            q.Or = !!q.qa.length;
            q.Ml = !0;
            q.Ql = !0;
            k.bj = !0;
            q.visible = !0;
            q.ei = -1;
            q.k = b;
            q.yd = b.d.length;
            q.pf = 0;
            "undefined" === typeof q.ua && (q.ua = null);
            this.pa = q.Ud = !0
        }
        var P;
        z(K);
        f = 0;
        for (l = k.La.length; f < l; f++) K.push.apply(K, k.La[f].Ra);
        K.push.apply(K, k.Ra);
        if (q.cd)
            for (f = 0, l = K.length; f < l; f++) {
                var m = K[f];
                P = q.H[f];
                P.cd = !0;
                m.behavior.O.call(P, m, q);
                p = a[4][f];
                d = 0;
                for (r = p.length; d < r; d++) P.m[d] = p[d];
                P.F();
                m.behavior.Qf.add(q)
            } else
                for (q.H = [], f = 0, l = K.length; f < l; f++) m = K[f], P = new m.behavior.O(m, q), P.cd = !1, P.m = a[4][f].slice(0), P.F(), q.H.push(P), m.behavior.Qf.add(q);
        p = a[5];
        if (q.cd)
            for (f = 0, l = p.length; f < l; f++) q.m[f] = p[f];
        else q.m = p.slice(0);
        this.od.push(q);
        this.Pe = !0;
        b && (b.kh(q, !0), 1 !== b.$c || 1 !== b.ad) && (k.cj = !0);
        this.ok++;
        if (k.$b) {
            if (q.$b = !0, q.cd ? z(q.siblings) : q.siblings = [], !e && !h) {
                f = 0;
                for (l = k.tc.length; f < l; f++)
                    if (k.tc[f] !== k) {
                        if (!k.tc[f].Rc) return null;
                        q.siblings.push(this.Je(k.tc[f].Rc, n, !1, w ? q.x : g, w ? q.y : c, !0))
                    }
                f = 0;
                for (l = q.siblings.length; f < l; f++)
                    for (q.siblings[f].siblings.push(q), d = 0; d < l; d++) f !== d && q.siblings[f].siblings.push(q.siblings[d])
            }
        } else q.$b = !1, q.siblings = null;
        q.F();
        f = 0;
        for (l = q.H.length; f < l; f++) q.H[f].Tw && q.H[f].Tw();
        return q
    };
    c.prototype.Pj = function(a) {
        var b, e;
        b = 0;
        for (e = this.ya.V.length; b < e; b++) {
            var g = this.ya.V[b];
            if (nb(g.name, a)) return g
        }
        return null
    };
    c.prototype.ng = function(a) {
        a = sa(a);
        0 > a && (a = 0);
        a >= this.ya.V.length && (a = this.ya.V.length - 1);
        return this.ya.V[a]
    };
    c.prototype.Oj = function(a) {
        return ia(a) ? this.ng(a) : this.Pj(a.toString())
    };
    c.prototype.Tl = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].ca().ta = !0
    };
    c.prototype.oi = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].oi()
    };
    c.prototype.Ik = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Ik()
    };
    c.prototype.Sf = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Sf()
    };
    c.prototype.Kr = function(a) {
        if (a.bj) {
            var b, e, g = a.d;
            b = 0;
            for (e = g.length; b < e; ++b) g[b].Nr();
            g = this.od;
            b = 0;
            for (e = g.length; b < e; ++b) g[b].type === a && g[b].Nr();
            a.bj = !1
        }
    };
    c.prototype.Ap = function(a, b, e, g) {
        var c, h, f = a ? 1 !== a.$c || 1 !== a.ad : !1;
        if (b.I)
            for (a = 0, c = b.Jg.length; a < c; ++a) h = b.Jg[a], f || h.cj ? Da(g, h.d) : (this.Kr(h), h.pj.Kk(e, g));
        else f || b.cj ? Da(g, b.d) : (this.Kr(b), b.pj.Kk(e, g))
    };
    c.prototype.Mv = function(a, b, e, g) {
        var c, h;
        c = 0;
        for (h = b.length; c < h; ++c) this.Ap(a, b[c], e, g)
    };
    c.prototype.Lv = function(a, b, e) {
        var g = this.tr;
        g && this.Mv(a, g.qn, b, e)
    };
    c.prototype.fl = function(a, b, e) {
        var g = a.ca(),
            c, h, f, l, d = this.zb().Wb.Yc,
            r, k, q;
        if (g.ta)
            for (g.ta = !1, z(g.d), c = 0, l = a.d.length; c < l; c++) f = a.d[c], f.Ca(), r = f.k.Za(b, e, !0), k = f.k.Za(b, e, !1), f.Pb(r, k) ? g.d.push(f) : d && g.aa.push(f);
        else {
            h = 0;
            q = d ? g.aa : g.d;
            c = 0;
            for (l = q.length; c < l; c++) f = q[c], f.Ca(), r = f.k.Za(b, e, !0), k = f.k.Za(b, e, !1), f.Pb(r, k) && (d ? g.d.push(f) : (g.d[h] = g.d[c], h++));
            q.length = h
        }
        a.ld();
        return g.Cm()
    };
    c.prototype.fo = function(a, b) {
        if (!(a && b && a !== b && a.Ud && b.Ud)) return !1;
        a.Ca();
        b.Ca();
        var e = a.k,
            g = b.k,
            c, f, h, l, d, r, k, q;
        if (e === g || e.$c === g.$c && g.ad === g.ad && e.scale === g.scale && e.g === g.g && e.zd === g.zd) {
            if (!a.Qa.iw(b.Qa) || !a.sc.Pp(b.sc) || a.Pi && b.Pi) return !1;
            if (a.Pi) return this.yr(a, b);
            if (b.Pi) return this.yr(b, a);
            k = a.ua && !a.ua.vg();
            c = b.ua && !b.ua.vg();
            if (!k && !c) return !0;
            k ? (a.ua.gg(a.width, a.height, a.g), k = a.ua) : (this.ud.Xg(a.sc, a.x, a.y, a.width, a.height), k = this.ud);
            c ? (b.ua.gg(b.width, b.height, b.g), q = b.ua) : (this.ud.Xg(b.sc, b.x, b.y, b.width, b.height), q = this.ud);
            return k.Gh(q, b.x - a.x, b.y - a.y)
        }
        k = a.ua && !a.ua.vg();
        c = b.ua && !b.ua.vg();
        k ? (a.ua.gg(a.width, a.height, a.g), this.ud.kr(a.ua)) : this.ud.Xg(a.sc, a.x, a.y, a.width, a.height);
        k = this.ud;
        c ? (b.ua.gg(b.width, b.height, b.g), this.eo.kr(b.ua)) : this.eo.Xg(b.sc, b.x, b.y, b.width, b.height);
        q = this.eo;
        c = 0;
        for (f = k.sd; c < f; c++) h = 2 * c, l = h + 1, d = k.tb[h], r = k.tb[l], k.tb[h] = e.ac(d + a.x, r + a.y, !0), k.tb[l] = e.ac(d + a.x, r + a.y, !1);
        k.Ca();
        c = 0;
        for (f = q.sd; c < f; c++) h = 2 * c, l = h + 1, d = q.tb[h], r = q.tb[l], q.tb[h] = g.ac(d + b.x, r + b.y, !0), q.tb[l] = g.ac(d + b.x, r + b.y, !1);
        q.Ca();
        return k.Gh(q, 0, 0)
    };
    var N = new wa;
    new va(0, 0, 0, 0);
    var Z = [];
    c.prototype.yr = function(a, b) {
        var e, g, c, h, f = b.Qa,
            l = a.x,
            d = a.y;
        a.nz(f, Z);
        var r = b.ua && !b.ua.vg();
        e = 0;
        for (g = Z.length; e < g; ++e)
            if (c = Z[e], h = c.Cz, f.jw(h, l, d) && (N.Bi(h), N.offset(l, d), N.Pp(b.sc)))
                if (r)
                    if (b.ua.gg(b.width, b.height, b.g), c.In) {
                        if (c.In.Gh(b.ua, b.x - (l + h.left), b.y - (d + h.top))) return z(Z), !0
                    } else {
                        if (this.ud.Xg(N, 0, 0, h.right - h.left, h.bottom - h.top), this.ud.Gh(b.ua, b.x, b.y)) return z(Z), !0
                    } else if (c.In) {
            if (this.ud.Xg(b.sc, 0, 0, b.width, b.height), c.In.Gh(this.ud, -(l + h.left), -(d + h.top))) return z(Z), !0
        } else return z(Z), !0;
        z(Z);
        return !1
    };
    c.prototype.Gr = function(a, b) {
        if (!b) return !1;
        var e, g, c, h, f;
        e = 0;
        for (g = a.Ra.length; e < g; e++)
            if (a.Ra[e].behavior instanceof b) return !0;
        if (!a.I)
            for (e = 0, g = a.La.length; e < g; e++)
                for (f = a.La[e], c = 0, h = f.Ra.length; c < h; c++)
                    if (f.Ra[c].behavior instanceof b) return !0;
        return !1
    };
    c.prototype.no = function(a) {
        return this.Gr(a, hc.zy)
    };
    c.prototype.oo = function(a) {
        return this.Gr(a, hc.By)
    };
    var I = [];
    c.prototype.ah = function(a) {
        var b, e, g;
        a.Ca();
        this.Lv(a.k, a.Qa, I);
        b = 0;
        for (e = I.length; b < e; ++b)
            if (g = I[b], g.J.solidEnabled && this.fo(a, g)) return z(I), g;
        z(I);
        return null
    };
    c.prototype.ax = function(a) {
        var b = ha(void 0) ? 100 : void 0,
            e = 0,
            g = a.x,
            c = a.y,
            h = 0,
            f = 0,
            l = 0,
            d = this.ah(a);
        if (!d) return !0;
        for (; e <= b;) {
            switch (h) {
                case 0:
                    f = 0;
                    l = -1;
                    e++;
                    break;
                case 1:
                    f = 1;
                    l = -1;
                    break;
                case 2:
                    f = 1;
                    l = 0;
                    break;
                case 3:
                    l = f = 1;
                    break;
                case 4:
                    f = 0;
                    l = 1;
                    break;
                case 5:
                    f = -1;
                    l = 1;
                    break;
                case 6:
                    f = -1;
                    l = 0;
                    break;
                case 7:
                    l = f = -1
            }
            h = (h + 1) % 8;
            a.x = sa(g + f * e);
            a.y = sa(c + l * e);
            a.da();
            if (!this.fo(a, d) && (d = this.ah(a), !d)) return !0
        }
        a.x = g;
        a.y = c;
        a.da();
        return !1
    };
    c.prototype.Lk = function(a, b) {
        a.Ud && b.Ud && this.si.push([a, b])
    };
    c.prototype.$t = function(a, b) {
        var e, g, c;
        e = 0;
        for (g = this.si.length; e < g; e++)
            if (c = this.si[e], c[0] == a && c[1] == b || c[0] == b && c[1] == a) return !0;
        return !1
    };
    var A = -1;
    c.prototype.trigger = function(a, b, e) {
        if (!this.ya) return !1;
        var g = this.ya.sf;
        if (!g) return !1;
        var c = !1,
            h, f, l;
        A++;
        var d = g.am;
        f = 0;
        for (l = d.length; f < l; ++f) h = this.Dr(a, b, d[f], e), c = c || h;
        h = this.Dr(a, b, g, e);
        A--;
        return c || h
    };
    c.prototype.Dr = function(a, b, e, g) {
        var c = !1,
            h, f, l, d;
        if (b)
            for (l = this.ko(a, b, b.type.name, e, g), c = c || l, d = b.type.La, h = 0, f = d.length; h < f; ++h) l = this.ko(a, b, d[h].name, e, g), c = c || l;
        else l = this.ko(a, b, "system", e, g), c = c || l;
        return c
    };
    c.prototype.ko = function(a, b, e, g, c) {
        var h, f = !1,
            l = !1,
            l = "undefined" !== typeof c,
            d = (l ? g.rp : g.Er)[e];
        if (!d) return f;
        var r = null;
        g = 0;
        for (h = d.length; g < h; ++g)
            if (d[g].method == a) {
                r = d[g].vh;
                break
            }
        if (!r) return f;
        var k;
        l ? k = r[c] : k = r;
        if (!k) return null;
        g = 0;
        for (h = k.length; g < h; g++) a = k[g][0], c = k[g][1], l = this.qv(b, e, a, c), f = f || l;
        return f
    };
    c.prototype.qv = function(a, b, e, g) {
        var c, h, f = !1;
        this.lo++;
        var l = this.zb().Wb;
        l && this.oi(l.Ze);
        var d = 1 < this.lo;
        this.oi(e.Ze);
        d && this.$w();
        var r = this.Jk(e);
        r.Wb = e;
        a && (c = this.types[b].ca(), c.ta = !1, z(c.d), c.d[0] = a, this.types[b].ld());
        a = !0;
        if (e.parent) {
            b = r.xr;
            for (c = e.parent; c;) b.push(c), c = c.parent;
            b.reverse();
            c = 0;
            for (h = b.length; c < h; c++)
                if (!b[c].qx()) {
                    a = !1;
                    break
                }
        }
        a && (this.uf++, e.Yc ? e.ox(g) : e.ib(), f = f || r.Jf);
        this.Dk();
        d && this.Sw();
        this.Sf(e.Ze);
        l && this.Sf(l.Ze);
        this.Pe && 0 === this.Kc && 0 === A && !this.Qm && this.Nb();
        this.lo--;
        return f
    };
    c.prototype.tm = function() {
        var a = this.zb();
        return a.Wb.yb[a.xb]
    };
    c.prototype.Av = function() {
        var a = this.zb();
        return a.Wb.Oc[a.jc]
    };
    c.prototype.$w = function() {
        this.jk++;
        this.jk >= this.jn.length && this.jn.push([])
    };
    c.prototype.Sw = function() {
        this.jk--
    };
    c.prototype.Bp = function() {
        return this.jn[this.jk]
    };
    c.prototype.Jk = function(a) {
        this.Aj++;
        this.Aj >= this.im.length && this.im.push(new Ub);
        var b = this.zb();
        b.reset(a);
        return b
    };
    c.prototype.Dk = function() {
        this.Aj--
    };
    c.prototype.zb = function() {
        return this.im[this.Aj]
    };
    c.prototype.Cp = function(a, b) {
        for (var e, g, c, h, f, l; b;) {
            e = 0;
            for (g = b.fd.length; e < g; e++)
                if (l = b.fd[e], l instanceof Vb && nb(a, l.name)) return l;
            b = b.parent
        }
        e = 0;
        for (g = this.$d.length; e < g; e++)
            for (f = this.$d[e], c = 0, h = f.Me.length; c < h; c++)
                if (l = f.Me[c], l instanceof Vb && nb(a, l.name)) return l;
        return null
    };
    c.prototype.Dp = function(a) {
        var b, e;
        b = 0;
        for (e = this.qd.length; b < e; b++)
            if (this.qd[b].ea === a) return this.qd[b];
        return null
    };
    c.prototype.Sj = function(a) {
        var b, e;
        b = 0;
        for (e = this.q.length; b < e; b++)
            if (this.q[b].ea === a) return this.q[b];
        return null
    };
    c.prototype.Cv = function(a) {
        var b, e;
        b = 0;
        for (e = this.Ae.length; b < e; b++)
            if (this.Ae[b].ea === a) return this.Ae[b];
        return null
    };
    c.prototype.ju = function(a, b) {
        this.Fi = [a, b];
        this.pa = !0
    };
    c.prototype.aw = function() {
        var a = this,
            e = this.Un,
            g = this.fe,
            c = this.fk,
            h = !1;
        this.pr && (h = !0, e = "__c2_continuouspreview", this.pr = !1);
        if (e.length) {
            this.Nb();
            g = this.vx();
            if (b() && !this.vc) p(e, g, function() {
                ea("Saved state to IndexedDB storage (" + g.length + " bytes)");
                a.fe = g;
                a.trigger(M.prototype.e.Al, null);
                a.fe = "";
                h && f()
            }, function(b) {
                try {
                    localStorage.setItem("__c2save_" + e, g), ea("Saved state to WebStorage (" + g.length + " bytes)"), a.fe = g, a.trigger(M.prototype.e.Al, null), a.fe = "", h && f()
                } catch (c) {
                    ea("Failed to save game state: " + b + "; " + c), a.trigger(M.prototype.e.Ho, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + e, g), ea("Saved state to WebStorage (" + g.length + " bytes)"), a.fe = g, this.trigger(M.prototype.e.Al, null), a.fe = "", h && f()
            } catch (l) {
                ea("Error saving to WebStorage: " + l), a.trigger(M.prototype.e.Ho, null)
            }
            this.Ub = this.fk = this.Un = ""
        }
        if (c.length) {
            if (b() && !this.vc) m(c, function(b) {
                b ? (a.Ub = b, ea("Loaded state from IndexedDB storage (" + a.Ub.length + " bytes)")) : (a.Ub = localStorage.getItem("__c2save_" + c) || "", ea("Loaded state from WebStorage (" + a.Ub.length + " bytes)"));
                a.Ii = !1;
                a.Ub.length || a.trigger(M.prototype.e.yl, null)
            }, function() {
                a.Ub = localStorage.getItem("__c2save_" + c) || "";
                ea("Loaded state from WebStorage (" + a.Ub.length + " bytes)");
                a.Ii = !1;
                a.Ub.length || a.trigger(M.prototype.e.yl, null)
            });
            else {
                try {
                    this.Ub = localStorage.getItem("__c2save_" + c) || "", ea("Loaded state from WebStorage (" + this.Ub.length + " bytes)")
                } catch (d) {
                    this.Ub = ""
                }
                this.Ii = !1;
                a.Ub.length || a.trigger(M.prototype.e.yl, null)
            }
            this.Un = this.fk = ""
        }
        this.Ub.length && (this.Nb(), this.yw(this.Ub), this.fe = this.Ub, this.trigger(M.prototype.e.Js, null), this.Ub = this.fe = "")
    };
    c.prototype.vx = function() {
        var b, e, g, c, h, f, l, d = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.eb.N,
                walltime: this.ue.N,
                timescale: this.bf,
                tickcount: this.$e,
                execcount: this.uf,
                next_uid: this.fi,
                running_layout: this.ya.ea,
                start_time_offset: Date.now() - this.bl
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        b = 0;
        for (e = this.q.length; b < e; b++)
            if (h = this.q[b], !h.I && !this.no(h)) {
                f = {
                    instances: []
                };
                Va(h.J) && (f.ex = a(h.J));
                g = 0;
                for (c = h.d.length; g < c; g++) f.instances.push(this.Tn(h.d[g]));
                d.types[h.ea.toString()] = f
            }
        b = 0;
        for (e = this.qd.length; b < e; b++) g = this.qd[b], d.layouts[g.ea.toString()] = g.Fb();
        c = d.events.groups;
        b = 0;
        for (e = this.Ae.length; b < e; b++) g = this.Ae[b], c[g.ea.toString()] = this.qg[g.Ch].zf;
        e = d.events.cnds;
        for (l in this.He) this.He.hasOwnProperty(l) && (b = this.He[l], Va(b.J) && (e[l] = {
            ex: a(b.J)
        }));
        e = d.events.acts;
        for (l in this.ze) this.ze.hasOwnProperty(l) && (b = this.ze[l], Va(b.J) && (e[l] = {
            ex: a(b.J)
        }));
        e = d.events.vars;
        for (l in this.gh) this.gh.hasOwnProperty(l) && (b = this.gh[l], b.ak || b.parent && !b.Rh || (e[l] = b.data));
        d.system = this.Nd.Fb();
        return JSON.stringify(d)
    };
    c.prototype.Zq = function() {
        var a, b, e, g, c, h;
        this.ie = {};
        a = 0;
        for (b = this.q.length; a < b; a++)
            if (e = this.q[a], !e.I)
                for (g = 0, c = e.d.length; g < c; g++) h = e.d[g], this.ie[h.uid.toString()] = h
    };
    c.prototype.yw = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            this.Kh = !0;
            var b = a.rt;
            this.eb.reset();
            this.eb.N = b.time;
            this.ue.reset();
            this.ue.N = b.walltime || 0;
            this.bf = b.timescale;
            this.$e = b.tickcount;
            this.uf = b.execcount;
            this.bl = Date.now() - b.start_time_offset;
            var e = b.running_layout;
            if (e !== this.ya.ea)
                if (e = this.Dp(e)) this.np(e);
                else return;
            var g, c, h, f, l, d, r;
            d = a.types;
            for (c in d)
                if (d.hasOwnProperty(c) && (f = this.Sj(parseInt(c, 10))) && !f.I && !this.no(f)) {
                    d[c].ex ? f.J = d[c].ex : Wa(f.J);
                    l = f.d;
                    h = d[c].instances;
                    e = 0;
                    for (g = qa(l.length, h.length); e < g; e++) this.gk(l[e], h[e]);
                    e = h.length;
                    for (g = l.length; e < g; e++) this.we(l[e]);
                    e = l.length;
                    for (g = h.length; e < g; e++) {
                        l = null;
                        if (f.xa.Se && (l = this.ya.Qj(h[e].w.l), !l)) continue;
                        l = this.Je(f.Rc, l, !1, 0, 0, !0);
                        this.gk(l, h[e])
                    }
                    f.Zg = !0
                }
            this.Nb();
            this.Zq();
            g = a.layouts;
            for (c in g) g.hasOwnProperty(c) && (e = this.Dp(parseInt(c, 10))) && e.Tb(g[c]);
            g = a.events.groups;
            for (c in g) g.hasOwnProperty(c) && (e = this.Cv(parseInt(c, 10))) && this.qg[e.Ch] && this.qg[e.Ch].xi(g[c]);
            e = a.events.cnds;
            for (c in this.He) this.He.hasOwnProperty(c) && (e.hasOwnProperty(c) ? this.He[c].J = e[c].ex : this.He[c].J = {});
            e = a.events.acts;
            for (c in this.ze) this.ze.hasOwnProperty(c) && (e.hasOwnProperty(c) ? this.ze[c].J = e[c].ex : this.ze[c].J = {});
            e = a.events.vars;
            for (c in e) e.hasOwnProperty(c) && this.gh.hasOwnProperty(c) && (this.gh[c].data = e[c]);
            this.fi = b.next_uid;
            this.Kh = !1;
            e = 0;
            for (g = this.Ij.length; e < g; ++e) l = this.Ij[e], this.trigger(Object.getPrototypeOf(l.type.xa).e.bg, l);
            z(this.Ij);
            this.Nd.Tb(a.system);
            e = 0;
            for (g = this.q.length; e < g; e++)
                if (f = this.q[e], !f.I && !this.no(f))
                    for (c = 0, a = f.d.length; c < a; c++) {
                        l = f.d[c];
                        if (f.$b)
                            for (d = l.Bh(), z(l.siblings), b = 0, h = f.tc.length; b < h; b++) r = f.tc[b], f !== r && l.siblings.push(r.d[d]);
                        l.Qd && l.Qd();
                        if (l.H)
                            for (b = 0, h = l.H.length; b < h; b++) d = l.H[b], d.Qd && d.Qd()
                    }
                this.pa = !0
        }
    };
    c.prototype.Tn = function(b, e) {
        var g, c, h, f, l;
        f = b.type;
        h = f.xa;
        var d = {};
        e ? d.c2 = !0 : d.uid = b.uid;
        Va(b.J) && (d.ex = a(b.J));
        if (b.pb && b.pb.length)
            for (d.ivs = {}, g = 0, c = b.pb.length; g < c; g++) d.ivs[b.type.Km[g].toString()] = b.pb[g];
        if (h.Se) {
            h = {
                x: b.x,
                y: b.y,
                w: b.width,
                h: b.height,
                l: b.k.ea,
                zi: b.Uc()
            };
            0 !== b.g && (h.a = b.g);
            1 !== b.opacity && (h.o = b.opacity);.5 !== b.Yb && (h.hX = b.Yb);.5 !== b.Zb && (h.hY = b.Zb);
            0 !== b.Ob && (h.bm = b.Ob);
            b.visible || (h.v = b.visible);
            b.Ud || (h.ce = b.Ud); - 1 !== b.ei && (h.mts = b.ei);
            if (f.S.length)
                for (h.fx = [], g = 0, c = f.S.length; g < c; g++) l = f.S[g], h.fx.push({
                    name: l.name,
                    active: b.ye[l.index],
                    params: b.Ta[l.index]
                });
            d.w = h
        }
        if (b.H && b.H.length)
            for (d.behs = {}, g = 0, c = b.H.length; g < c; g++) f = b.H[g], f.Fb && (d.behs[f.type.ea.toString()] = f.Fb());
        b.Fb && (d.data = b.Fb());
        return d
    };
    c.prototype.Ev = function(a, b) {
        var e, g;
        e = 0;
        for (g = a.Km.length; e < g; e++)
            if (a.Km[e] === b) return e;
        return -1
    };
    c.prototype.zv = function(a, b) {
        var e, g;
        e = 0;
        for (g = a.H.length; e < g; e++)
            if (a.H[e].type.ea === b) return e;
        return -1
    };
    c.prototype.gk = function(a, b, e) {
        var g, c, h, f, l;
        l = a.type;
        f = l.xa;
        if (e) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.J = b.ex : Wa(a.J);
        if (c = b.ivs)
            for (g in c) c.hasOwnProperty(g) && (h = this.Ev(l, parseInt(g, 10)), 0 > h || h >= a.pb.length || (a.pb[h] = c[g]));
        if (f.Se) {
            h = b.w;
            a.k.ea !== h.l && (c = a.k, a.k = this.ya.Qj(h.l), a.k ? (c.Tg(a, !0), a.k.kh(a, !0), a.da(), a.k.Ai(0)) : (a.k = c, e || this.we(a)));
            a.x = h.x;
            a.y = h.y;
            a.width = h.w;
            a.height = h.h;
            a.yd = h.zi;
            a.g = h.hasOwnProperty("a") ? h.a : 0;
            a.opacity = h.hasOwnProperty("o") ? h.o : 1;
            a.Yb = h.hasOwnProperty("hX") ? h.hX : .5;
            a.Zb = h.hasOwnProperty("hY") ? h.hY : .5;
            a.visible = h.hasOwnProperty("v") ? h.v : !0;
            a.Ud = h.hasOwnProperty("ce") ? h.ce : !0;
            a.ei = h.hasOwnProperty("mts") ? h.mts : -1;
            a.Ob = h.hasOwnProperty("bm") ? h.bm : 0;
            a.nh = kb(a.Ob);
            this.C && lb(a, a.Ob, this.C);
            a.da();
            if (h.hasOwnProperty("fx"))
                for (e = 0, c = h.fx.length; e < c; e++) f = l.vm(h.fx[e].name), 0 > f || (a.ye[f] = h.fx[e].active, a.Ta[f] = h.fx[e].params);
            a.wd()
        }
        if (l = b.behs)
            for (g in l) l.hasOwnProperty(g) && (e = this.zv(a, parseInt(g, 10)), 0 > e || a.H[e].Tb(l[g]));
        b.data && a.Tb(b.data)
    };
    c.prototype.sp = function(a, b, e) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, e)
        }, e)
    };
    c.prototype.up = function(a, b) {
        this.sp("data.js", function(e) {
            var g = new FileReader;
            g.onload = function(b) {
                a(b.target.result)
            };
            g.onerror = b;
            g.readAsText(e)
        }, b)
    };
    var O = [],
        Q = 0;
    c.prototype.ln = function() {
        if (O.length && !(8 <= Q)) {
            Q++;
            var a = O.shift();
            this.lu(a.filename, a.Ix, a.Ku)
        }
    };
    c.prototype.tp = function(a, b, e) {
        var g = this;
        O.push({
            filename: a,
            Ix: function(a) {
                Q--;
                g.ln();
                b(a)
            },
            Ku: function(a) {
                Q--;
                g.ln();
                e(a)
            }
        });
        this.ln()
    };
    c.prototype.lu = function(a, b, e) {
        this.sp(a, function(a) {
            var e = new FileReader;
            e.onload = function(a) {
                b(a.target.result)
            };
            e.readAsArrayBuffer(a)
        }, e)
    };
    c.prototype.sv = function(a, b, e) {
        this.tp(a, function(a) {
            a = URL.createObjectURL(new Blob([a]));
            b(a)
        }, e)
    };
    c.prototype.kw = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    c.prototype.gr = function(a, b) {
        this.Ph && !this.kw(b) ? this.sv(b, function(b) {
            a.src = b
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = b
    };
    c.prototype.Rk = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b : (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    Wb = function(a) {
        return new c(document.getElementById(a))
    };
    Xb = function(a, b) {
        return new c({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Wb;
    window.cr_createDCRuntime = Xb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Ll = !0;
        document.body.appendChild(a);
        a = new c(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new c(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var c = document.getElementById("c2canvas");
    return c ? c.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(c, d) {
    var b = window.cr_getC2Runtime();
    b && b.ju(c, d)
};
window.cr_sizeCanvas = function(c, d) {
    if (0 !== c && 0 !== d) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(c, d)
    }
};
window.cr_setSuspended = function(c) {
    var d = window.cr_getC2Runtime();
    d && d.setSuspended(c)
};
(function() {
    function c(a, b) {
        this.b = a;
        this.sf = null;
        this.scrollX = this.b.sb / 2;
        this.scrollY = this.b.rb / 2;
        this.scale = 1;
        this.g = 0;
        this.mg = !0;
        this.name = b[0];
        this.Pw = b[1];
        this.Ow = b[2];
        this.width = b[1];
        this.height = b[2];
        this.Hr = b[3];
        this.nr = b[4];
        this.ea = b[5];
        var c = b[6],
            f, d;
        this.V = [];
        this.Fh = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var k = new Yb(this, c[f]);
            k.Dq = f;
            this.V.push(k)
        }
        c = b[7];
        this.Ef = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var k = c[f],
                n = this.b.q[k[1]];
            n.Rc || (n.Rc = k);
            this.Ef.push(k); - 1 === this.Fh.indexOf(n) && this.Fh.push(n)
        }
        this.S = [];
        this.qa = [];
        this.oe = !0;
        this.Ta = [];
        f = 0;
        for (d = b[8].length; f < d; f++) this.S.push({
            id: b[8][f][0],
            name: b[8][f][1],
            jb: -1,
            bd: !1,
            Pa: !0,
            index: f
        }), this.Ta.push(b[8][f][2].slice(0));
        this.wd();
        this.ri = new va(0, 0, 1, 1);
        this.Mn = new va(0, 0, 1, 1);
        this.Xe = {}
    }

    function d(a, b) {
        return a.yd - b.yd
    }

    function b(a, b) {
        this.fb = a;
        this.b = a.b;
        this.d = [];
        this.scale = 1;
        this.g = 0;
        this.Yd = !1;
        this.re = new va(0, 0, 0, 0);
        this.Cr = new wa;
        this.Da = this.Aa = this.Ea = this.za = 0;
        this.Zf = !1;
        this.ve = -1;
        this.Ul = 0;
        this.name = b[0];
        this.index = b[1];
        this.ea = b[2];
        this.visible = b[3];
        this.md = b[4];
        this.vd = b[5];
        this.$c = b[6];
        this.ad = b[7];
        this.opacity = b[8];
        this.Kj = b[9];
        this.Nc = b[10];
        this.zd = b[11];
        this.Ob = b[12];
        this.Gu = b[13];
        this.nh = "source-over";
        this.Qb = this.Vb = 0;
        this.Mb = null;
        this.ge = k();
        this.td = !0;
        this.Eg = new va(0, 0, -1, -1);
        this.Hb = new va(0, 0, -1, -1);
        this.Nc && (this.Mb = new jb(this.b.sb, this.b.rb));
        this.Ld = !1;
        var c = b[14],
            f, d;
        this.ur = [];
        this.Jc = [];
        this.qh = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var q = c[f],
                n = this.b.q[q[1]];
            n.Rc || (n.Rc = q, n.gu = this.index);
            this.Jc.push(q); - 1 === this.fb.Fh.indexOf(n) && this.fb.Fh.push(n)
        }
        Ca(this.ur, this.Jc);
        this.S = [];
        this.qa = [];
        this.oe = !0;
        this.Ta = [];
        f = 0;
        for (d = b[15].length; f < d; f++) this.S.push({
            id: b[15][f][0],
            name: b[15][f][1],
            jb: -1,
            bd: !1,
            Pa: !0,
            index: f
        }), this.Ta.push(b[15][f][2].slice(0));
        this.wd();
        this.ri = new va(0, 0, 1, 1);
        this.Mn = new va(0, 0, 1, 1)
    }

    function k() {
        return a.length ? a.pop() : []
    }

    function p(b) {
        z(b);
        a.push(b)
    }
    c.prototype.ux = function(a) {
        var b = a.type.ea.toString();
        this.Xe.hasOwnProperty(b) || (this.Xe[b] = []);
        this.Xe[b].push(this.b.Tn(a))
    };
    c.prototype.Hp = function() {
        var a = this.V[0];
        return !a.vd && 1 === a.opacity && !a.Kj && a.visible
    };
    c.prototype.wd = function() {
        z(this.qa);
        this.oe = !0;
        var a, b, c;
        a = 0;
        for (b = this.S.length; a < b; a++) c = this.S[a], c.Pa && (this.qa.push(c), c.bd || (this.oe = !1))
    };
    c.prototype.um = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.S.length; b < c; b++)
            if (f = this.S[b], f.name === a) return f;
        return null
    };
    var m = [],
        f = !0;
    c.prototype.bo = function() {
        this.nr && (this.sf = this.b.jm[this.nr], this.sf.po());
        this.b.ya = this;
        this.width = this.Pw;
        this.height = this.Ow;
        this.scrollX = this.b.sb / 2;
        this.scrollY = this.b.rb / 2;
        var a, b, c, l, k, q, n;
        a = 0;
        for (c = this.b.q.length; a < c; a++)
            if (b = this.b.q[a], !b.I)
                for (k = b.d, b = 0, l = k.length; b < l; b++)
                    if (q = k[b], q.k) {
                        var g = q.k.Dq;
                        g >= this.V.length && (g = this.V.length - 1);
                        q.k = this.V[g]; - 1 === q.k.d.indexOf(q) && q.k.d.push(q);
                        q.k.Zf = !0
                    }
        if (!f)
            for (a = 0, c = this.V.length; a < c; ++a) this.V[a].d.sort(d);
        z(m);
        this.Vt();
        a = 0;
        for (c = this.V.length; a < c; a++) q = this.V[a], q.eu(), q.ql();
        k = !1;
        if (!this.mg) {
            for (n in this.Xe)
                if (this.Xe.hasOwnProperty(n) && (b = this.b.Sj(parseInt(n, 10))) && !b.I && this.b.oo(b)) {
                    l = this.Xe[n];
                    a = 0;
                    for (c = l.length; a < c; a++) {
                        q = null;
                        if (b.xa.Se && (q = this.Qj(l[a].w.l), !q)) continue;
                        q = this.b.Je(b.Rc, q, !1, 0, 0, !0);
                        this.b.gk(q, l[a]);
                        k = !0;
                        m.push(q)
                    }
                    z(l)
                }
            a = 0;
            for (c = this.V.length; a < c; a++) this.V[a].d.sort(d), this.V[a].Zf = !0
        }
        k && (this.b.Nb(), this.b.Zq());
        for (a = 0; a < m.length; a++)
            if (q = m[a], q.type.$b)
                for (c = q.Bh(), b = 0, l = q.type.tc.length; b < l; b++) n = q.type.tc[b], q.type !== n && (n.d.length > c ? q.siblings.push(n.d[c]) : n.Rc && (k = this.b.Je(n.Rc, q.k, !0, q.x, q.y, !0), this.b.Nb(), n.ol(), q.siblings.push(k), m.push(k)));
        a = 0;
        for (c = this.Ef.length; a < c; a++) this.b.Je(this.Ef[a], null, !0);
        this.b.jf = null;
        this.b.Nb();
        if (this.b.Ka && !this.b.Ia)
            for (a = 0, c = this.b.q.length; a < c; a++) n = this.b.q[a], !n.I && n.d.length && n.Gk && n.Gk(this.b.Ka);
        if (this.b.Kh) Ca(this.b.Ij, m);
        else
            for (a = 0, c = m.length; a < c; a++) q = m[a], this.b.trigger(Object.getPrototypeOf(q.type.xa).e.bg, q);
        z(m);
        this.b.Kh || this.b.trigger(M.prototype.e.Do, null);
        this.mg = !1
    };
    c.prototype.du = function() {
        var a, b, c, f, d;
        b = a = 0;
        for (c = this.Ef.length; a < c; a++) f = this.Ef[a], d = this.b.q[f[1]], d.global ? d.$b || this.b.Je(f, null, !0) : (this.Ef[b] = f, b++);
        Ba(this.Ef, b)
    };
    c.prototype.Gx = function() {
        this.b.Kh || this.b.trigger(M.prototype.e.Is, null);
        this.b.Nm = !0;
        z(this.b.Nd.qc);
        var a, b, c, l, d, k;
        if (!this.mg)
            for (a = 0, b = this.V.length; a < b; a++)
                for (this.V[a].so(), d = this.V[a].d, c = 0, l = d.length; c < l; c++) k = d[c], k.type.global || this.b.oo(k.type) && this.ux(k);
        a = 0;
        for (b = this.V.length; a < b; a++) {
            d = this.V[a].d;
            c = 0;
            for (l = d.length; c < l; c++) k = d[c], k.type.global || this.b.we(k);
            this.b.Nb();
            z(d);
            this.V[a].Zf = !0
        }
        a = 0;
        for (b = this.b.q.length; a < b; a++)
            if (d = this.b.q[a], !(d.global || d.xa.Se || d.xa.al || d.I)) {
                c = 0;
                for (l = d.d.length; c < l; c++) this.b.we(d.d[c]);
                this.b.Nb()
            }
        f = !1;
        this.b.Nm = !1
    };
    new va(0, 0, 0, 0);
    c.prototype.Zd = function(a) {
        var b, c = a,
            f = !1,
            d = !this.b.Gc;
        d && (this.b.ek || (this.b.ek = document.createElement("canvas"), b = this.b.ek, b.width = this.b.L, b.height = this.b.K, this.b.bq = b.getContext("2d"), f = !0), b = this.b.ek, c = this.b.bq, b.width !== this.b.L && (b.width = this.b.L, f = !0), b.height !== this.b.K && (b.height = this.b.K, f = !0), f && this.b.Rk(c, this.b.Ja));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.b.Fl && !this.Hp() && c.clearRect(0, 0, this.b.L, this.b.K);
        var k, n, f = 0;
        for (k = this.V.length; f < k; f++) n = this.V[f], n.visible && 0 < n.opacity && 11 !== n.Ob && (n.d.length || !n.vd) ? n.Zd(c) : n.ql();
        d && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    c.prototype.nf = function(a) {
        a.fr(!0);
        this.b.gb || (this.b.gb = a.Qc(this.b.L, this.b.K, this.b.Ja));
        if (this.b.gb.hf !== this.b.L || this.b.gb.gf !== this.b.K) a.deleteTexture(this.b.gb), this.b.gb = a.Qc(this.b.L, this.b.K, this.b.Ja);
        a.dd(this.b.gb);
        this.b.Gc || a.Uf(this.b.L, this.b.K);
        var b, c;
        for (b = this.V.length - 1; 0 <= b; --b) c = this.V[b], c.visible && 1 === c.opacity && c.oe && 0 === c.Ob && (c.d.length || !c.vd) ? c.nf(a) : c.ql();
        a.fr(!1)
    };
    c.prototype.uc = function(a) {
        var b = 0 < this.qa.length || this.b.eh || !this.b.Gc || this.b.Ga;
        if (b) {
            this.b.gb || (this.b.gb = a.Qc(this.b.L, this.b.K, this.b.Ja));
            if (this.b.gb.hf !== this.b.L || this.b.gb.gf !== this.b.K) a.deleteTexture(this.b.gb), this.b.gb = a.Qc(this.b.L, this.b.K, this.b.Ja);
            a.dd(this.b.gb);
            this.b.Gc || a.Uf(this.b.L, this.b.K)
        } else this.b.gb && (a.dd(null), a.deleteTexture(this.b.gb), this.b.gb = null);
        this.b.Fl && !this.Hp() && a.clear(0, 0, 0, 0);
        var c, f, d;
        c = 0;
        for (f = this.V.length; c < f; c++) d = this.V[c], d.visible && 0 < d.opacity && (d.d.length || !d.vd) ? d.uc(a) : d.ql();
        b && (0 === this.qa.length || 1 === this.qa.length && this.b.Gc ? (1 === this.qa.length ? (b = this.qa[0].index, a.pc(this.qa[0].jb), a.Wg(null, 1 / this.b.L, 1 / this.b.K, 0, 0, 1, 1, this.scale, this.g, 0, 0, this.b.L / 2, this.b.K / 2, this.b.eb.N, this.Ta[b]), a.Hk(this.qa[0].jb) && (this.b.pa = !0)) : a.pc(0), this.b.Gc || a.Uf(this.b.width, this.b.height), a.dd(null), a.er(!1), a.Tf(1), a.Cc(this.b.gb), a.cr(), a.Md(), a.xd(), b = this.b.width / 2, c = this.b.height / 2, a.pi(-b, c, b, c, b, -c, -b, -c), a.Cc(null), a.er(!0)) : this.Nn(a, null, null, null))
    };
    c.prototype.Ah = function() {
        return 0 < this.qa.length || this.b.eh || !this.b.Gc || this.b.Ga ? this.b.gb : null
    };
    c.prototype.Ep = function() {
        var a = this.V[0].Tc(),
            b, c, f;
        b = 1;
        for (c = this.V.length; b < c; b++) f = this.V[b], (0 !== f.$c || 0 !== f.ad) && f.Tc() < a && (a = f.Tc());
        return a
    };
    c.prototype.Vn = function(a) {
        if (!this.Hr) {
            var b = 1 / this.Ep() * this.b.L / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.pa = !0)
    };
    c.prototype.Wn = function(a) {
        if (!this.Hr) {
            var b = 1 / this.Ep() * this.b.K / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.pa = !0)
    };
    c.prototype.Vt = function() {
        this.Vn(this.scrollX);
        this.Wn(this.scrollY)
    };
    c.prototype.Nn = function(a, b, c, f) {
        var d = c ? c.qa : b ? b.qa : this.qa,
            k = 1,
            n = 0,
            g = 0,
            r = 0,
            p = this.b.L,
            m = this.b.K;
        c ? (k = c.k.Tc(), n = c.k.Jb(), g = c.k.za, r = c.k.Aa, p = c.k.Ea, m = c.k.Da) : b && (k = b.Tc(), n = b.Jb(), g = b.za, r = b.Aa, p = b.Ea, m = b.Da);
        var y = this.b.om,
            C, t, D, K, N = 0,
            Z = 1,
            I, A, O = this.b.L,
            Q = this.b.K,
            x = O / 2,
            v = Q / 2,
            u = b ? b.ri : this.ri,
            F = b ? b.Mn : this.Mn,
            E = 0,
            S = 0,
            G = 0,
            R = 0,
            T = O,
            fa = O,
            U = Q,
            pa = Q,
            oa = D = 0;
        K = c ? c.k.Jb() : 0;
        if (c) {
            C = 0;
            for (t = d.length; C < t; C++) D += a.Iv(d[C].jb), oa += a.Jv(d[C].jb);
            R = c.Qa;
            E = b.ac(R.left, R.top, !0, !0);
            G = b.ac(R.left, R.top, !1, !0);
            T = b.ac(R.right, R.bottom, !0, !0);
            U = b.ac(R.right, R.bottom, !1, !0);
            0 !== K && (C = b.ac(R.right, R.top, !0, !0), t = b.ac(R.right, R.top, !1, !0), S = b.ac(R.left, R.bottom, !0, !0), R = b.ac(R.left, R.bottom, !1, !0), K = Math.min(E, T, C, S), T = Math.max(E, T, C, S), E = K, K = Math.min(G, U, t, R), U = Math.max(G, U, t, R), G = K);
            E -= D;
            G -= oa;
            T += D;
            U += oa;
            F.left = E / O;
            F.top = 1 - G / Q;
            F.right = T / O;
            F.bottom = 1 - U / Q;
            S = E = sa(E);
            R = G = sa(G);
            fa = T = ta(T);
            pa = U = ta(U);
            S -= D;
            R -= oa;
            fa += D;
            pa += oa;
            0 > E && (E = 0);
            0 > G && (G = 0);
            T > O && (T = O);
            U > Q && (U = Q);
            0 > S && (S = 0);
            0 > R && (R = 0);
            fa > O && (fa = O);
            pa > Q && (pa = Q);
            u.left = E / O;
            u.top = 1 - G / Q;
            u.right = T / O;
            u.bottom = 1 - U / Q
        } else u.left = F.left = 0, u.top = F.top = 0, u.right = F.right = 1, u.bottom = F.bottom = 1;
        oa = c && (a.ni(d[0].jb) || 0 !== D || 0 !== oa || 1 !== c.opacity || c.type.xa.zq) || b && !c && 1 !== b.opacity;
        a.cr();
        if (oa) {
            y[N] || (y[N] = a.Qc(O, Q, this.b.Ja));
            if (y[N].hf !== O || y[N].gf !== Q) a.deleteTexture(y[N]), y[N] = a.Qc(O, Q, this.b.Ja);
            a.pc(0);
            a.dd(y[N]);
            A = pa - R;
            a.clearRect(S, Q - R - A, fa - S, A);
            c ? c.uc(a) : (a.Cc(this.b.qb), a.Tf(b.opacity), a.Md(), a.translate(-x, -v), a.xd(), a.Kd(E, U, T, U, T, G, E, G, u));
            F.left = F.top = 0;
            F.right = F.bottom = 1;
            c && (K = u.top, u.top = u.bottom, u.bottom = K);
            N = 1;
            Z = 0
        }
        a.Tf(1);
        D = d.length - 1;
        var Na = a.Kn(d[D].jb) || !b && !c && !this.b.Gc;
        C = K = 0;
        for (t = d.length; C < t; C++) {
            y[N] || (y[N] = a.Qc(O, Q, this.b.Ja));
            if (y[N].hf !== O || y[N].gf !== Q) a.deleteTexture(y[N]), y[N] = a.Qc(O, Q, this.b.Ja);
            a.pc(d[C].jb);
            K = d[C].index;
            a.Hk(d[C].jb) && (this.b.pa = !0);
            0 != C || oa ? (a.Wg(f, 1 / O, 1 / Q, F.left, F.top, F.right, F.bottom, k, n, g, r, (g + p) / 2, (r + m) / 2, this.b.eb.N, c ? c.Ta[K] : b ? b.Ta[K] : this.Ta[K]), a.Cc(null), C !== D || Na ? (a.dd(y[N]), A = pa - R, I = Q - R - A, a.clearRect(S, I, fa - S, A)) : (c ? a.Ye(c.Vb, c.Qb) : b && a.Ye(b.Vb, b.Qb), a.dd(f)), a.Cc(y[Z]), a.Md(), a.translate(-x, -v), a.xd(), a.Kd(E, U, T, U, T, G, E, G, u), C !== D || Na || a.Cc(null)) : (a.dd(y[N]), A = pa - R, I = Q - R - A, a.clearRect(S, I, fa - S, A), c ? (c.Sa && c.Sa.G ? (I = c.Sa.G, Z = 1 / I.width, I = 1 / I.height) : (Z = 1 / c.width, I = 1 / c.height), a.Wg(f, Z, I, F.left, F.top, F.right, F.bottom, k, n, g, r, (g + p) / 2, (r + m) / 2, this.b.eb.N, c.Ta[K]), c.uc(a)) : (a.Wg(f, 1 / O, 1 / Q, 0, 0, 1, 1, k, n, g, r, (g + p) / 2, (r + m) / 2, this.b.eb.N, b ? b.Ta[K] : this.Ta[K]), a.Cc(b ? this.b.qb : this.b.gb), a.Md(), a.translate(-x, -v), a.xd(), a.Kd(E, U, T, U, T, G, E, G, u)), F.left = F.top = 0, F.right = F.bottom = 1, c && !Na && (K = U, U = G, G = K));
            N = 0 === N ? 1 : 0;
            Z = 0 === N ? 1 : 0
        }
        Na && (a.pc(0), c ? a.Ye(c.Vb, c.Qb) : b ? a.Ye(b.Vb, b.Qb) : this.b.Gc || (a.Uf(this.b.width, this.b.height), x = this.b.width / 2, v = this.b.height / 2, G = E = 0, T = this.b.width, U = this.b.height), a.dd(f), a.Cc(y[Z]), a.Md(), a.translate(-x, -v), a.xd(), c && 1 === d.length && !oa ? a.Kd(E, G, T, G, T, U, E, U, u) : a.Kd(E, U, T, U, T, G, E, G, u), a.Cc(null))
    };
    c.prototype.Qj = function(a) {
        var b, c;
        b = 0;
        for (c = this.V.length; b < c; b++)
            if (this.V[b].ea === a) return this.V[b];
        return null
    };
    c.prototype.Fb = function() {
        var a, b, c, f = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.g,
            w: this.width,
            h: this.height,
            fv: this.mg,
            persist: this.Xe,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.S.length; a < b; a++) c = this.S[a], f.fx.push({
            name: c.name,
            active: c.Pa,
            params: this.Ta[c.index]
        });
        a = 0;
        for (b = this.V.length; a < b; a++) c = this.V[a], f.layers[c.ea.toString()] = c.Fb();
        return f
    };
    c.prototype.Tb = function(a) {
        var b, c, f, d;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.g = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Xe = a.persist;
        "undefined" !== typeof a.fv && (this.mg = a.fv);
        var k = a.fx;
        b = 0;
        for (c = k.length; b < c; b++)
            if (f = this.um(k[b].name)) f.Pa = k[b].active, this.Ta[f.index] = k[b].params;
        this.wd();
        b = a.layers;
        for (d in b) b.hasOwnProperty(d) && (a = this.Qj(parseInt(d, 10))) && a.Tb(b[d])
    };
    Ib = c;
    b.prototype.wd = function() {
        z(this.qa);
        this.oe = !0;
        var a, b, c;
        a = 0;
        for (b = this.S.length; a < b; a++) c = this.S[a], c.Pa && (this.qa.push(c), c.bd || (this.oe = !1))
    };
    b.prototype.um = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.S.length; b < c; b++)
            if (f = this.S[b], f.name === a) return f;
        return null
    };
    b.prototype.eu = function() {
        var a, b, c, f, d, k;
        b = a = 0;
        for (c = this.Jc.length; a < c; a++) {
            f = this.Jc[a];
            d = this.b.q[f[1]];
            k = this.b.oo(d);
            d = !0;
            if (!k || this.fb.mg) {
                f = this.b.Je(f, this, !0);
                if (!f) continue;
                m.push(f);
                f.type.global && (d = !1, this.qh.push(f.uid))
            }
            d && (this.Jc[b] = this.Jc[a], b++)
        }
        this.Jc.length = b;
        this.b.Nb();
        !this.b.A && this.S.length && (this.Ob = this.Gu);
        this.nh = kb(this.Ob);
        this.b.C && lb(this, this.Ob, this.b.C);
        this.td = !0
    };
    b.prototype.Tg = function(a, b) {
        var c = Ea(this.d, a);
        0 > c || (b && this.Nc && a.lc && a.lc.right >= a.lc.left && (a.Ca(), this.Mb.update(a, a.lc, null), a.lc.set(0, 0, -1, -1)), c === this.d.length - 1 ? this.d.pop() : (Aa(this.d, c), this.Ai(c)), this.td = !0)
    };
    b.prototype.kh = function(a, b) {
        a.yd = this.d.length;
        this.d.push(a);
        b && this.Nc && a.lc && a.da();
        this.td = !0
    };
    b.prototype.Xw = function(a) {
        this.d.unshift(a);
        this.Ai(0)
    };
    b.prototype.Dw = function(a, b, c) {
        var f = a.Uc();
        b = b.Uc();
        Aa(this.d, f);
        f < b && b--;
        c && b++;
        b === this.d.length ? this.d.push(a) : this.d.splice(b, 0, a);
        this.Ai(f < b ? f : b)
    };
    b.prototype.Ai = function(a) {
        -1 === this.ve ? this.ve = a : a < this.ve && (this.ve = a);
        this.td = this.Zf = !0
    };
    b.prototype.so = function() {
        if (this.Zf) {
            -1 === this.ve && (this.ve = 0);
            var a, b, c;
            if (this.Nc)
                for (a = this.ve, b = this.d.length; a < b; ++a) c = this.d[a], c.yd = a, this.Mb.Aw(c.lc);
            else
                for (a = this.ve, b = this.d.length; a < b; ++a) this.d[a].yd = a;
            this.Zf = !1;
            this.ve = -1
        }
    };
    b.prototype.Tc = function(a) {
        return this.Fv() * (this.b.Gc || a ? this.b.mh : 1)
    };
    b.prototype.Fv = function() {
        return (this.scale * this.fb.scale - 1) * this.zd + 1
    };
    b.prototype.Jb = function() {
        return this.Yd ? 0 : Ja(this.fb.g + this.g)
    };
    var a = [],
        n = [],
        t = [];
    b.prototype.ym = function() {
        this.so();
        this.Mb.Kk(this.za, this.Aa, this.Ea, this.Da, t);
        if (!t.length) return k();
        if (1 === t.length) {
            var a = k();
            Ca(a, t[0]);
            z(t);
            return a
        }
        for (var b = !0; 1 < t.length;) {
            for (var a = t, c = void 0, f = void 0, d = void 0, q = void 0, m = void 0, c = 0, f = a.length; c < f - 1; c += 2) {
                var d = a[c],
                    q = a[c + 1],
                    m = k(),
                    g = d,
                    r = q,
                    P = m,
                    Y = 0,
                    y = 0,
                    C = 0,
                    H = g.length,
                    D = r.length,
                    K = void 0,
                    N = void 0;
                for (P.length = H + D; Y < H && y < D; ++C) K = g[Y], N = r[y], K.yd < N.yd ? (P[C] = K, ++Y) : (P[C] = N, ++y);
                for (; Y < H; ++Y, ++C) P[C] = g[Y];
                for (; y < D; ++y, ++C) P[C] = r[y];
                b || (p(d), p(q));
                n.push(m)
            }
            1 === f % 2 && (b ? (d = k(), Ca(d, a[f - 1]), n.push(d)) : n.push(a[f - 1]));
            Ca(a, n);
            z(n);
            b = !1
        }
        a = t[0];
        z(t);
        return a
    };
    b.prototype.Zd = function(a) {
        this.Ld = this.Kj || 1 !== this.opacity || 0 !== this.Ob;
        var b = this.b.canvas,
            c = a,
            f = !1;
        this.Ld && (this.b.dk || (this.b.dk = document.createElement("canvas"), b = this.b.dk, b.width = this.b.L, b.height = this.b.K, this.b.aq = b.getContext("2d"), f = !0), b = this.b.dk, c = this.b.aq, b.width !== this.b.L && (b.width = this.b.L, f = !0), b.height !== this.b.K && (b.height = this.b.K, f = !0), f && this.b.Rk(c, this.b.Ja), this.vd && c.clearRect(0, 0, this.b.L, this.b.K));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.vd || (c.fillStyle = "rgb(" + this.md[0] + "," + this.md[1] + "," + this.md[2] + ")", c.fillRect(0, 0, this.b.L, this.b.K));
        c.save();
        this.Yd = !0;
        var f = this.Za(0, 0, !0, !0),
            d = this.Za(0, 0, !1, !0);
        this.Yd = !1;
        this.b.rd && (f = Math.round(f), d = Math.round(d));
        this.Nk(f, d, c);
        var k = this.Tc();
        c.scale(k, k);
        c.translate(-f, -d);
        this.Nc ? (this.Hb.left = this.Mb.gc(this.za), this.Hb.top = this.Mb.hc(this.Aa), this.Hb.right = this.Mb.gc(this.Ea), this.Hb.bottom = this.Mb.hc(this.Da), this.td || !this.Hb.uh(this.Eg) ? (p(this.ge), f = this.ym(), this.td = !1, this.Eg.oh(this.Hb)) : f = this.ge) : f = this.d;
        for (var n, g = null, d = 0, k = f.length; d < k; ++d) n = f[d], n !== g && (this.Bu(n, c), g = n);
        this.Nc && (this.ge = f);
        c.restore();
        this.Ld && (a.globalCompositeOperation = this.nh, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    b.prototype.Bu = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ca();
            var c = a.Qa;
            c.right < this.za || c.bottom < this.Aa || c.left > this.Ea || c.top > this.Da || (b.globalCompositeOperation = a.nh, a.Zd(b))
        }
    };
    b.prototype.ql = function() {
        this.Yd = !0;
        var a = this.Za(0, 0, !0, !0),
            b = this.Za(0, 0, !1, !0);
        this.Yd = !1;
        this.b.rd && (a = Math.round(a), b = Math.round(b));
        this.Nk(a, b, null)
    };
    b.prototype.Nk = function(a, b, c) {
        var f = this.Tc();
        this.za = a;
        this.Aa = b;
        this.Ea = a + 1 / f * this.b.L;
        this.Da = b + 1 / f * this.b.K;
        this.za > this.Ea && (a = this.za, this.za = this.Ea, this.Ea = a);
        this.Aa > this.Da && (a = this.Aa, this.Aa = this.Da, this.Da = a);
        a = this.Jb();
        0 !== a && (c && (c.translate(this.b.L / 2, this.b.K / 2), c.rotate(-a), c.translate(this.b.L / -2, this.b.K / -2)), this.re.set(this.za, this.Aa, this.Ea, this.Da), this.re.offset((this.za + this.Ea) / -2, (this.Aa + this.Da) / -2), this.Cr.lr(this.re, a), this.Cr.bp(this.re), this.re.offset((this.za + this.Ea) / 2, (this.Aa + this.Da) / 2), this.za = this.re.left, this.Aa = this.re.top, this.Ea = this.re.right, this.Da = this.re.bottom)
    };
    b.prototype.nf = function(a) {
        if (this.Ld = this.Kj) {
            this.b.qb || (this.b.qb = a.Qc(this.b.L, this.b.K, this.b.Ja));
            if (this.b.qb.hf !== this.b.L || this.b.qb.gf !== this.b.K) a.deleteTexture(this.b.qb), this.b.qb = a.Qc(this.b.L, this.b.K, this.b.Ja);
            a.dd(this.b.qb)
        }
        this.Yd = !0;
        var b = this.Za(0, 0, !0, !0),
            c = this.Za(0, 0, !1, !0);
        this.Yd = !1;
        this.b.rd && (b = Math.round(b), c = Math.round(c));
        this.Nk(b, c, null);
        b = this.Tc();
        a.Md();
        a.scale(b, b);
        a.Qn(-this.Jb());
        a.translate((this.za + this.Ea) / -2, (this.Aa + this.Da) / -2);
        a.xd();
        this.Nc ? (this.Hb.left = this.Mb.gc(this.za), this.Hb.top = this.Mb.hc(this.Aa), this.Hb.right = this.Mb.gc(this.Ea), this.Hb.bottom = this.Mb.hc(this.Da), this.td || !this.Hb.uh(this.Eg) ? (p(this.ge), b = this.ym(), this.td = !1, this.Eg.oh(this.Hb)) : b = this.ge) : b = this.d;
        for (var f, d = null, c = b.length - 1; 0 <= c; --c) f = b[c], f !== d && (this.Du(b[c], a), d = f);
        this.Nc && (this.ge = b);
        this.vd || (this.Ul = this.b.pf++, a.Sk(this.Ul), a.dr(1, 1, 1), a.xp(), a.ix())
    };
    b.prototype.uc = function(a) {
        var b = 0,
            c = 0;
        if (this.Ld = this.Kj || 1 !== this.opacity || 0 < this.qa.length || 0 !== this.Ob) {
            this.b.qb || (this.b.qb = a.Qc(this.b.L, this.b.K, this.b.Ja));
            if (this.b.qb.hf !== this.b.L || this.b.qb.gf !== this.b.K) a.deleteTexture(this.b.qb), this.b.qb = a.Qc(this.b.L, this.b.K, this.b.Ja);
            a.dd(this.b.qb);
            this.vd && a.clear(0, 0, 0, 0)
        }
        this.vd || (this.b.Ga ? (a.Sk(this.Ul), a.dr(this.md[0] / 255, this.md[1] / 255, this.md[2] / 255), a.xp(), a.Bx()) : a.clear(this.md[0] / 255, this.md[1] / 255, this.md[2] / 255, 1));
        this.Yd = !0;
        var f = this.Za(0, 0, !0, !0),
            b = this.Za(0, 0, !1, !0);
        this.Yd = !1;
        this.b.rd && (f = Math.round(f), b = Math.round(b));
        this.Nk(f, b, null);
        f = this.Tc();
        a.Md();
        a.scale(f, f);
        a.Qn(-this.Jb());
        a.translate((this.za + this.Ea) / -2, (this.Aa + this.Da) / -2);
        a.xd();
        this.Nc ? (this.Hb.left = this.Mb.gc(this.za), this.Hb.top = this.Mb.hc(this.Aa), this.Hb.right = this.Mb.gc(this.Ea), this.Hb.bottom = this.Mb.hc(this.Da), this.td || !this.Hb.uh(this.Eg) ? (p(this.ge), b = this.ym(), this.td = !1, this.Eg.oh(this.Hb)) : b = this.ge) : b = this.d;
        var d, k, n = null,
            c = 0;
        for (d = b.length; c < d; ++c) k = b[c], k !== n && (this.Cu(b[c], a), n = k);
        this.Nc && (this.ge = b);
        this.Ld && (b = this.qa.length ? this.qa[0].jb : 0, c = this.qa.length ? this.qa[0].index : 0, 0 === this.qa.length || 1 === this.qa.length && !a.Kn(b) && 1 === this.opacity ? (1 === this.qa.length ? (a.pc(b), a.Wg(this.fb.Ah(), 1 / this.b.L, 1 / this.b.K, 0, 0, 1, 1, f, this.Jb(), this.za, this.Aa, (this.za + this.Ea) / 2, (this.Aa + this.Da) / 2, this.b.eb.N, this.Ta[c]), a.Hk(b) && (this.b.pa = !0)) : a.pc(0), a.dd(this.fb.Ah()), a.Tf(this.opacity), a.Cc(this.b.qb), a.Ye(this.Vb, this.Qb), a.Md(), a.xd(), f = this.b.L / 2, b = this.b.K / 2, a.pi(-f, b, f, b, f, -b, -f, -b), a.Cc(null)) : this.fb.Nn(a, this, null, this.fb.Ah()))
    };
    b.prototype.Cu = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ca();
            var c = a.Qa;
            c.right < this.za || c.bottom < this.Aa || c.left > this.Ea || c.top > this.Da || (b.Sk(a.pf), a.Or ? this.Eu(a, b) : (b.pc(0), b.Ye(a.Vb, a.Qb), a.uc(b)))
        }
    };
    b.prototype.Du = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ca();
            var c = a.Qa;
            c.right < this.za || c.bottom < this.Aa || c.left > this.Ea || c.top > this.Da || (a.pf = this.b.pf++, 0 === a.Ob && 1 === a.opacity && a.oe && a.nf && (b.Sk(a.pf), a.nf(b)))
        }
    };
    b.prototype.Eu = function(a, b) {
        var c = a.qa[0].jb,
            f = a.qa[0].index,
            d = this.Tc();
        if (1 !== a.qa.length || b.Kn(c) || b.Zw(c) || (a.g || a.k.Jb()) && b.ni(c) || 1 !== a.opacity || a.type.xa.zq) this.fb.Nn(b, this, a, this.Ld ? this.b.qb : this.fb.Ah()), b.Md(), b.scale(d, d), b.Qn(-this.Jb()), b.translate((this.za + this.Ea) / -2, (this.Aa + this.Da) / -2), b.xd();
        else {
            b.pc(c);
            b.Ye(a.Vb, a.Qb);
            b.Hk(c) && (this.b.pa = !0);
            var k = 0,
                n = 0,
                g = 0,
                r = 0;
            b.ni(c) && (r = a.Qa, k = this.ac(r.left, r.top, !0, !0), n = this.ac(r.left, r.top, !1, !0), g = this.ac(r.right, r.bottom, !0, !0), r = this.ac(r.right, r.bottom, !1, !0), k = k / windowWidth, n = 1 - n / windowHeight, g = g / windowWidth, r = 1 - r / windowHeight);
            var p;
            a.Sa && a.Sa.G ? (p = a.Sa.G, c = 1 / p.width, p = 1 / p.height) : (c = 1 / a.width, p = 1 / a.height);
            b.Wg(this.Ld ? this.b.qb : this.fb.Ah(), c, p, k, n, g, r, d, this.Jb(), this.za, this.Aa, (this.za + this.Ea) / 2, (this.Aa + this.Da) / 2, this.b.eb.N, a.Ta[f]);
            a.uc(b)
        }
    };
    b.prototype.Za = function(a, b, c, f) {
        var d = this.b.devicePixelRatio;
        this.b.Gf && (a *= d, b *= d);
        var d = this.b.Qq,
            k = this.b.Rq,
            d = (this.fb.scrollX - d) * this.$c + d,
            k = (this.fb.scrollY - k) * this.ad + k,
            n = d,
            g = k,
            r = 1 / this.Tc(!f);
        f ? (n -= this.b.L * r / 2, g -= this.b.K * r / 2) : (n -= this.b.width * r / 2, g -= this.b.height * r / 2);
        n += a * r;
        g += b * r;
        b = this.Jb();
        0 !== b && (n -= d, g -= k, a = Math.cos(b), b = Math.sin(b), f = n * a - g * b, g = g * a + n * b, n = f + d, g += k);
        return c ? n : g
    };
    b.prototype.ac = function(a, b, c, f) {
        var d = this.b.Qq,
            k = this.b.Rq,
            n = (this.fb.scrollX - d) * this.$c + d,
            g = (this.fb.scrollY - k) * this.ad + k,
            k = n,
            d = g,
            r = this.Jb();
        if (0 !== r) {
            a -= n;
            b -= g;
            var p = Math.cos(-r),
                r = Math.sin(-r),
                m = a * p - b * r;
            b = b * p + a * r;
            a = m + n;
            b += g
        }
        n = 1 / this.Tc(!f);
        f ? (k -= this.b.L * n / 2, d -= this.b.K * n / 2) : (k -= this.b.width * n / 2, d -= this.b.height * n / 2);
        k = (a - k) / n;
        d = (b - d) / n;
        a = this.b.devicePixelRatio;
        this.b.Gf && !f && (k /= a, d /= a);
        return c ? k : d
    };
    b.prototype.Fb = function() {
        var a, b, c, f = {
            s: this.scale,
            a: this.g,
            vl: this.za,
            vt: this.Aa,
            vr: this.Ea,
            vb: this.Da,
            v: this.visible,
            bc: this.md,
            t: this.vd,
            px: this.$c,
            py: this.ad,
            o: this.opacity,
            zr: this.zd,
            fx: [],
            cg: this.qh,
            instances: []
        };
        a = 0;
        for (b = this.S.length; a < b; a++) c = this.S[a], f.fx.push({
            name: c.name,
            active: c.Pa,
            params: this.Ta[c.index]
        });
        return f
    };
    b.prototype.Tb = function(a) {
        var b, c, f;
        this.scale = a.s;
        this.g = a.a;
        this.za = a.vl;
        this.Aa = a.vt;
        this.Ea = a.vr;
        this.Da = a.vb;
        this.visible = a.v;
        this.md = a.bc;
        this.vd = a.t;
        this.$c = a.px;
        this.ad = a.py;
        this.opacity = a.o;
        this.zd = a.zr;
        this.qh = a.cg || [];
        Ca(this.Jc, this.ur);
        var k = new ba;
        b = 0;
        for (f = this.qh.length; b < f; ++b) k.add(this.qh[b]);
        c = b = 0;
        for (f = this.Jc.length; b < f; ++b) k.contains(this.Jc[b][2]) || (this.Jc[c] = this.Jc[b], ++c);
        Ba(this.Jc, c);
        c = a.fx;
        b = 0;
        for (f = c.length; b < f; b++)
            if (a = this.um(c[b].name)) a.Pa = c[b].active, this.Ta[a.index] = c[b].params;
        this.wd();
        this.d.sort(d);
        this.Zf = !0
    };
    Yb = b
})();
(function() {
    function c(a, b) {
        var c, f = a.length;
        switch (f) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < f; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function d(a, b) {
        return a.index - b.index
    }

    function b(a) {
        var b, f, e, l;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(d);
        a.length >= J.length && (J.length = a.length + 1);
        J[a.length] || (J[a.length] = []);
        l = J[a.length];
        b = 0;
        for (f = l.length; b < f; b++)
            if (e = l[b], c(a, e)) return e;
        l.push(a);
        return a
    }

    function k(a, b) {
        this.b = a;
        this.Er = {};
        this.rp = {};
        this.Dm = !1;
        this.Kp = new ba;
        this.am = [];
        this.Gl = [];
        this.name = b[0];
        var c = b[1];
        this.Me = [];
        var f, e;
        f = 0;
        for (e = c.length; f < e; f++) this.Mp(c[f], null, this.Me)
    }

    function p(a) {
        this.type = a;
        this.d = [];
        this.aa = [];
        this.ta = !0
    }

    function m(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Fa = [];
        this.Ze = [];
        this.Ip = this.kl = this.jo = this.Wj = this.group = this.sr = !1;
        this.yb = [];
        this.Oc = [];
        this.fd = [];
        this.Ch = "";
        this.zf = this.Wj = this.group = !1;
        this.qj = null;
        c[1] && (this.Ch = c[1][1].toLowerCase(), this.group = !0, this.Wj = !!c[1][0], this.qj = [], this.zf = this.Wj, this.b.Ae.push(this), this.b.qg[this.Ch] = this);
        this.Yc = c[2];
        this.ea = c[4];
        this.group || (this.b.$o[this.ea.toString()] = this);
        var f = c[5];
        a = 0;
        for (b = f.length; a < b; a++) {
            var e = new Zb(this, f[a]);
            e.index = a;
            this.yb.push(e);
            this.Uo(e.type)
        }
        f = c[6];
        a = 0;
        for (b = f.length; a < b; a++) e = new $b(this, f[a]), e.index = a, this.Oc.push(e);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.Mp(c[a], this, this.fd);
        this.bk = !1;
        this.yb.length && (this.bk = null == this.yb[0].type && this.yb[0].Ib == M.prototype.e.es)
    }

    function f(a, b) {
        var c, f, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.$b))
            for (c = 0, f = a.tc.length; c < f; c++) e = a.tc[c], a !== e && -1 === b.indexOf(e) && b.push(e)
    }

    function a(a, b) {
        this.Ec = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.W = [];
        this.Ua = [];
        this.J = {};
        this.index = -1;
        this.ih = !1;
        this.Ib = this.b.xe(b[1]);
        this.trigger = 0 < b[3];
        this.qp = 2 === b[3];
        this.Gd = b[4];
        this.Lm = b[5];
        this.ww = b[6];
        this.ea = b[7];
        this.b.He[this.ea.toString()] = this; - 1 === b[0] ? (this.type = null, this.ib = this.Sn, this.ff = null, this.nd = -1) : (this.type = this.b.q[b[0]], this.ib = this.ww ? this.rx : this.Rn, b[2] ? (this.ff = this.type.Nj(b[2]), this.nd = this.type.qm(b[2])) : (this.ff = null, this.nd = -1), this.Ec.parent && this.Ec.parent.Tk());
        this.qp && (this.ib = this.tx);
        if (10 === b.length) {
            var c, f, e = b[9];
            c = 0;
            for (f = e.length; c < f; c++) {
                var d = new ac(this, e[c]);
                this.W.push(d)
            }
            this.Ua.length = e.length
        }
    }

    function n(a, b) {
        this.Ec = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.W = [];
        this.Ua = [];
        this.J = {};
        this.index = -1;
        this.ih = !1;
        this.Ib = this.b.xe(b[1]); - 1 === b[0] ? (this.type = null, this.ib = this.Sn, this.ff = null, this.nd = -1) : (this.type = this.b.q[b[0]], this.ib = this.Rn, b[2] ? (this.ff = this.type.Nj(b[2]), this.nd = this.type.qm(b[2])) : (this.ff = null, this.nd = -1));
        this.ea = b[3];
        this.b.ze[this.ea.toString()] = this;
        if (6 === b.length) {
            var c, f, e = b[5];
            c = 0;
            for (f = e.length; c < f; c++) {
                var d = new ac(this, e[c]);
                this.W.push(d)
            }
            this.Ua.length = e.length
        }
    }

    function t() {
        L++;
        q.length === L && q.push(new bc);
        return q[L]
    }

    function e(a, b) {
        this.Zc = a;
        this.Ec = a.Ec;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.Dd = null;
        this.pe = 0;
        this.get = null;
        this.hp = 0;
        this.fb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Si = this.Wf = this.Si = this.Wf = this.vp = this.tf = this.Ti = null;
        this.jd = !1;
        var c, f, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.Dd = new cc(this, b[1]);
                this.pe = 0;
                this.get = this.Qv;
                break;
            case 1:
                this.Dd = new cc(this, b[1]);
                this.pe = 0;
                this.get = this.Rv;
                break;
            case 5:
                this.Dd = new cc(this, b[1]);
                this.pe = 0;
                this.get = this.Vv;
                break;
            case 3:
            case 8:
                this.hp = b[1];
                this.get = this.Ov;
                break;
            case 6:
                this.fb = this.b.cn[b[1]];
                this.get = this.Wv;
                break;
            case 9:
                this.key = b[1];
                this.get = this.Uv;
                break;
            case 4:
                this.object = this.b.q[b[1]];
                this.get = this.Xv;
                this.Ec.Uo(this.object);
                this.Zc instanceof $b ? this.Ec.Tk() : this.Ec.parent && this.Ec.parent.Tk();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.I ? (this.get = this.Sv, this.jd = !0) : this.get = this.Tv;
                break;
            case 11:
                this.Ti = b[1];
                this.tf = null;
                this.get = this.Pv;
                break;
            case 2:
            case 12:
                this.vp = b[1];
                this.get = this.Nv;
                break;
            case 13:
                for (this.get = this.Yv, this.Wf = [], this.Si = [], c = 1, f = b.length; c < f; c++) e = new ac(this.Zc, b[c]), this.Wf.push(e), this.Si.push(0)
        }
    }

    function h(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Fa = [];
        this.name = c[1];
        this.Ui = c[2];
        this.Im = c[3];
        this.Rh = !!c[4];
        this.ak = !!c[5];
        this.ea = c[6];
        this.b.gh[this.ea.toString()] = this;
        this.data = this.Im;
        this.parent ? (this.Pf = this.Rh || this.ak ? -1 : this.b.Ex++, this.b.Rt.push(this)) : (this.Pf = -1, this.b.Qt.push(this))
    }

    function w(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Fa = [];
        this.Eh = null;
        this.fw = c[1];
        this.Pa = !0
    }

    function l() {
        this.xr = [];
        this.reset(null)
    }
    var J = [];
    k.prototype.toString = function() {
        return this.name
    };
    k.prototype.Mp = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new dc(this, b, a);
                if (a.Yc)
                    for (c.push(a), c = 0, b = a.yb.length; c < b; c++) a.yb[c].trigger && this.Np(a, c);
                else a.Up() ? this.Np(a, 0) : c.push(a);
                break;
            case 1:
                a = new Vb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new ec(this, b, a), c.push(a)
        }
    };
    k.prototype.ab = function() {
        var a, b;
        a = 0;
        for (b = this.Me.length; a < b; a++) this.Me[a].ab(a < b - 1 && this.Me[a + 1].bk)
    };
    k.prototype.po = function() {
        z(this.am);
        z(this.Gl);
        this.So(this);
        z(this.Gl)
    };
    k.prototype.So = function(a) {
        var b, c, f, e, d = a.am,
            l = a.Gl,
            k = this.Kp.hd();
        b = 0;
        for (c = k.length; b < c; ++b) f = k[b], e = f.Eh, !f.Pa || a === e || -1 < l.indexOf(e) || (l.push(e), e.So(a), d.push(e))
    };
    k.prototype.ib = function(a) {
        this.b.Dz || (this.Dm = !0, a || (this.b.Qm = !0));
        var b, c;
        b = 0;
        for (c = this.Me.length; b < c; b++) {
            var f = this.Me[b];
            f.ib();
            this.b.Tl(f.Fa);
            this.b.Pe && this.b.Nb()
        }
        a || (this.b.Qm = !1)
    };
    k.prototype.Np = function(a, b) {
        a.Yc || this.b.ml.push(a);
        var c, f, e = a.yb[b],
            d;
        e.type ? d = e.type.name : d = "system";
        var l = (c = e.qp) ? this.rp : this.Er;
        l[d] || (l[d] = []);
        d = l[d];
        l = e.Ib;
        if (c) {
            if (e.W.length && (e = e.W[0], 1 === e.type && 2 === e.Dd.type)) {
                e = e.Dd.value.toLowerCase();
                c = 0;
                for (f = d.length; c < f; c++)
                    if (d[c].method == l) {
                        c = d[c].vh;
                        c[e] ? c[e].push([a, b]) : c[e] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[e] = [
                    [a, b]
                ];
                d.push({
                    method: l,
                    vh: c
                })
            }
        } else {
            c = 0;
            for (f = d.length; c < f; c++)
                if (d[c].method == l) {
                    d[c].vh.push([a, b]);
                    return
                }
            V && l === V.prototype.e.dg ? d.unshift({
                method: l,
                vh: [
                    [a, b]
                ]
            }) : d.push({
                method: l,
                vh: [
                    [a, b]
                ]
            })
        }
    };
    Jb = k;
    p.prototype.Cm = function() {
        return this.ta ? this.type.d.length : this.d.length
    };
    p.prototype.Ic = function() {
        return this.ta ? this.type.d : this.d
    };
    p.prototype.mi = function(a) {
        a && (a.b.zb().Wb.Yc ? (this.ta && (z(this.d), Ca(this.aa, a.type.d), this.ta = !1), a = this.aa.indexOf(a), -1 !== a && (this.d.push(this.aa[a]), this.aa.splice(a, 1))) : (this.ta = !1, z(this.d), this.d[0] = a))
    };
    rb = p;
    window._c2hh_ = "46EF2A0E027F0549E4E31097F81E37F4C765F1AC";
    m.prototype.ab = function(a) {
        var c, f = this.parent;
        if (this.group)
            for (this.kl = !0; f;) {
                if (!f.group) {
                    this.kl = !1;
                    break
                }
                f = f.parent
            }
        this.jo = !this.Up() && (!this.parent || this.parent.group && this.parent.kl);
        this.Ip = !!a;
        this.Ze = this.Fa.slice(0);
        for (f = this.parent; f;) {
            a = 0;
            for (c = f.Fa.length; a < c; a++) this.Pt(f.Fa[a]);
            f = f.parent
        }
        this.Fa = b(this.Fa);
        this.Ze = b(this.Ze);
        a = 0;
        for (c = this.yb.length; a < c; a++) this.yb[a].ab();
        a = 0;
        for (c = this.Oc.length; a < c; a++) this.Oc[a].ab();
        a = 0;
        for (c = this.fd.length; a < c; a++) this.fd[a].ab(a < c - 1 && this.fd[a + 1].bk)
    };
    m.prototype.xi = function(a) {
        if (this.zf !== !!a) {
            this.zf = !!a;
            var b;
            a = 0;
            for (b = this.qj.length; a < b; ++a) this.qj[a].Jr();
            0 < b && this.b.ya.sf && this.b.ya.sf.po()
        }
    };
    m.prototype.Uo = function(a) {
        f(a, this.Fa)
    };
    m.prototype.Pt = function(a) {
        f(a, this.Ze)
    };
    m.prototype.Tk = function() {
        this.sr = !0;
        this.parent && this.parent.Tk()
    };
    m.prototype.Up = function() {
        return this.yb.length ? this.yb[0].trigger : !1
    };
    m.prototype.ib = function() {
        var a, b, c = !1,
            f = this.b,
            e = this.b.zb();
        e.Wb = this;
        var d = this.yb;
        this.bk || (e.hm = !1);
        if (this.Yc) {
            0 === d.length && (c = !0);
            e.xb = 0;
            for (a = d.length; e.xb < a; e.xb++) b = d[e.xb], b.trigger || (b = b.ib()) && (c = !0);
            (e.Jf = c) && this.Ok()
        } else {
            e.xb = 0;
            for (a = d.length; e.xb < a; e.xb++)
                if (b = d[e.xb].ib(), !b) {
                    e.Jf = !1;
                    this.jo && f.Pe && f.Nb();
                    return
                }
            e.Jf = !0;
            this.Ok()
        }
        this.Iu(e)
    };
    m.prototype.Iu = function(a) {
        a.Jf && this.Ip && (a.hm = !0);
        this.jo && this.b.Pe && this.b.Nb()
    };
    m.prototype.ox = function(a) {
        this.b.zb().Wb = this;
        this.yb[a].ib() && (this.Ok(), this.b.zb().Jf = !0)
    };
    m.prototype.Ok = function() {
        var a = this.b.zb(),
            b;
        a.jc = 0;
        for (b = this.Oc.length; a.jc < b; a.jc++)
            if (this.Oc[a.jc].ib()) return;
        this.br()
    };
    m.prototype.kx = function() {
        var a = this.b.zb(),
            b;
        for (b = this.Oc.length; a.jc < b; a.jc++)
            if (this.Oc[a.jc].ib()) return;
        this.br()
    };
    m.prototype.br = function() {
        if (this.fd.length) {
            var a, b, c, f, e = this.fd.length - 1;
            this.b.Jk(this);
            if (this.sr)
                for (a = 0, b = this.fd.length; a < b; a++) c = this.fd[a], (f = !this.kl || !this.group && a < e) && this.b.Ik(c.Fa), c.ib(), f ? this.b.Sf(c.Fa) : this.b.Tl(c.Fa);
            else
                for (a = 0, b = this.fd.length; a < b; a++) this.fd[a].ib();
            this.b.Dk()
        }
    };
    m.prototype.qx = function() {
        var a = this.b.zb();
        a.Wb = this;
        var b = !1,
            c;
        a.xb = 0;
        for (c = this.yb.length; a.xb < c; a.xb++)
            if (this.yb[a.xb].ib()) b = !0;
            else if (!this.Yc) return !1;
        return this.Yc ? b : !0
    };
    m.prototype.lx = function() {
        this.b.uf++;
        var a = this.b.zb().xb,
            b = this.b.Jk(this);
        if (!this.Yc)
            for (b.xb = a + 1, a = this.yb.length; b.xb < a; b.xb++)
                if (!this.yb[b.xb].ib()) {
                    this.b.Dk();
                    return
                }
        this.Ok();
        this.b.Dk()
    };
    m.prototype.ow = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.yb[b].type === a.type) return !1;
        return !0
    };
    dc = m;
    a.prototype.ab = function() {
        var a, b, c;
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], c.ab(), c.jd && (this.ih = !0)
    };
    a.prototype.tx = function() {
        return !0
    };
    a.prototype.Sn = function() {
        var a, b;
        a = 0;
        for (b = this.W.length; a < b; a++) this.Ua[a] = this.W[a].get();
        return Ua(this.Ib.apply(this.b.Nd, this.Ua), this.Lm)
    };
    a.prototype.rx = function() {
        var a, b;
        a = 0;
        for (b = this.W.length; a < b; a++) this.Ua[a] = this.W[a].get();
        a = this.Ib.apply(this.ff ? this.ff : this.type, this.Ua);
        this.type.ld();
        return a
    };
    a.prototype.Rn = function() {
        var a, b, c, f, e, d, l, k, h = this.type,
            n = h.ca(),
            q = this.Ec.Yc && !this.trigger;
        b = 0;
        var p = h.$b,
            m = h.I,
            w = h.ae,
            t = this.nd,
            J = -1 < t,
            L = this.ih,
            u = this.W,
            F = this.Ua,
            E = this.Lm,
            S = this.Ib,
            G;
        if (L)
            for (b = 0, e = u.length; b < e; ++b) d = u[b], d.jd || (F[b] = d.get(0));
        else
            for (b = 0, e = u.length; b < e; ++b) F[b] = u[b].get(0); if (n.ta) {
            z(n.d);
            z(n.aa);
            G = h.d;
            a = 0;
            for (f = G.length; a < f; ++a) {
                k = G[a];
                if (L)
                    for (b = 0, e = u.length; b < e; ++b) d = u[b], d.jd && (F[b] = d.get(a));
                J ? (b = 0, m && (b = k.type.lg[w]), b = S.apply(k.H[t + b], F)) : b = S.apply(k, F);
                (l = Ua(b, E)) ? n.d.push(k): q && n.aa.push(k)
            }
            h.finish && h.finish(!0);
            n.ta = !1;
            h.ld();
            return n.Cm()
        }
        c = 0;
        G = (l = q && !this.Ec.ow(this)) ? n.aa : n.d;
        var R = !1;
        a = 0;
        for (f = G.length; a < f; ++a) {
            k = G[a];
            if (L)
                for (b = 0, e = u.length; b < e; ++b) d = u[b], d.jd && (F[b] = d.get(a));
            J ? (b = 0, m && (b = k.type.lg[w]), b = S.apply(k.H[t + b], F)) : b = S.apply(k, F);
            if (Ua(b, E))
                if (R = !0, l) {
                    if (n.d.push(k), p)
                        for (b = 0, e = k.siblings.length; b < e; b++) d = k.siblings[b], d.type.ca().d.push(d)
                } else {
                    G[c] = k;
                    if (p)
                        for (b = 0, e = k.siblings.length; b < e; b++) d = k.siblings[b], d.type.ca().d[c] = d;
                    c++
                } else if (l) {
                G[c] = k;
                if (p)
                    for (b = 0, e = k.siblings.length; b < e; b++) d = k.siblings[b], d.type.ca().aa[c] = d;
                c++
            } else if (q && (n.aa.push(k), p))
                for (b = 0, e = k.siblings.length; b < e; b++) d = k.siblings[b], d.type.ca().aa.push(d)
        }
        Ba(G, c);
        if (p)
            for (m = h.tc, a = 0, f = m.length; a < f; a++) k = m[a].ca(), l ? Ba(k.aa, c) : Ba(k.d, c);
        c = R;
        if (l && !R)
            for (a = 0, f = n.d.length; a < f; a++) {
                k = n.d[a];
                if (L)
                    for (b = 0, e = u.length; b < e; b++) d = u[b], d.jd && (F[b] = d.get(a));
                b = J ? S.apply(k.H[t], F) : S.apply(k, F);
                if (Ua(b, E)) {
                    R = !0;
                    break
                }
            }
        h.finish && h.finish(c || q);
        return q ? R : n.Cm()
    };
    Zb = a;
    n.prototype.ab = function() {
        var a, b, c;
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], c.ab(), c.jd && (this.ih = !0)
    };
    n.prototype.Sn = function() {
        var a = this.b,
            b, c, f = this.W,
            e = this.Ua;
        b = 0;
        for (c = f.length; b < c; ++b) e[b] = f[b].get();
        return this.Ib.apply(a.Nd, e)
    };
    n.prototype.Rn = function() {
        var a = this.type,
            b = this.nd,
            c = a.ae,
            f = this.ih,
            e = this.W,
            d = this.Ua,
            l = this.Ib,
            k = a.ca().Ic(),
            a = a.I,
            h = -1 < b,
            n, q, p, m, w, t;
        if (f)
            for (q = 0, m = e.length; q < m; ++q) w = e[q], w.jd || (d[q] = w.get(0));
        else
            for (q = 0, m = e.length; q < m; ++q) d[q] = e[q].get(0);
        n = 0;
        for (p = k.length; n < p; ++n) {
            t = k[n];
            if (f)
                for (q = 0, m = e.length; q < m; ++q) w = e[q], w.jd && (d[q] = w.get(n));
            h ? (q = 0, a && (q = t.type.lg[c]), l.apply(t.H[b + q], d)) : l.apply(t, d)
        }
        return !1
    };
    $b = n;
    var q = [],
        L = -1;
    e.prototype.ab = function() {
        var a, b;
        if (11 === this.type) this.tf = this.b.Cp(this.Ti, this.Ec.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Wf.length; a < b; a++) this.Wf[a].ab();
        this.Dd && this.Dd.ab()
    };
    e.prototype.Cw = function(a) {
        this.jd || !a || a.xa.al || (this.jd = !0)
    };
    e.prototype.jr = function() {
        this.jd = !0
    };
    e.prototype.Qv = function(a) {
        this.pe = a || 0;
        a = t();
        this.Dd.get(a);
        L--;
        return a.data
    };
    e.prototype.Rv = function(a) {
        this.pe = a || 0;
        a = t();
        this.Dd.get(a);
        L--;
        return ja(a.data) ? a.data : ""
    };
    e.prototype.Xv = function() {
        return this.object
    };
    e.prototype.Ov = function() {
        return this.hp
    };
    e.prototype.Vv = function(a) {
        this.pe = a || 0;
        a = t();
        this.Dd.get(a);
        L--;
        return a.Bb() ? this.b.ng(a.data) : this.b.Pj(a.data)
    };
    e.prototype.Wv = function() {
        return this.fb
    };
    e.prototype.Uv = function() {
        return this.key
    };
    e.prototype.Tv = function() {
        return this.index
    };
    e.prototype.Sv = function(a) {
        a = a || 0;
        var b = this.Zc.type,
            c = null,
            c = b.ca(),
            f = c.Ic();
        if (f.length) c = f[a % f.length].type;
        else if (c.aa.length) c = c.aa[a % c.aa.length].type;
        else if (b.d.length) c = b.d[a % b.d.length].type;
        else return 0;
        return this.index + c.Fj[b.ae]
    };
    e.prototype.Pv = function() {
        return this.tf
    };
    e.prototype.Nv = function() {
        return this.vp
    };
    e.prototype.Yv = function() {
        var a, b;
        a = 0;
        for (b = this.Wf.length; a < b; a++) this.Si[a] = this.Wf[a].get();
        return this.Si
    };
    ac = e;
    h.prototype.ab = function() {
        this.Fa = b(this.Fa)
    };
    h.prototype.ne = function(a) {
        var b = this.b.Bp();
        this.parent && !this.Rh && b ? (this.Pf >= b.length && (b.length = this.Pf + 1), b[this.Pf] = a) : this.data = a
    };
    h.prototype.yf = function() {
        var a = this.b.Bp();
        return !this.parent || this.Rh || !a || this.ak ? this.data : this.Pf >= a.length || "undefined" === typeof a[this.Pf] ? this.Im : a[this.Pf]
    };
    h.prototype.ib = function() {
        !this.parent || this.Rh || this.ak || this.ne(this.Im)
    };
    Vb = h;
    w.prototype.toString = function() {
        return "include:" + this.Eh.toString()
    };
    w.prototype.ab = function() {
        this.Eh = this.b.jm[this.fw];
        this.sheet.Kp.add(this);
        this.Fa = b(this.Fa);
        for (var a = this.parent; a;) a.group && a.qj.push(this), a = a.parent;
        this.Jr()
    };
    w.prototype.ib = function() {
        this.parent && this.b.oi(this.b.q);
        this.Eh.Dm || this.Eh.ib(!0);
        this.parent && this.b.Sf(this.b.q)
    };
    w.prototype.Jr = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.zf) {
                this.Pa = !1;
                return
            }
            a = a.parent
        }
        this.Pa = !0
    };
    ec = w;
    l.prototype.reset = function(a) {
        this.Wb = a;
        this.jc = this.xb = 0;
        z(this.xr);
        this.hm = this.Jf = !1
    };
    Ub = l
})();
(function() {
    function c(b, a) {
        this.Zc = b;
        this.b = b.b;
        this.type = a[0];
        this.get = [this.$u, this.Wu, this.lv, this.pv, this.Lu, this.nv, this.dv, this.Tu, this.cv, this.kv, this.Mu, this.jv, this.Uu, this.gv, this.av, this.bv, this.Xu, this.Yu, this.Su, this.ov, this.hv, this.Zu, this.Ru, this.Vu][this.type];
        var c = null;
        this.he = this.W = this.Ua = this.Ib = this.il = this.second = this.first = this.value = null;
        this.nd = -1;
        this.pd = null;
        this.Pr = -1;
        this.tf = this.Ti = null;
        this.Ug = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = a[1];
                break;
            case 3:
                this.first = new cc(b, a[1]);
                break;
            case 18:
                this.first = new cc(b, a[1]);
                this.second = new cc(b, a[2]);
                this.il = new cc(b, a[3]);
                break;
            case 19:
                this.Ib = this.b.xe(a[1]);
                this.Ib !== M.prototype.M.random && this.Ib !== M.prototype.M.au || this.Zc.jr();
                this.Ua = [];
                this.W = [];
                3 === a.length ? (c = a[2], this.Ua.length = c.length + 1) : this.Ua.length = 1;
                break;
            case 20:
                this.he = this.b.q[a[1]];
                this.nd = -1;
                this.Ib = this.b.xe(a[2]);
                this.Ug = a[3];
                rc && this.Ib === rc.prototype.M.Ao && this.Zc.jr();
                a[4] ? this.pd = new cc(b, a[4]) : this.pd = null;
                this.Ua = [];
                this.W = [];
                6 === a.length ? (c = a[5], this.Ua.length = c.length + 1) : this.Ua.length = 1;
                break;
            case 21:
                this.he = this.b.q[a[1]];
                this.Ug = a[2];
                a[3] ? this.pd = new cc(b, a[3]) : this.pd = null;
                this.Pr = a[4];
                break;
            case 22:
                this.he = this.b.q[a[1]];
                this.he.Nj(a[2]);
                this.nd = this.he.qm(a[2]);
                this.Ib = this.b.xe(a[3]);
                this.Ug = a[4];
                a[5] ? this.pd = new cc(b, a[5]) : this.pd = null;
                this.Ua = [];
                this.W = [];
                7 === a.length ? (c = a[6], this.Ua.length = c.length + 1) : this.Ua.length = 1;
                break;
            case 23:
                this.Ti = a[1], this.tf = null
        }
        this.Zc.Cw(this.he);
        4 <= this.type && 17 >= this.type && (this.first = new cc(b, a[1]), this.second = new cc(b, a[2]));
        if (c) {
            var d, e;
            d = 0;
            for (e = c.length; d < e; d++) this.W.push(new cc(b, c[d]))
        }
    }

    function d() {
        ++m;
        p.length === m && p.push(new bc);
        return p[m]
    }

    function b(b, a, c) {
        var d, e;
        d = 0;
        for (e = b.length; d < e; ++d) b[d].get(c), a[d + 1] = c.data
    }

    function k(b, a) {
        this.type = b || fc.ag;
        this.data = a || 0;
        this.Rf = null;
        this.type == fc.ag && (this.data = Math.floor(this.data))
    }
    c.prototype.ab = function() {
        23 === this.type && (this.tf = this.Zc.b.Cp(this.Ti, this.Zc.Ec.parent));
        this.first && this.first.ab();
        this.second && this.second.ab();
        this.il && this.il.ab();
        this.pd && this.pd.ab();
        if (this.W) {
            var b, a;
            b = 0;
            for (a = this.W.length; b < a; b++) this.W[b].ab()
        }
    };
    var p = [],
        m = -1;
    c.prototype.ov = function(c) {
        var a = this.W,
            k = this.Ua;
        k[0] = c;
        c = d();
        b(a, k, c);
        --m;
        this.Ib.apply(this.b.Nd, k)
    };
    c.prototype.hv = function(c) {
        var a = this.he,
            k = this.Ua,
            p = this.W,
            e = this.pd,
            h = this.Ib,
            w = this.Zc.pe,
            l = a.ca(),
            J = l.Ic();
        if (!J.length)
            if (l.aa.length) J = l.aa;
            else {
                this.Ug ? c.Gb("") : c.Ba(0);
                return
            }
        k[0] = c;
        c.Rf = a;
        c = d();
        b(p, k, c);
        e && (e.get(c), c.Bb() && (w = c.data, J = a.d));
        --m;
        a = J.length;
        if (w >= a || w <= -a) w %= a;
        0 > w && (w += a);
        h.apply(J[w], k)
    };
    c.prototype.Ru = function(c) {
        var a = this.he,
            k = this.Ua,
            p = this.W,
            e = this.pd,
            h = this.nd,
            w = this.Ib,
            l = this.Zc.pe,
            J = a.ca(),
            q = J.Ic();
        if (!q.length)
            if (J.aa.length) q = J.aa;
            else {
                this.Ug ? c.Gb("") : c.Ba(0);
                return
            }
        k[0] = c;
        c.Rf = a;
        c = d();
        b(p, k, c);
        e && (e.get(c), c.Bb() && (l = c.data, q = a.d));
        --m;
        p = q.length;
        if (l >= p || l <= -p) l %= p;
        0 > l && (l += p);
        l = q[l];
        q = 0;
        a.I && (q = l.type.lg[a.ae]);
        w.apply(l.H[h + q], k)
    };
    c.prototype.Zu = function(b) {
        var a = this.pd,
            c = this.he,
            k = this.Pr,
            e = this.Zc.pe,
            h = c.ca(),
            p = h.Ic();
        if (!p.length)
            if (h.aa.length) p = h.aa;
            else {
                this.Ug ? b.Gb("") : b.Ba(0);
                return
            }
        if (a) {
            h = d();
            a.get(h);
            if (h.Bb()) {
                e = h.data;
                p = c.d;
                0 !== p.length && (e %= p.length, 0 > e && (e += p.length));
                e = c.wm(e);
                c = e.pb[k];
                ja(c) ? b.Gb(c) : b.n(c);
                --m;
                return
            }--m
        }
        a = p.length;
        if (e >= a || e <= -a) e %= a;
        0 > e && (e += a);
        e = p[e];
        p = 0;
        c.I && (p = e.type.Fj[c.ae]);
        c = e.pb[k + p];
        ja(c) ? b.Gb(c) : b.n(c)
    };
    c.prototype.$u = function(b) {
        b.type = fc.ag;
        b.data = this.value
    };
    c.prototype.Wu = function(b) {
        b.type = fc.$f;
        b.data = this.value
    };
    c.prototype.lv = function(b) {
        b.type = fc.String;
        b.data = this.value
    };
    c.prototype.pv = function(b) {
        this.first.get(b);
        b.Bb() && (b.data = -b.data)
    };
    c.prototype.Lu = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data += a.data, a.wg() && b.Ig());
        --m
    };
    c.prototype.nv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data -= a.data, a.wg() && b.Ig());
        --m
    };
    c.prototype.dv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data *= a.data, a.wg() && b.Ig());
        --m
    };
    c.prototype.Tu = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data /= a.data, b.Ig());
        --m
    };
    c.prototype.cv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data %= a.data, a.wg() && b.Ig());
        --m
    };
    c.prototype.kv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data = Math.pow(b.data, a.data), a.wg() && b.Ig());
        --m
    };
    c.prototype.Mu = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        a.zg() || b.zg() ? this.Ou(b, a) : this.Nu(b, a);
        --m
    };
    c.prototype.Ou = function(b, a) {
        b.zg() && a.zg() ? this.Qu(b, a) : this.Pu(b, a)
    };
    c.prototype.Qu = function(b, a) {
        b.data += a.data
    };
    c.prototype.Pu = function(b, a) {
        b.zg() ? b.data += (Math.round(1e10 * a.data) / 1e10).toString() : b.Gb(b.data.toString() + a.data)
    };
    c.prototype.Nu = function(b, a) {
        b.Ba(b.data && a.data ? 1 : 0)
    };
    c.prototype.jv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Bb() && a.Bb() && (b.data || a.data ? b.Ba(1) : b.Ba(0));
        --m
    };
    c.prototype.Su = function(b) {
        this.first.get(b);
        b.data ? this.second.get(b) : this.il.get(b)
    };
    c.prototype.Uu = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Ba(b.data === a.data ? 1 : 0);
        --m
    };
    c.prototype.gv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Ba(b.data !== a.data ? 1 : 0);
        --m
    };
    c.prototype.av = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Ba(b.data < a.data ? 1 : 0);
        --m
    };
    c.prototype.bv = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Ba(b.data <= a.data ? 1 : 0);
        --m
    };
    c.prototype.Xu = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Ba(b.data > a.data ? 1 : 0);
        --m
    };
    c.prototype.Yu = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Ba(b.data >= a.data ? 1 : 0);
        --m
    };
    c.prototype.Vu = function(b) {
        var a = this.tf.yf();
        ia(a) ? b.n(a) : b.Gb(a)
    };
    cc = c;
    k.prototype.wg = function() {
        return this.type === fc.$f
    };
    k.prototype.Bb = function() {
        return this.type === fc.ag || this.type === fc.$f
    };
    k.prototype.zg = function() {
        return this.type === fc.String
    };
    k.prototype.Ig = function() {
        this.wg() || (this.zg() && (this.data = parseFloat(this.data)), this.type = fc.$f)
    };
    k.prototype.Ba = function(b) {
        this.type = fc.ag;
        this.data = Math.floor(b)
    };
    k.prototype.n = function(b) {
        this.type = fc.$f;
        this.data = b
    };
    k.prototype.Gb = function(b) {
        this.type = fc.String;
        this.data = b
    };
    k.prototype.Zn = function(b) {
        ia(b) ? (this.type = fc.$f, this.data = b) : ja(b) ? (this.type = fc.String, this.data = b.toString()) : (this.type = fc.ag, this.data = 0)
    };
    bc = k;
    fc = {
        ag: 0,
        $f: 1,
        String: 2
    }
})();

function M(c) {
    this.b = c;
    this.qc = []
}
M.prototype.Fb = function() {
    var c = {},
        d, b, k, p, m, f, a, n;
    c.waits = [];
    var t = c.waits,
        e;
    d = 0;
    for (b = this.qc.length; d < b; d++) {
        f = this.qc[d];
        e = {
            t: f.time,
            st: f.qr,
            s: f.ao,
            ev: f.kg.ea,
            sm: [],
            sols: {}
        };
        f.kg.Oc[f.jc] && (e.act = f.kg.Oc[f.jc].ea);
        k = 0;
        for (p = f.Fa.length; k < p; k++) e.sm.push(f.Fa[k].ea);
        for (m in f.ec)
            if (f.ec.hasOwnProperty(m)) {
                a = this.b.q[parseInt(m, 10)];
                n = {
                    sa: f.ec[m].Pk,
                    insts: []
                };
                k = 0;
                for (p = f.ec[m].de.length; k < p; k++) n.insts.push(f.ec[m].de[k].uid);
                e.sols[a.ea.toString()] = n
            }
        t.push(e)
    }
    return c
};
M.prototype.Tb = function(c) {
    c = c.waits;
    var d, b, k, p, m, f, a, n, t, e, h;
    z(this.qc);
    d = 0;
    for (b = c.length; d < b; d++)
        if (f = c[d], n = this.b.$o[f.ev.toString()]) {
            t = -1;
            k = 0;
            for (p = n.Oc.length; k < p; k++)
                if (n.Oc[k].ea === f.act) {
                    t = k;
                    break
                }
            if (-1 !== t) {
                a = {
                    ec: {},
                    Fa: [],
                    cm: !1
                };
                a.time = f.t;
                a.qr = f.st || "";
                a.ao = !!f.s;
                a.kg = n;
                a.jc = t;
                k = 0;
                for (p = f.sm.length; k < p; k++)(n = this.b.Sj(f.sm[k])) && a.Fa.push(n);
                for (m in f.sols)
                    if (f.sols.hasOwnProperty(m) && (n = this.b.Sj(parseInt(m, 10)))) {
                        t = f.sols[m];
                        e = {
                            Pk: t.sa,
                            de: []
                        };
                        k = 0;
                        for (p = t.insts.length; k < p; k++)(h = this.b.Rj(t.insts[k])) && e.de.push(h);
                        a.ec[n.index.toString()] = e
                    }
                this.qc.push(a)
            }
        }
};
(function() {
    function c() {}

    function d() {}

    function b() {}
    var k = M.prototype;
    c.prototype.hs = function() {
        return !0
    };
    c.prototype.Do = function() {
        return !0
    };
    c.prototype.Is = function() {
        return !0
    };
    c.prototype.gs = function(b) {
        var a = this.b.tm(),
            c = a.J.Every_lastTime || 0,
            d = this.b.eb.N;
        "undefined" === typeof a.J.Every_seconds && (a.J.Every_seconds = b);
        var e = a.J.Every_seconds;
        if (d >= c + e) return a.J.Every_lastTime = c + e, d >= a.J.Every_lastTime + .04 && (a.J.Every_lastTime = d), a.J.Every_seconds = b, !0;
        d < c - .1 && (a.J.Every_lastTime = d);
        return !1
    };
    c.prototype.$r = function(b, a, c) {
        return gc(b.yf(), a, c)
    };
    c.prototype.os = function(b) {
        return (b = this.b.qg[b.toLowerCase()]) && b.zf
    };
    c.prototype.es = function() {
        var b = this.b.zb();
        return b.hm ? !1 : !b.Jf
    };
    c.prototype.zl = function() {
        return !0
    };
    c.prototype.xs = function() {
        return !0
    };
    c.prototype.Al = function() {
        return !0
    };
    c.prototype.Ho = function() {
        return !0
    };
    c.prototype.Js = function() {
        return !0
    };
    c.prototype.yl = function() {
        return !0
    };
    c.prototype.Wr = function(b, a, c) {
        return Oa(B(b), B(c)) <= B(a)
    };
    c.prototype.ns = function(b, a) {
        return Qa(B(b), B(a))
    };
    c.prototype.ms = function(b, a, c) {
        b = La(b);
        a = La(a);
        c = La(c);
        return Qa(c, a) ? Qa(b, a) && !Qa(b, c) : !(!Qa(b, a) && Qa(b, c))
    };
    k.e = new c;
    d.prototype.js = function(b) {
        this.b.Bg || this.b.jf || (this.b.jf = b)
    };
    d.prototype.bs = function(b, a, c, d) {
        if (a && b && (a = this.b.Wl(b, a, c, d))) {
            this.b.Kc++;
            var e;
            this.b.trigger(Object.getPrototypeOf(b.xa).e.bg, a);
            if (a.$b)
                for (c = 0, d = a.siblings.length; c < d; c++) e = a.siblings[c], this.b.trigger(Object.getPrototypeOf(e.type.xa).e.bg, e);
            this.b.Kc--;
            b = b.ca();
            b.ta = !1;
            z(b.d);
            b.d[0] = a;
            if (a.$b)
                for (c = 0, d = a.siblings.length; c < d; c++) e = a.siblings[c], b = e.type.ca(), b.ta = !1, z(b.d), b.d[0] = e
        }
    };
    d.prototype.pt = function(b, a) {
        0 === b.Ui ? ia(a) ? b.ne(a) : b.ne(parseFloat(a)) : 1 === b.Ui && b.ne(a.toString())
    };
    d.prototype.Ur = function(b, a) {
        0 === b.Ui ? ia(a) ? b.ne(b.yf() + a) : b.ne(b.yf() + parseFloat(a)) : 1 === b.Ui && b.ne(b.yf() + a.toString())
    };
    d.prototype.Et = function(b, a) {
        0 === b.Ui && (ia(a) ? b.ne(b.yf() - a) : b.ne(b.yf() - parseFloat(a)))
    };
    d.prototype.gt = function(b, a) {
        var c = this.b.qg[b.toLowerCase()];
        if (c) switch (a) {
            case 0:
                c.xi(!1);
                break;
            case 1:
                c.xi(!0);
                break;
            case 2:
                c.xi(!c.zf)
        }
    };
    d.prototype.ot = function(b) {
        0 > b && (b = 0);
        this.b.bf = b
    };
    var p = [],
        m = [];
    d.prototype.It = function(b) {
        if (!(0 > b)) {
            var a, c, d, e = this.b.zb(),
                k;
            p.length ? k = p.pop() : k = {
                ec: {},
                Fa: []
            };
            k.cm = !1;
            k.time = this.b.eb.N + b;
            k.qr = "";
            k.ao = !1;
            k.kg = e.Wb;
            k.jc = e.jc + 1;
            b = 0;
            for (a = this.b.q.length; b < a; b++) d = this.b.q[b], c = d.ca(), c.ta && -1 === e.Wb.Fa.indexOf(d) || (k.Fa.push(d), d = void 0, m.length ? d = m.pop() : d = {
                de: []
            }, d.Pk = !1, d.Pk = c.ta, Ca(d.de, c.d), k.ec[b.toString()] = d);
            this.qc.push(k);
            return !0
        }
    };
    d.prototype.Zs = function() {
        if (!this.b.Bg && !this.b.jf && this.b.ya) {
            this.b.jf = this.b.ya;
            var b, a, c;
            b = 0;
            for (a = this.b.Ae.length; b < a; b++) c = this.b.Ae[b], c.xi(c.Wj)
        }
    };
    k.u = new d;
    b.prototype["int"] = function(b, a) {
        ja(a) ? (b.Ba(parseInt(a, 10)), isNaN(b.data) && (b.data = 0)) : b.Ba(a)
    };
    b.prototype["float"] = function(b, a) {
        ja(a) ? (b.n(parseFloat(a)), isNaN(b.data) && (b.data = 0)) : b.n(a)
    };
    b.prototype.random = function(b, a, c) {
        void 0 === c ? b.n(Math.random() * a) : b.n(Math.random() * (c - a) + a)
    };
    b.prototype.sqrt = function(b, a) {
        b.n(Math.sqrt(a))
    };
    b.prototype.abs = function(b, a) {
        b.n(Math.abs(a))
    };
    b.prototype.round = function(b, a) {
        b.Ba(Math.round(a))
    };
    b.prototype.floor = function(b, a) {
        b.Ba(Math.floor(a))
    };
    b.prototype.ceil = function(b, a) {
        b.Ba(Math.ceil(a))
    };
    b.prototype.sin = function(b, a) {
        b.n(Math.sin(B(a)))
    };
    b.prototype.cos = function(b, a) {
        b.n(Math.cos(B(a)))
    };
    b.prototype.tan = function(b, a) {
        b.n(Math.tan(B(a)))
    };
    b.prototype.asin = function(b, a) {
        b.n(Ha(Math.asin(a)))
    };
    b.prototype.acos = function(b, a) {
        b.n(Ha(Math.acos(a)))
    };
    b.prototype.atan = function(b, a) {
        b.n(Ha(Math.atan(a)))
    };
    b.prototype.exp = function(b, a) {
        b.n(Math.exp(a))
    };
    b.prototype.log10 = function(b, a) {
        b.n(Math.log(a) / Math.LN10)
    };
    b.prototype.max = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var c, d, e;
        c = 2;
        for (d = arguments.length; c < d; c++) e = arguments[c], "number" === typeof e && a < e && (a = e);
        b.n(a)
    };
    b.prototype.min = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var c, d, e;
        c = 2;
        for (d = arguments.length; c < d; c++) e = arguments[c], "number" === typeof e && a > e && (a = e);
        b.n(a)
    };
    b.prototype.Le = function(b) {
        b.n(this.b.Le)
    };
    b.prototype.bf = function(b) {
        b.n(this.b.bf)
    };
    b.prototype.time = function(b) {
        b.n(this.b.eb.N)
    };
    b.prototype.$e = function(b) {
        b.Ba(this.b.$e)
    };
    b.prototype.ok = function(b) {
        b.Ba(this.b.ok)
    };
    b.prototype.mm = function(b) {
        b.Ba(this.b.mm)
    };
    b.prototype.iu = function(b, a, c, d, e) {
        b.n(Ta(a, c, d, e))
    };
    b.prototype.g = function(b, a, c, d, e) {
        b.n(Ha(Ma(a, c, d, e)))
    };
    b.prototype.left = function(b, a, c) {
        b.Gb(ja(a) ? a.substr(0, c) : "")
    };
    b.prototype.right = function(b, a, c) {
        b.Gb(ja(a) ? a.substr(a.length - c) : "")
    };
    b.prototype.replace = function(b, a, c, d) {
        ja(a) && ja(c) && ja(d) ? b.Gb(a.replace(new RegExp(bb(c), "gi"), d)) : b.Gb(ja(a) ? a : "")
    };
    b.prototype.trim = function(b, a) {
        b.Gb(ja(a) ? a.trim() : "")
    };
    b.prototype.au = function(b) {
        var a = sa(Math.random() * (arguments.length - 1));
        b.Zn(arguments[a + 1])
    };
    b.prototype.Vl = function(b) {
        b.n(this.b.Vl / 1e3)
    };
    b.prototype.Tx = function(b, a) {
        var c = this.b.Oj(a);
        b.n(c ? c.Ea : 0)
    };
    b.prototype.Sx = function(b, a) {
        var c = this.b.Oj(a);
        b.n(c ? c.Da : 0)
    };
    b.prototype.Mf = function(b) {
        b.n(this.b.Mf)
    };
    b.prototype.Yt = function(b, a, c, d) {
        a = this.b.Oj(a);
        b.n(a ? a.Za(c, d, !0) : 0)
    };
    b.prototype.Zt = function(b, a, c, d) {
        a = this.b.Oj(a);
        b.n(a ? a.Za(c, d, !1) : 0)
    };
    k.M = new b;
    k.nx = function() {
        var b, a, c, d, e, k, w = this.b.zb();
        b = 0;
        for (c = this.qc.length; b < c; b++) {
            d = this.qc[b];
            if (-1 === d.time) {
                if (!d.ao) continue
            } else if (d.time > this.b.eb.N) continue;
            w.Wb = d.kg;
            w.jc = d.jc;
            w.xb = 0;
            for (a in d.ec) d.ec.hasOwnProperty(a) && (e = this.b.q[parseInt(a, 10)].ca(), k = d.ec[a], e.ta = k.Pk, Ca(e.d, k.de), e = k, z(e.de), m.push(e));
            d.kg.kx();
            this.b.Tl(d.Fa);
            d.cm = !0
        }
        a = b = 0;
        for (c = this.qc.length; b < c; b++) d = this.qc[b], this.qc[a] = d, d.cm ? (Wa(d.ec), z(d.Fa), p.push(d)) : a++;
        Ba(this.qc, a)
    }
})();
(function() {
    qb = function(c, b) {
        var k = c[1],
            p = c[3],
            m = c[4],
            f = c[5],
            a = c[6],
            n = c[7],
            t = c[8];
        b.e || (b.e = {});
        b.u || (b.u = {});
        b.M || (b.M = {});
        var e = b.e,
            h = b.u,
            w = b.M;
        p && (e.hy = function(a, b) {
            return gc(this.x, a, b)
        }, e.as = function(a, b) {
            return gc(this.y, a, b)
        }, e.ny = function() {
            var a = this.k;
            this.Ca();
            var b = this.Qa;
            return !(b.right < a.za || b.bottom < a.Aa || b.left > a.Ea || b.top > a.Da)
        }, e.ps = function() {
            this.Ca();
            var a = this.Qa,
                b = this.b.ya;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, e.Dy = function(a, b, c) {
            var e = this.ca(),
                d = e.Ic();
            if (!d.length) return !1;
            var f = d[0],
                k = f,
                h = Ta(f.x, f.y, b, c),
                p, n, m;
            p = 1;
            for (n = d.length; p < n; p++)
                if (f = d[p], m = Ta(f.x, f.y, b, c), 0 === a && m < h || 1 === a && m > h) h = m, k = f;
            e.mi(k);
            return !0
        }, h.$y = function(a) {
            this.x !== a && (this.x = a, this.da())
        }, h.ut = function(a) {
            this.y !== a && (this.y = a, this.da())
        }, h.jt = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.da()
        }, h.kt = function(a, b) {
            var c = a.Gv(this);
            if (c) {
                var e;
                c.zh ? (e = c.zh(b, !0), c = c.zh(b, !1)) : (e = c.x, c = c.y);
                if (this.x !== e || this.y !== c) this.x = e, this.y = c, this.da()
            }
        }, h.vy = function(a) {
            0 !== a && (this.x += Math.cos(this.g) * a, this.y += Math.sin(this.g) * a, this.da())
        }, h.uy = function(a, b) {
            0 !== b && (this.x += Math.cos(B(a)) * b, this.y += Math.sin(B(a)) * b, this.da())
        }, w.No = function(a) {
            a.n(this.x)
        }, w.Oo = function(a) {
            a.n(this.y)
        }, w.Le = function(a) {
            a.n(this.b.xf(this))
        });
        m && (e.gy = function(a, b) {
            return gc(this.width, a, b)
        }, e.cy = function(a, b) {
            return gc(this.height, a, b)
        }, h.Lo = function(a) {
            this.width !== a && (this.width = a, this.da())
        }, h.Ko = function(a) {
            this.height !== a && (this.height = a, this.da())
        }, h.Wy = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.da()
        }, w.Jt = function(a) {
            a.n(this.width)
        }, w.jy = function(a) {
            a.n(this.height)
        }, w.$x = function(a) {
            this.Ca();
            a.n(this.Qa.left)
        }, w.by = function(a) {
            this.Ca();
            a.n(this.Qa.top)
        }, w.ay = function(a) {
            this.Ca();
            a.n(this.Qa.right)
        }, w.Zx = function(a) {
            this.Ca();
            a.n(this.Qa.bottom)
        });
        f && (e.Wr = function(a, b) {
            return Oa(this.g, B(b)) <= B(a)
        }, e.ns = function(a) {
            return Qa(this.g, B(a))
        }, e.ms = function(a, b) {
            var c = La(a),
                e = La(b),
                d = Ja(this.g);
            return Qa(e, c) ? Qa(d, c) && !Qa(d, e) : !(!Qa(d, c) && Qa(d, e))
        }, h.ct = function(a) {
            a = B(Ia(a));
            isNaN(a) || this.g === a || (this.g = a, this.da())
        }, h.Ky = function(a) {
            0 === a || isNaN(a) || (this.g += B(a), this.g = Ja(this.g), this.da())
        }, h.Ly = function(a) {
            0 === a || isNaN(a) || (this.g -= B(a), this.g = Ja(this.g), this.da())
        }, h.My = function(a, b) {
            var c = Pa(this.g, B(b), B(a));
            isNaN(c) || this.g === c || (this.g = c, this.da())
        }, h.Ny = function(a, b, c) {
            a = Pa(this.g, Math.atan2(c - this.y, b - this.x), B(a));
            isNaN(a) || this.g === a || (this.g = a, this.da())
        }, h.Xy = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.g === c || (this.g = c, this.da())
        }, w.Vr = function(a) {
            a.n(Ka(this.g))
        });
        k || (e.Zr = function(a, b, c) {
            return gc(this.pb[a], b, c)
        }, e.ly = function(a) {
            return this.pb[a]
        }, e.Ey = function(a, b) {
            var c = this.ca(),
                e = c.Ic();
            if (!e.length) return !1;
            var d = e[0],
                f = d,
                k = d.pb[b],
                h, p, n;
            h = 1;
            for (p = e.length; h < p; h++)
                if (d = e[h], n = d.pb[b], 0 === a && n < k || 1 === a && n > k) k = n, f = d;
            c.mi(f);
            return !0
        }, e.Cy = function(a) {
            var b, c, e, d, f;
            if (this.b.tm().Lm) {
                f = this.ca();
                if (f.ta)
                    for (f.ta = !1, z(f.d), z(f.aa), e = this.d, b = 0, c = e.length; b < c; b++) d = e[b], d.uid === a ? f.aa.push(d) : f.d.push(d);
                else {
                    e = b = 0;
                    for (c = f.d.length; b < c; b++) d = f.d[b], f.d[e] = d, d.uid === a ? f.aa.push(d) : e++;
                    Ba(f.d, e)
                }
                this.ld();
                return !!f.d.length
            }
            d = this.b.Rj(a);
            if (!d) return !1;
            f = this.ca();
            if (!f.ta && -1 === f.d.indexOf(d)) return !1;
            if (this.I)
                for (a = d.type.La, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return f.mi(d), this.ld(), !0
                } else if (d.type === this) return f.mi(d), this.ld(), !0;
            return !1
        }, e.bg = function() {
            return !0
        }, e.Co = function() {
            return !0
        }, h.ht = function(a, b) {
            var c = this.pb;
            ia(c[a]) ? c[a] = ia(b) ? b : parseFloat(b) : ja(c[a]) && (c[a] = ja(b) ? b : b.toString())
        }, h.Xx = function(a, b) {
            var c = this.pb;
            ia(c[a]) ? c[a] = ia(b) ? c[a] + b : c[a] + parseFloat(b) : ja(c[a]) && (c[a] = ja(b) ? c[a] + b : c[a] + b.toString())
        }, h.bz = function(a, b) {
            var c = this.pb;
            ia(c[a]) && (c[a] = ia(b) ? c[a] - b : c[a] - parseFloat(b))
        }, h.Oy = function(a, b) {
            this.pb[a] = b ? 1 : 0
        }, h.dz = function(a) {
            this.pb[a] = 1 - this.pb[a]
        }, h.cs = function() {
            this.b.we(this)
        }, h.ts || (h.ts = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.gk(this, b, !0);
            this.Qd && this.Qd();
            if (this.H)
                for (a = 0, b = this.H.length; a < b; ++a) c = this.H[a], c.Qd && c.Qd()
        }), w.iy = function(a) {
            var b = a.Rf.d.length,
                c, d, e;
            c = 0;
            for (d = this.b.od.length; c < d; c++) e = this.b.od[c], a.Rf.I ? 0 <= e.type.La.indexOf(a.Rf) && b++ : e.type === a.Rf && b++;
            a.Ba(b)
        }, w.Gy = function(a) {
            a.Ba(a.Rf.ca().Ic().length)
        }, w.fz = function(a) {
            a.Ba(this.uid)
        }, w.ky = function(a) {
            a.Ba(this.Bh())
        }, w.zo || (w.zo = function(a) {
            a.Gb(JSON.stringify(this.b.Tn(this, !0)))
        }));
        a && (e.qy = function() {
            return this.visible
        }, h.qt = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.pa = !0)
        }, e.ey = function(a, b) {
            return gc(mb(100 * this.opacity), a, b)
        }, h.it = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.pa = !0)
        }, w.Opacity = function(a) {
            a.n(mb(100 * this.opacity))
        });
        n && (e.my = function(a) {
            return a ? this.k === a : !1
        }, e.Fy = function(a) {
            var b = this.ca(),
                c = b.Ic();
            if (!c.length) return !1;
            var d = c[0],
                e = d,
                f, k;
            f = 1;
            for (k = c.length; f < k; f++)
                if (d = c[f], 0 === a) {
                    if (d.k.index > e.k.index || d.k.index === e.k.index && d.Uc() > e.Uc()) e = d
                } else if (d.k.index < e.k.index || d.k.index === e.k.index && d.Uc() < e.Uc()) e = d;
            b.mi(e);
            return !0
        }, h.yy = function() {
            var a = this.k,
                b = a.d;
            b.length && b[b.length - 1] === this || (a.Tg(this, !1), a.kh(this, !1), this.b.pa = !0)
        }, h.wy = function() {
            var a = this.k,
                b = a.d;
            b.length && b[0] === this || (a.Tg(this, !1), a.Xw(this), this.b.pa = !0)
        }, h.xy = function(a) {
            a && a != this.k && (this.k.Tg(this, !0), this.k = a, a.kh(this, !0), this.b.pa = !0)
        }, h.hz = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Bv(this);
                d && d.uid !== this.uid && (this.k.index !== d.k.index && (this.k.Tg(this, !0), this.k = d.k, d.k.kh(this, !0)), this.k.Dw(this, d, c), this.b.pa = !0)
            }
        }, w.ty = function(a) {
            a.Ba(this.k.Dq)
        }, w.ry = function(a) {
            a.Gb(this.k.name)
        }, w.gz = function(a) {
            a.Ba(this.Uc())
        });
        t && (h.Ry = function(a, b) {
            if (this.b.A) {
                var c = this.type.vm(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.ye[c] !== d && (this.ye[c] = d, this.wd(), this.b.pa = !0)
                }
            }
        }, h.Sy = function(a, b, c) {
            if (this.b.A) {
                var d = this.type.vm(a);
                0 > d || (a = this.type.S[d], d = this.Ta[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.A.Kv(a.jb, b) && (c /= 100), d[b] !== c && (d[b] = c, a.Pa && (this.b.pa = !0))))
            }
        })
    };
    Kb = function() {
        this.Ql = this.Ml = !0;
        this.type.bj = !0;
        this.b.pa = !0;
        var c, b, k = this.Nl;
        c = 0;
        for (b = k.length; c < b; ++c) k[c](this);
        this.k.Nc && this.Ca()
    };
    Lb = function(c) {
        c && this.Nl.push(c)
    };
    Pb = function() {
        if (this.Ml) {
            var c = this.Qa,
                b = this.sc;
            c.set(this.x, this.y, this.x + this.width, this.y + this.height);
            c.offset(-this.Yb * this.width, -this.Zb * this.height);
            this.g ? (c.offset(-this.x, -this.y), b.lr(c, this.g), b.offset(this.x, this.y), b.bp(c)) : b.Bi(c);
            c.normalize();
            this.Ml = !1;
            this.Ox()
        }
    };
    var c = new va(0, 0, 0, 0);
    Qb = function() {
        if (this.k.Nc) {
            var d = this.k.Mb,
                b = this.Qa;
            c.set(d.gc(b.left), d.hc(b.top), d.gc(b.right), d.hc(b.bottom));
            this.lc.uh(c) || (this.lc.right < this.lc.left ? d.update(this, null, c) : d.update(this, this.lc, c), this.lc.oh(c), this.k.td = !0)
        }
    };
    Rb = function() {
        if (this.Ql && this.Ud) {
            this.Ca();
            var d = this.type.pj,
                b = this.Qa;
            c.set(d.gc(b.left), d.hc(b.top), d.gc(b.right), d.hc(b.bottom));
            this.Ie.uh(c) || (this.Ie.right < this.Ie.left ? d.update(this, null, c) : d.update(this, this.Ie, c), this.Ie.oh(c), this.Ql = !1)
        }
    };
    Ob = function(c, b) {
        return this.Qa.Pb(c, b) && this.sc.Pb(c, b) ? this.ua && !this.ua.vg() ? (this.ua.gg(this.width, this.height, this.g), this.ua.Pb(c - this.x, b - this.y)) : !0 : !1
    };
    Gb = function() {
        this.type.ol();
        return this.Cf
    };
    Sb = function() {
        this.k.so();
        return this.yd
    };
    Tb = function() {
        z(this.qa);
        var c, b, k, p = !0;
        c = 0;
        for (b = this.ye.length; c < b; c++) this.ye[c] && (k = this.type.S[c], this.qa.push(k), k.bd || (p = !1));
        this.Or = !!this.qa.length;
        this.oe = p
    };
    Hb = function() {
        return "Inst" + this.Xq
    };
    tb = function(c) {
        if (c && c.$b && c.type != this) {
            var b, k, p;
            b = 0;
            for (k = c.siblings.length; b < k; b++)
                if (p = c.siblings[b], p.type == this) return p
        }
        c = this.ca().Ic();
        return c.length ? c[0] : null
    };
    vb = function(c) {
        var b = this.ca().Ic();
        return b.length ? b[c.Bh() % b.length] : null
    };
    sb = function() {
        if (this.Zg && !this.I) {
            var c, b;
            c = 0;
            for (b = this.d.length; c < b; c++) this.d[c].Cf = c;
            var k = c,
                p = this.b.od;
            c = 0;
            for (b = p.length; c < b; ++c) p[c].type === this && (p[c].Cf = k++);
            this.Zg = !1
        }
    };
    Eb = function(c) {
        if (c < this.d.length) return this.d[c];
        c -= this.d.length;
        var b = this.b.od,
            k, p;
        k = 0;
        for (p = b.length; k < p; ++k)
            if (b[k].type === this) {
                if (0 === c) return b[k];
                --c
            }
        return null
    };
    wb = function() {
        return this.qe[this.Bd]
    };
    xb = function() {
        this.Bd++;
        this.Bd === this.qe.length ? this.qe.push(new rb(this)) : (this.qe[this.Bd].ta = !0, z(this.qe[this.Bd].aa))
    };
    yb = function() {
        this.Bd++;
        this.Bd === this.qe.length && this.qe.push(new rb(this));
        var c = this.qe[this.Bd],
            b = this.qe[this.Bd - 1];
        b.ta ? (c.ta = !0, z(c.aa)) : (c.ta = !1, Ca(c.d, b.d), Ca(c.aa, b.aa))
    };
    zb = function() {
        this.Bd--
    };
    Ab = function(c) {
        var b, k, p, m, f, a = 0;
        if (!this.I)
            for (b = 0, k = this.La.length; b < k; b++)
                for (f = this.La[b], p = 0, m = f.Ra.length; p < m; p++) {
                    if (c === f.Ra[p].name) return this.J.lastBehIndex = a, f.Ra[p];
                    a++
                }
        b = 0;
        for (k = this.Ra.length; b < k; b++) {
            if (c === this.Ra[b].name) return this.J.lastBehIndex = a, this.Ra[b];
            a++
        }
        return null
    };
    Bb = function(c) {
        return this.Nj(c) ? this.J.lastBehIndex : -1
    };
    Cb = function(c) {
        var b, k;
        b = 0;
        for (k = this.S.length; b < k; b++)
            if (this.S[b].name === c) return b;
        return -1
    };
    Db = function() {
        if (this.$b && !this.I) {
            var c, b, k, p, m, f, a;
            this.ol();
            f = this.ca();
            var n = f.ta,
                t = (c = this.b.zb()) && c.Wb && c.Wb.Yc;
            c = 0;
            for (b = this.tc.length; c < b; c++)
                if (m = this.tc[c], m !== this && (m.ol(), a = m.ca(), a.ta = n, !n)) {
                    z(a.d);
                    k = 0;
                    for (p = f.d.length; k < p; ++k) a.d[k] = m.wm(f.d[k].Cf);
                    if (t)
                        for (z(a.aa), k = 0, p = f.aa.length; k < p; ++k) a.aa[k] = m.wm(f.aa[k].Cf)
                }
        }
    };
    Fb = function() {
        return "Type" + this.ea
    };
    gc = function(c, b, k) {
        if ("undefined" === typeof c || "undefined" === typeof k) return !1;
        switch (b) {
            case 0:
                return c === k;
            case 1:
                return c !== k;
            case 2:
                return c < k;
            case 3:
                return c <= k;
            case 4:
                return c > k;
            case 5:
                return c >= k;
            default:
                return !1
        }
    }
})();
var oc = {
    exposure: {
        src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform mediump float exposure;\nvoid main(void)\n{\nlowp vec4 front = texture2D(samplerFront, vTex);\ngl_FragColor = vec4(front.rgb * pow(2.0, exposure), front.a);\n}",
        Bj: 0,
        Cj: 0,
        Xl: !1,
        bd: !0,
        Il: !1,
        W: [
            ["exposure", 0, 1]
        ]
    }
};

function sc(c) {
    this.b = c
}(function() {
    function c(a) {
        a = Math.pow(10, a / 20);
        isFinite(a) || (a = 0);
        0 > a && (a = 0);
        1 < a && (a = 1);
        return a
    }

    function d(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function b(a) {
        a = a.toLowerCase();
        return ca.hasOwnProperty(a) && ca[a].length ? ca[a][0].Hc() : u.destination
    }

    function k() {
        return u.createGain ? u.createGain() : u.createGainNode()
    }

    function p(a) {
        return u.createDelay ? u.createDelay(a) : u.createDelayNode(a)
    }

    function m(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function f(a, b, c, e) {
        a.start ? a.start(e || 0, b) : a.noteGrainOn(e || 0, b, c - b)
    }

    function a(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function n(a, b, c, e, d, g) {
        this.type = "filter";
        this.Eb = [a, b, c, e, d, g];
        this.ka = k();
        this.R = k();
        this.R.gain.value = g;
        this.P = k();
        this.P.gain.value = 1 - g;
        this.bb = u.createBiquadFilter();
        this.bb.type = "number" === typeof this.bb.type ? a : bd[a];
        this.bb.frequency.value = b;
        this.bb.detune && (this.bb.detune.value = c);
        this.bb.Q.value = e;
        this.bb.gain.value = d;
        this.ka.connect(this.bb);
        this.ka.connect(this.P);
        this.bb.connect(this.R)
    }

    function t(a, b, c) {
        this.type = "delay";
        this.Eb = [a, b, c];
        this.ka = k();
        this.R = k();
        this.R.gain.value = c;
        this.P = k();
        this.P.gain.value = 1 - c;
        this.ci = k();
        this.Sc = p(a);
        this.Sc.delayTime.value = a;
        this.xj = k();
        this.xj.gain.value = b;
        this.ka.connect(this.ci);
        this.ka.connect(this.P);
        this.ci.connect(this.R);
        this.ci.connect(this.Sc);
        this.Sc.connect(this.xj);
        this.xj.connect(this.ci)
    }

    function e(a, b, c, e) {
        this.type = "convolve";
        this.Eb = [b, c, e];
        this.ka = k();
        this.R = k();
        this.R.gain.value = c;
        this.P = k();
        this.P.gain.value = 1 - c;
        this.kf = u.createConvolver();
        a && (this.kf.normalize = b, this.kf.buffer = a);
        this.ka.connect(this.kf);
        this.ka.connect(this.P);
        this.kf.connect(this.R)
    }

    function h(a, b, c, e, d) {
        this.type = "flanger";
        this.Eb = [a, b, c, e, d];
        this.ka = k();
        this.P = k();
        this.P.gain.value = 1 - d / 2;
        this.R = k();
        this.R.gain.value = d / 2;
        this.Gj = k();
        this.Gj.gain.value = e;
        this.Sc = p(a + b);
        this.Sc.delayTime.value = a;
        this.Db = u.createOscillator();
        this.Db.frequency.value = c;
        this.Ac = k();
        this.Ac.gain.value = b;
        this.ka.connect(this.Sc);
        this.ka.connect(this.P);
        this.Sc.connect(this.R);
        this.Sc.connect(this.Gj);
        this.Gj.connect(this.Sc);
        this.Db.connect(this.Ac);
        this.Ac.connect(this.Sc.delayTime);
        m(this.Db)
    }

    function w(a, b, c, e, d, g) {
        this.type = "phaser";
        this.Eb = [a, b, c, e, d, g];
        this.ka = k();
        this.P = k();
        this.P.gain.value = 1 - g / 2;
        this.R = k();
        this.R.gain.value = g / 2;
        this.bb = u.createBiquadFilter();
        this.bb.type = "number" === typeof this.bb.type ? 7 : "allpass";
        this.bb.frequency.value = a;
        this.bb.detune && (this.bb.detune.value = b);
        this.bb.Q.value = c;
        this.Db = u.createOscillator();
        this.Db.frequency.value = d;
        this.Ac = k();
        this.Ac.gain.value = e;
        this.ka.connect(this.bb);
        this.ka.connect(this.P);
        this.bb.connect(this.R);
        this.Db.connect(this.Ac);
        this.Ac.connect(this.bb.frequency);
        m(this.Db)
    }

    function l(a) {
        this.type = "gain";
        this.Eb = [a];
        this.na = k();
        this.na.gain.value = a
    }

    function J(a, b) {
        this.type = "tremolo";
        this.Eb = [a, b];
        this.na = k();
        this.na.gain.value = 1 - b / 2;
        this.Db = u.createOscillator();
        this.Db.frequency.value = a;
        this.Ac = k();
        this.Ac.gain.value = b / 2;
        this.Db.connect(this.Ac);
        this.Ac.connect(this.na.gain);
        m(this.Db)
    }

    function q(a, b) {
        this.type = "ringmod";
        this.Eb = [a, b];
        this.ka = k();
        this.R = k();
        this.R.gain.value = b;
        this.P = k();
        this.P.gain.value = 1 - b;
        this.wi = k();
        this.wi.gain.value = 0;
        this.Db = u.createOscillator();
        this.Db.frequency.value = a;
        this.Db.connect(this.wi.gain);
        m(this.Db);
        this.ka.connect(this.wi);
        this.ka.connect(this.P);
        this.wi.connect(this.R)
    }

    function L(a, b, c, e, d) {
        this.type = "distortion";
        this.Eb = [a, b, c, e, d];
        this.ka = k();
        this.Fk = k();
        this.Ek = k();
        this.wx(c, Math.pow(10, e / 20));
        this.R = k();
        this.R.gain.value = d;
        this.P = k();
        this.P.gain.value = 1 - d;
        this.ul = u.createWaveShaper();
        this.vj = new Float32Array(65536);
        this.xv(a, b);
        this.ul.vj = this.vj;
        this.ka.connect(this.Fk);
        this.ka.connect(this.P);
        this.Fk.connect(this.ul);
        this.ul.connect(this.Ek);
        this.Ek.connect(this.R)
    }

    function g(a, b, c, e, d) {
        this.type = "compressor";
        this.Eb = [a, b, c, e, d];
        this.na = u.createDynamicsCompressor();
        try {
            this.na.threshold.value = a, this.na.knee.value = b, this.na.ratio.value = c, this.na.attack.value = e, this.na.release.value = d
        } catch (g) {}
    }

    function r(a, b) {
        this.type = "analyser";
        this.Eb = [a, b];
        this.na = u.createAnalyser();
        this.na.fftSize = a;
        this.na.smoothingTimeConstant = b;
        this.vv = new Float32Array(this.na.frequencyBinCount);
        this.or = new Uint8Array(a);
        this.li = 0
    }

    function P() {
        this.wa = null;
        this.hk = 0
    }

    function Y(a, b) {
        this.src = a;
        this.ba = v;
        this.Wc = b;
        this.aj = !1;
        var c = this;
        this.nn = this.En = null;
        this.Rg = [];
        this.Qk = 0;
        this.wo = this.Ej = this.wr = this.Ak = !1;
        1 === v && b && !db && (this.ba = 0, this.En = k());
        this.Sd = this.ra = null;
        var e;
        switch (this.ba) {
            case 0:
                this.ra = new Audio;
                this.ra.crossOrigin = "anonymous";
                this.ra.addEventListener("canplaythrough", function() {
                    c.wo = !0
                });
                1 === v && u.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.wr = !0, this.ra.addEventListener("canplay", function() {
                    c.nn || (c.nn = u.createMediaElementSource(c.ra), c.nn.connect(c.En))
                }));
                this.ra.autoplay = !1;
                this.ra.yz = "auto";
                this.ra.src = a;
                break;
            case 1:
                A.Ph ? A.tp(a, function(a) {
                    c.Sd = a;
                    c.kp()
                }, function() {
                    c.Ej = !0
                }) : (e = new XMLHttpRequest, e.open("GET", a, !0), e.responseType = "arraybuffer", e.onload = function() {
                    c.Sd = e.response;
                    c.kp()
                }, e.onerror = function() {
                    c.Ej = !0
                }, e.send());
                break;
            case 2:
                this.ra = !0;
                break;
            case 3:
                this.ra = !0
        }
    }

    function y(a, c) {
        var e = this;
        this.tag = c;
        this.oc = this.Ed = !0;
        this.src = a.src;
        this.buffer = a;
        this.ba = v;
        this.Wc = a.Wc;
        this.playbackRate = 1;
        this.rg = !0;
        this.xc = this.Mc = !1;
        this.mc = 0;
        this.Qh = this.xg = this.Gd = !1;
        this.volume = 1;
        this.Cn = function(a) {
            if (!e.xc && !e.Mc) {
                var b = this;
                b || (b = a.target);
                b === e.$i && (e.rg = !0, e.oc = !0, Q = e.tag, A.trigger(sc.prototype.e.Zi, O))
            }
        };
        this.$i = null;
        this.tg = 1 === R && !this.Wc || 2 === R;
        this.Lg = 1;
        this.startTime = this.tg ? A.eb.N : A.ue.N;
        this.hb = this.ob = null;
        this.Hd = !1;
        this.Kb = null;
        this.Nq = this.Mq = this.Lq = this.Kq = this.Pq = this.Oq = 0;
        this.j = null;
        var d = !1;
        1 !== this.ba || 0 !== this.buffer.ba || this.buffer.wr || (this.ba = 0);
        switch (this.ba) {
            case 0:
                this.Wc ? (this.j = a.ra, d = !a.aj, a.aj = !0) : (this.j = new Audio, this.j.crossOrigin = "anonymous", this.j.autoplay = !1, this.j.src = a.ra.src, d = !0);
                d && this.j.addEventListener("ended", function() {
                    Q = e.tag;
                    e.oc = !0;
                    A.trigger(sc.prototype.e.Zi, O)
                });
                break;
            case 1:
                this.ob = k();
                this.ob.connect(b(c));
                1 === this.buffer.ba ? a.ra && (this.j = u.createBufferSource(), this.j.buffer = a.ra, this.j.connect(this.ob)) : (this.j = this.buffer.ra, this.buffer.En.connect(this.ob), this.buffer.aj || (this.buffer.aj = !0, this.buffer.ra.addEventListener("ended", function() {
                    Q = e.tag;
                    e.oc = !0;
                    A.trigger(sc.prototype.e.Zi, O)
                })));
                break;
            case 2:
                this.j = new window.Media(x + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (e.rg = !0, e.oc = !0, Q = e.tag, A.trigger(sc.prototype.e.Zi, O))
                });
                break;
            case 3:
                this.j = !0
        }
    }

    function C(a, b) {
        var c = a.Ff() ? 1 : 0,
            e = b.Ff() ? 1 : 0;
        return c === e ? 0 : c < e ? 1 : -1
    }

    function H(a, b) {
        z(ya);
        if (a.length) {
            var c, e, d;
            c = 0;
            for (e = E.length; c < e; c++) d = E[c], nb(a, d.tag) && ya.push(d);
            b && ya.sort(C)
        } else S && !S.Bf() && (z(ya), ya[0] = S)
    }

    function D(a, b) {
        ca.hasOwnProperty(a) ? ca[a].push(b) : ca[a] = [b];
        var c, e, d, g, f = u.destination;
        if (ca.hasOwnProperty(a) && (d = ca[a], d.length))
            for (f = d[0].Hc(), c = 0, e = d.length; c < e; c++) g = d[c], c + 1 === e ? g.Pc(u.destination) : g.Pc(d[c + 1].Hc());
        H(a);
        c = 0;
        for (e = ya.length; c < e; c++) ya[c].bx(f);
        Ra && Nb === a && (Ra.disconnect(), Ra.connect(f))
    }

    function K() {}

    function N() {}

    function Z() {}
    var I = sc.prototype;
    I.X = function(a) {
        this.xa = a;
        this.b = a.b
    };
    I.X.prototype.F = function() {};
    var A = null,
        O = null,
        Q = "",
        x = "",
        v = 0,
        u = null,
        F = [],
        E = [],
        S = null,
        G = !1,
        R = 0,
        T = !1,
        fa = 1,
        U = 0,
        pa = 0,
        oa = !1,
        Na = 1,
        Mb = 1,
        Oc = 10,
        Pc = 1e4,
        Qc = 1,
        Ra = null,
        Nb = "",
        eb = !1,
        fb = [],
        db = !1,
        ca = {},
        bd = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    n.prototype.Pc = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.P.disconnect();
        this.P.connect(a)
    };
    n.prototype.remove = function() {
        this.ka.disconnect();
        this.bb.disconnect();
        this.R.disconnect();
        this.P.disconnect()
    };
    n.prototype.Hc = function() {
        return this.ka
    };
    t.prototype.Pc = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.P.disconnect();
        this.P.connect(a)
    };
    t.prototype.remove = function() {
        this.ka.disconnect();
        this.ci.disconnect();
        this.Sc.disconnect();
        this.xj.disconnect();
        this.R.disconnect();
        this.P.disconnect()
    };
    t.prototype.Hc = function() {
        return this.ka
    };
    e.prototype.Pc = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.P.disconnect();
        this.P.connect(a)
    };
    e.prototype.remove = function() {
        this.ka.disconnect();
        this.kf.disconnect();
        this.R.disconnect();
        this.P.disconnect()
    };
    e.prototype.Hc = function() {
        return this.ka
    };
    h.prototype.Pc = function(a) {
        this.P.disconnect();
        this.P.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    h.prototype.remove = function() {
        this.ka.disconnect();
        this.Sc.disconnect();
        this.Db.disconnect();
        this.Ac.disconnect();
        this.P.disconnect();
        this.R.disconnect();
        this.Gj.disconnect()
    };
    h.prototype.Hc = function() {
        return this.ka
    };
    w.prototype.Pc = function(a) {
        this.P.disconnect();
        this.P.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    w.prototype.remove = function() {
        this.ka.disconnect();
        this.bb.disconnect();
        this.Db.disconnect();
        this.Ac.disconnect();
        this.P.disconnect();
        this.R.disconnect()
    };
    w.prototype.Hc = function() {
        return this.ka
    };
    l.prototype.Pc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    l.prototype.remove = function() {
        this.na.disconnect()
    };
    l.prototype.Hc = function() {
        return this.na
    };
    J.prototype.Pc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    J.prototype.remove = function() {
        this.Db.disconnect();
        this.Ac.disconnect();
        this.na.disconnect()
    };
    J.prototype.Hc = function() {
        return this.na
    };
    q.prototype.Pc = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.P.disconnect();
        this.P.connect(a)
    };
    q.prototype.remove = function() {
        this.Db.disconnect();
        this.wi.disconnect();
        this.ka.disconnect();
        this.R.disconnect();
        this.P.disconnect()
    };
    q.prototype.Hc = function() {
        return this.ka
    };
    L.prototype.wx = function(a, b) {.01 > a && (a = .01);
        this.Fk.gain.value = a;
        this.Ek.gain.value = Math.pow(1 / a, .6) * b
    };
    L.prototype.shape = function(a, b, c) {
        var e = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + e * (1 - Math.exp(-(1 / e) * (a - b)));
        return b * c
    };
    L.prototype.xv = function(a, b) {
        for (var c = Math.pow(10, a / 20), e = Math.pow(10, b / 20), d = 0, g = 0; 32768 > g; ++g) d = g / 32768, d = this.shape(d, c, e), this.vj[32768 + g] = d, this.vj[32768 - g - 1] = -d
    };
    L.prototype.Pc = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.P.disconnect();
        this.P.connect(a)
    };
    L.prototype.remove = function() {
        this.ka.disconnect();
        this.Fk.disconnect();
        this.ul.disconnect();
        this.Ek.disconnect();
        this.R.disconnect();
        this.P.disconnect()
    };
    L.prototype.Hc = function() {
        return this.ka
    };
    g.prototype.Pc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    g.prototype.remove = function() {
        this.na.disconnect()
    };
    g.prototype.Hc = function() {
        return this.na
    };
    r.prototype.Na = function() {
        this.na.getFloatFrequencyData(this.vv);
        this.na.getByteTimeDomainData(this.or);
        for (var a = this.na.fftSize, b = 0, c = this.li = 0, e = 0; b < a; b++) e = (this.or[b] - 128) / 128, 0 > e && (e = -e), this.li < e && (this.li = e), c += e * e;
        this.li = d(this.li);
        d(Math.sqrt(c / a))
    };
    r.prototype.Pc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    r.prototype.remove = function() {
        this.na.disconnect()
    };
    r.prototype.Hc = function() {
        return this.na
    };
    P.prototype.yi = function(a) {
        this.wa = a
    };
    P.prototype.Uj = function() {
        return !!this.wa
    };
    P.prototype.Na = function() {};
    var ub = !1;
    Y.prototype.cx = function() {
        var a, b, c, e;
        c = a = 0;
        for (b = E.length; a < b; ++a) e = E[a], E[c] = e, e.buffer === this ? e.stop() : ++c;
        E.length = c;
        this.Sd = this.ra = null
    };
    Y.prototype.kp = function() {
        if (!this.ra && this.Sd) {
            var a = this;
            if (u.decodeAudioData) u.decodeAudioData(this.Sd, function(b) {
                a.ra = b;
                a.Sd = null;
                var c, e, d;
                if (ha(a.Bk) || T) ha(a.rj) || (c = a.rj.kf, c.normalize = a.Cq, c.buffer = b);
                else if (a.Rg.length) {
                    c = 0;
                    for (e = a.Rg.length; c < e; c++) {
                        b = a.Rg[c];
                        d = new y(a, b.Ar);
                        d.Yn(!0);
                        if ("undefined" !== typeof b.Eq && (b.wa = A.Rj(b.Eq), !b.wa)) continue;
                        if (b.wa) {
                            var g = Sa(b.wa.x, b.wa.y, -b.wa.k.Jb(), U, pa, !0),
                                f = Sa(b.wa.x, b.wa.y, -b.wa.k.Jb(), U, pa, !1);
                            d.Xn(g, f, Ha(b.wa.g - b.wa.k.Jb()), b.Fm, b.rn, b.un);
                            d.yi(b.wa)
                        } else d.Xn(b.x, b.y, b.eg, b.Fm, b.rn, b.un);
                        d.play(a.kn, a.uo, a.Qk);
                        a.Ak && d.pause();
                        E.push(d)
                    }
                    z(a.Rg)
                } else d = new y(a, a.Bk || ""), d.play(a.kn, a.uo, a.Qk), a.Ak && d.pause(), E.push(d)
            }, function() {
                a.Ej = !0
            });
            else if (this.ra = u.createBuffer(this.Sd, !1), this.Sd = null, ha(this.Bk) || T) ha(this.rj) || (b = this.rj.kf, b.normalize = this.Cq, b.buffer = this.ra);
            else {
                var b = new y(this, this.Bk);
                b.play(this.kn, this.uo, this.Qk);
                this.Ak && b.pause();
                E.push(b)
            }
        }
    };
    Y.prototype.Rp = function() {
        switch (this.ba) {
            case 0:
                var a = 4 <= this.ra.readyState;
                a && (this.wo = !0);
                return a || this.wo;
            case 1:
                return !!this.Sd || !!this.ra;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    Y.prototype.pw = function() {
        switch (this.ba) {
            case 0:
                return this.Rp();
            case 1:
                return !!this.ra;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    Y.prototype.dw = function() {
        switch (this.ba) {
            case 0:
                return !!this.ra.error;
            case 1:
                return this.Ej
        }
        return !1
    };
    y.prototype.Bf = function() {
        switch (this.ba) {
            case 0:
                return this.j.ended;
            case 1:
                return 1 === this.buffer.ba ? !this.Ed && !this.oc && this.j.loop || this.xc ? !1 : this.rg : this.j.ended;
            case 2:
                return this.rg;
            case 3:
                !0
        }
        return !0
    };
    y.prototype.Xt = function() {
        return this.Ed || this.oc ? !0 : this.Bf()
    };
    y.prototype.Yn = function(a) {
        1 === v && (!this.Hd && a ? this.ob && (this.hb || (this.hb = u.createPanner(), this.hb.panningModel = "number" === typeof this.hb.panningModel ? Na : ["equalpower", "HRTF", "soundfield"][Na], this.hb.distanceModel = "number" === typeof this.hb.distanceModel ? Mb : ["linear", "inverse", "exponential"][Mb], this.hb.refDistance = Oc, this.hb.maxDistance = Pc, this.hb.rolloffFactor = Qc), this.ob.disconnect(), this.ob.connect(this.hb), this.hb.connect(b(this.tag)), this.Hd = !0) : this.Hd && !a && this.ob && (this.hb.disconnect(), this.ob.disconnect(), this.ob.connect(b(this.tag)), this.Hd = !1))
    };
    y.prototype.Xn = function(a, b, c, e, d, g) {
        this.Hd && 1 === v && (this.hb.setPosition(a, b, 0), this.hb.setOrientation(Math.cos(B(c)), Math.sin(B(c)), 0), this.hb.coneInnerAngle = e, this.hb.coneOuterAngle = d, this.hb.coneOuterGain = g, this.Oq = a, this.Pq = b, this.Kq = c, this.Lq = e, this.Mq = d, this.Nq = g)
    };
    y.prototype.yi = function(a) {
        this.Hd && 1 === v && (this.Kb || (this.Kb = new P), this.Kb.yi(a))
    };
    y.prototype.Na = function(a) {
        if (this.Hd && 1 === v && this.Kb && this.Kb.Uj() && this.Ff()) {
            this.Kb.Na(a);
            a = this.Kb.wa;
            var b = Sa(a.x, a.y, -a.k.Jb(), U, pa, !0),
                c = Sa(a.x, a.y, -a.k.Jb(), U, pa, !1);
            this.hb.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Kb.wa.g && (b = a.g - a.k.Jb(), this.hb.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    y.prototype.play = function(a, b, c, e) {
        var d = this.j;
        this.Gd = a;
        this.volume = b;
        c = c || 0;
        e = e || 0;
        switch (this.ba) {
            case 0:
                1 !== d.playbackRate && (d.playbackRate = 1);
                d.volume !== b * fa && (d.volume = b * fa);
                d.loop !== a && (d.loop = a);
                d.muted && (d.muted = !1);
                if (d.currentTime !== c) try {
                    d.currentTime = c
                } catch (g) {}
                if (this.Wc && eb && !A.wc) fb.push(this);
                else try {
                    this.j.play()
                } catch (k) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", k)
                }
                break;
            case 1:
                this.muted = !1;
                this.Lg = 1;
                if (1 === this.buffer.ba) this.ob.gain.value = b * fa, this.Ed || (this.j = u.createBufferSource(), this.j.buffer = this.buffer.ra, this.j.connect(this.ob)), this.j.onended = this.Cn, this.$i = this.j, this.j.loop = a, this.rg = !1, 0 === c ? m(this.j, e) : f(this.j, c, this.Oe(), e);
                else {
                    1 !== d.playbackRate && (d.playbackRate = 1);
                    d.loop !== a && (d.loop = a);
                    d.volume = b * fa;
                    if (d.currentTime !== c) try {
                        d.currentTime = c
                    } catch (h) {}
                    this.Wc && eb && !A.wc ? fb.push(this) : d.play()
                }
                break;
            case 2:
                (!this.Ed && this.oc || 0 !== c) && d.seekTo(c);
                d.play();
                this.rg = !1;
                break;
            case 3:
                A.Ab ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.tg ? A.eb.N : A.ue.N) - c;
        this.xc = this.oc = this.Ed = !1
    };
    y.prototype.stop = function() {
        switch (this.ba) {
            case 0:
                this.j.paused || this.j.pause();
                break;
            case 1:
                1 === this.buffer.ba ? a(this.j) : this.j.paused || this.j.pause();
                break;
            case 2:
                this.j.stop();
                break;
            case 3:
                A.Ab && AppMobi.context.stopSound(this.src)
        }
        this.oc = !0;
        this.xc = !1
    };
    y.prototype.pause = function() {
        if (!(this.Ed || this.oc || this.Bf() || this.xc)) {
            switch (this.ba) {
                case 0:
                    this.j.paused || this.j.pause();
                    break;
                case 1:
                    1 === this.buffer.ba ? (this.mc = this.xm(!0), this.Gd && (this.mc = this.mc % this.Oe()), this.xc = !0, a(this.j)) : this.j.paused || this.j.pause();
                    break;
                case 2:
                    this.j.pause();
                    break;
                case 3:
                    A.Ab && AppMobi.context.stopSound(this.src)
            }
            this.xc = !0
        }
    };
    y.prototype.jx = function() {
        if (!(this.Ed || this.oc || this.Bf()) && this.xc) {
            switch (this.ba) {
                case 0:
                    this.j.play();
                    break;
                case 1:
                    1 === this.buffer.ba ? (this.j = u.createBufferSource(), this.j.buffer = this.buffer.ra, this.j.connect(this.ob), this.j.onended = this.Cn, this.$i = this.j, this.j.loop = this.Gd, this.ob.gain.value = fa * this.volume * this.Lg, this.pl(), this.startTime = (this.tg ? A.eb.N : A.ue.N) - this.mc / (this.playbackRate || .001), f(this.j, this.mc, this.Oe())) : this.j.play();
                    break;
                case 2:
                    this.j.play();
                    break;
                case 3:
                    A.Ab && AppMobi.context.resumeSound(this.src)
            }
            this.xc = !1
        }
    };
    y.prototype.seek = function(a) {
        if (!(this.Ed || this.oc || this.Bf())) switch (this.ba) {
            case 0:
                try {
                    this.j.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.ba) this.xc ? this.mc = a : (this.pause(), this.mc = a, this.jx());
                else try {
                    this.j.currentTime = a
                } catch (c) {}
                break;
            case 3:
                A.Ab && AppMobi.context.seekSound(this.src, a)
        }
    };
    y.prototype.bx = function(a) {
        1 === this.ba && (this.Hd ? (this.hb.disconnect(), this.hb.connect(a)) : (this.ob.disconnect(), this.ob.connect(a)))
    };
    y.prototype.Oe = function() {
        var a = 0;
        switch (this.ba) {
            case 0:
                "undefined" !== typeof this.j.duration && (a = this.j.duration);
                break;
            case 1:
                a = this.buffer.ra.duration;
                break;
            case 2:
                a = this.j.getDuration();
                break;
            case 3:
                A.Ab && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    y.prototype.xm = function(a) {
        var b = this.Oe(),
            c = 0;
        switch (this.ba) {
            case 0:
                "undefined" !== typeof this.j.currentTime && (c = this.j.currentTime);
                break;
            case 1:
                if (1 === this.buffer.ba) {
                    if (this.xc) return this.mc;
                    c = (this.tg ? A.eb.N : A.ue.N) - this.startTime
                } else "undefined" !== typeof this.j.currentTime && (c = this.j.currentTime);
                break;
            case 3:
                A.Ab && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.Gd && c > b && (c = b);
        return c
    };
    y.prototype.Ff = function() {
        return !this.xc && !this.Ed && !this.oc && !this.Bf()
    };
    y.prototype.Dx = function() {
        return !this.Ed && !this.oc && !this.Bf()
    };
    y.prototype.Cx = function(a) {
        this.volume = a;
        this.Mr()
    };
    y.prototype.Mr = function() {
        var a = this.volume * fa;
        isFinite(a) || (a = 0);
        switch (this.ba) {
            case 0:
                "undefined" !== typeof this.j.volume && this.j.volume !== a && (this.j.volume = a);
                break;
            case 1:
                1 === this.buffer.ba ? this.ob.gain.value = a * this.Lg : "undefined" !== typeof this.j.volume && this.j.volume !== a && (this.j.volume = a)
        }
    };
    y.prototype.zj = function(a) {
        switch (this.ba) {
            case 0:
                this.j.muted !== !!a && (this.j.muted = !!a);
                break;
            case 1:
                1 === this.buffer.ba ? (this.Lg = a ? 0 : 1, this.ob.gain.value = fa * this.volume * this.Lg) : this.j.muted !== !!a && (this.j.muted = !!a)
        }
    };
    y.prototype.xx = function() {
        this.xg = !0;
        this.zj(this.xg || this.Qh)
    };
    y.prototype.ir = function(a) {
        this.Qh = !!a;
        this.zj(this.xg || this.Qh)
    };
    y.prototype.pl = function() {
        var a = this.playbackRate;
        this.tg && (a *= A.bf);
        switch (this.ba) {
            case 0:
                this.j.playbackRate !== a && (this.j.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.ba ? this.j.playbackRate.value !== a && (this.j.playbackRate.value = a) : this.j.playbackRate !== a && (this.j.playbackRate = a)
        }
    };
    y.prototype.Ax = function(b) {
        switch (this.ba) {
            case 0:
                b ? this.Ff() ? (this.Mc = !0, this.j.pause()) : this.Mc = !1 : this.Mc && (this.j.play(), this.Mc = !1);
                break;
            case 1:
                b ? this.Ff() ? (this.Mc = !0, 1 === this.buffer.ba ? (this.mc = this.xm(!0), this.Gd && (this.mc = this.mc % this.Oe()), a(this.j)) : this.j.pause()) : this.Mc = !1 : this.Mc && (1 === this.buffer.ba ? (this.j = u.createBufferSource(), this.j.buffer = this.buffer.ra, this.j.connect(this.ob), this.j.onended = this.Cn, this.$i = this.j, this.j.loop = this.Gd, this.ob.gain.value = fa * this.volume * this.Lg, this.pl(), this.startTime = (this.tg ? A.eb.N : A.ue.N) - this.mc / (this.playbackRate || .001), f(this.j, this.mc, this.Oe())) : this.j.play(), this.Mc = !1);
                break;
            case 2:
                b ? this.Ff() ? (this.j.pause(), this.Mc = !0) : this.Mc = !1 : this.Mc && (this.Mc = !1, this.j.play())
        }
    };
    I.O = function(a) {
        function b() {
            if (!oa && u.createBuffer) {
                var a = u.createBuffer(1, 220, 22050),
                    c = u.createBufferSource();
                c.buffer = a;
                c.connect(u.destination);
                m(c)
            }
        }
        this.type = a;
        A = this.b = a.b;
        O = this;
        this.yc = null;
        this.Vh = -600;
        this.b.Ph && (db = !0);
        !(this.b.Ag || this.b.Xj && (this.b.Hh || this.b.Yj)) || this.b.Ih || this.b.Ia || this.b.Mm || db || (eb = !0);
        u = null;
        "undefined" !== typeof AudioContext ? (v = 1, u = new AudioContext) : "undefined" !== typeof webkitAudioContext && (v = 1, u = new webkitAudioContext);
        this.b.Ag && u && (u.close && u.close(), "undefined" !== typeof AudioContext ? u = new AudioContext : "undefined" !== typeof webkitAudioContext && (u = new webkitAudioContext));
        eb ? document.addEventListener("touchend", function() {
            !ub && u && (b(), ub = !0);
            var a, c, e;
            if (eb) {
                if (!T)
                    for (a = 0, c = fb.length; a < c; ++a) e = fb[a], e.oc || e.xc || e.j.play();
                z(fb)
            }
        }, !0) : db && document.addEventListener("touchend", function() {
            !ub && u && (b(), ub = !0)
        }, !0);
        1 !== v && (this.b.kc && "undefined" !== typeof window.Media ? v = 2 : this.b.Qp && (v = 3));
        2 === v && (x = location.href, a = x.lastIndexOf("/"), -1 < a && (x = x.substr(0, a + 1)), x = x.replace("file://", ""));
        if (this.b.qw && this.b.rw && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.we(this);
        else {
            if (this.b.Ab) G = this.b.Xj;
            else try {
                G = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (c) {
                G = !1
            }
            this.b.jl(this)
        }
    };
    var za = I.O.prototype;
    za.F = function() {
        this.b.fg = this;
        R = this.m[0];
        this.me = this.m[1];
        this.Rw = 0 !== this.m[2];
        this.Aq = 0;
        Na = this.m[3];
        Mb = this.m[4];
        this.Vh = -this.m[5];
        Oc = this.m[6];
        Pc = this.m[7];
        Qc = this.m[8];
        this.yc = new P;
        var a = this.b.L || this.b.width,
            c = this.b.K || this.b.height;
        1 === v && (u.listener.setPosition(a / 2, c / 2, this.Vh), u.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, c) {
            Ra && Ra.disconnect();
            Nb = c.toLowerCase();
            Ra = u.createMediaStreamSource(a);
            Ra.connect(b(Nb))
        });
        this.b.Vo(function(a) {
            O.Mw(a)
        });
        var e = this;
        this.b.To(function(a) {
            e.Iw(a)
        })
    };
    za.Iw = function(a) {
        var b, c, e;
        b = 0;
        for (c = E.length; b < c; b++) e = E[b], e.Kb && e.Kb.wa === a && (e.Kb.wa = null, e.Hd && e.Ff() && e.Gd && e.stop());
        this.yc.wa === a && (this.yc.wa = null)
    };
    za.Fb = function() {
        var a = {
                silent: T,
                masterVolume: fa,
                listenerZ: this.Vh,
                listenerUid: this.yc.Uj() ? this.yc.wa.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            c, e, d, g, f, k;
        c = 0;
        for (e = E.length; c < e; c++) d = E[c], !d.Dx() || 3 === this.me || d.Wc && 1 === this.me || !d.Wc && 2 === this.me || (g = d.xm(), d.Gd && (g = g % d.Oe()), g = {
            tag: d.tag,
            buffersrc: d.buffer.src,
            is_music: d.Wc,
            playbackTime: g,
            volume: d.volume,
            looping: d.Gd,
            muted: d.xg,
            playbackRate: d.playbackRate,
            paused: d.xc,
            resume_position: d.mc
        }, d.Hd && (g.pan = {}, k = g.pan, d.Kb && d.Kb.Uj() ? k.objUid = d.Kb.wa.uid : (k.x = d.Oq, k.y = d.Pq, k.a = d.Kq), k.ia = d.Lq, k.oa = d.Mq, k.og = d.Nq), b.push(g));
        b = a.effects;
        for (f in ca)
            if (ca.hasOwnProperty(f)) {
                d = [];
                c = 0;
                for (e = ca[f].length; c < e; c++) d.push({
                    type: ca[f][c].type,
                    params: ca[f][c].Eb
                });
                b[f] = d
            }
        return a
    };
    var gb = [];
    za.Tb = function(a) {
        var b = a.silent;
        fa = a.masterVolume;
        this.Vh = a.listenerZ;
        this.yc.yi(null);
        var c = a.listenerUid; - 1 !== c && (this.yc.hk = c, gb.push(this.yc));
        var c = a.playing,
            d, f, k, p, m, C, y, Y, v, u, x;
        if (3 !== this.me)
            for (d = 0, f = E.length; d < f; d++) v = E[d], v.Wc && 1 === this.me || (v.Wc || 2 !== this.me) && v.stop();
        for (m in ca)
            if (ca.hasOwnProperty(m))
                for (d = 0, f = ca[m].length; d < f; d++) ca[m][d].remove();
        Wa(ca);
        for (m in a.effects)
            if (a.effects.hasOwnProperty(m))
                for (C = a.effects[m], d = 0, f = C.length; d < f; d++) switch (k = C[d].type, u = C[d].params, k) {
                    case "filter":
                        D(m, new n(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case "delay":
                        D(m, new t(u[0], u[1], u[2]));
                        break;
                    case "convolve":
                        k = u[2];
                        v = this.Mj(k, !1);
                        v.ra ? k = new e(v.ra, u[0], u[1], k) : (k = new e(null, u[0], u[1], k), v.Cq = u[0], v.rj = k);
                        D(m, k);
                        break;
                    case "flanger":
                        D(m, new h(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "phaser":
                        D(m, new w(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case "gain":
                        D(m, new l(u[0]));
                        break;
                    case "tremolo":
                        D(m, new J(u[0], u[1]));
                        break;
                    case "ringmod":
                        D(m, new q(u[0], u[1]));
                        break;
                    case "distortion":
                        D(m, new L(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "compressor":
                        D(m, new g(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "analyser":
                        D(m, new r(u[0], u[1]))
                }
            d = 0;
        for (f = c.length; d < f; d++) 3 === this.me || (a = c[d], k = a.buffersrc, p = a.is_music, m = a.tag, C = a.playbackTime, y = a.looping, Y = a.volume, x = (u = a.pan) && u.hasOwnProperty("objUid") ? u.objUid : -1, p && 1 === this.me) || !p && 2 === this.me || ((v = this.pm(k, m, p, y, Y)) ? (v.mc = a.resume_position, v.Yn(!!u), v.play(y, Y, C), v.pl(), v.Mr(), v.zj(v.xg || v.Qh), a.paused && v.pause(), a.muted && v.xx(), v.zj(v.xg || v.Qh), u && (-1 !== x ? (v.Kb = v.Kb || new P, v.Kb.hk = x, gb.push(v.Kb)) : v.Xn(u.x, u.y, u.a, u.ia, u.oa, u.og))) : (v = this.Mj(k, p), v.Qk = C, v.Ak = a.paused, u && (-1 !== x ? v.Rg.push({
            Eq: x,
            Fm: u.ia,
            rn: u.oa,
            un: u.og,
            Ar: m
        }) : v.Rg.push({
            x: u.x,
            y: u.y,
            eg: u.a,
            Fm: u.ia,
            rn: u.oa,
            un: u.og,
            Ar: m
        }))));
        if (b && !T) {
            d = 0;
            for (f = E.length; d < f; d++) E[d].ir(!0);
            T = !0
        } else if (!b && T) {
            d = 0;
            for (f = E.length; d < f; d++) E[d].ir(!1);
            T = !1
        }
    };
    za.Qd = function() {
        var a, b, c, e;
        a = 0;
        for (b = gb.length; a < b; a++) c = gb[a], e = this.b.Rj(c.hk), c.yi(e), c.hk = -1, e && (U = e.x, pa = e.y);
        z(gb)
    };
    za.Mw = function(a) {
        if (!this.Rw) {
            !a && u && u.resume && (u.resume(), oa = !1);
            var b, c;
            b = 0;
            for (c = E.length; b < c; b++) E[b].Ax(a);
            a && u && u.suspend && (u.suspend(), oa = !0)
        }
    };
    za.Na = function() {
        var a = this.b.Le,
            b, c, e;
        b = 0;
        for (c = E.length; b < c; b++) e = E[b], e.Na(a), 0 !== R && e.pl();
        var d, g;
        for (d in ca)
            if (ca.hasOwnProperty(d))
                for (e = ca[d], b = 0, c = e.length; b < c; b++) g = e[b], g.Na && g.Na();
        1 === v && this.yc.Uj() && (this.yc.Na(a), U = this.yc.wa.x, pa = this.yc.wa.y, u.listener.setPosition(this.yc.wa.x, this.yc.wa.y, this.Vh))
    };
    var hb = [];
    za.yx = function(a) {
        var b, c, e, d, g, f = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (e = a[b], d = e[0], e = 2 * e[1], (g = 4 < d.length && ".ogg" === d.substr(d.length - 4)) && G || !g && !G) hb.push({
                filename: d,
                size: e,
                wa: null
            }), f += e;
        return f
    };
    za.Fx = function() {
        var a, b, c, e;
        a = 0;
        for (b = hb.length; a < b; ++a) c = hb[a], e = this.b.Hj + c.filename, c.wa = this.Mj(e, !1)
    };
    za.Hv = function() {
        var a = 0,
            b, c, e;
        b = 0;
        for (c = hb.length; b < c; ++b) e = hb[b], e.wa.pw() || e.wa.dw() || this.b.Ia || this.b.Yj ? a += e.size : e.wa.Rp() && (a += Math.floor(e.size / 2));
        return a
    };
    za.gx = function() {
        var a, b, c, e;
        c = a = 0;
        for (b = F.length; a < b; ++a) e = F[a], F[c] = e, e.Wc ? e.cx() : ++c;
        F.length = c
    };
    za.Mj = function(a, b) {
        var c, e, d, g = null;
        c = 0;
        for (e = F.length; c < e; c++)
            if (d = F[c], d.src === a) {
                g = d;
                break
            }
        g || (db && b && this.gx(), g = new Y(a, b), F.push(g));
        return g
    };
    za.pm = function(a, b, c, e, d) {
        var g, f, k;
        g = 0;
        for (f = E.length; g < f; g++)
            if (k = E[g], k.src === a && (k.Xt() || c)) return k.tag = b, k;
        a = this.Mj(a, c);
        if (!a.ra) return "<preload>" !== b && (a.Bk = b, a.kn = e, a.uo = d), null;
        k = new y(a, b);
        E.push(k);
        return k
    };
    var ya = [];
    K.prototype.Zi = function(a) {
        return nb(Q, a)
    };
    I.e = new K;
    N.prototype.Play = function(a, b, e, d) {
        !T && (e = c(e), S = this.pm(this.b.Hj + a[0] + (G ? ".ogg" : ".m4a"), d, a[1], 0 !== b, e)) && (S.Yn(!1), S.play(0 !== b, e, 0, this.Aq), this.Aq = 0)
    };
    N.prototype.tt = function(a, b) {
        H(a);
        var e = c(b),
            d, g;
        d = 0;
        for (g = ya.length; d < g; d++) ya[d].Cx(e)
    };
    N.prototype.Ys = function(a) {
        if (!T) {
            var b = a[1];
            a = this.b.Hj + a[0] + (G ? ".ogg" : ".m4a");
            3 === v ? this.b.Ab ? AppMobi.context.loadSound(a) : AppMobi.player.loadSound(a) : 2 !== v && this.pm(a, "<preload>", b, !1)
        }
    };
    N.prototype.Mo = function(a) {
        H(a);
        var b;
        a = 0;
        for (b = ya.length; a < b; a++) ya[a].stop()
    };
    I.u = new N;
    Z.prototype.ds = function(a, b) {
        H(b, !0);
        ya.length ? a.n(ya[0].Oe()) : a.n(0)
    };
    I.M = new Z
})();

function tc(c) {
    this.b = c
}(function() {
    function c() {}

    function d() {}
    var b = tc.prototype;
    b.X = function(b) {
        this.xa = b;
        this.b = b.b
    };
    b.X.prototype.F = function() {};
    b.O = function(b) {
        this.type = b;
        this.b = b.b
    };
    b.O.prototype.F = function() {
        var b = this;
        window.addEventListener("resize", function() {
            b.b.trigger(tc.prototype.e.Ps, b)
        });
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            b.b.trigger(tc.prototype.e.Ls, b)
        }), window.addEventListener("offline", function() {
            b.b.trigger(tc.prototype.e.Ks, b)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            b.b.Mf = 1;
            b.b.trigger(tc.prototype.e.Jo, b)
        }), window.applicationCache.addEventListener("progress", function(c) {
            b.b.Mf = c.loaded / c.total || 0
        }));
        this.b.Ab || (document.addEventListener("appMobi.device.update.available", function() {
            b.b.trigger(tc.prototype.e.Jo, b)
        }), document.addEventListener("backbutton", function() {
            b.b.trigger(tc.prototype.e.Yi, b)
        }), document.addEventListener("menubutton", function() {
            b.b.trigger(tc.prototype.e.Eo, b)
        }), document.addEventListener("searchbutton", function() {
            b.b.trigger(tc.prototype.e.Ss, b)
        }), document.addEventListener("tizenhwkey", function(c) {
            var d;
            switch (c.keyName) {
                case "back":
                    d = b.b.trigger(tc.prototype.e.Yi, b);
                    !d && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (d = b.b.trigger(tc.prototype.e.Eo, b)) || c.preventDefault()
            }
        }));
        this.b.Rm && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(c) {
            b.b.trigger(tc.prototype.e.Yi, b) && (c.pz = !0)
        }) : this.b.$j && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!b.b.trigger(tc.prototype.e.Yi, b)
        });
        this.b.Vo(function(c) {
            c ? b.b.trigger(tc.prototype.e.Ms, b) : b.b.trigger(tc.prototype.e.Ns, b)
        });
        this.Um = "undefined" !== typeof window.is_scirra_arcade
    };
    c.prototype.Ls = function() {
        return !0
    };
    c.prototype.Ks = function() {
        return !0
    };
    c.prototype.Jo = function() {
        return !0
    };
    c.prototype.Ns = function() {
        return !0
    };
    c.prototype.Ms = function() {
        return !0
    };
    c.prototype.Ps = function() {
        return !0
    };
    c.prototype.Yi = function() {
        return !0
    };
    c.prototype.Eo = function() {
        return !0
    };
    c.prototype.Ss = function() {
        return !0
    };
    b.e = new c;
    d.prototype.ks = function(b, c) {
        
    };
    b.u = new d;
    b.M = new function() {}
})();

function uc(c) {
    this.b = c
}(function() {
    function c() {}
    var d = uc.prototype;
    d.X = function(b) {
        this.xa = b;
        this.b = b.b
    };
    d.X.prototype.F = function() {};
    d.O = function(b) {
        this.type = b;
        this.b = b.b
    };
    d.O.prototype.F = function() {};
    d.e = new function() {};
    c.prototype.rv = function() {
        Cocoon.Yx.exit()
    };
    d.u = new c;
    d.M = new function() {}
})();

function rc(c) {
    this.b = c
}(function() {
    function c() {
        this.name = "";
        this.ti = 0;
        this.Eb = []
    }

    function d() {
        a++;
        a === f.length && f.push(new c);
        return f[a]
    }

    function b() {}

    function k() {}

    function p() {}
    var m = rc.prototype;
    m.X = function(a) {
        this.xa = a;
        this.b = a.b
    };
    m.X.prototype.F = function() {};
    m.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    var f = [],
        a = -1;
    m.O.prototype.F = function() {
        var b = this;
        window.c2_callFunction = function(c, e) {
            var f, k, l, p = d();
            p.name = c.toLowerCase();
            p.ti = 0;
            if (e)
                for (p.Eb.length = e.length, f = 0, k = e.length; f < k; ++f) l = e[f], p.Eb[f] = "number" === typeof l || "string" === typeof l ? l : "boolean" === typeof l ? l ? 1 : 0 : 0;
            else z(p.Eb);
            b.b.trigger(rc.prototype.e.xl, b, p.name);
            a--;
            return p.ti
        }
    };
    b.prototype.xl = function(b) {
        var c = 0 > a ? null : f[a];
        return c ? nb(b, c.name) : !1
    };
    m.e = new b;
    k.prototype.lt = function(b) {
        var c = 0 > a ? null : f[a];
        c && (c.ti = b)
    };
    m.u = new k;
    p.prototype.Xs = function(b, c) {
        c = sa(c);
        var e = 0 > a ? null : f[a];
        e ? 0 <= c && c < e.Eb.length ? b.Zn(e.Eb[c]) : b.Ba(0) : b.Ba(0)
    };
    p.prototype.Ao = function(b, c) {
        var e = d();
        e.name = c.toLowerCase();
        e.ti = 0;
        z(e.Eb);
        var f, k;
        f = 2;
        for (k = arguments.length; f < k; f++) e.Eb.push(arguments[f]);
        this.b.trigger(rc.prototype.e.xl, this, e.name);
        a--;
        b.Zn(e.ti)
    };
    m.M = new p
})();

function V(c) {
    this.b = c
}(function() {
    function c() {
        if (0 === this.$l.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Yg ? b.drawImage(this.G, this.Mg, this.Ng, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.G, 0, 0, this.width, this.height);
            this.$l = a.toDataURL("image/png")
        }
        return this.$l
    }

    function d() {}

    function b(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        w.push(a)
    }

    function k(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function p(a, b, c, e) {
        b = b.uid;
        c = c.uid;
        var d = k(b, c);
        if (a.hasOwnProperty(d)) a[d][2] = e;
        else {
            var f = w.length ? w.pop() : [0, 0, 0];
            f[0] = b;
            f[1] = c;
            f[2] = e;
            a[d] = f
        }
    }

    function m(a, c, e) {
        c = k(c.uid, e.uid);
        a.hasOwnProperty(c) && (b(a[c]), delete a[c])
    }

    function f(a, b, c) {
        b = k(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return l = a[b][2], !0;
        l = -2;
        return !1
    }

    function a() {}
    var n = V.prototype;
    n.X = function(a) {
        this.xa = a;
        this.b = a.b
    };
    var t = n.X.prototype;
    t.F = function() {
        if (!this.I) {
            var a, b, e, d, f, k, h, l, p;
            this.kd = [];
            this.Dh = !1;
            a = 0;
            for (b = this.rc.length; a < b; a++) {
                f = this.rc[a];
                h = {};
                h.name = f[0];
                h.speed = f[1];
                h.loop = f[2];
                h.On = f[3];
                h.Pn = f[4];
                h.le = f[5];
                h.ea = f[6];
                h.frames = [];
                e = 0;
                for (d = f[7].length; e < d; e++) k = f[7][e], l = {}, l.hl = k[0], l.ho = k[1], l.Mg = k[2], l.Ng = k[3], l.width = k[4], l.height = k[5], l.duration = k[6], l.Yb = k[7], l.Zb = k[8], l.Hm = k[9], l.Ck = k[10], l.Sq = k[11], l.Yg = 0 !== l.width, l.$l = "", l.oz = c, p = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, l.$n = p, l.T = null, (p = this.b.tv(k[0])) ? l.G = p : (l.G = new Image, l.G.cu = k[0], l.G.ip = k[1], l.G.Wt = null, this.b.vo(l.G, k[0])), h.frames.push(l), this.kd.push(l);
                this.rc[a] = h
            }
        }
    };
    t.Lr = function() {
        var a, b, c;
        a = 0;
        for (b = this.d.length; a < b; a++) c = this.d[a], c.tj = c.Sa.T
    };
    t.qk = function() {
        if (!this.I) {
            var a, b, c;
            a = 0;
            for (b = this.kd.length; a < b; ++a) c = this.kd[a], c.G.Wt = null, c.T = null;
            this.Dh = !1;
            this.Lr()
        }
    };
    t.rk = function() {
        if (!this.I && this.d.length) {
            var a, b, c;
            a = 0;
            for (b = this.kd.length; a < b; ++a) c = this.kd[a], c.T = this.b.A.Gg(c.G, !1, this.b.Ja, c.Sq);
            this.Lr()
        }
    };
    t.dn = function() {
        if (!this.I && !this.Dh && this.b.A) {
            var a, b, c;
            a = 0;
            for (b = this.kd.length; a < b; ++a) c = this.kd[a], c.T = this.b.A.Gg(c.G, !1, this.b.Ja, c.Sq);
            this.Dh = !0
        }
    };
    t.nl = function() {
        if (!this.I && !this.d.length && this.Dh) {
            var a, b, c;
            a = 0;
            for (b = this.kd.length; a < b; ++a) c = this.kd[a], this.b.A.deleteTexture(c.T), c.T = null;
            this.Dh = !1
        }
    };
    var e = [];
    t.Gk = function(a) {
        var b, c, d;
        z(e);
        b = 0;
        for (c = this.kd.length; b < c; ++b) d = this.kd[b].G, -1 === e.indexOf(d) && (a.drawImage(d, 0, 0), e.push(d))
    };
    n.O = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.rc[0].frames[0].Ck;
        this.cd ? this.ua.Ci(a) : this.ua = new cb(a)
    };
    var h = n.O.prototype;
    h.F = function() {
        this.visible = 0 === this.m[0];
        this.Vj = this.Oh = !1;
        this.Ud = 0 !== this.m[3];
        this.Ha = this.zp(this.m[1]) || this.type.rc[0];
        this.D = this.m[2];
        0 > this.D && (this.D = 0);
        this.D >= this.Ha.frames.length && (this.D = this.Ha.frames.length - 1);
        var a = this.Ha.frames[this.D];
        this.ua.Ci(a.Ck);
        this.Yb = a.Yb;
        this.Zb = a.Zb;
        this.ig = this.Ha.speed;
        this.Ke = this.Ha.Pn;
        1 === this.type.rc.length && 1 === this.type.rc[0].frames.length || 0 === this.ig || (this.b.jl(this), this.Oh = !0);
        this.cd ? this.Ad.reset() : this.Ad = new ab;
        this.be = this.Ad.N;
        this.ef = !0;
        this.Rd = 0;
        this.df = !0;
        this.lj = this.Xo = "";
        this.gp = 0;
        this.kj = -1;
        this.type.dn();
        var b, c, e, d, f, k, h, a = 0;
        for (b = this.type.rc.length; a < b; a++)
            for (d = this.type.rc[a], c = 0, e = d.frames.length; c < e; c++) f = d.frames[c], 0 === f.width && (f.width = f.G.width, f.height = f.G.height), f.Yg && (h = f.G, k = f.$n, k.left = f.Mg / h.width, k.top = f.Ng / h.height, k.right = (f.Mg + f.width) / h.width, k.bottom = (f.Ng + f.height) / h.height, 0 === f.Mg && 0 === f.Ng && f.width === h.width && f.height === h.height && (f.Yg = !1));
        this.Sa = this.Ha.frames[this.D];
        this.tj = this.Sa.T
    };
    h.Fb = function() {
        var a = {
            a: this.Ha.ea,
            f: this.D,
            cas: this.ig,
            fs: this.be,
            ar: this.Rd,
            at: this.Ad.N,
            rt: this.Ke
        };
        this.ef || (a.ap = this.ef);
        this.df || (a.af = this.df);
        return a
    };
    h.Tb = function(a) {
        var b = this.yv(a.a);
        b && (this.Ha = b);
        this.D = a.f;
        0 > this.D && (this.D = 0);
        this.D >= this.Ha.frames.length && (this.D = this.Ha.frames.length - 1);
        this.ig = a.cas;
        this.be = a.fs;
        this.Rd = a.ar;
        this.Ad.reset();
        this.Ad.N = a.at;
        this.ef = a.hasOwnProperty("ap") ? a.ap : !0;
        this.df = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Ke = a.rt : this.Ke = this.Ha.Pn;
        this.Sa = this.Ha.frames[this.D];
        this.tj = this.Sa.T;
        this.ua.Ci(this.Sa.Ck);
        this.Yb = this.Sa.Yb;
        this.Zb = this.Sa.Zb
    };
    h.Jl = function(a) {
        this.D = a ? 0 : this.Ha.frames.length - 1;
        this.ef = !1;
        this.Xo = this.Ha.name;
        this.Vj = !0;
        this.b.trigger(V.prototype.e.ws, this);
        this.b.trigger(V.prototype.e.Bo, this);
        this.Vj = !1;
        this.Rd = 0
    };
    h.Ll = function() {
        return this.Ad.N
    };
    h.Na = function() {
        this.Ad.add(this.b.xf(this));
        this.lj.length && this.lp();
        0 <= this.kj && this.mp();
        var a = this.Ad.N,
            b = this.Ha,
            c = b.frames[this.D],
            e = c.duration / this.ig;
        this.ef && a >= this.be + e && (this.df ? this.D++ : this.D--, this.be += e, this.D >= b.frames.length && (b.le ? (this.df = !1, this.D = b.frames.length - 2) : b.loop ? this.D = this.Ke : (this.Rd++, this.Rd >= b.On ? this.Jl(!1) : this.D = this.Ke)), 0 > this.D && (b.le ? (this.D = 1, this.df = !0, b.loop || (this.Rd++, this.Rd >= b.On && this.Jl(!0))) : b.loop ? this.D = this.Ke : (this.Rd++, this.Rd >= b.On ? this.Jl(!0) : this.D = this.Ke)), 0 > this.D ? this.D = 0 : this.D >= b.frames.length && (this.D = b.frames.length - 1), a > this.be + b.frames[this.D].duration / this.ig && (this.be = a), a = b.frames[this.D], this.dg(c, a), this.b.pa = !0)
    };
    h.zp = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.rc.length; b < c; b++)
            if (e = this.type.rc[b], nb(e.name, a)) return e;
        return null
    };
    h.yv = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.rc.length; b < c; b++)
            if (e = this.type.rc[b], e.ea === a) return e;
        return null
    };
    h.lp = function() {
        var a = this.Ha.frames[this.D],
            b = this.zp(this.lj);
        this.lj = "";
        !b || nb(b.name, this.Ha.name) && this.ef || (this.Ha = b, this.ig = b.speed, this.Ke = b.Pn, 0 > this.D && (this.D = 0), this.D >= this.Ha.frames.length && (this.D = this.Ha.frames.length - 1), 1 === this.gp && (this.D = 0), this.ef = !0, this.be = this.Ad.N, this.df = !0, this.dg(a, this.Ha.frames[this.D]), this.b.pa = !0)
    };
    h.mp = function() {
        var a = this.Ha.frames[this.D],
            b = this.D;
        this.D = sa(this.kj);
        0 > this.D && (this.D = 0);
        this.D >= this.Ha.frames.length && (this.D = this.Ha.frames.length - 1);
        b !== this.D && (this.dg(a, this.Ha.frames[this.D]), this.be = this.Ad.N, this.b.pa = !0);
        this.kj = -1
    };
    h.dg = function(a, b) {
        var c = a.width,
            e = a.height,
            d = b.width,
            f = b.height;
        c != d && (this.width *= d / c);
        e != f && (this.height *= f / e);
        this.Yb = b.Yb;
        this.Zb = b.Zb;
        this.ua.Ci(b.Ck);
        this.da();
        this.Sa = b;
        this.tj = b.T;
        c = 0;
        for (e = this.H.length; c < e; c++) d = this.H[c], d.Iq && d.Iq(a, b);
        this.b.trigger(V.prototype.e.dg, this)
    };
    h.Zd = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Sa,
            c = b.Yg,
            e = b.G,
            d = this.x,
            f = this.y,
            k = this.width,
            h = this.height;
        if (0 === this.g && 0 <= k && 0 <= h) d -= this.Yb * k, f -= this.Zb * h, this.b.rd && (d = Math.round(d), f = Math.round(f)), c ? a.drawImage(e, b.Mg, b.Ng, b.width, b.height, d, f, k, h) : a.drawImage(e, d, f, k, h);
        else {
            this.b.rd && (d = Math.round(d), f = Math.round(f));
            a.save();
            var l = 0 < k ? 1 : -1,
                p = 0 < h ? 1 : -1;
            a.translate(d, f);
            1 === l && 1 === p || a.scale(l, p);
            a.rotate(this.g * l * p);
            d = 0 - this.Yb * ma(k);
            f = 0 - this.Zb * ma(h);
            c ? a.drawImage(e, b.Mg, b.Ng, b.width, b.height, d, f, ma(k), ma(h)) : a.drawImage(e, d, f, ma(k), ma(h));
            a.restore()
        }
    };
    h.nf = function(a) {
        this.uc(a)
    };
    h.uc = function(a) {
        a.Cc(this.tj);
        a.Tf(this.opacity);
        var b = this.Sa,
            c = this.sc;
        if (this.b.rd) {
            var e = Math.round(this.x) - this.x,
                d = Math.round(this.y) - this.y;
            b.Yg ? a.Kd(c.Xa + e, c.Ya + d, c.ub + e, c.wb + d, c.mb + e, c.nb + d, c.kb + e, c.lb + d, b.$n) : a.pi(c.Xa + e, c.Ya + d, c.ub + e, c.wb + d, c.mb + e, c.nb + d, c.kb + e, c.lb + d)
        } else b.Yg ? a.Kd(c.Xa, c.Ya, c.ub, c.wb, c.mb, c.nb, c.kb, c.lb, b.$n) : a.pi(c.Xa, c.Ya, c.ub, c.wb, c.mb, c.nb, c.kb, c.lb)
    };
    h.Dv = function(a) {
        var b = this.Sa,
            c, e;
        c = 0;
        for (e = b.Hm.length; c < e; c++)
            if (nb(a, b.Hm[c][0])) return c;
        return -1
    };
    h.zh = function(a, b) {
        var c = this.Sa,
            e = c.Hm,
            d;
        ja(a) ? d = this.Dv(a) : d = a - 1;
        d = sa(d);
        if (0 > d || d >= e.length) return b ? this.x : this.y;
        var f = (e[d][1] - c.Yb) * this.width,
            e = e[d][2],
            e = (e - c.Zb) * this.height,
            c = Math.cos(this.g);
        d = Math.sin(this.g);
        var k = f * c - e * d,
            e = e * c + f * d,
            f = k + this.x,
            e = e + this.y;
        return b ? f : e
    };
    var w = [],
        l = -2,
        J = [];
    d.prototype.ys = function(a) {
        if (!a) return !1;
        var c = this.b,
            e = c.tm(),
            d = e.type,
            k = null;
        e.J.collmemory ? k = e.J.collmemory : (k = {}, e.J.collmemory = k);
        e.J.spriteCreatedDestroyCallback || (e.J.spriteCreatedDestroyCallback = !0, c.To(function(a) {
            var c = e.J.collmemory;
            a = a.uid;
            var d, f;
            for (d in c) c.hasOwnProperty(d) && (f = c[d], f[0] === a || f[1] === a) && (b(c[d]), delete c[d])
        }));
        var h = d.ca(),
            q = a.ca(),
            h = h.Ic(),
            n, w, t, L, I, A, O, Q = this.b.$e,
            x = Q - 1,
            v = c.zb().Wb;
        for (w = 0; w < h.length; w++) {
            t = h[w];
            q.ta ? (t.Ca(), this.b.Ap(t.k, a, t.Qa, J), n = J) : n = q.Ic();
            for (L = 0; L < n.length; L++) I = n[L], c.fo(t, I) || c.$t(t, I) ? (A = f(k, t, I), A = !A || l < x, p(k, t, I, Q), A && (c.Ik(v.Fa), A = d.ca(), O = a.ca(), A.ta = !1, O.ta = !1, d === a ? (A.d.length = 2, A.d[0] = t, A.d[1] = I, d.ld()) : (A.d.length = 1, O.d.length = 1, A.d[0] = t, O.d[0] = I, d.ld(), a.ld()), v.lx(), c.Sf(v.Fa))) : m(k, t, I);
            z(J)
        }
        return !1
    };
    var q = new ba,
        L = !1;
    new va(0, 0, 0, 0);
    t.finish = function(a) {
        if (L) {
            if (a) {
                var b = this.b.zb().Wb.Yc;
                a = null.ca();
                var c = q.hd(),
                    e, d;
                if (a.ta) {
                    a.ta = !1;
                    z(a.d);
                    e = 0;
                    for (d = c.length; e < d; ++e) a.d[e] = c[e];
                    if (b)
                        for (z(a.aa), e = 0, d = null.d.length; e < d; ++e) c = null.d[e], q.contains(c) || a.aa.push(c)
                } else if (b)
                    for (b = a.d.length, e = 0, d = c.length; e < d; ++e) a.d[b + e] = c[e], Fa(a.aa, c[e]);
                else Ca(a.d, c);
                null.ld()
            }
            q.clear();
            L = !1
        }
    };
    d.prototype.Bo = function(a) {
        return nb(this.Xo, a)
    };
    d.prototype.ws = function() {
        return !0
    };
    d.prototype.dg = function() {
        return !0
    };
    n.e = new d;
    a.prototype.zt = function(a, b, c) {
        if (a && b && (b = this.b.Wl(a, b, this.zh(c, !0), this.zh(c, !1)))) {
            "undefined" !== typeof b.g && (b.g = this.g, b.da());
            this.b.Kc++;
            var e, d, f;
            this.b.trigger(Object.getPrototypeOf(a.xa).e.bg, b);
            if (b.$b)
                for (e = 0, d = b.siblings.length; e < d; e++) f = b.siblings[e], this.b.trigger(Object.getPrototypeOf(f.type.xa).e.bg, f);
            this.b.Kc--;
            e = this.b.Av();
            c = !1;
            if (ha(e.J.Spawn_LastExec) || e.J.Spawn_LastExec < this.b.uf) c = !0, e.J.Spawn_LastExec = this.b.uf;
            if (a != this.type && (a = a.ca(), a.ta = !1, c ? (z(a.d), a.d[0] = b) : a.d.push(b), b.$b))
                for (e = 0, d = b.siblings.length; e < d; e++) f = b.siblings[e], a = f.type.ca(), a.ta = !1, c ? (z(a.d), a.d[0] = f) : a.d.push(f)
        }
    };
    a.prototype.dt = function(a, b) {
        this.lj = a;
        this.gp = b;
        this.Oh || (this.b.jl(this), this.Oh = !0);
        this.Vj || this.lp()
    };
    a.prototype.et = function(a) {
        this.kj = a;
        this.Oh || (this.b.jl(this), this.Oh = !0);
        this.Vj || this.mp()
    };
    n.u = new a;
    n.M = new function() {}
})();

function vc(c) {
    this.b = c
}(function() {
    function c(a, b) {
        return a.length ? a.pop() : new b
    }

    function d(a, b, c) {
        if (c) {
            var e;
            c = 0;
            for (e = b.length; c < e; c++) a.length < f && a.push(b[c]);
            z(b)
        } else
            for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (a.length < f && a.push(b[e]), delete b[e])
    }

    function b(b, e, d) {
        var f = b.Lf;
        d = d.replace(/\s\s*$/, "");
        e >= f.length && f.push(c(a, Object));
        e = f[e];
        e.text = d;
        e.width = b.mn(d);
        b.dh = na(b.dh, e.width)
    }

    function k() {}
    var p = vc.prototype;
    p.F = function() {};
    p.X = function(a) {
        this.xa = a;
        this.b = a.b
    };
    var m = p.X.prototype;
    m.F = function() {
        this.I || (this.G = new Image, this.b.vo(this.G, this.hl), this.T = null)
    };
    m.qk = function() {
        this.I || (this.T = null)
    };
    m.rk = function() {
        if (!this.I && this.d.length) {
            this.T || (this.T = this.b.A.Gg(this.G, !1, this.b.Ja, this.Mi));
            var a, b;
            a = 0;
            for (b = this.d.length; a < b; a++) this.d[a].T = this.T
        }
    };
    m.nl = function() {
        this.I || this.d.length || !this.T || (this.b.A.deleteTexture(this.T), this.T = null)
    };
    m.Gk = function(a) {
        a.drawImage(this.G, 0, 0)
    };
    p.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    m = p.O.prototype;
    m.hi = function() {
        d(a, this.Lf, !0);
        d(n, this.nj, !1);
        d(t, this.oj, !1);
        Wa(this.Ge)
    };
    m.F = function() {
        this.G = this.type.G;
        this.mj = this.m[0];
        this.Ee = this.m[1];
        this.characterSet = this.m[2];
        this.text = this.m[3];
        this.Fe = this.m[4];
        this.visible = 0 === this.m[5];
        this.Tj = this.m[6] / 2;
        this.sl = this.m[7] / 2;
        this.Vx = 0 === this.m[9];
        this.hg = this.m[10];
        this.lineHeight = this.m[11];
        this.Xf = this.dh = 0;
        this.cd ? (z(this.Lf), Wa(this.nj), Wa(this.oj), Wa(this.Ge)) : (this.Lf = [], this.nj = {}, this.oj = {}, this.Ge = {});
        this.Li = !0;
        this.bn = this.width;
        this.b.A && (this.type.T || (this.type.T = this.b.A.Gg(this.type.G, !1, this.b.Ja, this.type.Mi)), this.T = this.type.T);
        this.At()
    };
    m.Fb = function() {
        var a = {
                t: this.text,
                csc: this.Fe,
                csp: this.hg,
                lh: this.lineHeight,
                tw: this.dh,
                th: this.Xf,
                lrt: this.xw,
                ha: this.Tj,
                va: this.sl,
                cw: {}
            },
            b;
        for (b in this.Ge) a.cw[b] = this.Ge[b];
        return a
    };
    m.Tb = function(a) {
        this.text = a.t;
        this.Fe = a.csc;
        this.hg = a.csp;
        this.lineHeight = a.lh;
        this.dh = a.tw;
        this.Xf = a.th;
        this.xw = a.lrt;
        a.hasOwnProperty("ha") && (this.Tj = a.ha);
        a.hasOwnProperty("va") && (this.sl = a.va);
        for (var b in a.cw) this.Ge[b] = a.cw[b];
        this.Li = !0;
        this.bn = this.width
    };
    var f = 1e3,
        a = [],
        n = [],
        t = [];
    m.At = function() {
        for (var a = this.G, b = a.width, e = a.height, a = this.mj, d = this.Ee, f = a / b, g = d / e, k = this.characterSet, b = Math.floor(b / a), e = Math.floor(e / d), h = 0; h < k.length && !(h >= b * e); h++) {
            var p = h % b,
                m = Math.floor(h / b),
                C = k.charAt(h);
            if (this.b.A) {
                var H = this.oj,
                    D = p * f,
                    K = m * g,
                    p = (p + 1) * f,
                    m = (m + 1) * g;
                void 0 === H[C] && (H[C] = c(t, va));
                H[C].left = D;
                H[C].top = K;
                H[C].right = p;
                H[C].bottom = m
            } else H = this.nj, p = p * a, m = m * d, D = a, K = d, void 0 === H[C] && (H[C] = c(n, Object)), H[C].x = p, H[C].y = m, H[C].Qr = D, H[C].Fp = K
        }
    };
    var e = [];
    p.Ft = function(a) {
        z(e);
        for (var b = "", c, d = 0; d < a.length;)
            if (c = a.charAt(d), "\n" === c) b.length && (e.push(b), b = ""), e.push("\n"), ++d;
            else if (" " === c || "	" === c || "-" === c) {
            do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "	" === a.charAt(d)));
            e.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && e.push(b)
    };
    p.Kt = function(b) {
        var e = b.text,
            f = b.Lf;
        if (e && e.length) {
            var k = b.width;
            if (2 >= k) d(a, f, !0);
            else {
                var h = b.Fe,
                    g = b.hg;
                if (e.length * (b.mj * h + g) - g <= k && -1 === e.indexOf("\n") && (g = b.mn(e), g <= k)) {
                    d(a, f, !0);
                    f.push(c(a, Object));
                    f[0].text = e;
                    f[0].width = g;
                    b.dh = g;
                    b.Xf = b.Ee * h + b.lineHeight;
                    return
                }
                this.Lt(b);
                b.Xf = f.length * (b.Ee * h + b.lineHeight)
            }
        } else d(a, f, !0)
    };
    p.Lt = function(c) {
        var d = c.Vx,
            k = c.text,
            h = c.Lf,
            p = c.width;
        d && (this.Ft(k), k = e);
        var g = "",
            m, n, t, y = 0,
            C = !1;
        for (t = 0; t < k.length; t++) "\n" === k[t] ? (!0 === C ? C = !1 : (b(c, y, g), y++), g = "") : (C = !1, m = g, g += k[t], n = c.mn(g.replace(/\s\s*$/, "")), n > p && ("" === m ? (b(c, y, g), g = "", C = !0) : (b(c, y, m), g = k[t]), y++, d || " " !== g || (g = "")));
        g.replace(/\s\s*$/, "").length && (b(c, y, g), y++);
        for (t = y; t < h.length; t++) a.length < f && a.push(h[t]);
        h.length = y
    };
    m.mn = function(a) {
        for (var b = this.hg, c = a.length, e = 0, d = 0; d < c; d++) e += this.rm(a.charAt(d)) * this.Fe + b;
        return e - (0 < e ? b : 0)
    };
    m.rm = function(a) {
        var b = this.Ge;
        return void 0 !== b[a] ? b[a] : this.mj
    };
    m.Yq = function() {
        if (this.Li || this.width !== this.bn) this.Xf = this.dh = 0, this.type.xa.Kt(this), this.Li = !1, this.bn = this.width
    };
    m.Zd = function(a) {
        var b = this.G;
        if ("" !== this.text && null != b && (this.Yq(), !(this.height < this.Ee * this.Fe + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.rd && (b = Math.round(b), c = Math.round(c));
            var e = this.k.za,
                d = this.k.Aa,
                f = this.k.Ea,
                k = this.k.Da;
            a.save();
            a.translate(b, c);
            a.rotate(this.g);
            for (var h = this.g, p = this.Tj, m = this.Fe, n = this.Ee * m, t = this.lineHeight, D = this.hg, K = this.Lf, N, Z = -(this.Yb * this.width), I = -(this.Zb * this.height), I = I + this.sl * na(0, this.height - this.Xf), A, O, Q, x = 0; x < K.length; x++) {
                var v = K[x].text;
                N = p * na(0, this.width - K[x].width);
                A = Z + N;
                I += t;
                if (0 === h && c + I + n < d) I += n;
                else {
                    for (var u = 0; u < v.length; u++) {
                        O = v.charAt(u);
                        N = this.rm(O);
                        var F = this.nj[O];
                        if (0 === h && b + A + N * m + D < e) A += N * m + D;
                        else {
                            if (A + N * m > this.width + 1e-5) break;
                            void 0 !== F && (O = A, Q = I, 0 === h && (O = Math.round(O), Q = Math.round(Q)), a.drawImage(this.G, F.x, F.y, F.Qr, F.Fp, O, Q, F.Qr * m, F.Fp * m));
                            A += N * m + D;
                            if (0 === h && b + A > f) break
                        }
                    }
                    I += n;
                    if (0 === h && (I + n + t > this.height || c + I > k)) break
                }
            }
            a.restore()
        }
    };
    var h = new wa;
    m.uc = function(a) {
        a.Cc(this.T);
        a.Tf(this.opacity);
        if (this.text && (this.Yq(), !(this.height < this.Ee * this.Fe + this.lineHeight))) {
            this.Ca();
            var b = this.sc,
                c = 0,
                e = 0;
            this.b.rd && (c = Math.round(this.x) - this.x, e = Math.round(this.y) - this.y);
            var d = this.k.za,
                f = this.k.Aa,
                k = this.k.Ea,
                p = this.k.Da,
                m = this.g,
                n = this.Tj,
                t = this.sl,
                H = this.Fe,
                D = this.Ee * H,
                K = this.lineHeight,
                N = this.hg,
                Z = this.Lf,
                I = this.Xf,
                A, O, Q;
            0 !== m && (O = Math.cos(m), Q = Math.sin(m));
            for (var c = b.Xa + c, b = b.Ya + e, x, t = t * na(0, this.height - I), v, u, I = 0; I < Z.length; I++)
                if (e = Z[I].text, x = A = n * na(0, this.width - Z[I].width), t += K, 0 === m && b + t + D < f) t += D;
                else {
                    for (var F = 0; F < e.length; F++) {
                        var E = e.charAt(F);
                        A = this.rm(E);
                        E = this.oj[E];
                        if (0 === m && c + x + A * H + N < d) x += A * H + N;
                        else {
                            if (x + A * H > this.width + 1e-5) break;
                            if (void 0 !== E) {
                                var S = this.mj * H,
                                    G = this.Ee * H;
                                v = x;
                                u = t;
                                0 === m && (v = Math.round(v), u = Math.round(u));
                                h.Xa = v;
                                h.Ya = u;
                                h.ub = v + S;
                                h.wb = u;
                                h.kb = v;
                                h.lb = u + G;
                                h.mb = v + S;
                                h.nb = u + G;
                                0 !== m && (v = h, u = O, S = Q, G = void 0, G = v.Xa * u - v.Ya * S, v.Ya = v.Ya * u + v.Xa * S, v.Xa = G, G = v.ub * u - v.wb * S, v.wb = v.wb * u + v.ub * S, v.ub = G, G = v.kb * u - v.lb * S, v.lb = v.lb * u + v.kb * S, v.kb = G, G = v.mb * u - v.nb * S, v.nb = v.nb * u + v.mb * S, v.mb = G);
                                h.offset(c, b);
                                a.Kd(h.Xa, h.Ya, h.ub, h.wb, h.mb, h.nb, h.kb, h.lb, E)
                            }
                            x += A * H + N;
                            if (0 === m && c + x > k) break
                        }
                    }
                    t += D;
                    if (0 === m && (t + D + K > this.height || b + t > p)) break
                }
        }
    };
    p.e = new function() {};
    k.prototype.nt = function(a) {
        ia(a) && 1e9 > a && (a = Math.round(1e10 * a) / 1e10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Li = !0, this.b.pa = !0)
    };
    m.Ll = function(a, b) {
        var c = parseInt(b, 10);
        this.Ge[a] !== c && (this.Ge[a] = c, this.Li = !0, this.b.pa = !0)
    };
    p.u = new k;
    p.M = new function() {}
})();

function wc(c) {
    this.b = c
}(function() {
    var c = wc.prototype;
    c.X = function(b) {
        this.xa = b;
        this.b = b.b
    };
    var d = c.X.prototype;
    d.F = function() {
        this.I || (this.G = new Image, this.G.ip = this.ho, this.b.vo(this.G, this.hl), this.T = this.pattern = null)
    };
    d.qk = function() {
        this.I || (this.T = null)
    };
    d.rk = function() {
        if (!this.I && this.d.length) {
            this.T || (this.T = this.b.A.Gg(this.G, !0, this.b.Ja, this.Mi));
            var b, c;
            b = 0;
            for (c = this.d.length; b < c; b++) this.d[b].T = this.T
        }
    };
    d.dn = function() {
        this.I || this.T || !this.b.A || (this.T = this.b.A.Gg(this.G, !0, this.b.Ja, this.Mi))
    };
    d.nl = function() {
        this.I || this.d.length || !this.T || (this.b.A.deleteTexture(this.T), this.T = null)
    };
    d.Gk = function(b) {
        b.drawImage(this.G, 0, 0)
    };
    c.O = function(b) {
        this.type = b;
        this.b = b.b
    };
    d = c.O.prototype;
    d.F = function() {
        this.visible = 0 === this.m[0];
        this.ri = new va(0, 0, 0, 0);
        this.Jp = !1;
        this.G = this.type.G;
        this.b.A ? (this.type.dn(), this.T = this.type.T) : (this.type.pattern || (this.type.pattern = this.b.Ka.createPattern(this.type.G, "repeat")), this.pattern = this.type.pattern)
    };
    d.Qd = function() {
        this.Jp = !1;
        this.G = this.type.G
    };
    d.hi = function() {
        this.b.A && this.Jp && this.T && (this.b.A.deleteTexture(this.T), this.T = null)
    };
    d.Zd = function(b) {
        b.globalAlpha = this.opacity;
        b.save();
        b.fillStyle = this.pattern;
        var c = this.x,
            d = this.y;
        this.b.rd && (c = Math.round(c), d = Math.round(d));
        var m = -(this.Yb * this.width),
            f = -(this.Zb * this.height),
            a = m % this.G.width,
            n = f % this.G.height;
        0 > a && (a += this.G.width);
        0 > n && (n += this.G.height);
        b.translate(c, d);
        b.rotate(this.g);
        b.translate(a, n);
        b.fillRect(m - a, f - n, this.width, this.height);
        b.restore()
    };
    d.nf = function(b) {
        this.uc(b)
    };
    d.uc = function(b) {
        b.Cc(this.T);
        b.Tf(this.opacity);
        var c = this.ri;
        c.right = this.width / this.G.width;
        c.bottom = this.height / this.G.height;
        var d = this.sc;
        if (this.b.rd) {
            var m = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Kd(d.Xa + m, d.Ya + f, d.ub + m, d.wb + f, d.mb + m, d.nb + f, d.kb + m, d.lb + f, c)
        } else b.Kd(d.Xa, d.Ya, d.ub, d.wb, d.mb, d.nb, d.kb, d.lb, c)
    };
    c.e = new function() {};
    c.u = new function() {};
    c.M = new function() {}
})();

function xc(c) {
    this.b = c
}(function() {
    function c(a) {
        n = a.x;
        t = a.y;
        e = a.z
    }

    function d(a, c, e, d) {
        var f;
        f = h.length ? h.pop() : new b;
        f.init(a, c, e, d);
        return f
    }

    function b() {
        this.Hi = this.id = this.y = this.x = this.dl = this.cl = this.$m = this.time = this.co = 0;
        this.Qi = this.ll = !1
    }

    function k() {}

    function p() {}
    var m = xc.prototype;
    m.X = function(a) {
        this.xa = a;
        this.b = a.b
    };
    m.X.prototype.F = function() {};
    m.O = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.pn = !1
    };
    var f = m.O.prototype,
        a = {
            left: 0,
            top: 0
        };
    f.vf = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var n = 0,
        t = 0,
        e = 0,
        h = [];
    b.prototype.init = function(a, b, c, e) {
        var d = Xa();
        this.co = this.$m = this.time = d;
        this.cl = a;
        this.dl = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Hi = e;
        this.Qi = this.ll = !1
    };
    b.prototype.update = function(a, b, c, e, d, f) {
        this.$m = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = e;
        this.height = d;
        this.pressure = f;
        !this.Qi && 15 <= Ta(this.cl, this.dl, this.x, this.y) && (this.Qi = !0)
    };
    b.prototype.Bw = function(a, b) {
        !this.ll && 500 <= Xa() - this.co && !this.Qi && 15 > Ta(this.cl, this.dl, this.x, this.y) && (this.ll = !0, a.Od = this.Hi, a.Yf = this.id, a.pg = b, a.b.trigger(xc.prototype.e.Gs, a), a.Wd = this.x, a.Xd = this.y, a.b.trigger(xc.prototype.e.Hs, a), a.pg = 0)
    };
    var w = -1e3,
        l = -1e3,
        J = -1e4;
    b.prototype.vq = function(a, b) {
        if (!this.ll) {
            var c = Xa();
            333 >= c - this.co && !this.Qi && 15 > Ta(this.cl, this.dl, this.x, this.y) && (a.Od = this.Hi, a.Yf = this.id, a.pg = b, 666 >= c - J && 25 > Ta(w, l, this.x, this.y) ? (a.b.trigger(xc.prototype.e.zs, a), a.Wd = this.x, a.Xd = this.y, a.b.trigger(xc.prototype.e.As, a), l = w = -1e3, J = -1e4) : (a.b.trigger(xc.prototype.e.Us, a), a.Wd = this.x, a.Xd = this.y, a.b.trigger(xc.prototype.e.Vs, a), w = this.x, l = this.y, J = c), a.pg = 0)
        }
    };
    f.F = function() {
        this.sw = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.pg = this.Yf = this.Od = this.Xd = this.Wd = this.Ro = this.Qo = this.Po = this.Ot = this.Nt = this.Mt = this.yk = this.xk = this.wk = 0;
        this.Qx = 0 !== this.m[0];
        var a = 0 < this.b.Xb ? document : this.b.canvas,
            b = document;
        this.b.Ab ? b = a = window.Canvas : this.b.vc && (b = a = window);
        var e = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
            e.ki(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            e.ji(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            e.je(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            e.je(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            e.ki(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            e.ji(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            e.je(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            e.je(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            e.vk(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            e.uk(a)
        }, !1), b.addEventListener("touchend", function(a) {
            e.Pg(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            e.Pg(a, !0)
        }, !1));
        if (this.sw) {
            var d = function(a) {
                    a = a.reading;
                    e.Po = a.accelerationX;
                    e.Qo = a.accelerationY;
                    e.Ro = a.accelerationZ
                },
                f = function(a) {
                    a = a.reading;
                    e.wk = a.yawDegrees;
                    e.xk = a.pitchDegrees;
                    e.yk = a.rollDegrees
                },
                k = Windows.Devices.Sensors.Accelerometer.getDefault();
            k && (k.reportInterval = Math.max(k.minimumReportInterval, 16), k.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", f));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (k && k.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", f)) : (k && k.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", f))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            e.wk = a.alpha || 0;
            e.xk = a.beta || 0;
            e.yk = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (e.Mt = a.accelerationIncludingGravity.x || 0, e.Nt = a.accelerationIncludingGravity.y || 0, e.Ot = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (e.Po = a.acceleration.x || 0, e.Qo = a.acceleration.y || 0, e.Ro = a.acceleration.z || 0)
        }, !1);
        this.Qx && !this.b.Ia && (jQuery(document).mousemove(function(a) {
            e.An(a)
        }), jQuery(document).mousedown(function(a) {
            e.zn(a)
        }), jQuery(document).mouseup(function(a) {
            e.Bn(a)
        }));
        !this.b.Ag && this.b.kc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(c, null, {
            frequency: 40
        });
        this.b.Jx(this)
    };
    f.ji = function(b) {
        if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType) {
            b.preventDefault && b.preventDefault();
            var c = this.vf(b.pointerId),
                e = Xa();
            if (0 <= c) {
                var d = this.b.Ia ? a : jQuery(this.b.canvas).offset(),
                    c = this.touches[c];
                2 > e - c.time || c.update(e, b.pageX - d.left, b.pageY - d.top, b.width || 0, b.height || 0, b.pressure || 0)
            }
        }
    };
    f.ki = function(b) {
        if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType) {
            b.preventDefault && ob(b) && b.preventDefault();
            var c = this.b.Ia ? a : jQuery(this.b.canvas).offset(),
                e = b.pageX - c.left,
                c = b.pageY - c.top;
            Xa();
            this.Od = this.touches.length;
            this.Yf = b.pointerId;
            this.touches.push(d(e, c, b.pointerId, this.Od));
            this.b.wc = !0;
            this.b.trigger(xc.prototype.e.Go, this);
            this.b.trigger(xc.prototype.e.Io, this);
            this.Wd = e;
            this.Xd = c;
            this.b.trigger(xc.prototype.e.Dl, this);
            this.b.wc = !1
        }
    };
    f.je = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.vf(a.pointerId);
            this.Od = 0 <= c ? this.touches[c].Hi : -1;
            this.Yf = 0 <= c ? this.touches[c].id : -1;
            this.b.wc = !0;
            this.b.trigger(xc.prototype.e.Fo, this);
            this.b.trigger(xc.prototype.e.Cl, this);
            0 <= c && (b || this.touches[c].vq(this, c), 100 > h.length && h.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.wc = !1
        }
    };
    f.uk = function(b) {
        b.preventDefault && b.preventDefault();
        var c = Xa(),
            e, d, f, k;
        e = 0;
        for (d = b.changedTouches.length; e < d; e++)
            if (f = b.changedTouches[e], k = this.vf(f.identifier), 0 <= k) {
                var h = this.b.Ia ? a : jQuery(this.b.canvas).offset();
                k = this.touches[k];
                2 > c - k.time || k.update(c, f.pageX - h.left, f.pageY - h.top, 2 * (f.Az || f.Hz || f.sz || f.wz || 0), 2 * (f.Bz || f.Iz || f.uz || f.xz || 0), f.mz || f.Gz || f.rz || f.vz || 0)
            }
    };
    f.vk = function(b) {
        b.preventDefault && ob(b) && b.preventDefault();
        var c = this.b.Ia ? a : jQuery(this.b.canvas).offset();
        Xa();
        this.b.wc = !0;
        var e, f, k, h;
        e = 0;
        for (f = b.changedTouches.length; e < f; e++)
            if (k = b.changedTouches[e], h = this.vf(k.identifier), -1 === h) {
                h = k.pageX - c.left;
                var p = k.pageY - c.top;
                this.Od = this.touches.length;
                this.Yf = k.identifier;
                this.touches.push(d(h, p, k.identifier, this.Od));
                this.b.trigger(xc.prototype.e.Go, this);
                this.b.trigger(xc.prototype.e.Io, this);
                this.Wd = h;
                this.Xd = p;
                this.b.trigger(xc.prototype.e.Dl, this)
            }
        this.b.wc = !1
    };
    f.Pg = function(a, b) {
        a.preventDefault && ob(a) && a.preventDefault();
        this.b.wc = !0;
        var c, e, d;
        c = 0;
        for (e = a.changedTouches.length; c < e; c++) d = a.changedTouches[c], d = this.vf(d.identifier), 0 <= d && (this.Od = this.touches[d].Hi, this.Yf = this.touches[d].id, this.b.trigger(xc.prototype.e.Fo, this), this.b.trigger(xc.prototype.e.Cl, this), b || this.touches[d].vq(this, d), 100 > h.length && h.push(this.touches[d]), this.touches.splice(d, 1));
        this.b.wc = !1
    };
    f.Ll = function() {
        return this.b.kc && 0 === this.wk && 0 !== e ? 90 * e : this.wk
    };
    f.kz = function() {
        return this.b.kc && 0 === this.xk && 0 !== t ? 90 * t : this.xk
    };
    f.lz = function() {
        return this.b.kc && 0 === this.yk && 0 !== n ? 90 * n : this.yk
    };
    f.zn = function(a) {
        this.vk({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.pn = !0
    };
    f.An = function(a) {
        this.pn && this.uk({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    f.Bn = function(a) {
        a.preventDefault && this.b.Gp && !this.b.sg && a.preventDefault();
        this.b.Gp = !0;
        this.Pg({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.pn = !1
    };
    f.Oi = function() {
        var a, b, c, e = Xa();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= e - 50 && (c.$m = e), c.Bw(this, a)
    };
    k.prototype.Io = function() {
        return !0
    };
    k.prototype.Cl = function() {
        return !0
    };
    k.prototype.Dl = function(a) {
        return a ? this.b.fl(a, this.Wd, this.Xd) : !1
    };
    k.prototype.Go = function(a) {
        a = Math.floor(a);
        return a === this.Od
    };
    k.prototype.Fo = function(a) {
        a = Math.floor(a);
        return a === this.Od
    };
    k.prototype.Gs = function() {
        return !0
    };
    k.prototype.Us = function() {
        return !0
    };
    k.prototype.zs = function() {
        return !0
    };
    k.prototype.Hs = function(a) {
        return a ? this.b.fl(a, this.Wd, this.Xd) : !1
    };
    k.prototype.Vs = function(a) {
        return a ? this.b.fl(a, this.Wd, this.Xd) : !1
    };
    k.prototype.As = function(a) {
        return a ? this.b.fl(a, this.Wd, this.Xd) : !1
    };
    m.e = new k;
    p.prototype.No = function(a, b) {
        var c = this.pg;
        if (0 > c || c >= this.touches.length) a.n(0);
        else {
            var e, d, f, k, h;
            ha(b) ? (e = this.b.ng(0), d = e.scale, f = e.zd, k = e.$c, h = e.g, e.scale = 1, e.zd = 1, e.$c = 1, e.g = 0, a.n(e.Za(this.touches[c].x, this.touches[c].y, !0)), e.scale = d, e.zd = f, e.$c = k, e.g = h) : (e = ia(b) ? this.b.ng(b) : this.b.Pj(b)) ? a.n(e.Za(this.touches[c].x, this.touches[c].y, !0)) : a.n(0)
        }
    };
    p.prototype.Oo = function(a, b) {
        var c = this.pg;
        if (0 > c || c >= this.touches.length) a.n(0);
        else {
            var e, d, f, k, h;
            ha(b) ? (e = this.b.ng(0), d = e.scale, f = e.zd, k = e.ad, h = e.g, e.scale = 1, e.zd = 1, e.ad = 1, e.g = 0, a.n(e.Za(this.touches[c].x, this.touches[c].y, !1)), e.scale = d, e.zd = f, e.ad = k, e.g = h) : (e = ia(b) ? this.b.ng(b) : this.b.Pj(b)) ? a.n(e.Za(this.touches[c].x, this.touches[c].y, !1)) : a.n(0)
        }
    };
    p.prototype.Sr = function(a, b) {
        var c = this.vf(b);
        0 > c ? a.n(0) : a.n(this.touches[c].x)
    };
    p.prototype.Tr = function(a, b) {
        var c = this.vf(b);
        0 > c ? a.n(0) : a.n(this.touches[c].y)
    };
    p.prototype.Gt = function(a) {
        a.n(this.Yf)
    };
    m.M = new p
})();

function yc(c) {
    this.b = c
}(function() {
    function c() {}

    function d() {}

    function b() {}
    var k = yc.prototype;
    k.X = function(a) {
        this.xa = a;
        this.b = a.b
    };
    k.X.prototype.F = function() {};
    k.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    var p = k.O.prototype,
        m = "",
        f = "undefined" !== typeof window.is_scirra_arcade;
    f && (m = "arcade" + window.scirra_arcade_id);
    var a = !1;
    try {
        localStorage.getItem("test"), a = !0
    } catch (n) {
        a = !1
    }
    p.F = function() {
        a || ea("[Construct 2] Webstorage plugin: local storage is not supported on this platform.")
    };
    c.prototype.us = function(b) {
        return a ? null != localStorage.getItem(m + b) : !1
    };
    c.prototype.Os = function() {
        return !0
    };
    k.e = new c;
    d.prototype.Dt = function(b, c) {
        if (a) try {
            localStorage.setItem(m + b, c)
        } catch (d) {
            this.b.trigger(yc.prototype.e.Os, this)
        }
    };
    k.u = new d;
    b.prototype.vs = function(b, c) {
        a ? b.Gb(localStorage.getItem(m + c) || "") : b.Gb("")
    };
    b.prototype.zo = function(b) {
        if (a) {
            var c = {},
                d, k, p;
            d = 0;
            for (k = localStorage.length; d < k; d++) p = localStorage.key(d), f ? p.substr(0, m.length) === m && (c[p.substr(m.length)] = localStorage.getItem(p)) : c[p] = localStorage.getItem(p);
            b.Gb(JSON.stringify({
                c2dictionary: !0,
                data: c
            }))
        } else b.Gb("")
    };
    k.M = new b
})();

function zc(c) {
    this.b = c;
    var d = this;
    this.b.Ia || (jQuery(document).mousemove(function(b) {
        d.An(b)
    }), jQuery(document).mousedown(function(b) {
        d.zn(b)
    }), jQuery(document).mouseup(function(b) {
        d.Bn(b)
    }));
    c = 0 < this.b.Xb ? document : this.b.canvas;
    this.b.Ab ? c = window.Canvas : this.b.vc && (c = window);
    window.navigator.pointerEnabled ? (c.addEventListener("pointerdown", function(b) {
        d.ki(b)
    }, !1), c.addEventListener("pointermove", function(b) {
        d.ji(b)
    }, !1), c.addEventListener("pointerup", function(b) {
        d.je(b)
    }, !1), c.addEventListener("pointercancel", function(b) {
        d.je(b)
    }, !1)) : window.navigator.msPointerEnabled ? (c.addEventListener("MSPointerDown", function(b) {
        d.ki(b)
    }, !1), c.addEventListener("MSPointerMove", function(b) {
        d.ji(b)
    }, !1), c.addEventListener("MSPointerUp", function(b) {
        d.je(b)
    }, !1), c.addEventListener("MSPointerCancel", function(b) {
        d.je(b)
    }, !1)) : (c.addEventListener("touchstart", function(b) {
        d.vk(b)
    }, !1), c.addEventListener("touchmove", function(b) {
        d.uk(b)
    }, !1), c.addEventListener("touchend", function(b) {
        d.Pg(b)
    }, !1), c.addEventListener("touchcancel", function(b) {
        d.Pg(b)
    }, !1))
}(function() {
    function c(c) {
        var d, a;
        d = 0;
        for (a = c.H.length; d < a; d++)
            if (c.H[d] instanceof b.O) return c.H[d];
        return null
    }

    function d() {}
    var b = zc.prototype,
        k = {
            left: 0,
            top: 0
        };
    b.zn = function(b) {
        1 === b.which && this.wn("leftmouse", b.pageX, b.pageY)
    };
    b.An = function(b) {
        1 === b.which && this.xn("leftmouse", b.pageX, b.pageY)
    };
    b.Bn = function(b) {
        1 === b.which && this.yn("leftmouse")
    };
    b.vk = function(b) {
        b.preventDefault && ob(b) && b.preventDefault();
        var c, a, d, k;
        c = 0;
        for (a = b.changedTouches.length; c < a; c++) d = b.changedTouches[c], k = d.identifier, this.wn(k ? k.toString() : "<none>", d.pageX, d.pageY)
    };
    b.uk = function(b) {
        b.preventDefault && b.preventDefault();
        var c, a, d, k;
        c = 0;
        for (a = b.changedTouches.length; c < a; c++) d = b.changedTouches[c], k = d.identifier, this.xn(k ? k.toString() : "<none>", d.pageX, d.pageY)
    };
    b.Pg = function(b) {
        b.preventDefault && ob(b) && b.preventDefault();
        var c, a, d;
        c = 0;
        for (a = b.changedTouches.length; c < a; c++) d = b.changedTouches[c], d = d.identifier, this.yn(d ? d.toString() : "<none>")
    };
    b.ki = function(b) {
        b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType && (b.preventDefault && ob(b) && b.preventDefault(), this.wn(b.pointerId.toString(), b.pageX, b.pageY))
    };
    b.ji = function(b) {
        b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType && (b.preventDefault && b.preventDefault(), this.xn(b.pointerId.toString(), b.pageX, b.pageY))
    };
    b.je = function(b) {
        b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType && (b.preventDefault && ob(b) && b.preventDefault(), this.yn(b.pointerId.toString()))
    };
    b.wn = function(b, d, a) {
        var p = this.b.Ia ? k : jQuery(this.b.canvas).offset();
        d = d - p.left;
        a = a - p.top;
        var t, e, h, w, p = this.Qf.hd(),
            l, J, q, L = null;
        l = 0;
        for (J = p.length; l < J; l++)
            if (q = p[l], t = c(q), t.enabled && !t.mf && (t = q.k.Za(d, a, !0), e = q.k.Za(d, a, !1), q.Ca(), q.Pb(t, e))) L ? q.k.index > L.k.index ? (L = q, h = t, w = e) : q.k.index === L.k.index && q.Uc() > L.Uc() && (L = q, h = t, w = e) : (L = q, h = t, w = e);
        L && c(L).Hw(b, h, w)
    };
    b.xn = function(b, d, a) {
        var p = this.b.Ia ? k : jQuery(this.b.canvas).offset();
        d = d - p.left;
        a = a - p.top;
        var t, e = this.Qf.hd(),
            h, w, l;
        h = 0;
        for (w = e.length; h < w; h++) t = e[h], l = c(t), !l.enabled || !l.mf || l.mf && l.fm !== b || (p = t.k.Za(d, a, !0), t = t.k.Za(d, a, !1), l.Lw(p, t))
    };
    b.yn = function(b) {
        var d = this.Qf.hd(),
            a, k, p;
        a = 0;
        for (k = d.length; a < k; a++) p = d[a], p = c(p), p.mf && p.fm === b && p.Nw()
    };
    b.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    b.X.prototype.F = function() {};
    b.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b
    };
    var p = b.O.prototype;
    p.F = function() {
        this.mf = !1;
        this.ga = this.fa = 0;
        this.fm = "<none>";
        this.Kl = this.m[0];
        this.enabled = 0 !== this.m[1]
    };
    p.Fb = function() {
        return {
            enabled: this.enabled
        }
    };
    p.Tb = function(b) {
        this.enabled = b.enabled;
        this.mf = !1
    };
    p.Hw = function(b, c, a) {
        this.fa = c - this.c.x;
        this.ga = a - this.c.y;
        this.mf = !0;
        this.fm = b;
        this.b.wc = !0;
        this.b.trigger(zc.prototype.e.Bs, this.c);
        this.b.wc = !1
    };
    p.Lw = function(b, c) {
        var a = b - this.fa,
            d = c - this.ga;
        if (0 === this.Kl) {
            if (this.c.x !== a || this.c.y !== d) this.c.x = a, this.c.y = d, this.c.da()
        } else 1 === this.Kl ? this.c.x !== a && (this.c.x = a, this.c.da()) : 2 === this.Kl && this.c.y !== d && (this.c.y = d, this.c.da())
    };
    p.Nw = function() {
        this.mf = !1;
        this.b.wc = !0;
        this.b.trigger(zc.prototype.e.Cs, this.c);
        this.b.wc = !1
    };
    p.Na = function() {};
    d.prototype.Bs = function() {
        return !0
    };
    d.prototype.Cs = function() {
        return !0
    };
    b.e = new d;
    b.u = new function() {};
    b.M = new function() {}
})();

function Ac(c) {
    this.b = c
}(function() {
    function c() {}
    var d = Ac.prototype;
    d.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    d.X.prototype.F = function() {};
    d.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b;
        this.Zk = this.Yk = this.Xk = this.$k = this.Gm = this.vi = this.Uh = this.sh = this.Ri = !1;
        this.Zm = this.Ym = this.Xm = this.an = -1;
        this.ga = this.fa = 0
    };
    var b = d.O.prototype;
    b.F = function() {
        this.di = this.m[0];
        this.ic = this.m[1];
        this.Cd = this.m[2];
        this.em = this.m[3];
        this.Hl = this.m[4];
        this.fu = 1 === this.m[5];
        this.enabled = 0 !== this.m[6];
        this.fu && !this.b.Ia && (jQuery(document).keydown(function(b) {
            return function(c) {
                b.Jw(c)
            }
        }(this)), jQuery(document).keyup(function(b) {
            return function(c) {
                b.Kw(c)
            }
        }(this)))
    };
    b.Fb = function() {
        return {
            dx: this.fa,
            dy: this.ga,
            enabled: this.enabled,
            maxspeed: this.di,
            acc: this.ic,
            dec: this.Cd,
            ignoreInput: this.Gm
        }
    };
    b.Tb = function(b) {
        this.fa = b.dx;
        this.ga = b.dy;
        this.enabled = b.enabled;
        this.di = b.maxspeed;
        this.ic = b.acc;
        this.Cd = b.dec;
        this.Gm = b.ignoreInput;
        this.Zk = this.Yk = this.Xk = this.$k = this.vi = this.Uh = this.sh = this.Ri = !1;
        this.Zm = this.Ym = this.Xm = this.an = -1
    };
    b.Jw = function(b) {
        var c = this.b.$e;
        switch (b.which) {
            case 37:
                b.preventDefault();
                this.Ym < c && (this.Uh = !0);
                break;
            case 38:
                b.preventDefault();
                this.an < c && (this.Ri = !0);
                break;
            case 39:
                b.preventDefault();
                this.Zm < c && (this.vi = !0);
                break;
            case 40:
                b.preventDefault(), this.Xm < c && (this.sh = !0)
        }
    };
    b.Kw = function(b) {
        var c = this.b.$e;
        switch (b.which) {
            case 37:
                b.preventDefault();
                this.Uh = !1;
                this.Ym = c;
                break;
            case 38:
                b.preventDefault();
                this.Ri = !1;
                this.an = c;
                break;
            case 39:
                b.preventDefault();
                this.vi = !1;
                this.Zm = c;
                break;
            case 40:
                b.preventDefault(), this.sh = !1, this.Xm = c
        }
    };
    b.Qg = function() {
        this.vi = this.Uh = this.sh = this.Ri = !1
    };
    b.Na = function() {
        var b = this.b.xf(this.c),
            c = this.Uh || this.Yk,
            d = this.vi || this.Zk,
            f = this.Ri || this.$k,
            a = this.sh || this.Xk;
        this.Xk = this.$k = this.Zk = this.Yk = !1;
        if (this.enabled) {
            var n = this.b.ah(this.c);
            if (n && (this.b.Lk(this.c, n), !this.b.ax(this.c))) return;
            this.Gm && (a = f = d = c = !1);
            0 === this.em ? d = c = !1 : 1 === this.em && (a = f = !1);
            2 === this.em && (f || a) && (d = c = !1);
            c == d && (0 > this.fa ? (this.fa += this.Cd * b, 0 < this.fa && (this.fa = 0)) : 0 < this.fa && (this.fa -= this.Cd * b, 0 > this.fa && (this.fa = 0)));
            f == a && (0 > this.ga ? (this.ga += this.Cd * b, 0 < this.ga && (this.ga = 0)) : 0 < this.ga && (this.ga -= this.Cd * b, 0 > this.ga && (this.ga = 0)));
            c && !d && (this.fa = 0 < this.fa ? this.fa - (this.ic + this.Cd) * b : this.fa - this.ic * b);
            d && !c && (this.fa = 0 > this.fa ? this.fa + (this.ic + this.Cd) * b : this.fa + this.ic * b);
            f && !a && (this.ga = 0 < this.ga ? this.ga - (this.ic + this.Cd) * b : this.ga - this.ic * b);
            a && !f && (this.ga = 0 > this.ga ? this.ga + (this.ic + this.Cd) * b : this.ga + this.ic * b);
            if (0 !== this.fa || 0 !== this.ga) {
                Math.sqrt(this.fa * this.fa + this.ga * this.ga) > this.di && (n = Math.atan2(this.ga, this.fa), this.fa = this.di * Math.cos(n), this.ga = this.di * Math.sin(n));
                d = this.c.x;
                f = this.c.y;
                c = this.c.g;
                this.c.x += this.fa * b;
                this.c.da();
                if (n = this.b.ah(this.c)) this.c.x = d, this.fa = 0, this.c.da(), this.b.Lk(this.c, n);
                this.c.y += this.ga * b;
                this.c.da();
                if (n = this.b.ah(this.c)) this.c.y = f, this.ga = 0, this.c.da(), this.b.Lk(this.c, n);
                b = mb(this.fa);
                n = mb(this.ga);
                if (0 !== b || 0 !== n) 1 === this.Hl ? this.c.g = La(90 * Math.round(Ha(Math.atan2(n, b)) / 90)) : 2 === this.Hl ? this.c.g = La(45 * Math.round(Ha(Math.atan2(n, b)) / 45)) : 3 === this.Hl && (this.c.g = Math.atan2(n, b));
                this.c.da();
                this.c.g != c && (n = this.b.ah(this.c)) && (this.c.g = c, this.c.da(), this.b.Lk(this.c, n))
            }
        }
    };
    d.e = new function() {};
    c.prototype.Mo = function() {
        this.ga = this.fa = 0
    };
    c.prototype.$s = function() {
        this.fa *= -1;
        this.ga *= -1
    };
    c.prototype.yt = function(b) {
        switch (b) {
            case 0:
                this.Yk = !0;
                break;
            case 1:
                this.Zk = !0;
                break;
            case 2:
                this.$k = !0;
                break;
            case 3:
                this.Xk = !0
        }
    };
    d.u = new c;
    d.M = new function() {}
})();

function Bc(c) {
    this.b = c
}(function() {
    function c() {}

    function d() {}
    var b = Bc.prototype;
    b.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    b.X.prototype.F = function() {};
    b.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b
    };
    var k = b.O.prototype;
    k.F = function() {
        this.El = 1 === this.m[0];
        this.hr = !1;
        this.wh = this.m[1];
        this.Wi = this.m[2];
        this.Dj = this.m[3];
        this.hu = this.m[4];
        this.Dc = this.El ? 0 : 3;
        this.cd ? this.ed.reset() : this.ed = new ab;
        this.We = this.c.opacity ? this.c.opacity : 1;
        this.El && (0 === this.wh ? (this.Dc = 1, 0 === this.Wi && (this.Dc = 2)) : (this.c.opacity = 0, this.b.pa = !0))
    };
    k.Fb = function() {
        return {
            fit: this.wh,
            wt: this.Wi,
            fot: this.Dj,
            s: this.Dc,
            st: this.ed.N,
            mo: this.We
        }
    };
    k.Tb = function(b) {
        this.wh = b.fit;
        this.Wi = b.wt;
        this.Dj = b.fot;
        this.Dc = b.s;
        this.ed.reset();
        this.ed.N = b.st;
        this.We = b.mo
    };
    k.Na = function() {
        this.ed.add(this.b.xf(this.c));
        0 === this.Dc && (this.c.opacity = this.ed.N / this.wh * this.We, this.b.pa = !0, this.c.opacity >= this.We && (this.c.opacity = this.We, this.Dc = 1, this.ed.reset(), this.b.trigger(Bc.prototype.e.Es, this.c)));
        1 === this.Dc && this.ed.N >= this.Wi && (this.Dc = 2, this.ed.reset(), this.b.trigger(Bc.prototype.e.Ws, this.c));
        2 === this.Dc && 0 !== this.Dj && (this.c.opacity = this.We - this.ed.N / this.Dj * this.We, this.b.pa = !0, 0 > this.c.opacity && (this.c.opacity = 0, this.Dc = 3, this.ed.reset(), this.b.trigger(Bc.prototype.e.Fs, this.c), 1 === this.hu && this.b.we(this.c)))
    };
    k.yu = function() {
        this.Dc = 0;
        this.ed.reset();
        0 === this.wh ? (this.Dc = 1, 0 === this.Wi && (this.Dc = 2)) : (this.c.opacity = 0, this.b.pa = !0)
    };
    c.prototype.Fs = function() {
        return !0
    };
    c.prototype.Es = function() {
        return !0
    };
    c.prototype.Ws = function() {
        return !0
    };
    b.e = new c;
    d.prototype.Ct = function() {
        this.El || this.hr || (this.We = this.c.opacity ? this.c.opacity : 1, this.hr = !0);
        3 === this.Dc && this.yu()
    };
    b.u = new d;
    b.M = new function() {}
})();

function Cc(c) {
    this.b = c
}(function() {
    var c = Cc.prototype;
    c.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    c.X.prototype.F = function() {};
    c.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b
    };
    var d = c.O.prototype;
    d.F = function() {
        this.speed = B(this.m[0]);
        this.ic = B(this.m[1])
    };
    d.Fb = function() {
        return {
            speed: this.speed,
            acc: this.ic
        }
    };
    d.Tb = function(b) {
        this.speed = b.speed;
        this.ic = b.acc
    };
    d.Na = function() {
        var b = this.b.xf(this.c);
        0 !== b && (0 !== this.ic && (this.speed += this.ic * b), 0 !== this.speed && (this.c.g = Ja(this.c.g + this.speed * b), this.c.da()))
    };
    c.e = new function() {};
    c.u = new function() {};
    c.M = new function() {}
})();

function Dc(c) {
    this.b = c
}(function() {
    function c() {}

    function d() {}

    function b() {}
    var k = Dc.prototype;
    k.X = function(a) {
        this.behavior = a;
        this.b = a.b
    };
    k.X.prototype.F = function() {};
    k.O = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.c = b;
        this.b = a.b;
        this.$a = 0
    };
    var p = k.O.prototype,
        m = 2 * Math.PI,
        f = Math.PI / 2,
        a = 3 * Math.PI / 2;
    p.F = function() {
        this.Pa = 1 === this.m[0];
        this.Kg = this.m[1];
        this.xo = this.m[2];
        this.ke = this.m[3];
        this.ke += Math.random() * this.m[4];
        0 === this.ke ? this.$a = 0 : (this.$a = this.m[5] / this.ke * m, this.$a += Math.random() * this.m[6] / this.ke * m);
        this.cc = this.m[7];
        this.cc += Math.random() * this.m[8];
        this.qi = this.Df = this.ja = 0;
        this.init()
    };
    p.Fb = function() {
        return {
            i: this.$a,
            a: this.Pa,
            mv: this.Kg,
            w: this.xo,
            p: this.ke,
            mag: this.cc,
            iv: this.ja,
            iv2: this.Df,
            r: this.qi,
            lkv: this.U,
            lkv2: this.Ma
        }
    };
    p.Tb = function(a) {
        this.$a = a.i;
        this.Pa = a.a;
        this.Kg = a.mv;
        this.xo = a.w;
        this.ke = a.p;
        this.cc = a.mag;
        this.ja = a.iv;
        this.Df = a.iv2 || 0;
        this.qi = a.r;
        this.U = a.lkv;
        this.Ma = a.lkv2 || 0
    };
    p.init = function() {
        switch (this.Kg) {
            case 0:
                this.ja = this.c.x;
                break;
            case 1:
                this.ja = this.c.y;
                break;
            case 2:
                this.ja = this.c.width;
                this.qi = this.c.height / this.c.width;
                break;
            case 3:
                this.ja = this.c.width;
                break;
            case 4:
                this.ja = this.c.height;
                break;
            case 5:
                this.ja = this.c.g;
                this.cc = B(this.cc);
                break;
            case 6:
                this.ja = this.c.opacity;
                break;
            case 7:
                this.ja = 0;
                break;
            case 8:
                this.ja = this.c.x, this.Df = this.c.y
        }
        this.U = this.ja;
        this.Ma = this.Df
    };
    p.Pd = function(b) {
        b = b % m;
        switch (this.xo) {
            case 0:
                return Math.sin(b);
            case 1:
                return b <= f ? b / f : b <= a ? 1 - 2 * (b - f) / Math.PI : (b - a) / f - 1;
            case 2:
                return 2 * b / m - 1;
            case 3:
                return -2 * b / m + 1;
            case 4:
                return b < Math.PI ? -1 : 1
        }
        return 0
    };
    p.Na = function() {
        var a = this.b.xf(this.c);
        if (this.Pa && 0 !== a) {
            0 === this.ke ? this.$a = 0 : (this.$a += a / this.ke * m, this.$a = this.$a % m);
            switch (this.Kg) {
                case 0:
                    this.c.x !== this.U && (this.ja += this.c.x - this.U);
                    this.c.x = this.ja + this.Pd(this.$a) * this.cc;
                    this.U = this.c.x;
                    break;
                case 1:
                    this.c.y !== this.U && (this.ja += this.c.y - this.U);
                    this.c.y = this.ja + this.Pd(this.$a) * this.cc;
                    this.U = this.c.y;
                    break;
                case 2:
                    this.c.width = this.ja + this.Pd(this.$a) * this.cc;
                    this.c.height = this.c.width * this.qi;
                    break;
                case 3:
                    this.c.width = this.ja + this.Pd(this.$a) * this.cc;
                    break;
                case 4:
                    this.c.height = this.ja + this.Pd(this.$a) * this.cc;
                    break;
                case 5:
                    this.c.g !== this.U && (this.ja = Ja(this.ja + (this.c.g - this.U)));
                    this.c.g = Ja(this.ja + this.Pd(this.$a) * this.cc);
                    this.U = this.c.g;
                    break;
                case 6:
                    this.c.opacity = this.ja + this.Pd(this.$a) * this.cc / 100;
                    0 > this.c.opacity ? this.c.opacity = 0 : 1 < this.c.opacity && (this.c.opacity = 1);
                    break;
                case 8:
                    this.c.x !== this.U && (this.ja += this.c.x - this.U), this.c.y !== this.Ma && (this.Df += this.c.y - this.Ma), this.c.x = this.ja + Math.cos(this.c.g) * this.Pd(this.$a) * this.cc, this.c.y = this.Df + Math.sin(this.c.g) * this.Pd(this.$a) * this.cc, this.U = this.c.x, this.Ma = this.c.y
            }
            this.c.da()
        }
    };
    p.Iq = function(a, b) {
        switch (this.Kg) {
            case 2:
                this.ja *= b.width / a.width;
                this.qi = b.height / b.width;
                break;
            case 3:
                this.ja *= b.width / a.width;
                break;
            case 4:
                this.ja *= b.height / a.height
        }
    };
    c.prototype.ls = function() {
        return this.Pa
    };
    k.e = new c;
    d.prototype.bt = function(a) {
        this.Pa = 1 === a
    };
    k.u = new d;
    b.prototype.Ht = function(a) {
        a.n(this.Pd(this.$a) * this.cc)
    };
    k.M = new b
})();

function Ec(c) {
    this.b = c
}(function() {
    var c = Ec.prototype;
    c.X = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    c.X.prototype.F = function() {};
    c.O = function(c, b) {
        this.type = c;
        this.behavior = c.behavior;
        this.c = b;
        this.b = c.b;
        this.mode = 0
    };
    c = c.O.prototype;
    c.F = function() {
        this.mode = this.m[0]
    };
    c.Na = function() {};
    c.Oi = function() {
        this.c.Ca();
        var c = this.c.Qa,
            b = this.c.k.fb,
            k = !1;
        0 === this.mode ? (0 > this.c.x && (this.c.x = 0, k = !0), 0 > this.c.y && (this.c.y = 0, k = !0), this.c.x > b.width && (this.c.x = b.width, k = !0), this.c.y > b.height && (this.c.y = b.height, k = !0)) : (0 > c.left && (this.c.x -= c.left, k = !0), 0 > c.top && (this.c.y -= c.top, k = !0), c.right > b.width && (this.c.x -= c.right - b.width, k = !0), c.bottom > b.height && (this.c.y -= c.bottom - b.height, k = !0));
        k && this.c.da()
    }
})();
var Fc = [],
    Gc = [],
    Hc = [],
    Ic = [],
    Jc = [],
    Kc = [],
    Lc = [],
    Mc = [],
    Nc = [],
    Rc = [];

function Sc(c) {
    return result = (c /= 1) < 1 / 2.75 ? 7.5625 * c * c + 0 : c < 2 / 2.75 ? 1 * (7.5625 * (c -= 1.5 / 2.75) * c + .75) + 0 : c < 2.5 / 2.75 ? 1 * (7.5625 * (c -= 2.25 / 2.75) * c + .9375) + 0 : 1 * (7.5625 * (c -= 2.625 / 2.75) * c + .984375) + 0
}

function Tc(c, d) {
    return Math.round(c / d * 1e4)
}

function Uc(c, d, b, k, p) {
    var m = 0;
    switch (c) {
        case 0:
            m = 1 * d / b + 0;
            break;
        case 1:
            m = 1 * (d /= b) * d + 0;
            break;
        case 2:
            m = -1 * (d /= b) * (d - 2) + 0;
            break;
        case 3:
            m = 1 > (d /= b / 2) ? .5 * d * d + 0 : -.5 * (--d * (d - 2) - 1) + 0;
            break;
        case 4:
            m = 1 * (d /= b) * d * d + 0;
            break;
        case 5:
            m = 1 * ((d = d / b - 1) * d * d + 1) + 0;
            break;
        case 6:
            m = 1 > (d /= b / 2) ? .5 * d * d * d + 0 : .5 * ((d -= 2) * d * d + 2) + 0;
            break;
        case 7:
            m = 1 * (d /= b) * d * d * d + 0;
            break;
        case 8:
            m = -1 * ((d = d / b - 1) * d * d * d - 1) + 0;
            break;
        case 9:
            m = 1 > (d /= b / 2) ? .5 * d * d * d * d + 0 : -.5 * ((d -= 2) * d * d * d - 2) + 0;
            break;
        case 10:
            m = 1 * (d /= b) * d * d * d * d + 0;
            break;
        case 11:
            m = 1 * ((d = d / b - 1) * d * d * d * d + 1) + 0;
            break;
        case 12:
            m = 1 > (d /= b / 2) ? .5 * d * d * d * d * d + 0 : .5 * ((d -= 2) * d * d * d * d + 2) + 0;
            break;
        case 13:
            p.zc ? m = Jc[Tc(d, b)] : m = -(Math.sqrt(1 - d * d) - 1);
            break;
        case 14:
            p.zc ? m = Kc[Tc(d, b)] : m = Math.sqrt(1 - (d - 1) * (d - 1));
            break;
        case 15:
            m = p.zc ? Lc[Tc(d, b)] : 1 > (d /= b / 2) ? -.5 * (Math.sqrt(1 - d * d) - 1) + 0 : .5 * (Math.sqrt(1 - (d -= 2) * d) + 1) + 0;
            break;
        case 16:
            p.zc ? m = Mc[Tc(d, b)] : (p = p.nc, m = 1 * (d /= b) * d * ((p + 1) * d - p) + 0);
            break;
        case 17:
            p.zc ? m = Nc[Tc(d, b)] : (p = p.nc, m = 1 * ((d = d / b - 1) * d * ((p + 1) * d + p) + 1) + 0);
            break;
        case 18:
            p.zc ? m = Rc[Tc(d, b)] : (p = p.nc, m = 1 > (d /= b / 2) ? .5 * d * d * (((p *= 1.525) + 1) * d - p) + 0 : .5 * ((d -= 2) * d * (((p *= 1.525) + 1) * d + p) + 2) + 0);
            break;
        case 19:
            p.zc ? m = Gc[Tc(d, b)] : (m = p.eg, c = p.zk, d /= b, 0 == c && (c = .3 * b), 0 == m || m < Math.abs(1) ? (m = 1, p = c / 4) : p = c / (2 * Math.PI) * Math.asin(1 / m), m = -(m * Math.pow(2, 10 * --d) * Math.sin(2 * (d * b - p) * Math.PI / c)) + 0);
            break;
        case 20:
            p.zc ? m = Hc[Tc(d, b)] : (m = p.eg, c = p.zk, d /= b, 0 == c && (c = .3 * b), 0 == m || m < Math.abs(1) ? (m = 1, p = c / 4) : p = c / (2 * Math.PI) * Math.asin(1 / m), m = m * Math.pow(2, -10 * d) * Math.sin(2 * (d * b - p) * Math.PI / c) + 1);
            break;
        case 21:
            p.zc ? m = Ic[Tc(d, b)] : (m = p.eg, c = p.zk, d /= b / 2, 0 == c && (c = .3 * b * 1.5), 0 == m || m < Math.abs(1) ? (m = 1, p = c / 4) : p = c / (2 * Math.PI) * Math.asin(1 / m), m = 1 > d ? -.5 * m * Math.pow(2, 10 * --d) * Math.sin(2 * (d * b - p) * Math.PI / c) + 0 : m * Math.pow(2, -10 * --d) * Math.sin(2 * (d * b - p) * Math.PI / c) * .5 + 1);
            break;
        case 22:
            m = p.zc ? 1 - Fc[Tc(b - d, b)] + 0 : 1 - Sc(b - d / b) + 0;
            break;
        case 23:
            m = p.zc ? Fc[Tc(d, b)] : Sc(d / b);
            break;
        case 24:
            m = p.zc ? d < b / 2 ? .5 * (1 - Fc[Tc(b - 2 * d, b)] + 0) + 0 : .5 * Fc[Tc(2 * d - b, b)] + .5 : d < b / 2 ? .5 * (1 - Sc(b - 2 * d) + 0) + 0 : .5 * Sc((2 * d - b) / b) + .5;
            break;
        case 25:
            d = d / b / 2;
            m = 2 * d * d * (3 - 2 * d);
            break;
        case 26:
            d = (d / b + 1) / 2;
            m = 2 * d * d * (3 - 2 * d) - 1;
            break;
        case 27:
            d = d / b, m = d * d * (3 - 2 * d)
    }
    return k ? 1 - m : m
}
for (var Vc = 0, Wc = 0, Xc = 0, W = 0, X = 0, Yc = 0; 1e4 >= Yc; Yc++) W = Yc / 1e4, Vc = (W /= 1) < 1 / 2.75 ? 7.5625 * W * W + 0 : W < 2 / 2.75 ? 1 * (7.5625 * (W -= 1.5 / 2.75) * W + .75) + 0 : W < 2.5 / 2.75 ? 1 * (7.5625 * (W -= 2.25 / 2.75) * W + .9375) + 0 : 1 * (7.5625 * (W -= 2.625 / 2.75) * W + .984375) + 0, Fc[Yc] = Vc, W = Yc / 1e4, Xc = Wc = 0, W /= 1, 0 == Xc && (Xc = .3), 0 == Wc || Wc < Math.abs(1) ? (Wc = 1, X = Xc / 4) : X = Xc / (2 * Math.PI) * Math.asin(1 / Wc), Vc = -(Wc * Math.pow(2, 10 * --W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc)) + 0, Gc[Yc] = Vc, W = Yc / 1e4, Xc = Wc = 0, W /= 1, 0 == Xc && (Xc = .3), 0 == Wc || Wc < Math.abs(1) ? (Wc = 1, X = Xc / 4) : X = Xc / (2 * Math.PI) * Math.asin(1 / Wc), Vc = Wc * Math.pow(2, -10 * W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc) + 1, Hc[Yc] = Vc, W = Yc / 1e4, Xc = Wc = 0, W /= .5, 0 == Xc && (Xc = .3 * 1.5), 0 == Wc || Wc < Math.abs(1) ? (Wc = 1, X = Xc / 4) : X = Xc / (2 * Math.PI) * Math.asin(1 / Wc), Vc = 1 > W ? -.5 * Wc * Math.pow(2, 10 * --W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc) + 0 : Wc * Math.pow(2, -10 * --W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc) * .5 + 1, Ic[Yc] = Vc, W = Yc / 1e4, Jc[Yc] = -(Math.sqrt(1 - W * W) - 1), W = Yc / 1e4, Kc[Yc] = Math.sqrt(1 - (W - 1) * (W - 1)), W = Yc / 1e4, Vc = 1 > (W /= .5) ? -.5 * (Math.sqrt(1 - W * W) - 1) + 0 : .5 * (Math.sqrt(1 - (W -= 2) * W) + 1) + 0, Lc[Yc] = Vc, W = Yc / 1e4, X = 0, 0 == X && (X = 1.70158), Vc = 1 * (W /= 1) * W * ((X + 1) * W - X) + 0, Mc[Yc] = Vc, W = Yc / 1e4, X = 0, 0 == X && (X = 1.70158), Vc = 1 * ((W = W / 1 - 1) * W * ((X + 1) * W + X) + 1) + 0, Nc[Yc] = Vc, W = Yc / 1e4, X = 0, 0 == X && (X = 1.70158), Vc = 1 > (W /= .5) ? .5 * W * W * (((X *= 1.525) + 1) * W - X) + 0 : .5 * ((W -= 2) * W * (((X *= 1.525) + 1) * W + X) + 2) + 0, Rc[Yc] = Vc;

function Zc(c, d, b, k, p, m, f) {
    this.name = c;
    this.value = 0;
    this.Vg(k);
    this.Uk(p);
    this.qf = b;
    this.Oa = d;
    this.duration = m;
    this.state = this.Z = 0;
    this.sk = this.tk = this.pk = this.Og = !1;
    this.Ma = this.U = 0;
    this.Rb = f;
    this.le = 1;
    this.yh = !1;
    this.Fc = [];
    this.Zp = 1;
    for (c = 0; 28 > c; c++) this.Fc[c] = {}, this.Fc[c].eg = 0, this.Fc[c].zk = 0, this.Fc[c].$g = 0, this.Fc[c].nc = 0, this.Fc[c].zc = !0
}
Zc.prototype = {};
Zc.prototype.Vg = function(c) {
    this.ma = parseFloat(c.split(",")[0]);
    this.cb = parseFloat(c.split(",")[1]);
    this.Ma = this.U = 0
};
Zc.prototype.Uk = function(c) {
    this.la = parseFloat(c.split(",")[0]);
    this.Wa = parseFloat(c.split(",")[1]);
    isNaN(this.Wa) && (this.Wa = this.la)
};
Zc.prototype.Bl = function(c) {
    if (0 === this.state) return -1;
    1 === this.state && (this.Z += c);
    2 === this.state && (this.Z -= c);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.Z += c * this.le;
    5 === this.state && (this.Z += c * this.le);
    return 0 > this.Z ? (this.Z = 0, 4 === this.state ? this.le = 1 : 6 === this.state ? (this.le = 1, this.yh = !1) : this.state = 0, this.sk = !0, 0) : this.Z > this.duration ? (this.Z = this.duration, 4 === this.state ? this.le = -1 : 6 === this.state ? (this.le = -1, this.yh = !0) : 5 === this.state ? this.Z = 0 : this.state = 0, this.pk = !0, 1) : this.yh ? Uc(this.qf, this.duration - this.Z, this.duration, this.yh, this.Fc[this.qf]) : Uc(this.qf, this.Z, this.duration, this.yh, this.Fc[this.qf])
};

function $c(c) {
    this.b = c
}(function() {
    var c = $c.prototype;
    c.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    c.X.prototype.F = function() {};
    c.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b;
        this.$a = 0
    };
    var d = c.O.prototype;
    d.F = function() {
        this.Sg = this.m[0];
        this.Pa = 1 == this.Sg || 2 == this.Sg || 3 == this.Sg || 4 == this.Sg;
        this.Oa = this.m[1];
        this.gm = this.m[2];
        this.target = this.m[3];
        this.el = this.m[4];
        this.rl = !1;
        1 === this.el && (this.target = "relative(" + this.target + ")");
        this.duration = this.m[5];
        this.Rb = 1 === this.m[6];
        this.value = 0;
        this.B = {};
        this.Wo(this.Oa, this.gm, "current", this.target, this.duration, this.Rb);
        1 === this.m[0] && this.Gi(0);
        2 === this.m[0] && this.Gi(2);
        3 === this.m[0] && this.Gi(3);
        4 === this.m[0] && this.Gi(4)
    };
    d.Id = function(b, c) {
        void 0 === c && (c = "current");
        var d = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        c = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var m = this.value;
        if ("current" === c) switch (b) {
            case 0:
                d = this.c.x + "," + this.c.y;
                break;
            case 1:
                d = this.c.width + "," + this.c.height;
                break;
            case 2:
                d = this.c.width + "," + this.c.height;
                break;
            case 3:
                d = this.c.width + "," + this.c.height;
                break;
            case 4:
                d = Ha(this.c.g) + "," + Ha(this.c.g);
                break;
            case 5:
                d = 100 * this.c.opacity + "," + 100 * this.c.opacity;
                break;
            case 6:
                d = m + "," + m;
                break;
            case 7:
                d = this.c.x + "," + this.c.y;
                break;
            case 8:
                d = this.c.x + "," + this.c.y;
                break;
            case 9:
                d = void 0 !== this.c.Sa ? this.c.width / this.c.Sa.width + "," + this.c.height / this.c.Sa.height : "1,1"
        }
        if ("relative" === c.substring(0, 8)) {
            var f = c.match(/\((.*?)\)/);
            if (f) var a = parseFloat(f[1].split(",")[0]),
                n = parseFloat(f[1].split(",")[1]);
            isNaN(a) && (a = 0);
            isNaN(n) && (n = 0);
            switch (b) {
                case 0:
                    d = this.c.x + a + "," + (this.c.y + n);
                    break;
                case 1:
                    d = this.c.width + a + "," + (this.c.height + n);
                    break;
                case 2:
                    d = this.c.width + a + "," + (this.c.height + n);
                    break;
                case 3:
                    d = this.c.width + a + "," + (this.c.height + n);
                    break;
                case 4:
                    d = Ha(this.c.g) + a + "," + (Ha(this.c.g) + n);
                    break;
                case 5:
                    d = 100 * this.c.opacity + a + "," + (100 * this.c.opacity + n);
                    break;
                case 6:
                    d = m + a + "," + m + a;
                    break;
                case 7:
                    d = this.c.x + a + "," + this.c.y;
                    break;
                case 8:
                    d = this.c.x + "," + (this.c.y + a);
                    break;
                case 9:
                    d = a + "," + n
            }
        }
        return d
    };
    d.Wo = function(b, c, d, m, f, a) {
        d = this.Id(b, d);
        m = this.Id(b, m);
        void 0 !== this.B["default"] && delete this.B["default"];
        this.B["default"] = new Zc("default", b, c, d, m, f, a);
        this.B["default"].Le = 0
    };
    d.Fb = function() {
        JSON.stringify(this.B["default"]);
        return {
            playmode: this.Sg,
            active: this.Pa,
            tweened: this.Oa,
            easing: this.gm,
            target: this.target,
            targetmode: this.el,
            useCurrent: this.rl,
            duration: this.duration,
            enforce: this.Rb,
            value: this.value,
            tweenlist: JSON.stringify(this.B["default"])
        }
    };
    Zc.rs = function(b, c, d, m, f, a, n, t) {
        c = new Zc(c, d, m, f, a, n, t);
        for (var e in b) c[e] = b[e];
        return c
    };
    d.Tb = function(b) {
        var c = JSON.parse(b.tweenlist),
            c = Zc.rs(c, c.name, c.Oa, c.qf, c.ma + "," + c.cb, c.la + "," + c.Wa, c.duration, c.Rb);
        this.B["default"] = c;
        this.Sg = b.playmode;
        this.Pa = b.active;
        this.Kg = b.tweened;
        this.gm = b.easing;
        this.target = b.target;
        this.el = b.targetmode;
        this.rl = b.useCurrent;
        this.duration = b.duration;
        this.Rb = b.enforce;
        this.value = b.value
    };
    d.zx = function(b) {
        1 < b && (b = 1);
        0 > b && (b = 0);
        for (var c in this.B) {
            var d = this.B[c];
            d.U = 0;
            d.Ma = 0;
            d.state = 3;
            d.Z = b * d.duration;
            var m = d.Bl(0);
            this.ro(d, m)
        }
    };
    d.Gi = function(b) {
        for (var c in this.B) {
            var d = this.B[c];
            if (this.rl) {
                var m = this.Id(d.Oa, "current"),
                    f = this.Id(d.Oa, this.target);
                d.Vg(m);
                d.Uk(f)
            }
            0 === b && (d.Z = 1e-6, d.U = 0, d.Ma = 0, d.Og = !0, d.state = 1);
            1 === b && (d.state = d.Zp);
            if (2 === b || 4 === b) d.Z = 1e-6, d.U = 0, d.Ma = 0, d.Og = !0, 2 == b && (d.state = 4), 4 == b && (d.state = 6);
            3 === b && (d.Z = 1e-6, d.U = 0, d.Ma = 0, d.Og = !0, d.state = 5)
        }
    };
    d.Hx = function(b) {
        for (var c in this.B) {
            var d = this.B[c];
            3 != d.state && 0 != d.state && (d.Zp = d.state);
            1 === b && (d.Z = 0);
            2 === b && (d.Z = d.duration);
            d.state = 3;
            var m = d.Bl(0);
            this.ro(d, m)
        }
    };
    d.mx = function(b) {
        for (var c in this.B) {
            var d = this.B[c];
            1 === b && (d.Z = d.duration, d.U = 0, d.Ma = 0, d.tk = !0);
            d.state = 2
        }
    };
    d.ro = function(b, c) {
        if (0 === b.Oa) b.Rb ? (this.c.x = b.ma + (b.la - b.ma) * c, this.c.y = b.cb + (b.Wa - b.cb) * c) : (this.c.x += (b.la - b.ma) * c - b.U, this.c.y += (b.Wa - b.cb) * c - b.Ma, b.U = (b.la - b.ma) * c, b.Ma = (b.Wa - b.cb) * c);
        else if (1 === b.Oa) b.Rb ? (this.c.width = b.ma + (b.la - b.ma) * c, this.c.height = b.cb + (b.Wa - b.cb) * c) : (this.c.width += (b.la - b.ma) * c - b.U,
            this.c.height += (b.Wa - b.cb) * c - b.Ma, b.U = (b.la - b.ma) * c, b.Ma = (b.Wa - b.cb) * c);
        else if (2 === b.Oa) b.Rb ? this.c.width = b.ma + (b.la - b.ma) * c : (this.c.width += (b.la - b.ma) * c - b.U, b.U = (b.la - b.ma) * c);
        else if (3 === b.Oa) b.Rb ? this.c.height = b.cb + (b.Wa - b.cb) * c : (this.c.height += (b.Wa - b.cb) * c - b.Ma, b.Ma = (b.Wa - b.cb) * c);
        else if (4 === b.Oa)
            if (b.Rb) {
                var d = b.ma + (b.la - b.ma) * c;
                this.c.g = Ja(B(d))
            } else d = (b.la - b.ma) * c - b.U, this.c.g = Ja(this.c.g + B(d)), b.U = (b.la - b.ma) * c;
        else if (5 === b.Oa) b.Rb ? this.c.opacity = (b.ma + (b.la - b.ma) * c) / 100 : (this.c.opacity += ((b.la - b.ma) * c - b.U) / 100, b.U = (b.la - b.ma) * c);
        else if (6 === b.Oa) b.Rb ? this.value = b.ma + (b.la - b.ma) * c : (this.value += (b.la - b.ma) * c - b.U, b.U = (b.la - b.ma) * c);
        else if (7 === b.Oa) b.Rb ? this.c.x = b.ma + (b.la - b.ma) * c : (this.c.x += (b.la - b.ma) * c - b.U, b.U = (b.la - b.ma) * c);
        else if (8 === b.Oa) b.Rb ? this.c.y = b.cb + (b.Wa - b.cb) * c : (this.c.y += (b.Wa - b.cb) * c - b.Ma, b.Ma = (b.Wa - b.cb) * c);
        else if (9 === b.Oa) {
            var d = b.ma + (b.la - b.ma) * c,
                m = b.cb + (b.Wa - b.cb) * c;
            0 > this.c.width && (d = b.ma + (b.la + b.ma) * -c);
            0 > this.c.height && (m = b.cb + (b.Wa + b.cb) * -c);
            b.Rb ? (this.c.width = this.c.Sa.width * d, this.c.height = this.c.Sa.height * m) : (0 > this.c.width ? (this.c.width = this.c.width / (-1 + b.U) * d, b.U = d + 1) : (this.c.width = this.c.width / (1 + b.U) * d, b.U = d - 1), 0 > this.c.height ? (this.c.height = this.c.height / (-1 + b.Ma) * m, b.Ma = m + 1) : (this.c.height = this.c.height / (1 + b.Ma) * m, b.Ma = m - 1))
        }
        this.c.da()
    };
    d.Na = function() {
        var b = this.b.xf(this.c),
            c = this.B["default"];
        0 !== c.state && (c.Og && (this.b.trigger($c.prototype.e.Ts, this.c), c.Og = !1), c.tk && (this.b.trigger($c.prototype.e.Rs, this.c), c.tk = !1), this.Pa = 1 == c.state || 2 == c.state || 4 == c.state || 5 == c.state || 6 == c.state, b = c.Bl(b), this.ro(c, b), c.pk && (this.b.trigger($c.prototype.e.Ds, this.c), c.pk = !1), c.sk && (this.b.trigger($c.prototype.e.Qs, this.c), c.sk = !1))
    };
    c.e = {};
    d = c.e;
    d.ls = function() {
        return 0 !== this.B["default"].state
    };
    d.oy = function() {
        return 2 == this.B["default"].state
    };
    d.fy = function(b, c) {
        var d = this.B["default"];
        return gc(d.Z / d.duration, b, c)
    };
    d.Ay = function(b, c) {
        var d = this.B["default"];
        this.Ni = gc(d.Z / d.duration, b, c);
        if (d = this.vn != this.Ni && this.Ni) this.vn = this.Ni;
        return d
    };
    d.Ts = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].Og
    };
    d.Rs = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].tk
    };
    d.Ds = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].pk
    };
    d.Qs = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].sk
    };
    c.u = {};
    d = c.u;
    d.Bt = function(b, c) {
        this.vn = this.Ni = !1;
        this.rl = 1 == c;
        this.Gi(b)
    };
    d.Mo = function(b) {
        this.Hx(b)
    };
    d.$s = function(b) {
        this.vn = this.Ni = !1;
        this.mx(b)
    };
    d.Iy = function(b) {
        this.zx(b)
    };
    d.ft = function(b) {
        isNaN(b) || 0 > b || void 0 === this.B["default"] || (this.B["default"].duration = b)
    };
    d.Ty = function(b) {
        void 0 !== this.B["default"] && (this.B["default"].Rb = 1 === b)
    };
    d.Uy = function(b) {
        void 0 !== this.B["default"] && (b = this.Id(this.B["default"].Oa, b), this.B["default"].Vg(b))
    };
    d.mt = function(b, c, d) {
        if (void 0 !== this.B["default"] && !isNaN(d)) {
            var m = this.B["default"],
                f = d + "";
            this.el = c;
            var a = "",
                n = "";
            if (1 === c) {
                this.target = "relative(" + f + ")";
                switch (b) {
                    case 0:
                        a = this.c.x + d;
                        n = m.Wa;
                        break;
                    case 1:
                        a = m.la;
                        n = this.c.y + d;
                        break;
                    case 2:
                        n = a = "" + Ha(this.c.g + B(d));
                        break;
                    case 3:
                        n = a = "" + 100 * this.c.opacity + d;
                        break;
                    case 4:
                        a = this.c.width + d;
                        n = m.Wa;
                        break;
                    case 5:
                        a = m.la;
                        n = this.c.height + d;
                        break;
                    case 6:
                        n = a = d
                }
                f = a + "," + n
            } else {
                switch (b) {
                    case 0:
                        a = d;
                        n = m.Wa;
                        break;
                    case 1:
                        a = m.la;
                        n = d;
                        break;
                    case 2:
                        n = a = d;
                        break;
                    case 3:
                        n = a = d;
                        break;
                    case 4:
                        a = d;
                        n = m.Wa;
                        break;
                    case 5:
                        a = m.la;
                        n = d;
                        break;
                    case 6:
                        n = a = d
                }
                this.target = f = a + "," + n
            }
            b = this.Id(this.B["default"].Oa, "current");
            f = this.Id(this.B["default"].Oa, f);
            m.Vg(b);
            m.Uk(f)
        }
    };
    d.Yy = function(b) {
        void 0 !== this.B["default"] && (this.B["default"].Oa = b)
    };
    d.Py = function(b) {
        void 0 !== this.B["default"] && (this.B["default"].qf = b)
    };
    d.Qy = function(b, c, d, m, f) {
        void 0 !== this.B["default"] && (this.B["default"].Fc[b].zc = !1, this.B["default"].Fc[b].eg = c, this.B["default"].Fc[b].zk = d, this.B["default"].Fc[b].$g = m, this.B["default"].Fc[b].nc = f)
    };
    d.Jy = function() {
        void 0 !== this.B["default"] && (this.B["default"].zc = !0)
    };
    d.Zy = function(b) {
        var c = this.B["default"];
        this.value = b;
        6 === c.Oa && c.Vg(this.Id(c.Oa, "current"))
    };
    d.Vy = function(b, c, d, m, f) {
        if (void 0 === this.B["default"]) this.Wo(b, c, initial, d, m, f);
        else {
            var a = this.B["default"];
            a.Oa = b;
            a.qf = c;
            a.Vg(this.Id(b, "current"));
            a.Uk(this.Id(b, d));
            a.duration = m;
            a.Rb = 1 === f
        }
    };
    c.M = {};
    c = c.M;
    c.az = function(b) {
        var c = "N/A";
        switch (this.B["default"].state) {
            case 0:
                c = "paused";
                break;
            case 1:
                c = "playing";
                break;
            case 2:
                c = "reversing";
                break;
            case 3:
                c = "seeking"
        }
        b.Gb(c)
    };
    c.Hy = function(b) {
        b.n(this.B["default"].Z / this.B["default"].duration)
    };
    c.ds = function(b) {
        b.n(this.B["default"].duration)
    };
    c.cz = function(b) {
        var c = this.B["default"],
            d = "N/A";
        switch (c.Oa) {
            case 0:
                d = c.la;
                break;
            case 1:
                d = c.Wa;
                break;
            case 2:
                d = c.la;
                break;
            case 3:
                d = c.la;
                break;
            case 4:
                d = c.la;
                break;
            case 5:
                d = c.Wa;
                break;
            case 6:
                d = c.la
        }
        b.n(d)
    };
    c.Ht = function(b) {
        b.n(this.value)
    };
    c.ez = function(b, c, d, m, f) {
        m = 1 < m ? 1 : m;
        f = Uc(f, 0 > m ? 0 : m, 1, !1, !1);
        b.n(c + f * (d - c))
    }
})();

function ad(c) {
    this.b = c;
    this.Wk = this.Ei = this.Vf = this.Vk = 0
}(function() {
    function c() {}
    var d = ad.prototype;
    d.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    d.X.prototype.F = function() {};
    d.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b
    };
    var b = d.O.prototype;
    b.F = function() {
        this.enabled = 0 !== this.m[0]
    };
    b.Fb = function() {
        return {
            smg: this.behavior.Vk,
            ss: this.behavior.Vf,
            se: this.behavior.Ei,
            smd: this.behavior.Wk
        }
    };
    b.Tb = function(b) {
        this.behavior.Vk = b.smg;
        this.behavior.Vf = b.ss;
        this.behavior.Ei = b.se;
        this.behavior.Wk = b.smd
    };
    b.Na = function() {};
    b.Oi = function() {
        if (this.enabled) {
            var b = this.behavior.Qf.hd(),
                c = 0,
                d = 0,
                f, a, n, t = 0;
            f = 0;
            for (a = b.length; f < a; f++) {
                a: {
                    n = b[f];
                    for (var e = void 0, h = void 0, w = void 0, e = 0, h = n.H.length; e < h; ++e)
                        if (w = n.H[e], w.behavior instanceof ad) {
                            n = w;
                            break a
                        }
                    n = null
                }
                n && n.enabled && (c += b[f].x, d += b[f].y, ++t)
            }
            b = this.c.k.fb;
            a = this.b.eb.N;
            n = f = 0;
            a >= this.behavior.Vf && a < this.behavior.Ei && (f = this.behavior.Vk * Math.min(this.b.bf, 1), 0 === this.behavior.Wk && (f *= 1 - (a - this.behavior.Vf) / (this.behavior.Ei - this.behavior.Vf)), a = Math.random() * Math.PI * 2, n = Math.random() * f, f = Math.cos(a) * n, n *= Math.sin(a));
            b.Vn(c / t + f);
            b.Wn(d / t + n)
        }
    };
    c.prototype.xt = function(b, c, d) {
        this.behavior.Vk = b;
        this.behavior.Vf = this.b.eb.N;
        this.behavior.Ei = this.behavior.Vf + c;
        this.behavior.Wk = d
    };
    d.u = new c
})();

function qc(c) {
    this.b = c
}(function() {
    var c = qc.prototype;
    c.X = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    c.X.prototype.F = function() {};
    c.O = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b
    };
    var d = c.O.prototype;
    d.F = function() {
        this.c.J.solidEnabled = 0 !== this.m[0]
    };
    d.Na = function() {};
    c.e = new function() {};
    c.u = new function() {}
})();

function pc() {
    return [vc, wc, xc, yc, sc, tc, uc, rc, V, $c, Cc, Ec, Ac, qc, zc, ad, Dc, Bc, M.prototype.e.Do, M.prototype.u.gt, M.prototype.u.pt, M.prototype.M.round, M.prototype.M.random, wc.prototype.u.Ko, M.prototype.M.Sx, wc.prototype.u.Lo, M.prototype.M.Tx, $c.prototype.u.Bt, M.prototype.e.os, V.prototype.e.Co, M.prototype.e.gs, M.prototype.u.Ur, V.prototype.u.ct, V.prototype.M.Vr, M.prototype.e.hs, M.prototype.e.$r, vc.prototype.u.nt, M.prototype.u.Et, rc.prototype.e.xl, rc.prototype.u.lt, M.prototype.M.Yt, xc.prototype.M.Sr, rc.prototype.M.Xs, xc.prototype.M.Tr, M.prototype.M.Zt, V.prototype.M.Jt, V.prototype.u.kt, xc.prototype.e.Dl, xc.prototype.M.Gt, M.prototype.M.iu, V.prototype.M.No, V.prototype.M.Oo, rc.prototype.M.Ao, M.prototype.M.g, V.prototype.u.jt, M.prototype.M.cos, M.prototype.M.sin, V.prototype.u.ht, xc.prototype.e.Cl, V.prototype.e.Zr, Ac.prototype.u.yt, V.prototype.e.ps, V.prototype.u.cs, V.prototype.u.zt, Dc.prototype.u.bt, V.prototype.u.it, M.prototype.u.bs, V.prototype.u.Lo, V.prototype.u.Ko, V.prototype.e.ys, sc.prototype.u.Play, ad.prototype.u.xt, $c.prototype.u.mt, $c.prototype.u.ft, V.prototype.u.qt, Bc.prototype.u.Ct, M.prototype.u.It, M.prototype.u.js, yc.prototype.u.Dt, M.prototype.u.Zs, M.prototype.u.ot, V.prototype.u.dt, V.prototype.u.et, V.prototype.e.as, V.prototype.u.ut, V.prototype.e.Bo, M.prototype.M.Mf, M.prototype.e.zl, sc.prototype.u.Ys, yc.prototype.e.us, yc.prototype.M.vs, tc.prototype.u.ks, uc.prototype.u.rv, sc.prototype.u.tt]
}