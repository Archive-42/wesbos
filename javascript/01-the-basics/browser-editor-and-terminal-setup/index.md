
==============================================================================================================================



##### <span class="grit">Module 1 - The Basics</span>

-   <a href="../welcome/index.html" class="currentModule">Welcome<span class="videoNumber">Part 01</span></a>
    1.  <a href="../welcome/index.html#house-keeping" class="currentModule">House Keeping</a>
        -   <a href="../welcome/index.html#starter-files" class="currentModule">Starter Files</a>
        -   <a href="../welcome/index.html#how-to-do-the-course" class="currentModule">How to Do the Course</a>
-   <a href="index.html" class="currentModule currentPage currentSection">Browser, Editor and Terminal Setup<span class="videoNumber">Part 02</span></a>
    1.  <a href="index.html#the-browser" class="currentModule currentPage">The browser</a>
        -   <a href="index.html#shortcuts" class="currentModule currentPage">Shortcuts</a>
    2.  <a href="index.html#nodejs" class="currentModule currentPage">Node.js</a>
        -   <a href="index.html#checking-if-nodejs-is-installed" class="currentModule currentPage">Checking if Node.js is installed</a>
        -   <a href="index.html#which-terminal-to-use" class="currentModule currentPage">Which Terminal to Use</a>
        -   <a href="index.html#checking-if-you-have-npm-installed" class="currentModule currentPage">Checking if you have npm installed</a>
    3.  <a href="index.html#command-line-basics" class="currentModule currentPage">Command Line Basics</a>
    4.  <a href="index.html#check-that-nodejs-is-working" class="currentModule currentPage">Check that Node.js is working</a>
    5.  <a href="index.html#code-editor" class="currentModule currentPage">Code Editor</a>
-   <a href="../running-and-loading-js/index.html" class="currentModule">Running and Loading 
    3.  <a href="../types-strings/index.html#concatenation-and-interpolation" class="currentModule">Concatenation and Interpolation</a>
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






<span class="grit">Browser, Editor and Terminal Setup</span>
============================================================

![Beginner JavaScript](../../../../images.wesbos.com/upload/w_700%2cq_auto%2cf_auto/v1621453897/wesbos.com/bjs.html)

Enjoy these notes? Want to Slam Dunk JavaScript?


JavaScript, Browser, TerminalEdit Post

Let's talk real quick about setup and the tools you need.

You can skip this video if you know the three things:

1.  Which browser you would like to use (as well as how to open the dev tools)
2.  You already have Node.js and NPM installed.
3.  You have an editor that you like (such as VSCode).

If you already have those things in place, skip this video and move onto the next one. Wes will just be introducing all three of those and talking about his personal choices behind them.

<span class="grit"> <a href="#the-browser" class="hash-anchor before"></a> The browser</span>
---------------------------------------------------------------------------------------------

Let's get into the browser.

You can use Firefox, Chrome, any browser you like because we are just writing JavaScript.

The important thing here is that we will be using the developer tools. Both Firefox and Chrome have very good web developer tools. Wes will likely be using Chrome throughout the course.

Things you need to know is how to do open the dev tools. You can just right click and select "Inspect Element", which will show you the DOM, and you can click over to the console.

### <span class="grit"> <a href="#shortcuts" class="hash-anchor before"></a> Shortcuts</span>

It's worth learning the shortcuts to quickly open up developer tools, inspect element and the console. That way you can really quickly open it.

To find the shortcuts, in Chrome you go to *View* &gt; *Developer* and then you can see the shortcuts.

In Firefox, you click on the hamburger menu and go to *Web Developer* &gt; and then you will see the shortcuts for Inspector and Web Console, which is the two we will be using.

<span class="grit"> <a href="#nodejs" class="hash-anchor before"></a> Node.js</span>
------------------------------------------------------------------------------------

Next up, we need Node.js. In order to install Node.js, go to [https://nodejs.org](https://nodejs.org/) and install the latest version.

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1196px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 109.06666666666666%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcElEQVQ4y62Uy28bRRzH9w8AgQRXOJDGdvyIQOLRB3ljESeiF1DEoZW40iJuVROK1BOgSsAFbvTYIwcEArWBJsRxIiDPClo1cl3n5cfa67W96921d9f+oB3HLm1uISN9NTO/md9nfr+d346UTW6RyiXZTGX4536Ku1sP2d6Xycgq2UIZ1VBp2A2ebJm8wl5OISur7OdL7GWLYiwtLv/BX3+ukFha4tavv/HjTz/zy81ZFuIJ4okl5uYXmJ+Lc3vud6H44lJXC4sJofmFOLO3brKUSCBFIhFCoRDhcBhv3N/fL3pPgUCAs++cJfZ+lMtXLjM1NYXf7xd7O4qEIvQL9RMJR5D6+vqEs9cHg0EB8Q7wFAj4OXXyFKffPsl7595lcGCwC/T2h4JBfBEfvld89L7swx/0Iw0PDzM4OMjIyAjj4+OMjo4yOTlJLBZjbGxMaHhohGg02p1PTEwwMjZKLBojfC7MiZleei6d4NXJ15CKxSLJZBJFUahUKpTL5cfk2boqH6yrB2vlCqqmUtSLFLQCpXIJqdlsilur1WrIskylWkEpKRSVonAqlUrtw6oV1FqJsqlSNssoelGA5EoewzK6ty81Gg1arRau6+I6rjC23BZmzRSyDAtd0zEMA8u0MA0TQzdoOu1APD/HdQSj2WoiObbdpdftuqi7TCnL+t111u+1tZXaIr2bFuONexus/L3CjrwjIjQa7eg8YMuL0LEbuM12ZNfj13nu4+d584sBTn9+hre+jPLCpRf58MYFvpr9mpemexi4NsTrn73B0LVheqZ7mf5+Rvjari2gjwG/uf0tT114mtCnYQKf9BG8EuSZi89y/rvzXP3hKtIHEr4Zn1jz5M0v3vjoMLB1kHK2lGUttcr6w3Xu7NxhNbXKRnqD7cI2u4Vdlu8vs5pcZTO9ydqDNVYerJCW049S9oD2E/9p025imzaO5VCv1XHqNpZtYjYMzLpJVa9guw3qttXNrAMUt9wB1ut1NF1DLsrsy/vklRwZOUNWyZJTcuQKOfbze8ImKzJ7uV2yhQxqWRW+HajkOm2gaRqoqoqu62hWFc3S0C1N9F6NalVNyCtwTdOoVqpi7tWpaZqPgI5z+Gk6Suum3AF2PupRdSjljvFI0f2nP36gY9ePJeVuHTZdm+Nskl6tYJqWeE286/+/+hdnL+PtpSbZMAAAAABJRU5ErkJggg==');
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/a156919bcea45e14ccb4cc9845423ff5/51800/node.js-website.png" title="nodejs website" alt="nodejs website" class="gatsby-resp-image-image" /> </span>

Don't pay attention to the version numbers, those will change depending on when you take the course. *The stuff that we are covering is not dependent on what version of node you use.*

We aren't writing Node.js websites in this course, instead a lot of tooling, bundling, formatting, etc. uses Node.js under the hood so we need to have it installed.

### <span class="grit"> <a href="#checking-if-nodejs-is-installed" class="hash-anchor before"></a> Checking if Node.js is installed</span>

How do you know if you have it installed or not?

You can go ahead and install it again and all that will do is update your Node.js to the current version if you already had it installed.

Another way to check is to open up a terminal window.

### <span class="grit"> <a href="#which-terminal-to-use" class="hash-anchor before"></a> Which Terminal to Use</span>

You can use the built in terminal application which on a Mac you can find under *Applications* &gt; *Utilities* &gt; *Terminal*.

Wes is using a terminal called Hyper for his terminal. You can also use the terminal in VSCode.

You can use iTerm. They are all the same terminal at the end of the day.

If you want to know what theme Wes is using, you can go to [https://wesbos.com/uses](../../../uses/index.html) and that will give you the links to all of the different themes and things he is using.

On Windows, the terminal is called Command Prompt. You can access this by going to *Start* &gt; *All Programs* &gt; *Accessories* &gt; *Command Prompt*. There is another terminal for Windows called Cmder.

How do you know once you have a terminal open?

You can go ahead and type `node -v` in the terminal and press enter.

That will let you know what version you have installed.

### <span class="grit"> <a href="#checking-if-you-have-npm-installed" class="hash-anchor before"></a> Checking if you have npm installed</span>

You need to also check that you have NPM installed. You can do that using `npm -v`, which will tell you what version of NPM you have installed.

As long as you have something greater than 10 for node and 6 for npm, you should be fine.

Wes wants to avoid going down any rabbit holes regarding complex tooling and best ways to do things. You just need to have it installed and it will be working.

<span class="grit"> <a href="#command-line-basics" class="hash-anchor before"></a> Command Line Basics</span>
-------------------------------------------------------------------------------------------------------------

Now we will do some command line basics in case you are not familiar with working in the command line.

There are a couple of commands you need to know in order to run our JavaScript and bundles.

Basic Commands

-   `cd` - this means change directory
-   `ls -l` (mac), `dir` (windows) - this will list out all of the files and directories under the current directory
-   `pwd` - print working directory will give you something like `/Users/wesbos/beginner-JavaScript/exercises`
-   `cd ..` - go up a level in the current directory

(examples of the above commands visible in image below)👇

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1134px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 61.6%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVQoz22SXW/aZhiG+Qlt8UsAAwabAKZ82SRtAdvEBvMRQrqEsCiN1DRRlHRRkyVN1e4jiYq6Naq0gx3uYJqmHW3azvYDrwkSrZvUg0v3ffJeet5HT8A2LbKuT8xcQamukJgxILk4ZL6+hu51yPpt0lOsPmV3jOlvUvY2ZlS8MWV3RGXaW2MCilZkrv2SyPA9Qf+CYP8dUu8twe4V93rfIZ/UUc5kUhcK0Y0SYrFO2Gwiig7Bgo1UdG656QE1YyC3jpH7VwjvHOF/jWi/QbRfI/wLEgc2yS9U1JcZYp+ZhBdsooZLqNT8JAFFLSLcU6TuBNH+BtF9i+hcIvxLRHeCclwjdZZA/VZFXjMIlR3mytPHzqeFmVyVaPuUaH+CtHGN2PsJsf0j0sYHpP2fiV1vok4qGO+K5Hcs4gs+4lYmbgkVnZucCtWsSbT1gvjyJaL1CtG7QOp8hfDfIC1fET9qkjxKo53niK1WiVRcwpUlRMEmVLBnu/yvNGDYq2SsAdqjDpGSQ7beI1PvETdd9MYyctkj/XBAarFPzhqiPeqh1fpozipJe0jsYfdGfisNVJvrpGsdUgsuMcMhb/XQrS5KtUmxuUw475Eo90mbQ/L2Gpq9wnytT2h9F7F1iBjtIQzv44QFc4lkax+ldUTY2kVfOSM3+JK4d4g+PEfbbFF6ZpPba2CudTEedNEaPdL+iMxgi1RnTMjwZl+f7XA+ayDqu6ijH1Aef09s9ZrE4/ckZv0DyRMX9fVd1IkgObqPqjgE0x735psEdYtQvvGvbJoBPSxzpzQiuvM3kc9/I7z1B5Htv4g8+Z258Z+E938heblOajIm+6uCcqqSeWFS23Yo2R2k0tL/TigQ1Srcre0g2c+RGvtIznMk6wDJPkSyDxDTbBwjnBPkcQ3lqY68dx99UCVlWgQLNzc5m7LY5B87JpNpehKkRgAAAABJRU5ErkJggg==');
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/75d283400b5093917cda60d3bcfd4900/75a80/example-terminal-output.png" title="Terminal Output" alt="Terminal Output" class="gatsby-resp-image-image" /> </span>

In this example, Wes is in the `beginner-javascript` directory, and he uses the command `ls -l` to see what other directories he has nested inside his current directory.

He can use the `cd` command to change directories into the `/exercises` directory by typing in `cd exercises`.

*Note: If you want to learn how to customize your terminal, you can go to [https://commandlinepoweruser.com](https://commandlinepoweruser.com/) to take a quick course of Wes' to get you up and running with a cool terminal that shows the prompt and current working directory like Wes' does. That is not part of this course, just for those who are curious.*

Other things to know is how to go up a level in a directory. You can do that using `cd ..`.

That is all we need to know right now.

<span class="grit"> <a href="#check-that-nodejs-is-working" class="hash-anchor before"></a> Check that Node.js is working</span>
--------------------------------------------------------------------------------------------------------------------------------

If you want to see if your Node.js is working, you can type `node` in ther terminal and that will give you a caret which will load up a *REPL* which is a *read-eval-print loop*. That is essentially the console. You can do `1+1` and press enter and the console will evaluate that to `2`.

Once you have run the `node command`, to get back to the terminal you have to press `CTRL + C` a few times.

Other helpful things are:

`cmd + k` or `cmd + r` (mac) or `ctrl + k` or `ctrl + r` (windows) - *will clear out the console. (this works in Chrome dev tools console as well)*

<span class="grit"> <a href="#code-editor" class="hash-anchor before"></a> Code Editor</span>
---------------------------------------------------------------------------------------------

Finally we are on the topic of the editor.

Wes highly recommends you use VSCode because he thinks it's the best editor for writing JavaScript in.

You may have different opinions.

In terms of tooling, Wes feels that VSCode is the best.

We will be looking at some extensions to use to format JavaScript properly. Again if you want to know what theme Wes is using, refer to [https://wesbos.com/uses](../../../uses/index.html).

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/01-the-basics/02-browser-editor-and-terminal-setup/02-browser-editor-and-terminal-setup.mdx)

[**← Prev**](../welcome/index.html)

Welcome

[**Next →**](../running-and-loading-js/index.html)

Running and Loading JavaScript

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.

<img src="../../../static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg" alt="Syntax Podcast" sizes="(min-width: 1800px) 1800px, 100vw" srcset="
                          /static/83ff22ad325f96d7f69f822a5385b55e/cd18a/syntax-logo.jpg  450w,
                          /static/83ff22ad325f96d7f69f822a5385b55e/0a45a/syntax-logo.jpg  900w,
                          /static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg 1800w
                        " />

### <span class="highlight"> [@wesbos](https://twitter.com/wesbos) Tweets</span>

brb getting some good tweets...

### <span class="highlight"> [@wesbos](https://instagram.com/wesbos) Instant Grams</span>


![Master Gatsby](../../../../res.cloudinary.com/wesbos/image/fetch/w_700%2cq_auto%2cf_auto/https_/courses.wesbos.com/images/GAT/GAT-social-share.png)
