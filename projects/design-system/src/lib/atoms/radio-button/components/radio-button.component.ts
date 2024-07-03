import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioModel } from '../models/radio.model';

@Component({
    selector: 'lib-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioButtonComponent),
        multi: true
    }]
})



export class RadioButtonComponent {

    @Input() items: RadioModel[] = [];
    @Input() label: string = '';
    @Input() formControlName: string = '';
    @Input() disabled: boolean = false;
    @Input() name: string = '';
    @Input() colSize: string = '3';
    @Input() value!: any;
    @Input() control: FormControl = new FormControl();

    @Output() selectedValue = new EventEmitter<RadioModel>();


    _items: RadioModel[] = [];
    id: string = '';
    quantity: string = '';
    touched = false;

    onChange: any = () => { }
    onTouch: any = () => { }

    loading: boolean = false;
    loadLazyTimeout: any;

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);

    }

    constructor() { }

    ngOnInit() {
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
    emitValue(event: any) {
        this.value = this.items.find(el => el.data === event.value);
        this.onChange(this.value);
        this.selectedValue.emit(this.value);
    }

    // upon UI element value change, this method gets triggered
    emitValueNg(event: any) {
      this.value = this.items.find(el => el.data === event.value);
      this.onChange(this.value);
      this.selectedValue.emit(this.value);
    }

}
