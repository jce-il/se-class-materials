import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ImageComponent } from "./image/image.component";

export const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "image", component: ImageComponent },
    { path: "**", redirectTo: "home" }

];

