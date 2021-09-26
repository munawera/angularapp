import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-use-case',
  templateUrl: './new-use-case.component.html',
  styleUrls: ['./new-use-case.component.scss']
})
export class NewUseCaseComponent implements OnInit {

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

  products= [
    {
      case_ID: 1,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 2,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 3,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 4,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 5,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 6,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 7,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 8,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
    {
      case_ID: 9,
      case_Title: 'Example 321',
      created_By: 'Mohammad Ali',
      creation_date: '12/09/2020',
    },
  ];
  
  flows= [
    {
      flow_ID: 1,
      normal_ID: 999
    },
    {
      flow_ID: 2,
      normal_ID: 999
    },
    {
      flow_ID: 3,
      normal_ID: 999
    },
  ]
  
  activeIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
