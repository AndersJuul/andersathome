import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <img class="main-img" src="/media/a_skotland.jpg" />
	  <router-outlet></router-outlet>
	`,
})
export class AppComponent  { name = 'Angular ' + new Date().toLocaleTimeString(); }
