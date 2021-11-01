(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [7],
  {
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
          return d;
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
      var i = {
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
        o = {
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
            var i = t.defaultFormattingWidth || t.defaultWidth,
              o = a.width ? String(a.width) : i;
            r = t.formattingValues[o] || t.formattingValues[i];
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
            i = a.width,
            o =
              (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
            u = r.match(o);
          if (!u) return null;
          var s,
            c = u[0],
            d =
              (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth];
          return (
            (s =
              "[object Array]" === Object.prototype.toString.call(d)
                ? (function (t, e) {
                    for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
                  })(d, function (t) {
                    return t.test(c);
                  })
                : (function (t, e) {
                    for (var n in t)
                      if (t.hasOwnProperty(n) && e(t[n])) return n;
                  })(d, function (t) {
                    return t.test(c);
                  })),
            (s = t.valueCallback ? t.valueCallback(s) : s),
            {
              value: (s = a.valueCallback ? a.valueCallback(s) : s),
              rest: r.slice(c.length),
            }
          );
        };
      }
      var c,
        d = {
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
          formatLong: i,
          formatRelative: function (t, e, n, r) {
            return o[t];
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
              ((c = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                  return parseInt(t, 10);
                },
              }),
              function (t, e) {
                var n = String(t),
                  r = e || {},
                  a = n.match(c.matchPattern);
                if (!a) return null;
                var i = a[0],
                  o = n.match(c.parsePattern);
                if (!o) return null;
                var u = c.valueCallback ? c.valueCallback(o[0]) : o[0];
                return {
                  value: (u = r.valueCallback ? r.valueCallback(u) : u),
                  rest: n.slice(i.length),
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
    3957: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var r = n(7294),
        a = n(5444),
        i = n(9),
        o = n(639),
        u = i.ZP.div.withConfig({
          displayName: "Pagination__PaginationStyles",
          componentId: "izjdbu-0",
        })(
          [
            "display:grid;grid-template-columns:auto 1fr auto;text-align:center;margin:2rem 0;background:var(--yellow);justify-items:center;align-items:center;",
            " --rotate:0.243deg;@media (max-width:750px){grid-template-columns:1fr;grid-gap:1rem;}& > *{display:inline;",
            " background-color:var(--light);text-decoration:none;padding:4px;margin:0;box-shadow:0 0 5px 0 rgba(0,0,0,0.1);&:nth-child(1){--rotate:-2deg;margin-left:-10px;}&:nth-child(2){--rotate:2deg;}&:nth-child(3){--rotate:-1.5deg;}&:hover{--rotate:3deg;--scale:1.1;}}a[disabled]{pointer-events:none;text-decoration:line-through;}",
          ],
          o.Z,
          o.Z
        );
      function s(t) {
        var e = t.totalCount,
          n = t.currentPage,
          i = void 0 === n ? 1 : n,
          o = t.pathPrefix,
          s = Math.ceil(e / 10),
          c = i + 1,
          d = i - 1;
        return r.createElement(
          u,
          null,
          r.createElement(
            a.rU,
            { disabled: d <= 0 || null, to: "" + o + d },
            "← Prev 10 please"
          ),
          r.createElement("p", null, "Page ", i, " of ", s),
          r.createElement(
            a.rU,
            { disabled: c > s || null, to: c > s ? null : "" + o + c },
            c > s ? "That's all Folks" : "10 More please →"
          )
        );
      }
    },
    8642: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return nt;
          },
        });
      var r = n(7294),
        a = n(5444),
        i = n(5235),
        o = n(1554);
      function u(t) {
        (0, o.Z)(1, arguments);
        var e = (0, i.Z)(t);
        return !isNaN(e);
      }
      var s = n(8563);
      function c(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function d(t, e) {
        (0, o.Z)(2, arguments);
        var n = (0, i.Z)(t).getTime(),
          r = c(e);
        return new Date(n + r);
      }
      function l(t, e) {
        (0, o.Z)(2, arguments);
        var n = c(e);
        return d(t, -n);
      }
      function m(t, e) {
        for (
          var n = t < 0 ? "-" : "", r = Math.abs(t).toString();
          r.length < e;

        )
          r = "0" + r;
        return n + r;
      }
      var h = {
          y: function (t, e) {
            var n = t.getUTCFullYear(),
              r = n > 0 ? n : 1 - n;
            return m("yy" === e ? r % 100 : r, e.length);
          },
          M: function (t, e) {
            var n = t.getUTCMonth();
            return "M" === e ? String(n + 1) : m(n + 1, 2);
          },
          d: function (t, e) {
            return m(t.getUTCDate(), e.length);
          },
          a: function (t, e) {
            var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              case "aaaa":
              default:
                return "am" === n ? "a.m." : "p.m.";
            }
          },
          h: function (t, e) {
            return m(t.getUTCHours() % 12 || 12, e.length);
          },
          H: function (t, e) {
            return m(t.getUTCHours(), e.length);
          },
          m: function (t, e) {
            return m(t.getUTCMinutes(), e.length);
          },
          s: function (t, e) {
            return m(t.getUTCSeconds(), e.length);
          },
          S: function (t, e) {
            var n = e.length,
              r = t.getUTCMilliseconds();
            return m(Math.floor(r * Math.pow(10, n - 3)), e.length);
          },
        },
        f = 864e5;
      function g(t) {
        (0, o.Z)(1, arguments);
        var e = 1,
          n = (0, i.Z)(t),
          r = n.getUTCDay(),
          a = (r < e ? 7 : 0) + r - e;
        return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
      }
      function w(t) {
        (0, o.Z)(1, arguments);
        var e = (0, i.Z)(t),
          n = e.getUTCFullYear(),
          r = new Date(0);
        r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var a = g(r),
          u = new Date(0);
        u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
        var s = g(u);
        return e.getTime() >= a.getTime()
          ? n + 1
          : e.getTime() >= s.getTime()
          ? n
          : n - 1;
      }
      function v(t) {
        (0, o.Z)(1, arguments);
        var e = w(t),
          n = new Date(0);
        n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
        var r = g(n);
        return r;
      }
      var b = 6048e5;
      function y(t, e) {
        (0, o.Z)(1, arguments);
        var n = e || {},
          r = n.locale,
          a = r && r.options && r.options.weekStartsOn,
          u = null == a ? 0 : c(a),
          s = null == n.weekStartsOn ? u : c(n.weekStartsOn);
        if (!(s >= 0 && s <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var d = (0, i.Z)(t),
          l = d.getUTCDay(),
          m = (l < s ? 7 : 0) + l - s;
        return d.setUTCDate(d.getUTCDate() - m), d.setUTCHours(0, 0, 0, 0), d;
      }
      function p(t, e) {
        (0, o.Z)(1, arguments);
        var n = (0, i.Z)(t, e),
          r = n.getUTCFullYear(),
          a = e || {},
          u = a.locale,
          s = u && u.options && u.options.firstWeekContainsDate,
          d = null == s ? 1 : c(s),
          l = null == a.firstWeekContainsDate ? d : c(a.firstWeekContainsDate);
        if (!(l >= 1 && l <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var m = new Date(0);
        m.setUTCFullYear(r + 1, 0, l), m.setUTCHours(0, 0, 0, 0);
        var h = y(m, e),
          f = new Date(0);
        f.setUTCFullYear(r, 0, l), f.setUTCHours(0, 0, 0, 0);
        var g = y(f, e);
        return n.getTime() >= h.getTime()
          ? r + 1
          : n.getTime() >= g.getTime()
          ? r
          : r - 1;
      }
      function T(t, e) {
        (0, o.Z)(1, arguments);
        var n = e || {},
          r = n.locale,
          a = r && r.options && r.options.firstWeekContainsDate,
          i = null == a ? 1 : c(a),
          u = null == n.firstWeekContainsDate ? i : c(n.firstWeekContainsDate),
          s = p(t, e),
          d = new Date(0);
        d.setUTCFullYear(s, 0, u), d.setUTCHours(0, 0, 0, 0);
        var l = y(d, e);
        return l;
      }
      var M = 6048e5;
      var C = "midnight",
        x = "noon",
        P = "morning",
        k = "afternoon",
        D = "evening",
        U = "night";
      function E(t, e) {
        var n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.floor(r / 60),
          i = r % 60;
        if (0 === i) return n + String(a);
        var o = e || "";
        return n + String(a) + o + m(i, 2);
      }
      function S(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + m(Math.abs(t) / 60, 2)
          : W(t, e);
      }
      function W(t, e) {
        var n = e || "",
          r = t > 0 ? "-" : "+",
          a = Math.abs(t);
        return r + m(Math.floor(a / 60), 2) + n + m(a % 60, 2);
      }
      var Y = {
        G: function (t, e, n) {
          var r = t.getUTCFullYear() > 0 ? 1 : 0;
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(r, { width: "abbreviated" });
            case "GGGGG":
              return n.era(r, { width: "narrow" });
            case "GGGG":
            default:
              return n.era(r, { width: "wide" });
          }
        },
        y: function (t, e, n) {
          if ("yo" === e) {
            var r = t.getUTCFullYear(),
              a = r > 0 ? r : 1 - r;
            return n.ordinalNumber(a, { unit: "year" });
          }
          return h.y(t, e);
        },
        Y: function (t, e, n, r) {
          var a = p(t, r),
            i = a > 0 ? a : 1 - a;
          return "YY" === e
            ? m(i % 100, 2)
            : "Yo" === e
            ? n.ordinalNumber(i, { unit: "year" })
            : m(i, e.length);
        },
        R: function (t, e) {
          return m(w(t), e.length);
        },
        u: function (t, e) {
          return m(t.getUTCFullYear(), e.length);
        },
        Q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "Q":
              return String(r);
            case "QQ":
              return m(r, 2);
            case "Qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
              return n.quarter(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(r, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
              return n.quarter(r, { width: "wide", context: "formatting" });
          }
        },
        q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "q":
              return String(r);
            case "qq":
              return m(r, 2);
            case "qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
              return n.quarter(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(r, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
              return n.quarter(r, { width: "wide", context: "standalone" });
          }
        },
        M: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "M":
            case "MM":
              return h.M(t, e);
            case "Mo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
              return n.month(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(r, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
              return n.month(r, { width: "wide", context: "formatting" });
          }
        },
        L: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "L":
              return String(r + 1);
            case "LL":
              return m(r + 1, 2);
            case "Lo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
              return n.month(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(r, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
              return n.month(r, { width: "wide", context: "standalone" });
          }
        },
        w: function (t, e, n, r) {
          var a = (function (t, e) {
            (0, o.Z)(1, arguments);
            var n = (0, i.Z)(t),
              r = y(n, e).getTime() - T(n, e).getTime();
            return Math.round(r / M) + 1;
          })(t, r);
          return "wo" === e
            ? n.ordinalNumber(a, { unit: "week" })
            : m(a, e.length);
        },
        I: function (t, e, n) {
          var r = (function (t) {
            (0, o.Z)(1, arguments);
            var e = (0, i.Z)(t),
              n = g(e).getTime() - v(e).getTime();
            return Math.round(n / b) + 1;
          })(t);
          return "Io" === e
            ? n.ordinalNumber(r, { unit: "week" })
            : m(r, e.length);
        },
        d: function (t, e, n) {
          return "do" === e
            ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
            : h.d(t, e);
        },
        D: function (t, e, n) {
          var r = (function (t) {
            (0, o.Z)(1, arguments);
            var e = (0, i.Z)(t),
              n = e.getTime();
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
            var r = e.getTime(),
              a = n - r;
            return Math.floor(a / f) + 1;
          })(t);
          return "Do" === e
            ? n.ordinalNumber(r, { unit: "dayOfYear" })
            : m(r, e.length);
        },
        E: function (t, e, n) {
          var r = t.getUTCDay();
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return n.day(r, { width: "short", context: "formatting" });
            case "EEEE":
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        e: function (t, e, n, r) {
          var a = t.getUTCDay(),
            i = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "e":
              return String(i);
            case "ee":
              return m(i, 2);
            case "eo":
              return n.ordinalNumber(i, { unit: "day" });
            case "eee":
              return n.day(a, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return n.day(a, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return n.day(a, { width: "short", context: "formatting" });
            case "eeee":
            default:
              return n.day(a, { width: "wide", context: "formatting" });
          }
        },
        c: function (t, e, n, r) {
          var a = t.getUTCDay(),
            i = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "c":
              return String(i);
            case "cc":
              return m(i, e.length);
            case "co":
              return n.ordinalNumber(i, { unit: "day" });
            case "ccc":
              return n.day(a, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return n.day(a, { width: "narrow", context: "standalone" });
            case "cccccc":
              return n.day(a, { width: "short", context: "standalone" });
            case "cccc":
            default:
              return n.day(a, { width: "wide", context: "standalone" });
          }
        },
        i: function (t, e, n) {
          var r = t.getUTCDay(),
            a = 0 === r ? 7 : r;
          switch (e) {
            case "i":
              return String(a);
            case "ii":
              return m(a, e.length);
            case "io":
              return n.ordinalNumber(a, { unit: "day" });
            case "iii":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return n.day(r, { width: "short", context: "formatting" });
            case "iiii":
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        a: function (t, e, n) {
          var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (e) {
            case "a":
            case "aa":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            case "aaaa":
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        b: function (t, e, n) {
          var r,
            a = t.getUTCHours();
          switch (
            ((r = 12 === a ? x : 0 === a ? C : a / 12 >= 1 ? "pm" : "am"), e)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            case "bbbb":
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        B: function (t, e, n) {
          var r,
            a = t.getUTCHours();
          switch (((r = a >= 17 ? D : a >= 12 ? k : a >= 4 ? P : U), e)) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            case "BBBB":
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        h: function (t, e, n) {
          if ("ho" === e) {
            var r = t.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
          }
          return h.h(t, e);
        },
        H: function (t, e, n) {
          return "Ho" === e
            ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
            : h.H(t, e);
        },
        K: function (t, e, n) {
          var r = t.getUTCHours() % 12;
          return "Ko" === e
            ? n.ordinalNumber(r, { unit: "hour" })
            : m(r, e.length);
        },
        k: function (t, e, n) {
          var r = t.getUTCHours();
          return (
            0 === r && (r = 24),
            "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : m(r, e.length)
          );
        },
        m: function (t, e, n) {
          return "mo" === e
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
            : h.m(t, e);
        },
        s: function (t, e, n) {
          return "so" === e
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
            : h.s(t, e);
        },
        S: function (t, e) {
          return h.S(t, e);
        },
        X: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          if (0 === a) return "Z";
          switch (e) {
            case "X":
              return S(a);
            case "XXXX":
            case "XX":
              return W(a);
            case "XXXXX":
            case "XXX":
            default:
              return W(a, ":");
          }
        },
        x: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "x":
              return S(a);
            case "xxxx":
            case "xx":
              return W(a);
            case "xxxxx":
            case "xxx":
            default:
              return W(a, ":");
          }
        },
        O: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + E(a, ":");
            case "OOOO":
            default:
              return "GMT" + W(a, ":");
          }
        },
        z: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + E(a, ":");
            case "zzzz":
            default:
              return "GMT" + W(a, ":");
          }
        },
        t: function (t, e, n, r) {
          var a = r._originalDate || t;
          return m(Math.floor(a.getTime() / 1e3), e.length);
        },
        T: function (t, e, n, r) {
          return m((r._originalDate || t).getTime(), e.length);
        },
      };
      function N(t, e) {
        switch (t) {
          case "P":
            return e.date({ width: "short" });
          case "PP":
            return e.date({ width: "medium" });
          case "PPP":
            return e.date({ width: "long" });
          case "PPPP":
          default:
            return e.date({ width: "full" });
        }
      }
      function Z(t, e) {
        switch (t) {
          case "p":
            return e.time({ width: "short" });
          case "pp":
            return e.time({ width: "medium" });
          case "ppp":
            return e.time({ width: "long" });
          case "pppp":
          default:
            return e.time({ width: "full" });
        }
      }
      var O = {
          p: Z,
          P: function (t, e) {
            var n,
              r = t.match(/(P+)(p+)?/),
              a = r[1],
              i = r[2];
            if (!i) return N(t, e);
            switch (a) {
              case "P":
                n = e.dateTime({ width: "short" });
                break;
              case "PP":
                n = e.dateTime({ width: "medium" });
                break;
              case "PPP":
                n = e.dateTime({ width: "long" });
                break;
              case "PPPP":
              default:
                n = e.dateTime({ width: "full" });
            }
            return n.replace("{{date}}", N(a, e)).replace("{{time}}", Z(i, e));
          },
        },
        q = n(7464),
        j = ["D", "DD"],
        z = ["YY", "YYYY"];
      function F(t) {
        return -1 !== j.indexOf(t);
      }
      function H(t) {
        return -1 !== z.indexOf(t);
      }
      function L(t, e, n) {
        if ("YYYY" === t)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
        if ("YY" === t)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
        if ("D" === t)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
        if ("DD" === t)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
      }
      var X = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        G = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Q = /^'([^]*?)'?$/,
        B = /''/g,
        A = /[a-zA-Z]/;
      function _(t) {
        return t.match(Q)[1].replace(B, "'");
      }
      var R = n(256),
        I = n(9),
        J = I.ZP.div.withConfig({
          displayName: "PostGrid",
          componentId: "sc-7acrhj-0",
        })(["display:grid;grid-template-columns:1fr;"]),
        V = I.ZP.div.withConfig({
          displayName: "PostGrid__PostGridItem",
          componentId: "sc-7acrhj-1",
        })(
          [
            "display:grid;grid-template-columns:30% 1fr;grid-gap:3rem;border-block-end:1px solid var(--yellow);padding:4rem 0;",
            " @media (max-width:800px){grid-template-columns:1fr;}h3{margin-top:0;margin-bottom:0;}.postMeta{font-size:1.1rem;display:grid;time{padding:0.2rem 0;}ul{margin:0;list-style:none;padding:0;display:flex;li{background:var(--dark);display:inline;color:var(--light);padding:2px;margin-right:4px;}}}",
          ],
          function (t) {
            return !t.hasImage && "\n    grid-template-columns: 1fr;\n  ";
          }
        ),
        K = J,
        $ = n(3863),
        tt = n(3957),
        et = n(6686),
        nt = function (t) {
          var e = t.data,
            n = t.pageContext,
            d = t.path;
          return e
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(tt.Z, {
                  currentPage: n.currentPage,
                  totalCount: e.allMdx.totalCount,
                  pathPrefix: "/blog/",
                }),
                r.createElement(et.k, {
                  post: {
                    frontmatter: {
                      slug: d,
                      title:
                        "Blog " +
                        (n.currentPage ? "- Page " + n.currentPage : ""),
                    },
                  },
                }),
                r.createElement(
                  K,
                  null,
                  e.allMdx &&
                    e.allMdx.edges.map(function (t) {
                      var e = t.node,
                        n = !!e.frontmatter.image;
                      return r.createElement(
                        V,
                        { key: e.id, hasImage: n },
                        e.frontmatter.image &&
                          e.frontmatter.image.childImageSharp &&
                          r.createElement(
                            "div",
                            null,
                            n &&
                              r.createElement(
                                a.rU,
                                { to: e.fields.slug },
                                r.createElement(R.Z, {
                                  image: e.frontmatter.image,
                                })
                              ),
                            r.createElement(
                              "div",
                              { className: "postMeta" },
                              r.createElement(
                                "time",
                                { dateTime: e.frontmatter.date },
                                (function (t, e, n) {
                                  (0, o.Z)(2, arguments);
                                  var r = String(e),
                                    a = n || {},
                                    d = a.locale || s.Z,
                                    m =
                                      d.options &&
                                      d.options.firstWeekContainsDate,
                                    h = null == m ? 1 : c(m),
                                    f =
                                      null == a.firstWeekContainsDate
                                        ? h
                                        : c(a.firstWeekContainsDate);
                                  if (!(f >= 1 && f <= 7))
                                    throw new RangeError(
                                      "firstWeekContainsDate must be between 1 and 7 inclusively"
                                    );
                                  var g = d.options && d.options.weekStartsOn,
                                    w = null == g ? 0 : c(g),
                                    v =
                                      null == a.weekStartsOn
                                        ? w
                                        : c(a.weekStartsOn);
                                  if (!(v >= 0 && v <= 6))
                                    throw new RangeError(
                                      "weekStartsOn must be between 0 and 6 inclusively"
                                    );
                                  if (!d.localize)
                                    throw new RangeError(
                                      "locale must contain localize property"
                                    );
                                  if (!d.formatLong)
                                    throw new RangeError(
                                      "locale must contain formatLong property"
                                    );
                                  var b = (0, i.Z)(t);
                                  if (!u(b))
                                    throw new RangeError("Invalid time value");
                                  var y = (0, q.Z)(b),
                                    p = l(b, y),
                                    T = {
                                      firstWeekContainsDate: f,
                                      weekStartsOn: v,
                                      locale: d,
                                      _originalDate: b,
                                    };
                                  return r
                                    .match(G)
                                    .map(function (t) {
                                      var e = t[0];
                                      return "p" === e || "P" === e
                                        ? (0, O[e])(t, d.formatLong, T)
                                        : t;
                                    })
                                    .join("")
                                    .match(X)
                                    .map(function (n) {
                                      if ("''" === n) return "'";
                                      var r = n[0];
                                      if ("'" === r) return _(n);
                                      var i = Y[r];
                                      if (i)
                                        return (
                                          !a.useAdditionalWeekYearTokens &&
                                            H(n) &&
                                            L(n, e, t),
                                          !a.useAdditionalDayOfYearTokens &&
                                            F(n) &&
                                            L(n, e, t),
                                          i(p, n, d.localize, T)
                                        );
                                      if (r.match(A))
                                        throw new RangeError(
                                          "Format string contains an unescaped latin alphabet character `" +
                                            r +
                                            "`"
                                        );
                                      return n;
                                    })
                                    .join("");
                                })(new Date(e.frontmatter.date), "MMMM d, yyyy")
                              ),
                              r.createElement(
                                "ul",
                                { className: "categories" },
                                e.frontmatter.category.map(function (t) {
                                  return r.createElement("li", { key: t }, t);
                                })
                              )
                            )
                          ),
                        r.createElement(
                          "div",
                          null,
                          r.createElement(
                            $.Z,
                            { as: "h3" },
                            r.createElement(
                              a.rU,
                              { to: e.fields.slug },
                              e.frontmatter.title
                            )
                          ),
                          r.createElement("p", null, e.excerpt)
                        )
                      );
                    })
                ),
                r.createElement(tt.Z, {
                  currentPage: n.currentPage,
                  totalCount: e.allMdx.totalCount,
                  pathPrefix: "/blog/",
                })
              )
            : r.createElement("p", null, "Shooooot! No Post found!");
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-blog-js-a82b2ce9fd607d116c82.js.map
