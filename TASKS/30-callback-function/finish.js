/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

function myFn() {
    console.log("Привет из функции myFn");
}

setTimeout(myFn, 2000);

myFn();
