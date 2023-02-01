import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  name = null;

  constructor() { }

  add(user: User): void {
    this.users.push(user);
  }
  remove(user: User): void {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  get(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAll(): User[] {
    return this.users;
  }

  clearUsers(): void {
    this.users = [];
  }

}
