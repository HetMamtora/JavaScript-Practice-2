console.log("46) Create a function that takes an array of numbers and return BOOM! if the digit 7 appears in the array. Otherwise, return 'there is no 7 in the array'.");

function sevenBoom(arr){

    for(const num of arr){
        if(num.toString().includes("7")){
            return "BOOM!";
        }
    }
}

console.log(sevenBoom([1,2,3,4,5,6,7]));