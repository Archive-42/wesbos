
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   <a href="https://wesbos.com/blog" class="current-parent"><span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span></a>
-   [<span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span>](https://wesbos.com/tips)
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



![My New Website! Here are the deets](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAABV55STYRNT//EABsQAAEEAwAAAAAAAAAAAAAAAAIAAQMSBBET/9oACAEBAAEFAr9SNo4hbIRY41rouW1//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AWV//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPwHEVH//xAAcEAACAgIDAAAAAAAAAAAAAAAAEQESAiMxM6H/2gAIAQEABj8C2SkXjJnZ4Mqco//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFBUWH/2gAIAQEAAT8hpUNWJBCkV0ZaXicUq+xr9JcxEfxP/9oADAMBAAIAAwAAABAHD//EABgRAQEAAwAAAAAAAAAAAAAAAAEAETFh/9oACAEDAQE/EEXTgu1//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFREf/aAAgBAgEBPxCi0UT/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFhgf/aAAgBAQABPxADNshDpZmLXdnA9rEow/BpDlcre8/Y5heYoLO6gBbTQJ//2Q==)

<img src="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg" alt="My New Website! Here are the deets" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/371c801fdafdceaf31fae3f9aa991c37/7d800/sick-new-site.jpg 175w,
/static/371c801fdafdceaf31fae3f9aa991c37/89f4f/sick-new-site.jpg 350w,
/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg 700w,
/static/371c801fdafdceaf31fae3f9aa991c37/9a763/sick-new-site.jpg 1050w,
/static/371c801fdafdceaf31fae3f9aa991c37/f2e3f/sick-new-site.jpg 1400w,
/static/371c801fdafdceaf31fae3f9aa991c37/10a43/sick-new-site.jpg 4032w" />

<span class="grit">My New Website! Here are the deets</span>
============================================================

April 21, 2020JavascriptEdit Post

It's here! My new website.

It's funny how being a developer, you neglect your own website until things are dire.

Over the past year I've been chipping away at building this new site and I'm super happy with how it's turned out.

<span class="grit"><a href="#old-stack" class="hash-anchor before"></a>Old Stack</span>
---------------------------------------------------------------------------------------

My old site, built in 2014, was starting to feel a little creaky.

It was running on WordPress. I had over a decade on WordPress and I still love it, but I'll explain why I left WP in just a second. Here is the tech I used on the old site:

-   WordPress
-   Custom theme
-   LESS for styling
-   jQuery

<span class="grit"><a href="#new-stack" class="hash-anchor before"></a>New Stack</span>
---------------------------------------------------------------------------------------

### <span class="grit"><a href="#gatsby-and-y-not-nextjs" class="hash-anchor before"></a>Gatsby (and y not Next.js)</span>

Gatsby is the framework and despite a few hiccups, I really enjoyed working with it! It makes this site wicked fast without having to really do much at all.

Many of you will ask why I didn't use [Next.js](https://nextjs.org/) — a framework that I love and have built much of my course platform on. I used to say that Gatsby was for websites and Next.js was for apps. I don't believe that to be true as Next.js has per-page opt-in static generation and on-demand page builds in development. So, it comes down to:

1.  I already started on Gatsby over a year ago
2.  The plugin ecosystem for Gatsby is a bit more mature at the time, specifically around compressing, converting, resizing and loading images with [gatsby image](https://www.gatsbyjs.org/packages/gatsby-image/). A bunch of you will say "Just use Cloudinary!" — which I do use for my course platform and I really love — I just wanted this entire project to run without having to pay for anything but hosting.

### <span class="grit"><a href="#styled-components" class="hash-anchor before"></a>Styled Components</span>

All the styling is done with Styled Components. I don't go overboard with components, but I do really enjoy being able to scope my CSS and still use descendant classes. Big fan!

I designed the site myself and I'm really happy with the early 2000s hardcore emo kid vibe.

After years of being a salesman of Operator Mono, [Hoefler&Co](https://www.typography.com/) took notice and hooked me up with a free license for my site.

### <span class="grit"><a href="#mdx" class="hash-anchor before"></a>MDX</span>

Most of my blog posts were already written in Markdown, so I went with MDX which allows you to use React components inside of your markdown. Handy for embedding Video players, graphs or anything else that is already a React component.

If this were a client project, I'd likely go Headless CMS like WordPress w/ GraphQL, Sanity, Prismic or similar.

I don't usually recommend someone use markdown for their content, but in my case I want to have all my content on github, easily editable so the nitpickers can fix things themselves instead of emailing me. 😃

### <span class="grit"><a href="#serverless-functions" class="hash-anchor before"></a>Serverless Functions</span>

There are a few pieces of dynamic content on the footer of this site — the latest Podcast, Tweets, Instagram stories and Instagram posts.

I didn't use Gatsby plugins for these because they would quickly become outdated. Instead I load them on the client once the page loads.

For this I use Amazon's Lambda functions. I loved this workflow of needing a "sip of backend", I just created [a new file in this folder](https://github.com/wesbos/wesbos/tree/master/functions).

I also use Serverless Functions to generate the [Open Graph images](https://github.com/wesbos/wesbos/blob/master/functions/ogimage/ogimage.js). It's just a page on this site that is screenshotted with puppeteer.

### <span class="grit"><a href="#hosting--building" class="hash-anchor before"></a>Hosting + Building</span>

I'm building and hosting it on [Netlify](https://www.netlify.com/). I really like how it's hooked up to github and auto-deploys. Initially the site didn't build at all because apparently 350 images is too many — more in the next section on how we solved that.

I really wanted to maintain a viewable view-source, so after a tweet asking about nicely formatting the compacted HTML, James Vickery built this really cool [gatsby-plugin-prettier-build](https://github.com/jmsv/gatsby-plugin-prettier-build/) plugin that hooks into onPostBuild and runs the HTML through prettier.

Seems weird to un-minify the HTML, but I grew up on view source and want to maintain that for other developers learning today.

### <span class="grit"><a href="#pain-points" class="hash-anchor before"></a>Pain Points</span>

Likely the worst part of this whole stack is the **slow build times**. Gatsby must generate each page before hand, so with 500+ pages, that can take some time.

Gatsby images is literally resizing and making multiple versions of each image, so that also takes lots of time. I have about 350 images, which I don't consider to be *that* many, but it caused big problems.

The build times were getting up to ~25 mins which was really frustrating. Part of me missed being able to cowboy code right on the server and refresh the page to see if something worked (*not all of me, relax*).

There were two big solutions to this: [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) and [Gatsby Parallel Build](https://www.netlify.com/blog/2020/02/25/gatsby-build-speed-improvements-with-parallel-image-processing/).

I am currently running on the latter, and big thanks to [Jason Lengstorf](https://twitter.com/jlengstorf) for helping me get this up and running. My build still takes ~10 mins to build and deploy which is less than excellent, but I have hope for Gatsby incremental builds in the future.

I did try Gatsby Cloud and it was [wicked fast](https://twitter.com/wesbos/status/1237793770739023873). I don't have a good reason why I'm not using that over the previous other than I'm out of time on this project.

**Gatsby queries** was another huge pain point. Only being able to have a dynamic query at a page level is weird. This means you can't do things like query an image unless you have its filename as a string.

The fact that I need to write a GraphQL query that is [8 lines long](https://github.com/wesbos/wesbos/blob/master/src/pages/about.js#L136-L143) to display an image is weird. There are [some solutions](https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05) but nothing that works great. I'm hearing rumbles of a "unified query" in gatsby, so I hope that fixes this!

**Gatsby image also doesn't handle gifs**. At all. I had to write [this component](https://github.com/wesbos/wesbos/blob/master/src/components/Img.js) so that I could display gifs. Seems like something that should be handled inside of gatsby-image.

**Overall I'm happy** with the stack. The few pain points I have are made up quickly by the speed and perf of the site!

All the code to the site is on [github](https://github.com/wesbos/wesbos). I hope you can learn a thing or two from it!

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/posts/new%20Website/New%20Website.mdx)

[**← Prev**](https://wesbos.com/scoped-github-access-token/)

Get a repo-scoped GitHub Access Token quickly

[**Next →**](https://wesbos.com/uses/)

Uses

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
