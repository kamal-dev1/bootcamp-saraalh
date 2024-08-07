import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './404/404.component';
import { Form2Component } from './form2/form2.component';
import { HttpRequestComponent } from './http-request/http-request.component';

export const routes: Routes = [

  {
    path:"form",
    component: FormComponent
  },
  {
    path:"",
    redirectTo:'form',
    pathMatch:"full"
  },
  {
    path:"404",
    component: NotFoundComponent
  },
  {
    path:"form2",
    component: Form2Component
  },
  {
    path:"http",
    component: HttpRequestComponent
  },
  {
    path:"**",
    component: NotFoundComponent
  },


];
