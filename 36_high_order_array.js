// "for of loops" ye higher order fn hai and array specific loops hote hai 

["", "", ""] //aise array denge

[{}, {}, {}] //aise hm object denge

// for (const element of object) { ye structure hai for of ka and element mein hm koi bhi element jaise variable / number / i /array / string or anything }
// object mtlb kis chheez pr lagana hai not the object of language 

// const arr = [1,2,3,4,5]
//  for (const i of arr) {
//     console.log(i);
    
//  } // it'll print 1,2,3,4,5

const greetings = "Namastey Amrit"
for (const greet of greetings ) {
    if (greet === " ")
        break;// whereas isko use krne se hm break krenge jo bhi condition hogi in this case it was === " "
    console.log(`Each Char is ${greet}`); // isme sab char one by one hi print hoga thats all including space too.
    
}


///////////////////////// Map /////////////////////////

// map same object ki tarah hi key value  pair mein value store krta hai in order jab ki object nhi krta ye sab. maps mein koi duplicate value nhi hoti saari unique values hoti hai .


//structure of maps in syntax is 

// const map = new map ()
// map.set ()


// example =

const map = new Map ()
map.set ("UP", "Uttar Pradesh")
map.set ("UK", "Uttarakhand")
map.set ("AP", "Andhra Pradesh")
map.set ("MP", "Madhya Pradesh")
// console.log(map); // o\p will be 'UP' => 'Uttar Pradesh' and for every line what i have logged.

// or else 

    // for (const key of map) {
    //     console.log(key); // to sab kuch jo log hoga wo array form mein hoga but agr hm isko [key, value] krde to hm isko alg alg dono tareeke se print kra skte hai
        
    // }


    for (const [key,value] of map) {
        console.log(key, "-" , value); // iska o\p aayega UP - Uttar Pradesh for every map i hv given to log

    }

// objects is method se itterate nhi hote unka diffrent tareeka hota hai





