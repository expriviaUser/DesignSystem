import { Component, Input } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item.model';

@Component({
    selector: 'lib-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    @Input() items: SidebarItem[] = [];

        

}
