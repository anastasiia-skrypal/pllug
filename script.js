// 1. Текстове поле (input) - nickname. Якщо хоч одна умова не виконується, додати червону рамку цьому текстовому полю, умови: - довжина мінімум 3 символа (включно), максимум 24 символа (включно) - мінімум 1 буква. За допомогою JavaScript дозвольте вводити тільки букви (англійські)  і цифри.

// 2. Текстове поле (input) - name. Якщо хоч одна умова не виконується, додати червону рамку цьому текстовому полю, умови: - довжина мінімум 1(включно), максимум 100 (включно). За допомогою JavaScript дозвольте вводити тільки букви (англійські).

// 3. Текстове поле (textarea) - comment: - довжина мінімум 1 (включно),  максимум 1000(включно). За допомогою JavaScript дозвольте вводити тільки букви (англійські), а також наступні символи .,!?- і пробіли.

// 4. Кнопка “Add comment”: - додає блок з коментарем у наступному форматі: nickname - name comment - додати блок з коментарем можна тільки тоді коли всі поля заповнені і відповідають попередньо описаним вимогам - якщо поля не заповнені, то кнопка має бути виключена (disabled) - блок з коментарем додає на початку списку коментарів Спочатку логіка, потім оформлення за бажанням.

let button = document.getElementById("button");
let commentContainer = document.getElementById("comment");
let stringcomment = {};
let search = location.search.substring(1).split("&");

for (let i = 0; i < search.length; i++) {
	let temp = search[i].split("=");
	stringcomment[temp[0]] = temp[1];
}

function addComment () {

	if ( responseNickname == true && responseName == true && responseText ==true ) {

		let newCom = document.createElement("p");
		commentContainer.prepend(newCom);

		let string = "";
		string = stringcomment.nickname + " - " + 
		stringcomment.name + "</br>" + stringcomment.text;
		newCom.innerHTML = string;

	}	
	if (responseNickname != true) {
		let input = document.getElementById("nickname");
		input.style.border = "3px solid red";
		console.log(input);
	}
	if (responseName != true) {
		let input = document.getElementById("name");
		input.style.border = "3px solid red";
		console.log(input);
	}
	if (responseText != true) {
		let input = document.getElementById("text");
		input.style.border = "3px solid red";
		console.log(input);
	}
}

button.addEventListener("mousedown", addComment);


// REGULAR EX

let patternNickname = /^[0-9a-zA-Z]{3,24}$/g;
let patternName = /^[a-zA-Z]{1,100}$/g;
let patternText = /^[a-zA-Z\.\,\!\?\-\ ]{1,1000}$/g;
let responseNickname;
let responseName;
let responseText;
responseNickname = patternNickname.test(stringcomment.nickname);
responseName = patternName.test(stringcomment.name);
responseText = patternText.test(stringcomment.text);
// console.log(responseNickname);
// console.log(responseName);
// console.log(responseText);



//Завдання не працює, коменти не додаються, дані валідуються неправильно







