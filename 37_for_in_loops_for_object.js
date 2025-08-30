// obj ke liye hm for in ka use krte hai not for of and isse hm easily objects pr operations apply kr skte hai


const myObject = {
    js : "javascript",
    ts : "typescript",
    cpp: "c++"
}
for (const key in myObject) {
    console.log(`${key} - ${myObject[key]}`); // iska o\p aayega js - javascript on every line on to which we tried to log
    
}


// for in loop for arrays bhi hm mostly use nhi krenge and for in maps pr use nhi hoga coz maps store key values which are not as ennumerable property.



