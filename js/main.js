let elList = document.querySelector('.list');
let elOption = document.querySelector('.film__select');
let elForm = document.querySelector('.film__form');

elList.innerHTML = null;

function generateGenres(films, shox) {

	let result = [];

	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!result.includes(genre)) {
				result.push(genre);
			}
		});
	});

	result.forEach(genre => {
		const newOption = document.createElement('option');
		newOption.value = genre;
		newOption.textContent = genre;
		shox.appendChild(newOption);
	});

}



function renderFilms(arr, node) {
	innerHTML = null
	arr.forEach((film) => {
		let newLi = document.createElement('li');
		let newHeading = document.createElement('h3');
		let newImage = document.createElement('img');
		let newParagraph = document.createElement('p');
		let newTime = document.createElement('time');
		let newGenreList = document.createElement('ul');

		newHeading.textContent = film.title;
		newParagraph.textContent =
			film.overview.split(' ').slice(0, 10).join(' ') + '...';
		newTime.textContent = normalizeDate(film.release_date);

		for (var genre of film.genres) {
			let newGenreLi = document.createElement('li');
			newGenreLi.textContent = genre;
			newGenreList.appendChild(newGenreLi);
		}

		newLi.setAttribute('class', 'list__item film');
		newHeading.setAttribute('class', 'film__heading');
    newParagraph.setAttribute('class', 'film__text');
		newImage.setAttribute('class', 'film__image');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
    newGenreList.setAttribute('class', 'film__genre');

		newImage.setAttribute('width', '200');
		newImage.setAttribute('height', '200');

		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newLi.appendChild(newParagraph);
		newLi.appendChild(newGenreList);
		newLi.appendChild(newTime);

		node.appendChild(newLi);
	});
}

elForm.addEventListener('submit', (evt) =>{
	evt.preventDefault();
	const genreValeue = elOption.value;
	let filterFilm = [];
	if (genreValeue === "all") {
			filterFilm = films;
	} else {
		const filterFilm = films.filter((film) =>
	   film.genres.includes(genreValeue),
		 );
	}
		 renderFilms(filterFilm, elList);
});

renderFilms(films, elList);
generateGenres(films, elOption);

// console.log(filterFilm)

// var objects = [
//   {
//     "firstname": "Asdbek",
//     "Lastname": "Makhmudjonov",
//     "age": 19,

//   },
//   {
//     "firstname": "bekzod",
//     "Lastname": "Makhmudjonov",
//     "age": 18,

//   },
//   {
//     "firstname": "sardor",
//     "Lastname": "Makhmudjonov",
//     "age": 17,

//   },
//   {
//     "firstname": "abdulaziz",
//     "Lastname": "Makhmudjonov",
//     "age": 21,

//   },


// ]
// objects.forEach(i => {
// 	console.log(i.firstname);
// 	console.log(i.Lastname);
// 	console.log(i.age);
// });
// objects.map((obj) => {
// 	obj.age = 100;
// 	return obj;
// })
// console.log(objects);

