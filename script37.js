console.log("37) Write a regular expression to validate an email address.");

const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(email){
    return emailRegex.test(email);
}

const email = "abc@gmail.com";
console.log(validate(email));