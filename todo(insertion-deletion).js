const todo = []
function renderTodo(){
    todo.forEach(element => {
        const div = document.createElement("div")
        const newTask = document.createTextNode(element)
        div.appendChild(newTask)
        document.getElementById("root").appendChild(div)
    });
}
function addElement(){
    console.log("hello")
    
    let inputElement = document.getElementById("input-text")
    let text = inputElement.value
    todo.push(text)
    const div = document.createElement("div")
    const newTodo = document.createTextNode(text)
    div.appendChild(newTodo)
    document.getElementById("root").appendChild(div)
    inputElement.value = ""
}
document.getElementById("click").addEventListener("click",addElement)

function removeElement(){
    console.log("hii");
    const parentElement =document.getElementById("root")
    console.log("parent",parentElement);
    
    const removeTask = document.createTextNode(parentElement)
    console.log("remove",removeTask);
    
    const lastchild =parentElement.lastChild
    console.log("lastchild",lastchild);
    
    parentElement.removeChild(lastchild)


}
// removeElement()
document.getElementById("deleteBtn").addEventListener("click",removeElement)
