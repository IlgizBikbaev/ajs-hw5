import { Swordsman } from "../js/swordsman.js";

test('make Swordsman', () => {
    const swordsman = new Swordsman("гордый", "Swordsman");

    let swordsmanFirst = {
        name: "гордый",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }

    expect(swordsman).toEqual(swordsmanFirst);
});

test('Swordsman by levelUp', () => {
    const swordsman = new Swordsman("гордый", "Swordsman");
    swordsman.levelUp();

    let swordsmanUp = {
        name: "гордый",
        type: "Swordsman",
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }

    expect(swordsman).toEqual(swordsmanUp);
});

test('Swordsman by level', () => {
    expect(() => {
        const swordsman = new Swordsman("гордый", "Swordsman");
        swordsman.health = -1;
        swordsman.levelUp();
    }).toThrow("Герой умер, нельзя повысить его уровень!");
});

test('Swordsman by damageUp', () => {
    const swordsman = new Swordsman("гордый", "Swordsman")
    swordsman.damage(10);

    let swordsmanDamage = {
        name: "гордый",
        type: "Swordsman",
        health: 91,
        level: 1,
        attack: 40,
        defence: 10,
    }

    expect(swordsman).toEqual(swordsmanDamage);
});

test('Swordsman by damage', () => {
        const swordsman = new Swordsman("гордый", "Swordsman")
        swordsman.damage(112)
        expect(swordsman.health).toBe(0);
});
