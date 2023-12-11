function merge<T extends object , U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Faissal', hobbies: ['sports'] }, {age: 28})
console.log(mergedObj)