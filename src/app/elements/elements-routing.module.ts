import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
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
        path: 'contact',
        component: ContactComponent,
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
