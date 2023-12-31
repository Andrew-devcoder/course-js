/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const carsArray = [];

const cars = {
    carBrand: "carBrand",
    price: 123,
    isAvailableForSale: true,
};

console.log(cars);

// const dreemCars = new Object(cars);
// dreemCars.carBrand = "Supraaa";
// dreemCars.price = 10000;
// console.log(dreemCars);

// const newCars = new Object(cars);
// newCars.carBrand = "Toyota";
// newCars.price = 11000;
// console.log(newCars);
// помилка в тому що я так ссилаюся на один і той самий об'єкт
// тобто я змінював орігінальний об'єкт

const dreemCars = { ...cars };
dreemCars.carBrand = "Supraaa";
dreemCars.price = 10000;
console.log(dreemCars);

const newCars = { ...cars };
newCars.carBrand = "Toyota";
newCars.price = 11000;
console.log(newCars);

//  або можна створити за допомогою Object.assign({}, cars);

carsArray.push(cars, dreemCars, newCars, 123);

console.log(carsArray);
