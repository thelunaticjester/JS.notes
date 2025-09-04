// promises in js are like simple promises in which either you'll fulfiill it or you'll break it.

function fetchdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucess = false;
            if (sucess){
                resolve ("DATA IS FETCHED"); // jo .then hai wo actually linked hai iss resolve se 
            } else {
                reject ("DATA FETCHING ERROR"); // reject jo hai wo .catch se link hai
            }
            
        }, 2000);
    });
}
fetchdata()
    .then((data)=>console.log(data))
    
    // or 
    // hm {console.log(data)
    // return "abhi";} aise bhi log kara skte hai
    // .then ((value)=>{
    //console.log (value)}) // print abhi krega
    .catch((error)=>console.error(error)); // working and giving o\p of sucess or not