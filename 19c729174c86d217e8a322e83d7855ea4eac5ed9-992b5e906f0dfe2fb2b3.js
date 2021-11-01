(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [247],
  {
    1496: function (e, t, a) {
      "use strict";
      var r = a(5318);
      t.Z = void 0;
      var i,
        n = r(a(1506)),
        s = r(a(5354)),
        d = r(a(7316)),
        o = r(a(7154)),
        l = r(a(7294)),
        u = r(a(5697)),
        c = function (e) {
          var t = (0, o.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && y && !!window.matchMedia(t).matches;
        },
        g = function (e) {
          var t = e.fluid,
            a = e.fixed,
            r = p(t || a || []);
          return r && r.src;
        },
        p = function (e) {
          if (
            y &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        h = Object.create({}),
        m = function (e) {
          var t = c(e),
            a = g(t);
          return h[a] || !1;
        },
        b =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        y = "undefined" != typeof window,
        S = y && window.IntersectionObserver,
        v = new WeakMap();
      function w(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r &&
              l.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n,
              }),
            a &&
              l.default.createElement("source", {
                media: i,
                srcSet: a,
                sizes: n,
              })
          );
        });
      }
      function E(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function L(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return l.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function R(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return l.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function I(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var O = function (e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), v.set(e, t)),
            function () {
              a.unobserve(e), v.delete(e);
            }
          );
        },
        x = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            d = e.height ? 'height="' + e.height + '" ' : "",
            o = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            l = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? I(e, !0) : "") + I(e);
              })
              .join("") +
            "<img " +
            l +
            s +
            d +
            a +
            r +
            t +
            n +
            i +
            o +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        V = l.default.forwardRef(function (e, t) {
          var a = e.src,
            r = e.imageVariants,
            i = e.generateSources,
            n = e.spreadProps,
            s = e.ariaHidden,
            d = l.default.createElement(
              z,
              (0, o.default)({ ref: t, src: a }, n, { ariaHidden: s })
            );
          return r.length > 1
            ? l.default.createElement("picture", null, i(r), d)
            : d;
        }),
        z = l.default.forwardRef(function (e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            u = e.onError,
            c = e.loading,
            f = e.draggable,
            g = e.ariaHidden,
            p = (0, d.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return l.default.createElement(
            "img",
            (0, o.default)(
              { "aria-hidden": g, sizes: a, srcSet: r, src: i },
              p,
              {
                onLoad: s,
                onError: u,
                ref: t,
                loading: c,
                draggable: f,
                style: (0, o.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  n
                ),
              }
            )
          );
        });
      z.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var C = (function (e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = y && m(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !b && S && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (y && (b || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (a.imageRef = l.default.createRef()),
            (a.placeholderRef = t.placeholderRef || l.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, s.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            if (
              (this.setState({ isHydrated: y }),
              this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = O(e, function () {
                var e = m(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function () {
            var e, t, a;
            (e = this.props),
              (t = c(e)),
              (a = g(t)) && (h[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function () {
            var e = c(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              d = void 0 === s ? {} : s,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              g = e.placeholderClassName,
              h = e.fluid,
              m = e.fixed,
              b = e.backgroundColor,
              y = e.durationFadeIn,
              S = e.Tag,
              v = e.itemProp,
              E = e.loading,
              I = e.draggable,
              O = h || m;
            if (!O) return null;
            var C = !1 === this.state.fadeIn || this.state.imgLoaded,
              H = !0 === this.state.fadeIn && !this.state.imgCached,
              k = (0, o.default)(
                {
                  opacity: C ? 1 : 0,
                  transition: H ? "opacity " + y + "ms" : "none",
                },
                d
              ),
              T = "boolean" == typeof b ? "lightgray" : b,
              j = { transitionDelay: y + "ms" },
              P = (0, o.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                H && j,
                d,
                f
              ),
              W = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: P,
                className: g,
                itemProp: v,
              },
              N = this.state.isHydrated ? p(O) : O[0];
            if (h)
              return l.default.createElement(
                S,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, o.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: N.maxWidth ? N.maxWidth + "px" : null,
                      maxHeight: N.maxHeight ? N.maxHeight + "px" : null,
                    },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(N.srcSet),
                },
                l.default.createElement(S, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / N.aspectRatio + "%",
                  },
                }),
                T &&
                  l.default.createElement(S, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, o.default)(
                      {
                        backgroundColor: T,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      H && j
                    ),
                  }),
                N.base64 &&
                  l.default.createElement(V, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: N.base64,
                    spreadProps: W,
                    imageVariants: O,
                    generateSources: R,
                  }),
                N.tracedSVG &&
                  l.default.createElement(V, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: N.tracedSVG,
                    spreadProps: W,
                    imageVariants: O,
                    generateSources: L,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    "picture",
                    null,
                    w(O),
                    l.default.createElement(z, {
                      alt: a,
                      title: t,
                      sizes: N.sizes,
                      src: N.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: N.srcSet,
                      style: k,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: E,
                      draggable: I,
                    })
                  ),
                this.addNoScript &&
                  l.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: x(
                        (0, o.default)({ alt: a, title: t, loading: E }, N, {
                          imageVariants: O,
                        })
                      ),
                    },
                  })
              );
            if (m) {
              var q = (0, o.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: N.width,
                  height: N.height,
                },
                n
              );
              return (
                "inherit" === n.display && delete q.display,
                l.default.createElement(
                  S,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: q,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(N.srcSet),
                  },
                  T &&
                    l.default.createElement(S, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, o.default)(
                        {
                          backgroundColor: T,
                          width: N.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: N.height,
                        },
                        H && j
                      ),
                    }),
                  N.base64 &&
                    l.default.createElement(V, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: N.base64,
                      spreadProps: W,
                      imageVariants: O,
                      generateSources: R,
                    }),
                  N.tracedSVG &&
                    l.default.createElement(V, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: N.tracedSVG,
                      spreadProps: W,
                      imageVariants: O,
                      generateSources: L,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      "picture",
                      null,
                      w(O),
                      l.default.createElement(z, {
                        alt: a,
                        title: t,
                        width: N.width,
                        height: N.height,
                        sizes: N.sizes,
                        src: N.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: N.srcSet,
                        style: k,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: E,
                        draggable: I,
                      })
                    ),
                  this.addNoScript &&
                    l.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: x(
                          (0, o.default)({ alt: a, title: t, loading: E }, N, {
                            imageVariants: O,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(l.default.Component);
      C.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var H = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        k = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number,
        });
      function T(e) {
        return function (t, a, r) {
          var i;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                r +
                "`, but their values are both `undefined`."
            );
          u.default.checkPropTypes((((i = {})[a] = e), i), t, "prop", r);
        };
      }
      C.propTypes = {
        resolutions: H,
        sizes: k,
        fixed: T(u.default.oneOfType([H, u.default.arrayOf(H)])),
        fluid: T(u.default.oneOfType([k, u.default.arrayOf(k)])),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      };
      var j = C;
      t.Z = j;
    },
    256: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = a(9756),
        i = a(7294),
        n = a(1496);
      function s(e) {
        var t = e.image,
          a = (0, r.Z)(e, ["image"]);
        return t
          ? "gif" === t.extension
            ? i.createElement("img", Object.assign({ src: t.publicURL }, a))
            : i.createElement(
                n.Z,
                Object.assign({ fluid: t.childImageSharp.fluid }, a)
              )
          : null;
      }
    },
  },
]);
//# sourceMappingURL=19c729174c86d217e8a322e83d7855ea4eac5ed9-992b5e906f0dfe2fb2b3.js.map
