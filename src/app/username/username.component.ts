import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  //Properties

  userName: string;
  userHasName: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  //Methods

  onCheckInput(){
    if(this.userName.split(' ').join('') != ''){
      this.userHasName = true;
    } else {
      this.userHasName = false;
      this.userName = '';
    }
  }

  clearUserNameInput(){
    this.userName = '';
  }
}
