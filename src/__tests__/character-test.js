import Character from "../js/character.js";

test('Error by name', () => {
    expect(() => new Character(22, "Bowman")).toThrow("Ошибка! Неправильно введенноё имя!");
});

test('Error by type', () => {
    expect(() => new Character("nova", "Ded")).toThrow("Ошибка! Неправильный тип игрока!");
});

test('Error by name-short', () => {
    expect(() => new Character("v", "Bowman")).toThrow("Ошибка! Слишком короткое имя!");
});

test('Error by name-long', () => {
    expect(() => new Character("Достопримечательность", "Bowman")).toThrow("Ошибка! Слишком длинное имя!");
});