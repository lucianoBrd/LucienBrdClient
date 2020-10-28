import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Social } from 'src/app/shared/models/social.interface';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-agency-footer',
  templateUrl: './agency-footer.component.html',
  styleUrls: ['./agency-footer.component.scss'],
  providers: [DataService]
})
export class AgencyFooterComponent implements OnInit, OnDestroy {

  public socials: Social[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {
    this.dataService.PAGE = '/social';
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.socials = data['socials'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
