import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public language: Language;

  constructor(private metaService: MetaService, private textService: TextService) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.notFound);
    this.metaService.setDescription(this.language.notFoundDesc);
  }

}
