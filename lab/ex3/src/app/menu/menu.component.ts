import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  childText: String;

  constructor(private dataService: DataService) {
    this.menuItems = dataService.getMenu();
  }

  ngOnInit() {
  }

  childReciever(data) {
    this.childText = data;
  }

}
