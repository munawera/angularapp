import { Component, OnInit } from '@angular/core';
import { TreeViewService } from "../../services/tree-view.service";

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  activeIndex: number = 0;
  menu: boolean = false;
  constructor(public treeViewService: TreeViewService) { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.menu = !this.menu;
  }

}
