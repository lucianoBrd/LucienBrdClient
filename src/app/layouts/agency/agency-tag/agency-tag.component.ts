import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Tag } from 'src/app/shared/models/tag.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-tag',
  templateUrl: './agency-tag.component.html',
  styleUrls: ['./agency-tag.component.scss'],
  providers: [DataService]
})
export class AgencyTagComponent implements OnInit, OnDestroy {

  public tags: Tag[];
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private textService: TextService) {
    this.dataService.PAGE = '/tag';
    this.language = textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.tags = data['tags'] as Tag[];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
