import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'lib-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

    @Input() removable: boolean = false;
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() image: string = '';
    @Input() style: any;
    @Input() styleClass: string = '';
    @Input() removeIcon: string = "pi pi-times-circle";

    @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();

    onRemoveEmit(event: any): void {
        this.onRemove.emit(event);
    }
}
