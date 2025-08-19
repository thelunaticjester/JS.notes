// functions ka kaam mostky cheezo ko easy krna like bade code ko package ke andar band krna jisse jaha bhi zarrurat ho hm uski copy le jaa ske

// assignment 1 for function from kirat's sheet
// function sum (a,b){
//     console.log (sum (a+b));

// }
// // but agr hm 
// const ans = sum (5,6)

// console.log("the answer is ", ans ); // ye recursion ki condition hai to iss case mein log hoga Maximum call stack size exceeded. coz isme return nhi hai and later on ye undefined dega as an o\p.

// //but
// function sum (a,b){
//     return (a+b); // hm jo bhi return krenge vo kisi var mein store krenge sirf console.log nhi krenge
//     console.log("nothing logs after return");
    

// }
// // but agr hm 
// const ans = sum (5,6)

// console.log("the answer is ", ans ); // o\p is the answer is  11 .. so hme return use krte hai to return any value and agr hm kuch bhi return ke baad log krenge to wo log bhi nhi hoga.

// function ke andar jab bhi input denge mtlb jab bhi fn ki definition bnate hai tab hm parameters(a,b) ka use krte hai, and jab hm call krate hai and jo value dete hai ya pass krte hai wo arguments hoti hai.



// function canCastVote (age){
//     if (age >= 18){
//         return true;
// } else {
//     return false;
// }
// }

// console.log(canCastVote(11));
// console.log(canCastVote(42));
// canCastVote(12)//in this we are calling the fn but not printing it \ logging it.


function tinderuserLogin (username){
    if (!username){
        return "* please enter a username";
    }else {
        return `${username} thankyou for choosing tinder`
    }
}
// tinderuserLogin("username")// ye tinderuserLogin (refrence hai) ()- ye call kr diya and ye  "username" value hai

console.log(tinderuserLogin()); //o\p is * please enter a username as no value is given wo undefined o\p aaata hai

console.log(tinderuserLogin("sam"));// o\p is sam thankyou for choosing tinder// ya to hm idhr argument log kra le ya phir hm upar parameter define krde.
