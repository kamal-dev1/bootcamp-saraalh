import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NameComponent } from './name/name.component';

export const routes: Routes = [
  {
    path:"header",
    component: HeaderComponent
  },
  {
    path:"content",
    component: ContentComponent,
    children:[
      {
        path:"name",
        component:NameComponent
      }
    ]
  },



];
