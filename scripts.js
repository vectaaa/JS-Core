var person = 'Max';
var age = 33;
var hasHobbies = true;


console.log(person);

function summerizeUser(userName, userAge, userHobby){
    return 'Vecta is ' + userName + ' he is ' + userAge + ' years old, he loves playing ' + userHobby 
}

console.log(summerizeUser('vecta', 23, 'football'));


//let and const 
let persons = 'Max'; //this is changeable
const ages = 33;  //This is not changeable
let hasHobbiess = true;

//Arrrow functions
const summerizeU = (userName, userAge, userHobby) => {
    return 'Vecta is ' + userName + ' he is ' + userAge + ' years old, he loves playing ' + userHobby 
}
console.log(summerizeU('zecta', 43, 'football'));

//other types of functions
const add = (a,b) => (a + b);
console.log(add(1,6));

const addOne = a => a + 8;
console.log(addOne(3));

const addRandom = () => 3 + 5;
console.log(addRandom());


