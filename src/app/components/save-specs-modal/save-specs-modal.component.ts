import { Component, OnInit } from '@angular/core';
import {TreeViewService} from "../../services/tree-view.service";

@Component({
  selector: 'app-save-specs-modal',
  templateUrl: './save-specs-modal.component.html',
  styleUrls: ['./save-specs-modal.component.scss']
})
export class SaveSpecsModalComponent implements OnInit {
  selectedState: any = null;
  states: any[] = [
    { name: "Arizona", code: "Arizona" },
    { name: "California", value: "California" },
    { name: "Florida", code: "Florida" },
    { name: "Ohio", code: "Ohio" },
    { name: "Washington", code: "Washington" }
  ];
  public products: any = [
    {
      "id": "1000",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1001",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1002",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1003",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1004",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1005",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1006",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1007",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1008",
      "keyword": "654",
      "full_form": "This is a test",
    },
    {
      "id": "1009",
      "keyword": "654",
      "full_form": "This is a test",
    },{
      "id": "1010",
      "keyword": "654",
      "full_form": "This is a test",
    }
  ];
  constructor(public treeViewService: TreeViewService) { }

  ngOnInit(): void {
  }

}
