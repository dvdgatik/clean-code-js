// Name according to its data type

// Arrays

// not recommended 
let user = ['alex', 'mariana', 'jessica']

// regular 
let userList = ['alex', 'mariana', 'jessica']

// good 
let users = ['alex', 'mariana', 'jessica']

// excelent 
let userNames = ['alex', 'mariana', 'jessica']

// Boolean (is, has can)

// not recommended
const valid = true
const read = false
const color = true 

// recommended
const isValid = true
const canRead = false
const hasColor = true

// numbers

// not recommended
const users = 15

// recommended (prefixes)
const maxUsers = 50
const minUsers = 10
const totalUsers = 15

// Functions (Represent an action) verb + noun and concise

// not recommended
createUserIfNotExist()
updateUserIfNotEmpty()
sendEmailIfIsValid()

// recommended
createUser()
updateUser()
sendEmail()

// example Access, modification and predicate functions
getUser()
setUser()
isValidUser()

//Classes, is recommended to use nouns

// Defining a class that is too generic can lead to it having more than one responsibility.
// single responsability: class and function has a single action

// not recommended 
class Data {}
class Manager {}
class Account {}

// recommended
class User {}
class UserProfile {}
class Account {}










