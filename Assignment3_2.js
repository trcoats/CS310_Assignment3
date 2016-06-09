var hoursWorked;
var employeeNumber;
var salary;

hoursWorked = prompt("How many hours did the employee work?");
employeeNumber = prompt("What is the employee type?\n\n1 -- Tester\n2 -- Developer\n3 -- Manager");

if (employeeNumber = 1)
    salary = hoursWorked * 35;

else if (employeeNumber = 2)
    salary = hoursWorked*50;

else if (employeeNumber = 3)
    salary = hoursWorked * 65;

document.write("Employee was paid $" + salary);