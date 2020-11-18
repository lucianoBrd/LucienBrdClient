import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Politic } from 'src/app/shared/models/politic.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-copyright',
  templateUrl: './agency-copyright.component.html',
  styleUrls: ['./agency-copyright.component.scss'],
  providers: [DataService]
})
export class AgencyCopyrightComponent implements OnInit, OnDestroy {
  public year: number = new Date().getFullYear();

  public politic: Politic;
  public documentPath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  public mdLoad: Boolean;

  constructor(private dataService: DataService, private modalService: NgbModal, private textService: TextService) {
    this.dataService.PAGE = '/politic/' + LanguageService.getLanguageCodeOnly();
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.mdLoad = true;
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.politic = data['politic'] as Politic;
      this.documentPath = data['documentPath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onReady() {
    this.mdLoad = false;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
