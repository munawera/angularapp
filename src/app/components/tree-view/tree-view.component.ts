import { Component } from '@angular/core';
import { TreeViewService } from "../../services/tree-view.service";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  caseDropdown: boolean = false;
  constructor(public treeViewService: TreeViewService) {}
  onClickedOutside(e: Event){
    console.log(e)
    this.caseDropdown = false;
  }
}
