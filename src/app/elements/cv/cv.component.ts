import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cv } from 'src/app/shared/models/cv.interface';
import { DataService } from 'src/app/shared/service/data.service';

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

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {
    this.dataService.PAGE = '/cv';
  }

  ngOnInit() {
    this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.cv = data['cv'];
      this.documentPath = data['documentPath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
