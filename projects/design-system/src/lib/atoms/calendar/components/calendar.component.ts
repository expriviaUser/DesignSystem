import { DatePipe } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    forwardRef
} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Calendar } from "primeng/calendar";

@Component({
    selector: 'lib-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CalendarComponent),
        multi: true
    }]
})
export class CalendarComponent {
    @Input() value!: any;
    @Input() label!: string;
    @Input() disabled: boolean = false;
    @Input() inlineCal: boolean = false;
    @Input() showIcon: boolean = false;
    @Input() dropdownMode: boolean = false;
    @Input() showButtonBar: boolean = false;
    @Input() selectionType: string = 'single';
    @Input() control: AbstractControl = new FormControl();
    @Input() placeholder: string = '';
    @Input() minDate!: Date;
    @Input() maxDate!: Date;
    @Input() defaultDateFormat: string = 'dd-mm-yy';

    @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();
    @Output() clearCalendarValue: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('calendar') pcalendar!: Calendar;

    calendarDate!: Date;

    formData!: FormGroup;

    onChange: any = () => {
    }
    onTouch: any = () => {
    }

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
    }

    get haveErrorParent() {
        return this.control.parent && this.control.parent.errors && (!this.control.pristine || this.control.touched);
    }

    constructor(
        private fb: FormBuilder,
        private datePipe: DatePipe
    ) {
    }

    /* ngOnChanges(changes: SimpleChanges) {
        if (!(this.inlineCal || this.showIcon || this.dropdownMode)) {
            if (changes['value'].firstChange) {
                this.formData = this.fb.group({
                    date: [null, [Validators.required, Validators.min(1), Validators.max(31)]],
                    month: [null, [Validators.required, Validators.min(1), Validators.max(12)]],
                    year: [null, [Validators.required, Validators.max(2999), Validators.min(1800)]]
                }, { validators: this.validDate() });
            }
            if (this.value) {
                this.value = new Date(this.value);
                this.formData.get('date')?.setValue(this.value.getDate())
                this.formData.get('month')?.setValue(this.value.getMonth() + 1)
                this.formData.get('year')?.setValue(this.value.getFullYear())
            } else {
                this.formData.get('date')?.setValue(null)
                this.formData.get('month')?.setValue(null)
                this.formData.get('year')?.setValue(null)
            }
        } else {
            this.calendarDate = this.value;
        }

    } */

    /* ngOnInit() {
        if (!(this.inlineCal || this.showIcon || this.dropdownMode)) {

            if (this.value) {
                this.value = new Date(this.value);
                this.formData.get('date')?.setValue(this.value.getDate())
                this.formData.get('month')?.setValue(this.value.getMonth() + 1)
                this.formData.get('year')?.setValue(this.value.getFullYear())
            }
            this.formData.valueChanges
                .pipe(
                    takeUntil(this.destroySub$),
                    map((value) => {
                        const d = new Date(value.year, (value.month - 1), value.date)
                        return this.formData.valid ? d : null
                    })
                ).subscribe((value) => {
                    this.emitValue(value)
                })
        } else {
            this.calendarDate = this.value;
        }
    } */


    /* selectDate(date: any) {
        if (!(this.inlineCal || this.showIcon || this.dropdownMode)) {
            this.formData.get('date')?.setValue(date.getDate())
            this.formData.get('month')?.setValue(date.getMonth() + 1)
            this.formData.get('year')?.setValue(date.getFullYear())
        } else {
            this.calendarDate = date;

            this.emitValue(date);
        }
        console.log(this.calendarDate);
    } */

    /* validDate(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const group = control as FormGroup
            const d = new Date(control.get('year')!.value, (control.get('month')!.value - 1), control.get('date')!.value)
            if (group.dirty && group.valid) {
                return d.getDate() == control.get('date')!.value ? null : { invalidDate: true }
            }
            return null
        }
    } */

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
        this.value = event;
        this.onChange(event);
        /*  if (!(this.inlineCal || this.showIcon || this.dropdownMode)) {
             let date = this.datePipe.transform(event, 'yyyy-MM-dd') || '';
             this.selectedValue.emit(date);
         } else {
         } */
        this.selectedValue.emit(event);
    }

    toggleCalendar(): void {
        this.pcalendar.toggle();
    }
}
