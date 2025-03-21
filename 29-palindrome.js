console.log("============== Way 1 ================");

let isPalindrome = (str) =>{
    let str2 = str.split("");
    let rev = str2.reverse();
    let reverse = rev.join("");

    // let  reverse = str.split("").reverse().join("");
    
    if(str === reverse){
        console.log(`String "${str}" is palindrome`);
        
    }
    else{
        console.log(`String "${str}" is Not palindrome`);
        
    }
}

isPalindrome("madam");
isPalindrome("141");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");



// console.log("============== Way 2 ================");

// let str2 = "";
// function palindrome(str){
//     for(let i=str.length-1; i>=0; i--){
//         str2 = str2 + str[i];
//     }
//     if(str == str2){
//         console.log(`String "${str}" is palindrome`);       
//     }
//     else{
//         console.log(`String "${str}" is Not palindrome`);       
//     }   
// }

// palindrome("madam");
// palindrome("141");
// palindrome("sunday");
// palindrome("mom");
// palindrome("listen");



// console.log("============== Way 3 ================");

// function isPalindrome(str){
//     let start = str[0];
//     let end = str[str.length-1];

//     if(start == end){
//         console.log(`String "${str}" is palindrome`);
//         start++;
//         end--;       
//     }
//     else{
//         console.log(`String "${str}" is Not palindrome`);      
//     }
// }

// isPalindrome("madam");
// isPalindrome("141");
// isPalindrome("sunday");
// isPalindrome("mom");
// isPalindrome("listen");