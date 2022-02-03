function Storage(){
    
}

//Add to LocalStorage
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
}

//Get films from LocalStorage
Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if(localStorage.getItem("films")===null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

//Delete from LocalStorage
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    films.forEach((film,index)=>{
        if(film.title===filmTitle){
            films.splice(index,1);
        }
    })
    localStorage.setItem("films",JSON.stringify(films))
}

//Delete all films from Storage
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films")
}