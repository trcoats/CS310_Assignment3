var hoursWorked;
var employeeNumber;
var salary;
var overtime;

hoursWorked = prompt("How many hours did the employee work?");
employeeNumber = prompt("What is the employee type?\n\n1 -- Tester\n2 -- Developer\n3 -- Manager");

if (employeeNumber == 1) {
    if (hoursWorked > 40) {
        overtime = hoursWorked - 40;
        salary = 40 * 35 + overtime * (35 * 1.5);
    }
    else {
        salary = hoursWorked * 35;
    }
}


else if (employeeNumber == 2){
    if (hoursWorked > 40) {
        overtime = hoursWorked - 40;
        salary = 40 * 50 + overtime * (50 * 1.5);
    }
    else {
        salary = hoursWorked * 50;
    }
}

else if (employeeNumber == 3){
    if (hoursWorked > 40) {
        overtime = hoursWorked - 40;
        salary = 40 * 50 + overtime * (50 * 1.5);
    }
    else{
    salary = hoursWorked * 65;
        }
}

document.write("Employee was paid $" + salary);