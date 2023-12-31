import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
    @Input() progress: number = 0;
    @Input() showValue: boolean = true;
}
