(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [823],
  {
    4723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n(5444),
        r = n(7294),
        i = n(9),
        l = n(3863),
        o = n(6686),
        c = n(3094),
        s = i.ZP.section.withConfig({
          displayName: "javascript__TOC",
          componentId: "n67txs-0",
        })([
          "display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-gap:2rem;ul{list-style:none;margin:0;padding:0;}li{a{&:before{display:none;}}}",
        ]);
      function u(e) {
        var t = e.data.allMdx,
          n = e.path;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(l.Z, null, "JavaScript Notes & Reference"),
          r.createElement(
            "p",
            null,
            "Hey! Welcome to my Beginner JavaScript Notes + Reference."
          ),
          r.createElement(
            "p",
            null,
            "These notes are a free resource, based on my ",
            r.createElement(
              "a",
              { href: "https://BeginnerJavaScript.com" },
              " Beginner JavaScript Video course "
            ),
            ". They can be used as a stand alone guide, along with the videos or a quick reference for all the different parts of JavaScript like the ",
            r.createElement(
              "a",
              {
                href: "/javascript/02-functions/different-ways-to-declare-functions",
              },
              " different ways to declare a function"
            ),
            "."
          ),
          r.createElement(
            "p",
            null,
            "The code written in these notes is available in the ",
            r.createElement(
              "a",
              { href: "https://github.com/wesbos/beginner-javascript" },
              " Beginner JavaScript repo"
            ),
            " on github."
          ),
          r.createElement(
            "p",
            null,
            "Did I miss something? Think you could add a better example? Find a spelling mistake? All the notes are open source and edits are greatly appreciated!"
          ),
          r.createElement(
            s,
            null,
            Object.entries((0, c.Z)(t.nodes)).map(function (e) {
              var t = e[0],
                n = e[1];
              return r.createElement(
                "div",
                { key: t },
                r.createElement(l.Z, { as: "h3" }, t),
                r.createElement(
                  "ul",
                  null,
                  n.map(function (e) {
                    return r.createElement(
                      "li",
                      { key: e.tocTitle },
                      r.createElement(
                        a.rU,
                        { to: "/javascript/" + e.slug },
                        e.tocTitle
                      )
                    );
                  })
                )
              );
            })
          ),
          r.createElement(o.k, {
            post: {
              frontmatter: { slug: n, title: "Beginner JavaScript Notes" },
            },
          })
        );
      }
    },
    3094: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(18);
      function r(e) {
        var t = {};
        return (
          e.forEach(function (e) {
            var n,
              r = t[e.frontmatter.section] || [];
            t[e.frontmatter.section] = [].concat((0, a.Z)(r), [
              {
                tocTitle: e.frontmatter.tocTitle,
                slug: e.frontmatter.slug,
                tocChild:
                  null == e || null === (n = e.tableOfContents) || void 0 === n
                    ? void 0
                    : n.items,
              },
            ]);
          }),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-javascript-js-99c5ef597074edb3b714.js.map
