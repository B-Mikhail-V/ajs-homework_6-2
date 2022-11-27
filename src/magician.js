import Character from './character.js';
import typesList from './typesList.js';

class Magician extends Character {
  constructor(name, type, health) {
    super(name, health);
    this.type = type || 'Magician';
    this.validate();
    this.health = typesList[this.type][0].health;
    this.level = typesList[this.type][0].level;
    this.attack = typesList[this.type][0].attack;
    this.defence = typesList[this.type][0].defence;
  }
}

export default Magician;
