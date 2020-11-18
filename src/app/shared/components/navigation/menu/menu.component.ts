import { Component, OnInit } from '@angular/core';
import { Menu, NavService } from '../../../service/nav.service';
import { Router } from '@angular/router';
import { TextService } from 'src/app/shared/service/text.service';
import { Language } from 'src/app/shared/models/language.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuItems: Menu[];
  public openSide: boolean = false;
  public activeItem: string = 'home';
  public active: boolean = false;
  public activeChildItem: string = ''
  public overlay: boolean = false;
  public url: string = "";
  public mobile: boolean = false;
  public language: Language;

  constructor(public navServices: NavService, private router: Router, private textService: TextService) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.url = this.router.url;
    this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
    });
  }

  toggleSidebar() {
    this.openSide = !this.openSide
  }

  closeOverlay() {
    this.openSide = false
  }

  //For Active Main menu in Mobile View
  setActive(menuItem) {
    if (this.activeItem === menuItem) {
      this.activeItem = ''
    } else {
      this.activeItem = menuItem
    }
  }

  isActive(item) {
    return this.activeItem === item
  }

  // For Active Child Menu in Mobile View
  setChildActive(subMenu) {
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = ''
    } else {
      this.activeChildItem = subMenu
    }
  }

  ischildActive(subMenu) {
    return this.activeChildItem === subMenu
  }


}
