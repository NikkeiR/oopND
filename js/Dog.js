const Pet = require('./Pet.js');

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = "Au au!"
    }
}

module.exports = Dog;