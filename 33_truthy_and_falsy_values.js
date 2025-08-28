const loginviaNumber = {}
if (loginviaNumber){
    console.log("Loged in via Phone Number");
    
} else {
    console.log("Don't have user Phone Number");
    
} //o\p is Loged in via Phone Number as the empty array is treated a truthy value.

// falsy value
// false, 0, -0, undefined, NaN, Null, BigInt 0n, ""

 // Truthy value
 // "0", 'false' (strings mein kuch bhi hoga wo true hi treat hoga untill and unless wo empty na ho) , [], {}, function (){}

// when const loginviaNumber = [] (is a simple empty array)

//  if (loginviaNumber.length === 0){
//     console.log("array is found empty");
    
// } o\p 

if (Object.keys(loginviaNumber).length===0){
    console.log("object is found empty");
    
} // o\p is object is found empty

// false == 0 ( true dikhayega as an o\p )
// false == '' ( true dikhayega as an o\p )
// 0 == '' ( true dikhayega as an o\p )

// Nullish coalescing operator (??) : null, undefined ( ye do keyword ka use hoga)

let val1 ;
//val1 = 5 ?? 10 iska o\p 5 aayega coz jo pehle hoga wo hi print hoga in nco
//val1 = null ?? 10 iska o\p 10 aayega coz null ke alwa jo value hogi except undefined wo print hoga.
// val1 = undefined ?? 20 // o\p is 20 
val1 = 30 ?? 20 //o\p is 30 

console.log(val1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Terniary operator

// condition ? true : false // isme hm hmesha condition ko denge it'll be either true or false

const milkPrice = 100
milkPrice<=80 ? console.log("price is less than 100") : console.log("price is greater than 80") // o\p is price is greater than 80




