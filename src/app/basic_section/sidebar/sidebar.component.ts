import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';
import { MenuItem } from '../shared/_interfaces/menu-item.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'x01-v1-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output()
  onToggleSideBar = new EventEmitter();

  @Input() public jsonMenuURL: string = '';

 

  private _subscriptions: Subscription[] = [];

  public MenuItems = (): MenuItem[] => {
    let m = this.menuService.getMenuItems();
  //  console.log(m);

    return m;
  };

  constructor(
    private menuService: MenuService,
   
  ) {}

  ngOnInit(): void {
  
  }

  ngOnDestroy() {
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

 

  public onSideBarVisible(): void {
    this.onToggleSideBar.emit();
  }

  
}
