import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PabComponent} from './pab/pab.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {InfoComponent} from './info/info.component'

const routes: Routes = [
  {
    path: '',
    component: PabComponent}
  ,
  {
    path: 'info',
    component: InfoComponent}
  ,
  {
    path: '**',
    component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
