import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Project } from 'src/app/shared/models/project.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { MetaService } from 'src/app/shared/service/meta.service';

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

  constructor(private dataService: DataService, private metaService: MetaService) {
    this.dataService.PAGE = '/project';
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Projets');
    this.metaService.setKeywords('projets');
    this.metaService.setDescription('Les projets m\'ont beaucoup apporté : savoir, analyse, autonomie...');

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.projects = data['projects'] as Project[];
      this.imagePath = data['imagePath'];
      this.documentPath = data['documentPath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
