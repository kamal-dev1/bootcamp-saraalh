import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homePageGuard } from './auth/home-page.guard';


export const routes: Routes = [


  {
    path:'auth',
    loadChildren: ()=>import("./auth/auth.routes").then((m)=>m.LoginRoutes),
  },
  {
    path:'',
    loadChildren: ()=>import("./home/home.routes").then((m)=>m.HomeRoutes),
    canActivate:[homePageGuard]
  }
];
