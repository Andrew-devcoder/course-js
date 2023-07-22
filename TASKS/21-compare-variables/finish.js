/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

const compare = (firtsN, secondN) => {
    if (parseInt(firtsN) <= parseInt(secondN)) {
        console.log(true);
    } else {
        console.log(false);
    }
};

const compare2 = (firtsN, secondN) => {
    if (+firtsN <= +secondN) {
        console.log(true);
    } else {
        console.log(false);
    }
};

let myVariable1 = 10;
let myVariable2 = "5";

// Напишите код здесь
compare(myVariable1, myVariable2);

myVariable1 = "20";
myVariable2 = 100;

// Напишите код здесь
compare2(myVariable1, myVariable2);
