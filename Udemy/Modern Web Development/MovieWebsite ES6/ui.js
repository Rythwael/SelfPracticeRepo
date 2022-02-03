class UI {
  //UI'a film ekleme
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"</td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</td>
    </tr>
    `;
  }

  //İnputları temizleme
  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }

  //UI'da mesaj gösterme
  static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");
    //Alert div oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
      div.remove(); // 2 Saniye sonra alert mesajını sil.
    }, 2000);
  }

  // Storage'daki Filmleri UI'da gösterme
  static loadAllFilms(films) {
    const filmList = document.getElementById("films");
    films.forEach((film) => {
      filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"</td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</td>
        </tr>
        `;
    });
  }

  //UI'dan film silme
  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  
  //UI'dan tüm filmleri silme
  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    //filmList.innerHTML = "";     Böyle yapabiliriz fakat efektif değil.
    while (filmList.firstElementChild !== null) {
      // Child olduğu sürece
      filmList.firstElementChild.remove();
    }
  }
}
