const mySym=Symbol("key1")

const jsuser={
name: "Divyansh",
"fullname" : "Divyansh  Singh",
 age: '20',
 email: "Divyansh@google.com",
 [mySym]: "key1",
 location: "jaipur",
}

// console.log(jsuser["email"])
// console.log(jsuser[mySym])
// console.log(jsuser.name)
// console.log(jsuser["fullname"])
// console.log(jsuser.age)
// console.log(typeof mySym)
// Object.freeze(jsuser)
// jsuser.email= "divyansh@outlook.com"

jsuser.greetings= function(){
    console.log("hello js user")
}

jsuser.greetingsTwo= function(){
    console.log(`hello js user, ${this.fullname}`)
}
console.log(jsuser.greetings())
console.log(jsuser.greetingsTwo())