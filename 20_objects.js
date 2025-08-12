// SINGLETON WALA TAREEKA


// jab kisi constructor ka use krke hm koi object bnate hai to singleton object hi bnta hai mtlb ye apne tareeke ka ek hi obj hai and jab dusri tarah se bnate hai to wo singleton nhi rehta uske dusre instances bnjate hai.
// A singleton is a way to make sure you only have one instance of an object—no matter where or how many times you try to create it.
// usecase -> When you want to have a shared “settings” object, a single game manager, or a central place for logging—anywhere you need only one of something in your whole app.
// jab bhi literals ki tarah declare krte hai to singleton nhi bnata hai and the 1st line i explained.

// isme Object.create method ka use hota hai for making singeton



//OBJECT LITERALL WALA TAREEKA


//  ye bhi object declare krne ka hi taareeka hai and sab kuch same hai bus diffrence singleton ka hota hai


// object ki value access '.' ka use krke krte hai , isme '=' ki help se hm vakues ki overwrite krskte hai like users.email = "amrit@gmail.com" (and ye change ho jayega).

// and hm object ko freeze kr skte hai so that uski value na change ho by using Object.freeze(users)

// js mein fn ko variables ki tarah treat kiya jat hai


// const mySym1 = "key1"

// const mySym2 = "key2"

// let users ={
//     name1 : "Amrit",
//     //key   value

//     "full Name" : "Amrit Rai",

//     city1 : "Mumbai",
//     //key   value

//     role1 : "full stack dev",
//     //key   value

//     email1 : "amrit121@zeromail.com",
//     //key   value

//     [mySym1] : "key1",
//     //key  value

//     name2 : "harsh",
//     //key   value

//     "full name" : "Harsh B H",

//     city2 : "Bombay",
//     //key   value
    
//     role2 : "Python dev and web3",
//     //key   value

//     email2 : "harshthepythondev@zeromail,com",
//     //key   value

//     [mySym2]: "key2"
//     //key   valu
// }

// console.log(users.city1);//o\p is Mumbai
// console.log(users.city2);// o\p vis Bombay
// console.log(users.email1);// o\p is amrit121@zeromail.com
// console.log(users.role2);// o\p is Python dev and web3
// console.log(users["full name"]); //o\p is Harsh B H 
// console.log(users["full Name"]); // o\p is Amrit Rai and jab [] iska use krenge log krane mein to . ka use nhi krenge and ye same symbol ke liye bhi use hoga.
// console.log(users[mySym1]);// o\p is key1 
// console.log(users[mySym2]);// o\p is key2

// users.greeting = function (){
//     console.log("Namaste users");
    
// }



let user = {
    name : "amrit",
    city : "mumbai",
    hobby : "listening to chatpate gaane",
    working : "In zero.email"
}

user.greeting = function() {


console.log(`Namastey Users,My name is ${this.name} and I belong to ${this.city} , I am working in ${this.working},and I like to listen to ${this.hobby}. Lovely to meet you all.`);

}

console.log(user.city); // o\p is mumbai.
console.log(user.name); //o\p is amrit.
user.greeting() // Namastey Users,My name is amrit and I belong to mumbai , I am working in In zero.email,and I like to listen to listening to chatpate gaane. Lovely to meet you all. #isme hme log nhi krna pdta hai isme hm use .fn ka use krke run ho jata hai like user.greeting, hm iske sath kuch aur bhi use kr skte hai.











