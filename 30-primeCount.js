const array = [3,9,7,6,19,29,53];
let totalPrime = 0;
function isPrime(num){
    for (let i=2; i<num; i++) {
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function primeCount(){
    let arr = [];
    for (const element of array) {
        if(isPrime(element)){
            arr.push(element);
            totalPrime++;
        }
    }
    console.log(`Prime numbers : ${arr}`);
    console.log(`Total prime numbers from array : ${totalPrime}`);
    
}

primeCount();
