import { Request } from "./request";

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