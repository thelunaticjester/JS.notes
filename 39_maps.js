// filter maps ka use data filter krne ke liye hota hai


// const newNumber = [1,2,3,4,5,6,7]
// const mynums = newNumber.filter((num)=> num > 5)
// console.log(mynums);

const mynums = [1,2,3,4,5,6]
const newNumber = mynums.map ((nums)=> nums + 10)
console.log(newNumber);

const nayeNums = mynums
                        .map((num) => num -5)
                        .map((num) => num *2)
                        .map ((num) => num /4)

console.log(nayeNums);




