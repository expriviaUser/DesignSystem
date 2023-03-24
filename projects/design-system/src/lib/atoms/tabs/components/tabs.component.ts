import { Component, Input, TemplateRef } from '@angular/core';
import { Tabs } from '../models/tabs.model';

@Component({
    selector: 'lib-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

    @Input() sections!: Tabs[];
    @Input() contents!: TemplateRef<any>;

    ngOnInit() {

    }
}
