import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <span class="col-md-2">
      <img  src="/media/a_skotland.jpg" />
    </span>
    <span class="col-md-6">
      <router-outlet></router-outlet>
    </span>
    
	  
	`,
})
export class AppComponent  { name = 'Angular ' + new Date().toLocaleTimeString(); }
