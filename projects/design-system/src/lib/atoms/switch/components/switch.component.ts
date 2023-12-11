import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'lib-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitchComponent),
        multi: true
    }]
})
export class SwitchComponent {
    @Input() label: string = '';
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() control: AbstractControl = new FormControl();

    @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    onToggle(event: any) {
        this.checkedChange.emit(this.checked);
    }

}
