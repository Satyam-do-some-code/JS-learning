const arr = [];

arr.push("apple","banana","orange");      //".push()" method is use to add elements in an Array
// console.log(arr);                          

const myarr = arr.slice(0,1);             //".slice()" using this we can take out the copy of the elemenst from an array.
// console.log(myarr);

const myarr_1 = arr.splice(2,2);           //".splice()" using this we can take out the elemenst from an array,and taken out elements will be deleted from array.
// console.log(myarr_1);
// console.log(arr);


arr.pop();

console.log(arr);

arr.push("mango","kiwi","strawberry");
console.log(arr);


arr.shift();
console.log(arr);

arr.unshift("lichi");
console.log(arr);