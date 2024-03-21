console.log("34) Implement a click event on a parent element that triggers different actions based on which child element was clicked.");

let myList = document.getElementById("myList");

myList.addEventListener("click", (event)=>{
    let clickedElement = event.target;
    
    if(clickedElement.tagName === 'LI'){
        console.log("List Item clicked",clickedElement.textContent)
    }
    else{
        console.log("Other element clicked")
    }
})