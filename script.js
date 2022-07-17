// const addMovieBtn = document.getElementById('add-movie-btn');
// const searchBtn = document.getElementById('search-btn');
// const movies = [];

// function addMovieHandler () {
// 	const title = document.getElementById('title').value;
// 	const extraName = document.getElementById('extra-name').value;
// 	const extraValue = document.getElementById('extra-value').value;

// 	if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
// 		return 
// 	} 

// 	const movie = {
// 		title,
// 		[extraName]: extraValue
// 	}

// 	movies.push(movie)
// 	console.log (movies)
// 	renderMovies()
// }

// addMovieBtn.addEventListener('click', addMovieHandler);
// searchBtn.addEventListener('click', searchMovieHandler);

// function renderMovies (filterTitle = '') {
// 	const movieList = document.getElementById('movie-list');

// 	if (movies.length > 0) {
// 		movieList.classList.add('visible');
// 	} else {
// 		movieList.classList.remove('visible');
// 		return 
// 	}

// 	movieList.innerHTML = '';


// 	const filteredMovies = filterTitle ? movies.filter(item => {
// 	return item.title.includes(filterTitle)
// 	}) : movies;



// 	filteredMovies.forEach(movie => {
// 		const element = document.createElement('li');
// 		let text = movie.title
// 		for (const key in movie) {
// 			if (key != 'title') {
// 				text = text + `<br>${key}:${movie[key]}`
// 			}
// 		}
// 		element.innerHTML = text;
// 		movieList.append(element);
// 	})
// }

// function searchMovieHandler () {
// 	const filterTitle = document.getElementById('filter-title').value;
// 	renderMovies(filterTitle)
// }











const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];


function addMovieHandler() {
	const title = document.getElementById('title').value;
	const extraName = document.getElementById('extra-name').value;
	const extraValue = document.getElementById('extra-value').value;

	if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
		return
	}

	const movie = {
		title,
		[extraName]: extraValue
	}

	movies.push(movie)
	renderMovies()
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

function renderMovies(filterTitle = '') {
	const movieList = document.getElementById('movie-list');

	if (movies.length > 0) {
		movieList.classList.add('visible')
	} else {
		movieList.classList.remove('visible')
		return
	}

	movieList.innerHTML = '';

	const filteredMovies = filterTitle ? movies.filter(item => {
		return item.title.includes(filterTitle)
	}) : movies;

	filteredMovies.forEach(movie => {
		const element = document.createElement('li');
		let text = movie.title
		for (const key in movie) {
			if (key != 'title') {
				text = text + `<br> ${key}:${movie[key]}`
			}
		}
		element.innerHTML = text;
		movieList.append(element)
	})
}

function searchMovieHandler() {
	const filterTitle = document.getElementById('filter-title').value;
	renderMovies(filterTitle);
}




















