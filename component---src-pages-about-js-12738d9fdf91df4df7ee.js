(self.webpackChunkwes_bos_blog = self.webpackChunkwes_bos_blog || []).push([
  [682],
  {
    5518: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n(7294),
        r = n(5444),
        o = n(3863),
        l = n(256),
        s = n(7970),
        i = n(6686);
      function c(e) {
        var t = e.update,
          n = void 0 === t ? 6e4 : t,
          r = 940001932590,
          o = 572195051960,
          l = (0, a.useState)(Date.now() - r),
          i = l[0],
          c = l[1],
          m = (0, a.useState)(Date.now() - o),
          u = m[0],
          f = m[1];
        return (
          (0, s.Z)(function () {
            c(Date.now() - r), f(Date.now() - o);
          }, n),
          {
            timeSinceStarting: i,
            timeAsYears: Math.floor(i / 1e3 / 60 / 60 / 24 / 365),
            age: u,
            ageAsYears: Math.floor(u / 1e3 / 60 / 60 / 24 / 365),
          }
        );
      }
      function m() {
        var e = c({ update: 100 }).timeSinceStarting;
        return a.createElement(a.Fragment, null, e);
      }
      function u(e) {
        var t = e.data,
          n = e.path,
          s = c({ update: 6e4 }),
          u = s.age,
          f = s.ageAsYears,
          d = (s.timeSinceStarting, s.timeAsYears);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.k, {
            post: {
              frontmatter: {
                slug: n,
                title: "About",
                image:
                  "https://master--wesbos.netlify.app" +
                  t.wes.childImageSharp.fluid.src,
              },
            },
          }),
          a.createElement(o.Z, null, "About"),
          a.createElement("p", null, "Hey, I'm Wes Bos."),
          a.createElement(l.Z, {
            image: t.wes,
            alt: "Wes Bos sits at a table in the direct sunlight pretending to be on his computer",
          }),
          a.createElement(o.Z, { as: "h3" }, "The Skinny…"),
          a.createElement(
            "p",
            null,
            "I'm a web developer, teacher and speaker from Hamilton, Ontario 🇨🇦. I'm",
            " ",
            a.createElement("span", { title: "That's " + u + " ms!" }, f),
            " years old and I've been",
            " ",
            a.createElement(
              "a",
              {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "http://web.archive.org/web/20040608163410/http://www.wesbos.com/",
              },
              "making websites"
            ),
            " ",
            "for about ",
            d,
            " years - or ",
            a.createElement("em", null, "exactly"),
            " ",
            a.createElement(m, null),
            " milliseconds!"
          ),
          a.createElement(
            "p",
            null,
            "I use HTML, CSS and JavaScript. Though constantly changing, my focus right now is React.js, Node, Express, Lambda, Gatsby and Next.js"
          ),
          a.createElement(
            "p",
            null,
            "I create ",
            a.createElement(r.rU, { to: "/courses" }, "online courses"),
            " and run a",
            " ",
            a.createElement(
              "a",
              { href: "https://syntax.fm" },
              "web development podcast"
            ),
            " called Syntax."
          ),
          a.createElement(o.Z, { as: "h3" }, "A little more…"),
          a.createElement(
            "p",
            null,
            a.createElement(
              "strong",
              null,
              "I've been in love with web development"
            ),
            " for over half my life. Seems weird, right? It's a space of constant improvement and new & exciting technology. I consider myself a hacker in that I'm always using technology to solve my life's problems and ambitions."
          ),
          a.createElement(l.Z, {
            image: t.wesandscott,
            alt: "Wes and Scott meet for the very first time",
          }),
          a.createElement(
            "p",
            null,
            "📻 Listen to",
            " ",
            a.createElement(
              "a",
              { href: "https://syntax.fm/show/008/wes-bos-origin-story" },
              "my origin story"
            ),
            " ",
            "if you want a little more info."
          ),
          a.createElement(
            "p",
            null,
            a.createElement("strong", null, "I love to teach."),
            " I got my start teaching with",
            " ",
            a.createElement(
              "a",
              { href: "https://www.canadalearningcode.ca/", target: "_blank" },
              "Ladies Learning Code"
            ),
            " ",
            "and went on to teach part time and full time bootcamps at HackerYou (Now",
            " ",
            a.createElement(
              "a",
              { href: "https://junocollege.com/", target: "_blank" },
              "Juno College"
            ),
            "). I now spend my time making courses, doing workshops and speaking at conferences around the world."
          ),
          a.createElement(
            "p",
            null,
            a.createElement("strong", null, "I live"),
            " in a really cool city called Hamilton in its downtown core in a super old house with my",
            " ",
            a.createElement(
              "a",
              { href: "http://kaitbos.com/" },
              "wife Kaitlin"
            ),
            ", two girls, one boy and a pup named Snickers. We spend our summers at our cottage up in beautiful Northern Ontario."
          ),
          a.createElement(
            "p",
            null,
            a.createElement("strong", null, "I have a few hobbies. "),
            "I've rebuilt hundreds of vintage road racing bikes. I like to fancy myself as a good cook, I’m obsessed with cast iron cookware, smoking meat on my Big Green Egg and have been known to make some pretty killer pulled pork. I've recently dipped my toes into fermentation and curing."
          ),
          a.createElement(l.Z, { image: t.family, alt: "My beautiful Family" })
        );
      }
    },
    7970: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(7294);
      function r(e, t) {
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
//# sourceMappingURL=component---src-pages-about-js-12738d9fdf91df4df7ee.js.map
