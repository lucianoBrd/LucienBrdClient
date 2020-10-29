import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('404');
    this.metaService.setDescription('a page que vous essayez d\'atteindre n\'est pasdisponible actuellement. Cela peut être dû au fait que la page n\'existe pas ou a été déplacée.');
  }

}
