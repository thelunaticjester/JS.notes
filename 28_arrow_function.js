// Arrow fn cannot be hoisted wheras regular fn can be hoisted 

function one () {
    const username = "abhi"
    console.log(this.username); // ab iska o\p undifined aaega so hm object mein to "this" ka use krlete but solely fn mein nhi
    
}
one() // ab iss this mein jisko hmne log kraya hai usme bhot saari chheze as o\p aajati hai agr hm this ke sath var ko na de like this.username

const two = new function () {
    let usernaame = "abhi"
    console.log(this.two); // iska bhi same o\p hoga wahi jo uppar tha that is undefined coz ye strict mode mein call kiya gya hai and in previous slide no.27 jo global values aa rhi thi jo "this" ko call krne mein wo global object in non strict mode hai uska concept.
    
}


const user = () => {
    let username = "abhi"
    const gender = "male"
    console.log(this.usernaame); // iska o\p bhi same undefined hi aayega coz hm this ka usually use nhi krte hai in arrow fn for refrencing of current context mein. and arrow fn mein lexical bindig hoti hai whreas regular fn mein dynamic binding hoti hai.
    }
user ()

const addingNumbers = (num1 , num2 , num3) => {
    return num1 + num2 + num3;

}
console.log(addingNumbers(1,2,3)); // o\p is 12 and agr curly braces aayega to hme return use krna pdega. 

// we can also write this in diffrent ways and efficient ways in which arrow fn is used

const addingfewNumbers = (num1, num2, num3) => num1 + num2 + num3
console.log(addingfewNumbers(6,7,8)); //o\p is 21 

// the other way is 

const addingrandomNumbers = (num1 , num2 , num3) => (num1 + num2 + num3) // this techinique is veru oftenly used in react and its very much imp and isko implicit arrow fn bhi kehte hai.
console.log(addingrandomNumbers(4,5,9)); //o\p is 18 jab hm paranthesis use krenge to hme return krna nhi pdega.

const consistentUser = (user1,user2,user3) => ({
    username1: "abhi",
    username2:"amrit",
    username3: "harsh"
    })
    consistentUser.username1 = "raj"
console.log(consistentUser.username1);// iska o\p raj aayega but isme jo main object return hai usme koi effect nhi pdega iss fn se like 
console.log(consistentUser());// as we can see { username1: 'abhi', username2: 'amrit', username3: 'harsh' } but

// hm later on isko kaafi use krenge in loops like

const myArr = [1,2,3,4]
myArr.forEach(() => {}) // hm aise bhi use kr skte hai or 

myArr.forEach(function (){}) // and hm aise bhi use kr skte hai.







