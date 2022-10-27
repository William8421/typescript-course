import faker from 'faker';
import { Mappable } from './CustomMap';
// const API_KEY = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA - TAw - mAZCU';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
