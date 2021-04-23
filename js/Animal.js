class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Animal voice';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`As esu ${this.name}, mano kailis ${this.color} ir moku sakyti "${this.sound}"`);
    }
}

module.exports = Animal;