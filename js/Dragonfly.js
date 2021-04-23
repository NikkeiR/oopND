const Bird = require('./Bird.js');

class Dragonfly extends Bird {
    constructor(name, color) {
        super(name,color);
        this.sound = 'Burn in hell';
        this.imposter = true;
    }

    scammer() {
        if (this.imposter) {
            console.log(`${this.name}: Nesisuksi - negyvensi!`);
        } else {
            console.log(`As ${this.name} niekada nemeluoju.. no no no..`);
        }
    }
}

module.exports = Dragonfly;