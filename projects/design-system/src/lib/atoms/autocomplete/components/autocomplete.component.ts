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
    @Input() valueAutocomplete: string[] = [];
    @Input() placeholder: string = '';
    @Input() value: any ;
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() disabled: boolean = false;
    @Input() showClear: boolean = false;
    @Input() minLength: number = 3;
    @Input() control: AbstractControl = new FormControl();

    @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();



    filteredList: any[] = [];

    // @Input('controlName') formControlName: string = '';
    // get control() {
    //     return this.controlContainer.control?.get(this.formControlName);
    // }

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
    }


    touched = false;

    onChange: any = () => { }
    onTouch: any = () => { }

    constructor() { }
    
    filter(event: any) {
        if (event.query.length > this.minLength-1) {
            let filtered: any[] = [];
            let query = event.query.toString();
            for (let i = 0; i < this.valueAutocomplete.length; i++) {
                let country = this.valueAutocomplete[i];
                if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                    filtered.push(country);
                }
            }
            this.filteredList = filtered;

        }

    }


    // this method sets the value programmatically
    writeValue(value: string) {
        this.value = value;
    }

    // set UI element value changes emit function
    registerOnChange(fn: any) {
        this.onChange = fn
    }

    // set touching element emit function
    registerOnTouched(fn: any) {
        this.onTouch = fn
    }

    // upon disabled statu change, this method gets triggered
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // upon UI element value change, this method gets triggered
    emitValue(event: any, type?: string) {
        console.log('auto', event)
      
            this.value = event;
            this.onChange(event);
            this.selectedValue.emit(event);
      
    }
 

}
