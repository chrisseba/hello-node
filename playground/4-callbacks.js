
const add = (a,b, callback) => {
  setTimeout(() => {
    const sum = a + b
    callback(sum)
  }, 2000)
}





add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
 