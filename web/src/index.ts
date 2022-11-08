// import { User } from './models/User';

// const user = new User({ name: 'myname', age: 20 });

// // user.set({ age: 999 });

// // console.log(user.get('name'));
// // console.log(user.get('age'));

// user.on('change', () => {
//   console.log('change #1');
// });
// user.on('change', () => {
//   console.log('change #2');
// });
// user.on('save', () => {
//   console.log('save was triggered');
// });

// // user.trigger('change');
// // user.trigger('save');
// user.trigger('jvhbnkjvhb');
//===================================================================

// import axios from 'axios';
// // axios.post('http://localhost:3000/users', {
// //   name: 'myname1',
// //   age: 22,
// // });

// axios.get('http://localhost:3000/users/4');
// ============================================================================

import { User } from './models/User';
const user = new User({ name: 'new Record 1', age: 15 });

user.save();
