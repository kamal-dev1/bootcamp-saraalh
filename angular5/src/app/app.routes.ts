import { Routes } from '@angular/router';
import { InputNgModelComponent } from './input-ng-model/input-ng-model.component';

export const routes: Routes = [

{
  path:"input",
  component:InputNgModelComponent
},

{
  path:"load",
  loadChildren:()=>import("./lazyload/lazy.routes").then((m)=>m.routes)
}

];
