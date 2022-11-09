//even and odd numbers
function even(){
let numbs = 11;

if (numbs % 2 === 0) {
    console.log('is even');
}
else {
    console.log('is odd')
}
};

even();

//conversion of currency
function currency() {
    let usDolla = 145;
    let KenyaShillings = 1000;

    let toKenyaShilling = usDolla * KenyaShillings
    console .log(`The conversion is ${toKenyaShilling} ksh`);
}
currency()