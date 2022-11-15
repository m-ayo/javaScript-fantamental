//DEFINING A FUNCTION
function grumpus(){
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
//no input
// function greet(){
//     console.log('hello');
// };
// greet();

// grumpus(); calling
// grumpus();
// function greet(name){
//     console.log(`Hi, ${name}.`);
// };
// greet('Minayo');

//multiply two numbers
function multiply(x, y){
    console.log(x*y);
};
multiply(2, 3);
// //finding the avarege of numbers using function
function avg(arr){

 }

//divide two numbers
function divide(x,y){
    console.log(x/y);
};
divide(8, 2);
//add two numbers
function add(x, y, z){
    console.log(x+y+z);
};
add(15, 15 ,15);

//square a number
// function square(x){
//     console.log(x*x);
// };
// square(8);

// function greeting(name){
//     console.log(`hello ${name}`.toUpperCase());
// };
// greeting('world');

//finding avg
function avg(x,y,z){
    console.log((3+ 6+ 9)/avg.length);

};
avg(4, 8, 1);
//example2
function avge(arr){
    let sum = 0;
    for(let r of arr){
        sum += r;
    console.log(sum);
}
const avarage = sum / arr.length;
console.log(avarage);
};
avge([2,4,6,10]);

//function findLargest
function findLargest(x,y){
    if (x>y){
    console.log(`${x} is larger`);
    }
   else if (x<y) {
    console.log(`${x} is larger`);
}
else{
    console.log(`${x} and ${y} are equal`);
}
};
findLargest(12, 10);

//RETURN IN FUNCTION
function add(x, y){
    return x + y;
    console.log('Hello World'); //wont be executed
}
const total= add(2,3);
console.log(total);

//function is purple
function isPurple(color){
    if(color =='purple'){
        return true
    }
    else {
        return false
    
    }
};
const color = isPurple('purple');//declaring a new variable to store a value
console.log(color);

//creating password

//write a isValidPassword function
//it accepts 2 parameters: password and username
//password must:
-//be at least 8 characters
-//can not contain spaces
-//can not contain the username
//if all requirements are met, return true.
//otherwise: false

function isValidPassword(password,username){
    if(password.length <8){
        return false

    }
    if(password.indexOf(' ') !== -1){
        return false
    }

    if(password.indexOf(username)!== -1){
        return true
    }
      else{
        return true
    }
}
const newPassword = isValidPassword('mary2022', 'minayo');
console.log(newPassword);

// even more simpler method
function isValidPassword(password, username){
    const tooshort = password.length <8;
    const hasSpace = password.indexOf('') !== -1
    const containUserName = password.indexOf(username)!== -1
return !tooshort && !hasSpace && !containUserName;
};
const checker = isValidPassword('mary2022', 'minayo');
console.log(checker);

//pangram
//pangram is a sentence that contains every letter of the alphabet
//"The quick brown fox jumps over the lazy dog"
//Write a function called isPangram which checks to see a given sentence contains every letter of the alphabet
//Make sure you ignore string casing

//solution 1
// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(lowerCased.includes(char) ===-1){
//             return false
//         }
//     }
//     return true
// }
// const panGram = isPangram("The quick brown fox jumps over the lazy dog")
// console.log(panGram);

//solution 2
function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char)){
            return false
        }
    }
    return true
}
const panGram = isPangram("The quick brown fox jumps over the lazy dog")
console.log(panGram);

//SCOPE- variable visibility
1.//Function scope
let bird = 'mandarin duck';
function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird);
}
console.log(bird);
birdWatch();

2.//block scope
let radius = 8;
if(radius > 0){
    const pl = 3.14;
    let circ = 2*pl*radius;
    console.log(circ);
};
console.log(radius);

//returning function
function makeBetweenFunc (min, max){
    return function (val){
        return val >= min && val <= max;
    }
}
const inAgeRange = makeBetweenFunc(18, 100);
console.log(inAgeRange(17));
console.log(inAgeRange(68));

//callback functions- a callback function is a function passed into another function as an argument, which is then invoked inside another function.
//thirteen times
function rage(){
    console.log("I HATE EVERYTHING")
}
//hoisting
//automatically repeat function in a certain number of times
function repeatNTimes(action, num){
     for (let i = 0;i < num; i++){
        action();
     }
}
repeatNTimes(rage, 13);




