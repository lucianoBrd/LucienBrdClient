import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoaderBisComponent } from './components/loader-bis/loader-bis.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent, LoaderComponent, LoaderBisComponent],
  exports: [
    MenuComponent,
    LoaderComponent,
    LoaderBisComponent,
    TapToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule { }
