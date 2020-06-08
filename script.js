const enterButton = document.getElementById("submit");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click", crossOut);

	const dBtn = document.createElement('img')

	dBtn.setAttribute("src", "./assets/bin.svg");
	dBtn.setAttribute('width', '15px');
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem() {
		ul.removeChild(li);
	}

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {

		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);