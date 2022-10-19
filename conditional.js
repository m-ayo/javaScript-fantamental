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
let days = 8;

if (days=== 1) {
    console.log("Sunday");
}
else if (days=== 2) {
    console.log("Monday");
}
else if (days=== 3) {
    console.log("Tuesday");
}
else if (days=== 4) {
    console.log("Wednesday");
}
else if (days=== 5) {
    console.log("Thursday");

}
else if (days=== 6) {
    console.log("Friday");
}

else if (days=== 7) {
    console.log("Saturday");
}
else {
    console.log("No valid day found");
}

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







