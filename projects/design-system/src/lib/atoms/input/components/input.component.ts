import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
  }]
})

export class InputComponent {

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
    console.log('val',this.value)
}

// upon UI element value change, this method gets triggered
emitValueNg(event: any) {
    this.value = event;
    this.onChange(event);
    
}
}