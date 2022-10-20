let studentName = "Monica";
let studentMajor = "BIOL";
let dept;


switch (studentMajor) {
    case "HIST":
     dept = "Kerr Hall, Room 114";
    break;
    case "BIOL":
    dept = "Advising Location: Science Bldg, Room 310";
    break;
    case "CSCI":
    dept = "Sheppard Hall, Room 314";
    break;
    case "ENG":
    dept = "Kerr Hall, Room 201";
    break;
    case "MKT":
    dept = "Westly Hall, Room 310";
    break;
    default:
        console.log("<unknown>")
  
       
}
console.log(studentName + "\t" + studentMajor + "\t" + dept )