//Elements
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("github-name");
const clearButton = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearButton.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){

    e.preventDefault();
}

function clearAllSearched(){

}
function getAllSearched(){

}