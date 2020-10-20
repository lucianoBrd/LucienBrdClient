import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/layouts/agency/models/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    { 
      id: 1,
      img: "assets/images/event/ngy.png",
      title: "Sam Rowling",
      type: "site",
      date: "",
      url: "",
      git: "",
      content: ""
     },
     { 
      id: 2,
      img: "assets/images/event/l3-3.png",
      title: "Sam Rowling",
      type: "site",
      date: "",
      url: "",
      git: "",
      content: ""
     },
     { 
      id: 3,
      img: "assets/images/event/l3-4.png",
      title: "Sam Rowling",
      type: "site",
      date: "",
      url: "",
      git: "",
      content: ""
     },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
