import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'lib-pick-list',
    templateUrl: './pick-list.component.html',
    styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent {
    @Input() dragDrop: boolean = false;
    @Input() responsive: boolean = false;
    @Input() sourceLabel: string = '';
    @Input() targetLabel: string = '';
    @Input() filterBy: string = '';
    @Input() sourceFilterPlaceholder: string = '';
    @Input() targetFilterPlaceholder: string = '';
    @Input() template!: TemplateRef<any>;
    @Input() sourceArray: any[] = [];
    @Input() targetStyle!: any;
    @Input() sourceStyle!: any;
    @Input() targetArray: any[] = [];
    @Input() showSourceControl: boolean = false;
    @Input() showTargetControl: boolean = false;

    @Output() sourceArrayChange = new EventEmitter<any>();
    @Output() targetArrayChange = new EventEmitter<any>();


    moveAllTo(event: any, position: string) {
        console.log(event, position);
        console.log(this.targetArray, this.sourceArray);

    }

    moveOneTo(event: any, position: string) {
        console.log(event, position);
        console.log(this.targetArray, this.sourceArray);
    }
}
