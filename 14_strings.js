// string ko hm isse "" ya  '' isse bhi denote kr skte hai iska koi frk nhi padta.
// do strings ko add krne ke liye + ka use hota hai or we can say concatinate krne ke ke liye + ka use krte hai
// for writing string we use `` (string interpolation) this is the modern method of using string.

let name = "abhi"
const repoCount = 30

console.log (`hey I am ${name} and my github contribution is ${repoCount}.`); // o\p - hey I am abhi and my github contribution is 30.

// let myName = new String ('Abhi-amrit-fardeen-harsh')
// console.log(myName[0]);// o\p = a as it begins the indexing from 0 = a
// console.log(myName.__proto__); // o\p - {} (this includes varios hidden objects which will be understandable later when we touch some advance concepts in js)
// console.log(myName.length); // o\p - 4 as abhi has 4 letters but in indexing starts from 0-3 as a will be assigned 0.
// console.log(myName.charAt (3)); // o\p - 'i' this function helps in identifying the value or data at that index like at 3 it gave i.. at 2 it'll give h.. at 1 it'll give b.. and so on..
// console.log(myName.indexOf('b'));// o\p - '1' it works same as .charAt but in opposite sense where any value in a string is given and its indexing value (length) is given like.. a = 0, h = 2, and so on...
// console.log(myName.includes('v')); // o\p - false as the above string doesn't include 'v' so it gave false after logging but if the given is b\a\h\i it would have given true as a response after logging
// console.log(myName.toUpperCase()); // o\p - ABHI as this fn convts whole string into uppercase.
// console.log(myName.toLowerCase()); // o\p - abhi as this fn convts whole string into lowercase.
// console.log(myName.substring(0,3));// o\p - 'Abh' as it defines the values from o but doesn't include the last value like in this one it included only 0,1,2 but doesn't included 3 and its value to give as the o\p when logging.
// console.log(myName.slice(-16,20));// o\p - 'it-fardeen-h' as we can give -ve values in the start but only in slicing not om substring and the starting value is >= end it'll give "" (empty string) like this one total value = 25... starting = - 16 whichis 25-16 = 9;... and end value is 20 which is > starting value then it'll give a string whivh is not empty.(start<end)



// let newName = "      abhi-amrit    "

// console.log(newName);      //o\p -      abhi-amrit          in this the spce gets logged like the variable


// console.log(newName.trimStart()) //o\p -abhi-amrit        in this the starting space gets trimmed withthe help of trimstart fn
     


// console.log(newName.trimEnd());    //o\p-      abhi-amrit in this ending space gets trimmed

// console.log(newName.trim());//o\p- abhi-amrit in this whole starting and ending space both gets trimmed



let url = "100xschool%123devs.com"
console.log(url.replace('%123', '-')); // o\p - 100xschool-devs.com it'll replaace the %123 withthe later value given in the relace fuction.


let roomieName = new String ('Abhi;amrit;fardeen;harsh')
console.log(roomieName.split(';')); //o\p [ 'Abhi', 'amrit', 'fardeen', 'harsh' ] it'll split on the bases of the sign,space given and it'll divide them into the string onto the bases of that.

console.log(roomieName.concat(url));
console.log(roomieName+url);// concat ks istemaal strings ko join krne ke liye hota hai

let clubDFootballNames = ('RM,FCB,MC,MU,AM,BM')
console.log(clubDFootballNames.at(14));// o\p = 'M' isme front se count hota hai from 0 se 1 then 2... so on...
console.log(clubDFootballNames.at(-14)); // o\p = 'c' isme reverse count hota hai peeche se -1 then -2 then... so on... 
console.log(clubDFootballNames.match('MC')); // o\p = [ 'MC', index: 7, input: 'RM,FCB,MC,MU,AM,BM', groups: undefined ]  iska use search krne ke liye hota hai in regular expression and ye uski max chheze defined kr deta hai.as we can see in the output.
console.log(clubDFootballNames.match(/FCB/g)); // o/p = [ 'FCB' ] ye kevl required response deta hai puri string se dekh kr globally (g)







 


