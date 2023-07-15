/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

const message = () => {
    console.log("Hello world!!!");
};

setTimeout(() => console.log("Hello world!"), 5000);

setTimeout(message, 6000);
