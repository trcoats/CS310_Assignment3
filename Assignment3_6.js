var salary;

function calculateEmployeeSalary(hoursWorked, employeeNumber){
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
            salary = 40 * 65 + overtime * (65 * 1.5);
        }
        else{
            salary = hoursWorked * 65;
        }
    }
    return salary;
}

alert(calculateEmployeeSalary(42, 2));