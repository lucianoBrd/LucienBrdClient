import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Project } from 'src/app/shared/models/project.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

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
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private metaService: MetaService, private textService: TextService) {
    this.dataService.PAGE = '/project/' + LanguageService.getLanguageCodeOnly();
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.projects);
    this.metaService.setKeywords(this.language.projects);
    this.metaService.setDescription(this.language.projectsShortContent);

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
