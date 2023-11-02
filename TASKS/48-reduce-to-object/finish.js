/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
    {
        title: "Phone case",
        price: 23,
        quantity: 2,
        category: "Accessories",
    },
    {
        title: "Android phone",
        price: 150,
        quantity: 1,
        category: "Phones",
    },
    {
        title: "Headphones",
        price: 78,
        quantity: 1,
        category: "Accessories",
    },
    {
        title: "Sport Watch",
        price: 55,
        quantity: 2,
        category: "Watches",
    },
];

const quantitiesByCategories = (inputPosts) => {
    const result = {};

    const accessories = inputPosts.filter((el) => el.category == "Accessories");
    const phone = inputPosts.filter((el) => el.category == "Phones");
    const watch = inputPosts.filter((el) => el.category == "Watches");

    result["Accessories"] = accessories.length;
    result["Phones"] = phone.length;
    result["Watches"] = watch.length;

    return result;
};

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */

// не розумію чому тут в коментарі таки значення ключів - не вірні...
