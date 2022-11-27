import Bowman from './bowman';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Daemon from './daemon';
import Zombie from './zombie';

const bow1 = new Bowman('persona1');
console.log(bow1);
bow1.levelUp();
bow1.levelUp();
bow1.levelUp();
bow1.levelUp();
console.log(bow1);

const mag1 = new Magician('persona2');
console.log(mag1);
mag1.levelUp();
mag1.levelUp();
mag1.levelUp();
console.log(mag1);
