const carMakers = ['ford', 'toyota', 'chevy']

const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

//Helps inference
const [firstCar] = carMakers

//Will error when try to push a number
carMakers.push(100)

//Typescript knows car is a string and this will return a string
carMakers.map((car:string): string => car)

//Flexible Types
//Date | String
const importantDates = [new Date(), '2030-10-10']
const sameAsAbove: (Date || string)[] = [new Date(), 'string']