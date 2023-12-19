import { Bowman } from "../js/bowman.js";

test('make Bowman', () => {
    const bowman = new Bowman("мечник", "Bowman");

    let bowmanFirst = {
        name: "мечник",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }

    expect(bowman).toEqual(bowmanFirst);
});

test('Bowman by levelUp', () => {
    const bowman = new Bowman("мечник", "Bowman");
    bowman.levelUp();

    let bowmanUp = {
        name: "мечник",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    }

    expect(bowman).toEqual(bowmanUp);
});

test('Bowman by level', () => {
    expect(() => {
    const bowman = new Bowman("мечник", "Bowman");
    bowman.health = -1;
    bowman.levelUp();
    }).toThrow("Герой умер, нельзя повысить его уровень!");
});

test('Bowman by damageUp', () => {
    const bowman = new Bowman("мечник", "Bowman")
    bowman.damage(10);

    let bowmanDamage = {
        name: "мечник",
        type: "Bowman",
        health: 92.5,
        level: 1,
        attack: 25,
        defence: 25,
    }

    expect(bowman).toEqual(bowmanDamage);
});

test('Bowman by damage', () => {
        const bowman = new Bowman("мечник", "Bowman")
        bowman.damage(134)
        expect(bowman.health).toBe(0);
});