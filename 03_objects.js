const tinderUser={}

tinderUser.id ="123abc"
tinderUser.name ="Divi"
tinderUser.isLoggedIn =false
console.log(tinderUser)
const regularUser = {
    email:"divi@outlook.com",
    userfullname: {
        userfullname: {
            firstname: "Divyansh",
            lastname: "singh"    
            }
    }
}
console.log(regularUser)

const obj1={1: "A",2:"B"}
const obj2={3: "A",4:"B"}

obj3=Object.assign({} ,obj1,obj2)
obj3={...obj1,...obj2}
console.log(obj3)

const user= [
    {
        id:1,
        email: "d@gmail.com"
    
    },
     {
        id:1,
        email: "d@gmail.com"
    
    },
     {
        id:1,
        email: "d@gmail.com"
    
    }
  

]
user[1].email

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


const course= {
    coursename:"js in hindi",
    price:"999",
    courseIntructor:"Divyansh"
}
const {courseIntructor}=course
console.log(courseIntructor)