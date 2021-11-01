
==============================================================================================================================



##### <span class="grit">Module 1 - The Basics</span>

-   <a href="../welcome/index.html" class="currentModule">Welcome<span class="videoNumber">Part 01</span></a>
    1.  <a href="../welcome/index.html#house-keeping" class="currentModule">House Keeping</a>
        -   <a href="../welcome/index.html#starter-files" class="currentModule">Starter Files</a>
        -   <a href="../welcome/index.html#how-to-do-the-course" class="currentModule">How to Do the Course</a>
-   <a href="../browser-editor-and-terminal-setup/index.html" class="currentModule">Browser, Editor and Terminal Setup<span class="videoNumber">Part 02</span></a>
    1.  <a href="../browser-editor-and-terminal-setup/index.html#the-browser" class="currentModule">The browser</a>
        -   <a href="../browser-editor-and-terminal-setup/index.html#shortcuts" class="currentModule">Shortcuts</a>
    2.  <a href="../browser-editor-and-terminal-setup/index.html#nodejs" class="currentModule">Node.js</a>
        -   <a href="../browser-editor-and-terminal-setup/index.html#checking-if-nodejs-is-installed" class="currentModule">Checking if Node.js is installed</a>
        -   <a href="../browser-editor-and-terminal-setup/index.html#which-terminal-to-use" class="currentModule">Which Terminal to Use</a>
        -   <a href="../browser-editor-and-terminal-setup/index.html#checking-if-you-have-npm-installed" class="currentModule">Checking if you have npm installed</a>
    3.  <a href="../browser-editor-and-terminal-setup/index.html#command-line-basics" class="currentModule">Command Line Basics</a>
    4.  <a href="../browser-editor-and-terminal-setup/index.html#check-that-nodejs-is-working" class="currentModule">Check that Node.js is working</a>
    5.  <a href="../browser-editor-and-terminal-setup/index.html#code-editor" class="currentModule">Code Editor</a>
-   <a href="index.html" class="currentModule currentPage currentSection">Running and Loading JavaScript<span class="videoNumber">Part 03</span></a>
    1.  <a href="index.html#run-scripts-before-closing-body-tag" class="currentModule currentPage">Run scripts before closing body tag</a>
    2.  <a href="index.html#external-javascript-files" class="currentModule currentPage">External JavaScript Files</a>
    3.  <a href="index.html#running-it-in-nodejs" class="currentModule currentPage">Running it in Node.js</a>
-   <a href="../variables-and-statements/index.html" class="currentModule">Variables and Statements<span class="videoNumber">Part 04</span></a>
    1.  <a href="../variables-and-statements/index.html#var" class="currentModule">var</a>
    2.  <a href="../variables-and-statements/index.html#let" class="currentModule">let</a>
    3.  <a href="../variables-and-statements/index.html#const" class="currentModule">const</a>
    4.  <a href="../variables-and-statements/index.html#statements-and-semi-colons-in-javascript" class="currentModule">Statements and Semi-Colons in JavaScript</a>

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




<span class="grit">Running and Loading JavaScript</span>
========================================================

![Beginner JavaScript](../../../../images.wesbos.com/upload/w_700%2cq_auto%2cf_auto/v1621453897/wesbos.com/bjs.html)

Enjoy these notes? Want to Slam Dunk JavaScript?


JavaScript, Browser, Node.jsEdit Post

Let's talk about how to actually run JavaScript.

There are a couple of ways we can run JavaScript:

-   in the browser console
-   in node
-   via a script tag
-   we can also have an external script.

We will talk about how we can actually run those.

The simplest is to open up your browser dev tools and go to your console.

If you want to run some JavaScript to see how it works, like here Wes has typed `1 + 1` and hit enter and the console returned `2`.

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 56.53333333333334%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYA/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYU/SfUxEE2IDblmH4fisI39AUQ);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/b795fce75ff722cc90cd044145761bf0/aa440/browser-console.png" title="browser console showing the calculation of 1 + 1" alt="browser console showing the calculation of 1 + 1" class="gatsby-resp-image-image" /> </span>

This right here is a JavaScript console and it's a nice way to quickly noodle on some JavaScript

To see how it works, just pop open a browser console. The neat thing is if you are on any websites, say [https://github.com](https://github.com/), the JavaScript that you type into your console runs on the actual page that is loaded and existing.

For example You can type the following to grab all the paragraphs from the github page that you are currently on. 👇

    document.querySelectorAll("p");

*(Don't worry about what document.querySelectorAll() does, we will cover that in a future video).*

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1190px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 135.73333333333332%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/UlEQVRIx42V6Y8bRRqH/RFxBIZjkUBCQkgg7ZeVkPZvXWm1AhJCwiRcWe1nSDKZmwTIjNtje2y3++6uvrv68vWsupwdbSIkKOtRVbmrfvWr933b7iWegxO7iLjA8WNsP1J9h+UK0jRjtV7zYhNxrgiTgiDK8IOIKCnoffvDv7l37z/s3rnL5zdu8vn1L/nixk3FP//1GZ9d/5Jvv7+nuHlrl6++vsOtr+9we/cbbu/eVXx1e5frN25y95vv6L317nt88NHHvHztTa69+Q6vdey8zWs77/D62+/y8rUdPvrkr/zt07/z0qtvqGevvvHWFd38lWs7vP/hJ+z85X16Dx8+4MeffuLRwSHHJyccHh9zeHzE/uER9/f2efDogIf7h+ztH/Ho4FjRjTu67x/sHXB/74AH3dq9fXqrtkYWGb/Xys2GsK6xbY/RZMZsbmJYLpbjMTcdDNtFRAlBGCGrRu3plVWFCEPSbCt63z7iH4NbRDKlkDVpIbFsh8lMZ6bPGU+mBCIiL6SiqhuiJN3OZUWvqipCIcjSBNag5wYn3hOKpqKsWpp2SeD7mKaJZdvM5wZRFF3dYr1e4wchUpaUdUuvbVviokFkNWFeIasNmyWsliuKqqFqFhS+q8onThKKQhKIkCzLWa3WbDYbJdyVVnftXiFLxm7GhVNw6UlGbk5StmpxLktyKanapRIu6+0BVdMqN51AUVbIsqZS85peWUou3QzNyhk5ORd2QSxb1usNSRpj2wbn2pBfn57z9Fzjt7M+vzwbn/UHjCczdMMmTgvKzmFd5YydVAn1zYysWqgrtIulctC5cj1PJcRxXEzLZm6YKlGWZWM7LnGS0rSLrcPtlXMGds7YLRR5tWC1WlGUDXWXFBExNwxsxyEIhEqOEIIwDHE9n4k+R5aVOrxX1TW6nzPxS+y4YhqURHKhstcJtss1WeYrR34QUHQxrWqVpLrZ1t5ytWK5XG0FgyDAtkzCwKeuJJEICHxPnR7HMZZp4nsWRZ7RrXUcR5VN5zDLMsqyJM9z0jTFDwS9+XzOdDZTdA7G47HCtm10S/D46YjT38ZYjrh65rquEvd9Xwl3c891VVh6s9kMy7LQdR3P8xR1XW9PzQpV/WGU4noBmqYRx8lV/EajEcPhCMMwFGdn59s3pQu2yqLnYjs2hmlg2Rae5+K4NlEkKEXActmy2axZr1eK58fbvtcFP8tzRsMh4+GEi4sJQiTkRUuSlsSRJM9rZN65bijLlrJcUFWLZ/PFFVlW0+uy1LSNytpQc9EGAcNRiHE5xzEDAlETRRVRVOJ5OUIUhKEkjkpcN1PjjiiUWFa6FZSpxJmaeNMR3rSPe3mONzwh1M/IvAmhfk7i6DSy5o+aEqzzBuuij5idE3RMzwhmGqE5xh3/ij18QuzGpL5NEXnkoUseOsg4oIgDatmoH4kufEqwSivckYY7eowzeoJ9cYozOCU0htiDE6yLnwnNkKYsWNQlbS1pZMailrR1RVu3bLrPZvMshrJF6JcIvU+gawSzPkIfENsT/MkZ3uVTEj/93X+//29XglVa4401nM7h8LFyZQ9OEfMBtnaMpZ0gTMFysbja+CLPCTbF/xxqSkT1nUNnhj89Uy4TL2G1XF5tfNHZ8w6zGm+k4Qx/fubwVLnshK3+EWb/GGGGLP+sYJfl0JgSGhcqhp2jTixxdRVPf6YRufGfcvhf5qauVEVwwDsAAAAASUVORK5CYII=');
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/bffdc4358ed6a167b64a8398130dde0b/393aa/console-showing-queryselector.png" title="browser console showing the output of document.querySelectorAll(&#39;p&#39;) which is all of the paragraphs on the website" alt="browser console showing the output of document.querySelectorAll(&#39;p&#39;) which is all of the paragraphs on the website" class="gatsby-resp-image-image" /> </span>

The code that runs in your dev tools console is running in the context of the page that is loaded in your browser tab.

The next way to do it is a script tag.

Go into the `/playground` folder and create a new file `running-js.html`.

Wes has an Emmet extension in VS Code so he is going to hit `!` and `Tab` to scaffold out some HTML for us.

In the body, we can have a script tag in which we will add `console.log('hey')`.

What that will do is when the HTML is loaded, it's going to say "OH! This is a script tag, I am changing languages from HTML over to JavaScript, and it will run any code inside of the opening and closing script tag as JavaScript.

If you go ahead and open the `running-js.html` file in the browser, and open the console, you will see that it says "hey".

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 49.33333333333333%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYA/6au1TUzsJbHFX2eGizpAnwjoDAOfOcNMixF38u/I8wrUveN7gTkYhrhizvPLBz);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/9c8c7763b60a6c44a4858ca7871ff5db/aa440/console-hey-message.png" title="browser console output that says hey" alt="browser console output that says hey" class="gatsby-resp-image-image" /> </span> *Don't sweat this too much, we will be explaining what console.log() and everything does shortly.*

<span class="grit"> <a href="#run-scripts-before-closing-body-tag" class="hash-anchor before"></a> Run scripts before closing body tag</span>
---------------------------------------------------------------------------------------------------------------------------------------------

One thing to keep in mind is that it's almost always worth running scripts just before the closing body tag.

So if we were to modify `running-js.html` to include a paragraph tag that says Hey right after the body tag, and then we wanted to grab that paragraph via JavaScript, we could if our script is right located right before the closing body tag, like below: 👇

    <body>
      <p>Hey</p>
      <script>
        const p = document.querySelector("p");
        console.log(p);
      </script>
    </body>

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 50.66666666666667%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYA/YwNk%2bJJzY10bbqeuHu9icMdtEWCruYwmCV/aHD/8CYmH46s1q6XsAAAAASUVOR);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/e51afc9bf30fededc47529027c9938a1/aa440/console-paragraph-output.png" title="console output showing a paragraph element with the text content of Hey" alt="console output showing a paragraph element with the text content of Hey" class="gatsby-resp-image-image" /> </span>

If you were to move the script tag above the paragraph element (or move the paragraph element below the script tag), and refresh the page, the console will show `null` because that means it found nothing.

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 50.13333333333333%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYA/SUBiG%2bQVmG%2b8DOnQJLlDeLDAEWspLhBmj030yx/0XsNtxG9z0WbnKE8gU8clr2);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/210eab76c1b34df137e6c2e5017c2432/aa440/body-with-paragraph-after-script-tag.png" title="a script tag before the paragraph element that is being selected" alt="a script tag before the paragraph element that is being selected" class="gatsby-resp-image-image" /> </span>

In order for your script tag to access the elements on the page, the elements must first be on the page before you select them. If we try to select something that doesn't yet exist (because it gets created later), we won't have access to it.

For your own sanity, always put your JavaScript right below the closing body tag. *(We will talk about loading in future videos when we get a little bit more into the DOM).*

<span class="grit"> <a href="#external-javascript-files" class="hash-anchor before"></a> External JavaScript Files</span>
-------------------------------------------------------------------------------------------------------------------------

Another way we can do it is via an external JavaScript file.

Go into the playground and make an external JavaScript file, called `some.js`. In that file, add the following code 👇

    console.log("I am in another file");

In the `running-js.html` file, remove the existing script block and instead add a script tag with a `src` attribute. *(You do not need a `type=` attribute until we hit ECMAScript Modules.)*

Inside of the `src=` attribute, you need to give it a relative path, like so 👇

    <script src="./some.js">

That works because the HTML file is in a folder where the sibling file is `some.js`.

-   `./` means in this folder.
-   `../` would mean go up a folder level.

In our case, it's in the same folder so `./some.js` is the relative path to our file.

Now if you run that, it will say in the console `I'm in another file`, and it will even show you which file and line number of where that JavaScript had been run. 👇

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 43.2%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYA/ywcQnjZdWm2qM/0rrUKiNL0BsuS%2bdMzbGS3fyn/V4XU1jg35lEf67ND0hrs%2bKS);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/853d92783e7fe19c358fb52579505436/aa440/somejs-filename-and-line.png" title="browser console showing the filename and line number where the console statement was defined" alt="browser console showing the filename and line number where the console statement was defined" class="gatsby-resp-image-image" /> </span>

Again, if you were to put the script inside the `head` element, it will still work.

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1464px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 82.93333333333334%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVQ4y42U2XKbShRF9QsJSAIsJIGswYyaBYgZC49K7MSuSlVe8nL//xPWLbBiW9eq3Dzsaqqrep29u8+hoc2mCP0JrZFLZxojGWs65oqe69NxPIbeju48RZ0ltXqLl++msTmpxmCdITsenydrWlaI4oQMo1uM6+8M8kd0P8cOfeR5jmBFiFaMaMe0nOSkGornIW18mraPcOGhTmMG0Z5u8pWxH2KEMXpyibq+PDrYtOOTapwvfVRzQWuyRDB8FDdCmqa0Zzltp3JSOToArINOOKz3KqDouXxyZ3w214iGXzvUw3uGuyeURYHkRsjV3c5SpEWGNE9rgHiAi+8K1A57zpSmPkYYOojmFskOkdyU8/IHvfAOK9jghD6jIEFPdgyyK7r+JfIiRVllKMusLvYb2ugZM1raGGFgI5oBbWuL5CaMszvGUcHYDxhHIVa6RQ9yVL9A9TK0ZIeelXUReZm9AYX+CKE/RDi3EY2gjq1MYy6ilIswZRTdMMz3mNdf0MIb5EWJNCsQjPBFF2Ed/TWyqI0RfwPNLbIT0nYS9OwbWvGEke5x83smyZ5Rcc/57gt6coe6Kul416j+DW33XeQK+OrQDJDtkO76ilH5jJY8oMxj1HnI2SZnUOzQkipyjrq6Qg1u6Qa3H4G1w4FdN/aZGyPPcjqba+R5cWjklziiGb973QjRrBQetdEHYH+R0t28xKkOCca2Xlt2RPNI7xv6bf8YWMWdp2jJE9bXf7DKnxjlM2axR1o/cuY/cOY9/lFHwLYd1T+IXrDH3P9ikj/TD27R/JL2/App8f/64LC6w2r0lNWOppO8Rm7af6eTQHVdoqcPdFblybn9kz4Aq8hVGyjLS6Tp2wQ0nbh2/F+17MN6AP4L80QIIS/gpLwAAAAASUVORK5CYII=');
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/7cbccafd28dcd792290a86c69bd0155d/6f464/somejs-script-in-head.png" title="html markup showing the some.js file linked in the head element" alt="html markup showing the some.js file linked in the head element" class="gatsby-resp-image-image" /> </span>

However, if you were to try to select some things on the page, such as the paragraph tag, you will get `null`.

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 41.6%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYA/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQ/MSc4aDmFZFkajb9i2M%2bZs7U);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/caa357d63c225d18d43657a43fa7052f/aa440/somejs-script-in-head-with-paragraph.png" title="html markup showing the some.js file in the head element and a paragraph element in the body" alt="html markup showing the some.js file in the head element and a paragraph element in the body" class="gatsby-resp-image-image" /> </span>

Why? Because of the same reason, the script will run before the actual HTML is finished building on the page. Leave the script tag right before the closing body tag for the best performance and to save yourself future debugging headaches.

*(There are some options like the `async` and `defer` attributes you can add to your script tags that will delay the actual running of the JavaScript, and it will download it asynchronously and then run it once the HTML has been loaded, however that is a more advanced topic which we will get into once we discuss async. But first we will need to understand what does asynchronous mean, etc)*

Another thing you may have noticed is why is there a closing script tag if there is no content in between the opening and closing tag?

That is a quirk with the script tag. It cannot be self closed.

You also cannot add extra JavaScript between the script tag like so: 👇

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 386px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 25.866666666666667%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYA/5Z16fDb85z%2bBdNJuLBDDDejPt1gTNe08yf0cM3/kG0DKlhNaAbIwAAAAASUVOR);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/daba58c6575c9016a440391e419b54d2/7bc0b/script-tag-with-inline-code.png" title="script tag that has a src attribute and inline code" alt="script tag that has a src attribute and inline code" class="gatsby-resp-image-image" /> </span> *That will not work.*

You can have multiple script tags in an HTML file, if you like.

The only downside to that is that every single time that it hits one of those script tags, it will go off and download the JavaScript file and parse that for you.

When we hit modules, we will look at how we can bundle those multiple files into one. Or you can do something called code splitting, which is split them into multiple, smaller JavaScript files, and have them load on demand.

<span class="grit"> <a href="#running-it-in-nodejs" class="hash-anchor before"></a> Running it in Node.js</span>
----------------------------------------------------------------------------------------------------------------

One more is actually running it in Node.js.

    console.log("I'm from node");

Node.js is JavaScript that can run in the server. Instead of running JavaScript on a website, we run it on an actual machine (like many other programming languages do).

The way we do that is we open our terminal and `cd` into the `playground` directory.

You can run the script in Node by entering the following in the terminal and hitting enter 👇

    node node-example.js

That will run whatever code is in the script file, and once it's done, it will exit out of node and return you to the terminal.

<span class="gatsby-resp-image-wrapper" style="
                      position: relative;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1204px;
                    "> <span class="gatsby-resp-image-background-image" style="
                        padding-bottom: 9.6%;
                        position: relative;
                        bottom: 0;
                        left: 0;
                        background-image: url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYA/pESCCxLkyDL/DN5gtdN4nHoc1xaO79AezBF7itizfy%2b1V0nYfKz53wAAAABJRU);
                        background-size: cover;
                        display: block;
                      "></span> <img src="../../../static/4107cd9191a93d4a5626db7c1338a313/35252/node-terminal-output.png" title="the terminal showing the node command and the output from the javascript file" alt="the terminal showing the node command and the output from the javascript file" class="gatsby-resp-image-image" /> </span>

That's the short of how to load JavaScript.

We will be using a mixture of running JavaScript in the console, in a script tag and in external JavaScript files.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/01-the-basics/03-running-and-loading-js/03-running-and-loading-js.mdx)

[**← Prev**](../browser-editor-and-terminal-setup/index.html)

Browser, Editor and Terminal Setup

[**Next →**](../variables-and-statements/index.html)

Variables and Statements

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
