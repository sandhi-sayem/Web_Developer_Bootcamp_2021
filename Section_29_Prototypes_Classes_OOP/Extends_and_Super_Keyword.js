// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     meow() {
//         return 'MEOWWW!!!';
//     }
// }

// const monty = new Cat('Monty', 9);
// console.log(monty.eat(), monty.meow());

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     bark() {
//         return 'WOOOF!!!';
//     }
// }

// const Wyatt = new Dog('Wyatt', 9);
// console.log(Wyatt.eat(), Wyatt.bark());

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    meow() {
        return 'MEOWWW!!!';
    }
}

const monty = new Cat('Monty', 9);
console.log(monty.eat(), monty.meow());

class Dog extends Pet {
    bark() {
        return 'WOOOF!!!';
    }
}

const Wyatt = new Dog('Wyatt', 9);
console.log(Wyatt.eat(), Wyatt.bark());

class Bird extends Pet {
    constructor(name, age, color = 'green') {
        super(name, age);
        this.color = color;
    }
    chirp() {
        return 'CHIRRRP!!!';
    }
    eat() {
        return `${this.name} eats slowly!`;
    }
    bio() {
        return `${this.name} is ${this.color}!`;
    }
}

const paulie = new Bird('Paulie', 9);
console.log(paulie.eat(), paulie.chirp(), paulie.bio());
