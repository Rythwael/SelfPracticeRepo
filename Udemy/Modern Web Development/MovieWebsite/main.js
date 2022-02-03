const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");


//UI Objesini başlatma

const ui = new UI();

//Storage Objesini Üret

const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Tüm alanları doldurun!","danger")
    }else{
        //Yeni Film oluşturma
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Filmi local storageye ekle.
        ui.displayMessages("Film Başarıyla Eklendi!","success");

    }
    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}
//Delete film
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi tamamlandı.","success")
    }
}
//Clear All Films
function clearAllFilms(){
    if(storage.getFilmsFromStorage().length > 0){ // Local Storage'de film yoksa button confirm gelmesin
        if(confirm("Emin Misiniz?")){
            ui.clearAllFilmsFromUI();
            storage.clearAllFilmsFromStorage();
        }
    }
}