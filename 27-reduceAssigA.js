const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log("========= task 1=========");
let res1 = arrayNumbers.reduce((runningvalue,element) =>{
    return runningvalue = runningvalue + element;
},0)
console.log(`Sum of all elements : ${res1}`);

console.log("========= task 2 =========");
let res2 = arrayNumbers.filter(element =>{
    return element % 5==0;
}).reduce((r_value,element) =>{
    return r_value=r_value+element;
},0)
console.log(`Addition of numbers which are multiple of 5 : ${res2}`);
