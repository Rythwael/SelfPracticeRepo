export class UI {
    constructor() {
        this.employeesList = document.querySelector("#employees");
        this.updateButton = document.querySelector("#update");
        this.nameInput = document.querySelector("#name");
        this.departmentInput = document.querySelector("#department");
        this.salaryInput = document.querySelector("#salary");
    }

    addEmployeesToUI(employees) {
        let result = "";
        employees.forEach(employee => {
            result += `<tr>
                                            
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`

        })
        this.employeesList.insertAdjacentHTML("beforeend", result)
    }

    addEmployeeToUI(employee) {
        let result = `<tr>                               
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`
        this.employeesList.insertAdjacentHTML("beforeend", result)
    }

    clearInputs() {
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";
    }

    deleteEmployeeFromUI(targetElement) {
        targetElement.remove();
    }
}