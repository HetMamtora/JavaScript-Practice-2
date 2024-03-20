console.log("16) Use `map()` to double all the elements in an array.");

function doubleArrayElements(arr2){
    return arr2.map( num=>  num *2 );
}
    
let arr2 = [10,20,30,40,50]
console.log(doubleArrayElements(arr2))
console.log(arr2);