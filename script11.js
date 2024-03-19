console.log("11) Create a button dynamically and add it to the webpage.");

let container = document.getElementById("container");
let button = document.createElement("button");
button.textContent = "Click Me";
container.appendChild(button);