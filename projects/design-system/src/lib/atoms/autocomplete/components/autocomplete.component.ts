import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterService } from "primeng/api";

@Component({
    selector: 'lib-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutocompleteComponent),
        multi: true
    }, FilterService]
})
export class AutocompleteComponent {
    @Input() valueAutocomplete: string[] | any[] = [];
    @Input() placeholder: string = '';
    @Input() value: any;
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() disabled: boolean = false;
    @Input() showClear: boolean = false;
    @Input() minLength: number = 3;
    @Input() control: AbstractControl = new FormControl();
    @Input() field: string = '';

    @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();

    private onChange: any = () => { }
    private onTouch: any = () => { }
    protected filteredList: any[] = [];

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
    }

    constructor() { }

    protected filter(event: any) {
        if (event.query.length > this.minLength - 1) {
            let filtered: any[] = [];
            let query = event.query.toString();
            for (let i = 0; i < this.valueAutocomplete.length; i++) {
                let value = this.valueAutocomplete[i];
                if (!this.field && typeof value === 'string') {
                    if (value.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                        filtered.push(value);
                    }
                } else {
                    if (value[this.field].toLowerCase().indexOf(query.toLowerCase()) == 0) {
                        filtered.push(value);
                    }
                }
            }
            this.filteredList = filtered;
        }
    }

    // this method sets the value programmatically
    protected writeValue(value: string) {
        this.value = value;
    }

    // set UI element value changes emit function
    protected registerOnChange(fn: any) {
        this.onChange = fn
    }

    // set touching element emit function
    protected registerOnTouched(fn: any) {
        this.onTouch = fn
    }

    // upon disabled statu change, this method gets triggered
    protected setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // upon UI element value change, this method gets triggered
    protected emitValue(event: any, type?: string) {
        this.value = event;
        this.onChange(event);
        this.selectedValue.emit(event);
    }

    protected emitValueIfExist(event: any) {
        if (!this.field) {
            if (this.valueAutocomplete.includes(event.target.value)) {
                this.value = event.target.value;
                this.control.setErrors(null);
                this.onChange(event.target.value);
                this.selectedValue.emit(event.target.value);
            }
            else if (this.value) {
                this.onChange("");
                this.selectedValue.emit("");
                this.control.setErrors({ 'incorrect': true });
                this.control.markAsTouched();
            }
        } else {
            if (this.valueAutocomplete.filter(item => item[this.field] == event.target.value).length > 0) {
                this.value = this.valueAutocomplete.filter(item => item[this.field] == event.target.value)[0];
                this.control.setErrors(null);
                this.onChange(this.value);
                this.selectedValue.emit(this.value);
            }
            else if (this.value) {
                this.onChange("");
                this.selectedValue.emit("");
                this.control.setErrors({ 'incorrect': true });
                this.control.markAsTouched();
            }
        }
    }

}
