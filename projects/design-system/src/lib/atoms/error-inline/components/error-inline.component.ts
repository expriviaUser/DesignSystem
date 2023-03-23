import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'lib-error-inline',
    templateUrl: './error-inline.component.html',
    styleUrls: ['./error-inline.component.scss']
})
export class ErrorInlineComponent {
    @Input() control: AbstractControl = new FormControl();
    
    @Input('controlName') formControlName: string = '';

}
