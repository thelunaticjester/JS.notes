// in this the singleton object is defined krna and with the hep of constructor.. 

// let datinguser = new Onject () issi tareeke se singleton object ko defin krte hai.
// const datinguser = {} // is tareeke se hm normal object define krte hai rather than singleton obj.
// datinguser.id = "qwerty346"
// datinguser.name = "Amrit"
// datinguser.isLoggedin = true

// console.log(datinguser); //o\p is { id: 'qwerty346', name: 'Amrit', isLoggedin: true } isme hmne jo abhi obj define liye hai wo log hua hai.


const datingProfile = {
    email: "amrit26k@tweleb.com",
    username : "Amrit@26k",
    password : "Amrit349",
    fullName : {
        firstname : "Amrit",
        lastname : "Rai",
    }

}

console.log(datingProfile.username);

// isme hm '?' is syntax ka use krte hai fir just cofirming ki value hai ya nhi for future use hota hai api ke liye wrna if else use krna pdega and wo code ko bhhot heavy bna dega.

let objX = { 1 : "q" }

let objY = { 2 : "w"}

let objZ = { 3 : "Z"}

// const objAll = Object.assign ({}, objX,objY,objZ) // ye bhi ek methof hai object ko ek sath log krane ka like an array but ye method use nhi hota ab

// console.log(objX, objY , objZ ); // o\p is { '1': 'q' } { '2': 'w' } { '3': 'Z' } isme saare alg alg scope mein alg alg log honge
// console.log(typeof (objX, objY , objZ) ); // o\p is { '1': 'q' } { '2': 'w' } { '3': 'Z' } and ye obj show krta hai as a typeof 
// console.log(objAll);// o\p is { '1': 'q', '2': 'w', '3': 'Z' } and isme sabko ye ek array ki form mein log krta hai but idka type obj hi hota hai
// console.log(typeof objAll);//o\p is obj

// the method we use nowdays is using the spreador operators

const objAll = {...objX,...objY,...objZ}
console.log(objAll); // o\p is { '1': 'q', '2': 'w', '3': 'Z' } and the spreador spreads it and logs it like we did in the arrays.



const users = [         // jaise isme users usually array of object ke form mein hi aate hai like nested hote hai array ke andar array ke andar array ke andar object. aise chlta hai in usuall cases mein jab user acess hota hai code base mein.

    {
        id : "121edc",
        email : "amr@tmail.com",
        
    },
    {
        id2: "121wsx",
        email2: "ab@tmail.com"
    },
    {
    
    },
    {

    },
    {

    },
    {

    },
    {

    },
    // and on and on and on.. aise hi objects aate hai inside an array and define hote rehte hai jab log krana ho
]

// isko log krane ke liye hm following methods use krte hai...

users[1].email



const arr =  [1,2,3,[4,5,{
    name : "abhi",
    employeeID : "ab@12321",
    
}]]

console.log(Object.keys(users));// o/p ['0', '1', '2','3', '4', '5','6'] and ye array hai and ab hm ispr loop lga skte hai coz sab kuch ek jagah pr hai saary keys ko ek jagah array mein store kr diya jhai ab iska muktiple use kr skte hai.
console.log(Object.values(objX)); // o\p is [ 'q' ] isme hm iss fn ka use krke value bhi nikal skte hai.
console.log(Object.entries(arr)); //o\p is [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ], [ '3', [ 4, 5, [Object] ] ] ]
console.log(Object.entries(datingProfile)); // o\p is [
//   [ 'email', 'amrit26k@tweleb.com' ],
//   [ 'username', 'Amrit@26k' ],
//   [ 'password', 'Amrit349' ],
//   [ 'fullName', { firstname: 'Amrit', lastname: 'Rai' } ]
// ]
 // isme sari values ko array ke form mein data ki entry krtr hai and then jo isme keys hoti hai wo pehle hoti hai and then value aati hai like 'email','amrit26k@tweleb .com', and inka km use hota hai comparetively.

 console.log(datingProfile.hasOwnProperty('password')); // o\p is true as it'll show result in boolean but ye keval unki value true show krega jo nested nhi hai yani initial keys ko hi true dega baaki sabko false.
 
 

