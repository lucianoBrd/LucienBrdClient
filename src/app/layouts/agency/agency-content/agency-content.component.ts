import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';
@Component({
  selector: 'app-agency-content',
  templateUrl: './agency-content.component.html',
  styleUrls: ['./agency-content.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 3, delay: 0 }
    }))])]
})
export class AgencyContentComponent implements OnInit {
  public language: Language;
  fadeInLeft: any;

  constructor(private textService: TextService) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
  }

}
