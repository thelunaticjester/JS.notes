const id = Symbol('123'); // this line will return a diffrent datatype which will also be a symbol.
const anotherId = Symbol ('123') // these both lines will return diffrent type of symbols.

console.log(id === anotherId); // o\p will be false as they both are diffrent even tho they look similar and there string might be same but there value is diffrent.


const bigNumber = 123458684920294859420n // if the number is bigger than 2^53 we use 'n' at the end to make the datatype bigInt.