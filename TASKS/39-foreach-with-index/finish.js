/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ["London", "New York", "Singapore"];

// const cityInfo = (arr) => {
//     for (let key in arr) {
//         console.log(`${arr[key]} is at the index ${key} in the myCities array`);
//     }
// };

// const cityInfo = (city, index) =>
//   `${city} is at the index ${index} in the myCities array`

// myCities.forEach((city, index) => console.log(cityInfo(city, index)))

const cityInfo = (array) => {
    array.forEach((element, index) => {
        console.log(
            `${element} is at the index ${index} in the myCities array`
        );
    });
};

cityInfo(myCities);
