INSERT INTO departments (name)
VALUES ("Finance"),
       ("Human Resources"),
       ("IT"),
       ("Marketing"),
       ("Operations");

INSERT INTO roles (title, department_id, salary)
VALUES ("Executive", 5, 125000),
       ("Manager", 5, 100000),
       ("Executive Assistant", 5,  95000),
       ("Analyst", 4, 90000),
       ("Accountant", 1,85000),
       ("Sales", 2, 65000),
       ("CSR", 3, 50000);

INSERT INTO employees (first_name, last_name, manager, role_id)
VALUES ("Elaine", "Wright", NULL, 1),
       ("Emma", "Cain", 1, 2),
       ("Sonny", "Krueger", NULL, 3),
       ("Ayah", "Ortega", 2, 4),
       ("Oscar", "Matthews", 2,5),
       ("Estelle", "Erickson",NULL,6),
       ("Miles", "Higgins", 3,7);