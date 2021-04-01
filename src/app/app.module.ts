import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModuleComponent } from './admin-module/admin-module.component';
import {AdminModuleModule} from './admin-module/admin-module.module';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AdminModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModuleModule,
    HttpClientModule
  ],
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
