//  if
// const isUserloggedIn = true
// const temperature = 41
// if ( temperature < 50){
    // console.log("less than 50")
// }
// else {
// console.log("greater than 50")

// } 

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

const userLoggedIN = true
const hasdebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIN && hasdebitCard) {
    console.log("Allowed to buy course")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Logged IN")
}
