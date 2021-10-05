import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

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
  public editItem: any = null;
  public itemList: any = null;
  public firstKey: any = [];

  constructor() {}

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
    if(itemList.parent){
      let index = itemList.parent.children.indexOf(itemList);
      itemList?.parent.children.splice(index,1)
      console.log('hello 1');
    } else {
      console.log('hello 2');
      let index = this.items.indexOf(itemList);
      this.items?.splice(index,1)
    }
  }

  addChild(itemList: any){
    let id = Math.random().toString(36).substring(2)
    itemList?.children.push({"id": id, "label": "Add child", "data": "", expanded: true, "children": []});
  }

  mouseLeave() {
    setTimeout(() =>{
      this.editItem = '';
    },1000);
    this.firstKey = [];
  }

  editorKeyDown(e: any) {
    this.firstKey.push(e.keyCode);
    if(this.firstKey.length == 2) {
      switch (this.firstKey[0] + this.firstKey[1]) {
        case 17 + 13: // Add Root
          this.addRoot(this.itemList);
          this.firstKey = [];
          break;
        case 17 + 81: // Add Sub Root
          this.addChild(this.itemList);
          this.firstKey = [];
          break;
        case 17 + 68: // Delete
          this.removeItem(this.itemList)
          this.firstKey = [];
          break;
      }
    }
  }

}
