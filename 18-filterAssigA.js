const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log("=========== Numbers greater than 50 ===========");

let res1 = arrayNumbers.filter(element => {
    if(element>50){
        return element;
    }
})
console.log(res1);

console.log("=========== Even numbers ===========");
let res2 = arrayNumbers.filter(element => {
    if(element%2==0){
        return element;
    }
})
console.log(res2);


console.log("=========== Odd numbers ===========");
let res3 = arrayNumbers.filter(element => {
    if(element % 2 != 0){
        return element;
    }
})
console.log(res3);


console.log("=========== Numbers which are multiple of 5 ===========");
let res4 = arrayNumbers.filter(element => {
    return element%5==0;
})
console.log(res4);


console.log("=========== Numbers between 20 & 50 ===========");
let res5 = arrayNumbers.filter(element => {
    if(element>20 && element<50){
        return element;
    }  
})
console.log(res5);

