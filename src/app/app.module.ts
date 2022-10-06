import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material.module'
import {ManagerServiceModule} from './basic_section/shared/services/maneger-service.module'

import { AppComponent } from './app.component';
import { PabComponent } from './pab/pab.component';
import {SidebarComponent} from './basic_section/sidebar/sidebar.component'
import {HeaderComponent} from './basic_section/header/header.component';
import {FooterComponent} from './basic_section/footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PabComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
  //  BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
   MaterialModule,
    ManagerServiceModule,
    HttpClientModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
