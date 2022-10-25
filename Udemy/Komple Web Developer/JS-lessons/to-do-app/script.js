let taskList = [{ id: 1, taskName: "Yalar" }];
let ul = document.getElementById("task-list");
let addBtn = document.querySelector("#btnAdd");
let clearBtn = document.querySelector("#btnClear");
let taskCount = document.querySelector("#task-count");
let count = taskList.length + 1;
displayTasks();

function displayTasks() {
    for (task of taskList) {
        let li = `<li class="task d-flex list-group-item">
                <div class="form-check me-auto">
                  <input type="checkbox" id="${task.id}" class="form-check-input" />
                  <label for="${task.id}" class="form-check-label">${task.taskName}</label>
                </div>
                <div class="dropdown">
            <button class="btn btn-link btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a onclick='editTask(${task.id})' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
              <li><a onclick="deleteTask(${task.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
            </ul>
          </div>
              </li>
            `;
        ul.insertAdjacentHTML("beforeend", li);
    }
}

function editTask(id) {
    console.log(id);
}

addBtn.addEventListener("click", function (event) {
    let isHas = false;
    let task = document.querySelector("#task-input");
    for (tasks of taskList) {
        console.log(tasks.taskName);
        if (tasks.taskName === task.value || task.value === "") {
            isHas = true;
            break;
        }
    }
    if (isHas === false) {
        taskList.push({ id: count, taskName: task.value });
        let li = `<li class="task d-flex list-group-item">
        <div class="d-flex form-check me-auto">
            <span class="pt-1">
            <input type="checkbox" id="${count}" class="form-check-input"/>
            <label for="${count}" class="form-check-label me-auto">${task.value}
        </div>
        <div class="dropdown">
            <button class="btn btn-link btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a onclick="editTask(${count})" class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
              <li><a onclick="deleteTask(${count})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
            </ul>
          </div>
        </li>
            `;
        ul.insertAdjacentHTML("beforeend", li);
        count++;

    }
    task.value = "";
    console.log(taskList);
    event.preventDefault();
});

clearBtn.addEventListener("click", function (event) {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    taskList = [];
    taskCount.innerText = taskList.length;
    event.preventDefault();
});




function deleteTask(id) {
    let deletedIndex;
    for (let index in taskList) {
        if (taskList[index].id === id) {
            deletedIndex = index;
        }
    }
    taskList.splice(deletedIndex, 1);
    if (ul.hasChildNodes()) {
        ul.removeChild(ul.children[deletedIndex]);
    }
}