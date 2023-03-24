import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export interface DropdownType {
    name: string;
    code: String
}


@Component({
    selector: 'lib-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DropdownComponent),
        multi: true
    }]
})
export class DropdownComponent implements OnInit {
    protected isObject: boolean = false;

    @Input() valueDropdown: DropdownType[] | string[] = [];
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() clear: boolean = false;
    @Input() control: AbstractControl = new FormControl();
    @Input() disabled: boolean = false;
    @Input() value: any;

    @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        this.isObject = typeof this.valueDropdown[0] !== "string";

    }

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
    }


    // upon UI element value change, this method gets triggered
    protected emitValue(event: any) {
        this.value = event.value;
        this.selectedValue.emit(this.value);
    }
}
