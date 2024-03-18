console.log("9) Create an object representing a car with properties like make, model, and year.Add a method to the car object to start the engine.");

let car = {
    make:"Lamborghini",
    model:"Countach",
    year:2022
}

car.startEngine = function(){
    console.log("Engine Started")
}

car.startEngine();