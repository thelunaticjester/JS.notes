// closures are the fn that remebers the environment in that they are created. they maintains the acess to the outer fn even after the outer fn finished executing.  inner fn ca acess outer fn 


// structure of closure --

function outer (){
    let counter = 1
    return function (){
        counter ++
        return counter
    }
}



// example ==>

    let increment = outer ();
    console.log(increment()); // isme ye inner fn lega but ye pura sath mein bag krke rkhta hai every thing inner and outer everything and then log krega with the help of counter++
    console.log(increment());
    console.log(increment());
    console.log(increment());