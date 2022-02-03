const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");

//Tüm eventleri yükleme

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clearButton.addEventListener("click",clearAllFilms);
}
//Add Film
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director ==="" || url === ""){
        //Error
        UI.displayMessages("Tüm alanları doldurun!","danger")
    }else{
        //Yeni Film oluşturma
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm); // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Filmi local storageye ekle.
        UI.displayMessages("Film Başarıyla Eklendi!","success");

    }
    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}
//Delete film
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi tamamlandı.","success")
    }
}
//Clear All Films
function clearAllFilms(){
    if(Storage.getFilmsFromStorage().length > 0){ // Local Storage'de film yoksa button confirm gelmesin
        if(confirm("Emin Misiniz?")){
            UI.clearAllFilmsFromUI();
            Storage.clearAllFilmsFromStorage();
        }
    }
}