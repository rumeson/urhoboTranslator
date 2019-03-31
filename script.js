// let searchWord = document.getElementById('search');
let go = document.getElementById('go');

function assignSearch() {
	let search = document.getElementById('search').value;
	let searchWord = search.toLowerCase();
	console.log(search)
	console.log(searchWord);
	if (words[searchWord] !== undefined) {
		document.getElementById('meaning').innerHTML = words[searchWord];
	} else {
		document.getElementById('meaning').innerHTML = 'Word not found!';
	}
}



go.addEventListener('click', assignSearch);