console.log("==========Task 1==========");

function squareOfWordLength(str){
    var wordLength=str.length;
    var result= wordLength*wordLength;
    console.log(`Length of string is ${wordLength}`);
    return console.log(`Square is ${result}`);
    
}
squareOfWordLength("JavaScript");
console.log("--------------------------");

squareOfWordLength("Google Chrome");
console.log("--------------------------");

squareOfWordLength("Web Developer Smart");


/* 
var squareOfWordLength = function(str){
    var wordLength=str.length;
    var result= wordLength*wordLength;
    console.log(`Length of string is ${wordLength}`);
    return console.log(`Square is ${result}`);
}
var show = squareOfWordLength("JavaScript");
var show = squareOfWordLength("Google Chrome");
var show = squareOfWordLength("Web Developer Smart");
*/


console.log("==========Task 2==========");
function task(){
    var str="I am UI Developer";
    var strLength=str.length;
    console.log(`Length of string is ${strLength}`);
    var tWords=str.split(" ");
    var totalWords=tWords.length;
    var resultDiv=strLength/totalWords;
    console.log(`String length divided by total no. of words is ${resultDiv}`);
    var resultMul=strLength*totalWords;
    console.log(`String length multiplied by total no. of words is ${resultMul}`);
}
task();


/*
var task = function(){
    var str="I am UI Developer";
    var strLength=str.length;
    console.log(`Length of string is ${strLength}`);
    var tWords=str.split(" ");
    var totalWords=tWords.length;
    var resultDiv=strLength/totalWords;
    console.log(`String length divided by total no. of words is ${resultDiv}`);
    var resultMul=strLength*totalWords;
    console.log(`String length multiplied by total no. of words is ${resultMul}`);
}
var show=task();
*/