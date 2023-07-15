/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const str =
    "My name is <name> <surname> and my favorite number is <favoriteNumber>";

console.log(str instanceof String);
console.log(typeof str);

const strUpper = str.toUpperCase();

console.log(strUpper);

// создание экземпляра
const myStr = new String("My name is anonymous");
console.log(myStr);
console.log(myStr instanceof String);
console.log(typeof myStr);
console.log(myStr.toUpperCase());

const extractedText = myStr.valueOf();
console.log(extractedText);
