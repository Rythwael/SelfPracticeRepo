let taskList = [];
let ul = document.getElementById("task-list");
let addBtn = document.querySelector("#btnAdd");
let clearBtn = document.querySelector("#btnClear");
let taskCount = document.querySelector("#task-count");
let task = document.querySelector("#task-input");
let editId;
let isEdit = false;
let isAdd = false;
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

addBtn.addEventListener("click", function (event) {
    let isHas = false;
    if (taskList.length > 0) {
        for (tasks of taskList) {
            if (tasks.taskName == task.value || task.value == "") {
                isHas = true;
                alert("Task already used");
                task.value = "";
                break;
            }
        }
    } else {
        if (task.value == "") {
            isHas = true;
        }
    }

    if (isEdit === false) {
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
                  <li><a onclick='editTask(${count},"${task.value}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
                  <li><a onclick="deleteTask(${count})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                </ul>
              </div>
            </li>
                `;
            ul.insertAdjacentHTML("beforeend", li);
            count++;
            task.value = "";
        }
    }
    if (isEdit === true) {
        for (tasks of taskList) {
            if (tasks.taskName === task.value) {
                alert("Please add a different task");
                isAdd = false;
                break;
            }
            if (task.value === "") {
                alert("Please don't add empty task");
                isAdd = false;
                break;
            }
        }
        if (isAdd) {
            let taskIndex = taskList.findIndex(function (task) {
                return task.id == editId;
            })
            taskList[taskIndex].taskName = task.value;
            let editedTask = document.getElementById(editId).parentElement.children[1].innerText = task.value
            console.log(editedTask);
            task.value = "";
            isEdit = false;
            isAdd = false;
        }
    }
    event.preventDefault();
});

clearBtn.addEventListener("click", function (event) {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    taskList = [];
    event.preventDefault();
});

function editTask(taskId, taskName) {
    isEdit = true;
    isAdd = true;
    task.value = taskName;
    editId = taskId;
}


function deleteTask(id) {
    let deletedIndex;

    deletedIndex = taskList.findIndex(function (task) {
        return task.id == id;
    })

    taskList.splice(deletedIndex, 1);
    if (ul.hasChildNodes()) {
        ul.removeChild(ul.children[deletedIndex]);
    }
}