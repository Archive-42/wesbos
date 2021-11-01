
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   <a href="https://wesbos.com/blog" class="current-parent"><span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span></a>
-   [<span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span>](https://wesbos.com/tips)
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



<span class="grit">Parity Purchasing Power</span>
=================================================

January 04, 2021OtherEdit Post

For the last ~5 years I've been offering PPP discounts on [my web development courses](https://wesbos.com/courses) for developers in countries where their purchasing power isn't as strong as the US, Canada and Parts of Europe.

PPP Discounts are awesome because:

1.  It makes my web development training content accessible to many more devs around the world regardless of their income level. I've received tons of amazing stories of people using web development to increase their income and quality of life.
2.  It cuts down on piracy and CC theft. I'd rather make less money, than $0 (piracy) or -$15 (Credit Card Fraud)
3.  It helps sales. I'm running a business here at the end of the day, and yes this is a good thing to do, but it also helps sell more product. Win-win!

I've received hundreds of questions about it, and I'm happy to see that it has caught on with other course creators!

I recorded this [Syntax.fm Podcast](https://syntax.fm/show/233/hasty-treat-purchasing-power-parity) detailing everything (seriously listen to this!), but I thought I'd log my most common questions here.

### <span class="grit"><a href="#how-do-you-detect-the-country" class="hash-anchor before"></a>How do you Detect the country?</span>

I use a cloudflare on all my websites, so Cloudflare [sends a header](https://support.cloudflare.com/hc/en-us/articles/200168236-Configuring-Cloudflare-IP-Geolocation) on every request.

I use this code to both display the coupon code banner when visiting the site from a supported country, as well as when validating the coupon against the requesting country.

My platform is 100% custom so I'm able to do things like coupon codes that are limited to a specific country.

### <span class="grit"><a href="#how-do-you-calculate-the-discount" class="hash-anchor before"></a>How do you calculate the discount?</span>

I've been running this for 4+ years and i've had hundreds of emails from devs in different countries. I simply asked them how much a typical dev makes in a year, and how much would be reasonable.

These values change as economies do and the US dollar fluctuates, so you do need to stay on top of it.

It's not perfect, but it works well for me. There are dozens of github packages, and even a few SaaS apps that now do this for you. I don't use any of them, but I know lots of people do. Just search github for them.

Other ways to calculate this data:

-   [Big Mac Index](https://en.wikipedia.org/wiki/Big_Mac_Index) - based on how much a Big Mac is in each country
-   [Spotify Pricing](https://mts.io/projects/spotify-pricing/) in different countries
-   [PPP Data from World Bank](https://data.worldbank.org/indicator/PA.NUS.PPP)

I don't make my list public because I am not an economist and I don't want to be in the middle of some sort of economics fight choosing what is fair.

### <span class="grit"><a href="#what-about-vpns-people-are-gonna-cheat-lol-dumass" class="hash-anchor before"></a>WHAT ABOUT VPNS?!?! PEOPLE ARE GONNA CHEAT!! LOL DUMASS!</span>

People do cheat it, but not enough that it's a big problem. In general, I make more money from these discounts than I lose from people cheating it.

Here are a few things to consider:

1.  Most people aren't willing to put their credit card into a sketchy VPN
2.  Most people are good and want to support me as a content creator
3.  You can check that the country on their credit card is the same as the country they are using a discount for
4.  You can disable accounts when things look fishy. (I'm looking at you Anthony from India who visits the site from Ohio)
5.  You can block or detect most popular VPNs - there are services out there that will do this based on an IP address. Or you can get lists of [ASNS](https://github.com/LorenzoSapora/bad-asn-list) that co-related to the big ISPs that VPNs use.
6.  You can restrict the content to only being viewed from the country they purchased it from

I've always operated from the standpoint that I don't want to punish my honest users because there are a few Anthonys from India that want to take advantage of it. It's more fun to email them and ask questions about living in India.

### <span class="grit"><a href="#but-i-know-a-dev-in-country-making-amazing-money" class="hash-anchor before"></a>But I know a dev in $country making AMAZING money!</span>

That is great! My system is opt-in. I've had many devs say "Thanks for the offer, but I actually don't need it!", or even offer to buy a second course for someone who does need it.

Again - it's not perfect but it works out in most cases!

### <span class="grit"><a href="#what-about-sales" class="hash-anchor before"></a>What about sales?</span>

When there are sales, PPP still applies. Pretty simple- sales aren't just for Americans.

### <span class="grit"><a href="#thats-all" class="hash-anchor before"></a>That's all</span>

Hopefully that clears up a few questions! Feel free to [tweet me](https://twitter.com/wesbos) with any followup questions you have!

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/posts/parity-purchasing-power/ppp.mdx)

[**← Prev**](https://wesbos.com/transfer-usd-out-of-paypal-without-fees/)

How to Transfer USD out of PayPal without conversion fees

[**Next →**](https://wesbos.com/scoped-github-access-token/)

Get a repo-scoped GitHub Access Token quickly

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
