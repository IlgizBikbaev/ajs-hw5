import { Zombie } from "../js/zombie.js";

test('make Zombie', () => {
    const zombie = new Zombie("ужас", "Zombie");

    let zombieFirst = {
        name: "ужас",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }

    expect(zombie).toEqual(zombieFirst);
});

test('Zombie by levelUp', () => {
    const zombie = new Zombie("ужас", "Zombie");
    zombie.levelUp();

    let zombieUp = {
        name: "ужас",
        type: "Zombie",
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }

    expect(zombie).toEqual(zombieUp);
});

test('Zombie by level', () => {
    expect(() => {
        const zombie = new Zombie("ужас", "Zombie");
        zombie.health = -1;
        zombie.levelUp();
    }).toThrow("Герой умер, нельзя повысить его уровень!");
});

test('Zombie by damageUp', () => {
    const zombie = new Zombie("ужас", "Zombie")
    zombie.damage(10);

    let zombieDamage = {
        name: "ужас",
        type: "Zombie",
        health: 91,
        level: 1,
        attack: 40,
        defence: 10,
    }

    expect(zombie).toEqual(zombieDamage);
});

test('Zombie by damage', () => {
        const zombie = new Zombie("ужас", "Zombie")
        zombie.damage(112)
        expect(zombie.health).toBe(0);
});