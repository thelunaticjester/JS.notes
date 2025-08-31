const codingLanguage = ["js", "ts", "cpp"]
// codingLanguage.forEach ((item)=>{
//     console.log(item);
// })   
//  o\p is js
        // ts
        //cpp

// codingLanguage.forEach (function (item){
//     console.log(item);
    
// }) // it'll also give the same o\p

// function printme (item){
//     console.log(item);
    
// }
// codingLanguage.forEach(printme) // iska bhi same o\p aayega

// codingLanguage.forEach ((item, index , arr) => {
//     console.log(item, index, arr);
    
// }) // js 0 [ 'js', 'ts', 'cpp' ] iska o\p aisa aayega in every line for every content.

const myCoding = [
    {
        languagename : "javascript",
        languageextension : ".js"
    },
    {
       languagename : "typescript",
       languageextension: ".ts"
    },
    {
        languagename: "react",
        languageextension:"react.js"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageextension);
    
})

