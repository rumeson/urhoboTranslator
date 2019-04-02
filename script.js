// let searchWord = document.getElementById('search');
let go = document.getElementById('go');
let input = document.getElementById('search')

// function assignSearch() {
// 	let search = document.getElementById('search').value;
// 	let searchWord = search.toLowerCase();
// 	if (words[searchWord] !== undefined) {
// 		document.getElementById('meaning').innerHTML = `<i>${search}:</i> <b>${words[searchWord]}</b>`;
// 	} 
// 	// else if (words[searchWord] === undefined) {
// 	// 	document.getElementById('meaning').innerHTML = "Type in a word";
// 	// } 
// 	else {
// 		document.getElementById('meaning').innerHTML = `${search} not found!`;
// 	}
// 	input.value = "";
// 	if (sentence1[searchWord] !== undefined) {
// 		document.getElementById('sentenceOne').innerHTML = `${sentence1[searchWord]}`
// 	};
// }

function assignSearch() {
	let search = document.getElementById('search').value;
	let searchWord = search.toLowerCase();
	searchWord.length === 0 ? document.getElementById('meaning').innerHTML = `You didn't search for any word` : ((words[searchWord] !== undefined) ? (document.getElementById('meaning').innerHTML = `<i>${search}:</i> <b>${words[searchWord]}</b>`) : (document.getElementById('meaning').innerHTML = `${search} not found!`))
 	input.value = "";
	if (sentence1[searchWord] !== undefined) {
		document.getElementById('sentenceOne').innerHTML = `${sentence1[searchWord]}`
	};
}

// function sentenceOne() {
// 		let search = document.getElementById('search').value;
// 		let searchWord = search.toLowerCase();
// 		console.log(search)
// 		console.log(searchWord);	
// 	if (sentence1[searchWord] !== undefined) {
// 		document.getElementById('sentenceOne').innerHTML = '${sentence1[searchWord]}'
// 	};
// }

/////////////////////// Keypress Enter 
function enterSearch(event) {
	if (event.keyCode === 13) {
		assignSearch();
	}
}


go.addEventListener('click', assignSearch);
input.addEventListener("keypress", enterSearch);