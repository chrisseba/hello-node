const  express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
  res.send('hello express!')
})

app.get('/about', (req, res) => {
  res.send('<title>About</title> <h1>hola</h1>')
})

app.get('/help', (req, res) => {

  console.log('req --> ' )
  console.log(req.query)

  res.send({name: 'chriss', age: 41})
  console.log('oliiii')
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})

