const Animal = require('./Animal.js');

class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.canSwim = true;
    }

    swimAway() {
        if (this.canSwim) {
            console.log(`${this.name} nuplauke i placiuosius vandenis..`);
        } else {
            console.log(`${this.name} guli ant dugno..`);
        }
    }
}

module.exports = Fish;