// isme hum scope ke baare ke mein discuss krenge regarding global and local scope.


//

function one (user){

    username = "abhi"

    fullName = "Abhi Tiwari"

    function two () {           // ye child fn hai and child fn access kr skta hai parent fn se but parent fn nhi kr skta access cheezo ko from child fn.

        website = "youtube"

        designation = "ai/ml engineer"

        console.log(website);

        
    }

    // console.log(designation); // now ye error show kiya coz same isko iske local scope ke bahar access krne ki koshish krna which isn't possible.
    two() // ab stack mein after one two aayega and execute hoga.

    console.log(fullName); //ye hm fn one ke local scope mein hi acess kr rhe hai
    



}

// console.log(username); // pehla error coz ye scope ke bahar hai and hm scope ke bahar koshish kr kr rhe acces krne ki

one () // ye example hai stack ka pehle ye call hua stack mein for execution then later on other iske andar ke part honge.

if (true) {


let a = 1 // let diffrent hota hai var se as wo block scoped hota hai and wo keval values inside the scope jo block hota hai ussi ke value ko hi acess krta hai. 

const b = 2

var c = 3 //var functional scoped hota hai and wo khi se bhi value ko acess kr skta hai 

}


// console.log(a); // isne error throw kiya coz ye apne local scope ke bahar acess krne ki koshish kr rha tha like in global scope
// console.log(b); /// isne error throw kiya coz ye apne local scope ke bahar acess krne ki koshish kr rha tha like in global scope
console.log(c); // isne access kr liya thats the flaw of var ki ye kahi bhi kisi bhi value ko acess kr leta hai





// now ab fn define krne ke tareeke se bhi effect pdta hai like


function jaadu(num){
    return num * num + 1
}

console.log(jaadu(11)); // iska o\p

// jaadu2 (12) // isne error through kr diya coz jab tum kisi fn ko kisi variable ke andar store krte ho to tum usse earlier acess nhi kr skte before declaration whereas in fn tum kr skte ho ye like previosly

// console.log(jaadu2); // iska refrence error aayega coz wo access hi nhi hoga as wo fn variable ke andar define hai and wo earlier access  


const jaadu2 = function (num){
    return num * num + 2
}


console.log(jaadu2(22));
