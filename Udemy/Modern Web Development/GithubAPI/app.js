//Elements
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("github-name");
const clearButton = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();


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
                ui.showUserInfo(response.user);
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