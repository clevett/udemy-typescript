const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}


//With Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]

//Will error
pepsi[0] = 5

//Write the type
type Drink = [string, boolean, number]
const coke: Drink = ['brown', true, 40]
const tea: Drink = ['green', false, 0]
const sprite: Drink = ['clear', true, 50]

//Tuples are useful when working with CSV file


