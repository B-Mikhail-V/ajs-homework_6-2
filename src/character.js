// export default 
class Character {


    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health || 100;
        this.level = level || 50;
        this.attack = attack || 25;
        this.defence = defence || 10;
        // this.validate();


    };  

    // levelUp () {
    //     if(this.health = 0) throw new Error("Персонаж уже вне игры!");
    //     this.level += 1;
    //     this.attack *= 1.2;
    //     this.defence *= 1.2;
    //     this.health = 100;
    // }

}

Character.prototype.validate = function () {
    // console.log(this.name.lenght);
    if(this.name.length < 2 || this.name.length > 10) throw new Error("Длина имени должна быть от 2 до 10 символов");
    if(!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(this.type)) throw new Error("Указан несуществующий тип - " + this.type)
}

Character.prototype.levelUp = function() {
    if(this.health = 0) throw new Error("Персонаж уже вне игры!");
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
}



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

};

class Swordsman extends Character {
    constructor(name, type) {
        super(name);
        this.type = type || 'Swordsman';
        this.validate();
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }

};

class Magician extends Character {
    constructor(name, type) {
        super(name);
        this.type = type || 'Magician';
        this.validate();
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }

};

class Daemon extends Character {
    constructor(name, type) {
        super(name);
        this.type = type || 'Daemon';
        this.validate();
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }

};

class Undead extends Character {
    constructor(name, type) {
        super(name);
        this.type = type || 'Undead';
        this.validate();
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }

};

class Zombie extends Character {
    constructor(name, type) {
        super(name);
        this.type = type || 'Zombie';
        this.validate();
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }

};




const bb = new Zombie ('gamer11')
console.log(bb);

bb.levelUp;

console.log(bb);

