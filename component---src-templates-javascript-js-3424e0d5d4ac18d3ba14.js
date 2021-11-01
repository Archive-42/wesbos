(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [277],
  {
    7228: function (e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
        return u;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    3646: function (e, t, r) {
      var u = r(7228);
      (e.exports = function (e) {
        if (Array.isArray(e)) return u(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    9100: function (e, t, r) {
      var u = r(9489),
        n = r(7067);
      function o(t, r, D) {
        return (
          n()
            ? ((e.exports = o = Reflect.construct),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = o =
                function (e, t, r) {
                  var n = [null];
                  n.push.apply(n, t);
                  var o = new (Function.bind.apply(e, n))();
                  return r && u(o, r.prototype), o;
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          o.apply(null, arguments)
        );
      }
      (e.exports = o),
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
      var u = r(3646),
        n = r(6860),
        o = r(379),
        D = r(8206);
      (e.exports = function (e) {
        return u(e) || n(e) || o(e) || D();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    379: function (e, t, r) {
      var u = r(7228);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? u(e, t)
              : void 0
          );
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    6794: function (e, t, r) {
      var u = r(9949);
      e.exports = a;
      var n = Object.hasOwnProperty,
        o = /\s/g,
        D = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;
      function a() {
        if (!(this instanceof a)) return new a();
        this.reset();
      }
      function l(e, t) {
        return "string" != typeof e
          ? ""
          : (t || (e = e.toLowerCase()),
            e.trim().replace(D, "").replace(u(), "").replace(o, "-"));
      }
      (a.prototype.slug = function (e, t) {
        for (
          var r = this, u = l(e, !0 === t), o = u;
          n.call(r.occurrences, u);

        )
          r.occurrences[o]++, (u = o + "-" + r.occurrences[o]);
        return (r.occurrences[u] = 0), u;
      }),
        (a.prototype.reset = function () {
          this.occurrences = Object.create(null);
        }),
        (a.slug = l);
    },
    9949: function (e) {
      e.exports = function () {
        return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g;
      };
    },
    6725: function (e, t, r) {
      var u = r(3395);
      e.exports = { MDXRenderer: u };
    },
    3395: function (e, t, r) {
      var u = r(9100),
        n = r(319),
        o = r(9713),
        D = r(7316);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var i = r(7294),
        c = r(4983).mdx,
        s = r(9480).useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          r = e.children,
          o = D(e, ["scope", "children"]),
          a = s(t),
          p = i.useMemo(
            function () {
              if (!r) return null;
              var e = l({ React: i, mdx: c }, a),
                t = Object.keys(e),
                o = t.map(function (t) {
                  return e[t];
                });
              return u(Function, ["_fn"].concat(n(t), ["" + r])).apply(
                void 0,
                [{}].concat(n(o))
              );
            },
            [r, t]
          );
        return i.createElement(p, l({}, o));
      };
    },
    7561: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var u = r(7294),
        n = r(6725),
        o = r(5444),
        D = r(9).ZP.div.withConfig({
          displayName: "ContentNav__ContentNavStyles",
          componentId: "sc-1aemgbf-0",
        })([
          "--borderColor:var(--lightGrey);--borderColor:black;display:grid;grid-template-columns:1fr 1fr;@media (max-width:600px){grid-template-columns:1fr;}grid-template-rows:auto auto;border:1.5px solid var(--borderColor);border-radius:1rem;margin:4rem 0;a{display:grid;grid-template-rows:auto 1fr;&:only-child{grid-column:1 / -1;text-align:right;}&:nth-child(2){text-align:right;border-left:1.5px solid var(--borderColor);}text-decoration:none;}p{margin:0;}strong{text-decoration:underline;text-decoration-color:var(--yellow);border-bottom:1.5px solid var(--borderColor);}p,strong{padding:1rem 3rem;}",
        ]);
      function a(e) {
        var t = e.prev,
          r = e.next,
          a = e.pathPrefix;
        return u.createElement(
          D,
          null,
          t &&
            u.createElement(
              o.rU,
              { to: "" + a + t.node.fields.slug },
              u.createElement("strong", null, "← Prev"),
              t.node.frontmatter
                ? u.createElement("p", null, t.node.frontmatter.title)
                : u.createElement(n.MDXRenderer, null, t.node.body)
            ),
          r &&
            u.createElement(
              o.rU,
              { to: "" + a + r.node.fields.slug },
              u.createElement("strong", null, "Next →"),
              r.node.frontmatter
                ? u.createElement("p", null, r.node.frontmatter.title)
                : u.createElement(n.MDXRenderer, null, r.node.body)
            )
        );
      }
    },
    6658: function (e, t, r) {
      "use strict";
      var u = r(9).ZP.div.withConfig({
        displayName: "EditDialogStyles",
        componentId: "ulu8q2-0",
      })([
        "border-left:2px solid var(--yellow);font-size:1.5rem;padding:1rem 2rem;margin:3rem 0;background:var(--imGoingToFaint);p:first-child{margin-top:0;}",
      ]);
      t.Z = u;
    },
    2320: function (e, t, r) {
      "use strict";
      var u = r(9).ZP.header.withConfig({
        displayName: "PostHeaderStyles",
        componentId: "sc-4h76fm-0",
      })([
        "h1{margin-bottom:0;}.postMeta{font-size:1.4rem;font-style:italic;display:grid;grid-gap:1rem;grid-auto-flow:column;justify-content:start;& > *{:not(:last-child):after{content:'×';margin-left:1rem;color:var(--yellow);font-weight:600;font-style:normal;}}}",
      ]);
      t.Z = u;
    },
    4780: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return B;
          },
        });
      var u = r(6156),
        n = r(7294),
        o = r(6725),
        D = r(1424),
        a = r(5414),
        l = r(3863),
        i = r(7561),
        c = r(2320),
        s = r(6658),
        p = r(9),
        d = p.ZP.div.withConfig({
          displayName: "JavaScriptNotesStyles",
          componentId: "sc-1awmqu7-0",
        })([
          "display:grid;grid-template-columns:minmax(200px,350px) 1fr;gap:5rem;@media (max-width:1100px){grid-template-columns:25% 1fr;}@media (max-width:800px){grid-template-columns:1fr;aside{display:none;}}.gatsby-resp-image-wrapper{margin-left:0 !important;margin-right:0 !important;}.gatsby-resp-image-wrapper{max-width:700px !important;}.gatsby-resp-image-wrapper[style*='max-width: 1500px']{max-width:700px !important;}pre[data-language]{width:100%;margin-left:0;}article{max-width:1000px;}",
        ]),
        m = r(6686),
        f = r(5444),
        E = r(6794),
        F = r(3094),
        g = p.ZP.aside.withConfig({
          displayName: "TableOfContents__StyledTOC",
          componentId: "sc-114yji1-0",
        })([
          "position:sticky;height:100vh;top:0;overflow:auto;@media (min-width:1600px){display:flex;flex-direction:column;position:sticky;top:1rem;align-self:start;overflow-y:auto;height:calc(100vh - 20px);padding-right:2rem;}&::-webkit-scrollbar{width:12px;}&{scrollbar-width:thin;scrollbar-color:var(--yellow) var(--light);}&::-webkit-scrollbar-track{background:var(--light);}&::-webkit-scrollbar-thumb{background-color:var(--yellow);border-radius:6px;border:3px solid var(--light);}h4{margin:1.8rem;}h5{margin:1.5rem 0;}ol,ul{padding-left:3rem;}a{padding:5px;border-radius:5px;display:inline;background:transparent;transition:background 0.05s;&[aria-current='location']{font-weight:900;background:var(--yellow);padding-left:10px;padding-right:10px;&:before{color:black;}}&.currentSection{}&.currentPage{}&.currentModule{}}.videoNumber{font-size:1rem;background:#f3f3f3;padding:2px 5px;border-radius:3px;margin-left:5px;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;}& > ul{font-size:1.2rem;list-style:none;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;margin-top:0;padding-left:0rem;padding-top:0;font-weight:700;margin-bottom:5rem;padding-left:2px;& > li{margin-left:3px;padding-left:10px;border-left:2px solid var(--lightGrey);padding-bottom:1rem;&.currentPage{border-color:var(--dark);}&:hover{border-color:var(--yellow);}}& > li > a{display:inline-block;transform:translateY(-12px);&:before{--size:10px;height:var(--size);width:var(--size);background:white;border:1px solid var(--yellow);border-radius:50%;z-index:1;content:'';position:relative;transform:translateX(-21px) translateY(-12px);display:inline-block;position:absolute;}}ol{padding-left:5px;margin-top:-15px;& > li{list-style:none;a{display:inline-block;padding:5px 0;&:before{content:'#';display:inline-block;color:var(--yellow);z-index:2;margin-right:0.5rem;position:relative;height:auto;transform:none;background:none;width:auto;bottom:auto;font-weight:600;}}}ul{padding-left:1.5rem;list-style:none;}}}li a::before{display:none;}li a{text-decoration:none;}li a:hover,li a:focus{text-decoration:underline;}",
        ]);
      function b(e) {
        e.isCurrent, e.isPartiallyCurrent;
        var t = e.href,
          r = e.location,
          u = t.split("/"),
          n = u[2],
          o = u[3],
          D = r.hash,
          a = r.pathname,
          l = "" + a + D,
          i = [];
        return (
          a.includes(n) && i.push("currentModule"),
          a.includes(o) && i.push("currentPage"),
          l === t && i.push("currentSection"),
          { className: i.join(" ") }
        );
      }
      function h(e) {
        var t = e.activeId,
          r = e.currentPage,
          u = (0, f.K2)("1345722079").allMdx.nodes,
          o = (0, f.p2)("toc"),
          D = Object.entries((0, F.Z)(u));
        return n.createElement(
          g,
          o,
          D.map(function (e) {
            var u = e[0],
              o = e[1];
            return n.createElement(
              n.Fragment,
              { key: u },
              n.createElement(l.Z, { as: "h5" }, "Module ", u),
              n.createElement(
                "ul",
                null,
                o.map(function (e, u) {
                  var o = e.tocTitle.split(" - "),
                    D = o[0],
                    a = o.slice(1).join(" - ");
                  return n.createElement(
                    n.Fragment,
                    { key: e.tocTitle + "-" + u },
                    n.createElement(
                      "li",
                      {
                        className:
                          r === "/" + e.slug + "/" ? "currentPage" : "",
                      },
                      n.createElement(
                        f.rU,
                        { getProps: b, to: "/javascript/" + e.slug },
                        a,
                        n.createElement(
                          "span",
                          { className: "videoNumber" },
                          "Part ",
                          D
                        )
                      ),
                      e.tocChild
                        ? n.createElement(
                            "ol",
                            null,
                            e.tocChild.map(function (r, u) {
                              return n.createElement(
                                n.Fragment,
                                { key: r.title + "-" + u },
                                n.createElement(
                                  "li",
                                  null,
                                  n.createElement(
                                    f.rU,
                                    {
                                      getProps: b,
                                      to:
                                        "/javascript/" +
                                        e.slug +
                                        "/#" +
                                        (0, E.slug)(r.title, !1),
                                      "aria-current":
                                        r.url === "#" + t ? "location" : "",
                                    },
                                    r.title
                                  ),
                                  null != r && r.items
                                    ? n.createElement(
                                        "ul",
                                        null,
                                        r.items.map(function (r, u) {
                                          return n.createElement(
                                            "li",
                                            { key: r.title + "-" + u },
                                            n.createElement(
                                              f.rU,
                                              {
                                                getProps: b,
                                                to:
                                                  "/javascript/" +
                                                  e.slug +
                                                  "/#" +
                                                  (0, E.slug)(r.title, !1),
                                                "aria-current":
                                                  r.url === "#" + t
                                                    ? "location"
                                                    : "",
                                              },
                                              r.title
                                            )
                                          );
                                        })
                                      )
                                    : null
                                )
                              );
                            })
                          )
                        : null
                    )
                  );
                })
              )
            );
          })
        );
      }
      var x = (0, n.memo)(h),
        y = r(18);
      function C(e) {
        return e
          ? e.reduce(function (e, t) {
              return (
                t.url && e.push(t.url.slice(1)),
                t.items && e.push.apply(e, (0, y.Z)(C(t.items))),
                e
              );
            }, [])
          : [];
      }
      var v = p.ZP.div.withConfig({
        displayName: "beginnerJavaScript__BannerStyles",
        componentId: "kd80iw-0",
      })([
        "display:grid;grid-template-columns:auto 1fr;font-size:12px;gap:1rem;align-items:stretch;background:#1a69d0;color:white;margin:2rem 0;font-family:var(--baseFont);p{margin:5px 0;}a{text-decoration-color:var(--yellow);color:white;}strong{color:var(--yellow);}img{height:100%;align-self:stretch;width:220px;object-fit:contain;@media(max-width:600px){display:none;}}.text{padding:0 1rem;}",
      ]);
      function w() {
        return n.createElement(
          v,
          null,
          n.createElement(
            "div",
            null,
            n.createElement("img", {
              src: "https://images.wesbos.com/upload/w_700,q_auto,f_auto/v1621453897/wesbos.com/bjs.png",
              alt: "Beginner JavaScript",
            })
          ),
          n.createElement(
            "div",
            { class: "text" },
            n.createElement(
              "p",
              null,
              "Enjoy these notes? Want to Slam Dunk JavaScript?"
            ),
            n.createElement(
              "p",
              null,
              "These are notes based on my ",
              n.createElement(
                "a",
                { href: "https://BeginnerJavaScript.com", target: "_blank" },
                "Beginner JavaScript"
              ),
              " Video Course. It's a fun, exercise heavy approach to learning Modern JavaScript from scratch."
            ),
            n.createElement(
              "p",
              null,
              "Use the code ",
              n.createElement("strong", null, "BEGINNERJS"),
              " for an extra $10 off."
            ),
            n.createElement(
              "p",
              null,
              n.createElement(
                "a",
                { href: "https://BeginnerJavaScript.com", target: "_blank" },
                "BeginnerJavaScript.com"
              )
            )
          )
        );
      }
      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
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
      var B = function (e) {
        var t = e.data.mdx,
          r = e.scope,
          u = e.pageContext,
          p = (function (e) {
            var t = (0, n.useState)(""),
              r = t[0],
              u = t[1],
              o = (0, n.useState)(!0),
              D = o[0],
              a = o[1];
            return (
              (0, n.useEffect)(
                function () {
                  var t = new IntersectionObserver(
                    function (e) {
                      e.forEach(function (e) {
                        if (e.isIntersecting && (u(e.target.id), D)) {
                          a(!1);
                          var t = document.querySelector(
                            'a[href*="' + e.target.id + '"]'
                          );
                          t && t.scrollIntoView({ block: "center" });
                        }
                      });
                    },
                    { rootMargin: "0% 0% -80% 0%" }
                  );
                  return (
                    e.forEach(function (e) {
                      var r = document.getElementById(e);
                      r && t.observe(r);
                    }),
                    function () {
                      e.forEach(function (e) {
                        var r = document.getElementById(e);
                        r && t.unobserve(r);
                      });
                    }
                  );
                },
                [e]
              ),
              r
            );
          })(C(t.tableOfContents.items));
        if (!t)
          return n.createElement(
            "p",
            null,
            "No Post Found? This should be a 404"
          );
        var f =
          "https://github.com/wesbos/wesbos/tree/master/src/" +
          t.fileAbsolutePath.split("/src/")[1];
        return n.createElement(
          d,
          null,
          n.createElement(x, { activeId: p, currentPage: u.slug }),
          n.createElement(
            "article",
            null,
            n.createElement(
              c.Z,
              null,
              n.createElement(m.k, { post: t }),
              n.createElement(l.Z, null, t.frontmatter.title),
              n.createElement(w, null),
              n.createElement(
                "div",
                { className: "postMeta" },
                n.createElement(
                  "span",
                  null,
                  t.frontmatter.category.join(", ")
                ),
                n.createElement(
                  "a",
                  { rel: "noopener noreferrer", target: "_blank", href: f },
                  "Edit Post ",
                  n.createElement(D.JOq, null)
                )
              )
            ),
            n.createElement(o.MDXRenderer, { scope: O({}, r) }, t.body),
            n.createElement(
              s.Z,
              null,
              n.createElement(
                "p",
                null,
                "Find an issue with this post? Think you could clarify, update or add something?"
              ),
              n.createElement(
                "p",
                null,
                "All my posts are available to edit on Github. Any fix, little or small, is appreciated!"
              ),
              n.createElement(
                "p",
                null,
                n.createElement(
                  "a",
                  { rel: "noopener noreferrer", target: "_blank", href: f },
                  n.createElement(D.JOq, null),
                  " Edit on Github"
                )
              )
            ),
            n.createElement(i.Z, {
              pathPrefix: u.pathPrefix,
              prev: u.prev,
              next: u.next,
            }),
            n.createElement(
              a.q,
              null,
              n.createElement(
                "title",
                null,
                t.frontmatter.title,
                " - Beginner JavaScript - Wes Bos"
              )
            )
          )
        );
      };
    },
    3094: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var u = r(18);
      function n(e) {
        var t = {};
        return (
          e.forEach(function (e) {
            var r,
              n = t[e.frontmatter.section] || [];
            t[e.frontmatter.section] = [].concat((0, u.Z)(n), [
              {
                tocTitle: e.frontmatter.tocTitle,
                slug: e.frontmatter.slug,
                tocChild:
                  null == e || null === (r = e.tableOfContents) || void 0 === r
                    ? void 0
                    : r.items,
              },
            ]);
          }),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-templates-javascript-js-3424e0d5d4ac18d3ba14.js.map
