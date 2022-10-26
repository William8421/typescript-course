// class Vehicle {
//   drive(): void {
//     console.log('chugga chugga');
//   }

//   honk(): void {
//     console.log('peep');
//   }
// }

// class Car extends Vehicle {
//   drive(): void {
//     console.log('vroom');
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.drive();
// // vehicle.honk();

// const car = new Car();
// car.drive();
// car.honk();

class Vehicle {
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('peep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');

// car.startDrivingProcess();
// car.honk();
