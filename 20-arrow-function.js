
let add = ()=>{
    console.log(`Addition`);  
}
add();

let sum = (n1,n2=0)=>{
    console.log(`Sum ${n1+n2}`);  
}
sum(10,20);
sum(40);

let square = (num) => {
    let result = num*num;
    return result;
}
let s_res = square(5);
console.log(s_res);

let cube = (num) => {
    let result = num*num*num;
    return result;
}
let cubeResult = cube(7);
console.log(cubeResult);
