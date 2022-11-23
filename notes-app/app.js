import chalk from 'chalk'
import yargs from 'yargs'
import request from 'request'
import { hideBin } from 'yargs/helpers'


import getNotes from './notes.js'

const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596'

request({url, json: true}, (error, response) => {

  const {body} = response
  const {temperature, precip} = body.current
  console.log(`It is currently ${temperature} degrees out. There is a ${precip}% chance of rain.`)
})

//console.log(validator.isEmail('chriseb.vera@gmail.com'))
//console.log(validator.isURL('chriseb.vera@gmail.com'))

// console.log(chalk.bgGreen.bold('Success!'))
// debugger
// console.log(process.argv[2])
// console.log(yargs(hideBin(process.argv)))


