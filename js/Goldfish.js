const Fish = require('./Fish.js');

class Goldfish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Give me some bait';
        this.grantsWishes = true;
    }

    makeWish() {
        if (this.grantsWishes) {
            console.log(`${this.name}: Ispildysiu 3 norus!`);
        } else {
            console.log(`${this.name}: Next time..`);
        }
    }
}

module.exports = Goldfish;