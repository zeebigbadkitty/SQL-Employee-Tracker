//View all: Departments, roles, employees, add a department, add a role, add an employee and update their role.
//When adding a department: Enter the name of the department.
//When you add a role: Name, Salary, Department.
//When adding an employee: First, Last, Role, Manager.
//When updating the role: prompted to select employee and update their new role. 



const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;

//Database connection.
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root', 
    password: 'm4cEwindu!#SQ', //fill in password here.
    database: 'employee_db'
  },

);

//Arrays to store new employees, roles, etc.
const employeeArr = [];
const rolesArr = [];
const departmentArr = []; 


//Inquirer Questions
const startMenu = () => {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'What do you want to do? (Make a selection)',
      choices: ['View all departments.', 'View all roles.', 'View all employees.', 'Add a department.', 'Add a role.', 'Add an employee', 'Update an employee role.'],
    }, 
    
]).then((data) => {


    console.log(data.choices);
    switch(data.choices) {
        case 'View all departments.':
          // console.log('Select * Departments')//db.query. Mini project db.query(sql, params, (err, result) => {} 
          db.query('SELECT * FROM departments', function (err, results) {
          console.log(results);
          });
          break;
          case y:
          // code block
          break;
          case y:
          // code block
          break; //add = insert
          case y:
          // code block
          break;
          case y:
          // code block
          break;
          case y:
          // code block
          break;
          case y:
          // code block
          break;
        default:
          console.log('Please make a selection to continue.')
          // code block
      }
})};


startMenu ();

//404 request and app.listen.
// app.use((req, res) => {
//     res.status(404).end();
//   });
  
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
  