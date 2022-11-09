//DEFINING A FUNCTION
function grumpus(){
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
//no input
function greet(){
    console.log('hello');
};
greet();

// grumpus(); calling
grumpus();
function greet(name){
    console.log(`Hi, ${name}.`);
};
greet('Minayo');

//multiply two numbers
function multiply(x, y){
    console.log(x*y);
};
multiply(2, 3);
// //finding the avarege of numbers using function
// function avg(arr){

// }

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
function square(x){
    console.log(x*x);
};
square(8);

function greeting(name){
    console.log(`hello ${name}`.toUpperCase());
};
greeting('world');

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
// -be at least 8 charecters
// -can not contain spaces
// -can not contain the username
//if all requirements are met, return true.
//otherwise: false

function isValidPassword(password,username){
    if(password.length >=8){
        return true

    }
    if(password.indexOf(' ') === -1){
        return true
    }

    if(password.indexOf(username)=== -1){
        return true
    }
};
const password = isValidPassword('minayo', 'mary');
console.log(password);
