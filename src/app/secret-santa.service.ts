import { Injectable } from '@angular/core';
import { SecretSanta } from './secret-santa';
import { User } from './user';
import { SecretSantaStorageService } from './secret-santa-storage.service';

const storageName = 'secretSanta_data';

@Injectable({
  providedIn: 'root'
})
export class SecretSantaService {

  users: User[] = [];
  presentLimit!: number;
  selectedSecretSanta?: SecretSanta;
  
  constructor(private storage: SecretSantaStorageService) { 
    
  }

  addNewUser(user: User) {
    return this.storage.put(this.selectedSecretSanta, this.selectedSecretSanta?.users.push(user));
  }

  removeUser(user: User) {
    return this.storage.destroy(user);
  }
  
  getUser(name: string): User {
    return this.getAllUsers().find(user => user.name === name) || new User('N/A');
  }

  getAllUsers(): User[] {
    return this.storage.get();
  }

  //getSecretSanta(): SecretSanta {
  //  //return this.storage.get();
  //}

  createNewSecretSanta(): SecretSanta {
    this.selectedSecretSanta = new SecretSanta("new",[],0);
    this.storage.post(this.selectedSecretSanta);
    return this.selectedSecretSanta;
  }

  getAllUsersExcept(usersToExclude: User[]): User[] {
    var users = this.getAllUsers();
    usersToExclude.forEach(user => {
        const index = users.indexOf(user);
        if (index > -1) {
        users.splice(index,1);
      }
    });
    return users;
  }
  getPresentLimit(): number {
    return this.presentLimit;
  }

  setPresentLimit(presentLimit: number): void {
    this.presentLimit = presentLimit;
  }

  clearUsers(): void {
    this.users = [];
  }

  updateUser(user: User, userChanges: any): User[] {
    return this.storage.put(user, userChanges);
  }

  //setUserExclusion(user:User): User[] {
  //  user.excludeUsers?.forEach(eUserName => {
  //    var updateUser = this.getUser(eUserName);
  //    this.updateUser(updateUser, {excludeUsers: user.name});
  //  });
//
  //  
  //  //var updatedUser = user;
  //  //updatedUser.excludeUsers?.push(...usersToExclude);
//
  //  //return this.storage.put(user, user.excludeUsers?.push(...usersToExclude));
  //}
}