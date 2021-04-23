const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');

const rexas = new Dog('Rexas', 'rudas');
const garfildas = new Cat('Garfildas', 'ryzas');
const keksas = new Hamster('Keksas', 'pilkas');

rexas.voice();
rexas.introduce();

garfildas.voice();
garfildas.introduce();

keksas.voice();
keksas.introduce();
// keksas.eat();