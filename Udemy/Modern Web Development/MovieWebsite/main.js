const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI Objesini başlatma

const ui = new UI();

//Tüm eventleri yükleme

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
}
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
    }
    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}