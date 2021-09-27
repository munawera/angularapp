import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise-library',
  templateUrl: './enterprise-library.component.html',
  styleUrls: ['./enterprise-library.component.scss']
})
export class EnterpriseLibraryComponent implements OnInit {

  library = [
    {
      id: 1,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 2,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 3,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 4,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 5,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 6,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 7,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 8,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 9,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 10,
      specification_title: "Enterprise Library",
      description: "User name and password",
      category: 'Abc',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
