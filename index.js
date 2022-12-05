//View all: Departments, roles, employees, add a department, add a role, add an employee and update their role.
//When adding a department: Enter the name of the department.
//When you add a role: Name, Salary, Department.
//When adding an employee: First, Last, Role, Manager.
//When updating the role: prompted to select employee and update their new role. 


const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
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
  console.log(`Connected to the employees database!`)
);

// // Create a movie
// app.post('/api/new-movie', ({ body }, res) => {
//     const sql = `INSERT INTO movies (movie_name)
//       VALUES (?)`;
//     const params = [body.movie_name];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body
//       });
//     });
//   });
// Read all movies
// app.get('/api/movies', (req, res) => {
//     const sql = `SELECT id, movie_name AS title FROM movies`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });
  
//   // Delete a movie
//   app.delete('/api/movie/:id', (req, res) => {
//     const sql = `DELETE FROM movies WHERE id = ?`;
//     const params = [req.params.id];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//         message: 'Movie not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
//   });




//404 request and app.listen.
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  