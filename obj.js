
//Objects: property and methods

const student = {
    stuName: 'Olusegun', //Property
    age: 21, //property
    study(){ //The method or functuon
        console.log('Hi,' + this.stuName + ' is reading his maths note');
        
    }
}
//The Spread operator
const copiedStudentData = {...student};
console.log(copiedStudentData);


// student.study();

//Arrays and ArrayMethods
const hobbies = ['Sports', 'Reading', 'Cooking'];
// for(let hobby in hobbies){
//     console.log(hobby);
    
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));//Array method implementation.(map)
console.log(hobbies);

//Array objects and reference types
hobbies.push('programming');
console.log(hobbies);

//The Spread operator for hobbies
const copiedHobbiesData = [...hobbies];
console.log(copiedHobbiesData);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);



//The REST operator
const toArray = (...args) => {
    return args;
}

console.log(toArray('stuName', 'age', 'gender', 'bloodgroup',));

//example for REST operator and ordinary parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr); 