const moment = require('moment')

const birthday = '2005-02-13'
const today = moment
const birthdate = moment(birthday)

const years = today.diff(birthdate, 'years') 
birthdate.add(years, 'years')
const months = today.diff(birthdate, 'months') 
birthdate.add(months, 'months')
const days = today.diff(birthdate, 'days')


console.log('=== Age Calculator ===')
console.log(`Today       : ${today.format('DD MMMM YYYY')}`)
console.log(`Birth date  : ${moment(birthday).format('DD MMMM YYYY')}`)
console.log(`Your age    : ${years} years, ${months} months, ${days} days`)