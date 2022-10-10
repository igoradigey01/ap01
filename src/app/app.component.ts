import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a01';
  public _srcLogo: string = '../assets/logo/logo.png';
  public _srcMenuJson: string = '../assets/menu.json';
  public _company_name_1: string | undefined;
  public _company_name_2: string = 'A01';

  _flagPanel: boolean = true;

  // _flagPanel2: boolean = false;
  _flagSideBarHiden = false;

  onSideBarVisible() {
    this._flagPanel = !this._flagPanel;
    //  this._flagPanel2 = !this._flagPanel2;
    this._flagSideBarHiden = !this._flagSideBarHiden;
  }
}
