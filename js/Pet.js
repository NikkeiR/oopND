const Animal = require('./Animal.js');

class Pet extends Animal {
    constructor(name, color) {
        super(name, color);
    }
}

module.exports = Pet;