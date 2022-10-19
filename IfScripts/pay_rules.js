var payRate = 17.30;
var hoursWorked = 45;

if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
}
else {
    overtime = (hoursWorked - 40) * (1.5 * payRate);
    grossPay = payRate * 40 + overtime;
}

console.log("Pay Rate  Hours Worked  Gross Pay");
console.log(payRate + "\t\t " + hoursWorked + " \t\t\t" + grossPay)