/*! For license information please see component---src-templates-post-js-1e4bfda89f057c21a5ab.js.LICENSE.txt */
(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [851],
  {
    7228: function (e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    3646: function (e, t, r) {
      var n = r(7228);
      (e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    9100: function (e, t, r) {
      var n = r(9489),
        o = r(7067);
      function a(t, r, i) {
        return (
          o()
            ? ((e.exports = a = Reflect.construct),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = a =
                function (e, t, r) {
                  var o = [null];
                  o.push.apply(o, t);
                  var a = new (Function.bind.apply(e, o))();
                  return r && n(a, r.prototype), a;
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          a.apply(null, arguments)
        );
      }
      (e.exports = a),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    9713: function (e) {
      (e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    7067: function (e) {
      (e.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    6860: function (e) {
      (e.exports = function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    8206: function (e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    319: function (e, t, r) {
      var n = r(3646),
        o = r(6860),
        a = r(379),
        i = r(8206);
      (e.exports = function (e) {
        return n(e) || o(e) || a(e) || i();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    379: function (e, t, r) {
      var n = r(7228);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    2412: function (e) {
      "use strict";
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          var n, o, a;
          if (Array.isArray(t)) {
            if ((n = t.length) != r.length) return !1;
            for (o = n; 0 != o--; ) if (!e(t[o], r[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if ((n = (a = Object.keys(t)).length) !== Object.keys(r).length)
            return !1;
          for (o = n; 0 != o--; )
            if (!Object.prototype.hasOwnProperty.call(r, a[o])) return !1;
          for (o = n; 0 != o--; ) {
            var i = a[o];
            if (!e(t[i], r[i])) return !1;
          }
          return !0;
        }
        return t != t && r != r;
      };
    },
    9586: function (e) {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function r(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, n, o) {
        var a = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        "function" == typeof n && ((o = n), (n = {})),
          (n = n || {}),
          (o = o || function () {}),
          (i.type = n.type || "text/javascript"),
          (i.charset = n.charset || "utf8"),
          (i.async = !("async" in n) || !!n.async),
          (i.src = e),
          n.attrs &&
            (function (e, t) {
              for (var r in t) e.setAttribute(r, t[r]);
            })(i, n.attrs),
          n.text && (i.text = "" + n.text),
          ("onload" in i ? t : r)(i, o),
          i.onload || t(i, o),
          a.appendChild(i);
      };
    },
    7729: function (e) {
      "use strict";
      var t;
      (t = function () {
        var e = {},
          t = {};
        return (
          (e.on = function (e, r) {
            var n = { name: e, handler: r };
            return (t[e] = t[e] || []), t[e].unshift(n), n;
          }),
          (e.off = function (e) {
            var r = t[e.name].indexOf(e);
            -1 !== r && t[e.name].splice(r, 1);
          }),
          (e.trigger = function (e, r) {
            var n,
              o = t[e];
            if (o) for (n = o.length; n--; ) o[n].handler(r);
          }),
          e
        );
      }),
        (e.exports = t);
    },
    586: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        o = r(2440),
        a = (n = o) && n.__esModule ? n : { default: n };
      (t.default = {
        pauseVideo: {
          acceptableStates: [a.default.ENDED, a.default.PAUSED],
          stateChangeRequired: !1,
        },
        playVideo: {
          acceptableStates: [a.default.ENDED, a.default.PLAYING],
          stateChangeRequired: !1,
        },
        seekTo: {
          acceptableStates: [
            a.default.ENDED,
            a.default.PLAYING,
            a.default.PAUSED,
          ],
          stateChangeRequired: !0,
          timeout: 3e3,
        },
      }),
        (e.exports = t.default);
    },
    1256: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = l(r(7974)),
        o = l(r(3204)),
        a = l(r(7347)),
        i = l(r(586));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (0, n.default)("youtube-player"),
        u = {
          proxyEvents: function (e) {
            var t = {},
              r = function (r) {
                var n = "on" + r.slice(0, 1).toUpperCase() + r.slice(1);
                t[n] = function (t) {
                  s('event "%s"', n, t), e.trigger(r, t);
                };
              },
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var l, u = a.default[Symbol.iterator]();
                !(n = (l = u.next()).done);
                n = !0
              ) {
                r(l.value);
              }
            } catch (c) {
              (o = !0), (i = c);
            } finally {
              try {
                !n && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }
            return t;
          },
          promisifyPlayer: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = {},
              n = function (n) {
                t && i.default[n]
                  ? (r[n] = function () {
                      for (
                        var t = arguments.length, r = Array(t), o = 0;
                        o < t;
                        o++
                      )
                        r[o] = arguments[o];
                      return e.then(function (e) {
                        var t = i.default[n],
                          o = e.getPlayerState(),
                          a = e[n].apply(e, r);
                        return t.stateChangeRequired ||
                          (Array.isArray(t.acceptableStates) &&
                            -1 === t.acceptableStates.indexOf(o))
                          ? new Promise(function (r) {
                              e.addEventListener("onStateChange", function n() {
                                var o = e.getPlayerState(),
                                  a = void 0;
                                "number" == typeof t.timeout &&
                                  (a = setTimeout(function () {
                                    e.removeEventListener("onStateChange", n),
                                      r();
                                  }, t.timeout)),
                                  Array.isArray(t.acceptableStates) &&
                                    -1 !== t.acceptableStates.indexOf(o) &&
                                    (e.removeEventListener("onStateChange", n),
                                    clearTimeout(a),
                                    r());
                              });
                            }).then(function () {
                              return a;
                            })
                          : a;
                      });
                    })
                  : (r[n] = function () {
                      for (
                        var t = arguments.length, r = Array(t), o = 0;
                        o < t;
                        o++
                      )
                        r[o] = arguments[o];
                      return e.then(function (e) {
                        return e[n].apply(e, r);
                      });
                    });
              },
              a = !0,
              l = !1,
              s = void 0;
            try {
              for (
                var u, c = o.default[Symbol.iterator]();
                !(a = (u = c.next()).done);
                a = !0
              ) {
                var f = u.value;
                n(f);
              }
            } catch (p) {
              (l = !0), (s = p);
            } finally {
              try {
                !a && c.return && c.return();
              } finally {
                if (l) throw s;
              }
            }
            return r;
          },
        };
      (t.default = u), (e.exports = t.default);
    },
    2440: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          BUFFERING: 3,
          ENDED: 0,
          PAUSED: 2,
          PLAYING: 1,
          UNSTARTED: -1,
          VIDEO_CUED: 5,
        }),
        (e.exports = t.default);
    },
    7347: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = [
          "ready",
          "stateChange",
          "playbackQualityChange",
          "playbackRateChange",
          "error",
          "apiChange",
          "volumeChange",
        ]),
        (e.exports = t.default);
    },
    3204: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = [
          "cueVideoById",
          "loadVideoById",
          "cueVideoByUrl",
          "loadVideoByUrl",
          "playVideo",
          "pauseVideo",
          "stopVideo",
          "getVideoLoadedFraction",
          "cuePlaylist",
          "loadPlaylist",
          "nextVideo",
          "previousVideo",
          "playVideoAt",
          "setShuffle",
          "setLoop",
          "getPlaylist",
          "getPlaylistIndex",
          "setOption",
          "mute",
          "unMute",
          "isMuted",
          "setVolume",
          "getVolume",
          "seekTo",
          "getPlayerState",
          "getPlaybackRate",
          "setPlaybackRate",
          "getAvailablePlaybackRates",
          "getPlaybackQuality",
          "setPlaybackQuality",
          "getAvailableQualityLevels",
          "getCurrentTime",
          "getDuration",
          "removeEventListener",
          "getVideoUrl",
          "getVideoEmbedCode",
          "getOptions",
          "getOption",
          "addEventListener",
          "destroy",
          "setSize",
          "getIframe",
        ]),
        (e.exports = t.default);
    },
    363: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = l(r(7729)),
        a = l(r(5152)),
        i = l(r(1256));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = void 0;
      (t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = (0, o.default)();
        if ((s || (s = (0, a.default)(l)), t.events))
          throw new Error("Event handlers cannot be overwritten.");
        if ("string" == typeof e && !document.getElementById(e))
          throw new Error('Element "' + e + '" does not exist.');
        t.events = i.default.proxyEvents(l);
        var u = new Promise(function (r) {
            "object" === (void 0 === e ? "undefined" : n(e)) &&
            e.playVideo instanceof Function
              ? r(e)
              : s.then(function (n) {
                  var o = new n.Player(e, t);
                  return (
                    l.on("ready", function () {
                      r(o);
                    }),
                    null
                  );
                });
          }),
          c = i.default.promisifyPlayer(u, r);
        return (c.on = l.on), (c.off = l.off), c;
      }),
        (e.exports = t.default);
    },
    5152: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        o = r(9586),
        a = (n = o) && n.__esModule ? n : { default: n };
      (t.default = function (e) {
        return new Promise(function (t) {
          if (
            window.YT &&
            window.YT.Player &&
            window.YT.Player instanceof Function
          )
            t(window.YT);
          else {
            var r = "http:" === window.location.protocol ? "http:" : "https:";
            (0, a.default)(r + "//www.youtube.com/iframe_api", function (t) {
              t && e.trigger("error", t);
            });
            var n = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              n && n(), t(window.YT);
            };
          }
        });
      }),
        (e.exports = t.default);
    },
    7974: function (e, t, r) {
      function n() {
        var e;
        try {
          e = t.storage.debug;
        } catch (r) {}
        return (
          !e &&
            "undefined" != typeof process &&
            "env" in process &&
            (e = {}.DEBUG),
          e
        );
      }
      ((t = e.exports = r(3455)).log = function () {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var r = this.useColors;
          if (
            ((e[0] =
              (r ? "%c" : "") +
              this.namespace +
              (r ? " %c" : " ") +
              e[0] +
              (r ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !r)
          )
            return;
          var n = "color: " + this.color;
          e.splice(1, 0, n, "color: inherit");
          var o = 0,
            a = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (o++, "%c" === e && (a = o));
          }),
            e.splice(a, 0, n);
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (r) {}
        }),
        (t.load = n),
        (t.useColors = function () {
          if (
            "undefined" != typeof window &&
            window.process &&
            "renderer" === window.process.type
          )
            return !0;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        }),
        t.enable(n());
    },
    3455: function (e, t, r) {
      var n;
      function o(e) {
        function r() {
          if (r.enabled) {
            var e = r,
              o = +new Date(),
              a = o - (n || o);
            (e.diff = a), (e.prev = n), (e.curr = o), (n = o);
            for (var i = new Array(arguments.length), l = 0; l < i.length; l++)
              i[l] = arguments[l];
            (i[0] = t.coerce(i[0])), "string" != typeof i[0] && i.unshift("%O");
            var s = 0;
            (i[0] = i[0].replace(/%([a-zA-Z%])/g, function (r, n) {
              if ("%%" === r) return r;
              s++;
              var o = t.formatters[n];
              if ("function" == typeof o) {
                var a = i[s];
                (r = o.call(e, a)), i.splice(s, 1), s--;
              }
              return r;
            })),
              t.formatArgs.call(e, i);
            var u = r.log || t.log || console.log.bind(console);
            u.apply(e, i);
          }
        }
        return (
          (r.namespace = e),
          (r.enabled = t.enabled(e)),
          (r.useColors = t.useColors()),
          (r.color = (function (e) {
            var r,
              n = 0;
            for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          })(e)),
          "function" == typeof t.init && t.init(r),
          r
        );
      }
      ((t = e.exports = o.debug = o.default = o).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
              n = r.length,
              o = 0;
            o < n;
            o++
          )
            r[o] &&
              ("-" === (e = r[o].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          var r, n;
          for (r = 0, n = t.skips.length; r < n; r++)
            if (t.skips[r].test(e)) return !1;
          for (r = 0, n = t.names.length; r < n; r++)
            if (t.names[r].test(e)) return !0;
          return !1;
        }),
        (t.humanize = r(3047)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    3047: function (e) {
      var t = 1e3,
        r = 60 * t,
        n = 60 * r,
        o = 24 * n,
        a = 365.25 * o;
      function i(e, t, r) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + r
            : Math.ceil(e / t) + " " + r + "s";
      }
      e.exports = function (e, l) {
        l = l || {};
        var s,
          u = typeof e;
        if ("string" === u && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var i =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!i) return;
            var l = parseFloat(i[1]);
            switch ((i[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return l * a;
              case "days":
              case "day":
              case "d":
                return l * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return l * n;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return l * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return l * t;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return l;
              default:
                return;
            }
          })(e);
        if ("number" === u && !1 === isNaN(e))
          return l.long
            ? i((s = e), o, "day") ||
                i(s, n, "hour") ||
                i(s, r, "minute") ||
                i(s, t, "second") ||
                s + " ms"
            : (function (e) {
                if (e >= o) return Math.round(e / o) + "d";
                if (e >= n) return Math.round(e / n) + "h";
                if (e >= r) return Math.round(e / r) + "m";
                if (e >= t) return Math.round(e / t) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    6725: function (e, t, r) {
      var n = r(3395);
      e.exports = { MDXRenderer: n };
    },
    3395: function (e, t, r) {
      var n = r(9100),
        o = r(319),
        a = r(9713),
        i = r(7316);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = r(7294),
        c = r(4983).mdx,
        f = r(9480).useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          r = e.children,
          a = i(e, ["scope", "children"]),
          l = f(t),
          p = u.useMemo(
            function () {
              if (!r) return null;
              var e = s({ React: u, mdx: c }, l),
                t = Object.keys(e),
                a = t.map(function (t) {
                  return e[t];
                });
              return n(Function, ["_fn"].concat(o(t), ["" + r])).apply(
                void 0,
                [{}].concat(o(a))
              );
            },
            [r, t]
          );
        return u.createElement(p, s({}, a));
      };
    },
    7561: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(7294),
        o = r(6725),
        a = r(5444),
        i = r(9).ZP.div.withConfig({
          displayName: "ContentNav__ContentNavStyles",
          componentId: "sc-1aemgbf-0",
        })([
          "--borderColor:var(--lightGrey);--borderColor:black;display:grid;grid-template-columns:1fr 1fr;@media (max-width:600px){grid-template-columns:1fr;}grid-template-rows:auto auto;border:1.5px solid var(--borderColor);border-radius:1rem;margin:4rem 0;a{display:grid;grid-template-rows:auto 1fr;&:only-child{grid-column:1 / -1;text-align:right;}&:nth-child(2){text-align:right;border-left:1.5px solid var(--borderColor);}text-decoration:none;}p{margin:0;}strong{text-decoration:underline;text-decoration-color:var(--yellow);border-bottom:1.5px solid var(--borderColor);}p,strong{padding:1rem 3rem;}",
        ]);
      function l(e) {
        var t = e.prev,
          r = e.next,
          l = e.pathPrefix;
        return n.createElement(
          i,
          null,
          t &&
            n.createElement(
              a.rU,
              { to: "" + l + t.node.fields.slug },
              n.createElement("strong", null, "← Prev"),
              t.node.frontmatter
                ? n.createElement("p", null, t.node.frontmatter.title)
                : n.createElement(o.MDXRenderer, null, t.node.body)
            ),
          r &&
            n.createElement(
              a.rU,
              { to: "" + l + r.node.fields.slug },
              n.createElement("strong", null, "Next →"),
              r.node.frontmatter
                ? n.createElement("p", null, r.node.frontmatter.title)
                : n.createElement(o.MDXRenderer, null, r.node.body)
            )
        );
      }
    },
    6658: function (e, t, r) {
      "use strict";
      var n = r(9).ZP.div.withConfig({
        displayName: "EditDialogStyles",
        componentId: "ulu8q2-0",
      })([
        "border-left:2px solid var(--yellow);font-size:1.5rem;padding:1rem 2rem;margin:3rem 0;background:var(--imGoingToFaint);p:first-child{margin-top:0;}",
      ]);
      t.Z = n;
    },
    2320: function (e, t, r) {
      "use strict";
      var n = r(9).ZP.header.withConfig({
        displayName: "PostHeaderStyles",
        componentId: "sc-4h76fm-0",
      })([
        "h1{margin-bottom:0;}.postMeta{font-size:1.4rem;font-style:italic;display:grid;grid-gap:1rem;grid-auto-flow:column;justify-content:start;& > *{:not(:last-child):after{content:'×';margin-left:1rem;color:var(--yellow);font-weight:600;font-style:normal;}}}",
      ]);
      t.Z = n;
    },
    3514: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return R;
          },
        });
      var n = r(6156),
        o = r(7294),
        a = (r(5444), r(6725)),
        i = r(2412),
        l = r.n(i),
        s = r(363),
        u = r.n(s);
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(e);
          if (t) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return y(this, r);
        };
      }
      function y(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t) ? m(e) : t;
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                v(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function v(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function P(e) {
        return b(
          b({}, e),
          {},
          { playerVars: b({ autoplay: 0, start: 0, end: 0 }, e.playerVars) }
        );
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(i, e);
        var t,
          r,
          n,
          a = d(i);
        function i(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            v(m((t = a.call(this, e))), "onPlayerReady", function (e) {
              return t.props.onReady(e);
            }),
            v(m(t), "onPlayerError", function (e) {
              return t.props.onError(e);
            }),
            v(m(t), "onPlayerStateChange", function (e) {
              switch ((t.props.onStateChange(e), e.data)) {
                case i.PlayerState.ENDED:
                  t.props.onEnd(e);
                  break;
                case i.PlayerState.PLAYING:
                  t.props.onPlay(e);
                  break;
                case i.PlayerState.PAUSED:
                  t.props.onPause(e);
              }
            }),
            v(m(t), "onPlayerPlaybackRateChange", function (e) {
              return t.props.onPlaybackRateChange(e);
            }),
            v(m(t), "onPlayerPlaybackQualityChange", function (e) {
              return t.props.onPlaybackQualityChange(e);
            }),
            v(m(t), "createPlayer", function () {
              if ("undefined" != typeof document) {
                var e = b(
                  b({}, t.props.opts),
                  {},
                  { videoId: t.props.videoId }
                );
                (t.internalPlayer = u()(t.container, e)),
                  t.internalPlayer.on("ready", t.onPlayerReady),
                  t.internalPlayer.on("error", t.onPlayerError),
                  t.internalPlayer.on("stateChange", t.onPlayerStateChange),
                  t.internalPlayer.on(
                    "playbackRateChange",
                    t.onPlayerPlaybackRateChange
                  ),
                  t.internalPlayer.on(
                    "playbackQualityChange",
                    t.onPlayerPlaybackQualityChange
                  );
              }
            }),
            v(m(t), "resetPlayer", function () {
              return t.internalPlayer.destroy().then(t.createPlayer);
            }),
            v(m(t), "updatePlayer", function () {
              t.internalPlayer.getIframe().then(function (e) {
                t.props.id
                  ? e.setAttribute("id", t.props.id)
                  : e.removeAttribute("id"),
                  t.props.className
                    ? e.setAttribute("class", t.props.className)
                    : e.removeAttribute("class");
              });
            }),
            v(m(t), "getInternalPlayer", function () {
              return t.internalPlayer;
            }),
            v(m(t), "updateVideo", function () {
              if (void 0 !== t.props.videoId && null !== t.props.videoId) {
                var e = !1,
                  r = { videoId: t.props.videoId };
                "playerVars" in t.props.opts &&
                  ((e = 1 === t.props.opts.playerVars.autoplay),
                  "start" in t.props.opts.playerVars &&
                    (r.startSeconds = t.props.opts.playerVars.start),
                  "end" in t.props.opts.playerVars &&
                    (r.endSeconds = t.props.opts.playerVars.end)),
                  e
                    ? t.internalPlayer.loadVideoById(r)
                    : t.internalPlayer.cueVideoById(r);
              } else t.internalPlayer.stopVideo();
            }),
            v(m(t), "refContainer", function (e) {
              t.container = e;
            }),
            (t.container = null),
            (t.internalPlayer = null),
            t
          );
        }
        return (
          (t = i),
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.createPlayer();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                (function (e, t) {
                  return e.id !== t.id || e.className !== t.className;
                })(e, this.props) && this.updatePlayer(),
                  (function (e, t) {
                    return !l()(P(e.opts), P(t.opts));
                  })(e, this.props) && this.resetPlayer(),
                  (function (e, t) {
                    if (e.videoId !== t.videoId) return !0;
                    var r = e.opts.playerVars || {},
                      n = t.opts.playerVars || {};
                    return r.start !== n.start || r.end !== n.end;
                  })(e, this.props) && this.updateVideo();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.internalPlayer.destroy();
              },
            },
            {
              key: "render",
              value: function () {
                return o.createElement(
                  "div",
                  { className: this.props.containerClassName },
                  o.createElement("div", {
                    id: this.props.id,
                    className: this.props.className,
                    ref: this.refContainer,
                  })
                );
              },
            },
          ]) && f(t.prototype, r),
          n && f(t, n),
          i
        );
      })(o.Component);
      v(w, "PlayerState", {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5,
      }),
        (w.defaultProps = {
          videoId: null,
          id: null,
          className: null,
          opts: {},
          containerClassName: "",
          onReady: function () {},
          onError: function () {},
          onPlay: function () {},
          onPause: function () {},
          onEnd: function () {},
          onStateChange: function () {},
          onPlaybackRateChange: function () {},
          onPlaybackQualityChange: function () {},
        });
      var x = w,
        E = (r(5414), r(1424)),
        O = (r(5885), r(256)),
        S = r(3863),
        j = r(7561),
        _ = r(2320),
        C = r(6658),
        k = r(6686);
      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var R = function (e) {
        var t = e.data.mdx,
          r = e.scope,
          n = e.pageContext;
        if (!t)
          return o.createElement(
            "p",
            null,
            "No Post Found? This should be a 404"
          );
        var i =
          "https://github.com/wesbos/wesbos/tree/master/src/" +
          t.fileAbsolutePath.split("/src/")[1];
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(O.Z, {
            image: t.frontmatter.image,
            alt: t.frontmatter.title,
          }),
          o.createElement(
            _.Z,
            null,
            o.createElement(k.k, { post: t }),
            o.createElement(S.Z, null, t.frontmatter.title),
            o.createElement(
              "div",
              { className: "postMeta" },
              o.createElement(
                "time",
                { dateTime: t.frontmatter.date },
                t.frontmatter.date
              ),
              o.createElement("span", null, t.frontmatter.category.join(", ")),
              o.createElement(
                "a",
                { rel: "noopener noreferrer", target: "_blank", href: i },
                "Edit Post ",
                o.createElement(E.JOq, null)
              )
            )
          ),
          o.createElement(
            a.MDXRenderer,
            { scope: D({ YouTube: x }, r) },
            t.body
          ),
          o.createElement(
            C.Z,
            null,
            o.createElement(
              "p",
              null,
              "Find an issue with this post? Think you could clarify, update or add something?"
            ),
            o.createElement(
              "p",
              null,
              "All my posts are available to edit on Github. Any fix, little or small, is appreciated!"
            ),
            o.createElement(
              "p",
              null,
              o.createElement(
                "a",
                { rel: "noopener noreferrer", target: "_blank", href: i },
                o.createElement(E.JOq, null),
                " Edit on Github"
              )
            )
          ),
          o.createElement(j.Z, {
            pathPrefix: n.pathPrefix,
            prev: n.prev,
            next: n.next,
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-1e4bfda89f057c21a5ab.js.map
