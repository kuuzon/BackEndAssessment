class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    };

    static disposition = "Happy!"

    eat() {
        return `${this.name} is eating!`
    };

    sleep() {
        return `${this.name} is going to sleep!`
    };

    wakeUp() {
        return `${this.name} is waking up!`
    };
}

module.exports = Animal