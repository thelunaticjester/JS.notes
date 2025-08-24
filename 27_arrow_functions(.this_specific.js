// "this" jo hai wo current contest ko refer krta hai and iska mostly use hm classes mein hi krte hai.

const user = {

    username : "abhi@121",                                                                             // ye 

    fullName : "Abhi Tiwari",                                                                          // pura sab 

    signinigFee : 1500,                                                                                // current 
    
    welcometotheComunity : function (){// and ye hmne obj ke andr ek fn define kiya hai and fir usko   // context 
        console.log(`hey ${this.username}, Welome onboard.`) //context refer kiya hai this. ke sath.   // hai 
        console.log(this); // ye current context ki baat krta hai i.e; jo current var hote hai unki baat krta hai.
        
    }                                                                                                  //jitna bhi scope ke andar hai wo sab hai current context hota hai and this ussi ko refer krte hai but scope ka dhyan dena hota hai.
}
user.welcometotheComunity() // o\p is hey abhi@121, Welome onboard.  ye ek method hai
//   username: 'abhi@121',
//   fullName: 'Abhi Tiwari',
//   signinigFee: 1500,
//   welcometotheComunity: [Function: welcometotheComunity]
// }










console.log(user["username"]);// o\p is
//                                   abhi@121
//                               hey amrit@raesklp, Welome onboard.




user["username"] = "amrit@raesklp"
user.welcometotheComunity()
//  o\p is {
//   username: 'amrit@raesklp',
//   fullName: 'Abhi Tiwari',
//   signinigFee: 1500,
//   welcometotheComunity: [Function: welcometotheComunity]
// }


console.log(this); //o\p is {} kyun ki ab ye node environment hai to ye global context ko refer kre jo this hai.



