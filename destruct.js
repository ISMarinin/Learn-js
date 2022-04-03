function calcVavues(a, b) {
    return [
        a + b,
        // undefined,
        a - b,
        a * b, 
        a / b
    ]
}

const [sum, sub = 'Вычитания нет', mult, ...other] = calcVavues(42, 10)
// const sum = result[0]
// const sub = result[1]

// console.log(sum, sub, mult, other)

// Objects
const Person = {
    name: 'Max',
    age: 19,
    address: {
        country: 'Russia',
        city: 'Moscow',
    }
}

// const name  = Person.name    // одно и то же
// const {name: firstName,
//     age, 
//     car = 'Машины нет',
//     address: {city: homeTown, country}
// } = Person
// console.log(firstName, age, car, homeTown, country)

// const {name, ...info} = Person
// console.log(name, info)

function logPerson(per) {
    console.log(per.name + ' ' + per.age)
}
logPerson(Person)