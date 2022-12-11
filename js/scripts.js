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


// UI Logic



function displayPizzaPrice() {
  priceToDisplay = pizzaOrder.price;
  let displayOrder = document.getElementById("displayOrder");
  let priceHeading = document.createElement('h1');
  priceHeading.append("Your Order Total: ");
  displayOrder.append(priceHeading);
  let orderPrice = document.createElement("h3");
  orderPrice.append(pizzaOrder.price);
  displayOrder.after(orderPrice);
}

function handleForm() {
  let pizzaOrder = new Pizza();
  const sizeSelection = document.querySelector("input[name=pizzaSize]:checked");
  pizzaOrder.size = sizeSelection;
  const toppingSelection = document.querySelectorAll("input[name=pizzaTopping]:checked");
  pizzaOrder.toppings.push(toppingSelection);
  displayPizzaPrice();
}


window.addEventListener("load", function() {
  let orderButton = document.getElementById("placeOrder");
  orderButton.addEventListener("submit", function(event) {
    event.preventDefault();
    handleForm();
  });
});
