//for each 

const arr = [4,9,3,6,5,7]

arr.forEach(function(item){
    console.log(item)
})

const myarr = [
    {
        lang : 'py',
        code : 'python'
    },
    {
        lang : 'java',
        code : 'java'
    },
    {
        lang : 'c++',
        code : 'c'
    }
]

myarr.forEach((item)=>{
    console.log(item.lang)
})