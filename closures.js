// Замыкания - это функция внутри функции

// function createCalcFunc(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }

// createCalcFunc(5)()

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// console.log(addOne(20))

// function urlGeneration(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGeneration('com')
// console.log(comUrl('google'))

// реализация bind() с помощью замыканий
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Ivan',
    age: 19,
    job: 'Designer'
}

const person2 = {
    name: 'Denis',
    age: 22,
    job: 'Backend'
}

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)()
bind(person2, logPerson)()