//destructuring : the extract values from aarays and objects,
//then assign them to variables in a convenient way
//[] - to perform array destructuring.
//{} - to perform object destructuring.

//Example 1 (SWAP THE VALUE OF TWO VARIABLES)

let a = 1;
let b = 2;

//LHS we are destructuring on the RHS we are creating an array
[a,b] = [b,a]

console.log(a);
console.log(b);

//Example 2:(SWAP TO VALUES IN AN ARRAY)
const colours = ["red","green","blue","black","white"];

[colours[3], colours[1]] = [colours[4], colours[5]];

//Exapmle 3: (ASSIGN ARRAY ELEMENTS TO VARIABLES)
const colors = ["purple","Indigo", "violet", "orange", "black"];

const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(otherColors);

//Example 4: (Extract values from objects)
 const person1 = {
    firstName: "Spongebob",
    secondName: "Squarepants",
    age: "12",
    job: "Fry cook",
}
const person2 = {
    firstName: "Patrick",
    secondName: "Star",
    age: "21",
}
// const {firstName, secondName, age, job} = person1;
const {firstName, secondName, age, job="Talkertive"} = person2;//Note values extracted can have default values
console.log(firstName);
console.log(secondName);
console.log(age);
console.log(job);

//Example 5: (Destructure in Function parameters)
function displayPersonData({firstName, lastName, age, job="Talkertive"}){ //Note you must put the second curly bracket 
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: "12",
    job: "Fry cook",
}
const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: "21",
}

displayPersonData(person4)
