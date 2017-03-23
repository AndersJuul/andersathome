import { Component } from '@angular/core';

@Component({
    selector: 'backup-component',
    template: `
    <div class="container">
        <h2 class="well">Hjælp til backup</h2>
        <p>Jeg har en del gange oplevet, at venner og bekendte har mistet skattet indhold fra computere. Grundene er forskellige, men bl.a. tyveri, virus og nedbrud af hardware.
        Nogle af dem har været amatører mens andre har arbejdet professionelt med computere i en eller anden form.</p>

        <p>Siden jeg har fået børn har jeg som alle andre taget et stigende antal fotos. De senere år er det blevet til ca 6000 om året og antallet stiger. Billederne er mit kæreste eje og må for alt i verden ikke gå tabt.</p>
        
        <p>Jeg har derfor fået mig bevidste og gode vaner som jeg gerne vil dele med jer. Det er bestemt ikke raket-videnskab og jeg har ikke opfundet det hele.</p>
        <ol>
            <li>Tag backup ofte</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ol>
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