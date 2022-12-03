import { minLen, maxLen, listPerson } from './limits.js';

export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level || 50;
    this.attack = attack || 25;
    this.defence = defence || 10;
  }

  levelUp() {
    if (this.health === 0) throw new Error('Персонаж уже вне игры!');
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2, 0);
    this.defence = Math.round(this.defence * 1.2, 0);
    this.health = 100;
  }
}

Character.prototype.validate = function () {
  if (this.name.length < minLen || this.name.length > maxLen) throw new Error('Длина имени должна быть от 2 до 10 символов');
  if (!listPerson.includes(this.type)) throw new Error(`Указан несуществующий тип - ${this.type}`);
};

console.log(minLen);
