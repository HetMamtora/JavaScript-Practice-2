console.log("17) Find the largest element in an array using the `reduce()` method.");

function findLargestElement(arr3){
    return arr3.reduce((max,current)=>
        current > max ? current :max)
}

    let arr3= [1,2,10,20,10,5,16];
let reduce = findLargestElement(arr3);
    
console.log(reduce)