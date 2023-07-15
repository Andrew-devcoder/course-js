/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

let message = "Good Morning";

console.log(message);

// разделаяем строку на слова с помощью переданного пробела в метод split
const messageWord = message.split(" ");

messageWord[1] = "Evening";

message = messageWord.join(" ");

console.log(message);

// разделаяем строку на буквы с помощью переданного без пробела кавычки в метод split
const messageLetters = message.split("");

messageLetters[2] = "0";

message = messageLetters.join("");

console.log(message);
