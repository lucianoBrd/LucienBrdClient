import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    data: {
      title: "Lucien Burdet",
      content: "Lucien Burdet créateur de site internet pour les professionnels et particuliers."
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
