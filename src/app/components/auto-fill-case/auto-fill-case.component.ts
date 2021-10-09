import { Component, OnInit } from '@angular/core';
import { TreeViewService } from "../../services/tree-view.service";

@Component({
  selector: 'app-auto-fill-case',
  templateUrl: './auto-fill-case.component.html',
  styleUrls: ['./auto-fill-case.component.scss']
})
export class AutoFillCaseComponent implements OnInit {

  constructor(public treeViewService: TreeViewService) { }

  ngOnInit(): void {
  }

}
