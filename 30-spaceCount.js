
function spaceCount(str){
    let totalSpace = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == " "){
            totalSpace++;
            
        }
    }
    return totalSpace;
    
}
let str1 = spaceCount("Revision is the mother of success");
console.log("Revision is the mother of success");
console.log(`Total spaces in string : ${str1}`);

console.log(`==============================================`);

let str2 = spaceCount("JavaScript is the language of internet world");
console.log("JavaScript is the language of internet world");
console.log(`Total spaces in string : ${str2}`);

