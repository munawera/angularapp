import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { TreeViewService } from "../../services/tree-view.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeIndex: number = 0;
  items: MenuItem[] = [];
  items2: MenuItem[] = [];
  itemsTabs: MenuItem[] = [];
  itemsTabs2: MenuItem[] = [];
  activeItem: MenuItem | undefined;
  value: string | undefined;
  menu: boolean = false;
  userDropdown: boolean = false;
  constructor(public treeViewService: TreeViewService) {}

  ngOnInit(): void {
    this.items = [
      {icon:'pi pi-fw pi-compass',},
      {icon:'pi pi-fw pi-chart-bar',},
      {icon:'pi pi-fw pi-user',},
      {icon:'pi pi-fw pi-calendar',},
      {icon:'pi pi-fw pi-folder-open'},
      {icon:'pi pi-fw pi-file',},
      {icon:'pi pi-fw pi-globe r-divider',},
      {icon:'pi pi-fw pi-comments l-divider',},
      {icon:'pi pi-fw pi-file-o',},
      {icon:'pi pi-fw pi-book'},
      {icon:'pi pi-fw pi-file-pdf',},
    ];
    this.items2 = [
      {icon:'pi pi-fw pi-refresh',},
      {icon:'pi pi-fw pi-comment',},
      {icon:'pi pi-fw pi-user-plus',}
    ];
    this.itemsTabs = [
      {label: 'Review Entire File', icon:'p-menuitem-svg svg-file'},
      {label: 'My Reviews', icon:'p-menuitem-svg svg-reviews'},
      {label: 'Add Users', icon:'p-menuitem-svg svg-adduser'},
      {label: 'Delete Review', icon:'p-menuitem-svg svg-delete'}
    ];
    this.itemsTabs2 = [
      {label: 'Review Home', icon:'p-menuitem-svg svg-home', url:'review-home'},
      {label: 'Review Entire File', icon:'p-menuitem-svg svg-file'},
      {label: 'Review Selected', icon:'p-menuitem-svg svg-selected', url:''},
      {label: 'My Reviews', icon:'p-menuitem-svg svg-reviews'},
      {label: 'Add Users', icon:'p-menuitem-svg svg-adduser'},
      {label: 'Delete Review', icon:'p-menuitem-svg svg-delete'}
    ];
    this.activeItem = this.itemsTabs2[2];
  }

  clickEvent() {
    this.menu = !this.menu;
  }

  onClickedOutside(e: Event){
    console.log('Clicked outside:', e);
    this.userDropdown = false;
  }

}
