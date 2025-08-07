const score = 8902
console.log(score); // o\p is 8902 coz its simply a number.

let accountBalance = new Number (234563247584.89)
console.log(accountBalance); // its o\p is [Number: 23456] coz its a number wrapped by object.
console.log(typeof accountBalance);// hence its type of is object coz the object is wrapped over it.
console.log(accountBalance.toString()); //o\p is 23456 jo ki ek string hai
console.log(typeof accountBalance.toString());//o\p is string coz wo string hai
console.log(accountBalance.toFixed(3)); // o\p is 23456.000 as ye jitne fix 0 diye hote hai wo . ke baad lga deti hai likw .toFixed(5) then o\p will be 23456.00000
console.log(accountBalance.toPrecision(6)); // o/p is 23456.0 as ye bhi value deta hai but ye precise value deta hai like 23456.89 then isko ye 23456.9 bna dega approx krke for precise value.
console.log(accountBalance.toLocaleString()); // o\p is 234,563,247,584.89 isme ye american number system ke acc aata hai
console.log(accountBalance.toLocaleString('en-In'));// o\p is 2,34,56,32,47,584.89 isme 'en-In' ka use krte hai then ye indian number system ke acc ans aata hai.


