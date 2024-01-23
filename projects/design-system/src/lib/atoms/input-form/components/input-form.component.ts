import { DatePipe } from "@angular/common";
import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { CheckBoxModel } from "../../checkbox/models/checkbox.model";

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
export class InputFormComponent implements ControlValueAccessor {
  @Input() value!: string;
  @Input() valueInput: any[] = [];
  @Input() checkboxValue!: CheckBoxModel[];
  @Input() clear: boolean = false;
  @Input() appendTo!: string;
  @Input() icon: string = "";
  @Input() iconPos: string = "";
  @Input() sortParam: string = "nome";
  @Input() label: string = "";
  @Input() type: string = "text";
  @Input() error: boolean = false;
  @Input() calendarShowIcon: boolean = false;
  @Input() calendarDropdown: boolean = false;
  @Input() dropdownFilter = false;
  @Input() dropdownFilterPlaceholder = '';
  @Input() inputDisabled: boolean = false;
  @Input() inputFiltered: boolean = false;
  @Input() placeholder: string = "Inserisci un valore";
  @Input() formControlName: string = "";
  @Input() field: string = '';
  @Input() fieldAutocompleteCard: string[] = [];
  @Input() inlineCal: boolean = false;
  @Input() selectionType: string = 'single';
  @Input() defaultDateFormat: string = 'dd-mm-yy';
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Input() showButtonBar!: boolean;
  @Input() readonly: boolean = false;
  @Input() uploadMultipleFiles: boolean = false;
  @Input() actionIcon: boolean = false;
  @Input() multiSelectFilterActive: boolean = true;
  @Input() autocompleteLazy: boolean = false;
  @Input() minLenghtDigits: number = 3;
  @Input() fileAcceptExtensions!: string;
  @Input() maxFileSize!: number;
  @Input() uploadFileLimit!: number;
  @Input() errorTemplate!: TemplateRef<any>;
  @Input() highlightedDays: Array<string> = [];
  @Input() timeOnly: boolean = false;
  @Input() dataType: string = 'date';

  //@Input() formControl: FormControl = new FormControl();
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() iconClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() autocompleteLazyValue: EventEmitter<string> = new EventEmitter<string>();

  disabled: boolean = false;
  touched = false;

  onChange: any = () => { };
  onTouch: any = () => { };

  constructor(
    private controlContainer: ControlContainer,
    private datePipe: DatePipe
  ) { }

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

  get required() {
    return (
      this.control &&
      this.control.hasValidator(Validators.required)
    );
  }
  get haveErrorParent() {
    return (
      this.control.parent &&
      this.control.parent.errors &&
      (!this.control.pristine || this.control.touched)
    );
  }

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

      if (type == 'choose-file')
        this.value = event.files;

      this.onChange(event);
      this.selectedValue.emit(event);

    } else {
      this.value = event.target.value;
      this.onChange(event.target.value);
      this.selectedValue.emit(event);
    }
  }

  resetCalendarValue() {
    this.control.reset();
    this.value = '';
    this.onChange(this.value);
    this.selectedValue.emit(this.value);
  }

  iconClick() {
    this.iconClicked.emit();
  }
}
