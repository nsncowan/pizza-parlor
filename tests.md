describe: function Pizza {}

test: create an object called Pizza with properties for: order number, size, toppings
code: testPizza = new Pizza;
      testPizza;
expected output: testPizza {orderNumber:, size:, toppings:,}

describe: pizzaPrice()

test: return a base price of 10 for a small pizza with no toppings;
code: let testPizza = new Pizza;
      testPizza.pizzaPrice();
expected output: 10;

test: return a price of 12 for a medium pizza with no toppings;
code: let testPizza = new Pizza;
      testPizza.size = "medium";
      testPizza.pizzaPrice();
expected output: 12;

test: return a base price of 14 for a large pizza with no toppings;
code: let testPizza = new Pizza;
      testPizza.size = "large";
      testPizza.pizzaPrice();
expected output: 14;

describe: toppingPrice()

test: return a total surcharge for pizza topping on a $1 per-topping basis
code: let testPizza = new Pizza;
      testPizza.toppings = [pepperoni, peppers, pineapple];
      testPizza.pizzaPrice();
expected output: 13;

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

test: 
code: 
expected output: 
