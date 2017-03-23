import { Component } from '@angular/core';

@Component({
    selector: 'contact-component',
    template: `
    <div class="container">
        <h2 class="well">Kontakt</h2>
        
        <p>Anders Juul<br>
        Jegstrupvænget 269<br>
        8310 Tranbjerg</p>

        <p>Tel: 2880 1753</p>
        <p>Email: <a href="mailto:andersjuulsfirma@gmail.com">andersjuulsfirma@gmail.com</a>
        <p>Fb :  <a href="https://www.facebook.com/juul.anders" _target="_blank">https://www.facebook.com/juul.anders</a>

    </div>
  `
})
export class ContactComponent {
}