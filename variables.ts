let apples: number = 5

apples = 10

let speed: string = 'fast'

let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] =[1,2,3]
let truths: boolean[] = [true, false, false]

class Car {}

let car: Car = new Car()

let point: { x:number, y:number } = {
  x:10,
  y:20
}

const logNUmber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function returns the 'any' type

const json = '{"x":10, "y":20}'
const coordinates: {x: number, y: number} = JSON.parse(json)

// 2) When we declare a variables on noe line and init it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

words.map(word => word === 'green' ?  foundWord = true : false)

// 3) When type can't be inferred
let numbers = [-10, 1, -12]
let numberAboveZero: boolean | number = false

numbers.map(number => number > 0 ? numberAboveZero = number : false)