console.log("6) Write a function that checks if a number is even or odd and returns EVEN or ODD accordingly.");

function checkEvenOrOdd(num){
    if(num % 2 == 0){
        return"Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkEvenOrOdd(121))