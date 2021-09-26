import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-selected-sp-right',
  templateUrl: './review-selected-sp-right.component.html',
  styleUrls: ['./review-selected-sp-right.component.scss']
})
export class ReviewSelectedSpRightComponent implements OnInit {

  products:any = [
    {
      "id": "1000",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }, {
      "id": "1001",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }, {
      "id": "1002",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }, {
      "id": "1003",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
