import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeViewService {
  public items = [
    {
      "id": "7340",
      "label": "Documents",
      "data": "Documents Folder",
      expanded: true,
      "children": [
        {
          "id": "7341",
          "label": "Work",
          "data": "Work Folder",
          expanded: true,
          "children": [
            {"id": "7011", "label": "Expenses", "data": "Expenses Document", expanded: true, "children": []}]
        },
      ]
    }
  ];
  public editItem: any = null;
  public itemList: any = null;
  public itemSelect: any = false;
  public isSelect: any = false;
  // public isShowFull: any = true;
  public isShowId: any = false;
  public isAutoFill: any = true;
  public isSaveSpecs: any = true;
  public displayModal: boolean = false;
  public displayOpenModal: boolean = false;


  constructor() { }


  showDialog() {
    this.displayModal = true;
  }

  openProject() {
    this.displayOpenModal = true;
  }

  saveSpecs() {
    this.isSaveSpecs = false
  }
  saveSpecsClose(){
    this.isSaveSpecs = true
  }
  selectItem(itemList: any){
    this.isSelect = true;
    this.itemList = itemList;
    this.itemSelect = true;
  }
  showEditor(item: any, itemList: any){
    this.editItem = item;
    // this.itemList = itemList;
  }

  controlEnter() {
    this.editItem = ''
    this.isAutoFill = true;
  }

  addRoot(itemList: any){
    itemList = this.itemList;
    let id = String(Math.floor(1000 + Math.random() * 9000));
    if(itemList.parent){
      itemList.parent.children.push({"id": id, "label": "Add Root", "data": "", expanded: true, "children": []});
    } else {
      this.items.push({"id": id, "label": "Add Root", "data": "", expanded: true, "children": []})
    }
  }
  addChild(itemList: any){
    itemList = this.itemList;
    let id = String(Math.floor(1000 + Math.random() * 9000));
    itemList?.children.push({"id": id, "label": "Add child", "data": "", expanded: true, "children": []});
  }
  removeItem(itemList: any) {
    itemList = this.itemList;
    if(itemList.parent){
      let index = itemList.parent.children.indexOf(itemList);
      itemList?.parent.children.splice(index,1)
    } else {
      let index = this.items.indexOf(itemList);
      this.items?.splice(index,1)
    }
  }
  openAutoFillCase() {
    this.isAutoFill = false;
  }
  closeAutoFill() {
    this.editItem = ''
    this.isAutoFill = true;
  }
  onClickedOutsideTree(e: Event){
    console.log(e)
    this.editItem = ''
    this.itemSelect = false;
    this.itemList = [];
  }
}
