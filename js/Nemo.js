const Fish = require('./Fish.js');

class Nemo extends Fish {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Kur Nemo?';
    }
}

module.exports = Nemo;