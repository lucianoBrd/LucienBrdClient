import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact',
        component: ContactComponent,
         data: {
          
        }
      }, 
      {
        path: 'formation',
        component: FormationComponent,
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
