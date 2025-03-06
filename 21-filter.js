const array = [7,15,20,3,25,2,40];

let arr = array.filter((element)=>{
    return element % 5 == 0;
})
console.log(arr);
