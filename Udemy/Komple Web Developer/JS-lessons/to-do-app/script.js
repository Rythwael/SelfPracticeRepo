let taskList = [];
let ul = document.getElementById("task-list");
let addBtn = document.querySelector("#btnAdd");
let clearBtn = document.querySelector("#btnClear");
let taskCount = document.querySelector("#task-count");
let count = taskList.length + 1;
displayTasks();

function displayTasks() {
    for (task of taskList) {
        let li = `<li class="task list-group-item">
                <div class="form-check">
                  <input type="checkbox" id="${task.id}" class="form-check-input" />
                  <label for="${task.id}" class="form-check-label">${task.taskName}<span><i class="fa-solid fa-trash"></i></span></label>
                </div>
              </li>
            `;
        ul.insertAdjacentHTML("beforeend", li);
    }
}

addBtn.addEventListener("click", function (event) {
    let task = document.querySelector("#task-input");
    let isHas = false;
    for (tasks of taskList) {
        console.log(tasks.taskName);
        if (tasks.taskName === task.value || task.value === "") {
            isHas = true;
            break;
        }
    }
    if (isHas === false) {
        taskList.push({ id: count, taskName: task.value });
        count++;
        let li = `<li class="task list-group-item">
        <div class="d-flex form-check">
            <span class="pt-1">
            <input type="checkbox" id="${count}" class="form-check-input"/>
            <label for="${count}" class="form-check-label me-auto">${task.value}
        </div>
        </li>
            `;
        ul.insertAdjacentHTML("beforeend", li);
    }
    task.value = "";
    taskCount.innerText = taskList.length;
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