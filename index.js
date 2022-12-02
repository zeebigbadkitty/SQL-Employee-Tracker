//View all: Departments, roles, employees, add a department, add a role, add an employee and update their role.
//When adding a department: Enter the name of the department.
//When you add a role: Name, Salary, Department.
//When adding an employee: First, Last, Role, Manager.
//When updating the role: prompted to select employee and update their new role. 


const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Database connection.
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root', 
    password: 'm4cEwindu!#SQ', //fill in password here.
    database: 'employee_db'
  },
  console.log(`Connected to the movies_db database.`)
);