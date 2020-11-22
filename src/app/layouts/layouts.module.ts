import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { AngularTiltModule } from 'angular-tilt';
import 'hammerjs';
import 'mousetrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SharedModule } from '../shared/shared.module';
import { AgencyBlogComponent } from './agency/agency-blog/agency-blog.component';
import { AgencyContentComponent } from './agency/agency-content/agency-content.component';
import { AgencyCopyrightComponent } from './agency/agency-copyright/agency-copyright.component';
import { AgencyCounterComponent } from './agency/agency-counter/agency-counter.component';
import { AgencyFooterComponent } from './agency/agency-footer/agency-footer.component';
import { AgencyHeaderComponent } from './agency/agency-header/agency-header.component';
import { AgencyNavComponent } from './agency/agency-nav/agency-nav.component';
import { AgencyPricingComponent } from './agency/agency-pricing/agency-pricing.component';
import { AgencyServicesComponent } from './agency/agency-services/agency-services.component';
import { AgencyProjectsComponent } from './agency/agency-projects/agency-projects.component';
import { AgencyTestimonialComponent } from './agency/agency-testimonial/agency-testimonial.component';
import { AgencyVideoComponent } from './agency/agency-video/agency-video.component';
// Agency Layout
import { AgencyComponent } from './agency/agency.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgencyTagComponent } from './agency/agency-tag/agency-tag.component';
import { FormsModule } from '@angular/forms';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    AgencyComponent, AgencyNavComponent, AgencyHeaderComponent, AgencyContentComponent, AgencyServicesComponent, AgencyVideoComponent, AgencyCounterComponent, AgencyPricingComponent, AgencyProjectsComponent, AgencyTestimonialComponent, AgencyBlogComponent, AgencyFooterComponent, AgencyTagComponent, AgencyCopyrightComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    HttpClientModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    Ng5SliderModule,
    NgxMasonryModule,
    FormsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),
  ],

  exports: [
    AgencyNavComponent,
    AgencyFooterComponent,
    AgencyCopyrightComponent
  ],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
