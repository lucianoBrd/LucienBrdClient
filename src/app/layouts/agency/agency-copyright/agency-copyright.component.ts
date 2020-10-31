import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Politic } from 'src/app/shared/models/politic.interface';
import { DataService } from 'src/app/shared/service/data.service';

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

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private modalService: NgbModal) {
    this.dataService.PAGE = '/politic';
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.politic = data['politic'];
      this.documentPath = data['documentPath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'md' });
  }

}
