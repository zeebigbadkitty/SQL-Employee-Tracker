const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;

//Database connection.
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "m4cEwindu!#SQ", //fill in password here.
    database: "employee_db",
  },
  console.log(`
  \u2800\u28C0\u28C0\u28C0\u2840\u2800\u2800\u2800\u2800\u28C0\u28E4\u28F6\u28F6\u28FE\u28FF\u28FF\u28FF\u28F7\u28F6\u28F6\u28E4\u28C4\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u28FE\u28FF\u281B\u281B\u281B\u281B\u28B6\u28F4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F6\u28C4\u2800\u2800\u2800\u2800\u2800\r\n\u28B9\u28FF\u2840\u2800\u2800\u28F4\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u281F\u2809\u281B\u28FF\u28F7\u28C4\u2800\u2800\u2800\r\n\u2800\u28BB\u28F7\u28C0\u28FE\u28FF\u285F\u2801\u2800\u2800\u2808\u2819\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u280B\u2800\u2800\u2800\u2800\u28F8\u28FF\u28FF\u28C6\u2800\u2800\r\n\u2800\u2800\u2819\u2801\u283B\u28FF\u28FF\u28FF\u28FF\u28E6\u28C4\u2800\u2800\u2819\u28BF\u28FF\u28FF\u28FF\u28C4\u2800\u2800\u2880\u2820\u280A\u2800\u2800\u2839\u28FF\u2847\u2800\r\n\u2800\u2800\u28B0\u28F7\u2844\u2808\u28BF\u28FF\u28FF\u28FF\u28FF\u2846\u2800\u2800\u2800\u2800\u2809\u281B\u28BF\u28F6\u2856\u2801\u2800\u2800\u2800\u2880\u28F4\u28FF\u28FF\u2800\r\n\u2800\u2800\u28FE\u28FF\u28FF\u28E6\u2840\u2819\u28BF\u28FF\u28FF\u28FF\u28C4\u2800\u2800\u2800\u2800\u2800\u2800\u2839\u28F7\u28C4\u2800\u28E0\u2814\u281B\u283B\u28FF\u28FF\u2847\r\n\u2800\u2800\u28BB\u28FF\u28FF\u28FF\u28FF\u28E6\u2840\u2819\u28BF\u28FF\u28FF\u28F7\u2840\u2800\u2800\u2800\u2800\u2800\u2839\u28FF\u28DF\u2801\u2800\u2800\u2800\u28FD\u28FF\u2803\r\n\u2800\u2800\u2818\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u2840\u2809\u283B\u287F\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28E6\u28E4\u28E4\u28FE\u28FF\u285F\u2800\r\n\u2800\u2800\u2800\u2839\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2837\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2803\u2800\r\n\u2800\u2800\u2800\u2800\u2819\u28BF\u28FF\u28FF\u28FF\u281F\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28F0\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u28BB\u2844\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2808\u283B\u281F\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u283B\u28BF\u28FF\u28FF\u287F\u280B\u2800\u2800\u28BB\u2844\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28E4\u28FF\u28F7\u28E6\u2844\u28E8\u28EF\u28C4\u2840\u2800\u2800\u2880\u28FF\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2810\u281B\u281B\u280B\u2809\u2800\u2800\u2800\u2809\u2819\u283B\u283F\u283F\u283F\u280B\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u28F6\u28F6\u2876\u28B6\u28F6\u28E4\u2840\u28A0\u28F4\u28F6\u283F\u28B6\u28E6\u28C4\u28B0\u28F6\u28F6\u28C4\u2800\u28F6\u28F6\u2800\u28F6\u2846\u28F6\u28F6\u28F6\u28F6\u28F6\u28F6\r\n\u28FF\u28FF\u2847\u2800\u28F9\u28FF\u2847\u28FF\u28FF\u2847\u2800\u2880\u28FF\u28FF\u28B8\u28FF\u287F\u28BF\u28F7\u28FF\u28FF\u2800\u283F\u2807\u2800\u2800\u28FF\u28FF\u2800\u2800\r\n\u283F\u283F\u2837\u283F\u283F\u280B\u2800\u2808\u283B\u283F\u2836\u283F\u281F\u280B\u2838\u283F\u2807\u2800\u2819\u283F\u283F\u2800\u2800\u2800\u2800\u2800\u283F\u283F\u2800\u2800\r\n\u28E4\u28F6\u28F6\u28F6\u28E4\u28C4\u2800\u28A0\u28F6\u28F6\u2844\u2800\u28A0\u28F4\u28E4\u2844\u2800\u28F4\u28F6\u2800\u28F4\u28F6\u2844\u2880\u28E4\u28F6\u28F6\u28E6\u28C4\u2840\r\n\u28FF\u28FF\u28E7\u28E4\u28FF\u287F\u28A3\u28FE\u285F\u28BB\u28FF\u2844\u28B8\u28FF\u287F\u28BF\u28E6\u28FF\u28FF\u2800\u28FF\u28FF\u28F7\u28FF\u28FF\u2801\u2800\u2819\u281B\u2803\r\n\u283F\u283F\u280F\u2809\u2801\u2800\u283E\u283F\u281B\u281B\u283F\u283F\u283C\u283F\u2837\u2800\u283B\u283F\u283F\u2800\u283F\u283F\u2807\u2819\u283F\u28F7\u28F6\u287F\u283F\u2803

You're connected to the employees database!`)
);
//To view role choices
var roleChoices = async () => {
  const roleQuery = `SELECT title AS value, role_id FROM roles;`;
  const roles = await connection.query(roleQuery);
  return roles[0];
};

//Inquirer Questions
const startMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "What do you want to do? (Make a selection)",
        choices: [
          "View all departments.",
          "View all roles.",
          "View all employees.",
          "Add a department.",
          "Add a role.",
          "Add an employee",
          "Update an employee role.",
        ],
      },
    ])
    .then((data) => {
      console.log(data.choices);
      switch (data.choices) {
        case "View all departments.":
          db.query("SELECT * FROM departments", function (err, results) {
            //View all: Departments, roles, employees, add a department, add a role, add an employee and update their role.
            console.log(results);
            startMenu();
          });
          break;
        case "View all roles.":
          db.query("SELECT * FROM roles", function (err, results) {
            console.log(results);
            startMenu();
          });
          break;
        case "View all employees.":
          db.query("SELECT * FROM employees", function (err, results) {
            console.log(results);
            startMenu();
          });
          break;
        case "Add a department.":
          inquirer
            .prompt([
              {
                type: "input",
                name: "newdepartment",
                message:
                  "Please enter the name of the department you would like to add.",
              },
            ])
            .then((results) => {
              db.query("INSERT INTO departments SET ?", {
                //insert into
                name: results.newdepartment,
              });
              startMenu(); //restarting menu
            });

          break;
        case "Add a role.":
          db.query("SELECT * FROM departments", (err, result) => {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "newrole",
                  message: "Please enter the name of the role.",
                },
                {
                  type: "input",
                  name: "newsalary",
                  message: "Please enter the salary of that role.",
                },
                {
                  type: "list",
                  name: "newdepartment",
                  message: "Please select the department ID for this role.",
                  choices: result.map((department) => department.name),
                },
              ])
              .then((results) => {
                const department = result.find(
                  (department) => department.name === results.newdepartment
                ); //matching the department name to the id to pass into the db.query.
                db.query(
                  "INSERT INTO roles SET ?",
                  {
                    title: results.newrole,
                    salary: results.newsalary,
                    department_id: department.id,
                  },
                  function (err) {
                    if (err) throw err;
                    console.log("Role successfully added.");
                    startMenu();
                  }
                );
              });
          });

          break;
        case "Add an employee":
          db.query("SELECT * FROM employees, roles", (err, result) => {

            inquirer
              .prompt([
                //When adding an employee: First, Last, Role, Manager.
                {
                  type: "input",
                  name: "newfirst_name",
                  message: "Please enter the first name of the employee.",
                },
                {
                  type: "input",
                  name: "newlast_name",
                  message: "Please enter the last name of the employee.",
                },
                {
                  type: "list",
                  name: "newrole2",
                  message: "Please select their role.",
                  choices: console.log(result),
                },
                {
                  type: "list",
                  name: "newmanager",
                  message:
                    "Please select their manager.",
                  choices: result.map(
                    (employee) => employee.first_name + " " + employee.last_name
                  ),
                },
              ])
              .then((results) => {
                db.query(
                  "INSERT INTO employees (first_name, last_name, role_id, manager) VALUES (?, ?, ?, ?)",
                  [
                    results.newfirst_name,
                    results.newlast_name,
                    results.newrole2,
                    results.newmanager,
                  ],
                  function (err) {
                    if (err) throw err;
                    console.log("Employee successfully added.");
                    startMenu();
                  }
                );
              });
          });

          break;
        case "Update an employee role.":
          db.query("SELECT * FROM employees", (err, result) => {
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "newemployeename",
                  message:
                    "Please select the employee you would like to update",
                  choices: result.map(
                    (employee) => employee.first_name + " " + employee.last_name
                  ),
                },
              ])
              .then((results) => {
                //Matching employee name to their ID.
                const employeeID = result.find(
                  (employee) =>
                    employee.first_name + " " + employee.last_name ===
                    results.newemployeename
                );
                db.query("SELECT * from roles", (err, result) => {
                  inquirer
                    .prompt([
                      {
                        type: "list",
                        name: "newrole",
                        message:
                          "Please select the updated role for the employee.",
                        choices: result.map((role) => ({
                          name: role.title,
                          value: role.id,
                        })),
                      },
                    ])
                    .then((results) => {
                      console.log(results);
                      // const roleId = result.find(
                      //   (role) => role.title === results.newrole
                      // );
                      // db.query(
                      //   "UPDATE employees SET role_id = ? WHERE id = ?",
                      //   [roleId.id, employeeID.id]
                      // );
                      // startMenu();
                    });
                });
              });
          });

          //When updating the role: prompted to select employee and update their new role.

          break;
        default:
          console.log("Please make a selection to continue.");
      }
    });
};

startMenu();

// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
