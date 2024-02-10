//Singleton
const mykey = Symbol("key1")

const jsUser = {
    name : "Nakul",
    age : 15,
    [mykey] : "key1",//this is the way of representing symbol in object
    "full Name" : "Nakul Kait",
    location : "ukd",
    email : "nakulkait@gmail.com",
    isLoggedIn : true,
    LastLoginDays : ["Monday" , "Tuesday"]
} 

//There are two methods of accessing objects

console.log(jsUser.name)

//but by this method we can't access all objects like full name

// console.log(jsUser["age"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mykey])

jsUser.email = "nakulkait2002@gmail.com"

// Object.freeze(jsUser)

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser ${this.name}`)
}

console.log(jsUser.greetingTwo())