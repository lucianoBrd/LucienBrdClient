import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/language.interface';
import { TextService } from './text.service';

// Menu
export interface Menu {
   path?: string;
   title?: string;
   type?: string;
   icon?: string;
   badgeType?: string;
   badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
   bookmark?: boolean;
   children?: Menu[];
}

@Injectable({
   providedIn: 'root'
})
export class NavService {
   public language: Language;
   public MENUITEMS: Menu[];
   public items;

   constructor(private textService: TextService) {
      this.language = textService.getTextByLocal();
      this.MENUITEMS = [
         { path: '/', title: this.language.home, type: 'link' },
         { path: '/projets', title: this.language.projects, type: 'link' },
         { path: '/blog', title: this.language.blog, type: 'link' },
         { path: '/contact', title: this.language.contact, type: 'link' },
         { path: '/formation', title: this.language.education, type: 'link' },
         { path: '/cv', title: this.language.cv, type: 'link' },
         { path: '/a-propos', title: this.language.about, type: 'link' },
      ];

      // Array
      this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   }

}
