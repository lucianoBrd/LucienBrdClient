import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private titleService: Title, private metaService: Meta) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Lucien Burdet | ' + newTitle);
  }

  public setDescription(newDesc: string) {
    this.metaService.updateTag(
      {
        name: 'description',
        content: newDesc
      }
    );
  }

}
