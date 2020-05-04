const Animal = require('./animal')

class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight)
    };

    poundChest() {
        return `${this.name} is pounding his chest!`
    };

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`
    };

    dailyRoutine() {
        return `${super.wakeUp()} ${this.name} is ${Gorilla.disposition} ${super.eat()} ${this.poundChest()} ${super.sleep()}`
    };
}

const gorilla = new Gorilla("George", "160kg");

console.log(gorilla);
console.log(gorilla.poundChest());
console.log(gorilla.showVigour());
console.log(gorilla.dailyRoutine());