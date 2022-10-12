import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ManagerServiceModule } from './basic_section/shared/services/maneger-service.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './basic_section/sidebar/sidebar.component';
import { HeaderComponent } from './basic_section/header/header.component';
import { FooterComponent } from './basic_section/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoComponent } from './info/info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { PabComponent } from './pab/pab.component';
import {OgzComponent} from './ogz/ogz.component'

@NgModule({
  declarations: [
    AppComponent,
    PabComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
    InfoComponent,
    OgzComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    ManagerServiceModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
