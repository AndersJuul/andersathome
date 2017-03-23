import { Routes } from '@angular/router'
import { HomeComponent } from './home.component';
import { BackupComponent } from './backup.component';
import { ContactComponent } from './contact.component';
import { HobbyComponent } from './hobby.component';

export const appRoutes: Routes = [
	{ path: 'backup', component: BackupComponent, pathMatch: 'full' },
	{ path: 'kontakt', component: ContactComponent, pathMatch: 'full' },
	{ path: 'hobby', component: HobbyComponent, pathMatch: 'full' },
	{ path: '', component: HomeComponent, pathMatch: 'full' }
]