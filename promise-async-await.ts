async function main(){
    try{
        const data = await fetch('https://jsonplaceholder.typicoe.com/todos/1')
        console.log(data);
    } catch(e){
        console.error(e);
    }
}

main();