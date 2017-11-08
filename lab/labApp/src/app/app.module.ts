import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavService } from "./service/nav.service";
import { NavComponent } from './nav/nav.component';

import { appRoutes } from "./app.route";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
