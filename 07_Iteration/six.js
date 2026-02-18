const myNums = [1, 2, 3, 4, 5,6,7,8,9,10]
const newNums = myNums.filter( (num) => {
   return num >4} )
// console.log(newNums)

const Books = [
    {title: 'Book 1', author: 'Author 1', year: 2000,genre:'Fiction'},
    {title: 'Book 2', author: 'Author 2', year: 2010,genre:'Fiction'},
    {title: 'Book 3', author: 'Author 3', year: 2020,genre:'Mystery'},
    {title: 'Book 4', author: 'Author 4', year: 1990,genre:'Science Fiction'},
    {title: 'Book 5', author: 'Author 5', year: 2005,genre:'Romance'},
    {title: 'Book 6', author: 'Author 6', year: 2015,genre:'Fiction'},
    {title: 'Book 7', author: 'Author 7', year: 2022,genre:'Mystery'},
    {title: 'Book 8', author: 'Author 8', year: 2010,genre:'Science Fiction'},
    {title: 'Book 9', author: 'Author 9', year: 2010,genre:'Romance'},
]

const userBooks = Books.filter((bk) => {
   
    return bk.year >= 2010
})
console.log(userBooks)