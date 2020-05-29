import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './layouts/agency/agency.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'agency',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AgencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
