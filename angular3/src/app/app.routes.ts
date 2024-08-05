import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './404/404.component';

export const routes: Routes = [

  {
    path:"form",
    component: FormComponent
  },
  {
    path:"404",
    component: NotFoundComponent
  },
  {
    path:"**",
    component: NotFoundComponent
  },
  // {
  //   path:"",
  //   redirectTo:"form",
  //   pathMatch:"full"
  // },

];
