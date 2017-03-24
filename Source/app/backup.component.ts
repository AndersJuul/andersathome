import { Component } from '@angular/core';

@Component({
    selector: 'backup-component',
    template: `
    <div >
        <h2 class="well">Backup!</h2>

        <p>Siden jeg har fået børn har jeg som alle andre taget et stigende antal fotos. De senere år er det blevet til ca 6000 om året og antallet stiger. Billederne er mit kæreste eje og må for alt i verden ikke gå tabt.</p>
        
        <p>Jeg har derfor fået mig bevidste og gode vaner som jeg gerne vil dele. Det er hverken raket-videnskab eller noget som jeg har opfundet, men de principper som jeg følger er:</p>
        <ol>
            <li>Hav originalerne samlet eet sted og lav backups -- det sikreste sted er på din computer-harddisk eller NAS og du undgår forvirringen omkring hvilke usb-diske/dvd'er etc som indeholder din eneste kopi af børnefødselsdagen.</li>
            <li>Tag backup ofte -- den gyldne regel er at man skal tage backup så tit at man kan leve med at miste det som er blevet skabt eller ændret mellem to backups. For mit vedkommende er det ca en gang om måneden samt ekstra når der er taget mange billeder som feks efter en ferie.</li>
            <li>Hav flere backups -- jeg har fem usb-disks til backups, som jeg roterer således at jeg hele tiden tager backups på den ældste af dem som jeg har hjemme (se næste punkt)</li>
            <li>Spred dine backups -- jeg har til enhver tid mindst en backup liggende udenfor huset, hos kæresten, hos ekskonen eller på arbejde. Når det lige passer, bytter jeg den eksterne backup ud med en af de andre (nyere) backups og tager den gamle med hjem. Og fremfor alt: ALDRIG lade din backupdisk forblive tilsluttet computeren!</li>
            <li>Brug gerne I-drive, Google-drive, dropbox etc, men det kan ikke gøre det ud for backup. Hvis du sletter en fil lokalt er det sekundet efter slettet de andre steder. Dropxbox tager backup af det som du har liggende i skyen, så det kan genskabes, men det er ikke en strategi som jeg vil anbefale. Den gratis udgave tilbyder desuden langt mindre plads end jeg har brug for :)</li>
        </ol>

        <p>Jeg har en del gange oplevet, at venner og bekendte har mistet skattet indhold fra computere. Grundene er forskellige, men jeg forsøger at beskytte mig mod:
        </p>
            <ul>
                <li>Elektronik-nedbrud -- hvis din harddisk går helt i stykker er det faktisk nok med Dropbox etc</li>
                <li>Virus -- en af mine kolleger fik en afpresningsvirsus sin pc. Alle fotos og dokumenter blev krypteret og kun ved at betale kunne han få dem gjort læsbare igen. Selv hvis man betaler er der ingen sikkerhed for at man får sine filer tilbage... Min kollega havde heldigvis backup! Hvis en usbdisk havde været forbundet til pc'en da den blev angrebet, var backupfilerne formodentlig også blevet krypteret.</li>
                <li>Tyveri -- hvis der er indbrud i mit hus er computeren omtrent det eneste af værdi. Og så er det vigtigt at den eneste backup ikke ligger og frister lige ved siden af pcen.</li>
                <li></li>
            </ul>
    </div>
  `
})
export class BackupComponent {
}