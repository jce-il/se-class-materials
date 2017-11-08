import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { NavService } from "./service/nav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public navService: NavService){

  }
}
