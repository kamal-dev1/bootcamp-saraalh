import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';

export const routes: Routes = [
  {
    path:"user",
    loadChildren:()=>import("./users/user.routes").then((m)=>m.userRoutes)
  }
];
