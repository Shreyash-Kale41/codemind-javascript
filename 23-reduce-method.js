const array = [4, 9, 6, 5, 3, 8, 1];
const sum = array.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sum);

const multiplication = array.reduce( (runningTotal, element)=>{
    return runningTotal * element;
}, 1);
console.log(multiplication);

const sumEven = array.filter((element)=>{
    return element%2==0;
}).reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sumEven);