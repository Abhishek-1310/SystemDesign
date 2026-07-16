// Without the Decorator Pattern, every feature combination requires a new subclass. With the Decorator Pattern, each feature is
// implemented once as a decorator, and different combinations are created by wrapping objects at runtime instead of creating new classes.


class Pizza {
    getCost() {
        throw new Error('Implement this method');
    }
    getDescription() {
        throw new Error('Implement this method');
    }
}
class PlainPizza {
    getCost() {
        return 100;
    }
    getDescription() {
        return 'plain Pizza';
    }
}
class PizzaDecorator extends Pizza {
    constructor(pizza) {
        super()
        this.pizza = pizza;
    }
    getCost() {
        return this.pizza.getCost();
    }
    getDescription() {
        return this.pizza.getDescription();
    }
}

class CheeseDecorator extends PizzaDecorator {
    getCost() {
        return this.pizza.getCost() + 20;
    }
    getDescription() {
        return this.pizza.getDescription() + ' + cheese'
    }
}

class OliveDecorator extends PizzaDecorator {

    getCost() {
        return this.pizza.getCost() + 15;
    }
    getDescription() {
        return this.pizza.getDescription() + " + Olives";
    }

}

let pizza = new PlainPizza();

pizza = new CheeseDecorator(pizza);

pizza = new OliveDecorator(pizza);

console.log(pizza.getDescription());

console.log(pizza.getCost());