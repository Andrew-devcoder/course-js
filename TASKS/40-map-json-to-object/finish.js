/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}',
];

const arrObjs = (array) => {
    return array.map((element) => {
        return JSON.parse(element);
    });
};
const arrObjs2 = (array) => {
    return array.map(JSON.parse);
};

const newArray = arrObjs(postsJSON);
const newArray2 = arrObjs2(postsJSON);

console.log(newArray[1].postId);
console.log(newArray[newArray.length - 1].commentsQuantity);

console.log(
    `option 2 take number 3th object commentsQuantity: ${newArray2[2].commentsQuantity}`
);
