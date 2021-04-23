const Bird = require('./Bird.js');

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Aye aye Captain';
    }
}

module.exports = Parrot;