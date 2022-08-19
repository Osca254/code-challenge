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