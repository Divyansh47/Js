const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    // console.log(num)
    
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
    
}

const map = new Map()
map.set('IN', "India")
map.set('JN', "Japan")
map.set('CA', "Canada")
map.set('UK', "United Kingdom")

// console.log(map)

for (const [key, value] of map) {

console.log(key, ':-', value)
    
}