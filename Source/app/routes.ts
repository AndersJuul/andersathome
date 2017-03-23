import { Routes } from '@angular/router'
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

export const appRoutes: Routes = [
	{ path: 'events', component: SecondComponent, pathMatch: 'full' },
	{ path: '', component: FirstComponent, pathMatch: 'full' }
]