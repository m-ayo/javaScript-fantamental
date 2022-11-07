function madlib(adjective, noun, verb,adverb){
    return `The ${adjective} ${noun} ${verb} very ${adverb}`;
};


let mad = madlib('black', 'dog', 'run', 'quickly');
console.log(mad);

//write function
//pass arguments adjective precedence
//use return function instead of console.log
//call 3 functions with different sentences

function madlib (adjective, noun, verb, adverb){
    return `The ${adjective} ${noun} ${verb} very ${adverb}`;
};
let mad1 = madlib('old','donkey','walked','slowly');
console.log(mad1);
let mad2 = madlib('tallest','boy','ran','fast');
console.log(mad2);
