// Knight ou Sorcerer
// LittleMonster ou BigMonster

class Character {

    _Life = 1; 
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._Life;
    }

    set life(newLife){
        this._Life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 40;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 14;
        this.defense = 25;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor(){
        super('Little Monster');
        this.life = 70;
        this.attack = 10;
        this.defense = 15;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor(){
        super('Big Monster');
        this.life = 100;
        this.attack = 90;
        this.defense = 20;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }
    
    start(){
        this.update();

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

    }

    update(){
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1percentual = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1percentual}%`;

        //Figther 2 
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2percentual = (this.fighter1.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f1percentual}%`
    }

    doAttack(attacking, attacked){
        console.log(`${attacking.name} está atacando ${attacked.name}`) 

    this.update();

    }

}