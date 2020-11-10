import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private titleService: Title, private metaService: Meta) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + ' | Lucien Burdet');
  }

  public setDescription(newDesc: string) {
    this.metaService.updateTag(
      {
        name: 'description',
        content: newDesc
      }
    );
  }

  public setKeywords(newKw: string) {
    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'lucien, burdet, createur de site internet, solutions web, lucien burdet,' + newKw
      }
    );
  }

}
