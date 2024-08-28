// const score = 100;
// console.log(score);

// const num = new Number(300);     //if you want to convert specifically into numberd datatype then use this.
// console.log(num);

// const newNum = 85;
// console.log(newNum.toFixed(2));    //this method adds ".0" at the end of the numbers,inside the argument you have to enter that how many numbers of zero you want after point.

const hundreds = 1000000;             
// console.log(hundreds.toLocaleString('en-In'));   //it gives "," inside number.Bydefault it give us standard "," but if we use 'en-In',then it will "," according to indian standard.








/**************************************Maths************************************************/

// console.log(Math.abs(-4));       // converts negaive numbers into positive numbers.
// console.log(Math.round(4.6));    // Round of the numbers.
// console.log(Math.ceil(4.3));     // Always round of the max value of the point.
// console.log(Math.floor(4.9))     // Always round of the min value of the point.



// console.log(Math.floor(Math.random()*100)+1);  // +1 we added here because if the number came 0.01 than math.floor will give 0,but we added +1 so if 0 came it plus it by 1.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);




