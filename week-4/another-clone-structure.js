const putri = {
    "name": 'Putri',
    "birthday": "2005-02-13",
    "phone": "081234567890",
    "address": {
        "primary": "Bandung",
        "secodary": "Sukabumi"
    }    
}

const bayu = structuredClone(putri);
bayu.name = "Bayu";
bayu.address.primary = "Aceh";

console.log(putri.name);
console.log(putri.address.primary);

console.log(bayu.name);
console.log(bayu.address.primary);