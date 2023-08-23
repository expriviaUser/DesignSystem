import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, AbstractControl, FormControl } from '@angular/forms';
import { DropdownType } from '../../dropdown/models/dropdown.model';

@Component({
    selector: 'lib-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MultiSelectComponent),
        multi: true
    }]
})
export class MultiSelectComponent implements OnInit {
    protected isObject: boolean = false;

    @Input() valueDropdown: DropdownType[] | string[] | any = [];
    @Input() label!: string;
    @Input() appendTo!: string;
    @Input() codeString: string = 'code';
    @Input() nameString: string = 'name';
    @Input() placeholder!: string;
    @Input() clear: boolean = false;
    @Input() filterActive: boolean = false;
    @Input() virtualScroll: boolean = false;
    @Input() virtualScrollItemSize!: number;
    @Input() control: AbstractControl = new FormControl();
    @Input() disabled: boolean = false;
    @Input() value: any;
    @Input() selectedItemTemplate!: TemplateRef<any>;
    values: DropdownType[] = [];


    @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        this.isObject = typeof this.valueDropdown[0] !== "string";
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
