// // array
// //object
// //loops
// //strings
// //non-primitive


// // QUESTION-1
// //create an array of products where each product has category and name
// // categories can be "appliance","furniture","clothes"
// // there should be minimum 2 products for each category
// const products = [
//     {
//     category:"appliance",
//     name:"television",
//     brand:"lg"
// },
// {
//     category:"appliance",
//     name:"mixer",
//     brand:"samsung"
// },
// {
//     category:"furniture",
//     name:"table",
//     brand:"ere"
// },
// {
//     category:"furniture",
//     name:"chair",
//     brand:"ddg"
// },
// {
//     category:"clothes",
//     name:"t-shirt",
//     brand:"fggd"
// },
// {
//     category:"clothes",
//     name:"shirt",
//     brand:"fdgndfn"
// }


// ]

// for (let i = 0;i<products.length;i++){
//     const element = products[i];
//     // console.log(element);
    
//     const category = element.category
//     if (category==="appliance"){
//         console.log(element.brand);
        
//     }
    
// }


// // QUESTION-2
// // log name of all products of category "appliance"

// // console.log();



// const todo=[
//     {
//     id: 0,
//     description : "ads",
//     status: "todo"
// },
// {
//     id:
// }
// ]
// document.getElementById("root").innerHTML = "<h1></h1>";

// htmlContent.innerHTML="abhsnkjs"
const todo = []
todo.push("task3")
console.log(todo);
todo.pop("task1")
console.log(todo);

function renderTodos(){
todo.forEach(element => {
    const div = document.createElement("div");
    const newTask = document.createTextNode(element);
    div.appendChild(newTask);
    const currentDiv = document.getElementById("root").appendChild(div)
    
});
}
renderTodos()
function addElement(){
    const inputEl = document.getElementById("input-text")
    
    let txt = inputEl.value

    todo.push(txt)
    console.log("new task is getting added");
    const div = document.createElement("div");
    const newerTask = document.createTextNode(txt);
    div.appendChild(newerTask);
    document.getElementById("root").appendChild(div)
    inputEl.value = ""
//    renderTodos()
}
 document.getElementById("myBtn").addEventListener("click",addElement)
function removeElement(){
    // todo.pop("task1")
    // todo.pop("task2")
    console.log("task removed");
    
}
removeElement()
