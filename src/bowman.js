import Character from './character';

class Bowman extends Character {
  constructor(name, type) {
    super(name);
    this.type = type || 'Bowman';
    this.validate();
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
