const searchBar = document.getElementById("searchBar");
const feelms = ["happy", "sad", "surprised", "relaxed"];

console.log(searchBar);
searchBar.addEventListener("keyup", e => {
    const searchString = e.target.value;
    const filteredFilms = films.filter(film => {
      return (
        film.title.includes(searchString) ||
        film.feel.includes(searchString)
      );
    });
    displayCharacters(filteredFilms);
  });

