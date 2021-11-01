

<span class="grit">Types - Null and Undefined</span>
====================================================

![Beginner JavaScript](../../../../images.wesbos.com/upload/w_700%2cq_auto%2cf_auto/v1621453897/wesbos.com/bjs.html)

Enjoy these notes? Want to Slam Dunk JavaScript?


JavaScript, Types, UndefinedEdit Post

There are two ways to sort of express "nothing" in JavaScript, and that is with `undefined` and `null`.

<span class="grit"><a href="#undefined" class="hash-anchor before"></a>undefined</span>
---------------------------------------------------------------------------------------

If you create a variable and don't set anything to it, it will be `undefined`. 👇

    let dog;
    console.log(dog);

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:937px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:36%;position:relative;bottom:0;left:0;background-image:url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYA/2uQ6ed71TIRGu6s7Ozuzihta6um0lBIAVR0K/iH7uMnr3AK3pQaTZiyiX8qy);background-size:cover;display:block"></span> <img src="../../../static/ba86f25897654e080d5b98bcb0314576/98b29/undefined-variable-in-console.png" title="not assigning a variable anything results as undefined variable" alt="not assigning a variable anything results as undefined variable" class="gatsby-resp-image-image" /> </span>

**undefined** is something that has been created (a variable), but has not yet been defined (given a value).

The same thing goes for properties on an object. If you type in the console `person.dog` it will return undefined.

Why? Because there is nothing there. That is what undefined is.

It comes about when you try to access a variable that has been created but not given a value.

If you typed in the console `wes`, you would see an error message returned that said *'wes is not defined'* which means that you didn't create a variable called `wes`.

With the dog example we used above, we have created the variable but we have not set a value. That is the difference.

<span class="grit"><a href="#null" class="hash-anchor before"></a>null</span>
-----------------------------------------------------------------------------

Now we will discuss the **null** type.

Null is a value of nothing, whereas undefined is a variable that has not yet had a value set to it.

We will go over some examples to demonstrate.

In `types.js` add the following 👇

    let somethingUndefined;
    const somethingNull = null;

*NOTE: you cannot use a const variable without setting a value.*

`somethingUndefined` is undefined because it does not have a value set, whereas `somethingNull` has the value of null, which is nothing. They are both nothing, but in different ways.

Let's say for example we have Cher and Teller (both of who are real people), who we will represent in objects like so 👇

    const cher = {
      first: "Cher",
    };

    const teller = {
      first: "Raymond",
      last: "Teller",
    };

    teller.first = "Teller";
    teller.last = null;

In this example, Cher never had a last name, so she does not have the last property in her object.

Teller on the other hand, got rid of his last name, so we are explicitly setting it to null.

In the console, if you type `cher.last` you will see the value of undefined returned. When you try `teller.last`, the value of null wil be returned.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/01-the-basics/10-types-null-and-undefined/10-types-null-and-undefined.mdx)

[**← Prev**](../types-objects/index.html)

Types - Objects

[**Next →**](../types-booleans-and-equality/index.html)

Types - Booleans and Equality

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.

<img src="../../../static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg" alt="Syntax Podcast" sizes="(min-width: 1800px) 1800px, 100vw" srcset="/static/83ff22ad325f96d7f69f822a5385b55e/cd18a/syntax-logo.jpg 450w,/static/83ff22ad325f96d7f69f822a5385b55e/0a45a/syntax-logo.jpg 900w,/static/83ff22ad325f96d7f69f822a5385b55e/7e194/syntax-logo.jpg 1800w" />

![Master Gatsby](../../../../res.cloudinary.com/wesbos/image/fetch/w_700%2cq_auto%2cf_auto/https_/courses.wesbos.com/images/GAT/GAT-social-share.png)
