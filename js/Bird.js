const Animal = require('./Animal.js');

class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.wingsCount = 2;
        this.canFly = true;
    }
    
    flyAway() {
        if (this.canFly) {
            console.log(`${this.name} turi ${this.wingsCount} sparnus ir gali skristi.`);
        } else {
            console.log(`${this.name} can't fly away..`);
        }
    }
}

module.exports = Bird;