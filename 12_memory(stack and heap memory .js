// stack memory is used in primitive type ; whenever stack variable is declared what we get in return is a copy of the refrence address of the memory
// heap memory is used in all no - primitive \ refrence type ; and whenever the value is defined in heap mempry hme origonal address milta hai value ka and jo bhi change krenge original value mein changge hoga.
// heap execution context ka part nhi hoti 
// example of stack memory


// let myFriendsname = "amrit"
// let anothername = myFriendsname
// anothername = "twelebamrit"

// console.log(myFriendsname);
// console.log(anothername);

// in this the copy of the refrence address is given to the later type to fetch and use the info on the memory and to change it as we have given 

//let myFriendsname = "amrit" \\ defined myFriendsname = "amrit"
// // let anothername = myFriendsname \\ then we defined anothername = myFriendsname (which is a copy address of the main refrence we defined earlier)
// anothername = "twelebamrit" \\ in this we have applied changes in the copied refrence address whic whas given to us via the memory.

// console.log(myFriendsname); \\ and now the original refrence address will log the o\p as amrit
// console.log(anothername); \\ and in this we applied changes to the copied refrence address given to us and then it logs twelebamrit.


let a = 5;
let b = a;   // 'b' gets a copy of 'a' from the stack
b = 10;
// 'a' is still 5, 'b' is 10; they are independent copies in the stack
console.log(a);
console.log(b);


//  primitive types jo hai wo stack mein jate hai and refrence type wale heap mein jate hai
 // heap ko design kiya gya to store large amount of data 


 // analogy of both types

 //📦 Stack — Fast Food Counter (Quick Access)
// Imagine a fast food counter where orders (data) are served quickly in order and cleared fast.

// You place an order → it’s placed on top of the stack.

// Orders are served Last-In-First-Out (LIFO).

// Quick, organized, and small in size.

// In memory terms: Stack stores primitive data and function call data directly. It's small but fast.




//🏬 Heap — Storage Room (Big but Slower)
// Now think of a storage room behind the counter. It stores bulky or complex items like extra ingredients, boxes, etc.

// It’s messier, not ordered like the counter.

// You store and retrieve items using a tag or label (reference).

// In memory terms: Heap stores non-primitive (complex) data, like objects and arrays. It’s large but slower to access.



let cat = "pussy";
let numOFPussy = 4;

let arr = [ "white", "grey","brown","golden","black"];

let obj = {
    name : 'obj',
    desc : 'desc'
}

 //source mysirG memory managament yt video
//js ka v8 engine code ko pehle scan krta hai and usme global variables bmnata hai and unki memory create krta hai and then wapas run krta krta hai prog anf fir un var ko value assign krta hai

// js mein jab bhi koi fn call hota hai uske liye execution context create hota hai and us execution context ko call stack\stack ke top pr oush kiya jata hai


// fn refrence ke thorugh with the help of super scope global execution context ke variable ko acess kr skte hai for execution. its a singly link list data structure

//var environment ek object like structure hai




//              stack                                                          // heap





// ref obj

// ref arr                                                      

//  let numOFPussy = 4;                                                 //let obj = {
                                                                        //     name : 'obj',
                                                                        //     desc : 'desc'
                                                                        // }

//  let cat = "pussy";                                                  //let arr = [ "white", "grey","brown","golden","black"];