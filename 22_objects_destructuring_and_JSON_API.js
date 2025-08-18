 let foodMart = {
    categories : "Snacks",
    items : ["chips","beverages","energy drinks","chocolates","candies"],
    brands : {
        forChips : ["Lays","Pringles","Haldiram"],
        forBeverages : ["coke","pepsi","tropicana"],
        forEnergyDrinks : ["Redbull","Prime","Gatorade"],
        forChocolate : ["Cadbury","Nestle","Feastables"],
        forCandies : ["pulse","eclairs","mangobite"]
    }
 }

// console.log(foodMart.categories);
// console.log(foodMart.brands);
// console.log(foodMart.items);

// hm aise kr ste hai loggimg but hm ab aise nhi krte now we use diffrent method to log which is


const {categories: variety} = foodMart //isme curly braces {} iska use kiya jata hai de structuring mein and jo hmne : variety kiya hai ye destructuring hi hai and iska use react mein bhot hoga
// console.log(categories); // o\p is snacks and ab iss trh se log hoga hme baar baar .fn ka use nhi krna pdega keval define kro and then uske baad log kra lo.

//and mai isko apna naam bhi de skta hu agr mujhe rename krna hai to like 
console.log(variety); //o\p is snacks and tab hi ye wahi print krayega coz hmne isko rename kr diya hai in the main fn jo pehle categories tha ab wo variety hai




// ab hm ye dekhenge ki hm kis type se isse react mein use krte hai coz destructuring ek imp concept hai. and isme props. ka use hota hai but hm hr baar iska use krte nhi hai


const navbar = ({company}) =>{

} 

navbar (company = "kirattechnology") // ye portion reaact ka hai and react mein destructuring hoti hai
   

// destructing ek concept hai jo hme value assing krne deta hai diffrent shortcut variables mein from arrays and object.




// +++++++++++++++++++++++++==========+++++++++++++++=====++++++++++++++++=======++++++++++++=====++++++++++++++===+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


