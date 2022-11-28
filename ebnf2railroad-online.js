! function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 9)
}([function (e, t, i) {
    const {
        traverse: n
    } = i(4), r = {
        Root: 0,
        Production: 1,
        Comment: 2,
        Terminal: 3,
        NonTerminal: 4,
        Choice: 5,
        Group: 6,
        Sequence: 7,
        Optional: 8,
        Repetition: 9,
        Special: 10,
        ExceptTerminal: 11,
        ExceptNonTerminal: 12
    }, s = e => Array.isArray(e) ? r.Root : e.definition ? r.Production : e.choice ? r.Choice : e.group ? r.Group : e.comment ? r.Comment : e.sequence ? r.Sequence : e.optional ? r.Optional : e.repetition ? r.Repetition : e.specialSequence ? r.Special : e.terminal ? r.Terminal : e.nonTerminal ? r.NonTerminal : e.exceptTerminal ? r.ExceptTerminal : e.exceptNonTerminal ? r.ExceptNonTerminal : void 0, o = {
        [r.Root]: (e, t) => e.map(t),
        [r.Production]: (e, t) => ({
            ...e,
            definition: t(e.definition)
        }),
        [r.Choice]: (e, t) => ({
            ...e,
            choice: e.choice.map(t)
        }),
        [r.Group]: (e, t) => ({
            ...e,
            group: t(e.group)
        }),
        [r.Sequence]: (e, t) => ({
            ...e,
            sequence: e.sequence.map(t)
        }),
        [r.Optional]: (e, t) => ({
            ...e,
            optional: t(e.optional)
        }),
        [r.Repetition]: (e, t) => ({
            ...e,
            repetition: t(e.repetition)
        })
    }, a = n(s)(o);
    e.exports = {
        ebnfTransform: a,
        ebnfOptimizer: e => t => {
            const i = a(e);
            let n = t,
                r = i(t);
            for (; n !== r;) n = r, r = i(n);
            return r
        },
        NodeTypes: r,
        identifyNode: s,
        travelers: o
    }
}, function (e, t) {
    const i = e => e.definition ? i(e.definition) : e.terminal ? [] : e.nonTerminal ? [e.nonTerminal] : e.choice ? e.choice.map(e => i(e)).reduce((e, t) => e.concat(t), []).filter(Boolean) : e.sequence ? e.sequence.map(e => i(e)).reduce((e, t) => e.concat(t), []).filter(Boolean) : e.repetition ? i(e.repetition) : e.optional ? i(e.optional) : e.group ? i(e.group) : e.exceptNonTerminal ? [e.exceptNonTerminal, e.include] : e.exceptTerminal ? [e.include] : [];
    e.exports = {
        getReferences: i,
        searchReferencesFromIdentifier: (e, t) => t.filter(t => t.identifier === e).map(e => i(e)).reduce((e, t) => e.concat(t), []).filter(Boolean).filter((e, t, i) => i.indexOf(e) === t),
        searchReferencesToIdentifier: (e, t) => t.filter(t => i(t).some(t => t === e)).map(e => e.identifier)
    }
}, function (e, t) {
    var i, n, r = e.exports = {};

    function s() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (i === setTimeout) return setTimeout(e, 0);
        if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
        try {
            return i(e, 0)
        } catch (t) {
            try {
                return i.call(null, e, 0)
            } catch (t) {
                return i.call(this, e, 0)
            }
        }
    } ! function () {
        try {
            i = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
            i = s
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            n = o
        }
    }();
    var l, c = [],
        h = !1,
        u = -1;

    function d() {
        h && l && (h = !1, l.length ? c = l.concat(c) : u = -1, c.length && g())
    }

    function g() {
        if (!h) {
            var e = a(d);
            h = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++u < t;) l && l[u].run();
                u = -1, t = c.length
            }
            l = null, h = !1,
                function (e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function p() { }
    r.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        c.push(new f(e, t)), 1 !== c.length || h || a(g)
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function (e) {
        return []
    }, r.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function () {
        return "/"
    }, r.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function () {
        return 0
    }
}, function (e, t, i) {
    const {
        ebnfOptimizer: n
    } = i(0), r = i(17), s = i(18), o = i(19), a = i(20), l = n([r, s, o, a, i(21), i(22), i(23)]), c = n([r, s, o, a]);
    e.exports = {
        optimizeAST: l,
        optimizeText: c
    }
}, function (e, t) {
    e.exports = {
        traverse: e => t => i => {
            const n = (r, s = r, o = []) => {
                const a = e(r);
                let l = !1;
                const c = t[a],
                    h = c ? c(r, e => {
                        const t = n(e, e, [r, ...o]);
                        return t !== e && (l = !0), t
                    }) : s,
                    u = l ? h : s;
                return i.reduce((e, t) => "function" == typeof t ? t(e, r, o) : t[a] ? t[a](e, r, o) : e, u)
            };
            return n
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    (function (i) {
        var r = {};

        function s(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.$super = t.prototype
        }

        function o() {
            return [].slice.call(arguments).reduce((function (e, t) {
                return void 0 !== e ? e : t
            }))
        }

        function a(e, t) {
            var i = e - t;
            switch (p.INTERNAL_ALIGNMENT) {
                case "left":
                    return [0, i];
                case "right":
                    return [i, 0];
                case "center":
                default:
                    return [i / 2, i / 2]
            }
        }

        function l(e) {
            return e instanceof d ? e : new $("" + e)
        }

        function c(e, t) {
            return t || (t = function (e) {
                return e
            }), e.map(t).reduce((function (e, t) {
                return e + t
            }), 0)
        }

        function h(e, t) {
            return t || (t = function (e) {
                return e
            }), Math.max.apply(null, e.map(t))
        }
        var u = r.SVG = function (e, t, i) {
            t = t || {}, i = i || "";
            var n = document.createElementNS("http://www.w3.org/2000/svg", e);
            for (var r in t) "xlink:href" === r ? n.setAttributeNS("http://www.w3.org/1999/xlink", "href", t[r]) : n.setAttribute(r, t[r]);
            return n.textContent = i, n
        },
            d = r.FakeSVG = function e(t, i, n) {
                return this instanceof e ? (this.children = n || [], this.tagName = t, this.attrs = o(i, {}), this) : new e(t, i, n)
            };
        d.prototype.format = function (e, t, i) { }, d.prototype.addTo = function (e) {
            if (e instanceof d) return e.children.push(this), this;
            var t = this.toSVG();
            return e.appendChild(t), t
        }, d.prototype.escapeString = function (e) {
            return e.replace(/[*_\`\[\]<&]/g, (function (e) {
                return "&#" + e.charCodeAt(0) + ";"
            }))
        }, d.prototype.toSVG = function () {
            var e = u(this.tagName, this.attrs);
            return "string" == typeof this.children ? e.textContent = this.children : this.children.forEach((function (t) {
                e.appendChild(t.toSVG())
            })), e
        }, d.prototype.toString = function () {
            var e = "<" + this.tagName,
                t = "g" == this.tagName || "svg" == this.tagName;
            for (var i in this.attrs) e += " " + i + '="' + (this.attrs[i] + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;") + '"';
            return e += ">", t && (e += "\n"), "string" == typeof this.children ? e += d.prototype.escapeString(this.children) : this.children.forEach((function (t) {
                e += t
            })), e += "</" + this.tagName + ">\n"
        }, d.prototype.walk = function (e) {
            e(this)
        };
        var g = r.Path = function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            d.call(this, "path"), this.attrs.d = "M" + t + " " + i
        };
        s(g, d), g.prototype.m = function (e, t) {
            return this.attrs.d += "m" + e + " " + t, this
        }, g.prototype.h = function (e) {
            return this.attrs.d += "h" + e, this
        }, g.prototype.right = function (e) {
            return this.h(Math.max(0, e))
        }, g.prototype.left = function (e) {
            return this.h(-Math.max(0, e))
        }, g.prototype.v = function (e) {
            return this.attrs.d += "v" + e, this
        }, g.prototype.down = function (e) {
            return this.v(Math.max(0, e))
        }, g.prototype.up = function (e) {
            return this.v(-Math.max(0, e))
        }, g.prototype.arc = function (e) {
            var t = p.ARC_RADIUS,
                i = p.ARC_RADIUS;
            if ("e" != e[0] && "w" != e[1] || (t *= -1), "s" != e[0] && "n" != e[1] || (i *= -1), "ne" == e || "es" == e || "sw" == e || "wn" == e) var n = 1;
            else n = 0;
            return this.attrs.d += "a" + p.ARC_RADIUS + " " + p.ARC_RADIUS + " 0 0 " + n + " " + t + " " + i, this
        }, g.prototype.arc_8 = function (e, t) {
            const i = p.ARC_RADIUS,
                n = 1 / Math.sqrt(2) * i,
                r = i - n;
            let s = "a " + i + " " + i + " 0 0 " + ("cw" == t ? "1" : "0") + " ";
            const o = e + t;
            return s += ("ncw" == o ? [n, r] : "necw" == o ? [r, n] : "ecw" == o ? [-r, n] : "secw" == o ? [-n, r] : "scw" == o ? [-n, -r] : "swcw" == o ? [-r, -n] : "wcw" == o ? [r, -n] : "nwcw" == o ? [n, -r] : "nccw" == o ? [-n, r] : "nwccw" == o ? [-r, n] : "wccw" == o ? [r, n] : "swccw" == o ? [n, r] : "sccw" == o ? [n, -r] : "seccw" == o ? [r, -n] : "eccw" == o ? [-r, -n] : "neccw" == o ? [-n, -r] : null).join(" "), this.attrs.d += s, this
        }, g.prototype.l = function (e, t) {
            return this.attrs.d += "l" + e + " " + t, this
        }, g.prototype.format = function () {
            return this.attrs.d += "h.5", this
        };
        var f = r.DiagramMultiContainer = function (e, t, i, n) {
            d.call(this, e, i, n), this.items = t.map(l)
        };
        s(f, d), f.prototype.walk = function (e) {
            e(this), this.items.forEach(t => w.walk(e))
        };
        var p = r.Diagram = function e(t) {
            if (!(this instanceof e)) return new e([].slice.call(arguments));
            f.call(this, "svg", t, {
                class: e.DIAGRAM_CLASS
            }), this.items[0] instanceof S || this.items.unshift(new S), this.items[this.items.length - 1] instanceof x || this.items.push(new x), this.up = this.down = this.height = this.width = 0;
            for (var i = 0; i < this.items.length; i++) {
                var n = this.items[i];
                this.width += n.width + (n.needsSpace ? 20 : 0), this.up = Math.max(this.up, n.up - this.height), this.height += n.height, this.down = Math.max(this.down - n.height, n.down)
            }
            this.formatted = !1
        };
        for (var m in s(p, f), i) p[m] = i[m];
        p.prototype.format = function (e, t, i, n) {
            e = o(e, 20), t = o(t, e, 20), i = o(i, e, 20);
            var r = n = o(n, t, 20),
                s = e;
            s += this.up;
            for (var a = d("g", p.STROKE_ODD_PIXEL_LENGTH ? {
                transform: "translate(.5 .5)"
            } : {}), l = 0; l < this.items.length; l++) {
                var c = this.items[l];
                c.needsSpace && (g(r, s).h(10).addTo(a), r += 10), c.format(r, s, c.width).addTo(a), r += c.width, s += c.height, c.needsSpace && (g(r, s).h(10).addTo(a), r += 10)
            }
            return this.attrs.width = this.width + n + t, this.attrs.height = this.up + this.height + this.down + e + i, this.attrs.viewBox = "0 0 " + this.attrs.width + " " + this.attrs.height, a.addTo(this), this.formatted = !0, this
        }, p.prototype.addTo = function (e) {
            if (!e) {
                var t = document.getElementsByTagName("script");
                e = (t = t[t.length - 1]).parentNode
            }
            return this.$super.addTo.call(this, e)
        }, p.prototype.toSVG = function () {
            return this.formatted || this.format(), this.$super.toSVG.call(this)
        }, p.prototype.toString = function () {
            return this.formatted || this.format(), this.$super.toString.call(this)
        }, p.DEBUG = !1;
        r.ComplexDiagram = function () {
            var e = new p([].slice.call(arguments)),
                t = e.items;
            return t.shift(), t.pop(), t.unshift(new S({
                type: "complex"
            })), t.push(new x({
                type: "complex"
            })), e.items = t, e
        };
        var A = r.Sequence = function e(t) {
            if (!(this instanceof e)) return new e([].slice.call(arguments));
            f.call(this, "g", t);
            this.items.length;
            this.needsSpace = !0, this.up = this.down = this.height = this.width = 0;
            for (var i = 0; i < this.items.length; i++) {
                var n = this.items[i];
                this.width += n.width + (n.needsSpace ? 20 : 0), this.up = Math.max(this.up, n.up - this.height), this.height += n.height, this.down = Math.max(this.down - n.height, n.down)
            }
            this.items[0].needsSpace && (this.width -= 10), this.items[this.items.length - 1].needsSpace && (this.width -= 10), p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "sequence")
        };
        s(A, f), A.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this), g(e + n[0] + this.width, t + this.height).h(n[1]).addTo(this), e += n[0];
            for (var r = 0; r < this.items.length; r++) {
                var s = this.items[r];
                s.needsSpace && r > 0 && (g(e, t).h(10).addTo(this), e += 10), s.format(e, t, s.width).addTo(this), e += s.width, t += s.height, s.needsSpace && r < this.items.length - 1 && (g(e, t).h(10).addTo(this), e += 10)
            }
            return this
        };
        var v = r.Stack = function e(t) {
            if (!(this instanceof e)) return new e([].slice.call(arguments));
            if (f.call(this, "g", t), 0 === t.length) throw new RangeError("Stack() must have at least one child.");
            this.width = Math.max.apply(null, this.items.map((function (e) {
                return e.width + (e.needsSpace ? 20 : 0)
            }))), this.items.length > 1 && (this.width += 2 * p.ARC_RADIUS), this.needsSpace = !0, this.up = this.items[0].up, this.down = this.items[this.items.length - 1].down, this.height = 0;
            for (var i = this.items.length - 1, n = 0; n < this.items.length; n++) {
                var r = this.items[n];
                this.height += r.height, n > 0 && (this.height += Math.max(2 * p.ARC_RADIUS, r.up + p.VERTICAL_SEPARATION)), n < i && (this.height += Math.max(2 * p.ARC_RADIUS, r.down + p.VERTICAL_SEPARATION))
            }
            p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "stack")
        };
        s(v, f), v.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this);
            var r = e += n[0];
            this.items.length > 1 && (g(e, t).h(p.ARC_RADIUS).addTo(this), e += p.ARC_RADIUS);
            for (var s = 0; s < this.items.length; s++) {
                var o = this.items[s],
                    l = this.width - (this.items.length > 1 ? 2 * p.ARC_RADIUS : 0);
                o.format(e, t, l).addTo(this), e += l, t += o.height, s !== this.items.length - 1 && (g(e, t).arc("ne").down(Math.max(0, o.down + p.VERTICAL_SEPARATION - 2 * p.ARC_RADIUS)).arc("es").left(l).arc("nw").down(Math.max(0, this.items[s + 1].up + p.VERTICAL_SEPARATION - 2 * p.ARC_RADIUS)).arc("ws").addTo(this), t += Math.max(o.down + p.VERTICAL_SEPARATION, 2 * p.ARC_RADIUS) + Math.max(this.items[s + 1].up + p.VERTICAL_SEPARATION, 2 * p.ARC_RADIUS), e = r + p.ARC_RADIUS)
            }
            return this.items.length > 1 && (g(e, t).h(p.ARC_RADIUS).addTo(this), e += p.ARC_RADIUS), g(e, t).h(n[1]).addTo(this), this
        };
        var b = r.OptionalSequence = function e(t) {
            if (!(this instanceof e)) return new e([].slice.call(arguments));
            if (f.call(this, "g", t), 0 === t.length) throw new RangeError("OptionalSequence() must have at least one child.");
            if (1 === t.length) return new A(t);
            var i = p.ARC_RADIUS;
            this.needsSpace = !1, this.width = 0, this.up = 0, this.height = c(this.items, (function (e) {
                return e.height
            })), this.down = this.items[0].down;
            for (var n = 0, r = 0; r < this.items.length; r++) {
                var s = this.items[r];
                this.up = Math.max(this.up, Math.max(2 * i, s.up + p.VERTICAL_SEPARATION) - n), n += s.height, r > 0 && (this.down = Math.max(this.height + this.down, n + Math.max(2 * i, s.down + p.VERTICAL_SEPARATION)) - this.height);
                var o = (s.needsSpace ? 10 : 0) + s.width;
                this.width += 0 == r ? i + Math.max(o, i) : 2 * i + Math.max(o, i) + i
            }
            p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "optseq")
        };
        s(b, f), b.prototype.format = function (e, t, i) {
            var n = p.ARC_RADIUS,
                r = a(i, this.width);
            g(e, t).right(r[0]).addTo(this), g(e + r[0] + this.width, t + this.height).right(r[1]).addTo(this), e += r[0];
            for (var s = t - this.up, o = this.items.length - 1, l = 0; l < this.items.length; l++) {
                var c = this.items[l],
                    h = c.needsSpace ? 10 : 0,
                    u = c.width + h;
                0 == l ? (g(e, t).arc("se").up(t - s - 2 * n).arc("wn").right(u - n).arc("ne").down(t + c.height - s - 2 * n).arc("ws").addTo(this), g(e, t).right(h + n).addTo(this), c.format(e + h + n, t, c.width).addTo(this), e += u + n, t += c.height) : l < o ? (g(e, s).right(2 * n + Math.max(u, n) + n).arc("ne").down(t - s + c.height - 2 * n).arc("ws").addTo(this), g(e, t).right(2 * n).addTo(this), c.format(e + 2 * n, t, c.width).addTo(this), g(e + c.width + 2 * n, t + c.height).right(h + n).addTo(this), g(e, t).arc("ne").down(c.height + Math.max(c.down + p.VERTICAL_SEPARATION, 2 * n) - 2 * n).arc("ws").right(u - n).arc("se").up(c.down + p.VERTICAL_SEPARATION - 2 * n).arc("wn").addTo(this), e += 2 * n + Math.max(u, n) + n, t += c.height) : (g(e, t).right(2 * n).addTo(this), c.format(e + 2 * n, t, c.width).addTo(this), g(e + 2 * n + c.width, t + c.height).right(h + n).addTo(this), g(e, t).arc("ne").down(c.height + Math.max(c.down + p.VERTICAL_SEPARATION, 2 * n) - 2 * n).arc("ws").right(u - n).arc("se").up(c.down + p.VERTICAL_SEPARATION - 2 * n).arc("wn").addTo(this))
            }
            return this
        };
        var C = r.AlternatingSequence = function e(t) {
            if (!(this instanceof e)) return new e([].slice.call(arguments));
            if (f.call(this, "g", t), 1 === t.length) return new A(t);
            if (2 !== t.length) throw new RangeError("AlternatingSequence() must have one or two children.");
            this.needsSpace = !1;
            const i = p.ARC_RADIUS,
                n = p.VERTICAL_SEPARATION,
                r = Math.max,
                s = this.items[0],
                o = this.items[1],
                a = 1 / Math.sqrt(2) * i * 2,
                l = (1 - 1 / Math.sqrt(2)) * i * 2,
                c = Math.max(i, p.VERTICAL_SEPARATION),
                h = c - l + a,
                u = r(i + i, c / 2 + i + i, c / 2 + n + s.down);
            this.up = u + s.height + s.up;
            const d = r(i + i, c / 2 + i + i, c / 2 + n + o.up);
            this.down = d + o.height + o.down, this.height = 0;
            const g = 2 * (s.needsSpace ? 10 : 0) + s.width,
                m = 2 * (o.needsSpace ? 10 : 0) + o.width;
            this.width = 2 * i + r(g, h, m) + 2 * i, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "altseq")
        };
        s(C, f), C.prototype.format = function (e, t, i) {
            const n = p.ARC_RADIUS,
                r = a(i, this.width);
            g(e, t).right(r[0]).addTo(this), console.log(r), e += r[0], g(e + this.width, t).right(r[1]).addTo(this);
            const s = this.items[0],
                o = this.items[1],
                l = this.up - s.up,
                c = this.up - s.up - s.height;
            g(e, t).arc("se").up(l - 2 * n).arc("wn").addTo(this), s.format(e + 2 * n, t - l, this.width - 4 * n).addTo(this), g(e + this.width - 2 * n, t - c).arc("ne").down(c - 2 * n).arc("ws").addTo(this);
            const h = this.down - o.down - o.height,
                u = this.down - o.down;
            g(e, t).arc("ne").down(h - 2 * n).arc("ws").addTo(this), o.format(e + 2 * n, t + h, this.width - 4 * n).addTo(this), g(e + this.width - 2 * n, t + u).arc("se").up(u - 2 * n).arc("wn").addTo(this);
            const d = 1 / Math.sqrt(2) * n * 2,
                f = (1 - 1 / Math.sqrt(2)) * n * 2,
                m = Math.max(n, p.VERTICAL_SEPARATION),
                w = m - f + d,
                A = (this.width - 4 * n - w) / 2;
            return g(e + n, t - m / 2 - n).arc("ws").right(A).arc_8("n", "cw").l(w - d, m - f).arc_8("sw", "ccw").right(A).arc("ne").addTo(this), g(e + n, t + m / 2 + n).arc("wn").right(A).arc_8("s", "ccw").l(w - d, -(m - f)).arc_8("nw", "cw").right(A).arc("se").addTo(this), this
        };
        var F = r.Choice = function e(t, i) {
            if (!(this instanceof e)) return new e(t, [].slice.call(arguments, 1));
            if (f.call(this, "g", i), "number" != typeof t || t !== Math.floor(t)) throw new TypeError("The first argument of Choice() must be an integer.");
            if (t < 0 || t >= i.length) throw new RangeError("The first argument of Choice() must be an index for one of the items.");
            this.normal = t;
            var n = 0,
                r = i.length - 1;
            this.width = Math.max.apply(null, this.items.map((function (e) {
                return e.width
            }))) + 4 * p.ARC_RADIUS, this.height = this.items[t].height, this.up = this.items[n].up;
            for (var s = n; s < t; s++) {
                if (s == t - 1) var o = 2 * p.ARC_RADIUS;
                else o = p.ARC_RADIUS;
                this.up += Math.max(o, this.items[s].height + this.items[s].down + p.VERTICAL_SEPARATION + this.items[s + 1].up)
            }
            this.down = this.items[r].down;
            for (s = t + 1; s <= r; s++) {
                if (s == t + 1) o = 2 * p.ARC_RADIUS;
                else o = p.ARC_RADIUS;
                this.down += Math.max(o, this.items[s - 1].height + this.items[s - 1].down + p.VERTICAL_SEPARATION + this.items[s].up)
            }
            this.down -= this.items[t].height, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "choice")
        };
        s(F, f), F.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this), g(e + n[0] + this.width, t + this.height).h(n[1]).addTo(this), e += n[0];
            for (var r = this.items.length - 1, s = this.width - 4 * p.ARC_RADIUS, o = this.normal - 1; o >= 0; o--) {
                var l = this.items[o];
                if (o == this.normal - 1) var c = Math.max(2 * p.ARC_RADIUS, this.items[this.normal].up + p.VERTICAL_SEPARATION + l.down + l.height);
                g(e, t).arc("se").up(c - 2 * p.ARC_RADIUS).arc("wn").addTo(this), l.format(e + 2 * p.ARC_RADIUS, t - c, s).addTo(this), g(e + 2 * p.ARC_RADIUS + s, t - c + l.height).arc("ne").down(c - l.height + this.height - 2 * p.ARC_RADIUS).arc("ws").addTo(this), c += Math.max(p.ARC_RADIUS, l.up + p.VERTICAL_SEPARATION + (0 == o ? 0 : this.items[o - 1].down + this.items[o - 1].height))
            }
            g(e, t).right(2 * p.ARC_RADIUS).addTo(this), this.items[this.normal].format(e + 2 * p.ARC_RADIUS, t, s).addTo(this), g(e + 2 * p.ARC_RADIUS + s, t + this.height).right(2 * p.ARC_RADIUS).addTo(this);
            for (o = this.normal + 1; o <= r; o++) {
                l = this.items[o];
                if (o == this.normal + 1) c = Math.max(2 * p.ARC_RADIUS, this.height + this.items[this.normal].down + p.VERTICAL_SEPARATION + l.up);
                g(e, t).arc("ne").down(c - 2 * p.ARC_RADIUS).arc("ws").addTo(this), l.format(e + 2 * p.ARC_RADIUS, t + c, s).addTo(this), g(e + 2 * p.ARC_RADIUS + s, t + c + l.height).arc("se").up(c - 2 * p.ARC_RADIUS + l.height - this.height).arc("wn").addTo(this), c += Math.max(p.ARC_RADIUS, l.height + l.down + p.VERTICAL_SEPARATION + (o == r ? 0 : this.items[o + 1].up))
            }
            return this
        };
        var E = r.HorizontalChoice = function e(t) {
            if (!(this instanceof e)) return new e([].slice.call(arguments));
            if (0 === t.length) throw new RangeError("HorizontalChoice() must have at least one child.");
            if (1 === t.length) return new A(t);
            f.call(this, "g", t);
            const i = this.items.slice(0, -1),
                n = this.items.slice(1, -1),
                r = this.items[0],
                s = this.items[this.items.length - 1];
            this.needsSpace = !1, this.width = p.ARC_RADIUS, this.width += 2 * p.ARC_RADIUS * (this.items.length - 1), this.width += c(this.items, e => e.width + (e.needsSpace ? 20 : 0)), this.width += s.height > 0 ? p.ARC_RADIUS : 0, this.width += p.ARC_RADIUS, this.height = 0, this._upperTrack = Math.max(2 * p.ARC_RADIUS, p.VERTICAL_SEPARATION, h(i, e => e.up) + p.VERTICAL_SEPARATION), this.up = Math.max(this._upperTrack, s.up), this._lowerTrack = Math.max(p.VERTICAL_SEPARATION, h(n, e => e.height + Math.max(e.down + p.VERTICAL_SEPARATION, 2 * p.ARC_RADIUS)), s.height + s.down + p.VERTICAL_SEPARATION), r.height < this._lowerTrack && (this._lowerTrack = Math.max(this._lowerTrack, r.height + 2 * p.ARC_RADIUS)), this.down = Math.max(this._lowerTrack, r.height + r.down), p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "horizontalchoice")
        };
        s(E, f), E.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            new g(e, t).h(n[0]).addTo(this), new g(e + n[0] + this.width, t + this.height).h(n[1]).addTo(this), e += n[0];
            const r = this.items[0],
                s = this.items[this.items.length - 1],
                o = this.items.slice(1);
            var l = c(this.items.slice(0, -1), e => e.width + (e.needsSpace ? 20 : 0)) + (this.items.length - 2) * p.ARC_RADIUS * 2 - p.ARC_RADIUS;
            new g(e, t).arc("se").v(-(this._upperTrack - 2 * p.ARC_RADIUS)).arc("wn").h(l).addTo(this);
            var h = c(o, e => e.width + (e.needsSpace ? 20 : 0)) + (this.items.length - 2) * p.ARC_RADIUS * 2 + (s.height > 0 ? p.ARC_RADIUS : 0) - p.ARC_RADIUS,
                u = e + p.ARC_RADIUS + r.width + (r.needsSpace ? 20 : 0) + 2 * p.ARC_RADIUS;
            new g(u, t + this._lowerTrack).h(h).arc("se").v(-(this._lowerTrack - 2 * p.ARC_RADIUS)).arc("wn").addTo(this);
            for (const [i, n] of
                function* (e) {
                    var t = 0;
                    for (const i of e) yield [t, i], t++
                }(this.items)) {
                0 === i ? (new g(e, t).h(p.ARC_RADIUS).addTo(this), e += p.ARC_RADIUS) : (new g(e, t - this._upperTrack).arc("ne").v(this._upperTrack - 2 * p.ARC_RADIUS).arc("ws").addTo(this), e += 2 * p.ARC_RADIUS);
                var d = n.width + (n.needsSpace ? 20 : 0);
                n.format(e, t, d).addTo(this), e += d, i === this.items.length - 1 ? 0 === n.height ? new g(e, t).h(p.ARC_RADIUS).addTo(this) : new g(e, t + n.height).arc("se").addTo(this) : 0 === i && n.height > this._lowerTrack ? n.height - this._lowerTrack >= 2 * p.ARC_RADIUS ? new g(e, t + n.height).arc("se").v(this._lowerTrack - n.height + 2 * p.ARC_RADIUS).arc("wn").addTo(this) : new g(e, t + n.height).l(2 * p.ARC_RADIUS, this._lowerTrack - n.height).addTo(this) : new g(e, t + n.height).arc("ne").v(this._lowerTrack - n.height - 2 * p.ARC_RADIUS).arc("ws").addTo(this)
            }
            return this
        };
        var y = r.MultipleChoice = function e(t, i, n) {
            if (!(this instanceof e)) return new e(t, i, [].slice.call(arguments, 2));
            if (f.call(this, "g", n), "number" != typeof t || t !== Math.floor(t)) throw new TypeError("The first argument of MultipleChoice() must be an integer.");
            if (t < 0 || t >= n.length) throw new RangeError("The first argument of MultipleChoice() must be an index for one of the items.");
            if (this.normal = t, "any" != i && "all" != i) throw new SyntaxError("The second argument of MultipleChoice must be 'any' or 'all'.");
            this.type = i, this.needsSpace = !0, this.innerWidth = h(this.items, (function (e) {
                return e.width
            })), this.width = 30 + p.ARC_RADIUS + this.innerWidth + p.ARC_RADIUS + 20, this.up = this.items[0].up, this.down = this.items[this.items.length - 1].down, this.height = this.items[t].height;
            for (var r = 0; r < this.items.length; r++) {
                var s = this.items[r];
                if (r == t - 1 || r == t + 1) var o = 10 + p.ARC_RADIUS;
                else o = p.ARC_RADIUS;
                r < t ? this.up += Math.max(o, s.height + s.down + p.VERTICAL_SEPARATION + this.items[r + 1].up) : r > t && (this.down += Math.max(o, s.up + p.VERTICAL_SEPARATION + this.items[r - 1].down + this.items[r - 1].height))
            }
            this.down -= this.items[t].height, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "multiplechoice")
        };
        s(y, f), y.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).right(n[0]).addTo(this), g(e + n[0] + this.width, t + this.height).right(n[1]).addTo(this), e += n[0];
            for (var r = this.items[this.normal], s = this.normal - 1; s >= 0; s--) {
                var o = this.items[s];
                if (s == this.normal - 1) var l = Math.max(10 + p.ARC_RADIUS, r.up + p.VERTICAL_SEPARATION + o.down + o.height);
                g(e + 30, t).up(l - p.ARC_RADIUS).arc("wn").addTo(this), o.format(e + 30 + p.ARC_RADIUS, t - l, this.innerWidth).addTo(this), g(e + 30 + p.ARC_RADIUS + this.innerWidth, t - l + o.height).arc("ne").down(l - o.height + this.height - p.ARC_RADIUS - 10).addTo(this), 0 != s && (l += Math.max(p.ARC_RADIUS, o.up + p.VERTICAL_SEPARATION + this.items[s - 1].down + this.items[s - 1].height))
            }
            g(e + 30, t).right(p.ARC_RADIUS).addTo(this), r.format(e + 30 + p.ARC_RADIUS, t, this.innerWidth).addTo(this), g(e + 30 + p.ARC_RADIUS + this.innerWidth, t + this.height).right(p.ARC_RADIUS).addTo(this);
            for (s = this.normal + 1; s < this.items.length; s++) {
                o = this.items[s];
                if (s == this.normal + 1) l = Math.max(10 + p.ARC_RADIUS, r.height + r.down + p.VERTICAL_SEPARATION + o.up);
                g(e + 30, t).down(l - p.ARC_RADIUS).arc("ws").addTo(this), o.format(e + 30 + p.ARC_RADIUS, t + l, this.innerWidth).addTo(this), g(e + 30 + p.ARC_RADIUS + this.innerWidth, t + l + o.height).arc("se").up(l - p.ARC_RADIUS + o.height - r.height).addTo(this), s != this.items.length - 1 && (l += Math.max(p.ARC_RADIUS, o.height + o.down + p.VERTICAL_SEPARATION + this.items[s + 1].up))
            }
            var c = d("g", {
                class: "diagram-text"
            }).addTo(this);
            return d("title", {}, "any" == this.type ? "take one or more branches, once each, in any order" : "take all branches, once each, in any order").addTo(c), d("path", {
                d: "M " + (e + 30) + " " + (t - 10) + " h -26 a 4 4 0 0 0 -4 4 v 12 a 4 4 0 0 0 4 4 h 26 z",
                class: "diagram-text"
            }).addTo(c), d("text", {
                x: e + 15,
                y: t + 4,
                class: "diagram-text"
            }, "any" == this.type ? "1+" : "all").addTo(c), d("path", {
                d: "M " + (e + this.width - 20) + " " + (t - 10) + " h 16 a 4 4 0 0 1 4 4 v 12 a 4 4 0 0 1 -4 4 h -16 z",
                class: "diagram-text"
            }).addTo(c), d("path", {
                d: "M " + (e + this.width - 13) + " " + (t - 2) + " a 4 4 0 1 0 6 -1 m 2.75 -1 h -4 v 4 m 0 -3 h 2",
                style: "stroke-width: 1.75"
            }).addTo(c), this
        };
        var _ = r.Optional = function (e, t) {
            if (void 0 === t) return F(1, T(), e);
            if ("skip" === t) return F(0, T(), e);
            throw "Unknown value for Optional()'s 'skip' argument."
        },
            k = r.OneOrMore = function e(t, i) {
                if (!(this instanceof e)) return new e(t, i);
                d.call(this, "g"), i = i || new T, this.item = l(t), this.rep = l(i), this.width = Math.max(this.item.width, this.rep.width) + 2 * p.ARC_RADIUS, this.height = this.item.height, this.up = this.item.up, this.down = Math.max(2 * p.ARC_RADIUS, this.item.down + p.VERTICAL_SEPARATION + this.rep.up + this.rep.height + this.rep.down), p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "oneormore")
            };
        s(k, d), k.prototype.needsSpace = !0, k.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this), g(e + n[0] + this.width, t + this.height).h(n[1]).addTo(this), e += n[0], g(e, t).right(p.ARC_RADIUS).addTo(this), this.item.format(e + p.ARC_RADIUS, t, this.width - 2 * p.ARC_RADIUS).addTo(this), g(e + this.width - p.ARC_RADIUS, t + this.height).right(p.ARC_RADIUS).addTo(this);
            var r = Math.max(2 * p.ARC_RADIUS, this.item.height + this.item.down + p.VERTICAL_SEPARATION + this.rep.up);
            return g(e + p.ARC_RADIUS, t).arc("nw").down(r - 2 * p.ARC_RADIUS).arc("ws").addTo(this), this.rep.format(e + p.ARC_RADIUS, t + r, this.width - 2 * p.ARC_RADIUS).addTo(this), g(e + this.width - p.ARC_RADIUS, t + r + this.rep.height).arc("se").up(r - 2 * p.ARC_RADIUS + this.rep.height - this.item.height).arc("en").addTo(this), this
        }, k.prototype.walk = function (e) {
            e(this), this.item.walk(e), this.rep.walk(e)
        };
        r.ZeroOrMore = function (e, t, i) {
            return _(k(e, t), i)
        };
        var S = r.Start = function e({
            type: t = "simple",
            label: i
        } = {}) {
            if (!(this instanceof e)) return new e({
                type: t,
                label: i
            });
            d.call(this, "g"), this.width = 20, this.height = 0, this.up = 10, this.down = 10, this.type = t, null != i && (this.label = "" + i, this.width = Math.max(20, this.label.length * p.CHAR_WIDTH + 10)), p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "start")
        };
        s(S, d), S.prototype.format = function (e, t) {
            let i = new g(e, t - 10);
            return "complex" === this.type ? i.down(20).m(0, -10).right(this.width).addTo(this) : i.down(20).m(10, -20).down(20).m(-10, -10).right(this.width).addTo(this), this.label && new d("text", {
                x: e,
                y: t - 15,
                style: "text-anchor:start"
            }, this.label).addTo(this), this
        };
        var x = r.End = function e({
            type: t = "simple"
        } = {}) {
            if (!(this instanceof e)) return new e({
                type: t
            });
            d.call(this, "path"), this.width = 20, this.height = 0, this.up = 10, this.down = 10, this.type = t, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "end")
        };
        s(x, d), x.prototype.format = function (e, t) {
            return "complex" === this.type ? this.attrs.d = "M " + e + " " + t + " h 20 m 0 -10 v 20" : this.attrs.d = "M " + e + " " + t + " h 20 m -10 -10 v 20 m 10 -20 v 20", this
        };
        var $ = r.Terminal = function e(t, {
            href: i,
            title: n
        } = {}) {
            if (!(this instanceof e)) return new e(t, {
                href: i,
                title: n
            });
            d.call(this, "g", {
                class: "terminal"
            }), this.text = "" + t, this.href = i, this.title = n, this.width = this.text.length * p.CHAR_WIDTH + 20, this.height = 0, this.up = 11, this.down = 11, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "terminal")
        };
        s($, d), $.prototype.needsSpace = !0, $.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this), g(e + n[0] + this.width, t).h(n[1]).addTo(this), e += n[0], d("rect", {
                x: e,
                y: t - 11,
                width: this.width,
                height: this.up + this.down,
                rx: 10,
                ry: 10
            }).addTo(this);
            var r = d("text", {
                x: e + this.width / 2,
                y: t + 4
            }, this.text);
            return this.href ? d("a", {
                "xlink:href": this.href
            }, [r]).addTo(this) : r.addTo(this), this.title && new d("title", {}, this.title).addTo(this), this
        };
        var B = r.NonTerminal = function e(t, {
            href: i,
            title: n
        } = {}) {
            if (!(this instanceof e)) return new e(t, {
                href: i,
                title: n
            });
            d.call(this, "g", {
                class: "non-terminal"
            }), this.text = "" + t, this.href = i, this.title = n, this.width = this.text.length * p.CHAR_WIDTH + 20, this.height = 0, this.up = 11, this.down = 11, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "nonterminal")
        };
        s(B, d), B.prototype.needsSpace = !0, B.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this), g(e + n[0] + this.width, t).h(n[1]).addTo(this), e += n[0], d("rect", {
                x: e,
                y: t - 11,
                width: this.width,
                height: this.up + this.down
            }).addTo(this);
            var r = d("text", {
                x: e + this.width / 2,
                y: t + 4
            }, this.text);
            return this.href ? d("a", {
                "xlink:href": this.href
            }, [r]).addTo(this) : r.addTo(this), this.title && new d("title", {}, this.title).addTo(this), this
        };
        var D = r.Comment = function e(t, {
            href: i,
            title: n
        } = {}) {
            if (!(this instanceof e)) return new e(t, {
                href: i,
                title: n
            });
            d.call(this, "g"), this.text = "" + t, this.href = i, this.title = n, this.width = this.text.length * p.COMMENT_CHAR_WIDTH + 10, this.height = 0, this.up = 11, this.down = 11, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "comment")
        };
        s(D, d), D.prototype.needsSpace = !0, D.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            g(e, t).h(n[0]).addTo(this), g(e + n[0] + this.width, t + this.height).h(n[1]).addTo(this), e += n[0];
            var r = d("text", {
                x: e + this.width / 2,
                y: t + 5,
                class: "comment"
            }, this.text);
            return this.href ? d("a", {
                "xlink:href": this.href
            }, [r]).addTo(this) : r.addTo(this), this.title && new d("title", {}, this.title).addTo(this), this
        };
        var T = r.Skip = function e() {
            if (!(this instanceof e)) return new e;
            d.call(this, "g"), this.width = 0, this.height = 0, this.up = 0, this.down = 0, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "skip")
        };
        s(T, d), T.prototype.format = function (e, t, i) {
            return g(e, t).right(i).addTo(this), this
        };
        var R, L = r.Block = function e({
            width: t = 50,
            up: i = 15,
            height: n = 25,
            down: r = 15,
            needsSpace: s = !0
        } = {}) {
            if (!(this instanceof e)) return new e({
                width: t,
                up: i,
                height: n,
                down: r,
                needsSpace: s
            });
            d.call(this, "g"), this.width = t, this.height = n, this.up = i, this.down = r, this.needsSpace = !0, p.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "block")
        };
        for (var M in s(L, d), L.prototype.format = function (e, t, i) {
            var n = a(i, this.width);
            return new g(e, t).h(n[0]).addTo(this), new g(e + n[0] + this.width, t).h(n[1]).addTo(this), e += n[0], new d("rect", {
                x: e,
                y: t - this.up,
                width: this.width,
                height: this.up + this.height + this.down
            }).addTo(this), this
        }, R = {}, void 0 === (n = function () {
            return R
        }.apply(t, [])) || (e.exports = n), r) R[M] = r[M]
    }).call(this, {
        VERTICAL_SEPARATION: 8,
        ARC_RADIUS: 10,
        DIAGRAM_CLASS: "railroad-diagram",
        STROKE_ODD_PIXEL_LENGTH: !0,
        INTERNAL_ALIGNMENT: "center",
        CHAR_WIDTH: 8.5,
        COMMENT_CHAR_WIDTH: 7
    })
}, function (e, t, i) {
    ! function () {
        var e = function () {
            return this
        }();
        e || "undefined" == typeof window || (e = window);
        var t = function (e, i, n) {
            "string" == typeof e ? (2 == arguments.length && (n = i), t.modules[e] || (t.payloads[e] = n, t.modules[e] = null)) : t.original ? t.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())
        };
        t.modules = {}, t.payloads = {};
        var i, n, r = function (e, t, i) {
            if ("string" == typeof t) {
                var n = a(e, t);
                if (null != n) return i && i(), n
            } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var r = [], o = 0, l = t.length; o < l; ++o) {
                    var c = a(e, t[o]);
                    if (null == c && s.original) return;
                    r.push(c)
                }
                return i && i.apply(null, r) || !0
            }
        },
            s = function (e, t) {
                var i = r("", e, t);
                return null == i && s.original ? s.original.apply(this, arguments) : i
            },
            o = function (e, t) {
                if (-1 !== t.indexOf("!")) {
                    var i = t.split("!");
                    return o(e, i[0]) + "!" + o(e, i[1])
                }
                if ("." == t.charAt(0))
                    for (t = e.split("/").slice(0, -1).join("/") + "/" + t; - 1 !== t.indexOf(".") && n != t;) {
                        var n = t;
                        t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                    }
                return t
            },
            a = function (e, i) {
                i = o(e, i);
                var n = t.modules[i];
                if (!n) {
                    if ("function" == typeof (n = t.payloads[i])) {
                        var s = {},
                            a = {
                                id: i,
                                uri: "",
                                exports: s,
                                packaged: !0
                            };
                        s = n((function (e, t) {
                            return r(i, e, t)
                        }), s, a) || a.exports, t.modules[i] = s, delete t.payloads[i]
                    }
                    n = t.modules[i] = s || n
                }
                return n
            };
        n = e, (i = "ace") && (e[i] || (e[i] = {}), n = e[i]), n.define && n.define.packaged || (t.original = n.define, n.define = t, n.define.packaged = !0), n.acequire && n.acequire.packaged || (s.original = n.acequire, n.acequire = s, n.acequire.packaged = !0)
    }(), ace.define("ace/lib/regexp", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        var n, r = {
            exec: RegExp.prototype.exec,
            test: RegExp.prototype.test,
            match: String.prototype.match,
            replace: String.prototype.replace,
            split: String.prototype.split
        },
            s = void 0 === r.exec.call(/()??/, "")[1],
            o = (n = /^/g, r.test.call(n, ""), !n.lastIndex);

        function a(e) {
            return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
        }

        function l(e, t, i) {
            if (Array.prototype.indexOf) return e.indexOf(t, i);
            for (var n = i || 0; n < e.length; n++)
                if (e[n] === t) return n;
            return -1
        }
        o && s || (RegExp.prototype.exec = function (e) {
            var t, i, n = r.exec.apply(this, arguments);
            if ("string" == typeof e && n) {
                if (!s && n.length > 1 && l(n, "") > -1 && (i = RegExp(this.source, r.replace.call(a(this), "g", "")), r.replace.call(e.slice(n.index), i, (function () {
                    for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (n[e] = void 0)
                }))), this._xregexp && this._xregexp.captureNames)
                    for (var c = 1; c < n.length; c++)(t = this._xregexp.captureNames[c - 1]) && (n[t] = n[c]);
                !o && this.global && !n[0].length && this.lastIndex > n.index && this.lastIndex--
            }
            return n
        }, o || (RegExp.prototype.test = function (e) {
            var t = r.exec.call(this, e);
            return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
        }))
    })), ace.define("ace/lib/es5-shim", ["require", "exports", "module"], (function (e, t, i) {
        function n() { }
        Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError("Function.prototype.bind called on incompatible " + t);
            var i = d.call(arguments, 1),
                r = function () {
                    if (this instanceof r) {
                        var n = t.apply(this, i.concat(d.call(arguments)));
                        return Object(n) === n ? n : this
                    }
                    return t.apply(e, i.concat(d.call(arguments)))
                };
            return t.prototype && (n.prototype = t.prototype, r.prototype = new n, n.prototype = null), r
        });
        var r, s, o, a, l, c = Function.prototype.call,
            h = Array.prototype,
            u = Object.prototype,
            d = h.slice,
            g = c.bind(u.toString),
            f = c.bind(u.hasOwnProperty);
        if ((l = f(u, "__defineGetter__")) && (r = c.bind(u.__defineGetter__), s = c.bind(u.__defineSetter__), o = c.bind(u.__lookupGetter__), a = c.bind(u.__lookupSetter__)), 2 != [1, 2].splice(0).length)
            if (function () {
                function e(e) {
                    var t = new Array(e + 2);
                    return t[0] = t[1] = 0, t
                }
                var t, i = [];
                if (i.splice.apply(i, e(20)), i.splice.apply(i, e(26)), t = i.length, i.splice(5, 0, "XXX"), i.length, t + 1 == i.length) return !0
            }()) {
                var p = Array.prototype.splice;
                Array.prototype.splice = function (e, t) {
                    return arguments.length ? p.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(d.call(arguments, 2))) : []
                }
            } else Array.prototype.splice = function (e, t) {
                var i = this.length;
                e > 0 ? e > i && (e = i) : null == e ? e = 0 : e < 0 && (e = Math.max(i + e, 0)), e + t < i || (t = i - e);
                var n = this.slice(e, e + t),
                    r = d.call(arguments, 2),
                    s = r.length;
                if (e === i) s && this.push.apply(this, r);
                else {
                    var o = Math.min(t, i - e),
                        a = e + o,
                        l = a + s - o,
                        c = i - a,
                        h = i - o;
                    if (l < a)
                        for (var u = 0; u < c; ++u) this[l + u] = this[a + u];
                    else if (l > a)
                        for (u = c; u--;) this[l + u] = this[a + u];
                    if (s && e === h) this.length = h, this.push.apply(this, r);
                    else
                        for (this.length = h + s, u = 0; u < s; ++u) this[e + u] = r[u]
                }
                return n
            };
        Array.isArray || (Array.isArray = function (e) {
            return "[object Array]" == g(e)
        });
        var m, w, A = Object("a"),
            v = "a" != A[0] || !(0 in A);
        if (Array.prototype.forEach || (Array.prototype.forEach = function (e) {
            var t = T(this),
                i = v && "[object String]" == g(this) ? this.split("") : t,
                n = arguments[1],
                r = -1,
                s = i.length >>> 0;
            if ("[object Function]" != g(e)) throw new TypeError;
            for (; ++r < s;) r in i && e.call(n, i[r], r, t)
        }), Array.prototype.map || (Array.prototype.map = function (e) {
            var t = T(this),
                i = v && "[object String]" == g(this) ? this.split("") : t,
                n = i.length >>> 0,
                r = Array(n),
                s = arguments[1];
            if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
            for (var o = 0; o < n; o++) o in i && (r[o] = e.call(s, i[o], o, t));
            return r
        }), Array.prototype.filter || (Array.prototype.filter = function (e) {
            var t, i = T(this),
                n = v && "[object String]" == g(this) ? this.split("") : i,
                r = n.length >>> 0,
                s = [],
                o = arguments[1];
            if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
            for (var a = 0; a < r; a++) a in n && (t = n[a], e.call(o, t, a, i) && s.push(t));
            return s
        }), Array.prototype.every || (Array.prototype.every = function (e) {
            var t = T(this),
                i = v && "[object String]" == g(this) ? this.split("") : t,
                n = i.length >>> 0,
                r = arguments[1];
            if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
            for (var s = 0; s < n; s++)
                if (s in i && !e.call(r, i[s], s, t)) return !1;
            return !0
        }), Array.prototype.some || (Array.prototype.some = function (e) {
            var t = T(this),
                i = v && "[object String]" == g(this) ? this.split("") : t,
                n = i.length >>> 0,
                r = arguments[1];
            if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
            for (var s = 0; s < n; s++)
                if (s in i && e.call(r, i[s], s, t)) return !0;
            return !1
        }), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
            var t = T(this),
                i = v && "[object String]" == g(this) ? this.split("") : t,
                n = i.length >>> 0;
            if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
            if (!n && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
            var r, s = 0;
            if (arguments.length >= 2) r = arguments[1];
            else
                for (; ;) {
                    if (s in i) {
                        r = i[s++];
                        break
                    }
                    if (++s >= n) throw new TypeError("reduce of empty array with no initial value")
                }
            for (; s < n; s++) s in i && (r = e.call(void 0, r, i[s], s, t));
            return r
        }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
            var t = T(this),
                i = v && "[object String]" == g(this) ? this.split("") : t,
                n = i.length >>> 0;
            if ("[object Function]" != g(e)) throw new TypeError(e + " is not a function");
            if (!n && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
            var r, s = n - 1;
            if (arguments.length >= 2) r = arguments[1];
            else
                for (; ;) {
                    if (s in i) {
                        r = i[s--];
                        break
                    }
                    if (--s < 0) throw new TypeError("reduceRight of empty array with no initial value")
                }
            do {
                s in this && (r = e.call(void 0, r, i[s], s, t))
            } while (s--);
            return r
        }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function (e) {
            var t = v && "[object String]" == g(this) ? this.split("") : T(this),
                i = t.length >>> 0;
            if (!i) return -1;
            var n = 0;
            for (arguments.length > 1 && (n = D(arguments[1])), n = n >= 0 ? n : Math.max(0, i + n); n < i; n++)
                if (n in t && t[n] === e) return n;
            return -1
        }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function (e) {
            var t = v && "[object String]" == g(this) ? this.split("") : T(this),
                i = t.length >>> 0;
            if (!i) return -1;
            var n = i - 1;
            for (arguments.length > 1 && (n = Math.min(n, D(arguments[1]))), n = n >= 0 ? n : i - Math.abs(n); n >= 0; n--)
                if (n in t && e === t[n]) return n;
            return -1
        }), Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
            return e.__proto__ || (e.constructor ? e.constructor.prototype : u)
        }), !Object.getOwnPropertyDescriptor) {
            Object.getOwnPropertyDescriptor = function (e, t) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
                if (f(e, t)) {
                    var i;
                    if (i = {
                        enumerable: !0,
                        configurable: !0
                    }, l) {
                        var n = e.__proto__;
                        e.__proto__ = u;
                        var r = o(e, t),
                            s = a(e, t);
                        if (e.__proto__ = n, r || s) return r && (i.get = r), s && (i.set = s), i
                    }
                    return i.value = e[t], i
                }
            }
        } (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
            return Object.keys(e)
        }), Object.create) || (m = null === Object.prototype.__proto__ ? function () {
            return {
                __proto__: null
            }
        } : function () {
            var e = {};
            for (var t in e) e[t] = null;
            return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
        }, Object.create = function (e, t) {
            var i;
            if (null === e) i = m();
            else {
                if ("object" != typeof e) throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
                var n = function () { };
                n.prototype = e, (i = new n).__proto__ = e
            }
            return void 0 !== t && Object.defineProperties(i, t), i
        });

        function b(e) {
            try {
                return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
            } catch (e) { }
        }
        if (Object.defineProperty) {
            var C = b({}),
                F = "undefined" == typeof document || b(document.createElement("div"));
            if (!C || !F) var E = Object.defineProperty
        }
        if (!Object.defineProperty || E) {
            Object.defineProperty = function (e, t, i) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.defineProperty called on non-object: " + e);
                if ("object" != typeof i && "function" != typeof i || null === i) throw new TypeError("Property description must be an object: " + i);
                if (E) try {
                    return E.call(Object, e, t, i)
                } catch (e) { }
                if (f(i, "value"))
                    if (l && (o(e, t) || a(e, t))) {
                        var n = e.__proto__;
                        e.__proto__ = u, delete e[t], e[t] = i.value, e.__proto__ = n
                    } else e[t] = i.value;
                else {
                    if (!l) throw new TypeError("getters & setters can not be defined on this javascript engine");
                    f(i, "get") && r(e, t, i.get), f(i, "set") && s(e, t, i.set)
                }
                return e
            }
        }
        Object.defineProperties || (Object.defineProperties = function (e, t) {
            for (var i in t) f(t, i) && Object.defineProperty(e, i, t[i]);
            return e
        }), Object.seal || (Object.seal = function (e) {
            return e
        }), Object.freeze || (Object.freeze = function (e) {
            return e
        });
        try {
            Object.freeze((function () { }))
        } catch (e) {
            Object.freeze = (w = Object.freeze, function (e) {
                return "function" == typeof e ? e : w(e)
            })
        }
        if (Object.preventExtensions || (Object.preventExtensions = function (e) {
            return e
        }), Object.isSealed || (Object.isSealed = function (e) {
            return !1
        }), Object.isFrozen || (Object.isFrozen = function (e) {
            return !1
        }), Object.isExtensible || (Object.isExtensible = function (e) {
            if (Object(e) === e) throw new TypeError;
            for (var t = ""; f(e, t);) t += "?";
            e[t] = !0;
            var i = f(e, t);
            return delete e[t], i
        }), !Object.keys) {
            var y = !0,
                _ = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                k = _.length;
            for (var S in {
                toString: null
            }) y = !1;
            Object.keys = function (e) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.keys called on a non-object");
                var t = [];
                for (var i in e) f(e, i) && t.push(i);
                if (y)
                    for (var n = 0, r = k; n < r; n++) {
                        var s = _[n];
                        f(e, s) && t.push(s)
                    }
                return t
            }
        }
        Date.now || (Date.now = function () {
            return (new Date).getTime()
        });
        var x = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
        if (!String.prototype.trim || x.trim()) {
            x = "[" + x + "]";
            var $ = new RegExp("^" + x + x + "*"),
                B = new RegExp(x + x + "*$");
            String.prototype.trim = function () {
                return String(this).replace($, "").replace(B, "")
            }
        }

        function D(e) {
            return (e = +e) != e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
        }
        var T = function (e) {
            if (null == e) throw new TypeError("can't convert " + e + " to object");
            return Object(e)
        }
    })), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], (function (e, t, i) {
        "use strict";
        e("./regexp"), e("./es5-shim")
    })), ace.define("ace/lib/dom", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.getDocumentHead = function (e) {
            return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
        }, t.createElement = function (e, t) {
            return document.createElementNS ? document.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : document.createElement(e)
        }, t.hasCssClass = function (e, t) {
            return -1 !== (e.className + "").split(/\s+/g).indexOf(t)
        }, t.addCssClass = function (e, i) {
            t.hasCssClass(e, i) || (e.className += " " + i)
        }, t.removeCssClass = function (e, t) {
            for (var i = e.className.split(/\s+/g); ;) {
                var n = i.indexOf(t);
                if (-1 == n) break;
                i.splice(n, 1)
            }
            e.className = i.join(" ")
        }, t.toggleCssClass = function (e, t) {
            for (var i = e.className.split(/\s+/g), n = !0; ;) {
                var r = i.indexOf(t);
                if (-1 == r) break;
                n = !1, i.splice(r, 1)
            }
            return n && i.push(t), e.className = i.join(" "), n
        }, t.setCssClass = function (e, i, n) {
            n ? t.addCssClass(e, i) : t.removeCssClass(e, i)
        }, t.hasCssString = function (e, t) {
            var i, n = 0;
            if ((t = t || document).createStyleSheet && (i = t.styleSheets)) {
                for (; n < i.length;)
                    if (i[n++].owningElement.id === e) return !0
            } else if (i = t.getElementsByTagName("style"))
                for (; n < i.length;)
                    if (i[n++].id === e) return !0;
            return !1
        }, t.importCssString = function (e, i, n) {
            if (n = n || document, i && t.hasCssString(i, n)) return null;
            var r;
            i && (e += "\n/*# sourceURL=ace/css/" + i + " */"), n.createStyleSheet ? ((r = n.createStyleSheet()).cssText = e, i && (r.owningElement.id = i)) : ((r = t.createElement("style")).appendChild(n.createTextNode(e)), i && (r.id = i), t.getDocumentHead(n).appendChild(r))
        }, t.importCssStylsheet = function (e, i) {
            if (i.createStyleSheet) i.createStyleSheet(e);
            else {
                var n = t.createElement("link");
                n.rel = "stylesheet", n.href = e, t.getDocumentHead(i).appendChild(n)
            }
        }, t.getInnerWidth = function (e) {
            return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
        }, t.getInnerHeight = function (e) {
            return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
        }, t.scrollbarWidth = function (e) {
            var i = t.createElement("ace_inner");
            i.style.width = "100%", i.style.minWidth = "0px", i.style.height = "200px", i.style.display = "block";
            var n = t.createElement("ace_outer"),
                r = n.style;
            r.position = "absolute", r.left = "-10000px", r.overflow = "hidden", r.width = "200px", r.minWidth = "0px", r.height = "150px", r.display = "block", n.appendChild(i);
            var s = e.documentElement;
            s.appendChild(n);
            var o = i.offsetWidth;
            r.overflow = "scroll";
            var a = i.offsetWidth;
            return o == a && (a = n.clientWidth), s.removeChild(n), o - a
        }, "undefined" != typeof document ? (void 0 !== window.pageYOffset ? (t.getPageScrollTop = function () {
            return window.pageYOffset
        }, t.getPageScrollLeft = function () {
            return window.pageXOffset
        }) : (t.getPageScrollTop = function () {
            return document.body.scrollTop
        }, t.getPageScrollLeft = function () {
            return document.body.scrollLeft
        }), window.getComputedStyle ? t.computedStyle = function (e, t) {
            return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
        } : t.computedStyle = function (e, t) {
            return t ? e.currentStyle[t] : e.currentStyle
        }, t.setInnerHtml = function (e, t) {
            var i = e.cloneNode(!1);
            return i.innerHTML = t, e.parentNode.replaceChild(i, e), i
        }, "textContent" in document.documentElement ? (t.setInnerText = function (e, t) {
            e.textContent = t
        }, t.getInnerText = function (e) {
            return e.textContent
        }) : (t.setInnerText = function (e, t) {
            e.innerText = t
        }, t.getInnerText = function (e) {
            return e.innerText
        }), t.getParentWindow = function (e) {
            return e.defaultView || e.parentWindow
        }) : t.importCssString = function () { }
    })), ace.define("ace/lib/oop", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.inherits = function (e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }, t.mixin = function (e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }, t.implement = function (e, i) {
            t.mixin(e, i)
        }
    })), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], (function (e, t, i) {
        "use strict";
        e("./fixoldbrowsers");
        var n = e("./oop"),
            r = function () {
                var e, t, i = {
                    MODIFIER_KEYS: {
                        16: "Shift",
                        17: "Ctrl",
                        18: "Alt",
                        224: "Meta"
                    },
                    KEY_MODS: {
                        ctrl: 1,
                        alt: 2,
                        option: 2,
                        shift: 4,
                        super: 8,
                        meta: 8,
                        command: 8,
                        cmd: 8
                    },
                    FUNCTION_KEYS: {
                        8: "Backspace",
                        9: "Tab",
                        13: "Return",
                        19: "Pause",
                        27: "Esc",
                        32: "Space",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "Left",
                        38: "Up",
                        39: "Right",
                        40: "Down",
                        44: "Print",
                        45: "Insert",
                        46: "Delete",
                        96: "Numpad0",
                        97: "Numpad1",
                        98: "Numpad2",
                        99: "Numpad3",
                        100: "Numpad4",
                        101: "Numpad5",
                        102: "Numpad6",
                        103: "Numpad7",
                        104: "Numpad8",
                        105: "Numpad9",
                        "-13": "NumpadEnter",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "Numlock",
                        145: "Scrolllock"
                    },
                    PRINTABLE_KEYS: {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        61: "=",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        107: "+",
                        109: "-",
                        110: ".",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                        111: "/",
                        106: "*"
                    }
                };
                for (t in i.FUNCTION_KEYS) e = i.FUNCTION_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
                for (t in i.PRINTABLE_KEYS) e = i.PRINTABLE_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
                return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n.mixin(i, i.FUNCTION_KEYS), i.enter = i.return, i.escape = i.esc, i.del = i.delete, i[173] = "-",
                    function () {
                        for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--;) i.KEY_MODS[t] = e.filter((function (e) {
                            return t & i.KEY_MODS[e]
                        })).join("-") + "-"
                    }(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
            }();
        n.mixin(t, r), t.keyCodeToString = function (e) {
            var t = r[e];
            return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
        }
    })), ace.define("ace/lib/useragent", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        if (t.OS = {
            LINUX: "LINUX",
            MAC: "MAC",
            WINDOWS: "WINDOWS"
        }, t.getOS = function () {
            return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
        }, "object" == typeof navigator) {
            var n = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
                r = navigator.userAgent;
            t.isWin = "win" == n, t.isMac = "mac" == n, t.isLinux = "linux" == n, t.isIE = "Microsoft Internet Explorer" == navigator.appName || navigator.appName.indexOf("MSAppHost") >= 0 ? parseFloat((r.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((r.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = (window.Controllers || window.controllers) && "Gecko" === window.navigator.product, t.isOldGecko = t.isGecko && parseInt((r.match(/rv:(\d+)/) || [])[1], 10) < 4, t.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(r.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(r.split(" Chrome/")[1]) || void 0, t.isAIR = r.indexOf("AdobeAIR") >= 0, t.isIPad = r.indexOf("iPad") >= 0, t.isChromeOS = r.indexOf(" CrOS ") >= 0, t.isIOS = /iPad|iPhone|iPod/.test(r) && !window.MSStream, t.isIOS && (t.isMac = !0)
        }
    })), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], (function (e, t, i) {
        "use strict";
        var n = e("./keys"),
            r = e("./useragent"),
            s = null,
            o = 0;
        t.addListener = function (e, t, i) {
            if (e.addEventListener) return e.addEventListener(t, i, !1);
            if (e.attachEvent) {
                var n = function () {
                    i.call(e, window.event)
                };
                i._wrapper = n, e.attachEvent("on" + t, n)
            }
        }, t.removeListener = function (e, t, i) {
            if (e.removeEventListener) return e.removeEventListener(t, i, !1);
            e.detachEvent && e.detachEvent("on" + t, i._wrapper || i)
        }, t.stopEvent = function (e) {
            return t.stopPropagation(e), t.preventDefault(e), !1
        }, t.stopPropagation = function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }, t.preventDefault = function (e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }, t.getButton = function (e) {
            return "dblclick" == e.type ? 0 : "contextmenu" == e.type || r.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
                1: 0,
                2: 2,
                4: 1
            }[e.button]
        }, t.capture = function (e, i, n) {
            function r(e) {
                i && i(e), n && n(e), t.removeListener(document, "mousemove", i, !0), t.removeListener(document, "mouseup", r, !0), t.removeListener(document, "dragstart", r, !0)
            }
            return t.addListener(document, "mousemove", i, !0), t.addListener(document, "mouseup", r, !0), t.addListener(document, "dragstart", r, !0), r
        }, t.addTouchMoveListener = function (e, i) {
            var n, r;
            t.addListener(e, "touchstart", (function (e) {
                var t = e.touches[0];
                n = t.clientX, r = t.clientY
            })), t.addListener(e, "touchmove", (function (e) {
                var t = e.touches;
                if (!(t.length > 1)) {
                    var s = t[0];
                    e.wheelX = n - s.clientX, e.wheelY = r - s.clientY, n = s.clientX, r = s.clientY, i(e)
                }
            }))
        }, t.addMouseWheelListener = function (e, i) {
            "onmousewheel" in e ? t.addListener(e, "mousewheel", (function (e) {
                void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / 8, e.wheelY = -e.wheelDeltaY / 8) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / 8), i(e)
            })) : "onwheel" in e ? t.addListener(e, "wheel", (function (e) {
                switch (e.deltaMode) {
                    case e.DOM_DELTA_PIXEL:
                        e.wheelX = .35 * e.deltaX || 0, e.wheelY = .35 * e.deltaY || 0;
                        break;
                    case e.DOM_DELTA_LINE:
                    case e.DOM_DELTA_PAGE:
                        e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (e.deltaY || 0)
                }
                i(e)
            })) : t.addListener(e, "DOMMouseScroll", (function (e) {
                e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), i(e)
            }))
        }, t.addMultiMouseDownListener = function (e, i, n, s) {
            var o, a, l, c = 0,
                h = {
                    2: "dblclick",
                    3: "tripleclick",
                    4: "quadclick"
                };

            function u(e) {
                if (0 !== t.getButton(e) ? c = 0 : e.detail > 1 ? ++c > 4 && (c = 1) : c = 1, r.isIE) {
                    var u = Math.abs(e.clientX - o) > 5 || Math.abs(e.clientY - a) > 5;
                    l && !u || (c = 1), l && clearTimeout(l), l = setTimeout((function () {
                        l = null
                    }), i[c - 1] || 600), 1 == c && (o = e.clientX, a = e.clientY)
                }
                if (e._clicks = c, n[s]("mousedown", e), c > 4) c = 0;
                else if (c > 1) return n[s](h[c], e)
            }

            function d(e) {
                c = 2, l && clearTimeout(l), l = setTimeout((function () {
                    l = null
                }), i[c - 1] || 600), n[s]("mousedown", e), n[s](h[c], e)
            }
            Array.isArray(e) || (e = [e]), e.forEach((function (e) {
                t.addListener(e, "mousedown", u), r.isOldIE && t.addListener(e, "dblclick", d)
            }))
        };
        var a = r.isMac && r.isOpera && !("KeyboardEvent" in window) ? function (e) {
            return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
        } : function (e) {
            return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
        };

        function l(e, t, i) {
            var l = a(t);
            if (!r.isMac && s) {
                if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (l |= 8), s.altGr) {
                    if (3 == (3 & l)) return;
                    s.altGr = 0
                }
                if (18 === i || 17 === i) {
                    var c = "location" in t ? t.location : t.keyLocation;
                    if (17 === i && 1 === c) 1 == s[i] && (o = t.timeStamp);
                    else if (18 === i && 3 === l && 2 === c) {
                        t.timeStamp - o < 50 && (s.altGr = !0)
                    }
                }
            }
            if ((i in n.MODIFIER_KEYS && (i = -1), 8 & l && i >= 91 && i <= 93 && (i = -1), !l && 13 === i) && (3 === (c = "location" in t ? t.location : t.keyLocation) && (e(t, l, -i), t.defaultPrevented))) return;
            if (r.isChromeOS && 8 & l) {
                if (e(t, l, i), t.defaultPrevented) return;
                l &= -9
            }
            return !!(l || i in n.FUNCTION_KEYS || i in n.PRINTABLE_KEYS) && e(t, l, i)
        }

        function c() {
            s = Object.create(null)
        }
        if (t.getModifierString = function (e) {
            return n.KEY_MODS[a(e)]
        }, t.addCommandKeyListener = function (e, i) {
            var n = t.addListener;
            if (r.isOldGecko || r.isOpera && !("KeyboardEvent" in window)) {
                var o = null;
                n(e, "keydown", (function (e) {
                    o = e.keyCode
                })), n(e, "keypress", (function (e) {
                    return l(i, e, o)
                }))
            } else {
                var a = null;
                n(e, "keydown", (function (e) {
                    s[e.keyCode] = (s[e.keyCode] || 0) + 1;
                    var t = l(i, e, e.keyCode);
                    return a = e.defaultPrevented, t
                })), n(e, "keypress", (function (e) {
                    a && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), a = null)
                })), n(e, "keyup", (function (e) {
                    s[e.keyCode] = null
                })), s || (c(), n(window, "focus", c))
            }
        }, "object" == typeof window && window.postMessage && !r.isOldIE) {
            t.nextTick = function (e, i) {
                i = i || window;
                t.addListener(i, "message", (function n(r) {
                    "zero-timeout-message-1" == r.data && (t.stopPropagation(r), t.removeListener(i, "message", n), e())
                })), i.postMessage("zero-timeout-message-1", "*")
            }
        }
        t.nextFrame = "object" == typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function (e) {
            setTimeout(e, 17)
        }
    })), ace.define("ace/lib/lang", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.last = function (e) {
            return e[e.length - 1]
        }, t.stringReverse = function (e) {
            return e.split("").reverse().join("")
        }, t.stringRepeat = function (e, t) {
            for (var i = ""; t > 0;) 1 & t && (i += e), (t >>= 1) && (e += e);
            return i
        };
        var n = /^\s\s*/,
            r = /\s\s*$/;
        t.stringTrimLeft = function (e) {
            return e.replace(n, "")
        }, t.stringTrimRight = function (e) {
            return e.replace(r, "")
        }, t.copyObject = function (e) {
            var t = {};
            for (var i in e) t[i] = e[i];
            return t
        }, t.copyArray = function (e) {
            for (var t = [], i = 0, n = e.length; i < n; i++) e[i] && "object" == typeof e[i] ? t[i] = this.copyObject(e[i]) : t[i] = e[i];
            return t
        }, t.deepCopy = function e(t) {
            if ("object" != typeof t || !t) return t;
            var i;
            if (Array.isArray(t)) {
                i = [];
                for (var n = 0; n < t.length; n++) i[n] = e(t[n]);
                return i
            }
            if ("[object Object]" !== Object.prototype.toString.call(t)) return t;
            for (var n in i = {}, t) i[n] = e(t[n]);
            return i
        }, t.arrayToMap = function (e) {
            for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = 1;
            return t
        }, t.createMap = function (e) {
            var t = Object.create(null);
            for (var i in e) t[i] = e[i];
            return t
        }, t.arrayRemove = function (e, t) {
            for (var i = 0; i <= e.length; i++) t === e[i] && e.splice(i, 1)
        }, t.escapeRegExp = function (e) {
            return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
        }, t.escapeHTML = function (e) {
            return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
        }, t.getMatchOffsets = function (e, t) {
            var i = [];
            return e.replace(t, (function (e) {
                i.push({
                    offset: arguments[arguments.length - 2],
                    length: e.length
                })
            })), i
        }, t.deferredCall = function (e) {
            var t = null,
                i = function () {
                    t = null, e()
                },
                n = function (e) {
                    return n.cancel(), t = setTimeout(i, e || 0), n
                };
            return n.schedule = n, n.call = function () {
                return this.cancel(), e(), n
            }, n.cancel = function () {
                return clearTimeout(t), t = null, n
            }, n.isPending = function () {
                return t
            }, n
        }, t.delayedCall = function (e, t) {
            var i = null,
                n = function () {
                    i = null, e()
                },
                r = function (e) {
                    null == i && (i = setTimeout(n, e || t))
                };
            return r.delay = function (e) {
                i && clearTimeout(i), i = setTimeout(n, e || t)
            }, r.schedule = r, r.call = function () {
                this.cancel(), e()
            }, r.cancel = function () {
                i && clearTimeout(i), i = null
            }, r.isPending = function () {
                return i
            }, r
        }
    })), ace.define("ace/keyboard/textinput_ios", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/lib/keys"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/event"),
            r = e("../lib/useragent"),
            s = e("../lib/dom"),
            o = e("../lib/lang"),
            a = e("../lib/keys"),
            l = a.KEY_MODS,
            c = r.isChrome < 18,
            h = r.isIE;
        t.TextInput = function (e, t) {
            var i = s.createElement("textarea");
            i.className = r.isIOS ? "ace_text-input ace_text-input-ios" : "ace_text-input", r.isTouchPad && i.setAttribute("x-palm-disable-auto-cap", !0), i.setAttribute("wrap", "off"), i.setAttribute("autocorrect", "off"), i.setAttribute("autocapitalize", "off"), i.setAttribute("spellcheck", !1), i.style.opacity = "0", e.insertBefore(i, e.firstChild);
            var u = !1,
                d = !1,
                g = !1,
                f = !1,
                p = "",
                m = !0;
            try {
                var w = document.activeElement === i
            } catch (e) { }
            n.addListener(i, "blur", (function (e) {
                t.onBlur(e), w = !1
            })), n.addListener(i, "focus", (function (e) {
                w = !0, t.onFocus(e), b()
            })), this.focus = function () {
                if (p) return i.focus();
                i.style.position = "fixed", i.focus()
            }, this.blur = function () {
                i.blur()
            }, this.isFocused = function () {
                return w
            };
            var A = o.delayedCall((function () {
                w && b(m)
            })),
                v = o.delayedCall((function () {
                    f || (i.value = "\n aaaa a\n", w && b())
                }));

            function b(e) {
                if (!f) {
                    if (f = !0, F) t = 0, n = e ? 0 : i.value.length - 1;
                    else var t = 4,
                        n = 5;
                    try {
                        i.setSelectionRange(t, n)
                    } catch (e) { }
                    f = !1
                }
            }

            function C() {
                f || (i.value = "\n aaaa a\n", r.isWebKit && v.schedule())
            }
            r.isWebKit || t.addEventListener("changeSelection", (function () {
                t.selection.isEmpty() != m && (m = !m, A.schedule())
            })), C(), w && t.onFocus();
            var F = null;
            this.setInputHandler = function (e) {
                F = e
            }, this.getInputHandler = function () {
                return F
            };
            var E = !1,
                y = function (e) {
                    4 === i.selectionStart && 5 === i.selectionEnd || (F && (e = F(e), F = null), g ? (b(), e && t.onPaste(e), g = !1) : e == "\n aaaa a\n".substr(0) && 4 === i.selectionStart ? E ? t.execCommand("del", {
                        source: "ace"
                    }) : t.execCommand("backspace", {
                        source: "ace"
                    }) : u || ("\n aaaa a\n" == e.substring(0, 9) && e.length > "\n aaaa a\n".length ? e = e.substr(9) : e.substr(0, 4) == "\n aaaa a\n".substr(0, 4) ? e = e.substr(4, e.length - "\n aaaa a\n".length + 1) : e.charAt(e.length - 1) == "\n aaaa a\n".charAt(0) && (e = e.slice(0, -1)), e == "\n aaaa a\n".charAt(0) || e.charAt(e.length - 1) == "\n aaaa a\n".charAt(0) && (e = e.slice(0, -1)), e && t.onTextInput(e)), u && (u = !1), E && (E = !1))
                },
                _ = function (e) {
                    if (!f) {
                        var t = i.value;
                        y(t), C()
                    }
                },
                k = function (e, t, i) {
                    var n = e.clipboardData || window.clipboardData;
                    if (n && !c) {
                        var r = h || i ? "Text" : "text/plain";
                        try {
                            return t ? !1 !== n.setData(r, t) : n.getData(r)
                        } catch (e) {
                            if (!i) return k(e, t, !0)
                        }
                    }
                },
                S = function (e, s) {
                    var o = t.getCopyText();
                    if (!o) return n.preventDefault(e);
                    k(e, o) ? (r.isIOS && (d = s, i.value = "\n aa" + o + "a a\n", i.setSelectionRange(4, 4 + o.length), u = {
                        value: o
                    }), s ? t.onCut() : t.onCopy(), r.isIOS || n.preventDefault(e)) : (u = !0, i.value = o, i.select(), setTimeout((function () {
                        u = !1, C(), b(), s ? t.onCut() : t.onCopy()
                    })))
                };
            n.addCommandKeyListener(i, t.onCommandKey.bind(t)), n.addListener(i, "select", (function (e) {
                ! function (e) {
                    return 0 === e.selectionStart && e.selectionEnd === e.value.length
                }(i) ? F && b(t.selection.isEmpty()) : (t.selectAll(), b())
            })), n.addListener(i, "input", _), n.addListener(i, "cut", (function (e) {
                S(e, !0)
            })), n.addListener(i, "copy", (function (e) {
                S(e, !1)
            })), n.addListener(i, "paste", (function (e) {
                var s = k(e);
                "string" == typeof s ? (s && t.onPaste(s, e), r.isIE && setTimeout(b), n.preventDefault(e)) : (i.value = "", g = !0)
            }));
            var x, $ = function () {
                if (f && t.onCompositionUpdate && !t.$readOnly) {
                    var e = i.value.replace(/\x01/g, "");
                    if (f.lastValue !== e && (t.onCompositionUpdate(e), f.lastValue && t.undo(), f.canUndo && (f.lastValue = e), f.lastValue)) {
                        var n = t.selection.getRange();
                        t.insert(f.lastValue), t.session.markUndoGroup(), f.range = t.selection.getRange(), t.selection.setRange(n), t.selection.clearSelection()
                    }
                }
            },
                B = function (e) {
                    if (t.onCompositionEnd && !t.$readOnly) {
                        var n = f;
                        f = !1;
                        var s = setTimeout((function () {
                            s = null;
                            var e = i.value.replace(/\x01/g, "");
                            f || (e == n.lastValue ? C() : !n.lastValue && e && (C(), y(e)))
                        }));
                        F = function (e) {
                            return s && clearTimeout(s), (e = e.replace(/\x01/g, "")) == n.lastValue ? "" : (n.lastValue && s && t.undo(), e)
                        }, t.onCompositionEnd(), t.removeListener("mousedown", B), "compositionend" == e.type && n.range && t.selection.setRange(n.range), (!!r.isChrome && r.isChrome >= 53 || !!r.isWebKit && r.isWebKit >= 603) && _()
                    }
                },
                D = o.delayedCall($, 50);

            function T() {
                clearTimeout(x), x = setTimeout((function () {
                    p && (i.style.cssText = p, p = ""), null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
                }), 0)
            }
            n.addListener(i, "compositionstart", (function (e) {
                f || !t.onCompositionStart || t.$readOnly || ((f = {}).canUndo = t.session.$undoManager, t.onCompositionStart(), setTimeout($, 0), t.on("mousedown", B), f.canUndo && !t.selection.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup())
            })), r.isGecko ? n.addListener(i, "text", (function () {
                D.schedule()
            })) : (n.addListener(i, "keyup", (function () {
                D.schedule()
            })), n.addListener(i, "keydown", (function () {
                D.schedule()
            }))), n.addListener(i, "compositionend", B), this.getElement = function () {
                return i
            }, this.setReadOnly = function (e) {
                i.readOnly = e
            }, this.onContextMenu = function (e) {
                E = !0, b(t.selection.isEmpty()), t._emit("nativecontextmenu", {
                    target: t,
                    domEvent: e
                }), this.moveToMouse(e, !0)
            }, this.moveToMouse = function (e, o) {
                p || (p = i.style.cssText), i.style.cssText = (o ? "z-index:100000;" : "") + "height:" + i.style.height + ";" + (r.isIE ? "opacity:0.1;" : "");
                var a = t.container.getBoundingClientRect(),
                    l = s.computedStyle(t.container),
                    c = a.top + (parseInt(l.borderTopWidth) || 0),
                    h = a.left + (parseInt(a.borderLeftWidth) || 0),
                    u = a.bottom - c - i.clientHeight - 2,
                    d = function (e) {
                        i.style.left = e.clientX - h - 2 + "px", i.style.top = Math.min(e.clientY - c - 2, u) + "px"
                    };
                d(e), "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), clearTimeout(x), r.isWin && n.capture(t.container, d, T))
            }, this.onContextMenuClose = T;
            var R = function (e) {
                t.textInput.onContextMenu(e), T()
            };
            if (n.addListener(i, "mouseup", R), n.addListener(i, "mousedown", (function (e) {
                e.preventDefault(), T()
            })), n.addListener(t.renderer.scroller, "contextmenu", R), n.addListener(i, "contextmenu", R), r.isIOS) {
                var L = null,
                    M = !1;
                e.addEventListener("keydown", (function (e) {
                    L && clearTimeout(L), M = !0
                })), e.addEventListener("keyup", (function (e) {
                    L = setTimeout((function () {
                        M = !1
                    }), 100)
                }));
                var I = function (e) {
                    if (document.activeElement === i && !M) {
                        if (d) return setTimeout((function () {
                            d = !1
                        }), 100);
                        var n = i.selectionStart,
                            r = i.selectionEnd;
                        if (i.setSelectionRange(4, 5), n == r) switch (n) {
                            case 0:
                                t.onCommandKey(null, 0, a.up);
                                break;
                            case 1:
                                t.onCommandKey(null, 0, a.home);
                                break;
                            case 2:
                                t.onCommandKey(null, l.option, a.left);
                                break;
                            case 4:
                                t.onCommandKey(null, 0, a.left);
                                break;
                            case 5:
                                t.onCommandKey(null, 0, a.right);
                                break;
                            case 7:
                                t.onCommandKey(null, l.option, a.right);
                                break;
                            case 8:
                                t.onCommandKey(null, 0, a.end);
                                break;
                            case 9:
                                t.onCommandKey(null, 0, a.down)
                        } else {
                            switch (r) {
                                case 6:
                                    t.onCommandKey(null, l.shift, a.right);
                                    break;
                                case 7:
                                    t.onCommandKey(null, l.shift | l.option, a.right);
                                    break;
                                case 8:
                                    t.onCommandKey(null, l.shift, a.end);
                                    break;
                                case 9:
                                    t.onCommandKey(null, l.shift, a.down)
                            }
                            switch (n) {
                                case 0:
                                    t.onCommandKey(null, l.shift, a.up);
                                    break;
                                case 1:
                                    t.onCommandKey(null, l.shift, a.home);
                                    break;
                                case 2:
                                    t.onCommandKey(null, l.shift | l.option, a.left);
                                    break;
                                case 3:
                                    t.onCommandKey(null, l.shift, a.left)
                            }
                        }
                    }
                };
                document.addEventListener("selectionchange", I), t.on("destroy", (function () {
                    document.removeEventListener("selectionchange", I)
                }))
            }
        }
    })), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/keyboard/textinput_ios"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/event"),
            r = e("../lib/useragent"),
            s = e("../lib/dom"),
            o = e("../lib/lang"),
            a = r.isChrome < 18,
            l = r.isIE,
            c = e("./textinput_ios").TextInput;
        t.TextInput = function (e, t) {
            if (r.isIOS) return c.call(this, e, t);
            var i = s.createElement("textarea");
            i.className = "ace_text-input", i.setAttribute("wrap", "off"), i.setAttribute("autocorrect", "off"), i.setAttribute("autocapitalize", "off"), i.setAttribute("spellcheck", !1), i.style.opacity = "0", e.insertBefore(i, e.firstChild);
            var h = !1,
                u = !1,
                d = !1,
                g = "",
                f = !0;
            try {
                var p = document.activeElement === i
            } catch (e) { }
            n.addListener(i, "blur", (function (e) {
                t.onBlur(e), p = !1
            })), n.addListener(i, "focus", (function (e) {
                p = !0, t.onFocus(e), A()
            })), this.focus = function () {
                if (g) return i.focus();
                var e = i.style.top;
                i.style.position = "fixed", i.style.top = "0px", i.focus(), setTimeout((function () {
                    i.style.position = "", "0px" == i.style.top && (i.style.top = e)
                }), 0)
            }, this.blur = function () {
                i.blur()
            }, this.isFocused = function () {
                return p
            };
            var m = o.delayedCall((function () {
                p && A(f)
            })),
                w = o.delayedCall((function () {
                    d || (i.value = "\u2028\u2028", p && A())
                }));

            function A(e) {
                if (!d) {
                    if (d = !0, b) var t = 0,
                        n = e ? 0 : i.value.length - 1;
                    else t = e ? 2 : 1, n = 2;
                    try {
                        i.setSelectionRange(t, n)
                    } catch (e) { }
                    d = !1
                }
            }

            function v() {
                d || (i.value = "\u2028\u2028", r.isWebKit && w.schedule())
            }
            r.isWebKit || t.addEventListener("changeSelection", (function () {
                t.selection.isEmpty() != f && (f = !f, m.schedule())
            })), v(), p && t.onFocus();
            var b = null;
            this.setInputHandler = function (e) {
                b = e
            }, this.getInputHandler = function () {
                return b
            };
            var C = !1,
                F = function (e) {
                    b && (e = b(e), b = null), u ? (A(), e && t.onPaste(e), u = !1) : e == "\u2028\u2028".charAt(0) ? C ? t.execCommand("del", {
                        source: "ace"
                    }) : t.execCommand("backspace", {
                        source: "ace"
                    }) : ("\u2028\u2028" == e.substring(0, 2) ? e = e.substr(2) : e.charAt(0) == "\u2028\u2028".charAt(0) ? e = e.substr(1) : e.charAt(e.length - 1) == "\u2028\u2028".charAt(0) && (e = e.slice(0, -1)), e.charAt(e.length - 1) == "\u2028\u2028".charAt(0) && (e = e.slice(0, -1)), e && t.onTextInput(e)), C && (C = !1)
                },
                E = function (e) {
                    if (!d) {
                        var t = i.value;
                        F(t), v()
                    }
                },
                y = function (e, t, i) {
                    var n = e.clipboardData || window.clipboardData;
                    if (n && !a) {
                        var r = l || i ? "Text" : "text/plain";
                        try {
                            return t ? !1 !== n.setData(r, t) : n.getData(r)
                        } catch (e) {
                            if (!i) return y(e, t, !0)
                        }
                    }
                },
                _ = function (e, r) {
                    var s = t.getCopyText();
                    if (!s) return n.preventDefault(e);
                    y(e, s) ? (r ? t.onCut() : t.onCopy(), n.preventDefault(e)) : (h = !0, i.value = s, i.select(), setTimeout((function () {
                        h = !1, v(), A(), r ? t.onCut() : t.onCopy()
                    })))
                },
                k = function (e) {
                    _(e, !0)
                },
                S = function (e) {
                    _(e, !1)
                },
                x = function (e) {
                    var s = y(e);
                    "string" == typeof s ? (s && t.onPaste(s, e), r.isIE && setTimeout(A), n.preventDefault(e)) : (i.value = "", u = !0)
                };
            n.addCommandKeyListener(i, t.onCommandKey.bind(t)), n.addListener(i, "select", (function (e) {
                h ? h = !1 : ! function (e) {
                    return 0 === e.selectionStart && e.selectionEnd === e.value.length
                }(i) ? b && A(t.selection.isEmpty()) : (t.selectAll(), A())
            })), n.addListener(i, "input", E), n.addListener(i, "cut", k), n.addListener(i, "copy", S), n.addListener(i, "paste", x), "oncut" in i && "oncopy" in i && "onpaste" in i || n.addListener(e, "keydown", (function (e) {
                if ((!r.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
                    case 67:
                        S(e);
                        break;
                    case 86:
                        x(e);
                        break;
                    case 88:
                        k(e)
                }
            }));
            var $, B = function () {
                if (d && t.onCompositionUpdate && !t.$readOnly) {
                    var e = i.value.replace(/\u2028/g, "");
                    if (d.lastValue !== e && (t.onCompositionUpdate(e), d.lastValue && t.undo(), d.canUndo && (d.lastValue = e), d.lastValue)) {
                        var n = t.selection.getRange();
                        t.insert(d.lastValue), t.session.markUndoGroup(), d.range = t.selection.getRange(), t.selection.setRange(n), t.selection.clearSelection()
                    }
                }
            },
                D = function (e) {
                    if (t.onCompositionEnd && !t.$readOnly) {
                        var n = d;
                        d = !1;
                        var s = setTimeout((function () {
                            s = null;
                            var e = i.value.replace(/\u2028/g, "");
                            d || (e == n.lastValue ? v() : !n.lastValue && e && (v(), F(e)))
                        }));
                        b = function (e) {
                            return s && clearTimeout(s), (e = e.replace(/\u2028/g, "")) == n.lastValue ? "" : (n.lastValue && s && t.undo(), e)
                        }, t.onCompositionEnd(), t.removeListener("mousedown", D), "compositionend" == e.type && n.range && t.selection.setRange(n.range), (!!r.isChrome && r.isChrome >= 53 || !!r.isWebKit && r.isWebKit >= 603) && E()
                    }
                },
                T = o.delayedCall(B, 50);

            function R() {
                clearTimeout($), $ = setTimeout((function () {
                    g && (i.style.cssText = g, g = ""), null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
                }), 0)
            }
            n.addListener(i, "compositionstart", (function (e) {
                d || !t.onCompositionStart || t.$readOnly || ((d = {}).canUndo = t.session.$undoManager, t.onCompositionStart(), setTimeout(B, 0), t.on("mousedown", D), d.canUndo && !t.selection.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup())
            })), r.isGecko ? n.addListener(i, "text", (function () {
                T.schedule()
            })) : (n.addListener(i, "keyup", (function () {
                T.schedule()
            })), n.addListener(i, "keydown", (function () {
                T.schedule()
            }))), n.addListener(i, "compositionend", D), this.getElement = function () {
                return i
            }, this.setReadOnly = function (e) {
                i.readOnly = e
            }, this.onContextMenu = function (e) {
                C = !0, A(t.selection.isEmpty()), t._emit("nativecontextmenu", {
                    target: t,
                    domEvent: e
                }), this.moveToMouse(e, !0)
            }, this.moveToMouse = function (e, o) {
                g || (g = i.style.cssText), i.style.cssText = (o ? "z-index:100000;" : "") + "height:" + i.style.height + ";" + (r.isIE ? "opacity:0.1;" : "");
                var a = t.container.getBoundingClientRect(),
                    l = s.computedStyle(t.container),
                    c = a.top + (parseInt(l.borderTopWidth) || 0),
                    h = a.left + (parseInt(a.borderLeftWidth) || 0),
                    u = a.bottom - c - i.clientHeight - 2,
                    d = function (e) {
                        i.style.left = e.clientX - h - 2 + "px", i.style.top = Math.min(e.clientY - c - 2, u) + "px"
                    };
                d(e), "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), clearTimeout($), r.isWin && n.capture(t.container, d, R))
            }, this.onContextMenuClose = R;
            var L = function (e) {
                t.textInput.onContextMenu(e), R()
            };
            n.addListener(i, "mouseup", L), n.addListener(i, "mousedown", (function (e) {
                e.preventDefault(), R()
            })), n.addListener(t.renderer.scroller, "contextmenu", L), n.addListener(i, "contextmenu", L)
        }
    })), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
        "use strict";
        e("../lib/dom"), e("../lib/event");
        var n = e("../lib/useragent");

        function r(e) {
            e.$clickSelection = null;
            var t = e.editor;
            t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e)), t.setDefaultHandler("touchmove", this.onTouchMove.bind(e));
            ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"].forEach((function (t) {
                e[t] = this[t]
            }), this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
        }

        function s(e, t) {
            if (e.start.row == e.end.row) var i = 2 * t.column - e.start.column - e.end.column;
            else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) i = 2 * t.row - e.start.row - e.end.row;
            else var i = t.column - 4;
            return i < 0 ? {
                cursor: e.start,
                anchor: e.end
            } : {
                cursor: e.end,
                anchor: e.start
            }
        } (function () {
            this.onMouseDown = function (e) {
                var t = e.inSelection(),
                    i = e.getDocumentPosition();
                this.mousedownEvent = e;
                var r = this.editor,
                    s = e.getButton();
                if (0 !== s) {
                    var o = r.getSelectionRange().isEmpty();
                    return r.$blockScrolling++, (o || 1 == s) && r.selection.moveToPosition(i), r.$blockScrolling--, void (2 == s && (r.textInput.onContextMenu(e.domEvent), n.isMozilla || e.preventDefault()))
                }
                return this.mousedownEvent.time = Date.now(), !t || r.isFocused() || (r.focus(), !this.$focusTimout || this.$clickSelection || r.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(i, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e))
            }, this.startSelect = function (e, t) {
                e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
                var i = this.editor;
                i.$blockScrolling++, this.mousedownEvent.getShiftKey() ? i.selection.selectToPosition(e) : t || i.selection.moveToPosition(e), t || this.select(), i.renderer.scroller.setCapture && i.renderer.scroller.setCapture(), i.setStyle("ace_selecting"), this.setState("select"), i.$blockScrolling--
            }, this.select = function () {
                var e, t = this.editor,
                    i = t.renderer.screenToTextCoordinates(this.x, this.y);
                if (t.$blockScrolling++, this.$clickSelection) {
                    var n = this.$clickSelection.comparePoint(i);
                    if (-1 == n) e = this.$clickSelection.end;
                    else if (1 == n) e = this.$clickSelection.start;
                    else {
                        var r = s(this.$clickSelection, i);
                        i = r.cursor, e = r.anchor
                    }
                    t.selection.setSelectionAnchor(e.row, e.column)
                }
                t.selection.selectToPosition(i), t.$blockScrolling--, t.renderer.scrollCursorIntoView()
            }, this.extendSelectionBy = function (e) {
                var t, i = this.editor,
                    n = i.renderer.screenToTextCoordinates(this.x, this.y),
                    r = i.selection[e](n.row, n.column);
                if (i.$blockScrolling++, this.$clickSelection) {
                    var o = this.$clickSelection.comparePoint(r.start),
                        a = this.$clickSelection.comparePoint(r.end);
                    if (-1 == o && a <= 0) t = this.$clickSelection.end, r.end.row == n.row && r.end.column == n.column || (n = r.start);
                    else if (1 == a && o >= 0) t = this.$clickSelection.start, r.start.row == n.row && r.start.column == n.column || (n = r.end);
                    else if (-1 == o && 1 == a) n = r.end, t = r.start;
                    else {
                        var l = s(this.$clickSelection, n);
                        n = l.cursor, t = l.anchor
                    }
                    i.selection.setSelectionAnchor(t.row, t.column)
                }
                i.selection.selectToPosition(n), i.$blockScrolling--, i.renderer.scrollCursorIntoView()
            }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
                this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
            }, this.focusWait = function () {
                var e, t, i, n, r = (e = this.mousedownEvent.x, t = this.mousedownEvent.y, i = this.x, n = this.y, Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))),
                    s = Date.now();
                (r > 0 || s - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
            }, this.onDoubleClick = function (e) {
                var t = e.getDocumentPosition(),
                    i = this.editor,
                    n = i.session.getBracketRange(t);
                n ? (n.isEmpty() && (n.start.column--, n.end.column++), this.setState("select")) : (n = i.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = n, this.select()
            }, this.onTripleClick = function (e) {
                var t = e.getDocumentPosition(),
                    i = this.editor;
                this.setState("selectByLines");
                var n = i.getSelectionRange();
                n.isMultiLine() && n.contains(t.row, t.column) ? (this.$clickSelection = i.selection.getLineRange(n.start.row), this.$clickSelection.end = i.selection.getLineRange(n.end.row).end) : this.$clickSelection = i.selection.getLineRange(t.row), this.select()
            }, this.onQuadClick = function (e) {
                var t = this.editor;
                t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
            }, this.onMouseWheel = function (e) {
                if (!e.getAccelKey()) {
                    e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
                    var t = this.editor;
                    this.$lastScroll || (this.$lastScroll = {
                        t: 0,
                        vx: 0,
                        vy: 0,
                        allowed: 0
                    });
                    var i = this.$lastScroll,
                        n = e.domEvent.timeStamp,
                        r = n - i.t,
                        s = e.wheelX / r,
                        o = e.wheelY / r;
                    r < 250 && (s = (s + i.vx) / 2, o = (o + i.vy) / 2);
                    var a = Math.abs(s / o),
                        l = !1;
                    if (a >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (l = !0), a <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed) && (l = !0), l) i.allowed = n;
                    else if (n - i.allowed < 250) {
                        Math.abs(s) <= 1.1 * Math.abs(i.vx) && Math.abs(o) <= 1.1 * Math.abs(i.vy) ? (l = !0, i.allowed = n) : i.allowed = 0
                    }
                    return i.t = n, i.vx = s, i.vy = o, l ? (t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
                }
            }, this.onTouchMove = function (e) {
                this.editor._emit("mousewheel", e)
            }
        }).call(r.prototype), t.DefaultHandlers = r
    })), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], (function (e, t, i) {
        "use strict";
        e("./lib/oop");
        var n = e("./lib/dom");

        function r(e) {
            this.isOpen = !1, this.$element = null, this.$parentNode = e
        } (function () {
            this.$init = function () {
                return this.$element = n.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
            }, this.getElement = function () {
                return this.$element || this.$init()
            }, this.setText = function (e) {
                n.setInnerText(this.getElement(), e)
            }, this.setHtml = function (e) {
                this.getElement().innerHTML = e
            }, this.setPosition = function (e, t) {
                this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
            }, this.setClassName = function (e) {
                n.addCssClass(this.getElement(), e)
            }, this.show = function (e, t, i) {
                null != e && this.setText(e), null != t && null != i && this.setPosition(t, i), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
            }, this.hide = function () {
                this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
            }, this.getHeight = function () {
                return this.getElement().offsetHeight
            }, this.getWidth = function () {
                return this.getElement().offsetWidth
            }, this.destroy = function () {
                this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element)
            }
        }).call(r.prototype), t.Tooltip = r
    })), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/dom"),
            r = e("../lib/oop"),
            s = e("../lib/event"),
            o = e("../tooltip").Tooltip;

        function a(e) {
            o.call(this, e)
        }
        r.inherits(a, o),
            function () {
                this.setPosition = function (e, t) {
                    var i = window.innerWidth || document.documentElement.clientWidth,
                        n = window.innerHeight || document.documentElement.clientHeight,
                        r = this.getWidth(),
                        s = this.getHeight();
                    (e += 15) + r > i && (e -= e + r - i), (t += 15) + s > n && (t -= 20 + s), o.prototype.setPosition.call(this, e, t)
                }
            }.call(a.prototype), t.GutterHandler = function (e) {
                var t, i, r, o = e.editor,
                    l = o.renderer.$gutterLayer,
                    c = new a(o.container);

                function h() {
                    t && (t = clearTimeout(t)), r && (c.hide(), r = null, o._signal("hideGutterTooltip", c), o.removeEventListener("mousewheel", h))
                }

                function u(e) {
                    c.setPosition(e.x, e.y)
                }
                e.editor.setDefaultHandler("guttermousedown", (function (t) {
                    if (o.isFocused() && 0 == t.getButton() && "foldWidgets" != l.getRegion(t)) {
                        var i = t.getDocumentPosition().row,
                            n = o.session.selection;
                        if (t.getShiftKey()) n.selectTo(i, 0);
                        else {
                            if (2 == t.domEvent.detail) return o.selectAll(), t.preventDefault();
                            e.$clickSelection = o.selection.getLineRange(i)
                        }
                        return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
                    }
                })), e.editor.setDefaultHandler("guttermousemove", (function (s) {
                    var a = s.domEvent.target || s.domEvent.srcElement;
                    if (n.hasCssClass(a, "ace_fold-widget")) return h();
                    r && e.$tooltipFollowsMouse && u(s), i = s, t || (t = setTimeout((function () {
                        t = null, i && !e.isMousePressed ? function () {
                            var t = i.getDocumentPosition().row,
                                n = l.$annotations[t];
                            if (!n) return h();
                            if (t == o.session.getLength()) {
                                var s = o.renderer.pixelToScreenCoordinates(0, i.y).row,
                                    a = i.$pos;
                                if (s > o.session.documentToScreenRow(a.row, a.column)) return h()
                            }
                            if (r != n)
                                if (r = n.text.join("<br/>"), c.setHtml(r), c.show(), o._signal("showGutterTooltip", c), o.on("mousewheel", h), e.$tooltipFollowsMouse) u(i);
                                else {
                                    var d = i.domEvent.target.getBoundingClientRect(),
                                        g = c.getElement().style;
                                    g.left = d.right + "px", g.top = d.bottom + "px"
                                }
                        }() : h()
                    }), 50))
                })), s.addListener(o.renderer.$gutter, "mouseout", (function (e) {
                    i = null, r && !t && (t = setTimeout((function () {
                        t = null, h()
                    }), 50))
                })), o.on("changeSession", h)
            }
    })), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/event"),
            r = e("../lib/useragent"),
            s = t.MouseEvent = function (e, t) {
                this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
            };
        (function () {
            this.stopPropagation = function () {
                n.stopPropagation(this.domEvent), this.propagationStopped = !0
            }, this.preventDefault = function () {
                n.preventDefault(this.domEvent), this.defaultPrevented = !0
            }, this.stop = function () {
                this.stopPropagation(), this.preventDefault()
            }, this.getDocumentPosition = function () {
                return this.$pos || (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY)), this.$pos
            }, this.inSelection = function () {
                if (null !== this.$inSelection) return this.$inSelection;
                var e = this.editor.getSelectionRange();
                if (e.isEmpty()) this.$inSelection = !1;
                else {
                    var t = this.getDocumentPosition();
                    this.$inSelection = e.contains(t.row, t.column)
                }
                return this.$inSelection
            }, this.getButton = function () {
                return n.getButton(this.domEvent)
            }, this.getShiftKey = function () {
                return this.domEvent.shiftKey
            }, this.getAccelKey = r.isMac ? function () {
                return this.domEvent.metaKey
            } : function () {
                return this.domEvent.ctrlKey
            }
        }).call(s.prototype)
    })), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/dom"),
            r = e("../lib/event"),
            s = e("../lib/useragent");

        function o(e) {
            var t = e.editor,
                i = n.createElement("img");
            i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", s.isOpera && (i.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
            ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"].forEach((function (t) {
                e[t] = this[t]
            }), this), t.addEventListener("mousedown", this.onMouseDown.bind(e));
            var o, l, c, h, u, d, g, f, p, m, w, A = t.container,
                v = 0;

            function b() {
                var e = d;
                (function (e, i) {
                    var n = Date.now(),
                        r = !i || e.row != i.row,
                        s = !i || e.column != i.column;
                    !m || r || s ? (t.$blockScrolling += 1, t.moveCursorToPosition(e), t.$blockScrolling -= 1, m = n, w = {
                        x: l,
                        y: c
                    }) : a(w.x, w.y, l, c) > 5 ? m = null : n - m >= 200 && (t.renderer.scrollCursorIntoView(), m = null)
                })(d = t.renderer.screenToTextCoordinates(l, c), e),
                    function (e, i) {
                        var n = Date.now(),
                            r = t.renderer.layerConfig.lineHeight,
                            s = t.renderer.layerConfig.characterWidth,
                            o = t.renderer.scroller.getBoundingClientRect(),
                            a = {
                                x: {
                                    left: l - o.left,
                                    right: o.right - l
                                },
                                y: {
                                    top: c - o.top,
                                    bottom: o.bottom - c
                                }
                            },
                            h = Math.min(a.x.left, a.x.right),
                            u = Math.min(a.y.top, a.y.bottom),
                            d = {
                                row: e.row,
                                column: e.column
                            };
                        h / s <= 2 && (d.column += a.x.left < a.x.right ? -3 : 2), u / r <= 1 && (d.row += a.y.top < a.y.bottom ? -1 : 1);
                        var g = e.row != d.row,
                            f = e.column != d.column,
                            m = !i || e.row != i.row;
                        g || f && !m ? p ? n - p >= 200 && t.renderer.scrollCursorIntoView(d) : p = n : p = null
                    }(d, e)
            }

            function C() {
                u = t.selection.toOrientedRange(), o = t.session.addMarker(u, "ace_selection", t.getSelectionStyle()), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(h), b(), h = setInterval(b, 20), v = 0, r.addListener(document, "mousemove", y)
            }

            function F() {
                clearInterval(h), t.session.removeMarker(o), o = null, t.$blockScrolling += 1, t.selection.fromOrientedRange(u), t.$blockScrolling -= 1, t.isFocused() && !f && t.renderer.$cursorLayer.setBlinking(!t.getReadOnly()), u = null, d = null, v = 0, p = null, m = null, r.removeListener(document, "mousemove", y)
            }
            this.onDragStart = function (e) {
                if (this.cancelDrag || !A.draggable) {
                    var n = this;
                    return setTimeout((function () {
                        n.startSelect(), n.captureMouse(e)
                    }), 0), e.preventDefault()
                }
                u = t.getSelectionRange();
                var r = e.dataTransfer;
                r.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", s.isOpera && (t.container.appendChild(i), i.scrollTop = 0), r.setDragImage && r.setDragImage(i, 0, 0), s.isOpera && t.container.removeChild(i), r.clearData(), r.setData("Text", t.session.getTextRange()), f = !0, this.setState("drag")
            }, this.onDragEnd = function (e) {
                if (A.draggable = !1, f = !1, this.setState(null), !t.getReadOnly()) {
                    var i = e.dataTransfer.dropEffect;
                    g || "move" != i || t.session.remove(t.getSelectionRange()), t.renderer.$cursorLayer.setBlinking(!0)
                }
                this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
            }, this.onDragEnter = function (e) {
                if (!t.getReadOnly() && _(e.dataTransfer)) return l = e.clientX, c = e.clientY, o || C(), v++, e.dataTransfer.dropEffect = g = k(e), r.preventDefault(e)
            }, this.onDragOver = function (e) {
                if (!t.getReadOnly() && _(e.dataTransfer)) return l = e.clientX, c = e.clientY, o || (C(), v++), null !== E && (E = null), e.dataTransfer.dropEffect = g = k(e), r.preventDefault(e)
            }, this.onDragLeave = function (e) {
                if (--v <= 0 && o) return F(), g = null, r.preventDefault(e)
            }, this.onDrop = function (e) {
                if (d) {
                    var i = e.dataTransfer;
                    if (f) switch (g) {
                        case "move":
                            u = u.contains(d.row, d.column) ? {
                                start: d,
                                end: d
                            } : t.moveText(u, d);
                            break;
                        case "copy":
                            u = t.moveText(u, d, !0)
                    } else {
                        var n = i.getData("Text");
                        u = {
                            start: d,
                            end: t.session.insert(d, n)
                        }, t.focus(), g = null
                    }
                    return F(), r.preventDefault(e)
                }
            }, r.addListener(A, "dragstart", this.onDragStart.bind(e)), r.addListener(A, "dragend", this.onDragEnd.bind(e)), r.addListener(A, "dragenter", this.onDragEnter.bind(e)), r.addListener(A, "dragover", this.onDragOver.bind(e)), r.addListener(A, "dragleave", this.onDragLeave.bind(e)), r.addListener(A, "drop", this.onDrop.bind(e));
            var E = null;

            function y() {
                null == E && (E = setTimeout((function () {
                    null != E && o && F()
                }), 20))
            }

            function _(e) {
                var t = e.types;
                return !t || Array.prototype.some.call(t, (function (e) {
                    return "text/plain" == e || "Text" == e
                }))
            }

            function k(e) {
                var t = ["copy", "copymove", "all", "uninitialized"],
                    i = s.isMac ? e.altKey : e.ctrlKey,
                    n = "uninitialized";
                try {
                    n = e.dataTransfer.effectAllowed.toLowerCase()
                } catch (e) { }
                var r = "none";
                return i && t.indexOf(n) >= 0 ? r = "copy" : ["move", "copymove", "linkmove", "all", "uninitialized"].indexOf(n) >= 0 ? r = "move" : t.indexOf(n) >= 0 && (r = "copy"), r
            }
        }

        function a(e, t, i, n) {
            return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
        } (function () {
            this.dragWait = function () {
                Date.now() - this.mousedownEvent.time > this.editor.getDragDelay() && this.startDrag()
            }, this.dragWaitEnd = function () {
                this.editor.container.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
            }, this.dragReadyEnd = function (e) {
                this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
            }, this.startDrag = function () {
                this.cancelDrag = !1;
                var e = this.editor;
                e.container.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
                var t = s.isWin ? "default" : "move";
                e.renderer.setCursorStyle(t), this.setState("dragReady")
            }, this.onMouseDrag = function (e) {
                var t = this.editor.container;
                s.isIE && "dragReady" == this.state && (a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 3 && t.dragDrop());
                "dragWait" === this.state && (a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition())))
            }, this.onMouseDown = function (e) {
                if (this.$dragEnabled) {
                    this.mousedownEvent = e;
                    var t = this.editor,
                        i = e.inSelection(),
                        n = e.getButton();
                    if (1 === (e.domEvent.detail || 1) && 0 === n && i) {
                        if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
                        this.mousedownEvent.time = Date.now();
                        var r = e.domEvent.target || e.domEvent.srcElement;
                        if ("unselectable" in r && (r.unselectable = "on"), t.getDragDelay()) {
                            if (s.isWebKit) this.cancelDrag = !0, t.container.draggable = !0;
                            this.setState("dragWait")
                        } else this.startDrag();
                        this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
                    }
                }
            }
        }).call(o.prototype), t.DragdropHandler = o
    })), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
        "use strict";
        var n = e("./dom");
        t.get = function (e, t) {
            var i = new XMLHttpRequest;
            i.open("GET", e, !0), i.onreadystatechange = function () {
                4 === i.readyState && t(i.responseText)
            }, i.send(null)
        }, t.loadScript = function (e, t) {
            var i = n.getDocumentHead(),
                r = document.createElement("script");
            r.src = e, i.appendChild(r), r.onload = r.onreadystatechange = function (e, i) {
                !i && r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (r = r.onload = r.onreadystatechange = null, i || t())
            }
        }, t.qualifyURL = function (e) {
            var t = document.createElement("a");
            return t.href = e, t.href
        }
    })), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        var n = {},
            r = function () {
                this.propagationStopped = !0
            },
            s = function () {
                this.defaultPrevented = !0
            };
        n._emit = n._dispatchEvent = function (e, t) {
            this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
            var i = this._eventRegistry[e] || [],
                n = this._defaultHandlers[e];
            if (i.length || n) {
                "object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = r), t.preventDefault || (t.preventDefault = s), i = i.slice();
                for (var o = 0; o < i.length && (i[o](t, this), !t.propagationStopped); o++);
                return n && !t.defaultPrevented ? n(t, this) : void 0
            }
        }, n._signal = function (e, t) {
            var i = (this._eventRegistry || {})[e];
            if (i) {
                i = i.slice();
                for (var n = 0; n < i.length; n++) i[n](t, this)
            }
        }, n.once = function (e, t) {
            var i = this;
            t && this.addEventListener(e, (function n() {
                i.removeEventListener(e, n), t.apply(null, arguments)
            }))
        }, n.setDefaultHandler = function (e, t) {
            var i = this._defaultHandlers;
            if (i || (i = this._defaultHandlers = {
                _disabled_: {}
            }), i[e]) {
                var n = i[e],
                    r = i._disabled_[e];
                r || (i._disabled_[e] = r = []), r.push(n);
                var s = r.indexOf(t); - 1 != s && r.splice(s, 1)
            }
            i[e] = t
        }, n.removeDefaultHandler = function (e, t) {
            var i = this._defaultHandlers;
            if (i) {
                var n = i._disabled_[e];
                if (i[e] == t) {
                    i[e];
                    n && this.setDefaultHandler(e, n.pop())
                } else if (n) {
                    var r = n.indexOf(t); - 1 != r && n.splice(r, 1)
                }
            }
        }, n.on = n.addEventListener = function (e, t, i) {
            this._eventRegistry = this._eventRegistry || {};
            var n = this._eventRegistry[e];
            return n || (n = this._eventRegistry[e] = []), -1 == n.indexOf(t) && n[i ? "unshift" : "push"](t), t
        }, n.off = n.removeListener = n.removeEventListener = function (e, t) {
            this._eventRegistry = this._eventRegistry || {};
            var i = this._eventRegistry[e];
            if (i) {
                var n = i.indexOf(t); - 1 !== n && i.splice(n, 1)
            }
        }, n.removeAllListeners = function (e) {
            this._eventRegistry && (this._eventRegistry[e] = [])
        }, t.EventEmitter = n
    })), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, i) {
        var n = e("./oop"),
            r = e("./event_emitter").EventEmitter,
            s = {
                setOptions: function (e) {
                    Object.keys(e).forEach((function (t) {
                        this.setOption(t, e[t])
                    }), this)
                },
                getOptions: function (e) {
                    var t = {};
                    return e ? Array.isArray(e) || (t = e, e = Object.keys(t)) : e = Object.keys(this.$options), e.forEach((function (e) {
                        t[e] = this.getOption(e)
                    }), this), t
                },
                setOption: function (e, t) {
                    if (this["$" + e] !== t) {
                        var i = this.$options[e];
                        if (!i) return o('misspelled option "' + e + '"');
                        if (i.forwardTo) return this[i.forwardTo] && this[i.forwardTo].setOption(e, t);
                        i.handlesSet || (this["$" + e] = t), i && i.set && i.set.call(this, t)
                    }
                },
                getOption: function (e) {
                    var t = this.$options[e];
                    return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : o('misspelled option "' + e + '"')
                }
            };

        function o(e) {
            "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
        }

        function a(e, t) {
            var i = new Error(e);
            i.data = t, "object" == typeof console && console.error && console.error(i), setTimeout((function () {
                throw i
            }))
        }
        var l = function () {
            this.$defaultOptions = {}
        };
        (function () {
            n.implement(this, r), this.defineOptions = function (e, t, i) {
                return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(i).forEach((function (t) {
                    var n = i[t];
                    "string" == typeof n && (n = {
                        forwardTo: n
                    }), n.name || (n.name = t), e.$options[n.name] = n, "initialValue" in n && (e["$" + n.name] = n.initialValue)
                })), n.implement(e, s), this
            }, this.resetOptions = function (e) {
                Object.keys(e.$options).forEach((function (t) {
                    var i = e.$options[t];
                    "value" in i && e.setOption(t, i.value)
                }))
            }, this.setDefaultValue = function (e, t, i) {
                var n = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
                n[t] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, t, i) : n[t].value = i)
            }, this.setDefaultValues = function (e, t) {
                Object.keys(t).forEach((function (i) {
                    this.setDefaultValue(e, i, t[i])
                }), this)
            }, this.warn = o, this.reportError = a
        }).call(l.prototype), t.AppConfig = l
    })), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], (function (e, t, n) {
        var r = e("./lib/lang"),
            s = (e("./lib/oop"), e("./lib/net")),
            o = e("./lib/app_config").AppConfig;
        n.exports = t = new o;
        var a = function () {
            return this || "undefined" != typeof window && window
        }(),
            l = {
                packaged: !1,
                workerPath: null,
                modePath: null,
                themePath: null,
                basePath: "",
                suffix: ".js",
                $moduleUrls: {}
            };

        function c(r) {
            if (a && a.document) {
                l.packaged = r || e.packaged || n.packaged || a.define && i(7).packaged;
                for (var s, o = {}, c = "", h = document.currentScript || document._currentScript, u = (h && h.ownerDocument || document).getElementsByTagName("script"), d = 0; d < u.length; d++) {
                    var g = u[d],
                        f = g.src || g.getAttribute("src");
                    if (f) {
                        for (var p = g.attributes, m = 0, w = p.length; m < w; m++) {
                            var A = p[m];
                            0 === A.name.indexOf("data-ace-") && (o[(s = A.name.replace(/^data-ace-/, ""), s.replace(/-(.)/g, (function (e, t) {
                                return t.toUpperCase()
                            })))] = A.value)
                        }
                        var v = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                        v && (c = v[1])
                    }
                }
                for (var b in c && (o.base = o.base || c, o.packaged = !0), o.basePath = o.base, o.workerPath = o.workerPath || o.base, o.modePath = o.modePath || o.base, o.themePath = o.themePath || o.base, delete o.base, o) void 0 !== o[b] && t.set(b, o[b])
            }
        }
        t.get = function (e) {
            if (!l.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
            return l[e]
        }, t.set = function (e, t) {
            if (!l.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
            l[e] = t
        }, t.all = function () {
            return r.copyObject(l)
        }, t.moduleUrl = function (e, t) {
            if (l.$moduleUrls[e]) return l.$moduleUrls[e];
            var i = e.split("/"),
                n = "snippets" == (t = t || i[i.length - 2] || "") ? "/" : "-",
                r = i[i.length - 1];
            if ("worker" == t && "-" == n) {
                var s = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
                r = r.replace(s, "")
            } (!r || r == t) && i.length > 1 && (r = i[i.length - 2]);
            var o = l[t + "Path"];
            return null == o ? o = l.basePath : "/" == n && (t = n = ""), o && "/" != o.slice(-1) && (o += "/"), o + t + n + r + this.get("suffix")
        }, t.setModuleUrl = function (e, t) {
            return l.$moduleUrls[e] = t
        }, t.$loading = {}, t.loadModule = function (i, n) {
            var r, o;
            Array.isArray(i) && (o = i[0], i = i[1]);
            try {
                r = e(i)
            } catch (e) { }
            if (r && !t.$loading[i]) return n && n(r);
            if (t.$loading[i] || (t.$loading[i] = []), t.$loading[i].push(n), !(t.$loading[i].length > 1)) {
                var a = function () {
                    e([i], (function (e) {
                        t._emit("load.module", {
                            name: i,
                            module: e
                        });
                        var n = t.$loading[i];
                        t.$loading[i] = null, n.forEach((function (t) {
                            t && t(e)
                        }))
                    }))
                };
                if (!t.get("packaged")) return a();
                s.loadScript(t.moduleUrl(i, o), a)
            }
        }, c(!0), t.init = c
    })), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/event"),
            r = e("../lib/useragent"),
            s = e("./default_handlers").DefaultHandlers,
            o = e("./default_gutter_handler").GutterHandler,
            a = e("./mouse_event").MouseEvent,
            l = e("./dragdrop_handler").DragdropHandler,
            c = e("../config"),
            h = function (e) {
                var t = this;
                this.editor = e, new s(this), new o(this), new l(this);
                var i = function (t) {
                    (!document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement())) && window.focus(), e.focus()
                },
                    a = e.renderer.getMouseEventTarget();
                n.addListener(a, "click", this.onMouseEvent.bind(this, "click")), n.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener([a, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")), n.addTouchMoveListener(e.container, this.onTouchMove.bind(this, "touchmove"));
                var c = e.renderer.$gutter;
                n.addListener(c, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(c, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(c, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(c, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n.addListener(a, "mousedown", i), n.addListener(c, "mousedown", i), r.isIE && e.renderer.scrollBarV && (n.addListener(e.renderer.scrollBarV.element, "mousedown", i), n.addListener(e.renderer.scrollBarH.element, "mousedown", i)), e.on("mousemove", (function (i) {
                    if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                        var n = e.renderer.screenToTextCoordinates(i.x, i.y),
                            r = e.session.selection.getRange(),
                            s = e.renderer;
                        !r.isEmpty() && r.insideStart(n.row, n.column) ? s.setCursorStyle("default") : s.setCursorStyle("")
                    }
                }))
            };
        (function () {
            this.onMouseEvent = function (e, t) {
                this.editor._emit(e, new a(t, this.editor))
            }, this.onMouseMove = function (e, t) {
                var i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
                i && i.length && this.editor._emit(e, new a(t, this.editor))
            }, this.onMouseWheel = function (e, t) {
                var i = new a(t, this.editor);
                i.speed = 2 * this.$scrollSpeed, i.wheelX = t.wheelX, i.wheelY = t.wheelY, this.editor._emit(e, i)
            }, this.onTouchMove = function (e, t) {
                var i = new a(t, this.editor);
                i.speed = 1, i.wheelX = t.wheelX, i.wheelY = t.wheelY, this.editor._emit(e, i)
            }, this.setState = function (e) {
                this.state = e
            }, this.captureMouse = function (e, t) {
                this.x = e.x, this.y = e.y, this.isMousePressed = !0;
                var i = this.editor.renderer;
                i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = null);
                var s = this,
                    o = function (e) {
                        if (e) {
                            if (r.isWebKit && !e.which && s.releaseMouse) return s.releaseMouse();
                            s.x = e.clientX, s.y = e.clientY, t && t(e), s.mouseEvent = new a(e, s.editor), s.$mouseMoved = !0
                        }
                    },
                    l = function (e) {
                        clearInterval(h), c(), s[s.state + "End"] && s[s.state + "End"](e), s.state = "", null == i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = !0, i.$moveTextAreaToCursor()), s.isMousePressed = !1, s.$onCaptureMouseMove = s.releaseMouse = null, e && s.onMouseEvent("mouseup", e)
                    },
                    c = function () {
                        s[s.state] && s[s.state](), s.$mouseMoved = !1
                    };
                if (r.isOldIE && "dblclick" == e.domEvent.type) return setTimeout((function () {
                    l(e)
                }));
                s.$onCaptureMouseMove = o, s.releaseMouse = n.capture(this.editor.container, o, l);
                var h = setInterval(c, 20)
            }, this.releaseMouse = null, this.cancelContextMenu = function () {
                var e = function (t) {
                    t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && n.stopEvent(t.domEvent))
                }.bind(this);
                setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
            }
        }).call(h.prototype), c.defineOptions(h.prototype, "mouseHandler", {
            scrollSpeed: {
                initialValue: 2
            },
            dragDelay: {
                initialValue: r.isMac ? 150 : 0
            },
            dragEnabled: {
                initialValue: !0
            },
            focusTimout: {
                initialValue: 0
            },
            tooltipFollowsMouse: {
                initialValue: !0
            }
        }), t.MouseHandler = h
    })), ace.define("ace/mouse/fold_handler", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.FoldHandler = function (e) {
            e.on("click", (function (t) {
                var i = t.getDocumentPosition(),
                    n = e.session,
                    r = n.getFoldAt(i.row, i.column, 1);
                r && (t.getAccelKey() ? n.removeFold(r) : n.expandFold(r), t.stop())
            })), e.on("gutterclick", (function (t) {
                if ("foldWidgets" == e.renderer.$gutterLayer.getRegion(t)) {
                    var i = t.getDocumentPosition().row,
                        n = e.session;
                    n.foldWidgets && n.foldWidgets[i] && e.session.onFoldWidgetClick(i, t), e.isFocused() || e.focus(), t.stop()
                }
            })), e.on("gutterdblclick", (function (t) {
                if ("foldWidgets" == e.renderer.$gutterLayer.getRegion(t)) {
                    var i = t.getDocumentPosition().row,
                        n = e.session,
                        r = n.getParentFoldRangeData(i, !0),
                        s = r.range || r.firstRange;
                    if (s) {
                        i = s.start.row;
                        var o = n.getFoldAt(i, n.getLine(i).length, 1);
                        o ? n.removeFold(o) : (n.addFold("...", s), e.renderer.scrollCursorIntoView({
                            row: s.start.row,
                            column: 0
                        }))
                    }
                    t.stop()
                }
            }))
        }
    })), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/keys"),
            r = e("../lib/event"),
            s = function (e) {
                this.$editor = e, this.$data = {
                    editor: e
                }, this.$handlers = [], this.setDefaultHandler(e.commands)
            };
        (function () {
            this.setDefaultHandler = function (e) {
                this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
            }, this.setKeyboardHandler = function (e) {
                var t = this.$handlers;
                if (t[t.length - 1] != e) {
                    for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(t[t.length - 1]);
                    this.addKeyboardHandler(e, 1)
                }
            }, this.addKeyboardHandler = function (e, t) {
                if (e) {
                    "function" != typeof e || e.handleKeyboard || (e.handleKeyboard = e);
                    var i = this.$handlers.indexOf(e); - 1 != i && this.$handlers.splice(i, 1), null == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == i && e.attach && e.attach(this.$editor)
                }
            }, this.removeKeyboardHandler = function (e) {
                var t = this.$handlers.indexOf(e);
                return -1 != t && (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
            }, this.getKeyboardHandler = function () {
                return this.$handlers[this.$handlers.length - 1]
            }, this.getStatusText = function () {
                var e = this.$data,
                    t = e.editor;
                return this.$handlers.map((function (i) {
                    return i.getStatusText && i.getStatusText(t, e) || ""
                })).filter(Boolean).join(" ")
            }, this.$callKeyboardHandlers = function (e, t, i, n) {
                for (var s, o = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && !((s = this.$handlers[l].handleKeyboard(this.$data, e, t, i, n)) && s.command && ((o = "null" == s.command || a.exec(s.command, this.$editor, s.args, n)) && n && -1 != e && 1 != s.passEvent && 1 != s.command.passEvent && r.stopEvent(n), o)););
                return o || -1 != e || (s = {
                    command: "insertstring"
                }, o = a.exec("insertstring", this.$editor, t)), o && this.$editor._signal && this.$editor._signal("keyboardActivity", s), o
            }, this.onCommandKey = function (e, t, i) {
                var r = n.keyCodeToString(i);
                this.$callKeyboardHandlers(t, r, i, e)
            }, this.onTextInput = function (e) {
                this.$callKeyboardHandlers(-1, e)
            }
        }).call(s.prototype), t.KeyBinding = s
    })), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        var n = 0,
            r = 0,
            s = !1,
            o = !1,
            a = !1,
            l = [
                [0, 3, 0, 1, 0, 0, 0],
                [0, 3, 0, 1, 2, 2, 0],
                [0, 3, 0, 17, 2, 0, 1],
                [0, 3, 5, 5, 4, 1, 0],
                [0, 3, 21, 21, 4, 0, 1],
                [0, 3, 5, 5, 4, 2, 0]
            ],
            c = [
                [2, 0, 1, 1, 0, 1, 0],
                [2, 0, 1, 1, 0, 2, 0],
                [2, 0, 2, 1, 3, 2, 0],
                [2, 0, 2, 33, 3, 1, 1]
            ],
            h = [18, 18, 18, 18, 18, 18, 18, 18, 18, 6, 5, 6, 8, 5, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 5, 5, 5, 6, 8, 4, 4, 11, 11, 11, 4, 4, 4, 4, 4, 10, 9, 10, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 18, 18, 18, 18, 18, 18, 5, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 4, 11, 11, 11, 11, 4, 4, 4, 4, 0, 4, 4, 18, 4, 4, 11, 11, 2, 2, 4, 0, 4, 4, 4, 2, 0, 4, 4, 4, 4, 4],
            u = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 18, 18, 18, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 5, 13, 14, 15, 16, 17, 9, 11, 11, 11, 11, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8];

        function d(e, t, i) {
            if (!(r < e))
                if (1 != e || 1 != n || o)
                    for (var s, a, l, c, h = i.length, u = 0; u < h;) {
                        if (t[u] >= e) {
                            for (s = u + 1; s < h && t[s] >= e;) s++;
                            for (a = u, l = s - 1; a < l; a++, l--) c = i[a], i[a] = i[l], i[l] = c;
                            u = s
                        }
                        u++
                    } else i.reverse()
        }

        function g(e, t, i, r) {
            var l, c, h, u, d = t[r];
            switch (d) {
                case 0:
                case 1:
                    s = !1;
                case 4:
                case 3:
                    return d;
                case 2:
                    return s ? 3 : 2;
                case 7:
                    return s = !0, !0, 1;
                case 8:
                    return 4;
                case 9:
                    return r < 1 || r + 1 >= t.length || 2 != (l = i[r - 1]) && 3 != l || 2 != (c = t[r + 1]) && 3 != c ? 4 : (s && (c = 3), c == l ? c : 4);
                case 10:
                    return 2 == (l = r > 0 ? i[r - 1] : 5) && r + 1 < t.length && 2 == t[r + 1] ? 2 : 4;
                case 11:
                    if (r > 0 && 2 == i[r - 1]) return 2;
                    if (s) return 4;
                    for (u = r + 1, h = t.length; u < h && 11 == t[u];) u++;
                    return u < h && 2 == t[u] ? 2 : 4;
                case 12:
                    for (h = t.length, u = r + 1; u < h && 12 == t[u];) u++;
                    if (u < h) {
                        var g = e[r],
                            f = g >= 1425 && g <= 2303 || 64286 == g;
                        if (l = t[u], f && (1 == l || 7 == l)) return 1
                    }
                    return r < 1 || 5 == (l = t[r - 1]) ? 4 : i[r - 1];
                case 5:
                    return s = !1, o = !0, n;
                case 6:
                    return a = !0, 4;
                case 13:
                case 14:
                case 16:
                case 17:
                case 15:
                    s = !1;
                case 18:
                    return 4
            }
        }

        function f(e) {
            var t = e.charCodeAt(0),
                i = t >> 8;
            return 0 == i ? t > 191 ? 0 : h[t] : 5 == i ? /[\u0591-\u05f4]/.test(e) ? 1 : 0 : 6 == i ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? 12 : /[\u0660-\u0669\u066b-\u066c]/.test(e) ? 3 : 1642 == t ? 11 : /[\u06f0-\u06f9]/.test(e) ? 2 : 7 : 32 == i && t <= 8287 ? u[255 & t] : 254 == i && t >= 65136 ? 7 : 4
        }
        t.L = 0, t.R = 1, t.EN = 2, t.ON_R = 3, t.AN = 4, t.R_H = 5, t.B = 6, t.DOT = "·", t.doBidiReorder = function (e, i, h) {
            if (e.length < 2) return {};
            var u = e.split(""),
                p = new Array(u.length),
                m = new Array(u.length),
                w = [];
            n = h ? 1 : 0,
                function (e, t, i, h) {
                    var u = n ? c : l,
                        d = null,
                        p = null,
                        m = null,
                        w = 0,
                        A = null,
                        v = -1,
                        b = null,
                        C = null,
                        F = [];
                    if (!h)
                        for (b = 0, h = []; b < i; b++) h[b] = f(e[b]);
                    for (r = n, s = !1, !1, o = !1, a = !1, C = 0; C < i; C++) {
                        if (d = w, F[C] = p = g(e, h, F, C), A = 240 & (w = u[d][p]), w &= 15, t[C] = m = u[w][5], A > 0)
                            if (16 == A) {
                                for (b = v; b < C; b++) t[b] = 1;
                                v = -1
                            } else v = -1;
                        if (u[w][6]) - 1 == v && (v = C);
                        else if (v > -1) {
                            for (b = v; b < C; b++) t[b] = m;
                            v = -1
                        }
                        5 == h[C] && (t[C] = 0), r |= m
                    }
                    if (a)
                        for (b = 0; b < i; b++)
                            if (6 == h[b]) {
                                t[b] = n;
                                for (var E = b - 1; E >= 0 && 8 == h[E]; E--) t[E] = n
                            }
                }(u, w, u.length, i);
            for (var A = 0; A < p.length; p[A] = A, A++);
            d(2, w, p), d(1, w, p);
            for (A = 0; A < p.length - 1; A++) 3 === i[A] ? w[A] = t.AN : 1 === w[A] && (i[A] > 7 && i[A] < 13 || 4 === i[A] || 18 === i[A]) ? w[A] = t.ON_R : A > 0 && "ل" === u[A - 1] && /\u0622|\u0623|\u0625|\u0627/.test(u[A]) && (w[A - 1] = w[A] = t.R_H, A++);
            u[u.length - 1] === t.DOT && (w[u.length - 1] = t.B);
            for (A = 0; A < p.length; A++) m[A] = w[p[A]];
            return {
                logicalFromVisual: p,
                bidiLevels: m
            }
        }, t.hasBidiCharacters = function (e, t) {
            for (var i = !1, n = 0; n < e.length; n++) t[n] = f(e.charAt(n)), i || 1 != t[n] && 7 != t[n] || (i = !0);
            return i
        }, t.getVisualFromLogicalIdx = function (e, t) {
            for (var i = 0; i < t.logicalFromVisual.length; i++)
                if (t.logicalFromVisual[i] == e) return i;
            return 0
        }
    })), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang", "ace/lib/useragent"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/bidiutil"),
            r = e("./lib/lang"),
            s = e("./lib/useragent"),
            o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            a = function (e) {
                this.session = e, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = n, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.line = "", this.wrapIndent = 0, this.isLastRow = !1, this.EOF = "¶", this.seenBidi = !1
            };
        (function () {
            this.isBidiRow = function (e, t, i) {
                return !!this.seenBidi && (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(t, i), this.updateBidiMap()), this.bidiMap.bidiLevels)
            }, this.onChange = function (e) {
                this.seenBidi ? this.currentRow = null : "insert" == e.action && o.test(e.lines.join("\n")) && (this.seenBidi = !0, this.currentRow = null)
            }, this.getDocumentRow = function () {
                var e = 0,
                    t = this.session.$screenRowCache;
                if (t.length) {
                    var i = this.session.$getRowCacheIndex(t, this.currentRow);
                    i >= 0 && (e = this.session.$docRowCache[i])
                }
                return e
            }, this.getSplitIndex = function () {
                var e = 0,
                    t = this.session.$screenRowCache;
                if (t.length)
                    for (var i, n = this.session.$getRowCacheIndex(t, this.currentRow); this.currentRow - e > 0 && (i = this.session.$getRowCacheIndex(t, this.currentRow - e - 1)) === n;) n = i, e++;
                return e
            }, this.updateRowLine = function (e, t) {
                if (void 0 === e && (e = this.getDocumentRow()), this.wrapIndent = 0, this.isLastRow = e === this.session.getLength() - 1, this.line = this.session.getLine(e), this.session.$useWrapMode) {
                    var i = this.session.$wrapData[e];
                    i && (void 0 === t && (t = this.getSplitIndex()), t > 0 && i.length ? (this.wrapIndent = i.indent, this.line = t < i.length ? this.line.substring(i[t - 1], i[i.length - 1]) : this.line.substring(i[i.length - 1])) : this.line = this.line.substring(0, i[t]))
                }
                var s, o = this.session,
                    a = 0;
                this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, (function (e, t) {
                    return "\t" === e || o.isFullWidth(e.charCodeAt(0)) ? (s = "\t" === e ? o.getScreenTabSize(t + a) : 2, a += s - 1, r.stringRepeat(n.DOT, s)) : e
                }))
            }, this.updateBidiMap = function () {
                var e = [],
                    t = this.isLastRow ? this.EOF : this.EOL,
                    i = this.line + (this.showInvisibles ? t : n.DOT);
                n.hasBidiCharacters(i, e) ? this.bidiMap = n.doBidiReorder(i, e, this.isRtlDir) : this.bidiMap = {}
            }, this.markAsDirty = function () {
                this.currentRow = null
            }, this.updateCharacterWidths = function (e) {
                if (this.seenBidi && this.characterWidth !== e.$characterSize.width) {
                    var t = this.characterWidth = e.$characterSize.width,
                        i = e.$measureCharWidth("ה");
                    this.charWidths[n.L] = this.charWidths[n.EN] = this.charWidths[n.ON_R] = t, this.charWidths[n.R] = this.charWidths[n.AN] = i, this.charWidths[n.R_H] = s.isChrome ? i : .45 * i, this.charWidths[n.B] = 0, this.currentRow = null
                }
            }, this.getShowInvisibles = function () {
                return this.showInvisibles
            }, this.setShowInvisibles = function (e) {
                this.showInvisibles = e, this.currentRow = null
            }, this.setEolChar = function (e) {
                this.EOL = e
            }, this.setTextDir = function (e) {
                this.isRtlDir = e
            }, this.getPosLeft = function (e) {
                e -= this.wrapIndent;
                var t = n.getVisualFromLogicalIdx(e > 0 ? e - 1 : 0, this.bidiMap),
                    i = this.bidiMap.bidiLevels,
                    r = 0;
                0 === e && i[t] % 2 != 0 && t++;
                for (var s = 0; s < t; s++) r += this.charWidths[i[s]];
                return 0 !== e && i[t] % 2 == 0 && (r += this.charWidths[i[t]]), this.wrapIndent && (r += this.wrapIndent * this.charWidths[n.L]), r
            }, this.getSelections = function (e, t) {
                for (var i, r, s = this.bidiMap, o = s.bidiLevels, a = this.wrapIndent * this.charWidths[n.L], l = [], c = Math.min(e, t) - this.wrapIndent, h = Math.max(e, t) - this.wrapIndent, u = !1, d = !1, g = 0, f = 0; f < o.length; f++) r = s.logicalFromVisual[f], i = o[f], (u = r >= c && r < h) && !d ? g = a : !u && d && l.push({
                    left: g,
                    width: a - g
                }), a += this.charWidths[i], d = u;
                return u && f === o.length && l.push({
                    left: g,
                    width: a - g
                }), l
            }, this.offsetToCol = function (e) {
                var t = 0,
                    i = (e = Math.max(e, 0), 0),
                    r = 0,
                    s = this.bidiMap.bidiLevels,
                    o = this.charWidths[s[r]];
                for (this.wrapIndent && (e -= this.wrapIndent * this.charWidths[n.L]); e > i + o / 2;) {
                    if (i += o, r === s.length - 1) {
                        o = 0;
                        break
                    }
                    o = this.charWidths[s[++r]]
                }
                return r > 0 && s[r - 1] % 2 != 0 && s[r] % 2 == 0 ? (e < i && r--, t = this.bidiMap.logicalFromVisual[r]) : r > 0 && s[r - 1] % 2 == 0 && s[r] % 2 != 0 ? t = 1 + (e > i ? this.bidiMap.logicalFromVisual[r] : this.bidiMap.logicalFromVisual[r - 1]) : this.isRtlDir && r === s.length - 1 && 0 === o && s[r - 1] % 2 == 0 || !this.isRtlDir && 0 === r && s[r] % 2 != 0 ? t = 1 + this.bidiMap.logicalFromVisual[r] : (r > 0 && s[r - 1] % 2 != 0 && 0 !== o && r--, t = this.bidiMap.logicalFromVisual[r]), t + this.wrapIndent
            }
        }).call(a.prototype), t.BidiHandler = a
    })), ace.define("ace/range", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        var n = function (e, t, i, n) {
            this.start = {
                row: e,
                column: t
            }, this.end = {
                row: i,
                column: n
            }
        };
        (function () {
            this.isEqual = function (e) {
                return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
            }, this.toString = function () {
                return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
            }, this.contains = function (e, t) {
                return 0 == this.compare(e, t)
            }, this.compareRange = function (e) {
                var t, i = e.end,
                    n = e.start;
                return 1 == (t = this.compare(i.row, i.column)) ? 1 == (t = this.compare(n.row, n.column)) ? 2 : 0 == t ? 1 : 0 : -1 == t ? -2 : -1 == (t = this.compare(n.row, n.column)) ? -1 : 1 == t ? 42 : 0
            }, this.comparePoint = function (e) {
                return this.compare(e.row, e.column)
            }, this.containsRange = function (e) {
                return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
            }, this.intersects = function (e) {
                var t = this.compareRange(e);
                return -1 == t || 0 == t || 1 == t
            }, this.isEnd = function (e, t) {
                return this.end.row == e && this.end.column == t
            }, this.isStart = function (e, t) {
                return this.start.row == e && this.start.column == t
            }, this.setStart = function (e, t) {
                "object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
            }, this.setEnd = function (e, t) {
                "object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
            }, this.inside = function (e, t) {
                return 0 == this.compare(e, t) && (!this.isEnd(e, t) && !this.isStart(e, t))
            }, this.insideStart = function (e, t) {
                return 0 == this.compare(e, t) && !this.isEnd(e, t)
            }, this.insideEnd = function (e, t) {
                return 0 == this.compare(e, t) && !this.isStart(e, t)
            }, this.compare = function (e, t) {
                return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
            }, this.compareStart = function (e, t) {
                return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
            }, this.compareEnd = function (e, t) {
                return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
            }, this.compareInside = function (e, t) {
                return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
            }, this.clipRows = function (e, t) {
                if (this.end.row > t) var i = {
                    row: t + 1,
                    column: 0
                };
                else if (this.end.row < e) i = {
                    row: e,
                    column: 0
                };
                if (this.start.row > t) var r = {
                    row: t + 1,
                    column: 0
                };
                else if (this.start.row < e) r = {
                    row: e,
                    column: 0
                };
                return n.fromPoints(r || this.start, i || this.end)
            }, this.extend = function (e, t) {
                var i = this.compare(e, t);
                if (0 == i) return this;
                if (-1 == i) var r = {
                    row: e,
                    column: t
                };
                else var s = {
                    row: e,
                    column: t
                };
                return n.fromPoints(r || this.start, s || this.end)
            }, this.isEmpty = function () {
                return this.start.row === this.end.row && this.start.column === this.end.column
            }, this.isMultiLine = function () {
                return this.start.row !== this.end.row
            }, this.clone = function () {
                return n.fromPoints(this.start, this.end)
            }, this.collapseRows = function () {
                return 0 == this.end.column ? new n(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new n(this.start.row, 0, this.end.row, 0)
            }, this.toScreenRange = function (e) {
                var t = e.documentToScreenPosition(this.start),
                    i = e.documentToScreenPosition(this.end);
                return new n(t.row, t.column, i.row, i.column)
            }, this.moveBy = function (e, t) {
                this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
            }
        }).call(n.prototype), n.fromPoints = function (e, t) {
            return new n(e.row, e.column, t.row, t.column)
        }, n.comparePoints = function (e, t) {
            return e.row - t.row || e.column - t.column
        }, n.comparePoints = function (e, t) {
            return e.row - t.row || e.column - t.column
        }, t.Range = n
    })), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/lang"),
            s = e("./lib/event_emitter").EventEmitter,
            o = e("./range").Range,
            a = function (e) {
                this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
                var t = this;
                this.lead.on("change", (function (e) {
                    t._emit("changeCursor"), t.$isEmpty || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
                })), this.selectionAnchor.on("change", (function () {
                    t.$isEmpty || t._emit("changeSelection")
                }))
            };
        (function () {
            n.implement(this, s), this.isEmpty = function () {
                return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
            }, this.isMultiLine = function () {
                return !this.isEmpty() && this.getRange().isMultiLine()
            }, this.getCursor = function () {
                return this.lead.getPosition()
            }, this.setSelectionAnchor = function (e, t) {
                this.anchor.setPosition(e, t), this.$isEmpty && (this.$isEmpty = !1, this._emit("changeSelection"))
            }, this.getSelectionAnchor = function () {
                return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
            }, this.getSelectionLead = function () {
                return this.lead.getPosition()
            }, this.shiftSelection = function (e) {
                if (this.$isEmpty) this.moveCursorTo(this.lead.row, this.lead.column + e);
                else {
                    var t = this.getSelectionAnchor(),
                        i = this.getSelectionLead(),
                        n = this.isBackwards();
                    n && 0 === t.column || this.setSelectionAnchor(t.row, t.column + e), (n || 0 !== i.column) && this.$moveSelection((function () {
                        this.moveCursorTo(i.row, i.column + e)
                    }))
                }
            }, this.isBackwards = function () {
                var e = this.anchor,
                    t = this.lead;
                return e.row > t.row || e.row == t.row && e.column > t.column
            }, this.getRange = function () {
                var e = this.anchor,
                    t = this.lead;
                return this.isEmpty() ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t)
            }, this.clearSelection = function () {
                this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
            }, this.selectAll = function () {
                var e = this.doc.getLength() - 1;
                this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc.getLine(e).length)
            }, this.setRange = this.setSelectionRange = function (e, t) {
                t ? (this.setSelectionAnchor(e.end.row, e.end.column), this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column), this.selectTo(e.end.row, e.end.column)), this.getRange().isEmpty() && (this.$isEmpty = !0), this.$desiredColumn = null
            }, this.$moveSelection = function (e) {
                var t = this.lead;
                this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
            }, this.selectTo = function (e, t) {
                this.$moveSelection((function () {
                    this.moveCursorTo(e, t)
                }))
            }, this.selectToPosition = function (e) {
                this.$moveSelection((function () {
                    this.moveCursorToPosition(e)
                }))
            }, this.moveTo = function (e, t) {
                this.clearSelection(), this.moveCursorTo(e, t)
            }, this.moveToPosition = function (e) {
                this.clearSelection(), this.moveCursorToPosition(e)
            }, this.selectUp = function () {
                this.$moveSelection(this.moveCursorUp)
            }, this.selectDown = function () {
                this.$moveSelection(this.moveCursorDown)
            }, this.selectRight = function () {
                this.$moveSelection(this.moveCursorRight)
            }, this.selectLeft = function () {
                this.$moveSelection(this.moveCursorLeft)
            }, this.selectLineStart = function () {
                this.$moveSelection(this.moveCursorLineStart)
            }, this.selectLineEnd = function () {
                this.$moveSelection(this.moveCursorLineEnd)
            }, this.selectFileEnd = function () {
                this.$moveSelection(this.moveCursorFileEnd)
            }, this.selectFileStart = function () {
                this.$moveSelection(this.moveCursorFileStart)
            }, this.selectWordRight = function () {
                this.$moveSelection(this.moveCursorWordRight)
            }, this.selectWordLeft = function () {
                this.$moveSelection(this.moveCursorWordLeft)
            }, this.getWordRange = function (e, t) {
                if (void 0 === t) {
                    var i = e || this.lead;
                    e = i.row, t = i.column
                }
                return this.session.getWordRange(e, t)
            }, this.selectWord = function () {
                this.setSelectionRange(this.getWordRange())
            }, this.selectAWord = function () {
                var e = this.getCursor(),
                    t = this.session.getAWordRange(e.row, e.column);
                this.setSelectionRange(t)
            }, this.getLineRange = function (e, t) {
                var i, n = "number" == typeof e ? e : this.lead.row,
                    r = this.session.getFoldLine(n);
                return r ? (n = r.start.row, i = r.end.row) : i = n, !0 === t ? new o(n, 0, i, this.session.getLine(i).length) : new o(n, 0, i + 1, 0)
            }, this.selectLine = function () {
                this.setSelectionRange(this.getLineRange())
            }, this.moveCursorUp = function () {
                this.moveCursorBy(-1, 0)
            }, this.moveCursorDown = function () {
                this.moveCursorBy(1, 0)
            }, this.wouldMoveIntoSoftTab = function (e, t, i) {
                var n = e.column,
                    r = e.column + t;
                return i < 0 && (n = e.column - t, r = e.column), this.session.isTabStop(e) && this.doc.getLine(e.row).slice(n, r).split(" ").length - 1 == t
            }, this.moveCursorLeft = function () {
                var e, t = this.lead.getPosition();
                if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column);
                else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
                else {
                    var i = this.session.getTabSize();
                    this.wouldMoveIntoSoftTab(t, i, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -i) : this.moveCursorBy(0, -1)
                }
            }, this.moveCursorRight = function () {
                var e, t = this.lead.getPosition();
                if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column);
                else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
                else {
                    var i = this.session.getTabSize();
                    t = this.lead;
                    this.wouldMoveIntoSoftTab(t, i, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, i) : this.moveCursorBy(0, 1)
                }
            }, this.moveCursorLineStart = function () {
                var e = this.lead.row,
                    t = this.lead.column,
                    i = this.session.documentToScreenRow(e, t),
                    n = this.session.screenToDocumentPosition(i, 0),
                    r = this.session.getDisplayLine(e, null, n.row, n.column).match(/^\s*/);
                r[0].length == t || this.session.$useEmacsStyleLineStart || (n.column += r[0].length), this.moveCursorToPosition(n)
            }, this.moveCursorLineEnd = function () {
                var e = this.lead,
                    t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
                if (this.lead.column == t.column) {
                    var i = this.session.getLine(t.row);
                    if (t.column == i.length) {
                        var n = i.search(/\s+$/);
                        n > 0 && (t.column = n)
                    }
                }
                this.moveCursorTo(t.row, t.column)
            }, this.moveCursorFileEnd = function () {
                var e = this.doc.getLength() - 1,
                    t = this.doc.getLine(e).length;
                this.moveCursorTo(e, t)
            }, this.moveCursorFileStart = function () {
                this.moveCursorTo(0, 0)
            }, this.moveCursorLongWordRight = function () {
                var e = this.lead.row,
                    t = this.lead.column,
                    i = this.doc.getLine(e),
                    n = i.substring(t);
                this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
                var r = this.session.getFoldAt(e, t, 1);
                if (r) this.moveCursorTo(r.end.row, r.end.column);
                else {
                    if (this.session.nonTokenRe.exec(n) && (t += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, n = i.substring(t)), t >= i.length) return this.moveCursorTo(e, i.length), this.moveCursorRight(), void (e < this.doc.getLength() - 1 && this.moveCursorWordRight());
                    this.session.tokenRe.exec(n) && (t += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, t)
                }
            }, this.moveCursorLongWordLeft = function () {
                var e, t = this.lead.row,
                    i = this.lead.column;
                if (e = this.session.getFoldAt(t, i, -1)) this.moveCursorTo(e.start.row, e.start.column);
                else {
                    var n = this.session.getFoldStringAt(t, i, -1);
                    null == n && (n = this.doc.getLine(t).substring(0, i));
                    var s = r.stringReverse(n);
                    if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(s) && (i -= this.session.nonTokenRe.lastIndex, s = s.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) return this.moveCursorTo(t, 0), this.moveCursorLeft(), void (t > 0 && this.moveCursorWordLeft());
                    this.session.tokenRe.exec(s) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, i)
                }
            }, this.$shortWordEndIndex = function (e) {
                var t, i = 0,
                    n = /\s/,
                    r = this.session.tokenRe;
                if (r.lastIndex = 0, this.session.tokenRe.exec(e)) i = this.session.tokenRe.lastIndex;
                else {
                    for (;
                        (t = e[i]) && n.test(t);) i++;
                    if (i < 1)
                        for (r.lastIndex = 0;
                            (t = e[i]) && !r.test(t);)
                            if (r.lastIndex = 0, i++, n.test(t)) {
                                if (i > 2) {
                                    i--;
                                    break
                                }
                                for (;
                                    (t = e[i]) && n.test(t);) i++;
                                if (i > 2) break
                            }
                }
                return r.lastIndex = 0, i
            }, this.moveCursorShortWordRight = function () {
                var e = this.lead.row,
                    t = this.lead.column,
                    i = this.doc.getLine(e),
                    n = i.substring(t),
                    r = this.session.getFoldAt(e, t, 1);
                if (r) return this.moveCursorTo(r.end.row, r.end.column);
                if (t == i.length) {
                    var s = this.doc.getLength();
                    do {
                        e++, n = this.doc.getLine(e)
                    } while (e < s && /^\s*$/.test(n));
                    /^\s+/.test(n) || (n = ""), t = 0
                }
                var o = this.$shortWordEndIndex(n);
                this.moveCursorTo(e, t + o)
            }, this.moveCursorShortWordLeft = function () {
                var e, t = this.lead.row,
                    i = this.lead.column;
                if (e = this.session.getFoldAt(t, i, -1)) return this.moveCursorTo(e.start.row, e.start.column);
                var n = this.session.getLine(t).substring(0, i);
                if (0 === i) {
                    do {
                        t--, n = this.doc.getLine(t)
                    } while (t > 0 && /^\s*$/.test(n));
                    i = n.length, /\s+$/.test(n) || (n = "")
                }
                var s = r.stringReverse(n),
                    o = this.$shortWordEndIndex(s);
                return this.moveCursorTo(t, i - o)
            }, this.moveCursorWordRight = function () {
                this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
            }, this.moveCursorWordLeft = function () {
                this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
            }, this.moveCursorBy = function (e, t) {
                var i, n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
                0 === t && (0 !== e && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (i = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(i / this.session.$bidiHandler.charWidths[0])) : i = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
                var r = this.session.screenToDocumentPosition(n.row + e, n.column, i);
                0 !== e && 0 === t && r.row === this.lead.row && r.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[r.row] && (r.row > 0 || e > 0) && r.row++, this.moveCursorTo(r.row, r.column + t, 0 === t)
            }, this.moveCursorToPosition = function (e) {
                this.moveCursorTo(e.row, e.column)
            }, this.moveCursorTo = function (e, t, i) {
                var n = this.session.getFoldAt(e, t, 1);
                n && (e = n.start.row, t = n.start.column), this.$keepDesiredColumnOnChange = !0;
                var r = this.session.getLine(e);
                /[\uDC00-\uDFFF]/.test(r.charAt(t)) && r.charAt(t - 1) && (this.lead.row == e && this.lead.column == t + 1 ? t -= 1 : t += 1), this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, i || (this.$desiredColumn = null)
            }, this.moveCursorToScreen = function (e, t, i) {
                var n = this.session.screenToDocumentPosition(e, t);
                this.moveCursorTo(n.row, n.column, i)
            }, this.detach = function () {
                this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
            }, this.fromOrientedRange = function (e) {
                this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
            }, this.toOrientedRange = function (e) {
                var t = this.getRange();
                return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
            }, this.getRangeOfMovements = function (e) {
                var t = this.getCursor();
                try {
                    e(this);
                    var i = this.getCursor();
                    return o.fromPoints(t, i)
                } catch (e) {
                    return o.fromPoints(t, t)
                } finally {
                    this.moveCursorToPosition(t)
                }
            }, this.toJSON = function () {
                if (this.rangeCount) var e = this.ranges.map((function (e) {
                    var t = e.clone();
                    return t.isBackwards = e.cursor == e.start, t
                }));
                else (e = this.getRange()).isBackwards = this.isBackwards();
                return e
            }, this.fromJSON = function (e) {
                if (null == e.start) {
                    if (this.rangeList) {
                        this.toSingleRange(e[0]);
                        for (var t = e.length; t--;) {
                            var i = o.fromPoints(e[t].start, e[t].end);
                            e[t].isBackwards && (i.cursor = i.start), this.addRange(i, !0)
                        }
                        return
                    }
                    e = e[0]
                }
                this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
            }, this.isEqual = function (e) {
                if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
                if (!e.length || !this.ranges) return this.getRange().isEqual(e);
                for (var t = this.ranges.length; t--;)
                    if (!this.ranges[t].isEqual(e[t])) return !1;
                return !0
            }
        }).call(a.prototype), t.Selection = a
    })), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], (function (e, t, i) {
        "use strict";
        var n = e("./config"),
            r = 2e3,
            s = function (e) {
                for (var t in this.states = e, this.regExps = {}, this.matchMappings = {}, this.states) {
                    for (var i = this.states[t], n = [], r = 0, s = this.matchMappings[t] = {
                        defaultToken: "text"
                    }, o = "g", a = [], l = 0; l < i.length; l++) {
                        var c = i[l];
                        if (c.defaultToken && (s.defaultToken = c.defaultToken), c.caseInsensitive && (o = "gi"), null != c.regex) {
                            c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                            var h = c.regex,
                                u = new RegExp("(?:(" + h + ")|(.))").exec("a").length - 2;
                            Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c.token = c.token[0] : u - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                                rule: c,
                                groupCount: u - 1
                            }), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : "function" != typeof c.token || c.onMatch || (c.onMatch = u > 1 ? this.$applyToken : c.token), u > 1 && (/\\\d/.test(c.regex) ? h = c.regex.replace(/\\([0-9]+)/g, (function (e, t) {
                                return "\\" + (parseInt(t, 10) + r + 1)
                            })) : (u = 1, h = this.removeCapturingGroups(c.regex)), c.splitRegex || "string" == typeof c.token || a.push(c)), s[r] = l, r += u, n.push(h), c.onMatch || (c.onMatch = null)
                        }
                    }
                    n.length || (s[0] = 0, n.push("$")), a.forEach((function (e) {
                        e.splitRegex = this.createSplitterRegexp(e.regex, o)
                    }), this), this.regExps[t] = new RegExp("(" + n.join(")|(") + ")|($)", o)
                }
            };
        (function () {
            this.$setMaxTokenCount = function (e) {
                r = 0 | e
            }, this.$applyToken = function (e) {
                var t = this.splitRegex.exec(e).slice(1),
                    i = this.token.apply(this, t);
                if ("string" == typeof i) return [{
                    type: i,
                    value: e
                }];
                for (var n = [], r = 0, s = i.length; r < s; r++) t[r] && (n[n.length] = {
                    type: i[r],
                    value: t[r]
                });
                return n
            }, this.$arrayTokens = function (e) {
                if (!e) return [];
                var t = this.splitRegex.exec(e);
                if (!t) return "text";
                for (var i = [], n = this.tokenArray, r = 0, s = n.length; r < s; r++) t[r + 1] && (i[i.length] = {
                    type: n[r],
                    value: t[r + 1]
                });
                return i
            }, this.removeCapturingGroups = function (e) {
                return e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, (function (e, t) {
                    return t ? "(?:" : e
                }))
            }, this.createSplitterRegexp = function (e, t) {
                if (-1 != e.indexOf("(?=")) {
                    var i = 0,
                        n = !1,
                        r = {};
                    e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function (e, t, s, o, a, l) {
                        return n ? n = "]" != a : a ? n = !0 : o ? (i == r.stack && (r.end = l + 1, r.stack = -1), i--) : s && (i++, 1 != s.length && (r.stack = i, r.start = l)), e
                    })), null != r.end && /^\)*$/.test(e.substr(r.end)) && (e = e.substring(0, r.start) + e.substr(r.end))
                }
                return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
            }, this.getLineTokens = function (e, t) {
                if (t && "string" != typeof t) {
                    var i = t.slice(0);
                    "#tmp" === (t = i[0]) && (i.shift(), t = i.shift())
                } else i = [];
                var n = t || "start",
                    s = this.states[n];
                s || (n = "start", s = this.states[n]);
                var o = this.matchMappings[n],
                    a = this.regExps[n];
                a.lastIndex = 0;
                for (var l, c = [], h = 0, u = 0, d = {
                    type: null,
                    value: ""
                }; l = a.exec(e);) {
                    var g = o.defaultToken,
                        f = null,
                        p = l[0],
                        m = a.lastIndex;
                    if (m - p.length > h) {
                        var w = e.substring(h, m - p.length);
                        d.type == g ? d.value += w : (d.type && c.push(d), d = {
                            type: g,
                            value: w
                        })
                    }
                    for (var A = 0; A < l.length - 2; A++)
                        if (void 0 !== l[A + 1]) {
                            g = (f = s[o[A]]).onMatch ? f.onMatch(p, n, i, e) : f.token, f.next && (n = "string" == typeof f.next ? f.next : f.next(n, i), (s = this.states[n]) || (this.reportError("state doesn't exist", n), n = "start", s = this.states[n]), o = this.matchMappings[n], h = m, (a = this.regExps[n]).lastIndex = m), f.consumeLineEnd && (h = m);
                            break
                        } if (p)
                        if ("string" == typeof g) f && !1 === f.merge || d.type !== g ? (d.type && c.push(d), d = {
                            type: g,
                            value: p
                        }) : d.value += p;
                        else if (g) {
                            d.type && c.push(d), d = {
                                type: null,
                                value: ""
                            };
                            for (A = 0; A < g.length; A++) c.push(g[A])
                        }
                    if (h == e.length) break;
                    if (h = m, u++ > r) {
                        for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                            startState: t,
                            line: e
                        }); h < e.length;) d.type && c.push(d), d = {
                            value: e.substring(h, h += 2e3),
                            type: "overflow"
                        };
                        n = "start", i = [];
                        break
                    }
                }
                return d.type && c.push(d), i.length > 1 && i[0] !== n && i.unshift("#tmp", n), {
                    tokens: c,
                    state: i.length ? i : n
                }
            }, this.reportError = n.reportError
        }).call(s.prototype), t.Tokenizer = s
    })), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/lang"),
            r = function () {
                this.$rules = {
                    start: [{
                        token: "empty_line",
                        regex: "^$"
                    }, {
                        defaultToken: "text"
                    }]
                }
            };
        (function () {
            this.addRules = function (e, t) {
                if (t)
                    for (var i in e) {
                        for (var n = e[i], r = 0; r < n.length; r++) {
                            var s = n[r];
                            (s.next || s.onMatch) && ("string" == typeof s.next && 0 !== s.next.indexOf(t) && (s.next = t + s.next), s.nextState && 0 !== s.nextState.indexOf(t) && (s.nextState = t + s.nextState))
                        }
                        this.$rules[t + i] = n
                    } else
                    for (var i in e) this.$rules[i] = e[i]
            }, this.getRules = function () {
                return this.$rules
            }, this.embedRules = function (e, t, i, r, s) {
                var o = "function" == typeof e ? (new e).getRules() : e;
                if (r)
                    for (var a = 0; a < r.length; a++) r[a] = t + r[a];
                else
                    for (var l in r = [], o) r.push(t + l);
                if (this.addRules(o, t), i) {
                    var c = Array.prototype[s ? "push" : "unshift"];
                    for (a = 0; a < r.length; a++) c.apply(this.$rules[r[a]], n.deepCopy(i))
                }
                this.$embeds || (this.$embeds = []), this.$embeds.push(t)
            }, this.getEmbeds = function () {
                return this.$embeds
            };
            var e = function (e, t) {
                return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
            },
                t = function (e, t) {
                    return t.shift(), t.shift() || "start"
                };
            this.normalizeRules = function () {
                var i = 0,
                    n = this.$rules;
                Object.keys(n).forEach((function r(s) {
                    var o = n[s];
                    o.processed = !0;
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a],
                            c = null;
                        Array.isArray(l) && (c = l, l = {}), !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({
                            defaultToken: l.token
                        }, {
                            token: l.token + ".end",
                            regex: l.end || l.start,
                            next: "pop"
                        }), l.token = l.token + ".start", l.push = !0);
                        var h = l.next || l.push;
                        if (h && Array.isArray(h)) {
                            var u = l.stateName;
                            u || ("string" != typeof (u = l.token) && (u = u[0] || ""), n[u] && (u += i++)), n[u] = h, l.next = u, r(u)
                        } else "pop" == h && (l.next = t);
                        if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules)
                            for (var d in l.rules) n[d] ? n[d].push && n[d].push.apply(n[d], l.rules[d]) : n[d] = l.rules[d];
                        var g = "string" == typeof l ? l : l.include;
                        if (g && (c = Array.isArray(g) ? g.map((function (e) {
                            return n[e]
                        })) : n[g]), c) {
                            var f = [a, 1].concat(c);
                            l.noEscape && (f = f.filter((function (e) {
                                return !e.next
                            }))), o.splice.apply(o, f), a--
                        }
                        l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                    }
                }), this)
            }, this.createKeywordMapper = function (e, t, i, n) {
                var r = Object.create(null);
                return Object.keys(e).forEach((function (t) {
                    var s = e[t];
                    i && (s = s.toLowerCase());
                    for (var o = s.split(n || "|"), a = o.length; a--;) r[o[a]] = t
                })), Object.getPrototypeOf(r) && (r.__proto__ = null), this.$keywordList = Object.keys(r), e = null, i ? function (e) {
                    return r[e.toLowerCase()] || t
                } : function (e) {
                    return r[e] || t
                }
            }, this.getKeywords = function () {
                return this.$keywords
            }
        }).call(r.prototype), t.TextHighlightRules = r
    })), ace.define("ace/mode/behaviour", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        var n = function () {
            this.$behaviours = {}
        };
        (function () {
            this.add = function (e, t, i) {
                switch (void 0) {
                    case this.$behaviours:
                        this.$behaviours = {};
                    case this.$behaviours[e]:
                        this.$behaviours[e] = {}
                }
                this.$behaviours[e][t] = i
            }, this.addBehaviours = function (e) {
                for (var t in e)
                    for (var i in e[t]) this.add(t, i, e[t][i])
            }, this.remove = function (e) {
                this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
            }, this.inherit = function (e, t) {
                if ("function" == typeof e) var i = (new e).getBehaviours(t);
                else i = e.getBehaviours(t);
                this.addBehaviours(i)
            }, this.getBehaviours = function (e) {
                if (e) {
                    for (var t = {}, i = 0; i < e.length; i++) this.$behaviours[e[i]] && (t[e[i]] = this.$behaviours[e[i]]);
                    return t
                }
                return this.$behaviours
            }
        }).call(n.prototype), t.Behaviour = n
    })), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("./range").Range,
            r = function (e, t, i) {
                this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
                var n = e.getTokenAt(t, i);
                this.$tokenIndex = n ? n.index : -1
            };
        (function () {
            this.stepBackward = function () {
                for (this.$tokenIndex -= 1; this.$tokenIndex < 0;) {
                    if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
                    this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
                }
                return this.$rowTokens[this.$tokenIndex]
            }, this.stepForward = function () {
                var e;
                for (this.$tokenIndex += 1; this.$tokenIndex >= this.$rowTokens.length;) {
                    if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e) return this.$row = e - 1, null;
                    this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
                }
                return this.$rowTokens[this.$tokenIndex]
            }, this.getCurrentToken = function () {
                return this.$rowTokens[this.$tokenIndex]
            }, this.getCurrentTokenRow = function () {
                return this.$row
            }, this.getCurrentTokenColumn = function () {
                var e = this.$rowTokens,
                    t = this.$tokenIndex,
                    i = e[t].start;
                if (void 0 !== i) return i;
                for (i = 0; t > 0;) i += e[t -= 1].value.length;
                return i
            }, this.getCurrentTokenPosition = function () {
                return {
                    row: this.$row,
                    column: this.getCurrentTokenColumn()
                }
            }, this.getCurrentTokenRange = function () {
                var e = this.$rowTokens[this.$tokenIndex],
                    t = this.getCurrentTokenColumn();
                return new n(this.$row, t, this.$row, t + e.value.length)
            }
        }).call(r.prototype), t.TokenIterator = r
    })), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], (function (e, t, i) {
        "use strict";
        var n, r = e("../../lib/oop"),
            s = e("../behaviour").Behaviour,
            o = e("../../token_iterator").TokenIterator,
            a = e("../../lib/lang"),
            l = ["text", "paren.rparen", "punctuation.operator"],
            c = ["text", "paren.rparen", "punctuation.operator", "comment"],
            h = {},
            u = {
                '"': '"',
                "'": "'"
            },
            d = function (e) {
                var t = -1;
                if (e.multiSelect && (t = e.selection.index, h.rangeCount != e.multiSelect.rangeCount && (h = {
                    rangeCount: e.multiSelect.rangeCount
                })), h[t]) return n = h[t];
                n = h[t] = {
                    autoInsertedBrackets: 0,
                    autoInsertedRow: -1,
                    autoInsertedLineEnd: "",
                    maybeInsertedBrackets: 0,
                    maybeInsertedRow: -1,
                    maybeInsertedLineStart: "",
                    maybeInsertedLineEnd: ""
                }
            },
            g = function (e, t, i, n) {
                var r = e.end.row - e.start.row;
                return {
                    text: i + t + n,
                    selection: [0, e.start.column + 1, r, e.end.column + (r ? 0 : 1)]
                }
            },
            f = function (e) {
                this.add("braces", "insertion", (function (t, i, r, s, o) {
                    var l = r.getCursorPosition(),
                        c = s.doc.getLine(l.row);
                    if ("{" == o) {
                        d(r);
                        var h = r.getSelectionRange(),
                            u = s.doc.getTextRange(h);
                        if ("" !== u && "{" !== u && r.getWrapBehavioursEnabled()) return g(h, u, "{", "}");
                        if (f.isSaneInsertion(r, s)) return /[\]\}\)]/.test(c[l.column]) || r.inMultiSelectMode || e && e.braces ? (f.recordAutoInsert(r, s, "}"), {
                            text: "{}",
                            selection: [1, 1]
                        }) : (f.recordMaybeInsert(r, s, "{"), {
                            text: "{",
                            selection: [1, 1]
                        })
                    } else if ("}" == o) {
                        if (d(r), "}" == c.substring(l.column, l.column + 1))
                            if (null !== s.$findOpeningBracket("}", {
                                column: l.column + 1,
                                row: l.row
                            }) && f.isAutoInsertedClosing(l, c, o)) return f.popAutoInsertedClosing(), {
                                text: "",
                                selection: [1, 1]
                            }
                    } else {
                        if ("\n" == o || "\r\n" == o) {
                            d(r);
                            var p = "";
                            if (f.isMaybeInsertedClosing(l, c) && (p = a.stringRepeat("}", n.maybeInsertedBrackets), f.clearMaybeInsertedClosing()), "}" === c.substring(l.column, l.column + 1)) {
                                var m = s.findMatchingBracket({
                                    row: l.row,
                                    column: l.column + 1
                                }, "}");
                                if (!m) return null;
                                var w = this.$getIndent(s.getLine(m.row))
                            } else {
                                if (!p) return void f.clearMaybeInsertedClosing();
                                w = this.$getIndent(c)
                            }
                            var A = w + s.getTabString();
                            return {
                                text: "\n" + A + "\n" + w + p,
                                selection: [1, A.length, 1, A.length]
                            }
                        }
                        f.clearMaybeInsertedClosing()
                    }
                })), this.add("braces", "deletion", (function (e, t, i, r, s) {
                    var o = r.doc.getTextRange(s);
                    if (!s.isMultiLine() && "{" == o) {
                        if (d(i), "}" == r.doc.getLine(s.start.row).substring(s.end.column, s.end.column + 1)) return s.end.column++, s;
                        n.maybeInsertedBrackets--
                    }
                })), this.add("parens", "insertion", (function (e, t, i, n, r) {
                    if ("(" == r) {
                        d(i);
                        var s = i.getSelectionRange(),
                            o = n.doc.getTextRange(s);
                        if ("" !== o && i.getWrapBehavioursEnabled()) return g(s, o, "(", ")");
                        if (f.isSaneInsertion(i, n)) return f.recordAutoInsert(i, n, ")"), {
                            text: "()",
                            selection: [1, 1]
                        }
                    } else if (")" == r) {
                        d(i);
                        var a = i.getCursorPosition(),
                            l = n.doc.getLine(a.row);
                        if (")" == l.substring(a.column, a.column + 1))
                            if (null !== n.$findOpeningBracket(")", {
                                column: a.column + 1,
                                row: a.row
                            }) && f.isAutoInsertedClosing(a, l, r)) return f.popAutoInsertedClosing(), {
                                text: "",
                                selection: [1, 1]
                            }
                    }
                })), this.add("parens", "deletion", (function (e, t, i, n, r) {
                    var s = n.doc.getTextRange(r);
                    if (!r.isMultiLine() && "(" == s && (d(i), ")" == n.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2))) return r.end.column++, r
                })), this.add("brackets", "insertion", (function (e, t, i, n, r) {
                    if ("[" == r) {
                        d(i);
                        var s = i.getSelectionRange(),
                            o = n.doc.getTextRange(s);
                        if ("" !== o && i.getWrapBehavioursEnabled()) return g(s, o, "[", "]");
                        if (f.isSaneInsertion(i, n)) return f.recordAutoInsert(i, n, "]"), {
                            text: "[]",
                            selection: [1, 1]
                        }
                    } else if ("]" == r) {
                        d(i);
                        var a = i.getCursorPosition(),
                            l = n.doc.getLine(a.row);
                        if ("]" == l.substring(a.column, a.column + 1))
                            if (null !== n.$findOpeningBracket("]", {
                                column: a.column + 1,
                                row: a.row
                            }) && f.isAutoInsertedClosing(a, l, r)) return f.popAutoInsertedClosing(), {
                                text: "",
                                selection: [1, 1]
                            }
                    }
                })), this.add("brackets", "deletion", (function (e, t, i, n, r) {
                    var s = n.doc.getTextRange(r);
                    if (!r.isMultiLine() && "[" == s && (d(i), "]" == n.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2))) return r.end.column++, r
                })), this.add("string_dquotes", "insertion", (function (e, t, i, n, r) {
                    var s = n.$mode.$quotes || u;
                    if (1 == r.length && s[r]) {
                        if (this.lineCommentStart && -1 != this.lineCommentStart.indexOf(r)) return;
                        d(i);
                        var o = r,
                            a = i.getSelectionRange(),
                            l = n.doc.getTextRange(a);
                        if (!("" === l || 1 == l.length && s[l]) && i.getWrapBehavioursEnabled()) return g(a, l, o, o);
                        if (!l) {
                            var c = i.getCursorPosition(),
                                h = n.doc.getLine(c.row),
                                f = h.substring(c.column - 1, c.column),
                                p = h.substring(c.column, c.column + 1),
                                m = n.getTokenAt(c.row, c.column),
                                w = n.getTokenAt(c.row, c.column + 1);
                            if ("\\" == f && m && /escape/.test(m.type)) return null;
                            var A, v = m && /string|escape/.test(m.type),
                                b = !w || /string|escape/.test(w.type);
                            if (p == o) (A = v !== b) && /string\.end/.test(w.type) && (A = !1);
                            else {
                                if (v && !b) return null;
                                if (v && b) return null;
                                var C = n.$mode.tokenRe;
                                C.lastIndex = 0;
                                var F = C.test(f);
                                C.lastIndex = 0;
                                var E = C.test(f);
                                if (F || E) return null;
                                if (p && !/[\s;,.})\]\\]/.test(p)) return null;
                                A = !0
                            }
                            return {
                                text: A ? o + o : "",
                                selection: [1, 1]
                            }
                        }
                    }
                })), this.add("string_dquotes", "deletion", (function (e, t, i, n, r) {
                    var s = n.doc.getTextRange(r);
                    if (!r.isMultiLine() && ('"' == s || "'" == s) && (d(i), n.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2) == s)) return r.end.column++, r
                }))
            };
        f.isSaneInsertion = function (e, t) {
            var i = e.getCursorPosition(),
                n = new o(t, i.row, i.column);
            if (!this.$matchTokenType(n.getCurrentToken() || "text", l)) {
                var r = new o(t, i.row, i.column + 1);
                if (!this.$matchTokenType(r.getCurrentToken() || "text", l)) return !1
            }
            return n.stepForward(), n.getCurrentTokenRow() !== i.row || this.$matchTokenType(n.getCurrentToken() || "text", c)
        }, f.$matchTokenType = function (e, t) {
            return t.indexOf(e.type || e) > -1
        }, f.recordAutoInsert = function (e, t, i) {
            var r = e.getCursorPosition(),
                s = t.doc.getLine(r.row);
            this.isAutoInsertedClosing(r, s, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = r.row, n.autoInsertedLineEnd = i + s.substr(r.column), n.autoInsertedBrackets++
        }, f.recordMaybeInsert = function (e, t, i) {
            var r = e.getCursorPosition(),
                s = t.doc.getLine(r.row);
            this.isMaybeInsertedClosing(r, s) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = r.row, n.maybeInsertedLineStart = s.substr(0, r.column) + i, n.maybeInsertedLineEnd = s.substr(r.column), n.maybeInsertedBrackets++
        }, f.isAutoInsertedClosing = function (e, t, i) {
            return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n.autoInsertedLineEnd
        }, f.isMaybeInsertedClosing = function (e, t) {
            return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e.column) == n.maybeInsertedLineStart
        }, f.popAutoInsertedClosing = function () {
            n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--
        }, f.clearMaybeInsertedClosing = function () {
            n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
        }, r.inherits(f, s), t.CstyleBehaviour = f
    })), ace.define("ace/unicode", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.packages = {},
            function (e) {
                var i = /\w{4}/g;
                for (var n in e) t.packages[n] = e[n].replace(i, "\\u$&")
            }({
                L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
                Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
                Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
                Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
                Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
                Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
                M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
                Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
                Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
                Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
                N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
                Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
                Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
                No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
                P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
                Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
                Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
                Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
                Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
                Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
                Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
                Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
                S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
                Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
                Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
                Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
                So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
                Z: "002000A01680180E2000-200A20282029202F205F3000",
                Zs: "002000A01680180E2000-200A202F205F3000",
                Zl: "2028",
                Zp: "2029",
                C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
                Cc: "0000-001F007F-009F",
                Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
                Co: "E000-F8FF",
                Cs: "D800-DFFF",
                Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
            })
    })), ace.define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("../tokenizer").Tokenizer,
            r = e("./text_highlight_rules").TextHighlightRules,
            s = e("./behaviour/cstyle").CstyleBehaviour,
            o = e("../unicode"),
            a = e("../lib/lang"),
            l = e("../token_iterator").TokenIterator,
            c = e("../range").Range,
            h = function () {
                this.HighlightRules = r
            };
        (function () {
            this.$defaultBehaviour = new s, this.tokenRe = new RegExp("^[" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
                return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new n(this.$highlightRules.getRules())), this.$tokenizer
            }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, i, n) {
                var r = t.doc,
                    s = !0,
                    o = !0,
                    l = 1 / 0,
                    c = t.getTabSize(),
                    h = !1;
                if (this.lineCommentStart) {
                    if (Array.isArray(this.lineCommentStart)) p = this.lineCommentStart.map(a.escapeRegExp).join("|"), g = this.lineCommentStart[0];
                    else p = a.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart;
                    p = new RegExp("^(\\s*)(?:" + p + ") ?"), h = t.getUseSoftTabs();
                    A = function (e, t) {
                        var i = e.match(p);
                        if (i) {
                            var n = i[1].length,
                                s = i[0].length;
                            d(e, n, s) || " " != i[0][s - 1] || s--, r.removeInLine(t, n, s)
                        }
                    };
                    var u = g + " ",
                        d = (w = function (e, t) {
                            s && !/\S/.test(e) || (d(e, l, l) ? r.insertInLine({
                                row: t,
                                column: l
                            }, u) : r.insertInLine({
                                row: t,
                                column: l
                            }, g))
                        }, v = function (e, t) {
                            return p.test(e)
                        }, function (e, t, i) {
                            for (var n = 0; t-- && " " == e.charAt(t);) n++;
                            if (n % c != 0) return !1;
                            for (n = 0;
                                " " == e.charAt(i++);) n++;
                            return c > 2 ? n % c != c - 1 : n % c == 0
                        })
                } else {
                    if (!this.blockComment) return !1;
                    var g = this.blockComment.start,
                        f = this.blockComment.end,
                        p = new RegExp("^(\\s*)(?:" + a.escapeRegExp(g) + ")"),
                        m = new RegExp("(?:" + a.escapeRegExp(f) + ")\\s*$"),
                        w = function (e, t) {
                            v(e, t) || s && !/\S/.test(e) || (r.insertInLine({
                                row: t,
                                column: e.length
                            }, f), r.insertInLine({
                                row: t,
                                column: l
                            }, g))
                        },
                        A = function (e, t) {
                            var i;
                            (i = e.match(m)) && r.removeInLine(t, e.length - i[0].length, e.length), (i = e.match(p)) && r.removeInLine(t, i[1].length, i[0].length)
                        },
                        v = function (e, i) {
                            if (p.test(e)) return !0;
                            for (var n = t.getTokens(i), r = 0; r < n.length; r++)
                                if ("comment" === n[r].type) return !0
                        }
                }

                function b(e) {
                    for (var t = i; t <= n; t++) e(r.getLine(t), t)
                }
                var C = 1 / 0;
                b((function (e, t) {
                    var i = e.search(/\S/); - 1 !== i ? (i < l && (l = i), o && !v(e, t) && (o = !1)) : C > e.length && (C = e.length)
                })), l == 1 / 0 && (l = C, s = !1, o = !1), h && l % c != 0 && (l = Math.floor(l / c) * c), b(o ? A : w)
            }, this.toggleBlockComment = function (e, t, i, n) {
                var r = this.blockComment;
                if (r) {
                    !r.start && r[0] && (r = r[0]);
                    var s, o, a = (p = new l(t, n.row, n.column)).getCurrentToken(),
                        h = (t.selection, t.selection.toOrientedRange());
                    if (a && /comment/.test(a.type)) {
                        for (var u, d; a && /comment/.test(a.type);) {
                            if (-1 != (m = a.value.indexOf(r.start))) {
                                var g = p.getCurrentTokenRow(),
                                    f = p.getCurrentTokenColumn() + m;
                                u = new c(g, f, g, f + r.start.length);
                                break
                            }
                            a = p.stepBackward()
                        }
                        var p;
                        for (a = (p = new l(t, n.row, n.column)).getCurrentToken(); a && /comment/.test(a.type);) {
                            var m;
                            if (-1 != (m = a.value.indexOf(r.end))) {
                                g = p.getCurrentTokenRow(), f = p.getCurrentTokenColumn() + m;
                                d = new c(g, f, g, f + r.end.length);
                                break
                            }
                            a = p.stepForward()
                        }
                        d && t.remove(d), u && (t.remove(u), s = u.start.row, o = -r.start.length)
                    } else o = r.start.length, s = i.start.row, t.insert(i.end, r.end), t.insert(i.start, r.start);
                    h.start.row == s && (h.start.column += o), h.end.row == s && (h.end.column += o), t.selection.fromOrientedRange(h)
                }
            }, this.getNextLineIndent = function (e, t, i) {
                return this.$getIndent(t)
            }, this.checkOutdent = function (e, t, i) {
                return !1
            }, this.autoOutdent = function (e, t, i) { }, this.$getIndent = function (e) {
                return e.match(/^\s*/)[0]
            }, this.createWorker = function (e) {
                return null
            }, this.createModeDelegates = function (e) {
                for (var t in this.$embeds = [], this.$modes = {}, e) e[t] && (this.$embeds.push(t), this.$modes[t] = new e[t]);
                var i = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
                for (t = 0; t < i.length; t++) ! function (e) {
                    var n = i[t],
                        r = e[n];
                    e[i[t]] = function () {
                        return this.$delegator(n, arguments, r)
                    }
                }(this)
            }, this.$delegator = function (e, t, i) {
                var n = t[0];
                "string" != typeof n && (n = n[0]);
                for (var r = 0; r < this.$embeds.length; r++)
                    if (this.$modes[this.$embeds[r]]) {
                        var s = n.split(this.$embeds[r]);
                        if (!s[0] && s[1]) {
                            t[0] = s[1];
                            var o = this.$modes[this.$embeds[r]];
                            return o[e].apply(o, t)
                        }
                    } var a = i.apply(this, t);
                return i ? a : void 0
            }, this.transformAction = function (e, t, i, n, r) {
                if (this.$behaviour) {
                    var s = this.$behaviour.getBehaviours();
                    for (var o in s)
                        if (s[o][t]) {
                            var a = s[o][t].apply(this, arguments);
                            if (a) return a
                        }
                }
            }, this.getKeywords = function (e) {
                if (!this.completionKeywords) {
                    var t = this.$tokenizer.rules,
                        i = [];
                    for (var n in t)
                        for (var r = t[n], s = 0, o = r.length; s < o; s++)
                            if ("string" == typeof r[s].token) /keyword|support|storage/.test(r[s].token) && i.push(r[s].regex);
                            else if ("object" == typeof r[s].token)
                                for (var a = 0, l = r[s].token.length; a < l; a++)
                                    if (/keyword|support|storage/.test(r[s].token[a])) {
                                        n = r[s].regex.match(/\(.+?\)/g)[a];
                                        i.push(n.substr(1, n.length - 2))
                                    } this.completionKeywords = i
                }
                return e ? i.concat(this.$keywordList || []) : this.$keywordList
            }, this.$createKeywordList = function () {
                return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
            }, this.getCompletions = function (e, t, i, n) {
                return (this.$keywordList || this.$createKeywordList()).map((function (e) {
                    return {
                        name: e,
                        value: e,
                        score: 0,
                        meta: "keyword"
                    }
                }))
            }, this.$id = "ace/mode/text"
        }).call(h.prototype), t.Mode = h
    })), ace.define("ace/apply_delta", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.applyDelta = function (e, t, i) {
            var n = t.start.row,
                r = t.start.column,
                s = e[n] || "";
            switch (t.action) {
                case "insert":
                    if (1 === t.lines.length) e[n] = s.substring(0, r) + t.lines[0] + s.substring(r);
                    else {
                        var o = [n, 1].concat(t.lines);
                        e.splice.apply(e, o), e[n] = s.substring(0, r) + e[n], e[n + t.lines.length - 1] += s.substring(r)
                    }
                    break;
                case "remove":
                    var a = t.end.column,
                        l = t.end.row;
                    n === l ? e[n] = s.substring(0, r) + s.substring(a) : e.splice(n, l - n + 1, s.substring(0, r) + e[l].substring(a))
            }
        }
    })), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/event_emitter").EventEmitter,
            s = t.Anchor = function (e, t, i) {
                this.$onChange = this.onChange.bind(this), this.attach(e), void 0 === i ? this.setPosition(t.row, t.column) : this.setPosition(t, i)
            };
        (function () {
            function e(e, t, i) {
                var n = i ? e.column <= t.column : e.column < t.column;
                return e.row < t.row || e.row == t.row && n
            }
            n.implement(this, r), this.getPosition = function () {
                return this.$clipPositionToDocument(this.row, this.column)
            }, this.getDocument = function () {
                return this.document
            }, this.$insertRight = !1, this.onChange = function (t) {
                if (!(t.start.row == t.end.row && t.start.row != this.row || t.start.row > this.row)) {
                    var i = function (t, i, n) {
                        var r = "insert" == t.action,
                            s = (r ? 1 : -1) * (t.end.row - t.start.row),
                            o = (r ? 1 : -1) * (t.end.column - t.start.column),
                            a = t.start,
                            l = r ? a : t.end;
                        if (e(i, a, n)) return {
                            row: i.row,
                            column: i.column
                        };
                        if (e(l, i, !n)) return {
                            row: i.row + s,
                            column: i.column + (i.row == l.row ? o : 0)
                        };
                        return {
                            row: a.row,
                            column: a.column
                        }
                    }(t, {
                        row: this.row,
                        column: this.column
                    }, this.$insertRight);
                    this.setPosition(i.row, i.column, !0)
                }
            }, this.setPosition = function (e, t, i) {
                var n;
                if (n = i ? {
                    row: e,
                    column: t
                } : this.$clipPositionToDocument(e, t), this.row != n.row || this.column != n.column) {
                    var r = {
                        row: this.row,
                        column: this.column
                    };
                    this.row = n.row, this.column = n.column, this._signal("change", {
                        old: r,
                        value: n
                    })
                }
            }, this.detach = function () {
                this.document.removeEventListener("change", this.$onChange)
            }, this.attach = function (e) {
                this.document = e || this.document, this.document.on("change", this.$onChange)
            }, this.$clipPositionToDocument = function (e, t) {
                var i = {};
                return e >= this.document.getLength() ? (i.row = Math.max(0, this.document.getLength() - 1), i.column = this.document.getLine(i.row).length) : e < 0 ? (i.row = 0, i.column = 0) : (i.row = e, i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, t))), t < 0 && (i.column = 0), i
            }
        }).call(s.prototype)
    })), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./apply_delta").applyDelta,
            s = e("./lib/event_emitter").EventEmitter,
            o = e("./range").Range,
            a = e("./anchor").Anchor,
            l = function (e) {
                this.$lines = [""], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({
                    row: 0,
                    column: 0
                }, e) : this.insert({
                    row: 0,
                    column: 0
                }, e)
            };
        (function () {
            n.implement(this, s), this.setValue = function (e) {
                var t = this.getLength() - 1;
                this.remove(new o(0, 0, t, this.getLine(t).length)), this.insert({
                    row: 0,
                    column: 0
                }, e)
            }, this.getValue = function () {
                return this.getAllLines().join(this.getNewLineCharacter())
            }, this.createAnchor = function (e, t) {
                return new a(this, e, t)
            }, 0 === "aaa".split(/a/).length ? this.$split = function (e) {
                return e.replace(/\r\n|\r/g, "\n").split("\n")
            } : this.$split = function (e) {
                return e.split(/\r\n|\r|\n/)
            }, this.$detectNewLine = function (e) {
                var t = e.match(/^.*?(\r\n|\r|\n)/m);
                this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
            }, this.getNewLineCharacter = function () {
                switch (this.$newLineMode) {
                    case "windows":
                        return "\r\n";
                    case "unix":
                        return "\n";
                    default:
                        return this.$autoNewLine || "\n"
                }
            }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
                this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
            }, this.getNewLineMode = function () {
                return this.$newLineMode
            }, this.isNewLine = function (e) {
                return "\r\n" == e || "\r" == e || "\n" == e
            }, this.getLine = function (e) {
                return this.$lines[e] || ""
            }, this.getLines = function (e, t) {
                return this.$lines.slice(e, t + 1)
            }, this.getAllLines = function () {
                return this.getLines(0, this.getLength())
            }, this.getLength = function () {
                return this.$lines.length
            }, this.getTextRange = function (e) {
                return this.getLinesForRange(e).join(this.getNewLineCharacter())
            }, this.getLinesForRange = function (e) {
                var t;
                if (e.start.row === e.end.row) t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)];
                else {
                    (t = this.getLines(e.start.row, e.end.row))[0] = (t[0] || "").substring(e.start.column);
                    var i = t.length - 1;
                    e.end.row - e.start.row == i && (t[i] = t[i].substring(0, e.end.column))
                }
                return t
            }, this.insertLines = function (e, t) {
                return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t)
            }, this.removeLines = function (e, t) {
                return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t)
            }, this.insertNewLine = function (e) {
                return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""])
            }, this.insert = function (e, t) {
                return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t))
            }, this.insertInLine = function (e, t) {
                var i = this.clippedPos(e.row, e.column),
                    n = this.pos(e.row, e.column + t.length);
                return this.applyDelta({
                    start: i,
                    end: n,
                    action: "insert",
                    lines: [t]
                }, !0), this.clonePos(n)
            }, this.clippedPos = function (e, t) {
                var i = this.getLength();
                void 0 === e ? e = i : e < 0 ? e = 0 : e >= i && (e = i - 1, t = void 0);
                var n = this.getLine(e);
                return null == t && (t = n.length), {
                    row: e,
                    column: t = Math.min(Math.max(t, 0), n.length)
                }
            }, this.clonePos = function (e) {
                return {
                    row: e.row,
                    column: e.column
                }
            }, this.pos = function (e, t) {
                return {
                    row: e,
                    column: t
                }
            }, this.$clipPosition = function (e) {
                var t = this.getLength();
                return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e
            }, this.insertFullLines = function (e, t) {
                var i = 0;
                (e = Math.min(Math.max(e, 0), this.getLength())) < this.getLength() ? (t = t.concat([""]), i = 0) : (t = [""].concat(t), e--, i = this.$lines[e].length), this.insertMergedLines({
                    row: e,
                    column: i
                }, t)
            }, this.insertMergedLines = function (e, t) {
                var i = this.clippedPos(e.row, e.column),
                    n = {
                        row: i.row + t.length - 1,
                        column: (1 == t.length ? i.column : 0) + t[t.length - 1].length
                    };
                return this.applyDelta({
                    start: i,
                    end: n,
                    action: "insert",
                    lines: t
                }), this.clonePos(n)
            }, this.remove = function (e) {
                var t = this.clippedPos(e.start.row, e.start.column),
                    i = this.clippedPos(e.end.row, e.end.column);
                return this.applyDelta({
                    start: t,
                    end: i,
                    action: "remove",
                    lines: this.getLinesForRange({
                        start: t,
                        end: i
                    })
                }), this.clonePos(t)
            }, this.removeInLine = function (e, t, i) {
                var n = this.clippedPos(e, t),
                    r = this.clippedPos(e, i);
                return this.applyDelta({
                    start: n,
                    end: r,
                    action: "remove",
                    lines: this.getLinesForRange({
                        start: n,
                        end: r
                    })
                }, !0), this.clonePos(n)
            }, this.removeFullLines = function (e, t) {
                e = Math.min(Math.max(0, e), this.getLength() - 1);
                var i = (t = Math.min(Math.max(0, t), this.getLength() - 1)) == this.getLength() - 1 && e > 0,
                    n = t < this.getLength() - 1,
                    r = i ? e - 1 : e,
                    s = i ? this.getLine(r).length : 0,
                    a = n ? t + 1 : t,
                    l = n ? 0 : this.getLine(a).length,
                    c = new o(r, s, a, l),
                    h = this.$lines.slice(e, t + 1);
                return this.applyDelta({
                    start: c.start,
                    end: c.end,
                    action: "remove",
                    lines: this.getLinesForRange(c)
                }), h
            }, this.removeNewLine = function (e) {
                e < this.getLength() - 1 && e >= 0 && this.applyDelta({
                    start: this.pos(e, this.getLine(e).length),
                    end: this.pos(e + 1, 0),
                    action: "remove",
                    lines: ["", ""]
                })
            }, this.replace = function (e, t) {
                return e instanceof o || (e = o.fromPoints(e.start, e.end)), 0 === t.length && e.isEmpty() ? e.start : t == this.getTextRange(e) ? e.end : (this.remove(e), t ? this.insert(e.start, t) : e.start)
            }, this.applyDeltas = function (e) {
                for (var t = 0; t < e.length; t++) this.applyDelta(e[t])
            }, this.revertDeltas = function (e) {
                for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t])
            }, this.applyDelta = function (e, t) {
                var i = "insert" == e.action;
                (i ? e.lines.length <= 1 && !e.lines[0] : !o.comparePoints(e.start, e.end)) || (i && e.lines.length > 2e4 && this.$splitAndapplyLargeDelta(e, 2e4), r(this.$lines, e, t), this._signal("change", e))
            }, this.$splitAndapplyLargeDelta = function (e, t) {
                for (var i = e.lines, n = i.length, r = e.start.row, s = e.start.column, o = 0, a = 0; ;) {
                    o = a, a += t - 1;
                    var l = i.slice(o, a);
                    if (a > n) {
                        e.lines = l, e.start.row = r + o, e.start.column = s;
                        break
                    }
                    l.push(""), this.applyDelta({
                        start: this.pos(r + o, s),
                        end: this.pos(r + a, s = 0),
                        action: e.action,
                        lines: l
                    }, !0)
                }
            }, this.revertDelta = function (e) {
                this.applyDelta({
                    start: this.clonePos(e.start),
                    end: this.clonePos(e.end),
                    action: "insert" == e.action ? "remove" : "insert",
                    lines: e.lines.slice()
                })
            }, this.indexToPosition = function (e, t) {
                for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, r = t || 0, s = i.length; r < s; r++)
                    if ((e -= i[r].length + n) < 0) return {
                        row: r,
                        column: e + i[r].length + n
                    };
                return {
                    row: s - 1,
                    column: i[s - 1].length
                }
            }, this.positionToIndex = function (e, t) {
                for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, r = 0, s = Math.min(e.row, i.length), o = t || 0; o < s; ++o) r += i[o].length + n;
                return r + e.column
            }
        }).call(l.prototype), t.Document = l
    })), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/event_emitter").EventEmitter,
            s = function (e, t) {
                this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
                var i = this;
                this.$worker = function () {
                    if (i.running) {
                        for (var e = new Date, t = i.currentLine, n = -1, r = i.doc, s = t; i.lines[t];) t++;
                        var o = r.getLength(),
                            a = 0;
                        for (i.running = !1; t < o;) {
                            i.$tokenizeRow(t), n = t;
                            do {
                                t++
                            } while (i.lines[t]);
                            if (++a % 5 == 0 && new Date - e > 20) {
                                i.running = setTimeout(i.$worker, 20);
                                break
                            }
                        }
                        i.currentLine = t, -1 == n && (n = t), s <= n && i.fireUpdateEvent(s, n)
                    }
                }
            };
        (function () {
            n.implement(this, r), this.setTokenizer = function (e) {
                this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
            }, this.setDocument = function (e) {
                this.doc = e, this.lines = [], this.states = [], this.stop()
            }, this.fireUpdateEvent = function (e, t) {
                var i = {
                    first: e,
                    last: t
                };
                this._signal("update", {
                    data: i
                })
            }, this.start = function (e) {
                this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
            }, this.scheduleStart = function () {
                this.running || (this.running = setTimeout(this.$worker, 700))
            }, this.$updateOnChange = function (e) {
                var t = e.start.row,
                    i = e.end.row - t;
                if (0 === i) this.lines[t] = null;
                else if ("remove" == e.action) this.lines.splice(t, i + 1, null), this.states.splice(t, i + 1, null);
                else {
                    var n = Array(i + 1);
                    n.unshift(t, 1), this.lines.splice.apply(this.lines, n), this.states.splice.apply(this.states, n)
                }
                this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()), this.stop()
            }, this.stop = function () {
                this.running && clearTimeout(this.running), this.running = !1
            }, this.getTokens = function (e) {
                return this.lines[e] || this.$tokenizeRow(e)
            }, this.getState = function (e) {
                return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
            }, this.$tokenizeRow = function (e) {
                var t = this.doc.getLine(e),
                    i = this.states[e - 1],
                    n = this.tokenizer.getLineTokens(t, i, e);
                return this.states[e] + "" != n.state + "" ? (this.states[e] = n.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = n.tokens
            }
        }).call(s.prototype), t.BackgroundTokenizer = s
    })), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/lang"),
            r = (e("./lib/oop"), e("./range").Range),
            s = function (e, t, i) {
                this.setRegexp(e), this.clazz = t, this.type = i || "text"
            };
        (function () {
            this.MAX_RANGES = 500, this.setRegexp = function (e) {
                this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
            }, this.update = function (e, t, i, s) {
                if (this.regExp)
                    for (var o = s.firstRow, a = s.lastRow, l = o; l <= a; l++) {
                        var c = this.cache[l];
                        null == c && ((c = n.getMatchOffsets(i.getLine(l), this.regExp)).length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map((function (e) {
                            return new r(l, e.offset, l, e.offset + e.length)
                        })), this.cache[l] = c.length ? c : "");
                        for (var h = c.length; h--;) t.drawSingleLineMarker(e, c[h].toScreenRange(i), this.clazz, s)
                    }
            }
        }).call(s.prototype), t.SearchHighlight = s
    })), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("../range").Range;

        function r(e, t) {
            this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
            var i = t[t.length - 1];
            this.range = new n(t[0].start.row, t[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach((function (e) {
                e.setFoldLine(this)
            }), this)
        } (function () {
            this.shiftRow = function (e) {
                this.start.row += e, this.end.row += e, this.folds.forEach((function (t) {
                    t.start.row += e, t.end.row += e
                }))
            }, this.addFold = function (e) {
                if (e.sameRow) {
                    if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
                    this.folds.push(e), this.folds.sort((function (e, t) {
                        return -e.range.compareEnd(t.start.row, t.start.column)
                    })), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
                } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column;
                else {
                    if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                    this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
                }
                e.foldLine = this
            }, this.containsRow = function (e) {
                return e >= this.start.row && e <= this.end.row
            }, this.walk = function (e, t, i) {
                var n, r, s = 0,
                    o = this.folds,
                    a = !0;
                null == t && (t = this.end.row, i = this.end.column);
                for (var l = 0; l < o.length; l++) {
                    if (-1 == (r = (n = o[l]).range.compareStart(t, i))) return void e(null, t, i, s, a);
                    if (!e(null, n.start.row, n.start.column, s, a) && e(n.placeholder, n.start.row, n.start.column, s) || 0 === r) return;
                    a = !n.sameRow, s = n.end.column
                }
                e(null, t, i, s, a)
            }, this.getNextFoldTo = function (e, t) {
                for (var i, n, r = 0; r < this.folds.length; r++) {
                    if (-1 == (n = (i = this.folds[r]).range.compareEnd(e, t))) return {
                        fold: i,
                        kind: "after"
                    };
                    if (0 === n) return {
                        fold: i,
                        kind: "inside"
                    }
                }
                return null
            }, this.addRemoveChars = function (e, t, i) {
                var n, r, s = this.getNextFoldTo(e, t);
                if (s)
                    if (n = s.fold, "inside" == s.kind && n.start.column != t && n.start.row != e) window.console && window.console.log(e, t, n);
                    else if (n.start.row == e) {
                        var o = (r = this.folds).indexOf(n);
                        for (0 === o && (this.start.column += i); o < r.length; o++) {
                            if ((n = r[o]).start.column += i, !n.sameRow) return;
                            n.end.column += i
                        }
                        this.end.column += i
                    }
            }, this.split = function (e, t) {
                var i = this.getNextFoldTo(e, t);
                if (!i || "inside" == i.kind) return null;
                var n = i.fold,
                    s = this.folds,
                    o = this.foldData,
                    a = s.indexOf(n),
                    l = s[a - 1];
                this.end.row = l.end.row, this.end.column = l.end.column;
                var c = new r(o, s = s.splice(a, s.length - a));
                return o.splice(o.indexOf(this) + 1, 0, c), c
            }, this.merge = function (e) {
                for (var t = e.folds, i = 0; i < t.length; i++) this.addFold(t[i]);
                var n = this.foldData;
                n.splice(n.indexOf(e), 1)
            }, this.toString = function () {
                var e = [this.range.toString() + ": ["];
                return this.folds.forEach((function (t) {
                    e.push("  " + t.toString())
                })), e.push("]"), e.join("\n")
            }, this.idxToPosition = function (e) {
                for (var t = 0, i = 0; i < this.folds.length; i++) {
                    var n = this.folds[i];
                    if ((e -= n.start.column - t) < 0) return {
                        row: n.start.row,
                        column: n.start.column + e
                    };
                    if ((e -= n.placeholder.length) < 0) return n.start;
                    t = n.end.column
                }
                return {
                    row: this.end.row,
                    column: this.end.column + e
                }
            }
        }).call(r.prototype), t.FoldLine = r
    })), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("./range").Range.comparePoints,
            r = function () {
                this.ranges = []
            };
        (function () {
            this.comparePoints = n, this.pointIndex = function (e, t, i) {
                for (var r = this.ranges, s = i || 0; s < r.length; s++) {
                    var o = r[s],
                        a = n(e, o.end);
                    if (!(a > 0)) {
                        var l = n(e, o.start);
                        return 0 === a ? t && 0 !== l ? -s - 2 : s : l > 0 || 0 === l && !t ? s : -s - 1
                    }
                }
                return -s - 1
            }, this.add = function (e) {
                var t = !e.isEmpty(),
                    i = this.pointIndex(e.start, t);
                i < 0 && (i = -i - 1);
                var n = this.pointIndex(e.end, t, i);
                return n < 0 ? n = -n - 1 : n++, this.ranges.splice(i, n - i, e)
            }, this.addList = function (e) {
                for (var t = [], i = e.length; i--;) t.push.apply(t, this.add(e[i]));
                return t
            }, this.substractPoint = function (e) {
                var t = this.pointIndex(e);
                if (t >= 0) return this.ranges.splice(t, 1)
            }, this.merge = function () {
                for (var e, t = [], i = this.ranges, r = (i = i.sort((function (e, t) {
                    return n(e.start, t.start)
                })))[0], s = 1; s < i.length; s++) {
                    e = r, r = i[s];
                    var o = n(e.end, r.start);
                    o < 0 || (0 != o || e.isEmpty() || r.isEmpty()) && (n(e.end, r.end) < 0 && (e.end.row = r.end.row, e.end.column = r.end.column), i.splice(s, 1), t.push(r), r = e, s--)
                }
                return this.ranges = i, t
            }, this.contains = function (e, t) {
                return this.pointIndex({
                    row: e,
                    column: t
                }) >= 0
            }, this.containsPoint = function (e) {
                return this.pointIndex(e) >= 0
            }, this.rangeAtPoint = function (e) {
                var t = this.pointIndex(e);
                if (t >= 0) return this.ranges[t]
            }, this.clipRows = function (e, t) {
                var i = this.ranges;
                if (i[0].start.row > t || i[i.length - 1].start.row < e) return [];
                var n = this.pointIndex({
                    row: e,
                    column: 0
                });
                n < 0 && (n = -n - 1);
                var r = this.pointIndex({
                    row: t,
                    column: 0
                }, n);
                r < 0 && (r = -r - 1);
                for (var s = [], o = n; o < r; o++) s.push(i[o]);
                return s
            }, this.removeAll = function () {
                return this.ranges.splice(0, this.ranges.length)
            }, this.attach = function (e) {
                this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
            }, this.detach = function () {
                this.session && (this.session.removeListener("change", this.onChange), this.session = null)
            }, this.$onChange = function (e) {
                if ("insert" == e.action) var t = e.start,
                    i = e.end;
                else i = e.start, t = e.end;
                for (var n = t.row, r = i.row - n, s = -t.column + i.column, o = this.ranges, a = 0, l = o.length; a < l; a++) {
                    if (!((c = o[a]).end.row < n)) {
                        if (c.start.row > n) break;
                        if (c.start.row == n && c.start.column >= t.column && (c.start.column == t.column && this.$insertRight || (c.start.column += s, c.start.row += r)), c.end.row == n && c.end.column >= t.column) {
                            if (c.end.column == t.column && this.$insertRight) continue;
                            c.end.column == t.column && s > 0 && a < l - 1 && c.end.column > c.start.column && c.end.column == o[a + 1].start.column && (c.end.column -= s), c.end.column += s, c.end.row += r
                        }
                    }
                }
                if (0 != r && a < l)
                    for (; a < l; a++) {
                        var c;
                        (c = o[a]).start.row += r, c.end.row += r
                    }
            }
        }).call(r.prototype), t.RangeList = r
    })), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], (function (e, t, i) {
        "use strict";
        e("../range").Range;
        var n = e("../range_list").RangeList,
            r = e("../lib/oop"),
            s = t.Fold = function (e, t) {
                this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
            };

        function o(e, t) {
            e.row -= t.row, 0 == e.row && (e.column -= t.column)
        }

        function a(e, t) {
            0 == e.row && (e.column += t.column), e.row += t.row
        }
        r.inherits(s, n),
            function () {
                this.toString = function () {
                    return '"' + this.placeholder + '" ' + this.range.toString()
                }, this.setFoldLine = function (e) {
                    this.foldLine = e, this.subFolds.forEach((function (t) {
                        t.setFoldLine(e)
                    }))
                }, this.clone = function () {
                    var e = this.range.clone(),
                        t = new s(e, this.placeholder);
                    return this.subFolds.forEach((function (e) {
                        t.subFolds.push(e.clone())
                    })), t.collapseChildren = this.collapseChildren, t
                }, this.addSubFold = function (e) {
                    if (!this.range.isEqual(e)) {
                        if (!this.range.containsRange(e)) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                        var t, i;
                        t = e, i = this.start, o(t.start, i), o(t.end, i);
                        for (var n = e.start.row, r = e.start.column, s = 0, a = -1; s < this.subFolds.length && 1 == (a = this.subFolds[s].range.compare(n, r)); s++);
                        var l = this.subFolds[s];
                        if (0 == a) return l.addSubFold(e);
                        n = e.range.end.row, r = e.range.end.column;
                        var c = s;
                        for (a = -1; c < this.subFolds.length && 1 == (a = this.subFolds[c].range.compare(n, r)); c++);
                        this.subFolds[c];
                        if (0 == a) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                        this.subFolds.splice(s, c - s, e);
                        return e.setFoldLine(this.foldLine), e
                    }
                }, this.restoreRange = function (e) {
                    return function (e, t) {
                        a(e.start, t), a(e.end, t)
                    }(e, this.start)
                }
            }.call(s.prototype)
    })), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], (function (e, t, i) {
        "use strict";
        var n = e("../range").Range,
            r = e("./fold_line").FoldLine,
            s = e("./fold").Fold,
            o = e("../token_iterator").TokenIterator;
        t.Folding = function () {
            this.getFoldAt = function (e, t, i) {
                var n = this.getFoldLine(e);
                if (!n) return null;
                for (var r = n.folds, s = 0; s < r.length; s++) {
                    var o = r[s];
                    if (o.range.contains(e, t)) {
                        if (1 == i && o.range.isEnd(e, t)) continue;
                        if (-1 == i && o.range.isStart(e, t)) continue;
                        return o
                    }
                }
            }, this.getFoldsInRange = function (e) {
                var t = e.start,
                    i = e.end,
                    n = this.$foldData,
                    r = [];
                t.column += 1, i.column -= 1;
                for (var s = 0; s < n.length; s++) {
                    var o = n[s].range.compareRange(e);
                    if (2 != o) {
                        if (-2 == o) break;
                        for (var a = n[s].folds, l = 0; l < a.length; l++) {
                            var c = a[l];
                            if (-2 == (o = c.range.compareRange(e))) break;
                            if (2 != o) {
                                if (42 == o) break;
                                r.push(c)
                            }
                        }
                    }
                }
                return t.column -= 1, i.column += 1, r
            }, this.getFoldsInRangeList = function (e) {
                if (Array.isArray(e)) {
                    var t = [];
                    e.forEach((function (e) {
                        t = t.concat(this.getFoldsInRange(e))
                    }), this)
                } else t = this.getFoldsInRange(e);
                return t
            }, this.getAllFolds = function () {
                for (var e = [], t = this.$foldData, i = 0; i < t.length; i++)
                    for (var n = 0; n < t[i].folds.length; n++) e.push(t[i].folds[n]);
                return e
            }, this.getFoldStringAt = function (e, t, i, n) {
                if (!(n = n || this.getFoldLine(e))) return null;
                for (var r, s, o = {
                    end: {
                        column: 0
                    }
                }, a = 0; a < n.folds.length; a++) {
                    var l = (s = n.folds[a]).range.compareEnd(e, t);
                    if (-1 == l) {
                        r = this.getLine(s.start.row).substring(o.end.column, s.start.column);
                        break
                    }
                    if (0 === l) return null;
                    o = s
                }
                return r || (r = this.getLine(s.start.row).substring(o.end.column)), -1 == i ? r.substring(0, t - o.end.column) : 1 == i ? r.substring(t - o.end.column) : r
            }, this.getFoldLine = function (e, t) {
                var i = this.$foldData,
                    n = 0;
                for (t && (n = i.indexOf(t)), -1 == n && (n = 0); n < i.length; n++) {
                    var r = i[n];
                    if (r.start.row <= e && r.end.row >= e) return r;
                    if (r.end.row > e) return null
                }
                return null
            }, this.getNextFoldLine = function (e, t) {
                var i = this.$foldData,
                    n = 0;
                for (t && (n = i.indexOf(t)), -1 == n && (n = 0); n < i.length; n++) {
                    var r = i[n];
                    if (r.end.row >= e) return r
                }
                return null
            }, this.getFoldedRowCount = function (e, t) {
                for (var i = this.$foldData, n = t - e + 1, r = 0; r < i.length; r++) {
                    var s = i[r],
                        o = s.end.row,
                        a = s.start.row;
                    if (o >= t) {
                        a < t && (a >= e ? n -= t - a : n = 0);
                        break
                    }
                    o >= e && (n -= a >= e ? o - a : o - e + 1)
                }
                return n
            }, this.$addFoldLine = function (e) {
                return this.$foldData.push(e), this.$foldData.sort((function (e, t) {
                    return e.start.row - t.start.row
                })), e
            }, this.addFold = function (e, t) {
                var i, n = this.$foldData,
                    o = !1;
                e instanceof s ? i = e : (i = new s(t, e)).collapseChildren = t.collapseChildren, this.$clipRangeToDocument(i.range);
                var a = i.start.row,
                    l = i.start.column,
                    c = i.end.row,
                    h = i.end.column;
                if (!(a < c || a == c && l <= h - 2)) throw new Error("The range has to be at least 2 characters width");
                var u = this.getFoldAt(a, l, 1),
                    d = this.getFoldAt(c, h, -1);
                if (u && d == u) return u.addSubFold(i);
                u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(c, h) && this.removeFold(d);
                var g = this.getFoldsInRange(i.range);
                g.length > 0 && (this.removeFolds(g), g.forEach((function (e) {
                    i.addSubFold(e)
                })));
                for (var f = 0; f < n.length; f++) {
                    var p = n[f];
                    if (c == p.start.row) {
                        p.addFold(i), o = !0;
                        break
                    }
                    if (a == p.end.row) {
                        if (p.addFold(i), o = !0, !i.sameRow) {
                            var m = n[f + 1];
                            if (m && m.start.row == c) {
                                p.merge(m);
                                break
                            }
                        }
                        break
                    }
                    if (c <= p.start.row) break
                }
                return o || (p = this.$addFoldLine(new r(this.$foldData, i))), this.$useWrapMode ? this.$updateWrapData(p.start.row, p.start.row) : this.$updateRowLengthCache(p.start.row, p.start.row), this.$modified = !0, this._signal("changeFold", {
                    data: i,
                    action: "add"
                }), i
            }, this.addFolds = function (e) {
                e.forEach((function (e) {
                    this.addFold(e)
                }), this)
            }, this.removeFold = function (e) {
                var t = e.foldLine,
                    i = t.start.row,
                    n = t.end.row,
                    r = this.$foldData,
                    s = t.folds;
                if (1 == s.length) r.splice(r.indexOf(t), 1);
                else if (t.range.isEnd(e.end.row, e.end.column)) s.pop(), t.end.row = s[s.length - 1].end.row, t.end.column = s[s.length - 1].end.column;
                else if (t.range.isStart(e.start.row, e.start.column)) s.shift(), t.start.row = s[0].start.row, t.start.column = s[0].start.column;
                else if (e.sameRow) s.splice(s.indexOf(e), 1);
                else {
                    var o = t.split(e.start.row, e.start.column);
                    (s = o.folds).shift(), o.start.row = s[0].start.row, o.start.column = s[0].start.column
                }
                this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) : this.$updateRowLengthCache(i, n)), this.$modified = !0, this._signal("changeFold", {
                    data: e,
                    action: "remove"
                })
            }, this.removeFolds = function (e) {
                for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
                t.forEach((function (e) {
                    this.removeFold(e)
                }), this), this.$modified = !0
            }, this.expandFold = function (e) {
                this.removeFold(e), e.subFolds.forEach((function (t) {
                    e.restoreRange(t), this.addFold(t)
                }), this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
            }, this.expandFolds = function (e) {
                e.forEach((function (e) {
                    this.expandFold(e)
                }), this)
            }, this.unfold = function (e, t) {
                var i, r;
                if (null == e ? (i = new n(0, 0, this.getLength(), 0), t = !0) : i = "number" == typeof e ? new n(e, 0, e, this.getLine(e).length) : "row" in e ? n.fromPoints(e, e) : e, r = this.getFoldsInRangeList(i), t) this.removeFolds(r);
                else
                    for (var s = r; s.length;) this.expandFolds(s), s = this.getFoldsInRangeList(i);
                if (r.length) return r
            }, this.isRowFolded = function (e, t) {
                return !!this.getFoldLine(e, t)
            }, this.getRowFoldEnd = function (e, t) {
                var i = this.getFoldLine(e, t);
                return i ? i.end.row : e
            }, this.getRowFoldStart = function (e, t) {
                var i = this.getFoldLine(e, t);
                return i ? i.start.row : e
            }, this.getFoldDisplayLine = function (e, t, i, n, r) {
                null == n && (n = e.start.row), null == r && (r = 0), null == t && (t = e.end.row), null == i && (i = this.getLine(t).length);
                var s = this.doc,
                    o = "";
                return e.walk((function (e, t, i, a) {
                    if (!(t < n)) {
                        if (t == n) {
                            if (i < r) return;
                            a = Math.max(r, a)
                        }
                        o += null != e ? e : s.getLine(t).substring(a, i)
                    }
                }), t, i), o
            }, this.getDisplayLine = function (e, t, i, n) {
                var r, s = this.getFoldLine(e);
                return s ? this.getFoldDisplayLine(s, e, t, i, n) : (r = this.doc.getLine(e)).substring(n || 0, t || r.length)
            }, this.$cloneFoldData = function () {
                var e = [];
                return e = this.$foldData.map((function (t) {
                    var i = t.folds.map((function (e) {
                        return e.clone()
                    }));
                    return new r(e, i)
                }))
            }, this.toggleFold = function (e) {
                var t, i, n = this.selection.getRange();
                if (n.isEmpty()) {
                    var r = n.start;
                    if (t = this.getFoldAt(r.row, r.column)) return void this.expandFold(t);
                    (i = this.findMatchingBracket(r)) ? 1 == n.comparePoint(i) ? n.end = i : (n.start = i, n.start.column++, n.end.column--) : (i = this.findMatchingBracket({
                        row: r.row,
                        column: r.column + 1
                    })) ? (1 == n.comparePoint(i) ? n.end = i : n.start = i, n.start.column++) : n = this.getCommentFoldRange(r.row, r.column) || n
                } else {
                    var s = this.getFoldsInRange(n);
                    if (e && s.length) return void this.expandFolds(s);
                    1 == s.length && (t = s[0])
                }
                if (t || (t = this.getFoldAt(n.start.row, n.start.column)), t && t.range.toString() == n.toString()) this.expandFold(t);
                else {
                    var o = "...";
                    if (!n.isMultiLine()) {
                        if ((o = this.getTextRange(n)).length < 4) return;
                        o = o.trim().substring(0, 2) + ".."
                    }
                    this.addFold(o, n)
                }
            }, this.getCommentFoldRange = function (e, t, i) {
                var r = new o(this, e, t),
                    s = r.getCurrentToken(),
                    a = s.type;
                if (s && /^comment|string/.test(a)) {
                    "comment" == (a = a.match(/comment|string/)[0]) && (a += "|doc-start");
                    var l = new RegExp(a),
                        c = new n;
                    if (1 != i) {
                        do {
                            s = r.stepBackward()
                        } while (s && l.test(s.type));
                        r.stepForward()
                    }
                    if (c.start.row = r.getCurrentTokenRow(), c.start.column = r.getCurrentTokenColumn() + 2, r = new o(this, e, t), -1 != i) {
                        var h = -1;
                        do {
                            if (s = r.stepForward(), -1 == h) {
                                var u = this.getState(r.$row);
                                l.test(u) || (h = r.$row)
                            } else if (r.$row > h) break
                        } while (s && l.test(s.type));
                        s = r.stepBackward()
                    } else s = r.getCurrentToken();
                    return c.end.row = r.getCurrentTokenRow(), c.end.column = r.getCurrentTokenColumn() + s.value.length - 2, c
                }
            }, this.foldAll = function (e, t, i) {
                null == i && (i = 1e5);
                var n = this.foldWidgets;
                if (n) {
                    t = t || this.getLength();
                    for (var r = e = e || 0; r < t; r++)
                        if (null == n[r] && (n[r] = this.getFoldWidget(r)), "start" == n[r]) {
                            var s = this.getFoldWidgetRange(r);
                            if (s && s.isMultiLine() && s.end.row <= t && s.start.row >= e) {
                                r = s.end.row;
                                try {
                                    var o = this.addFold("...", s);
                                    o && (o.collapseChildren = i)
                                } catch (e) { }
                            }
                        }
                }
            }, this.$foldStyles = {
                manual: 1,
                markbegin: 1,
                markbeginend: 1
            }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
                if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
                if (this.$foldStyle != e) {
                    this.$foldStyle = e, "manual" == e && this.unfold();
                    var t = this.$foldMode;
                    this.$setFolding(null), this.$setFolding(t)
                }
            }, this.$setFolding = function (e) {
                this.$foldMode != e && (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), e && "manual" != this.$foldStyle ? (this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)) : this.foldWidgets = null)
            }, this.getParentFoldRangeData = function (e, t) {
                var i = this.foldWidgets;
                if (!i || t && i[e]) return {};
                for (var n, r = e - 1; r >= 0;) {
                    var s = i[r];
                    if (null == s && (s = i[r] = this.getFoldWidget(r)), "start" == s) {
                        var o = this.getFoldWidgetRange(r);
                        if (n || (n = o), o && o.end.row >= e) break
                    }
                    r--
                }
                return {
                    range: -1 !== r && o,
                    firstRange: n
                }
            }, this.onFoldWidgetClick = function (e, t) {
                var i = {
                    children: (t = t.domEvent).shiftKey,
                    all: t.ctrlKey || t.metaKey,
                    siblings: t.altKey
                };
                if (!this.$toggleFoldWidget(e, i)) {
                    var n = t.target || t.srcElement;
                    n && /ace_fold-widget/.test(n.className) && (n.className += " ace_invalid")
                }
            }, this.$toggleFoldWidget = function (e, t) {
                if (this.getFoldWidget) {
                    var i = this.getFoldWidget(e),
                        n = this.getLine(e),
                        r = "end" === i ? -1 : 1,
                        s = this.getFoldAt(e, -1 === r ? 0 : n.length, r);
                    if (s) return t.children || t.all ? this.removeFold(s) : this.expandFold(s), s;
                    var o = this.getFoldWidgetRange(e, !0);
                    if (o && !o.isMultiLine() && (s = this.getFoldAt(o.start.row, o.start.column, 1)) && o.isEqual(s.range)) return this.removeFold(s), s;
                    if (t.siblings) {
                        var a = this.getParentFoldRangeData(e);
                        if (a.range) var l = a.range.start.row + 1,
                            c = a.range.end.row;
                        this.foldAll(l, c, t.all ? 1e4 : 0)
                    } else t.children ? (c = o ? o.end.row : this.getLength(), this.foldAll(e + 1, c, t.all ? 1e4 : 0)) : o && (t.all && (o.collapseChildren = 1e4), this.addFold("...", o));
                    return o
                }
            }, this.toggleFoldWidget = function (e) {
                var t = this.selection.getCursor().row;
                t = this.getRowFoldStart(t);
                var i = this.$toggleFoldWidget(t, {});
                if (!i) {
                    var n = this.getParentFoldRangeData(t, !0);
                    if (i = n.range || n.firstRange) {
                        t = i.start.row;
                        var r = this.getFoldAt(t, this.getLine(t).length, 1);
                        r ? this.removeFold(r) : this.addFold("...", i)
                    }
                }
            }, this.updateFoldWidgets = function (e) {
                var t = e.start.row,
                    i = e.end.row - t;
                if (0 === i) this.foldWidgets[t] = null;
                else if ("remove" == e.action) this.foldWidgets.splice(t, i + 1, null);
                else {
                    var n = Array(i + 1);
                    n.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, n)
                }
            }, this.tokenizerUpdateFoldWidgets = function (e) {
                var t = e.data;
                t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
            }
        }
    })), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("../token_iterator").TokenIterator,
            r = e("../range").Range;
        t.BracketMatch = function () {
            this.findMatchingBracket = function (e, t) {
                if (0 == e.column) return null;
                var i = t || this.getLine(e.row).charAt(e.column - 1);
                if ("" == i) return null;
                var n = i.match(/([\(\[\{])|([\)\]\}])/);
                return n ? n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e) : null
            }, this.getBracketRange = function (e) {
                var t, i = this.getLine(e.row),
                    n = !0,
                    s = i.charAt(e.column - 1),
                    o = s && s.match(/([\(\[\{])|([\)\]\}])/);
                if (o || (s = i.charAt(e.column), e = {
                    row: e.row,
                    column: e.column + 1
                }, o = s && s.match(/([\(\[\{])|([\)\]\}])/), n = !1), !o) return null;
                if (o[1]) {
                    if (!(a = this.$findClosingBracket(o[1], e))) return null;
                    t = r.fromPoints(e, a), n || (t.end.column++, t.start.column--), t.cursor = t.end
                } else {
                    var a;
                    if (!(a = this.$findOpeningBracket(o[2], e))) return null;
                    t = r.fromPoints(a, e), n || (t.start.column++, t.end.column--), t.cursor = t.start
                }
                return t
            }, this.$brackets = {
                ")": "(",
                "(": ")",
                "]": "[",
                "[": "]",
                "{": "}",
                "}": "{"
            }, this.$findOpeningBracket = function (e, t, i) {
                var r = this.$brackets[e],
                    s = 1,
                    o = new n(this, t.row, t.column),
                    a = o.getCurrentToken();
                if (a || (a = o.stepForward()), a) {
                    i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                    for (var l = t.column - o.getCurrentTokenColumn() - 2, c = a.value; ;) {
                        for (; l >= 0;) {
                            var h = c.charAt(l);
                            if (h == r) {
                                if (0 == (s -= 1)) return {
                                    row: o.getCurrentTokenRow(),
                                    column: l + o.getCurrentTokenColumn()
                                }
                            } else h == e && (s += 1);
                            l -= 1
                        }
                        do {
                            a = o.stepBackward()
                        } while (a && !i.test(a.type));
                        if (null == a) break;
                        l = (c = a.value).length - 1
                    }
                    return null
                }
            }, this.$findClosingBracket = function (e, t, i) {
                var r = this.$brackets[e],
                    s = 1,
                    o = new n(this, t.row, t.column),
                    a = o.getCurrentToken();
                if (a || (a = o.stepForward()), a) {
                    i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                    for (var l = t.column - o.getCurrentTokenColumn(); ;) {
                        for (var c = a.value, h = c.length; l < h;) {
                            var u = c.charAt(l);
                            if (u == r) {
                                if (0 == (s -= 1)) return {
                                    row: o.getCurrentTokenRow(),
                                    column: l + o.getCurrentTokenColumn()
                                }
                            } else u == e && (s += 1);
                            l += 1
                        }
                        do {
                            a = o.stepForward()
                        } while (a && !i.test(a.type));
                        if (null == a) break;
                        l = 0
                    }
                    return null
                }
            }
        }
    })), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/lang"),
            s = e("./bidihandler").BidiHandler,
            o = e("./config"),
            a = e("./lib/event_emitter").EventEmitter,
            l = e("./selection").Selection,
            c = e("./mode/text").Mode,
            h = e("./range").Range,
            u = e("./document").Document,
            d = e("./background_tokenizer").BackgroundTokenizer,
            g = e("./search_highlight").SearchHighlight,
            f = function (e, t) {
                this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++f.$uid, this.$foldData.toString = function () {
                    return this.join("\n")
                }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new u(e)), this.$bidiHandler = new s(this), this.setDocument(e), this.selection = new l(this), o.resetOptions(this), this.setMode(t), o._signal("session", this)
            };
        f.$uid = 0,
            function () {
                n.implement(this, a), this.setDocument = function (e) {
                    this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
                }, this.getDocument = function () {
                    return this.doc
                }, this.$resetRowCache = function (e) {
                    if (!e) return this.$docRowCache = [], void (this.$screenRowCache = []);
                    var t = this.$docRowCache.length,
                        i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
                    t > i && (this.$docRowCache.splice(i, t), this.$screenRowCache.splice(i, t))
                }, this.$getRowCacheIndex = function (e, t) {
                    for (var i = 0, n = e.length - 1; i <= n;) {
                        var r = i + n >> 1,
                            s = e[r];
                        if (t > s) i = r + 1;
                        else {
                            if (!(t < s)) return r;
                            n = r - 1
                        }
                    }
                    return i - 1
                }, this.resetCaches = function () {
                    this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
                }, this.onChangeFold = function (e) {
                    var t = e.data;
                    this.$resetRowCache(t.start.row)
                }, this.onChange = function (e) {
                    this.$modified = !0, this.$bidiHandler.onChange(e), this.$resetRowCache(e.start.row);
                    var t = this.$updateInternalDataOnChange(e);
                    this.$fromUndo || !this.$undoManager || e.ignore || (this.$deltasDoc.push(e), t && 0 != t.length && this.$deltasFold.push({
                        action: "removeFolds",
                        folds: t
                    }), this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this._signal("change", e)
                }, this.setValue = function (e) {
                    this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
                }, this.getValue = this.toString = function () {
                    return this.doc.getValue()
                }, this.getSelection = function () {
                    return this.selection
                }, this.getState = function (e) {
                    return this.bgTokenizer.getState(e)
                }, this.getTokens = function (e) {
                    return this.bgTokenizer.getTokens(e)
                }, this.getTokenAt = function (e, t) {
                    var i, n = this.bgTokenizer.getTokens(e),
                        r = 0;
                    if (null == t) {
                        var s = n.length - 1;
                        r = this.getLine(e).length
                    } else
                        for (s = 0; s < n.length && !((r += n[s].value.length) >= t); s++);
                    return (i = n[s]) ? (i.index = s, i.start = r - i.value.length, i) : null
                }, this.setUndoManager = function (e) {
                    if (this.$undoManager = e, this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.$informUndoManager && this.$informUndoManager.cancel(), e) {
                        var t = this;
                        this.$syncInformUndoManager = function () {
                            t.$informUndoManager.cancel(), t.$deltasFold.length && (t.$deltas.push({
                                group: "fold",
                                deltas: t.$deltasFold
                            }), t.$deltasFold = []), t.$deltasDoc.length && (t.$deltas.push({
                                group: "doc",
                                deltas: t.$deltasDoc
                            }), t.$deltasDoc = []), t.$deltas.length > 0 && e.execute({
                                action: "aceupdate",
                                args: [t.$deltas, t],
                                merge: t.mergeUndoDeltas
                            }), t.mergeUndoDeltas = !1, t.$deltas = []
                        }, this.$informUndoManager = r.delayedCall(this.$syncInformUndoManager)
                    }
                }, this.markUndoGroup = function () {
                    this.$syncInformUndoManager && this.$syncInformUndoManager()
                }, this.$defaultUndoManager = {
                    undo: function () { },
                    redo: function () { },
                    reset: function () { }
                }, this.getUndoManager = function () {
                    return this.$undoManager || this.$defaultUndoManager
                }, this.getTabString = function () {
                    return this.getUseSoftTabs() ? r.stringRepeat(" ", this.getTabSize()) : "\t"
                }, this.setUseSoftTabs = function (e) {
                    this.setOption("useSoftTabs", e)
                }, this.getUseSoftTabs = function () {
                    return this.$useSoftTabs && !this.$mode.$indentWithTabs
                }, this.setTabSize = function (e) {
                    this.setOption("tabSize", e)
                }, this.getTabSize = function () {
                    return this.$tabSize
                }, this.isTabStop = function (e) {
                    return this.$useSoftTabs && e.column % this.$tabSize == 0
                }, this.setNavigateWithinSoftTabs = function (e) {
                    this.setOption("navigateWithinSoftTabs", e)
                }, this.getNavigateWithinSoftTabs = function () {
                    return this.$navigateWithinSoftTabs
                }, this.$overwrite = !1, this.setOverwrite = function (e) {
                    this.setOption("overwrite", e)
                }, this.getOverwrite = function () {
                    return this.$overwrite
                }, this.toggleOverwrite = function () {
                    this.setOverwrite(!this.$overwrite)
                }, this.addGutterDecoration = function (e, t) {
                    this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
                }, this.removeGutterDecoration = function (e, t) {
                    this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
                }, this.getBreakpoints = function () {
                    return this.$breakpoints
                }, this.setBreakpoints = function (e) {
                    this.$breakpoints = [];
                    for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
                    this._signal("changeBreakpoint", {})
                }, this.clearBreakpoints = function () {
                    this.$breakpoints = [], this._signal("changeBreakpoint", {})
                }, this.setBreakpoint = function (e, t) {
                    void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
                }, this.clearBreakpoint = function (e) {
                    delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
                }, this.addMarker = function (e, t, i, n) {
                    var r = this.$markerId++,
                        s = {
                            range: e,
                            type: i || "line",
                            renderer: "function" == typeof i ? i : null,
                            clazz: t,
                            inFront: !!n,
                            id: r
                        };
                    return n ? (this.$frontMarkers[r] = s, this._signal("changeFrontMarker")) : (this.$backMarkers[r] = s, this._signal("changeBackMarker")), r
                }, this.addDynamicMarker = function (e, t) {
                    if (e.update) {
                        var i = this.$markerId++;
                        return e.id = i, e.inFront = !!t, t ? (this.$frontMarkers[i] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = e, this._signal("changeBackMarker")), e
                    }
                }, this.removeMarker = function (e) {
                    var t = this.$frontMarkers[e] || this.$backMarkers[e];
                    if (t) {
                        var i = t.inFront ? this.$frontMarkers : this.$backMarkers;
                        t && (delete i[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
                    }
                }, this.getMarkers = function (e) {
                    return e ? this.$frontMarkers : this.$backMarkers
                }, this.highlight = function (e) {
                    if (!this.$searchHighlight) {
                        var t = new g(null, "ace_selected-word", "text");
                        this.$searchHighlight = this.addDynamicMarker(t)
                    }
                    this.$searchHighlight.setRegexp(e)
                }, this.highlightLines = function (e, t, i, n) {
                    "number" != typeof t && (i = t, t = e), i || (i = "ace_step");
                    var r = new h(e, 0, t, 1 / 0);
                    return r.id = this.addMarker(r, i, "fullLine", n), r
                }, this.setAnnotations = function (e) {
                    this.$annotations = e, this._signal("changeAnnotation", {})
                }, this.getAnnotations = function () {
                    return this.$annotations || []
                }, this.clearAnnotations = function () {
                    this.setAnnotations([])
                }, this.$detectNewLine = function (e) {
                    var t = e.match(/^.*?(\r?\n)/m);
                    this.$autoNewLine = t ? t[1] : "\n"
                }, this.getWordRange = function (e, t) {
                    var i = this.getLine(e),
                        n = !1;
                    if (t > 0 && (n = !!i.charAt(t - 1).match(this.tokenRe)), n || (n = !!i.charAt(t).match(this.tokenRe)), n) var r = this.tokenRe;
                    else if (/^\s+$/.test(i.slice(t - 1, t + 1))) r = /\s/;
                    else r = this.nonTokenRe;
                    var s = t;
                    if (s > 0) {
                        do {
                            s--
                        } while (s >= 0 && i.charAt(s).match(r));
                        s++
                    }
                    for (var o = t; o < i.length && i.charAt(o).match(r);) o++;
                    return new h(e, s, e, o)
                }, this.getAWordRange = function (e, t) {
                    for (var i = this.getWordRange(e, t), n = this.getLine(i.end.row); n.charAt(i.end.column).match(/[ \t]/);) i.end.column += 1;
                    return i
                }, this.setNewLineMode = function (e) {
                    this.doc.setNewLineMode(e)
                }, this.getNewLineMode = function () {
                    return this.doc.getNewLineMode()
                }, this.setUseWorker = function (e) {
                    this.setOption("useWorker", e)
                }, this.getUseWorker = function () {
                    return this.$useWorker
                }, this.onReloadTokenizer = function (e) {
                    var t = e.data;
                    this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
                }, this.$modes = {}, this.$mode = null, this.$modeId = null, this.setMode = function (e, t) {
                    if (e && "object" == typeof e) {
                        if (e.getTokenizer) return this.$onChangeMode(e);
                        var i = e,
                            n = i.path
                    } else n = e || "ace/mode/text";
                    if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new c), this.$modes[n] && !i) return this.$onChangeMode(this.$modes[n]), void (t && t());
                    this.$modeId = n, o.loadModule(["mode", n], function (e) {
                        if (this.$modeId !== n) return t && t();
                        this.$modes[n] && !i ? this.$onChangeMode(this.$modes[n]) : e && e.Mode && (e = new e.Mode(i), i || (this.$modes[n] = e, e.$id = n), this.$onChangeMode(e)), t && t()
                    }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)
                }, this.$onChangeMode = function (e, t) {
                    if (t || (this.$modeId = e.$id), this.$mode !== e) {
                        this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
                        var i = e.getTokenizer();
                        if (void 0 !== i.addEventListener) {
                            var n = this.onReloadTokenizer.bind(this);
                            i.addEventListener("update", n)
                        }
                        if (this.bgTokenizer) this.bgTokenizer.setTokenizer(i);
                        else {
                            this.bgTokenizer = new d(i);
                            var r = this;
                            this.bgTokenizer.addEventListener("update", (function (e) {
                                r._signal("tokenizerUpdate", e)
                            }))
                        }
                        this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
                    }
                }, this.$stopWorker = function () {
                    this.$worker && (this.$worker.terminate(), this.$worker = null)
                }, this.$startWorker = function () {
                    try {
                        this.$worker = this.$mode.createWorker(this)
                    } catch (e) {
                        o.warn("Could not load worker", e), this.$worker = null
                    }
                }, this.getMode = function () {
                    return this.$mode
                }, this.$scrollTop = 0, this.setScrollTop = function (e) {
                    this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
                }, this.getScrollTop = function () {
                    return this.$scrollTop
                }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
                    this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
                }, this.getScrollLeft = function () {
                    return this.$scrollLeft
                }, this.getScreenWidth = function () {
                    return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
                }, this.getLineWidgetMaxWidth = function () {
                    if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
                    var e = 0;
                    return this.lineWidgets.forEach((function (t) {
                        t && t.screenWidth > e && (e = t.screenWidth)
                    })), this.lineWidgetWidth = e
                }, this.$computeWidth = function (e) {
                    if (this.$modified || e) {
                        if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                        for (var t = this.doc.getAllLines(), i = this.$rowLengthCache, n = 0, r = 0, s = this.$foldData[r], o = s ? s.start.row : 1 / 0, a = t.length, l = 0; l < a; l++) {
                            if (l > o) {
                                if ((l = s.end.row + 1) >= a) break;
                                o = (s = this.$foldData[r++]) ? s.start.row : 1 / 0
                            }
                            null == i[l] && (i[l] = this.$getStringScreenWidth(t[l])[0]), i[l] > n && (n = i[l])
                        }
                        this.screenWidth = n
                    }
                }, this.getLine = function (e) {
                    return this.doc.getLine(e)
                }, this.getLines = function (e, t) {
                    return this.doc.getLines(e, t)
                }, this.getLength = function () {
                    return this.doc.getLength()
                }, this.getTextRange = function (e) {
                    return this.doc.getTextRange(e || this.selection.getRange())
                }, this.insert = function (e, t) {
                    return this.doc.insert(e, t)
                }, this.remove = function (e) {
                    return this.doc.remove(e)
                }, this.removeFullLines = function (e, t) {
                    return this.doc.removeFullLines(e, t)
                }, this.undoChanges = function (e, t) {
                    if (e.length) {
                        this.$fromUndo = !0;
                        for (var i = null, n = e.length - 1; - 1 != n; n--) {
                            var r = e[n];
                            "doc" == r.group ? (this.doc.revertDeltas(r.deltas), i = this.$getUndoSelection(r.deltas, !0, i)) : r.deltas.forEach((function (e) {
                                this.addFolds(e.folds)
                            }), this)
                        }
                        return this.$fromUndo = !1, i && this.$undoSelect && !t && this.selection.setSelectionRange(i), i
                    }
                }, this.redoChanges = function (e, t) {
                    if (e.length) {
                        this.$fromUndo = !0;
                        for (var i = null, n = 0; n < e.length; n++) {
                            var r = e[n];
                            "doc" == r.group && (this.doc.applyDeltas(r.deltas), i = this.$getUndoSelection(r.deltas, !1, i))
                        }
                        return this.$fromUndo = !1, i && this.$undoSelect && !t && this.selection.setSelectionRange(i), i
                    }
                }, this.setUndoSelect = function (e) {
                    this.$undoSelect = e
                }, this.$getUndoSelection = function (e, t, i) {
                    function n(e) {
                        return t ? "insert" !== e.action : "insert" === e.action
                    }
                    var r, s, o = e[0];
                    n(o) ? r = h.fromPoints(o.start, o.end) : r = h.fromPoints(o.start, o.start);
                    for (var a = 1; a < e.length; a++) n(o = e[a]) ? (s = o.start, -1 == r.compare(s.row, s.column) && r.setStart(s), s = o.end, 1 == r.compare(s.row, s.column) && r.setEnd(s), !0) : (s = o.start, -1 == r.compare(s.row, s.column) && (r = h.fromPoints(o.start, o.start)), !1);
                    if (null != i) {
                        0 === h.comparePoints(i.start, r.start) && (i.start.column += r.end.column - r.start.column, i.end.column += r.end.column - r.start.column);
                        var l = i.compareRange(r);
                        1 == l ? r.setStart(i.start) : -1 == l && r.setEnd(i.end)
                    }
                    return r
                }, this.replace = function (e, t) {
                    return this.doc.replace(e, t)
                }, this.moveText = function (e, t, i) {
                    var n = this.getTextRange(e),
                        r = this.getFoldsInRange(e),
                        s = h.fromPoints(t, t);
                    if (!i) {
                        this.remove(e);
                        var o = e.start.row - e.end.row;
                        (c = o ? -e.end.column : e.start.column - e.end.column) && (s.start.row == e.end.row && s.start.column > e.end.column && (s.start.column += c), s.end.row == e.end.row && s.end.column > e.end.column && (s.end.column += c)), o && s.start.row >= e.end.row && (s.start.row += o, s.end.row += o)
                    }
                    if (s.end = this.insert(s.start, n), r.length) {
                        var a = e.start,
                            l = s.start,
                            c = (o = l.row - a.row, l.column - a.column);
                        this.addFolds(r.map((function (e) {
                            return (e = e.clone()).start.row == a.row && (e.start.column += c), e.end.row == a.row && (e.end.column += c), e.start.row += o, e.end.row += o, e
                        })))
                    }
                    return s
                }, this.indentRows = function (e, t, i) {
                    i = i.replace(/\t/g, this.getTabString());
                    for (var n = e; n <= t; n++) this.doc.insertInLine({
                        row: n,
                        column: 0
                    }, i)
                }, this.outdentRows = function (e) {
                    for (var t = e.collapseRows(), i = new h(0, 0, 0, 0), n = this.getTabSize(), r = t.start.row; r <= t.end.row; ++r) {
                        var s = this.getLine(r);
                        i.start.row = r, i.end.row = r;
                        for (var o = 0; o < n && " " == s.charAt(o); ++o);
                        o < n && "\t" == s.charAt(o) ? (i.start.column = o, i.end.column = o + 1) : (i.start.column = 0, i.end.column = o), this.remove(i)
                    }
                }, this.$moveLines = function (e, t, i) {
                    if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), i < 0) {
                        if ((r = this.getRowFoldStart(e + i)) < 0) return 0;
                        var n = r - e
                    } else if (i > 0) {
                        var r;
                        if ((r = this.getRowFoldEnd(t + i)) > this.doc.getLength() - 1) return 0;
                        n = r - t
                    } else {
                        e = this.$clipRowToDocument(e);
                        n = (t = this.$clipRowToDocument(t)) - e + 1
                    }
                    var s = new h(e, 0, t, Number.MAX_VALUE),
                        o = this.getFoldsInRange(s).map((function (e) {
                            return (e = e.clone()).start.row += n, e.end.row += n, e
                        })),
                        a = 0 == i ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
                    return this.doc.insertFullLines(e + n, a), o.length && this.addFolds(o), n
                }, this.moveLinesUp = function (e, t) {
                    return this.$moveLines(e, t, -1)
                }, this.moveLinesDown = function (e, t) {
                    return this.$moveLines(e, t, 1)
                }, this.duplicateLines = function (e, t) {
                    return this.$moveLines(e, t, 0)
                }, this.$clipRowToDocument = function (e) {
                    return Math.max(0, Math.min(e, this.doc.getLength() - 1))
                }, this.$clipColumnToRow = function (e, t) {
                    return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
                }, this.$clipPositionToDocument = function (e, t) {
                    if (t = Math.max(0, t), e < 0) e = 0, t = 0;
                    else {
                        var i = this.doc.getLength();
                        e >= i ? (e = i - 1, t = this.doc.getLine(i - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
                    }
                    return {
                        row: e,
                        column: t
                    }
                }, this.$clipRangeToDocument = function (e) {
                    e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
                    var t = this.doc.getLength() - 1;
                    return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
                }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
                    min: null,
                    max: null
                }, this.setUseWrapMode = function (e) {
                    if (e != this.$useWrapMode) {
                        if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
                            var t = this.getLength();
                            this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                        }
                        this._signal("changeWrapMode")
                    }
                }, this.getUseWrapMode = function () {
                    return this.$useWrapMode
                }, this.setWrapLimitRange = function (e, t) {
                    this.$wrapLimitRange.min === e && this.$wrapLimitRange.max === t || (this.$wrapLimitRange = {
                        min: e,
                        max: t
                    }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"))
                }, this.adjustWrapLimit = function (e, t) {
                    var i = this.$wrapLimitRange;
                    i.max < 0 && (i = {
                        min: t,
                        max: t
                    });
                    var n = this.$constrainWrapLimit(e, i.min, i.max);
                    return n != this.$wrapLimit && n > 1 && (this.$wrapLimit = n, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0)
                }, this.$constrainWrapLimit = function (e, t, i) {
                    return t && (e = Math.max(t, e)), i && (e = Math.min(i, e)), e
                }, this.getWrapLimit = function () {
                    return this.$wrapLimit
                }, this.setWrapLimit = function (e) {
                    this.setWrapLimitRange(e, e)
                }, this.getWrapLimitRange = function () {
                    return {
                        min: this.$wrapLimitRange.min,
                        max: this.$wrapLimitRange.max
                    }
                }, this.$updateInternalDataOnChange = function (e) {
                    var t = this.$useWrapMode,
                        i = e.action,
                        n = e.start,
                        r = e.end,
                        s = n.row,
                        o = r.row,
                        a = o - s,
                        l = null;
                    if (this.$updating = !0, 0 != a)
                        if ("remove" === i) {
                            this[t ? "$wrapData" : "$rowLengthCache"].splice(s, a);
                            var c = this.$foldData;
                            l = this.getFoldsInRange(e), this.removeFolds(l);
                            var h = 0;
                            if (p = this.getFoldLine(r.row)) {
                                p.addRemoveChars(r.row, r.column, n.column - r.column), p.shiftRow(-a);
                                var u = this.getFoldLine(s);
                                u && u !== p && (u.merge(p), p = u), h = c.indexOf(p) + 1
                            }
                            for (; h < c.length; h++) {
                                (p = c[h]).start.row >= r.row && p.shiftRow(-a)
                            }
                            o = s
                        } else {
                            var d = Array(a);
                            d.unshift(s, 0);
                            var g = t ? this.$wrapData : this.$rowLengthCache;
                            g.splice.apply(g, d);
                            c = this.$foldData, h = 0;
                            if (p = this.getFoldLine(s)) {
                                var f = p.range.compareInside(n.row, n.column);
                                0 == f ? (p = p.split(n.row, n.column)) && (p.shiftRow(a), p.addRemoveChars(o, 0, r.column - n.column)) : -1 == f && (p.addRemoveChars(s, 0, r.column - n.column), p.shiftRow(a)), h = c.indexOf(p) + 1
                            }
                            for (; h < c.length; h++) {
                                var p;
                                (p = c[h]).start.row >= s && p.shiftRow(a)
                            }
                        }
                    else a = Math.abs(e.start.column - e.end.column), "remove" === i && (l = this.getFoldsInRange(e), this.removeFolds(l), a = -a), (p = this.getFoldLine(s)) && p.addRemoveChars(s, n.column, a);
                    return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(s, o) : this.$updateRowLengthCache(s, o), l
                }, this.$updateRowLengthCache = function (e, t, i) {
                    this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
                }, this.$updateWrapData = function (i, n) {
                    var r, s, o = this.doc.getAllLines(),
                        a = this.getTabSize(),
                        l = this.$wrapData,
                        c = this.$wrapLimit,
                        h = i;
                    for (n = Math.min(n, o.length - 1); h <= n;)(s = this.getFoldLine(h, s)) ? (r = [], s.walk(function (i, n, s, a) {
                        var l;
                        if (null != i) {
                            (l = this.$getDisplayTokens(i, r.length))[0] = e;
                            for (var c = 1; c < l.length; c++) l[c] = t
                        } else l = this.$getDisplayTokens(o[n].substring(a, s), r.length);
                        r = r.concat(l)
                    }.bind(this), s.end.row, o[s.end.row].length + 1), l[s.start.row] = this.$computeWrapSplits(r, c, a), h = s.end.row + 1) : (r = this.$getDisplayTokens(o[h]), l[h] = this.$computeWrapSplits(r, c, a), h++)
                };
                var e = 3,
                    t = 4;

                function i(e) {
                    return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510)
                }
                this.$computeWrapSplits = function (i, n, r) {
                    if (0 == i.length) return [];
                    var s = [],
                        o = i.length,
                        a = 0,
                        l = 0,
                        c = this.$wrapAsCode,
                        h = this.$indentedSoftWrap,
                        u = n <= Math.max(2 * r, 8) || !1 === h ? 0 : Math.floor(n / 2);

                    function d(e) {
                        var t = i.slice(a, e),
                            n = t.length;
                        t.join("").replace(/12/g, (function () {
                            n -= 1
                        })).replace(/2/g, (function () {
                            n -= 1
                        })), s.length || (g = function () {
                            var e = 0;
                            if (0 === u) return e;
                            if (h)
                                for (var t = 0; t < i.length; t++) {
                                    var n = i[t];
                                    if (10 == n) e += 1;
                                    else {
                                        if (11 != n) {
                                            if (12 == n) continue;
                                            break
                                        }
                                        e += r
                                    }
                                }
                            return c && !1 !== h && (e += r), Math.min(e, u)
                        }(), s.indent = g), l += n, s.push(l), a = e
                    }
                    for (var g = 0; o - a > n - g;) {
                        var f = a + n - g;
                        if (i[f - 1] >= 10 && i[f] >= 10) d(f);
                        else if (i[f] != e && i[f] != t) {
                            for (var p = Math.max(f - (n - (n >> 2)), a - 1); f > p && i[f] < e;) f--;
                            if (c) {
                                for (; f > p && i[f] < e;) f--;
                                for (; f > p && 9 == i[f];) f--
                            } else
                                for (; f > p && i[f] < 10;) f--;
                            f > p ? d(++f) : (2 == i[f = a + n] && f--, d(f - g))
                        } else {
                            for (; f != a - 1 && i[f] != e; f--);
                            if (f > a) {
                                d(f);
                                continue
                            }
                            for (f = a + n; f < i.length && i[f] == t; f++);
                            if (f == i.length) break;
                            d(f)
                        }
                    }
                    return s
                }, this.$getDisplayTokens = function (e, t) {
                    var n, r = [];
                    t = t || 0;
                    for (var s = 0; s < e.length; s++) {
                        var o = e.charCodeAt(s);
                        if (9 == o) {
                            n = this.getScreenTabSize(r.length + t), r.push(11);
                            for (var a = 1; a < n; a++) r.push(12)
                        } else 32 == o ? r.push(10) : o > 39 && o < 48 || o > 57 && o < 64 ? r.push(9) : o >= 4352 && i(o) ? r.push(1, 2) : r.push(1)
                    }
                    return r
                }, this.$getStringScreenWidth = function (e, t, n) {
                    if (0 == t) return [0, 0];
                    var r, s;
                    for (null == t && (t = 1 / 0), n = n || 0, s = 0; s < e.length && (9 == (r = e.charCodeAt(s)) ? n += this.getScreenTabSize(n) : r >= 4352 && i(r) ? n += 2 : n += 1, !(n > t)); s++);
                    return [n, s]
                }, this.lineWidgets = null, this.getRowLength = function (e) {
                    if (this.lineWidgets) var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0;
                    else t = 0;
                    return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
                }, this.getRowLineCount = function (e) {
                    return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
                }, this.getRowWrapIndent = function (e) {
                    if (this.$useWrapMode) {
                        var t = this.screenToDocumentPosition(e, Number.MAX_VALUE),
                            i = this.$wrapData[t.row];
                        return i.length && i[0] < t.column ? i.indent : 0
                    }
                    return 0
                }, this.getScreenLastRowColumn = function (e) {
                    var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                    return this.documentToScreenColumn(t.row, t.column)
                }, this.getDocumentLastRowColumn = function (e, t) {
                    var i = this.documentToScreenRow(e, t);
                    return this.getScreenLastRowColumn(i)
                }, this.getDocumentLastRowColumnPosition = function (e, t) {
                    var i = this.documentToScreenRow(e, t);
                    return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
                }, this.getRowSplitData = function (e) {
                    return this.$useWrapMode ? this.$wrapData[e] : void 0
                }, this.getScreenTabSize = function (e) {
                    return this.$tabSize - e % this.$tabSize
                }, this.screenToDocumentRow = function (e, t) {
                    return this.screenToDocumentPosition(e, t).row
                }, this.screenToDocumentColumn = function (e, t) {
                    return this.screenToDocumentPosition(e, t).column
                }, this.screenToDocumentPosition = function (e, t, i) {
                    if (e < 0) return {
                        row: 0,
                        column: 0
                    };
                    var n, r, s = 0,
                        o = 0,
                        a = 0,
                        l = 0,
                        c = this.$screenRowCache,
                        h = this.$getRowCacheIndex(c, e),
                        u = c.length;
                    if (u && h >= 0) {
                        a = c[h], s = this.$docRowCache[h];
                        var d = e > c[u - 1]
                    } else d = !u;
                    for (var g = this.getLength() - 1, f = this.getNextFoldLine(s), p = f ? f.start.row : 1 / 0; a <= e && !(a + (l = this.getRowLength(s)) > e || s >= g);) a += l, ++s > p && (s = f.end.row + 1, p = (f = this.getNextFoldLine(s, f)) ? f.start.row : 1 / 0), d && (this.$docRowCache.push(s), this.$screenRowCache.push(a));
                    if (f && f.start.row <= s) n = this.getFoldDisplayLine(f), s = f.start.row;
                    else {
                        if (a + l <= e || s > g) return {
                            row: g,
                            column: this.getLine(g).length
                        };
                        n = this.getLine(s), f = null
                    }
                    var m = 0,
                        w = Math.floor(e - a);
                    if (this.$useWrapMode) {
                        var A = this.$wrapData[s];
                        A && (r = A[w], w > 0 && A.length && (m = A.indent, o = A[w - 1] || A[A.length - 1], n = n.substring(o)))
                    }
                    return void 0 !== i && this.$bidiHandler.isBidiRow(a + w, s, w) && (t = this.$bidiHandler.offsetToCol(i)), o += this.$getStringScreenWidth(n, t - m)[1], this.$useWrapMode && o >= r && (o = r - 1), f ? f.idxToPosition(o) : {
                        row: s,
                        column: o
                    }
                }, this.documentToScreenPosition = function (e, t) {
                    if (void 0 === t) var i = this.$clipPositionToDocument(e.row, e.column);
                    else i = this.$clipPositionToDocument(e, t);
                    e = i.row, t = i.column;
                    var n, r = 0,
                        s = null;
                    (n = this.getFoldAt(e, t, 1)) && (e = n.start.row, t = n.start.column);
                    var o, a = 0,
                        l = this.$docRowCache,
                        c = this.$getRowCacheIndex(l, e),
                        h = l.length;
                    if (h && c >= 0) {
                        a = l[c], r = this.$screenRowCache[c];
                        var u = e > l[h - 1]
                    } else u = !h;
                    for (var d = this.getNextFoldLine(a), g = d ? d.start.row : 1 / 0; a < e;) {
                        if (a >= g) {
                            if ((o = d.end.row + 1) > e) break;
                            g = (d = this.getNextFoldLine(o, d)) ? d.start.row : 1 / 0
                        } else o = a + 1;
                        r += this.getRowLength(a), a = o, u && (this.$docRowCache.push(a), this.$screenRowCache.push(r))
                    }
                    var f = "";
                    d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), s = d.start.row) : (f = this.getLine(e).substring(0, t), s = e);
                    var p = 0;
                    if (this.$useWrapMode) {
                        var m = this.$wrapData[s];
                        if (m) {
                            for (var w = 0; f.length >= m[w];) r++, w++;
                            f = f.substring(m[w - 1] || 0, f.length), p = w > 0 ? m.indent : 0
                        }
                    }
                    return {
                        row: r,
                        column: p + this.$getStringScreenWidth(f)[0]
                    }
                }, this.documentToScreenColumn = function (e, t) {
                    return this.documentToScreenPosition(e, t).column
                }, this.documentToScreenRow = function (e, t) {
                    return this.documentToScreenPosition(e, t).row
                }, this.getScreenLength = function () {
                    var e = 0,
                        t = null;
                    if (this.$useWrapMode)
                        for (var i = this.$wrapData.length, n = 0, r = (a = 0, (t = this.$foldData[a++]) ? t.start.row : 1 / 0); n < i;) {
                            var s = this.$wrapData[n];
                            e += s ? s.length + 1 : 1, ++n > r && (n = t.end.row + 1, r = (t = this.$foldData[a++]) ? t.start.row : 1 / 0)
                        } else {
                        e = this.getLength();
                        for (var o = this.$foldData, a = 0; a < o.length; a++) e -= (t = o[a]).end.row - t.start.row
                    }
                    return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
                }, this.$setFontMetrics = function (e) {
                    this.$enableVarChar && (this.$getStringScreenWidth = function (t, i, n) {
                        if (0 === i) return [0, 0];
                        var r, s;
                        for (i || (i = 1 / 0), n = n || 0, s = 0; s < t.length && !((n += "\t" === (r = t.charAt(s)) ? this.getScreenTabSize(n) : e.getCharacterWidth(r)) > i); s++);
                        return [n, s]
                    })
                }, this.destroy = function () {
                    this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
                }, this.isFullWidth = i
            }.call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype), e("./edit_session/bracket_match").BracketMatch.call(f.prototype), o.defineOptions(f.prototype, "session", {
                wrap: {
                    set: function (e) {
                        if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e)
                            if (this.$wrap = e, e) {
                                var t = "number" == typeof e ? e : null;
                                this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                            } else this.setUseWrapMode(!1)
                    },
                    get: function () {
                        return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
                    },
                    handlesSet: !0
                },
                wrapMethod: {
                    set: function (e) {
                        (e = "auto" == e ? "text" != this.$mode.type : "text" != e) != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$modified = !0, this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)))
                    },
                    initialValue: "auto"
                },
                indentedSoftWrap: {
                    initialValue: !0
                },
                firstLineNumber: {
                    set: function () {
                        this._signal("changeBreakpoint")
                    },
                    initialValue: 1
                },
                useWorker: {
                    set: function (e) {
                        this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
                    },
                    initialValue: !0
                },
                useSoftTabs: {
                    initialValue: !0
                },
                tabSize: {
                    set: function (e) {
                        isNaN(e) || this.$tabSize === e || (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
                    },
                    initialValue: 4,
                    handlesSet: !0
                },
                navigateWithinSoftTabs: {
                    initialValue: !1
                },
                overwrite: {
                    set: function (e) {
                        this._signal("changeOverwrite")
                    },
                    initialValue: !1
                },
                newLineMode: {
                    set: function (e) {
                        this.doc.setNewLineMode(e)
                    },
                    get: function () {
                        return this.doc.getNewLineMode()
                    },
                    handlesSet: !0
                },
                mode: {
                    set: function (e) {
                        this.setMode(e)
                    },
                    get: function () {
                        return this.$modeId
                    }
                }
            }), t.EditSession = f
    })), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/lang"),
            r = e("./lib/oop"),
            s = e("./range").Range,
            o = function () {
                this.$options = {}
            };
        (function () {
            this.set = function (e) {
                return r.mixin(this.$options, e), this
            }, this.getOptions = function () {
                return n.copyObject(this.$options)
            }, this.setOptions = function (e) {
                this.$options = e
            }, this.find = function (e) {
                var t = this.$options,
                    i = this.$matchIterator(e, t);
                if (!i) return !1;
                var n = null;
                return i.forEach((function (e, i, r, o) {
                    return n = new s(e, i, r, o), !(i == o && t.start && t.start.start && 0 != t.skipCurrent && n.isEqual(t.start)) || (n = null, !1)
                })), n
            }, this.findAll = function (e) {
                var t = this.$options;
                if (!t.needle) return [];
                this.$assembleRegExp(t);
                var i = t.range,
                    r = i ? e.getLines(i.start.row, i.end.row) : e.doc.getAllLines(),
                    o = [],
                    a = t.re;
                if (t.$isMultiLine) {
                    var l, c = a.length,
                        h = r.length - c;
                    e: for (var u = a.offset || 0; u <= h; u++) {
                        for (var d = 0; d < c; d++)
                            if (-1 == r[u + d].search(a[d])) continue e;
                        var g = r[u],
                            f = r[u + c - 1],
                            p = g.length - g.match(a[0])[0].length,
                            m = f.match(a[c - 1])[0].length;
                        l && l.end.row === u && l.end.column > p || (o.push(l = new s(u, p, u + c - 1, m)), c > 2 && (u = u + c - 2))
                    }
                } else
                    for (var w = 0; w < r.length; w++) {
                        var A = n.getMatchOffsets(r[w], a);
                        for (d = 0; d < A.length; d++) {
                            var v = A[d];
                            o.push(new s(w, v.offset, w, v.offset + v.length))
                        }
                    }
                if (i) {
                    var b = i.start.column,
                        C = i.start.column;
                    for (w = 0, d = o.length - 1; w < d && o[w].start.column < b && o[w].start.row == i.start.row;) w++;
                    for (; w < d && o[d].end.column > C && o[d].end.row == i.end.row;) d--;
                    for (o = o.slice(w, d + 1), w = 0, d = o.length; w < d; w++) o[w].start.row += i.start.row, o[w].end.row += i.start.row
                }
                return o
            }, this.replace = function (e, t) {
                var i = this.$options,
                    n = this.$assembleRegExp(i);
                if (i.$isMultiLine) return t;
                if (n) {
                    var r = n.exec(e);
                    if (!r || r[0].length != e.length) return null;
                    if (t = e.replace(n, t), i.preserveCase) {
                        t = t.split("");
                        for (var s = Math.min(e.length, e.length); s--;) {
                            var o = e[s];
                            o && o.toLowerCase() != o ? t[s] = t[s].toUpperCase() : t[s] = t[s].toLowerCase()
                        }
                        t = t.join("")
                    }
                    return t
                }
            }, this.$assembleRegExp = function (e, t) {
                if (e.needle instanceof RegExp) return e.re = e.needle;
                var i = e.needle;
                if (!e.needle) return e.re = !1;
                e.regExp || (i = n.escapeRegExp(i)), e.wholeWord && (i = function (e, t) {
                    function i(e) {
                        return /\w/.test(e) || t.regExp ? "\\b" : ""
                    }
                    return i(e[0]) + e + i(e[e.length - 1])
                }(i, e));
                var r = e.caseSensitive ? "gm" : "gmi";
                if (e.$isMultiLine = !t && /[\n\r]/.test(i), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(i, r);
                try {
                    var s = new RegExp(i, r)
                } catch (e) {
                    s = !1
                }
                return e.re = s
            }, this.$assembleMultilineRegExp = function (e, t) {
                for (var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], r = 0; r < i.length; r++) try {
                    n.push(new RegExp(i[r], t))
                } catch (e) {
                    return !1
                }
                return n
            }, this.$matchIterator = function (e, t) {
                var i = this.$assembleRegExp(t);
                if (!i) return !1;
                var n = 1 == t.backwards,
                    r = 0 != t.skipCurrent,
                    s = t.range,
                    o = t.start;
                o || (o = s ? s[n ? "end" : "start"] : e.selection.getRange()), o.start && (o = o[r != n ? "end" : "start"]);
                var a = s ? s.start.row : 0,
                    l = s ? s.end.row : e.getLength() - 1;
                if (n) var c = function (e) {
                    var i = o.row;
                    if (!u(i, o.column, e)) {
                        for (i--; i >= a; i--)
                            if (u(i, Number.MAX_VALUE, e)) return;
                        if (0 != t.wrap)
                            for (i = l, a = o.row; i >= a; i--)
                                if (u(i, Number.MAX_VALUE, e)) return
                    }
                };
                else c = function (e) {
                    var i = o.row;
                    if (!u(i, o.column, e)) {
                        for (i += 1; i <= l; i++)
                            if (u(i, 0, e)) return;
                        if (0 != t.wrap)
                            for (i = a, l = o.row; i <= l; i++)
                                if (u(i, 0, e)) return
                    }
                };
                if (t.$isMultiLine) var h = i.length,
                    u = function (t, r, s) {
                        var o = n ? t - h + 1 : t;
                        if (!(o < 0)) {
                            var a = e.getLine(o),
                                l = a.search(i[0]);
                            if (!(!n && l < r || -1 === l)) {
                                for (var c = 1; c < h; c++)
                                    if (-1 == (a = e.getLine(o + c)).search(i[c])) return;
                                var u = a.match(i[h - 1])[0].length;
                                if (!(n && u > r)) return !!s(o, l, o + h - 1, u) || void 0
                            }
                        }
                    };
                else if (n) u = function (t, n, r) {
                    var s, o = e.getLine(t),
                        a = [],
                        l = 0;
                    for (i.lastIndex = 0; s = i.exec(o);) {
                        var c = s[0].length;
                        if (l = s.index, !c) {
                            if (l >= o.length) break;
                            i.lastIndex = l += 1
                        }
                        if (s.index + c > n) break;
                        a.push(s.index, c)
                    }
                    for (var h = a.length - 1; h >= 0; h -= 2) {
                        var u = a[h - 1];
                        if (r(t, u, t, u + (c = a[h]))) return !0
                    }
                };
                else u = function (t, n, r) {
                    var s, o = e.getLine(t),
                        a = n;
                    for (i.lastIndex = n; s = i.exec(o);) {
                        var l = s[0].length;
                        if (r(t, a = s.index, t, a + l)) return !0;
                        if (!l && (i.lastIndex = a += 1, a >= o.length)) return !1
                    }
                };
                return {
                    forEach: c
                }
            }
        }).call(o.prototype), t.Search = o
    })), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/keys"),
            r = e("../lib/useragent"),
            s = n.KEY_MODS;

        function o(e, t) {
            this.platform = t || (r.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
        }

        function a(e, t) {
            o.call(this, e, t), this.$singleCommand = !1
        }
        a.prototype = o.prototype,
            function () {
                function e(e) {
                    return "object" == typeof e && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0)
                }
                this.addCommand = function (e) {
                    this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
                }, this.removeCommand = function (e, t) {
                    var i = e && ("string" == typeof e ? e : e.name);
                    e = this.commands[i], t || delete this.commands[i];
                    var n = this.commandKeyBinding;
                    for (var r in n) {
                        var s = n[r];
                        if (s == e) delete n[r];
                        else if (Array.isArray(s)) {
                            var o = s.indexOf(e); - 1 != o && (s.splice(o, 1), 1 == s.length && (n[r] = s[0]))
                        }
                    }
                }, this.bindKey = function (e, t, i) {
                    if ("object" == typeof e && e && (null == i && (i = e.position), e = e[this.platform]), e) return "function" == typeof t ? this.addCommand({
                        exec: t,
                        bindKey: e,
                        name: t.name || e
                    }) : void e.split("|").forEach((function (e) {
                        var n = "";
                        if (-1 != e.indexOf(" ")) {
                            var r = e.split(/\s+/);
                            e = r.pop(), r.forEach((function (e) {
                                var t = this.parseKeys(e),
                                    i = s[t.hashId] + t.key;
                                n += (n ? " " : "") + i, this._addCommandToBinding(n, "chainKeys")
                            }), this), n += " "
                        }
                        var o = this.parseKeys(e),
                            a = s[o.hashId] + o.key;
                        this._addCommandToBinding(n + a, t, i)
                    }), this)
                }, this._addCommandToBinding = function (t, i, n) {
                    var r, s = this.commandKeyBinding;
                    if (i)
                        if (!s[t] || this.$singleCommand) s[t] = i;
                        else {
                            Array.isArray(s[t]) ? -1 != (r = s[t].indexOf(i)) && s[t].splice(r, 1) : s[t] = [s[t]], "number" != typeof n && (n = e(i));
                            var o = s[t];
                            for (r = 0; r < o.length; r++) {
                                if (e(o[r]) > n) break
                            }
                            o.splice(r, 0, i)
                        }
                    else delete s[t]
                }, this.addCommands = function (e) {
                    e && Object.keys(e).forEach((function (t) {
                        var i = e[t];
                        if (i) {
                            if ("string" == typeof i) return this.bindKey(i, t);
                            "function" == typeof i && (i = {
                                exec: i
                            }), "object" == typeof i && (i.name || (i.name = t), this.addCommand(i))
                        }
                    }), this)
                }, this.removeCommands = function (e) {
                    Object.keys(e).forEach((function (t) {
                        this.removeCommand(e[t])
                    }), this)
                }, this.bindKeys = function (e) {
                    Object.keys(e).forEach((function (t) {
                        this.bindKey(t, e[t])
                    }), this)
                }, this._buildKeyHash = function (e) {
                    this.bindKey(e.bindKey, e)
                }, this.parseKeys = function (e) {
                    var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((function (e) {
                        return e
                    })),
                        i = t.pop(),
                        r = n[i];
                    if (n.FUNCTION_KEYS[r]) i = n.FUNCTION_KEYS[r].toLowerCase();
                    else {
                        if (!t.length) return {
                            key: i,
                            hashId: -1
                        };
                        if (1 == t.length && "shift" == t[0]) return {
                            key: i.toUpperCase(),
                            hashId: -1
                        }
                    }
                    for (var s = 0, o = t.length; o--;) {
                        var a = n.KEY_MODS[t[o]];
                        if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + t[o] + " in " + e), !1;
                        s |= a
                    }
                    return {
                        key: i,
                        hashId: s
                    }
                }, this.findKeyCommand = function (e, t) {
                    var i = s[e] + t;
                    return this.commandKeyBinding[i]
                }, this.handleKeyboard = function (e, t, i, n) {
                    if (!(n < 0)) {
                        var r = s[t] + i,
                            o = this.commandKeyBinding[r];
                        return e.$keyChain && (e.$keyChain += " " + r, o = this.commandKeyBinding[e.$keyChain] || o), !o || "chainKeys" != o && "chainKeys" != o[o.length - 1] ? (e.$keyChain && (t && 4 != t || 1 != i.length ? (-1 == t || n > 0) && (e.$keyChain = "") : e.$keyChain = e.$keyChain.slice(0, -r.length - 1)), {
                            command: o
                        }) : (e.$keyChain = e.$keyChain || r, {
                            command: "null"
                        })
                    }
                }, this.getStatusText = function (e, t) {
                    return t.$keyChain || ""
                }
            }.call(o.prototype), t.HashHandler = o, t.MultiHashHandler = a
    })), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/oop"),
            r = e("../keyboard/hash_handler").MultiHashHandler,
            s = e("../lib/event_emitter").EventEmitter,
            o = function (e, t) {
                r.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", (function (e) {
                    return e.command.exec(e.editor, e.args || {})
                }))
            };
        n.inherits(o, r),
            function () {
                n.implement(this, s), this.exec = function (e, t, i) {
                    if (Array.isArray(e)) {
                        for (var n = e.length; n--;)
                            if (this.exec(e[n], t, i)) return !0;
                        return !1
                    }
                    if ("string" == typeof e && (e = this.commands[e]), !e) return !1;
                    if (t && t.$readOnly && !e.readOnly) return !1;
                    if (e.isAvailable && !e.isAvailable(t)) return !1;
                    var r = {
                        editor: t,
                        command: e,
                        args: i
                    };
                    return r.returnValue = this._emit("exec", r), this._signal("afterExec", r), !1 !== r.returnValue
                }, this.toggleRecording = function (e) {
                    if (!this.$inReplay) return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
                        this.macro.push([e.command, e.args])
                    }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
                }, this.replay = function (e) {
                    if (!this.$inReplay && this.macro) {
                        if (this.recording) return this.toggleRecording(e);
                        try {
                            this.$inReplay = !0, this.macro.forEach((function (t) {
                                "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                            }), this)
                        } finally {
                            this.$inReplay = !1
                        }
                    }
                }, this.trimMacro = function (e) {
                    return e.map((function (e) {
                        return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
                    }))
                }
            }.call(o.prototype), t.CommandManager = o
    })), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/lang"),
            r = e("../config"),
            s = e("../range").Range;

        function o(e, t) {
            return {
                win: e,
                mac: t
            }
        }
        t.commands = [{
            name: "showSettingsMenu",
            bindKey: o("Ctrl-,", "Command-,"),
            exec: function (e) {
                r.loadModule("ace/ext/settings_menu", (function (t) {
                    t.init(e), e.showSettingsMenu()
                }))
            },
            readOnly: !0
        }, {
            name: "goToNextError",
            bindKey: o("Alt-E", "F4"),
            exec: function (e) {
                r.loadModule("ace/ext/error_marker", (function (t) {
                    t.showErrorMarker(e, 1)
                }))
            },
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "goToPreviousError",
            bindKey: o("Alt-Shift-E", "Shift-F4"),
            exec: function (e) {
                r.loadModule("ace/ext/error_marker", (function (t) {
                    t.showErrorMarker(e, -1)
                }))
            },
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "selectall",
            bindKey: o("Ctrl-A", "Command-A"),
            exec: function (e) {
                e.selectAll()
            },
            readOnly: !0
        }, {
            name: "centerselection",
            bindKey: o(null, "Ctrl-L"),
            exec: function (e) {
                e.centerSelection()
            },
            readOnly: !0
        }, {
            name: "gotoline",
            bindKey: o("Ctrl-L", "Command-L"),
            exec: function (e) {
                var t = parseInt(prompt("Enter line number:"), 10);
                isNaN(t) || e.gotoLine(t)
            },
            readOnly: !0
        }, {
            name: "fold",
            bindKey: o("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
            exec: function (e) {
                e.session.toggleFold(!1)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "unfold",
            bindKey: o("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
            exec: function (e) {
                e.session.toggleFold(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "toggleFoldWidget",
            bindKey: o("F2", "F2"),
            exec: function (e) {
                e.session.toggleFoldWidget()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "toggleParentFoldWidget",
            bindKey: o("Alt-F2", "Alt-F2"),
            exec: function (e) {
                e.session.toggleFoldWidget(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "foldall",
            bindKey: o(null, "Ctrl-Command-Option-0"),
            exec: function (e) {
                e.session.foldAll()
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "foldOther",
            bindKey: o("Alt-0", "Command-Option-0"),
            exec: function (e) {
                e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "unfoldall",
            bindKey: o("Alt-Shift-0", "Command-Option-Shift-0"),
            exec: function (e) {
                e.session.unfold()
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "findnext",
            bindKey: o("Ctrl-K", "Command-G"),
            exec: function (e) {
                e.findNext()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "findprevious",
            bindKey: o("Ctrl-Shift-K", "Command-Shift-G"),
            exec: function (e) {
                e.findPrevious()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "selectOrFindNext",
            bindKey: o("Alt-K", "Ctrl-G"),
            exec: function (e) {
                e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
            },
            readOnly: !0
        }, {
            name: "selectOrFindPrevious",
            bindKey: o("Alt-Shift-K", "Ctrl-Shift-G"),
            exec: function (e) {
                e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
            },
            readOnly: !0
        }, {
            name: "find",
            bindKey: o("Ctrl-F", "Command-F"),
            exec: function (e) {
                r.loadModule("ace/ext/searchbox", (function (t) {
                    t.Search(e)
                }))
            },
            readOnly: !0
        }, {
            name: "overwrite",
            bindKey: "Insert",
            exec: function (e) {
                e.toggleOverwrite()
            },
            readOnly: !0
        }, {
            name: "selecttostart",
            bindKey: o("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
            exec: function (e) {
                e.getSelection().selectFileStart()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "gotostart",
            bindKey: o("Ctrl-Home", "Command-Home|Command-Up"),
            exec: function (e) {
                e.navigateFileStart()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "selectup",
            bindKey: o("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
            exec: function (e) {
                e.getSelection().selectUp()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "golineup",
            bindKey: o("Up", "Up|Ctrl-P"),
            exec: function (e, t) {
                e.navigateUp(t.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttoend",
            bindKey: o("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
            exec: function (e) {
                e.getSelection().selectFileEnd()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "gotoend",
            bindKey: o("Ctrl-End", "Command-End|Command-Down"),
            exec: function (e) {
                e.navigateFileEnd()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "selectdown",
            bindKey: o("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
            exec: function (e) {
                e.getSelection().selectDown()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "golinedown",
            bindKey: o("Down", "Down|Ctrl-N"),
            exec: function (e, t) {
                e.navigateDown(t.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectwordleft",
            bindKey: o("Ctrl-Shift-Left", "Option-Shift-Left"),
            exec: function (e) {
                e.getSelection().selectWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotowordleft",
            bindKey: o("Ctrl-Left", "Option-Left"),
            exec: function (e) {
                e.navigateWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttolinestart",
            bindKey: o("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
            exec: function (e) {
                e.getSelection().selectLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotolinestart",
            bindKey: o("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
            exec: function (e) {
                e.navigateLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectleft",
            bindKey: o("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
            exec: function (e) {
                e.getSelection().selectLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotoleft",
            bindKey: o("Left", "Left|Ctrl-B"),
            exec: function (e, t) {
                e.navigateLeft(t.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectwordright",
            bindKey: o("Ctrl-Shift-Right", "Option-Shift-Right"),
            exec: function (e) {
                e.getSelection().selectWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotowordright",
            bindKey: o("Ctrl-Right", "Option-Right"),
            exec: function (e) {
                e.navigateWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttolineend",
            bindKey: o("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
            exec: function (e) {
                e.getSelection().selectLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotolineend",
            bindKey: o("Alt-Right|End", "Command-Right|End|Ctrl-E"),
            exec: function (e) {
                e.navigateLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectright",
            bindKey: o("Shift-Right", "Shift-Right"),
            exec: function (e) {
                e.getSelection().selectRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotoright",
            bindKey: o("Right", "Right|Ctrl-F"),
            exec: function (e, t) {
                e.navigateRight(t.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectpagedown",
            bindKey: "Shift-PageDown",
            exec: function (e) {
                e.selectPageDown()
            },
            readOnly: !0
        }, {
            name: "pagedown",
            bindKey: o(null, "Option-PageDown"),
            exec: function (e) {
                e.scrollPageDown()
            },
            readOnly: !0
        }, {
            name: "gotopagedown",
            bindKey: o("PageDown", "PageDown|Ctrl-V"),
            exec: function (e) {
                e.gotoPageDown()
            },
            readOnly: !0
        }, {
            name: "selectpageup",
            bindKey: "Shift-PageUp",
            exec: function (e) {
                e.selectPageUp()
            },
            readOnly: !0
        }, {
            name: "pageup",
            bindKey: o(null, "Option-PageUp"),
            exec: function (e) {
                e.scrollPageUp()
            },
            readOnly: !0
        }, {
            name: "gotopageup",
            bindKey: "PageUp",
            exec: function (e) {
                e.gotoPageUp()
            },
            readOnly: !0
        }, {
            name: "scrollup",
            bindKey: o("Ctrl-Up", null),
            exec: function (e) {
                e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
            },
            readOnly: !0
        }, {
            name: "scrolldown",
            bindKey: o("Ctrl-Down", null),
            exec: function (e) {
                e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
            },
            readOnly: !0
        }, {
            name: "selectlinestart",
            bindKey: "Shift-Home",
            exec: function (e) {
                e.getSelection().selectLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectlineend",
            bindKey: "Shift-End",
            exec: function (e) {
                e.getSelection().selectLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "togglerecording",
            bindKey: o("Ctrl-Alt-E", "Command-Option-E"),
            exec: function (e) {
                e.commands.toggleRecording(e)
            },
            readOnly: !0
        }, {
            name: "replaymacro",
            bindKey: o("Ctrl-Shift-E", "Command-Shift-E"),
            exec: function (e) {
                e.commands.replay(e)
            },
            readOnly: !0
        }, {
            name: "jumptomatching",
            bindKey: o("Ctrl-P", "Ctrl-P"),
            exec: function (e) {
                e.jumpToMatching()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "selecttomatching",
            bindKey: o("Ctrl-Shift-P", "Ctrl-Shift-P"),
            exec: function (e) {
                e.jumpToMatching(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "expandToMatching",
            bindKey: o("Ctrl-Shift-M", "Ctrl-Shift-M"),
            exec: function (e) {
                e.jumpToMatching(!0, !0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "passKeysToBrowser",
            bindKey: o(null, null),
            exec: function () { },
            passEvent: !0,
            readOnly: !0
        }, {
            name: "copy",
            exec: function (e) { },
            readOnly: !0
        }, {
            name: "cut",
            exec: function (e) {
                var t = e.getSelectionRange();
                e._emit("cut", t), e.selection.isEmpty() || (e.session.remove(t), e.clearSelection())
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "paste",
            exec: function (e, t) {
                e.$handlePaste(t)
            },
            scrollIntoView: "cursor"
        }, {
            name: "removeline",
            bindKey: o("Ctrl-D", "Command-D"),
            exec: function (e) {
                e.removeLines()
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEachLine"
        }, {
            name: "duplicateSelection",
            bindKey: o("Ctrl-Shift-D", "Command-Shift-D"),
            exec: function (e) {
                e.duplicateSelection()
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "sortlines",
            bindKey: o("Ctrl-Alt-S", "Command-Alt-S"),
            exec: function (e) {
                e.sortLines()
            },
            scrollIntoView: "selection",
            multiSelectAction: "forEachLine"
        }, {
            name: "togglecomment",
            bindKey: o("Ctrl-/", "Command-/"),
            exec: function (e) {
                e.toggleCommentLines()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "toggleBlockComment",
            bindKey: o("Ctrl-Shift-/", "Command-Shift-/"),
            exec: function (e) {
                e.toggleBlockComment()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "modifyNumberUp",
            bindKey: o("Ctrl-Shift-Up", "Alt-Shift-Up"),
            exec: function (e) {
                e.modifyNumber(1)
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "modifyNumberDown",
            bindKey: o("Ctrl-Shift-Down", "Alt-Shift-Down"),
            exec: function (e) {
                e.modifyNumber(-1)
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "replace",
            bindKey: o("Ctrl-H", "Command-Option-F"),
            exec: function (e) {
                r.loadModule("ace/ext/searchbox", (function (t) {
                    t.Search(e, !0)
                }))
            }
        }, {
            name: "undo",
            bindKey: o("Ctrl-Z", "Command-Z"),
            exec: function (e) {
                e.undo()
            }
        }, {
            name: "redo",
            bindKey: o("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
            exec: function (e) {
                e.redo()
            }
        }, {
            name: "copylinesup",
            bindKey: o("Alt-Shift-Up", "Command-Option-Up"),
            exec: function (e) {
                e.copyLinesUp()
            },
            scrollIntoView: "cursor"
        }, {
            name: "movelinesup",
            bindKey: o("Alt-Up", "Option-Up"),
            exec: function (e) {
                e.moveLinesUp()
            },
            scrollIntoView: "cursor"
        }, {
            name: "copylinesdown",
            bindKey: o("Alt-Shift-Down", "Command-Option-Down"),
            exec: function (e) {
                e.copyLinesDown()
            },
            scrollIntoView: "cursor"
        }, {
            name: "movelinesdown",
            bindKey: o("Alt-Down", "Option-Down"),
            exec: function (e) {
                e.moveLinesDown()
            },
            scrollIntoView: "cursor"
        }, {
            name: "del",
            bindKey: o("Delete", "Delete|Ctrl-D|Shift-Delete"),
            exec: function (e) {
                e.remove("right")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "backspace",
            bindKey: o("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
            exec: function (e) {
                e.remove("left")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "cut_or_delete",
            bindKey: o("Shift-Delete", null),
            exec: function (e) {
                if (!e.selection.isEmpty()) return !1;
                e.remove("left")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolinestart",
            bindKey: o("Alt-Backspace", "Command-Backspace"),
            exec: function (e) {
                e.removeToLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolineend",
            bindKey: o("Alt-Delete", "Ctrl-K|Command-Delete"),
            exec: function (e) {
                e.removeToLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolinestarthard",
            bindKey: o("Ctrl-Shift-Backspace", null),
            exec: function (e) {
                var t = e.selection.getRange();
                t.start.column = 0, e.session.remove(t)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolineendhard",
            bindKey: o("Ctrl-Shift-Delete", null),
            exec: function (e) {
                var t = e.selection.getRange();
                t.end.column = Number.MAX_VALUE, e.session.remove(t)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removewordleft",
            bindKey: o("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
            exec: function (e) {
                e.removeWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removewordright",
            bindKey: o("Ctrl-Delete", "Alt-Delete"),
            exec: function (e) {
                e.removeWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "outdent",
            bindKey: o("Shift-Tab", "Shift-Tab"),
            exec: function (e) {
                e.blockOutdent()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "indent",
            bindKey: o("Tab", "Tab"),
            exec: function (e) {
                e.indent()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "blockoutdent",
            bindKey: o("Ctrl-[", "Ctrl-["),
            exec: function (e) {
                e.blockOutdent()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "blockindent",
            bindKey: o("Ctrl-]", "Ctrl-]"),
            exec: function (e) {
                e.blockIndent()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "insertstring",
            exec: function (e, t) {
                e.insert(t)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "inserttext",
            exec: function (e, t) {
                e.insert(n.stringRepeat(t.text || "", t.times || 1))
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "splitline",
            bindKey: o(null, "Ctrl-O"),
            exec: function (e) {
                e.splitLine()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "transposeletters",
            bindKey: o("Alt-Shift-X", "Ctrl-T"),
            exec: function (e) {
                e.transposeLetters()
            },
            multiSelectAction: function (e) {
                e.transposeSelections(1)
            },
            scrollIntoView: "cursor"
        }, {
            name: "touppercase",
            bindKey: o("Ctrl-U", "Ctrl-U"),
            exec: function (e) {
                e.toUpperCase()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "tolowercase",
            bindKey: o("Ctrl-Shift-U", "Ctrl-Shift-U"),
            exec: function (e) {
                e.toLowerCase()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "expandtoline",
            bindKey: o("Ctrl-Shift-L", "Command-Shift-L"),
            exec: function (e) {
                var t = e.selection.getRange();
                t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "joinlines",
            bindKey: o(null, null),
            exec: function (e) {
                for (var t = e.selection.isBackwards(), i = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), r = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), o = e.session.doc.getLine(i.row).length, a = e.session.doc.getTextRange(e.selection.getRange()).replace(/\n\s*/, " ").length, l = e.session.doc.getLine(i.row), c = i.row + 1; c <= r.row + 1; c++) {
                    var h = n.stringTrimLeft(n.stringTrimRight(e.session.doc.getLine(c)));
                    0 !== h.length && (h = " " + h), l += h
                }
                r.row + 1 < e.session.doc.getLength() - 1 && (l += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new s(i.row, 0, r.row + 2, 0), l), a > 0 ? (e.selection.moveCursorTo(i.row, i.column), e.selection.selectTo(i.row, i.column + a)) : (o = e.session.doc.getLine(i.row).length > o ? o + 1 : o, e.selection.moveCursorTo(i.row, o))
            },
            multiSelectAction: "forEach",
            readOnly: !0
        }, {
            name: "invertSelection",
            bindKey: o(null, null),
            exec: function (e) {
                var t = e.session.doc.getLength() - 1,
                    i = e.session.doc.getLine(t).length,
                    n = e.selection.rangeList.ranges,
                    r = [];
                n.length < 1 && (n = [e.selection.getRange()]);
                for (var o = 0; o < n.length; o++) o == n.length - 1 && (n[o].end.row === t && n[o].end.column === i || r.push(new s(n[o].end.row, n[o].end.column, t, i))), 0 === o ? 0 === n[o].start.row && 0 === n[o].start.column || r.push(new s(0, 0, n[o].start.row, n[o].start.column)) : r.push(new s(n[o - 1].end.row, n[o - 1].end.column, n[o].start.row, n[o].start.column));
                e.exitMultiSelectMode(), e.clearSelection();
                for (o = 0; o < r.length; o++) e.selection.addRange(r[o], !1)
            },
            readOnly: !0,
            scrollIntoView: "none"
        }]
    })), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator"], (function (e, t, i) {
        "use strict";
        e("./lib/fixoldbrowsers");
        var n = e("./lib/oop"),
            r = e("./lib/dom"),
            s = e("./lib/lang"),
            o = e("./lib/useragent"),
            a = e("./keyboard/textinput").TextInput,
            l = e("./mouse/mouse_handler").MouseHandler,
            c = e("./mouse/fold_handler").FoldHandler,
            h = e("./keyboard/keybinding").KeyBinding,
            u = e("./edit_session").EditSession,
            d = e("./search").Search,
            g = e("./range").Range,
            f = e("./lib/event_emitter").EventEmitter,
            p = e("./commands/command_manager").CommandManager,
            m = e("./commands/default_commands").commands,
            w = e("./config"),
            A = e("./token_iterator").TokenIterator,
            v = function (e, t) {
                var i = e.getContainerElement();
                this.container = i, this.renderer = e, this.id = "editor" + ++v.$uid, this.commands = new p(o.isMac ? "mac" : "win", m), "object" == typeof document && (this.textInput = new a(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new l(this), new c(this)), this.keyBinding = new h(this), this.$blockScrolling = 0, this.$search = (new d).set({
                    wrap: !0
                }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = s.delayedCall(function () {
                    this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
                }.bind(this)), this.on("change", (function (e, t) {
                    t._$emitInputEvent.schedule(31)
                })), this.setSession(t || new u("")), w.resetOptions(this), w._signal("editor", this)
            };
        v.$uid = 0,
            function () {
                n.implement(this, f), this.$initOperationListeners = function () {
                    this.selections = [], this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = s.delayedCall(this.endOperation.bind(this)), this.on("change", function () {
                        this.curOp || this.startOperation(), this.curOp.docChanged = !0
                    }.bind(this), !0), this.on("changeSelection", function () {
                        this.curOp || this.startOperation(), this.curOp.selectionChanged = !0
                    }.bind(this), !0)
                }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
                    if (this.curOp) {
                        if (!e || this.curOp.command) return;
                        this.prevOp = this.curOp
                    }
                    e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = {
                        command: e.command || {},
                        args: e.args,
                        scrollTop: this.renderer.scrollTop
                    }, this.curOp.command.name && void 0 !== this.curOp.command.scrollIntoView && this.$blockScrolling++
                }, this.endOperation = function (e) {
                    if (this.curOp) {
                        if (e && !1 === e.returnValue) return this.curOp = null;
                        this._signal("beforeEndOperation");
                        var t = this.curOp.command;
                        t.name && this.$blockScrolling > 0 && this.$blockScrolling--;
                        var i = t && t.scrollIntoView;
                        if (i) {
                            switch (i) {
                                case "center-animate":
                                    i = "animate";
                                case "center":
                                    this.renderer.scrollCursorIntoView(null, .5);
                                    break;
                                case "animate":
                                case "cursor":
                                    this.renderer.scrollCursorIntoView();
                                    break;
                                case "selectionPart":
                                    var n = this.selection.getRange(),
                                        r = this.renderer.layerConfig;
                                    (n.start.row >= r.lastRow || n.end.row <= r.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                            }
                            "animate" == i && this.renderer.animateScrolling(this.curOp.scrollTop)
                        }
                        this.prevOp = this.curOp, this.curOp = null
                    }
                }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
                    if (this.$mergeUndoDeltas) {
                        var t = this.prevOp,
                            i = this.$mergeableCommands,
                            n = t.command && e.command.name == t.command.name;
                        if ("insertstring" == e.command.name) {
                            var r = e.args;
                            void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), n = n && this.mergeNextCommand && (!/\s/.test(r) || /\s/.test(t.args)), this.mergeNextCommand = !0
                        } else n = n && -1 !== i.indexOf(e.command.name);
                        "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (n = !1), n ? this.session.mergeUndoDeltas = !0 : -1 !== i.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
                    }
                }, this.setKeyboardHandler = function (e, t) {
                    if (e && "string" == typeof e) {
                        this.$keybindingId = e;
                        var i = this;
                        w.loadModule(["keybinding", e], (function (n) {
                            i.$keybindingId == e && i.keyBinding.setKeyboardHandler(n && n.handler), t && t()
                        }))
                    } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
                }, this.getKeyboardHandler = function () {
                    return this.keyBinding.getKeyboardHandler()
                }, this.setSession = function (e) {
                    if (this.session != e) {
                        this.curOp && this.endOperation(), this.curOp = {};
                        var t = this.session;
                        if (t) {
                            this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                            var i = this.session.getSelection();
                            i.off("changeCursor", this.$onCursorChange), i.off("changeSelection", this.$onSelectionChange)
                        }
                        this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.$blockScrolling += 1, this.onCursorChange(), this.$blockScrolling -= 1, this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
                            session: e,
                            oldSession: t
                        }), this.curOp = null, t && t._signal("changeEditor", {
                            oldEditor: this
                        }), e && e._signal("changeEditor", {
                            editor: this
                        }), e && e.bgTokenizer && e.bgTokenizer.scheduleStart()
                    }
                }, this.getSession = function () {
                    return this.session
                }, this.setValue = function (e, t) {
                    return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
                }, this.getValue = function () {
                    return this.session.getValue()
                }, this.getSelection = function () {
                    return this.selection
                }, this.resize = function (e) {
                    this.renderer.onResize(e)
                }, this.setTheme = function (e, t) {
                    this.renderer.setTheme(e, t)
                }, this.getTheme = function () {
                    return this.renderer.getTheme()
                }, this.setStyle = function (e) {
                    this.renderer.setStyle(e)
                }, this.unsetStyle = function (e) {
                    this.renderer.unsetStyle(e)
                }, this.getFontSize = function () {
                    return this.getOption("fontSize") || r.computedStyle(this.container, "fontSize")
                }, this.setFontSize = function (e) {
                    this.setOption("fontSize", e)
                }, this.$highlightBrackets = function () {
                    if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
                        var e = this;
                        this.$highlightPending = !0, setTimeout((function () {
                            e.$highlightPending = !1;
                            var t = e.session;
                            if (t && t.bgTokenizer) {
                                var i = t.findMatchingBracket(e.getCursorPosition());
                                if (i) var n = new g(i.row, i.column, i.row, i.column + 1);
                                else if (t.$mode.getMatching) n = t.$mode.getMatching(e.session);
                                n && (t.$bracketHighlight = t.addMarker(n, "ace_bracket", "text"))
                            }
                        }), 50)
                    }
                }, this.$highlightTags = function () {
                    if (!this.$highlightTagPending) {
                        var e = this;
                        this.$highlightTagPending = !0, setTimeout((function () {
                            e.$highlightTagPending = !1;
                            var t = e.session;
                            if (t && t.bgTokenizer) {
                                var i = e.getCursorPosition(),
                                    n = new A(e.session, i.row, i.column),
                                    r = n.getCurrentToken();
                                if (!r || !/\b(?:tag-open|tag-name)/.test(r.type)) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                                if (-1 == r.type.indexOf("tag-open") || (r = n.stepForward())) {
                                    var s = r.value,
                                        o = 0,
                                        a = n.stepBackward();
                                    if ("<" == a.value)
                                        do {
                                            a = r, (r = n.stepForward()) && r.value === s && -1 !== r.type.indexOf("tag-name") && ("<" === a.value ? o++ : "</" === a.value && o--)
                                        } while (r && o >= 0);
                                    else {
                                        do {
                                            r = a, a = n.stepBackward(), r && r.value === s && -1 !== r.type.indexOf("tag-name") && ("<" === a.value ? o++ : "</" === a.value && o--)
                                        } while (a && o <= 0);
                                        n.stepForward()
                                    }
                                    if (!r) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                                    var l = n.getCurrentTokenRow(),
                                        c = n.getCurrentTokenColumn(),
                                        h = new g(l, c, l, c + r.value.length),
                                        u = t.$backMarkers[t.$tagHighlight];
                                    t.$tagHighlight && null != u && 0 !== h.compareRange(u.range) && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), h && !t.$tagHighlight && (t.$tagHighlight = t.addMarker(h, "ace_bracket", "text"))
                                }
                            }
                        }), 50)
                    }
                }, this.focus = function () {
                    var e = this;
                    setTimeout((function () {
                        e.textInput.focus()
                    })), this.textInput.focus()
                }, this.isFocused = function () {
                    return this.textInput.isFocused()
                }, this.blur = function () {
                    this.textInput.blur()
                }, this.onFocus = function (e) {
                    this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
                }, this.onBlur = function (e) {
                    this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
                }, this.$cursorChange = function () {
                    this.renderer.updateCursor()
                }, this.onDocumentChange = function (e) {
                    var t = this.session.$useWrapMode,
                        i = e.start.row == e.end.row ? e.end.row : 1 / 0;
                    this.renderer.updateLines(e.start.row, i, t), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
                }, this.onTokenizerUpdate = function (e) {
                    var t = e.data;
                    this.renderer.updateLines(t.first, t.last)
                }, this.onScrollTopChange = function () {
                    this.renderer.scrollToY(this.session.getScrollTop())
                }, this.onScrollLeftChange = function () {
                    this.renderer.scrollToX(this.session.getScrollLeft())
                }, this.onCursorChange = function () {
                    this.$cursorChange(), this.$blockScrolling || (w.warn("Automatically scrolling cursor into view after selection change", "this will be disabled in the next version", "set editor.$blockScrolling = Infinity to disable this message"), this.renderer.scrollCursorIntoView()), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
                }, this.$updateHighlightActiveLine = function () {
                    var e, t = this.getSession();
                    if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), !this.renderer.$maxLines || 1 !== this.session.getLength() || this.renderer.$minLines > 1 || (e = !1)), t.$highlightLineMarker && !e) t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null;
                    else if (!t.$highlightLineMarker && e) {
                        var i = new g(e.row, e.column, e.row, 1 / 0);
                        i.id = t.addMarker(i, "ace_active-line", "screenLine"), t.$highlightLineMarker = i
                    } else e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
                }, this.onSelectionChange = function (e) {
                    var t = this.session;
                    if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine();
                    else {
                        var i = this.selection.getRange(),
                            n = this.getSelectionStyle();
                        t.$selectionMarker = t.addMarker(i, "ace_selection", n)
                    }
                    var r = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
                    this.session.highlight(r), this._signal("changeSelection")
                }, this.$getSelectionHighLightRegexp = function () {
                    var e = this.session,
                        t = this.getSelectionRange();
                    if (!t.isEmpty() && !t.isMultiLine()) {
                        var i = t.start.column - 1,
                            n = t.end.column + 1,
                            r = e.getLine(t.start.row),
                            s = r.length,
                            o = r.substring(Math.max(i, 0), Math.min(n, s));
                        if (!(i >= 0 && /^[\w\d]/.test(o) || n <= s && /[\w\d]$/.test(o)))
                            if (o = r.substring(t.start.column, t.end.column), /^[\w\d]+$/.test(o)) return this.$search.$assembleRegExp({
                                wholeWord: !0,
                                caseSensitive: !0,
                                needle: o
                            })
                    }
                }, this.onChangeFrontMarker = function () {
                    this.renderer.updateFrontMarkers()
                }, this.onChangeBackMarker = function () {
                    this.renderer.updateBackMarkers()
                }, this.onChangeBreakpoint = function () {
                    this.renderer.updateBreakpoints()
                }, this.onChangeAnnotation = function () {
                    this.renderer.setAnnotations(this.session.getAnnotations())
                }, this.onChangeMode = function (e) {
                    this.renderer.updateText(), this._emit("changeMode", e)
                }, this.onChangeWrapLimit = function () {
                    this.renderer.updateFull()
                }, this.onChangeWrapMode = function () {
                    this.renderer.onResize(!0)
                }, this.onChangeFold = function () {
                    this.$updateHighlightActiveLine(), this.renderer.updateFull()
                }, this.getSelectedText = function () {
                    return this.session.getTextRange(this.getSelectionRange())
                }, this.getCopyText = function () {
                    var e = this.getSelectedText();
                    return this._signal("copy", e), e
                }, this.onCopy = function () {
                    this.commands.exec("copy", this)
                }, this.onCut = function () {
                    this.commands.exec("cut", this)
                }, this.onPaste = function (e, t) {
                    var i = {
                        text: e,
                        event: t
                    };
                    this.commands.exec("paste", this, i)
                }, this.$handlePaste = function (e) {
                    "string" == typeof e && (e = {
                        text: e
                    }), this._signal("paste", e);
                    var t = e.text;
                    if (!this.inMultiSelectMode || this.inVirtualSelectionMode) this.insert(t);
                    else {
                        var i = t.split(/\r\n|\r|\n/),
                            n = this.selection.rangeList.ranges;
                        if (i.length > n.length || i.length < 2 || !i[1]) return this.commands.exec("insertstring", this, t);
                        for (var r = n.length; r--;) {
                            var s = n[r];
                            s.isEmpty() || this.session.remove(s), this.session.insert(s.start, i[r])
                        }
                    }
                }, this.execCommand = function (e, t) {
                    return this.commands.exec(e, this, t)
                }, this.insert = function (e, t) {
                    var i = this.session,
                        n = i.getMode(),
                        r = this.getCursorPosition();
                    if (this.getBehavioursEnabled() && !t) {
                        var s = n.transformAction(i.getState(r.row), "insertion", this, i, e);
                        s && (e !== s.text && (this.session.mergeUndoDeltas = !1, this.$mergeNextCommand = !1), e = s.text)
                    }
                    if ("\t" == e && (e = this.session.getTabString()), this.selection.isEmpty()) {
                        if (this.session.getOverwrite() && -1 == e.indexOf("\n")) {
                            (o = new g.fromPoints(r, r)).end.column += e.length, this.session.remove(o)
                        }
                    } else {
                        var o = this.getSelectionRange();
                        r = this.session.remove(o), this.clearSelection()
                    }
                    if ("\n" == e || "\r\n" == e) {
                        var a = i.getLine(r.row);
                        if (r.column > a.search(/\S|$/)) {
                            var l = a.substr(r.column).search(/\S|$/);
                            i.doc.removeInLine(r.row, r.column, r.column + l)
                        }
                    }
                    this.clearSelection();
                    var c = r.column,
                        h = i.getState(r.row),
                        u = (a = i.getLine(r.row), n.checkOutdent(h, a, e));
                    i.insert(r, e);
                    if (s && s.selection && (2 == s.selection.length ? this.selection.setSelectionRange(new g(r.row, c + s.selection[0], r.row, c + s.selection[1])) : this.selection.setSelectionRange(new g(r.row + s.selection[0], s.selection[1], r.row + s.selection[2], s.selection[3]))), i.getDocument().isNewLine(e)) {
                        var d = n.getNextLineIndent(h, a.slice(0, r.column), i.getTabString());
                        i.insert({
                            row: r.row + 1,
                            column: 0
                        }, d)
                    }
                    u && n.autoOutdent(h, i, r.row)
                }, this.onTextInput = function (e) {
                    this.keyBinding.onTextInput(e)
                }, this.onCommandKey = function (e, t, i) {
                    this.keyBinding.onCommandKey(e, t, i)
                }, this.setOverwrite = function (e) {
                    this.session.setOverwrite(e)
                }, this.getOverwrite = function () {
                    return this.session.getOverwrite()
                }, this.toggleOverwrite = function () {
                    this.session.toggleOverwrite()
                }, this.setScrollSpeed = function (e) {
                    this.setOption("scrollSpeed", e)
                }, this.getScrollSpeed = function () {
                    return this.getOption("scrollSpeed")
                }, this.setDragDelay = function (e) {
                    this.setOption("dragDelay", e)
                }, this.getDragDelay = function () {
                    return this.getOption("dragDelay")
                }, this.setSelectionStyle = function (e) {
                    this.setOption("selectionStyle", e)
                }, this.getSelectionStyle = function () {
                    return this.getOption("selectionStyle")
                }, this.setHighlightActiveLine = function (e) {
                    this.setOption("highlightActiveLine", e)
                }, this.getHighlightActiveLine = function () {
                    return this.getOption("highlightActiveLine")
                }, this.setHighlightGutterLine = function (e) {
                    this.setOption("highlightGutterLine", e)
                }, this.getHighlightGutterLine = function () {
                    return this.getOption("highlightGutterLine")
                }, this.setHighlightSelectedWord = function (e) {
                    this.setOption("highlightSelectedWord", e)
                }, this.getHighlightSelectedWord = function () {
                    return this.$highlightSelectedWord
                }, this.setAnimatedScroll = function (e) {
                    this.renderer.setAnimatedScroll(e)
                }, this.getAnimatedScroll = function () {
                    return this.renderer.getAnimatedScroll()
                }, this.setShowInvisibles = function (e) {
                    this.renderer.setShowInvisibles(e)
                }, this.getShowInvisibles = function () {
                    return this.renderer.getShowInvisibles()
                }, this.setDisplayIndentGuides = function (e) {
                    this.renderer.setDisplayIndentGuides(e)
                }, this.getDisplayIndentGuides = function () {
                    return this.renderer.getDisplayIndentGuides()
                }, this.setShowPrintMargin = function (e) {
                    this.renderer.setShowPrintMargin(e)
                }, this.getShowPrintMargin = function () {
                    return this.renderer.getShowPrintMargin()
                }, this.setPrintMarginColumn = function (e) {
                    this.renderer.setPrintMarginColumn(e)
                }, this.getPrintMarginColumn = function () {
                    return this.renderer.getPrintMarginColumn()
                }, this.setReadOnly = function (e) {
                    this.setOption("readOnly", e)
                }, this.getReadOnly = function () {
                    return this.getOption("readOnly")
                }, this.setBehavioursEnabled = function (e) {
                    this.setOption("behavioursEnabled", e)
                }, this.getBehavioursEnabled = function () {
                    return this.getOption("behavioursEnabled")
                }, this.setWrapBehavioursEnabled = function (e) {
                    this.setOption("wrapBehavioursEnabled", e)
                }, this.getWrapBehavioursEnabled = function () {
                    return this.getOption("wrapBehavioursEnabled")
                }, this.setShowFoldWidgets = function (e) {
                    this.setOption("showFoldWidgets", e)
                }, this.getShowFoldWidgets = function () {
                    return this.getOption("showFoldWidgets")
                }, this.setFadeFoldWidgets = function (e) {
                    this.setOption("fadeFoldWidgets", e)
                }, this.getFadeFoldWidgets = function () {
                    return this.getOption("fadeFoldWidgets")
                }, this.remove = function (e) {
                    this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
                    var t = this.getSelectionRange();
                    if (this.getBehavioursEnabled()) {
                        var i = this.session,
                            n = i.getState(t.start.row),
                            r = i.getMode().transformAction(n, "deletion", this, i, t);
                        if (0 === t.end.column) {
                            var s = i.getTextRange(t);
                            if ("\n" == s[s.length - 1]) {
                                var o = i.getLine(t.end.row);
                                /^\s+$/.test(o) && (t.end.column = o.length)
                            }
                        }
                        r && (t = r)
                    }
                    this.session.remove(t), this.clearSelection()
                }, this.removeWordRight = function () {
                    this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                }, this.removeWordLeft = function () {
                    this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                }, this.removeToLineStart = function () {
                    this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                }, this.removeToLineEnd = function () {
                    this.selection.isEmpty() && this.selection.selectLineEnd();
                    var e = this.getSelectionRange();
                    e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
                }, this.splitLine = function () {
                    this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
                    var e = this.getCursorPosition();
                    this.insert("\n"), this.moveCursorToPosition(e)
                }, this.transposeLetters = function () {
                    if (this.selection.isEmpty()) {
                        var e = this.getCursorPosition(),
                            t = e.column;
                        if (0 !== t) {
                            var i, n, r = this.session.getLine(e.row);
                            t < r.length ? (i = r.charAt(t) + r.charAt(t - 1), n = new g(e.row, t - 1, e.row, t + 1)) : (i = r.charAt(t - 1) + r.charAt(t - 2), n = new g(e.row, t - 2, e.row, t)), this.session.replace(n, i), this.session.selection.moveToPosition(n.end)
                        }
                    }
                }, this.toLowerCase = function () {
                    var e = this.getSelectionRange();
                    this.selection.isEmpty() && this.selection.selectWord();
                    var t = this.getSelectionRange(),
                        i = this.session.getTextRange(t);
                    this.session.replace(t, i.toLowerCase()), this.selection.setSelectionRange(e)
                }, this.toUpperCase = function () {
                    var e = this.getSelectionRange();
                    this.selection.isEmpty() && this.selection.selectWord();
                    var t = this.getSelectionRange(),
                        i = this.session.getTextRange(t);
                    this.session.replace(t, i.toUpperCase()), this.selection.setSelectionRange(e)
                }, this.indent = function () {
                    var e = this.session,
                        t = this.getSelectionRange();
                    if (!(t.start.row < t.end.row)) {
                        if (t.start.column < t.end.column) {
                            var i = e.getTextRange(t);
                            if (!/^\s+$/.test(i)) {
                                h = this.$getSelectedRows();
                                return void e.indentRows(h.first, h.last, "\t")
                            }
                        }
                        var n = e.getLine(t.start.row),
                            r = t.start,
                            o = e.getTabSize(),
                            a = e.documentToScreenColumn(r.row, r.column);
                        if (this.session.getUseSoftTabs()) var l = o - a % o,
                            c = s.stringRepeat(" ", l);
                        else {
                            for (l = a % o;
                                " " == n[t.start.column - 1] && l;) t.start.column--, l--;
                            this.selection.setSelectionRange(t), c = "\t"
                        }
                        return this.insert(c)
                    }
                    var h = this.$getSelectedRows();
                    e.indentRows(h.first, h.last, "\t")
                }, this.blockIndent = function () {
                    var e = this.$getSelectedRows();
                    this.session.indentRows(e.first, e.last, "\t")
                }, this.blockOutdent = function () {
                    var e = this.session.getSelection();
                    this.session.outdentRows(e.getRange())
                }, this.sortLines = function () {
                    for (var e = this.$getSelectedRows(), t = this.session, i = [], n = e.first; n <= e.last; n++) i.push(t.getLine(n));
                    i.sort((function (e, t) {
                        return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
                    }));
                    var r = new g(0, 0, 0, 0);
                    for (n = e.first; n <= e.last; n++) {
                        var s = t.getLine(n);
                        r.start.row = n, r.end.row = n, r.end.column = s.length, t.replace(r, i[n - e.first])
                    }
                }, this.toggleCommentLines = function () {
                    var e = this.session.getState(this.getCursorPosition().row),
                        t = this.$getSelectedRows();
                    this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
                }, this.toggleBlockComment = function () {
                    var e = this.getCursorPosition(),
                        t = this.session.getState(e.row),
                        i = this.getSelectionRange();
                    this.session.getMode().toggleBlockComment(t, this.session, i, e)
                }, this.getNumberAt = function (e, t) {
                    var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                    i.lastIndex = 0;
                    for (var n = this.session.getLine(e); i.lastIndex < t;) {
                        var r = i.exec(n);
                        if (r.index <= t && r.index + r[0].length >= t) return {
                            value: r[0],
                            start: r.index,
                            end: r.index + r[0].length
                        }
                    }
                    return null
                }, this.modifyNumber = function (e) {
                    var t = this.selection.getCursor().row,
                        i = this.selection.getCursor().column,
                        n = new g(t, i - 1, t, i),
                        r = this.session.getTextRange(n);
                    if (!isNaN(parseFloat(r)) && isFinite(r)) {
                        var s = this.getNumberAt(t, i);
                        if (s) {
                            var o = s.value.indexOf(".") >= 0 ? s.start + s.value.indexOf(".") + 1 : s.end,
                                a = s.start + s.value.length - o,
                                l = parseFloat(s.value);
                            l *= Math.pow(10, a), o !== s.end && i < o ? e *= Math.pow(10, s.end - i - 1) : e *= Math.pow(10, s.end - i), l += e;
                            var c = (l /= Math.pow(10, a)).toFixed(a),
                                h = new g(t, s.start, t, s.end);
                            this.session.replace(h, c), this.moveCursorTo(t, Math.max(s.start + 1, i + c.length - s.value.length))
                        }
                    }
                }, this.removeLines = function () {
                    var e = this.$getSelectedRows();
                    this.session.removeFullLines(e.first, e.last), this.clearSelection()
                }, this.duplicateSelection = function () {
                    var e = this.selection,
                        t = this.session,
                        i = e.getRange(),
                        n = e.isBackwards();
                    if (i.isEmpty()) {
                        var r = i.start.row;
                        t.duplicateLines(r, r)
                    } else {
                        var s = n ? i.start : i.end,
                            o = t.insert(s, t.getTextRange(i), !1);
                        i.start = s, i.end = o, e.setSelectionRange(i, n)
                    }
                }, this.moveLinesDown = function () {
                    this.$moveLines(1, !1)
                }, this.moveLinesUp = function () {
                    this.$moveLines(-1, !1)
                }, this.moveText = function (e, t, i) {
                    return this.session.moveText(e, t, i)
                }, this.copyLinesUp = function () {
                    this.$moveLines(-1, !0)
                }, this.copyLinesDown = function () {
                    this.$moveLines(1, !0)
                }, this.$moveLines = function (e, t) {
                    var i, n, r = this.selection;
                    if (!r.inMultiSelectMode || this.inVirtualSelectionMode) {
                        var s = r.toOrientedRange();
                        i = this.$getSelectedRows(s), n = this.session.$moveLines(i.first, i.last, t ? 0 : e), t && -1 == e && (n = 0), s.moveBy(n, 0), r.fromOrientedRange(s)
                    } else {
                        var o = r.rangeList.ranges;
                        r.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                        for (var a = 0, l = 0, c = o.length, h = 0; h < c; h++) {
                            var u = h;
                            o[h].moveBy(a, 0);
                            for (var d = (i = this.$getSelectedRows(o[h])).first, g = i.last; ++h < c;) {
                                l && o[h].moveBy(l, 0);
                                var f = this.$getSelectedRows(o[h]);
                                if (t && f.first != g) break;
                                if (!t && f.first > g + 1) break;
                                g = f.last
                            }
                            for (h--, a = this.session.$moveLines(d, g, t ? 0 : e), t && -1 == e && (u = h + 1); u <= h;) o[u].moveBy(a, 0), u++;
                            t || (a = 0), l += a
                        }
                        r.fromOrientedRange(r.ranges[0]), r.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
                    }
                }, this.$getSelectedRows = function (e) {
                    return e = (e || this.getSelectionRange()).collapseRows(), {
                        first: this.session.getRowFoldStart(e.start.row),
                        last: this.session.getRowFoldEnd(e.end.row)
                    }
                }, this.onCompositionStart = function (e) {
                    this.renderer.showComposition(this.getCursorPosition())
                }, this.onCompositionUpdate = function (e) {
                    this.renderer.setCompositionText(e)
                }, this.onCompositionEnd = function () {
                    this.renderer.hideComposition()
                }, this.getFirstVisibleRow = function () {
                    return this.renderer.getFirstVisibleRow()
                }, this.getLastVisibleRow = function () {
                    return this.renderer.getLastVisibleRow()
                }, this.isRowVisible = function (e) {
                    return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
                }, this.isRowFullyVisible = function (e) {
                    return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
                }, this.$getVisibleRowCount = function () {
                    return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
                }, this.$moveByPage = function (e, t) {
                    var i = this.renderer,
                        n = this.renderer.layerConfig,
                        r = e * Math.floor(n.height / n.lineHeight);
                    this.$blockScrolling++, !0 === t ? this.selection.$moveSelection((function () {
                        this.moveCursorBy(r, 0)
                    })) : !1 === t && (this.selection.moveCursorBy(r, 0), this.selection.clearSelection()), this.$blockScrolling--;
                    var s = i.scrollTop;
                    i.scrollBy(0, r * n.lineHeight), null != t && i.scrollCursorIntoView(null, .5), i.animateScrolling(s)
                }, this.selectPageDown = function () {
                    this.$moveByPage(1, !0)
                }, this.selectPageUp = function () {
                    this.$moveByPage(-1, !0)
                }, this.gotoPageDown = function () {
                    this.$moveByPage(1, !1)
                }, this.gotoPageUp = function () {
                    this.$moveByPage(-1, !1)
                }, this.scrollPageDown = function () {
                    this.$moveByPage(1)
                }, this.scrollPageUp = function () {
                    this.$moveByPage(-1)
                }, this.scrollToRow = function (e) {
                    this.renderer.scrollToRow(e)
                }, this.scrollToLine = function (e, t, i, n) {
                    this.renderer.scrollToLine(e, t, i, n)
                }, this.centerSelection = function () {
                    var e = this.getSelectionRange(),
                        t = {
                            row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                            column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
                        };
                    this.renderer.alignCursor(t, .5)
                }, this.getCursorPosition = function () {
                    return this.selection.getCursor()
                }, this.getCursorPositionScreen = function () {
                    return this.session.documentToScreenPosition(this.getCursorPosition())
                }, this.getSelectionRange = function () {
                    return this.selection.getRange()
                }, this.selectAll = function () {
                    this.$blockScrolling += 1, this.selection.selectAll(), this.$blockScrolling -= 1
                }, this.clearSelection = function () {
                    this.selection.clearSelection()
                }, this.moveCursorTo = function (e, t) {
                    this.selection.moveCursorTo(e, t)
                }, this.moveCursorToPosition = function (e) {
                    this.selection.moveCursorToPosition(e)
                }, this.jumpToMatching = function (e, t) {
                    var i = this.getCursorPosition(),
                        n = new A(this.session, i.row, i.column),
                        r = n.getCurrentToken(),
                        s = r || n.stepForward();
                    if (s) {
                        var o, a, l = !1,
                            c = {},
                            h = i.column - s.start,
                            u = {
                                ")": "(",
                                "(": "(",
                                "]": "[",
                                "[": "[",
                                "{": "{",
                                "}": "{"
                            };
                        do {
                            if (s.value.match(/[{}()\[\]]/g)) {
                                for (; h < s.value.length && !l; h++)
                                    if (u[s.value[h]]) switch (a = u[s.value[h]] + "." + s.type.replace("rparen", "lparen"), isNaN(c[a]) && (c[a] = 0), s.value[h]) {
                                        case "(":
                                        case "[":
                                        case "{":
                                            c[a]++;
                                            break;
                                        case ")":
                                        case "]":
                                        case "}":
                                            c[a]--, -1 === c[a] && (o = "bracket", l = !0)
                                    }
                            } else s && -1 !== s.type.indexOf("tag-name") && (isNaN(c[s.value]) && (c[s.value] = 0), "<" === r.value ? c[s.value]++ : "</" === r.value && c[s.value]--, -1 === c[s.value] && (o = "tag", l = !0));
                            l || (r = s, s = n.stepForward(), h = 0)
                        } while (s && !l);
                        if (o) {
                            var d, f;
                            if ("bracket" === o) (d = this.session.getBracketRange(i)) || (f = (d = new g(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1, n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1)).start, (t || f.row === i.row && Math.abs(f.column - i.column) < 2) && (d = this.session.getBracketRange(f)));
                            else if ("tag" === o) {
                                if (!s || -1 === s.type.indexOf("tag-name")) return;
                                var p = s.value;
                                if (0 === (d = new g(n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2, n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2)).compare(i.row, i.column)) {
                                    l = !1;
                                    do {
                                        s = r, (r = n.stepBackward()) && (-1 !== r.type.indexOf("tag-close") && d.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1), s.value === p && -1 !== s.type.indexOf("tag-name") && ("<" === r.value ? c[p]++ : "</" === r.value && c[p]--, 0 === c[p] && (l = !0)))
                                    } while (r && !l)
                                }
                                s && s.type.indexOf("tag-name") && (f = d.start).row == i.row && Math.abs(f.column - i.column) < 2 && (f = d.end)
                            } (f = d && d.cursor || f) && (e ? d && t ? this.selection.setRange(d) : d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(f.row, f.column) : this.selection.moveTo(f.row, f.column))
                        }
                    }
                }, this.gotoLine = function (e, t, i) {
                    this.selection.clearSelection(), this.session.unfold({
                        row: e - 1,
                        column: t || 0
                    }), this.$blockScrolling += 1, this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.$blockScrolling -= 1, this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, i)
                }, this.navigateTo = function (e, t) {
                    this.selection.moveTo(e, t)
                }, this.navigateUp = function (e) {
                    if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                        var t = this.selection.anchor.getPosition();
                        return this.moveCursorToPosition(t)
                    }
                    this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
                }, this.navigateDown = function (e) {
                    if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                        var t = this.selection.anchor.getPosition();
                        return this.moveCursorToPosition(t)
                    }
                    this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
                }, this.navigateLeft = function (e) {
                    if (this.selection.isEmpty())
                        for (e = e || 1; e--;) this.selection.moveCursorLeft();
                    else {
                        var t = this.getSelectionRange().start;
                        this.moveCursorToPosition(t)
                    }
                    this.clearSelection()
                }, this.navigateRight = function (e) {
                    if (this.selection.isEmpty())
                        for (e = e || 1; e--;) this.selection.moveCursorRight();
                    else {
                        var t = this.getSelectionRange().end;
                        this.moveCursorToPosition(t)
                    }
                    this.clearSelection()
                }, this.navigateLineStart = function () {
                    this.selection.moveCursorLineStart(), this.clearSelection()
                }, this.navigateLineEnd = function () {
                    this.selection.moveCursorLineEnd(), this.clearSelection()
                }, this.navigateFileEnd = function () {
                    this.selection.moveCursorFileEnd(), this.clearSelection()
                }, this.navigateFileStart = function () {
                    this.selection.moveCursorFileStart(), this.clearSelection()
                }, this.navigateWordRight = function () {
                    this.selection.moveCursorWordRight(), this.clearSelection()
                }, this.navigateWordLeft = function () {
                    this.selection.moveCursorWordLeft(), this.clearSelection()
                }, this.replace = function (e, t) {
                    t && this.$search.set(t);
                    var i = this.$search.find(this.session),
                        n = 0;
                    return i ? (this.$tryReplace(i, e) && (n = 1), null !== i && (this.selection.setSelectionRange(i), this.renderer.scrollSelectionIntoView(i.start, i.end)), n) : n
                }, this.replaceAll = function (e, t) {
                    t && this.$search.set(t);
                    var i = this.$search.findAll(this.session),
                        n = 0;
                    if (!i.length) return n;
                    this.$blockScrolling += 1;
                    var r = this.getSelectionRange();
                    this.selection.moveTo(0, 0);
                    for (var s = i.length - 1; s >= 0; --s) this.$tryReplace(i[s], e) && n++;
                    return this.selection.setSelectionRange(r), this.$blockScrolling -= 1, n
                }, this.$tryReplace = function (e, t) {
                    var i = this.session.getTextRange(e);
                    return null !== (t = this.$search.replace(i, t)) ? (e.end = this.session.replace(e, t), e) : null
                }, this.getLastSearchOptions = function () {
                    return this.$search.getOptions()
                }, this.find = function (e, t, i) {
                    t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && n.mixin(t, e);
                    var r = this.selection.getRange();
                    null == t.needle && ((e = this.session.getTextRange(r) || this.$search.$options.needle) || (r = this.session.getWordRange(r.start.row, r.start.column), e = this.session.getTextRange(r)), this.$search.set({
                        needle: e
                    })), this.$search.set(t), t.start || this.$search.set({
                        start: r
                    });
                    var s = this.$search.find(this.session);
                    return t.preventScroll ? s : s ? (this.revealRange(s, i), s) : (t.backwards ? r.start = r.end : r.end = r.start, void this.selection.setRange(r))
                }, this.findNext = function (e, t) {
                    this.find({
                        skipCurrent: !0,
                        backwards: !1
                    }, e, t)
                }, this.findPrevious = function (e, t) {
                    this.find(e, {
                        skipCurrent: !0,
                        backwards: !0
                    }, t)
                }, this.revealRange = function (e, t) {
                    this.$blockScrolling += 1, this.session.unfold(e), this.selection.setSelectionRange(e), this.$blockScrolling -= 1;
                    var i = this.renderer.scrollTop;
                    this.renderer.scrollSelectionIntoView(e.start, e.end, .5), !1 !== t && this.renderer.animateScrolling(i)
                }, this.undo = function () {
                    this.$blockScrolling++, this.session.getUndoManager().undo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
                }, this.redo = function () {
                    this.$blockScrolling++, this.session.getUndoManager().redo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
                }, this.destroy = function () {
                    this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
                }, this.setAutoScrollEditorIntoView = function (e) {
                    if (e) {
                        var t, i = this,
                            n = !1;
                        this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                        var r = this.$scrollAnchor;
                        r.style.cssText = "position:absolute", this.container.insertBefore(r, this.container.firstChild);
                        var s = this.on("changeSelection", (function () {
                            n = !0
                        })),
                            o = this.renderer.on("beforeRender", (function () {
                                n && (t = i.renderer.container.getBoundingClientRect())
                            })),
                            a = this.renderer.on("afterRender", (function () {
                                if (n && t && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
                                    var e = i.renderer,
                                        s = e.$cursorLayer.$pixelPos,
                                        o = e.layerConfig,
                                        a = s.top - o.offset;
                                    null != (n = s.top >= 0 && a + t.top < 0 || !(s.top < o.height && s.top + t.top + o.lineHeight > window.innerHeight) && null) && (r.style.top = a + "px", r.style.left = s.left + "px", r.style.height = o.lineHeight + "px", r.scrollIntoView(n)), n = t = null
                                }
                            }));
                        this.setAutoScrollEditorIntoView = function (e) {
                            e || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", s), this.renderer.off("afterRender", a), this.renderer.off("beforeRender", o))
                        }
                    }
                }, this.$resetCursorStyle = function () {
                    var e = this.$cursorStyle || "ace",
                        t = this.renderer.$cursorLayer;
                    t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, r.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
                }
            }.call(v.prototype), w.defineOptions(v.prototype, "editor", {
                selectionStyle: {
                    set: function (e) {
                        this.onSelectionChange(), this._signal("changeSelectionStyle", {
                            data: e
                        })
                    },
                    initialValue: "line"
                },
                highlightActiveLine: {
                    set: function () {
                        this.$updateHighlightActiveLine()
                    },
                    initialValue: !0
                },
                highlightSelectedWord: {
                    set: function (e) {
                        this.$onSelectionChange()
                    },
                    initialValue: !0
                },
                readOnly: {
                    set: function (e) {
                        this.$resetCursorStyle()
                    },
                    initialValue: !1
                },
                cursorStyle: {
                    set: function (e) {
                        this.$resetCursorStyle()
                    },
                    values: ["ace", "slim", "smooth", "wide"],
                    initialValue: "ace"
                },
                mergeUndoDeltas: {
                    values: [!1, !0, "always"],
                    initialValue: !0
                },
                behavioursEnabled: {
                    initialValue: !0
                },
                wrapBehavioursEnabled: {
                    initialValue: !0
                },
                autoScrollEditorIntoView: {
                    set: function (e) {
                        this.setAutoScrollEditorIntoView(e)
                    }
                },
                keyboardHandler: {
                    set: function (e) {
                        this.setKeyboardHandler(e)
                    },
                    get: function () {
                        return this.keybindingId
                    },
                    handlesSet: !0
                },
                hScrollBarAlwaysVisible: "renderer",
                vScrollBarAlwaysVisible: "renderer",
                highlightGutterLine: "renderer",
                animatedScroll: "renderer",
                showInvisibles: "renderer",
                showPrintMargin: "renderer",
                printMarginColumn: "renderer",
                printMargin: "renderer",
                fadeFoldWidgets: "renderer",
                showFoldWidgets: "renderer",
                showLineNumbers: "renderer",
                showGutter: "renderer",
                displayIndentGuides: "renderer",
                fontSize: "renderer",
                fontFamily: "renderer",
                maxLines: "renderer",
                minLines: "renderer",
                scrollPastEnd: "renderer",
                fixedWidthGutter: "renderer",
                theme: "renderer",
                scrollSpeed: "$mouseHandler",
                dragDelay: "$mouseHandler",
                dragEnabled: "$mouseHandler",
                focusTimout: "$mouseHandler",
                tooltipFollowsMouse: "$mouseHandler",
                firstLineNumber: "session",
                overwrite: "session",
                newLineMode: "session",
                useWorker: "session",
                useSoftTabs: "session",
                tabSize: "session",
                wrap: "session",
                indentedSoftWrap: "session",
                foldStyle: "session",
                mode: "session"
            }), t.Editor = v
    })), ace.define("ace/undomanager", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        var n = function () {
            this.reset()
        };
        (function () {
            function e(e) {
                return {
                    action: e.action,
                    start: e.start,
                    end: e.end,
                    lines: 1 == e.lines.length ? null : e.lines,
                    text: 1 == e.lines.length ? e.lines[0] : null
                }
            }

            function t(e) {
                return {
                    action: e.action,
                    start: e.start,
                    end: e.end,
                    lines: e.lines || [e.text]
                }
            }

            function i(e, t) {
                for (var i = new Array(e.length), n = 0; n < e.length; n++) {
                    for (var r = e[n], s = {
                        group: r.group,
                        deltas: new Array(r.length)
                    }, o = 0; o < r.deltas.length; o++) {
                        var a = r.deltas[o];
                        s.deltas[o] = t(a)
                    }
                    i[n] = s
                }
                return i
            }
            this.execute = function (e) {
                var t = e.args[0];
                this.$doc = e.args[1], e.merge && this.hasUndo() && (this.dirtyCounter--, t = this.$undoStack.pop().concat(t)), this.$undoStack.push(t), this.$redoStack = [], this.dirtyCounter < 0 && (this.dirtyCounter = NaN), this.dirtyCounter++
            }, this.undo = function (e) {
                var t = this.$undoStack.pop(),
                    i = null;
                return t && (i = this.$doc.undoChanges(t, e), this.$redoStack.push(t), this.dirtyCounter--), i
            }, this.redo = function (e) {
                var t = this.$redoStack.pop(),
                    i = null;
                return t && (i = this.$doc.redoChanges(this.$deserializeDeltas(t), e), this.$undoStack.push(t), this.dirtyCounter++), i
            }, this.reset = function () {
                this.$undoStack = [], this.$redoStack = [], this.dirtyCounter = 0
            }, this.hasUndo = function () {
                return this.$undoStack.length > 0
            }, this.hasRedo = function () {
                return this.$redoStack.length > 0
            }, this.markClean = function () {
                this.dirtyCounter = 0
            }, this.isClean = function () {
                return 0 === this.dirtyCounter
            }, this.$serializeDeltas = function (t) {
                return i(t, e)
            }, this.$deserializeDeltas = function (e) {
                return i(e, t)
            }
        }).call(n.prototype), t.UndoManager = n
    })), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/dom"),
            r = e("../lib/oop"),
            s = e("../lib/lang"),
            o = e("../lib/event_emitter").EventEmitter,
            a = function (e) {
                this.element = n.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$cells = []
            };
        (function () {
            r.implement(this, o), this.setSession = function (e) {
                this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
            }, this.addGutterDecoration = function (e, t) {
                window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
            }, this.removeGutterDecoration = function (e, t) {
                window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
            }, this.setAnnotations = function (e) {
                this.$annotations = [];
                for (var t = 0; t < e.length; t++) {
                    var i = e[t],
                        n = i.row,
                        r = this.$annotations[n];
                    r || (r = this.$annotations[n] = {
                        text: []
                    });
                    var o = i.text;
                    o = o ? s.escapeHTML(o) : i.html || "", -1 === r.text.indexOf(o) && r.text.push(o);
                    var a = i.type;
                    "error" == a ? r.className = " ace_error" : "warning" == a && " ace_error" != r.className ? r.className = " ace_warning" : "info" != a || r.className || (r.className = " ace_info")
                }
            }, this.$updateAnnotations = function (e) {
                if (this.$annotations.length) {
                    var t = e.start.row,
                        i = e.end.row - t;
                    if (0 === i);
                    else if ("remove" == e.action) this.$annotations.splice(t, i + 1, null);
                    else {
                        var n = new Array(i + 1);
                        n.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, n)
                    }
                }
            }, this.update = function (e) {
                for (var t = this.session, i = e.firstRow, r = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), s = t.getNextFoldLine(i), o = s ? s.start.row : 1 / 0, a = this.$showFoldWidgets && t.foldWidgets, l = t.$breakpoints, c = t.$decorations, h = t.$firstLineNumber, u = 0, d = t.gutterRenderer || this.$renderer, g = null, f = -1, p = i; ;) {
                    if (p > o && (p = s.end.row + 1, o = (s = t.getNextFoldLine(p, s)) ? s.start.row : 1 / 0), p > r) {
                        for (; this.$cells.length > f + 1;) g = this.$cells.pop(), this.element.removeChild(g.element);
                        break
                    } (g = this.$cells[++f]) || ((g = {
                        element: null,
                        textNode: null,
                        foldWidget: null
                    }).element = n.createElement("div"), g.textNode = document.createTextNode(""), g.element.appendChild(g.textNode), this.element.appendChild(g.element), this.$cells[f] = g);
                    var m = "ace_gutter-cell ";
                    if (l[p] && (m += l[p]), c[p] && (m += c[p]), this.$annotations[p] && (m += this.$annotations[p].className), g.element.className != m && (g.element.className = m), (A = t.getRowLength(p) * e.lineHeight + "px") != g.element.style.height && (g.element.style.height = A), a) {
                        var w = a[p];
                        null == w && (w = a[p] = t.getFoldWidget(p))
                    }
                    if (w) {
                        g.foldWidget || (g.foldWidget = n.createElement("span"), g.element.appendChild(g.foldWidget));
                        m = "ace_fold-widget ace_" + w;
                        "start" == w && p == o && p < s.end.row ? m += " ace_closed" : m += " ace_open", g.foldWidget.className != m && (g.foldWidget.className = m);
                        var A = e.lineHeight + "px";
                        g.foldWidget.style.height != A && (g.foldWidget.style.height = A)
                    } else g.foldWidget && (g.element.removeChild(g.foldWidget), g.foldWidget = null);
                    var v = u = d ? d.getText(t, p) : p + h;
                    v !== g.textNode.data && (g.textNode.data = v), p++
                }
                this.element.style.height = e.minHeight + "px", (this.$fixedWidth || t.$useWrapMode) && (u = t.getLength() + h);
                var b = d ? d.getWidth(t, u, e) : u.toString().length * e.characterWidth,
                    C = this.$padding || this.$computePadding();
                (b += C.left + C.right) === this.gutterWidth || isNaN(b) || (this.gutterWidth = b, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", b))
            }, this.$fixedWidth = !1, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
                this.$renderer = !e && {
                    getWidth: function () {
                        return ""
                    },
                    getText: function () {
                        return ""
                    }
                }
            }, this.getShowLineNumbers = function () {
                return this.$showLineNumbers
            }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
                e ? n.addCssClass(this.element, "ace_folding-enabled") : n.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
            }, this.getShowFoldWidgets = function () {
                return this.$showFoldWidgets
            }, this.$computePadding = function () {
                if (!this.element.firstChild) return {
                    left: 0,
                    right: 0
                };
                var e = n.computedStyle(this.element.firstChild);
                return this.$padding = {}, this.$padding.left = parseInt(e.paddingLeft) + 1 || 0, this.$padding.right = parseInt(e.paddingRight) || 0, this.$padding
            }, this.getRegion = function (e) {
                var t = this.$padding || this.$computePadding(),
                    i = this.element.getBoundingClientRect();
                return e.x < t.left + i.left ? "markers" : this.$showFoldWidgets && e.x > i.right - t.right ? "foldWidgets" : void 0
            }
        }).call(a.prototype), t.Gutter = a
    })), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], (function (e, t, i) {
        "use strict";
        var n = e("../range").Range,
            r = e("../lib/dom"),
            s = function (e) {
                this.element = r.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
            };
        (function () {
            this.$padding = 0, this.setPadding = function (e) {
                this.$padding = e
            }, this.setSession = function (e) {
                this.session = e
            }, this.setMarkers = function (e) {
                this.markers = e
            }, this.update = function (e) {
                if (e) {
                    this.config = e;
                    var t = [];
                    for (var i in this.markers) {
                        var n = this.markers[i];
                        if (n.range) {
                            var r = n.range.clipRows(e.firstRow, e.lastRow);
                            if (!r.isEmpty())
                                if (r = r.toScreenRange(this.session), n.renderer) {
                                    var s = this.$getTop(r.start.row, e),
                                        o = this.$padding + (this.session.$bidiHandler.isBidiRow(r.start.row) ? this.session.$bidiHandler.getPosLeft(r.start.column) : r.start.column * e.characterWidth);
                                    n.renderer(t, r, o, s, e)
                                } else "fullLine" == n.type ? this.drawFullLineMarker(t, r, n.clazz, e) : "screenLine" == n.type ? this.drawScreenLineMarker(t, r, n.clazz, e) : r.isMultiLine() ? "text" == n.type ? this.drawTextMarker(t, r, n.clazz, e) : this.drawMultiLineMarker(t, r, n.clazz, e) : this.session.$bidiHandler.isBidiRow(r.start.row) ? this.drawBidiSingleLineMarker(t, r, n.clazz + " ace_start ace_br15", e) : this.drawSingleLineMarker(t, r, n.clazz + " ace_start ace_br15", e)
                        } else n.update(t, this, this.session, e)
                    }
                    this.element.innerHTML = t.join("")
                }
            }, this.$getTop = function (e, t) {
                return (e - t.firstRowScreen) * t.lineHeight
            }, this.drawTextMarker = function (e, t, i, r, s) {
                for (var o = this.session, a = t.start.row, l = t.end.row, c = a, h = 0, u = 0, d = o.getScreenLastRowColumn(c), g = null, f = new n(c, t.start.column, c, u); c <= l; c++) f.start.row = f.end.row = c, f.start.column = c == a ? t.start.column : o.getRowWrapIndent(c), f.end.column = d, h = u, u = d, d = c + 1 < l ? o.getScreenLastRowColumn(c + 1) : c == l ? 0 : t.end.column, g = i + (c == a ? " ace_start" : "") + " ace_br" + ((c == a || c == a + 1 && t.start.column ? 1 : 0) | (h < u ? 2 : 0) | (u > d ? 4 : 0) | (c == l ? 8 : 0)), this.session.$bidiHandler.isBidiRow(c) ? this.drawBidiSingleLineMarker(e, f, g, r, c == l ? 0 : 1, s) : this.drawSingleLineMarker(e, f, g, r, c == l ? 0 : 1, s)
            }, this.drawMultiLineMarker = function (e, t, i, n, r) {
                var s, o, a, l = this.$padding;
                (r = r || "", this.session.$bidiHandler.isBidiRow(t.start.row)) ? ((c = t.clone()).end.row = c.start.row, c.end.column = this.session.getLine(c.start.row).length, this.drawBidiSingleLineMarker(e, c, i + " ace_br1 ace_start", n, null, r)) : (s = n.lineHeight, o = this.$getTop(t.start.row, n), a = l + t.start.column * n.characterWidth, e.push("<div class='", i, " ace_br1 ace_start' style='", "height:", s, "px;", "right:0;", "top:", o, "px;", "left:", a, "px;", r, "'></div>"));
                if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
                    var c;
                    (c = t.clone()).start.row = c.end.row, c.start.column = 0, this.drawBidiSingleLineMarker(e, c, i + " ace_br12", n, null, r)
                } else {
                    var h = t.end.column * n.characterWidth;
                    s = n.lineHeight, o = this.$getTop(t.end.row, n), e.push("<div class='", i, " ace_br12' style='", "height:", s, "px;", "width:", h, "px;", "top:", o, "px;", "left:", l, "px;", r, "'></div>")
                }
                if (!((s = (t.end.row - t.start.row - 1) * n.lineHeight) <= 0)) {
                    o = this.$getTop(t.start.row + 1, n);
                    var u = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                    e.push("<div class='", i, u ? " ace_br" + u : "", "' style='", "height:", s, "px;", "right:0;", "top:", o, "px;", "left:", l, "px;", r, "'></div>")
                }
            }, this.drawSingleLineMarker = function (e, t, i, n, r, s) {
                var o = n.lineHeight,
                    a = (t.end.column + (r || 0) - t.start.column) * n.characterWidth,
                    l = this.$getTop(t.start.row, n),
                    c = this.$padding + t.start.column * n.characterWidth;
                e.push("<div class='", i, "' style='", "height:", o, "px;", "width:", a, "px;", "top:", l, "px;", "left:", c, "px;", s || "", "'></div>")
            }, this.drawBidiSingleLineMarker = function (e, t, i, n, r, s) {
                var o = n.lineHeight,
                    a = this.$getTop(t.start.row, n),
                    l = this.$padding;
                this.session.$bidiHandler.getSelections(t.start.column, t.end.column).forEach((function (t) {
                    e.push("<div class='", i, "' style='", "height:", o, "px;", "width:", t.width + (r || 0), "px;", "top:", a, "px;", "left:", l + t.left, "px;", s || "", "'></div>")
                }))
            }, this.drawFullLineMarker = function (e, t, i, n, r) {
                var s = this.$getTop(t.start.row, n),
                    o = n.lineHeight;
                t.start.row != t.end.row && (o += this.$getTop(t.end.row, n) - s), e.push("<div class='", i, "' style='", "height:", o, "px;", "top:", s, "px;", "left:0;right:0;", r || "", "'></div>")
            }, this.drawScreenLineMarker = function (e, t, i, n, r) {
                var s = this.$getTop(t.start.row, n),
                    o = n.lineHeight;
                e.push("<div class='", i, "' style='", "height:", o, "px;", "top:", s, "px;", "left:0;right:0;", r || "", "'></div>")
            }
        }).call(s.prototype), t.Marker = s
    })), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/oop"),
            r = e("../lib/dom"),
            s = e("../lib/lang"),
            o = (e("../lib/useragent"), e("../lib/event_emitter").EventEmitter),
            a = function (e) {
                this.element = r.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this)
            };
        (function () {
            n.implement(this, o), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this.$updateEolChar = function () {
                var e = "\n" == this.session.doc.getNewLineCharacter() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                if (this.EOL_CHAR != e) return this.EOL_CHAR = e, !0
            }, this.setPadding = function (e) {
                this.$padding = e, this.element.style.padding = "0 " + e + "px"
            }, this.getLineHeight = function () {
                return this.$fontMetrics.$characterSize.height || 0
            }, this.getCharacterWidth = function () {
                return this.$fontMetrics.$characterSize.width || 0
            }, this.$setFontMetrics = function (e) {
                this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
                    this._signal("changeCharacterSize", e)
                }.bind(this)), this.$pollSizeChanges()
            }, this.checkForSizeChanges = function () {
                this.$fontMetrics.checkForSizeChanges()
            }, this.$pollSizeChanges = function () {
                return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
            }, this.setSession = function (e) {
                this.session = e, e && this.$computeTabString()
            }, this.showInvisibles = !1, this.setShowInvisibles = function (e) {
                return this.showInvisibles != e && (this.showInvisibles = e, this.$computeTabString(), !0)
            }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
                return this.displayIndentGuides != e && (this.displayIndentGuides = e, this.$computeTabString(), !0)
            }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
                var e = this.session.getTabSize();
                this.tabSize = e;
                for (var t = this.$tabStrings = [0], i = 1; i < e + 1; i++) this.showInvisibles ? t.push("<span class='ace_invisible ace_invisible_tab'>" + s.stringRepeat(this.TAB_CHAR, i) + "</span>") : t.push(s.stringRepeat(" ", i));
                if (this.displayIndentGuides) {
                    this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                    var n = "ace_indent-guide",
                        r = "",
                        o = "";
                    if (this.showInvisibles) {
                        n += " ace_invisible", r = " ace_invisible_space", o = " ace_invisible_tab";
                        var a = s.stringRepeat(this.SPACE_CHAR, this.tabSize),
                            l = s.stringRepeat(this.TAB_CHAR, this.tabSize)
                    } else l = a = s.stringRepeat(" ", this.tabSize);
                    this.$tabStrings[" "] = "<span class='" + n + r + "'>" + a + "</span>", this.$tabStrings["\t"] = "<span class='" + n + o + "'>" + l + "</span>"
                }
            }, this.updateLines = function (e, t, i) {
                this.config.lastRow == e.lastRow && this.config.firstRow == e.firstRow || this.scrollLines(e), this.config = e;
                for (var n = Math.max(t, e.firstRow), r = Math.min(i, e.lastRow), s = this.element.childNodes, o = 0, a = e.firstRow; a < n; a++) {
                    if (l = this.session.getFoldLine(a)) {
                        if (l.containsRow(n)) {
                            n = l.start.row;
                            break
                        }
                        a = l.end.row
                    }
                    o++
                }
                a = n;
                for (var l, c = (l = this.session.getNextFoldLine(a)) ? l.start.row : 1 / 0; a > c && (a = l.end.row + 1, c = (l = this.session.getNextFoldLine(a, l)) ? l.start.row : 1 / 0), !(a > r);) {
                    var h = s[o++];
                    if (h) {
                        var u = [];
                        this.$renderLine(u, a, !this.$useLineGroups(), a == c && l), h.style.height = e.lineHeight * this.session.getRowLength(a) + "px", h.innerHTML = u.join("")
                    }
                    a++
                }
            }, this.scrollLines = function (e) {
                var t = this.config;
                if (this.config = e, !t || t.lastRow < e.firstRow) return this.update(e);
                if (e.lastRow < t.firstRow) return this.update(e);
                var i = this.element;
                if (t.firstRow < e.firstRow)
                    for (var n = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); n > 0; n--) i.removeChild(i.firstChild);
                if (t.lastRow > e.lastRow)
                    for (n = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); n > 0; n--) i.removeChild(i.lastChild);
                if (e.firstRow < t.firstRow) {
                    var r = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
                    i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r)
                }
                if (e.lastRow > t.lastRow) {
                    r = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
                    i.appendChild(r)
                }
            }, this.$renderLinesFragment = function (e, t, i) {
                for (var n = this.element.ownerDocument.createDocumentFragment(), s = t, o = this.session.getNextFoldLine(s), a = o ? o.start.row : 1 / 0; s > a && (s = o.end.row + 1, a = (o = this.session.getNextFoldLine(s, o)) ? o.start.row : 1 / 0), !(s > i);) {
                    var l = r.createElement("div"),
                        c = [];
                    if (this.$renderLine(c, s, !1, s == a && o), l.innerHTML = c.join(""), this.$useLineGroups()) l.className = "ace_line_group", n.appendChild(l), l.style.height = e.lineHeight * this.session.getRowLength(s) + "px";
                    else
                        for (; l.firstChild;) n.appendChild(l.firstChild);
                    s++
                }
                return n
            }, this.update = function (e) {
                this.config = e;
                for (var t = [], i = e.firstRow, n = e.lastRow, r = i, s = this.session.getNextFoldLine(r), o = s ? s.start.row : 1 / 0; r > o && (r = s.end.row + 1, o = (s = this.session.getNextFoldLine(r, s)) ? s.start.row : 1 / 0), !(r > n);) this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(r), "px'>"), this.$renderLine(t, r, !1, r == o && s), this.$useLineGroups() && t.push("</div>"), r++;
                this.element.innerHTML = t.join("")
            }, this.$textToken = {
                text: !0,
                rparen: !0,
                lparen: !0
            }, this.$renderToken = function (e, t, i, n) {
                var r = this,
                    o = n.replace(/\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, (function (e, i, n, o, a) {
                        if (i) return r.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + s.stringRepeat(r.SPACE_CHAR, e.length) + "</span>" : e;
                        if ("&" == e) return "&#38;";
                        if ("<" == e) return "&#60;";
                        if (">" == e) return "&#62;";
                        if ("\t" == e) {
                            var l = r.session.getScreenTabSize(t + o);
                            return t += l - 1, r.$tabStrings[l]
                        }
                        if ("　" == e) {
                            var c = r.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk",
                                h = r.showInvisibles ? r.SPACE_CHAR : "";
                            return t += 1, "<span class='" + c + "' style='width:" + 2 * r.config.characterWidth + "px'>" + h + "</span>"
                        }
                        return n ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + r.SPACE_CHAR + "</span>" : (t += 1, "<span class='ace_cjk' style='width:" + 2 * r.config.characterWidth + "px'>" + e + "</span>")
                    }));
                if (this.$textToken[i.type]) e.push(o);
                else {
                    var a = "ace_" + i.type.replace(/\./g, " ace_"),
                        l = "";
                    "fold" == i.type && (l = " style='width:" + i.value.length * this.config.characterWidth + "px;' "), e.push("<span class='", a, "'", l, ">", o, "</span>")
                }
                return t + n.length
            }, this.renderIndentGuide = function (e, t, i) {
                var n = t.search(this.$indentGuideRe);
                return n <= 0 || n >= i ? t : " " == t[0] ? (n -= n % this.tabSize, e.push(s.stringRepeat(this.$tabStrings[" "], n / this.tabSize)), t.substr(n)) : "\t" == t[0] ? (e.push(s.stringRepeat(this.$tabStrings["\t"], n)), t.substr(n)) : t
            }, this.$renderWrappedLine = function (e, t, i, n) {
                for (var r = 0, o = 0, a = i[0], l = 0, c = 0; c < t.length; c++) {
                    var h = t[c],
                        u = h.value;
                    if (0 == c && this.displayIndentGuides) {
                        if (r = u.length, !(u = this.renderIndentGuide(e, u, a))) continue;
                        r -= u.length
                    }
                    if (r + u.length < a) l = this.$renderToken(e, l, h, u), r += u.length;
                    else {
                        for (; r + u.length >= a;) l = this.$renderToken(e, l, h, u.substring(0, a - r)), u = u.substring(a - r), r = a, n || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), e.push(s.stringRepeat(" ", i.indent)), l = 0, a = i[++o] || Number.MAX_VALUE;
                        0 != u.length && (r += u.length, l = this.$renderToken(e, l, h, u))
                    }
                }
            }, this.$renderSimpleLine = function (e, t) {
                var i = 0,
                    n = t[0],
                    r = n.value;
                this.displayIndentGuides && (r = this.renderIndentGuide(e, r)), r && (i = this.$renderToken(e, i, n, r));
                for (var s = 1; s < t.length; s++) r = (n = t[s]).value, i = this.$renderToken(e, i, n, r)
            }, this.$renderLine = function (e, t, i, n) {
                if (n || 0 == n || (n = this.session.getFoldLine(t)), n) var r = this.$getFoldLineTokens(t, n);
                else r = this.session.getTokens(t);
                if (i || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>"), r.length) {
                    var s = this.session.getRowSplitData(t);
                    s && s.length ? this.$renderWrappedLine(e, r, s, i) : this.$renderSimpleLine(e, r)
                }
                this.showInvisibles && (n && (t = n.end.row), e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), i || e.push("</div>")
            }, this.$getFoldLineTokens = function (e, t) {
                var i = this.session,
                    n = [];
                var r = i.getTokens(e);
                return t.walk((function (e, t, s, o, a) {
                    null != e ? n.push({
                        type: "fold",
                        value: e
                    }) : (a && (r = i.getTokens(t)), r.length && function (e, t, i) {
                        for (var r = 0, s = 0; s + e[r].value.length < t;)
                            if (s += e[r].value.length, ++r == e.length) return;
                        for (s != t && ((o = e[r].value.substring(t - s)).length > i - t && (o = o.substring(0, i - t)), n.push({
                            type: e[r].type,
                            value: o
                        }), s = t + o.length, r += 1); s < i && r < e.length;) {
                            var o;
                            (o = e[r].value).length + s > i ? n.push({
                                type: e[r].type,
                                value: o.substring(0, i - s)
                            }) : n.push(e[r]), s += o.length, r += 1
                        }
                    }(r, o, s))
                }), t.end.row, this.session.getLine(t.end.row).length), n
            }, this.$useLineGroups = function () {
                return this.session.getUseWrapMode()
            }, this.destroy = function () {
                clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode
            }
        }).call(a.prototype), t.Text = a
    })), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
        "use strict";
        var n, r = e("../lib/dom"),
            s = function (e) {
                this.element = r.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), void 0 === n && (n = !("opacity" in this.element.style)), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), r.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = (n ? this.$updateVisibility : this.$updateOpacity).bind(this)
            };
        (function () {
            this.$updateVisibility = function (e) {
                for (var t = this.cursors, i = t.length; i--;) t[i].style.visibility = e ? "" : "hidden"
            }, this.$updateOpacity = function (e) {
                for (var t = this.cursors, i = t.length; i--;) t[i].style.opacity = e ? "" : "0"
            }, this.$padding = 0, this.setPadding = function (e) {
                this.$padding = e
            }, this.setSession = function (e) {
                this.session = e
            }, this.setBlinking = function (e) {
                e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
            }, this.setBlinkInterval = function (e) {
                e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
            }, this.setSmoothBlinking = function (e) {
                e == this.smoothBlinking || n || (this.smoothBlinking = e, r.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.$updateCursors = this.$updateOpacity.bind(this), this.restartTimer())
            }, this.addCursor = function () {
                var e = r.createElement("div");
                return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
            }, this.removeCursor = function () {
                if (this.cursors.length > 1) {
                    var e = this.cursors.pop();
                    return e.parentNode.removeChild(e), e
                }
            }, this.hideCursor = function () {
                this.isVisible = !1, r.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
            }, this.showCursor = function () {
                this.isVisible = !0, r.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
            }, this.restartTimer = function () {
                var e = this.$updateCursors;
                if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.smoothBlinking && r.removeCssClass(this.element, "ace_smooth-blinking"), e(!0), this.isBlinking && this.blinkInterval && this.isVisible) {
                    this.smoothBlinking && setTimeout(function () {
                        r.addCssClass(this.element, "ace_smooth-blinking")
                    }.bind(this));
                    var t = function () {
                        this.timeoutId = setTimeout((function () {
                            e(!1)
                        }), .6 * this.blinkInterval)
                    }.bind(this);
                    this.intervalId = setInterval((function () {
                        e(!0), t()
                    }), this.blinkInterval), t()
                }
            }, this.getPixelPosition = function (e, t) {
                if (!this.config || !this.session) return {
                    left: 0,
                    top: 0
                };
                e || (e = this.session.selection.getCursor());
                var i = this.session.documentToScreenPosition(e);
                return {
                    left: this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, e.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth),
                    top: (i.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight
                }
            }, this.update = function (e) {
                this.config = e;
                var t = this.session.$selectionMarkers,
                    i = 0,
                    n = 0;
                void 0 !== t && 0 !== t.length || (t = [{
                    cursor: null
                }]);
                i = 0;
                for (var r = t.length; i < r; i++) {
                    var s = this.getPixelPosition(t[i].cursor, !0);
                    if (!((s.top > e.height + e.offset || s.top < 0) && i > 1)) {
                        var o = (this.cursors[n++] || this.addCursor()).style;
                        this.drawCursor ? this.drawCursor(o, s, e, t[i], this.session) : (o.left = s.left + "px", o.top = s.top + "px", o.width = e.characterWidth + "px", o.height = e.lineHeight + "px")
                    }
                }
                for (; this.cursors.length > n;) this.removeCursor();
                var a = this.session.getOverwrite();
                this.$setOverwrite(a), this.$pixelPos = s, this.restartTimer()
            }, this.drawCursor = null, this.$setOverwrite = function (e) {
                e != this.overwrite && (this.overwrite = e, e ? r.addCssClass(this.element, "ace_overwrite-cursors") : r.removeCssClass(this.element, "ace_overwrite-cursors"))
            }, this.destroy = function () {
                clearInterval(this.intervalId), clearTimeout(this.timeoutId)
            }
        }).call(s.prototype), t.Cursor = s
    })), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/dom"),
            s = e("./lib/event"),
            o = e("./lib/event_emitter").EventEmitter,
            a = function (e) {
                this.element = r.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = r.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, s.addListener(this.element, "scroll", this.onScroll.bind(this)), s.addListener(this.element, "mousedown", s.preventDefault)
            };
        (function () {
            n.implement(this, o), this.setVisible = function (e) {
                this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1
            }
        }).call(a.prototype);
        var l = function (e, t) {
            a.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t.$scrollbarWidth = this.width = r.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0
        };
        n.inherits(l, a),
            function () {
                this.classSuffix = "-v", this.onScroll = function () {
                    if (!this.skipEvent) {
                        if (this.scrollTop = this.element.scrollTop, 1 != this.coeff) {
                            var e = this.element.clientHeight / this.scrollHeight;
                            this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e)
                        }
                        this._emit("scroll", {
                            data: this.scrollTop
                        })
                    }
                    this.skipEvent = !1
                }, this.getWidth = function () {
                    return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0)
                }, this.setHeight = function (e) {
                    this.element.style.height = e + "px"
                }, this.setInnerHeight = this.setScrollHeight = function (e) {
                    this.scrollHeight = e, e > 32768 ? (this.coeff = 32768 / e, e = 32768) : 1 != this.coeff && (this.coeff = 1), this.inner.style.height = e + "px"
                }, this.setScrollTop = function (e) {
                    this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e, this.element.scrollTop = e * this.coeff)
                }
            }.call(l.prototype);
        var c = function (e, t) {
            a.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
        };
        n.inherits(c, a),
            function () {
                this.classSuffix = "-h", this.onScroll = function () {
                    this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {
                        data: this.scrollLeft
                    })), this.skipEvent = !1
                }, this.getHeight = function () {
                    return this.isVisible ? this.height : 0
                }, this.setWidth = function (e) {
                    this.element.style.width = e + "px"
                }, this.setInnerWidth = function (e) {
                    this.inner.style.width = e + "px"
                }, this.setScrollWidth = function (e) {
                    this.inner.style.width = e + "px"
                }, this.setScrollLeft = function (e) {
                    this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
                }
            }.call(c.prototype), t.ScrollBar = l, t.ScrollBarV = l, t.ScrollBarH = c, t.VScrollBar = l, t.HScrollBar = c
    })), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/event"),
            r = function (e, t) {
                this.onRender = e, this.pending = !1, this.changes = 0, this.window = t || window
            };
        (function () {
            this.schedule = function (e) {
                if (this.changes = this.changes | e, !this.pending && this.changes) {
                    this.pending = !0;
                    var t = this;
                    n.nextFrame((function () {
                        var e;
                        for (t.pending = !1; e = t.changes;) t.changes = 0, t.onRender(e)
                    }), this.window)
                }
            }
        }).call(r.prototype), t.RenderLoop = r
    })), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], (function (e, t, i) {
        var n = e("../lib/oop"),
            r = e("../lib/dom"),
            s = e("../lib/lang"),
            o = e("../lib/useragent"),
            a = e("../lib/event_emitter").EventEmitter,
            l = 0,
            c = t.FontMetrics = function (e) {
                this.el = r.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = r.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = r.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), l || this.$testFractionalRect(), this.$measureNode.innerHTML = s.stringRepeat("X", l), this.$characterSize = {
                    width: 0,
                    height: 0
                }, this.checkForSizeChanges()
            };
        (function () {
            n.implement(this, a), this.$characterSize = {
                width: 0,
                height: 0
            }, this.$testFractionalRect = function () {
                var e = r.createElement("div");
                this.$setMeasureNodeStyles(e.style), e.style.width = "0.2px", document.documentElement.appendChild(e);
                var t = e.getBoundingClientRect().width;
                l = t > 0 && t < 1 ? 50 : 100, e.parentNode.removeChild(e)
            }, this.$setMeasureNodeStyles = function (e, t) {
                e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", o.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
            }, this.checkForSizeChanges = function () {
                var e = this.$measureSizes();
                if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                    this.$measureNode.style.fontWeight = "bold";
                    var t = this.$measureSizes();
                    this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {
                        data: e
                    })
                }
            }, this.$pollSizeChanges = function () {
                if (this.$pollSizeChangesTimer) return this.$pollSizeChangesTimer;
                var e = this;
                return this.$pollSizeChangesTimer = setInterval((function () {
                    e.checkForSizeChanges()
                }), 500)
            }, this.setPolling = function (e) {
                e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0)
            }, this.$measureSizes = function () {
                if (50 === l) {
                    var e = null;
                    try {
                        e = this.$measureNode.getBoundingClientRect()
                    } catch (t) {
                        e = {
                            width: 0,
                            height: 0
                        }
                    }
                    var t = {
                        height: e.height,
                        width: e.width / l
                    }
                } else t = {
                    height: this.$measureNode.clientHeight,
                    width: this.$measureNode.clientWidth / l
                };
                return 0 === t.width || 0 === t.height ? null : t
            }, this.$measureCharWidth = function (e) {
                return this.$main.innerHTML = s.stringRepeat(e, l), this.$main.getBoundingClientRect().width / l
            }, this.getCharacterWidth = function (e) {
                var t = this.charSizes[e];
                return void 0 === t && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
            }, this.destroy = function () {
                clearInterval(this.$pollSizeChangesTimer), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }
        }).call(c.prototype)
    })), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/dom"),
            s = e("./config"),
            o = e("./lib/useragent"),
            a = e("./layer/gutter").Gutter,
            l = e("./layer/marker").Marker,
            c = e("./layer/text").Text,
            h = e("./layer/cursor").Cursor,
            u = e("./scrollbar").HScrollBar,
            d = e("./scrollbar").VScrollBar,
            g = e("./renderloop").RenderLoop,
            f = e("./layer/font_metrics").FontMetrics,
            p = e("./lib/event_emitter").EventEmitter;
        r.importCssString('.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_text-input-ios {position: absolute !important;top: -100000px !important;left: -100000px !important;}', "ace_editor.css");
        var m = function (e, t) {
            var i = this;
            this.container = e || r.createElement("div"), this.$keepTextAreaAtCursor = !o.isOldIE, r.addCssClass(this.container, "ace_editor"), this.setTheme(t), this.$gutter = r.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = r.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = r.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new a(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new l(this.content);
            var n = this.$textLayer = new c(this.content);
            this.canvas = n.element, this.$markerFront = new l(this.content), this.$cursorLayer = new h(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new d(this.container, this), this.scrollBarH = new u(this.container, this), this.scrollBarV.addEventListener("scroll", (function (e) {
                i.$scrollAnimation || i.session.setScrollTop(e.data - i.scrollMargin.top)
            })), this.scrollBarH.addEventListener("scroll", (function (e) {
                i.$scrollAnimation || i.session.setScrollLeft(e.data - i.scrollMargin.left)
            })), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
                row: 0,
                column: 0
            }, this.$fontMetrics = new f(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", (function (e) {
                i.updateCharacterSize(), i.onResize(!0, i.gutterWidth, i.$size.width, i.$size.height), i._signal("changeCharacterSize", e)
            })), this.$size = {
                width: 0,
                height: 0,
                scrollerHeight: 0,
                scrollerWidth: 0,
                $dirty: !0
            }, this.layerConfig = {
                width: 1,
                padding: 0,
                firstRow: 0,
                firstRowScreen: 0,
                lastRow: 0,
                lineHeight: 0,
                characterWidth: 0,
                minHeight: 1,
                maxHeight: 1,
                offset: 0,
                height: 1,
                gutterOffset: 1
            }, this.scrollMargin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0
            }, this.$loop = new g(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), s.resetOptions(this), s._emit("renderer", this)
        };
        (function () {
            this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, p), this.updateCharacterSize = function () {
                this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
            }, this.setSession = function (e) {
                this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
            }, this.updateLines = function (e, t, i) {
                if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                    firstRow: e,
                    lastRow: t
                }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                    if (!i) return;
                    this.$changedLines.lastRow = this.layerConfig.lastRow
                }
                this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
            }, this.onChangeNewLineMode = function () {
                this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)
            }, this.onChangeTabSize = function () {
                this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
            }, this.updateText = function () {
                this.$loop.schedule(this.CHANGE_TEXT)
            }, this.updateFull = function (e) {
                e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
            }, this.updateFontSize = function () {
                this.$textLayer.checkForSizeChanges()
            }, this.$changes = 0, this.$updateSizeAsync = function () {
                this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
            }, this.onResize = function (e, t, i, n) {
                if (!(this.resizing > 2)) {
                    this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                    var r = this.container;
                    n || (n = r.clientHeight || r.scrollHeight), i || (i = r.clientWidth || r.scrollWidth);
                    var s = this.$updateCachedSize(e, t, i, n);
                    if (!this.$size.scrollerHeight || !i && !n) return this.resizing = 0;
                    e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(s | this.$changes, !0) : this.$loop.schedule(s | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
                }
            }, this.$updateCachedSize = function (e, t, i, n) {
                n -= this.$extraHeight || 0;
                var r = 0,
                    s = this.$size,
                    o = {
                        width: s.width,
                        height: s.height,
                        scrollerHeight: s.scrollerHeight,
                        scrollerWidth: s.scrollerWidth
                    };
                return n && (e || s.height != n) && (s.height = n, r |= this.CHANGE_SIZE, s.scrollerHeight = s.height, this.$horizScroll && (s.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", r |= this.CHANGE_SCROLL), i && (e || s.width != i) && (r |= this.CHANGE_SIZE, s.width = i, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, this.scrollBarH.element.style.left = this.scroller.style.left = t + "px", s.scrollerWidth = Math.max(0, i - t - this.scrollBarV.getWidth()), this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px", this.scroller.style.bottom = this.scrollBarH.getHeight() + "px", (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (r |= this.CHANGE_FULL)), s.$dirty = !i || !n, r && this._signal("resize", o), r
            }, this.onGutterResize = function () {
                var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
                e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() || this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER))
            }, this.adjustWrapLimit = function () {
                var e = this.$size.scrollerWidth - 2 * this.$padding,
                    t = Math.floor(e / this.characterWidth);
                return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
            }, this.setAnimatedScroll = function (e) {
                this.setOption("animatedScroll", e)
            }, this.getAnimatedScroll = function () {
                return this.$animatedScroll
            }, this.setShowInvisibles = function (e) {
                this.setOption("showInvisibles", e), this.session.$bidiHandler.setShowInvisibles(e)
            }, this.getShowInvisibles = function () {
                return this.getOption("showInvisibles")
            }, this.getDisplayIndentGuides = function () {
                return this.getOption("displayIndentGuides")
            }, this.setDisplayIndentGuides = function (e) {
                this.setOption("displayIndentGuides", e)
            }, this.setShowPrintMargin = function (e) {
                this.setOption("showPrintMargin", e)
            }, this.getShowPrintMargin = function () {
                return this.getOption("showPrintMargin")
            }, this.setPrintMarginColumn = function (e) {
                this.setOption("printMarginColumn", e)
            }, this.getPrintMarginColumn = function () {
                return this.getOption("printMarginColumn")
            }, this.getShowGutter = function () {
                return this.getOption("showGutter")
            }, this.setShowGutter = function (e) {
                return this.setOption("showGutter", e)
            }, this.getFadeFoldWidgets = function () {
                return this.getOption("fadeFoldWidgets")
            }, this.setFadeFoldWidgets = function (e) {
                this.setOption("fadeFoldWidgets", e)
            }, this.setHighlightGutterLine = function (e) {
                this.setOption("highlightGutterLine", e)
            }, this.getHighlightGutterLine = function () {
                return this.getOption("highlightGutterLine")
            }, this.$updateGutterLineHighlight = function () {
                var e = this.$cursorLayer.$pixelPos,
                    t = this.layerConfig.lineHeight;
                if (this.session.getUseWrapMode()) {
                    var i = this.session.selection.getCursor();
                    i.column = 0, e = this.$cursorLayer.getPixelPosition(i, !0), t *= this.session.getRowLength(i.row)
                }
                this.$gutterLineHighlight.style.top = e.top - this.layerConfig.offset + "px", this.$gutterLineHighlight.style.height = t + "px"
            }, this.$updatePrintMargin = function () {
                if (this.$showPrintMargin || this.$printMarginEl) {
                    if (!this.$printMarginEl) {
                        var e = r.createElement("div");
                        e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = r.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
                    }
                    var t = this.$printMarginEl.style;
                    t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
                }
            }, this.getContainerElement = function () {
                return this.container
            }, this.getMouseEventTarget = function () {
                return this.scroller
            }, this.getTextAreaContainer = function () {
                return this.container
            }, this.$moveTextAreaToCursor = function () {
                if (this.$keepTextAreaAtCursor) {
                    var e = this.layerConfig,
                        t = this.$cursorLayer.$pixelPos.top,
                        i = this.$cursorLayer.$pixelPos.left;
                    t -= e.offset;
                    var n = this.textarea.style,
                        r = this.lineHeight;
                    if (t < 0 || t > e.height - r) n.top = n.left = "0";
                    else {
                        var s = this.characterWidth;
                        if (this.$composition) {
                            var o = this.textarea.value.replace(/^\x01+/, "");
                            s *= this.session.$getStringScreenWidth(o)[0] + 2, r += 2
                        } (i -= this.scrollLeft) > this.$size.scrollerWidth - s && (i = this.$size.scrollerWidth - s), i += this.gutterWidth, n.height = r + "px", n.width = s + "px", n.left = Math.min(i, this.$size.scrollerWidth - s) + "px", n.top = Math.min(t, this.$size.height - r) + "px"
                    }
                }
            }, this.getFirstVisibleRow = function () {
                return this.layerConfig.firstRow
            }, this.getFirstFullyVisibleRow = function () {
                return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
            }, this.getLastFullyVisibleRow = function () {
                var e = this.layerConfig,
                    t = e.lastRow;
                return this.session.documentToScreenRow(t, 0) * e.lineHeight - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t
            }, this.getLastVisibleRow = function () {
                return this.layerConfig.lastRow
            }, this.$padding = null, this.setPadding = function (e) {
                this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
            }, this.setScrollMargin = function (e, t, i, n) {
                var r = this.scrollMargin;
                r.top = 0 | e, r.bottom = 0 | t, r.right = 0 | n, r.left = 0 | i, r.v = r.top + r.bottom, r.h = r.left + r.right, r.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-r.top), this.updateFull()
            }, this.getHScrollBarAlwaysVisible = function () {
                return this.$hScrollBarAlwaysVisible
            }, this.setHScrollBarAlwaysVisible = function (e) {
                this.setOption("hScrollBarAlwaysVisible", e)
            }, this.getVScrollBarAlwaysVisible = function () {
                return this.$vScrollBarAlwaysVisible
            }, this.setVScrollBarAlwaysVisible = function (e) {
                this.setOption("vScrollBarAlwaysVisible", e)
            }, this.$updateScrollBarV = function () {
                var e = this.layerConfig.maxHeight,
                    t = this.$size.scrollerHeight;
                !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
            }, this.$updateScrollBarH = function () {
                this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
            }, this.$frozen = !1, this.freeze = function () {
                this.$frozen = !0
            }, this.unfreeze = function () {
                this.$frozen = !1
            }, this.$renderChanges = function (e, t) {
                if (this.$changes && (e |= this.$changes, this.$changes = 0), this.session && this.container.offsetWidth && !this.$frozen && (e || t)) {
                    if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);
                    this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender"), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
                    var i = this.layerConfig;
                    if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                        if (e |= this.$computeLayerConfig(), i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
                            var n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                            n > 0 && (this.scrollTop = n, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig())
                        }
                        i = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), this.$gutterLayer.element.style.marginTop = -i.offset + "px", this.content.style.marginTop = -i.offset + "px", this.content.style.width = i.width + 2 * this.$padding + "px", this.content.style.height = i.minHeight + "px"
                    }
                    if (e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px", this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL) return this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), void this._signal("afterRender");
                    if (e & this.CHANGE_SCROLL) return e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(i) : this.$textLayer.scrollLines(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this.$moveTextAreaToCursor(), void this._signal("afterRender");
                    e & this.CHANGE_TEXT ? (this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(i) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(i), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(i), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(i), this._signal("afterRender")
                } else this.$changes |= e
            }, this.$autosize = function () {
                var e = this.session.getScreenLength() * this.lineHeight,
                    t = this.$maxLines * this.lineHeight,
                    i = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
                this.$horizScroll && (i += this.scrollBarH.getHeight()), this.$maxPixelHeight && i > this.$maxPixelHeight && (i = this.$maxPixelHeight);
                var n = e > t;
                if (i != this.desiredHeight || this.$size.height != this.desiredHeight || n != this.$vScroll) {
                    n != this.$vScroll && (this.$vScroll = n, this.scrollBarV.setVisible(n));
                    var r = this.container.clientWidth;
                    this.container.style.height = i + "px", this.$updateCachedSize(!0, this.$gutterWidth, r, i), this.desiredHeight = i, this._signal("autosize")
                }
            }, this.$computeLayerConfig = function () {
                var e = this.session,
                    t = this.$size,
                    i = t.height <= 2 * this.lineHeight,
                    n = this.session.getScreenLength() * this.lineHeight,
                    r = this.$getLongestLine(),
                    s = !i && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - r - 2 * this.$padding < 0),
                    o = this.$horizScroll !== s;
                o && (this.$horizScroll = s, this.scrollBarH.setVisible(s));
                var a = this.$vScroll;
                this.$maxLines && this.lineHeight > 1 && this.$autosize();
                var l = this.scrollTop % this.lineHeight,
                    c = t.scrollerHeight + this.lineHeight,
                    h = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
                n += h;
                var u = this.scrollMargin;
                this.session.setScrollTop(Math.max(-u.top, Math.min(this.scrollTop, n - t.scrollerHeight + u.bottom))), this.session.setScrollLeft(Math.max(-u.left, Math.min(this.scrollLeft, r + 2 * this.$padding - t.scrollerWidth + u.right)));
                var d = !i && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - n + h < 0 || this.scrollTop > u.top),
                    g = a !== d;
                g && (this.$vScroll = d, this.scrollBarV.setVisible(d));
                var f, p, m = Math.ceil(c / this.lineHeight) - 1,
                    w = Math.max(0, Math.round((this.scrollTop - l) / this.lineHeight)),
                    A = w + m,
                    v = this.lineHeight;
                w = e.screenToDocumentRow(w, 0);
                var b = e.getFoldLine(w);
                b && (w = b.start.row), f = e.documentToScreenRow(w, 0), p = e.getRowLength(w) * v, A = Math.min(e.screenToDocumentRow(A, 0), e.getLength() - 1), c = t.scrollerHeight + e.getRowLength(A) * v + p, l = this.scrollTop - f * v;
                var C = 0;
                return this.layerConfig.width != r && (C = this.CHANGE_H_SCROLL), (o || g) && (C = this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), g && (r = this.$getLongestLine())), this.layerConfig = {
                    width: r,
                    padding: this.$padding,
                    firstRow: w,
                    firstRowScreen: f,
                    lastRow: A,
                    lineHeight: v,
                    characterWidth: this.characterWidth,
                    minHeight: c,
                    maxHeight: n,
                    offset: l,
                    gutterOffset: v ? Math.max(0, Math.ceil((l + t.height - t.scrollerHeight) / v)) : 0,
                    height: this.$size.scrollerHeight
                }, C
            }, this.$updateLines = function () {
                if (this.$changedLines) {
                    var e = this.$changedLines.firstRow,
                        t = this.$changedLines.lastRow;
                    this.$changedLines = null;
                    var i = this.layerConfig;
                    if (!(e > i.lastRow + 1 || t < i.firstRow)) return t === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(i), void this.$textLayer.update(i)) : (this.$textLayer.updateLines(i, e, t), !0)
                }
            }, this.$getLongestLine = function () {
                var e = this.session.getScreenWidth();
                return this.showInvisibles && !this.session.$useWrapMode && (e += 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
            }, this.updateFrontMarkers = function () {
                this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
            }, this.updateBackMarkers = function () {
                this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
            }, this.addGutterDecoration = function (e, t) {
                this.$gutterLayer.addGutterDecoration(e, t)
            }, this.removeGutterDecoration = function (e, t) {
                this.$gutterLayer.removeGutterDecoration(e, t)
            }, this.updateBreakpoints = function (e) {
                this.$loop.schedule(this.CHANGE_GUTTER)
            }, this.setAnnotations = function (e) {
                this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
            }, this.updateCursor = function () {
                this.$loop.schedule(this.CHANGE_CURSOR)
            }, this.hideCursor = function () {
                this.$cursorLayer.hideCursor()
            }, this.showCursor = function () {
                this.$cursorLayer.showCursor()
            }, this.scrollSelectionIntoView = function (e, t, i) {
                this.scrollCursorIntoView(e, i), this.scrollCursorIntoView(t, i)
            }, this.scrollCursorIntoView = function (e, t, i) {
                if (0 !== this.$size.scrollerHeight) {
                    var n = this.$cursorLayer.getPixelPosition(e),
                        r = n.left,
                        s = n.top,
                        o = i && i.top || 0,
                        a = i && i.bottom || 0,
                        l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                    l + o > s ? (t && l + o > s + this.lineHeight && (s -= t * this.$size.scrollerHeight), 0 === s && (s = -this.scrollMargin.top), this.session.setScrollTop(s)) : l + this.$size.scrollerHeight - a < s + this.lineHeight && (t && l + this.$size.scrollerHeight - a < s - this.lineHeight && (s += t * this.$size.scrollerHeight), this.session.setScrollTop(s + this.lineHeight - this.$size.scrollerHeight));
                    var c = this.scrollLeft;
                    c > r ? (r < this.$padding + 2 * this.layerConfig.characterWidth && (r = -this.scrollMargin.left), this.session.setScrollLeft(r)) : c + this.$size.scrollerWidth < r + this.characterWidth ? this.session.setScrollLeft(Math.round(r + this.characterWidth - this.$size.scrollerWidth)) : c <= this.$padding && r - c < this.characterWidth && this.session.setScrollLeft(0)
                }
            }, this.getScrollTop = function () {
                return this.session.getScrollTop()
            }, this.getScrollLeft = function () {
                return this.session.getScrollLeft()
            }, this.getScrollTopRow = function () {
                return this.scrollTop / this.lineHeight
            }, this.getScrollBottomRow = function () {
                return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
            }, this.scrollToRow = function (e) {
                this.session.setScrollTop(e * this.lineHeight)
            }, this.alignCursor = function (e, t) {
                "number" == typeof e && (e = {
                    row: e,
                    column: 0
                });
                var i = this.$cursorLayer.getPixelPosition(e),
                    n = this.$size.scrollerHeight - this.lineHeight,
                    r = i.top - n * (t || 0);
                return this.session.setScrollTop(r), r
            }, this.STEPS = 8, this.$calcSteps = function (e, t) {
                var i, n, r = 0,
                    s = this.STEPS,
                    o = [];
                for (r = 0; r < s; ++r) o.push((i = r / this.STEPS, n = e, (t - e) * (Math.pow(i - 1, 3) + 1) + n));
                return o
            }, this.scrollToLine = function (e, t, i, n) {
                var r = this.$cursorLayer.getPixelPosition({
                    row: e,
                    column: 0
                }).top;
                t && (r -= this.$size.scrollerHeight / 2);
                var s = this.scrollTop;
                this.session.setScrollTop(r), !1 !== i && this.animateScrolling(s, n)
            }, this.animateScrolling = function (e, t) {
                var i = this.scrollTop;
                if (this.$animatedScroll) {
                    var n = this;
                    if (e != i) {
                        if (this.$scrollAnimation) {
                            var r = this.$scrollAnimation.steps;
                            if (r.length && (e = r[0]) == i) return
                        }
                        var s = n.$calcSteps(e, i);
                        this.$scrollAnimation = {
                            from: e,
                            to: i,
                            steps: s
                        }, clearInterval(this.$timer), n.session.setScrollTop(s.shift()), n.session.$scrollTop = i, this.$timer = setInterval((function () {
                            s.length ? (n.session.setScrollTop(s.shift()), n.session.$scrollTop = i) : null != i ? (n.session.$scrollTop = -1, n.session.setScrollTop(i), i = null) : (n.$timer = clearInterval(n.$timer), n.$scrollAnimation = null, t && t())
                        }), 10)
                    }
                }
            }, this.scrollToY = function (e) {
                this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
            }, this.scrollToX = function (e) {
                this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
            }, this.scrollTo = function (e, t) {
                this.session.setScrollTop(t), this.session.setScrollLeft(t)
            }, this.scrollBy = function (e, t) {
                t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
            }, this.isScrollableBy = function (e, t) {
                return t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || void 0)))
            }, this.pixelToScreenCoordinates = function (e, t) {
                var i = this.scroller.getBoundingClientRect(),
                    n = e + this.scrollLeft - i.left - this.$padding,
                    r = n / this.characterWidth,
                    s = Math.floor((t + this.scrollTop - i.top) / this.lineHeight),
                    o = Math.round(r);
                return {
                    row: s,
                    column: o,
                    side: r - o > 0 ? 1 : -1,
                    offsetX: n
                }
            }, this.screenToTextCoordinates = function (e, t) {
                var i = this.scroller.getBoundingClientRect(),
                    n = e + this.scrollLeft - i.left - this.$padding,
                    r = Math.round(n / this.characterWidth),
                    s = (t + this.scrollTop - i.top) / this.lineHeight;
                return this.session.screenToDocumentPosition(s, Math.max(r, 0), n)
            }, this.textToScreenCoordinates = function (e, t) {
                var i = this.scroller.getBoundingClientRect(),
                    n = this.session.documentToScreenPosition(e, t),
                    r = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e) ? this.session.$bidiHandler.getPosLeft(n.column) : Math.round(n.column * this.characterWidth)),
                    s = n.row * this.lineHeight;
                return {
                    pageX: i.left + r - this.scrollLeft,
                    pageY: i.top + s - this.scrollTop
                }
            }, this.visualizeFocus = function () {
                r.addCssClass(this.container, "ace_focus")
            }, this.visualizeBlur = function () {
                r.removeCssClass(this.container, "ace_focus")
            }, this.showComposition = function (e) {
                this.$composition || (this.$composition = {
                    keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                    cssText: this.textarea.style.cssText
                }), this.$keepTextAreaAtCursor = !0, r.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor()
            }, this.setCompositionText = function (e) {
                this.$moveTextAreaToCursor()
            }, this.hideComposition = function () {
                this.$composition && (r.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null)
            }, this.setTheme = function (e, t) {
                var i = this;
                if (this.$themeId = e, i._dispatchEvent("themeChange", {
                    theme: e
                }), e && "string" != typeof e) o(e);
                else {
                    var n = e || this.$options.theme.initialValue;
                    s.loadModule(["theme", n], o)
                }

                function o(n) {
                    if (i.$themeId != e) return t && t();
                    if (!n || !n.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");
                    r.importCssString(n.cssText, n.cssClass, i.container.ownerDocument), i.theme && r.removeCssClass(i.container, i.theme.cssClass);
                    var s = "padding" in n ? n.padding : "padding" in (i.theme || {}) ? 4 : i.$padding;
                    i.$padding && s != i.$padding && i.setPadding(s), i.$theme = n.cssClass, i.theme = n, r.addCssClass(i.container, n.cssClass), r.setCssClass(i.container, "ace_dark", n.isDark), i.$size && (i.$size.width = 0, i.$updateSizeAsync()), i._dispatchEvent("themeLoaded", {
                        theme: n
                    }), t && t()
                }
            }, this.getTheme = function () {
                return this.$themeId
            }, this.setStyle = function (e, t) {
                r.setCssClass(this.container, e, !1 !== t)
            }, this.unsetStyle = function (e) {
                r.removeCssClass(this.container, e)
            }, this.setCursorStyle = function (e) {
                this.scroller.style.cursor != e && (this.scroller.style.cursor = e)
            }, this.setMouseCursor = function (e) {
                this.scroller.style.cursor = e
            }, this.destroy = function () {
                this.$textLayer.destroy(), this.$cursorLayer.destroy()
            }
        }).call(m.prototype), s.defineOptions(m.prototype, "renderer", {
            animatedScroll: {
                initialValue: !1
            },
            showInvisibles: {
                set: function (e) {
                    this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
                },
                initialValue: !1
            },
            showPrintMargin: {
                set: function () {
                    this.$updatePrintMargin()
                },
                initialValue: !0
            },
            printMarginColumn: {
                set: function () {
                    this.$updatePrintMargin()
                },
                initialValue: 80
            },
            printMargin: {
                set: function (e) {
                    "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
                },
                get: function () {
                    return this.$showPrintMargin && this.$printMarginColumn
                }
            },
            showGutter: {
                set: function (e) {
                    this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
                },
                initialValue: !0
            },
            fadeFoldWidgets: {
                set: function (e) {
                    r.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
                },
                initialValue: !1
            },
            showFoldWidgets: {
                set: function (e) {
                    this.$gutterLayer.setShowFoldWidgets(e)
                },
                initialValue: !0
            },
            showLineNumbers: {
                set: function (e) {
                    this.$gutterLayer.setShowLineNumbers(e), this.$loop.schedule(this.CHANGE_GUTTER)
                },
                initialValue: !0
            },
            displayIndentGuides: {
                set: function (e) {
                    this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
                },
                initialValue: !0
            },
            highlightGutterLine: {
                set: function (e) {
                    if (!this.$gutterLineHighlight) return this.$gutterLineHighlight = r.createElement("div"), this.$gutterLineHighlight.className = "ace_gutter-active-line", void this.$gutter.appendChild(this.$gutterLineHighlight);
                    this.$gutterLineHighlight.style.display = e ? "" : "none", this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight()
                },
                initialValue: !1,
                value: !0
            },
            hScrollBarAlwaysVisible: {
                set: function (e) {
                    this.$hScrollBarAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL)
                },
                initialValue: !1
            },
            vScrollBarAlwaysVisible: {
                set: function (e) {
                    this.$vScrollBarAlwaysVisible && this.$vScroll || this.$loop.schedule(this.CHANGE_SCROLL)
                },
                initialValue: !1
            },
            fontSize: {
                set: function (e) {
                    "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
                },
                initialValue: 12
            },
            fontFamily: {
                set: function (e) {
                    this.container.style.fontFamily = e, this.updateFontSize()
                }
            },
            maxLines: {
                set: function (e) {
                    this.updateFull()
                }
            },
            minLines: {
                set: function (e) {
                    this.updateFull()
                }
            },
            maxPixelHeight: {
                set: function (e) {
                    this.updateFull()
                },
                initialValue: 0
            },
            scrollPastEnd: {
                set: function (e) {
                    e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
                },
                initialValue: 0,
                handlesSet: !0
            },
            fixedWidthGutter: {
                set: function (e) {
                    this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
                }
            },
            theme: {
                set: function (e) {
                    this.setTheme(e)
                },
                get: function () {
                    return this.$themeId || this.theme
                },
                initialValue: "./theme/textmate",
                handlesSet: !0
            }
        }), t.VirtualRenderer = m
    })), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/oop"),
            r = e("../lib/net"),
            s = e("../lib/event_emitter").EventEmitter,
            o = e("../config");

        function a(e, t) {
            var i = function (e, t) {
                var i = t.src;
                r.qualifyURL(e);
                try {
                    return new Blob([i], {
                        type: "application/javascript"
                    })
                } catch (e) {
                    var n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                    return n.append(i), n.getBlob("application/javascript")
                }
            }(e, t),
                n = (window.URL || window.webkitURL).createObjectURL(i);
            return new Worker(n)
        }
        var l = function (t, i, n, r, s) {
            if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), o.get("packaged") || !e.toUrl) r = r || o.moduleUrl(i.id, "worker");
            else {
                var l = this.$normalizePath;
                r = r || l(e.toUrl("ace/worker/worker.js", null, "_"));
                var c = {};
                t.forEach((function (t) {
                    c[t] = l(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                }))
            }
            this.$worker = a(r, i), s && this.send("importScripts", s), this.$worker.postMessage({
                init: !0,
                tlns: c,
                module: i.id,
                classname: n
            }), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
        };
        (function () {
            n.implement(this, s), this.onMessage = function (e) {
                var t = e.data;
                switch (t.type) {
                    case "event":
                        this._signal(t.name, {
                            data: t.data
                        });
                        break;
                    case "call":
                        var i = this.callbacks[t.id];
                        i && (i(t.data), delete this.callbacks[t.id]);
                        break;
                    case "error":
                        this.reportError(t.data);
                        break;
                    case "log":
                        window.console && console.log && console.log.apply(console, t.data)
                }
            }, this.reportError = function (e) {
                window.console && console.error && console.error(e)
            }, this.$normalizePath = function (e) {
                return r.qualifyURL(e)
            }, this.terminate = function () {
                this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
            }, this.send = function (e, t) {
                this.$worker.postMessage({
                    command: e,
                    args: t
                })
            }, this.call = function (e, t, i) {
                if (i) {
                    var n = this.callbackId++;
                    this.callbacks[n] = i, t.push(n)
                }
                this.send(e, t)
            }, this.emit = function (e, t) {
                try {
                    this.$worker.postMessage({
                        event: e,
                        data: {
                            data: t.data
                        }
                    })
                } catch (e) {
                    console.error(e.stack)
                }
            }, this.attachToDocument = function (e) {
                this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
            }, this.changeListener = function (e) {
                this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), "insert" == e.action ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end)
            }, this.$sendDeltaQueue = function () {
                var e = this.deltaQueue;
                e && (this.deltaQueue = null, e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {
                    data: e
                }))
            }
        }).call(l.prototype);
        var c = function (e, t, i) {
            this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
            var n = null,
                r = !1,
                a = Object.create(s),
                l = this;
            this.$worker = {}, this.$worker.terminate = function () { }, this.$worker.postMessage = function (e) {
                l.messageBuffer.push(e), n && (r ? setTimeout(c) : c())
            }, this.setEmitSync = function (e) {
                r = e
            };
            var c = function () {
                var e = l.messageBuffer.shift();
                e.command ? n[e.command].apply(n, e.args) : e.event && a._signal(e.event, e.data)
            };
            a.postMessage = function (e) {
                l.onMessage({
                    data: e
                })
            }, a.callback = function (e, t) {
                this.postMessage({
                    type: "call",
                    id: t,
                    data: e
                })
            }, a.emit = function (e, t) {
                this.postMessage({
                    type: "event",
                    name: e,
                    data: t
                })
            }, o.loadModule(["worker", t], (function (e) {
                for (n = new e[i](a); l.messageBuffer.length;) c()
            }))
        };
        c.prototype = l.prototype, t.UIWorkerClient = c, t.WorkerClient = l, t.createWorker = a
    })), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], (function (e, t, i) {
        "use strict";
        var n = e("./range").Range,
            r = e("./lib/event_emitter").EventEmitter,
            s = e("./lib/oop"),
            o = function (e, t, i, n, r, s) {
                var o = this;
                this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = r, this.othersClass = s, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = n, this.$onCursorChange = function () {
                    setTimeout((function () {
                        o.onCursorChange()
                    }))
                }, this.$pos = i;
                var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {
                    length: -1
                };
                this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
            };
        (function () {
            s.implement(this, r), this.setup = function () {
                var e = this,
                    t = this.doc,
                    i = this.session;
                this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
                var r = this.pos;
                r.$insertRight = !0, r.detach(), r.markerId = i.addMarker(new n(r.row, r.column, r.row, r.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach((function (i) {
                    var n = t.createAnchor(i.row, i.column);
                    n.$insertRight = !0, n.detach(), e.others.push(n)
                })), i.setUndoSelect(!1)
            }, this.showOtherMarkers = function () {
                if (!this.othersActive) {
                    var e = this.session,
                        t = this;
                    this.othersActive = !0, this.others.forEach((function (i) {
                        i.markerId = e.addMarker(new n(i.row, i.column, i.row, i.column + t.length), t.othersClass, null, !1)
                    }))
                }
            }, this.hideOtherMarkers = function () {
                if (this.othersActive) {
                    this.othersActive = !1;
                    for (var e = 0; e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId)
                }
            }, this.onUpdate = function (e) {
                if (this.$updating) return this.updateAnchors(e);
                var t = e;
                if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                    this.$updating = !0;
                    var i = "insert" === e.action ? t.end.column - t.start.column : t.start.column - t.end.column,
                        r = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1,
                        s = t.start.column - this.pos.column;
                    if (this.updateAnchors(e), r && (this.length += i), r && !this.session.$fromUndo)
                        if ("insert" === e.action)
                            for (var o = this.others.length - 1; o >= 0; o--) {
                                var a = {
                                    row: (l = this.others[o]).row,
                                    column: l.column + s
                                };
                                this.doc.insertMergedLines(a, e.lines)
                            } else if ("remove" === e.action)
                            for (o = this.others.length - 1; o >= 0; o--) {
                                var l;
                                a = {
                                    row: (l = this.others[o]).row,
                                    column: l.column + s
                                };
                                this.doc.remove(new n(a.row, a.column, a.row, a.column - i))
                            }
                    this.$updating = !1, this.updateMarkers()
                }
            }, this.updateAnchors = function (e) {
                this.pos.onChange(e);
                for (var t = this.others.length; t--;) this.others[t].onChange(e);
                this.updateMarkers()
            }, this.updateMarkers = function () {
                if (!this.$updating) {
                    var e = this,
                        t = this.session,
                        i = function (i, r) {
                            t.removeMarker(i.markerId), i.markerId = t.addMarker(new n(i.row, i.column, i.row, i.column + e.length), r, null, !1)
                        };
                    i(this.pos, this.mainClass);
                    for (var r = this.others.length; r--;) i(this.others[r], this.othersClass)
                }
            }, this.onCursorChange = function (e) {
                if (!this.$updating && this.session) {
                    var t = this.session.selection.getCursor();
                    t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
                }
            }, this.detach = function () {
                this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null
            }, this.cancel = function () {
                if (-1 !== this.$undoStackDepth) {
                    for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; i < t; i++) e.undo(!0);
                    this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
                }
            }
        }).call(o.prototype), t.PlaceHolder = o
    })), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
        var n = e("../lib/event"),
            r = e("../lib/useragent");

        function s(e, t) {
            return e.row == t.row && e.column == t.column
        }
        t.onMouseDown = function (e) {
            var t = e.domEvent,
                i = t.altKey,
                o = t.shiftKey,
                a = t.ctrlKey,
                l = e.getAccelKey(),
                c = e.getButton();
            if (a && r.isMac && (c = t.button), e.editor.inMultiSelectMode && 2 == c) e.editor.textInput.onContextMenu(e.domEvent);
            else if (a || i || l) {
                if (0 === c) {
                    var h, u = e.editor,
                        d = u.selection,
                        g = u.inMultiSelectMode,
                        f = e.getDocumentPosition(),
                        p = d.getCursor(),
                        m = e.inSelection() || d.isEmpty() && s(f, p),
                        w = e.x,
                        A = e.y,
                        v = u.session,
                        b = u.renderer.pixelToScreenCoordinates(w, A),
                        C = b;
                    if (u.$mouseHandler.$enableJumpToDef) a && i || l && i ? h = o ? "block" : "add" : i && u.$blockSelectEnabled && (h = "block");
                    else if (l && !i) {
                        if (h = "add", !g && o) return
                    } else i && u.$blockSelectEnabled && (h = "block");
                    if (h && r.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == h) {
                        if (!g && m) return;
                        if (!g) {
                            var F = d.toOrientedRange();
                            u.addSelectionMarker(F)
                        }
                        var E = d.rangeList.rangeAtPoint(f);
                        u.$blockScrolling++, u.inVirtualSelectionMode = !0, o && (E = null, F = d.ranges[0] || F, u.removeSelectionMarker(F)), u.once("mouseup", (function () {
                            var e = d.toOrientedRange();
                            E && e.isEmpty() && s(E.cursor, e.cursor) ? d.substractPoint(e.cursor) : (o ? d.substractPoint(F.cursor) : F && (u.removeSelectionMarker(F), d.addRange(F)), d.addRange(e)), u.$blockScrolling--, u.inVirtualSelectionMode = !1
                        }))
                    } else if ("block" == h) {
                        var y;
                        e.stop(), u.inVirtualSelectionMode = !0;
                        var _ = [];
                        u.$blockScrolling++, g && !l ? d.toSingleRange() : !g && l && (y = d.toOrientedRange(), u.addSelectionMarker(y)), o ? b = v.documentToScreenPosition(d.lead) : d.moveToPosition(f), u.$blockScrolling--, C = {
                            row: -1,
                            column: -1
                        };
                        var k = function () {
                            var e = u.renderer.pixelToScreenCoordinates(w, A),
                                t = v.screenToDocumentPosition(e.row, e.column, e.offsetX);
                            s(C, e) && s(t, d.lead) || (C = e, u.$blockScrolling++, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(_), _ = d.rectangularRangeBlock(C, b), u.$mouseHandler.$clickSelection && 1 == _.length && _[0].isEmpty() && (_[0] = u.$mouseHandler.$clickSelection.clone()), _.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers(), u.$blockScrolling--)
                        };
                        n.capture(u.container, (function (e) {
                            w = e.clientX, A = e.clientY
                        }), (function (e) {
                            clearInterval(S), u.removeSelectionMarkers(_), _.length || (_ = [d.toOrientedRange()]), u.$blockScrolling++, y && (u.removeSelectionMarker(y), d.toSingleRange(y));
                            for (var t = 0; t < _.length; t++) d.addRange(_[t]);
                            u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null, u.$blockScrolling--
                        }));
                        var S = setInterval((function () {
                            k()
                        }), 20);
                        return e.preventDefault()
                    }
                }
            } else 0 === c && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode()
        }
    })), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], (function (e, t, i) {
        t.defaultCommands = [{
            name: "addCursorAbove",
            exec: function (e) {
                e.selectMoreLines(-1)
            },
            bindKey: {
                win: "Ctrl-Alt-Up",
                mac: "Ctrl-Alt-Up"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "addCursorBelow",
            exec: function (e) {
                e.selectMoreLines(1)
            },
            bindKey: {
                win: "Ctrl-Alt-Down",
                mac: "Ctrl-Alt-Down"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "addCursorAboveSkipCurrent",
            exec: function (e) {
                e.selectMoreLines(-1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Up",
                mac: "Ctrl-Alt-Shift-Up"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "addCursorBelowSkipCurrent",
            exec: function (e) {
                e.selectMoreLines(1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Down",
                mac: "Ctrl-Alt-Shift-Down"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectMoreBefore",
            exec: function (e) {
                e.selectMore(-1)
            },
            bindKey: {
                win: "Ctrl-Alt-Left",
                mac: "Ctrl-Alt-Left"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectMoreAfter",
            exec: function (e) {
                e.selectMore(1)
            },
            bindKey: {
                win: "Ctrl-Alt-Right",
                mac: "Ctrl-Alt-Right"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectNextBefore",
            exec: function (e) {
                e.selectMore(-1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Left",
                mac: "Ctrl-Alt-Shift-Left"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectNextAfter",
            exec: function (e) {
                e.selectMore(1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Right",
                mac: "Ctrl-Alt-Shift-Right"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "splitIntoLines",
            exec: function (e) {
                e.multiSelect.splitIntoLines()
            },
            bindKey: {
                win: "Ctrl-Alt-L",
                mac: "Ctrl-Alt-L"
            },
            readOnly: !0
        }, {
            name: "alignCursors",
            exec: function (e) {
                e.alignCursors()
            },
            bindKey: {
                win: "Ctrl-Alt-A",
                mac: "Ctrl-Alt-A"
            },
            scrollIntoView: "cursor"
        }, {
            name: "findAll",
            exec: function (e) {
                e.findAll()
            },
            bindKey: {
                win: "Ctrl-Alt-K",
                mac: "Ctrl-Alt-G"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }], t.multiSelectCommands = [{
            name: "singleSelection",
            bindKey: "esc",
            exec: function (e) {
                e.exitMultiSelectMode()
            },
            scrollIntoView: "cursor",
            readOnly: !0,
            isAvailable: function (e) {
                return e && e.inMultiSelectMode
            }
        }];
        var n = e("../keyboard/hash_handler").HashHandler;
        t.keyboardHandler = new n(t.multiSelectCommands)
    })), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], (function (e, t, i) {
        var n = e("./range_list").RangeList,
            r = e("./range").Range,
            s = e("./selection").Selection,
            o = e("./mouse/multi_select_handler").onMouseDown,
            a = e("./lib/event"),
            l = e("./lib/lang"),
            c = e("./commands/multi_select_commands");
        t.commands = c.defaultCommands.concat(c.multiSelectCommands);
        var h = new (0, e("./search").Search);
        var u = e("./edit_session").EditSession;
        (function () {
            this.getSelectionMarkers = function () {
                return this.$selectionMarkers
            }
        }).call(u.prototype),
            function () {
                this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
                    if (e) {
                        if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                            var i = this.toOrientedRange();
                            if (this.rangeList.add(i), this.rangeList.add(e), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                            this.rangeList.removeAll(), this.rangeList.add(i), this.$onAddRange(i)
                        }
                        e.cursor || (e.cursor = e.end);
                        var n = this.rangeList.add(e);
                        return this.$onAddRange(e), n.length && this.$onRemoveRange(n), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
                    }
                }, this.toSingleRange = function (e) {
                    e = e || this.ranges[0];
                    var t = this.rangeList.removeAll();
                    t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
                }, this.substractPoint = function (e) {
                    var t = this.rangeList.substractPoint(e);
                    if (t) return this.$onRemoveRange(t), t[0]
                }, this.mergeOverlappingRanges = function () {
                    var e = this.rangeList.merge();
                    e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
                }, this.$onAddRange = function (e) {
                    this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {
                        range: e
                    })
                }, this.$onRemoveRange = function (e) {
                    if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                        var t = this.rangeList.ranges.pop();
                        e.push(t), this.rangeCount = 0
                    }
                    for (var i = e.length; i--;) {
                        var n = this.ranges.indexOf(e[i]);
                        this.ranges.splice(n, 1)
                    }
                    this._signal("removeRange", {
                        ranges: e
                    }), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), (t = t || this.ranges[0]) && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
                }, this.$initRangeList = function () {
                    this.rangeList || (this.rangeList = new n, this.ranges = [], this.rangeCount = 0)
                }, this.getAllRanges = function () {
                    return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
                }, this.splitIntoLines = function () {
                    if (this.rangeCount > 1) {
                        var e = this.rangeList.ranges,
                            t = e[e.length - 1],
                            i = r.fromPoints(e[0].start, t.end);
                        this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
                    } else {
                        i = this.getRange();
                        var n = this.isBackwards(),
                            s = i.start.row,
                            o = i.end.row;
                        if (s == o) {
                            if (n) var a = i.end,
                                l = i.start;
                            else a = i.start, l = i.end;
                            return this.addRange(r.fromPoints(l, l)), void this.addRange(r.fromPoints(a, a))
                        }
                        var c = [],
                            h = this.getLineRange(s, !0);
                        h.start.column = i.start.column, c.push(h);
                        for (var u = s + 1; u < o; u++) c.push(this.getLineRange(u, !0));
                        (h = this.getLineRange(o, !0)).end.column = i.end.column, c.push(h), c.forEach(this.addRange, this)
                    }
                }, this.toggleBlockSelection = function () {
                    if (this.rangeCount > 1) {
                        var e = this.rangeList.ranges,
                            t = e[e.length - 1],
                            i = r.fromPoints(e[0].start, t.end);
                        this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
                    } else {
                        var n = this.session.documentToScreenPosition(this.selectionLead),
                            s = this.session.documentToScreenPosition(this.selectionAnchor);
                        this.rectangularRangeBlock(n, s).forEach(this.addRange, this)
                    }
                }, this.rectangularRangeBlock = function (e, t, i) {
                    var n = [],
                        s = e.column < t.column;
                    if (s) var o = e.column,
                        a = t.column,
                        l = e.offsetX,
                        c = t.offsetX;
                    else o = t.column, a = e.column, l = t.offsetX, c = e.offsetX;
                    var h, u, d = e.row < t.row;
                    if (d) var g = e.row,
                        f = t.row;
                    else g = t.row, f = e.row;
                    o < 0 && (o = 0), g < 0 && (g = 0), g == f && (i = !0);
                    for (var p = g; p <= f; p++) {
                        var m = r.fromPoints(this.session.screenToDocumentPosition(p, o, l), this.session.screenToDocumentPosition(p, a, c));
                        if (m.isEmpty()) {
                            if (w && (h = m.end, u = w, h.row == u.row && h.column == u.column)) break;
                            var w = m.end
                        }
                        m.cursor = s ? m.start : m.end, n.push(m)
                    }
                    if (d && n.reverse(), !i) {
                        for (var A = n.length - 1; n[A].isEmpty() && A > 0;) A--;
                        if (A > 0)
                            for (var v = 0; n[v].isEmpty();) v++;
                        for (var b = A; b >= v; b--) n[b].isEmpty() && n.splice(b, 1)
                    }
                    return n
                }
            }.call(s.prototype);
        var d = e("./editor").Editor;

        function g(e) {
            e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", o), e.commands.addCommands(c.defaultCommands), function (e) {
                var t = e.textInput.getElement(),
                    i = !1;

                function n(t) {
                    i && (e.renderer.setMouseCursor(""), i = !1)
                }
                a.addListener(t, "keydown", (function (t) {
                    var r = 18 == t.keyCode && !(t.ctrlKey || t.shiftKey || t.metaKey);
                    e.$blockSelectEnabled && r ? i || (e.renderer.setMouseCursor("crosshair"), i = !0) : i && n()
                })), a.addListener(t, "keyup", n), a.addListener(t, "blur", n)
            }(e))
        } (function () {
            this.updateSelectionMarkers = function () {
                this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.addSelectionMarker = function (e) {
                e.cursor || (e.cursor = e.end);
                var t = this.getSelectionStyle();
                return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
            }, this.removeSelectionMarker = function (e) {
                if (e.marker) {
                    this.session.removeMarker(e.marker);
                    var t = this.session.$selectionMarkers.indexOf(e); - 1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
                }
            }, this.removeSelectionMarkers = function (e) {
                for (var t = this.session.$selectionMarkers, i = e.length; i--;) {
                    var n = e[i];
                    if (n.marker) {
                        this.session.removeMarker(n.marker);
                        var r = t.indexOf(n); - 1 != r && t.splice(r, 1)
                    }
                }
                this.session.selectionMarkerCount = t.length
            }, this.$onAddRange = function (e) {
                this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.$onRemoveRange = function (e) {
                this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.$onMultiSelect = function (e) {
                this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(c.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
            }, this.$onSingleSelect = function (e) {
                this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(c.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
            }, this.$onMultiSelectExec = function (e) {
                var t = e.command,
                    i = e.editor;
                if (i.multiSelect) {
                    if (t.multiSelectAction) "forEach" == t.multiSelectAction ? n = i.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? n = i.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (i.exitMultiSelectMode(), n = t.exec(i, e.args || {})) : n = t.multiSelectAction(i, e.args || {});
                    else {
                        var n = t.exec(i, e.args || {});
                        i.multiSelect.addRange(i.multiSelect.toOrientedRange()), i.multiSelect.mergeOverlappingRanges()
                    }
                    return n
                }
            }, this.forEachSelection = function (e, t, i) {
                if (!this.inVirtualSelectionMode) {
                    var n, r = i && i.keepOrder,
                        o = 1 == i || i && i.$byLines,
                        a = this.session,
                        l = this.selection,
                        c = l.rangeList,
                        h = (r ? l : c).ranges;
                    if (!h.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                    var u = l._eventRegistry;
                    l._eventRegistry = {};
                    var d = new s(a);
                    this.inVirtualSelectionMode = !0;
                    for (var g = h.length; g--;) {
                        if (o)
                            for (; g > 0 && h[g].start.row == h[g - 1].end.row;) g--;
                        d.fromOrientedRange(h[g]), d.index = g, this.selection = a.selection = d;
                        var f = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                        n || void 0 === f || (n = f), d.toOrientedRange(h[g])
                    }
                    d.detach(), this.selection = a.selection = l, this.inVirtualSelectionMode = !1, l._eventRegistry = u, l.mergeOverlappingRanges();
                    var p = this.renderer.$scrollAnimation;
                    return this.onCursorChange(), this.onSelectionChange(), p && p.from == p.to && this.renderer.animateScrolling(p.from), n
                }
            }, this.exitMultiSelectMode = function () {
                this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
            }, this.getSelectedText = function () {
                var e = "";
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    for (var t = this.multiSelect.rangeList.ranges, i = [], n = 0; n < t.length; n++) i.push(this.session.getTextRange(t[n]));
                    var r = this.session.getDocument().getNewLineCharacter();
                    (e = i.join(r)).length == (i.length - 1) * r.length && (e = "")
                } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
                return e
            }, this.$checkMultiselectChange = function (e, t) {
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    var i = this.multiSelect.ranges[0];
                    if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
                    var n = t == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
                    n.row == t.row && this.session.$clipPositionToDocument(n.row, n.column).column == t.column || this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange())
                }
            }, this.findAll = function (e, t, i) {
                if ((t = t || {}).needle = e || t.needle, null == t.needle) {
                    var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                    t.needle = this.session.getTextRange(n)
                }
                this.$search.set(t);
                var r = this.$search.findAll(this.session);
                if (!r.length) return 0;
                this.$blockScrolling += 1;
                var s = this.multiSelect;
                i || s.toSingleRange(r[0]);
                for (var o = r.length; o--;) s.addRange(r[o], !0);
                return n && s.rangeList.rangeAtPoint(n.start) && s.addRange(n, !0), this.$blockScrolling -= 1, r.length
            }, this.selectMoreLines = function (e, t) {
                var i = this.selection.toOrientedRange(),
                    n = i.cursor == i.end,
                    s = this.session.documentToScreenPosition(i.cursor);
                this.selection.$desiredColumn && (s.column = this.selection.$desiredColumn);
                var o, a = this.session.screenToDocumentPosition(s.row + e, s.column);
                if (i.isEmpty()) c = a;
                else var l = this.session.documentToScreenPosition(n ? i.end : i.start),
                    c = this.session.screenToDocumentPosition(l.row + e, l.column);
                n ? (o = r.fromPoints(a, c)).cursor = o.start : (o = r.fromPoints(c, a)).cursor = o.end;
                if (o.desiredColumn = s.column, this.selection.inMultiSelectMode) {
                    if (t) var h = i.cursor
                } else this.selection.addRange(i);
                this.selection.addRange(o), h && this.selection.substractPoint(h)
            }, this.transposeSelections = function (e) {
                for (var t = this.session, i = t.multiSelect, n = i.ranges, r = n.length; r--;) {
                    if ((a = n[r]).isEmpty()) {
                        var s = t.getWordRange(a.start.row, a.start.column);
                        a.start.row = s.start.row, a.start.column = s.start.column, a.end.row = s.end.row, a.end.column = s.end.column
                    }
                }
                i.mergeOverlappingRanges();
                var o = [];
                for (r = n.length; r--;) {
                    var a = n[r];
                    o.unshift(t.getTextRange(a))
                }
                e < 0 ? o.unshift(o.pop()) : o.push(o.shift());
                for (r = n.length; r--;) {
                    s = (a = n[r]).clone();
                    t.replace(a, o[r]), a.start.row = s.start.row, a.start.column = s.start.column
                }
            }, this.selectMore = function (e, t, i) {
                var n = this.session,
                    r = n.multiSelect.toOrientedRange();
                if (!r.isEmpty() || ((r = n.getWordRange(r.start.row, r.start.column)).cursor = -1 == e ? r.start : r.end, this.multiSelect.addRange(r), !i)) {
                    var s = n.getTextRange(r),
                        o = function (e, t, i) {
                            return h.$options.wrap = !0, h.$options.needle = t, h.$options.backwards = -1 == i, h.find(e)
                        }(n, s, e);
                    o && (o.cursor = -1 == e ? o.start : o.end, this.$blockScrolling += 1, this.session.unfold(o), this.multiSelect.addRange(o), this.$blockScrolling -= 1, this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(r.cursor)
                }
            }, this.alignCursors = function () {
                var e = this.session,
                    t = e.multiSelect,
                    i = t.ranges,
                    n = -1,
                    s = i.filter((function (e) {
                        if (e.cursor.row == n) return !0;
                        n = e.cursor.row
                    }));
                if (i.length && s.length != i.length - 1) {
                    s.forEach((function (e) {
                        t.substractPoint(e.cursor)
                    }));
                    var o = 0,
                        a = 1 / 0,
                        c = i.map((function (t) {
                            var i = t.cursor,
                                n = e.getLine(i.row).substr(i.column).search(/\S/g);
                            return -1 == n && (n = 0), i.column > o && (o = i.column), n < a && (a = n), n
                        }));
                    i.forEach((function (t, i) {
                        var n = t.cursor,
                            s = o - n.column,
                            h = c[i] - a;
                        s > h ? e.insert(n, l.stringRepeat(" ", s - h)) : e.remove(new r(n.row, n.column, n.row, n.column - s + h)), t.start.column = t.end.column = o, t.start.row = t.end.row = n.row, t.cursor = t.end
                    })), t.fromOrientedRange(i[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                } else {
                    var h = this.selection.getRange(),
                        u = h.start.row,
                        d = h.end.row,
                        g = u == d;
                    if (g) {
                        var f, p = this.session.getLength();
                        do {
                            f = this.session.getLine(d)
                        } while (/[=:]/.test(f) && ++d < p);
                        do {
                            f = this.session.getLine(u)
                        } while (/[=:]/.test(f) && --u > 0);
                        u < 0 && (u = 0), d >= p && (d = p - 1)
                    }
                    var m = this.session.removeFullLines(u, d);
                    m = this.$reAlignText(m, g), this.session.insert({
                        row: u,
                        column: 0
                    }, m.join("\n") + "\n"), g || (h.start.column = 0, h.end.column = m[m.length - 1].length), this.selection.setRange(h)
                }
            }, this.$reAlignText = function (e, t) {
                var i, n, r, s = !0,
                    o = !0;
                return e.map((function (e) {
                    var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                    return t ? null == i ? (i = t[1].length, n = t[2].length, r = t[3].length, t) : (i + n + r != t[1].length + t[2].length + t[3].length && (o = !1), i != t[1].length && (s = !1), i > t[1].length && (i = t[1].length), n < t[2].length && (n = t[2].length), r > t[3].length && (r = t[3].length), t) : [e]
                })).map(t ? c : s ? o ? function (e) {
                    return e[2] ? a(i + n - e[2].length) + e[2] + a(r) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                } : c : function (e) {
                    return e[2] ? a(i) + e[2] + a(r) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                });

                function a(e) {
                    return l.stringRepeat(" ", e)
                }

                function c(e) {
                    return e[2] ? a(i) + e[2] + a(n - e[2].length + r) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                }
            }
        }).call(d.prototype), t.onSessionChange = function (e) {
            var t = e.session;
            t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
            var i = e.oldSession;
            i && (i.multiSelect.off("addRange", this.$onAddRange), i.multiSelect.off("removeRange", this.$onRemoveRange), i.multiSelect.off("multiSelect", this.$onMultiSelect), i.multiSelect.off("singleSelect", this.$onSingleSelect), i.multiSelect.lead.off("change", this.$checkMultiselectChange), i.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
        }, t.MultiSelect = g, e("./config").defineOptions(d.prototype, "editor", {
            enableMultiselect: {
                set: function (e) {
                    g(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", o)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", o))
                },
                value: !0
            },
            enableBlockSelect: {
                set: function (e) {
                    this.$blockSelectEnabled = e
                },
                value: !0
            }
        })
    })), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("../../range").Range,
            r = t.FoldMode = function () { };
        (function () {
            this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, i) {
                var n = e.getLine(i);
                return this.foldingStartMarker.test(n) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : ""
            }, this.getFoldWidgetRange = function (e, t, i) {
                return null
            }, this.indentationBlock = function (e, t, i) {
                var r = /\S/,
                    s = e.getLine(t),
                    o = s.search(r);
                if (-1 != o) {
                    for (var a = i || s.length, l = e.getLength(), c = t, h = t; ++t < l;) {
                        var u = e.getLine(t).search(r);
                        if (-1 != u) {
                            if (u <= o) break;
                            h = t
                        }
                    }
                    if (h > c) {
                        var d = e.getLine(h).length;
                        return new n(c, a, h, d)
                    }
                }
            }, this.openingBracketBlock = function (e, t, i, r, s) {
                var o = {
                    row: i,
                    column: r + 1
                },
                    a = e.$findClosingBracket(t, o, s);
                if (a) {
                    var l = e.foldWidgets[a.row];
                    return null == l && (l = e.getFoldWidget(a.row)), "start" == l && a.row > o.row && (a.row--, a.column = e.getLine(a.row).length), n.fromPoints(o, a)
                }
            }, this.closingBracketBlock = function (e, t, i, r, s) {
                var o = {
                    row: i,
                    column: r
                },
                    a = e.$findOpeningBracket(t, o);
                if (a) return a.column++, o.column--, n.fromPoints(a, o)
            }
        }).call(r.prototype)
    })), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
        "use strict";
        t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', e("../lib/dom").importCssString(t.cssText, t.cssClass)
    })), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], (function (e, t, i) {
        "use strict";
        e("./lib/oop");
        var n = e("./lib/dom");
        e("./range").Range;

        function r(e) {
            this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor)
        } (function () {
            this.getRowLength = function (e) {
                var t;
                return t = this.lineWidgets && this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
            }, this.$getWidgetScreenLength = function () {
                var e = 0;
                return this.lineWidgets.forEach((function (t) {
                    t && t.rowCount && !t.hidden && (e += t.rowCount)
                })), e
            }, this.$onChangeEditor = function (e) {
                this.attach(e.editor)
            }, this.attach = function (e) {
                e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
            }, this.detach = function (e) {
                var t = this.editor;
                if (t) {
                    this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
                    var i = this.session.lineWidgets;
                    i && i.forEach((function (e) {
                        e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
                    }))
                }
            }, this.updateOnFold = function (e, t) {
                var i = t.lineWidgets;
                if (i && e.action) {
                    for (var n = e.data, r = n.start.row, s = n.end.row, o = "add" == e.action, a = r + 1; a < s; a++) i[a] && (i[a].hidden = o);
                    i[s] && (o ? i[r] ? i[s].hidden = o : i[r] = i[s] : (i[r] == i[s] && (i[r] = void 0), i[s].hidden = o))
                }
            }, this.updateOnChange = function (e) {
                var t = this.session.lineWidgets;
                if (t) {
                    var i = e.start.row,
                        n = e.end.row - i;
                    if (0 === n);
                    else if ("remove" == e.action) {
                        t.splice(i + 1, n).forEach((function (e) {
                            e && this.removeLineWidget(e)
                        }), this), this.$updateRows()
                    } else {
                        var r = new Array(n);
                        r.unshift(i, 0), t.splice.apply(t, r), this.$updateRows()
                    }
                }
            }, this.$updateRows = function () {
                var e = this.session.lineWidgets;
                if (e) {
                    var t = !0;
                    e.forEach((function (e, i) {
                        if (e)
                            for (t = !1, e.row = i; e.$oldWidget;) e.$oldWidget.row = i, e = e.$oldWidget
                    })), t && (this.session.lineWidgets = null)
                }
            }, this.addLineWidget = function (e) {
                this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
                var t = this.session.lineWidgets[e.row];
                t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = !1)), this.session.lineWidgets[e.row] = e, e.session = this.session;
                var i = this.editor.renderer;
                e.html && !e.el && (e.el = n.createElement("div"), e.el.innerHTML = e.html), e.el && (n.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, i.container.appendChild(e.el), e._inDocument = !0), e.coverGutter || (e.el.style.zIndex = 3), null == e.pixelHeight && (e.pixelHeight = e.el.offsetHeight), null == e.rowCount && (e.rowCount = e.pixelHeight / i.layerConfig.lineHeight);
                var r = this.session.getFoldAt(e.row, 0);
                if (e.$fold = r, r) {
                    var s = this.session.lineWidgets;
                    e.row != r.end.row || s[r.start.row] ? e.hidden = !0 : s[r.start.row] = e
                }
                return this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: e.row
                        }
                    }
                }), this.$updateRows(), this.renderWidgets(null, i), this.onWidgetChanged(e), e
            }, this.removeLineWidget = function (e) {
                if (e._inDocument = !1, e.session = null, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy) try {
                    e.editor.destroy()
                } catch (e) { }
                if (this.session.lineWidgets) {
                    var t = this.session.lineWidgets[e.row];
                    if (t == e) this.session.lineWidgets[e.row] = e.$oldWidget, e.$oldWidget && this.onWidgetChanged(e.$oldWidget);
                    else
                        for (; t;) {
                            if (t.$oldWidget == e) {
                                t.$oldWidget = e.$oldWidget;
                                break
                            }
                            t = t.$oldWidget
                        }
                }
                this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: e.row
                        }
                    }
                }), this.$updateRows()
            }, this.getWidgetsAtRow = function (e) {
                for (var t = this.session.lineWidgets, i = t && t[e], n = []; i;) n.push(i), i = i.$oldWidget;
                return n
            }, this.onWidgetChanged = function (e) {
                this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
            }, this.measureWidgets = function (e, t) {
                var i = this.session._changedWidgets,
                    n = t.layerConfig;
                if (i && i.length) {
                    for (var r = 1 / 0, s = 0; s < i.length; s++) {
                        var o = i[s];
                        if (o && o.el && o.session == this.session) {
                            if (!o._inDocument) {
                                if (this.session.lineWidgets[o.row] != o) continue;
                                o._inDocument = !0, t.container.appendChild(o.el)
                            }
                            o.h = o.el.offsetHeight, o.fixedWidth || (o.w = o.el.offsetWidth, o.screenWidth = Math.ceil(o.w / n.characterWidth));
                            var a = o.h / n.lineHeight;
                            o.coverLine && (a -= this.session.getRowLineCount(o.row)) < 0 && (a = 0), o.rowCount != a && (o.rowCount = a, o.row < r && (r = o.row))
                        }
                    }
                    r != 1 / 0 && (this.session._emit("changeFold", {
                        data: {
                            start: {
                                row: r
                            }
                        }
                    }), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
                }
            }, this.renderWidgets = function (e, t) {
                var i = t.layerConfig,
                    n = this.session.lineWidgets;
                if (n) {
                    for (var r = Math.min(this.firstRow, i.firstRow), s = Math.max(this.lastRow, i.lastRow, n.length); r > 0 && !n[r];) r--;
                    this.firstRow = i.firstRow, this.lastRow = i.lastRow, t.$cursorLayer.config = i;
                    for (var o = r; o <= s; o++) {
                        var a = n[o];
                        if (a && a.el)
                            if (a.hidden) a.el.style.top = -100 - (a.pixelHeight || 0) + "px";
                            else {
                                a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
                                var l = t.$cursorLayer.getPixelPosition({
                                    row: o,
                                    column: 0
                                }, !0).top;
                                a.coverLine || (l += i.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - i.offset + "px";
                                var c = a.coverGutter ? 0 : t.gutterWidth;
                                a.fixedWidth || (c -= t.scrollLeft), a.el.style.left = c + "px", a.fullWidth && a.screenWidth && (a.el.style.minWidth = i.width + 2 * i.padding + "px"), a.fixedWidth ? a.el.style.right = t.scrollBar.getWidth() + "px" : a.el.style.right = ""
                            }
                    }
                }
            }
        }).call(r.prototype), t.LineWidgets = r
    })), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], (function (e, t, i) {
        "use strict";
        var n = e("../line_widgets").LineWidgets,
            r = e("../lib/dom"),
            s = e("../range").Range;
        t.showErrorMarker = function (e, t) {
            var i = e.session;
            i.widgetManager || (i.widgetManager = new n(i), i.widgetManager.attach(e));
            var o = e.getCursorPosition(),
                a = o.row,
                l = i.widgetManager.getWidgetsAtRow(a).filter((function (e) {
                    return "errorMarker" == e.type
                }))[0];
            l ? l.destroy() : a -= t;
            var c, h = function (e, t, i) {
                var n = e.getAnnotations().sort(s.comparePoints);
                if (n.length) {
                    var r = function (e, t, i) {
                        for (var n = 0, r = e.length - 1; n <= r;) {
                            var s = n + r >> 1,
                                o = i(t, e[s]);
                            if (o > 0) n = s + 1;
                            else {
                                if (!(o < 0)) return s;
                                r = s - 1
                            }
                        }
                        return -(n + 1)
                    }(n, {
                        row: t,
                        column: -1
                    }, s.comparePoints);
                    r < 0 && (r = -r - 1), r >= n.length ? r = i > 0 ? 0 : n.length - 1 : 0 === r && i < 0 && (r = n.length - 1);
                    var o = n[r];
                    if (o && i) {
                        if (o.row === t) {
                            do {
                                o = n[r += i]
                            } while (o && o.row === t);
                            if (!o) return n.slice()
                        }
                        var a = [];
                        t = o.row;
                        do {
                            a[i < 0 ? "unshift" : "push"](o), o = n[r += i]
                        } while (o && o.row == t);
                        return a.length && a
                    }
                }
            }(i, a, t);
            if (h) {
                var u = h[0];
                o.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, o.row = u.row, c = e.renderer.$gutterLayer.$annotations[o.row]
            } else {
                if (l) return;
                c = {
                    text: ["Looks good!"],
                    className: "ace_ok"
                }
            }
            e.session.unfold(o.row), e.selection.moveToPosition(o);
            var d = {
                row: o.row,
                fixedWidth: !0,
                coverGutter: !0,
                el: r.createElement("div"),
                type: "errorMarker"
            },
                g = d.el.appendChild(r.createElement("div")),
                f = d.el.appendChild(r.createElement("div"));
            f.className = "error_widget_arrow " + c.className;
            var p = e.renderer.$cursorLayer.getPixelPosition(o).left;
            f.style.left = p + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", g.className = "error_widget " + c.className, g.innerHTML = c.text.join("<br>"), g.appendChild(r.createElement("div"));
            var m = function (e, t, i) {
                if (0 === t && ("esc" === i || "return" === i)) return d.destroy(), {
                    command: "null"
                }
            };
            d.destroy = function () {
                e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(m), i.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
            }, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {
                bottom: d.el.offsetHeight
            })
        }, r.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
    })), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], (function (e, t, n) {
        "use strict";
        e("./lib/fixoldbrowsers");
        var r = e("./lib/dom"),
            s = e("./lib/event"),
            o = e("./editor").Editor,
            a = e("./edit_session").EditSession,
            l = e("./undomanager").UndoManager,
            c = e("./virtual_renderer").VirtualRenderer;
        e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.acequire = e, t.define = i(7), t.edit = function (e) {
            if ("string" == typeof e) {
                var i = e;
                if (!(e = document.getElementById(i))) throw new Error("ace.edit can't find div #" + i)
            }
            if (e && e.env && e.env.editor instanceof o) return e.env.editor;
            var n = "";
            if (e && /input|textarea/i.test(e.tagName)) {
                var a = e;
                n = a.value, e = r.createElement("pre"), a.parentNode.replaceChild(e, a)
            } else e && (n = r.getInnerText(e), e.innerHTML = "");
            var l = t.createEditSession(n),
                h = new o(new c(e));
            h.setSession(l);
            var u = {
                document: l,
                editor: h,
                onResize: h.resize.bind(h, null)
            };
            return a && (u.textarea = a), s.addListener(window, "resize", u.onResize), h.on("destroy", (function () {
                s.removeListener(window, "resize", u.onResize), u.editor.container.env = null
            })), h.container.env = h.env = u, h
        }, t.createEditSession = function (e, t) {
            var i = new a(e, t);
            return i.setUndoManager(new l), i
        }, t.EditSession = a, t.UndoManager = l, t.version = "1.2.9"
    })), ace.acequire(["ace/ace"], (function (e) {
        for (var t in e && (e.config.init(!0), e.define = ace.define), window.ace || (window.ace = e), e) e.hasOwnProperty(t) && (window.ace[t] = e[t])
    })), e.exports = window.ace.acequire("ace/ace")
}, function (e, t) {
    e.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}, function (e, t) {
    e.exports = '(*\n\n  Welcome to EBNF 2 Railroad\n  ==========================\n\n  In this editor you can try out the command line tool.\n\n  Comments will be rendered throught markdown,\n  so you can do **markup** in them.\n\n  `Ctrl-Shift-C`/`Cmd-Shift-C` will expand the selected\n  string in `terminal` elements for each character,\n  as a choice element.\n\n  ```\n  digit = 1234567890;\n  ```\n\n  selecting the numbers and pressing `Ctrl-Shift-C` /\n  `Cmd-Shift-C`\n\n  will expand this into:\n\n  ```\n  digit = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";\n  ```\n\n  The EBNF syntax is as follows:\n\n*)\n\ngrammar = { rule } ;\nrule = lhs , "=" , rhs , ";" ;\n\nlhs = identifier ;\nrhs = identifier\n     | terminal\n     | "[" , rhs , "]"\n     | "{" , rhs , "}"\n     | "(" , rhs , ")"\n     | rhs , "|" , rhs\n     | rhs , "," , rhs ;\n\nidentifier = letter , { letter | digit | "_" } ;\nterminal = "\'" , character , { character } , "\'"\n         | \'"\' , character , { character } , \'"\' ;\n\ncharacter = letter | digit | symbol | "_" ;\n\n(*\n  Basic components\n  ----------------\n  These are low level components, the small building blocks.\n*)\n\nletter = "A" | "B" | "C" | "D" | "E" | "F" | "G"\n       | "H" | "I" | "J" | "K" | "L" | "M" | "N"\n       | "O" | "P" | "Q" | "R" | "S" | "T" | "U"\n       | "V" | "W" | "X" | "Y" | "Z" | "a" | "b"\n       | "c" | "d" | "e" | "f" | "g" | "h" | "i"\n       | "j" | "k" | "l" | "m" | "n" | "o" | "p"\n       | "q" | "r" | "s" | "t" | "u" | "v" | "w"\n       | "x" | "y" | "z" ;\n\ndigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;\n\nsymbol = "[" | "]" | "{" | "}" | "(" | ")" | "<" | ">"\n       | "\'" | \'"\' | "=" | "|" | "." | "," | ";" ;\n\n'
}, function (e, t, i) {
    "use strict";
    i.r(t);
    i(10);
    var n = i(8),
        r = i.n(n);
    const {
        parseEbnf: s,
        validateEbnf: o,
        createDocumentation: a,
        documentStyle: l,
        version: c,
        searchReferencesFromIdentifier: h
    } = i(11), u = document.createElement("style");
    u.setAttribute("type", "text/css"), u.innerHTML = l();
    document.getElementsByTagName("head")[0].appendChild(u);
    const d = i(6);
    i(32), i(33), i(34);
    const g = d.EditSession,
        f = d.acequire("ace/range").Range;
    i(35);
    let p = 1;
    document.querySelector("a.collapse").addEventListener("click", e => {
        e.preventDefault(), p = (p + 1) % 4, 1 === p || 3 === p ? document.body.classList.add("split") : document.body.classList.remove("split"), 0 !== p ? document.body.classList.remove("expanded") : document.body.classList.add("expanded")
    }), document.querySelector("body").addEventListener("click", (function (e) {
        e.target === document.querySelector("header button") && document.getElementsByTagName("html")[0].classList.toggle("menu-open"), "A" === e.target.tagName && document.querySelectorAll("nav a").forEach(t => {
            t === e.target && document.getElementsByTagName("html")[0].classList.remove("menu-open")
        })
    }));
    let m = [],
        w = !0,
        A = !0,
        v = !0;
    const b = (e, t = !0) => {
        const i = e.getValue();
        if (t) try {
            window.localStorage.setItem("ebnf2railroad-content", i)
        } catch (e) { }
        try {
            const t = "" === i.trim() ? [] : s(i);
            ((e, t) => {
                const i = o(t);
                e.getSession().clearAnnotations(), e.getSession().setAnnotations(i.map(e => ({
                    text: `${e.type}: ${e.message}`,
                    type: "warning",
                    column: 0,
                    row: e.line - 1
                })))
            })(e, t), (e => {
                m = e;
                const t = a(e, {
                    title: "Preview",
                    full: !1,
                    optimizeDiagrams: A,
                    textFormatting: w,
                    overviewDiagram: v
                });
                document.getElementById("result").innerHTML = t
            })(t)
        } catch (t) {
            if (t.data) {
                const {
                    expected: i,
                    line: n,
                    token: r,
                    pos: s
                } = t.data;
                e.getSession().clearAnnotations(), e.getSession().setAnnotations([{
                    text: `Parse error: Expected ${i}, got ${r}`,
                    type: "error",
                    column: void 0 === s ? 0 : s - 1,
                    row: n - 1
                }])
            } else console.error(t)
        }
    },
        C = new g(window.localStorage.getItem("ebnf2railroad-content") || r.a);
    C.setUndoManager(new d.UndoManager);
    const F = d.edit("editor");
    F.setOptions({
        enableLiveAutocompletion: !0,
        enableBasicAutocompletion: !1
    });
    const E = (e, t) => {
        const i = e.getValue(),
            n = i.split("\n")[t.row],
            r = n.slice(0, t.column),
            s = i.split("\n").slice(0, t.row).join("\n") + "\n",
            o = /(^|;)[^=]*$/.test(s + r),
            a = (s + n).match(/(?:^|;|\*\))\s*([a-zA-Z0-9\s]+)=[^=]*$/);
        return {
            identifierNaming: o,
            currentIdentifierName: a && a[1]
        }
    };
    F.completers = [{
        getCompletions: function (e, t, i, n, r) {
            const {
                identifierNaming: s
            } = E(t, i), o = m.filter(e => e.identifier).map(e => e.identifier), a = o.map(e => ({
                value: e,
                meta: "identifier"
            })), l = m.filter(e => e.identifier).map(e => h(e.identifier, m)).reduce((e, t) => e.concat(t), []).filter((e, t, i) => i.indexOf(e) === t).filter(e => !o.includes(e)).map(e => ({
                value: e,
                meta: "missing reference"
            }));
            r(null, s ? l : a.concat(l))
        }
    }], F.$blockScrolling = 1 / 0, F.setSession(C), F.getSession().setMode("ace/mode/ebnf"), window.editor = F, F.setTheme("ace/theme/iplastic"), F.session.setTabSize(2), F.session.setUseSoftTabs(!0), F.setHighlightActiveLine(!0), F.getSession().setUseWrapMode(!0), F.commands.addCommand({
        name: "Create terminal choices",
        bindKey: {
            win: "Ctrl-Shift-C",
            mac: "Command-Shift-C"
        },
        exec: function (e) {
            const t = e.getSelectionRange(),
                i = e.session.getTextRange(t).split("").map(e => `"${e}"`).join(" | ");
            e.session.replace(t, i)
        }
    }), F.commands.addCommand({
        name: "Prettify text",
        bindKey: {
            win: "Ctrl-Shift-P",
            mac: "Command-Shift-P"
        },
        exec: function (e) {
            w = !w, k()
        }
    }), F.commands.addCommand({
        name: "Optimize Diagrams",
        bindKey: {
            win: "Ctrl-Shift-O",
            mac: "Command-Shift-O"
        },
        exec: function (e) {
            A = !A, k()
        }
    }), F.commands.addCommand({
        name: "Overview Diagram",
        bindKey: {
            win: "Ctrl-Alt-O",
            mac: "Command-Option-O"
        },
        exec: function (e) {
            v = !v, k()
        }
    });
    const y = (e, t) => {
        const i = e.getSelectionRange(),
            n = e.session.getTextRange(i),
            r = e.session.getDocument().getLine(i.start.row),
            s = r.slice(0, i.start.column).split(t),
            o = s.slice(0, -1).join(t),
            a = r.slice(i.start.column).indexOf(t);
        if (s.length % 2 == 0 && -1 !== a) {
            const n = new f(i.start.row, o.length, i.start.row, i.start.column + a + t.length),
                r = e.session.getTextRange(n);
            r.startsWith(t) && r.endsWith(t) && e.session.replace(n, r.slice(t.length, -t.length))
        } else n.length > 0 && e.session.replace(i, `${t}${n}${t}`)
    };
    F.commands.addCommand({
        name: "Make markdown text bold",
        bindKey: {
            win: "Ctrl-B",
            mac: "Command-B"
        },
        exec: function (e) {
            y(e, "**")
        }
    }), F.commands.addCommand({
        name: "Make markdown text italic",
        bindKey: {
            win: "Ctrl-I",
            mac: "Command-I"
        },
        exec: function (e) {
            y(e, "_")
        }
    }), F.commands.addCommand({
        name: "toggle edit mode",
        bindKey: {
            win: "Ctrl-Shift-M",
            mac: "Command-Shift-M"
        },
        exec: function (e) {
            "ace/mode/ebnf" === e.session.getMode().$id ? (e.session.setMode("ace/mode/plain_text"), e.setOptions({
                enableLiveAutocompletion: !1,
                enableBasicAutocompletion: !1
            })) : (e.session.setMode("ace/mode/ebnf"), e.setOptions({
                enableLiveAutocompletion: !0,
                enableBasicAutocompletion: !1
            }))
        }
    }), b(F, !1), F.getSession().on("change", () => {
        k()
    }), setTimeout(() => {
        document.getElementById("editor-pane").classList.add("loaded")
    }, 1e3);
    let _;
    const k = () => {
        clearTimeout(_), _ = setTimeout(() => b(F), 200)
    },
        S = document.getElementById("result"),
        x = document.getElementById("header");
    F.session.selection.on("changeCursor", (function () {
        const e = F.selection.getCursor(),
            t = E(F.getSession(), e);
        if (t.currentIdentifierName) {
            const e = `h4[id=${i = t.currentIdentifierName.trim(), i.replace(/\s+/g, "-")}]`,
                n = document.querySelector(e);
            n && S && (S.scrollTop = n.offsetTop - x.clientHeight)
        }
        var i
    }))
}, function (e, t, i) { }, function (e, t, i) {
    const {
        parse: n
    } = i(12), {
        createDocumentation: r,
        documentStyle: s,
        validateEbnf: o
    } = i(16), {
        version: a
    } = i(31), {
        getReferences: l,
        searchReferencesFromIdentifier: c,
        searchReferencesToIdentifier: h
    } = i(1);
    var u;
    e.exports = {
        version: a,
        parseEbnf: (u = n, e => {
            try {
                return u(e)
            } catch (e) {
                const t = new Error(e.message);
                throw e.hash && (t.hash = e.hash, t.data = {
                    expected: e.hash.expected,
                    token: `'${e.hash.token[0]}'`,
                    line: e.hash.line + 1,
                    pos: e.hash.loc.last_column + 1
                }), t
            }
        }),
        createDocumentation: r,
        documentStyle: s,
        validateEbnf: o,
        getReferences: l,
        searchReferencesFromIdentifier: c,
        searchReferencesToIdentifier: h
    }
}, function (e, t, i) {
    (function (e, n) {
        var r = function () {
            var e = function (e, t, i, n) {
                for (i = i || {}, n = e.length; n--; i[e[n]] = t);
                return i
            },
                t = [1, 4],
                i = [1, 6],
                n = [5, 7, 29],
                r = [1, 20],
                s = [1, 11],
                o = [1, 12],
                a = [1, 13],
                l = [1, 15],
                c = [1, 21],
                h = [1, 22],
                u = [1, 24],
                d = [1, 25],
                g = [10, 12, 13, 15, 17, 19, 29],
                f = [10, 12, 13, 15, 17, 19],
                p = {
                    trace: function () { },
                    yy: {},
                    symbols_: {
                        error: 2,
                        grammar: 3,
                        production_list: 4,
                        EOF: 5,
                        production: 6,
                        IDENTIFIER: 7,
                        "=": 8,
                        rhs: 9,
                        ";": 10,
                        comment: 11,
                        ",": 12,
                        "|": 13,
                        "{": 14,
                        "}": 15,
                        "(": 16,
                        ")": 17,
                        "[": 18,
                        "]": 19,
                        DIGIT: 20,
                        "*": 21,
                        identifier: 22,
                        terminal: 23,
                        exception: 24,
                        specialSequence: 25,
                        "-": 26,
                        STRING: 27,
                        SEQUENCE: 28,
                        COMMENT: 29,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        7: "IDENTIFIER",
                        8: "=",
                        10: ";",
                        12: ",",
                        13: "|",
                        14: "{",
                        15: "}",
                        16: "(",
                        17: ")",
                        18: "[",
                        19: "]",
                        20: "DIGIT",
                        21: "*",
                        26: "-",
                        27: "STRING",
                        28: "SEQUENCE",
                        29: "COMMENT"
                    },
                    productions_: [0, [3, 2],
                        [4, 2],
                        [4, 1],
                        [6, 4],
                        [6, 1],
                        [9, 3],
                        [9, 3],
                        [9, 3],
                        [9, 3],
                        [9, 3],
                        [9, 4],
                        [9, 3],
                        [9, 2],
                        [9, 1],
                        [9, 1],
                        [9, 1],
                        [9, 1],
                        [24, 3],
                        [24, 3],
                        [22, 1],
                        [25, 1],
                        [23, 1],
                        [11, 1]
                    ],
                    performAction: function (e, t, i, n, r, s, o) {
                        var a = s.length - 1;
                        switch (r) {
                            case 1:
                                return s[a - 1];
                            case 2:
                                this.$ = s[a - 1].concat(s[a]);
                                break;
                            case 3:
                                this.$ = [s[a]];
                                break;
                            case 4:
                                this.$ = {
                                    identifier: s[a - 3].trim(),
                                    definition: s[a - 1],
                                    location: o[a - 3].first_line
                                };
                                break;
                            case 6:
                                this.$ = s[a - 2].sequence ? {
                                    sequence: s[a - 2].sequence.concat(s[a])
                                } : {
                                    sequence: [s[a - 2], s[a]]
                                };
                                break;
                            case 7:
                                this.$ = s[a - 2].choice ? {
                                    choice: s[a - 2].choice.concat(s[a])
                                } : {
                                    choice: [s[a - 2], s[a]]
                                };
                                break;
                            case 8:
                                this.$ = {
                                    repetition: s[a - 1],
                                    skippable: !0
                                };
                                break;
                            case 9:
                                this.$ = {
                                    group: s[a - 1]
                                };
                                break;
                            case 10:
                                this.$ = {
                                    optional: s[a - 1]
                                };
                                break;
                            case 11:
                                this.$ = {
                                    comment: s[a - 3].comment,
                                    before: !0,
                                    group: {
                                        optional: s[a - 1]
                                    }
                                };
                                break;
                            case 12:
                                this.$ = {
                                    repetition: s[a],
                                    amount: s[a - 2]
                                };
                                break;
                            case 13:
                                this.$ = {
                                    ...s[a],
                                    group: s[a - 1]
                                };
                                break;
                            case 18:
                                this.$ = {
                                    include: s[a - 2].trim(),
                                    exceptNonTerminal: s[a].trim()
                                };
                                break;
                            case 19:
                                this.$ = {
                                    include: s[a - 2].trim(),
                                    exceptTerminal: s[a].slice(1, -1)
                                };
                                break;
                            case 20:
                                this.$ = {
                                    nonTerminal: s[a].trim()
                                };
                                break;
                            case 21:
                                this.$ = {
                                    specialSequence: s[a].slice(1, -1).trim()
                                };
                                break;
                            case 22:
                                this.$ = {
                                    terminal: s[a].slice(1, -1)
                                };
                                break;
                            case 23:
                                this.$ = {
                                    comment: s[a].slice(2, -2)
                                }
                        }
                    },
                    table: [{
                        3: 1,
                        4: 2,
                        6: 3,
                        7: t,
                        11: 5,
                        29: i
                    }, {
                        1: [3]
                    }, {
                        5: [1, 7],
                        6: 8,
                        7: t,
                        11: 5,
                        29: i
                    }, e(n, [2, 3]), {
                        8: [1, 9]
                    }, e(n, [2, 5]), e([5, 7, 10, 12, 13, 15, 17, 18, 19, 29], [2, 23]), {
                        1: [2, 1]
                    }, e(n, [2, 2]), {
                        7: r,
                        9: 10,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        10: [1, 23],
                        11: 26,
                        12: u,
                        13: d,
                        29: i
                    }, {
                        7: r,
                        9: 27,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        7: r,
                        9: 28,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        7: r,
                        9: 29,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        18: [1, 30]
                    }, {
                        21: [1, 31]
                    }, e(g, [2, 14]), e(g, [2, 15]), e(g, [2, 16]), e(g, [2, 17]), e(g, [2, 20], {
                        26: [1, 32]
                    }), e(g, [2, 22]), e(g, [2, 21]), e(n, [2, 4]), {
                        7: r,
                        9: 33,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        7: r,
                        9: 34,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, e(g, [2, 13]), {
                        11: 26,
                        12: u,
                        13: d,
                        15: [1, 35],
                        29: i
                    }, {
                        11: 26,
                        12: u,
                        13: d,
                        17: [1, 36],
                        29: i
                    }, {
                        11: 26,
                        12: u,
                        13: d,
                        19: [1, 37],
                        29: i
                    }, {
                        7: r,
                        9: 38,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        7: r,
                        9: 39,
                        11: 14,
                        14: s,
                        16: o,
                        18: a,
                        20: l,
                        22: 16,
                        23: 17,
                        24: 18,
                        25: 19,
                        27: c,
                        28: h,
                        29: i
                    }, {
                        7: [1, 40],
                        27: [1, 41]
                    }, e(f, [2, 6], {
                        11: 26,
                        29: i
                    }), e([10, 13, 15, 17, 19], [2, 7], {
                        11: 26,
                        12: u,
                        29: i
                    }), e(g, [2, 8]), e(g, [2, 9]), e(g, [2, 10]), {
                        11: 26,
                        12: u,
                        13: d,
                        19: [1, 42],
                        29: i
                    }, e(f, [2, 12], {
                        11: 26,
                        29: i
                    }), e(g, [2, 18]), e(g, [2, 19]), e(g, [2, 11])],
                    defaultActions: {
                        7: [2, 1]
                    },
                    parseError: function (e, t) {
                        if (!t.recoverable) {
                            var i = new Error(e);
                            throw i.hash = t, i
                        }
                        this.trace(e)
                    },
                    parse: function (e) {
                        var t = this,
                            i = [0],
                            n = [null],
                            r = [],
                            s = this.table,
                            o = "",
                            a = 0,
                            l = 0,
                            c = 0,
                            h = 2,
                            u = 1,
                            d = r.slice.call(arguments, 1),
                            g = Object.create(this.lexer),
                            f = {
                                yy: {}
                            };
                        for (var p in this.yy) Object.prototype.hasOwnProperty.call(this.yy, p) && (f.yy[p] = this.yy[p]);
                        g.setInput(e, f.yy), f.yy.lexer = g, f.yy.parser = this, void 0 === g.yylloc && (g.yylloc = {});
                        var m = g.yylloc;
                        r.push(m);
                        var w = g.options && g.options.ranges;
                        "function" == typeof f.yy.parseError ? this.parseError = f.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
                        for (var A, v, b, C, F, E, y, _, k, S = function () {
                            var e;
                            return "number" != typeof (e = g.lex() || u) && (e = t.symbols_[e] || e), e
                        }, x = {}; ;) {
                            if (b = i[i.length - 1], this.defaultActions[b] ? C = this.defaultActions[b] : (null == A && (A = S()), C = s[b] && s[b][A]), void 0 === C || !C.length || !C[0]) {
                                var $ = "";
                                for (E in k = [], s[b]) this.terminals_[E] && E > h && k.push("'" + this.terminals_[E] + "'");
                                $ = g.showPosition ? "Parse error on line " + (a + 1) + ":\n" + g.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : "Parse error on line " + (a + 1) + ": Unexpected " + (A == u ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError($, {
                                    text: g.match,
                                    token: this.terminals_[A] || A,
                                    line: g.yylineno,
                                    loc: m,
                                    expected: k
                                })
                            }
                            if (C[0] instanceof Array && C.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + A);
                            switch (C[0]) {
                                case 1:
                                    i.push(A), n.push(g.yytext), r.push(g.yylloc), i.push(C[1]), A = null, v ? (A = v, v = null) : (l = g.yyleng, o = g.yytext, a = g.yylineno, m = g.yylloc, c > 0 && c--);
                                    break;
                                case 2:
                                    if (y = this.productions_[C[1]][1], x.$ = n[n.length - y], x._$ = {
                                        first_line: r[r.length - (y || 1)].first_line,
                                        last_line: r[r.length - 1].last_line,
                                        first_column: r[r.length - (y || 1)].first_column,
                                        last_column: r[r.length - 1].last_column
                                    }, w && (x._$.range = [r[r.length - (y || 1)].range[0], r[r.length - 1].range[1]]), void 0 !== (F = this.performAction.apply(x, [o, l, a, f.yy, C[1], n, r].concat(d)))) return F;
                                    y && (i = i.slice(0, -1 * y * 2), n = n.slice(0, -1 * y), r = r.slice(0, -1 * y)), i.push(this.productions_[C[1]][0]), n.push(x.$), r.push(x._$), _ = s[i[i.length - 2]][i[i.length - 1]], i.push(_);
                                    break;
                                case 3:
                                    return !0
                            }
                        }
                        return !0
                    }
                },
                m = {
                    EOF: 1,
                    parseError: function (e, t) {
                        if (!this.yy.parser) throw new Error(e);
                        this.yy.parser.parseError(e, t)
                    },
                    setInput: function (e, t) {
                        return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                    },
                    input: function () {
                        var e = this._input[0];
                        return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                    },
                    unput: function (e) {
                        var t = e.length,
                            i = e.split(/(?:\r\n?|\n)/g);
                        this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t), this.offset -= t;
                        var n = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
                        var r = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - t
                        }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this
                    },
                    more: function () {
                        return this._more = !0, this
                    },
                    reject: function () {
                        return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    less: function (e) {
                        this.unput(this.match.slice(e))
                    },
                    pastInput: function () {
                        var e = this.matched.substr(0, this.matched.length - this.match.length);
                        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function () {
                        var e = this.match;
                        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function () {
                        var e = this.pastInput(),
                            t = new Array(e.length + 1).join("-");
                        return e + this.upcomingInput() + "\n" + t + "^"
                    },
                    test_match: function (e, t) {
                        var i, n, r;
                        if (this.options.backtrack_lexer && (r = {
                            yylineno: this.yylineno,
                            yylloc: {
                                first_line: this.yylloc.first_line,
                                last_line: this.last_line,
                                first_column: this.yylloc.first_column,
                                last_column: this.yylloc.last_column
                            },
                            yytext: this.yytext,
                            match: this.match,
                            matches: this.matches,
                            matched: this.matched,
                            yyleng: this.yyleng,
                            offset: this.offset,
                            _more: this._more,
                            _input: this._input,
                            yy: this.yy,
                            conditionStack: this.conditionStack.slice(0),
                            done: this.done
                        }, this.options.ranges && (r.yylloc.range = this.yylloc.range.slice(0))), (n = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += n.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                        }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], i = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i) return i;
                        if (this._backtrack) {
                            for (var s in r) this[s] = r[s];
                            return !1
                        }
                        return !1
                    },
                    next: function () {
                        if (this.done) return this.EOF;
                        var e, t, i, n;
                        this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                        for (var r = this._currentRules(), s = 0; s < r.length; s++)
                            if ((i = this._input.match(this.rules[r[s]])) && (!t || i[0].length > t[0].length)) {
                                if (t = i, n = s, this.options.backtrack_lexer) {
                                    if (!1 !== (e = this.test_match(i, r[s]))) return e;
                                    if (this._backtrack) {
                                        t = !1;
                                        continue
                                    }
                                    return !1
                                }
                                if (!this.options.flex) break
                            } return t ? !1 !== (e = this.test_match(t, r[n])) && e : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            })
                    },
                    lex: function () {
                        var e = this.next();
                        return e || this.lex()
                    },
                    begin: function (e) {
                        this.conditionStack.push(e)
                    },
                    popState: function () {
                        return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0]
                    },
                    _currentRules: function () {
                        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
                    },
                    topState: function (e) {
                        return (e = this.conditionStack.length - 1 - Math.abs(e || 0)) >= 0 ? this.conditionStack[e] : "INITIAL"
                    },
                    pushState: function (e) {
                        this.begin(e)
                    },
                    stateStackSize: function () {
                        return this.conditionStack.length
                    },
                    options: {},
                    performAction: function (e, t, i, n) {
                        switch (i) {
                            case 0:
                                break;
                            case 1:
                                return 29;
                            case 2:
                                return 7;
                            case 3:
                                return 20;
                            case 4:
                                return 18;
                            case 5:
                                return 19;
                            case 6:
                                return 14;
                            case 7:
                                return 15;
                            case 8:
                                return 21;
                            case 9:
                                return 8;
                            case 10:
                            case 11:
                                return 10;
                            case 12:
                                return 12;
                            case 13:
                            case 14:
                            case 15:
                                return 13;
                            case 16:
                                return 26;
                            case 17:
                                return 14;
                            case 18:
                                return 15;
                            case 19:
                                return 16;
                            case 20:
                                return 17;
                            case 21:
                                return 18;
                            case 22:
                                return 19;
                            case 23:
                            case 24:
                                return 27;
                            case 25:
                                return 28;
                            case 26:
                                return 5;
                            case 27:
                                return t.yytext
                        }
                    },
                    rules: [/^(?:\s+)/, /^(?:\(\*([^*]|\*(?=[^)]))*\*\))/, /^(?:[A-Za-z][A-Za-z0-9 _]*)/, /^(?:[0-9]+)/, /^(?:\(\/)/, /^(?:\/\))/, /^(?:\(:)/, /^(?::\))/, /^(?:\*)/, /^(?:=)/, /^(?:;)/, /^(?:\.)/, /^(?:,)/, /^(?:\|)/, /^(?:\/)/, /^(?:!)/, /^(?:-)/, /^(?:\{)/, /^(?:\})/, /^(?:\()/, /^(?:\))/, /^(?:\[)/, /^(?:\])/, /^(?:"[^"]+")/, /^(?:'[^']+')/, /^(?:\?[^\?]+\?)/, /^(?:$)/, /^(?:.*)/],
                    conditions: {
                        INITIAL: {
                            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                            inclusive: !0
                        }
                    }
                };

            function w() {
                this.yy = {}
            }
            return p.lexer = m, w.prototype = p, p.Parser = w, new w
        }();
        t.parser = r, t.Parser = r.Parser, t.parse = function () {
            return r.parse.apply(r, arguments)
        }, t.main = function (n) {
            n[1] || (console.log("Usage: " + n[0] + " FILE"), e.exit(1));
            var r = i(14).readFileSync(i(15).normalize(n[1]), "utf8");
            return t.parser.parse(r)
        }, i.c[i.s] === n && t.main(e.argv.slice(1))
    }).call(this, i(2), i(13)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t) { }, function (e, t, i) {
    (function (e) {
        function i(e, t) {
            for (var i = 0, n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                "." === r ? e.splice(n, 1) : ".." === r ? (e.splice(n, 1), i++) : i && (e.splice(n, 1), i--)
            }
            if (t)
                for (; i--; i) e.unshift("..");
            return e
        }

        function n(e, t) {
            if (e.filter) return e.filter(t);
            for (var i = [], n = 0; n < e.length; n++) t(e[n], n, e) && i.push(e[n]);
            return i
        }
        t.resolve = function () {
            for (var t = "", r = !1, s = arguments.length - 1; s >= -1 && !r; s--) {
                var o = s >= 0 ? arguments[s] : e.cwd();
                if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                o && (t = o + "/" + t, r = "/" === o.charAt(0))
            }
            return (r ? "/" : "") + (t = i(n(t.split("/"), (function (e) {
                return !!e
            })), !r).join("/")) || "."
        }, t.normalize = function (e) {
            var s = t.isAbsolute(e),
                o = "/" === r(e, -1);
            return (e = i(n(e.split("/"), (function (e) {
                return !!e
            })), !s).join("/")) || s || (e = "."), e && o && (e += "/"), (s ? "/" : "") + e
        }, t.isAbsolute = function (e) {
            return "/" === e.charAt(0)
        }, t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(n(e, (function (e, t) {
                if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                return e
            })).join("/"))
        }, t.relative = function (e, i) {
            function n(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++);
                for (var i = e.length - 1; i >= 0 && "" === e[i]; i--);
                return t > i ? [] : e.slice(t, i - t + 1)
            }
            e = t.resolve(e).substr(1), i = t.resolve(i).substr(1);
            for (var r = n(e.split("/")), s = n(i.split("/")), o = Math.min(r.length, s.length), a = o, l = 0; l < o; l++)
                if (r[l] !== s[l]) {
                    a = l;
                    break
                } var c = [];
            for (l = a; l < r.length; l++) c.push("..");
            return (c = c.concat(s.slice(a))).join("/")
        }, t.sep = "/", t.delimiter = ":", t.dirname = function (e) {
            if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
            for (var t = e.charCodeAt(0), i = 47 === t, n = -1, r = !0, s = e.length - 1; s >= 1; --s)
                if (47 === (t = e.charCodeAt(s))) {
                    if (!r) {
                        n = s;
                        break
                    }
                } else r = !1;
            return -1 === n ? i ? "/" : "." : i && 1 === n ? "/" : e.slice(0, n)
        }, t.basename = function (e, t) {
            var i = function (e) {
                "string" != typeof e && (e += "");
                var t, i = 0,
                    n = -1,
                    r = !0;
                for (t = e.length - 1; t >= 0; --t)
                    if (47 === e.charCodeAt(t)) {
                        if (!r) {
                            i = t + 1;
                            break
                        }
                    } else - 1 === n && (r = !1, n = t + 1);
                return -1 === n ? "" : e.slice(i, n)
            }(e);
            return t && i.substr(-1 * t.length) === t && (i = i.substr(0, i.length - t.length)), i
        }, t.extname = function (e) {
            "string" != typeof e && (e += "");
            for (var t = -1, i = 0, n = -1, r = !0, s = 0, o = e.length - 1; o >= 0; --o) {
                var a = e.charCodeAt(o);
                if (47 !== a) - 1 === n && (r = !1, n = o + 1), 46 === a ? -1 === t ? t = o : 1 !== s && (s = 1) : -1 !== t && (s = -1);
                else if (!r) {
                    i = o + 1;
                    break
                }
            }
            return -1 === t || -1 === n || 0 === s || 1 === s && t === n - 1 && t === i + 1 ? "" : e.slice(t, n)
        };
        var r = "b" === "ab".substr(-1) ? function (e, t, i) {
            return e.substr(t, i)
        } : function (e, t, i) {
            return t < 0 && (t = e.length + t), e.substr(t, i)
        }
    }).call(this, i(2))
}, function (e, t, i) {
    const {
        optimizeText: n
    } = i(3), {
        documentContent: r,
        documentFrame: s,
        documentStyle: o,
        ebnfTemplate: a,
        commentTemplate: l
    } = i(24), {
        getReferences: c,
        searchReferencesFromIdentifier: h,
        searchReferencesToIdentifier: u
    } = i(1), {
        createAlphabeticalToc: d,
        createStructuralToc: g,
        createDefinitionMetadata: f
    } = i(27), {
        productionToEBNF: p
    } = i(28), {
        createDiagram: m
    } = i(29), w = (e, t) => e.map(e => {
        return `<li${(t[e.name] || {}).root ? ' class="root-node"' : (t[e.name] || {}).common ? ' class="common-node"' : ""}><a href="#${i = e.name.trim(), i.replace(/\s+/g, "-")}">${e.name.trim()}</a>\n        ${(t[e.name] || {}).recursive ? '<dfn title="recursive">♺</dfn>' : ""}\n        ${e.children ? `<ul>${w(e.children, t)}</ul>` : ""}\n      </li>`;
        var i
    }).join("");
    e.exports = {
        createDocumentation: (e, t) => {
            const i = g(e),
                c = f(i),
                A = e.map(i => {
                    if (i.comment) return l(i.comment);
                    const r = h(i.identifier, e),
                        s = m(i, c, e, {
                            ...t,
                            overview: c[i.identifier].root && t.overviewDiagram,
                            complex: r.length > 0
                        });
                    return a({
                        identifier: i.identifier,
                        ebnf: p(t.optimizeText ? n(i) : i, {
                            markup: !0,
                            format: t.textFormatting
                        }),
                        referencedBy: u(i.identifier, e),
                        referencesTo: r,
                        diagram: (o = s, o.replace(/>\s+</g, "><"))
                    });
                    var o
                }).join(""),
                v = d(e),
                b = e => (c[e.name] || {}).root,
                C = e => (c[e.name] || {}).common,
                F = e => (c[e.name] || {}).characterSet,
                E = v.filter(e => b(e) && !F(e)),
                y = v.filter(e => F(e)),
                _ = v.filter(e => !b(e) && !F(e) && C(e)),
                k = v.filter(e => !b(e) && !C(e) && !F(e)),
                S = w(i, c),
                x = r({
                    title: t.title,
                    contents: A,
                    singleRoot: 1 === E.length,
                    toc: {
                        hierarchical: S,
                        common: w(_, c),
                        roots: w(E, c),
                        characterSets: w(y, c),
                        other: w(k, c)
                    }
                });
            return !1 !== t.full ? s({
                body: x,
                head: `<style type="text/css">${o()}</style>`,
                title: t.title
            }) : x
        },
        validateEbnf: e => {
            const t = e.map(e => e && e.identifier),
                i = e.map((i, n) => {
                    if (!i.identifier) return !1;
                    const r = t.indexOf(i.identifier);
                    return r !== n && {
                        line: i.location,
                        type: "Duplicate declaration",
                        message: `"${i.identifier}" already declared on line ${e[r].location}`
                    }
                }).filter(Boolean),
                n = e.filter(e => e.identifier).map(e => c(e).filter((e, t, i) => i.indexOf(e) === t).filter(e => !t.includes(e)).map(t => ({
                    line: e.location,
                    type: "Missing reference",
                    message: `"${t}" is not declared`
                }))).filter(e => e.length > 0).reduce((e, t) => e.concat(t), []);
            return i.concat(n).sort((e, t) => e.line - t.line)
        },
        documentStyle: o
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0);
    e.exports = {
        [n.Group]: (e, t, i) => i[0].sequence && e.group.choice || e.comment ? e : e.group,
        [n.Sequence]: e => {
            if (!e.sequence) return e;
            return e.sequence.some(e => e.sequence) ? {
                ...e,
                sequence: e.sequence.reduce((e, t) => t.sequence ? e.concat(t.sequence) : e.concat(t), [])
            } : 1 === e.sequence.length ? e.sequence[0] : e
        },
        [n.Choice]: e => e.choice.some(e => e.choice) ? {
            ...e,
            choice: e.choice.reduce((e, t) => t.choice ? e.concat(t.choice) : e.concat(t), [])
        } : e
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0);
    e.exports = {
        [n.Choice]: e => {
            if (!e.choice) return e;
            const t = e.choice.map(e => JSON.stringify(e)),
                i = e.choice.filter((e, i) => !(t.indexOf(JSON.stringify(e)) < i)),
                n = e.choice.map(e => e.group && e.comment ? JSON.stringify(e.group) : null),
                r = i.filter(e => !e.comment && -1 === n.indexOf(JSON.stringify(e)) || e.comment);
            return 1 === r.length ? e.choice[0] : r.length < e.choice.length ? {
                ...e,
                choice: r
            } : e
        }
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0);
    e.exports = {
        [n.Optional]: e => e.optional.repetition || e.optional.optional ? e.optional : e
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0);
    e.exports = {
        [n.Choice]: e => {
            if (!e.choice) return e;
            return e.choice.some(e => e.optional) ? {
                optional: {
                    choice: e.choice.reduce((e, t) => t.optional ? e.concat(t.optional) : e.concat(t), [])
                }
            } : e
        }
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0);
    e.exports = {
        [n.Optional]: e => e.optional && e.optional.choice ? {
            choice: [{
                skip: !0
            }].concat(e.optional.choice.filter(e => !e.skip).map(e => e.repetition ? {
                ...e,
                skippable: !1
            } : e))
        } : e,
        [n.Choice]: e => {
            if (!e.choice) return e;
            return e.choice.some(e => e.repetition && e.skippable) ? {
                choice: [{
                    skip: !0
                }].concat(e.choice.filter(e => !e.skip).map(e => e.repetition ? {
                    ...e,
                    skippable: !1
                } : e))
            } : e
        }
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0), r = (e, t) => JSON.stringify(e) === JSON.stringify(t), s = e => e.group && !e.comment ? e.group : e;
    e.exports = {
        [n.Sequence]: e => {
            if (!e.sequence) return e;
            if (!e.sequence.some(e => e.repetition || e.group && e.group.repetition)) return e;
            const t = {
                ...e,
                sequence: e.sequence.map(e => e.comment && e.group && !e.group.optional ? e.before ? [{
                    comment: e.comment
                }, e.group] : [e.group, {
                    comment: e.comment
                }] : [e]).reduce((e, t) => e.concat(t), []).map((e, t, i) => {
                    if (e.repetition && t > 0)
                        if (e.repetition.sequence) {
                            const n = e.repetition.sequence,
                                s = [];
                            let o = !0,
                                a = 1;
                            do {
                                const e = n[n.length - a],
                                    l = i[t - a];
                                e && l && r(e, l) ? s.push(e) : o = !1, a++
                            } while (o);
                            if (s.length > 0) {
                                const e = n.slice(0, -s.length).reverse(),
                                    t = {
                                        clearPrevious: s.length,
                                        repetition: {
                                            sequence: s.reverse()
                                        },
                                        skippable: !1
                                    };
                                if (e.length > 0) {
                                    const i = e.length > 1 ? {
                                        sequence: e
                                    } : e[0];
                                    t.repeater = i
                                }
                                return t
                            }
                        } else {
                            const n = e.repetition,
                                o = i[t - 1];
                            if (r(s(n), s(o))) return {
                                clearPrevious: 1,
                                repetition: s(n),
                                skippable: !1
                            }
                        } return e
                }).filter((e, t, i) => {
                    if (!e) return !1;
                    let n = 1;
                    for (e.clearPrevious && delete e.clearPrevious; void 0 !== i[n + t];) {
                        const e = i[n + t];
                        if (e.clearPrevious && e.clearPrevious >= n) return !1;
                        n += 1
                    }
                    return !0
                }).map(e => e.sequence ? e.sequence : [e]).reduce((e, t) => e.concat(t), [])
            };
            return r(t, e) ? e : 1 == t.sequence.length ? t.sequence[0] : t
        }
    }
}, function (e, t, i) {
    const {
        NodeTypes: n
    } = i(0);
    e.exports = {
        [n.Choice]: e => {
            if (!e.choice) return e;
            const t = e => e.terminal && e || e.nonTerminal && e,
                i = e => e.every(e => e) ? e.reduce((e, t) => {
                    const i = JSON.stringify(t);
                    return e[i] = (e[i] || 0) + 1, e
                }, {}) : {},
                n = e => {
                    const t = Object.values(e);
                    return Math.max(...t)
                },
                r = e.choice.map(e => t(e) || e.sequence && t(e.sequence[0])),
                s = e.choice.map(e => t(e) || e.sequence && t(e.sequence[e.sequence.length - 1])),
                o = i(r),
                a = i(s),
                l = n(o),
                c = n(a);
            if (Math.max(l, c) > 1) {
                const t = [],
                    i = [];
                if (l >= c) {
                    const n = Object.entries(o).find(([, e]) => e === l)[0];
                    let s = !1,
                        a = !1;
                    const c = r.map((r, o) => {
                        if (JSON.stringify(r) === n) {
                            a = !0;
                            const t = e.choice[o];
                            if (t.sequence) return {
                                ...t,
                                sequence: t.sequence.slice(1)
                            };
                            s = !0
                        } else (a ? i : t).push(e.choice[o])
                    }).filter(Boolean),
                        h = [JSON.parse(n), c.length > 0 && s && {
                            optional: 1 == c.length ? c[0] : {
                                choice: c
                            }
                        }, c.length > 0 && !s && (1 == c.length ? c[0] : {
                            choice: c
                        })].filter(Boolean),
                        u = h.length > 1 ? {
                            sequence: h
                        } : h[0];
                    return t.length + i.length > 0 ? {
                        choice: [].concat(t).concat(u).concat(i)
                    } : u
                } {
                    const n = Object.entries(a).find(([, e]) => e === c)[0];
                    let r = !1,
                        o = !1;
                    const l = s.map((s, a) => {
                        if (JSON.stringify(s) === n) {
                            o = !0;
                            const t = e.choice[a];
                            if (t.sequence) return {
                                ...t,
                                sequence: t.sequence.slice(0, -1)
                            };
                            r = !0
                        } else (o ? i : t).push(e.choice[a])
                    }).filter(Boolean),
                        h = [l.length > 0 && r && {
                            optional: 1 == l.length ? l[0] : {
                                choice: l
                            }
                        }, l.length > 0 && !r && (1 == l.length ? l[0] : {
                            choice: l
                        }), JSON.parse(n)].filter(Boolean),
                        u = h.length > 1 ? {
                            sequence: h
                        } : h[0];
                    return t.length + i.length > 0 ? {
                        choice: [].concat(t).concat(u).concat(i)
                    } : u
                }
            }
            const h = {
                ...e,
                choice: (u = e.choice.map(e => {
                    const t = e;
                    return t.choice ? t.choice : [t]
                }).reduce((e, t) => e.concat(t), []), [u.some(e => "skip" === e || e.skip) && {
                    skip: !0
                }, ...u.filter(e => "skip" !== e && !e.skip)].filter(Boolean))
            };
            var u, d, g;
            return d = h, g = e, JSON.stringify(d) === JSON.stringify(g) ? e : h
        }
    }
}, function (e, t, i) {
    const {
        Converter: n
    } = i(25), {
        dedent: r
    } = i(26), s = new n({
        simplifiedAutoLink: !0,
        strikethrough: !0,
        tasklists: !0,
        tables: !0
    }), o = ({
        title: e,
        content: t
    }) => 0 === t.length ? "" : `\n    <h3>${e}:</h3>\n    <ul class="nav-alphabetical">\n    ${t}\n    </ul>\n    `, a = e => e.replace(/\s+/g, "-");
    e.exports = {
        documentContent: ({
            title: e,
            contents: t,
            toc: i,
            singleRoot: n
        }) => `\n  <script type="text/javascript">\n    const htmlTag = document.getElementsByTagName("html")[0];\n    const options = (document.location.search || "")\n      .slice(1)\n      .split("&")\n      .map(kv => kv.split("="))\n      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\n\n    if (options["theme"]) {\n      htmlTag.classList.add("theme-" + options["theme"]);\n    }\n  <\/script>\n  <header>\n    <h1>${e}</h1>\n    <button type="button"></button>\n  </header>\n  <nav>\n    ${o({ title: n ? "Root element" : "Root elements", content: i.roots })}\n    ${o({ title: "Quick navigation", content: i.other })}\n    ${o({ title: "Common elements", content: i.common })}\n    ${o({ title: "Character sets", content: i.characterSets })}\n  </nav>\n  <main>\n  <article>\n    ${t}\n  </article>\n  <footer>\n    <p>Date: ${(() => { const e = new Date, t = e => e < 10 ? "0" + e : e; return `${e.getUTCFullYear()}-${t(e.getUTCMonth() + 1)}-${t(e.getUTCDate())}T${t(e.getUTCHours())}:${t(e.getUTCMinutes())}` })()} - <a href="?theme=dark" data-theme="dark">Dark</a> - <a href="?theme=light" data-theme="light">Light</a></p>\n  </footer>\n  </main>\n  <script type="text/javascript">\n    document.querySelector("header button").addEventListener("click", function() {\n      document.getElementsByTagName("html")[0].classList.toggle("menu-open");\n    });\n    document.querySelector("nav").addEventListener("click", function(event) {\n      if (event.target.tagName !== "A") return;\n      htmlTag.classList.remove("menu-open");\n    });\n    document.querySelectorAll("footer a").forEach(element =>\n      element.addEventListener("click", function(event) {\n        event.preventDefault();\n        const theme = event.target.getAttribute("data-theme");\n        const remove = Array.from(htmlTag.classList).filter(className => className.startsWith("theme-"));\n        remove.forEach(name => htmlTag.classList.remove(name));\n        htmlTag.classList.add("theme-" + theme);\n      })\n    );\n  <\/script>\n`,
        documentFrame: ({
            head: e,
            body: t,
            title: i
        }) => `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n  <meta name="generator" content="ebnf2railroad" />\n  <title>${i}</title>\n  ${e}\n</head>\n<body>\n${t}\n</body>\n</html>\n`,
        documentStyle: () => "\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n:root {\n    --subtleText: #777;\n    --highlightText: hotpink;\n    --itemHeadingBackground: #eee;\n    --background: white;\n    --borderColor: #ccc;\n    --textColor: #111;\n\n    --diagramBackground: #f8f8f8;\n    --diagramLines: black;\n    --diagramText: black;\n    --terminalLines: black;\n    --terminalFill: #feffdf;\n    --nonTerminalLines: black;\n    --nonTerminalFill: #feffdf;\n    --specialSequenceLines: black;\n    --specialSequenceFill: #ffe79a;\n\n    --ebnfCodeBackground: #e8e8e8;\n    --ebnfIdentifier: #ef5a5a;\n    --ebnfTerminal: #ffa952;\n    --ebnfBaseColor: #777;\n}\n\n.theme-dark {\n    --subtleText: #777;\n    --highlightText: hotpink;\n    --itemHeadingBackground: #444;\n    --background: #333;\n    --borderColor: lightblue;\n    --textColor: #ddd;\n\n    --diagramBackground: #222;\n    --diagramLines: #3e432e;\n    --diagramText: #a7d129;\n    --terminalLines: #a7d129;\n    --terminalFill: #3e432e;\n    --nonTerminalLines: #a7d129;\n    --nonTerminalFill: #3e432e;\n    --specialSequenceLines: #a7d129;\n    --specialSequenceFill: #444;\n\n    --ebnfCodeBackground: #3e432e;\n    --ebnfIdentifier: lightblue;\n    --ebnfTerminal: #a7d129;\n    --ebnfBaseColor: #ddd;\n}\n\nhtml {\n    font-family: sans-serif;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background: var(--background);\n    color: var(--textColor);\n}\n\na {\n    color: inherit;\n}\n\na:visited {\n    color: var(--subtleText);\n}\n\na:active, a:focus, a:hover {\n    color: var(--highlightText);\n}\n\nheader {\n    border-bottom: 1px solid var(--borderColor);\n    padding: 0 1rem;\n}\n\nheader button {\n  display: none;\n}\n\nmain {\n    height: 100%;\n    overflow-y: scroll;\n    margin-left: 300px;\n}\n\nnav {\n    position: sticky;\n    top: 0;\n    max-height: 100vh;\n    padding: 1rem 2rem 1rem 1rem;\n    z-index: 5;\n    background: var(--background);\n    width: 300px;\n    float: left;\n    overflow: auto;\n}\n\nnav h3 {\n    white-space: nowrap;\n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n}\n\nnav a {\n    display: inline-block;\n    color: var(--subtleText);\n    text-decoration: none;\n    padding: 0.33rem 0;\n}\n\narticle {\n    width: 100%;\n    overflow: hidden;\n    padding: 1rem 2rem;\n    border-left: 1px solid var(--borderColor);\n}\n\narticle + footer {\n    padding: 1rem 2rem;\n    border-left: 1px solid var(--borderColor);\n    background: var(--itemHeadingBackground);\n}\n\ncode {\n    width: 100%;\n}\n\npre {\n    overflow: auto;\n}\n\npre > code {\n    display: block;\n    padding: 1em;\n    background: var(--diagramBackground);\n}\n\nh4 {\n    padding: 2rem;\n    margin: 4rem -2rem 1rem -2rem;\n    background: var(--itemHeadingBackground);\n    font-size: 125%;\n}\n\nblockquote {\n    margin-left: 0;\n    margin-top: calc(1em - 1px);\n    margin-bottom: calc(1em - 1px);\n    padding: 1px 0 1px 1rem;\n    border-left: 1rem solid var(--ebnfCodeBackground);\n}\n\ndfn {\n    font-style: normal;\n    cursor: default;\n}\n\n.diagram-container {\n    background: var(--diagramBackground);\n    margin-bottom: 0.25rem;\n    padding: 1rem 0;\n    display: flex;\n    justify-content: center;\n    overflow: auto;\n}\n\n/* Responsiveness */\n@media (max-width: 800px) {\n  body {\n    overflow-x: hidden;\n  }\n\n  header {\n    padding: 0.5rem 1rem;\n    display: flex;\n  }\n\n  header h1 {\n    margin: 0 auto 0 0;\n    display: flex;\n    align-items: center;\n  }\n\n  header button {\n    display: initial;\n    position: relative;\n    z-index: 10;\n  }\n\n  header button::after {\n    content: '☰';\n    margin-left: auto;\n    font-size: 1.5rem;\n  }\n\n  main {\n    display: block;\n    position: relative;\n    margin-left: 0;\n  }\n\n  nav {\n    height: auto;\n    display: block;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.2s, transform 0.2s;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translateX(300px);\n    padding-top: 3rem;\n    background: var(--background);\n    box-shadow: 0 0 0 1000000rem rgba(0, 0, 0, 0.35);\n  }\n\n  .menu-open nav {\n    pointer-events: auto;\n    opacity: 1;\n    transform: translateX(0px);\n  }\n\n  nav a {\n    padding: 0.66rem 0;\n  }\n\n  article {\n    margin-left: 0;\n    border-left: 0;\n    padding: 1rem;\n  }\n  article + footer {\n    padding: 1rem;\n    border-left: 0;\n  }\n}\n\n/* EBNF text representation styling */\ncode.ebnf {\n  padding: 1em;\n  background: var(--ebnfCodeBackground);\n  font-weight: bold;\n  color: var(--ebnfBaseColor);\n  white-space: pre-wrap;\n  display: inline-block;\n  width: 100%;\n}\n.ebnf-identifier {\n  color: var(--ebnfIdentifier);\n}\n.ebnf-terminal {\n  color: var(--ebnfTerminal);\n}\n.ebnf-non-terminal {\n  font-weight: normal;\n}\n.ebnf-comment {\n  font-weight: normal;\n  font-style: italic;\n  color: #999;\n}\n\n/* EBNF diagram representation styling */\nsvg.railroad-diagram {\n  width: 100%;\n}\nsvg.railroad-diagram path {\n  stroke-width: 3;\n  stroke: var(--diagramLines);\n  fill: rgba(0,0,0,0);\n}\nsvg.railroad-diagram text {\n  font: bold 14px monospace;\n  text-anchor: middle;\n  fill: var(--diagramText);\n}\nsvg.railroad-diagram text.diagram-text {\n  font-size: 12px;\n}\nsvg.railroad-diagram text.diagram-arrow {\n  font-size: 16px;\n}\nsvg.railroad-diagram text.label {\n  text-anchor: start;\n}\nsvg.railroad-diagram text.comment {\n  font: italic 12px monospace;\n}\nsvg.railroad-diagram g.non-terminal text {\n  /*font-style: italic;*/\n}\nsvg.railroad-diagram g.special-sequence rect {\n  fill: var(--specialSequenceFill);\n  stroke: var(--specialSequenceLines);\n}\nsvg.railroad-diagram g.special-sequence text {\n  font-style: italic;\n}\nsvg.railroad-diagram rect {\n  stroke-width: 3;\n}\nsvg.railroad-diagram rect.group-box {\n  stroke: gray;\n  stroke-dasharray: 10 5;\n  fill: none;\n}\nsvg.railroad-diagram g.non-terminal rect {\n  fill: var(--nonTerminalFill);\n  stroke: var(--nonTerminalLines);\n}\nsvg.railroad-diagram g.terminal rect {\n  fill: var(--terminalFill);\n  stroke: var(--terminalLines);\n}\nsvg.railroad-diagram path.diagram-text {\n  stroke-width: 3;\n  stroke: black;\n  fill: white;\n  cursor: help;\n}\nsvg.railroad-diagram g.diagram-text:hover path.diagram-text {\n  fill: #eee;\n}\n",
        ebnfTemplate: ({
            identifier: e,
            ebnf: t,
            diagram: i,
            referencedBy: n,
            referencesTo: r
        }) => `<section>\n  <h4 id="${a(e)}">${e}</h4>\n  <div class="diagram-container">${i}</div>\n  <code class="ebnf">${t}</code>${(n.length > 0 ? "\n  " + ((e, t) => `<p>Items referencing <strong>${e}</strong>:<p>\n<ul>\n${t.map(e => `<li><a href="#${a(e.trim())}">${e.trim()}</a></li>`).join("")}\n</ul>`)(e, n) : "") + (r.length > 0 ? "\n  " + ((e, t) => `<p><strong>${e}</strong> is referencing:<p>\n<ul>\n${t.map(e => `<li><a href="#${a(e.trim())}">${e.trim()}</a></li>`).join("")}\n</ul>`)(e, r) : "")}\n</section>\n`,
        commentTemplate: e => s.makeHtml(r(e))
    }
}, function (e, t, i) {
    var n; /*! showdown v 1.9.1 - 02-11-2019 */
    (function () {
        function r(e) {
            "use strict";
            var t = {
                omitExtraWLInCodeBlocks: {
                    defaultValue: !1,
                    describe: "Omit the default extra whiteline added to code blocks",
                    type: "boolean"
                },
                noHeaderId: {
                    defaultValue: !1,
                    describe: "Turn on/off generated header id",
                    type: "boolean"
                },
                prefixHeaderId: {
                    defaultValue: !1,
                    describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                    type: "string"
                },
                rawPrefixHeaderId: {
                    defaultValue: !1,
                    describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                    type: "boolean"
                },
                ghCompatibleHeaderId: {
                    defaultValue: !1,
                    describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                    type: "boolean"
                },
                rawHeaderId: {
                    defaultValue: !1,
                    describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                    type: "boolean"
                },
                headerLevelStart: {
                    defaultValue: !1,
                    describe: "The header blocks level start",
                    type: "integer"
                },
                parseImgDimensions: {
                    defaultValue: !1,
                    describe: "Turn on/off image dimension parsing",
                    type: "boolean"
                },
                simplifiedAutoLink: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM autolink style",
                    type: "boolean"
                },
                excludeTrailingPunctuationFromURLs: {
                    defaultValue: !1,
                    describe: "Excludes trailing punctuation from links generated with autoLinking",
                    type: "boolean"
                },
                literalMidWordUnderscores: {
                    defaultValue: !1,
                    describe: "Parse midword underscores as literal underscores",
                    type: "boolean"
                },
                literalMidWordAsterisks: {
                    defaultValue: !1,
                    describe: "Parse midword asterisks as literal asterisks",
                    type: "boolean"
                },
                strikethrough: {
                    defaultValue: !1,
                    describe: "Turn on/off strikethrough support",
                    type: "boolean"
                },
                tables: {
                    defaultValue: !1,
                    describe: "Turn on/off tables support",
                    type: "boolean"
                },
                tablesHeaderId: {
                    defaultValue: !1,
                    describe: "Add an id to table headers",
                    type: "boolean"
                },
                ghCodeBlocks: {
                    defaultValue: !0,
                    describe: "Turn on/off GFM fenced code blocks support",
                    type: "boolean"
                },
                tasklists: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM tasklist support",
                    type: "boolean"
                },
                smoothLivePreview: {
                    defaultValue: !1,
                    describe: "Prevents weird effects in live previews due to incomplete input",
                    type: "boolean"
                },
                smartIndentationFix: {
                    defaultValue: !1,
                    description: "Tries to smartly fix indentation in es6 strings",
                    type: "boolean"
                },
                disableForced4SpacesIndentedSublists: {
                    defaultValue: !1,
                    description: "Disables the requirement of indenting nested sublists by 4 spaces",
                    type: "boolean"
                },
                simpleLineBreaks: {
                    defaultValue: !1,
                    description: "Parses simple line breaks as <br> (GFM Style)",
                    type: "boolean"
                },
                requireSpaceBeforeHeadingText: {
                    defaultValue: !1,
                    description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                    type: "boolean"
                },
                ghMentions: {
                    defaultValue: !1,
                    description: "Enables github @mentions",
                    type: "boolean"
                },
                ghMentionsLink: {
                    defaultValue: "https://github.com/{u}",
                    description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                    type: "string"
                },
                encodeEmails: {
                    defaultValue: !0,
                    description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                    type: "boolean"
                },
                openLinksInNewWindow: {
                    defaultValue: !1,
                    description: "Open all links in new windows",
                    type: "boolean"
                },
                backslashEscapesHTMLTags: {
                    defaultValue: !1,
                    description: "Support for HTML Tag escaping. ex: <div>foo</div>",
                    type: "boolean"
                },
                emoji: {
                    defaultValue: !1,
                    description: "Enable emoji support. Ex: `this is a :smile: emoji`",
                    type: "boolean"
                },
                underline: {
                    defaultValue: !1,
                    description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                    type: "boolean"
                },
                completeHTMLDocument: {
                    defaultValue: !1,
                    description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                    type: "boolean"
                },
                metadata: {
                    defaultValue: !1,
                    description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                    type: "boolean"
                },
                splitAdjacentBlockquotes: {
                    defaultValue: !1,
                    description: "Split adjacent blockquote blocks",
                    type: "boolean"
                }
            };
            if (!1 === e) return JSON.parse(JSON.stringify(t));
            var i = {};
            for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n].defaultValue);
            return i
        }
        var s = {},
            o = {},
            a = {},
            l = r(!0),
            c = "vanilla",
            h = {
                github: {
                    omitExtraWLInCodeBlocks: !0,
                    simplifiedAutoLink: !0,
                    excludeTrailingPunctuationFromURLs: !0,
                    literalMidWordUnderscores: !0,
                    strikethrough: !0,
                    tables: !0,
                    tablesHeaderId: !0,
                    ghCodeBlocks: !0,
                    tasklists: !0,
                    disableForced4SpacesIndentedSublists: !0,
                    simpleLineBreaks: !0,
                    requireSpaceBeforeHeadingText: !0,
                    ghCompatibleHeaderId: !0,
                    ghMentions: !0,
                    backslashEscapesHTMLTags: !0,
                    emoji: !0,
                    splitAdjacentBlockquotes: !0
                },
                original: {
                    noHeaderId: !0,
                    ghCodeBlocks: !1
                },
                ghost: {
                    omitExtraWLInCodeBlocks: !0,
                    parseImgDimensions: !0,
                    simplifiedAutoLink: !0,
                    excludeTrailingPunctuationFromURLs: !0,
                    literalMidWordUnderscores: !0,
                    strikethrough: !0,
                    tables: !0,
                    tablesHeaderId: !0,
                    ghCodeBlocks: !0,
                    tasklists: !0,
                    smoothLivePreview: !0,
                    simpleLineBreaks: !0,
                    requireSpaceBeforeHeadingText: !0,
                    ghMentions: !1,
                    encodeEmails: !0
                },
                vanilla: r(!0),
                allOn: function () {
                    "use strict";
                    var e = r(!0),
                        t = {};
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = !0);
                    return t
                }()
            };

        function u(e, t) {
            "use strict";
            var i = t ? "Error in " + t + " extension->" : "Error in unnamed extension",
                n = {
                    valid: !0,
                    error: ""
                };
            s.helper.isArray(e) || (e = [e]);
            for (var r = 0; r < e.length; ++r) {
                var o = i + " sub-extension " + r + ": ",
                    a = e[r];
                if ("object" != typeof a) return n.valid = !1, n.error = o + "must be an object, but " + typeof a + " given", n;
                if (!s.helper.isString(a.type)) return n.valid = !1, n.error = o + 'property "type" must be a string, but ' + typeof a.type + " given", n;
                var l = a.type = a.type.toLowerCase();
                if ("language" === l && (l = a.type = "lang"), "html" === l && (l = a.type = "output"), "lang" !== l && "output" !== l && "listener" !== l) return n.valid = !1, n.error = o + "type " + l + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', n;
                if ("listener" === l) {
                    if (s.helper.isUndefined(a.listeners)) return n.valid = !1, n.error = o + '. Extensions of type "listener" must have a property called "listeners"', n
                } else if (s.helper.isUndefined(a.filter) && s.helper.isUndefined(a.regex)) return n.valid = !1, n.error = o + l + ' extensions must define either a "regex" property or a "filter" method', n;
                if (a.listeners) {
                    if ("object" != typeof a.listeners) return n.valid = !1, n.error = o + '"listeners" property must be an object but ' + typeof a.listeners + " given", n;
                    for (var c in a.listeners)
                        if (a.listeners.hasOwnProperty(c) && "function" != typeof a.listeners[c]) return n.valid = !1, n.error = o + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof a.listeners[c] + " given", n
                }
                if (a.filter) {
                    if ("function" != typeof a.filter) return n.valid = !1, n.error = o + '"filter" must be a function, but ' + typeof a.filter + " given", n
                } else if (a.regex) {
                    if (s.helper.isString(a.regex) && (a.regex = new RegExp(a.regex, "g")), !(a.regex instanceof RegExp)) return n.valid = !1, n.error = o + '"regex" property must either be a string or a RegExp object, but ' + typeof a.regex + " given", n;
                    if (s.helper.isUndefined(a.replace)) return n.valid = !1, n.error = o + '"regex" extensions must implement a replace string or function', n
                }
            }
            return n
        }

        function d(e, t) {
            "use strict";
            return "¨E" + t.charCodeAt(0) + "E"
        }
        s.helper = {}, s.extensions = {}, s.setOption = function (e, t) {
            "use strict";
            return l[e] = t, this
        }, s.getOption = function (e) {
            "use strict";
            return l[e]
        }, s.getOptions = function () {
            "use strict";
            return l
        }, s.resetOptions = function () {
            "use strict";
            l = r(!0)
        }, s.setFlavor = function (e) {
            "use strict";
            if (!h.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            s.resetOptions();
            var t = h[e];
            for (var i in c = e, t) t.hasOwnProperty(i) && (l[i] = t[i])
        }, s.getFlavor = function () {
            "use strict";
            return c
        }, s.getFlavorOptions = function (e) {
            "use strict";
            if (h.hasOwnProperty(e)) return h[e]
        }, s.getDefaultOptions = function (e) {
            "use strict";
            return r(e)
        }, s.subParser = function (e, t) {
            "use strict";
            if (s.helper.isString(e)) {
                if (void 0 === t) {
                    if (o.hasOwnProperty(e)) return o[e];
                    throw Error("SubParser named " + e + " not registered!")
                }
                o[e] = t
            }
        }, s.extension = function (e, t) {
            "use strict";
            if (!s.helper.isString(e)) throw Error("Extension 'name' must be a string");
            if (e = s.helper.stdExtName(e), s.helper.isUndefined(t)) {
                if (!a.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
                return a[e]
            }
            "function" == typeof t && (t = t()), s.helper.isArray(t) || (t = [t]);
            var i = u(t, e);
            if (!i.valid) throw Error(i.error);
            a[e] = t
        }, s.getAllExtensions = function () {
            "use strict";
            return a
        }, s.removeExtension = function (e) {
            "use strict";
            delete a[e]
        }, s.resetExtensions = function () {
            "use strict";
            a = {}
        }, s.validateExtension = function (e) {
            "use strict";
            var t = u(e, null);
            return !!t.valid || (console.warn(t.error), !1)
        }, s.hasOwnProperty("helper") || (s.helper = {}), s.helper.isString = function (e) {
            "use strict";
            return "string" == typeof e || e instanceof String
        }, s.helper.isFunction = function (e) {
            "use strict";
            return e && "[object Function]" === {}.toString.call(e)
        }, s.helper.isArray = function (e) {
            "use strict";
            return Array.isArray(e)
        }, s.helper.isUndefined = function (e) {
            "use strict";
            return void 0 === e
        }, s.helper.forEach = function (e, t) {
            "use strict";
            if (s.helper.isUndefined(e)) throw new Error("obj param is required");
            if (s.helper.isUndefined(t)) throw new Error("callback param is required");
            if (!s.helper.isFunction(t)) throw new Error("callback param must be a function/closure");
            if ("function" == typeof e.forEach) e.forEach(t);
            else if (s.helper.isArray(e))
                for (var i = 0; i < e.length; i++) t(e[i], i, e);
            else {
                if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
                for (var n in e) e.hasOwnProperty(n) && t(e[n], n, e)
            }
        }, s.helper.stdExtName = function (e) {
            "use strict";
            return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
        }, s.helper.escapeCharactersCallback = d, s.helper.escapeCharacters = function (e, t, i) {
            "use strict";
            var n = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
            i && (n = "\\\\" + n);
            var r = new RegExp(n, "g");
            return e = e.replace(r, d)
        }, s.helper.unescapeHTMLEntities = function (e) {
            "use strict";
            return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
        };
        var g = function (e, t, i, n) {
            "use strict";
            var r, s, o, a, l, c = n || "",
                h = c.indexOf("g") > -1,
                u = new RegExp(t + "|" + i, "g" + c.replace(/g/g, "")),
                d = new RegExp(t, c.replace(/g/g, "")),
                g = [];
            do {
                for (r = 0; o = u.exec(e);)
                    if (d.test(o[0])) r++ || (a = (s = u.lastIndex) - o[0].length);
                    else if (r && !--r) {
                        l = o.index + o[0].length;
                        var f = {
                            left: {
                                start: a,
                                end: s
                            },
                            match: {
                                start: s,
                                end: o.index
                            },
                            right: {
                                start: o.index,
                                end: l
                            },
                            wholeMatch: {
                                start: a,
                                end: l
                            }
                        };
                        if (g.push(f), !h) return g
                    }
            } while (r && (u.lastIndex = s));
            return g
        };
        s.helper.matchRecursiveRegExp = function (e, t, i, n) {
            "use strict";
            for (var r = g(e, t, i, n), s = [], o = 0; o < r.length; ++o) s.push([e.slice(r[o].wholeMatch.start, r[o].wholeMatch.end), e.slice(r[o].match.start, r[o].match.end), e.slice(r[o].left.start, r[o].left.end), e.slice(r[o].right.start, r[o].right.end)]);
            return s
        }, s.helper.replaceRecursiveRegExp = function (e, t, i, n, r) {
            "use strict";
            if (!s.helper.isFunction(t)) {
                var o = t;
                t = function () {
                    return o
                }
            }
            var a = g(e, i, n, r),
                l = e,
                c = a.length;
            if (c > 0) {
                var h = [];
                0 !== a[0].wholeMatch.start && h.push(e.slice(0, a[0].wholeMatch.start));
                for (var u = 0; u < c; ++u) h.push(t(e.slice(a[u].wholeMatch.start, a[u].wholeMatch.end), e.slice(a[u].match.start, a[u].match.end), e.slice(a[u].left.start, a[u].left.end), e.slice(a[u].right.start, a[u].right.end))), u < c - 1 && h.push(e.slice(a[u].wholeMatch.end, a[u + 1].wholeMatch.start));
                a[c - 1].wholeMatch.end < e.length && h.push(e.slice(a[c - 1].wholeMatch.end)), l = h.join("")
            }
            return l
        }, s.helper.regexIndexOf = function (e, t, i) {
            "use strict";
            if (!s.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            if (t instanceof RegExp == !1) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
            var n = e.substring(i || 0).search(t);
            return n >= 0 ? n + (i || 0) : n
        }, s.helper.splitAtIndex = function (e, t) {
            "use strict";
            if (!s.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            return [e.substring(0, t), e.substring(t)]
        }, s.helper.encodeEmailAddress = function (e) {
            "use strict";
            var t = [function (e) {
                return "&#" + e.charCodeAt(0) + ";"
            }, function (e) {
                return "&#x" + e.charCodeAt(0).toString(16) + ";"
            }, function (e) {
                return e
            }];
            return e = e.replace(/./g, (function (e) {
                if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
                else {
                    var i = Math.random();
                    e = i > .9 ? t[2](e) : i > .45 ? t[1](e) : t[0](e)
                }
                return e
            }))
        }, s.helper.padEnd = function (e, t, i) {
            "use strict";
            return t >>= 0, i = String(i || " "), e.length > t ? String(e) : ((t -= e.length) > i.length && (i += i.repeat(t / i.length)), String(e) + i.slice(0, t))
        }, "undefined" == typeof console && (console = {
            warn: function (e) {
                "use strict";
                alert(e)
            },
            log: function (e) {
                "use strict";
                alert(e)
            },
            error: function (e) {
                "use strict";
                throw e
            }
        }), s.helper.regexes = {
            asteriskDashAndColon: /([*_:~])/g
        }, s.helper.emojis = {
            "+1": "👍",
            "-1": "👎",
            100: "💯",
            1234: "🔢",
            "1st_place_medal": "🥇",
            "2nd_place_medal": "🥈",
            "3rd_place_medal": "🥉",
            "8ball": "🎱",
            a: "🅰️",
            ab: "🆎",
            abc: "🔤",
            abcd: "🔡",
            accept: "🉑",
            aerial_tramway: "🚡",
            airplane: "✈️",
            alarm_clock: "⏰",
            alembic: "⚗️",
            alien: "👽",
            ambulance: "🚑",
            amphora: "🏺",
            anchor: "⚓️",
            angel: "👼",
            anger: "💢",
            angry: "😠",
            anguished: "😧",
            ant: "🐜",
            apple: "🍎",
            aquarius: "♒️",
            aries: "♈️",
            arrow_backward: "◀️",
            arrow_double_down: "⏬",
            arrow_double_up: "⏫",
            arrow_down: "⬇️",
            arrow_down_small: "🔽",
            arrow_forward: "▶️",
            arrow_heading_down: "⤵️",
            arrow_heading_up: "⤴️",
            arrow_left: "⬅️",
            arrow_lower_left: "↙️",
            arrow_lower_right: "↘️",
            arrow_right: "➡️",
            arrow_right_hook: "↪️",
            arrow_up: "⬆️",
            arrow_up_down: "↕️",
            arrow_up_small: "🔼",
            arrow_upper_left: "↖️",
            arrow_upper_right: "↗️",
            arrows_clockwise: "🔃",
            arrows_counterclockwise: "🔄",
            art: "🎨",
            articulated_lorry: "🚛",
            artificial_satellite: "🛰",
            astonished: "😲",
            athletic_shoe: "👟",
            atm: "🏧",
            atom_symbol: "⚛️",
            avocado: "🥑",
            b: "🅱️",
            baby: "👶",
            baby_bottle: "🍼",
            baby_chick: "🐤",
            baby_symbol: "🚼",
            back: "🔙",
            bacon: "🥓",
            badminton: "🏸",
            baggage_claim: "🛄",
            baguette_bread: "🥖",
            balance_scale: "⚖️",
            balloon: "🎈",
            ballot_box: "🗳",
            ballot_box_with_check: "☑️",
            bamboo: "🎍",
            banana: "🍌",
            bangbang: "‼️",
            bank: "🏦",
            bar_chart: "📊",
            barber: "💈",
            baseball: "⚾️",
            basketball: "🏀",
            basketball_man: "⛹️",
            basketball_woman: "⛹️&zwj;♀️",
            bat: "🦇",
            bath: "🛀",
            bathtub: "🛁",
            battery: "🔋",
            beach_umbrella: "🏖",
            bear: "🐻",
            bed: "🛏",
            bee: "🐝",
            beer: "🍺",
            beers: "🍻",
            beetle: "🐞",
            beginner: "🔰",
            bell: "🔔",
            bellhop_bell: "🛎",
            bento: "🍱",
            biking_man: "🚴",
            bike: "🚲",
            biking_woman: "🚴&zwj;♀️",
            bikini: "👙",
            biohazard: "☣️",
            bird: "🐦",
            birthday: "🎂",
            black_circle: "⚫️",
            black_flag: "🏴",
            black_heart: "🖤",
            black_joker: "🃏",
            black_large_square: "⬛️",
            black_medium_small_square: "◾️",
            black_medium_square: "◼️",
            black_nib: "✒️",
            black_small_square: "▪️",
            black_square_button: "🔲",
            blonde_man: "👱",
            blonde_woman: "👱&zwj;♀️",
            blossom: "🌼",
            blowfish: "🐡",
            blue_book: "📘",
            blue_car: "🚙",
            blue_heart: "💙",
            blush: "😊",
            boar: "🐗",
            boat: "⛵️",
            bomb: "💣",
            book: "📖",
            bookmark: "🔖",
            bookmark_tabs: "📑",
            books: "📚",
            boom: "💥",
            boot: "👢",
            bouquet: "💐",
            bowing_man: "🙇",
            bow_and_arrow: "🏹",
            bowing_woman: "🙇&zwj;♀️",
            bowling: "🎳",
            boxing_glove: "🥊",
            boy: "👦",
            bread: "🍞",
            bride_with_veil: "👰",
            bridge_at_night: "🌉",
            briefcase: "💼",
            broken_heart: "💔",
            bug: "🐛",
            building_construction: "🏗",
            bulb: "💡",
            bullettrain_front: "🚅",
            bullettrain_side: "🚄",
            burrito: "🌯",
            bus: "🚌",
            business_suit_levitating: "🕴",
            busstop: "🚏",
            bust_in_silhouette: "👤",
            busts_in_silhouette: "👥",
            butterfly: "🦋",
            cactus: "🌵",
            cake: "🍰",
            calendar: "📆",
            call_me_hand: "🤙",
            calling: "📲",
            camel: "🐫",
            camera: "📷",
            camera_flash: "📸",
            camping: "🏕",
            cancer: "♋️",
            candle: "🕯",
            candy: "🍬",
            canoe: "🛶",
            capital_abcd: "🔠",
            capricorn: "♑️",
            car: "🚗",
            card_file_box: "🗃",
            card_index: "📇",
            card_index_dividers: "🗂",
            carousel_horse: "🎠",
            carrot: "🥕",
            cat: "🐱",
            cat2: "🐈",
            cd: "💿",
            chains: "⛓",
            champagne: "🍾",
            chart: "💹",
            chart_with_downwards_trend: "📉",
            chart_with_upwards_trend: "📈",
            checkered_flag: "🏁",
            cheese: "🧀",
            cherries: "🍒",
            cherry_blossom: "🌸",
            chestnut: "🌰",
            chicken: "🐔",
            children_crossing: "🚸",
            chipmunk: "🐿",
            chocolate_bar: "🍫",
            christmas_tree: "🎄",
            church: "⛪️",
            cinema: "🎦",
            circus_tent: "🎪",
            city_sunrise: "🌇",
            city_sunset: "🌆",
            cityscape: "🏙",
            cl: "🆑",
            clamp: "🗜",
            clap: "👏",
            clapper: "🎬",
            classical_building: "🏛",
            clinking_glasses: "🥂",
            clipboard: "📋",
            clock1: "🕐",
            clock10: "🕙",
            clock1030: "🕥",
            clock11: "🕚",
            clock1130: "🕦",
            clock12: "🕛",
            clock1230: "🕧",
            clock130: "🕜",
            clock2: "🕑",
            clock230: "🕝",
            clock3: "🕒",
            clock330: "🕞",
            clock4: "🕓",
            clock430: "🕟",
            clock5: "🕔",
            clock530: "🕠",
            clock6: "🕕",
            clock630: "🕡",
            clock7: "🕖",
            clock730: "🕢",
            clock8: "🕗",
            clock830: "🕣",
            clock9: "🕘",
            clock930: "🕤",
            closed_book: "📕",
            closed_lock_with_key: "🔐",
            closed_umbrella: "🌂",
            cloud: "☁️",
            cloud_with_lightning: "🌩",
            cloud_with_lightning_and_rain: "⛈",
            cloud_with_rain: "🌧",
            cloud_with_snow: "🌨",
            clown_face: "🤡",
            clubs: "♣️",
            cocktail: "🍸",
            coffee: "☕️",
            coffin: "⚰️",
            cold_sweat: "😰",
            comet: "☄️",
            computer: "💻",
            computer_mouse: "🖱",
            confetti_ball: "🎊",
            confounded: "😖",
            confused: "😕",
            congratulations: "㊗️",
            construction: "🚧",
            construction_worker_man: "👷",
            construction_worker_woman: "👷&zwj;♀️",
            control_knobs: "🎛",
            convenience_store: "🏪",
            cookie: "🍪",
            cool: "🆒",
            policeman: "👮",
            copyright: "©️",
            corn: "🌽",
            couch_and_lamp: "🛋",
            couple: "👫",
            couple_with_heart_woman_man: "💑",
            couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
            couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
            couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
            couplekiss_man_woman: "💏",
            couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
            cow: "🐮",
            cow2: "🐄",
            cowboy_hat_face: "🤠",
            crab: "🦀",
            crayon: "🖍",
            credit_card: "💳",
            crescent_moon: "🌙",
            cricket: "🏏",
            crocodile: "🐊",
            croissant: "🥐",
            crossed_fingers: "🤞",
            crossed_flags: "🎌",
            crossed_swords: "⚔️",
            crown: "👑",
            cry: "😢",
            crying_cat_face: "😿",
            crystal_ball: "🔮",
            cucumber: "🥒",
            cupid: "💘",
            curly_loop: "➰",
            currency_exchange: "💱",
            curry: "🍛",
            custard: "🍮",
            customs: "🛃",
            cyclone: "🌀",
            dagger: "🗡",
            dancer: "💃",
            dancing_women: "👯",
            dancing_men: "👯&zwj;♂️",
            dango: "🍡",
            dark_sunglasses: "🕶",
            dart: "🎯",
            dash: "💨",
            date: "📅",
            deciduous_tree: "🌳",
            deer: "🦌",
            department_store: "🏬",
            derelict_house: "🏚",
            desert: "🏜",
            desert_island: "🏝",
            desktop_computer: "🖥",
            male_detective: "🕵️",
            diamond_shape_with_a_dot_inside: "💠",
            diamonds: "♦️",
            disappointed: "😞",
            disappointed_relieved: "😥",
            dizzy: "💫",
            dizzy_face: "😵",
            do_not_litter: "🚯",
            dog: "🐶",
            dog2: "🐕",
            dollar: "💵",
            dolls: "🎎",
            dolphin: "🐬",
            door: "🚪",
            doughnut: "🍩",
            dove: "🕊",
            dragon: "🐉",
            dragon_face: "🐲",
            dress: "👗",
            dromedary_camel: "🐪",
            drooling_face: "🤤",
            droplet: "💧",
            drum: "🥁",
            duck: "🦆",
            dvd: "📀",
            "e-mail": "📧",
            eagle: "🦅",
            ear: "👂",
            ear_of_rice: "🌾",
            earth_africa: "🌍",
            earth_americas: "🌎",
            earth_asia: "🌏",
            egg: "🥚",
            eggplant: "🍆",
            eight_pointed_black_star: "✴️",
            eight_spoked_asterisk: "✳️",
            electric_plug: "🔌",
            elephant: "🐘",
            email: "✉️",
            end: "🔚",
            envelope_with_arrow: "📩",
            euro: "💶",
            european_castle: "🏰",
            european_post_office: "🏤",
            evergreen_tree: "🌲",
            exclamation: "❗️",
            expressionless: "😑",
            eye: "👁",
            eye_speech_bubble: "👁&zwj;🗨",
            eyeglasses: "👓",
            eyes: "👀",
            face_with_head_bandage: "🤕",
            face_with_thermometer: "🤒",
            fist_oncoming: "👊",
            factory: "🏭",
            fallen_leaf: "🍂",
            family_man_woman_boy: "👪",
            family_man_boy: "👨&zwj;👦",
            family_man_boy_boy: "👨&zwj;👦&zwj;👦",
            family_man_girl: "👨&zwj;👧",
            family_man_girl_boy: "👨&zwj;👧&zwj;👦",
            family_man_girl_girl: "👨&zwj;👧&zwj;👧",
            family_man_man_boy: "👨&zwj;👨&zwj;👦",
            family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
            family_man_man_girl: "👨&zwj;👨&zwj;👧",
            family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
            family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
            family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
            family_man_woman_girl: "👨&zwj;👩&zwj;👧",
            family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
            family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
            family_woman_boy: "👩&zwj;👦",
            family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
            family_woman_girl: "👩&zwj;👧",
            family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
            family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
            family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
            family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
            family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
            family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
            family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
            fast_forward: "⏩",
            fax: "📠",
            fearful: "😨",
            feet: "🐾",
            female_detective: "🕵️&zwj;♀️",
            ferris_wheel: "🎡",
            ferry: "⛴",
            field_hockey: "🏑",
            file_cabinet: "🗄",
            file_folder: "📁",
            film_projector: "📽",
            film_strip: "🎞",
            fire: "🔥",
            fire_engine: "🚒",
            fireworks: "🎆",
            first_quarter_moon: "🌓",
            first_quarter_moon_with_face: "🌛",
            fish: "🐟",
            fish_cake: "🍥",
            fishing_pole_and_fish: "🎣",
            fist_raised: "✊",
            fist_left: "🤛",
            fist_right: "🤜",
            flags: "🎏",
            flashlight: "🔦",
            fleur_de_lis: "⚜️",
            flight_arrival: "🛬",
            flight_departure: "🛫",
            floppy_disk: "💾",
            flower_playing_cards: "🎴",
            flushed: "😳",
            fog: "🌫",
            foggy: "🌁",
            football: "🏈",
            footprints: "👣",
            fork_and_knife: "🍴",
            fountain: "⛲️",
            fountain_pen: "🖋",
            four_leaf_clover: "🍀",
            fox_face: "🦊",
            framed_picture: "🖼",
            free: "🆓",
            fried_egg: "🍳",
            fried_shrimp: "🍤",
            fries: "🍟",
            frog: "🐸",
            frowning: "😦",
            frowning_face: "☹️",
            frowning_man: "🙍&zwj;♂️",
            frowning_woman: "🙍",
            middle_finger: "🖕",
            fuelpump: "⛽️",
            full_moon: "🌕",
            full_moon_with_face: "🌝",
            funeral_urn: "⚱️",
            game_die: "🎲",
            gear: "⚙️",
            gem: "💎",
            gemini: "♊️",
            ghost: "👻",
            gift: "🎁",
            gift_heart: "💝",
            girl: "👧",
            globe_with_meridians: "🌐",
            goal_net: "🥅",
            goat: "🐐",
            golf: "⛳️",
            golfing_man: "🏌️",
            golfing_woman: "🏌️&zwj;♀️",
            gorilla: "🦍",
            grapes: "🍇",
            green_apple: "🍏",
            green_book: "📗",
            green_heart: "💚",
            green_salad: "🥗",
            grey_exclamation: "❕",
            grey_question: "❔",
            grimacing: "😬",
            grin: "😁",
            grinning: "😀",
            guardsman: "💂",
            guardswoman: "💂&zwj;♀️",
            guitar: "🎸",
            gun: "🔫",
            haircut_woman: "💇",
            haircut_man: "💇&zwj;♂️",
            hamburger: "🍔",
            hammer: "🔨",
            hammer_and_pick: "⚒",
            hammer_and_wrench: "🛠",
            hamster: "🐹",
            hand: "✋",
            handbag: "👜",
            handshake: "🤝",
            hankey: "💩",
            hatched_chick: "🐥",
            hatching_chick: "🐣",
            headphones: "🎧",
            hear_no_evil: "🙉",
            heart: "❤️",
            heart_decoration: "💟",
            heart_eyes: "😍",
            heart_eyes_cat: "😻",
            heartbeat: "💓",
            heartpulse: "💗",
            hearts: "♥️",
            heavy_check_mark: "✔️",
            heavy_division_sign: "➗",
            heavy_dollar_sign: "💲",
            heavy_heart_exclamation: "❣️",
            heavy_minus_sign: "➖",
            heavy_multiplication_x: "✖️",
            heavy_plus_sign: "➕",
            helicopter: "🚁",
            herb: "🌿",
            hibiscus: "🌺",
            high_brightness: "🔆",
            high_heel: "👠",
            hocho: "🔪",
            hole: "🕳",
            honey_pot: "🍯",
            horse: "🐴",
            horse_racing: "🏇",
            hospital: "🏥",
            hot_pepper: "🌶",
            hotdog: "🌭",
            hotel: "🏨",
            hotsprings: "♨️",
            hourglass: "⌛️",
            hourglass_flowing_sand: "⏳",
            house: "🏠",
            house_with_garden: "🏡",
            houses: "🏘",
            hugs: "🤗",
            hushed: "😯",
            ice_cream: "🍨",
            ice_hockey: "🏒",
            ice_skate: "⛸",
            icecream: "🍦",
            id: "🆔",
            ideograph_advantage: "🉐",
            imp: "👿",
            inbox_tray: "📥",
            incoming_envelope: "📨",
            tipping_hand_woman: "💁",
            information_source: "ℹ️",
            innocent: "😇",
            interrobang: "⁉️",
            iphone: "📱",
            izakaya_lantern: "🏮",
            jack_o_lantern: "🎃",
            japan: "🗾",
            japanese_castle: "🏯",
            japanese_goblin: "👺",
            japanese_ogre: "👹",
            jeans: "👖",
            joy: "😂",
            joy_cat: "😹",
            joystick: "🕹",
            kaaba: "🕋",
            key: "🔑",
            keyboard: "⌨️",
            keycap_ten: "🔟",
            kick_scooter: "🛴",
            kimono: "👘",
            kiss: "💋",
            kissing: "😗",
            kissing_cat: "😽",
            kissing_closed_eyes: "😚",
            kissing_heart: "😘",
            kissing_smiling_eyes: "😙",
            kiwi_fruit: "🥝",
            koala: "🐨",
            koko: "🈁",
            label: "🏷",
            large_blue_circle: "🔵",
            large_blue_diamond: "🔷",
            large_orange_diamond: "🔶",
            last_quarter_moon: "🌗",
            last_quarter_moon_with_face: "🌜",
            latin_cross: "✝️",
            laughing: "😆",
            leaves: "🍃",
            ledger: "📒",
            left_luggage: "🛅",
            left_right_arrow: "↔️",
            leftwards_arrow_with_hook: "↩️",
            lemon: "🍋",
            leo: "♌️",
            leopard: "🐆",
            level_slider: "🎚",
            libra: "♎️",
            light_rail: "🚈",
            link: "🔗",
            lion: "🦁",
            lips: "👄",
            lipstick: "💄",
            lizard: "🦎",
            lock: "🔒",
            lock_with_ink_pen: "🔏",
            lollipop: "🍭",
            loop: "➿",
            loud_sound: "🔊",
            loudspeaker: "📢",
            love_hotel: "🏩",
            love_letter: "💌",
            low_brightness: "🔅",
            lying_face: "🤥",
            m: "Ⓜ️",
            mag: "🔍",
            mag_right: "🔎",
            mahjong: "🀄️",
            mailbox: "📫",
            mailbox_closed: "📪",
            mailbox_with_mail: "📬",
            mailbox_with_no_mail: "📭",
            man: "👨",
            man_artist: "👨&zwj;🎨",
            man_astronaut: "👨&zwj;🚀",
            man_cartwheeling: "🤸&zwj;♂️",
            man_cook: "👨&zwj;🍳",
            man_dancing: "🕺",
            man_facepalming: "🤦&zwj;♂️",
            man_factory_worker: "👨&zwj;🏭",
            man_farmer: "👨&zwj;🌾",
            man_firefighter: "👨&zwj;🚒",
            man_health_worker: "👨&zwj;⚕️",
            man_in_tuxedo: "🤵",
            man_judge: "👨&zwj;⚖️",
            man_juggling: "🤹&zwj;♂️",
            man_mechanic: "👨&zwj;🔧",
            man_office_worker: "👨&zwj;💼",
            man_pilot: "👨&zwj;✈️",
            man_playing_handball: "🤾&zwj;♂️",
            man_playing_water_polo: "🤽&zwj;♂️",
            man_scientist: "👨&zwj;🔬",
            man_shrugging: "🤷&zwj;♂️",
            man_singer: "👨&zwj;🎤",
            man_student: "👨&zwj;🎓",
            man_teacher: "👨&zwj;🏫",
            man_technologist: "👨&zwj;💻",
            man_with_gua_pi_mao: "👲",
            man_with_turban: "👳",
            tangerine: "🍊",
            mans_shoe: "👞",
            mantelpiece_clock: "🕰",
            maple_leaf: "🍁",
            martial_arts_uniform: "🥋",
            mask: "😷",
            massage_woman: "💆",
            massage_man: "💆&zwj;♂️",
            meat_on_bone: "🍖",
            medal_military: "🎖",
            medal_sports: "🏅",
            mega: "📣",
            melon: "🍈",
            memo: "📝",
            men_wrestling: "🤼&zwj;♂️",
            menorah: "🕎",
            mens: "🚹",
            metal: "🤘",
            metro: "🚇",
            microphone: "🎤",
            microscope: "🔬",
            milk_glass: "🥛",
            milky_way: "🌌",
            minibus: "🚐",
            minidisc: "💽",
            mobile_phone_off: "📴",
            money_mouth_face: "🤑",
            money_with_wings: "💸",
            moneybag: "💰",
            monkey: "🐒",
            monkey_face: "🐵",
            monorail: "🚝",
            moon: "🌔",
            mortar_board: "🎓",
            mosque: "🕌",
            motor_boat: "🛥",
            motor_scooter: "🛵",
            motorcycle: "🏍",
            motorway: "🛣",
            mount_fuji: "🗻",
            mountain: "⛰",
            mountain_biking_man: "🚵",
            mountain_biking_woman: "🚵&zwj;♀️",
            mountain_cableway: "🚠",
            mountain_railway: "🚞",
            mountain_snow: "🏔",
            mouse: "🐭",
            mouse2: "🐁",
            movie_camera: "🎥",
            moyai: "🗿",
            mrs_claus: "🤶",
            muscle: "💪",
            mushroom: "🍄",
            musical_keyboard: "🎹",
            musical_note: "🎵",
            musical_score: "🎼",
            mute: "🔇",
            nail_care: "💅",
            name_badge: "📛",
            national_park: "🏞",
            nauseated_face: "🤢",
            necktie: "👔",
            negative_squared_cross_mark: "❎",
            nerd_face: "🤓",
            neutral_face: "😐",
            new: "🆕",
            new_moon: "🌑",
            new_moon_with_face: "🌚",
            newspaper: "📰",
            newspaper_roll: "🗞",
            next_track_button: "⏭",
            ng: "🆖",
            no_good_man: "🙅&zwj;♂️",
            no_good_woman: "🙅",
            night_with_stars: "🌃",
            no_bell: "🔕",
            no_bicycles: "🚳",
            no_entry: "⛔️",
            no_entry_sign: "🚫",
            no_mobile_phones: "📵",
            no_mouth: "😶",
            no_pedestrians: "🚷",
            no_smoking: "🚭",
            "non-potable_water": "🚱",
            nose: "👃",
            notebook: "📓",
            notebook_with_decorative_cover: "📔",
            notes: "🎶",
            nut_and_bolt: "🔩",
            o: "⭕️",
            o2: "🅾️",
            ocean: "🌊",
            octopus: "🐙",
            oden: "🍢",
            office: "🏢",
            oil_drum: "🛢",
            ok: "🆗",
            ok_hand: "👌",
            ok_man: "🙆&zwj;♂️",
            ok_woman: "🙆",
            old_key: "🗝",
            older_man: "👴",
            older_woman: "👵",
            om: "🕉",
            on: "🔛",
            oncoming_automobile: "🚘",
            oncoming_bus: "🚍",
            oncoming_police_car: "🚔",
            oncoming_taxi: "🚖",
            open_file_folder: "📂",
            open_hands: "👐",
            open_mouth: "😮",
            open_umbrella: "☂️",
            ophiuchus: "⛎",
            orange_book: "📙",
            orthodox_cross: "☦️",
            outbox_tray: "📤",
            owl: "🦉",
            ox: "🐂",
            package: "📦",
            page_facing_up: "📄",
            page_with_curl: "📃",
            pager: "📟",
            paintbrush: "🖌",
            palm_tree: "🌴",
            pancakes: "🥞",
            panda_face: "🐼",
            paperclip: "📎",
            paperclips: "🖇",
            parasol_on_ground: "⛱",
            parking: "🅿️",
            part_alternation_mark: "〽️",
            partly_sunny: "⛅️",
            passenger_ship: "🛳",
            passport_control: "🛂",
            pause_button: "⏸",
            peace_symbol: "☮️",
            peach: "🍑",
            peanuts: "🥜",
            pear: "🍐",
            pen: "🖊",
            pencil2: "✏️",
            penguin: "🐧",
            pensive: "😔",
            performing_arts: "🎭",
            persevere: "😣",
            person_fencing: "🤺",
            pouting_woman: "🙎",
            phone: "☎️",
            pick: "⛏",
            pig: "🐷",
            pig2: "🐖",
            pig_nose: "🐽",
            pill: "💊",
            pineapple: "🍍",
            ping_pong: "🏓",
            pisces: "♓️",
            pizza: "🍕",
            place_of_worship: "🛐",
            plate_with_cutlery: "🍽",
            play_or_pause_button: "⏯",
            point_down: "👇",
            point_left: "👈",
            point_right: "👉",
            point_up: "☝️",
            point_up_2: "👆",
            police_car: "🚓",
            policewoman: "👮&zwj;♀️",
            poodle: "🐩",
            popcorn: "🍿",
            post_office: "🏣",
            postal_horn: "📯",
            postbox: "📮",
            potable_water: "🚰",
            potato: "🥔",
            pouch: "👝",
            poultry_leg: "🍗",
            pound: "💷",
            rage: "😡",
            pouting_cat: "😾",
            pouting_man: "🙎&zwj;♂️",
            pray: "🙏",
            prayer_beads: "📿",
            pregnant_woman: "🤰",
            previous_track_button: "⏮",
            prince: "🤴",
            princess: "👸",
            printer: "🖨",
            purple_heart: "💜",
            purse: "👛",
            pushpin: "📌",
            put_litter_in_its_place: "🚮",
            question: "❓",
            rabbit: "🐰",
            rabbit2: "🐇",
            racehorse: "🐎",
            racing_car: "🏎",
            radio: "📻",
            radio_button: "🔘",
            radioactive: "☢️",
            railway_car: "🚃",
            railway_track: "🛤",
            rainbow: "🌈",
            rainbow_flag: "🏳️&zwj;🌈",
            raised_back_of_hand: "🤚",
            raised_hand_with_fingers_splayed: "🖐",
            raised_hands: "🙌",
            raising_hand_woman: "🙋",
            raising_hand_man: "🙋&zwj;♂️",
            ram: "🐏",
            ramen: "🍜",
            rat: "🐀",
            record_button: "⏺",
            recycle: "♻️",
            red_circle: "🔴",
            registered: "®️",
            relaxed: "☺️",
            relieved: "😌",
            reminder_ribbon: "🎗",
            repeat: "🔁",
            repeat_one: "🔂",
            rescue_worker_helmet: "⛑",
            restroom: "🚻",
            revolving_hearts: "💞",
            rewind: "⏪",
            rhinoceros: "🦏",
            ribbon: "🎀",
            rice: "🍚",
            rice_ball: "🍙",
            rice_cracker: "🍘",
            rice_scene: "🎑",
            right_anger_bubble: "🗯",
            ring: "💍",
            robot: "🤖",
            rocket: "🚀",
            rofl: "🤣",
            roll_eyes: "🙄",
            roller_coaster: "🎢",
            rooster: "🐓",
            rose: "🌹",
            rosette: "🏵",
            rotating_light: "🚨",
            round_pushpin: "📍",
            rowing_man: "🚣",
            rowing_woman: "🚣&zwj;♀️",
            rugby_football: "🏉",
            running_man: "🏃",
            running_shirt_with_sash: "🎽",
            running_woman: "🏃&zwj;♀️",
            sa: "🈂️",
            sagittarius: "♐️",
            sake: "🍶",
            sandal: "👡",
            santa: "🎅",
            satellite: "📡",
            saxophone: "🎷",
            school: "🏫",
            school_satchel: "🎒",
            scissors: "✂️",
            scorpion: "🦂",
            scorpius: "♏️",
            scream: "😱",
            scream_cat: "🙀",
            scroll: "📜",
            seat: "💺",
            secret: "㊙️",
            see_no_evil: "🙈",
            seedling: "🌱",
            selfie: "🤳",
            shallow_pan_of_food: "🥘",
            shamrock: "☘️",
            shark: "🦈",
            shaved_ice: "🍧",
            sheep: "🐑",
            shell: "🐚",
            shield: "🛡",
            shinto_shrine: "⛩",
            ship: "🚢",
            shirt: "👕",
            shopping: "🛍",
            shopping_cart: "🛒",
            shower: "🚿",
            shrimp: "🦐",
            signal_strength: "📶",
            six_pointed_star: "🔯",
            ski: "🎿",
            skier: "⛷",
            skull: "💀",
            skull_and_crossbones: "☠️",
            sleeping: "😴",
            sleeping_bed: "🛌",
            sleepy: "😪",
            slightly_frowning_face: "🙁",
            slightly_smiling_face: "🙂",
            slot_machine: "🎰",
            small_airplane: "🛩",
            small_blue_diamond: "🔹",
            small_orange_diamond: "🔸",
            small_red_triangle: "🔺",
            small_red_triangle_down: "🔻",
            smile: "😄",
            smile_cat: "😸",
            smiley: "😃",
            smiley_cat: "😺",
            smiling_imp: "😈",
            smirk: "😏",
            smirk_cat: "😼",
            smoking: "🚬",
            snail: "🐌",
            snake: "🐍",
            sneezing_face: "🤧",
            snowboarder: "🏂",
            snowflake: "❄️",
            snowman: "⛄️",
            snowman_with_snow: "☃️",
            sob: "😭",
            soccer: "⚽️",
            soon: "🔜",
            sos: "🆘",
            sound: "🔉",
            space_invader: "👾",
            spades: "♠️",
            spaghetti: "🍝",
            sparkle: "❇️",
            sparkler: "🎇",
            sparkles: "✨",
            sparkling_heart: "💖",
            speak_no_evil: "🙊",
            speaker: "🔈",
            speaking_head: "🗣",
            speech_balloon: "💬",
            speedboat: "🚤",
            spider: "🕷",
            spider_web: "🕸",
            spiral_calendar: "🗓",
            spiral_notepad: "🗒",
            spoon: "🥄",
            squid: "🦑",
            stadium: "🏟",
            star: "⭐️",
            star2: "🌟",
            star_and_crescent: "☪️",
            star_of_david: "✡️",
            stars: "🌠",
            station: "🚉",
            statue_of_liberty: "🗽",
            steam_locomotive: "🚂",
            stew: "🍲",
            stop_button: "⏹",
            stop_sign: "🛑",
            stopwatch: "⏱",
            straight_ruler: "📏",
            strawberry: "🍓",
            stuck_out_tongue: "😛",
            stuck_out_tongue_closed_eyes: "😝",
            stuck_out_tongue_winking_eye: "😜",
            studio_microphone: "🎙",
            stuffed_flatbread: "🥙",
            sun_behind_large_cloud: "🌥",
            sun_behind_rain_cloud: "🌦",
            sun_behind_small_cloud: "🌤",
            sun_with_face: "🌞",
            sunflower: "🌻",
            sunglasses: "😎",
            sunny: "☀️",
            sunrise: "🌅",
            sunrise_over_mountains: "🌄",
            surfing_man: "🏄",
            surfing_woman: "🏄&zwj;♀️",
            sushi: "🍣",
            suspension_railway: "🚟",
            sweat: "😓",
            sweat_drops: "💦",
            sweat_smile: "😅",
            sweet_potato: "🍠",
            swimming_man: "🏊",
            swimming_woman: "🏊&zwj;♀️",
            symbols: "🔣",
            synagogue: "🕍",
            syringe: "💉",
            taco: "🌮",
            tada: "🎉",
            tanabata_tree: "🎋",
            taurus: "♉️",
            taxi: "🚕",
            tea: "🍵",
            telephone_receiver: "📞",
            telescope: "🔭",
            tennis: "🎾",
            tent: "⛺️",
            thermometer: "🌡",
            thinking: "🤔",
            thought_balloon: "💭",
            ticket: "🎫",
            tickets: "🎟",
            tiger: "🐯",
            tiger2: "🐅",
            timer_clock: "⏲",
            tipping_hand_man: "💁&zwj;♂️",
            tired_face: "😫",
            tm: "™️",
            toilet: "🚽",
            tokyo_tower: "🗼",
            tomato: "🍅",
            tongue: "👅",
            top: "🔝",
            tophat: "🎩",
            tornado: "🌪",
            trackball: "🖲",
            tractor: "🚜",
            traffic_light: "🚥",
            train: "🚋",
            train2: "🚆",
            tram: "🚊",
            triangular_flag_on_post: "🚩",
            triangular_ruler: "📐",
            trident: "🔱",
            triumph: "😤",
            trolleybus: "🚎",
            trophy: "🏆",
            tropical_drink: "🍹",
            tropical_fish: "🐠",
            truck: "🚚",
            trumpet: "🎺",
            tulip: "🌷",
            tumbler_glass: "🥃",
            turkey: "🦃",
            turtle: "🐢",
            tv: "📺",
            twisted_rightwards_arrows: "🔀",
            two_hearts: "💕",
            two_men_holding_hands: "👬",
            two_women_holding_hands: "👭",
            u5272: "🈹",
            u5408: "🈴",
            u55b6: "🈺",
            u6307: "🈯️",
            u6708: "🈷️",
            u6709: "🈶",
            u6e80: "🈵",
            u7121: "🈚️",
            u7533: "🈸",
            u7981: "🈲",
            u7a7a: "🈳",
            umbrella: "☔️",
            unamused: "😒",
            underage: "🔞",
            unicorn: "🦄",
            unlock: "🔓",
            up: "🆙",
            upside_down_face: "🙃",
            v: "✌️",
            vertical_traffic_light: "🚦",
            vhs: "📼",
            vibration_mode: "📳",
            video_camera: "📹",
            video_game: "🎮",
            violin: "🎻",
            virgo: "♍️",
            volcano: "🌋",
            volleyball: "🏐",
            vs: "🆚",
            vulcan_salute: "🖖",
            walking_man: "🚶",
            walking_woman: "🚶&zwj;♀️",
            waning_crescent_moon: "🌘",
            waning_gibbous_moon: "🌖",
            warning: "⚠️",
            wastebasket: "🗑",
            watch: "⌚️",
            water_buffalo: "🐃",
            watermelon: "🍉",
            wave: "👋",
            wavy_dash: "〰️",
            waxing_crescent_moon: "🌒",
            wc: "🚾",
            weary: "😩",
            wedding: "💒",
            weight_lifting_man: "🏋️",
            weight_lifting_woman: "🏋️&zwj;♀️",
            whale: "🐳",
            whale2: "🐋",
            wheel_of_dharma: "☸️",
            wheelchair: "♿️",
            white_check_mark: "✅",
            white_circle: "⚪️",
            white_flag: "🏳️",
            white_flower: "💮",
            white_large_square: "⬜️",
            white_medium_small_square: "◽️",
            white_medium_square: "◻️",
            white_small_square: "▫️",
            white_square_button: "🔳",
            wilted_flower: "🥀",
            wind_chime: "🎐",
            wind_face: "🌬",
            wine_glass: "🍷",
            wink: "😉",
            wolf: "🐺",
            woman: "👩",
            woman_artist: "👩&zwj;🎨",
            woman_astronaut: "👩&zwj;🚀",
            woman_cartwheeling: "🤸&zwj;♀️",
            woman_cook: "👩&zwj;🍳",
            woman_facepalming: "🤦&zwj;♀️",
            woman_factory_worker: "👩&zwj;🏭",
            woman_farmer: "👩&zwj;🌾",
            woman_firefighter: "👩&zwj;🚒",
            woman_health_worker: "👩&zwj;⚕️",
            woman_judge: "👩&zwj;⚖️",
            woman_juggling: "🤹&zwj;♀️",
            woman_mechanic: "👩&zwj;🔧",
            woman_office_worker: "👩&zwj;💼",
            woman_pilot: "👩&zwj;✈️",
            woman_playing_handball: "🤾&zwj;♀️",
            woman_playing_water_polo: "🤽&zwj;♀️",
            woman_scientist: "👩&zwj;🔬",
            woman_shrugging: "🤷&zwj;♀️",
            woman_singer: "👩&zwj;🎤",
            woman_student: "👩&zwj;🎓",
            woman_teacher: "👩&zwj;🏫",
            woman_technologist: "👩&zwj;💻",
            woman_with_turban: "👳&zwj;♀️",
            womans_clothes: "👚",
            womans_hat: "👒",
            women_wrestling: "🤼&zwj;♀️",
            womens: "🚺",
            world_map: "🗺",
            worried: "😟",
            wrench: "🔧",
            writing_hand: "✍️",
            x: "❌",
            yellow_heart: "💛",
            yen: "💴",
            yin_yang: "☯️",
            yum: "😋",
            zap: "⚡️",
            zipper_mouth_face: "🤐",
            zzz: "💤",
            octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
            showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
        }, s.Converter = function (e) {
            "use strict";
            var t = {},
                i = [],
                n = [],
                r = {},
                o = c,
                d = {
                    parsed: {},
                    raw: "",
                    format: ""
                };

            function g(e, t) {
                if (t = t || null, s.helper.isString(e)) {
                    if (t = e = s.helper.stdExtName(e), s.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void
                        function (e, t) {
                            "function" == typeof e && (e = e(new s.Converter));
                            s.helper.isArray(e) || (e = [e]);
                            var r = u(e, t);
                            if (!r.valid) throw Error(r.error);
                            for (var o = 0; o < e.length; ++o) switch (e[o].type) {
                                case "lang":
                                    i.push(e[o]);
                                    break;
                                case "output":
                                    n.push(e[o]);
                                    break;
                                default:
                                    throw Error("Extension loader error: Type unrecognized!!!")
                            }
                        }(s.extensions[e], e);
                    if (s.helper.isUndefined(a[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                    e = a[e]
                }
                "function" == typeof e && (e = e()), s.helper.isArray(e) || (e = [e]);
                var r = u(e, t);
                if (!r.valid) throw Error(r.error);
                for (var o = 0; o < e.length; ++o) {
                    switch (e[o].type) {
                        case "lang":
                            i.push(e[o]);
                            break;
                        case "output":
                            n.push(e[o])
                    }
                    if (e[o].hasOwnProperty("listeners"))
                        for (var l in e[o].listeners) e[o].listeners.hasOwnProperty(l) && f(l, e[o].listeners[l])
                }
            }

            function f(e, t) {
                if (!s.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
                if ("function" != typeof t) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof t + " given");
                r.hasOwnProperty(e) || (r[e] = []), r[e].push(t)
            } ! function () {
                for (var i in e = e || {}, l) l.hasOwnProperty(i) && (t[i] = l[i]);
                if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                t.extensions && s.helper.forEach(t.extensions, g)
            }(), this._dispatch = function (e, t, i, n) {
                if (r.hasOwnProperty(e))
                    for (var s = 0; s < r[e].length; ++s) {
                        var o = r[e][s](e, t, this, i, n);
                        o && void 0 !== o && (t = o)
                    }
                return t
            }, this.listen = function (e, t) {
                return f(e, t), this
            }, this.makeHtml = function (e) {
                if (!e) return e;
                var r = {
                    gHtmlBlocks: [],
                    gHtmlMdBlocks: [],
                    gHtmlSpans: [],
                    gUrls: {},
                    gTitles: {},
                    gDimensions: {},
                    gListLevel: 0,
                    hashLinkCounts: {},
                    langExtensions: i,
                    outputModifiers: n,
                    converter: this,
                    ghCodeBlocks: [],
                    metadata: {
                        parsed: {},
                        raw: "",
                        format: ""
                    }
                };
                return e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"), t.smartIndentationFix && (e = function (e) {
                    var t = e.match(/^\s*/)[0].length,
                        i = new RegExp("^\\s{0," + t + "}", "gm");
                    return e.replace(i, "")
                }(e)), e = "\n\n" + e + "\n\n", e = (e = s.subParser("detab")(e, t, r)).replace(/^[ \t]+$/gm, ""), s.helper.forEach(i, (function (i) {
                    e = s.subParser("runExtension")(i, e, t, r)
                })), e = s.subParser("metadata")(e, t, r), e = s.subParser("hashPreCodeTags")(e, t, r), e = s.subParser("githubCodeBlocks")(e, t, r), e = s.subParser("hashHTMLBlocks")(e, t, r), e = s.subParser("hashCodeTags")(e, t, r), e = s.subParser("stripLinkDefinitions")(e, t, r), e = s.subParser("blockGamut")(e, t, r), e = s.subParser("unhashHTMLSpans")(e, t, r), e = (e = (e = s.subParser("unescapeSpecialChars")(e, t, r)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"), e = s.subParser("completeHTMLDocument")(e, t, r), s.helper.forEach(n, (function (i) {
                    e = s.subParser("runExtension")(i, e, t, r)
                })), d = r.metadata, e
            }, this.makeMarkdown = this.makeMd = function (e, t) {
                if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"), !t) {
                    if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                    t = window.document
                }
                var i = t.createElement("div");
                i.innerHTML = e;
                var n = {
                    preList: function (e) {
                        for (var t = e.querySelectorAll("pre"), i = [], n = 0; n < t.length; ++n)
                            if (1 === t[n].childElementCount && "code" === t[n].firstChild.tagName.toLowerCase()) {
                                var r = t[n].firstChild.innerHTML.trim(),
                                    o = t[n].firstChild.getAttribute("data-language") || "";
                                if ("" === o)
                                    for (var a = t[n].firstChild.className.split(" "), l = 0; l < a.length; ++l) {
                                        var c = a[l].match(/^language-(.+)$/);
                                        if (null !== c) {
                                            o = c[1];
                                            break
                                        }
                                    }
                                r = s.helper.unescapeHTMLEntities(r), i.push(r), t[n].outerHTML = '<precode language="' + o + '" precodenum="' + n.toString() + '"></precode>'
                            } else i.push(t[n].innerHTML), t[n].innerHTML = "", t[n].setAttribute("prenum", n.toString());
                        return i
                    }(i)
                };
                ! function e(t) {
                    for (var i = 0; i < t.childNodes.length; ++i) {
                        var n = t.childNodes[i];
                        3 === n.nodeType ? /\S/.test(n.nodeValue) ? (n.nodeValue = n.nodeValue.split("\n").join(" "), n.nodeValue = n.nodeValue.replace(/(\s)+/g, "$1")) : (t.removeChild(n), --i) : 1 === n.nodeType && e(n)
                    }
                }(i);
                for (var r = i.childNodes, o = "", a = 0; a < r.length; a++) o += s.subParser("makeMarkdown.node")(r[a], n);
                return o
            }, this.setOption = function (e, i) {
                t[e] = i
            }, this.getOption = function (e) {
                return t[e]
            }, this.getOptions = function () {
                return t
            }, this.addExtension = function (e, t) {
                g(e, t = t || null)
            }, this.useExtension = function (e) {
                g(e)
            }, this.setFlavor = function (e) {
                if (!h.hasOwnProperty(e)) throw Error(e + " flavor was not found");
                var i = h[e];
                for (var n in o = e, i) i.hasOwnProperty(n) && (t[n] = i[n])
            }, this.getFlavor = function () {
                return o
            }, this.removeExtension = function (e) {
                s.helper.isArray(e) || (e = [e]);
                for (var t = 0; t < e.length; ++t) {
                    for (var r = e[t], o = 0; o < i.length; ++o) i[o] === r && i[o].splice(o, 1);
                    for (; 0 < n.length; ++o) n[0] === r && n[0].splice(o, 1)
                }
            }, this.getAllExtensions = function () {
                return {
                    language: i,
                    output: n
                }
            }, this.getMetadata = function (e) {
                return e ? d.raw : d.parsed
            }, this.getMetadataFormat = function () {
                return d.format
            }, this._setMetadataPair = function (e, t) {
                d.parsed[e] = t
            }, this._setMetadataFormat = function (e) {
                d.format = e
            }, this._setMetadataRaw = function (e) {
                d.raw = e
            }
        }, s.subParser("anchors", (function (e, t, i) {
            "use strict";
            var n = function (e, n, r, o, a, l, c) {
                if (s.helper.isUndefined(c) && (c = ""), r = r.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) o = "";
                else if (!o) {
                    if (r || (r = n.toLowerCase().replace(/ ?\n/g, " ")), o = "#" + r, s.helper.isUndefined(i.gUrls[r])) return e;
                    o = i.gUrls[r], s.helper.isUndefined(i.gTitles[r]) || (c = i.gTitles[r])
                }
                var h = '<a href="' + (o = o.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback)) + '"';
                return "" !== c && null !== c && (h += ' title="' + (c = (c = c.replace(/"/g, "&quot;")).replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback)) + '"'), t.openLinksInNewWindow && !/^#/.test(o) && (h += ' rel="noopener noreferrer" target="¨E95Eblank"'), h += ">" + n + "</a>"
            };
            return e = (e = (e = (e = (e = i.converter._dispatch("anchors.before", e, t, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, n)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n)).replace(/\[([^\[\]]+)]()()()()()/g, n), t.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, (function (e, i, n, r, o) {
                if ("\\" === n) return i + r;
                if (!s.helper.isString(t.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
                var a = t.ghMentionsLink.replace(/\{u}/g, o),
                    l = "";
                return t.openLinksInNewWindow && (l = ' rel="noopener noreferrer" target="¨E95Eblank"'), i + '<a href="' + a + '"' + l + ">" + r + "</a>"
            }))), e = i.converter._dispatch("anchors.after", e, t, i)
        }));
        var f = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
            p = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
            m = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
            w = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
            A = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            v = function (e) {
                "use strict";
                return function (t, i, n, r, o, a, l) {
                    var c = n = n.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback),
                        h = "",
                        u = "",
                        d = i || "",
                        g = l || "";
                    return /^www\./i.test(n) && (n = n.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && a && (h = a), e.openLinksInNewWindow && (u = ' rel="noopener noreferrer" target="¨E95Eblank"'), d + '<a href="' + n + '"' + u + ">" + c + "</a>" + h + g
                }
            },
            b = function (e, t) {
                "use strict";
                return function (i, n, r) {
                    var o = "mailto:";
                    return n = n || "", r = s.subParser("unescapeSpecialChars")(r, e, t), e.encodeEmails ? (o = s.helper.encodeEmailAddress(o + r), r = s.helper.encodeEmailAddress(r)) : o += r, n + '<a href="' + o + '">' + r + "</a>"
                }
            };
        s.subParser("autoLinks", (function (e, t, i) {
            "use strict";
            return e = (e = (e = i.converter._dispatch("autoLinks.before", e, t, i)).replace(m, v(t))).replace(A, b(t, i)), e = i.converter._dispatch("autoLinks.after", e, t, i)
        })), s.subParser("simplifiedAutoLinks", (function (e, t, i) {
            "use strict";
            return t.simplifiedAutoLink ? (e = i.converter._dispatch("simplifiedAutoLinks.before", e, t, i), e = (e = t.excludeTrailingPunctuationFromURLs ? e.replace(p, v(t)) : e.replace(f, v(t))).replace(w, b(t, i)), e = i.converter._dispatch("simplifiedAutoLinks.after", e, t, i)) : e
        })), s.subParser("blockGamut", (function (e, t, i) {
            "use strict";
            return e = i.converter._dispatch("blockGamut.before", e, t, i), e = s.subParser("blockQuotes")(e, t, i), e = s.subParser("headers")(e, t, i), e = s.subParser("horizontalRule")(e, t, i), e = s.subParser("lists")(e, t, i), e = s.subParser("codeBlocks")(e, t, i), e = s.subParser("tables")(e, t, i), e = s.subParser("hashHTMLBlocks")(e, t, i), e = s.subParser("paragraphs")(e, t, i), e = i.converter._dispatch("blockGamut.after", e, t, i)
        })), s.subParser("blockQuotes", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("blockQuotes.before", e, t, i), e += "\n\n";
            var n = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
            return t.splitAdjacentBlockquotes && (n = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(n, (function (e) {
                return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""), e = s.subParser("githubCodeBlocks")(e, t, i), e = (e = (e = s.subParser("blockGamut")(e, t, i)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function (e, t) {
                    var i = t;
                    return i = (i = i.replace(/^  /gm, "¨0")).replace(/¨0/g, "")
                })), s.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", t, i)
            })), e = i.converter._dispatch("blockQuotes.after", e, t, i)
        })), s.subParser("codeBlocks", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("codeBlocks.before", e, t, i);
            return e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, (function (e, n, r) {
                var o = n,
                    a = r,
                    l = "\n";
                return o = s.subParser("outdent")(o, t, i), o = s.subParser("encodeCode")(o, t, i), o = (o = (o = s.subParser("detab")(o, t, i)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), t.omitExtraWLInCodeBlocks && (l = ""), o = "<pre><code>" + o + l + "</code></pre>", s.subParser("hashBlock")(o, t, i) + a
            }))).replace(/¨0/, ""), e = i.converter._dispatch("codeBlocks.after", e, t, i)
        })), s.subParser("codeSpans", (function (e, t, i) {
            "use strict";
            return void 0 === (e = i.converter._dispatch("codeSpans.before", e, t, i)) && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function (e, n, r, o) {
                var a = o;
                return a = (a = a.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), a = n + "<code>" + (a = s.subParser("encodeCode")(a, t, i)) + "</code>", a = s.subParser("hashHTMLSpans")(a, t, i)
            })), e = i.converter._dispatch("codeSpans.after", e, t, i)
        })), s.subParser("completeHTMLDocument", (function (e, t, i) {
            "use strict";
            if (!t.completeHTMLDocument) return e;
            e = i.converter._dispatch("completeHTMLDocument.before", e, t, i);
            var n = "html",
                r = "<!DOCTYPE HTML>\n",
                s = "",
                o = '<meta charset="utf-8">\n',
                a = "",
                l = "";
            for (var c in void 0 !== i.metadata.parsed.doctype && (r = "<!DOCTYPE " + i.metadata.parsed.doctype + ">\n", "html" !== (n = i.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== n || (o = '<meta charset="utf-8">')), i.metadata.parsed)
                if (i.metadata.parsed.hasOwnProperty(c)) switch (c.toLowerCase()) {
                    case "doctype":
                        break;
                    case "title":
                        s = "<title>" + i.metadata.parsed.title + "</title>\n";
                        break;
                    case "charset":
                        o = "html" === n || "html5" === n ? '<meta charset="' + i.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + i.metadata.parsed.charset + '">\n';
                        break;
                    case "language":
                    case "lang":
                        a = ' lang="' + i.metadata.parsed[c] + '"', l += '<meta name="' + c + '" content="' + i.metadata.parsed[c] + '">\n';
                        break;
                    default:
                        l += '<meta name="' + c + '" content="' + i.metadata.parsed[c] + '">\n'
                }
            return e = r + "<html" + a + ">\n<head>\n" + s + o + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", e = i.converter._dispatch("completeHTMLDocument.after", e, t, i)
        })), s.subParser("detab", (function (e, t, i) {
            "use strict";
            return e = (e = (e = (e = (e = (e = i.converter._dispatch("detab.before", e, t, i)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, (function (e, t) {
                for (var i = t, n = 4 - i.length % 4, r = 0; r < n; r++) i += " ";
                return i
            }))).replace(/¨A/g, "    ")).replace(/¨B/g, ""), e = i.converter._dispatch("detab.after", e, t, i)
        })), s.subParser("ellipsis", (function (e, t, i) {
            "use strict";
            return e = (e = i.converter._dispatch("ellipsis.before", e, t, i)).replace(/\.\.\./g, "…"), e = i.converter._dispatch("ellipsis.after", e, t, i)
        })), s.subParser("emoji", (function (e, t, i) {
            "use strict";
            if (!t.emoji) return e;
            return e = (e = i.converter._dispatch("emoji.before", e, t, i)).replace(/:([\S]+?):/g, (function (e, t) {
                return s.helper.emojis.hasOwnProperty(t) ? s.helper.emojis[t] : e
            })), e = i.converter._dispatch("emoji.after", e, t, i)
        })), s.subParser("encodeAmpsAndAngles", (function (e, t, i) {
            "use strict";
            return e = (e = (e = (e = (e = i.converter._dispatch("encodeAmpsAndAngles.before", e, t, i)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), e = i.converter._dispatch("encodeAmpsAndAngles.after", e, t, i)
        })), s.subParser("encodeBackslashEscapes", (function (e, t, i) {
            "use strict";
            return e = (e = (e = i.converter._dispatch("encodeBackslashEscapes.before", e, t, i)).replace(/\\(\\)/g, s.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, s.helper.escapeCharactersCallback), e = i.converter._dispatch("encodeBackslashEscapes.after", e, t, i)
        })), s.subParser("encodeCode", (function (e, t, i) {
            "use strict";
            return e = (e = i.converter._dispatch("encodeCode.before", e, t, i)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, s.helper.escapeCharactersCallback), e = i.converter._dispatch("encodeCode.after", e, t, i)
        })), s.subParser("escapeSpecialCharsWithinTagAttributes", (function (e, t, i) {
            "use strict";
            return e = (e = (e = i.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, t, i)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, (function (e) {
                return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, s.helper.escapeCharactersCallback)
            }))).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, (function (e) {
                return e.replace(/([\\`*_~=|])/g, s.helper.escapeCharactersCallback)
            })), e = i.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, t, i)
        })), s.subParser("githubCodeBlocks", (function (e, t, i) {
            "use strict";
            return t.ghCodeBlocks ? (e = i.converter._dispatch("githubCodeBlocks.before", e, t, i), e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, (function (e, n, r, o) {
                var a = t.omitExtraWLInCodeBlocks ? "" : "\n";
                return o = s.subParser("encodeCode")(o, t, i), o = "<pre><code" + (r ? ' class="' + r + " language-" + r + '"' : "") + ">" + (o = (o = (o = s.subParser("detab")(o, t, i)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + a + "</code></pre>", o = s.subParser("hashBlock")(o, t, i), "\n\n¨G" + (i.ghCodeBlocks.push({
                    text: e,
                    codeblock: o
                }) - 1) + "G\n\n"
            }))).replace(/¨0/, ""), i.converter._dispatch("githubCodeBlocks.after", e, t, i)) : e
        })), s.subParser("hashBlock", (function (e, t, i) {
            "use strict";
            return e = (e = i.converter._dispatch("hashBlock.before", e, t, i)).replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (i.gHtmlBlocks.push(e) - 1) + "K\n\n", e = i.converter._dispatch("hashBlock.after", e, t, i)
        })), s.subParser("hashCodeTags", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("hashCodeTags.before", e, t, i);
            return e = s.helper.replaceRecursiveRegExp(e, (function (e, n, r, o) {
                var a = r + s.subParser("encodeCode")(n, t, i) + o;
                return "¨C" + (i.gHtmlSpans.push(a) - 1) + "C"
            }), "<code\\b[^>]*>", "</code>", "gim"), e = i.converter._dispatch("hashCodeTags.after", e, t, i)
        })), s.subParser("hashElement", (function (e, t, i) {
            "use strict";
            return function (e, t) {
                var n = t;
                return n = (n = (n = n.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), n = "\n\n¨K" + (i.gHtmlBlocks.push(n) - 1) + "K\n\n"
            }
        })), s.subParser("hashHTMLBlocks", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("hashHTMLBlocks.before", e, t, i);
            var n = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"],
                r = function (e, t, n, r) {
                    var s = e;
                    return -1 !== n.search(/\bmarkdown\b/) && (s = n + i.converter.makeHtml(t) + r), "\n\n¨K" + (i.gHtmlBlocks.push(s) - 1) + "K\n\n"
                };
            t.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, (function (e, t) {
                return "&lt;" + t + "&gt;"
            })));
            for (var o = 0; o < n.length; ++o)
                for (var a, l = new RegExp("^ {0,3}(<" + n[o] + "\\b[^>]*>)", "im"), c = "<" + n[o] + "\\b[^>]*>", h = "</" + n[o] + ">"; - 1 !== (a = s.helper.regexIndexOf(e, l));) {
                    var u = s.helper.splitAtIndex(e, a),
                        d = s.helper.replaceRecursiveRegExp(u[1], r, c, h, "im");
                    if (d === u[1]) break;
                    e = u[0].concat(d)
                }
            return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, s.subParser("hashElement")(e, t, i)), e = (e = s.helper.replaceRecursiveRegExp(e, (function (e) {
                return "\n\n¨K" + (i.gHtmlBlocks.push(e) - 1) + "K\n\n"
            }), "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, s.subParser("hashElement")(e, t, i)), e = i.converter._dispatch("hashHTMLBlocks.after", e, t, i)
        })), s.subParser("hashHTMLSpans", (function (e, t, i) {
            "use strict";

            function n(e) {
                return "¨C" + (i.gHtmlSpans.push(e) - 1) + "C"
            }
            return e = (e = (e = (e = (e = i.converter._dispatch("hashHTMLSpans.before", e, t, i)).replace(/<[^>]+?\/>/gi, (function (e) {
                return n(e)
            }))).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, (function (e) {
                return n(e)
            }))).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, (function (e) {
                return n(e)
            }))).replace(/<[^>]+?>/gi, (function (e) {
                return n(e)
            })), e = i.converter._dispatch("hashHTMLSpans.after", e, t, i)
        })), s.subParser("unhashHTMLSpans", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("unhashHTMLSpans.before", e, t, i);
            for (var n = 0; n < i.gHtmlSpans.length; ++n) {
                for (var r = i.gHtmlSpans[n], s = 0;
                    /¨C(\d+)C/.test(r);) {
                    var o = RegExp.$1;
                    if (r = r.replace("¨C" + o + "C", i.gHtmlSpans[o]), 10 === s) {
                        console.error("maximum nesting of 10 spans reached!!!");
                        break
                    } ++s
                }
                e = e.replace("¨C" + n + "C", r)
            }
            return e = i.converter._dispatch("unhashHTMLSpans.after", e, t, i)
        })), s.subParser("hashPreCodeTags", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("hashPreCodeTags.before", e, t, i);
            return e = s.helper.replaceRecursiveRegExp(e, (function (e, n, r, o) {
                var a = r + s.subParser("encodeCode")(n, t, i) + o;
                return "\n\n¨G" + (i.ghCodeBlocks.push({
                    text: e,
                    codeblock: a
                }) - 1) + "G\n\n"
            }), "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = i.converter._dispatch("hashPreCodeTags.after", e, t, i)
        })), s.subParser("headers", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("headers.before", e, t, i);
            var n = isNaN(parseInt(t.headerLevelStart)) ? 1 : parseInt(t.headerLevelStart),
                r = t.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
                o = t.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            e = (e = e.replace(r, (function (e, r) {
                var o = s.subParser("spanGamut")(r, t, i),
                    a = t.noHeaderId ? "" : ' id="' + l(r) + '"',
                    c = "<h" + n + a + ">" + o + "</h" + n + ">";
                return s.subParser("hashBlock")(c, t, i)
            }))).replace(o, (function (e, r) {
                var o = s.subParser("spanGamut")(r, t, i),
                    a = t.noHeaderId ? "" : ' id="' + l(r) + '"',
                    c = n + 1,
                    h = "<h" + c + a + ">" + o + "</h" + c + ">";
                return s.subParser("hashBlock")(h, t, i)
            }));
            var a = t.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

            function l(e) {
                var n, r;
                if (t.customizedHeaderId) {
                    var o = e.match(/\{([^{]+?)}\s*$/);
                    o && o[1] && (e = o[1])
                }
                return n = e, r = s.helper.isString(t.prefixHeaderId) ? t.prefixHeaderId : !0 === t.prefixHeaderId ? "section-" : "", t.rawPrefixHeaderId || (n = r + n), n = t.ghCompatibleHeaderId ? n.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : t.rawHeaderId ? n.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : n.replace(/[^\w]/g, "").toLowerCase(), t.rawPrefixHeaderId && (n = r + n), i.hashLinkCounts[n] ? n = n + "-" + i.hashLinkCounts[n]++ : i.hashLinkCounts[n] = 1, n
            }
            return e = e.replace(a, (function (e, r, o) {
                var a = o;
                t.customizedHeaderId && (a = o.replace(/\s?\{([^{]+?)}\s*$/, ""));
                var c = s.subParser("spanGamut")(a, t, i),
                    h = t.noHeaderId ? "" : ' id="' + l(o) + '"',
                    u = n - 1 + r.length,
                    d = "<h" + u + h + ">" + c + "</h" + u + ">";
                return s.subParser("hashBlock")(d, t, i)
            })), e = i.converter._dispatch("headers.after", e, t, i)
        })), s.subParser("horizontalRule", (function (e, t, i) {
            "use strict";
            e = i.converter._dispatch("horizontalRule.before", e, t, i);
            var n = s.subParser("hashBlock")("<hr />", t, i);
            return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, n)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, n)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, n), e = i.converter._dispatch("horizontalRule.after", e, t, i)
        })), s.subParser("images", (function (e, t, i) {
            "use strict";

            function n(e, t, n, r, o, a, l, c) {
                var h = i.gUrls,
                    u = i.gTitles,
                    d = i.gDimensions;
                if (n = n.toLowerCase(), c || (c = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) r = "";
                else if ("" === r || null === r) {
                    if ("" !== n && null !== n || (n = t.toLowerCase().replace(/ ?\n/g, " ")), r = "#" + n, s.helper.isUndefined(h[n])) return e;
                    r = h[n], s.helper.isUndefined(u[n]) || (c = u[n]), s.helper.isUndefined(d[n]) || (o = d[n].width, a = d[n].height)
                }
                t = t.replace(/"/g, "&quot;").replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback);
                var g = '<img src="' + (r = r.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback)) + '" alt="' + t + '"';
                return c && s.helper.isString(c) && (g += ' title="' + (c = c.replace(/"/g, "&quot;").replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback)) + '"'), o && a && (g += ' width="' + (o = "*" === o ? "auto" : o) + '"', g += ' height="' + (a = "*" === a ? "auto" : a) + '"'), g += " />"
            }
            return e = (e = (e = (e = (e = (e = i.converter._dispatch("images.before", e, t, i)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, n)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, (function (e, t, i, r, s, o, a, l) {
                return n(e, t, i, r = r.replace(/\s/g, ""), s, o, a, l)
            }))).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, n)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, n)).replace(/!\[([^\[\]]+)]()()()()()/g, n), e = i.converter._dispatch("images.after", e, t, i)
        })), s.subParser("italicsAndBold", (function (e, t, i) {
            "use strict";

            function n(e, t, i) {
                return t + e + i
            }
            return e = i.converter._dispatch("italicsAndBold.before", e, t, i), e = t.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function (e, t) {
                return n(t, "<strong><em>", "</em></strong>")
            }))).replace(/\b__(\S[\s\S]*?)__\b/g, (function (e, t) {
                return n(t, "<strong>", "</strong>")
            }))).replace(/\b_(\S[\s\S]*?)_\b/g, (function (e, t) {
                return n(t, "<em>", "</em>")
            })) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, (function (e, t) {
                return /\S$/.test(t) ? n(t, "<strong><em>", "</em></strong>") : e
            }))).replace(/__(\S[\s\S]*?)__/g, (function (e, t) {
                return /\S$/.test(t) ? n(t, "<strong>", "</strong>") : e
            }))).replace(/_([^\s_][\s\S]*?)_/g, (function (e, t) {
                return /\S$/.test(t) ? n(t, "<em>", "</em>") : e
            })), e = t.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, (function (e, t, i) {
                return n(i, t + "<strong><em>", "</em></strong>")
            }))).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, (function (e, t, i) {
                return n(i, t + "<strong>", "</strong>")
            }))).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, (function (e, t, i) {
                return n(i, t + "<em>", "</em>")
            })) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, (function (e, t) {
                return /\S$/.test(t) ? n(t, "<strong><em>", "</em></strong>") : e
            }))).replace(/\*\*(\S[\s\S]*?)\*\*/g, (function (e, t) {
                return /\S$/.test(t) ? n(t, "<strong>", "</strong>") : e
            }))).replace(/\*([^\s*][\s\S]*?)\*/g, (function (e, t) {
                return /\S$/.test(t) ? n(t, "<em>", "</em>") : e
            })), e = i.converter._dispatch("italicsAndBold.after", e, t, i)
        })), s.subParser("lists", (function (e, t, i) {
            "use strict";

            function n(e, n) {
                i.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
                var r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                    o = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
                return t.disableForced4SpacesIndentedSublists && (r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = (e = e.replace(r, (function (e, n, r, a, l, c, h) {
                    h = h && "" !== h.trim();
                    var u = s.subParser("outdent")(l, t, i),
                        d = "";
                    return c && t.tasklists && (d = ' class="task-list-item" style="list-style-type: none;"', u = u.replace(/^[ \t]*\[(x|X| )?]/m, (function () {
                        var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        return h && (e += " checked"), e += ">"
                    }))), u = u.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, (function (e) {
                        return "¨A" + e
                    })), n || u.search(/\n{2,}/) > -1 ? (u = s.subParser("githubCodeBlocks")(u, t, i), u = s.subParser("blockGamut")(u, t, i)) : (u = (u = s.subParser("lists")(u, t, i)).replace(/\n$/, ""), u = (u = s.subParser("hashHTMLBlocks")(u, t, i)).replace(/\n\n+/g, "\n\n"), u = o ? s.subParser("paragraphs")(u, t, i) : s.subParser("spanGamut")(u, t, i)), u = "<li" + d + ">" + (u = u.replace("¨A", "")) + "</li>\n"
                }))).replace(/¨0/g, ""), i.gListLevel--, n && (e = e.replace(/\s+$/, "")), e
            }

            function r(e, t) {
                if ("ol" === t) {
                    var i = e.match(/^ *(\d+)\./);
                    if (i && "1" !== i[1]) return ' start="' + i[1] + '"'
                }
                return ""
            }

            function o(e, i, s) {
                var o = t.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                    a = t.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                    l = "ul" === i ? o : a,
                    c = "";
                if (-1 !== e.search(l)) ! function t(h) {
                    var u = h.search(l),
                        d = r(e, i); - 1 !== u ? (c += "\n\n<" + i + d + ">\n" + n(h.slice(0, u), !!s) + "</" + i + ">\n", l = "ul" === (i = "ul" === i ? "ol" : "ul") ? o : a, t(h.slice(u))) : c += "\n\n<" + i + d + ">\n" + n(h, !!s) + "</" + i + ">\n"
                }(e);
                else {
                    var h = r(e, i);
                    c = "\n\n<" + i + h + ">\n" + n(e, !!s) + "</" + i + ">\n"
                }
                return c
            }
            return e = i.converter._dispatch("lists.before", e, t, i), e += "¨0", e = (e = i.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function (e, t, i) {
                return o(t, i.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
            })) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function (e, t, i, n) {
                return o(i, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !1)
            }))).replace(/¨0/, ""), e = i.converter._dispatch("lists.after", e, t, i)
        })), s.subParser("metadata", (function (e, t, i) {
            "use strict";
            if (!t.metadata) return e;

            function n(e) {
                i.metadata.raw = e, (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, (function (e, t, n) {
                    return i.metadata.parsed[t] = n, ""
                }))
            }
            return e = (e = (e = (e = i.converter._dispatch("metadata.before", e, t, i)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, (function (e, t, i) {
                return n(i), "¨M"
            }))).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, (function (e, t, r) {
                return t && (i.metadata.format = t), n(r), "¨M"
            }))).replace(/¨M/g, ""), e = i.converter._dispatch("metadata.after", e, t, i)
        })), s.subParser("outdent", (function (e, t, i) {
            "use strict";
            return e = (e = (e = i.converter._dispatch("outdent.before", e, t, i)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""), e = i.converter._dispatch("outdent.after", e, t, i)
        })), s.subParser("paragraphs", (function (e, t, i) {
            "use strict";
            for (var n = (e = (e = (e = i.converter._dispatch("paragraphs.before", e, t, i)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), r = [], o = n.length, a = 0; a < o; a++) {
                var l = n[a];
                l.search(/¨(K|G)(\d+)\1/g) >= 0 ? r.push(l) : l.search(/\S/) >= 0 && (l = (l = s.subParser("spanGamut")(l, t, i)).replace(/^([ \t]*)/g, "<p>"), l += "</p>", r.push(l))
            }
            for (o = r.length, a = 0; a < o; a++) {
                for (var c = "", h = r[a], u = !1;
                    /¨(K|G)(\d+)\1/.test(h);) {
                    var d = RegExp.$1,
                        g = RegExp.$2;
                    c = (c = "K" === d ? i.gHtmlBlocks[g] : u ? s.subParser("encodeCode")(i.ghCodeBlocks[g].text, t, i) : i.ghCodeBlocks[g].codeblock).replace(/\$/g, "$$$$"), h = h.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(h) && (u = !0)
                }
                r[a] = h
            }
            return e = (e = (e = r.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), i.converter._dispatch("paragraphs.after", e, t, i)
        })), s.subParser("runExtension", (function (e, t, i, n) {
            "use strict";
            if (e.filter) t = e.filter(t, n.converter, i);
            else if (e.regex) {
                var r = e.regex;
                r instanceof RegExp || (r = new RegExp(r, "g")), t = t.replace(r, e.replace)
            }
            return t
        })), s.subParser("spanGamut", (function (e, t, i) {
            "use strict";
            return e = i.converter._dispatch("spanGamut.before", e, t, i), e = s.subParser("codeSpans")(e, t, i), e = s.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, i), e = s.subParser("encodeBackslashEscapes")(e, t, i), e = s.subParser("images")(e, t, i), e = s.subParser("anchors")(e, t, i), e = s.subParser("autoLinks")(e, t, i), e = s.subParser("simplifiedAutoLinks")(e, t, i), e = s.subParser("emoji")(e, t, i), e = s.subParser("underline")(e, t, i), e = s.subParser("italicsAndBold")(e, t, i), e = s.subParser("strikethrough")(e, t, i), e = s.subParser("ellipsis")(e, t, i), e = s.subParser("hashHTMLSpans")(e, t, i), e = s.subParser("encodeAmpsAndAngles")(e, t, i), t.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), e = i.converter._dispatch("spanGamut.after", e, t, i)
        })), s.subParser("strikethrough", (function (e, t, i) {
            "use strict";
            return t.strikethrough && (e = (e = i.converter._dispatch("strikethrough.before", e, t, i)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, (function (e, n) {
                return function (e) {
                    return t.simplifiedAutoLink && (e = s.subParser("simplifiedAutoLinks")(e, t, i)), "<del>" + e + "</del>"
                }(n)
            })), e = i.converter._dispatch("strikethrough.after", e, t, i)), e
        })), s.subParser("stripLinkDefinitions", (function (e, t, i) {
            "use strict";
            var n = function (e, n, r, o, a, l, c) {
                return n = n.toLowerCase(), r.match(/^data:.+?\/.+?;base64,/) ? i.gUrls[n] = r.replace(/\s/g, "") : i.gUrls[n] = s.subParser("encodeAmpsAndAngles")(r, t, i), l ? l + c : (c && (i.gTitles[n] = c.replace(/"|'/g, "&quot;")), t.parseImgDimensions && o && a && (i.gDimensions[n] = {
                    width: o,
                    height: a
                }), "")
            };
            return e = (e = (e = (e += "¨0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, n)).replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, n)).replace(/¨0/, "")
        })), s.subParser("tables", (function (e, t, i) {
            "use strict";
            if (!t.tables) return e;

            function n(e, n) {
                return "<td" + n + ">" + s.subParser("spanGamut")(e, t, i) + "</td>\n"
            }

            function r(e) {
                var r, o = e.split("\n");
                for (r = 0; r < o.length; ++r) /^ {0,3}\|/.test(o[r]) && (o[r] = o[r].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(o[r]) && (o[r] = o[r].replace(/\|[ \t]*$/, "")), o[r] = s.subParser("codeSpans")(o[r], t, i);
                var a, l, c, h, u = o[0].split("|").map((function (e) {
                    return e.trim()
                })),
                    d = o[1].split("|").map((function (e) {
                        return e.trim()
                    })),
                    g = [],
                    f = [],
                    p = [],
                    m = [];
                for (o.shift(), o.shift(), r = 0; r < o.length; ++r) "" !== o[r].trim() && g.push(o[r].split("|").map((function (e) {
                    return e.trim()
                })));
                if (u.length < d.length) return e;
                for (r = 0; r < d.length; ++r) p.push((a = d[r], /^:[ \t]*--*$/.test(a) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(a) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(a) ? ' style="text-align:center;"' : ""));
                for (r = 0; r < u.length; ++r) s.helper.isUndefined(p[r]) && (p[r] = ""), f.push((l = u[r], c = p[r], h = void 0, h = "", l = l.trim(), (t.tablesHeaderId || t.tableHeaderId) && (h = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'), "<th" + h + c + ">" + (l = s.subParser("spanGamut")(l, t, i)) + "</th>\n"));
                for (r = 0; r < g.length; ++r) {
                    for (var w = [], A = 0; A < f.length; ++A) s.helper.isUndefined(g[r][A]), w.push(n(g[r][A], p[A]));
                    m.push(w)
                }
                return function (e, t) {
                    for (var i = "<table>\n<thead>\n<tr>\n", n = e.length, r = 0; r < n; ++r) i += e[r];
                    for (i += "</tr>\n</thead>\n<tbody>\n", r = 0; r < t.length; ++r) {
                        i += "<tr>\n";
                        for (var s = 0; s < n; ++s) i += t[r][s];
                        i += "</tr>\n"
                    }
                    return i += "</tbody>\n</table>\n"
                }(f, m)
            }
            return e = (e = (e = (e = i.converter._dispatch("tables.before", e, t, i)).replace(/\\(\|)/g, s.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, r), e = i.converter._dispatch("tables.after", e, t, i)
        })), s.subParser("underline", (function (e, t, i) {
            "use strict";
            return t.underline ? (e = i.converter._dispatch("underline.before", e, t, i), e = (e = t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function (e, t) {
                return "<u>" + t + "</u>"
            }))).replace(/\b__(\S[\s\S]*?)__\b/g, (function (e, t) {
                return "<u>" + t + "</u>"
            })) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function (e, t) {
                return /\S$/.test(t) ? "<u>" + t + "</u>" : e
            }))).replace(/__(\S[\s\S]*?)__/g, (function (e, t) {
                return /\S$/.test(t) ? "<u>" + t + "</u>" : e
            }))).replace(/(_)/g, s.helper.escapeCharactersCallback), e = i.converter._dispatch("underline.after", e, t, i)) : e
        })), s.subParser("unescapeSpecialChars", (function (e, t, i) {
            "use strict";
            return e = (e = i.converter._dispatch("unescapeSpecialChars.before", e, t, i)).replace(/¨E(\d+)E/g, (function (e, t) {
                var i = parseInt(t);
                return String.fromCharCode(i)
            })), e = i.converter._dispatch("unescapeSpecialChars.after", e, t, i)
        })), s.subParser("makeMarkdown.blockquote", (function (e, t) {
            "use strict";
            var i = "";
            if (e.hasChildNodes())
                for (var n = e.childNodes, r = n.length, o = 0; o < r; ++o) {
                    var a = s.subParser("makeMarkdown.node")(n[o], t);
                    "" !== a && (i += a)
                }
            return i = "> " + (i = i.trim()).split("\n").join("\n> ")
        })), s.subParser("makeMarkdown.codeBlock", (function (e, t) {
            "use strict";
            var i = e.getAttribute("language"),
                n = e.getAttribute("precodenum");
            return "```" + i + "\n" + t.preList[n] + "\n```"
        })), s.subParser("makeMarkdown.codeSpan", (function (e) {
            "use strict";
            return "`" + e.innerHTML + "`"
        })), s.subParser("makeMarkdown.emphasis", (function (e, t) {
            "use strict";
            var i = "";
            if (e.hasChildNodes()) {
                i += "*";
                for (var n = e.childNodes, r = n.length, o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t);
                i += "*"
            }
            return i
        })), s.subParser("makeMarkdown.header", (function (e, t, i) {
            "use strict";
            var n = new Array(i + 1).join("#"),
                r = "";
            if (e.hasChildNodes()) {
                r = n + " ";
                for (var o = e.childNodes, a = o.length, l = 0; l < a; ++l) r += s.subParser("makeMarkdown.node")(o[l], t)
            }
            return r
        })), s.subParser("makeMarkdown.hr", (function () {
            "use strict";
            return "---"
        })), s.subParser("makeMarkdown.image", (function (e) {
            "use strict";
            var t = "";
            return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](", t += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"), t
        })), s.subParser("makeMarkdown.links", (function (e, t) {
            "use strict";
            var i = "";
            if (e.hasChildNodes() && e.hasAttribute("href")) {
                var n = e.childNodes,
                    r = n.length;
                i = "[";
                for (var o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t);
                i += "](", i += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (i += ' "' + e.getAttribute("title") + '"'), i += ")"
            }
            return i
        })), s.subParser("makeMarkdown.list", (function (e, t, i) {
            "use strict";
            var n = "";
            if (!e.hasChildNodes()) return "";
            for (var r = e.childNodes, o = r.length, a = e.getAttribute("start") || 1, l = 0; l < o; ++l)
                if (void 0 !== r[l].tagName && "li" === r[l].tagName.toLowerCase()) {
                    n += ("ol" === i ? a.toString() + ". " : "- ") + s.subParser("makeMarkdown.listItem")(r[l], t), ++a
                } return (n += "\n\x3c!-- --\x3e\n").trim()
        })), s.subParser("makeMarkdown.listItem", (function (e, t) {
            "use strict";
            for (var i = "", n = e.childNodes, r = n.length, o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t);
            return /\n$/.test(i) ? i = i.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : i += "\n", i
        })), s.subParser("makeMarkdown.node", (function (e, t, i) {
            "use strict";
            i = i || !1;
            var n = "";
            if (3 === e.nodeType) return s.subParser("makeMarkdown.txt")(e, t);
            if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
            if (1 !== e.nodeType) return "";
            switch (e.tagName.toLowerCase()) {
                case "h1":
                    i || (n = s.subParser("makeMarkdown.header")(e, t, 1) + "\n\n");
                    break;
                case "h2":
                    i || (n = s.subParser("makeMarkdown.header")(e, t, 2) + "\n\n");
                    break;
                case "h3":
                    i || (n = s.subParser("makeMarkdown.header")(e, t, 3) + "\n\n");
                    break;
                case "h4":
                    i || (n = s.subParser("makeMarkdown.header")(e, t, 4) + "\n\n");
                    break;
                case "h5":
                    i || (n = s.subParser("makeMarkdown.header")(e, t, 5) + "\n\n");
                    break;
                case "h6":
                    i || (n = s.subParser("makeMarkdown.header")(e, t, 6) + "\n\n");
                    break;
                case "p":
                    i || (n = s.subParser("makeMarkdown.paragraph")(e, t) + "\n\n");
                    break;
                case "blockquote":
                    i || (n = s.subParser("makeMarkdown.blockquote")(e, t) + "\n\n");
                    break;
                case "hr":
                    i || (n = s.subParser("makeMarkdown.hr")(e, t) + "\n\n");
                    break;
                case "ol":
                    i || (n = s.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n");
                    break;
                case "ul":
                    i || (n = s.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n");
                    break;
                case "precode":
                    i || (n = s.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n");
                    break;
                case "pre":
                    i || (n = s.subParser("makeMarkdown.pre")(e, t) + "\n\n");
                    break;
                case "table":
                    i || (n = s.subParser("makeMarkdown.table")(e, t) + "\n\n");
                    break;
                case "code":
                    n = s.subParser("makeMarkdown.codeSpan")(e, t);
                    break;
                case "em":
                case "i":
                    n = s.subParser("makeMarkdown.emphasis")(e, t);
                    break;
                case "strong":
                case "b":
                    n = s.subParser("makeMarkdown.strong")(e, t);
                    break;
                case "del":
                    n = s.subParser("makeMarkdown.strikethrough")(e, t);
                    break;
                case "a":
                    n = s.subParser("makeMarkdown.links")(e, t);
                    break;
                case "img":
                    n = s.subParser("makeMarkdown.image")(e, t);
                    break;
                default:
                    n = e.outerHTML + "\n\n"
            }
            return n
        })), s.subParser("makeMarkdown.paragraph", (function (e, t) {
            "use strict";
            var i = "";
            if (e.hasChildNodes())
                for (var n = e.childNodes, r = n.length, o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t);
            return i = i.trim()
        })), s.subParser("makeMarkdown.pre", (function (e, t) {
            "use strict";
            var i = e.getAttribute("prenum");
            return "<pre>" + t.preList[i] + "</pre>"
        })), s.subParser("makeMarkdown.strikethrough", (function (e, t) {
            "use strict";
            var i = "";
            if (e.hasChildNodes()) {
                i += "~~";
                for (var n = e.childNodes, r = n.length, o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t);
                i += "~~"
            }
            return i
        })), s.subParser("makeMarkdown.strong", (function (e, t) {
            "use strict";
            var i = "";
            if (e.hasChildNodes()) {
                i += "**";
                for (var n = e.childNodes, r = n.length, o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t);
                i += "**"
            }
            return i
        })), s.subParser("makeMarkdown.table", (function (e, t) {
            "use strict";
            var i, n, r = "",
                o = [
                    [],
                    []
                ],
                a = e.querySelectorAll("thead>tr>th"),
                l = e.querySelectorAll("tbody>tr");
            for (i = 0; i < a.length; ++i) {
                var c = s.subParser("makeMarkdown.tableCell")(a[i], t),
                    h = "---";
                if (a[i].hasAttribute("style")) switch (a[i].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                    case "text-align:left;":
                        h = ":---";
                        break;
                    case "text-align:right;":
                        h = "---:";
                        break;
                    case "text-align:center;":
                        h = ":---:"
                }
                o[0][i] = c.trim(), o[1][i] = h
            }
            for (i = 0; i < l.length; ++i) {
                var u = o.push([]) - 1,
                    d = l[i].getElementsByTagName("td");
                for (n = 0; n < a.length; ++n) {
                    var g = " ";
                    void 0 !== d[n] && (g = s.subParser("makeMarkdown.tableCell")(d[n], t)), o[u].push(g)
                }
            }
            var f = 3;
            for (i = 0; i < o.length; ++i)
                for (n = 0; n < o[i].length; ++n) {
                    var p = o[i][n].length;
                    p > f && (f = p)
                }
            for (i = 0; i < o.length; ++i) {
                for (n = 0; n < o[i].length; ++n) 1 === i ? ":" === o[i][n].slice(-1) ? o[i][n] = s.helper.padEnd(o[i][n].slice(-1), f - 1, "-") + ":" : o[i][n] = s.helper.padEnd(o[i][n], f, "-") : o[i][n] = s.helper.padEnd(o[i][n], f);
                r += "| " + o[i].join(" | ") + " |\n"
            }
            return r.trim()
        })), s.subParser("makeMarkdown.tableCell", (function (e, t) {
            "use strict";
            var i = "";
            if (!e.hasChildNodes()) return "";
            for (var n = e.childNodes, r = n.length, o = 0; o < r; ++o) i += s.subParser("makeMarkdown.node")(n[o], t, !0);
            return i.trim()
        })), s.subParser("makeMarkdown.txt", (function (e) {
            "use strict";
            var t = e.nodeValue;
            return t = (t = t.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "), t = (t = (t = (t = (t = (t = (t = (t = (t = s.helper.unescapeHTMLEntities(t)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
        }));
        void 0 === (n = function () {
            "use strict";
            return s
        }.call(t, i, t, e)) || (e.exports = n)
    }).call(this)
}, function (e, t) {
    e.exports = {
        dedent: e => {
            const t = e.split("\n");
            let i = 1 / 0;
            for (; void 0 !== t[0];) {
                const e = t[0];
                if (!/^\s*$/.test(e)) {
                    const t = e.match(/^([^\S\n]*).*/)[1].length;
                    i = Math.min(i, t)
                }
                t.shift()
            }
            return e.split("\n").map(e => e.slice(i)).reduce((e, t) => e + t + "\n", "")
        }
    }
}, function (e, t, i) {
    const {
        searchReferencesFromIdentifier: n,
        searchReferencesToIdentifier: r
    } = i(1), s = e => {
        const t = e.definition && e.definition.choice;
        return !!t && t.every(e => e.terminal)
    }, o = (e, t, i, r = {}) => {
        const a = {
            name: e.identifier,
            characterSet: s(e)
        };
        if (i.includes(a.name)) a.recursive = !0;
        else {
            const s = i.concat(e.identifier),
                l = r[e.identifier],
                c = void 0 !== l ? l : n(e.identifier, t).filter(e => t.find(t => t.identifier === e)).map(e => o(t.find(t => t.identifier === e), t, s, r));
            if (r[e.identifier] = c, c.length > 0) {
                a.children = c;
                const t = e.definition && e.definition.choice;
                t && t.every(e => e.terminal || e.nonTerminal) && c.every(e => e.characterSet) && (a.characterSet = !0)
            }
        }
        return a
    }, a = e => e.map(e => [e.name].concat(a(e.children || []))).reduce((e, t) => e.concat(t), []), l = (e, t = 0) => {
        const i = {};
        e.forEach(e => {
            const n = i[e.name] || {
                counted: 0
            };
            if (0 === t && (n.root = !0), e.recursive && (n.recursive = !0), e.characterSet && (n.characterSet = !0), n.counted++, i[e.name] = n, e.children) {
                const n = l(e.children, t + 1);
                Object.entries(n).forEach(([e, t]) => {
                    const n = i[e] || {
                        counted: 0
                    };
                    i[e] = {
                        ...n,
                        ...t,
                        counted: t.counted + n.counted
                    }
                })
            }
        });
        const n = Object.values(i),
            r = n.reduce((e, t) => e + t.counted, 0) / n.length;
        return Object.entries(i).forEach(([e, t]) => {
            i[e].common = t.counted > r
        }), i
    };
    e.exports = {
        createAlphabeticalToc: e => e.filter(e => e.identifier).map(e => e.identifier).reduce((e, t) => e.concat(t), []).filter((e, t, i) => i.indexOf(e) === t).sort().map(e => ({
            name: e
        })),
        createDefinitionMetadata: l,
        createStructuralToc: e => {
            const t = e.filter(e => e.identifier),
                i = t.map(e => e.identifier),
                n = {},
                s = t.filter(e => 0 === r(e.identifier, t).length).map(e => o(e, t, [], n)),
                l = t.map(e => o(e, t, [], n)).filter(e => a(e.children || []).includes(e.name)).filter(e => !s.map(e => a(e.children || [])).some(t => t.includes(e.name))).filter((e, t, i) => {
                    const n = a(e.children || []).filter(t => t !== e.name).map(e => i.map(e => e.name).indexOf(e)).filter(e => -1 !== e);
                    return t < Math.min(...n)
                });
            return s.concat(l).sort((e, t) => i.indexOf(e.name) - i.indexOf(t.name))
        }
    }
}, function (e, t) {
    const i = (e, t) => t ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : e,
        n = e => "\n" + "  ".repeat(e),
        r = (e, t, i, n) => n ? `<${e} ${Object.entries(t).map(([e, t]) => `${e}="${t}"`).join(" ")}>${i}</${e}>` : i,
        s = (e, t, i) => r("span", {
            class: e
        }, t, i),
        o = {
            markup: !1,
            format: !1,
            maxLineLength: 40,
            lineMargin: 30,
            indent: 0
        },
        a = (e, t) => {
            if (e.choice && c(e, {
                format: !1,
                markup: !1
            }).length > t.maxLineLength && e.choice.length <= 6 && t.format) return {
                ...t,
                offsetLength: 0,
                multiline: !0,
                indent: 1,
                rowCount: 1
            };
            if (e.choice && e.choice.length > 6 && t.format) {
                const i = e.choice.map(e => c(e, {
                    format: !1,
                    markup: !1
                })).reduce((e, t) => e.length > t.length ? e : t).length,
                    n = Math.floor((t.maxLineLength - 2 * t.indent) / (i + 3)) + 1;
                return {
                    ...t,
                    multiline: !0,
                    offsetLength: 0,
                    rowCount: n,
                    padding: !0,
                    indent: t.indent + 1
                }
            }
            return t
        },
        l = (e, t) => {
            const i = c(e, {
                markup: !1,
                format: t
            });
            return i.includes("\n") ? -1 : i.length
        },
        c = (e, t) => {
            const h = {
                ...o,
                ...t
            };
            if (Array.isArray(e)) return e.map(e => c(e, h)).join("\n\n");
            if (e.identifier) {
                const t = a(e.definition, {
                    ...h,
                    offsetLength: e.identifier.length + 3
                });
                return `${s("ebnf-identifier", e.identifier, h.markup)}${t.multiline ? n(t.indent) : " "}= ${c(e.definition, t)}${t.multiline ? n(t.indent) : " "}${s("ebnf-end", ";", h.markup)}`
            }
            if (e.terminal) return e.terminal.indexOf('"') > -1 ? s("ebnf-terminal", `'${i(e.terminal, h.markup)}'`, h.markup) : s("ebnf-terminal", `"${i(e.terminal, h.markup)}"`, h.markup);
            if (e.nonTerminal) return r("a", {
                class: "ebnf-non-terminal",
                href: "#" + (u = e.nonTerminal, u.replace(/\s+/g, "-"))
            }, e.nonTerminal, h.markup);
            var u;
            if (e.choice) return h.multiline && h.format ? e.choice.map((e, t, i) => {
                if (!h.padding || !h.rowCount) return c(e, {
                    ...h,
                    multiline: !1
                });
                const n = t % h.rowCount,
                    r = i.filter((e, t) => t % h.rowCount === n).map(e => c(e, {
                        format: !1,
                        markup: !1
                    }).length).reduce((e, t) => e > t ? e : t),
                    s = c(e, {
                        markup: !1,
                        format: !1
                    }).length,
                    o = " ".repeat(Math.max(r - s, 0));
                return c(e, {
                    ...h,
                    multiline: !1
                }) + o
            }).map((e, t) => {
                if (0 === t) return e;
                return `${t % h.rowCount == 0 ? n(h.indent) : " "}| ${e}`
            }).join("").split("\n").map(e => e.trimEnd()).join("\n") : e.choice.map(e => c(e, h)).join(" | ");
            if (e.sequence) {
                const t = (e, t, i) => e.slice(0, i).reduce((e, t) => -1 === t.length ? 0 : e + t.length + 3, t);
                return e.sequence.map(e => ({
                    element: e,
                    length: l(e, h.format)
                })).map(({
                    element: e
                }, i, r) => {
                    if (0 === i) return c(e, h);
                    const s = h.indent + 1,
                        o = t(r, h.offsetLength || 0, i),
                        a = t(r, h.offsetLength || 0, i + 1),
                        l = t(r, h.offsetLength || 0),
                        u = h.format && o > h.maxLineLength && a > h.maxLineLength + h.lineMargin / 2 && l - o > 10;
                    u && (r[i - 1].length = -1);
                    const d = u ? 0 : o,
                        g = c(e, {
                            ...h,
                            offsetLength: d
                        });
                    if (h.format && -1 !== g.indexOf("\n")) {
                        const e = g.split("\n").slice(-1)[0].length;
                        r[i].length = e - o
                    }
                    return ` ,${u ? n(s) : " "}${g}`
                }).join("").split("\n").map(e => e.trimEnd()).join("\n")
            }
            if (e.specialSequence) return s("ebnf-special-sequence", `? ${e.specialSequence} ?`, h.markup);
            if (e.repetition && void 0 !== e.amount) return `${s("ebnf-multiplier", e.amount + " *", h.markup)} ${c(e.repetition, h)}`;
            if (e.repetition) {
                const t = a(e.repetition, h);
                return `${t.multiline ? n(t.indent) : ""}{ ${c(e.repetition, t)}${t.multiline ? n(t.indent) : " "}}`
            }
            if (e.comment && !e.group) return "" + s("ebnf-comment", `(*${i(e.comment, h.markup)}*)`, h.markup);
            if (e.comment) return e.before ? `${s("ebnf-comment", `(*${i(e.comment, h.markup)}*)`, h.markup)} ${c(e.group, h)}` : `${c(e.group, h)} ${s("ebnf-comment", `(*${i(e.comment, h.markup)}*)`, h.markup)}`;
            if (e.group) {
                const t = a(e.group, h);
                return `${t.multiline ? n(t.indent) : ""}( ${c(e.group, t)}${t.multiline ? n(t.indent) : " "})`
            }
            if (e.optional) {
                const t = a(e.optional, h);
                return `${t.multiline ? n(t.indent) : ""}[ ${c(e.optional, t)}${t.multiline ? n(t.indent) : " "}]`
            }
            return e.exceptNonTerminal ? `${c({ nonTerminal: e.include }, h)} - ${c({ nonTerminal: e.exceptNonTerminal }, h)}` : e.exceptTerminal ? `${c({ nonTerminal: e.include }, h)} - ${c({ terminal: e.exceptTerminal }, h)}` : "unknown construct"
        };
    e.exports = {
        productionToEBNF: c
    }
}, function (e, t, i) {
    const {
        travelers: n,
        identifyNode: r,
        NodeTypes: s
    } = i(0), {
        traverse: o
    } = i(4), {
        optimizeAST: a
    } = i(3), {
        Choice: l,
        Comment: c,
        ComplexDiagram: h,
        Diagram: u,
        HorizontalChoice: d,
        NonTerminal: g,
        OneOrMore: f,
        Sequence: p,
        Skip: m,
        Stack: w,
        Terminal: A
    } = i(5), {
        CommentWithLine: v,
        Group: b
    } = i(30), C = e => e.replace(/\s+/g, "-"), F = 100, E = o(e => {
        const t = r(e);
        return void 0 !== t ? t : e.skip ? F : void 0
    })({
        ...n,
        [s.Repetition]: (e, t) => ({
            ...e,
            repetition: t(e.repetition),
            ...e.repeater && {
                repeater: t(e.repeater)
            }
        })
    }), y = {
        [s.Production]: e => e.complex ? h(e.definition) : u(e.definition),
        [s.ExceptNonTerminal]: e => g(`${e.include} - ${e.exceptNonTerminal}`, {}),
        [s.ExceptTerminal]: e => g(`${e.include} - ${e.exceptTerminal}`, {}),
        [s.Terminal]: e => A(e.terminal),
        [s.NonTerminal]: e => g(e.nonTerminal, {
            href: "#" + C(e.nonTerminal)
        }),
        [s.Special]: e => {
            const t = g(" " + e.specialSequence + " ", {});
            return t.attrs.class = "special-sequence", t
        },
        [s.Choice]: e => l(0, ...e.choice),
        [s.Sequence]: e => p(...e.sequence),
        [s.Comment]: e => v(e.comment, {}),
        [s.Group]: (e, t) => {
            if (e.comment) {
                return t.group && t.group.optional ? l(0, v(e.comment, {}), e.group.items[1]) : e.group ? p(e.group, v(e.comment, {})) : v(e.comment, {})
            }
            return e.group
        },
        [s.Optional]: e => l(1, m(), e.optional),
        [F]: () => m(),
        [s.Repetition]: e => !0 === e.skippable ? l(1, m(), f(e.repetition)) : !1 === e.skippable ? e.repeater ? f(e.repetition, e.repeater) : f(e.repetition) : void 0 !== e.amount ? f(e.repetition, c(e.amount + " ×", {})) : void 0
    }, _ = {
        [s.Sequence]: e => {
            if (e.width > 450) {
                const t = e.items.reduce((e, t, i, n) => {
                    const r = e.slice(-1)[0];
                    r.push(t);
                    const s = r.reduce((e, t) => e + t.width, 0),
                        o = n.slice(i + 1).reduce((e, t) => e + t.width, 0);
                    return s + o > 400 && s >= 250 && o > 100 && e.push([]), e
                }, [
                    []
                ]).filter(e => e.length > 0);
                return w(...t.map(e => p(...e)))
            }
            return e
        }
    }, k = e => e;
    e.exports = {
        createDiagram: (e, t, i, n) => {
            const r = [],
                o = (h = E([y, n.optimizeDiagrams && (u = 10, {
                    [s.Choice]: e => {
                        const t = e => new l(0, e),
                            i = e.items,
                            n = [];
                        for (; i.length > u;) {
                            const e = i.splice(0, u);
                            n.push(t(e))
                        }
                        return n.push(t(i)), n.length > 1 ? d(...n) : n[0]
                    }
                }), n.diagramWrap && n.optimizeDiagrams && _, n.overview && {
                    [s.NonTerminal]: e => {
                        const n = !r.includes(e.text) && t[e.text] && !t[e.text].characterSet,
                            s = i.find(t => t.identifier === e.text);
                        return n && s ? (r.push(e.text), b(o(s.definition), c(e.text, {
                            href: "#" + C(e.text)
                        }))) : e
                    }
                }].filter(Boolean)), e => t => h(e(t)))(!1 === n.optimizeDiagrams ? k : a);
            var h, u;
            return o({
                ...e,
                complex: n.complex
            }).toString().replace(/height="(\d+)"/, 'style="max-height: $1px;"')
        }
    }
}, function (e, t, i) {
    const {
        FakeSVG: n,
        Path: r,
        Diagram: s,
        Comment: o,
        Terminal: a
    } = i(5), l = (e, t) => {
        e.prototype = Object.create(t.prototype), e.prototype.$super = t.prototype
    }, c = (e, t) => {
        const i = e - t;
        switch (s.INTERNAL_ALIGNMENT) {
            case "left":
                return [0, i];
            case "right":
                return [i, 0];
            case "center":
            default:
                return [i / 2, i / 2]
        }
    }, h = function e(t, {
        href: i,
        title: r
    } = {}) {
        if (!(this instanceof e)) return new e(t, {
            href: i,
            title: r
        });
        n.call(this, "g"), this.text = "" + t, this.href = i, this.title = r, this.width = this.text.length * s.COMMENT_CHAR_WIDTH + 10, this.height = 0, this.up = 13, this.down = 11, s.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "comment")
    };
    l(h, n), h.prototype.needsSpace = !0, h.prototype.format = function (e, t, i) {
        var s = c(i, this.width);
        r(e, t).h(s[0]).addTo(this), r(e, t).right(i).addTo(this), r(e + s[0] + this.width, t + this.height).h(s[1]).addTo(this), e += s[0];
        var o = n("text", {
            x: e + this.width / 2,
            y: t - 5,
            class: "comment"
        }, this.text);
        return this.href ? n("a", {
            "xlink:href": this.href
        }, [o]).addTo(this) : o.addTo(this), this.title && new n("title", {}, this.title).addTo(this), this
    };
    const u = function e(t, i) {
        if (!(this instanceof e)) return new e(t, i);
        var r;
        n.call(this, "g"), this.item = (r = t) instanceof n ? r : new a("" + r), this.label = i instanceof n ? i : i ? new o(i) : void 0, this.width = Math.max(this.item.width + (this.item.needsSpace ? 20 : 0), this.label ? this.label.width : 0, 2 * s.ARC_RADIUS), this.height = this.item.height, this.boxUp = this.up = Math.max(this.item.up + s.VERTICAL_SEPARATION, s.ARC_RADIUS), this.label && (this.up += this.label.up + this.label.height + this.label.down), this.down = Math.max(this.item.down + s.VERTICAL_SEPARATION, s.ARC_RADIUS), this.needsSpace = !0, s.DEBUG && (this.attrs["data-updown"] = this.up + " " + this.height + " " + this.down, this.attrs["data-type"] = "group")
    };
    l(u, n), u.prototype.needsSpace = !0, u.prototype.format = function (e, t, i) {
        var o = c(i, this.width);
        return new r(e, t).h(o[0]).addTo(this), new r(e + o[0] + this.width, t + this.height).h(o[1]).addTo(this), e += o[0], new n("rect", {
            x: e,
            y: t - this.boxUp,
            width: this.width,
            height: this.boxUp + this.height + this.down,
            rx: s.ARC_RADIUS,
            ry: s.ARC_RADIUS,
            class: "group-box"
        }).addTo(this), this.item.format(e, t, this.width).addTo(this), this.label && this.label.format(e, t - (this.boxUp + this.label.down + this.label.height), this.label.width).addTo(this), this
    }, e.exports = {
        CommentWithLine: h,
        Group: u
    }
}, function (e) {
    e.exports = JSON.parse('{"name":"ebnf2railroad","version":"1.12.0","description":"EBNF to Railroad diagram","keywords":["ebnf","context-free grammar","railroad","railroad diagram","syntax diagram","diagram","documentation","generator","cli"],"main":"src/main.js","repository":"git@github.com:matthijsgroen/ebnf2railroad.git","author":"Matthijs Groen <matthijs.groen@gmail.com>","license":"MIT","bin":{"ebnf2railroad":"./bin/ebnf2railroad.js"},"scripts":{"build-parser":"jison src/ebnf.jison -o src/ebnf-parser.js","test":"mocha --recursive","lint":"eslint src/ test/","update-examples":"bin/ebnf2railroad.js examples/json.ebnf --title JSON; bin/ebnf2railroad.js examples/ebnf.ebnf --title EBNF; bin/ebnf2railroad.js examples/optimizations.ebnf","publish":".travis/publish-site.sh"},"private":false,"files":["src/*","bin/*"],"dependencies":{"commander":"^2.19.0","railroad-diagrams":"https://github.com/tabatkins/railroad-diagrams#c7730b8fab6cb0fd55fc3c3b0a81ce355fdbf963","showdown":"^1.0.0"},"devDependencies":{"chai":"^4.2.0","eslint":"^7.0.0","eslint-plugin-mocha":"^8.0.0","eslint-plugin-prettier":"^3.0.0","jison":"^0.4.18","mocha":"^8.0.0","prettier":"^1.14.3"},"resolutions":{"minimist":"^1.2.3"}}')
}, function (e, t) {
    ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"], (function (e, t, i) {
        "use strict";
        var n = e("./lib/oop"),
            r = e("./lib/event_emitter").EventEmitter,
            s = e("./lib/lang"),
            o = e("./range").Range,
            a = e("./anchor").Anchor,
            l = e("./keyboard/hash_handler").HashHandler,
            c = e("./tokenizer").Tokenizer,
            h = o.comparePoints,
            u = function () {
                this.snippetMap = {}, this.snippetNameMap = {}
            };
        (function () {
            n.implement(this, r), this.getTokenizer = function () {
                function e(e, t, i) {
                    return e = e.substr(1), /^\d+$/.test(e) && !i.inFormatString ? [{
                        tabstopId: parseInt(e, 10)
                    }] : [{
                        text: e
                    }]
                }

                function t(e) {
                    return "(?:[^\\\\" + e + "]|\\\\.)"
                }
                return u.$tokenizer = new c({
                    start: [{
                        regex: /:/,
                        onMatch: function (e, t, i) {
                            return i.length && i[0].expectIf ? (i[0].expectIf = !1, i[0].elseBranch = i[0], [i[0]]) : ":"
                        }
                    }, {
                        regex: /\\./,
                        onMatch: function (e, t, i) {
                            var n = e[1];
                            return "}" == n && i.length || -1 != "`$\\".indexOf(n) ? e = n : i.inFormatString && ("n" == n || "t" == n ? e = "\n" : -1 != "ulULE".indexOf(n) && (e = {
                                changeCase: n,
                                local: n > "a"
                            })), [e]
                        }
                    }, {
                        regex: /}/,
                        onMatch: function (e, t, i) {
                            return [i.length ? i.shift() : e]
                        }
                    }, {
                        regex: /\$(?:\d+|\w+)/,
                        onMatch: e
                    }, {
                        regex: /\$\{[\dA-Z_a-z]+/,
                        onMatch: function (t, i, n) {
                            var r = e(t.substr(1), 0, n);
                            return n.unshift(r[0]), r
                        },
                        next: "snippetVar"
                    }, {
                        regex: /\n/,
                        token: "newline",
                        merge: !1
                    }],
                    snippetVar: [{
                        regex: "\\|" + t("\\|") + "*\\|",
                        onMatch: function (e, t, i) {
                            i[0].choices = e.slice(1, -1).split(",")
                        },
                        next: "start"
                    }, {
                        regex: "/(" + t("/") + "+)/(?:(" + t("/") + "*)/)(\\w*):?",
                        onMatch: function (e, t, i) {
                            var n = i[0];
                            return n.fmtString = e, e = this.splitRegex.exec(e), n.guard = e[1], n.fmt = e[2], n.flag = e[3], ""
                        },
                        next: "start"
                    }, {
                        regex: "`" + t("`") + "*`",
                        onMatch: function (e, t, i) {
                            return i[0].code = e.splice(1, -1), ""
                        },
                        next: "start"
                    }, {
                        regex: "\\?",
                        onMatch: function (e, t, i) {
                            i[0] && (i[0].expectIf = !0)
                        },
                        next: "start"
                    }, {
                        regex: "([^:}\\\\]|\\\\.)*:?",
                        token: "",
                        next: "start"
                    }],
                    formatString: [{
                        regex: "/(" + t("/") + "+)/",
                        token: "regex"
                    }, {
                        regex: "",
                        onMatch: function (e, t, i) {
                            i.inFormatString = !0
                        },
                        next: "start"
                    }]
                }), u.prototype.getTokenizer = function () {
                    return u.$tokenizer
                }, u.$tokenizer
            }, this.tokenizeTmSnippet = function (e, t) {
                return this.getTokenizer().getLineTokens(e, t).tokens.map((function (e) {
                    return e.value || e
                }))
            }, this.$getDefaultValue = function (e, t) {
                if (/^[A-Z]\d+$/.test(t)) {
                    var i = t.substr(1);
                    return (this.variables[t[0] + "__"] || {})[i]
                }
                if (/^\d+$/.test(t)) return (this.variables.__ || {})[t];
                if (t = t.replace(/^TM_/, ""), e) {
                    var n = e.session;
                    switch (t) {
                        case "CURRENT_WORD":
                            var r = n.getWordRange();
                        case "SELECTION":
                        case "SELECTED_TEXT":
                            return n.getTextRange(r);
                        case "CURRENT_LINE":
                            return n.getLine(e.getCursorPosition().row);
                        case "PREV_LINE":
                            return n.getLine(e.getCursorPosition().row - 1);
                        case "LINE_INDEX":
                            return e.getCursorPosition().column;
                        case "LINE_NUMBER":
                            return e.getCursorPosition().row + 1;
                        case "SOFT_TABS":
                            return n.getUseSoftTabs() ? "YES" : "NO";
                        case "TAB_SIZE":
                            return n.getTabSize();
                        case "FILENAME":
                        case "FILEPATH":
                            return "";
                        case "FULLNAME":
                            return "Ace"
                    }
                }
            }, this.variables = {}, this.getVariableValue = function (e, t) {
                return this.variables.hasOwnProperty(t) ? this.variables[t](e, t) || "" : this.$getDefaultValue(e, t) || ""
            }, this.tmStrFormat = function (e, t, i) {
                var n = t.flag || "",
                    r = t.guard;
                r = new RegExp(r, n.replace(/[^gi]/, ""));
                var s = this.tokenizeTmSnippet(t.fmt, "formatString"),
                    o = this,
                    a = e.replace(r, (function () {
                        o.variables.__ = arguments;
                        for (var e = o.resolveVariables(s, i), t = "E", n = 0; n < e.length; n++) {
                            var r = e[n];
                            if ("object" == typeof r)
                                if (e[n] = "", r.changeCase && r.local) {
                                    var a = e[n + 1];
                                    a && "string" == typeof a && ("u" == r.changeCase ? e[n] = a[0].toUpperCase() : e[n] = a[0].toLowerCase(), e[n + 1] = a.substr(1))
                                } else r.changeCase && (t = r.changeCase);
                            else "U" == t ? e[n] = r.toUpperCase() : "L" == t && (e[n] = r.toLowerCase())
                        }
                        return e.join("")
                    }));
                return this.variables.__ = null, a
            }, this.resolveVariables = function (e, t) {
                for (var i = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    if ("string" == typeof r) i.push(r);
                    else {
                        if ("object" != typeof r) continue;
                        if (r.skip) o(r);
                        else {
                            if (r.processed < n) continue;
                            if (r.text) {
                                var s = this.getVariableValue(t, r.text);
                                s && r.fmtString && (s = this.tmStrFormat(s, r)), r.processed = n, null == r.expectIf ? s && (i.push(s), o(r)) : s ? r.skip = r.elseBranch : o(r)
                            } else (null != r.tabstopId || null != r.changeCase) && i.push(r)
                        }
                    }
                }

                function o(t) {
                    var i = e.indexOf(t, n + 1); - 1 != i && (n = i)
                }
                return i
            }, this.insertSnippetForSelection = function (e, t) {
                var i = e.getCursorPosition(),
                    n = e.session.getLine(i.row),
                    r = e.session.getTabString(),
                    s = n.match(/^\s*/)[0];
                i.column < s.length && (s = s.slice(0, i.column)), t = t.replace(/\r/g, "");
                var o = this.tokenizeTmSnippet(t);
                o = (o = this.resolveVariables(o, e)).map((function (e) {
                    return "\n" == e ? e + s : "string" == typeof e ? e.replace(/\t/g, r) : e
                }));
                var a = [];
                o.forEach((function (e, t) {
                    if ("object" == typeof e) {
                        var i = e.tabstopId,
                            n = a[i];
                        if (n || ((n = a[i] = []).index = i, n.value = ""), -1 === n.indexOf(e)) {
                            n.push(e);
                            var r = o.indexOf(e, t + 1);
                            if (-1 !== r) {
                                var s = o.slice(t + 1, r);
                                s.some((function (e) {
                                    return "object" == typeof e
                                })) && !n.value ? n.value = s : !s.length || n.value && "string" == typeof n.value || (n.value = s.join(""))
                            }
                        }
                    }
                })), a.forEach((function (e) {
                    e.length = 0
                }));
                var l = {};

                function c(e) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var n = e[i];
                        if ("object" == typeof n) {
                            if (l[n.tabstopId]) continue;
                            n = t[e.lastIndexOf(n, i - 1)] || {
                                tabstopId: n.tabstopId
                            }
                        }
                        t[i] = n
                    }
                    return t
                }
                for (var h = 0; h < o.length; h++) {
                    var u = o[h];
                    if ("object" == typeof u) {
                        var g = u.tabstopId,
                            f = o.indexOf(u, h + 1);
                        if (l[g]) l[g] === u && (l[g] = null);
                        else {
                            var p = a[g],
                                m = "string" == typeof p.value ? [p.value] : c(p.value);
                            m.unshift(h + 1, Math.max(0, f - h)), m.push(u), l[g] = u, o.splice.apply(o, m), -1 === p.indexOf(u) && p.push(u)
                        }
                    }
                }
                var w = 0,
                    A = 0,
                    v = "";
                o.forEach((function (e) {
                    if ("string" == typeof e) {
                        var t = e.split("\n");
                        t.length > 1 ? (A = t[t.length - 1].length, w += t.length - 1) : A += e.length, v += e
                    } else e.start ? e.end = {
                        row: w,
                        column: A
                    } : e.start = {
                        row: w,
                        column: A
                    }
                }));
                var b = e.getSelectionRange(),
                    C = e.session.replace(b, v),
                    F = new d(e),
                    E = e.inVirtualSelectionMode && e.selection.index;
                F.addTabstops(a, b.start, C, E)
            }, this.insertSnippet = function (e, t) {
                var i = this;
                if (e.inVirtualSelectionMode) return i.insertSnippetForSelection(e, t);
                e.forEachSelection((function () {
                    i.insertSnippetForSelection(e, t)
                }), null, {
                    keepOrder: !0
                }), e.tabstopManager && e.tabstopManager.tabNext()
            }, this.$getScope = function (e) {
                var t = e.session.$mode.$id || "";
                if ("html" === (t = t.split("/").pop()) || "php" === t) {
                    "php" !== t || e.session.$mode.inlinePhp || (t = "html");
                    var i = e.getCursorPosition(),
                        n = e.session.getState(i.row);
                    "object" == typeof n && (n = n[0]), n.substring && ("js-" == n.substring(0, 3) ? t = "javascript" : "css-" == n.substring(0, 4) ? t = "css" : "php-" == n.substring(0, 4) && (t = "php"))
                }
                return t
            }, this.getActiveScopes = function (e) {
                var t = this.$getScope(e),
                    i = [t],
                    n = this.snippetMap;
                return n[t] && n[t].includeScopes && i.push.apply(i, n[t].includeScopes), i.push("_"), i
            }, this.expandWithTab = function (e, t) {
                var i = this,
                    n = e.forEachSelection((function () {
                        return i.expandSnippetForSelection(e, t)
                    }), null, {
                        keepOrder: !0
                    });
                return n && e.tabstopManager && e.tabstopManager.tabNext(), n
            }, this.expandSnippetForSelection = function (e, t) {
                var i, n = e.getCursorPosition(),
                    r = e.session.getLine(n.row),
                    s = r.substring(0, n.column),
                    o = r.substr(n.column),
                    a = this.snippetMap;
                return this.getActiveScopes(e).some((function (e) {
                    var t = a[e];
                    return t && (i = this.findMatchingSnippet(t, s, o)), !!i
                }), this), !!i && (t && t.dryRun || (e.session.doc.removeInLine(n.row, n.column - i.replaceBefore.length, n.column + i.replaceAfter.length), this.variables.M__ = i.matchBefore, this.variables.T__ = i.matchAfter, this.insertSnippetForSelection(e, i.content), this.variables.M__ = this.variables.T__ = null), !0)
            }, this.findMatchingSnippet = function (e, t, i) {
                for (var n = e.length; n--;) {
                    var r = e[n];
                    if ((!r.startRe || r.startRe.test(t)) && ((!r.endRe || r.endRe.test(i)) && (r.startRe || r.endRe))) return r.matchBefore = r.startRe ? r.startRe.exec(t) : [""], r.matchAfter = r.endRe ? r.endRe.exec(i) : [""], r.replaceBefore = r.triggerRe ? r.triggerRe.exec(t)[0] : "", r.replaceAfter = r.endTriggerRe ? r.endTriggerRe.exec(i)[0] : "", r
                }
            }, this.snippetMap = {}, this.snippetNameMap = {}, this.register = function (e, t) {
                var i = this.snippetMap,
                    n = this.snippetNameMap,
                    r = this;

                function o(e) {
                    return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" + e + ")"), e || ""
                }

                function a(e, t, i) {
                    return e = o(e), t = o(t), i ? (e = t + e) && "$" != e[e.length - 1] && (e += "$") : (e += t) && "^" != e[0] && (e = "^" + e), new RegExp(e)
                }

                function l(e) {
                    e.scope || (e.scope = t || "_"), t = e.scope, i[t] || (i[t] = [], n[t] = {});
                    var o = n[t];
                    if (e.name) {
                        var l = o[e.name];
                        l && r.unregister(l), o[e.name] = e
                    }
                    i[t].push(e), e.tabTrigger && !e.trigger && (!e.guard && /^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e.trigger = s.escapeRegExp(e.tabTrigger)), (e.trigger || e.guard || e.endTrigger || e.endGuard) && (e.startRe = a(e.trigger, e.guard, !0), e.triggerRe = new RegExp(e.trigger, "", !0), e.endRe = a(e.endTrigger, e.endGuard, !0), e.endTriggerRe = new RegExp(e.endTrigger, "", !0))
                }
                e || (e = []), e && e.content ? l(e) : Array.isArray(e) && e.forEach(l), this._signal("registerSnippets", {
                    scope: t
                })
            }, this.unregister = function (e, t) {
                var i = this.snippetMap,
                    n = this.snippetNameMap;

                function r(e) {
                    var r = n[e.scope || t];
                    if (r && r[e.name]) {
                        delete r[e.name];
                        var s = i[e.scope || t],
                            o = s && s.indexOf(e);
                        o >= 0 && s.splice(o, 1)
                    }
                }
                e.content ? r(e) : Array.isArray(e) && e.forEach(r)
            }, this.parseSnippetFile = function (e) {
                e = e.replace(/\r/g, "");
                for (var t, i = [], n = {}, r = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm; t = r.exec(e);) {
                    if (t[1]) try {
                        n = JSON.parse(t[1]), i.push(n)
                    } catch (e) { }
                    if (t[4]) n.content = t[4].replace(/^\t/gm, ""), i.push(n), n = {};
                    else {
                        var s = t[2],
                            o = t[3];
                        if ("regex" == s) {
                            var a = /\/((?:[^\/\\]|\\.)*)|$/g;
                            n.guard = a.exec(o)[1], n.trigger = a.exec(o)[1], n.endTrigger = a.exec(o)[1], n.endGuard = a.exec(o)[1]
                        } else "snippet" == s ? (n.tabTrigger = o.match(/^\S*/)[0], n.name || (n.name = o)) : n[s] = o
                    }
                }
                return i
            }, this.getSnippetByName = function (e, t) {
                var i, n = this.snippetNameMap;
                return this.getActiveScopes(t).some((function (t) {
                    var r = n[t];
                    return r && (i = r[e]), !!i
                }), this), i
            }
        }).call(u.prototype);
        var d = function (e) {
            if (e.tabstopManager) return e.tabstopManager;
            e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = s.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this.attach(e)
        };
        (function () {
            this.attach = function (e) {
                this.index = 0, this.ranges = [], this.tabstops = [], this.$openTabstops = null, this.selectedTabstop = null, this.editor = e, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
            }, this.detach = function () {
                this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges = null, this.tabstops = null, this.selectedTabstop = null, this.editor.removeListener("change", this.$onChange), this.editor.removeListener("changeSelection", this.$onChangeSelection), this.editor.removeListener("changeSession", this.$onChangeSession), this.editor.commands.removeListener("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.editor = null
            }, this.onChange = function (e) {
                var t = "r" == e.action[0],
                    i = e.start,
                    n = e.end,
                    r = i.row,
                    s = n.row - r,
                    o = n.column - i.column;
                if (t && (s = -s, o = -o), !this.$inChange && t) {
                    var a = this.selectedTabstop;
                    if (a && !a.some((function (e) {
                        return h(e.start, i) <= 0 && h(e.end, n) >= 0
                    }))) return this.detach()
                }
                for (var l = this.ranges, c = 0; c < l.length; c++) {
                    var u = l[c];
                    u.end.row < i.row || (t && h(i, u.start) < 0 && h(n, u.end) > 0 ? (this.removeRange(u), c--) : (u.start.row == r && u.start.column > i.column && (u.start.column += o), u.end.row == r && u.end.column >= i.column && (u.end.column += o), u.start.row >= r && (u.start.row += s), u.end.row >= r && (u.end.row += s), h(u.start, u.end) > 0 && this.removeRange(u)))
                }
                l.length || this.detach()
            }, this.updateLinkedFields = function () {
                var e = this.selectedTabstop;
                if (e && e.hasLinkedRanges) {
                    this.$inChange = !0;
                    for (var i = this.editor.session, n = i.getTextRange(e.firstNonLinked), r = e.length; r--;) {
                        var s = e[r];
                        if (s.linked) {
                            var o = t.snippetManager.tmStrFormat(n, s.original);
                            i.replace(s, o)
                        }
                    }
                    this.$inChange = !1
                }
            }, this.onAfterExec = function (e) {
                e.command && !e.command.readOnly && this.updateLinkedFields()
            }, this.onChangeSelection = function () {
                if (this.editor) {
                    for (var e = this.editor.selection.lead, t = this.editor.selection.anchor, i = this.editor.selection.isEmpty(), n = this.ranges.length; n--;)
                        if (!this.ranges[n].linked) {
                            var r = this.ranges[n].contains(e.row, e.column),
                                s = i || this.ranges[n].contains(t.row, t.column);
                            if (r && s) return
                        } this.detach()
                }
            }, this.onChangeSession = function () {
                this.detach()
            }, this.tabNext = function (e) {
                var t = this.tabstops.length,
                    i = this.index + (e || 1);
                (i = Math.min(Math.max(i, 1), t)) == t && (i = 0), this.selectTabstop(i), 0 === i && this.detach()
            }, this.selectTabstop = function (e) {
                this.$openTabstops = null;
                var t = this.tabstops[this.index];
                if (t && this.addTabstopMarkers(t), this.index = e, (t = this.tabstops[this.index]) && t.length) {
                    if (this.selectedTabstop = t, this.editor.inVirtualSelectionMode) this.editor.selection.setRange(t.firstNonLinked);
                    else {
                        var i = this.editor.multiSelect;
                        i.toSingleRange(t.firstNonLinked.clone());
                        for (var n = t.length; n--;) t.hasLinkedRanges && t[n].linked || i.addRange(t[n].clone(), !0);
                        i.ranges[0] && i.addRange(i.ranges[0].clone())
                    }
                    this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
                }
            }, this.addTabstops = function (e, t, i) {
                if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
                    var n = o.fromPoints(i, i);
                    p(n.start, t), p(n.end, t), e[0] = [n], e[0].index = 0
                }
                var r = [this.index + 1, 0],
                    s = this.ranges;
                e.forEach((function (e, i) {
                    for (var n = this.$openTabstops[i] || e, a = e.length; a--;) {
                        var l = e[a],
                            c = o.fromPoints(l.start, l.end || l.start);
                        f(c.start, t), f(c.end, t), c.original = l, c.tabstop = n, s.push(c), n != e ? n.unshift(c) : n[a] = c, l.fmtString ? (c.linked = !0, n.hasLinkedRanges = !0) : n.firstNonLinked || (n.firstNonLinked = c)
                    }
                    n.firstNonLinked || (n.hasLinkedRanges = !1), n === e && (r.push(n), this.$openTabstops[i] = n), this.addTabstopMarkers(n)
                }), this), r.length > 2 && (this.tabstops.length && r.push(r.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, r))
            }, this.addTabstopMarkers = function (e) {
                var t = this.editor.session;
                e.forEach((function (e) {
                    e.markerId || (e.markerId = t.addMarker(e, "ace_snippet-marker", "text"))
                }))
            }, this.removeTabstopMarkers = function (e) {
                var t = this.editor.session;
                e.forEach((function (e) {
                    t.removeMarker(e.markerId), e.markerId = null
                }))
            }, this.removeRange = function (e) {
                var t = e.tabstop.indexOf(e);
                e.tabstop.splice(t, 1), t = this.ranges.indexOf(e), this.ranges.splice(t, 1), this.editor.session.removeMarker(e.markerId), e.tabstop.length || (-1 != (t = this.tabstops.indexOf(e.tabstop)) && this.tabstops.splice(t, 1), this.tabstops.length || this.detach())
            }, this.keyboardHandler = new l, this.keyboardHandler.bindKeys({
                Tab: function (e) {
                    t.snippetManager && t.snippetManager.expandWithTab(e) || e.tabstopManager.tabNext(1)
                },
                "Shift-Tab": function (e) {
                    e.tabstopManager.tabNext(-1)
                },
                Esc: function (e) {
                    e.tabstopManager.detach()
                },
                Return: function (e) {
                    return !1
                }
            })
        }).call(d.prototype);
        var g = {};
        g.onChange = a.prototype.onChange, g.setPosition = function (e, t) {
            this.pos.row = e, this.pos.column = t
        }, g.update = function (e, t, i) {
            this.$insertRight = i, this.pos = e, this.onChange(t)
        };
        var f = function (e, t) {
            0 == e.row && (e.column += t.column), e.row += t.row
        },
            p = function (e, t) {
                e.row == t.row && (e.column -= t.column), e.row -= t.row
            };
        e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"), t.snippetManager = new u;
        var m = e("./editor").Editor;
        (function () {
            this.insertSnippet = function (e, i) {
                return t.snippetManager.insertSnippet(this, e, i)
            }, this.expandSnippet = function (e) {
                return t.snippetManager.expandWithTab(this, e)
            }
        }).call(m.prototype)
    })), ace.define("ace/autocomplete/popup", ["require", "exports", "module", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], (function (e, t, i) {
        "use strict";
        var n = e("../virtual_renderer").VirtualRenderer,
            r = e("../editor").Editor,
            s = e("../range").Range,
            o = e("../lib/event"),
            a = e("../lib/lang"),
            l = e("../lib/dom"),
            c = function (e) {
                var t = new n(e);
                t.$maxLines = 4;
                var i = new r(t);
                return i.setHighlightActiveLine(!1), i.setShowPrintMargin(!1), i.renderer.setShowGutter(!1), i.renderer.setHighlightGutterLine(!1), i.$mouseHandler.$focusWaitTimout = 0, i.$highlightTagPending = !0, i
            };
        l.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"), t.AcePopup = function (e) {
            var t = l.createElement("div"),
                i = new c(t);
            e && e.appendChild(t), t.style.display = "none", i.renderer.content.style.cursor = "default", i.renderer.setStyle("ace_autocomplete"), i.setOption("displayIndentGuides", !1), i.setOption("dragDelay", 150);
            var n, r = function () { };
            i.focus = r, i.$isFocused = !0, i.renderer.$cursorLayer.restartTimer = r, i.renderer.$cursorLayer.element.style.opacity = 0, i.renderer.$maxLines = 8, i.renderer.$keepTextAreaAtCursor = !1, i.setHighlightActiveLine(!1), i.session.highlight(""), i.session.$searchHighlight.clazz = "ace_highlight-marker", i.on("mousedown", (function (e) {
                var t = e.getDocumentPosition();
                i.selection.moveToPosition(t), u.start.row = u.end.row = t.row, e.stop()
            }));
            var h = new s(-1, 0, -1, 1 / 0),
                u = new s(-1, 0, -1, 1 / 0);
            u.id = i.session.addMarker(u, "ace_active-line", "fullLine"), i.setSelectOnHover = function (e) {
                e ? h.id && (i.session.removeMarker(h.id), h.id = null) : h.id = i.session.addMarker(h, "ace_line-hover", "fullLine")
            }, i.setSelectOnHover(!1), i.on("mousemove", (function (e) {
                if (n) {
                    if (n.x != e.x || n.y != e.y) {
                        (n = e).scrollTop = i.renderer.scrollTop;
                        var t = n.getDocumentPosition().row;
                        h.start.row != t && (h.id || i.setRow(t), g(t))
                    }
                } else n = e
            })), i.renderer.on("beforeRender", (function () {
                if (n && -1 != h.start.row) {
                    n.$pos = null;
                    var e = n.getDocumentPosition().row;
                    h.id || i.setRow(e), g(e, !0)
                }
            })), i.renderer.on("afterRender", (function () {
                var e = i.getRow(),
                    t = i.renderer.$textLayer,
                    n = t.element.childNodes[e - t.config.firstRow];
                n != t.selectedNode && (t.selectedNode && l.removeCssClass(t.selectedNode, "ace_selected"), t.selectedNode = n, n && l.addCssClass(n, "ace_selected"))
            }));
            var d = function () {
                g(-1)
            },
                g = function (e, t) {
                    e !== h.start.row && (h.start.row = h.end.row = e, t || i.session._emit("changeBackMarker"), i._emit("changeHoverMarker"))
                };
            i.getHoveredRow = function () {
                return h.start.row
            }, o.addListener(i.container, "mouseout", d), i.on("hide", d), i.on("changeSelection", d), i.session.doc.getLength = function () {
                return i.data.length
            }, i.session.doc.getLine = function (e) {
                var t = i.data[e];
                return "string" == typeof t ? t : t && t.value || ""
            };
            var f = i.session.bgTokenizer;
            return f.$tokenizeRow = function (e) {
                var t = i.data[e],
                    n = [];
                if (!t) return n;
                "string" == typeof t && (t = {
                    value: t
                }), t.caption || (t.caption = t.value || t.name);
                for (var r, s, o = -1, a = 0; a < t.caption.length; a++) s = t.caption[a], o !== (r = t.matchMask & 1 << a ? 1 : 0) ? (n.push({
                    type: t.className || (r ? "completion-highlight" : ""),
                    value: s
                }), o = r) : n[n.length - 1].value += s;
                if (t.meta) {
                    var l = i.renderer.$size.scrollerWidth / i.renderer.layerConfig.characterWidth,
                        c = t.meta;
                    c.length + t.caption.length > l - 2 && (c = c.substr(0, l - t.caption.length - 3) + "…"), n.push({
                        type: "rightAlignedText",
                        value: c
                    })
                }
                return n
            }, f.$updateOnChange = r, f.start = r, i.session.$computeWidth = function () {
                return this.screenWidth = 0
            }, i.$blockScrolling = 1 / 0, i.isOpen = !1, i.isTopdown = !1, i.autoSelect = !0, i.data = [], i.setData = function (e) {
                i.setValue(a.stringRepeat("\n", e.length), -1), i.data = e || [], i.setRow(0)
            }, i.getData = function (e) {
                return i.data[e]
            }, i.getRow = function () {
                return u.start.row
            }, i.setRow = function (e) {
                e = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data.length, e)), u.start.row != e && (i.selection.clearSelection(), u.start.row = u.end.row = e || 0, i.session._emit("changeBackMarker"), i.moveCursorTo(e || 0, 0), i.isOpen && i._signal("select"))
            }, i.on("changeSelection", (function () {
                i.isOpen && i.setRow(i.selection.lead.row), i.renderer.scrollCursorIntoView()
            })), i.hide = function () {
                this.container.style.display = "none", this._signal("hide"), i.isOpen = !1
            }, i.show = function (e, t, r) {
                var s = this.container,
                    o = window.innerHeight,
                    a = window.innerWidth,
                    l = this.renderer,
                    c = l.$maxLines * t * 1.4,
                    h = e.top + this.$borderSize;
                h > o / 2 && !r && h + t + c > o ? (l.$maxPixelHeight = h - 2 * this.$borderSize, s.style.top = "", s.style.bottom = o - h + "px", i.isTopdown = !1) : (h += t, l.$maxPixelHeight = o - h - .2 * t, s.style.top = h + "px", s.style.bottom = "", i.isTopdown = !0), s.style.display = "", this.renderer.$textLayer.checkForSizeChanges();
                var u = e.left;
                u + s.offsetWidth > a && (u = a - s.offsetWidth), s.style.left = u + "px", this._signal("show"), n = null, i.isOpen = !0
            }, i.getTextLeftOffset = function () {
                return this.$borderSize + this.renderer.$padding + this.$imageSize
            }, i.$imageSize = 0, i.$borderSize = 1, i
        }
    })), ace.define("ace/autocomplete/util", ["require", "exports", "module"], (function (e, t, i) {
        "use strict";
        t.parForEach = function (e, t, i) {
            var n = 0,
                r = e.length;
            0 === r && i();
            for (var s = 0; s < r; s++) t(e[s], (function (e, t) {
                ++n === r && i(e, t)
            }))
        };
        var n = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
        t.retrievePrecedingIdentifier = function (e, t, i) {
            i = i || n;
            for (var r = [], s = t - 1; s >= 0 && i.test(e[s]); s--) r.push(e[s]);
            return r.reverse().join("")
        }, t.retrieveFollowingIdentifier = function (e, t, i) {
            i = i || n;
            for (var r = [], s = t; s < e.length && i.test(e[s]); s++) r.push(e[s]);
            return r
        }, t.getCompletionPrefix = function (e) {
            var t, i = e.getCursorPosition(),
                n = e.session.getLine(i.row);
            return e.completers.forEach(function (e) {
                e.identifierRegexps && e.identifierRegexps.forEach(function (e) {
                    !t && e && (t = this.retrievePrecedingIdentifier(n, i.column, e))
                }.bind(this))
            }.bind(this)), t || this.retrievePrecedingIdentifier(n, i.column)
        }
    })), ace.define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/event", "ace/lib/lang", "ace/lib/dom", "ace/snippets"], (function (e, t, i) {
        "use strict";
        var n = e("./keyboard/hash_handler").HashHandler,
            r = e("./autocomplete/popup").AcePopup,
            s = e("./autocomplete/util"),
            o = (e("./lib/event"), e("./lib/lang")),
            a = e("./lib/dom"),
            l = e("./snippets").snippetManager,
            c = function () {
                this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this.gatherCompletionsId = 0, this.keyboardHandler = new n, this.keyboardHandler.bindKeys(this.commands), this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.changeTimer = o.delayedCall(function () {
                    this.updateCompletions(!0)
                }.bind(this)), this.tooltipTimer = o.delayedCall(this.updateDocTooltip.bind(this), 50)
            };
        (function () {
            this.$init = function () {
                return this.popup = new r(document.body || document.documentElement), this.popup.on("click", function (e) {
                    this.insertMatch(), e.stop()
                }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.tooltipTimer.bind(null, null)), this.popup.on("select", this.tooltipTimer.bind(null, null)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup
            }, this.getPopup = function () {
                return this.popup || this.$init()
            }, this.openPopup = function (e, t, i) {
                this.popup || this.$init(), this.popup.autoSelect = this.autoSelect, this.popup.setData(this.completions.filtered), e.keyBinding.addKeyboardHandler(this.keyboardHandler);
                var n = e.renderer;
                if (this.popup.setRow(this.autoSelect ? 0 : -1), i) i && !t && this.detach();
                else {
                    this.popup.setTheme(e.getTheme()), this.popup.setFontSize(e.getFontSize());
                    var r = n.layerConfig.lineHeight,
                        s = n.$cursorLayer.getPixelPosition(this.base, !0);
                    s.left -= this.popup.getTextLeftOffset();
                    var o = e.container.getBoundingClientRect();
                    s.top += o.top - n.layerConfig.offset, s.left += o.left - e.renderer.scrollLeft, s.left += n.gutterWidth, this.popup.show(s, r)
                }
            }, this.detach = function () {
                this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener), this.changeTimer.cancel(), this.hideDocTooltip(), this.gatherCompletionsId += 1, this.popup && this.popup.isOpen && this.popup.hide(), this.base && this.base.detach(), this.activated = !1, this.completions = this.base = null
            }, this.changeListener = function (e) {
                var t = this.editor.selection.lead;
                (t.row != this.base.row || t.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach()
            }, this.blurListener = function (e) {
                var t = document.activeElement,
                    i = this.editor.textInput.getElement(),
                    n = e.relatedTarget && this.tooltipNode && this.tooltipNode.contains(e.relatedTarget),
                    r = this.popup && this.popup.container;
                t == i || t.parentNode == r || n || t == this.tooltipNode || e.relatedTarget == i || this.detach()
            }, this.mousedownListener = function (e) {
                this.detach()
            }, this.mousewheelListener = function (e) {
                this.detach()
            }, this.goTo = function (e) {
                var t = this.popup.getRow(),
                    i = this.popup.session.getLength() - 1;
                switch (e) {
                    case "up":
                        t = t <= 0 ? i : t - 1;
                        break;
                    case "down":
                        t = t >= i ? -1 : t + 1;
                        break;
                    case "start":
                        t = 0;
                        break;
                    case "end":
                        t = i
                }
                this.popup.setRow(t)
            }, this.insertMatch = function (e, t) {
                if (e || (e = this.popup.getData(this.popup.getRow())), !e) return !1;
                if (e.completer && e.completer.insertMatch) e.completer.insertMatch(this.editor, e);
                else {
                    if (this.completions.filterText)
                        for (var i, n = this.editor.selection.getAllRanges(), r = 0; i = n[r]; r++) i.start.column -= this.completions.filterText.length, this.editor.session.remove(i);
                    e.snippet ? l.insertSnippet(this.editor, e.snippet) : this.editor.execCommand("insertstring", e.value || e)
                }
                this.detach()
            }, this.commands = {
                Up: function (e) {
                    e.completer.goTo("up")
                },
                Down: function (e) {
                    e.completer.goTo("down")
                },
                "Ctrl-Up|Ctrl-Home": function (e) {
                    e.completer.goTo("start")
                },
                "Ctrl-Down|Ctrl-End": function (e) {
                    e.completer.goTo("end")
                },
                Esc: function (e) {
                    e.completer.detach()
                },
                Return: function (e) {
                    return e.completer.insertMatch()
                },
                "Shift-Return": function (e) {
                    e.completer.insertMatch(null, {
                        deleteSuffix: !0
                    })
                },
                Tab: function (e) {
                    var t = e.completer.insertMatch();
                    if (t || e.tabstopManager) return t;
                    e.completer.goTo("down")
                },
                PageUp: function (e) {
                    e.completer.popup.gotoPageUp()
                },
                PageDown: function (e) {
                    e.completer.popup.gotoPageDown()
                }
            }, this.gatherCompletions = function (e, t) {
                var i = e.getSession(),
                    n = e.getCursorPosition(),
                    r = s.getCompletionPrefix(e);
                this.base = i.doc.createAnchor(n.row, n.column - r.length), this.base.$insertRight = !0;
                var o = [],
                    a = e.completers.length;
                return e.completers.forEach((function (l, c) {
                    l.getCompletions(e, i, n, r, (function (i, n) {
                        !i && n && (o = o.concat(n)), t(null, {
                            prefix: s.getCompletionPrefix(e),
                            matches: o,
                            finished: 0 == --a
                        })
                    }))
                })), !0
            }, this.showPopup = function (e) {
                this.editor && this.detach(), this.activated = !0, this.editor = e, e.completer != this && (e.completer && e.completer.detach(), e.completer = this), e.on("changeSelection", this.changeListener), e.on("blur", this.blurListener), e.on("mousedown", this.mousedownListener), e.on("mousewheel", this.mousewheelListener), this.updateCompletions()
            }, this.updateCompletions = function (e) {
                if (e && this.base && this.completions) {
                    var t = this.editor.getCursorPosition(),
                        i = this.editor.session.getTextRange({
                            start: this.base,
                            end: t
                        });
                    if (i == this.completions.filterText) return;
                    return this.completions.setFilter(i), this.completions.filtered.length ? 1 != this.completions.filtered.length || this.completions.filtered[0].value != i || this.completions.filtered[0].snippet ? void this.openPopup(this.editor, i, e) : this.detach() : this.detach()
                }
                var n = this.gatherCompletionsId;
                this.gatherCompletions(this.editor, function (t, i) {
                    var r = function () {
                        if (i.finished) return this.detach()
                    }.bind(this),
                        s = i.prefix,
                        o = i && i.matches;
                    if (!o || !o.length) return r();
                    if (0 === s.indexOf(i.prefix) && n == this.gatherCompletionsId) {
                        this.completions = new h(o), this.exactMatch && (this.completions.exactMatch = !0), this.completions.setFilter(s);
                        var a = this.completions.filtered;
                        return a.length && (1 != a.length || a[0].value != s || a[0].snippet) ? this.autoInsert && 1 == a.length && i.finished ? this.insertMatch(a[0]) : void this.openPopup(this.editor, s, e) : r()
                    }
                }.bind(this))
            }, this.cancelContextMenu = function () {
                this.editor.$mouseHandler.cancelContextMenu()
            }, this.updateDocTooltip = function () {
                var e = this.popup,
                    t = e.data,
                    i = t && (t[e.getHoveredRow()] || t[e.getRow()]),
                    n = null;
                return i && this.editor && this.popup.isOpen ? (this.editor.completers.some((function (e) {
                    return e.getDocTooltip && (n = e.getDocTooltip(i)), n
                })), n || (n = i), "string" == typeof n && (n = {
                    docText: n
                }), n && (n.docHTML || n.docText) ? void this.showDocTooltip(n) : this.hideDocTooltip()) : this.hideDocTooltip()
            }, this.showDocTooltip = function (e) {
                this.tooltipNode || (this.tooltipNode = a.createElement("div"), this.tooltipNode.className = "ace_tooltip ace_doc-tooltip", this.tooltipNode.style.margin = 0, this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this), this.tooltipNode.onclick = this.onTooltipClick.bind(this));
                var t = this.tooltipNode;
                e.docHTML ? t.innerHTML = e.docHTML : e.docText && (t.textContent = e.docText), t.parentNode || document.body.appendChild(t);
                var i = this.popup,
                    n = i.container.getBoundingClientRect();
                t.style.top = i.container.style.top, t.style.bottom = i.container.style.bottom, window.innerWidth - n.right < 320 ? (t.style.right = window.innerWidth - n.left + "px", t.style.left = "") : (t.style.left = n.right + 1 + "px", t.style.right = ""), t.style.display = "block"
            }, this.hideDocTooltip = function () {
                if (this.tooltipTimer.cancel(), this.tooltipNode) {
                    var e = this.tooltipNode;
                    this.editor.isFocused() || document.activeElement != e || this.editor.focus(), this.tooltipNode = null, e.parentNode && e.parentNode.removeChild(e)
                }
            }, this.onTooltipClick = function (e) {
                for (var t = e.target; t && t != this.tooltipNode;) {
                    if ("A" == t.nodeName && t.href) {
                        t.rel = "noreferrer", t.target = "_blank";
                        break
                    }
                    t = t.parentNode
                }
            }
        }).call(c.prototype), c.startCommand = {
            name: "startAutocomplete",
            exec: function (e) {
                e.completer || (e.completer = new c), e.completer.autoInsert = !1, e.completer.autoSelect = !0, e.completer.showPopup(e), e.completer.cancelContextMenu()
            },
            bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
        };
        var h = function (e, t) {
            this.all = e, this.filtered = e, this.filterText = t || "", this.exactMatch = !1
        };
        (function () {
            this.setFilter = function (e) {
                if (e.length > this.filterText && 0 === e.lastIndexOf(this.filterText, 0)) var t = this.filtered;
                else t = this.all;
                this.filterText = e, t = (t = this.filterCompletions(t, this.filterText)).sort((function (e, t) {
                    return t.exactMatch - e.exactMatch || t.score - e.score
                }));
                var i = null;
                t = t.filter((function (e) {
                    var t = e.snippet || e.caption || e.value;
                    return t !== i && (i = t, !0)
                })), this.filtered = t
            }, this.filterCompletions = function (e, t) {
                var i = [],
                    n = t.toUpperCase(),
                    r = t.toLowerCase();
                e: for (var s, o = 0; s = e[o]; o++) {
                    var a = s.value || s.caption || s.snippet;
                    if (a) {
                        var l, c, h = -1,
                            u = 0,
                            d = 0;
                        if (this.exactMatch) {
                            if (t !== a.substr(0, t.length)) continue e
                        } else
                            for (var g = 0; g < t.length; g++) {
                                var f = a.indexOf(r[g], h + 1),
                                    p = a.indexOf(n[g], h + 1);
                                if ((l = f >= 0 && (p < 0 || f < p) ? f : p) < 0) continue e;
                                (c = l - h - 1) > 0 && (-1 === h && (d += 10), d += c), u |= 1 << l, h = l
                            }
                        s.matchMask = u, s.exactMatch = d ? 0 : 1, s.score = (s.score || 0) - d, i.push(s)
                    }
                }
                return i
            }
        }).call(h.prototype), t.Autocomplete = c, t.FilteredList = h
    })), ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
        var n = e("../range").Range,
            r = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;

        function s(e, t) {
            var i = function (e, t) {
                return e.getTextRange(n.fromPoints({
                    row: 0,
                    column: 0
                }, t)).split(r).length - 1
            }(e, t),
                s = e.getValue().split(r),
                o = Object.create(null),
                a = s[i];
            return s.forEach((function (e, t) {
                if (e && e !== a) {
                    var n = Math.abs(i - t),
                        r = s.length - n;
                    o[e] ? o[e] = Math.max(r, o[e]) : o[e] = r
                }
            })), o
        }
        t.getCompletions = function (e, t, i, n, r) {
            var o = s(t, i);
            r(null, Object.keys(o).map((function (e) {
                return {
                    caption: e,
                    value: e,
                    score: o[e],
                    meta: "local"
                }
            })))
        }
    })), ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], (function (e, t, i) {
        "use strict";
        var n = e("../snippets").snippetManager,
            r = e("../autocomplete").Autocomplete,
            s = e("../config"),
            o = e("../lib/lang"),
            a = e("../autocomplete/util"),
            l = e("../autocomplete/text_completer"),
            c = {
                getCompletions: function (e, t, i, n, r) {
                    if (t.$mode.completer) return t.$mode.completer.getCompletions(e, t, i, n, r);
                    var s = e.session.getState(i.row);
                    r(null, t.$mode.getCompletions(s, t, i, n))
                }
            },
            h = {
                getCompletions: function (e, t, i, r, s) {
                    var o = n.snippetMap,
                        a = [];
                    n.getActiveScopes(e).forEach((function (e) {
                        for (var t = o[e] || [], i = t.length; i--;) {
                            var n = t[i],
                                r = n.name || n.tabTrigger;
                            r && a.push({
                                caption: r,
                                snippet: n.content,
                                meta: n.tabTrigger && !n.name ? n.tabTrigger + "⇥ " : "snippet",
                                type: "snippet"
                            })
                        }
                    }), this), s(null, a)
                },
                getDocTooltip: function (e) {
                    "snippet" != e.type || e.docHTML || (e.docHTML = ["<b>", o.escapeHTML(e.caption), "</b>", "<hr></hr>", o.escapeHTML(e.snippet)].join(""))
                }
            },
            u = [h, l, c];
        t.setCompleters = function (e) {
            u.length = 0, e && u.push.apply(u, e)
        }, t.addCompleter = function (e) {
            u.push(e)
        }, t.textCompleter = l, t.keyWordCompleter = c, t.snippetCompleter = h;
        var d = {
            name: "expandSnippet",
            exec: function (e) {
                return n.expandWithTab(e)
            },
            bindKey: "Tab"
        },
            g = function (e, t) {
                f(t.session.$mode)
            },
            f = function (e) {
                var t = e.$id;
                n.files || (n.files = {}), p(t), e.modes && e.modes.forEach(f)
            },
            p = function (e) {
                if (e && !n.files[e]) {
                    var t = e.replace("mode", "snippets");
                    n.files[e] = {}, s.loadModule(t, (function (t) {
                        t && (n.files[e] = t, !t.snippets && t.snippetText && (t.snippets = n.parseSnippetFile(t.snippetText)), n.register(t.snippets || [], t.scope), t.includeScopes && (n.snippetMap[t.scope].includeScopes = t.includeScopes, t.includeScopes.forEach((function (e) {
                            p("ace/mode/" + e)
                        }))))
                    }))
                }
            },
            m = function (e) {
                var t = e.editor,
                    i = t.completer && t.completer.activated;
                if ("backspace" === e.command.name) i && !a.getCompletionPrefix(t) && t.completer.detach();
                else if ("insertstring" === e.command.name) {
                    a.getCompletionPrefix(t) && !i && (t.completer || (t.completer = new r), t.completer.autoInsert = !1, t.completer.showPopup(t))
                }
            },
            w = e("../editor").Editor;
        e("../config").defineOptions(w.prototype, "editor", {
            enableBasicAutocompletion: {
                set: function (e) {
                    e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.addCommand(r.startCommand)) : this.commands.removeCommand(r.startCommand)
                },
                value: !1
            },
            enableLiveAutocompletion: {
                set: function (e) {
                    e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.on("afterExec", m)) : this.commands.removeListener("afterExec", m)
                },
                value: !1
            },
            enableSnippets: {
                set: function (e) {
                    e ? (this.commands.addCommand(d), this.on("changeMode", g), g(0, this)) : (this.commands.removeCommand(d), this.off("changeMode", g))
                },
                value: !1
            }
        })
    })), ace.acequire(["ace/ext/language_tools"], (function () { }))
}, function (e, t) {
    ace.define("ace/mode/plain_text", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/behaviour"], (function (e, t, i) {
        "use strict";
        var n = e("../lib/oop"),
            r = e("./text").Mode,
            s = e("./text_highlight_rules").TextHighlightRules,
            o = e("./behaviour").Behaviour,
            a = function () {
                this.HighlightRules = s, this.$behaviour = new o
            };
        n.inherits(a, r),
            function () {
                this.type = "text", this.getNextLineIndent = function (e, t, i) {
                    return ""
                }, this.$id = "ace/mode/plain_text"
            }.call(a.prototype), t.Mode = a
    }))
}, function (e, t, i) {
    const n = i(6);
    n.define("ace/mode/ebnf_highlight_rules", ["require", "exports", "ace/lib/oop", "ace/mode/text_highlight_rules"], (function (e, t) {
        function i() {
            this.$rules = {
                start: [{
                    token: "comment",
                    regex: "\\(\\*",
                    next: "outerComment"
                }, {
                    token: "support.function",
                    regex: "[a-zA-Z][a-zA-Z0-9\\s]*"
                }, {
                    token: "constant.language",
                    regex: "=",
                    next: "definition"
                }],
                definition: [{
                    token: "constant.language",
                    regex: ";",
                    next: "start"
                }, {
                    token: "keyword.operator",
                    regex: "[,|/!]"
                }, {
                    token: "comment",
                    regex: "\\(\\*",
                    next: "innerComment"
                }, {
                    token: "paren.lparen",
                    regex: "[({[]"
                }, {
                    token: "paren.rparen",
                    regex: "[)}\\]]"
                }, {
                    token: "function",
                    regex: "[a-zA-Z][a-zA-Z0-9\\s]*"
                }, {
                    statename: "sstring",
                    token: "string.start",
                    regex: "\\?",
                    next: [{
                        token: "string.end",
                        regex: "\\?",
                        next: "definition"
                    }, {
                        defaultToken: "string"
                    }]
                }, {
                    statename: "qstring",
                    token: "string.start",
                    regex: "'",
                    next: [{
                        token: "string.end",
                        regex: "'",
                        next: "definition"
                    }, {
                        defaultToken: "string"
                    }]
                }, {
                    statename: "qqstring",
                    token: "string.start",
                    regex: '"',
                    next: [{
                        token: "string.end",
                        regex: '"',
                        next: "definition"
                    }, {
                        defaultToken: "string"
                    }]
                }],
                innerComment: [{
                    token: "comment",
                    regex: "\\*\\)",
                    next: "definition"
                }, {
                    defaultToken: "comment"
                }],
                outerComment: [{
                    token: "comment",
                    regex: "\\*\\)",
                    next: "start"
                }, {
                    defaultToken: "comment"
                }]
            }, this.normalizeRules()
        }
        const n = e("../lib/oop"),
            r = e("./text_highlight_rules").TextHighlightRules;
        n.inherits(i, r), t.EBNFHighlightRules = i
    })), n.define("ace/mode/ebnf", ["require", "exports", "module", "ace/mode/ebnf_highlight_rules", "ace/mode/text", "ace/lib/oop"], (function (e, t) {
        const i = e("./ebnf_highlight_rules").EBNFHighlightRules,
            n = function () {
                this.HighlightRules = i
            },
            r = e("../lib/oop"),
            s = e("./text").Mode;
        r.inherits(n, s),
            function () {
                this.$id = "ace/mode/ebnf", this.blockComment = {
                    start: "(*",
                    end: "*)"
                }
            }.call(n.prototype), t.Mode = n
    }))
}, function (e, t) {
    ace.define("ace/theme/iplastic", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
        t.isDark = !1, t.cssClass = "ace-iplastic", t.cssText = ".ace-iplastic .ace_gutter {background: #dddddd;color: #666666}.ace-iplastic .ace_print-margin {width: 1px;background: #bbbbbb}.ace-iplastic {background-color: #eeeeee;color: #333333}.ace-iplastic .ace_cursor {color: #333}.ace-iplastic .ace_marker-layer .ace_selection {background: #BAD6FD;}.ace-iplastic.ace_multiselect .ace_selection.ace_start {border-radius: 4px}.ace-iplastic .ace_marker-layer .ace_step {background: #444444}.ace-iplastic .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E;background: #FFF799}.ace-iplastic .ace_marker-layer .ace_active-line {background: #e5e5e5}.ace-iplastic .ace_gutter-active-line {background-color: #eeeeee}.ace-iplastic .ace_marker-layer .ace_selected-word {border: 1px solid #555555;border-radius:4px}.ace-iplastic .ace_invisible {color: #999999}.ace-iplastic .ace_entity.ace_name.ace_tag,.ace-iplastic .ace_keyword,.ace-iplastic .ace_meta.ace_tag,.ace-iplastic .ace_storage {color: #0000FF}.ace-iplastic .ace_punctuation,.ace-iplastic .ace_punctuation.ace_tag {color: #000}.ace-iplastic .ace_constant {color: #333333;font-weight: 700}.ace-iplastic .ace_constant.ace_character,.ace-iplastic .ace_constant.ace_language,.ace-iplastic .ace_constant.ace_numeric,.ace-iplastic .ace_constant.ace_other {color: #0066FF;font-weight: 700}.ace-iplastic .ace_constant.ace_numeric{font-weight: 100}.ace-iplastic .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-iplastic .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-iplastic .ace_support.ace_constant,.ace-iplastic .ace_support.ace_function {color: #333333;font-weight: 700}.ace-iplastic .ace_fold {background-color: #464646;border-color: #F8F8F2}.ace-iplastic .ace_storage.ace_type,.ace-iplastic .ace_support.ace_class,.ace-iplastic .ace_support.ace_type {color: #3333fc;font-weight: 700}.ace-iplastic .ace_entity.ace_name.ace_function,.ace-iplastic .ace_entity.ace_other,.ace-iplastic .ace_entity.ace_other.ace_attribute-name,.ace-iplastic .ace_variable {color: #3366cc;font-style: italic}.ace-iplastic .ace_variable.ace_parameter {font-style: italic;color: #2469E0}.ace-iplastic .ace_string {color: #a55f03}.ace-iplastic .ace_comment {color: #777777;font-style: italic}.ace-iplastic .ace_fold-widget {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==);}.ace-iplastic .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABlJREFUeNpi+P//PwMzMzPzfwAAAAD//wMAGRsECSML/RIAAAAASUVORK5CYII=) right repeat-y}", e("../lib/dom").importCssString(t.cssText, t.cssClass)
    }))
}]);