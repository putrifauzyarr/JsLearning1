const student = {
    "name": 'Putri',
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "address": "Jl. Raya No. 123, Sukabumi"
}

const bayu = Object.assign({},student);
bayu.name = "Bayu Indra Permana"

console.log(bayu);
console.log(student);