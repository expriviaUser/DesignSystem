import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild, OnInit, OnChanges, forwardRef } from '@angular/core';

import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckBox } from '../models/checkbox.model';

@Component({
    selector: 'lib-checkbox-button',
    templateUrl: './checkbox-button.component.html',
    styleUrls: ['./checkbox-button.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxButtonComponent),
        multi: true
    }]
})
export class CheckboxButtonComponent implements OnChanges {
    //Insert in input checked status, disabled, and label
    @Input() checked: any = [];
    @Input() check: boolean = false;
    @Input() disabled: boolean = false;
    @Input() items!: CheckBox[];
    @Input() rounded: boolean = false;
    @Input() label: string = '';
    @Input() control: AbstractControl = new FormControl();


    ngOnChanges(changes: SimpleChanges) {
      if (changes && changes['items']?.currentValue) {
        this.items.forEach(element => {
          if (element?.checked) {
            this.checked.push(element);
          } else {
            element.checked = false;
          }
        })
      }
    }

    //Return in output a boolean value
    @Output() emitChange: EventEmitter<any> = new EventEmitter<any>();
    value: any;
    onChange: any = () => { }
    onTouch: any = () => { }

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
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
    emitValue(event: any, index: number) {
        if (index !== -1) {
            if (event.checked)
                this.checked.push({...this.items[index]});
            else {
                const indexToRemove = this.checked.findIndex((item: any) => item === this.items[index]);
                this.checked.splice(indexToRemove, 1);
            }
        }
        this.value = index !== -1 ? this.checked : { checked: event.checked, defaultEvent: event.originalEvent as MouseEvent };
        this.onChange(this.value);
        this.emitChange.emit(this.value);
    }

    getValueItem(item) {
      return this.checked.find(el => el === item) ? true : false;
    }


}
