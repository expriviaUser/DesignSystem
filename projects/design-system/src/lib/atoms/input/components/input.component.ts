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

  @Input() label: string = '';
  @Input() placeholder: string = '';
  // @Input('controlName') formControlName: string = '';
  @Input() clear: boolean = false;
  @Input() actionIcon: boolean = false;
  @Input() control: AbstractControl = new FormControl();

  @Output() emitInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() iconClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() handlerInputClicked: EventEmitter<any> = new EventEmitter<any>();

  @Input() value: any;
  @Input() type: string = 'text';
  @Input() iconPos: string = 'left'
  @Input() icon: string = '';

  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  onChange: any = () => { }
  onTouch: any = () => { }


  // get control() {
  //     return this.controlContainer.control?.get(this.formControlName);
  // }

  get haveError() {
    return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
  }

  ngOnInit() {
    switch (this.iconPos) {
      case 'left':
        this.iconPos = 'p-input-icon-left';
        break;
      case 'right':
        this.iconPos = 'p-input-icon-right';
        break;
    }
  }

  getInput(event: any) {
    this.emitInput.emit(event);
  }

  iconClick() {
    this.iconClicked.emit();
  }

  inputClicked() {
    this.handlerInputClicked.emit();
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
    this.value = event ? event.target.value : '';
    this.onChange(this.value);
    this.selectedValue.emit(this.value);
  }

  /* numberPattern(event: any) {
      if (event.keyCode === 101 || event.keyCode === 69)
          return
          event.charCode >= 48 && event.charCode <= 57
  } */

  // upon UI element value change, this method gets triggered
  emitValueNg(event: any) {
    this.value = event;
    this.onChange(event);

  }
}
