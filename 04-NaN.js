var result = 0/0;
console.log(result); // NaN ---> Not a Number
console.log("==========");

var n1;
console.log(n1+10);

console.log(`=== String to number conversion ===`);

var str = "JavaScript";
var result = +str;
console.log(result);

var isEvenOddNum=function(num){
    var result= (num%2==0)? true:false;
    return result;
}
isEvenOddNum(29);
isEvenOddNum(44);
isEvenOddNum(0);
isEvenOddNum(101);