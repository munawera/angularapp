import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-home-sp-left',
  templateUrl: './review-home-sp-left.component.html',
  styleUrls: ['./review-home-sp-left.component.scss']
})
export class ReviewHomeSpLeftComponent implements OnInit {

  products:any = [
    {
      "id": "1000",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    }, {
      "id": "1001",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    }, {
      "id": "1002",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    }, {
      "id": "1003",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    }];
  products2:any = [
    {
      "id": "1000",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1001",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1002",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1003",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1004",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1005",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1006",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1007",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1008",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },
    {
      "id": "1009",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    },{
      "id": "1010",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR",
      "priority": "High",
      "created-by": "Muhammad Ali"
    }
    ];
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
