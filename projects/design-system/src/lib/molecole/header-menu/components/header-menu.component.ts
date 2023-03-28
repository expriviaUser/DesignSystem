import { Component, Input } from '@angular/core';
import { MenubarItem } from '../models/menu-item.model';

@Component({
    selector: 'lib-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
    constructor() { }

    @Input() informationflows: string = '';
    @Input() usermanagement: string = '';
    @Input() items!: MenubarItem[];

    /* control = new FormControl();
    form = this.fb.group({
        drop: ['Ufficio']
    }) */

    //dropdownValue: string[] = ['Ufficio', 'ENI \\ ENISERVIZI \\ PRE \\ AD \\ SEBI \\ ATED', 'ENI \\ CARTELLE_PERSONALE', 'ENI \\ ENI CORPORATE', 'ENI \\ ING E&P RAV', 'ENI \\ ORTONA', 'ENI \\ VIGGIANO'];

    ngOnDestroy() {
    }
    ngOnInit() {
    }
}

