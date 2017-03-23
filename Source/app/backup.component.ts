import { Component } from '@angular/core';

@Component({
    selector: 'backup-component',
    template: `
    <div class="container">
        <h2 class="well">Hjælp til backup</h2>
        <p>Jeg er efterhånden blevet {{getCurrentAge()}} år gammel og har  Jeg har en del gange oplevet, at venner og bekendte har mistet skattet indhold fra computere. Grundene er forskellige, men bl.a. tyveri, virus og nedbrud af hardware.</p>
        
    </div>
  `
})
export class BackupComponent {
    first = { content: 'Backup' };
    color = 'red';
    getCurrentAge = function(){
        return new Date().getFullYear()-1969;
    }
}