import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
