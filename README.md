# coin-conversor-javascript
**Simulate** a coin conversion in real time.

<img src="./preview.png">

This is a simple project to train my javascript skills. <br>
**1 - Select the type of coin that will be converted** <br>
**2 - Select the type of coin for which be converted** <br>
**3 - Put the value in the correct field.** <br>
**4 - See the Magic!** <br>

## How was maked?

The most important in this project is the **javascript**.

And this won't be possible without an API:
https://docs.awesomeapi.com.br/api-de-moedas <br>

We can detect the input in the our HTML and pass some functions in **javascript**, like that:

```js

const coinURL = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${from.value}-${to.value}`
    ); //The template literals makes more easily to concatenate
    //The 'await' is to wait the 'fetch' return a value.
    //The 'from' variable is the value of the first <select>.
    //The 'to' variable is the value of the second <select>.
    //The value of the selects is passed in abreviate form, like: usd or brl.
    //by luannzin; https://github.com/luannzin/

```

But, we need to transform that 'fetch' into a JSON Object to can extract what we want.

```js

const valueCoin = await coinURL.json();
    //Here we are passing the JSON Object to a variable called 'valueCoin'.
    //Now, like a normal object, we can destructuring them until we find what we want.
   
```

Them, just get what we want.

```js

const bid =
      valueCoin[`${from.value.toUpperCase()}${to.value.toUpperCase()}`][`bid`];
      //Here it's where is stored the value that we want.
      //The cotation based on the selected coins.

```

## Author

luannzin <br>
https://github.com/luannzin/


