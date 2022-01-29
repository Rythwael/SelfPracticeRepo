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
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
    if(confirm("Emin Misiniz?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild)
        }
    localStorage.removeItem("todos");
    }
}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLocaleLowerCase();
        if(text.indexOf(filterValue)=== -1){
            //Bulamadı
            listItem.setAttribute("style","display:none !important"); // important diyerek bootstrapin display:block özelliğini engelliyoruz.
        }else{
            listItem.setAttribute("style","display : block")
        }
    })
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success","Todo başarıyla silindi.")
    }
}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodoFromStorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);// Arrayden silinecek todonun indexinden sonra 1 tane (yani kendisini) sil.
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI(){
    let todos = getTodoFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function addTodo(e){
    const newToDo = todoInput.value.trim(); //trim() baştaki ve sonraki boşlukları siler.
    let todos = getTodoFromStorage();
    if(newToDo === ""){
        showAlert("danger", "Lütfen bir todo girin!");
    }else if(todos.includes(newToDo)){
        showAlert("danger", "Yazılan Todo zaten mevcut!")
    }else{
        addTodoToUI(newToDo);
        addTodoToStorage(newToDo);
        showAlert("success", "Başarıyla eklendi!");
    }
    e.preventDefault();
}

function getTodoFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
    let todos = getTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },2000)


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