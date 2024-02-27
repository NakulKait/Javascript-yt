for(let i = 0;i<=10;i++){
    console.log(i)
}

for(let i =0;i<=10;i++){
    if (i==5) {
        console.log("5 is detected ")
        break
    }
    console.log(i)
}
for(let i =0;i<=10;i++){
    if (i==5) {
        console.log("5 is detected ")
        continue
    }
    console.log(i)
}