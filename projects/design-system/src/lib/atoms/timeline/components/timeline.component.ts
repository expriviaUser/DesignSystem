import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'lib-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
    @Input() events!: any;
    @Input() externalContent!: TemplateRef<any>;
    // header tabella
    @Input() externalOpposite!: TemplateRef<any>;
}
