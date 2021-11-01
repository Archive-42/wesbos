
==============================================================================================================================



##### <span class="grit">Module 1 - The Basics</span>

-   <a href="../welcome/index.html" class="currentModule">Welcome<span class="videoNumber">Part 01</span></a>
    1.  <a href="../welcome/index.html#house-keeping" class="currentModule">House Keeping</a>
        -   <a href="../welcome/index.html#starter-files" class="currentModule">Starter Files</a>
        -   <a href="../welcome/index.html#how-to-do-the-course" class="currentModule">How to Do the Course</a>
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
-   <a href="index.html" class="currentModule currentPage currentSection">Types - Booleans and Equality<span class="videoNumber">Part 11</span></a>
    1.  <a href="index.html#equality-equal-sign-double-equal-sign-triple-equal-sign" class="currentModule currentPage">Equality (equal sign, double equal sign, triple equal sign)</a>




<span class="grit">Types - Booleans and Equality</span>
=======================================================

![Beginner JavaScript](../../../../images.wesbos.com/upload/w_700%2cq_auto%2cf_auto/v1621453897/wesbos.com/bjs.html)

Enjoy these notes? Want to Slam Dunk JavaScript?


JavaScript, Types, Booleans, Equality CheckingEdit Post

The final type in JavaScript is called a **boolean**. A boolean is either true or false, it's like a light switch, it's on or off and that is it.

We use booleans for logic such as if statements in our JavaScript code.

Booleans can be manually set or calculated.

Let's take a look at some examples.

Comment out all the code you have added to `types.js` so far and add 👇

    let isDrawing = false;

Let's say we want to know if the user is moving their mouse and if they are currently clicking down or up.

To do that, we can use a **flag variable**, which is a variable that is either set to true or false.

When the user clicks down, we set it to true and when they click up, we set it to false. That is what a boolean is -- something that is either true or false.

We can also calculate booleans. For example, if we have an `age` variable that is set to 18, and another variable called `ofAge` that has the value of `age > 19`, if you console log `ofAge`, it will return **false**.

    const age = 18;
    const ofAge = age > 19;
    console.log(ofAge);

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:522px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:32.53333333333334%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYA/xhuvm8bKSGlSFDFFLVwJ2BUWSNOSp1msp/vPxXz4BpD0KAIQknUYAAAAA);background-size:cover;display:block"></span> <img src="../../../static/8f07702c01e7043a81f50245aaef00a0/29492/boolean-false-in-console.png" title="comparing age as 18 greater than ofAge as 19 results in false" alt="comparing age as 18 greater than ofAge as 19 results in false" class="gatsby-resp-image-image" /> </span>

Sometimes values are calculated, like for `ofAge`.

We will talk later about the `greater than`, `less than` and `equal to` operators.

<span class="grit"><a href="#equality-equal-sign-double-equal-sign-triple-equal-sign" class="hash-anchor before"></a>Equality (equal sign, double equal sign, triple equal sign)</span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For now, we will just focus on equality which is the `equal sign`, `double equal sign` and `triple equal sign`.

One equal sign `=` is used to assign a value to a variable.

    const age = 100;

For double equals `==` and triple equals `===`, know that you should almost always be using triple equals.

There are some edge cases where you can use double equals, but almost all the time it's better to use triple equals.

If you take the age variable in the console and do the following

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:246px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:60.56910569105691%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYA/u99Ad4p15YdbT2RnRsbZFQWkFoqQrSFhL/qDZBZokW%2biQAAAABJRU5Erk);background-size:cover;display:block"></span> <img src="../../../static/8089ac6360f3336131b582fb6b17ccbd/92252/triple-equals-comparison-in-console.png" title="use of triple equal operator to compare age with 100" alt="use of triple equal operator to compare age with 100" class="gatsby-resp-image-image" /> </span>

-   `age === 100` will return true
-   `age === 10` will return false

That is what Wes means by booleans can be calculated as well.

You have 1 value, which can be a straight up value `100 === 10` or it can be a value that is stored in a variable `age === 100` or it can be two variables.

Add `let age2 = 100;` in `types.js`, and refresh the HTML page in the browser.

Now you can do `age === age2` which will return true. 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:270px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:34.074074074074076%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYA/Koia21TSZp0rRmZj6ZVIqiGw983OFezp1/wCVP8EO0%2biNwdAAAAAElFTk);background-size:cover;display:block"></span> <img src="../../../static/cacd5fe29f2ffebb9b382519549405e0/01bf6/triple-equal-operator-comparison-between-variables-in-console.png" title="comparing two variables age with age2 using triple equal operator" alt="comparing two variables age with age2 using triple equal operator" class="gatsby-resp-image-image" /> </span>

What is happening there is the browser is checking the value of the first variable and then it checks the value of the second one, to make sure they are exactly the same.

What would happen if instead we did `10 == 10`, with a double equals? It would return true. 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:197px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:85.27918781725889%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVQ4y41UWW/TQBD2n+cFCSF4ACQeEDwgtaJCUBAgURq1NG2hgbQKbQq5oLEd32ftXdu7H9pxYnoExEifd64d78x+tmaaJlqtFg4PD9HtdmHbNpIkIbTbbaytrWEymSDLMriuC8/zEEURDMPAaDRCr9eD7/uI45j8mkpSsCwLjuOQ7tgOHMdFGIYIg4A2OLZN8UWO5/mEIAjrPXO/xhhDWZbgnEPpnDNUgkNIjjzPwYsSvBQoqhpsnlcUDFJyys9zRj4FDQCdoCwrpeL4KMLuloeNNzOyU2+G1DlD6uqIbR2AgGUyHHV8vFzREfoFLgoVVHMI/JAcB7sBHt37iZUnZ2QPO5s4ba9jsP8O/Z3XqIoEtsWxvqrjzo0BLDOnPCEkpJTQ1EO1XItEGldI4gqcC7IrSlQaaFXCmUAYlMizuis5D1BBXBEpBZbJothiveyXTVGtqipMp1O6ACUbm0N87hjY/TRF56uOp6s9DMfBn7bmm/8GTQhBlGGM1zMbBfjW9zA1ErzdGOHFq1OYVtq0dBHLhE6ogmqtZynmkI1eFgWKomjiUla1vyyvgU6oii0uxXdzBB6DY+XzopcmBs/NEQYqntUecaVl5Tw5OUEYRpTQbrlEm4d3R2T/2H+P4w+rmHxpkf1xc4bH9yd4cGvczPUaD9X3rNiuZNCPsNOy0evWvAxtHYE5RuKZZI8HMfa2HRx1wqVz1S4O9+rbrlNH/tOmEyqn+pMs5tg/dTCzEuhGjCzjMIwIScKaAuqlC2AJhTR1M8PhEOfn9ZC327+wtXOG/QMDz54f4+btPfS/e//VQUMbRWpFC/WVpGmOMMrAeYGpHsCcRUjOGYSo6Aei8v+F3yt9Fi+zLJurAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="../../../static/62384d4d21f575a95f6972098e5070b1/1c154/comparing-double-equals-with-tripple-in-console.png" title="comparing double equals with triple equals in console for numbers" alt="comparing double equals with triple equals in console for numbers" class="gatsby-resp-image-image" /> </span>

Why are there two different ways to check for equality?

Triple equal will check that the value of the thing on the left hand side and the right hand side are the same, AND it will check that the types of the thing on the left and on the right are the same.

**Triple equals will always check for both value and type.**

In the examples above, the types were numbers.

What if you were to do `"10" == 10`?

The console would return true. Why?

Because the value is the same, but the types are not.

If you did `"10" === 10`, it would return false. 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:225px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:72.88888888888889%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYA/TQBSA/b/5AVy4IFEkULlyAXGgVQ%2bF0nSh/AOFVeADZqxXJAAAAAElFTkS);background-size:cover;display:block"></span> <img src="../../../static/ef34bb6ff1f72d21aef398a1c123a6b4/3684f/string-and-number-comparison-using-two-ways.png" title="comparing string as 10 and number as 10 using double equalto with returns true while triple equals to does not" alt="comparing string as 10 and number as 10 using double equalto with returns true while triple equals to does not" class="gatsby-resp-image-image" /> </span>

This is one of the examples where you can get into hot water by mixing strings and numbers when doing addition.

You should almost always be working with the same type. The same is true with equality. It's easy to get into hot water if you are checking if a string and a number are the exact same thing.

**=== always checks that the value and type are exactly the same.**

In a future video, we will go over something called *"flow control"*, which is `if`, `ternary`, and `switch` statements. These booleans will be particularly helpful for those videos.

We will also be extending what we learned here a little bit further into things like truthy and falsy values, as well as this thing called **coercion** which is where you have one type of value and you want to force it into another type of value.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/01-the-basics/11-types-booleans-and-equality/11-types-booleans-and-equality.mdx)

[**← Prev**](../types-null-and-undefined/index.html)

Types - Null and Undefined

[**Next →**](../../02-functions/functions-built-in/index.html)

Functions - Built-in

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.

<img src="../../../static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg" alt="Syntax Podcast" sizes="(min-width: 1800px) 1800px, 100vw" srcset="/static/83ff22ad325f96d7f69f822a5385b55e/cd18a/syntax-logo.jpg 450w,/static/83ff22ad325f96d7f69f822a5385b55e/0a45a/syntax-logo.jpg 900w,/static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg 1800w" />

![Master Gatsby](../../../../res.cloudinary.com/wesbos/image/fetch/w_700%2cq_auto%2cf_auto/https_/courses.wesbos.com/images/GAT/GAT-social-share.png)
