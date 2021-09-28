import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  treeDate = [
    {
      "id": "7340",
      "label": "Documents",
      "data": "Documents Folder",
      expanded: true,
      "children": [
        {
        "label": "Work",
        "data": "Work Folder",
          expanded: true,
        "children": [{"label": "Expenses.doc", "icon": "", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "", "data": "Resume Document"}]
        },
        {
          "label": "Home",
          "data": "Home Folder",
          "children": [{"label": "Invoices.txt", "icon": "", "data": "Invoices for this month"}]
        }]
    },
    {
      "id": "7341",
      "label": "Pictures",
      "data": "Pictures Folder",
      expanded: true,
      "children": [
        {"label": "barcelona.jpg", "icon": "", "data": "Barcelona Photo"},
        {"label": "logo.jpg", "icon": "", "data": "PrimeFaces Logo"},
        {"label": "primeui.png", "icon": "", "data": "PrimeUI Logo"}]
    },
    {
      "id": "7342",
      "label": "Components",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7343",
      "label": "Modals",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7344",
      "label": "Widgets",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7345",
      "label": "Angular",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7346",
      "label": "React Native",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7347",
      "label": "Flutter",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7348",
      "label": "Node Js",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    },
    {
      "id": "7349",
      "label": "MongoDb",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{"label": "Scarface", "icon": "", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "", "data": "Serpico Movie"}]
      },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{"label": "Goodfellas", "icon": "", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "", "data": "Untouchables Movie"}]
        }]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
