// Частина 1:
//  Створити функцію яка б отримувала параметром масив 
// з елементів різних типів (строки, масиви, числа, об’єкти і т.д), 
// на виході має повернути строку у camel case (приклад строки у camel case: 
	// thisIsExampleOfTheCamelCase), яка б поєднувала в собі всі елементи масиву які є строками.

let arr = [1, "example", "camel", 34, "case", 6];
let camel ="";

function upperLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCase (array) {
	let arrNew = array.filter(function(val) {
		if (typeof val === "string") {
			return val;
		}
	})

	for (var i = 0; i < arrNew.length; i++) {
		temp = arrNew[i].toString(" ");
		camel = camel + temp + " ";
	}

	let camelTwo = camel.split(" ").map(upperLetter).join(" ");
	camelTwo = camelTwo.replace(/\s/g, '');

	return camelTwo;
}

// console.log(camelCase(arr));


//  Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, 
// // і повертала б масиву у якому кожен елемент масиву є літерою англійського алфавіту 
// відповідний конкретному елементу масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). 
// Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]

let array = [4, 3, 22, 11];
let strChar = [];
let arrNew = [];

function intToChar (arr) {
	arrNew = array.map(function(value) {
		return arrNew[value] = value+96;
	})

	arrChar = arrNew.map(function(value) {
		return strChar.push(String.fromCharCode(value));
	})

	return strChar;
}

intToChar(array);
// console.log(intToChar(array));



//  Створити функцію яка параметром отримує об’єкт (наприклад 
// {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) і повертає новий об’єкт 
// у який містить тільки числа більші рівні 0.

let obj = {
	'a': 22, 
	'b': -11.35, 
	'c': 41.2, 
	'd': "hello",
};

function filt() {
	newObj = {};
	for(let prop in obj) {
		if (obj[prop] >= 0) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}
filt();

