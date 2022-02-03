class Storage {
  //Add to LocalStorage
  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  //Get films from LocalStorage
  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  //Delete from LocalStorage
  static deleteFilmFromStorage(filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach((film, index) => {
      if (film.title === filmTitle) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

  //Delete all films from Storage
  static clearAllFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
