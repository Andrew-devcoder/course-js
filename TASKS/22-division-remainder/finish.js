/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

const remainder = (firstN, secondN) => {
    do {
        firstN = firstN - secondN;
    } while (firstN > secondN);
    console.log(firstN);
};

remainder(myNumber1, myNumber2);

remainder(12, 5);

const remainder2 = (firstN, secondN) => {
    const result = firstN % secondN;
    return result;
};

console.log(remainder2(myNumber1, myNumber2));
