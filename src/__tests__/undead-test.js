import { Undead } from "../js/undead.js";

test('make Undead', () => {
    const undead = new Undead("верный", "Undead");

    let undeadFirst = {
        name: "верный",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }

    expect(undead).toEqual(undeadFirst);
});

test('Undead by levelUp', () => {
    const undead = new Undead("верный", "Undead");
    undead.levelUp();

    let undeadUp = {
        name: "верный",
        type: "Undead",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    }

    expect(undead).toEqual(undeadUp);
});

test('Undead by level', () => {
    expect(() => {
        const undead = new Undead("верный", "Undead");
        undead.health = -1;
        undead.levelUp();
    }).toThrow("Герой умер, нельзя повысить его уровень!");
});

test('Undead by damageUp', () => {
    const undead = new Undead("верный", "Undead")
    undead.damage(10);

    let undeadDamage = {
        name: "верный",
        type: "Undead",
        health: 92.5,
        level: 1,
        attack: 25,
        defence: 25,
    }

    expect(undead).toEqual(undeadDamage);
});

test('Undead by damage', () => {
        const undead = new Undead("верный", "Undead")
        undead.damage(134)
        expect(undead.health).toBe(0);
});