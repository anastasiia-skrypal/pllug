// HW Lesson 7
// - Провести заміри продуктивності для звичайного об’єкта, 
// об’єкта без прототипу та MAP. 

/**
 * Непогано. Було б добре якби ви зберегли в коменти результати тестуваання.
 */

let obj = new Object();
let objWithoutProt = Object.create(null);
let map = new Map();

let result;
console.time("Object");
obj;
console.timeEnd("Object");

console.time("objWithoutProt");
objWithoutProt;
console.timeEnd("objWithoutProt");

console.time("map");
map;
console.timeEnd("map");

// Зробити заміри на різних наборах даних, наприклад 100 ключів, 
// 10 000 ключів, 10 000 000 ключів. 

// console.time("100");
// for (var i = 0; i < 100; i++) {
// 	obj[i+1] = "value_"+parseInt(i+1);
// }
// console.timeEnd("100");

// console.time("10000");
// for (var i = 0; i < 10000; i++) {
// 	obj[i+1] = "value_"+parseInt(i+1);
// }
// console.timeEnd("10000");

// console.time("10000000");
// for (var i = 0; i < 10000000; i++) {
// 	obj[i+1] = "value_"+parseInt(i+1);
// }
// console.timeEnd("10000000");

// Дослідити швидкість добавлення нового ключа, 
let object = {};

console.time("Add new key");
object.newKey = "";
console.timeEnd("Add new key");

// взяття значення за ключем, 
console.time("Get key");
object.newKey;
console.timeEnd("Get key");

// видалення ключа на кожному наборі даних. 
console.time("Get key");
delete object.newKey;
console.timeEnd("Get key");

// Також дослідити перетворення тестовану структуру даних у масив, 
// швидкість ітерації(у чистій формі та разом з конвертацією).
// ____НЕ ЗРОЗУМіЛА ЗАВДАННЯ:(_______

// - Написати функцію, яка приймає об’єкт у якості аргументу та 
// повертає Map  з тими самими даними. Тобто просто перетворити об’єкт у Map.

/**
 * Не потрібно все ускладнювати.
 * Функція не повинна знати про зовнішні зміни, якщо їй потрібна якась змінна, то передайте її аргументом.
 */
let fromObj = {"1": 1};
// console.log(fromObj);
function objToMap (obj) {
	return new Map(Object.entries(obj));
}
console.log(objToMap(fromObj));

// - Написати функцію, яка приймає Map у якості аргументу та 
// повертає об’єкт з тими самими даними. 
// Тобто просто перетворити Map у  об’єкт.

/**
 * Не потрібно все ускладнювати.
 */
let toObj = {};
let fromMap = new Map();
fromMap.set('1', 1);

toObj = Object.fromEntries(fromMap.entries());
// console.log(toObj);
function mapToObj (map) {
	return Object.fromEntries(map.entries());
}
console.log(mapToObj(fromMap));

