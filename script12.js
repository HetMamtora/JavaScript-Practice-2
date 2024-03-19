console.log("12) Add a click event listener to a button that displays an alert when clicked.");

const button= document.querySelector("#buttonClick");
button.addEventListener("click",()=>{
    alert("Button Clicked")
})