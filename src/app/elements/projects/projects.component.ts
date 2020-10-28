import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
