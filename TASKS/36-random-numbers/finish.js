/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

// let MIN = 1000;
// let MAX = 9999;

// MIN = 10;
// MAX = 1000;

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

// const genRandomNumber = (min, max) => {
//     console.log("generation random number");
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const verification = (el) => {
//     do {
//         el = genRandomNumber(MIN, MAX);
//     } while (String(el).length !== 4);

//     console.log(`verification completed: ${el}`);
//     return el;
// };

// const lengthTrue = verification();

// const checkItem = (item) => {
//     if (!myNumbers.includes(lengthTrue)) {
//         return myNumbers.push(item);
//     } else {
//         console.log(`array have this item ${item}`);
//         verification();
//     }
// };

// checkItem(lengthTrue);

// console.log(myNumbers);

let MIN = 1000;
let MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

const genRandomNumber = (min, max) => {
    console.log("generation random number");
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const genNewArr = (arr, min, max) => {
    const newArray = [...arr];
    const newNumber = genRandomNumber(min, max);
    if (!newArray.includes(newNumber)) {
        newArray.push(newNumber);
        console.log(`new number ${newNumber}`);
        console.log(newArray);
    } else {
        console.log(`array have this number ${newNumber} try again...`);
        genNewArr();
    }
};

genNewArr(myNumbers, MIN, MAX);
