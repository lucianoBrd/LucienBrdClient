import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LanguageService } from './shared/service/language.service';
import { ToastrModule } from 'ngx-toastr';
import { JsonDateInterceptorService } from './shared/service/jsonDateInterceptor.service';
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
    ToastrModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })

  ],
  providers: [
    LanguageService,
    { provide: LOCALE_ID, useValue: LanguageService.getLanguage() },
    {provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
