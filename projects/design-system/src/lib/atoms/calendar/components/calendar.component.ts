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
  @Input() appendTo: string = '';
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Input() defaultDateFormat: string = 'dd-mm-yy';
  @Input() highlightedDays: Array<string> = [];
  @Input() firstDayOfWeek!: number;
  @Input() disabledDays!: number[];

  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearCalendarValue: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('calendar') pcalendar!: Calendar;

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
  ) { }

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
    this.onChange(event);
    this.selectedValue.emit(this.value);
  }

  toggleCalendar(): void {
    this.pcalendar.toggle();
  }

  isHighlighted(date: { month: number; day: number; year: number; }) {
    const dateString = date.year.toString() + '-' + ('0' + (date.month + 1).toString()).slice(-2) + '-' + ('0' + date.day.toString()).slice(-2);
    if (this.highlightedDays.length > 0) {
      return this.highlightedDays.includes(dateString);
    } else {
      return false;
    }
  }
  isHoliday(date: { month: number; day: number; year: number; }) {
    const newDate = new Date(date.year, date.month, date.day);
    if (this.disabledDays.length > 0) {
      return this.disabledDays.includes(newDate.getDay());
    } else {
      return false;
    }
  }
}
