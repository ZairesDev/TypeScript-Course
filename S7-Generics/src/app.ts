// Generic Functions
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
  return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'Faissal'}, 'name'))
// End Generic Functions

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item:T ) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('help')
textStorage.addItem('me')
textStorage.removeItem('help')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10)
numberStorage.addItem(20)
numberStorage.removeItem(10)
console.log(numberStorage.getItems())

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Faissal'})
// objStorage.addItem({name: 'Darth Vader'})
// objStorage.removeItem({name: 'Faissal'})
// console.log(objStorage.getItems())
