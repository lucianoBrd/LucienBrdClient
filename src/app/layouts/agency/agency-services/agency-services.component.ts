import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fadeInRight } from 'ng-animate';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Service } from 'src/app/shared/models/service.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-services',
  templateUrl: './agency-services.component.html',
  styleUrls: ['./agency-services.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])
  ],
  providers: [DataService]
})
export class AgencyServicesComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  fadeInRight: any;

  public result: Service;
  public language: Language;

  public services: Service[];
  public imagePath: String;
  public servicesTwo: Service[] = [];
  public servicesThree: Service[] = [];

  constructor(private modalService: NgbModal, private dataService: DataService, private textService: TextService) {
    this.dataService.PAGE = '/service';
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.services = data['services'] as Service[];
      this.imagePath = data['imagePath'];

      if (this.services && this.services.length == 6) {
        this.servicesTwo[0] = this.services[1];
        this.servicesTwo[1] = this.services[2];

        this.servicesThree[0] = this.services[3];
        this.servicesThree[1] = this.services[4];
        this.servicesThree[2] = this.services[5];
      } else {
        this.services = null;
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openVerticallyCentered(content, id: number) {
    this.result = this.services.find(x => x.id === id);

    this.modalService.open(content, { centered: true, size: 'md' });
  }

}
