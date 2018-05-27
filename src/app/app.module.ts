import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { UserService } from './services/userServices';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BasicUserControllerComponent } from './basic-user-controller/basic-user-controller.component';
import { JobServices } from './services/JobServices';
import { SearchControllerComponent } from './search-controller/search-controller.component';
import { CatService } from './services/cat.services';
import {  HttpClientModule } from '@angular/common/http';
import { AgentControllerComponent } from './agent-controller/agent-controller.component';
import { AddJobComponent } from './add-job/add-job.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicUserControllerComponent,
    SearchControllerComponent,
    AgentControllerComponent,
    AddJobComponent,
    UserSearchComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule
  
     
  ],
  providers: [UserService,JobServices,CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
