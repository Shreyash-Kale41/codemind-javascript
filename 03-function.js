// Type1: Function without parameter/argument and no return value
function test(){
    console.log("Test");   
}
test();


// Type2: Function with argument or parameter and no return value
function square(num){
    var result=num*num;
    console.log(`Square is ${result}`);
    
}
square(5);
square(19);


// Type3: Function with argument or parameter and return value
function addition(n1,n2,n3,n4){
    console.log(`Numbers to add: ${n1},${n2},${n3},${n4}`);
    var result=n1+n2+n3+n4;
    return result;
}
var returnValue=addition(3,4,8,5);
console.log(`Addition is ${returnValue}`);

var returnValue=addition(3.78,40.65,83.12,59.09);
console.log(`Addition is ${returnValue}`);

function fullName(firstName, middleName, lastName){
    console.log(`Full name is: `);
    var result = firstName + middleName + lastName;
    console.log(result); 
}
fullName("Shreyash ", "Chandrakant ", "Kale");