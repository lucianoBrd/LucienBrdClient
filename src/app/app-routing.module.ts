import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './layouts/agency/agency.component';
import { ElementsComponent } from './elements/elements.component';
export const routes: Routes = [
  {
    path: '',
    component: AgencyComponent
  },
  {
    path: 'page',
    component: ElementsComponent,
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule),
    data: {

    }
  },
  {
    path: '**',
    redirectTo: '/page/404',
    pathMatch: 'full',
  },
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
