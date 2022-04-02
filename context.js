function hello () {
    console.log('Hello', this)
}

const person = {
    name: 'Vanya',
    age: 19,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23,
}

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '88003333535')()
// person.logInfo.call(lena, 'Frontend', '88003333535')
// person.logInfo.apply(lena, ['Frontend', '88003333535'])

//===============================

const array = [1, 2, 3, 4, 5]

// const multiplication = (arr, n) => {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.multiplication = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

// console.log(multiplication(array, 2))
console.log(array.multiplication(20 ))