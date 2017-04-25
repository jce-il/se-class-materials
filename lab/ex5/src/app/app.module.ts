import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { appRoutes } from './routes';

import { DataService } from './data.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY_HERE',
  authDomain: '******.firebaseapp.com',
  databaseURL: 'https://********.firebaseio.com',
  projectId: '******',
  storageBucket: '*****.appspot.com',
  messagingSenderId: '*************'
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
