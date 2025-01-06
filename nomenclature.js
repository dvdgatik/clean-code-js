/* Nombres pronunciables y expresivos
avoid dashes and underscores
avoid abbreviations
*/

// No recommended
const yyyymmdstr = moment().format('YYYY/MM/DD')

// Recommended auto-explained varible
const currentDate = moment().format('YYYY/MM/DD')

// Names without Technical Information, vertical software (business) vs. horizontal software (libraries)

// not recommended
let arrayNames = ["Alex", "Mariana", "Raul"]

// recommended
let namesList = ['Alex', "Mariana", "Raul"]

// Use ubiquitous language

// not recommended
getUserInfo()
getClientData()
getCustomerRecord()

// recommended
getUser()
