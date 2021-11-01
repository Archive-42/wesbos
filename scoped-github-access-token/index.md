
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   <a href="https://wesbos.com/blog" class="current-parent"><span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span></a>
-   [<span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span>](https://wesbos.com/tips)
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



![Get a repo-scoped GitHub Access Token quickly](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAC6UlEQVRIx41V224TMRDNB/LEV/DC1yAeED8BqEggkBDiFSG1qgLbJG2SKtns/e61vbYPmmkSkk221NKRnfXO8ZmZ481ISI1zaFq1n1uloZ2Gsr29M3GjIcJDsiJXuPpew/vZnBz4ZEIKaISCchq/vlT4+DrHxascd2PBamnvHOnohOQg1bpRkEbh6keFT29yfH6bY3nT8LO6kUfvHhH2T6LfUhto46CNhdQWs8sWq5lC5yxUZ3mvVd1RLK1H/QYwpMb8foXrsYff3hS/vQmW/j282QTe5Bbe9BaX12MEUcIHH2Y26suWuuOT07zEJowRxinPUZIjiFIm8cMYKz9AXtZopeb3xVbt6LCbSmlUdY1GCEip9lBa8yxEC6kUdsM5B+scWtGgbdvjGrJ0IRCEIbI8R5ZlCKMIQRAyaO1vNrxvjGEyZy0TB6sFijxljn8KpYZzFkII5HnBhK2UODeYbAtSSMM69FImQgBhlOBmMsXdfIEgjNA0AkVZoShKJGmGoiyZqD+stf0aGlhVoKkyNE3LNamqipVqrfdBh+p2GCR0qkAUrnEzvcNkNoM3mWL8x0OcpIMpDxPKBxW6s0iznEEpplnGnTdbdUPjjELNAVQjIiCLlFWNPsf5lN2wQiklsixn65C6JEnYKmEYIU3TfR3tlqwzBl3XwZgBwrpusFgsucvUbSLKi4IPKcuKCa11e2K6DGR28uapbZxjhRRIOOzwY7UjmH7KdIeVUpyevwn4Vmw2AVarNXtxqH6P2EZzXR7q8XC1+GRjGPScMHhjThSqDtp0mC+XmM8XWPs+Y7Fcwvc3WK99rNZrzoLKQDi00aBtsjRDEqdI4oQ/CNRlakgcJ0jTjMsQxTGiKIbeKx5QqIxGqWtG5wz+NwZTrkRLh+Bi9g3P3r3A8w8v8X76FWUDhKXaB/NLuxnHjqf6nyispEBQJQirlNdKWyhttubdzn1sn+tu68OjP3RJ1rEMWvPe7n/mCaAv9l9+/t3TgiANfgAAAABJRU5ErkJggg==)

<img src="https://wesbos.com/static/e280549277a66f81c4fd16ad0b555fdd/73c85/github-apps.png" alt="Get a repo-scoped GitHub Access Token quickly" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/e280549277a66f81c4fd16ad0b555fdd/d4144/github-apps.png 175w,
/static/e280549277a66f81c4fd16ad0b555fdd/a5370/github-apps.png 350w,
/static/e280549277a66f81c4fd16ad0b555fdd/73c85/github-apps.png 700w,
/static/e280549277a66f81c4fd16ad0b555fdd/4ff95/github-apps.png 1050w,
/static/e280549277a66f81c4fd16ad0b555fdd/64935/github-apps.png 1290w" />

<span class="grit">Get a repo-scoped GitHub Access Token quickly</span>
=======================================================================

November 12, 2020JavaScriptEdit Post

Today I need an access token for github so that I could commit show transcripts for [Syntax](https://syntax.fm/) via some automated scripts.

Has three options:

-   Personal access token
-   oAuth access token
-   Apps access token

The first two give full access to all your repos - public and private. Kinda scary.

So I went the apps route. An app can be scoped to a repo with very fine grain access controls. Most of my time was spent looking for URLs and asking for helpful packages on twitter.

Here is how to to do it quickly:

1.  [Create a new Github App](https://github.com/settings/apps/new). Select the permissions this access token will need. In my case it was just "Read + Write Contents". I also selected "Only on this account" as I only needed the token for myself.
2.  Once created, it will prompt you to make a public key. Download this.
3.  There will be a button to "Install App", click that.
4.  Select which repos you want it to access. You can always change this at <https://github.com/settings/installations> - find your app and click "configure".
5.  Note the "Installation Id" - we will need this.
6.  Note the App ID. Again, find this at the above link.
7.  Make a new directory, `npm init`, and then `npm install github-app-installation-token`. This is handy package to do it all quickly.
8.  Make a new `get-ya-token.js` file like this:

<!-- -->

    const { getToken } = require('github-app-installation-token');

    async function go() {
      const res = await getToken({
        appId: 'from-earlier',
        installationId: 'from-earlier',
        privateKey: `Paste the contents of your private key in here. Use backticks because it's multi-line`
      });
      console.log(res); // your token will be here
    }

    go();

1.  Run it! `node get-ya-token.js`

That should spit out a token.

Hope it helps.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/posts/quick-github-access-token/quick-github-access-token.mdx)

[**← Prev**](https://wesbos.com/parity-purchasing-power/)

Parity Purchasing Power

[**Next →**](https://wesbos.com/new-wesbos-website/)

My New Website! Here are the deets

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
