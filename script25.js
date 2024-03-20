console.log("25) Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the Product prototype to calculate the total value.");

function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function(){
    return this.price*this.quantity;
}

//PRODUCT-1
const product1 = new Product("Monitor",10,16449);
const totalvalue1 = product1.calculateTotalValue();


//PRODUCT-2
const product2 = new Product("iPhone",5,79999);
const totalvalue2 = product2.calculateTotalValue();

console.log(`Total Value of ${product1.name}: ₹${totalvalue1}`);
console.log(`Total Value of ${product2.name}: ₹${totalvalue2}`);

console.log(Product.prototype);
console.log(product1);
console.log(product2);