import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { Project } from 'src/app/shared/models/project.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: 'app-agency-projects',
  templateUrl: './agency-projects.component.html',
  styleUrls: ['./agency-projects.component.scss'],
  providers: [DataService]
})
export class AgencyProjectsComponent implements OnInit, OnDestroy  {

  public projects: Project[];
  public imagePath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private textService: TextService) {
    this.dataService.PAGE = '/project/random/' + LanguageService.getLanguageCodeOnly();
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.projects = data['projects'] as Project[];
      this.imagePath = data['imagePath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  projectCarouselOptions = {
    items: 3,
    margin: 55,
    nav: false,
    dots: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      360: {
        items: 2,
        margin: 10
      },
      480: {
        items: 3,
        margin: 10
      },
      767: {
        items: 2,
        margin: 10
      },
      991: {
        items: 3,
        margin: 10
      }
    }
  }

}
