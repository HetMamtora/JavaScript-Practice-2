console.log("18) Remove all occurrences of a specific element from an array.");

function removeElementFromArray(arr4, target){
    return arr4.filter(item => item !== target);
}

let arr4 = [10,10,20,10,30,10,40,10];
let target = 10;

let remove = removeElementFromArray(arr4, target);
console.log(remove);