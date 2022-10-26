// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
// }
interface reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
// };
// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
// };

const printSummary = (item: reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
