function UI(){

}
//UI'a film ekleme
UI.prototype.addFilmToUI = function(newFilm){
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"</td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</td>
    </tr>
    `
}
//İnputları temizleme
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
//UI'da mesaj gösterme
UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".card-body");
    //Alert div oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function(){
        div.remove(); // 2 Saniye sonra alert mesajını sil.
    },2000)
}
// Storage'daki Filmleri UI'da gösterme
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach((film)=>{
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"</td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</td>
        </tr>
        `
    })
}
//UI'dan film silme
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}
//UI'dan tüm filmleri silme
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    //filmList.innerHTML = "";     Böyle yapabiliriz fakat efektif değil.
    while(filmList.firstElementChild !== null){ // Child olduğu sürece
        filmList.firstElementChild.remove();
    }
}