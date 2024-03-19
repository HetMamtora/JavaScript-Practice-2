console.log("11) Create a button dynamically and add it to the webpage.");

const container = document.getElementById("container");
const button = document.createElement("button");
button.textContent = "Click Me";
container.appendChild(button);