const countryList = [
	"Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Christmas Island", "Colombia", "Republic of Congo", "Congo", "Costa Rica", "Croatia", "Cuba", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Guam", "Guatemala", "Guinea", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Mauritius", "Mexico", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Sierra Leone", "Singapore", "Slovakia", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
let matches = [];
let inputList = document.querySelector(".input__list");
let input = document.querySelector(".form__input");
let cursor = 0;
let visible = false;

document.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		e.preventDefault();
	}
})
document.addEventListener('click', (e) => {
	if (!e.target.classList.contains('.input-dropdown')) {
		toggleVisibility(false);
	}
})
input.addEventListener("keyup", (e) => {
	toggleVisibility(false);
	if (!(e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'Enter')) {
		cursor = 0;
	}
	if (input.value.length > 0 && input.value != " ") {
		matches = getMatches(input.value);
		if (matches.length > 0) {
			displayMatches();
		}
	}
	if (visible) {
		let listItems = document.querySelectorAll(".list__item");
		switch (e.key) {
			case 'Enter': input.value = listItems[cursor].innerHTML; toggleVisibility(false); cursor = 0; break;
			case 'ArrowUp': if (cursor > 0) {
				cursor--;
				moveCursor(cursor);
			} break;
			case 'ArrowDown': if (cursor < listItems.length - 1) {
				cursor++;
				moveCursor(cursor);
			} break;
		}
	}
})

function getMatches(value) {
	for (let i = 0; i < countryList.length; i++) {
		if ((countryList[i].toLowerCase().startsWith(value.toLowerCase()))) {
			matches.push(countryList[i]);
		}
	}

	return matches;
}
function displayMatches() {
	toggleVisibility(true);
	for (let i = 0; i < matches.length; i++) {
		let listItems = document.createElement('li');
		listItems.classList.add('list__item');
		if (i < 5) {
			listItems.innerHTML = matches[i];
			inputList.appendChild(listItems);
		}
	}
	let listItems = document.querySelectorAll('.list__item');
	listItems.forEach(listItem => {
		listItem.addEventListener('click', fillInput);
	})
	moveCursor(cursor);
}
function toggleVisibility(isVisibility) {
	if (!isVisibility) {
		visible = false;
		matches = [];
		let child = inputList.lastElementChild;
		while (child) {
			inputList.removeChild(child);
			child = inputList.lastElementChild;
		}
	}
	else {
		visible = true;
	}
}
function fillInput() {
	input.value = this.innerHTML;
	toggleVisibility(false);
}
function moveCursor(cursor) {

	let listItems = document.querySelectorAll('.list__item');
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].classList.remove('highlight');
	}
	listItems[cursor].classList.add('highlight');
	console.table(listItems)
}