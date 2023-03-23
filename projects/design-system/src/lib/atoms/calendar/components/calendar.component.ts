import { Component, forwardRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';

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
export class CalendarComponent implements OnDestroy, OnInit {
    @Input() value!: any
    @Input() label!: string
    @Input() disabled: boolean = false;
    @Input() control: AbstractControl = new FormControl();

    // @Input('controlName') formControlName: any = '';

    @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();


    destroySub$ = new Subject<void>()

    onChange: any = () => { }
    onTouch: any = () => { }

    // get control() {
    //   return this.controlContainer.control?.get(this.formControlName);
    // }

    get haveError() {
        return this.control && this.control.errors && (!this.control.pristine || this.control.touched);

    }
    get haveErrorParent() {
        return this.control.parent && this.control.parent.errors && (!this.control.pristine || this.control.touched);

    }
    calendarDate!: Date

    constructor(
        private fb: FormBuilder, 
        private datePipe: DatePipe
    ) { }

    ngOnChanges() {
        if (this.value) {
            this.value = new Date(this.value);
            this.formData.get('date')?.setValue(this.value.getDate())
            this.formData.get('month')?.setValue(this.value.getMonth()+1)
            this.formData.get('year')?.setValue(this.value.getFullYear())
        } else {
            this.formData.get('date')?.setValue(null)
            this.formData.get('month')?.setValue(null)
            this.formData.get('year')?.setValue(null)
        }
    }

    ngOnInit() {
        if (this.value) {
            this.value = new Date(this.value);
            this.formData.get('date')?.setValue(this.value.getDate())
            this.formData.get('month')?.setValue(this.value.getMonth()+1)
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
    }
    ngOnDestroy() {
        this.destroySub$.next()
        this.destroySub$.complete()
    }

    formData: FormGroup = this.fb.group({
        date: [null, [Validators.required, Validators.min(1), Validators.max(31)]],
        month: [null, [Validators.required, Validators.min(1), Validators.max(12)]],
        year: [null, [Validators.required, Validators.max(2999), Validators.min(1800)]]
    }, { validators: this.validDate() })

    selectDate(date: Date) {
        this.formData.get('date')?.setValue(date.getDate())
        this.formData.get('month')?.setValue(date.getMonth() + 1)
        this.formData.get('year')?.setValue(date.getFullYear())
    }

    validDate(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const group = control as FormGroup
            const d = new Date(control.get('year')!.value, (control.get('month')!.value - 1), control.get('date')!.value)
            if (group.dirty && group.valid) {
                return d.getDate() == control.get('date')!.value ? null : { invalidDate: true }
            }
            return null
        }
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
        console.log('calendar', event);
        this.value = event;
        this.onChange(event);
        let date = this.datePipe.transform(event, 'yyyy-MM-dd') || '';
        this.selectedValue.emit( date );
    }

    // upon UI element value change, this method gets triggered
    emitValueNg(event: any) {
        console.log('emitValue', event);
        this.value = event;
        this.onChange(event);
        let date = this.datePipe.transform(event, 'yyyy-MM-dd') || '';
        this.selectedValue.emit( date );
    }



}
