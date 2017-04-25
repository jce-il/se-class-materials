import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @Output() out = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  itemClick() {
    this.out.emit(this.item.anchor + ' child');
  }

}
