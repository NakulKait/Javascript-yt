// const arr = [1,9,7,4]

// const val = arr.forEach(function (item){
//     console.log(item)
// })

// console.log(val)

// //To remove undefined in return we use filter

// const val2 = arr.filter((num) => num>4 )

// console.log(val2)

// const val3 = arr.filter((num)=>{
//     return num >3
// })
// console.log(val3)
//Map

const val4 = [1,2,3,4,5,6,7,8,9]

const val5 = val4.map((num)=>num+10)
console.log( val5 )

//chaining 
const newArr = val4.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newArr)

//Reduce
// There are two parameters in call back function which is accumulator and current value 
// for accumulator there is intial value which is given at the end of function

const newArr2 = val4.reduce((acc , currval)=>{
    console.log(`The value of accumulator is ${acc} and current value is ${currval}`)
    return acc + currval
} , 0 )
console.log(newArr2);
