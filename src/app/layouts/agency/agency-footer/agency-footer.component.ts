import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-footer',
  templateUrl: './agency-footer.component.html',
  styleUrls: ['./agency-footer.component.scss'],
  providers: [DataService]
})
export class AgencyFooterComponent implements OnInit, OnDestroy {

  public socials: Social[] = [];
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private textService: TextService) {
    this.dataService.PAGE = '/social';
    this.language = textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.socials = data['socials'] as Social[];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
