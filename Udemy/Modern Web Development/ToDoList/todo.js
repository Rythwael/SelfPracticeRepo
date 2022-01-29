// All Elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const newToDo = todoInput.value.trim(); //trim() baştaki ve sonraki boşlukları siler.
    if(newToDo === ""){
        showAlert("danger", "Lütfen bir todo girin!");
    }else{
        addTodoToUI(newToDo);
        showAlert("success", "Başarıyla eklendi!");
    }
    e.preventDefault();
}

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },3000)


}

function addTodoToUI(newTodo){
    //Create list item
    const listItem = document.createElement("li");
    //Create link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    //List item classes
    listItem.className = "list-group-item d-flex justify-content-between"
    //Text node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //Adding list item to Todo List
    todoList.appendChild(listItem);
    //Clear input
    todoInput.value = "";

}