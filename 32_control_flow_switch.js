//isme switch ka istemal hota hai as an alternatives of if else coz for longer values its not viable to write condition and confirm it on every situation so we use switch. and in switch we can use strings or numbers anything.

// const superpower = "laser eyes"

// switch (superpower) {
//     case "Batman": 
//     console.log("Batman has money");
//     break;    
 
//     case "Aquaman":
//         console.log("Aquaman has aquatic powers");
//          break;

//     case "flash": 
//     console.log("Flash can run faster than light");
    

//     case "Wonder Woman": 
//     console.log("Wonder Woman has a rope of truth");
    
 
//     case "Superman": 
//     console.log("SuperMan has laser eyes");
    
 
//     case "He man":
//         console.log("He man has ultimate strength");
        
        
//         break;

//     default:
//         console.log("power doesn't match"); // iska o\p aayega power doesn't match because hmne isme case mein powers nhi super heroes diye hai and iska sol hmne neeche kiya hai 
        
//         break;
// }

//////////////////////////// but ////////////////////

const superpower = "Laser eyes"

switch (superpower) {
    case "Money": 
    console.log("Batman has money");
    break;    
 
    case "Aquatic":
        console.log("Aquaman has aquatic powers");
         break;

    case "Runs faster than light": 
    console.log("Flash can run faster than light");
    break
    

    case "Rope of truth ": 
    console.log("Wonder Woman has a rope of truth");
    break;
    
 
    case "Laser eyes": 
    console.log("SuperMan has laser eyes");
    break;
    
 
    case "Ultimate strength":
        console.log("He man has ultimate strength");
        
        
        break;

    default:
        console.log("power doesn't match");
        
        break;
} // o\p is SuperMan has laser eyes as that matches when we give laser eyes the code logs the matched i\p and then logs it and uska baad ke saare codes execute ho jayenge and jaha break hua wo condition log ho jayegi.

