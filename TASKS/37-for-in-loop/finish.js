/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
    name: "Mike",
    age: 30,
    city: "London",
};

Object.prototype.country = "England";

for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        // console.log(key + ":" + myObject[key]);
        console.log(myObject[key]);
    }
}

// console.log(myObject.country);

const valueToFind = "England";
let keyFound = null;

for (const key in myObject) {
    if (myObject.hasOwnProperty(key) && myObject[key] === valueToFind) {
        keyFound = key;
        break;
    }
}
console.log(`Ключ для значення '${valueToFind}':`, keyFound);
// null так і зашилиться бо England є прототипом

// щоб знайти ключ у прототипі Object значення England
for (const key in Object.prototype) {
    if (
        Object.prototype.hasOwnProperty(key) &&
        Object.prototype[key] === valueToFind
    ) {
        keyFound = key;
        break;
    }
}

console.log(`Ключ для значення '${valueToFind}':`, keyFound);

// щоб знайти значення до ключа  country
const keyToFind = "country";
let valueFound = null;

if (
    Object.prototype.hasOwnProperty.call(
        Object.getPrototypeOf(myObject),
        keyToFind
    )
) {
    valueFound = Object.getPrototypeOf(myObject)[keyToFind];
}

console.log(`Значення за ключем '${keyToFind}':`, valueFound);
