//Elements
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("github-name");
const clearButton = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
const storage = new Storage();


eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearButton.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    let username = nameInput.value
    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı giriniz")
    }
    else{

        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Kullanıcı bulunamadı")
            }else{
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        }
            )
        .catch(err => ui.showError(err))
    }
    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched(){

}
function getAllSearched(){

}