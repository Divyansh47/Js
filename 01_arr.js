const marvel_heros=["thor","ironman"]
const dc_heros=["superman","flash","batman"]
// const allheros=(marvel_heros.concat(dc_heros))
// console.log(allheros)
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const array=[1,2,[4,5,6],[7,8]]
const real_array=array.flat(Infinity)
console.log(real_array)

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

