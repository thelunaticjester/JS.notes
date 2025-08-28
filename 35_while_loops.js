// while mein keval condition defined hoti hai baaki initialization and update ko manually handle krna pdta hai.

// structure of while loop

// while (condition){
//     console.log();
//     i++ // i + number
    
// }

// let i = 0
// while (i < 7){
//     console.log(`value of the index is ${i}`); // isme sab 2 add hote jayenge or else we can say 2 ke multiple mein aagye hai
//   i =  i+2 // i++ 

// }

const myArray = ["flash", "thor", "hulk"]
let arr = 0
while (arr < myArray.length){
    console.log(`the heroes are ${myArray[arr]}`);
     arr++
    
}

let userLoginNumber = 0

do {
    console.log(`${userLoginNumber} this many users are currently logged in`); // do while loop bhot rarely use hota hai and isme exception bhi hota hai kbhi kbhi.
    userLoginNumber++
} while (userLoginNumber <= 13);
