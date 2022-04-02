const person = Object.create({
    calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
},
{
    name: {
        value: 'Ivan',
        enumerable: true,    // чтобы было видно поле при обходе в цикле
        writable: true,      // чтобы можно было менять значения в объекте
        configurable: true   // разрешает удалять какой-либо ключ из объекта
    },
    birthYear: {
        value: 2002,
        // enumerable: false,       // по умолчанию
        // writable: false,         // по умолчанию
        // configurable: false      // по умолчанию
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'black'
            console.log('Set age', value)
        }
    }
})

person.name = 'Maxim'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}
