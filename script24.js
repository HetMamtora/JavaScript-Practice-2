console.log("24) Implement a private variable using closures.");

function createCounter1(){
    let count=0; //private variable

    //inner function - closure
    function increment(){
        count++;                        //LEXICAL SCOPE 
        console.log("Count: ",count);
    }

    return{
        incrementCounter: function(){
            increment();
        },
        getCount: function(){
            return count;
        }
    }
}

const counter1 = createCounter1();
counter1.incrementCounter();
counter1.incrementCounter();
console.log(counter1);