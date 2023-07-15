/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

const hello = (name) => console.log("Hello, " + name);

hello("Andrew");
hello("anonymous");

const hello2 = (name) => {
    return `Hello, ${name}`;
};

console.log(hello2("Andrii"));

const hello3 = function (name) {
    return "Hello, " + name;
};

console.log(hello3("Andy"));
