console.log("33) Create multiple nested elements and observe the event bubbling and capturing behavior.")

let parent = document.querySelector("div");
let child= document.querySelector("strong");

parent.addEventListener("click",()=>{
    console.log("Parent")
},true)
        
child.addEventListener("click",()=>{
    console.log("Child")
},true)