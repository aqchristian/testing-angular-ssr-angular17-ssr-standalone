import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('../features/landing-page/landing-page-routes').then(
        (m) => m.landingPageRoutes
      ),
  },
];
