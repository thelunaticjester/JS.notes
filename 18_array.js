// js mein array resizablle as well as mix hoti hai like numeric, string ,etc.
// arrays associative type nhi hote mtlb usko acess nhi kr skte using arbitary strings as indexes.
//in js jab bhi operation honge arrays mein to ye hmesha shallow copies ( shallow copy of an object is a copy whose properties share the same refrence point(mtlb jo bhi changes honge wo sab mein honge) ) and  deep copies (isme properties do not share the same refrences.) bnata hai

let newArr = [1,2,3,4,5,6,"Cristiano","Vinicius"]
  
  //console.log(newArr.join(1));//o\p is 112131415161Cristiano1Vinicius - ye sabko join krdeta hai as we mentioned (1) to sabke sath 1 aajayega
//   console.log(randomArr);//o/p is 1,2,3,4,5,6,Cristiano,Vinicius - ye sabko join krdeta hai after using .join with array convt it into an string.
//   console.log(typeof randomArr);// o\p is string coz .join arr ko strring mein convt kr deta hai.
//  newArr.push("Saka");// o\p is [ 1, 2, 3, 4, 5, 6, 'Cristiano', 'Vinicius', 'Saka' ] isme saka added ho jata hai in arr as hm push use krte hai.
// newArr.push("Sonny"); //o\p is [ 1, 2, 3, 4, 5, 6, 'Cristiano', 'Vinicius', 'Saka', 'Son' ]  isme Sonny added ho jata hai in arr as hm push use krte hai.
//  newArr.pop()
// console.log(newArr);

// console.log(newarr);
//  console.log(newArr.includes("Raphinia"));//o\p is false as isme Raphinia isn't in the array
//  console.log(newArr);
// newarr.pop();
//  console.log(newArr.shift(1));
// newArr.unshift(0); // o\p is [ 0, 1, 2, 3, 4, 5, 6, 'Cristiano', 'Vinicius' ] isme ek 0 index '0' of newArr mein aajayega 
// newArr.shift(0);//o\p [ 1, 2, 3, 4, 5, 6, 'Cristiano', 'Vinicius' ] and isme se .shift use krte hi wo '0' shift ya fir kahe to remove ho jayega.
// console.log(newArr);//o\p [ 1, 2, 3, 4, 5, 6, 'Cristiano', 'Vinicius' ]

//  console.log(newArr.slice(0,6));//o\p is [ 1, 2, 3, 4, 5, 6 ] isme same slicing hoti hai index 0 se 5 tak hi aaynge inme and 6 exclude hojayega logging ke time pr.
//  console.log(newArr); //o\p is [ 1, 2, 3, 4, 5, 6, 'Cristiano', 'Vinicius' ] 

//  let randomArr = newArr.slice(1,4)
//  console.log(randomArr);//o\p is [ 1, 2, 3, 4 ] isme same slicing hoti hai index 0 se 3 tak hi aaynge inme and 4 exclude hojayega logging ke time pr.
  
// let randomArr = newArr.splice(1, 6)
// console.log(randomArr); // o\p is [ 2, 3, 4, 5, 6, 'Cristiano' ]
// console.log(newArr);// o\p is [ 1, 'Vinicius' ] jo ki remaining bchenge after logging in the random array so the main crux is ki isme main array mein bhi change hoga
//  console.log(newArr.indexOf("Cristiano")); // o\p is 6 as ye position of or index value btadeta hai of the element in the given array.

 















