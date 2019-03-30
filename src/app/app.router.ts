import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component'

export const appRoutes: Routes = [
	{ 
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent,
		data: { title: 'Home' }
	},
	{
		path: 'about',
		component: AboutComponent,
		data: { title: 'About' }
	},
	{ path: '**', component: HomeComponent }
];