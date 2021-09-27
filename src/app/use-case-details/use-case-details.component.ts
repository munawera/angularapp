import { Component, OnInit } from '@angular/core';

interface dropDown {
  name: string,
  code: string
}

@Component({
  selector: 'app-usecasedetails',
  templateUrl: './use-case-details.component.html',
  styleUrls: ['./use-case-details.component.scss']
})

export class UseCaseDetailsComponent implements OnInit {

  priority: dropDown[];
  frequency: dropDown[];

  selectedVal: dropDown | undefined;
  selectedVal1: dropDown | undefined;
  activeIndex: number = 0;

  caseflow = [
    {
      id: 1,
      case: 'User enter thier user name and password',
      type: 'Pre Condition',
    },
    {
      id: 2,
      case: 'User access the dashboard',
      type: 'Pre Condition',
    },
    {
      id: 3,
      case: 'User enter thier user name and password',
      type: 'Pre Condition',
    },
    {
      id: 4,
      case: 'User access the dashboard',
      type: 'Pre Condition',
    },
  ];

  normalflow = [
    {
      id: 1,
      case: 'User enter thier user name and password',
    },
    {
      id: 2,
      case: 'User access the dashboard',
    },
    {
      id: 3,
      case: 'User enter thier user name and password',
    },
    {
      id: 4,
      case: 'User access the dashboard',
    },
  ]

  constructor() {
    this.priority = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.frequency = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

  }

  ngOnInit(): void {
  }

}
