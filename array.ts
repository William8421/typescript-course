const carMakers = ['ford', ' toyota', 'chevy'];
// const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
// const carsByMake: string [][] = []

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());

