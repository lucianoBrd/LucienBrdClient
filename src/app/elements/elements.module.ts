import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { ElementsComponent } from './elements.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { LayoutsModule } from '../layouts/layouts.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { SecurityContext } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { SidebarComponent } from './blog/sidebar/sidebar.component';
import { PostComponent } from './blog/post/post.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    ElementsComponent, 
    AboutComponent, 
    BlogComponent, 
    ContactComponent, 
    CvComponent, 
    EducationComponent, 
    SidebarComponent, 
    PostComponent, 
    PageNotFoundComponent, 
    ProjectsComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    CountToModule,
    LayoutsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxMasonryModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),
  ]
})
export class ElementsModule { }
