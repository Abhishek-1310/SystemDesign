class PlainPizza {
    getCost() {
        console.log('cost of this pizza is:', 100);
    }
    getDiscription() {
        console.log('your pizza is Plain Pizza');
    }
}
// customer want mushroom pizaa

class MushroomPlainPizza extends PlainPizza {
    getCost() {
        console.log('cost of this pizza is:', 125);
    }
    getDiscription() {
        console.log('your pizza is Plain Pizza+mushroom topping');
    }
}

class CheeseMushroomPlainPizza extends MushroomPlainPizza {
    getCost() {
        console.log('cost of this pizza is:', 150);
    }
    getDiscription() {
        console.log('your pizza is Plain Pizza+mushroom+cheese topping');
    }
}

// see for every topping you have to add extra subclass

// Solution (Decorator Pattern)
// Instead of subclasses,
// wrap the pizza with decorators.


// Without Decorator Suppose you have 3 toppings:
// Cheese
// Olives
// Mushrooms

// You create classes like:
// PlainPizza
// CheesePizza
// OlivePizza
// MushroomPizza
// CheeseOlivePizza
// CheeseMushroomPizza
// OliveMushroomPizza
// CheeseOliveMushroomPizza

// Why? Because every combination needs a separate class.
// If tomorrow you add Tomato, you'll need even more classes.
// ❌ Too many classes to maintain.


// With Decorator : You only create one class per topping.

// PlainPizza
// CheeseDecorator
// OliveDecorator
// MushroomDecorator
// TomatoDecorator
// Now you combine them at runtime.

// let pizza = new PlainPizza();
// pizza = new CheeseDecorator(pizza);
// pizza = new OliveDecorator(pizza);
// pizza = new MushroomDecorator(pizza);

// Result: Plain Pizza + Cheese + Olives + Mushrooms