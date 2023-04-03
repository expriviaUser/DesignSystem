import { Component, forwardRef, Input, Output } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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

    @Input() labels: string[] = [];
    @Input() formControlName: string = '';
    @Input() disabled: boolean = false;
    @Input() name: string = '';
    @Input() value: string = '';
    @Input() control: FormControl = new FormControl();

    
    
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
        console.log('emitValue', event.value);
        this.value = event.value;
        this.onChange(event.value);
    }
  
    // upon UI element value change, this method gets triggered
    emitValueNg(event: any) {
        console.log('emitValue', event.value);
        this.value = event.value;
        this.onChange(event.value);
    }
  
  }
