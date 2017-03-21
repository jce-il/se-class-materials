import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  login() {
    this.userService.login('1', '1');
    console.log(this.userService.getCurrentUser());
  }
}
