import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    ElementsModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
