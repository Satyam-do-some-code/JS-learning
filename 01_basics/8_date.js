// Date

const mydate = new Date();
// console.log(mydate);
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());                 //This will return the current date only.
// console.log(mydate.toLocaleString(undefined,));     // This will return date and time.


//Creating your own date.

const myOwnDate = new Date(2020, 3, 27, 23,5);    //we can include or put our own date and time .
// console.log(myOwnDate);
// console.log(myOwnDate.toDateString()); 
// console.log(myOwnDate.toLocaleString()); 


const date_new = new Date("01-23-2004");         //we can create our own date format.I uesd "mm-dd-yy" format,which is indian format.
// console.log(date_new.toDateString()); 



const new_date_2 = Date.now();         //This will give the miliseconds from "1st jan 1970" to now.
// console.log( new_date_2);           


const date_method = new Date();
console.log(date_method.getMonth());      //This will give me the only the month from date.
console.log(date_method.getFullYear());      //This will give me the only the year from date.
console.log(date_method.getDate());      //This will give me the only the date from date.



