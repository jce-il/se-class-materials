import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { UserService } from '../../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any[]>;

  constructor(
    private userService: UserService,
    private af: AngularFire) {
      this.item = af.database.object('/item');
      this.items = af.database.list('items');
  }

  ngOnInit() {
  }

  setObject(op: String) {
    switch (op) {
      case 'set':
        this.item.set({
          name: 'new name!',
          age: 18,
          status: 'Married'
        });
        break;
       case 'set2':
        this.item.set({
          status: 'Single'
        });
        break;
      case 'update':
        this.item.update({ age: 20 });
        break;
      case 'remove':
        this.item.remove();

    }
  }

  setList(op: String, key: string, name: String, age: Number) {
    switch (op) {
      case 'push':
        this.items.push({ name: name, age: age });
        break;
       case 'update':
        this.items.update(key, {
          age: age
        });
        break;
      case 'remove':
        this.items.remove(key);
        break;
      case 'removeAll':
        this.items.remove();
        break;
    }
  }

  login() {
    this.userService.login('1', '1');
    console.log(this.userService.getCurrentUser());
  }
}
