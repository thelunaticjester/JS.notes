// in this we are learning about about the functions which are mostly used 

// function totalCartValue (num1){
//     return num1
// }
// console.log(totalCartValue(400,800,1999));// o\p is 400 as it only has a single value in the fn that is num 

// function totalCartValue (...num1){ // now hmne ... jo ki rest operator hai jiska use sabkuch bundle krke eksath krne ke liye hota hai
//     return num1
// }
// console.log(totalCartValue(400,800,1999));//o\p is [ 400, 800, 1999 ] isme rest operator ne sabkuch ek sath ek [array] mein bna kr log kr diya.

// function totalCartValue (val1,val2,val3,val4,...num1){ // now hmne ... jo ki rest operator hai jiska use sabkuch bundle krke eksath krne ke liye hota hai
//     return num1
// }
// console.log(totalCartValue(400,800,1999,1234,4567,789,8548,1123)); // o\p is [ 4567, 789, 8548, 1123 ] coz jo values pehle thi num ke vo sab val mein store ho gyi and usne log sirf num ko kiya coz hmne return sirf num ko krwaya tha isiliye.

// function with user :-

const shoppingCart = {

    productDetails : "trackpant",
    brandName : "zara",
    price : 3999

}

// function cartIngridients (anyThingfromeTheCart){
//     console.log(`Its a ${shoppingCart.productDetails} from ${shoppingCart.brandName} of rupees ${shoppingCart.price} only.`);
    

// }

// cartIngridients(shoppingCart) //o\p is Its a trackpant from zara of rupees 3999 only. as isme hmne objct ko call kiya fn mein and then fn mein back tiks ka use kiya and then later fn ko refrence dekr object ko call kra liya in "cartIngridients(shoppingCart)"

// or else hm ye bhi kr skte the

function cartIngridients (anyThingfromeTheCart){
    console.log(`Its a ${anyThingfromeTheCart.productDetails} from ${anyThingfromeTheCart.brandName} of rupees ${anyThingfromeTheCart.price} only.`);
    

}

// cartIngridients(shoppingCart) // iska bhi o\p Its a trackpant from zara of rupees 3999 only. yhi aayega same as earlier chaahe hmne back ticks mein object calling fn mein thora change kiya hai.

cartIngridients({

     productDetails : "trackpant",
    brandName : "gant",
    price : 39999

}) //o\p is Its a trackpant from gant of rupees 39999 only. to hm aise bhi obj define kr skte hai 


// ab hm same kaam arrays mein krenge 


let meriArray = [123 , 456, 789, 1111, 2222 ,3333 , 4444]

function logteesriValue (randomarray){
    return randomarray [2]
}

// hm isme log is liye kr rhe hai coz hmne isme already return kiya hai to mostly jaha return kiya hai waha log krna pdta hai its the golden rule.

console.log(logteesriValue (meriArray)); //o\p is 789 as return mein [2] tha
console.log(logteesriValue ([123 , 456, 789, 1111, 2222 ,3333 , 4444])); // iska bhi same hi o\p which is 789 as return mein [2] tha index value.


