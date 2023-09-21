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

    indexNotShow: string = '';

    @Output() indexChange: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
        let indexSelected = this.sections.findIndex(el => el.isSelected);
        this.sections.forEach((item, index) => {
            if (item.hide) {
                this.indexNotShow += ' not-show-' + index;
            }
            if (indexSelected < 0) {
                if (!(item.hide || item.isDisabled)) {
                    indexSelected = index;
                }
            }
        })
        this.changeIndex({ index: indexSelected });
    }

    changeIndex(event: any) {
        this.index = event.index >= 0 ? event.index : 0;
        this.indexChange.emit(this.index);
    }
}
