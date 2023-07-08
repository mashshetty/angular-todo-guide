import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NameComponent } from './name/name.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
 
  {
    path:'nav',
    component: NavComponent
  },
  {
    path:'',
    component:TodoComponent
  },
  {
    path:'name/:id',
    component:NameComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
