import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

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

  login(prov: String) {
    switch (prov) {
      case 'twitter':
        this.af.auth.login({
          provider: AuthProviders.Twitter,
          method: AuthMethods.Popup,
        });
        break;
      case 'google':
        this.af.auth.login({
          provider: AuthProviders.Google,
          method: AuthMethods.Popup,
        });
        break;
    }

  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }
}
