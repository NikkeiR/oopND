const Bird = require('./Bird.js');

class Chicken extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cip cip';
    }
}

module.exports = Chicken;