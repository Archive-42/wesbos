##### <span class="grit">Module 15 - Final Round of Exercises</span>

# <span class="grit">AJAX and APIs</span>

JavaScript, AJAX, Async/Await, PromisesEdit Post

Using **async/await** and **promises** is very useful when fetching data from an **API**.

## <span class="grit"><a href="#what-is-an-api" class="hash-anchor before"></a>What is an API?</span>

**API** is a term that is thrown around a lot. It stands for **Application Programming Interface**, and it is a way to talk to a machine in a somewhat standardized procedure.

When you are building any type of app, that app, the client, needs to talk with server that exists somewhere. It does not matter if you are building a web app, mobile app etc. If you are building a web app, the app (the client) would be the web browser.

For example, if you had a twitter app, you would need to be able to pull down your most recent tweets, send tweets, like tweets, reply to tweets etc. All that functionality is based upon what is called an API.

Most services with a public facing website will try to surface their data and functionality via an API.

As a developer, a lot of our work is just pulling data from APIs.

Let's start by taking a look at how we can go to another service and pull that data into our application in order to display it.

We will go over two examples, one with pizza and one with GitHub.

The most popular way to pull data from an API is using a URL that you can hit with some associated data, like we are doing with "wesbos" in the url <https://api.github.com/users/wesbos> used in the Github example below.

## <span class="grit"><a href="#json" class="hash-anchor before"></a>JSON</span>

In the example below, the API will respond with what is called **JSON**.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1152px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:72%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAABq0lEQVQoz42S27KjIBBF8//flnEixIDiJYrghaOUN8gImFNJTs0kqXnIqi5qv+zeDc1uHMd5nqWUQnzN8zwvi9J6Uepy+WOds/ZebrPWrat5qx3nHMJjkiRZlrVtyzkXQiiltNbz/Oi2TNOklNq27frKTghBCCkKSinlnJeMVZxXVdU0jVLKWmOMWdfVGPMfc13XEMIkSdI0DYLgeDxCCD3vdxiGZVlSSuu6ZowNw3C5XLTWzy1uyQDCPM855zGJCSFhGEYROZ0QhNAH4HQ6+T6ICGGM9b18Seac7/f7OI4xDrPzGQCAEPJ94PvgcDh4ngcAiJOEcy6ldM69mJumDYIgz/Msy4qiSJM0jKKIEIxDjDFCCGOc5zmltOu6ZVnekyGECOGyZMaY6/W6veLc5m47s+u6WmvfkhuEEC3LOE7aVizLYq27fsauqqqHmVIqpey6bpome8cY8zgf4q6te9rZrmnb8/mcpmlRFH3fa62nO8Od8cYkpXzoYRz1PDiz/hsbQphlGaVUa/33zh+N3TTNL89jjFV1TSm9fYyyFEJ8ZHbOPT3sDx8mfwOuuRZGZhpoVQAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/3267b258a6e234f16500b8417b1d98b9/4ad3a/1113.png" title="example JSON payload" alt="example JSON payload" class="gatsby-resp-image-image" /> </span>

We have discussed **JSON** a few times. It stands for **JavaScript Object Notation**, and it is a good way to transport JavaScript objects between servers and clients.

Open a browser and navigate to this endpoint: <https://api.github.com/users/wesbos>

That is part of the Github API.

_Note: in the videos, Wes is using a chrome extension that makes viewing JSON files easier called JSONViewer. If you are going to be working with JSON or APIs,Wes recommends downloading it._

Although what is returned looks like an object, it's actually just a string.

If we copy that string into the console and assign it to a variable called `data`, we can log it and access it from the console like so.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:44.800000000000004%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVQoz13R246iQBAGYN7/ZTbZm91kPSECDTQNLTSgKCeR7kYFVA7OjBcTQ2Yy2eS7/euvSgmUncqyah/PW/dW399uw7N9PNvHRzu834f39n8fPwk71v0R978m4e+/rm5lKb0WrC74lZ5bVvWs6uhLTy8dvXTFpf1JiHivLWxjhqAabAy8XQfEdALbD6Pc3+eb6LhN6DYp/CgP9nlWXHj9mjgSyqor1n5mOT72AHRkA0uatdLxQjYgIlFKc95kvDnwJi+vvO7LZmBfeYFWXeaGiY5j23dsX1TgSkWiDOeSJmsWMF1ZtwF0VOggywvj4y5hh/zExzCrusTA0cpIESEW0QCSVHOpmKIMZ5I2FcFkocwlbboEC1GFiDjOtmD1WC6wuk8RiQFK1wFBLrLIXNJnkjZbgqmo/pvLk4UymSuG6bpBtM/4kTe8Gdh3c4r9xMCZG3o4IGQH7dfxmukAuFYNrOgYwLVheSb2PW+/iYucVl9r132i2zEwYxXlbsjL6+s3l3ZUnO+j4+k2OvCGnu9j8ydxa9VNs/HtmgAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/274a33258aa7ebb25fb3bae47ed3b4ef/aa440/1114.png" title="browser console output of &#39;data&#39;" alt="browser console output of &#39;data&#39;" class="gatsby-resp-image-image" /> </span>

As you can see, it is just a huge string.

If you do `typeof data` it would return string.

That means that if you wanted to grab one of the properties from the data returned such `company`, if you try to use `data.company` it will return undefined because it's just a string.

The server returns a string, and it is up to us, the developers, to turn it back into a JavaScript object.

To do that, we can wrap `data` in a `JSON.parse()` and that will return to us a proper object, which we can then store in a variable.

    const dataObj = JSON.parse(data);

Now we can access the object properties using **JavaScript dot notation**.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:84%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVQ4y5VS246dMAzk//+qUtvHtmq7u4cDh0sSAkkgJOQeSKjYfej2qdrRaGTZGtmWXVjnOOdt2/WgnwieKFzEtIhpFuPFFXNJtVExJh9258MbrXPWh8IY0/f98/NtJBCQ34D9qPDX+/DlPny+wU83+Kkn36lolJ33w+Wcz3e4zIyyHrQTQYJz44SyTDu+WaYs2wyVhr6p8SLn9I/ZOdd1oH6UXKDdhvMjKKy1TdPUjzvb2kVBZee4+w+Y0YBA18uZGb+6uPld55xyTikfKR/nmVO69DxTzsf7tQshBIJoGBHG/UzxphcuiFSMb5TLSap5WSdxxYRLsm3MO2udCyF474uu6xBCjM1t22KMezT9fKoAmtq2bTo4jKSsHniiAA5l1bRtN05TVdcYjxjjogeg63oI0UiI2DahzLrpmS8YD5Cs9w530/IYaA0JIAIMGACAx1EIobUulNY9AJQShqAgJO3R6iB48M5rpYK1jlLHWFi5W+awrsF7rbUxxodQBBfmuhvrnt7q5fYy3Ev4VNbfSvpoFgjkgEVZ8qenrXkICEnfMUIopZJzpVRhlVknTqmUW4zHIeRmnbFO+fD/mxdCiqquVrFeF4kx57zvybnzSDnEuO97VCpqvVu7G3NYm4/jSsaYUipCCLQHC0Lr47HeSzlh2kD4ghaASNeJcRS3F/7rp6yqtW1p286UTtO4MnaNraTEoBecjxgbpa6+MeQ95Bhf45iPIx379Sg5x+OI+55SytcPpUJJQRCSSimtzw+iMErR6i5m5rw/81+cr8zv9J/qq/kPBCDDKT/Gn3QAAAAASUVORK5CYII=');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/83f35f28ac633a8fb1fb859f1d670d96/aa440/1115.png" title="browser output showing accesing JSON object properties" alt="browser output showing accesing JSON object properties" class="gatsby-resp-image-image" /> </span>

Lots of APIs allow you to pull data from their server onto your own. There are many that do not allow it and many that require API keys (which we will go into later). For now, we will be working with wide open APIs that do not require any authentication.

In the `playground` folder and create a new file called `apis.html`.

## <span class="grit"><a href="#ajax" class="hash-anchor before"></a>AJAX</span>

You will often referred to what we are doing in this video as **AJAX**, which stands for **Asynchronous JavaScript and XML**.

We know what **asynchronous** is and JavaScript, but you may not know what **XML** is.

**XML** is another way that you can receive data and it looks a lot like HTML but is not HTML.

XML was used in the past but has generally been replaced with JSON as the preferred way to send data via APIs, but you might still encounter it. Wes has only had to work with XML once during his 12 year career.

When people say "AJAX", they mean fetching data from an API and displaying it on the page.

Open up the HTML page we created and give add the base HTML and a script tag within the body tag.

    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>APIs</title>
      <link rel="stylesheet" href="../base.css">
    </head>

    <body>
      <script>
      </script>
    </body>

    </html>

The first thing we will do is store the URL in a variable. That is not necessary but is much easier.

Name the variable `endpoint`.

**Endpoint** is a fancy word for the URL that you need to visit in order to get the data.

    const endpoint = "https://api.github.com/users/wesbos";

In order to get that data, we will use `fetch` which exists within JavaScript. _(There are some other libraries that are used, specifically Axios but the fetch library is very good and comes built in to all browsers)._

To grab that data we will call `fetch` and then pass it the endpoint that we want to call, which will in turn return a Promise.

    const wesPromise = fetch(endpoint);
    console.log(wesPromise);

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:858px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:30.933333333333334%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVQY052ObW+CMBRG/f+/bpnLBoJDUNtSgrSFoojlLDabmR/2ZTc59yU397nPSmtN13UIIWK1xqCU5tQ5+r7/E+ccWtdYaxFNz060lOLECqBtW4qiIEkSPrcZlTQow78iCs7zHD9NfsJIi1WWi5/oh55iV5BuUrI8w3sfj5ZfAsuyPLG6p7gICzpvUGmN3mpkopD3vmhQeU1d1pynC15Kxqpk3O9pNynjMDyEHw5DCPS2R2cN4kNyWB85rAX7lwPyXXF8E7jWUVYVeZKQrl8psw0X56LfJ4fzLRDCjXEcObsz3owMp4Hh5CO+83G+Xq8YY9BNQ9O2GGsJ3yJ3Qz98Af/py32rRkEAAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/43a2ef308a391b1ba07fbcb230d4d4dc/42d54/1116.png" title="browser console showing output of a promise" alt="browser console showing output of a promise" class="gatsby-resp-image-image" /> </span>

To check if it worked, you can go to the network tab and refresh the page. When you do that, you will see all the requests that have happened on the page. This allows you to see when a request was sent out, and when it came back with the data.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:81.06666666666666%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8UlEQVQoz1WQ2W4cRRiF+3kg4+cBwzsEEclOWGLDG3DNBYqCQuwJQlyR2FyAgsRECY49dsjM9DJT00tVdVXX0ktVd3V1N2pbInB0dHTql75fv8r5/Keru9PzTx+9vP1wdvvh7JPvX9yUOz+82p+e7z+52J9e+7rsHb++++P8syfn945f7x2dOc4Hj53dI+ejqfPxdMx/vXs8+sOj/5ejd5PdY2fy9a+Tw9PJwdP3v3y6c3h66/6zncOTm36dJ7fuP3vvi18mB+NwcjA+Jwcnk4OTncNTJ/MWBMYogTjeMpzEIOAE4RhgmCwXHkxgGm8pjPIsRRHIGSkYUZKpnGcoduhqRRlPWcmFoIyBMHT9wAsC1/cThCHGEGHGJSYE4ZRmjAsprpUkibP0gywjleAF4yXnKIrgNozWGxSGGUIMYU7SppJWF1YXrc7rUt6oKApHq8oDcBZsZwD8vlyexckfnvcqimYAPHfdv6Lot4V3Fqk/PTbz+cttdRbQ1rYyz8uydIZhiKCYI3KZ0Tkhl5TOCb2ko6+ybDQVl8hepd0ctRe487N2GPphGPq+dxjjVV70xgxtOxgzGGO1bsrK6loXpa3rpixsU7Uq74yyTdl3xhhTN7XW2vH89WYbYZIRxlPKMaFhHCcIepvI3STbKN4AECcwjOIwjIP1BiKMEOKMFXnhUByDYGG0HAY9DKZtTZYwCCj2N0arxpimaeqmaa1VWqu6rrQulWq7rut755ufw68ere986+99t957AOdA61SGy4xuk2IdVHGUB4HOaKuqTmtbVVYpW5ZGyqaqnEXcXIBm5poXrnn+tsHSFFimPmQRLDDUlGpCdEYVRoqSVitrmlarVimj9fjb/1XXdxLnaYBFhCQAwnOl74nVUnjuCCtlytKOcGWtHeF+ZN7BAgq4xAwJOd7sS98fV3iucF2+eMveXAl3xf5+kyeJwzmnlEopCSEYY11rASV20yzOxCaUYDPC7kp6q/EEd0zpeXy1FFvwD8+JIinyMoIsAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/a2cc358c950eba5721cba0cd4840d644/aa440/1118.png" title="browser network tab showing preview response" alt="browser network tab showing preview response" class="gatsby-resp-image-image" /> </span>

If we want to get that data back into JavaScript, how do we do that? We can use `.then()`.

Before we do that, let's make a quick error handler first.

    function handleError(err) {
      console.log("OH NO!");
      console.log(err);
    }

Fetch that data and log it to the console. 👇

    const endpoint = "https://api.github.com/users/wesbos";
    const wesPromise = fetch(endpoint);

    wesPromise
      .then((data) => {
        console.log(data);
      })
      .catch(handleError);

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:34.93333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVQY05XLTW6DMBBAYe5/sVbqott2kUAJAuLYM2PPjH+wKVEuUJVPb/s6IgwEwiLMiqQaVVSA0Hm0CAbAIDtU51IIImKtHYbxcr0hUjdN6/vn+PbRz4sJFgm9ctyFK4ca/J7iq5ya6p5LKVtKKcYkkmtrXeTSX6D/ntbRiHWbp0JUPGWAHPj4U7elDW5gZmYure3HGV2WbAYH9yDokuq5WVGXr4UcEYVa67k5cnxcLazU/8x38ziO3/97ArfGlapjRJvYAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/f0abde3c299fa4a68106c26984f77c04/aa440/1120.png" title="browser console showing response output" alt="browser console showing response output" class="gatsby-resp-image-image" /> </span>

Now when you refresh the page, you will see that we no longer get a promise. Instead we get the response object you see above 👆

The response tells us the type is **CORS** which we will talk about in a second. We also have all these properties on the response object but where do we get the data?

If you expand the properties like `headers` and `body`, you won't find it.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:934px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:113.86666666666667%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVQ4y43Uy3ajOBAG4Lz/c/WZVTY5M7axscFIXISE7ioJCQF94vR0z8WZTK3YfPxVJcFLSqmqq/v9jhFmbBSCD8MAzgU6hqFL1lrnuBCz1qauLUJhmkxdQ995Ql6MMefz+XA8Inw/F8Nv39oWo7bFbBCXA6ZkoiMpMQSfFmuiUouHqGQyJhnzsu/7kpahIGM1Ci7Z5a4JmWNa9z0s+5K3dV3ztm/7k3rHOWaBpJHW0cFWJWAUyODu1cyIuV5NXftxUNfSosZiZBFSt6u6XPQwPPCSWTVNDRcNH4teDayu2PnQOeW2OC/e53leALL3OYQcwgKwAKxLeuCU6Y21b52hsjzJP34XedvA57w+bfbvbUefaEXFZG+1UDbFtP/PeixsXlg9sUaggrA7TzFp1BhC9n3ftu0LbKQZL7R96yWWTjlCKEHIKWWsTSl9gRlh+K17Hxvhqq5Op8OtunZddy7OlNJ939d1/RSntFjmRCtpy7q2OxXoVLRaOwAIIXyRnNc8hwAT6M4EE7SZiwvCuO37jhBCKW3b1lr7HK9rjjGC8JZa0UqnjNay67q+76WUWutxHMHBc/wIX0GDpU72UkkrlR1HopSa5/k/Fv4Dz3HmA9e9VYNS1BoDZVkXRVGWJWNMSvl0+B84xplhZojld646DRKkhOv1Xl4ur6+vx+ORECKE+Mcr/sQpGm7s6DQxZrQKKy2M0q5pGowxY6xpGoSQ9/4J/vjkgAOvuey0E04KaYyOMeacv5j5YyvAQQ/WTtYCaOfjX67X9qjn+CPZcZhqbiatmPJcLwEyQDT6s/CXn0/runoZJBY+zLqp+fHQXytT3WRxWj5a+DR53421ToEejGyVV0HbmUs3Cb6sawjh6fX+hd+PGvH+SN7/Z1cqekHpWBTn06NijP/G3wEwDCROsRT3ngAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/a4713890dfa1fec61e7d0814ae4569ef/078fe/1121.png" title="browser console showing reponse output with body expanded" alt="browser console showing reponse output with body expanded" class="gatsby-resp-image-image" /> </span>

As you can see, the data is nowhere to be found.

Before we can access the data, there is another step that needs to happen.

Right now we have the data streaming into the browser and we have assigned it to the variable `response`. At this point, the data is not fully downloaded and the data type is unknown.

The `fetch` API can be used to fetch any type of data, whether it is JSON, an image or raw text. It does not assume the response type of the data returned.

To actually get the data, you must tell the browser to convert the data from JSON to a JavaScript object once it is finished downloading.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:948px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:117.33333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVQ4y5WS63LTMBBG+/4Px3SgJY7tOLF1sSRrZV19k20BgaG00KR8o79nz7eafUh7SikFFdoD685SlB0Q7RTA8bCsMd3MQ0ppjnOHOvxI2IFbsFJKhFB/jbU2pbTv+/vwMouLIJ+pBl2UxfPT8/GY1U1dFkVZljfN16GmNc0nxDLGSsaEOmScUL1ta4zxTu0lLra3ltke66EfQxgOWZHnp6qq7tdOKa1xg0bxQnjnrTFa9+M4TNO4rusd88+opu+Z9oMHBeM0pg/kFSwvoLAiB2qEGcZBa70sy8dg1LOMQ6OUUN56Y8w8z+9t+xaWNVhljTbGmm3bbm/7FoYLQAMSAc3aoMP/1e4qiR4JPwqgYLSx1nrvP2Te084LQb+2wQdjjXN2W7fbC/9h3pMoBXmirOCiFiGEZYnjOO6v8284hAAIrp0VgGOc5XnOOb9nvo5zzgFS3UmiL4SXncQdgKlr0ra0KIrz+YwxVkpt2/Yv2Dp+EqIUfefQpT2Xp7bl07TEuBhjQgjDMEzT9Kb5i1nWQJ4pyqjAUnS6adC5quq6llIOw3Drw7z3gBUvOUeSIcmYoG0LEnTfG/vj1O7A4iS6qvPj0mBWFDkhJMa/LmTfX97v2tZZTbVh1qnQMw2d7LVrMEW4oS0llDjv3jXHuLrO9Ui7zhtiDdGTXzQ3+IRxReqsBqLGaTKocZdLwNgSEtf1FzzNU4+1484yp6hS3IlWVHllwKQlxRAnN8e4LtaOgo9SzsZ8N38DQKMtr6ZNSPUAAAAASUVORK5CYII=');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/c1b85ae05cc71e16bb6ce4738b52ece8/ecf19/1122.png" title="browser console showing the prototype functions of a api response object" alt="browser console showing the prototype functions of a api response object" class="gatsby-resp-image-image" /> </span>

Take a look at the prototype of the response object, and you will see that there is a number of methods on the response.

In our case, we want to use `json()`. We will return `response.json()` which will return another promise.

    wesPromise
      .then((response) => {
        return response.json();
      })
      .catch(handleError);

To get the actual data, we must chain on another `.then()` and then we can log the data.

When the page refreshes, after a split second, you should see that we have the full object logged to the console. There is no need to run `JSON.parse()` on the data because `response.json()` will take care of that.

Remember: When using `fetch`, you need to use a double promise to actually get the data. The first promise gets the response and the second one takes the response and converts it into JSON.

Now we can log information from the data we fetched.

    wesPromise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.blog);
        console.log(data.name);
        console.log(data.location);
      })
      .catch(handleError);

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:17.333333333333336%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAh0lEQVQI13XEyxaCIBAAUP//A3XRqUawQEQeMoODiHVO++7idoV5VSrNcwJAuxhh1NM6rYIx8XH3w7ABeACvtbXWW0tEpZScc621c+t66/sXQFyWM+cjpQPxQKyElagSnfvOzETEzK01yllKOY4ixtg5599aJ8Qtpdba57/rdylFTpMQIoTwBRF/qf0iNjX+AAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/a103087ff4074296146ea9dc2f59b3d2/aa440/1123.png" title="browser console outputting data from an api response" alt="browser console outputting data from an api response" class="gatsby-resp-image-image" /> </span>

Let's go ahead and display some info about the user.

A paragraph tag to the HTML with a class of "user", and then go ahead and select it in the script tag.

    <body>
      <p class="user"></p>
      <script>
        function handleError(err) {
          console.log("OH NO!");
          console.log(err);
        }

        const userEl = document.querySelector(".user");
        const endpoint = "https://api.github.com/users/wesbos";
        const wesPromise = fetch(endpoint);

        wesPromise
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log(data.blog);
            console.log(data.name);
            console.log(data.location);
            userEl.textContent = `${data.name} - ${data.blog}`;
          })
          .catch(handleError);
      </script>
    </body>

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:558px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:18.4%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVQY011P2QrCMBAsydb057xa9Ela60GinyGiFAuCz+KB9QBBo37gSJJiwYdhZnbC7MajtIDf24KSI/j4DhpcrDZz6hegeA9KDqD0DBpeXTa6gakXmNTg8glu2cELohVEO4NozED9E/zuBqK1RC3MIcIMQX0G0ZhDRDlEZw3RXMCPd2CTty1k8mnBrdbwbDD5gE0/bqvxRtt5qX/+Vb0zJUqDKV0Wlxe6kx3YH3P5+HmHR8kaXFVfrXKNLz+upAnIAxN3AAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/c73c76eb65b6de4d17aeb42d2d5755a8/42a8d/1124.png" title="text showing name and blog url" alt="text showing name and blog url" class="gatsby-resp-image-image" /> </span>

As you can see, it pops up.

One other thing you can do is set the text content of the element as loading before we replace it with the data, so for a split second you will see "loading...".

Add the following code 👇

    userEl.textContent = "loading....";
    const wesPromise = fetch(endpoint);

Now let's refactor this to use **async/await**.

Create an async function called `displayUser` which takes in a `username`. Take all the code we wrote after selecting the element and put it into the `displayUser` function.

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1302px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:80.53333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVQoz4VTW4+aQBT2NzQKrqhVEPECAwwqymUGBhBQiuC6uNvbS5O+tUnbtMm+NWlf2v7pBrG7TS/Z5GQy58x8Od/55ptaVw8H/mFAchpgCmBadhoSagDUkHADOHXJaZSV8uhUwbRc3qFOl2tNxYWuCRBSo6fz5AW3jHi01oq9lGzgPpbTqFqlfAsuk2kSi9lWiOMLSCgJ12gZD3WT0zGPMx6ljEYE5yC4R84IRduYmquRsRobZndFOLLuL92m4lIyPnemZaenGR1ZfwycPiBdYLMQclDjtHkPWl3N7y+CLkQ0QHWxnIWq4kwbWGM3Geaf+eTbOP3Bp1/Fq9tB+olN3wnXt9zxSyf/DuLjBTAa4DzqXdQogJh5DLYv+8GrSfZBzD/ym/cX5nPeL0bJ60n+the+GVhFXbT/QFZg3Nc96Ccw2EveXsWGgggg6TzcjVcuvwq6GmnJzt/IE20ZNxUiLDE0l4K1AevrKbka2z50rf6C1CWHAv9GVoIhBgZDc60QpATF1A6HZtCeBXXR+h/m984ODVDHjgZP9pwbLWx9vikkL2NXcUt1HwY3Ae6YIRvvWBzOLF1d70f4oCfXrO49miBafgjcNtfsZtd3opm1gOHlCO/V8Dhx896ClG6V0Nmep339lN7THqBUSW7GJNOCnRbfgKBgl2sYZbO44MwnkpczGpLIVsDZCGcTN2nB0vA1GpSCCUakIFNxd3L4DASFRA5t1aNlm4F+C3rtmU/LmNEIo/kM9BjNq/5GralgRq1mQFXQslPFPc+TQ072rNJftFsqbsPStPRZBufBF7oT7Ccd98H7MmuCjAAAAABJRU5ErkJggg==');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/e8f7ac160d8372bf1bf7bf32a684c165/5f652/1125.png" title="code snippet of displayUser function" alt="code snippet of displayUser function" class="gatsby-resp-image-image" /> </span>

Now let's go line by line. Leave the first line as is.

The promise where we fetch the endpoint can now be switched to `await` and that no longer is a Promise but is a response. Then we can get the data by awaiting `response.json()` like so 👇

    async function displayUser(username) {
      userEl.textContent = "loading...";

      const response = await fetch(endpoint);
      const data = await response.json();

      console.log(data);
      console.log(data.blog);
      console.log(data.name);
      console.log(data.location);
      userEl.textContent = `${data.name} - ${data.blog}`;
    }

The only thing left is to call `displayUser` on page load.

Let's go ahead and do that to display the user.

Replace the `endpoint` variable with `baseEndpoint` and make another variable for the `usersEndpoint` like so 👇

    const baseEndpoint = "https://api.github.com";
    const usersEndpoint = `${baseEndpoint}/users`;

To fetch the username that was passed in, modify the code like so 👇

    const response = await fetch(`${usersEndpoint}/${username}`);

That modification allows us to generate the endpoint on the fly based on what username was passed in as an argument.

To test this, let's try calling it from the bottom of our script tag with the user `stolinski`.

    <script>
      const baseEndpoint = "https://api.github.com";
      const usersEndpoint = `${baseEndpoint}/users`;
      const userEl = document.querySelector(".user");

      async function displayUser(username) {
        userEl.textContent = "loading...";

        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json();

        console.log(data);
        console.log(data.blog);
        console.log(data.name);
        console.log(data.location);
        userEl.textContent = `${data.name} - ${data.blog}`;
      }

      function handleError(err) {
        console.log("OH NO!");
        console.log(err);
      }

      displayUser("stolinski");
    </script>

One thing we are not doing is catching the error so if something went wrong, such as a typo in the url assigned to `baseEndpoint`.

To fix that, let's add a catch and pass it our error handler function like so 👇

    displayUser("stolinski").catch(handleError);

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:9.866666666666667%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVQI1xXCjQrCIBAA4L3/qxUjBsPocsfN6Zo2z7+RBkX08XVFyijlk8gvalfzhuiINsR1QnWfGOmQmEZRr6LBrQJ8Y4zGGAAN0GnL/SDUYydtSdvZuNVFzs2n6lPlXEN5h9JCaZz/0+sDuJz64XwZf6q9bFacYvz5AAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/c53348e8d751a9b5e21869b4137d722d/aa440/1127.png" title="browser console showing error output from api response" alt="browser console showing error output from api response" class="gatsby-resp-image-image" /> </span>

_🔥HOT TIP: You can filter out just AJAX request from the Network tab by clicking XHR. 👇_

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:66.66666666666666%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPUlEQVQoz22Qu47UQBBF/d+kiIiUXyACIcQnQMBDWiR2Z8Z2v6rbdnfb7uf4NfZ4bDSLkAg4ukEFdetWVVI9PQGA4pxSWilFCC2rigsBonxMKWIlF0IUhdKaCyGltN5bpay1pZRJczh4HwZjzjGGGJVShFIGgBBWWjdtq7QOMVrn6qZxzoUQ/PkcY9R1nYCUv349llJVUsq7k+UIpVmWIwzAGQMQhbHWee9DcCFY75331jkfQrLM8/F4xAgRQrMsg+dMAE4wTk8nADj8/MkoxRjnWQaUnh6fgMO9Oc+Tfd9N0yKEGXBC2T0KgAtB0pSmKef89Pkzw5gDMITo8Zj9+AF/Sbpoo9W+LYOVwcpGV1wUhFLOKEpTIUT68CDg/k7BOUV5gYmua6WUlCp585G+/qBfvW9fvmtfvG0+fTPR1VKpQmoMSumGC9G0bVVVWmvKWNO2WmvnXN93Ca3XQ7F8x/NXNH9JZ9rMnfGS2zKnUwzzslwul8s8z9frvCzjNF3muR+GeVm2fb/f/C/bvvWmU8g6ac/ABik7xgatr8OwTtM6jus43sZxOcel75Lbtt+2fb09a93XbetM32AdqrpTejJmNO1kzNQ2Q1PPXbdeLtdpvI7DdRzvydszf4rbdhvc0LLWCxWLIlISCYko93nW1/rZNv7x39b1f2vbXqe1rULUOlJypiRidBfBAeXucIgY+fQUgCXnrnPet8acu85YO0xjZ3qdaVtaL8oIECgJCHmEAkE+zwLKw30WDhj9Bnumw6OJptzoAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/e92dfe3a086f15349c8d01198c096e01/aa440/1126.png" title="broswer network tab showing filtered out XHR requests" alt="broswer network tab showing filtered out XHR requests" class="gatsby-resp-image-image" /> </span>

Next let's modify the `handleError` function to show the error by replacing the paragraph text content.

    function handleError(err) {
      console.log("OH NO!");
      console.log(err);
      userEl.textContent = `Something went wrong: ${err}`;
    }

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:45.33333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVQoz3WLbU/TUBiGjyP+tTrgHxgzhITof6GD+ZVFXpRvpNMQEvZhlo1vKGiQra49rz3tutOeMhbq7Muy1SxDJVHv3Hly5cr9gOMvzruP5KDV2W1cVesX2yefXtcvqycX2/XLav3zTuPq8BwfntN/lQDwdAc82y2U9h6v7BVKbxZW3hZK+4XS/qN1Dbw8Ai/eg/XafwvWarOuamBN+wUPzHMNrNZm8Nv/YQ0UN5tPyqdLlTNF1RVVX660FLVRLOszs6EvVVqLW01F/bD86qxYPlVUvbjZnI8Xt1rA67kOt28HoU1pz+UyHBgmgZgHviAIen2f2Y4FkQhCRJiFqeM6QeBjDP2+B7hlsW7XobTvusMwlH1fikB4gkDIGUfE+dZFnHnYxMQkNmT46zVpt7lhSLcHfmB0Z3ZvGJM2k4xKmwmMJKOCYJ9SQYiL0C1jmc1jCybtdmYYGbTSTmfiCxDHsYlwEMjRaHQzGERRNBwOo+h7nueTySTPp/ks83ufezWdgmgUJ0mSpul4PI7jOM2yJEmyLMsf/E3n27/yE+Osiw+mBYfLAAAAAElFTkSuQmCC');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/32e5bc31820095d133d792ce0b0d86a6/aa440/1129.png" title="rendered html page showing error from api response" alt="rendered html page showing error from api response" class="gatsby-resp-image-image" /> </span>

We wil do one more example in the next lesson.

## <span class="grit"><a href="#public-api-list" class="hash-anchor before"></a>Public API list</span>

It is hard to find good APIs that are public and don't require API keys. There is a good list of them in the github repo <https://github.com/public-apis/public-apis>

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:1500px"> <span class="gatsby-resp-image-background-image" style="padding-bottom:49.33333333333333%;position:relative;bottom:0;left:0;background-image:url(https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAp0lEQVQoz52P0Q6CMAxF+f8f9E18QHGD2I1u3Qa0M0BITDTivLlp0jYn7a1SSohO6e7a6rvuAYzzwXlaHSjEzdsEzICeiMihs2CqvKsFf1ZO2YhhzF8lIjnneZ6rvRFt6NTA7UHb7hAWkRfYUq1xYs5H+gQbumi0lNLERfBSmh6VIWZhLn9bga8VxmkufHsddZZqNcTxH3jJDC7lH/SWWbh9uM6GostPiVdN9Utv1soAAAAASUVORK5CYII=');background-size:cover;display:block"></span> <img src="https://wesbos.com/static/e1b09879099a636e540f0f5b183f95a2/aa440/1130.png" title="list of public api endpoints" alt="list of public api endpoints" class="gatsby-resp-image-image" /> </span>

You can scroll through and find different APIs for all different things.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

[Edit on Github](https://github.com/wesbos/wesbos/tree/master/src/javascript/13-ajax-and-fetching-data/74-ajax-and-apis/74-ajax-and-apis.mdx)

[**← Prev**](https://wesbos.com/javascript/12-advanced-flow-control/73-async-typer-ui-two-ways/)

Async Typer UI - Two Ways

[**Next →**](https://wesbos.com/javascript/13-ajax-and-fetching-data/75-cors-and-recipes/)

CORS and Recipes

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
