import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
   type?: string;
   icon?:string;
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

  constructor() {   }

  MENUITEMS: Menu[] = [
     { path: '/', title: 'Accueil',  type: 'link' },
     { path: '/page/projets', title: 'Projets',  type: 'link' },
     { path: '/page/contact', title: 'Contact',  type: 'link' },
     { path: '/page/formation', title: 'Formations',  type: 'link' },
     { path: '/page/cv', title: 'CV',  type: 'link' },
     { path: '/page/a-propos', title: 'à propos',  type: 'link' },
   ]
  
  	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   
}
