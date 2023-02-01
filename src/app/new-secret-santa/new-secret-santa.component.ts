import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SecretSantaService } from '../secret-santa.service';
import { User } from '../user';
import { UserRestrictionDialogComponent } from '../user-restriction-dialog/user-restriction-dialog.component';
import { Users } from '../users';
import { SecretSanta } from '../secret-santa';

@Component({
  selector: 'app-new-secret-santa',
  templateUrl: './new-secret-santa.component.html',
  styleUrls: ['./new-secret-santa.component.css']
})
export class NewSecretSantaComponent implements OnInit {

  users = Users;
  name = '';
  secretSanta?: SecretSanta

  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private newSecretSanta: SecretSantaService, public dialog:MatDialog) { }

  openUserRestrictionDialog(user: User): void {
    const dialogRef = this.dialog.open(UserRestrictionDialogComponent, {
      width: '350px',
      data: {user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.users = this.newSecretSanta.updateUser(user, {excludeUsers: result});
    })
  }

  addNewUser() {
    if (this.name != '') {
      this.users = this.newSecretSanta.addNewUser(this.name);
      this.name = '';
    }   
  }

  removeUser(userToRemove: User) {
    this.users = this.newSecretSanta.removeUser(userToRemove);
  }

  createNewSecretSanta() {

  }

  ngOnInit(): void {
    this.users = this.newSecretSanta.getAllUsers();
    this.secretSanta = new SecretSanta("", {}, 0);
  }
  
}
