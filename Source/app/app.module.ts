import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { NavBarComponent } from './navbar.component'

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BackupComponent } from './backup.component';
import { LoginComponent } from './login.component';
import { ContactComponent } from './contact.component';
import { HobbyComponent } from './hobby.component';
import { AuthService } from './auth.service'
import { appRoutes } from './routes'
import { Routes } from '@angular/router'

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes), 
		HttpModule, 
		FormsModule 
		],
	declarations: [
		AppComponent, 
		NavBarComponent, 
		HomeComponent, 
		HobbyComponent,
		ContactComponent,
		BackupComponent, 
		LoginComponent
	],
	providers: [
		AuthService
	],
	bootstrap: [
		AppComponent
		]
})
export class AppModule {
}

