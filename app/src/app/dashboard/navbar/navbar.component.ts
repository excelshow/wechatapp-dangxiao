import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  constructor(
    private dialog: MdDialog
  ) {}

  ngOnInit() {
  }

  menuClick() {
  }

  outLogin(){
    window.location.href="/login";
  }

  onEditClick(){
    const dialogRef = this.dialog.open(ProfileComponent,{});
  }

}
