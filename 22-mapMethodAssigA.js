const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log("========= add 10 into each element =========");
let res1 = arrayNumbers.map(element => {
    return element+10;
})
console.log(res1);

console.log("========= Cube of each array element =========");
let res2 = arrayNumbers.map(element => {
    return element*element*element;
})
console.log(res2);


console.log("========= add index value to each element =========");
let res3 = arrayNumbers.map((element,index) => {
    return element=element+index;   
})
console.log(res3);


