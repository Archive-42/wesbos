(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [697],
  {
    7228: function (t) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    3646: function (t, e, n) {
      var r = n(7228);
      (t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    9100: function (t, e, n) {
      var r = n(9489),
        a = n(7067);
      function o(e, n, i) {
        return (
          a()
            ? ((t.exports = o = Reflect.construct),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = o =
                function (t, e, n) {
                  var a = [null];
                  a.push.apply(a, e);
                  var o = new (Function.bind.apply(t, a))();
                  return n && r(o, n.prototype), o;
                }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          o.apply(null, arguments)
        );
      }
      (t.exports = o),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    9713: function (t) {
      (t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    7067: function (t) {
      (t.exports = function () {
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
        } catch (t) {
          return !1;
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    6860: function (t) {
      (t.exports = function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    8206: function (t) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    319: function (t, e, n) {
      var r = n(3646),
        a = n(6860),
        o = n(379),
        i = n(8206);
      (t.exports = function (t) {
        return r(t) || a(t) || o(t) || i();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    379: function (t, e, n) {
      var r = n(7228);
      (t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    7464: function (t, e, n) {
      "use strict";
      function r(t) {
        var e = new Date(
          Date.UTC(
            t.getFullYear(),
            t.getMonth(),
            t.getDate(),
            t.getHours(),
            t.getMinutes(),
            t.getSeconds(),
            t.getMilliseconds()
          )
        );
        return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    1554: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              " argument" +
              (t > 1 ? "s" : "") +
              " required, but only " +
              e.length +
              " present"
          );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    8563: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function a(t) {
        return function (e) {
          var n = e || {},
            r = n.width ? String(n.width) : t.defaultWidth;
          return t.formats[r] || t.formats[t.defaultWidth];
        };
      }
      var o = {
          date: a({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: a({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: a({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        i = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function u(t) {
        return function (e, n) {
          var r,
            a = n || {};
          if (
            "formatting" === (a.context ? String(a.context) : "standalone") &&
            t.formattingValues
          ) {
            var o = t.defaultFormattingWidth || t.defaultWidth,
              i = a.width ? String(a.width) : o;
            r = t.formattingValues[i] || t.formattingValues[o];
          } else {
            var u = t.defaultWidth,
              s = a.width ? String(a.width) : t.defaultWidth;
            r = t.values[s] || t.values[u];
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      function s(t) {
        return function (e, n) {
          var r = String(e),
            a = n || {},
            o = a.width,
            i =
              (o && t.matchPatterns[o]) || t.matchPatterns[t.defaultMatchWidth],
            u = r.match(i);
          if (!u) return null;
          var s,
            l = u[0],
            c =
              (o && t.parsePatterns[o]) || t.parsePatterns[t.defaultParseWidth];
          return (
            (s =
              "[object Array]" === Object.prototype.toString.call(c)
                ? (function (t, e) {
                    for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
                  })(c, function (t) {
                    return t.test(l);
                  })
                : (function (t, e) {
                    for (var n in t)
                      if (t.hasOwnProperty(n) && e(t[n])) return n;
                  })(c, function (t) {
                    return t.test(l);
                  })),
            (s = t.valueCallback ? t.valueCallback(s) : s),
            {
              value: (s = a.valueCallback ? a.valueCallback(s) : s),
              rest: r.slice(l.length),
            }
          );
        };
      }
      var l,
        c = {
          code: "en-US",
          formatDistance: function (t, e, n) {
            var a;
            return (
              (n = n || {}),
              (a =
                "string" == typeof r[t]
                  ? r[t]
                  : 1 === e
                  ? r[t].one
                  : r[t].other.replace("{{count}}", e)),
              n.addSuffix ? (n.comparison > 0 ? "in " + a : a + " ago") : a
            );
          },
          formatLong: o,
          formatRelative: function (t, e, n, r) {
            return i[t];
          },
          localize: {
            ordinalNumber: function (t, e) {
              var n = Number(t),
                r = n % 100;
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + "st";
                  case 2:
                    return n + "nd";
                  case 3:
                    return n + "rd";
                }
              return n + "th";
            },
            era: u({
              values: {
                narrow: ["B", "A"],
                abbreviated: ["BC", "AD"],
                wide: ["Before Christ", "Anno Domini"],
              },
              defaultWidth: "wide",
            }),
            quarter: u({
              values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                  "1st quarter",
                  "2nd quarter",
                  "3rd quarter",
                  "4th quarter",
                ],
              },
              defaultWidth: "wide",
              argumentCallback: function (t) {
                return Number(t) - 1;
              },
            }),
            month: u({
              values: {
                narrow: [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ],
                abbreviated: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                wide: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              defaultWidth: "wide",
            }),
            day: u({
              values: {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
              },
              defaultWidth: "wide",
            }),
            dayPeriod: u({
              values: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
              },
              defaultWidth: "wide",
              formattingValues: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
              },
              defaultFormattingWidth: "wide",
            }),
          },
          match: {
            ordinalNumber:
              ((l = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                  return parseInt(t, 10);
                },
              }),
              function (t, e) {
                var n = String(t),
                  r = e || {},
                  a = n.match(l.matchPattern);
                if (!a) return null;
                var o = a[0],
                  i = n.match(l.parsePattern);
                if (!i) return null;
                var u = l.valueCallback ? l.valueCallback(i[0]) : i[0];
                return {
                  value: (u = r.valueCallback ? r.valueCallback(u) : u),
                  rest: n.slice(o.length),
                };
              }),
            era: s({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: "any",
            }),
            quarter: s({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: "any",
              valueCallback: function (t) {
                return t + 1;
              },
            }),
            month: s({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: "any",
            }),
            day: s({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: "any",
            }),
            dayPeriod: s({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: "any",
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: "any",
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
    },
    5235: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(1554);
      function a(t) {
        (0, r.Z)(1, arguments);
        var e = Object.prototype.toString.call(t);
        return t instanceof Date ||
          ("object" == typeof t && "[object Date]" === e)
          ? new Date(t.getTime())
          : "number" == typeof t || "[object Number]" === e
          ? new Date(t)
          : (("string" != typeof t && "[object String]" !== e) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
    },
    6725: function (t, e, n) {
      var r = n(3395);
      t.exports = { MDXRenderer: r };
    },
    3395: function (t, e, n) {
      var r = n(9100),
        a = n(319),
        o = n(9713),
        i = n(7316);
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                o(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var l = n(7294),
        c = n(4983).mdx,
        d = n(9480).useMDXScope;
      t.exports = function (t) {
        var e = t.scope,
          n = t.children,
          o = i(t, ["scope", "children"]),
          u = d(e),
          f = l.useMemo(
            function () {
              if (!n) return null;
              var t = s({ React: l, mdx: c }, u),
                e = Object.keys(t),
                o = e.map(function (e) {
                  return t[e];
                });
              return r(Function, ["_fn"].concat(a(e), ["" + n])).apply(
                void 0,
                [{}].concat(a(o))
              );
            },
            [n, e]
          );
        return l.createElement(f, s({}, o));
      };
    },
    9446: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return D;
        },
      });
      var r = n(7294),
        a = n(1424),
        o = n(5444),
        i = n(5235),
        u = n(1554);
      function s(t, e) {
        (0, u.Z)(2, arguments);
        var n = (0, i.Z)(t),
          r = (0, i.Z)(e),
          a = n.getTime() - r.getTime();
        return a < 0 ? -1 : a > 0 ? 1 : a;
      }
      function l(t, e) {
        (0, u.Z)(2, arguments);
        var n = (0, i.Z)(t),
          r = (0, i.Z)(e),
          a = n.getFullYear() - r.getFullYear(),
          o = n.getMonth() - r.getMonth();
        return 12 * a + o;
      }
      function c(t) {
        (0, u.Z)(1, arguments);
        var e = (0, i.Z)(t);
        return e.setHours(23, 59, 59, 999), e;
      }
      function d(t) {
        (0, u.Z)(1, arguments);
        var e = (0, i.Z)(t),
          n = e.getMonth();
        return (
          e.setFullYear(e.getFullYear(), n + 1, 0),
          e.setHours(23, 59, 59, 999),
          e
        );
      }
      function f(t) {
        (0, u.Z)(1, arguments);
        var e = (0, i.Z)(t);
        return c(e).getTime() === d(e).getTime();
      }
      function m(t, e) {
        (0, u.Z)(2, arguments);
        var n,
          r = (0, i.Z)(t),
          a = (0, i.Z)(e),
          o = s(r, a),
          c = Math.abs(l(r, a));
        if (c < 1) n = 0;
        else {
          1 === r.getMonth() && r.getDate() > 27 && r.setDate(30),
            r.setMonth(r.getMonth() - o * c);
          var d = s(r, a) === -o;
          f((0, i.Z)(t)) && 1 === c && 1 === s(t, a) && (d = !1),
            (n = o * (c - Number(d)));
        }
        return 0 === n ? 0 : n;
      }
      function h(t, e) {
        (0, u.Z)(2, arguments);
        var n = (0, i.Z)(t),
          r = (0, i.Z)(e);
        return n.getTime() - r.getTime();
      }
      function p(t, e) {
        (0, u.Z)(2, arguments);
        var n = h(t, e) / 1e3;
        return n > 0 ? Math.floor(n) : Math.ceil(n);
      }
      var g = n(8563);
      function b(t) {
        return (function (t, e) {
          if (null == t)
            throw new TypeError(
              "assign requires that input parameter not be null or undefined"
            );
          for (var n in (e = e || {})) e.hasOwnProperty(n) && (t[n] = e[n]);
          return t;
        })({}, t);
      }
      var v = n(7464),
        y = 1440,
        w = 43200;
      var x = n(5414),
        M = n(4080);
      function D(t) {
        var e = t.tip;
        return r.createElement(
          M.W,
          { className: "tipMeta" },
          r.createElement(
            o.rU,
            { to: "/tip/" + e.frontmatter.slug, title: "View Tip Details" },
            r.createElement(a.$PT, null),
            " Deets"
          ),
          r.createElement(x.q, null, r.createElement("title", null, e.excerpt)),
          r.createElement(
            o.rU,
            { to: "/tip/" + e.frontmatter.slug, title: "View Tip Details" },
            r.createElement(
              "time",
              { dateTime: e.frontmatter.date },
              (function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                (0, u.Z)(2, arguments);
                var r = n.locale || g.Z;
                if (!r.formatDistance)
                  throw new RangeError(
                    "locale must contain formatDistance property"
                  );
                var a = s(t, e);
                if (isNaN(a)) throw new RangeError("Invalid time value");
                var o,
                  l,
                  c = b(n);
                (c.addSuffix = Boolean(n.addSuffix)),
                  (c.comparison = a),
                  a > 0
                    ? ((o = (0, i.Z)(e)), (l = (0, i.Z)(t)))
                    : ((o = (0, i.Z)(t)), (l = (0, i.Z)(e)));
                var d,
                  f = p(l, o),
                  h = ((0, v.Z)(l) - (0, v.Z)(o)) / 1e3,
                  x = Math.round((f - h) / 60);
                if (x < 2)
                  return n.includeSeconds
                    ? f < 5
                      ? r.formatDistance("lessThanXSeconds", 5, c)
                      : f < 10
                      ? r.formatDistance("lessThanXSeconds", 10, c)
                      : f < 20
                      ? r.formatDistance("lessThanXSeconds", 20, c)
                      : f < 40
                      ? r.formatDistance("halfAMinute", null, c)
                      : f < 60
                      ? r.formatDistance("lessThanXMinutes", 1, c)
                      : r.formatDistance("xMinutes", 1, c)
                    : 0 === x
                    ? r.formatDistance("lessThanXMinutes", 1, c)
                    : r.formatDistance("xMinutes", x, c);
                if (x < 45) return r.formatDistance("xMinutes", x, c);
                if (x < 90) return r.formatDistance("aboutXHours", 1, c);
                if (x < y) {
                  var M = Math.round(x / 60);
                  return r.formatDistance("aboutXHours", M, c);
                }
                if (x < 2520) return r.formatDistance("xDays", 1, c);
                if (x < w) {
                  var D = Math.round(x / y);
                  return r.formatDistance("xDays", D, c);
                }
                if (x < 86400)
                  return (
                    (d = Math.round(x / w)),
                    r.formatDistance("aboutXMonths", d, c)
                  );
                if ((d = m(l, o)) < 12) {
                  var S = Math.round(x / w);
                  return r.formatDistance("xMonths", S, c);
                }
                var P = d % 12,
                  Z = Math.floor(d / 12);
                return P < 3
                  ? r.formatDistance("aboutXYears", Z, c)
                  : P < 9
                  ? r.formatDistance("overXYears", Z, c)
                  : r.formatDistance("almostXYears", Z + 1, c);
              })(new Date(e.frontmatter.date), new Date(), { addSuffix: !0 })
            )
          ),
          r.createElement(
            "a",
            { href: e.frontmatter.tweetURL, title: "Link to original tweet" },
            r.createElement(a.JUd, { className: "twitter" }),
            " Tweet"
          )
        );
      }
    },
    4080: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return u;
        },
      });
      var r = n(9),
        a = n(8896),
        o = n(2933),
        i = r.ZP.div.withConfig({
          displayName: "TipStyles",
          componentId: "f7f0we-0",
        })(
          [
            "border-bottom:2px solid var(--yellow);padding-bottom:2rem;margin-bottom:2rem;display:grid;grid-template-columns:400px 1fr;align-items:center;border:5px solid black;margin-bottom:5rem;position:relative;padding:2rem;grid-gap:2rem;background:url(",
            ");background-size:550px;@media (max-width:800px){grid-template-columns:1fr;}.tipContent{align-self:stretch;display:grid;align-content:start;}p{font-size:2rem;line-height:1.7;}.tipMeta{margin-top:-45px;@media (max-width:800px){margin-top:-20px;}}",
          ],
          a.Z
        ),
        u = r.ZP.div.withConfig({
          displayName: "TipStyles__TipMetaStyles",
          componentId: "f7f0we-1",
        })(
          [
            "font-size:1.5rem;font-style:italic;display:flex;align-self:start;border-top:0;border-bottom:0;right:2rem;background:var(--yellow) url(",
            ");background-size:550px;transform:rotate(-1deg);&:after{display:block;content:'';width:100%;height:100%;position:absolute;background:url(",
            ") top left,url(",
            ") bottom right;background-size:550px;pointer-events:none;}& > *{padding:1rem;flex:auto;line-height:2;display:flex;justify-content:center;align-items:center;flex-grow:2;&:before{content:'';}}a{text-decoration:none;}svg{margin-right:2px;}.twitter{fill:#1da1f2;}",
          ],
          a.Z,
          o.Z,
          o.Z
        );
      e.Z = i;
    },
  },
]);
//# sourceMappingURL=48adafe89565e292d1ac57cb1c9cc5e0a91df794-80fc49276403a6c4e89d.js.map
