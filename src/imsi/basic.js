let person = {firstName: 'John', lastName: 'Doe', age: 25, eyeColor: 'blue'}
let greeting = 'Hello, my name is ' + person.firstName + ' ' + person.lastName + '.'
let greeting2 = `Hello, my name is ${person.firstName} ${person.lastName}.`
console.log(greeting)
console.log(greeting2)

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Employee extends Person {
  constructor(firstName, lastName, title, salary) {
    super(firstName, lastName)
    this.title = title
    this.salary = salary
  }
}