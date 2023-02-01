import { Injectable } from '@angular/core';
import { SecretSanta } from './secret-santa';

const storageName = 'secretSanta_Data';
const testUsers = [
  {name: 'Blake', excludeUsers: []},
  {name: 'Mom', excludeUsers: []},
  {name: 'Dani',excludeUsers: []}
];
const testEvents = [
  {title: 'Test', users: [{name: 'Blake', excludeUsers: []},
  {name: 'Mom', excludeUsers: []},
  {name: 'Dani',excludeUsers: []}], priceLimit: 1000}
];

@Injectable({
  providedIn: 'root'
})
export class SecretSantaStorageService {

  private users;
  private secretSantas;

  constructor() {
    this.users = JSON.parse(localStorage.getItem(storageName)!) || testUsers;
    this.secretSantas = JSON.parse(localStorage.getItem(storageName)!) || testEvents;
  }

  get(){
    return [...this.secretSantas];
  }

  getSecretSanta(selectedSecretSanta: SecretSanta){
    return [...this.secretSantas.getItem(selectedSecretSanta)];
  }

  //post(item: any){
  //  this.users.push(item);
  //  return this.update();
  //}

  post(item: any){
    this.secretSantas.push(item);
    return this.update();
  }
  put(secretSanta: any, changes: any) {
    Object.assign(this.secretSantas[this.findItemIndex(secretSanta)], changes);
    return this.update();
  }

  private update(){
    localStorage.setItem(storageName, JSON.stringify(this.secretSantas));
    return this.get();
  }

  private findItemIndex(item: any)
  {
    return this.secretSantas.indexOf(item);
  }

  removeUser(user: any) {
    //this.selectedSecretSanta.users.splice(this.findItemIndex(user), 1);
    return this.update();
  }

  destroy(item: any){
    this.users.splice(this.findItemIndex(item), 1);
    return this.update();
  }
}
