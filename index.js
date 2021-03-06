const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');
const Chicken = require('./js/Chicken.js');
const Parrot = require('./js/Parrot.js');
const Eagle = require('./js/Eagle.js');
const Dragonfly = require('./js/Dragonfly.js');
const Goldfish = require('./js/Goldfish.js');
const Nemo = require('./js/Nemo.js');

const rexas = new Dog('Rexas', 'rudas');
const garfildas = new Cat('Garfildas', 'ryzas');
const keksas = new Hamster('Keksas', 'pilkas');
const cypsius = new Chicken('Cypsius', 'geltonas');
const jack = new Parrot('Jack', 'raudonas');
const edis = new Eagle('Edis', 'juodai baltas');
const smikis = new Dragonfly('Smikis', 'melynas');
const aukselis = new Goldfish('Aukselis', 'auksinis');
const dore = new Nemo('Dore', 'spalvotas');

rexas.voice();
rexas.introduce();

garfildas.voice();
garfildas.introduce();

keksas.voice();
keksas.introduce();
keksas.eat();

cypsius.voice();
cypsius.introduce();
cypsius.flyAway();

jack.voice();
jack.introduce();
jack.flyAway();

edis.voice();
edis.introduce();
edis.flyAway();

smikis.voice();
smikis.introduce();
smikis.flyAway();
smikis.scammer();

aukselis.voice();
aukselis.introduce();
aukselis.swimAway();
aukselis.makeWish();

dore.voice();
dore.introduce();
dore.swimAway();