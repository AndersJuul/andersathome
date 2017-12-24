import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    template: `
    <span >
        <h2 class="well">Velkommen...</h2>
        
        <p>Dette site er lavet til hobby-projekter, typisk teknik-afprøvning og gateway til iot i mit og pigernes hjem.</p>
        
        <p>For tiden leger jeg med TeamCity, Octopus Deploy, Angular2/TypeScript, RabbitMq, REST APIs, IdentityServer3/OIDC og Micro Service, primært gennem s gennem 
        hobbyprojektet <a href="https://andersathome.dk/RideShare" target="_blank">RideShare</a>.</p>
        
        <p>Hjemmets maskiner er blevet samlet under Hyper-V på en enkelt Server 2016. Det hygges der med når børnene er kommet i seng :).</p>

        <p>For et kig på mit professionelle liv, kig over på <a href="http://andersjuulsfirma.dk/" target="_blank">http://andersjuulsfirma.dk</a></p>
    </span>
  `
})
export class HomeComponent {
    first = { content: 'First' };
    color = 'green';
}