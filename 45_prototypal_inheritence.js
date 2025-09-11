// object inherit properties via other object via prototypical chain and use .prototype

function person (name){
    this.name = name
}
person.prototype.namastey = function(){
    console.log(`namastey, My name is ${this.name}`);
    
}

let abhi = new person("abhi")
abhi.namastey()