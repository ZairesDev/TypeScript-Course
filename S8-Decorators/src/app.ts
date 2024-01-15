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

// '@' is a symbol that tells TypeScript that this is a decorator
// @Logger
// Calling the decorator factory and passing the string
@Logger('LOGGING - TEAM')
class FormulaOneTeam {
  name = 'Mercedes'

  constructor() {
    console.log('Creating FormulaOneTeam...')
  }
}

const team = new FormulaOneTeam()

console.log(team)