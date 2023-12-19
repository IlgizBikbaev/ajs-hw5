import { Daemon } from "../js/daemon.js";

test('make Daemon', () => {
    const daemon = new Daemon("лучник", "Daemon");

    let daemonFirst = {
        name: "лучник",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }

    expect(daemon).toEqual(daemonFirst);
});

test('Daemon by levelUp', () => {
    const daemon = new Daemon("лучник", "Daemon");
    daemon.levelUp();

    let daemonUp = {
        name: "лучник",
        type: "Daemon",
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    }

    expect(daemon).toEqual(daemonUp);
});

test('Daemon by level', () => {
    expect(() => {
        const daemon = new Daemon("лучник", "Daemon");
        daemon.health = -1;
        daemon.levelUp();
    }).toThrow("Герой умер, нельзя повысить его уровень!");
});

test('Daermon by damageUp', () => {
    const daemon = new Daemon("лучник", "Daemon")
    daemon.damage(10);

    let daemonDamage = {
        name: "лучник",
        type: "Daemon",
        health: 94,
        level: 1,
        attack: 10,
        defence: 40,
    }

    expect(daemon).toEqual(daemonDamage);
});

test('Daemon by damage', () => {
        const daemon = new Daemon("лучник", "Daermon")
        daemon.damage(167)
        expect(daemon.health).toBe(0);
});
