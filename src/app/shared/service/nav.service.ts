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
     { path: '/', title: 'Accueil',  type: 'extTabLink' },
     { path: '/page/contact', title: 'Contact',  type: 'extTabLink' },
     { path: '/page/formation', title: 'Formation',  type: 'extTabLink' },
   ]
  
  	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   
}
