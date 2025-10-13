const putri = {
    "name": 'Putri',
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "address": {
        "primary": "Bandung",
        "secodary": "Sukabumi"
    }    
}

const bayu = Object.assign({},putri);
bayu.name = "Bayu Indra Permana";
bayu.address.primary = "Aceh";

console.log(putri.name);
console.log(putri.address.primary);