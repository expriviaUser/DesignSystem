import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'lib-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})

export class CardComponent {
    @Input() cHeader: string = '';
    @Input() cSubHeader: string = '';
    @Input() cStyle: string = '';
    @Input() cStyleClass: string = '';

    @Output() cardTileSelectedEmit: EventEmitter<any> = new EventEmitter<any>();

    emitClick(event: any): void {
        this.cardTileSelectedEmit.emit(event);
    }
}
