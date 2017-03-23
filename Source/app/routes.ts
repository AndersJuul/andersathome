import { Routes } from '@angular/router'
import { HomeComponent } from './home.component';
import { BackupComponent } from './backup.component';
import { ContactComponent } from './contact.component';

export const appRoutes: Routes = [
	{ path: 'backup', component: BackupComponent, pathMatch: 'full' },
	{ path: 'kontakt', component: ContactComponent, pathMatch: 'full' },
	{ path: '', component: HomeComponent, pathMatch: 'full' }
]