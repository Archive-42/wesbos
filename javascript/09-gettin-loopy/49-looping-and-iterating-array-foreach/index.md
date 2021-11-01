








-   <a href="https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach" class="currentModule currentPage currentSection">Looping and Iterating - Array forEach<span class="videoNumber">Part 49</span></a>
-   <a href="https://wesbos.com/javascript/09-gettin-loopy/50-looping-and-iterating-mapping" class="currentModule">Looping and Iterating - Mapping<span class="videoNumber">Part 50</span></a>
-   <a href="https://wesbos.com/javascript/09-gettin-loopy/51-looping-and-iterating-filter-find-and-higher-order-functions" class="currentModule">Looping and Iterating - Filter, Find and Higher-Order Functions<span class="videoNumber">Part 51</span></a>
-   <a href="https://wesbos.com/javascript/09-gettin-loopy/52-looping-and-iterating-reduce" class="currentModule">Looping and Iterating - Reduce<span class="videoNumber">Part 52</span></a>
-   <a href="https://wesbos.com/javascript/09-gettin-loopy/53-looping-and-iterating-reduce-exercise" class="currentModule">Looping and Iterating - Reduce Exercise<span class="videoNumber">Part 53</span></a>
    1.  <a href="https://wesbos.com/javascript/09-gettin-loopy/53-looping-and-iterating-reduce-exercise/#regular-expression" class="currentModule">Regular Expression</a>
-   <a href="https://wesbos.com/javascript/09-gettin-loopy/54-looping-and-iterating-for-for-in-for-off-and-while-loops" class="currentModule">Looping and Iterating - for, for in, for of, and while Loops<span class="videoNumber">Part 54</span></a>
    1.  <a href="https://wesbos.com/javascript/09-gettin-loopy/54-looping-and-iterating-for-for-in-for-off-and-while-loops/#the-for-loop" class="currentModule">The for loop</a>
    2.  <a href="https://wesbos.com/javascript/09-gettin-loopy/54-looping-and-iterating-for-for-in-for-off-and-while-loops/#for-of-loop" class="currentModule">for of Loop</a>
    3.  <a href="https://wesbos.com/javascript/09-gettin-loopy/54-looping-and-iterating-for-for-in-for-off-and-while-loops/#for-in-loop" class="currentModule">for in loop</a>
    4.  <a href="https://wesbos.com/javascript/09-gettin-loopy/54-looping-and-iterating-for-for-in-for-off-and-while-loops/#while-and-do-while-loops" class="currentModule">while and do while loops</a>



##### <span class="grit">Module 13 - Ajax and Fetching Data</span>

-   [AJAX and APIs<span class="videoNumber">Part 74</span>](https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis)
    1.  [What is an API?](https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/#what-is-an-api)
    2.  [JSON](https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/#json)
    3.  [AJAX](https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/#ajax)
    4.  [Public API list](https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/#public-api-list)
-   [CORS and Recipes<span class="videoNumber">Part 75</span>](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes)
    1.  [Query Parameters](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#query-parameters)
    2.  [CORS](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#cors)
        -   [What is CORS?](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#what-is-cors)
        -   [CORS policy](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#cors-policy)
    3.  [Babel](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#babel)
    4.  [Browserlist](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#browserlist)
    5.  [Proxy](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/#proxy)
-   [Dad Jokes<span class="videoNumber">Part 76</span>](https://wesbos.com/javascript/13-ajax-and-fetching-data/76-dad-jokes)
    1.  [Headers](https://wesbos.com/javascript/13-ajax-and-fetching-data/76-dad-jokes/#headers)
    2.  [Getting a Random Index](https://wesbos.com/javascript/13-ajax-and-fetching-data/76-dad-jokes/#getting-a-random-index)
    3.  [Loading State & CSS Loader](https://wesbos.com/javascript/13-ajax-and-fetching-data/76-dad-jokes/#loading-state--css-loader)
-   [Currency Converter<span class="videoNumber">Part 77</span>](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter)
    1.  [Caching the Rates](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter/#caching-the-rates)
    2.  [Converting](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter/#converting)
    3.  [Hooking Up The UI](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter/#hooking-up-the-ui)
        -   [Input Event on a Form](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter/#input-event-on-a-form)
        -   [Wiring up Handlers](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter/#wiring-up-handlers)
        -   [Formatting Currency using Number Format API](https://wesbos.com/javascript/13-ajax-and-fetching-data/77-currency-converter/#formatting-currency-using-number-format-api)

##### <span class="grit">Module 14 - ES Modules and Structuring Larger Apps</span>
##### <span class="grit">Module 15 - Final Round of Exercises</span>


<span class="grit">Looping and Iterating - Array forEach</span>
===============================================================


JavaScript, Iterating, forEachEdit Post

Let's talk about looping and iterating. There are a few different ways to loop in JavaScript and we will cover them all.

The most common way you are going to loop over something in JavaScript is looping over an array. Most of the looping also works the exact same way.

We will use a method that lives on the array, and we will pass it a callback, just like in the previous video.

The callback function will run once for every item in the array, giving us access to each individual item.

Open up the `array-looping-methods-START.html` file, which contains all the practice data we will be using for these exercises. Most of it is the same as the last video with the addition of a `students` array.

    const toppings = ['Mushrooms', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chilles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

If you wanted to loop out over every single one of the toppings in the array and log them to the console, or display them to the user, the very basic loop we have is the `.forEach()`.

You should recognize it from previous exercises we did, when we were adding event listeners to multiple elements.

What we are going to do is take `toppings` and use the `forEach` method on it, passing it a callback function that will run once for each item in the array.

We can define our function outside or inline.

    function logTopping(topping) {
      console.log(topping);
    }

    toppings.forEach(logTopping)

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1468px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:39.46666666666667%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVQY032Q3W7CMAxG+/5Pt4lCk9pO4jSUtB0SPwnQjiYT3Q1oYkffpT/ZPkXfd2zZe59zSml+yTznnGMMzLx1TitlLSsio7W1trFcmGZXgfHDId7u4fr9nPNluoxzvz+WFQrQH6tqLfGzFJ+lWFewEVigdk07XKd0jOPpMr0kjuF27/bHjaSaeLWpq1qVFawFCjQCdHE4HNq2Hccx/yGllHM+n0+E4JoGEY3RiKAUsTGWuRiGLyQVY/ydfmZefg4hICIzSymJSEoJAEppbUzR9f3O+8VQeldWD1W2rmtjDAAgol4ovO/ctp2m6d3mGCMzO+cUPWwTkV5sW2sfZ7v2v3IIAQC0NkIIIhJCSCkRUSn1A87vu8zQZFdUAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/5d1b4e35dc593623a45f9ddbcf8a06c1/e4ba2/619.png" title="array forEach output in console" alt="array forEach output in console" class="gatsby-resp-image-image" /> </span>

If you refresh the page, you will see that we are logging every single one of the toppings as we loop over them.

One thing Wes likes to do is throw a debugger into the foreach and take a look at the dev tools.

Modify the code as shown below to add the debugger breakpoint 👇

    function logTopping(topping) {
      console.log(topping);
      debugger;
    }

When you refresh the HTML page, the debugger should open once it hits the first item in the array.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:57.333333333333336%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABp0lEQVQoz4WNy07bQBiF54EqqNKKJfAqlYhooQvCNsFB6gpZtLBNHJD6BOAQ1AdgwRalTcMlENLYmYs9novtOB7bQQmtCqJRP32bXzrnP+Dt+v7r1d25vD6f1+emzuf1Vyv6wvruil59t1Nd+LiXW9t789zchy+5958BWNoAy5szLExcmuFyAfw9FqfOjG4+SW5MJhcLQDPqpapZqhxvGWapVi9WTa1maoZZrBxrtZOSUS8fNoqVo2LlaMuoa7VG+eD009dv24en5YMGoA4Z+ZwSbPXsm6vu9x93vXsYBb5P4dBDvmvHPlNROAp8B1vOoMNIN+QD4f5KIwoumq3rm1tC2XWHnZ/dN9u4eel0LWkhaSNhDTh0hoQlrhjfdTvtnxcI9iiFzCOehwHGLoTIwYQhFvqhSuLRKFIqHr8AYtpqtW0bIoTtAcSYACmEL6XruIEXPA9nf/yNEKJvWQhj6nmEEM454FPieDKVPeHlMvMYgWQo5FBKpVSiFBCcSyGSNB3/D0YZsUkgRKZUmmUqjidlwXn0L5Lp+0fTJMEY961++EgQcMYeABSZ5g6capakAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/a6b508b9b4cd0f73753856484c2c368c/aa440/620.png" title="placing debugger in the logTopping callback function" alt="placing debugger in the logTopping callback function" class="gatsby-resp-image-image" /> </span>

As you can see, the debugger is in paused state. We have access to the call stack, and it tells us we are in the function `logTopping`.

Below that, the debugger tells us what the `topping` variable is equal to which is "Mushrooms", as well as the value of the `this` variable, which is equal to the Window.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:468px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:28.53333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABF0lEQVQY033MzUoCARTF8WtQvU9BUK0slbJFz2G4iNLRFlErDQlMszGzNNLGwI+cFBfSaJvaRiT0KgXWP2amUkRa/OBwLvdI7+WZt94r/Y934BO++j9G87BxnU3i5S7x8gOxkkH02iCq2SLFew404491K7aJFNpEtQ6xG4PDMUQW/MiMjznfHjk9hVpNkq4kyDVOUCtmTqJWEmTrx2SaRS5aBS71I7zKPjK7gSz6kfkh094w4gywthPjtpPjvJbiqnFKtZun0Dwjr6dRSwm0Vob6k47+WOPOyLK+uYu4FKZWw0yuDIjDHWTCE0SWTQriCtmWgtaDld0h++bcQpzbVp7wKDjcAcz/YTJa/MscsYZ+O8XmGQx+AygwLsihAmu+AAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/74216ec75f31c6302cdd4145026c13c7/90372/621.png" title="paused status in debugger in the dialog box" alt="paused status in debugger in the dialog box" class="gatsby-resp-image-image" /> </span>

If you click the symbol shown in the image above twice, the JavaScript code will continue running.

Now we are on the "Tomatoes" item. You can click all the way through the array.

As you know, we can also inline the function as shown below and it will still work exactly the same 👇

    toppings.forEach(topping => {
      console.log(topping);
    })

One thing you might be having trouble with is where is this `topping` variable shown highlighted below is coming from. You may be wondering if it's a special keyword because it is a singular of toppings which is the name of the variable that holds the `toppings` array.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:874px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:70.4%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVQoz12S2W7TQBSG+wJkqePE2ZcmdsZLbCdeZ2KP1ziLG5Um0JCSFkqDWsEFElxxwRP0hovyDEiId4SYNgikTyPNxXf0H/3noCA6OcHOCTbZS94dOMEm918ekayWoB4CRPZwPuEgL+KKFFTlsCz5VTmsyEFJtqt9u6qGZXVUVkdVxSvBZSH4SPkfCsEnfrQoiYiSEjknWLL5TDPXnHKim2teWdCGaQRmP/D1yBO8EYpMfn7DXP8Y3H7n3v5cvnsPDLWu4JyADwqiQ/J22Qzr/qwRzJqj47IWiKYuQ5/xLrnJlp9uufEbzl5V1DHVDysDL7+PXRCdkoQrRlizxzU8qbvTshoA3RQM3ESnwFsx7qrjnLX1mJLcfM/am8nOPYc2IAFgloEZGh4ykOBwCrhPgJMBVrqL0oyeZowMgIfskOAsgrNI4VEmBbttL5ngouOeg/BVa3jSMRBvQQlDFkKAMOuesv4L2t90w4uOt2HwvNLHf/yd3ESn4vSq66+F8SWDF0cqEiwoWJBFsGtanLcA3hnjnfcmrxnvJe8/raveg1wQnSwwU7SW6RopWssCM8u5SWw3xboZFqdpNcPsSHXUDEBZdkgI1uPOgt1Ai46/aeFdtgact1TEIsQhxOhGexgV53fU8R0Rf+UWnweOXpKcmjT6uzONl8p8y0ebfnzF+UsAYd81Vc+UbAjcaeP5/dHZN+rkfrD+orpaWcat/uRBLsoOycOi6TejWTOateN5xYhUqCluyIy28vxWjG/4yXXXW+V7DsHvrjXXs/c945bi1zSfGvglxS+pASW5NdmqD3BxMK7qcUWPq3pc06dJz/ifnskeFmEEhgHB2XneJnez7Zywuz5SsHL8kOStXMJ/5m/5F5qWq92Dm7vxAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/9eb9a2b137dfe73d527707a9ba9ee93b/30c92/622.png" title="different ways to write forEach loop" alt="different ways to write forEach loop" class="gatsby-resp-image-image" /> </span>

If you remember back to when we learned about arguments and placeholders we said that arguments were the actual values and the parameters were the placeholders.

When we define the function, we put a placeholder, a **parameter** in there, and then when the `forEach` loop is called, JavaScript will slot the appropriate array item value into our parameter variable, whatever we may have called it.

To capture the argument, simply define the function with a parameter.

How do we know that?

We can look at the `forEach()` docs on MDN.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1156px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:94.39999999999999%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVQ4y5WS0YriMBSG+/5voeKFete7cYsggg8gVLCCaauZzVJsS9IkPe1JsqyhshedcfwuQgh8yTl/TmCt/RwAAPcOgXMuSZLD4RDHcdM0zjlr7U9lQEMo+8N+3yjN85wQkj0ghDDG8jynlN5utyzLKKVpmuZ5fh8IejRcg0EEAEQUQpRlWdd1VVV+9ZvnYVmWYiCwzq0/Pubz+Wq1mkwmaZr+vPLAWLte/1oul9vtNooixtgbsnOu67q6rr0AAEKI5gHnvBkwxozLAFAUhU9Ia62UklJqraWUSil/15dy3/eMsev1er/flVJN00gp/Sql9NpoIwGaf3DOq6oqikIOKKV8FYj4Zc9obAdAKSWEpGn6fPDZrd9rrcfLttZKKeu65pz71zw+M3/XuGyMAYAsyy6Xy/l8LstSSskf9H3/4qu6vrfWtm3rU1VKAUDbtlrrZ1Se8cA+KT0ej0mSnE6nZ89KKc65EOLFkPwPInpZCOEbfiGHYTibzRaLxXQ63e/3b4wnGrPb7cIw3Gw2URTFcfzebCNi27ajA/i9/BfXfEQ2g6WZPgAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/fe22098f39aaba193329cf14a8e144ad/9937c/623.png" title="forEach mdn documentation for syntax" alt="forEach mdn documentation for syntax" class="gatsby-resp-image-image" /> </span>

In our case, we chose to name the `currentValue` parameter `topping`.

We also have the ability to get the index and the array, so let's take a look at what that looks like.

Modify the code like so 👇

    function logTopping(topping, index, array) {
      console.log(topping, index, array);
    }

    toppings.forEach(logTopping);

When you refresh the HTML page and open the console, you will see that for each item in the array, the actual item was logged, the index and also the original array.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1476px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:61.6%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVQozz2Qy5KbMBRE+f+vyS9klZqayow9E1tgAXqgJ0KPKyTAzibFJlW96k2fPs1Hp3/8vL+93/AFk5YI4dgg6L3no2SjYh0dML/++v311V5/f1/fr5fL/evjz+XtA6GhkTZ21xt7EM2UQQ9rvOVKI2zkbKgweJTS0ettaHvKjZg0EzOfZk6V1KGppWCELKHApkzIs6ybc9DjfVk2NxfOs1/45aIJOYOxZtwQItHdG92sOXupn5Bftezz/Ny2A9K+LM9a9+B3vxQAR+k8TTHGDCmmBClBjKWUJsaA7y0onRlL+LEDVGsjQsXaqk0eenBu+vzUZDSUWIztNFlKFULBmBN7FqL4+Kr1COG1bUdMRwh/9+2I8QCoADOhTojgPaQUvE8hxBDWnJuyrgxjUHplLHXtDun/cjEG+j4vi/q6zpS6aXLj6I3xQri+h2VpSinTMDiudh+qVud+jFXrZ87nZ+fWGCRCmhArpRXCSDkrZTiPizuxBcZJqKLUKRlSMSbhR3XubMi4eu8Qcpynec7W5hizc0mpCnDafrRIj9PuXJXi/JxSmfgBcKS4WZNj4N/fchwFIRL3glJFyNR1izHNsW0Lpas2dZ7zOJ62jcmEbCEUKTNjNcal6zznBWADqOu6QS4h7LU2KaV+GLz2uw+n5ON41bo7d+T8KuXwHkJgCE2U0seDtS3BmGFMbjcjxD/WXowZSw5+FwAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/1cf287429e7622b5b7627cbf05f00f0c/913a1/624.png" title="console log of the loop with current looping value, index and whole topping array" alt="console log of the loop with current looping value, index and whole topping array" class="gatsby-resp-image-image" /> </span>

Why would you need to pass the original array?

Because if you need to grab something from the original array, you can.

Let's do a quick example where we have to loop over each topping and:

-   log the topping
-   log the next topping if there is one
-   log the previous topping if there is one
-   if it's the last item in the array, log "goodbye"

The first one is easy, simply add `console.log(topping)`.

Let's do the next topping.

We have the index already and the original array, which we will rename because `array` is a bad parameter name. We also won't name it `toppings` because we already have a `toppings` array that lives outside of this function. Let's rename it to `originalArray` instead, like so 👇

    function logTopping(topping, index, originalArray)

Add a log of `originalArray[index]` and refresh the HTML page.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1472px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:55.733333333333334%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVQoz32SyXbDIAxF/f8/WFyQBGZMGHZxclJjWkw2PRnu/vKkJ6Zcijb2cllrrdsTtdacs9YGAOQBAGitkSiEMOVSpFqu12trbd/39kRKaTicc0BkXwyRvjl3zk0xJUBc17W1Vmvd/3PIeVkWRAQAIjnPs5KSDznlrI3dtm1/RWutlGKMkdSRhzbe8t5PKSXnw/6G1lpOSSkFiAIAABljNJK9m5z35xjbe3I+xgYQQiDRPM89X4ieHE5nbez95z4Ke7XzkXzIAMAYG7J1rre9aHO73T7IY0khBBH1sam3PZJPi9Yfdi6lWGul7JUppbgQi9ZEFHyYzjEaY9urCz/unPMYu9eF+NiZc2vtFGP8nHz8MC2lRMShKaUQ8e+H/QIa9Wb5nhMS4AAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/d5168dc6133e6f286f6d2d9c8fa5d1eb/0d390/625.png" title="adding a log of originalArray[index] + 1 to access current looping value via index" alt="adding a log of originalArray[index] + 1 to access current looping value via index" class="gatsby-resp-image-image" /> </span>

    console.log(originalArray[index + 1]);

So now if you try adding 1 to the index as shown above, you should get the next one. 👇

Modify the code as shown below to add a log to see when it's looping

    function logTopping(topping, index, originalArray) {
      console.log(topping);
      console.log(originalArray[index + 1]);
      console.log('--------🍕-----');
    }

When you refresh the HTML page, you should see the following 👇

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1454px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:61.6%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjUlEQVQoz12R63LqMAyE8/6PdyiB2JbsOIFCaXP3PXbOJJmhhZ39+2m1UnZ7tDlBJi69cqMJo37xZOZutCeCBROHnBwLOOTkX07yAj/OLGv6qbp+CUYfj59uMqP2kwlPKzt/t+OpAMLER17kBTsci/xMTwU7nmmmlKovl7Zp4hxinJclvXpxzkpZ1lWFAGUpEAEBpCwRIeuH4Xq7OzU4o30I6VUb7JDzspSUUgAkhDIGiBwA1uSfpnVTb7UK3qcU32ClFF/hkjHGEbcRwDlnjGVt11VVtexKKcX410tKwXtElGW5Y2STEAIYy5x1w6hUc1d9Z6yN8Tc5xrgsyzRNiFhuMG7JjDEAWJPHcZBSGmOe2W9rhxCklHVdA4AQAjdJKTnnmbW2advh++a08n5eUno99mK04Rz3zohICAEARFyTldLXz8++a0Pwfj3Ye7Ix5rn23plSyvl27WlSVX1pHvcU57+Fn7D3nnMupdw77zACMkYzrfX1dm/uV6uVte6N31+1l9wXJoSsP9te9R8+YJsBnc+MGgAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/7f4b89501c7a65a569a3f05af8fca740/8b640/626.png" title="accessing the current looping value directly or via array index in console" alt="accessing the current looping value directly or via array index in console" class="gatsby-resp-image-image" /> </span>

If you scroll all the way to the bottom, you will see that when we get to the last one, the next index returns `undefined`.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:22.400000000000002%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVQI12XNyw6DIBRFUf//BzVKAXsHbZSXInCBIk1tTExcozPZOU2MUSptxRv9FmPc97Jf1FqFEAAwjiM/EEIAgFJqjGkQ8QlgN1sO17KUUmuVUnLOH6eu6xhjfd8rpZoQgpBKTa/gXc6f+/M8z4wxcmrbllI6DMMv9iGmnJO3CUPKud4459Z1XZbFHLTW/42IX2gQ4a3BDr2QAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/d117127a024577d0c8b65f130d3de21c/aa440/627.png" title="at the last index next element returns undefined" alt="at the last index next element returns undefined" class="gatsby-resp-image-image" /> </span>

We can check whether the next topping exists or not by adding the following code 👇

    const nextTopping = originalArray[index + 1];

    if (nextTopping) {
      console.log(nextTopping);
    }

Now if you refresh the page and look at the console, you will see that for the last item, we are not logging the next one because it doesn't exist.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1486px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:22.133333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVQI113N2Q6CMBRFUf7/10xEURwoXKBauVBECnQApTVqYow76/kcrx/6nFKllXtlf1k7O+eEENm7JIkBgBACAAnAiVJPaVPVN8FLJaUZp8dsv+6P2TrHeZ1mOaQZQBonEBGSvoYgy6l3xuYQnxjDqul5q5refF073copZ3y1jdZhtAz2fnBYrEJ/c1xu9sGOeNKMUmvZXuUwKDP+Pc/WtaJDxOKjQMYuiGWBWJbVEyha3YKhZEGKAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/d8bec841f2e74682fb0aa7c70fd666ff/236d7/628.png" title="removing the undefined based on a ternary check whether we have a value at the next index or not" alt="removing the undefined based on a ternary check whether we have a value at the next index or not" class="gatsby-resp-image-image" /> </span>

We can go a bit further and make it a bit easier to understand using a ternary function.

    const nextTopping = originalArray[index + 1];
    nextTopping ? console.log(nextTopping) : null;

That works just the same. Instead of putting `null`, you could put an empty string `""`, it doesn't matter as long as you put something there.

Now the previous topping.

Move the `prevTopping` and `nextTopping` variables to the top of the function and use the ternary operator to log the previous topping like so 👇

    const nextTopping = originalArray[index + 1];
    const prevTopping = originalArray[index - 1];

    prevTopping ? console.log(prevTopping) : null;
    nextTopping ? console.log(nextTopping) : null;
    console.log('--------🍕-----');

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:748px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:61.33333333333334%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVQoz32S227rIBBF/f9/GGBmMBc7BVzbicDYCvaRw2krNVEXDzxtzdoDjVKaiLQxKaXli5TSNE0xxpyXeZ699yGEvu+JCACUUtbaEEIzTbPWZvQfpZRHKccLxhgA4FycRwjOORExxs5wSimEcPddznnbtv2HUq+u66SUiAgAiMgYk1IKIYZhaD6cF4AufB7Hsb9wHMf1eiUiRLw8YYwREefcOdf4cBbK8b6/4/F4GKPbtq1jn/68hk/t+Xay3T9jTOu6vub7vm/btg5HIiGEUgoATm3nnLFm3bY/tL87A0DtzDn33jfjONrO5hT3vZRSfoVLKVpronNDAPC97f/hFOPtdlvGa0px295oW2ullHVsXdtPZ/f8AV+P+kbbe6eUqrWpdtYKEc/JwzAYY/OSquRbbUSq2pzzy4XV1z7DOedpnu++W5a0rttruOs6rbUkkk8QUSlFROM4/gOpVZz+9NyydgAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/28883105fc07cc2240330d27a30aa2d1/f8915/629.png" title="console log of the prevTopping and nextTopping by adding 1 in the index or subtracting 1 from it" alt="console log of the prevTopping and nextTopping by adding 1 in the index or subtracting 1 from it" class="gatsby-resp-image-image" /> </span>

Now the first and last topping should only have 2 items logged while all the other items have 3 items logged.

If it's the last item in the array we need to log "goodbye". How can we do that?

Let's use `.length` on the array and a ternary statement.

    index === array.length - 1 ? console.log('Goodbye') : console.log("getting the next topping");

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1484px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:58.666666666666664%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/09-gettin-loopy/49-looping-and-iterating-array-foreach/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVQoz3WR626EIBCFff/n22RVmBnw2l3FGyIqa2mUZtM26feDBMKZmTMnGoahLEuttXNuD2xbOLdtc/tujKmqqq7roijqus7zvCyKqqqKooieTSOz/DgO/w9d1wkhACBNUwC43+/AOQAkSRK1bStltth12zZr7bIsxiyv1+vzwnuvlMqznIg450KINEmJCBEBIJrnuVXqIeH5fD6bZhjGtlXOOe99GOcU5wURAYAQgjEmLxAxGsfx4/HY7Pxu9SZctdbi4rtzmiLiVQujru8RyVr7R/auFTwjYpDFcQwAiMgYi5RSSELPs7XWGDPPs9Y6eH6PnV1DcsYEURzHl2HkjEfGmL4fmgzatlGqm7Tu+/6n567ryrIUQhCRlJJznl0QUXTmXFW7Nf6H5zBzEOtpIiJBxBhDxCRJ+BUV5/yMigPu+34cR2j4Z21930spQ1RIlCQJXZxRDcNAQvYf+bqu1q6fv/HeN00T1hN63m43zk7iOI7c6/zx2hbnXNiT/61f11VrPU3TOI5a63Ecp2kKL198npztWJJm1QAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/6dd883ce252784ee2fe2f63acbe084ce/2a333/630.png" title="printing goodbye when we reach the end of array using length property of array" alt="printing goodbye when we reach the end of array using length property of array" class="gatsby-resp-image-image" /> </span>

Let's break down what we did exactly in that last example.

Sometimes it helps to make it more readable if you put part on it's own line like so 👇

    index === originalArray.length - 1
      ? console.log("Goodbye")
      : console.log('Getting the next topping');

So the condition we are checking is `index === originalArray.length - 1`, which checks whether the current index matches the last index in the array.

We have access to the index of the currrent item in the `index` variable, and we can get the index of the last item in the array by doing `originalArray.length - 1`.

If it is the last index, log "goodbye" and if it doesn't, log "getting the next topping".

You could use an if statement instead of the ternary statement, it would work just as well.

We can also use the && hack we learned about earlier, like so 👇

    index === originalArray.length && console.log('Goodbye');

Why does that work?

Because if the first statement is true, it will keep going for the next one and if it is false, it will short circuit and never get to the second one.

That is what we referred to as **abusing conditionals** in our previous videos.

That wraps up the `forEach` method.

It is a bit different than the other looping methods because it doesn't return any values.

Notice how when we loop over each of our items we don't store our results in a variable like below 👇

    const result = toppings.forEach(logTopping);

When you loop over an array with `forEach` it doesn't actually return anything to you. It goes off and does some work for every item that is in that array.

Let's see how that is different from what Wes likes to call the 'Big Three' which are:

-   Map
-   Filter
-   Reduce

We will go over those in the next video.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/09-gettin-loopy/49-array-foreach/49-array-foreach.mdx)

[**← Prev**](https://wesbos.com/javascript/08-data-types/48-array-cardio-callback-methods-and-function-generation/)

Array Cardio - Callback Methods and Function Generation

[**Next →**](https://wesbos.com/javascript/09-gettin-loopy/50-looping-and-iterating-mapping/)

Looping and Iterating - Mapping

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
