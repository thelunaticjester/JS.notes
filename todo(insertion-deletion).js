const todo =[]
function renderTodo (){
    todo.forEach(element => {
        const div = document.createElement("div")
        const newTask = document.createTextNode(element)
        div.appendChild(newTask)
        document.getElementById("root").appendChild(div)
    });
}
function addElement(){
    console.log("hello");
    
    let inputElement = document.getElementById("input-text")
    console.log("input",inputElement);
    
    let text = inputElement.value
    console.log("text",text);
    
    todo.push(text)
    // const checkBox = document.getElementById("checkbox")
    const div = document.createElement("div")
    console.log("div",div);
    
    const newTodo = document.createTextNode(text)
    console.log("new",newTodo);
    
    div.appendChild(newTodo)
    // div.appendChild(checkBox)
    document.getElementById("root").appendChild(div)
    inputElement.value = ""
}
document.getElementById("click").addEventListener("click",addElement)

function removeElement(){
     console.log("hii");
    
    const parentElement = document.getElementById("root")
    console.log("parent",parentElement);
    
    // const removeTodo = document.createElement()
    // console.log("remove",removeElement);
    
    const lastChild = parentElement.lastChild
    console.log("last",lastChild);
     if (lastChild === null){
        return;
     }
    parentElement.removeChild(lastChild)
}
document.getElementById("deleteBtn").addEventListener("click",removeElement)

// let newCheckBoxId = 'checkbox_'+ addElement
// new checkBox = document.createElement("Input")



