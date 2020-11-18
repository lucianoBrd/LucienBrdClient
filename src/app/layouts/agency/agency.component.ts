import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  public language: Language;
  
  constructor(private metaService: MetaService, private textService: TextService) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);
  }

}
