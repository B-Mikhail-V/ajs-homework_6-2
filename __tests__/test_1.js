import Character from '../src/character.js';
import Bowman from '../src/bowman.js';
import Magician from '../src/magician.js';
import Swordsman from '../src/swordsman.js';
import Undead from '../src/undead.js';
import Daemon from '../src/daemon.js';
import Zombie from '../src/zombie.js';
import { typesList } from '../src/typesList.js';

test('class Character', () => {
  const result = {
    name: 'persona1',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(new Character('persona1', 'Bowman', 100, 1, 25, 25)).toEqual(result);
});

test('validate wrong type', () => {
  const _ = new Character('persona1', 'Bowman1', 1, 100, 25, 25);
  expect(() => (_.validate())).toThrow('Указан несуществующий тип - Bowman1');
});

test('validate too long name', () => {
  const _ = new Character('persona100000', 'Bowman', 1, 100, 25, 25);
  expect(() => (_.validate())).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('validate too shot name', () => {
  const _ = new Character('p', 'Bowman', 1, 100, 25, 25);
  expect(() => (_.validate())).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('levelUp method change values', () => {
  const result = {
    name: 'persona1',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  };
  const character = new Character('persona1', 'Bowman', 50, 1, 10, 10);
  character.levelUp();
  expect(character).toEqual(result);
});

test('levelUp method not for zero health hero', () => {
  const _ = new Character('p', 'Bowman', 0, 1, 25, 25);
  expect(() => (_.levelUp())).toThrow('Персонаж уже вне игры!');
});

test.each([
  [Bowman, 'Bowman', typesList.Bowman[0]],
  [Magician, 'Magician', typesList.Magician[0]],
  [Swordsman, 'Swordsman', typesList.Swordsman[0]],
  [Undead, 'Undead', typesList.Undead[0]],
  [Daemon, 'Daemon', typesList.Daemon[0]],
  [Zombie, 'Zombie', typesList.Zombie[0]],
])('all child classes, %p', (ClassName, type, persona) => {
  const result = new ClassName('testName');
  persona.name = 'testName';
  persona.type = type;
  expect(result).toEqual(persona);
});

test.each([
  [10, 41],
  [100, 0],
])('testing damage for points - %i', (points, healthNew) => {
  const character = new Character('persona1', 'Bowman', 50, 1, 10, 10);
  character.damage(points);
  expect(character.health).toEqual(healthNew);
});

test.each([
  [0, 'Параметр урона обязателен и должен быть больше нуля!'],
  [-1, 'Параметр урона обязателен и должен быть больше нуля!'],
  ['', 'Параметр урона обязателен и должен быть больше нуля!'],
])('testing damage for not available points - %i', (points, errorMsg) => {
  const character = new Character('persona1', 'Bowman', 50, 1, 10, 10);
  expect(() => (character.damage(points))).toThrow(errorMsg);
});

test('testing damage for points', () => {
  const character = new Character('persona1', 'Bowman', 0, 1, 10, 10);
  expect(() => (character.damage(10))).toThrow('Урон персонажу уже не нанести - персонаж уже вне игры!');
});
