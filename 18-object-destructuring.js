
const student = {
    name : "Jenny",
    city : "Pune",
    age : 24,
    pin : 411057,
    country : "India",
    isMarried : true
}

// let city = student.city;
// let age = student.age;
// let isMarried = student.isMarried;

let { name, city, age, country="USA", isMarried, marks=0} = student;
console.log(name, city,age,country, isMarried);
console.log(marks);

const array = ["Jenny", "Elon", "Stew"];
const [ n1, n2, n3="MyLove", n4=1] = array;
console.log(n1,n2,n3,n4);
console.log(array);