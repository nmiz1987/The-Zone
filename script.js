const SEARCH_URL = "https://www.google.com/search?q=";
const QUOTES_URL =
	"https://programming-quotes-api.herokuapp.com/quotes/random/";

const search_button = document.querySelector(".search-button");
const search_bar = document.querySelector(".search-bar");

function searchGoogle() {
	var new_url = SEARCH_URL + search_bar.value;
	console.log(new_url);
	window.open(new_url, "_blank");
}

function randomQuotes() {
	const q = document.querySelector(".quote");
	const a = document.querySelector(".author");

	const promise = fetch(QUOTES_URL, {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
	});
	promise
		.then(function (response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function (processedResponse) {
			a.innerText = processedResponse["author"];
			q.innerText = '"' + processedResponse["en"] + '"';
		});
}
randomQuotes();

function chuckNorris() {
	const promise = fetch("https://api.chucknorris.io/jokes/random", {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
	});
	promise
		.then(function (response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function (processedResponse) {
			alert(processedResponse["value"]);
		});
}

document.querySelector(".logo").addEventListener("click", chuckNorris);

document
	.querySelector(".search-button")
	.addEventListener("click", searchGoogle);
document.querySelector(".search-bar").addEventListener("keypress", (event) => {
	if (event.keyCode === 13) {
		// key code of the keyboard key
		event.preventDefault();
		searchGoogle();
	}
});

const res = document.getElementById("resolutionNumber");

function showRes() {
	const height = window.innerHeight;
	const width = window.innerWidth;
	res.innerHTML = `Width: ${width}, Height: ${height}`;
}

window.onresize = showRes;
window.onload = showRes;
