import { Component, Input } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item.model';

@Component({
    selector: 'lib-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    @Input() items: SidebarItem[] = [{ "label": "Tipologia documento" }, { "label": "Impostazioni" }, { "label": "Titolario" }, { "label": "Flusso" }, { "label": "Anagrafiche società", "items": [{ "label": "Società", "routerLink": "/configurazione-di-base/societa" }, { "label": "Profilo di contratto" }, { "label": "Contratti" }, { "label": "Profili utente " }, { "label": "Centro di costo" }] }, { "label": "Mista", "items": [{ "label": "Interfacce" }] }, { "label": "Anagrafiche impianti", "items": [{ "label": "Impianto" }, { "label": "Tipologia impianto" }, { "label": "DPI" }, { "label": "Varchi" }, { "label": "Associazioni" }] }, { "label": "Operatori" }, { "label": "Supporto utente" }, { "label": "Fatturazione", "items": [{ "label": "Gestori" }, { "label": "Fornitori" }, { "label": "Servizi a richiesta" }, { "label": "Materiali d'uso" }, { "label": "Listini SAP" }, { "label": "Listini GD" }] }, { "label": "Tipologia documento" }];



}
