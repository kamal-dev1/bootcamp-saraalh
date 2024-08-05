import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { TableComponent } from './home/table/table.component';

export const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"table",
        component:TableComponent
      }
    ]
  },
  {
    path:"panel",
    component:PanelComponent
  }


];
