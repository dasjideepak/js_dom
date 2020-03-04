//Select the section with an id of container without using querySelector.
let elem0 = document.getElementById('container');

//Select the section with an id of container using querySelector.
let elem1 = document.querySelector('container');

//Select all of the list items with a class of "second".
let elem2 = document.querySelectorAll('.second');

//Select a list item with a class of third, but only the list item inside of the ol tag.
let elem3 = document.querySelector('ol > li:last-child');

//Give the section with an id of container the text "Hello!".
let elem4 = document.querySelector('#container');
elem4 = "Hello";

//Add the class main to the div with a class of footer.
document.querySelector(".footer").classList.add = "main";

//Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove = "main";

//Create a new li element.
var lielem = document.createElement("li");

//Give the li the text "four".
lielem.innerText = "four"; 

//Append the li to the ul element.
var ulist = document.querySelector("ul");
ulist.appendChild(lielem);      

//Loop over all of the list inside the ol tag and give them a background color of "green".
var lup = document.querySelectorAll("ol").forEach(lup => {
    lup.style.backgroundColor = "green";
});

//Remove the div with a class of footer.
document.querySelector(".footer").remove();
