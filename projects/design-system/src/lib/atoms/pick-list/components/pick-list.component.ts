import { Component, Input, TemplateRef } from '@angular/core';

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
    @Input() targetArray: any[] = [];
    @Input() showSourceControl: boolean = false;
    @Input() showTargetControl: boolean = false;

}
