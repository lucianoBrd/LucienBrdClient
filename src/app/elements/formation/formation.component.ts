import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Formation } from 'src/app/shared/models/formation.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  providers: [DataService]
})
export class FormationComponent implements OnInit, OnDestroy {

  public formations: Formation[];
  public imagePath: String;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private metaService: MetaService) {
    this.dataService.PAGE = '/education';
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Formations');
    this.metaService.setDescription('Les principales formations que j\'ai suivies durant ma vie sont résumée.');

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.formations = data['educations'];
      this.imagePath = data['imagePath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
