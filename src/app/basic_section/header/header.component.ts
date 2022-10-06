import { Component, OnInit,Output, EventEmitter,Input, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import {MenuService} from '../shared/services/menu.service'
import { MenuItem } from '../shared/_interfaces/menu-item.model';








// ChangeDetectionStrategy https://habr.com/ru/company/infopulse/blog/358860/
// logi_form https://github.com/VladiRR/svvs/blob/master/libs/frontend/client/ui/login-form/src/lib/login-form-ui/login-form-ui.component.ts
//sample https://code-maze.com/angular-material-navigation/

@Component({
  selector: 'x01-v1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
     onToggleSideBar = new EventEmitter()
  
  


  

 
  private _subscriptions: Subscription[] = [];
// private subscription: Subscription|undefined ;
  

 

@Input() public company_name_1:string|undefined;
@Input() public company_name_2:string=""; //First Site
@Input() public srcLogo:string='';

@Input() public jsonMenuURL: string = '';

public MenuItems=():MenuItem[]=>{
  return this.menuService.getMenuItems();
}

  constructor(
    private menuService:MenuService,
   

  ) {}

  ngOnInit(): void {
   this.menuService.setMenuFromJSON(this.jsonMenuURL);
  

  }

  
  

  public onSideBarVisible(): void {
    //  this.login.emit(this.loginForm.value)
     this.onToggleSideBar.emit();
    }
  

}
