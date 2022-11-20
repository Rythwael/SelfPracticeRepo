import { Request } from "./request";
import { UI } from "./ui";

const form = document.querySelector("#employee-form");
const nameInput = document.querySelector("#name");
const departmentInput = document.querySelector("#department");
const salaryInput = document.querySelector("#salary");
const employeesList = document.querySelector("#employees");
const updateEmployeeButton = document.querySelector("#update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();
let updateState = null;

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeesList.addEventListener("click", editEmployee);
    updateEmployeeButton.addEventListener("click", updateEmployee);

}
function getAllEmployees() {
    request.get().then(employees => {
        ui.addEmployeesToUI(employees);
    }).catch(err => console.log(err));
}

function addEmployee(e) {
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();
    if (employeeName == "" || employeeDepartment == "" || employeeSalary == "") {
        alert("Please fill in all the blanks");
    } else {
        request.post({ name: employeeName, department: employeeDepartment, salary: employeeSalary }).then(employee => {
            ui.addEmployeeToUI(employee);
        }).catch(err => console.log(err));
    }

    ui.clearInputs();
    e.preventDefault();
}

function editEmployee(e) {

    if (e.target.id == "update-employee") {
        updateEmployeeController(e.target.parentElement.parentElement);
    } else if (e.target.id == "delete-employee") {
        deleteEmployee(e.target.parentElement.parentElement);
    }
}

function deleteEmployee(targetEmployee) {
    let employeeID = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(employeeID).then(msg => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    }).catch(err => console.log(err));
}

function updateEmployeeController(targetEmployee) {
    ui.toggleUpdateButton(targetEmployee);
    if (updateState === null) {
        updateState = {
            updateId: targetEmployee.children[3].textContent,
            updateParent: targetEmployee
        }
    } else {
        updateState = null;
    }

}

function updateEmployee() {
    if (updateState) {
        let updatedData = {
            name: nameInput.value.trim(), department: departmentInput.value.trim(),
            salary: salaryInput.value.trim()
        }
        request.put(updateState.updateId, updatedData).then(updatedEmployee => ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent)).catch(err => console.log(err));

    }
}