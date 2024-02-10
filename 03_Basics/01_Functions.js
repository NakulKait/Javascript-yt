// function addTwoNumbers(number1 , number2){
//     result = number1 + number2
//     console.log(result)
// }

// addTwoNumbers(3,6)

// function addTwoNumbers(number1 , number2){
//     return number1 + number2
// }

// console.log(addTwoNumbers(3,6))

// function callMyName(Username){
//     return `My name is ${Username}`
// }
// console.log(callMyName("Nakul"))

// function isLoggedIn(myname){
//     if(!myname){
//     console.log(`Please enter useranme`)
//     return
//     }
//     return `I logged in as ${myname}`
// }

// console.log(isLoggedIn())

// function calculateCartPrice (...num1){
//     return num1
// }

// console.log(calculateCartPrice(100,200,300))

function calculateCartPrice (val1 , val2 , ...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400,500))

const obj = {
    name : "Nakul",
    age : 15
}

function handleObject(anyobject){
    console.log(`My name is ${anyobject.name} and my age is ${anyobject.age}`)
}
handleObject(obj)

const myNewArr = [2,6,7,1,5,2,9]

function AccessArr(myArr){
    return myArr[0]
}
console.log(AccessArr(myNewArr))