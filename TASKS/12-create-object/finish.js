/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const infoPerson = {
    name: "Andrew",
    surname: "anonymous",
    favoriteNumber: 13,
};

// dot notation
console.log(
    `My name is ${infoPerson.name} ${infoPerson.surname} and my favorite number is ${infoPerson.favoriteNumber}.`
);

// Destructuring
const { name: firstName, surname, favoriteNumber } = infoPerson;

console.log(
    `My name is ${firstName} ${surname} and my favorite number is ${favoriteNumber}.`
);
