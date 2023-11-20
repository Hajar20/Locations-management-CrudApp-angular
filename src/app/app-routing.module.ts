import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddItemComponent} from './add-item/add-item.component';
import {LoginComponent} from './login/login.component';
import {ListItemComponent} from './list-item/list-item.component';
import {UpdateItemComponent} from './update-item/update-item.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ListItemComponent
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: AddItemComponent,
    path: 'add'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: ListItemComponent,
    path: 'list'
  },
  {
    component: UpdateItemComponent,
    path: 'update/:id'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
