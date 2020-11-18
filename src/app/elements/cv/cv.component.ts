import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cv } from 'src/app/shared/models/cv.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  providers: [DataService]
})
export class CvComponent implements OnInit, OnDestroy {
  public mobile: boolean = false;
  public cv: Cv;
  public documentPath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private metaService: MetaService, private textService: TextService) {
    this.dataService.PAGE = '/cv/' + LanguageService.getLanguageCodeOnly();
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    /* Set title + meta */
    this.metaService.setTitle(this.language.cv);
    this.metaService.setKeywords(this.language.cv);
    this.metaService.setDescription(this.language.cvDesc);

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.cv = data['cv'] as Cv;
      this.documentPath = data['documentPath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
