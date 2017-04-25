import { Injectable } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Injectable()
export class DataService {

  public getMenu() {
    return [
      new MenuItem('/', 'Home'),
      new MenuItem('#', 'Item 2'),
      new MenuItem('/about', 'About us'),
      new MenuItem('/contact', 'Contact us')
    ];
  }
  constructor() { }
}
