// Non-primitive or refrence type datatypes in js are: -


// a) Arrays :

let avengers  = ["Hulk","IronMan","DoctorStrange"];
let obj = {
    ageofIronMan : 55,
    ageofHulk : 58,
    ageofDoctorStrange : 56
}
console.log(avengers['0','2','1'] + obj.ageofIronMan); // o\p will be IronMan as js treats '' as whole expression and logs the last value in the index.

const powers = function (){


}

// type of null and arr is obj in js
// function usually returns function on console.log(typeof function); and its known as function object.

// as non-primitive datatype returns object as their typeof.


// data == return type
//1000 == number
// "a1" == string
// 200n == bigInt
//null == object
// undefined == undefined
// true/false == boolean
//function == function \ functiin object \object function
