const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 2
}
const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}

// Spread - разворачивает массив, с которым мы работаем
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesRussia, ...citiesEurope]
// console.log(...allCities)

// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})


// Pactice
// const numbers = [2, 37, 42, 17]
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))


// Rest - собирает все параметры в массивах/объектах
function sum(a, b, ...rest) {
    // console.log(...rest)
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]

// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]
// const[a, b, ...other] = numbers
// console.log(a, b, other)

const Person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...rest} = Person

console.log(name, age, rest)