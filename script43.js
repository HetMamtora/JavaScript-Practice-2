console.log("43) Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return ODDISH. Otherwise, return EVENISH.");

function oddishOrEvenish(num){
    const digits = num.toString().split('').map(Number);
    
    const sum = digits.reduce((acc,digit) => acc+ digit,0);
    
    return sum % 2 === 0? "Evenish" : "Oddish";
    }
    
    console.log(oddishOrEvenish(121));