import { Component, Input } from '@angular/core';
import { MenubarItem } from '../models/menu-item.model';

@Component({
    selector: 'lib-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
    constructor() { /* TODO document why this constructor is empty */ }

    @Input() informationflows: string = '';
    @Input() usermanagement: string = '';
    @Input() items!: MenubarItem[];

    ngOnDestroy() {
        // TODO document why this method 'ngOnDestroy' is empty    
    }

    ngOnInit() {
        // TODO document why this method 'ngOnInit' is empty
    }
}

