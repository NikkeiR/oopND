const Pet = require('./Pet.js');

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Niam niam';
        this.canEatTillDeath = true;
    }

    eat() {
        if (this.canEatTillDeath) {
            this.canEatTillDeath = true;
            console.log(`As ${this.name} galiu valgyt kol uzsilenksiu!`);
        } else {
            console.log(`As ${this.name} laikausi dietos!`);
        }
    }
}

module.exports = Hamster;