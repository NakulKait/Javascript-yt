let username = "Nakul"

if(username){
    console.log("Got it")
}
else{
    console.log("Nothing is there")
}
//Falsy Values

//false , 0 , -0 , Bigint 0n , null , undefined , Nan

//Truthy Values

//"0",'false' , [],{},function(){}

//Nullish Coalescing Operator

let val1 = 5 ?? 10
let val2 = null ?? 3
 // this operator checks null value and return other value

console.log(val1)
console.log(val2)

//Turniery operator

//condition ? true : false 

const age = 5

age > 10 ? console.log("greater than 10 ") : console.log("less than 10")