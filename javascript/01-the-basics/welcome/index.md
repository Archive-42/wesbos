
==============================================================================================================================



##### <span class="grit">Module 1 - The Basics</span>

-   <a href="index.html" class="currentModule currentPage currentSection">Welcome<span class="videoNumber">Part 01</span></a>
    1.  <a href="index.html#house-keeping" class="currentModule currentPage">House Keeping</a>
        -   <a href="index.html#starter-files" class="currentModule currentPage">Starter Files</a>
        -   <a href="index.html#how-to-do-the-course" class="currentModule currentPage">How to Do the Course</a>
-   <a href="../browser-editor-and-terminal-setup/index.html" class="currentModule">Browser,     3.  <a href="../types-strings/index.html#concatenation-and-interpolation" class="currentModule">Concatenation and Interpolation</a>
    4.  <a href="../types-strings/index.html#backticks" class="currentModule">Backticks</a>
-   <a href="../types-numbers/index.html" class="currentModule">Types - Numbers<span class="videoNumber">Part 08</span></a>
    1.  <a href="../types-numbers/index.html#numbers-in-javascript" class="currentModule">Numbers in JavaScript</a>
    2.  <a href="../types-numbers/index.html#helper-methods" class="currentModule">Helper Methods</a>
    3.  <a href="../types-numbers/index.html#modulo-and-power-operators" class="currentModule">Modulo and Power Operators</a>
    4.  <a href="../types-numbers/index.html#things-to-know-about-math-in-javascript" class="currentModule">Things to know about Math in JavaScript</a>
        -   <a href="../types-numbers/index.html#infinity-and-negative-infinity" class="currentModule">Infinity and Negative Infinity</a>
        -   <a href="../types-numbers/index.html#not-a-number" class="currentModule">Not a Number</a>
-   <a href="../types-objects/index.html" class="currentModule">Types - Objects<span class="videoNumber">Part 09</span></a>
-   <a href="../types-null-and-undefined/index.html" class="currentModule">Types - Null and Undefined<span class="videoNumber">Part 10</span></a>
    1.  <a href="../types-null-and-undefined/index.html#undefined" class="currentModule">undefined</a>
    2.  <a href="../types-null-and-undefined/index.html#null" class="currentModule">null</a>
-   <a href="../types-booleans-and-equality/index.html" class="currentModule">Types - Booleans and Equality<span class="videoNumber">Part 11</span></a>
    1.  <a href="../types-booleans-and-equality/index.html#equality-equal-sign-double-equal-sign-triple-equal-sign" class="currentModule">Equality (equal sign, double equal sign, triple equal sign)</a>




<span class="grit">Welcome</span>
=================================

![Beginner JavaScript](../../../../images.wesbos.com/upload/w_700%2cq_auto%2cf_auto/v1621453897/wesbos.com/bjs.html)

Enjoy these notes? Want to Slam Dunk JavaScript?


JavaScriptEdit Post

This course is all the stuff Wes wishes he had known over the last 10 years of him doing JavaScript. It is a big course but it does a good job of distilling the information down into the things you need to know, and making it easy and fun!

<span class="grit"><a href="#house-keeping" class="hash-anchor before"></a>House Keeping</span>
-----------------------------------------------------------------------------------------------

This video is for housekeeping items that need to be addressed before we can get into writing code.

### <span class="grit"><a href="#starter-files" class="hash-anchor before"></a>Starter Files</span>

First one is the starter files for this course can be found at <http://courses.wesbos.com/>. Click through to `My Account` and there will be a link to the starter files.

The starter files link will bring you over to Github which has all of the starter files as well as all of the solutions for this course.

Please star the [Beginner JavaScript Github repo](https://github.com/wesbos/beginner-javascript/) to help Wes up!

#### <span class="grit"><a href="#slack-channel" class="hash-anchor before"></a>Slack Channel</span>

If you are also taking the [video version of this course](https://beginnerjavascript.com/). On the course platform there is also a link to the Slack channel, where you can jump in and get help, maybe join up with a buddy and do a course together with someone.

#### <span class="grit"><a href="#structure-of-starter-files" class="hash-anchor before"></a>Structure of Starter files</span>

There are 3 folders in the `Beginner-JavaScript` repo.

1.  snippets
2.  exercises
3.  playground

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:101.06666666666666%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEE0lEQVQ4y32UTWwVVRSAJ1HYkrgwMUrQBBZu3LjUhSuNiSI/Rdqm9IeGIBCQKokrg/2lLRQRAwgSXOBKDQFSRQ2gUhMjJEZEKdA29rW8vr55b/7uzNz5u/M+M/MagUq8yTfnnnvOPef+nDuaWSkyrVsU7lYplirMlU10w6Fi2hRLBiXdpFx18GVIkiiUSsla9jVsH1sEmI7EdHyqpkD75MRJDh46THfvAHu7++ju7ae7b4APevrpHRhicHiEgaEDDB/4kMH9IzkDg8P0Z+wbpm/fEPv2H6Knf5AjR4+jdW7dRuOmDprbOtnY0kFDcysbW9ppbGmlrXMLLW2baW5tr/fbO2na1MZra9axeu16Xl+7Pu83NG2iobGZnbu70GQUMm8J5ixJ0QqYNQMMLyQlJVIJcapymZHUUmzXpWpZBFGEJVw8KXE8DxmGyDBACwIfUSnhODa2ELmxYlq5s+kIhOdh2jau7+P6Xq5nOK6by2yOK33CJEZ4LloQRhgic/BwZUDVizGlwgoUllTUr+D/Ww3ylfq+jxbHCUbFwNJ1Ys+FKCQUDp5pkAY+ie/hVCr4wgIiUiXxXBOVSNI0JPIFiRdQCyEMQzQlPdypW1gTN3Emb2FPjiMLk4SzUyTFaeLiNPLvCcLqNNIrIKwpbGMCYU0iRYGb+hjf3DnHuT8u43gOWrbUO4W7zBiCeRFQND2cGGS2jbROAAQ10J2QOcOnbNflbNnh55lxzkyO8f3sVWxPoMkwolC2sPyYSNWIUgiTlCC+h+F4VG0XGSviGrlPRqYrBVEA0lMEQVgP+Nd0lbLlkSpFdqZJcj+K0nwZvVLJbXFyj8yulMJybOZ1nSAI0LLBip3VUYxK0zxAotQD0hEurufX9YeQlU9mlzJAyzIVdIHtR9RqtQfI32yaEki/ri+y131qWLaNYVrEcVwPWLJ8SpYkiFXusHiS44i8JPKae0jSrP5sx8mT51ue1R3mLZ8kSQljRbQI0xJ4MiRO0oWx9F/ipJbbbEfk56mFUUy1qkPiLvyU1CKysXiBZIH4P0gp84vSsiXfKAQMndU59HV1gUrOyHmd3q90Tl4WnPrJZ3jU5aPvfI5cijh6KeTY5YyI4z9GGF52xmk94LHRAtpLF1j6xg8sWXOFJet+ZWnDNR7vuM7WE0U2HJzhrU9LbP+sysquIst3TLF8V5mnduk8ubPMM106t+bifDd5wFMXpnnk5bM8tnaUZatHWdV0mhWNZ9jY/xtN/VfZMHCDLR/f5s3h2+z9osrWkfO09H7Oqt0zPNs1wXN7prgzF90X8NsZHn1llGVrLrKy+Uva97zDq+9d5N3jN3nh7TG2H/6dntPjPL9jjM0H/2T1+1d4cdtJVnT8whOtV3m68xrjs35eIf8AWWl9w1j2BH0AAAAASUVORK5CYII=');background-size:cover;display:block"></span> <img src="../../../static/2fa634441f6fec0ef48279a05f6e4cd8/aa440/beginner-javascript-github-repo.png" title="beginner javascript github repo" alt="beginner javascript github repo" class="gatsby-resp-image-image" /> </span>

The `snippets` folder that has some base HTML snippets in there with instructions on how to get them into your HTML editor (we will talk about the editor in the next video).

There is also a `/playground` folder, which has some HTML files Wes uses to explain concepts throughout the course. He will often provide a `-FINISHED.html` file, which will include what Wes has written in the video, whereas the starter file itself, Wes will either ask you to create it yourself or he will provide an empty state.

The `/exercises` folder contains all the proper, full blown exercises that we will be doing throughout the course.

*Note: Sometimes the numbers of the exercise folders are going to be a little off from the video number is, so just make sure to line up the file with the name of the video, not necessarily the number.*

### <span class="grit"><a href="#how-to-do-the-course" class="hash-anchor before"></a>How to Do the Course</span>

Another thing is how should you do this course? Should you watch it, should you code, should you code while you watch?

About half the people prefer to watch it and then do it after, and the other half prefer to do it as they watch.

Try both methods and see what best works for you! You'll fall into whatever feels best for you pretty quickly.

Last thing is grab a buddy if you can.

Jump into the Slack chatroom and see if there is anyone willing to do it with you, you can team up, or team up with someone in person. It's always better if there is someone to hold you accountable.

It's a long course, 28 hours long, you can jump around.

If you understand certain concepts, such as what functions or parameters are, feel free to skip those videos.

The whole idea is that it is reference-able.

We are not building a huge app here that be build on in every video, instead, every video pretty much stands on it's own and if we reference something from a previous video, Wes will mention it.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/01-the-basics/01-welcome/01-welcome.mdx)

[**Next →**](../browser-editor-and-terminal-setup/index.html)

Browser, Editor and Terminal Setup

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.

<img src="../../../static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg" alt="Syntax Podcast" sizes="(min-width: 1800px) 1800px, 100vw" srcset="/static/83ff22ad325f96d7f69f822a5385b55e/cd18a/syntax-logo.jpg 450w,/static/83ff22ad325f96d7f69f822a5385b55e/0a45a/syntax-logo.jpg 900w,/static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg 1800w" />

![Master Gatsby](../../../../res.cloudinary.com/wesbos/image/fetch/w_700%2cq_auto%2cf_auto/https_/courses.wesbos.com/images/GAT/GAT-social-share.png)
