import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Input() newUser!: User;

  constructor(private matIconRegistery: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon(
      'santa',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/santa_icon.svg")
    );
  }

  ngOnInit(): void {
  }

}
