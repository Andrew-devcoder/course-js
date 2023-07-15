/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

/**
 * тут мы используем let переменную
 * и с помощью методов split and join
 * мы меняем оригинал
 */
let message = "Good Morning";
console.log(message);

/**разделаяем строку на слова с помощью переданного пробела в метод split */
const messageWord = message.split(" ");

messageWord[1] = "Evening";

message = messageWord.join(" ");
console.log(message);

/**разделаяем строку на буквы с помощью переданного без пробела кавычки в метод split */
const messageLetters = message.split("");

messageLetters[2] = "0";

message = messageLetters.join("");
console.log(message);

/**решение через метод replace
 */
const upgradeMessage = message.replace("Evening", "Morning");
console.log(upgradeMessage);

message = message.replace("Morning", "Evening");
console.log(message);

/**
 * решение через функцию, которую можно переиспользовать с другим текстом - меняя любое слово
 * @param {String} mess
 * @param {Number} index
 * @param {String} newWord
 * @returns String
 */
const changeWord = (mess, index, newWord) => {
    const a = mess.split(" ");
    a[index] = newWord;
    console.log(mess);
    return a.join(" ");
};

console.log(changeWord(message, 1, "Morning"));

/**
 * examination function
 */
const newMassege = "Hello, world!";

console.log(changeWord(newMassege, 1, "Andrew!"));
console.log(changeWord(newMassege, 0, "Goodbye"));

const name = "Bob";

const upgradeNewMessage = changeWord(newMassege, 1, name + "!");
console.log(upgradeNewMessage.toUpperCase());
console.log(upgradeNewMessage);
