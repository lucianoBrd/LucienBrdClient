import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Education } from 'src/app/shared/models/education.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [DataService]
})
export class EducationComponent implements OnInit, OnDestroy {

  public educations: Education[];
  public imagePath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private metaService: MetaService, private textService: TextService) {
    this.dataService.PAGE = '/education/' + LanguageService.getLanguageCodeOnly();
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.education);
    this.metaService.setKeywords(this.language.education);
    this.metaService.setDescription(this.language.educationDesc);

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.educations = data['educations'] as Education[];
      this.imagePath = data['imagePath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
