import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CookieLawModule } from 'angular2-cookie-law';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MarkdownModule } from 'ngx-markdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

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
    FormsModule,
    ScrollToModule,
    SharedModule,
    ElementsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    CookieLawModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })

  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
