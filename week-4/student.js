const student = {
    "name": 'Putri',
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "address": "Jl. Raya No. 123, Sukabumi"
}
console.log(student.name);

// adding  new property to the object
student["alternative address"] = "Jl. Raya No. 321, Bandung";
student.isMarried = true;
console.log(student);

//deleting property from the object
delete student.name;
console.log(student);

//updating property value
student.name = "Putri Fauzya";
console.log (student);

//check if the property exists in the object
if ("alternative adress" in student) {
    console.log(student["alternative address"]);
}
if (student.hasOwnProperty("alternative address")) {
    console.log(student["alternative address"]);
}