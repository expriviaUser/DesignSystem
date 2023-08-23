import { Component, EventEmitter, Input, Output, SimpleChanges, TemplateRef } from '@angular/core';
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
    @Output() indexChange: EventEmitter<number> = new EventEmitter<number>();
    indexValue: number = 0;
    indexNotShow: string = '';
    ngOnInit() {
        this.sections.forEach((item, index) => {
            if (item.hide)
                this.indexNotShow += ' not-show-' + index;
        })
    }

    changeIndex(event: any) {
        this.index = event.index;
        this.indexChange.emit(this.index);
    }
}
