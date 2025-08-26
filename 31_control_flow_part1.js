// if (true){
//     // agr true hoga to then hi to hm andar jaynege and wo condition meet krega and then wo block execute hoga ye control flow wala
// }

// if (false){
//     // if its false then ye execute nhi hoga ye block isme enter hi nhi hoga aur condition ke andar nhi jaynge.
// }


const isuserLogedIn = true
const temprature = 49 
if (temprature === 50){
    console.log("the temprature is below heat wave");
    
}else {
    console.log("the temprature is above the heat wave"); 
    
} //o\p is the temp is above the heat wave coz ye saare conditional hai and ya to ek ya dusri condition execute hogi but as hme dikh rha hai it gave us the o\p because the conditon isnt met as if something is less than === then usse bhi wo same tarreeke se hi treat krega.
// < , > , <= , >= , == , != , === , !== (ye saare operators ka use hoga mostly in conditional statements.)

const score = 200
if (score>100){
   const power = "fly"
    console.log(`user power: ${power} `);
    
}

const walletBalance = 2200

if (walletBalance<1000){
    console.log("the balance is less than 1000");
    
}else if (walletBalance<1500){
    console.log("the balance is less than 1500");
    
}else if (walletBalance<2000){
    console.log("the balance is less than 2000");
    
}else {
    console.log("less than 2500");
    
}

const userLogedIn = true
const userhasDebitcard = true
const logedinfromgoogle = false
const logedinfromappleId = true

if (userLogedIn && userhasDebitcard){                   //hm && (ye logical operator) ka use krte hai for condition ke liye krte hai ye and ye dono true hogi tabhi execute hogi agr ek bhi condition false hui to wo is block mein jayega hi nhi under like 2==3 or 2!=2 or 2==="2" anything like that.
    console.log("you can have the course access");
    
}else {
    console.log("you cann't acess the course");
    
}

if (logedinfromgoogle || logedinfromgoogle){            // hm || (ye logical operator) iska use krte hai to distingish the situation that is ya to ye ya phir ye dono mein se ek hi chlegi mtlb ek ko to true hona pdega for this block of code to get executed.
    console.log("User Logged In");
    
} else {
    console.log("must log In");
    
} // saare code execute hoga and ye 1st part hai control flow ka.




