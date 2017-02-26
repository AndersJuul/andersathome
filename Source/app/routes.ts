import { Routes } from '@angular/router'
import { FirstComponent } from './first.component';

export const appRoutes: Routes = [
	{ path: '', component: FirstComponent, pathMatch: 'full' }
]