// HW Lesson 3
//  Створити пустий об’єкт;

let obj = new Object();
let obj2 = {};

//  Створити пустий об’єкт без прототипу;

let objWithoutProto = Object.create(null);

//  Додати до об’єкта будь які нові поля всіма відомими способами;

// let obj = new Object(1"2");
obj.name = "Vasia";
obj["sex"] = "male";

let age = 33;
obj.age = age;

let newObj = Object.assign({surname: "Shevchenko"}, obj);

//  Створити пустий масив;

let arr = [];
let arr2 = new Array();

//  Створити пустий масив довжиною 100500 елементів;

let arr3 = new Array(100500);

//  Створити масив з декількома елементами;

let arr4 = [1, 2, 3];
let arr5 = new Array(4, 5, 6);

//  Зробити заповнений масив пустим;

let arr6 = new Array(7, 8, 9);
arr6.splice(0, 3);

let arr7 = new Array(10, 11, 12);
for(let i = 0; i<arr7.length; i++) {
	delete arr7[i];
}

//  Дано масив, [1,2,3,4,5], потрібно створити функцію, 
// яка видалить певний елемент з масиву за його індексом та 
// поверне новий масив(оновлений- після видалення);

let arr8 = new Array(1,2,3,4,5);

function deleteElement (arr, index) {
	delete arr[index];
}

function deleteElement2 (arr, index) {
	arr.splice(index, 1);
}

deleteElement2(arr8, 2);

//  Створити функцію, яка приймає один масив у якості аргументу 
// та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;

let arrFull = new Object(1,2,3,4,5);
let arrEmpty = new Object();

function checkArr (arr) {
	if(arr.length>0) {
		console.log("Full!");
	}
	else {
		console.log("Empty!");
	}
}

//  Створити функцію, яка приймає один об’єкт у якості аргументу та 
// повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;

let objFull = new Array(1,2,3,4,5);
let objEmpty = new Array();

function checkArr (obj) {
	if(obj.length>0) {
		console.log("Full!");
	}
	else {
		console.log("Empty!");
	}
}

//  Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;

let arr10 = new Array(1,2,3,4,5);
let arr11 = new Array(6,7,8,9,10);

function concatArr (arr1, arr2) {
	let newArr = arr1.concat(arr2);
	return newArr;
}
concatArr(arr10, arr11);

//  Створити функцію, яка приймає один масив чисел у якості аргументу та 
// повертає новий масив, який складається з елементів попереднього в степені 3. 
// Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];

let arr12 = new Array(1,2,3,4,5);

function cubeInt (arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] = Math.pow(arr[i], 3)
	}
	return arr;
}

cubeInt(arr12);

//  Створити функцію, яка приймає один масив чисел у якості аргументу та 
// повертає новий масив, який складається з непарних елементів вхідного масиву;

let arr13 = new Array(1,2,3,4,5,6,7,8,9,10);

function selectOdd (arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if (arr[i]%2 == 1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
selectOdd(arr13);


//  Створити функцію, яка приймає один масив чисел у якості аргументу та 
// повертає новий масив, який складається тільки з цілих елементів вхідного масиву; 
// Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];

let arr14 = [5, 3.14, 4.1, 10, 11, 20.1];

function roundNumers (arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] == Math.floor(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

roundNumers(arr14);

//  Створити функцію, яка нічого не повертає;

function empty (a, b) {
	a + b;
}