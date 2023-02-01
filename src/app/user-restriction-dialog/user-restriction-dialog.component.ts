import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '../user';
import { Users } from '../users';
import { SecretSantaService } from '../secret-santa.service';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'app-user-restriction-dialog',
  templateUrl: './user-restriction-dialog.component.html',
  styleUrls: ['./user-restriction-dialog.component.css']
})

export class UserRestrictionDialogComponent implements OnInit {
  users = Users;

  constructor(public dialogRef: MatDialogRef<UserRestrictionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private secretSantaService: SecretSantaService ) {}

  ngOnInit(): void {
    this.users = this.secretSantaService.getAllUsersExcept([this.data.user]);
  }

  onChange(checked: boolean, user: User, index: number)
  {
    if(checked) 
    {
      this.data.user.excludeUsers?.push(user.name);
    }
    else
    {
      this.data.user.excludeUsers?.splice(this.data.user.excludeUsers.indexOf(user.name), 1);
    }
  }

  checked(user: User){
    if(this.data.user.excludeUsers?.indexOf(user.name) != -1) 
    {
      return true;
    }
    return false;
  }

}
