const student = {
    "name": 'Putri',
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "address": "Jl. Raya No. 123, Sukabumi"
}

const putri = student;
putri.name = "putri fauzya"

console.log(student == putri);
console.log(student.name)