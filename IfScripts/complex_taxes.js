var payRate = 17.30;
var hoursWorked = 45;
var annualGrossPay = weeklyGrossPay * 52;
var weeklyGrossPay
var filer = "single";

// first check if worked over 40 hours
if (hoursWorked <= 40) {
    weeklyGrossPay = payRate * hoursWorked;
}
else {
    overtime = (hoursWorked - 40) * (1.5 * payRate); //first calculate the overtime pay
    weeklyGrossPay = payRate * 40 + overtime;
}
//filling single
if (annualGrossPay < 12000 && filer == "single") {
    taxWithholding = weeklyGrossPay * 0.05;
} else if (annualGrossPay >= 12000 && annualGrossPay > 25000 && filer == "single") {
    taxWithholding = weeklyGrossPay * 0.1;
} else if (annualGrossPay >= 25000 && annualGrossPay > 75000 && filer == "single") {
    taxWithholding = weeklyGrossPay * 0.15;
} else if (annualGrossPay >= 75000 && filer == "single") {
    taxWithholding = weeklyGrossPay * 0.2;
} else {

    //filling joint 
    if (annualGrossPay < 12000) {
        taxWithholding = weeklyGrossPay * 0;
    } else if (annualGrossPay >= 12000 && annualGrossPay > 25000) {
        taxWithholding = weeklyGrossPay * 0.06;
    } else if (annualGrossPay >= 25000 && annualGrossPay > 75000) {
        taxWithholding = weeklyGrossPay * 0.11;
    } else {
        taxWithholding = weeklyGrossPay * 0.2;
    }
}
console.log("You work " + hoursWorked + " hours this period.");
console.log("Because you earn $" + payRate + " per hour, your gross pay is $" + weeklyGrossPay);
console.log("Your filing status is " + filer);
console.log("Your tax withholdings this period is $" + taxWithholding.toFixed(2));
console.log("Your net pay is $" + (weeklyGrossPay - taxWithholding.toFixed(2)));
