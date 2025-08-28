// for loops mein saare initialization , condition ,update sab kuch already header mein updated hota hai.


// for (let i = 0; i <=11; i++) {
//     console.log(`value of i ${i}`);// isme  loop pura chlega till 11 and then out ho jayega.
    
// } 

// for (let i = 0; i <= 5; i++) {
//     console.log(`outer loop value is ${i}`);
//     for (let j = 0; j <=5; j++) {
//         console.log(`outer loop value ${i} and the inner loop value is ${i}`); // isme outer loop pehle ek time chlega then phir wo inner loop chlega till the time it'll get executed completely phir wo outer wala ek execute krega and then inner wale saare execute krega then wapas se wo ye loop chlega till outer completely execute nhi ho jata.
        
        
//     }
    
// }


// const superHeroes = ["flash", "hulk", "thor"]
// for (let i = 0; i < superHeroes.length; i++) {
//     const element = superHeroes[i];
//     console.log(element);
    
    
// } 

// for (let i = 0; i <= 9; i++) {
//   if (i == 4){
//     console.log("detach at 4"); // isme loop break ho jayega before reaching 4 coz i == 4 de kr rkha hai and uske baad ka code execute nhi hoga wahi par break ho jayega and execute ho jayega 
//     break;
    
//   }
//     console.log(`value of i ${i}`);
    
// }


for (let i = 0; i <=11; i++) {
    if(i == 7){
        console.log("detach at 7");
        continue;
    }
    console.log(`value of i ${i}`); // isme ye detach ho jayega but ye ek glti maaf krta hai mtlb ek detach ke baad bhi execute krta hai or else we say continue krta hai.
    
}







