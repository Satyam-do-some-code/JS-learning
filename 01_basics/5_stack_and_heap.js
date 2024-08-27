/* *************************Stack Memory(Primitive)******************************** */

//stack memory is used to store primitive datatype.

let name = "Alex";
let anotherName = name;

console.log(name);                  //Here we assign the "Alex" to both variable
console.log(anotherName);

anotherName = "Ramesh";             //but here if we did some changes in "anotherName" variable, it doesn't affect "name" variable because , when we assigned 'Alex' to antoherName, we get the copy of the "name" variable and we did changes on copied variable.

console.log(anotherName);          
console.log(name);







/* *************************Heap Memory(Non-primitive or reference)******************************** */

//Heap memory is used to store reference datatype.

let userOne = {
    userID : 45564,
    userEmail: "wink124@gmail.com",
}

let userTwo = userOne;

console.log(userOne.userEmail);

userTwo.userEmail = "abc123@gmail.com";     //In the heap memory,if we assign "userOne" data to "userTwo",here the original data assgined to another variable not the copy of it. 

console.log(userTwo.userEmail);                
console.log(userOne.userEmail);

//we did changes on "userTwo" but the changes impact on the original data which is "userOne".