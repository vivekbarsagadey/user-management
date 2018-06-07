import { Injectable } from '@angular/core';
import {User} from './user';
const users = [
  new User(1, 'Vivek', 'Bar', 35, 'vivek@gsit.co.in','vivek'),
  new User(2, 'Shan', 'Bar',33,'shan@gsit.co.in','shan'),
  new User(3, 'Pintu', 'Bar',33,'pintu@gsit.co.in','pintu'),
  new User(4, 'Pallavi', 'Bar',33,'pallavi@gsit.co.in','pallavi'),
  new User(5, 'Akash', 'Bar',33,'akash@gsit.co.in','akash'),
];

const usersPromise = Promise.resolve(users);
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers() {
    return usersPromise;
  }

  getUser(id: number | string) {
    return usersPromise.then( u => u.find(user => user.id === +id) );
  }

  addUser(user: User) {
    return new Promise((resolve, reject) => {
      user.id = users.length;
      resolve(users.push(user));
    })  ;
  }

  deleteUser(id: number | string) {
    const index = users.findIndex(user => user.id === +id);
    return users.splice(index, 1)[0];
  }
}
