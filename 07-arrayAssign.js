const fruits=[" Banana"," Orange"," Apple"," Mango"," Water Melon"];
console.log(`======= op 1 =======`);
console.log(`First element of array : ${fruits[0]}`);
console.log(`Last element of array : ${fruits[fruits.length-1]}`);

console.log(`======= op 2 =======`);
let addPapaya=fruits.unshift(" Papaya");
console.log(`Array after addding Papaya : ${fruits}`);

console.log(`======= op 3 =======`);
let mango=fruits.splice(4,1);
console.log(`Array after removing Mango : ${fruits}`);

console.log(`======= op 4 =======`);
let pine=fruits.push(" Pineapple");
console.log(`Array after adding Pineapple : ${fruits}`);

console.log(`======= op 5 =======`);
let dragon=fruits.splice(4,0," Dragon Fruit");
console.log(`Array after adding Gragon fruit before Water Melon : ${fruits}`);

console.log(`======= op 6 =======`);
let kiwi= fruits.splice(2,1," Kiwi");
console.log(`After replacing Orange with Kiwi : ${fruits}`);

console.log(`======= op 7 =======`);
let subArray1=fruits.slice(1,5);
console.log(`Elements from index 1 to 4 : ${subArray1}`);

console.log(`======= op 8 =======`);
let subArray2=fruits.slice(fruits.length-3);
console.log(`Last 3 elements from array : ${subArray2}`);
