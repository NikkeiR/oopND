const Bird = require('./Bird.js');

class Eagle extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'fck knows :/ what I say..';
    }
}

module.exports = Eagle;