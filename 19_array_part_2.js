// const marvelHeros = ["Hulk","Ultron","Wanda"]
// const dcHeros = ["Aquaman","Wonder Woman","Green Lantern"]

// dcHeros.push(marvelHeros)
// console.log(dcHeros);//['Aquaman','Wonder Woman','Green Lantern',[ 'Hulk', 'Ultron', 'Wanda' ]] isme add krdete hai dono array ko and wo bhi straight add kr dete hai jo ki efficient nhi hai.
// //                           0           1               2           3 (ye pura 4th element hai)
 
// console.log(dcHeroes[3]); // o\p is [ 'Hulk', 'Ultron', 'Wanda' ] as mentioned in the previos line
// let superTeam = dcHeros.concat(marvelHeros)

// dcHeros.push(...marvelHeros) // o\p is  ['Aquaman','Wonder Woman','Green Lantern','Hulk','Ultron','Wanda'] as the important thing is the spread operator '...' which is also used for concating . example : kaanch ka glass ko drop kr do wo kya hoga spread ho jayega mtlb bikhr jayega.
// let superTeam = [...dcHeros , ...marvelHeros] o\p is  ['Aquaman','Wonder Woman','Green Lantern','Hulk','Ultron','Wanda'] bss best part is isme limitation nhi hoti kitno ko bhi add kr skte hai.
// console.log(superTeam); // ['Aquaman','Wonder Woman','Green Lantern','Hulk','Ultron','Wanda'] as this result is after the concat fn is used for joinig the elements of the array.   


// let usableArr = [1,2,3,['a','b','c',["I","II","III"],4,5,6]]
// console.log(usableArr.flat(Infinity));// o\p is [1,2,3,'a','b','c',"I","II","III",4,5,6] hm flat operatpr ka use krke array ke andar ki nested array ko bhi ek array ke element mein convt kr deti hai.

 // data scrapping lke hm jab slect krte hai to alg alag page ka difffrent tareeka \ format  hota hai and response bhi ussi hisab se aata hai, to ye methods usme use aate hai.

 
// console.log(Array.isArray ("harsh")); // o\p is false and another imp point hm Array ke liye small a nhi use kr skte as it'll thorugh the error.
// console.log(Array.from ("harsh")); // o\p is [ 'h', 'a', 'r', 's', 'h' ] and ye isko alg alg element mein tod deta hai.

// console.log(Array.from ({city:"Delhi"}));// o\p is [] coz jo chhez array nhi bnayega usko emoty return kr dega. and iss method ka use later krenge hm coz ye intresting case hai.

// let roommate1Name = "Amrit"
// let roommate2Name = "Abhi"
// let roommate3Name = "Harsh"
// let roommate4Name = "Fardeen"
//  console.log(Array.of(roommate1Name, roommate2Name, roommate3Name, roommate4Name));// o\p is [ 'Amrit', 'Abhi', 'Harsh', 'Fardeen' ] as .of ka use krke alg var ko bhi hm array bna skte hai.

 


