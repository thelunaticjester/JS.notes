// we can only await inside an async function
//we can await a function if it returns a promise
//fn ke aage promise use krna = use await bnana

async function main(){
    try{
        const data = await fetch('https://jsonplaceholder.typicoe.com/todos/1')
        console.log(data);
    } catch(e){
        console.error(e);
    }
}

main();
