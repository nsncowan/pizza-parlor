// business logic

function Pizza() {
  this.orderNumber = 0;
  this.size; 
  this.toppings = [];
}

Pizza.prototype.pizzaPrice = function() {
  let pizzaPrice = 10; 
  if (this.size === "medium") {
    pizzaPrice += 2;
  }
  else if (this.size === "large") {
    pizzaPrice += 4;
  }
  else {
    pizzaPrice += 0;
  }
  return pizzaPrice;
}