import { Injectable } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Injectable()
export class DataService {
  public getMenu() {
    return [
      new MenuItem('#', 'Item 1'),
      new MenuItem('#', 'Item 2'),
      new MenuItem('#', 'Item 3'),
      new MenuItem('#', 'Item 4')
    ];
  }
  constructor() { }
}
