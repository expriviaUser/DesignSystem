import { Component, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownType } from '../models/dropdown.model';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
})
export class DropdownComponent implements OnInit {
  protected isObject: boolean = false;

  @Input() valueDropdown: DropdownType[] | string[] | any = [];
  @Input() label!: string;
  @Input() appendTo!: string;
  @Input() codeString: string = 'code';
  @Input() nameString: string = 'name';
  @Input() filter = false;
  @Input() filterPlaceholder = '';
  @Input() placeholder!: string;
  @Input() clear: boolean = false;
  @Input() virtualScroll: boolean = false;
  @Input() virtualScrollItemSize!: number;
  @Input() control: AbstractControl = new FormControl();
  @Input() disabled: boolean = false;
  @Input() value: any;
  @Input() selectedItemTemplate!: TemplateRef<any>;
  values: DropdownType[] = [];


  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.isObject = this.valueDropdown ? typeof this.valueDropdown[0] !== "string" : true;
  }

  get haveError() {
    return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
  }

  // upon UI element value change, this method gets triggered
  protected emitValue(event: any) {
    this.value = event.value;
    this.selectedValue.emit(this.value);
  }
}
