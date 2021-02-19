

function isLeapYear(year){
    if(year%4===0){
    return 'leap year';
    }
    return 'not a leap year'

}
console.log(isLeapYear(2014));
console.log(isLeapYear(2016));
console.log(isLeapYear(2020));