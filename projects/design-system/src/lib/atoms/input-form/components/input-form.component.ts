import { DatePipe } from "@angular/common";
import { Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "lib-input-form",
    templateUrl: "./input-form.component.html",
    styleUrls: ["./input-form.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputFormComponent),
            multi: true,
        },
    ],
})
export class InputFormComponent implements ControlValueAccessor, OnChanges {
    @Input() value!: string;
    @Input() valueInput: any[] = [];
    @Input() clear: boolean = false;
    @Input() icon: string = "";
    @Input() iconPos: string = "";
    @Input() sortParam: string = "nome";
    @Input() label: string = "";
    @Input() type: string = "text";
    @Input() error: boolean = false;
    @Input() inputDisabled: boolean = false;
    @Input() placeholder: string = "Inserisci un valore";
    @Input() formControlName: string = "";
    @Input() field: string = "";
    @Input() inlineCal!: boolean;
    @Input() selectionType: string = '';
    @Input() minDate!: Date;
    @Input() maxDate!: Date;
    @Input() showButtonBar!: boolean;

    //@Input() formControl: FormControl = new FormControl();
    @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

    disabled: boolean = false;
    touched = false;

    onChange: any = () => { };
    onTouch: any = () => { };

    constructor(
        private controlContainer: ControlContainer,
        private datePipe: DatePipe
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        console.log('InputComponent', changes);
    }

    get control() {
        return this.controlContainer.control!.get(
            this.formControlName
        ) as FormControl;
    }

    get haveError() {
        return (
            this.control &&
            this.control.errors &&
            (!this.control.pristine || this.control.touched)
        );
    }
    get haveErrorParent() {
        return (
            this.control.parent &&
            this.control.parent.errors &&
            (!this.control.pristine || this.control.touched)
        );
    }

    ngOnInit() { }

    getValueControl() {
        if (this.control!.value) {
            try {
                return this.datePipe.transform(this.control.value, "dd/MM/yyyy")!;
            } catch {
                return this.control!.value;
            }
        } else {
            return "--";
        }
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
    emitValue(event: any, type?: string) {
        if (type) {
            if ((event && type == 'autocomplete') || type !== "autocomplete")
                this.value = event;

            this.onChange(event);
            this.selectedValue.emit(event);
        } else {
            this.value = event.target.value;
            this.onChange(event.target.value);
            this.selectedValue.emit(event);
        }
    }
}
