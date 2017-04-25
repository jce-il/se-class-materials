# MyApp
## This demo conains 'ex4' demo with firebase database

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Firebase integration
https://github.com/angular/angularfire2

### Install:
`npm install promise-polyfill --save-exact`
`npm install firebase angularfire2 --save`

### @NgModule:
```typescript
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

imports: [
    AngularFireModule.initializeApp(firebaseConfig)
  ],
```


### Use in component:
```typescript
import {AngularFire, FirebaseListObservable} from 'angularfire2';
```

```typescript
items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
}```

### Coding:

https://github.com/angular/angularfire2/blob/master/docs/2-retrieving-data-as-objects.md#saving-data-1