let code = 18;
let dept


switch (code) {
    case 1:
    dept = "Marketing";
    break;
    case 5:
    dept = "Human Resources";
    break;
    case 10:
    dept = "Accounting";
    break;
    case 12:
    dept = "Legal";
    break;
    case 18:
    dept = "IT";
    break;
    case 20:
    dept = "Customer Relations";
    break;
    default:
        console.log("<unknown>")
       
}
console.log(code + "\t" + dept )