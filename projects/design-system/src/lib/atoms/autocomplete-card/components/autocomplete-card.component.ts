import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterService } from "primeng/api";
import { RadioTile } from '../../../molecole/radio-tile/models/radio-tile.model';
import { LibAddress } from '../../address/models/address.model';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
    selector: 'lib-autocomplete-card',
    templateUrl: './autocomplete-card.component.html',
    styleUrls: ['./autocomplete-card.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutocompleteCardComponent),
        multi: true
    }, FilterService]
})
export class AutocompleteCardComponent implements OnChanges {
    @Input() valueAutocomplete: any[] = [];
    @Input() placeholder: string = '';
    @Input() value: any;
    @Input() label: string = '';
    @Input() appendTo!: string;
    @Input() icon!: string;
    @Input() disabled: boolean = false;
    @Input() showClear: boolean = false;
    @Input() minLength: number = 3;
    @Input() control: AbstractControl = new FormControl();
    @Input() field: string[] = [];

    @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();

    private onChange: any = () => { }
    private onTouch: any = () => { }
    protected filteredList: any[] = [];
    protected valueItem!: any;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['value']) {
            this.valueItem = this.value;
        }
    }

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
                if (!this.field) {
                    if (value.name.toLowerCase().includes(query.toLowerCase()) || value.content.toLowerCase().includes(query.toLowerCase())) {
                        filtered.push(value);
                    }
                } else {
                    const val = this.controlFields(query, 'include', value);
                    if (val)
                        filtered.push(val);
                }
            }
            this.filteredList = filtered;
        }
    }

    protected getCustomField() {
        return this.placeholder;
    }

    private controlFields(query: string, type: string, value?: any) {
        let valueFound = '';
        for (const field of this.field) {
            switch (type) {
                case 'include':
                    if (value[field] && value[field].toLowerCase().includes(query.toLowerCase()))
                        valueFound = value;
                    break;
                case 'match':
                    if (value[field] && value[field].toLowerCase() === query.toLowerCase())
                        valueFound = value;
                    break;
                case 'matchAll':
                    this.valueAutocomplete.forEach(item => {
                        if (item[field] && item[field].toLowerCase() === query.toLowerCase()) {
                            valueFound = item;
                        }
                    })
                    break;
            }

            if (valueFound)
                return valueFound;
        }
        return undefined;
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
        this.valueItem = this.value;
        this.onChange(event);
        this.selectedValue.emit(event);
    }

    protected emitValueIfExist(event: any, autocomplete: AutoComplete) {
        if (this.field.length === 0) {
            let valueLowerCase: string[] = this.valueAutocomplete.map(item => item.name.toLowerCase());
            if (valueLowerCase && valueLowerCase.includes(event.target.value.toLowerCase())) {
                this.value = this.valueAutocomplete.filter(item => item.name.toLowerCase() === event.target.value.toLowerCase())[0];
                this.valueItem = this.value;
                this.control.setErrors(null);
                this.onChange(this.value);
                this.selectedValue.emit(this.value);
            }
            else if (this.value) {
                this.valueItem = null;
                this.onChange("");
                this.selectedValue.emit("");
                this.control.setErrors({ 'incorrect': true });
                this.control.markAsTouched();
            }
        } else {
            if (this.controlFields(event.target.value, 'matchAll')) {
                this.value = this.controlFields(event.target.value, 'matchAll');
                this.valueItem = this.value;
                this.control.setErrors(null);
                this.onChange(this.value);
                autocomplete.hide();
                this.selectedValue.emit(this.value);
                return;
            }
            else if (this.value) {
                this.valueItem = null;
                this.onChange("");
                this.selectedValue.emit("");
                this.control.setErrors({ 'incorrect': true });
                this.control.markAsTouched();
            }
        }
    }

}
