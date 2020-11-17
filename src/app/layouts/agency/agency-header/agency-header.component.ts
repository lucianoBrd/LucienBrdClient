import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-header',
  templateUrl: './agency-header.component.html',
  styleUrls: ['./agency-header.component.scss']
})
export class AgencyHeaderComponent implements OnInit {
  public language: Language;

  constructor(private textService: TextService) {
    this.language = textService.getTextByLocal();
  }

  ngOnInit() {
  }

}
