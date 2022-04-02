const person = {
    name: 'Ivan'
}

function info(phone, email) {
    console.log(`Name: ${this.name}, Phone: ${phone}, E-mail: ${email}`)
}

//Demo
// info.bind(person)('12345', 'example@mail.ru')
// info.bind(person, '12345')('example@mail.ru')
// info.bind(person, '12345', 'example@mail.ru')()

// первый простой способ реализации
// function bind (fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }

// второй способ без встроенных метдов
// function bind(fn, context, ...rest) {
//     return function(...args) {
//         const uniqId = Date.now().toString()
//         context[uniqId] = fn
//         const result = context[uniqId](...rest.concat(args))
//         delete context[uniqId]
//         return result
//     }
// }

// 3 Способ ES5
// function bind(fn, context) {
//     const rest = Array.prototype.slice.call(arguments, 2)
//     return function() {
//         const args = Array.prototype.slice.call(arguments)
//         fn.apply(context, rest.concat(args))
//     }
// }

// 4 способ ES6 
// function bind(fn, context, ...rest) {
//     return function(...args) {
//         // return fn.apply(context, rest.concat(args))
//         return fn.call(context, ...rest.concat(args))
//     }
// }

// bind(info, person)('123', 'example@mail.ru')
// bind(info, person, '123') ('example@mail.ru')
// bind(info, person, '123', 'example@mail.ru')()

// Call
function call(fn, context, ...args) {
    const uniqId = Date.now().toString()
    context[uniqId] = fn
    const result = context[uniqId](...args)
    delete context[uniqId]
    return result
}

call(info, person, '123', 'v@mail.ru')

// Apply
function apply(fn, context, args) {
    const uniqId = Date.now().toString()
    context[uniqId] = fn
    const result = context[uniqId](...args)
    delete context[uniqId]
    return result
}

apply(info, person, ['123', 'v@mail.ru'])