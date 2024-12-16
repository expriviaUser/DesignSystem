import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
}]
})
export class TextareaComponent {

    @Input() value: string = '';
    @Input() icon: string = '';
    @Input() placeholder: string = 'Inserisci un testo';
    @Input() label: string = '';
    @Input() error: boolean = false;
    @Input() disabled:boolean = false;
    @Input() control: AbstractControl = new FormControl();

    @Output() emitInput: EventEmitter<string> = new EventEmitter<string>();
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    // @Input('controlName') formControlName: string = '';
    
    
    touched = false;

    onChange: any = () => { }
    onTouch: any = () => { }

    //@Input() formControl: FormControl = new FormControl();

    
    // get control() {
    //     return this.controlContainer.control?.get(this.formControlName);
    // }

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

    getInput(event: string) {
      this.emitInput.emit(event);
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
        this.value = event;
        this.onChange(event);
        this.valueChange.emit(this.value);
    }
}
