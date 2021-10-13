// Частина 1:
// ● Функція яка збільшує розмір шрифту всіх елементів списку animals

// let listItem = document.querySelectorAll("li");

// function fontSizeUp () {
// 	let listItem = document.querySelectorAll("li");
// 	for (let i = 0; i < listItem.length; i++) {
// 		listItem[i].style.fontSize = "30px";
// 	}
// }

// fontSizeUp();


// ● Функція яка видаляє всі класи останнього елемента списку animals

// let listItem = document.querySelectorAll("li");
// let lastItem;

// function removeLastElClass () {
// 	for (let i = 0; i < listItem.length; i++) {
// 		let lastItemIndex = listItem.length - 1;
	
// 		if (i == lastItemIndex) {
// 			lastItem = listItem[i];
// 			lastItem.removeAttribute("class");
// 		}
// 	}
// }
// removeLastElClass ();


// ● Функція яка змінює background-color наступного елемента після елемента з id="cat"

// function changeBackground () {
// 	let elemCat = document.querySelector('#cat');
// 	let nextSibl = elemCat.nextElementSibling;
// 	nextSibl.style.background = "green";
// }
// changeBackground ();


// ● Функція яка змінює колір тексту на червоний всім елементам які мають клас dangerous

// function changeClassColor () {
// 	let listItem = document.querySelectorAll("li");
// 	for (let i = 0; i < listItem.length; i++) {
// 		if (listItem[i].classList.contains("dangerous")) {
// 			listItem[i].style.color = "red";
// 		}
// 	}
// }
// changeClassColor ();


// ● Функція яка видаляє всі елементи які мають клас pet, 
// але якщо крім класу pet є ще інші класи, то вони повинні залишитись

// function removeClassPet () {
// 	let listItem = document.querySelectorAll("li");
// 	for (let i = 0; i < listItem.length; i++) {

// 		if (listItem[i].className == "pet") {
// 			listItem[i].className = "";
// 		}

// 		if (listItem[i].classList.contains("pet")) {
// 			listItem[i].classList.remove("pet");
// 		}
// 	}
// }
// removeClassPet ();


// ● Функція яка додає додає новий елемент в список birds - 
// після цього це має бути список у якому новий елемент є першим

// function newBirdFirst() {
// 	let birds = document.getElementById("birds");
// 	let newBird = document.createElement("li");
// 	newBird.innerText = "New bird";
// 	birds.prepend(newBird);	
// }
// newBirdFirst();


//    Homework
// Частина 2:
// ● Функція яка додає новий елемент в список birds - 
// після цього це має бути список у якому новий елемент є останнім

// function newBirdLast() {
// 	let birds = document.getElementById("birds");
// 	let newBird = document.createElement("li");
// 	newBird.innerText = "New bird";
// 	birds.append(newBird);	
// }
// newBirdLast();


// ● Функція яка додає додає новий список id="fish" перед списком birds

// function newListFish() {
// 	let birds = document.getElementById("birds");
// 	let fish = document.createElement("ul");
// 	fish.setAttribute("id", "fish");
// 	let parent = birds.parentNode;
// 	parent.insertBefore(fish, birds);
// }
// newListFish();


// ● Функція яка змінює порядок елементів в списку animals - останній елемент стає першим, 
// передостанній - другим, і т.д.

let animals = document.getElementById("animals");
let animalElements = animals.querySelectorAll("li");
 
let animalsReverse = [];
let temp = animalElements.length -1 ;

for (let index = 0; index < animalElements.length; index++) {
	animalsReverse[temp] = animalElements[index];
	console.log(animalElements[index]);
	temp -= 1;
}

while (animals.firstChild) {
	animals.removeChild(animals.firstChild);
  }
for (let index = 0; index < animalsReverse.length; index++) {
	animals.append(animalsReverse[index]);
}
console.log(animalsReverse);

// Гуд, тільки мало бути огорнуте в окрему функцію



// ● Функція яка перетворює класи елементів списку animals 
// і додає до цих елементів data-* атрибути з назвою класу який був прибраний. 
// Наприклад: <li class="wild dangerous">Tiger</li> => <li data-wild data-dangerous>Tiger</li>

// не виконано, але то і так зрозуміло)


// В цілому - зауважень більше нема, хороший зрозумілий код