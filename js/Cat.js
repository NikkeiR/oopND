const Pet = require('./Pet.js');

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Noriu lazanijos';
    }
}

module.exports = Cat;