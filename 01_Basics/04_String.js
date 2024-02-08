let name = "Nakul"
console.log(typeof name)

let name2 = new String("Vaibhav")
console.log(typeof name2)

console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.charAt(2))
console.log(name2.indexOf('i'))

let newname2 = name2.substring(0 , 4)
console.log(newname2)

let newname3 = "   Nitesh   "
console.log(newname3.trim())

let newname4 = "https//nakulkait.com/nakul%20kait"
console.log(newname4.replace('%20','-'))

//split and form array

let newname5 = "Sundar-is-a-good-boy"
console.log(newname5.split('-'))
