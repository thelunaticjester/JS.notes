// async await ka use hota hai to make the program run smoothely without waitung for the response from the other fn and till the time the task will be executed and when await is finishes it'll give the response

function userkadatanikalna() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({username:"abhi",userId : "abhinoxious"})
        }, 200);
    })
}
async function userskadata() {
   try { // iss part mein resolve execute hoga mtlb agr resolve hoga to ye part execute hoga
    console.log("fetcing user data");
    let usersdata = await userkadatanikalna()
    console.log("users data have been fetched successfully");
    
    console.log("user data:",usersdata);
   } catch (error) { // agr reject hoga to ye part execute hoga mtlb error or we can say catch wala part
    console.log("error in fetching useres data",error);
    
   }
    
}
userskadata()
