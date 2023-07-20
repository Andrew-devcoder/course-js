/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const arr = [234, 34, 55, 234, 12];

// map create new array but have undefiend, undefiend, undefiend, undefiend, undefiend
// and dont have new variable
arr.map((el) => console.log(el));

// change original array if function change
// its true - correct method for solving a given problem
arr.forEach((el) => console.log(el));

// create new string and add ", "
console.log(arr.join(", "));

console.log(arr);
