// business logic

function Pizza() {
  this.size; 
  this.toppings = [];
  this.price;
}

Pizza.prototype.sizePrice = function() {
  let sizePrice = 10; 
  if (this.size === "medium") {
    sizePrice += 2;
  }
  else if (this.size === "large") {
    sizePrice += 4;
  }
  else {
    sizePrice += 0;
  }
  return sizePrice;
}

Pizza.prototype.toppingPrice = function() {
  let toppingPrice = 0;
  this.toppings.forEach(function() {
    toppingPrice += 1;
  });
  return toppingPrice;
};

Pizza.prototype.pizzaPrice = function() {
  this.price = this.sizePrice() + this.toppingPrice();
}