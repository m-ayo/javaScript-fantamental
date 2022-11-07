let animal = "dog";
console.log(animal.length);

//acces individual characters in a string

// changing case
console.log(animal[3]);
let msg = 'I am king';
console.log(msg);
let yelMsg = msg.toLocaleUpperCase();
console.log(yelMsg);

let angry = 'LeaVe Me aLoNe';
let lower = angry.toLowerCase();
console.log(lower);

//trim method
let greeting = ' leave me alone please  ';
console.log(greeting);
let greetings = greeting.trim();
console.log(greeting);

let tvShow = 'catdog';
let firstIndex = tvShow.indexOf('cat');
console.log(firstIndex);

//slice
let str = 'Lokichoggio';
console.log(str);

let partOfstr = str.slice(2, 6);
console.log(partOfstr);
let annoyingLaugh = 'teehee so funny! teehee!';
console.log(annoyingLaugh);

let replacer = annoyingLaugh.replaceAll('teehee', 'haahaa');
console.log(replacer);
let song = "london calling";
console.log(song);

//template literals



// let park = 'Yellowstone';
// const index = park.indexOf(Stone);
// console.log(index);

let myName = 'mary\minayo';
console.log(myName);
console.log('hello\'world');

//template literals

let totals = `We are ${20}`;
console.log(totals);

let cohortOne = 15;
let cohortTwo = 20;

let femidevs = `We are ${cohortOne + cohortTwo} in total`;
console.log(femidevs);

let drinks = 'soda';
let quantity = 2;
let price = 970;

// We bought 2 crates of soda at kshs.1940
let crates = `We bought 2 crates of soda at kshs ${quantity*price}`;
console.log(crates);

let people = `Femidevs community`;
console.log(people)

