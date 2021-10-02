import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  public items = [
    {
      "id": "7340",
      "label": "Documents",
      "data": "Documents Folder",
      expanded: true,
      "children": [
        {
         "id": "73401",
        "label": "Work",
        "data": "Work Folder",
          expanded: true,
        "children": [
          {"id": "734011", "label": "Expenses", "data": "Expenses Document", expanded: true, "children": []}]
        },
       ]
    }
  ];
  public show = false;
  public editItem: any = null;
  public itemList: any = null;
  public firstKey: any = [];

  constructor() {}

  updateList(){
    console.log(this.items);
  }

  showEditor(item: any, itemList: any){
    this.editItem = item;
    this.itemList = itemList;
  }
  addRoot(itemList: any){
    let id = Math.random().toString(36).substring(2)
    if(itemList.parent){
      itemList.parent.children.push({"id": id, "label": "Add Root", "data": "", expanded: true, "children": []});
    } else {
      this.items.push({"id": id, "label": "Add Root", "data": "", expanded: true, "children": []})
    }
  }

  removeItem(itemList: any) {
    let index = itemList.children.indexOf(itemList);
    if(itemList.parent){
      itemList?.parent.children.splice(index,1)
    } else {
      this.items?.splice(index,1)
    }
  }

  addChild(itemList: any){
    let id = Math.random().toString(36).substring(2)
    itemList?.children.push({"id": id, "label": "Add child", "data": "", expanded: true, "children": []});
  }

  mouseLeave() {
    this.editItem = '';
    this.firstKey = [];
  }

  editorKeyDown(e: any) {
    this.firstKey.push(e.keyCode);
    if(this.firstKey.length == 2) {
      switch (this.firstKey[0] + this.firstKey[1]) {
        case 17 + 13: // Add Root
          this.addRoot(this.itemList);
          console.log('control + Enter');
          break;
        case 17 + 81: // Add Sub Root
          this.addChild(this.itemList);
          console.log('control + Q');
          break;
        case 17 + 68: // Delete
          this.removeItem(this.itemList)
          console.log('control + D');
          break;
      }
    }
  }

}
