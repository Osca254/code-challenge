// const age = 6;
// const isAdult = age >= 18;
// isAdult;

function say(greeting, firstName) {
  return `${greeting} my name is ${firstName}`;
}
console.log(say("Goodmorning", "Oscar"));

const okumu = (par1, par2) => {
  console.log(`Adding ${par1}`);
  console.log(`Adding${par2}`);
  return par1 + par2;
};
console.log(okumu(23, 23));

function ismine(thing) {
  return thing;
}
console.log(ismine({ firstName: "Irine", lastName: "Amoit" }));

function main(cb) {
  console.log(cb());
}
main(function () {
  return "After I get passed the main()function as the only argument, I,m stored in the local'cb variable!";
});
function greet(name, cb) {
  return cb(name);
}
greet("Ada LoveLace", function (name) {
  return "Hello there," + name;
});

function myFunction() {
  return 42;
}
let myVar = myFunction() * 2;
console.log(myVar);
const newnumber = myVar * 2;
console.log(newnumber);
let nextNumber = myFunction() + myVar + newnumber;
console.log(nextNumber);
function multiplyNum() {
  var myNum = 43;
  return myNum * 23;
}
console.log(multiplyNum());

function banckAccount() {
  secretPassword = "nambale99";
  return "bankAccount() function invoked!";
}
console.log(banckAccount());
console.log(secretPassword);

let allVar = 23;
function firstFunc() {
  const firstVar = 2;
  return allVar + firstVar;
}
console.log(firstFunc());

const globalVar = 1;
function firstFunction() {
  const firstVar = 2;
  function secondFunction(){
    const secondVar = 3;
    return secondVar + firstVar + globalVar;
  }
  let  resultFromSecondFunc = secondFunction();
  return resultFromSecondFunc;
}
console.log(firstFunction());

const cat = ['oscar','kambona','irine'];
cat.unshift('Amoit','Lyz');
cat.push('myMum','myDad');
console.log(cat);
const names = [...cat];
console.log(names);
names.pop() && names.shift();
console.log(names);
console.log(names.slice(2, 3));

let days = ['Mon','Tue','Wed','Thur','Fri']
let day = days.slice(2 ,4);
console.log(day); 

let getAge = [33,34,56,12,45,35];
function myAge(getAge){
  for(let i = 0; i<getAge.length;i++){
  console.log(`wrapped ${getAge[i]} and added a bow!`);
  debugger;
}
return getAge;
}
myAge(getAge);

let students = ['Irine','Lyz','Ivy','Eddwinna','Rehema'];
function getStudents(students){
  for(let i = 0;i<students.length;i++){
    console.log(`I am ${students[i]} a student at moringa.`)
  }
  return students;
}
getStudents(students);
let studentList =[ {
  firstName: "Fransisca",
  lastName: "Anyango",
  favoriteAnimal: "Jaguar",
}];

const users = [
  {
    firstName: "Oscar",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
    personalQuote: "You're never too old to learn something new,"
  },
  {
    firstName: "Irene",
    lastName: "Amoit",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
    personalQuote: "I just got lost in thought - it was unfamiliar"
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
    personalQuote: "Behind every great man is a a woman rolling her else"
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote:"Failure is not the opposite of success: it’s part of success",
  }
];

function firstNamePrinter(collection){
  for (const item of collection){
    console.log(item.favoriteAnimal);
  }
} firstNamePrinter(users)

function mineColor (collection) {
  for (let kambona of collection) {
    if (kambona.favoriteAnimal === 'Jaguar') {
      console.log(kambona.firstName);
    }
  }
} mineColor(users)
 
function mineAnimal (collection) {
  for(let okumu of collection){
    if (okumu.favoriteColor === 'Yellow') {
      console.log(okumu.lastName);
    }
  }
}mineAnimal(studentList)
function ofula (collection ,color) {
  for(let user of collection ) {
    if (user.favoriteColor === color){
      console.log(user.firstName);
    }
  }
} ofula(users,"Yellow")
