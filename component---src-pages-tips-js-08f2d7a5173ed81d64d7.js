(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [262],
  {
    3957: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(7294),
        r = n(5444),
        l = n(9),
        o = n(639),
        i = l.ZP.div.withConfig({
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
      function c(e) {
        var t = e.totalCount,
          n = e.currentPage,
          l = void 0 === n ? 1 : n,
          o = e.pathPrefix,
          c = Math.ceil(t / 10),
          u = l + 1,
          m = l - 1;
        return a.createElement(
          i,
          null,
          a.createElement(
            r.rU,
            { disabled: m <= 0 || null, to: "" + o + m },
            "← Prev 10 please"
          ),
          a.createElement("p", null, "Page ", l, " of ", c),
          a.createElement(
            r.rU,
            { disabled: u > c || null, to: u > c ? null : "" + o + u },
            u > c ? "That's all Folks" : "10 More please →"
          )
        );
      }
    },
    3844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var a = n(7294),
        r = n(5444),
        l = n(6725),
        o = n(5414),
        i = n(256),
        c = (n(5885), n(3863)),
        u = n(4080),
        m = n(3957),
        s = n(9446),
        d = n(6686);
      function g(e) {
        var t = e.data.allMdx,
          n = e.pageContext,
          g = e.path;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            o.q,
            null,
            a.createElement("title", null, "Hot Tips — Page " + n.currentPage)
          ),
          a.createElement(
            c.Z,
            null,
            "🔥 There are ",
            t.totalCount,
            " Hot Tips"
          ),
          a.createElement(
            "p",
            null,
            "Hot tips are spicy lil' nuggets related to web development and tooling that I share on",
            " ",
            a.createElement(
              "a",
              { href: "https://twitter.com/wesbos" },
              "my twitter account"
            ),
            ". I've logged them here to make them easier to find."
          ),
          a.createElement(m.Z, {
            currentPage: n.currentPage,
            totalCount: t.totalCount,
            pathPrefix: "/tips/",
          }),
          a.createElement(
            "div",
            null,
            t.edges.map(function (e, t) {
              var n = e.node;
              return a.createElement(
                u.Z,
                { key: n.frontmatter.slug + "-" + t },
                a.createElement(
                  r.rU,
                  { to: "/tip/" + n.frontmatter.slug },
                  n.frontmatter.videos &&
                    n.frontmatter.videos.map(function (e) {
                      return a.createElement("video", {
                        src: e,
                        key: e,
                        autoPlay: !0,
                        mute: "true",
                        loop: !0,
                      });
                    }),
                  n.frontmatter.images &&
                    n.frontmatter.images.map(function (e, t) {
                      return a.createElement(i.Z, {
                        image: e,
                        key: "image" + t,
                      });
                    })
                ),
                a.createElement(
                  "div",
                  { className: "tipContent" },
                  a.createElement(s.Z, { tip: n }),
                  a.createElement(l.MDXRenderer, null, n.body)
                )
              );
            })
          ),
          a.createElement(d.k, {
            post: {
              frontmatter: {
                slug: g,
                title:
                  "🔥 Hot Tips " +
                  (n.currentPage ? "- Page " + n.currentPage : ""),
              },
            },
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-tips-js-08f2d7a5173ed81d64d7.js.map
