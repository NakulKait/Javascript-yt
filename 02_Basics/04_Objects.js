const tinderuser = {}

tinderuser.name = "Nakul"
tinderuser.age = 25
tinderuser.isLoggedIn = false

const regularUser = {
    fullname:{
        userfullname :{
            firstname:"Nakul",
            lastname : "Kait" 
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: 'a' , 2:'b'}
const obj2 = {3 : 'c' , 4 : 'd'}
//this is one method
// const obj3 = Object.assign({},obj1 , obj2)
// console.log(obj3)

//another and most used method is 

const obj3 = {...obj1 , ...obj2}
//console.log(obj3)

const obj4 = [
    {

    },
    {

    },
    {

    }
]
//for accessing values from this we use 

//console.log(obj4[1].)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "Python",
    price : 999 , 
    courseInstructor : "Hitesh"
}

//Another type of accessing an object

const {courseName} =course

console.log(courseName)

//By using destructure

const{courseName:Name} = course
console.log(Name)


