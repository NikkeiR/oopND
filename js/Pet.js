const Animal = require('./Animal.js');

class Pet extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

module.exports = Pet;