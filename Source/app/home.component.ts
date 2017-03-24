import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    template: `
    <span >
        <h2 class="well">Velkommen...</h2>
        <p>Dette site er lavet til hobby-projekter, typisk teknik-afprøvning og gateway til iot i mit og pigernes hjem.</p>
        <p>For tiden leger jeg med TeamCity, Octopus Deploy og Angular2/TypeScript. For en gammel backend'er som mig er der nok at sætte sig ind i :).</p>
        <p>For et kig på mit professionelle liv, kig over på <a href="http://andersjuulsfirma.dk/" target="_blank">http://andersjuulsfirma.dk</a></p>
    </span>
  `
})
export class HomeComponent {
    first = { content: 'First' };
    color = 'green';
}