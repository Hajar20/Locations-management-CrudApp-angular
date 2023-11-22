import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    UpdateItemComponent,
    ListItemComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
