const people = [
    { name: 'Иван', age: 19, budget: 50000 },
    { name: 'Елена', age: 45, budget: 20000 },
    { name: 'Сергей', age: 64, budget: 25000 },
    { name: 'Виктория', age: 16, budget: 10000 },
    { name: 'Денис', age: 22, budget: 150000 },
    { name: 'Игорь', age: 31, budget: 75000 },
]

// for (let i = 0; i < people.length; ++i) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// ForEach
// people.forEach(person => console.log(person))


// Map
// const newPeople = people.map(person => `${person.name} ${person.age}`)
// console.log(newPeople)

// Filter
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)


// Reduce
// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)


// Find
// const igor = people.find(person => person.name === 'Игорь')
// console.log(igor)


// FindIndex
// const igorIndex = people.findIndex(person => person.name === 'Игорь')
// console.log(igorIndex)


//=========================


const amount = people
    .filter(person => person.budget > 50000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    })
    .reduce((total, person) => total + person.budget, 0)

    console.log(amount)