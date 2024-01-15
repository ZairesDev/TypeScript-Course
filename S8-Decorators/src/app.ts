// Decorators Start

// Decorators are just functions that can be attached to classes, methods, properties or parameters
// Decorators are executed when the class is defined, not when it is instantiated
// Decorators are executed bottom up, from the most nested to the least nested
// function Logger(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

// Decorator Factory
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

// Decorator Factory with Template
function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

// '@' is a symbol that tells TypeScript that this is a decorator
// @Logger
// Calling the decorator factory and passing the string
// @Logger('LOGGING - TEAM')
@WithTemplate('<h1>My Formula One Team</h1>', 'app')
class FormulaOneTeam {
  name = 'Mercedes'

  constructor() {
    console.log('Creating FormulaOneTeam...')
  }
}

const team = new FormulaOneTeam()

console.log(team)

// ---

// Property Decorators
// If the decorator is attached to a property, the constructor function of the class is passed as the second argument
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Paramerter decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
}


class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive!')
    }
  }
  
  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}
