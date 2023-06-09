! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/dist/", o(o.s = 0)
}([function(e, t) {
    function o() {
        const e = document.querySelectorAll(".weglot-custom-switcher-ajax");
        Array.prototype.forEach.call(e, (function(e, t) {
            let o = document.querySelector(e.getAttribute("data-wg-target")),
                n = document.querySelector(e.getAttribute("data-wg-sibling"));
            o && n ? (o.insertBefore(e, n), e.classList.remove("weglot-custom-switcher-ajax")) : o ? (o.insertBefore(e, o.firstChild), e.classList.remove("weglot-custom-switcher-ajax")) : n && (n.parentNode.insertBefore(e, n), e.classList.remove("weglot-custom-switcher-ajax"))
        }))
    }
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => o()) : o(), document.addEventListener("DOMContentLoaded", (function(e) {
        const t = document.querySelector(".country-selector");
        if (!t) return;
        const o = function(e) {
                let t = 0,
                    o = 0;
                do {
                    t += e.offsetTop || 0, o += e.offsetLeft || 0, e = e.offsetParent
                } while (e);
                return {
                    top: t,
                    left: o
                }
            }(t).top,
            n = document.body,
            r = document.documentElement,
            l = Math.max(n.scrollHeight, n.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight),
            c = window.getComputedStyle(t).getPropertyValue("position");
        window.getComputedStyle(t).getPropertyValue("bottom"), window.getComputedStyle(t).getPropertyValue("top");
        if (("fixed" !== c && o > l / 2 || "fixed" === c && o > 100) && (t.className += " weglot-invert"), function() {
                try {
                    return window.frameElement || window.self !== window.top
                } catch (e) {
                    return !1
                }
            }()) {
            const e = document.querySelectorAll(".weglot-dropdown");
            null !== e && [].forEach.call(e, (function(e) {
                e.style.display = "none"
            }))
        }
        const s = document.getElementsByClassName("country-selector"),
            i = e => !e.className.includes("closed");
        let u;
        if (s.length > 0) {
            const e = document.getElementsByClassName("wgcurrent");
            for (let t of s) {
                const o = {
                        ENTER: 13,
                        ESCAPE: 27,
                        ARROWUP: 38,
                        ARROWDOWN: 40
                    },
                    n = () => {
                        const {
                            bottom: e = 0
                        } = t.getBoundingClientRect();
                        return e > window.innerHeight / 2
                    },
                    r = () => {
                        t.classList.remove("closed"), document.querySelectorAll(".country-selector.weglot-dropdown input").checked = !0, t.setAttribute("aria-expanded", "true")
                    },
                    l = () => {
                        t.classList.add("closed"), document.querySelectorAll(".country-selector.weglot-dropdown input").checked = !1, t.setAttribute("aria-expanded", "false"), u && (u.classList.remove("focus"), u = null)
                    },
                    c = e => {
                        getLangNameFromCode(e);
                        t.setAttribute("aria-activedescendant", "weglot-language-" + e), t.setAttribute("aria-label", "Language selected: " + e)
                    },
                    s = () => {
                        t.classList.contains("closed") ? r() : l(), u && u.classList.remove("focus"), u = null
                    };
                t.addEventListener("keydown", n => {
                    if (n.keyCode !== o.ENTER) {
                        if (n.keyCode === o.ARROWDOWN || n.keyCode === o.ARROWUP) return n.preventDefault(), void a(n.keyCode);
                        n.keyCode === o.ESCAPE && i(t) && (n.preventDefault(), l(), t.focus())
                    } else {
                        for (var r = 0; r < e.length; r++) e[r].click();
                        if (u) {
                            const e = u.getAttribute("data-l");
                            c(e), t.focus()
                        }
                        s()
                    }
                }), t.addEventListener("click", e => {
                    if (u) {
                        const e = u.getAttribute("data-l");
                        c(e), t.focus()
                    }
                    s()
                });
                const a = c => {
                    const s = c === o.ARROWDOWN ? "nextSibling" : "previousSibling",
                        a = n();
                    if (u && i(t)) u[s] ? (u.classList.remove("focus"), u = u[s], u.classList.add("focus"), u.childNodes[0].focus(), u.scrollIntoView({
                        block: "center"
                    })) : (c === o.ARROWUP && !a || c === o.ARROWDOWN && a) && (l(), t.focus());
                    else {
                        const n = a ? "ul li.wg-li:last-child" : "ul li.wg-li";
                        for (var d = 0; d < e.length; d++) u = e[d].parentNode.querySelector(n);
                        if (!u) return;
                        u.classList.add("focus"), u.childNodes[0].focus(), u.scrollIntoView({
                            block: "center"
                        });
                        const l = c === o.ARROWUP && a || c === o.ARROWDOWN && !a;
                        !i(t) && l && r()
                    }
                }
            }
        }
        return !1
    }))
}]);