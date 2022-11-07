//CREATING OBJECTS

const fitBitData = {
    totalSteps     :308727,
    totalMiles     :211.7,
    avgCalorieBurn :5755,
    workOutThisWeek:'5 of 7',
    avgGoodSleep   :'2:13',
    100 : 'one hundred',
    bestpet : 'dog'
};
fitBitData['bestpet'] = 'cat';
fitBitData.totalMiles = 300;
console.log(fitBitData.bestpet);
console.log(fitBitData['avgGoodSleep']);
fitBitData.totalSteps += 1000;
fitBitData.totalMiles --;
fitBitData.heartStillBeating = true;
console.log(fitBitData);

const learners = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art','gbv' ],

    exams:{
        midterm : 92,
        final : 88
    }
}
console.log(learners);
// console.log(learners.stengths.push('GBV'));
console.log(learners.strengths.splice(2, 0, 'GBV'));
console.log(learners.strengths[1]);
const finalResult = `The total examination marks is :${learners.exams.midterm + learners.exams.final}.`;
console.log(finalResult);


const firstNum = {
    one : 1,
    two : 2,
    three : 3
}

const secondNum = {
    one : 1,
    two : 2,
    three : 3
}
console.log(typeof firstNum);
console.log(typeof secondNum),
console.log(firstNum === secondNum);

