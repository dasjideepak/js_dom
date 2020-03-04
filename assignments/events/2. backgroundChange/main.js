var heading = document.createElement("h1");
heading.innerText = "Background Colour Changer";
document.body.append(heading);

var para = document.createElement("p");
para.innerText = "Click the mouse button to change the background color";
document.body.append(para)

var body = document.querySelector("body");
document.addEventListener("click", randomColor);
function randomColor() {
  color = Math.random().toString(16).substr(-3);
  body.style.backgroundColor = "#" + color;  
};