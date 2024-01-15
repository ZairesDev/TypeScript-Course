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
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
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