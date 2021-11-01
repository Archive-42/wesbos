(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [821],
  {
    9061: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n(7294),
        o = (n(5444), n(5414)),
        r = n(3863);
      n(256), n(7970);
      function s(e) {
        e.data;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            o.q,
            null,
            a.createElement("title", null, "Speaking & Training - Wes Bos")
          ),
          a.createElement(r.Z, null, "Speaking and Training"),
          a.createElement(
            "p",
            null,
            "I'm still working on this page, but if you'd like to have me come speak at your conference or do a private workshop at your work, please get in touch with me at ",
            a.createElement(
              "a",
              { href: "mailto:hey@wesbos.com" },
              "hey@wesbos.com"
            ),
            "."
          ),
          a.createElement(
            "p",
            null,
            "I usually like to speak about JavaScript, CSS, Hot Tips, React.js, Node.js and related topics. For workshops, I have pre-made workshops on Gatsby.js, React.js and several other topics. I am able to create custom workshops tailored towards your team."
          ),
          a.createElement(
            "p",
            null,
            "Soon this page will have links to past + upcoming speaking and training events."
          )
        );
      }
    },
    7970: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(7294);
      function o(e, t) {
        var n = (0, a.useRef)();
        (0, a.useEffect)(
          function () {
            n.current = e;
          },
          [e]
        ),
          (0, a.useEffect)(
            function () {
              if (null !== t) {
                var e = setInterval(function () {
                  n.current();
                }, t);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [t]
          );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-speaking-and-training-js-5713f0ee4770739b29cc.js.map
