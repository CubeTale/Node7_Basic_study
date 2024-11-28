class charater {
    constructor(name, level, health, str) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.str = str;
    }

    attack() {
        const randomNum = Math.random();
        const damage = randomNum * (this.str * 5);
        const floorDamage = Math.floor(damage);
        console.log(`${this.name}가 ${floorDamage}의 피해를 입혔습니다!`);
    }

    heal() {
        this.health += 20;
        console.log(`${this.name}의 체력이 20만큼 회복되었습니다!`);
        console.log(`현재체력 : ${this.health}`);
    }

    levelUp() {
        this.health += 50;
        this.str += 5;
        console.log('레벨업을 하였습니다!');
        console.log('오른스텟 : 체력+50 , 공격력+5')
    }
}

const charater1 = new charater("전사", 1, 100, 30);
const charater2 = new charater("궁수", 4, 120, 48);
const charater3 = new charater("마법사", 6, 130, 63);

charater1.attack();
charater1.heal();
charater1.levelUp();

charater2.attack();
charater2.heal();

charater3.attack();
charater3.heal();