import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Project } from 'src/app/shared/models/project.interface';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [DataService]
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public projects: Project[];
  public imagePath: String;
  public documentPath: String;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {
    this.dataService.PAGE = '/project';
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.projects = data['projects'];
      this.imagePath = data['imagePath'];
      this.documentPath = data['documentPath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
