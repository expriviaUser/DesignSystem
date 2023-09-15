import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-circle-status',
    templateUrl: './circle-status.component.html',
    styleUrls: ['./circle-status.component.scss']
})
export class CircleStatusComponent {
    @Input() type: string = 'success';
}
