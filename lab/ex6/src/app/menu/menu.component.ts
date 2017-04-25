import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { DataService } from '../data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  childText: String;
  userName: String;

  constructor(
    private dataService: DataService,
    private userService: UserService
  ) {
    this.menuItems = dataService.getMenu();
  }

  ngOnInit() {
  }

  childReciever(data) {
    this.childText = data;
  }

}
