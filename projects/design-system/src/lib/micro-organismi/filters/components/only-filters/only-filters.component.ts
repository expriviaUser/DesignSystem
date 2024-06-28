import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import {
  CalendarComponent,
  DropdownComponent,
  TreeMenu,
  TreeSelectComponent,
  TreeSelectModel
} from '../../../../../public-api';
import { FiltersModel, OnlyFiltersChip, OnlyFiltersModel } from '../../models/filters.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'lib-only-filters',
  templateUrl: './only-filters.component.html',
  styleUrls: ['./only-filters.component.scss']
})
export class OnlyFiltersComponent implements OnInit {
  protected dropdownSelectedValues: { label: string, value: any, childValue: string | number }[] = [];
  protected requiredDaIsEmpty: boolean = true;
  protected requiredAIsEmpty: boolean = true;
  protected showDialog: boolean = false;

  @Input() title: string = '';
  @Input() disableAll: boolean = false;
  @Input() dropdownValues: OnlyFiltersModel = {} as OnlyFiltersModel;
  @Input() chipsList: OnlyFiltersChip = {} as OnlyFiltersChip;

  @Output() chipsListChange: EventEmitter<OnlyFiltersChip> = new EventEmitter<OnlyFiltersChip>();

  @ViewChildren('calendar') calendar!: QueryList<CalendarComponent>;
  @ViewChildren('treeSelect') treeSelect!: TreeSelectComponent;

  protected getChildType(dropdownOption: FiltersModel, value: string): string {
    if (dropdownOption && dropdownOption.data && value !== '') {
      let index = dropdownOption.data.findIndex(item => item.data == value);
      if (index !== -1)
        return dropdownOption.data[index].type || '';
      else return '';
    } else
      return '';
  }

  protected doubleRangeFromMaxDate: Date = new Date();

  protected doubleRangeToMinDate: Date = new Date('01/01/1900');


  protected getTreeSelectValue(dropdownIndex: number): string {
    if (this.chipsList.result.length > 0) {
      let value = this.chipsList.result.filter(item => item.dropdownIndex == dropdownIndex);
      if (value.length > 0)
        return value[0].chipsLabel;
      else return '';
    } else return '';
  }

  protected getChildEnum(dropdownOption: FiltersModel, value: string): TreeSelectModel[] {
    if (dropdownOption && dropdownOption.data) {
      let index = dropdownOption.data?.findIndex(item => item.data == value);
      return dropdownOption.data[index].enumValues || [];
    } else
      return [];
  }

  protected getChildConfig(dropdownOption: FiltersModel, value: string): any {
    if (dropdownOption && dropdownOption.data) {
      let index = dropdownOption.data?.findIndex(item => item.data == value);
      return dropdownOption.data[index].config;
    } else
      return null;
  }

  protected getAvailableData(data: string | number): boolean {
    return this.chipsList.result.filter(value => value.data === data).length > 0;
  }

  protected setChildValue(event: string | number, dropdownIndex: number) {
    this.dropdownSelectedValues[dropdownIndex].childValue = "";
    this.dropdownSelectedValues[dropdownIndex].value = event;
    this.dropdownSelectedValues[dropdownIndex].label = this.dropdownValues.filters[dropdownIndex].data?.filter(item => item.data == event)[0].label || '';
  }

  protected setCalendarChild(event: string | Array<object>, dropdownIndex: number) {
    if (Array.isArray(event)) {
      if (event[1]) {
        this.dropdownSelectedValues[dropdownIndex].childValue = event[0].toString().split(',')[0] + " - " + event[1].toString().split(',')[0];
      } else {
        this.dropdownSelectedValues[dropdownIndex].childValue = event[0].toString().split(',')[0];
      }
    } else {
      this.dropdownSelectedValues[dropdownIndex].childValue = event;
    }
  }

  protected setInterval(dropdownIndex: number, event: string, isMin: boolean) {
    let val = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
    if (isMin)
      val[0] = event;

    else
      val[1] = event;

    this.dropdownSelectedValues[dropdownIndex].childValue = val.join(' - ');
  }

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.chipsList.id = this.dropdownValues.id;
    this.chipsList.result = [];
    this.chipsList.data = [];

    this.dropdownValues.filters.filter((item, index) => {
      if (item.type == 'treeselect') {

        this.chipsList.data[index] = [];
      }
      if (item.type == 'dialog') {

        this.chipsList.data[index] = item.selectionType !== 'multiple' ? {} as TreeSelectModel[] : [];
      }
      if (item.type == 'children') {
        this.dropdownSelectedValues[index] = { label: '', value: null, childValue: '' };
      }
    });
  }

  private _numberFrom!: string;
  private _numberTo!: string;
  protected setNumberRangeValue(dropdownIndex: number, rangeNum: number, value: string) {
    if (rangeNum === 0) {
      this._numberFrom = value;
    }
    if (rangeNum === 1) {
      this._numberTo = value;
    }

    this.dropdownSelectedValues[dropdownIndex].childValue = `${this._numberFrom ? this._numberFrom : ''} | ${this._numberTo ? this._numberTo : ''}`;
  }

  private _dateFrom!: string;
  private _dateTo!: string;
  protected setCalendarDoubleRangeChild(dropdownIndex: number, rangeNum: number, value: string) {
    if (rangeNum === 0) {
      this.doubleRangeToMinDate = new Date(value);
      this._dateFrom = this.datePipe.transform(value, 'YYYY-MM-ddTHH:mm:ss') || '';
      this.requiredDaIsEmpty = !this._dateFrom;
    }
    if (rangeNum === 1) {
      this.doubleRangeFromMaxDate = new Date(value);
      this._dateTo = this.datePipe.transform(value, 'YYYY-MM-ddTHH:mm:ss') || '';
      this.requiredAIsEmpty = !this._dateTo;

    }

    this.dropdownSelectedValues[dropdownIndex].childValue = `${this._dateFrom ? this._dateFrom : ''} | ${this._dateTo ? this._dateTo : ''}`;
  }

  protected checkValue(dropdownIndex: number, type: string, config: any) {
    if ((type === 'number' && config && config['selection'] === 'range') || (type === 'calendar' && config && config['selection'] === 'double-range')) {
      return this.requiredAIsEmpty && this.requiredDaIsEmpty;
    } else if (type === 'calendar' && config && config['selection'] === 'range') {
      let splittedValue = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
      if (splittedValue[0]?.length > 0 || splittedValue[1]?.length > 0) {
        return false
      } else {
        return true;
      }
    } else if (this.dropdownSelectedValues[dropdownIndex].childValue?.toString().length > 0) {
      return false;
    } else {
      return true;
    }
  }

  protected printData(dropdownIndex: number, dropdown: DropdownComponent, type: string, config: any) {
    const date = this.dropdownValues.filters[dropdownIndex].data?.filter(item => item.label === this.dropdownSelectedValues[dropdownIndex].label);
    let value = this.dropdownSelectedValues[dropdownIndex].childValue;
    if (config['selection'] === 'double-range') {
      value = !this._dateTo && this._dateFrom ? 'Dal ' : '';
      value += this._dateFrom ? this.datePipe.transform(new Date(this._dateFrom), 'dd/MM/yyyy') : '';
      value += this._dateTo && this._dateFrom ? '-' : '';
      value += this._dateTo && !this._dateFrom ? 'Fino al ' : '';
      value += this._dateTo ? this.datePipe.transform(new Date(this._dateTo), 'dd/MM/yyyy') : '';
    } else if (config['selection'] === 'range') {
      value = !this._numberTo && this._numberFrom ? 'Dal ' : '';
      value += this._numberFrom || '';
      value += this._numberTo && this._numberFrom ? '-' : '';
      value += this._numberTo && !this._numberFrom ? 'Fino al ' : '';
      value += this._numberTo || '';
    } else {
      if (date && date.length > 0 && date[0].type === 'calendar') {
        value = this.datePipe.transform(new Date(value), 'dd/MM/yyyy') || '';
      }
    }

    this.chipsList.result.push({
      dropdownIndex: dropdownIndex,
      data: this.dropdownSelectedValues[dropdownIndex].value,
      field: this.dropdownValues.filters[dropdownIndex].field,
      type: 'children',
      chipsLabel: `${this.dropdownSelectedValues[dropdownIndex].label}: ${value}`,
      value: this.dropdownSelectedValues[dropdownIndex].childValue.toString()
    });

    this.dropdownValues.filters[dropdownIndex].data?.forEach(item => {
      this.chipsList.result.forEach(element => {
        if (element.data === item.data)
          item.disabled = true;
      })
    })
    this.dropdownSelectedValues[dropdownIndex] = JSON.parse(JSON.stringify({
      label: '', value: null, childValue: ''
    }));
    dropdown.value = null;
    this._dateFrom = '';
    this._dateTo = '';
    this._numberFrom = '';
    this._numberTo = '';
    this.requiredAIsEmpty = true;
    this.requiredDaIsEmpty = true;
    this.doubleRangeFromMaxDate = new Date();
    this.doubleRangeToMinDate = new Date('01/01/1900');
    this.chipsListChange.emit(this.chipsList);
  }

  emitInputEvent(event: string, isFirst: boolean) {
    if (isFirst) {
      this.requiredDaIsEmpty = !(event.length > 0);
    } else {
      this.requiredAIsEmpty = !(event.length > 0);
    }
  }

  protected createTreeChip(event: {
    originalEvent: PointerEvent,
    node: TreeSelectModel
  }, dropdownIndex: number, dropdownField: string, selectionType: string): void {
    if (event.node) {
      if (selectionType === 'single') {
        let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
        if (indexToRemove !== -1)
          this.chipsList.result.splice(indexToRemove, 1);

        //this.chipsList.data[dropdownIndex] = [];
      }
      let fieldSplitted: string[] = [];
      if (this.dropdownValues.filters[dropdownIndex].type === 'dialog' && selectionType === 'multiple') {
        fieldSplitted = dropdownField.split('');
        fieldSplitted[0] = fieldSplitted[0].toLocaleUpperCase();
      }
      this.chipsList.result.push({
        chipsLabel: this.dropdownValues.filters[dropdownIndex].placeholder + ': ' + (fieldSplitted.length ? fieldSplitted?.join('') + ': ' + event.node.label : event.node.label),
        dropdownIndex: dropdownIndex,
        field: dropdownField,
        data: event.node.data,
        type: "treeselect",
        value: event.node.label
      });
      //(this.chipsList.data[dropdownIndex] as TreeSelectModel[]).push(event.node);
      this.chipsListChange.emit(this.chipsList);
    }
  }



  protected createCalendarChip(event: Array<object>, dropdownIndex: number, dropdownOption: FiltersModel, calendar: CalendarComponent): void {
    //verifico che non ci sia già la chip per il selettore specificato
    const EXIST = this.chipsList.result.some((d: any) => d.dropdownIndex == dropdownIndex);
    let DATE_RANGE, next = false;
    if(event) {
    if((dropdownOption.calendarSelectionType === 'range' || !dropdownOption.calendarSelectionType) && (event[0] && event[1])) {
      DATE_RANGE = `${dropdownOption.placeholder}: ${event[0].toLocaleString().split(',')[0]} - ${event[1].toLocaleString().split(',')[0]}`;
      next = true;
    }
    else if(dropdownOption.calendarSelectionType === 'single' && event) {
      DATE_RANGE = `${dropdownOption.placeholder}: ${event.toLocaleString().split(',')[0]}`;
      next= true;
    }
    if(next) {
      if (EXIST) {
        //elimina quello esistente
        const C_INDEX = this.chipsList.result.findIndex(c => c.dropdownIndex == dropdownIndex);
        this.chipsList.result.splice(C_INDEX, 1);
      }
      //Crea il chip
      this.chipsList.result.push({
        chipsLabel: DATE_RANGE,
        dropdownIndex: dropdownIndex,
        field: dropdownOption.field,
        data: event,
        type: "calendar",
        value: DATE_RANGE
      });
      this.chipsListChange.emit(this.chipsList);
      calendar.pcalendar.value = null;
      calendar.value = null;
      calendar.toggleCalendar();
    }
    }
  }

  protected unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number): void {
    const C_INDEX = this.chipsList.result.findIndex(c => c.chipsLabel == event.node.label && c.dropdownIndex == dropdownIndex);
    this.chipsList.result.splice(C_INDEX, 1);
    if (Array.isArray(this.chipsList.data[dropdownIndex])) {
      const N_INDEX = (this.chipsList.data[dropdownIndex] as TreeSelectModel[]).indexOf(event.node);
      (this.chipsList.data[dropdownIndex] as TreeSelectModel[]).splice(N_INDEX, 1);
    } else {
      this.chipsList.data[dropdownIndex] = undefined;
    }
    this.chipsListChange.emit(this.chipsList);
  }

  protected selectedDialog(event: any, dropdownIndex: number, dropdownField: string, selectionType: string) {
    if (event) {
      if (event) {
        /* if (selectionType === 'single') {
            let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
            if (indexToRemove !== -1)
                this.chipsList.result.splice(indexToRemove, 1);

            //this.chipsList.data[dropdownIndex] = [];
        } */
        let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
        this.chipsList.result.splice(indexToRemove, 1);
        this.chipsList.result.push({
          chipsLabel: event.label || '',
          dropdownIndex: dropdownIndex,
          field: dropdownField,
          data: event.data,
          type: "dialog",
          value: event.label || ''
        });
        (this.chipsList.data[dropdownIndex]) = { label: event.label || '', data: event.data };
        this.chipsListChange.emit(this.chipsList);
      }
      this.chipsListChange.emit(this.chipsList);
    }
  }

  protected setDropdownValue(event: any, dropdownField: string, dropdownIndex: number) {
    let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
    if (indexToRemove !== -1)
      this.chipsList.result.splice(indexToRemove, 1);

    let value = this.dropdownValues.filters.filter(item => item.field == dropdownField)[0].data?.filter(element => element.data == event)[0];
    (this.chipsList.data[dropdownIndex]) = { label: value?.label || '', data: value?.data };
    this.chipsList.result.push({
      chipsLabel: value?.label || '',
      dropdownIndex: dropdownIndex,
      field: dropdownField,
      data: value?.data || '',
      type: "dialog",
      value: value?.label || ''
    });
    this.chipsListChange.emit(this.chipsList);
    //(this.chipsList.data[dropdownIndex]) = { label: value?.label || '', data: value?.data };
  }

  protected getTreeValue(indexDropdown: number, field: string) {
    return this.dropdownValues.filters[indexDropdown].children?.filter((element: any) => element.data === this.chipsList.data[indexDropdown].data);
  }

  private exist(val0: string, val1: string) {
    return val0?.length > 0 && val1?.length > 0
  }

  private existOnlyOne(val0: string, val1: string) {
    return (val0?.length > 0 || val1?.length > 0) && !this.exist(val0, val1);
  }

  private isMin(val0: number, val1: number) {
    return val0 < val1;
  }


}
