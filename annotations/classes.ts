class Vehicle {
 constructor(public color: string) {}

  drive(): void {
    console.log('vroom vroom')
  }

  honk(): void {
    console.log('honk')
  }
}

const vehicle = new Vehicle('yellow')

vehicle.drive()
vehicle.honk()

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color)
    this.wheels = wheels
  }

  drive(): void {
    console.log('put put')
  }
}

const car = new Car(4, 'red')
car.drive()

