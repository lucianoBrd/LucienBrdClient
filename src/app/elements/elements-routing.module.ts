import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { FormationComponent } from './formation/formation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'a-propos',
        component: AboutComponent,
         data: {
          
        }
      },
      {
        path: 'blog',
        component: BlogComponent,
         data: {
          
        }
      },
      {
        path: 'blog/tag/:tag',
        component: BlogComponent,
         data: {
          
        }
      },
      {
        path: 'blog/:slug',
        component: PostComponent,
         data: {
          
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
         data: {
          
        }
      },
      {
        path: 'cv',
        component: CvComponent,
         data: {
          
        }
      },
      {
        path: 'projets',
        component: ProjectsComponent,
         data: {
          
        }
      },
      {
        path: 'formation',
        component: FormationComponent,
         data: {
          
        }
      },
      {
        path: '404',
        component: PageNotFoundComponent,
         data: {
          
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
