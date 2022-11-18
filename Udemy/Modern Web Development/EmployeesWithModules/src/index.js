import { Request } from "./request";
import { UI } from "./ui";

const form = document.querySelector("#employee-form");
const nameInput = document.querySelector("#name");
const departmentInput = document.querySelector("#department");
const salaryInput = document.querySelector("#salary");
const employeesList = document.querySelector("#employees");

const request = new Request("http://localhost:3000/employees");

//request.get().then(employees => console.log(employees)).catch(err => { console.log(err) });
//request.post({ name: "Hakan Taşıyan", department: "Business", salary: 10000 }).then(employee => console.log(employee)).catch(err => console.log(err));
//request.put(3, { name: "Hasan Şaş", department: "IT", salary: 15000 }).then(employee => console.log(employee)).catch(err => console.log(err));
//request.delete(4).then(msg => console.log(msg)).catch(err => console.log(err))

const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeesList.addEventListener("click", editEmployee);

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
        updateEmployee(e.target.parentElement.parentElement);
    } else if (e.target.id == "delete-employee") {
        deleteEmployee(e.target);
    }
}

function updateEmployee(targetEmployee) {
    let employee = targetEmployee.parentElement.previousElementSibling.textContent;
}

function deleteEmployee(targetEmployee) {
    let employeeID = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(employeeID).then(msg => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    }).catch(err => console.log(err));
}
