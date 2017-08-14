const moment = require('moment');
const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
let now = moment();
let hrOfDay = now.format('H');
let minOfHr = now.format('m');
let secOfMin = now.format('s');
// console.log(hrOfDay);
// console.log(minOfHr);
// console.log(secOfMin);
function secondsIntoDay (hr, min, sec) {
  let result = Number(hr*3600) + Number(min*60) + Number(sec);
  return result;
}
 // console.log(secondsIntoDay(hrOfDay, minOfHr, secOfMin));

let line1 = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
function message1() {
  return `It is ${chalk.blue(line1)}.`
}

let line2 = moment().format("DDDo");
function message2() {
  return `It is the ${chalk.magenta(line2)} day of the year.`
}

let line3 = secondsIntoDay(hrOfDay, minOfHr, secOfMin);
function message3() {
  return `It is ${chalk.cyan(line3)} seconds into the day.`
}

// let line4 = moment().isDST();
let line4 = moment().isDST() ? "It " + chalk.blue('is') + " during Daylight Savings Time" : `It ${chalk.red('is not')} during Daylight Savings Time`

let line5 = moment().isLeapYear() ? `It ${chalk.blue('is')} a Leap Year` : `It ${chalk.red('is not')} a Leap Year`

console.log(message1());
console.log(message2());
console.log(message3());
console.log(line4);
console.log(line5);
