import Character from './character';
import typesList from './typesList';

class Swordsman extends Character {
  constructor(name, type, health) {
    super(name, health);
    this.type = type || 'Swordsman';
    this.validate();
    this.health = typesList[this.type][0].health;
    this.level = typesList[this.type][0].level;
    this.attack = typesList[this.type][0].attack;
    this.defence = typesList[this.type][0].defence;
  }
}

export default Swordsman;
