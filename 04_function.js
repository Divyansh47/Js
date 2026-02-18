function saymyname(){
    console.log("D")
    console.log("I")
    console.log("V")
    console.log("Y")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
}
// console.log(saymyname())

function addtwonumbers(number1,number2){
    let result =number1+number2
    return result
}
const result=addtwonumbers(7,9)
// console.log("Result: ",result)

function loginUsermessage(username){
    if(!username)
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUsermessage("Divyansh"))
// console.log(loginUsermessage ())

function calculatecartvalue(...num1){
return num1
}
// console.log(calculatecartvalue(200,600,750))

const user={
    username:"Divyansh",
    price:999
}

function handleObject(anyuser){
    // console.log(`username is ${anyuser.username} and price is ${anyuser.price}`)

}
handleObject(user)

const mynewArray=[100,200,600,800]
function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(mynewArray))