/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const name = "Andrew";
const secondName = "Kovpak";
const career = "Developer";

// first option (оператор плюс)
const message = "Меня зовут " + name + " " + secondName + " и я " + career;

console.log(message);

// second option (метод шаблонных строк)
const personInfo = `My name ${name} ${secondName} and my profession ${career}`; // `My name ${name + ' ' + secondName} and my profession ${career}`

console.log(personInfo);
