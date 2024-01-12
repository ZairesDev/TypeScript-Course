function merge<T extends object , U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Faissal', hobbies: ['sports'] }, {age: 28})
console.log(mergedObj)

interface Lengthy {
  length: number
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = 'Luke, I am your father'
  if (element.length === 1) {
    descriptionText = 'Got one element'
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`
  }
  return [element, descriptionText]
}

// console.log(countAndDescribe('Hi there!'))
// console.log(countAndDescribe(['Sports', 'Formula1']))
// console.log(countAndDescribe(10))

const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key:U) => {
  return obj[key]
}

console.log(extractAndConvert({name: 'Faissal'}, 'name'))