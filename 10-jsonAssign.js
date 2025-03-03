const employee= `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`

let obj = JSON.parse(employee);
console.log(`======= Converting to object =======`);
console.log(obj);

console.log(`======= Log on console role -> Dev =======`);
console.log(obj.role[0]);

console.log(`======= Log on console last name -> Melon =======`);
let e_name=obj.name;
let spt=e_name.split(" ");
console.log(spt[1]);

console.log(`======= Log only joining year -> 2019 =======`);
let e_doj=obj.doj;
let spt2=e_doj.split("-");
console.log(spt2[2]);
