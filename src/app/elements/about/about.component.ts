import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService]
})
export class AboutComponent implements OnInit, OnDestroy {
  public age: number = this.ageFromDateOfBirthday('08/06/1999');
  public socials: Social[] = [];
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private metaService: MetaService, private textService: TextService) {
    this.dataService.PAGE = '/social';
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.about);
    this.metaService.setKeywords(this.language.about);
    this.metaService.setDescription(this.language.aboutPara[0]);

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.socials = data['socials'] as Social[];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
