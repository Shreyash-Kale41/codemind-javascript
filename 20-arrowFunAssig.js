console.log("============= task 1 =============");
let display = () => {
    console.log(`Good Morning, Today is Wednesday`);   
}
display();

console.log("============= task 2 =============");
let mul = (n1,n2,n3=1) => {
    console.log(`multiplication is ${n1*n2*n3}`);  
}
mul(5,5,2);
mul(10,4);

console.log("============= task 3 =============");
let add = (n1,n2,n3,n4,n5) => {
    sum = n1+n2+n3+n4+n5;
    return sum; 
}
let addition1 = add(100,100,200,349,756);
console.log(`Addition of numbers is ${addition1}`);

let addition2 = add("I am"," learning"," ES6"," features"," in depth");
console.log(`Concat of words which makes meaningful sentence : ${addition2}`);
