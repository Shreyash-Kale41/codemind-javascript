console.log("-------Step 1-------");


var greaterNo=function(n1,n2){
    var result= n1>n2? n1:n2;
    console.log(`Greater number is ${result}`);
    
}
greaterNo(10,-10);
greaterNo(800,899);


console.log("-------Step 2-------");
var isEvenOrOddNum = function(num){
    var result = (num%2==0) ? true:false;
    console.log(`Number ${num}  is ${result}`);
    return result;
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log("-------Step 3-------");
var wordLength = function(str){
    var strLength = str.length;
    var result = (strLength%2==0)? "Even":"Odd";
    console.log(`Length of word "${str}" is ${strLength} and it has a ${result} length`);
    return result;
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");