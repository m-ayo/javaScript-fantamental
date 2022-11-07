for (let i = 1; i <= 10; i++){
    console.log(i);
};
const animals = [ 'lions', 'tigers', 'bears'];
for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);   
console.log(`animal at index of ${i} is ${animals[i]}`);
};
//NESTED LOOP
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log(`Outer:${i}`);
    for (let j = 0; j < str.length; j++){
    console.log(` Inner : ${str[j]}`);
    }
}
//WHILE LOOPS
let num = 0;
while (num < 10 ) {
    console.log(num);
    num++;
}
//A COMMON PETTERN
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.round() * 10);

while (guess !== targetNum) {
    console.log(`Guessed ${guess}...Incorrect!`);
    guess = Math.floor(Math.random() *10);
}
console.log(`CORRECT! Guessed: ${guess} target was: ${targetNum}`);

//FOR...OF
for (let slice of 'yell');
console.log('s');
for (let i = 0; i < 'yell'.length; i++){
    console.log('yell'[i]);
};
let subreddits = ['soccer', 'pophead', 'cringe', 'books'];
for (let sub of subreddits){
    console.log(`${sub}-www.reddit.com${sub}`);
}
//NESTED FOR OF LOOP
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
for (let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum +=num;
    }
    // console.log(`Row of ${row} sums to ${sum}`); //accesing elements within a nest 
    
}

for (let row of magicSquare){
    console.log(row);
    let sum = 0;
    for (let num of row){
       
        sum +=num;
    }
}
const movieReviews = {
    Amadeus : 10,
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8
};
for (let movie of Object.keys(movieReviews)){
    console.log(movie);
}
for (let movie of Object.keys(movieReviews)){
    let score = movieReviews[movie];
    console.log(`I rated ${movie} ${score}/10`);
};
const footballTeams = {
    arsenal: 1,
    'manchester united': 2,
    'man city': 3,
    chelsea: 4,
    liverpool:5
};


for (let football of Object.keys(footballTeams)){
    let teams = footballTeams[football];
    console.log(`${football} is in position ${teams}`);
};

//FOR...IN

const jeopardyWinnings ={
    regularPlay            :2522700,
    watsonChallenge        :300000,
    tournamentOfChampions  :500000,
    battleOfTheDecades     :100000
};
let total = 0;
for (let key in jeopardyWinnings){
    total +=jeopardyWinnings[key];
};
console.log(total);

  

