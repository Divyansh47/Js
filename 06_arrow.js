const user ={
    username:"Divyansh",
    price:999,

   wellcomeMessage: function xxz() {
    console.log(`${this.username}, welcome to the website`)
    console.log(this)
}
}
// user.wellcomeMessage()
// user.username= "sam"
// user.wellcomeMessage()
// console.log(this)

// const chai= function() {
//     let username ="Divyansh"
//     console.log(this.username)
// }

// const chai2= () =>{
//     let username="hitesh"
//     console.log(this.username)
// }

const addTwo =(num1,num2) => num1+num2
// const addTwo =(num1,num2) => (num1+num2) dono same h bilkl isme return ni likhna hota
console.log(addTwo(8,5))
