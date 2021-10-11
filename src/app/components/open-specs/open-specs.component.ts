import { Component, OnInit } from '@angular/core';
import { TreeViewService } from "../../services/tree-view.service";

@Component({
  selector: 'app-open-specs',
  templateUrl: './open-specs.component.html',
  styleUrls: ['./open-specs.component.scss']
})
export class OpenSpecsComponent implements OnInit {
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
  selectedCountries: any[] | undefined;
  countries = [
    { name: "FileName_2030.docx", code: "AU" },
    { name: "FileName_2031.docx", code: "BR" },
    { name: "FileName_2032.docx", code: "CN" },
    { name: "FileName_2033.docx", code: "EG" },
    { name: "FileName_2034.docx", code: "FR" },
    { name: "FileName_2035.docx", code: "DE" },
    { name: "FileName_2036.docx", code: "IN" },
    { name: "FileName_2037.docx", code: "JP" },
    { name: "FileName_2038.docx", code: "ES" },
    { name: "FileName_2039.docx", code: "US" }
  ];
  constructor(public treeViewService: TreeViewService) { }

  ngOnInit(): void {
  }

}
