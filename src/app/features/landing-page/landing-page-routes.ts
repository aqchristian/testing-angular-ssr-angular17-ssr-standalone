import { Routes } from '@angular/router';

export const landingPageRoutes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./user-list/user-list.component').then(
        (m) => m.UserListComponent
      ),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./post-list/post-list.component').then(
        (m) => m.PostListComponent
      ),
  },
  {
    path: 'albums',
    loadComponent: () =>
      import('./album-list/album-list.component').then(
        (m) => m.AlbumListComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
];
