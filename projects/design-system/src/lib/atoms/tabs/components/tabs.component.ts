import { Component, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Tabs } from '../models/tabs.model';

@Component({
    selector: 'lib-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

    @Input() sections!: Tabs[];
    @Input() contents!: TemplateRef<any>;
    @Input() index: number = 0;
    indexValue: number = 0;
    
    ngOnChanges(changes: SimpleChanges) {
        if (changes['input']) {
            this.index = changes['input'].currentValue;
        }
    }
    ngOnInit() {

    }
}
