import { Component } from '@angular/core';

@Component({
    selector: 'my-firstcomponent',
    template: `
    <p class="well">{{first.content}}</p>
    <h2 class="icon-search" [innerText]="first.content"></h2>
    <h1 [style.color]="color">{{first.content}}</h1>
  `
})
export class FirstComponent {
    first = { content: 'First' };
    color = 'green';
}