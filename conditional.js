//CONDITIONAL AND LOGICS

let rating = 3;

if (rating===3) {
    console.log('that is the right rating');
};

if (rating ===2) {
    console.log('Wrong')
}

else if (rating ===3) {
    console.log('This is  the right decision');
};

// Days in a week
let days = 1;
switch (days) {
    case 1: console.log("Sunday");
    break;
    case 2: console.log("Monday");
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wednesday");
    break;
    case 5: console.log("Thursday");
    break;
    case 6: console.log("Friday");
    break;
    case 7: console.log("Sarturday");
    break;
    
    default:console.log(Invalid); // if condition does not meet
};

   

    
    
    
    





//Declare password variable and give it a value;
// use if statement to :
//check if the password has space
//ensure that your password has a length of more than 6 characters
//console.log something if condition is true

let password = "hellomary";

if (password.length >= 6){
    if (password.indexOf(' ') === -1){
        console.log('VALID PASSWORD');
    }
    else{
        console.log("INVALID PASSWORD");
    }
};

//logic operaters

let age = 20;
if (age < 6 || age >= 65){
    console.log("YOU GET IN FOR FREE");
}
else {
    console.log(`YOU NEED TO PAY KHS.${50} TO EAT`);
}
//ternary operator
let javascript = 'hard';

 javascript === 'easy'? 'okey' : 'not true';
 console.log(javascript);

 //TERNARY OPERATOR
let newPerson = 'people';
console.log(newPerson === 'names')?'REAL NAME' : 'WRONG NAME';

// if (newPerson === 'femidevs') {
//     console.log('REAL NAME');
// }
// else {
//     console.log('WRONG NAME');
// }







