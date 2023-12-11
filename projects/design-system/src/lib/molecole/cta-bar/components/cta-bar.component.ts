import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-cta-bar',
    templateUrl: './cta-bar.component.html',
    styleUrls: ['./cta-bar.component.scss']
})
export class CtaBarComponent {
    @Input() isMain: boolean = false;

    constructor() { }
}
