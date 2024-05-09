import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ListboxComponent),
    multi: true
  }]
})
export class ListboxComponent {
  @Input() items!: any[];
  @Input() value: any;
  @Input() label: string = '';
  @Input() control: AbstractControl = new FormControl();
  @Input() nameString: string = 'name';
  @Input() disabled: boolean = false;
  @Input() filtered: boolean = false;
  @Input() multiple: boolean = false;
  @Input() metaKeySelection: boolean = false;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  formData!: FormGroup;

  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  get haveError() {
    return this.control?.errors && (!this.control?.pristine || this.control?.touched);
  }
}
