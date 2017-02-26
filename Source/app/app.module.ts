import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { NavBarComponent } from './navbar.component'

import { appRoutes } from './routes'
import { Routes } from '@angular/router'

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule ],
	declarations: [
		AppComponent, NavBarComponent, FirstComponent
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

