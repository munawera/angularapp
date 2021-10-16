import { Component, OnInit } from '@angular/core';
import { TreeViewService } from "../../services/tree-view.service";

@Component({
  selector: 'app-open-project',
  templateUrl: './open-project.component.html',
  styleUrls: ['./open-project.component.scss']
})
export class OpenProjectComponent implements OnInit {
  review = [
    {
      id: 654,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 655,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 656,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 657,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 658,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 654,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 655,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 656,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 657,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },
    {
      id: 658,
      title: "Test review",
      description: "User name and password",
      category: 'Aenean vehicula sem eu nunc faucibus.',
      created: '12/04/2021',
      created_by: 'Abu Baker'
    },

  ];
  constructor(public treeViewService: TreeViewService) { }

  ngOnInit(): void {
  }

}
