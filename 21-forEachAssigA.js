const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log("============= task 1 =============");
arrayNumbers.forEach((element,index) => {
    console.log(`index ${index} : ${element}`);   
});

console.log("============= task 2 =============");
console.log("Positive numbers are");
arrayNumbers.forEach(element => {  
    if(element>0){
        console.log(element);    
    }
});

console.log("============= task 3 =============");
let arr=[];
arrayNumbers.forEach(element => {
    if(element<0){
        arr.push(element);
    }   
});
console.log(arr);

console.log("============= task 4 =============");
console.log("Even numbers are");
arrayNumbers.forEach(element => {
    if(element % 2 ==0){
        console.log(element);       
    }
});

console.log("============= task 5 =============");
let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum+element;
});
console.log(`Addition of all elements is ${sum}`);

console.log("============= task 6 =============");
console.log("Even indexed elements are");
arrayNumbers.forEach((element,index) => {
    if(index % 2 ==0){
        console.log(element);       
    }
});