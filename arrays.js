//CREATING ARRAYS

let students = [];
students[0] = 'femi';
students[1] = 'dev';
students.push('busia');
students.push(4);
students.push(true);
students.pop();
students.pop();
console.log(students);

let colors = ['red', 'orange', 'yellow'];
console.log(colors);
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);
let staff = [true, 68, 'cat', null];
console.log(staff);

let fruits = ['orange', 'apples', 20, false, undefined ];
fruits[1] = 'milk';
console.log(fruits.length);
console.log(fruits);

let footballTeams = ['manchester united', 'chelsea', 'arsenal'];
let numOfTeams = [4, 6, 1];

let merged = footballTeams.concat(numOfTeams);
let newlyMerged = numOfTeams.concat(footballTeams);
console.log(newlyMerged);
console.log(merged);

//JOIN
let items = [1, 2, 'fruits', false, true];
let sliced = items.slice(1, 4);
console.log(sliced);
console.log(items.includes('fruits'));
let reversed = items.reverse();
console.log('reversed');
console.log(items.join("."));

//SPLICE
let splicer = ['orange', 'apples', 'watermelon', 'mangoes', 'guava'];
//REMOVING AN ITEM USING SPLICE
splicer.splice(2, 1);
splicer.splice(2, 2);

//ADD ITEMS USING SPLICE
splicer.splice(0, 0, 'grapes', 'lemon', 'false');
//REPLACING ITEMS USING SPLICE
splicer.splice(0, 1 ,'banana')
console.log(splicer);

//SORTING ARRAYS
let sorter = ['crocodile', 'lizard', 'chameleon', 'salamander'];
let sorted = sorter.sort();
console.log(sorted);
//NESTING ARRAYS
const color = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['green', 'olive'],
    ['blue', 'navy blue'],
    ['purple', 'orchid']
]
console.log(color[0]);
console.log(color[0][1]);
console.log(color[4][1]);
colors[6] = ['true', 'false'];
console.log(colors);
//colors.push(['true', 'false']);
colors.splice(6, 0, ['Kenya', 'Uganda']);
console.log(colors);

const details = [
   ['age', 20],
   ['city', 'tulsa'],
   ['zip', 91003],
   ['isAdmin', true]
];

const age = details[0].join(':');
console.log(age);
const city = details[1].join(':');
console.log(city);
const zip = details[2].join(':');
console.log(zip);
const isAdmin = details[3].join(':');
console.log(isAdmin);
const newlyConcatenated = age.concat(city).concat(zip).concat(isAdmin);
console.log(newlyConcatenated);

