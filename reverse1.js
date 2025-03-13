let str ="shreyash";
let rev="";

function reverse(){
    for(let i=str.length-1;i>=0;i--){
        let char = str.charAt(i);
        rev = rev + char;
    }
    console.log(rev);
    
}
reverse();

console.log(`=========way 1 to sort array==========`);

let arr = [11,54,24,62];
arr.sort((a,b)=>{
    return a>b? 1:-1;
})

console.log(arr);
console.log(arr[arr.length-2]);

console.log(`==========way 2 to sort array==========`);

arr.sort((a,b)=> a-b)

console.log(arr);



console.log(`=========way 3 to sort array=========`);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap elements
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr); 



