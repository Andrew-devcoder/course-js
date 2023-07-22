/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

const message = () => {
    const text = "Сообщение номер ";

    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(text + i);
        }, 2000 * i);
    }
};

message();

const arrListN = [];

const addArrListN = () => {
    for (let i = 1; i <= 5; i++) {
        arrListN.push(i);
    }
};

addArrListN();

arrListN.forEach((el) => {
    const text = "Сообщение номер ";
    let newMessage = text + el;
    setTimeout(function () {
        console.log(newMessage);
    }, 2000 * el);
});

console.log(arrListN);
