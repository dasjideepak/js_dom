### Use `index.html` and do the following:

1. Add a script tag to the bottom.
2. Change the body style so it has a font-family of "Arial, sans-serif".
3. Replace each of the spans (nickname, favorites, hometown) with your own information.
4. Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
5. Create a new img element and set its src attribute to a picture of you. Append that element to the page.


### Updating the google style

1. Open up [Google](https://google.com) in your browser and open up the console.
2. Find the Google logo and store it in a variable.
3. Modify the source of the logo IMG so that it's a Yahoo logo instead. (https://casscommunity3.files.wordpress.com/2017/06/yahoo-logo.png)
4. Find the Google search button and store it in a variable.
5. Modify the text of the button so that it says "Yahoo!" instead.
6. Change the text on the button from 'I'm Feeling Lucky' => 'I'm Lucky'

```js
let logo = document.querySelector("#hplogo");
logo.src = "https://casscommunity3.files.wordpress.com/2017/06/yahoo-logo.png"

var searchButton = document.querySelector(".gNO89b");
searchButton.value = "Yahoo!";

var anotherButton = document.querySelector(".gNO89b").nextElementSibling;
anotherButton.value ="I'm Lucky";
```