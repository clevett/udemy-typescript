const oldCivic = {
  name: 'civic',
  year: 2000,
  isBroken: true
}

//This is too long. 
const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken} `)
}

//Interance creates a new type
interface Vehicle {
  name: 'string'
  year: number
  broken: boolean
  summary():string //Anything Vehicle must have a string
}


const logVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken} `)
}


//Will Error becuase of the broken vs isBroken
//Will Error because its missing summary()
logVehicle(oldCivic)


interface Reportable {
  summary():string
}

const printSummary = ({summary}: Reportable):void => {
  console.log(summary())
}


const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary: (): string => `My drink has ${this.sugar} grams of sugar`
}

printSummary(drink)

