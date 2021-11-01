
==============================================================================================================================



##### <span class="grit">Module 1 - The Basics</span>

-   <a href="../welcome/index.html" class="currentModule">Welcome<span class="videoNumber">Part 01</span></a>
    1.  <a href="../welcome/index.html#house-keeping" class="currentModule">House Keeping</a>
        -   <a href="../welcome/index.html#starter-files" class="currentModule">Starter Files</a>
        -   <a href="../welcome/index.html#how-to-do-the-course" class="currentModule">How to Do the Course</a>
-   <a href="../browser-editor-and-terminal-setup/index.html" class="currentModule">Browser,     3.  <a href="../types-strings/index.html#concatenation-and-interpolation" class="currentModule">Concatenation and Interpolation</a>
    4.  <a href="../types-strings/index.html#backticks" class="currentModule">Backticks</a>
-   <a href="index.html" class="currentModule currentPage currentSection">Types - Numbers<span class="videoNumber">Part 08</span></a>
    1.  <a href="index.html#numbers-in-javascript" class="currentModule currentPage">Numbers in JavaScript</a>
    2.  <a href="index.html#helper-methods" class="currentModule currentPage">Helper Methods</a>
    3.  <a href="index.html#modulo-and-power-operators" class="currentModule currentPage">Modulo and Power Operators</a>
    4.  <a href="index.html#things-to-know-about-math-in-javascript" class="currentModule currentPage">Things to know about Math in JavaScript</a>
        -   <a href="index.html#infinity-and-negative-infinity" class="currentModule currentPage">Infinity and Negative Infinity</a>
        -   <a href="index.html#not-a-number" class="currentModule currentPage">Not a Number</a>
-   <a href="../types-objects/index.html" class="currentModule">Types - Objects<span class="videoNumber">Part 09</span></a>
-   <a href="../types-null-and-undefined/index.html" class="currentModule">Types - Null and Undefined<span class="videoNumber">Part 10</span></a>
    1.  <a href="../types-null-and-undefined/index.html#undefined" class="currentModule">undefined</a>
    2.  <a href="../types-null-and-undefined/index.html#null" class="currentModule">null</a>
-   <a href="../types-booleans-and-equality/index.html" class="currentModule">Types - Booleans and Equality<span class="videoNumber">Part 11</span></a>
    1.  <a href="../types-booleans-and-equality/index.html#equality-equal-sign-double-equal-sign-triple-equal-sign" class="currentModule">Equality (equal sign, double equal sign, triple equal sign)</a>




<span class="grit">Types - Numbers</span>
=========================================

![Beginner JavaScript](../../../../images.wesbos.com/upload/w_700%2cq_auto%2cf_auto/v1621453897/wesbos.com/bjs.html)

Enjoy these notes? Want to Slam Dunk JavaScript?


JavaScript, Types, NumbersEdit Post

There is only one type of number in JavaScript, which is simply number.

Comment out all the code in `types.js` and add the following 👇

    const age = 100;
    const name = "wes";

Open `types.html` in the browser and then open the console and type `typeof age` and hit enter. The console should return to you "number".

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:504px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:59.46666666666667%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYA/xA/GoqlVTG0kmBRTsAVLWIVq7S73ws7O3ndnL4%2bZrZBogZO/weTzTzb9RQXl6qrDxacmHz5);background-size:cover;display:block"></span> <img src="../../../static/1903104a1f7b75f0bfe7b6b434477e58/08115/typeof-operator-in-console.png" title="typeof values shown in the console" alt="typeof values shown in the console" class="gatsby-resp-image-image" /> </span>

**typeof** is a keyword in JavaScript that allows you to check the type of a value.

You use it by writing `typeof` followed by a space and a variable or value. That will tell you whether it's a number, a string, or any of the other types.

<span class="grit"><a href="#numbers-in-javascript" class="hash-anchor before"></a>Numbers in JavaScript</span>
---------------------------------------------------------------------------------------------------------------

Numbers in JavaScript are pretty simple.

You can create an integer, which is a whole number (100), or you can create a float which is a number that has a decimal (100.5).

Both are used in the same type of number.

There is multiplication, division, addition and subtraction available to us.

Add the following code to `types.js` and refresh the html page in the browser.

    const a = 20;
    const b = 10;

You can perform the following calculations in the browser 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:322px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:182.29813664596276%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBElEQVRIx6WWa3PaRhSGd5ym/zJxm87Y+RNtmmn7KR/yB9rpNL36Epz2QzJNU8ck4zhOcGIM5mJzFQgkkARIAgRIPB0JmeDYbW2imWfO2XMOL2dXuwtCevWcrVSU41oNuVqnoWmojSamZeM/4xk810VqmvzxVia2n2InliCeynNcqpMtyGSLMoKTxx0AI3pmi7am4tgdNEUOaMgSuiKjyhJKtUyzVkGpSgE1qYRcLk59cfdxlrtPjrjzKMWdR2m+frDPVxv7fPN7nC/XY9xaj/HF2mturb3m85XdwL8deROMb63FpnHf3r6/hxCLa4jFVcQnaxM+vR+yjrgROc1nofXzN+6fzfuxqzcfcPXmxpSPQgJ/eYOryxM76/9XTFxZ2uDKsk+Eqb+0wUJoz8YiYf15dRHEbPKMP2uX/q0u8i6/FHa4sBxhYRo88WcLw9g5dQtLp2Pi1FRmvmk2trB8NnbS2UlsIfTFxzcfcJqNc/yLxybb5voa4toqYnF9wvXVCX7s2krI6js7za2+l1tBfL95yA9baX58luW7Jwm+/euAe9EM96Jpfnp+xG87BX59kZ/yy3YuzGf5eTs3ifs1IULKZajkM4wdm3R8D60m4Zg6jPoYSpXkm1ccJfcpZBJkE28oH6dh2IORTTmbIHvwmqOQzP4u4jiXJ55I0mhqvIrtkcsXqCsqTU1HqlSJJxIkU2lS6QzJwxSZoyPUpsZxRedlPM/W7iFbL5Nsvjhgc+cAUa/XaTabGIaBoiioqoqu62iahmmadLtdOp1OgD/2rabr5CoGeblDqW5RUnxsioqFePr0Kbu7u1iWxcOHD4lGo9i2jSRJbG9vk0wmg3G73T4l3LU7dC2fNrbZYtC3ScTfIgqFAtVqNSgqlkqUy+XgQ37XxWKRSqUSiPkzaLVaUwzjLLpuIHq9XjAtfzDsWUGxL+i6Lp7nBXY4HF6YQNDvQNMVGNrIsozRak1u6/GYyz7Ccfq47pi9HR2zM5om5hELBP0Oh0OXeKyFZXmhGMF05yEQ9N+iabVwOs1g2/hr6D9zCTqOg2mZaHoDhu1AsB0KzrWGkyl7bD5SeP639uFr6HfojjxKeZtS3poKue6ca9jt2pidDrqhwtg/IWV0wwjb9N77qf9/RMvso7dtag0Ny7LR2l0ahkVvMMbuu9jO5RCFmsb+ocGfjxtEX6gc5lRkvYek2kiNyyO0To+GMUCSHWSlh1TTMawhhukzCO3FEbZtYZodVLXm77zg6PlXF9O/Spd8y6PRiH7fod22GPQHdHs9HGcw3TqXRfjXlu9kDk2ePVHxPOYWCwT7zhDPc3H6Q2xrEFxXH4KoaCMGo/lOxblr6HnjD5rimSnPntt5z+9sh/8ADKKditgcQOkAAAAASUVORK5CYII=');background-size:cover;display:block"></span> <img src="../../../static/f19f96442461d9b1f62eed1e1059aeb9/fc778/arithmetic-calculations-in-console.png" title="simple math in the console" alt="simple math in the console" class="gatsby-resp-image-image" /> </span>

The only thing to be aware of is when you are mixing types.

If you try to do math with a string type for example, you start getting into **concatenation**.

That is what we refer to in JavaScript as *"the plus sign is loaded"* meaning the plus sign can be used with numbers to add, with strings to concatenate, and then there is a lot of room to run into bugs.

If you try to do math with strings, it will convert them for you if you are doing subtraction, division or multiplication, but not for addition.

Whenever we are doing math, we need to make sure we are dealing with true numbers and not mixing types.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:183px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:72.67759562841529%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYA/TQBCG/cs5gARShRB3BAfgFoQ4FEUKKDSoCBUi2jRuSqokxE/xzgAAAABJRU5ErkJggg%3d%3d%27);background-size:cover;display:block"></span> <img src="../../../static/e096f907d0b8649d694b25c0dfd08372/e6f05/string-multiplication.png" title="strings of 10 and 10 can be multiplied" alt="strings of 10 and 10 can be multiplied" class="gatsby-resp-image-image" /> </span>

Along with numbers we also have what we call helper methods.

If you go into the browser console and type `Math.`, you will see a lot of built in helper methods.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:389px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:182.39999999999998%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVRIx61V63LbRBgVCX03aAN9g8IPiMO7ACmX3zClMFMoJOkw05mmTtMkGIYpjRM7sS3fJNmSLNmWZFlX6+LD7PomJ3YdpmjmzO5+3+7R+S5aMV67Ad1SMXD68G0Ttqkj9B0MAw/xwB3Bt6F2dVQEGQ2Og8DzUGQZqqJAliS0ZJmOWkcFky51cFjoYD8v4ffXPH4+KeLxnyx+ODjD989e48HzLL579g8epk/x6CiPnw5z+PEwhwfPT0djOouHL87x6PgST89EMMwnv4H5lGAH72zuYC21h7XULta3nuDdrSej8bPROPLt0TlFYk7shINZJ4dTOyDjGiF8C6xv7k4I/z8whJWyp2bj+vhtI99483ik66n/6rkJYWp2eIIpYWrmnxKmkmTz+5m1icLNedLr852ZLXVlnVDN3Nraw62tXSwfk9hb6WeYjx5jio9/xdz6XgLUlvDf++W6naw/+OoYG/ePcGf7Jd77/AC3tw9x+8tDbNw/xt1v/piC7Hv/i0Pc2T7Ch18TWwZ3v81gY2wnHGQfI1RL0BQJuipBqLJwTQ2x70AVefCVEpQmh2a9gm5LBCIPltaCWC+hJVQgVC5htkUg9tGRm/Q8w5YrqHM8ypUqiiUWcktBV9NRq3M4zZ4hf3GB7Nk5WJaF0ukhW5JwkMlh/ziLpy9e4e8cD6ltotFs4DyfB1Ovc1AUBe12G+VyGYZh0DmBZVmwbZvCsvroaAbkdh+q5qBjuFA1G/VGG+1uDzzPgeM4MEdHL1GtViGKIvb396HrOniex8nJCbWRF2iaRu2GocPs6egZGnqGDq3bAc/V0Dd7yGQySKfTYCzbhaKq9LCiqJTAdmx4ngfXdeE4zhvgwvN8Oif7fd8H40eALMvI5c5Rq1WgaV3EcTzFcDhcieTDhGEA14lhmRGanI1KhUeJZVEoFuH5PiWNomgpiJ8oC8NwRBjHEXw/wsCPYOguGg0RQqOBSrWGwWCAmzxzhElHHIc0l7V6nRYmCAJqXxXuHGHSEQQhmuJIYa9njl5yg/yRSOYUzggDKEoLothE3zTHuocrQybdsJSQE2SUKjy4Rgu2Fy5ABNeP6dzxIvSdAS4LLC3ONUIivcq3kS+JOP4rB1G1oBo+FN2jUHUfcseBIPegGgO6ljouXp1eYDiMFytsihJ4oQliIoji4RRxPKR5tiyb+sg6DCMUi8XFCkc5VGhRzEkOh8tyOBx3RoxCoTAjnK9yAFVVwQsCWi1lZctMznW7XdrkCxUSdRzPz3QMl1c5eW5JHwYQJYk2tiTJU/uib/ZGjR0GAeoch0KxBJYtIxyHsYgwqfDap5dsm263Q8PmhcYbw16q8HqVR3cjyaOqtufC/s8Kg8GAtg2pcLVaoxfvW4VMjETZZbFEr69Vlb4RIQmXXLDkH5L03bjKV3NIfkikuckNsircRYT/Ag9SmjbcZkGIAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="../../../static/035b937a48524d2446385b4099fb2029/00a4e/autocompletion-of-methods-in-console.png" title="autocompletion of the Math static methods" alt="autocompletion of the Math static methods" class="gatsby-resp-image-image" /> </span>

<span class="grit"><a href="#helper-methods" class="hash-anchor before"></a>Helper Methods</span>
-------------------------------------------------------------------------------------------------

There are four you are most likely to use.

1.  `Math.round()`
2.  `Math.floor()`
3.  `Math.ceil()`
4.  `Math.random()`

Let's go through each one, starting with `Math.round()`.

To use `Math.round()`, you pass a value in between the parenthesis `()` *(that is referred to as passing a value, which we will go over in a future video).* It will return to you the number that was passed in, rounded up or down depending on the number.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:240px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:57.91666666666667%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYA/TMBDN/8XsK/jy6RJICGhaky03dZSwVqGAE0wNbTkR7O0jpP/gAp2JdHhMBEJQAAAABJRU5E);background-size:cover;display:block"></span> <img src="../../../static/e7521de2f49bcaee1dac475f72d18832/8ff5a/math-round-in-console.png" title="Console rouning 20.5 up to 21 and 20.2 down to 20" alt="Console rouning 20.5 up to 21 and 20.2 down to 20" class="gatsby-resp-image-image" /> </span>

There is also `Math.floor()` which will give you the lower end of that number.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:287px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:45.644599303135884%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYA/TMBDG8/2/yaoNsaK9YwNNAlUUQtIitVtYpybpirY2f5w4re/K9%2b5%2bAl1WsOwINu0FAAAAAE);background-size:cover;display:block"></span> <img src="../../../static/12e0949bdc4511115e520d27353d7063/480fd/math-floor-in-console.png" title="console showing 20.2 and 20.999999 rounded down to 20" alt="console showing 20.2 and 20.999999 rounded down to 20" class="gatsby-resp-image-image" /> </span>

We have `Math.ceil()` and that will give you the upper number.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:295px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:25.08474576271186%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYA/4PUryR9kbqhVhFsRV7LTatN7VS%2b7vZ7GaTnd3kk8TaB9ADH/4RsgTH82caa8swAAAABJRU5);background-size:cover;display:block"></span> <img src="../../../static/bf41119c7f89c953c42fcd814456b34b/e4a3f/math-ceil-in-console.png" title="console showing 20.2 and 20.999999 rounded up to 21" alt="console showing 20.2 and 20.999999 rounded up to 21" class="gatsby-resp-image-image" /> </span>

Then there is `Math.random()` which will give you a random number every time between 0 and 1 (in a future video we will go over how to get a random number between 1 and 10).

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:269px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:118.95910780669145%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXklEQVQ4y4WVeVPbRhiH/f2/QP/oTNpOc01CQoBAOUwwdxIMvkNCbHxI8qFblnVa0tPR2iEwpa1mVtrZlXb3/f3e91EhjmPCMMQwDPwgwLJs5vM5QRiK8dlshuvO8H2f6XTKzPNIkkS881grqKoqXtzc3qV0dELp6BhlOKQ3GIj+TrFI8cMBu/sfqNbqaLpGfmVZxmNXIVtOZlnKPImIwpiZ6xNFc8IwII4jojgkikLR97yQZJ7mX921xeKLZ8FxbHwvprg55POZzs66QuPSoLQz4vWffV781mXrnczaqz6npTG1sib6e5sK668H/P5Lm6PieHlqKOS75jtaRoKuRjjWXGxg6iFjJWAkh2iTSMxpkxBvFqOpPkPZReq5DLou2sQnTVOhbcHzPPLWaDWQFYmb7zf4gY9tWwxHMgOpx0DuM5AGyEMZ27Ef1W4hW0bBsizh4FW1QqVWo3XdYqKO0XSVWrPG58sLLq4u+VQu077t4EztRxa7Z0p+1DQF20yJwgxTizG0kMkoQJECtHGEpce4ToJlxKjjfHwmnpORh6YGd44LDS3bFJrtbCi0ajpvn3fZ35J49bTLyz9uOSoqbK8POCzKHO4N2V6TeP7klp0NmWpZ4/xoQhyld2EX8lsuZpKkpAkkScZ8npGmP+NIl1kShnOCICKO5wR+TJLMRX/x/aIVdF3Hcabs7BX5fFHm5PQcTdORZJmPny44Ojnl7Pwjp2fnNJpNJqr6Q7mFEfcMEScMgkCsbFoaw5GCZqjMPAc/cBmrCpIiIckSA3mA7Zgiyf/NZWFKvmAYJtQvHWwzoXllc1bSKJ8ZHO8btGpT2l9n3H73qJVN6lcmF+cqjYrBdcOkWTWWlbM0ZTZziaJ8QZvOzZT6pcWnE5VqWed4f0LjyuD7tcO3lkXtUqdZNalcaPQ7Uzo3Fq2acVeKIuScEFEUYTk6UewzdS0xmWYxGRFB4OL5LmHkCxniOPhh1V0tp+k9U1R1ImizldPm8EQQR5IVbnt9Dg6P2S3uUzwosbO3T6VaZ6L+D20elk4iKON5kUijnDx5evh+tGDgXZpkIsw4Tomj5Kfjech5zTq2x/aawtemw+HeiL/eyRzsjFh52mXzrczGiiQSf/ONwunBiI2VPi+edFl51qO0O3pw2kJO5Xa7g+tkTO08YTNsKxLlp08iUXL5eE4h28xLz2OkzBgPPSZDD9MImM+TOx0LrpuLnsOhSq/fo3X9BT/wMC2TvtTnpv2dzm2HTvdWEOcnbbJ/kGYZsk0Q+AJf9UaDb+2vgjSGqdP80qBSv6JSrwgadXtd3JnDf12F/KhpkmGoiaBNDtSh5DGUfIZSiNwLUMc5eBMMLULqeSiSR7/rIvVdhrL3oO4FbbxZxN77Ia26wfs3fVZf9tlaHbD+SuLZr2323sucH48o7Sq8fdGjuKWw+rLH1qrE9prM/H5iC3SnC1FzmqTLfv7TypN38ctcpFPeFuIvCTNPHpAmN+VvbXUF+J7fNfMAAAAASUVORK5CYII=');background-size:cover;display:block"></span> <img src="../../../static/8afe6435083ebf68ac706a2732cb6cdc/98fe2/math-random-in-console.png" title="Console showing Math.random() returning a random number each time" alt="Console showing Math.random() returning a random number each time" class="gatsby-resp-image-image" /> </span>

<span class="grit"><a href="#modulo-and-power-operators" class="hash-anchor before"></a>Modulo and Power Operators</span>
-------------------------------------------------------------------------------------------------------------------------

Along with multiplication, division, subtraction and addition, we have two more operators which are called the modulo and the power.

Let's use the example here where you have a box of 20 Smarties (a Canadian candy), that you need to split up between your 3 kids.

    const smarties = 20;
    const kids = 3;
    const eachKidGets = smarties / kids;
    console.log(`Each kid gets ${eachKidGets}`);

In the console, that evaluates to `Each kid gets 6.66666666667` 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:437px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:34.400000000000006%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYA/f4v1R%2bBhi6h5LZZx5blWyXLdizHlySLQ3KKRN%2bgAx/DwMyZ/rcc7P1%2b8xdm0gg65jhh7QAA);background-size:cover;display:block"></span> <img src="../../../static/403d62ef76fd35f19fb2f9e422eeff7e/5a428/each-kids-gets-6-dot-66666666667-in-console.png" title="Each kid gets 6.66666666667 in the console" alt="Each kid gets 6.66666666667 in the console" class="gatsby-resp-image-image" /> </span>

That is obviously not going to work because you aren't going to split a smartie into a 0.6666.

Instead, what we can do is specify that it is a whole number of smarties that we need and we can't round up because we don't have extra smarties so that is one instance in which we can use `Math.floor()`.

Modify the code to use the following instead 👇

    const eachKidGets = Math.floor(smarties / kids);

Now in the console you should see that each kid gets six.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:358px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:45.530726256983236%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYA/4PpCFEDCSK0Uy2yZAhC7KuY127sZsBAttveoyJGm8n%2bZJz//YNQGuwAAAABJRU5ErkJggg%3d);background-size:cover;display:block"></span> <img src="../../../static/8a8096c9ab6d564831af80b467e83530/39185/each-kid-gets-6-in-console.png" title="Each kid gets 6 smarties int he console" alt="Each kid gets 6 smarties int he console" class="gatsby-resp-image-image" /> </span>

Now how many smarties do we have left over?

When you can no longer evenly distribute them, there will be some left over (for dad!). How can you figure that out?

You can use the **Modulo operator** to tell how many are left after they have been evenly split up.

In the console type the following, and you should see the value 2 returned. 👇

    smarties % kids;

and you should see the value 2 returned. 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:333px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:65.46546546546547%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYA/%2bDUsknL6aih1oKPjB35wuE47Gwu4AiitqpWU9zlZypfMhWd/BxEoAAAAASUVORK5CYII%3d%27);background-size:cover;display:block"></span> <img src="../../../static/aee60a6fbe5902c8b8d39b70082d9b70/24c7e/modulo-operator-in-console.png" title="Modulo Operator returning 2" alt="Modulo Operator returning 2" class="gatsby-resp-image-image" /> </span>

After the smarties have been evenly distributed between the kids, there are 2 smarties left over. The modulo operator `%` will tell you how many are left after you evenly divide them.

Add the following to `types.js` 👇

    const dadGets = smarties % kids;

Another example would be there are 10 smarties and 3 kids. If you divide the smarties evenly, there will be one left over.

    10 % 3 = 1;

<span class="grit"><a href="#things-to-know-about-math-in-javascript" class="hash-anchor before"></a>Things to know about Math in JavaScript</span>
---------------------------------------------------------------------------------------------------------------------------------------------------

Other things you need to know about math in JavaScript is that if you do `0.1 + 0.2` in the console, it will return `0.30000000004`.

When people who are learning JavaScript encounter this, they often think that JavaScript is buggy.

Wes suggests trying the following in the browser console: 👇

    window.location = `https://${0.1 + 0.2}.com`;

That will take you to the following website [https://0.30000000000000004.com](https://0.30000000000000004.com/), that will explain why this occurs in JavaScript.

This happens in almost every programming language, and it's the reality of working with floating point numbers on computers.

One takeaway is that if you are ever working with money, don't store it in dollars and cents.

For example don't do this: 👇

    const price = 10.34;

That is because if someone gives you a 20 dollar bill, you can run into issues with the long rounded number and you have a half cent left over you aren't sure what to do with. That is ripe for bugs.

What Wes does is he stores all of his prices in cents, so he is always working with whole numbers and doesn't have to deal with fractions. When he needs to display the price, just divide it by 100 and round the cents *(we will look at examples of displaying money soon)*.

### <span class="grit"><a href="#infinity-and-negative-infinity" class="hash-anchor before"></a>Infinity and Negative Infinity</span>

Another thing you should know is JavaScript also has `infinity` and `negative infinity`. At the end of the day, there is a max that computers can calculate with numbers. If you try to calculate something that is too high, it will return to you infinity or negative infinity.

We will go over an example.

If you do `10 **`, the double `**` actually means *"to the power of"*. So `10 ** 2` returns 100 and `1000 ** 2` returns 1000000.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:256px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:125%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsTAAALEwEAmpwYAAADl0lEQVQ4y5WV21PbRhTG/f/P5KUvbSc8cWmaaTNhGlIgMZhbwMQQsEMhBVu28U03y7Jl3SX/Oru2qQ1OmR7NGe1Ku9+es9/5djPD4RDhjuOQ/1xg/Y/3HB4dc3FZRDcMCmfnfC6csfUhy+7ePp1Oh7+ur1lde8VlscRJ/pRKRaFcUTjO58mMRiOEiXcY+sSJj+97hFEkv0dxTBB4eN4Q1/PkOMM0UTWdNE3xPJ8oiomiCN/3yYhGEARyoNr2+HbVJ/BT4sDBtU0godMKGPRjuYAAmdpsMNN2RqRar9/LzvlJlx9flLF7Mc1ijtL2GrFvUTwf0Gl6c5NnwWYXyDBjYTCa7TLtucOEJBk9AVzkmWnuwmoVh6OczoeNNu4wXhjBcyZTNk1Tdi7Peqy+rLHysordCx72TPg0gjQdu3wWRThdNUmSuQ0fR5Q8pJ1KsGSyESlxnMg5jz0jGO73+3JSteywt62yud5mZ1OV5Ay7LYzqjWRdVwNyWxrKnTuJfkGEruvSarXkgC+nPX5ZqrG6VOP1cg3TiNHvzrk92iAYaFTKAW9WGtyUBg+AT/bw/2z4LMDjGnyI0PO8h5S/Xth8ObW4+Wqzu6Xy9lWD++pwDmy2BheyLABt25ad69KAgx1NqiV/YJJ9r2JoviTiMdPfrcPpaoI1wR4LS3vMcpLEkzECXDAdP2VZRKjr+rgOC5YkZOmHCss/K+hqiNW4oXZxQOR2qdx5rP/a4KcXFUpnvYXESMBpYSu3Q/a2dQ53DD7lDPr9BKv5N82rE8KhRfM+onDcJbuh0aguLp05lh8X9nO2iGkpvW63K38IZvc/ahxkOxzudMgf6nzKaRzuqhzvq3SNsRyTWEz+DstCKaK4BXrz3qNWdrCtgEbNoa4MUMoOWsfnqtjDMoMZGf6rcdlOxv05LYvD9GleCaQxiR9ILcdRTDD05eGQjlKiMJLv0QQjI+6TqfQaRwr3+2XKb69Q/vxGPXvH7ZsSsR9hXqtUN2+of7xFu2hSz97SKdRp52s0Dip0v2njlMV5KEDl/WGHGMUO6lkTW7Gwqxau5oz/WT5O08bruviWR69i4rT7uNpAgjkte17LwjRDI4qDaSmT+MNxEUcRmqYSpfGzrGcGgwGGYcgPzVaL2rsNmhvvqP/+G8rKMsraKtpejoaiEIThdObEJ2KatkWEYRjKK0DISN4rzgCn3cIzTVxdw2m38SdaF5suxv2X/wOBcHeMskZXvwAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="../../../static/3eeaab49e5cd451427775fa56ad7fa4b/6f3f2/infinity-calculation-in-console.png" title="A calculation returning infinity" alt="A calculation returning infinity" class="gatsby-resp-image-image" /> </span>

Negative infinity is also a number. Wes has never run into this in his programming, unless you have goofed something up.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:243px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:37.86008230452675%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYA/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUUlEQVQoz42SS0/REopyrL859Kv2nwd59y3%2bAA);background-size:cover;display:block"></span> <img src="../../../static/5f6c54888c10133215328dfe28ff502a/8aea6/typeof-infinity-returning-a-number-in-console.png" title="typeof Infinity returning a number" alt="typeof Infinity returning a number" class="gatsby-resp-image-image" /> </span>

### <span class="grit"><a href="#not-a-number" class="hash-anchor before"></a>Not a Number</span>

Another thing to know is `NaN`. NaN means *"not a number"*.

If you try to do something like below, it would return NaN 👇

    10 / "dog"; // Return NaN

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:183px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:42.62295081967213%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYA/UsiOCtF4%2bCnioe67XoyXpSoQS0tQWRJjT2A2Nr07RpbbOhT/8U3Eq%2bxAGZgZOsAAAAASUVO);background-size:cover;display:block"></span> <img src="../../../static/88b74cccb54d31b1cdb540650c268f55/e6f05/nan-in-console.png" title="NaN in console" alt="NaN in console" class="gatsby-resp-image-image" /> </span>

**NaN** is a type of "number", which is confusing since it means not a number.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:201px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:44.27860696517413%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYA/bUBCF/a/7HyrElkWBRVvURYsqwQKxKk1EGqlQKsxDKHFshe/WKeuY11r9NFEWGZhVV3VSad);background-size:cover;display:block"></span> <img src="../../../static/4bf54647749768c86f117f129fd1c613/2ef63/typeof-number-in-console.png" title="typeof NaN is a number" alt="typeof NaN is a number" class="gatsby-resp-image-image" /> </span>

That is something you will run into if you try to do math with something that is not a number. Instead of erroring out, it will just return NaN.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/01-the-basics/08-types-numbers/08-types-numbers.mdx)

[**← Prev**](../types-strings/index.html)

Types - Strings

[**Next →**](../types-objects/index.html)

Types - Objects

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.

<img src="../../../static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg" alt="Syntax Podcast" sizes="(min-width: 1800px) 1800px, 100vw" srcset="/static/83ff22ad325f96d7f69f822a5385b55e/cd18a/syntax-logo.jpg 450w,/static/83ff22ad325f96d7f69f822a5385b55e/0a45a/syntax-logo.jpg 900w,/static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg 1800w" />

![Master Gatsby](../../../../res.cloudinary.com/wesbos/image/fetch/w_700%2cq_auto%2cf_auto/https_/courses.wesbos.com/images/GAT/GAT-social-share.png)
