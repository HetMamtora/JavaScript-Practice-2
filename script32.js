console.log("32) Implement a form validation function that checks if all required fields are filled out.")

function validateForm(){
    let form = document.getElementById("myForm");
    if(form.checkValidity()){
        alert("Form submitted")
    }
    else{
        alert("Please enter required field");
    }
}

let form = document.getElementById("myForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateForm();
});