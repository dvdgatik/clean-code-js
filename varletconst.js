// Previous to ES6
var name = 'Alexa'

// Modern JavaScript
let name2 = 'David'
const PI = 3.14159

// "var" use
// "var" only works as a global way, it doesn't matter scope, avoid var is recommended in terms of clean code
var age = 28

{
    console.log('Value inside block ', age)
    var age = 29
}

console.log('Value outside block ', age)
age = age*2
console.log('Value changed', age)


// "let" use
// "let" respects the scope of the code blocks
let age1 = 28
{
    //console.log('Value inside block ', age1) error
    let age1 = 29
}

console.log('Value outside block ', age1)
age1 = age1*2
console.log('Value changed', age1)

// "const" use

const PI1 = 3.14159
PI1 = 3.1416 
console.log('Value of PI equls to ', PI1)



