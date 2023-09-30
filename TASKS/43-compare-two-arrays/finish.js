/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3];
const b = [1, 2, 3];

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

const areArraysEqual = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) {
        console.log(`this arrays different length`);
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            console.log(`this arrays different`);
            return false;
        }
    }
    console.log(`this arrays are similar`);
};

const areArraysEqual2 = (firstArray, secondArray) => {
    if (
        firstArray.length === secondArray.length &&
        firstArray.every((element, index) => element === secondArray[index])
    ) {
        return true;
    }

    return false;
};

areArraysEqual(a, b); // true
areArraysEqual(a, c); // false
areArraysEqual(a, d); // false

console.log(areArraysEqual2(a, b)); // true
console.log(areArraysEqual2(a, c)); // false
console.log(areArraysEqual2(a, d)); // false

// console.log(a === b); // false (Почему?)
