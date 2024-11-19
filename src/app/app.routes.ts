import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',  redirectTo: 'auth/sign-in', pathMatch: 'full' },
	{
		path: 'auth',		
		loadComponent: () => import('./pages/auth/layout/layout.component').then((x) => x.LayoutComponent),
		loadChildren: () =>
			import('./pages/pages.routes').then((x) => x.pagesRoutes)
	},
	{
		path: 'pages',
		loadComponent: () => import('./pages/home/layout/layout.component').then((x) => x.LayoutComponent),
		loadChildren: () =>
		  import('./pages/pages.routes').then((x) => x.pagesRoutes)
	},
];
