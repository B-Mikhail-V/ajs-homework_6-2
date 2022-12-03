import Bowman from './bowman.js';
import Magician from './magician.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Daemon from './daemon.js';
import Zombie from './zombie.js';

const bow1 = new Bowman('persona1');
console.log(bow1);
bow1.levelUp();
bow1.levelUp();
// bow1.levelUp();
// bow1.levelUp();
console.log(bow1);

const mag1 = new Magician('persona2');
mag1.levelUp();
console.log(mag1);
