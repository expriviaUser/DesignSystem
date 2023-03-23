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
export class DropdownComponent {

    @Input() valueDropdown: DropdownType[] | string[] = [];
    get valueDropdownCustom(): DropdownType[] {
        
            let dropdowns: DropdownType[] = [];
            this.valueDropdown.forEach(item => {
                if (typeof item == "string") {
                    dropdowns.push({ code: item, name: item });
                } else {
                    dropdowns.push(item);
                }
            })
            return dropdowns;
      
    }
    @Input() label!: string;
    @Input() placeholder!: string;
    // @Input('controlName') formControlName: string = '';
    @Input() clear: boolean = false;
    @Input() control: AbstractControl = new FormControl();

    @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

    @Input() value: any;

    disabled: boolean = false;
    onChange: any = () => { }
    onTouch: any = () => { }


    // get control() {
    //     return this.controlContainer.control?.get(this.formControlName);
    // }

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
    }

    /*constructor(private controlContainer: ControlContainer) { }
    // ngOnChanges() {
    //     this.checkIsString()
    // } */

    checkIsString(): boolean {
        return (
            this.valueDropdown && this.valueDropdown.some((item) => typeof item == "string")
        );
    }

    // this method sets the value programmatically
    writeValue(value: string) {
        this.value = value;
    }

    // set UI element value changes emit function
    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    // set touching element emit function
    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    // upon disabled statu change, this method gets triggered
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // upon UI element value change, this method gets triggered
    emitValue(event: any) {
        this.value = event;
        this.onChange(event);
        this.selectedValue.emit(event);
        console.log('val', this.value)
    }

    // upon UI element value change, this method gets triggered
    emitValueNg(event: any) {
        this.value = event;
        this.onChange(event);

    }
}
