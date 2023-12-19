import { Magician } from "../js/magician.js";

test('make Magician', () => {
    const magician = new Magician("великан", "Magician");

    let magicianFirst = {
        name: "великан",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }

    expect(magician).toEqual(magicianFirst);
});

test('Magician by levelUp', () => {
    const magician = new Magician("великан", "Magician");
    magician.levelUp();

    let magicianUp = {
        name: "великан",
        type: "Magician",
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    }

    expect(magician).toEqual(magicianUp);
});

test('Magician by level', () => {
    expect(() => {
        const magician = new Magician("великан", "Magician");
        magician.health = -1;
        magician.levelUp();
    }).toThrow("Герой умер, нельзя повысить его уровень!");
});

test('Magician by damageUp', () => {
    const magician = new Magician("великан", "Magician")
    magician.damage(10);

    let magicianDamage = {
        name: "великан",
        type: "Magician",
        health: 94,
        level: 1,
        attack: 10,
        defence: 40,
    }

    expect(magician).toEqual(magicianDamage);
});

test('Magician by damage', () => {
        const magician = new Magician("великан", "Magician")
        magician.damage(167)
        expect(magician.health).toBe(0);
});