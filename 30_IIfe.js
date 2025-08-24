// IMMIDIATELY INVOKED FUNCTION EXPRESSION (IIFE) 

// hm iska use isliye krte hai so that hm global scope ke pollution hta ske ya prevention krne ke liye use krte hai and iska use immidiate fn ko execute krne ke liye bhi hota hai

(function one (){ // hmesha fn ko kuch var/name dena hoga compulsion hai or else error dega 
     
        console.log(`DATABASE IS CONNECTED`); //O\P is DATABASE IS CONNECTED and ye ek named iife hai.
        

})(); // hme paranthesis mein wrap krke hme fir () se execute kra lenge and. the most imp part is ";" is necessary as wo end context dedega that the fn is ending right here and isme hm arrow fn ka bhi use kr skte hai like.

((name)=>{
    console.log(`Database is connected ${name}`); // ye ek unnamed iife hai and hm isi tareeke se unnamed iife define krte hai.
    
}) ("Abhi"); // iska o\p is Database is connected Abhi 
