DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE catalog_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30)
  department_id INT NOT NULL,
  FOREIGN KEY (department)
  REFERENCES departments(id)
  ON DELETE SET NULL,
  salary INT NOT NULL,
  
);
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role_id(id)
);