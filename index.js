class Pizza {
	static sizes = {
		Большая: { price: 200, calories: 200 },
		Маленькая: { price: 100, calories: 100 },
	};

	static toppings = {
		'Сливочная моцарелла': { price: 50, calories: 50 },
		'Сырный борт': {
			price: { Большая: 300, Маленькая: 150 },
			calories: 50,
		},
		'Чедер и пармезан': {
			price: { Большая: 300, Маленькая: 150 },
			calories: 50,
		},
	};
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
		if (this.size && Pizza.sizes[this.size]) {
			price += Pizza.sizes[this.size].price;
		}

		this.toppings.forEach((topping) => {
			if (Pizza.toppings[topping]) {
				if (typeof Pizza.toppings[topping].price === 'object') {
					price += Pizza.toppings[topping].price[this.size];
				} else {
					price += Pizza.toppings[topping].price;
				}
			}
		});

		return price;
	}

	calculateCalories() {
		let calories = this.baseCalories;
		if (this.size && Pizza.sizes[this.size]) {
			calories += Pizza.sizes[this.size].calories;
		}

		this.toppings.forEach((topping) => {
			if (Pizza.toppings[topping]) {
				calories += Pizza.toppings[topping].calories;
			}
		});

		return calories;
	}
}

let pizza = new Pizza('Маргарита', 500, 300);
pizza.setSize('Большая');
pizza.addTopping('Сырный борт');

console.log(`Вид пиццы: ${pizza.name}`);
console.log(`Размер: ${pizza.getSize()}`);
console.log(`Цена: ${pizza.calculatePrice()}`);
console.log(`Калорийность: ${pizza.calculateCalories()}`);
