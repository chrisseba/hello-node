import fs from 'fs'

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Hiliday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// console.log(JSON.parse(bookJSON))

// fs.writeFileSync('1-json.json', bookJSON)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON =  dataBuffer.toString()
let data = JSON.parse(dataJSON)

data.name = 'chriss'
data.age = 41

const returnJson = JSON.stringify(data)

fs.writeFileSync('1-json.json', returnJson)

console.log(data)


