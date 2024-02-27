// for of loop
const arr = [1,6,2,3,5]
for (const i of arr){
    console.log(i)
}

//map

// const map = new Map()
// map.set('in',"India")
// map.set('fr' , "France")
// map.set('Jp' , "Japan")

// console.log(map)

// for(const [key , value] of map){
//     console.log(key , ":-" , value)
// }
// for(const key of map){
//     console.log(key)
// }

// for in 

const marks = {
    english : '20',
    math : '60'
}
for (const key in marks){
    console.log(marks);
}
const map = new Map()
map.set('in',"India")
map.set('fr' , "France")
map.set('Jp' , "Japan")

for(const key in map){
    console.log(key)
}
