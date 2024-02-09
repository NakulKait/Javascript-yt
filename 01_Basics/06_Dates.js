// const mydate = new Date()
// console.log(mydate)
// console.log(mydate.toDateString())
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString())

// let myCreatedDate = new Date(2023,4,12)
//let myCreatedDate = new Date(2023,4,12,1,5)
// let myCreatedDate = new Date("05-11-2024")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()

console.log(newDate.getDate())
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default' , {
    weekday : "long"
}))