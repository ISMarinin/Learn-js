// const person = {
//     name: 'Max',
//     age: 25,
//     greet: function() {
//         console.log('Greet!')
//     }
// }

const person = new Object ({
    name: 'Max',
    age: 25,
    greet() {
        console.log('Greet!')
    }
})

Object.prototype.sayHallo = () => {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = "Lena"

// const str = 'I am string'
const str = new String('I am string')