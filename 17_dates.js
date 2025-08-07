// date js mein ek single moment ko define krta millisecond mein calculate hoti hai and ye start hoti hai from jan 1 of 1970.

let myDate = new Date ()
console.log(myDate.getTime());// o\p is 1754517496117
console.log(myDate.getFullYear()); // o\p is 2025
console.log(myDate.getMonth());// o\p is 7
console.log(myDate.getDate());// o\p is 7
console.log(myDate.getHours());// o\p is 3
console.log(myDate.getMinutes());// o\p is 33
console.log(myDate.getSeconds());// o\p is 42
console.log(myDate.getMilliseconds());// o\p is 377
console.log(myDate.getDay());// o\p is 4
console.log(myDate.getTimezoneOffset());// o\p is -330

console.log(myDate.setFullYear(2030));// o\p is 1912284037041
console.log(myDate.setMonth(4));// o\p is 1904335422377
console.log(myDate.setDate(3));// o\p is 1903989822377
console.log(myDate.toDateString());// o\p is Fri May 03 2030
console.log(myDate.toISOString('en-IN'));// o\p is 2030-05-02T22:03:42.377Z


console.log(myDate.toString());// o\p is Fri May 03 2030 03:33:42 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());// o\p is 5/3/2030
console.log(typeof myDate);// o\p is object

let someDate = new Date (25,3,2026,8,4)
console.log(someDate.toLocaleString());// o\p is 10/17/1930, 8:04:00 AM

let theDate = new Date ("2027-08-27")
console.log(theDate);// o\p is 2027-08-27T00:00:00.000Z

let foundDate = Date.now()
console.log(foundDate);
console.log(theDate.getTime());
console.log(Math.floor(Date.now())/1000);   

let randomDate = new Date ()

console.log(randomDate);
console.log(randomDate.getMonth());
console.log(randomDate.getDay());
console.log(randomDate.getFullYear());
console.log(`${randomDate.getMonth()} , the day is ${randomDate.getDay()} and the year is ${randomDate.getFullYear()}`);


randomDate.toLocaleDateString('default',{
    weekday : "long",
    day : "Numeric",
    timeZone : "Asia/Kolkata"
})













