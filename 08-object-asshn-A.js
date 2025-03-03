let professor = {
    firstname : "Jack",
    lastname: "Root",
    age: 40,
    qualification: "Phd in CS",
    college: "ABC College",
    degrees:{
        engineering : "CSC",
        PHD : "Adv Programming"
    },
    certificates :["Hacker Rank"," Certificate in IFE course", " Certificate in Adv Programming"]
}

console.log(`========= task 1 =========`);
console.log(professor);

console.log(`========= task 2 =========`);
console.log(professor.degrees);

console.log(`========= Adding new array -> certificates =========`);
console.log(professor.certificates);

console.log(`========= Adding new property 'totalExperiece' =========`);
professor.totalExperience = "14 years";
console.log(professor);
console.log(`Total experience : ${professor.totalExperience}`);

console.log(`========= Modify existing property =========`);
professor.college = "Government College";
console.log(professor);

console.log(`========= Adding new certificate at index 2 =========`);
professor.certificates.splice(2,0," Oracle Certified");
console.log(professor.certificates);

console.log(`========= Last element of certificates array =========`);
let result = professor.certificates[professor.certificates.length-1];
console.log(`last element of certificates : ${result}`);

console.log(`========= log object on console using for in loop =========`);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key} : ${element}`);
        
    }
}