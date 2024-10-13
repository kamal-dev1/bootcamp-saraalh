import { Routes } from "@angular/router";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { HomeComponent } from "./home.component";
import { ListMyTaaskComponent } from "./list-my-taask/list-my-taask.component";



export const HomeRoutes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"add",
        component:AddTodoComponent
      },
      {
        path:"list/my",
        component:ListMyTaaskComponent
      },
    ]
  },


]
