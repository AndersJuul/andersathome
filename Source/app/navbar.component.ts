import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
	selector: 'nav-bar',
	templateUrl: "/app/navbar.component.html",
	styles: [`
		.nav.navbar-nav {font-size: 15px;}
		#searchForm  {margin-right: 100px;}
		li > a.active { color: #F97924;}
	`]
})
export class NavBarComponent {
	constructor(private authService: AuthService){
		
	}
}