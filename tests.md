describe: function Pizza {}

test: create an object called Pizza with properties for: order number, size, toppings
code: testPizza = new Pizza;
      testPizza;
expected output: testPizza {orderNumber:, size:, toppings:,}

describe: sizePrice()

test: return a base price of 10 for a small pizza with no toppings;
code: let testPizza = new Pizza;
      testPizza.sizePrice();
expected output: 10;

test: return a price of 12 for a medium pizza with no toppings;
code: let testPizza = new Pizza;
      testPizza.size = "medium";
      testPizza.sizePrice();
expected output: 12;

test: return a base price of 14 for a large pizza with no toppings;
code: let testPizza = new Pizza;
      testPizza.size = "large";
      testPizza.sizePrice();
expected output: 14;

describe: toppingPrice()

test: return a total surcharge for pizza topping on a $1 per-topping basis
code: let testPizza = new Pizza;
      testPizza.toppings = [pepperoni, peppers, pineapple];
      testPizza.toppingPrice();
expected output: 13;

describe: pizzaPrice()

test: return a total price by adding sizePrice + toppingPrice
code: let testPizza = new Pizza;
      testPizza.size = "medium";
      testPizza.toppings = [pepperoni, peppers, pineapple];
      testPizza.price;
expected output: 15

test: 
code: 
expected output: 

test: 
code: 
expected output: 

test: 
code: 
expected output: 

test: 
code: 
expected output: 

test: 
code: 
expected output: 
