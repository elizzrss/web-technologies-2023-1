class Pizza {
    constructor(name, price, calories) {
        this.name = name;
        this.basePrice = price;
        this.baseCalories = calories;
        this.size = null;
        this.toppings = new Set();
    }

    setSize(size) {
        this.size = size;
    }

    addTopping(topping) {
        this.toppings.add(topping);
    }

    removeTopping(topping) {
        this.toppings.delete(topping);
    }

    getToppings() {
        return Array.from(this.toppings);
    }

    getSize() {
        return this.size;
    }

    calculatePrice() {
        let price = this.basePrice;
        if (this.size === "Большая") {
            price += 200;
        } 
        else if (this.size === "Маленькая") {
            price += 100;
        }

        this.toppings.forEach(topping => {
            if (topping === "Сливочная моцарелла") {
                price += 50;
            } 
            else if (topping === "Сырный борт") {
                price += (this.size === "Маленькая") ? 150 : 300;
            } 
            else if (topping === "Чедер и пармезан") {
                price += (this.size === "Маленькая") ? 150 : 300;
            }
        });

        return price;
    }

    calculateCalories() {
        let calories = this.baseCalories;
        if (this.size === "Большая") {
            calories += 200;
        } 
        else if (this.size === "Маленькая") {
            calories += 100;
        }

        this.toppings.forEach(topping => {
            if (topping === "Сливочная моцарелла" || topping === "Сырный борт" || topping === "Чедер и пармезан") {
                calories += 50;
            }
        });

        return calories;
    }
}

let pizza = new Pizza("Маргарита", 500, 300);
pizza.setSize("Большая");
pizza.addTopping("Сырный борт");

console.log(`Вид пиццы: ${pizza.name}`);
console.log(`Размер: ${pizza.getSize()}`);
console.log(`Цена: ${pizza.calculatePrice()}`);
console.log(`Калорийность: ${pizza.calculateCalories()}`);
