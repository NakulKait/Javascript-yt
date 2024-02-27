const user = {
    username :"Nakul",
    price : 999,
    welcomeMessage(){
        console.log(`${this.username} is here`)
        
    }

}
user.welcomeMessage()
user.username = "Vaibhav"
user.welcomeMessage()