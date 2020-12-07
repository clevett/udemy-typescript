const add = (a: number, b: number): number => a + b

function divide(a:number, b:number):number {
  return a / b
}

const multiply = (a:number, b:number): number => a * b

const logger = (message:string):void => console.log(message)

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: string}):void => {
  console.log(`${date}: ${weather}`)
}

logWeather(forecast)
