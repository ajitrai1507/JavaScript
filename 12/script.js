//Date in JavaScript

// const d = new Date();

// console.log(d);
// console.log(d.toDateString());
// console.log(d.getDay())
// console.log(d.getDate())
// console.log(d.getTime());
// console.log(d.getMonth())

// console.log(d.getFullYear());
// console.log(d.getMilliseconds())

// const now = Date.now();
// console.log(now);

// const d = new Date("2024-11-12")
// console.log(d.toDateString())

//************************************Setting Date Components*********************************************//
// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);

// console.log(d);
// console.log(d.toString())

//************************************Date Calculation*********************************************//

// const date1 = new Date();
// const date2 = new Date("2025-04-21")

// console.log(date2-date1);

//CountDown timer for olympics

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor(date/(1000*60*60)%24);
const min = Math.floor(date/(1000*60)%60);
const second = Math.floor(date/(1000)%60);

console.log(`Olympics CountDown Time: Days:${days} hour:${hours} min:${min} second:${second}`)
